import LayerManager from './layer-manager';
import ViewManager from './view-manager';
import MapView from '../views/map-view';
import EffectManager from './effect-manager';
import Effect from './effect';
import DeckRenderer from './deck-renderer';
import DeckPicker from './deck-picker';
import log from '../utils/log';
import deckGlobal from './init';
import { AnimationLoop, createGLContext, trackContextState, setParameters, lumaStats } from '@luma.gl/core';
import { Stats } from 'probe.gl';
import { EventManager } from 'mjolnir.js';
import assert from '../utils/assert';
import { EVENTS } from './constants';

function noop() {}

const getCursor = (_ref) => {
  let isDragging = _ref.isDragging;
  return isDragging ? 'grabbing' : 'grab';
};

function getPropTypes(PropTypes) {
  return {
    id: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    layers: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    layerFilter: PropTypes.func,
    views: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    viewState: PropTypes.object,
    effects: PropTypes.arrayOf(PropTypes.instanceOf(Effect)),
    controller: PropTypes.oneOfType([PropTypes.func, PropTypes.bool, PropTypes.object]),
    gl: PropTypes.object,
    glOptions: PropTypes.object,
    parameters: PropTypes.object,
    pickingRadius: PropTypes.number,
    useDevicePixels: PropTypes.bool,
    touchAction: PropTypes.string,
    onWebGLInitialized: PropTypes.func,
    onResize: PropTypes.func,
    onViewStateChange: PropTypes.func,
    onBeforeRender: PropTypes.func,
    onAfterRender: PropTypes.func,
    onLoad: PropTypes.func,
    debug: PropTypes.bool,
    drawPickingColors: PropTypes.bool,
    _animate: PropTypes.bool
  };
}

const defaultProps = {
  id: 'deckgl-overlay',
  width: '100%',
  height: '100%',
  pickingRadius: 0,
  layerFilter: null,
  glOptions: {},
  gl: null,
  layers: [],
  effects: [],
  views: null,
  controller: null,
  useDevicePixels: true,
  touchAction: 'none',
  _animate: false,
  onWebGLInitialized: noop,
  onResize: noop,
  onViewStateChange: noop,
  onBeforeRender: noop,
  onAfterRender: noop,
  onLoad: noop,
  _onMetrics: null,
  getCursor,
  debug: false,
  drawPickingColors: false
};
export default class Deck {
  constructor(props) {
    props = Object.assign({}, defaultProps, props);
    this.width = 0;
    this.height = 0;
    this.viewManager = null;
    this.layerManager = null;
    this.effectManager = null;
    this.deckRenderer = null;
    this.deckPicker = null;
    this._needsRedraw = true;
    this._pickRequest = {};
    this._lastPointerDownInfo = null;
    this.viewState = props.initialViewState || null;
    this.interactiveState = {
      isDragging: false
    };
    this._onEvent = this._onEvent.bind(this);
    this._onPointerDown = this._onPointerDown.bind(this);
    this._onPointerMove = this._onPointerMove.bind(this);
    this._pickAndCallback = this._pickAndCallback.bind(this);
    this._onRendererInitialized = this._onRendererInitialized.bind(this);
    this._onRenderFrame = this._onRenderFrame.bind(this);
    this._onViewStateChange = this._onViewStateChange.bind(this);
    this._onInteractiveStateChange = this._onInteractiveStateChange.bind(this);

    if (isIE11()) {
      log.warn('IE 11 support will be deprecated in v8.0')();
    }

    if (!props.gl) {
      if (typeof document !== 'undefined') {
        this.canvas = this._createCanvas(props);
      }
    }

    this.animationLoop = this._createAnimationLoop(props);
    this.stats = new Stats({
      id: 'deck.gl'
    });
    this.metrics = {
      fps: 0,
      setPropsTime: 0,
      updateAttributesTime: 0,
      framesRedrawn: 0,
      pickTime: 0,
      pickCount: 0,
      gpuTime: 0,
      gpuTimePerFrame: 0,
      cpuTime: 0,
      cpuTimePerFrame: 0,
      bufferMemory: 0,
      textureMemory: 0,
      renderbufferMemory: 0,
      gpuMemory: 0
    };
    this._metricsCounter = 0;
    this.setProps(props);
    this.animationLoop.start();
  }

  finalize() {
    this.animationLoop.stop();
    this.animationLoop = null;
    this._lastPointerDownInfo = null;

    if (this.layerManager) {
      this.layerManager.finalize();
      this.layerManager = null;
    }

    if (this.viewManager) {
      this.viewManager.finalize();
      this.viewManager = null;
    }

    if (this.effectManager) {
      this.effectManager.finalize();
      this.effectManager = null;
    }

    if (this.deckRenderer) {
      this.deckRenderer.finalize();
      this.deckRenderer = null;
    }

    if (this.eventManager) {
      this.eventManager.destroy();
    }

    if (!this.props.canvas && !this.props.gl && this.canvas) {
      this.canvas.parentElement.removeChild(this.canvas);
      this.canvas = null;
    }
  }

  setProps(props) {
    this.stats.get('setProps Time').timeStart();

    if ('onLayerHover' in props) {
      log.removed('onLayerHover', 'onHover')();
    }

    if ('onLayerClick' in props) {
      log.removed('onLayerClick', 'onClick')();
    }

    props = Object.assign({}, this.props, props);
    this.props = props;

    this._setCanvasSize(props);

    const newProps = Object.assign({}, props, {
      views: this._getViews(this.props),
      width: this.width,
      height: this.height
    });

    const viewState = this._getViewState(props);

    if (viewState) {
      newProps.viewState = viewState;
    }

    if (this.viewManager) {
      this.viewManager.setProps(newProps);
    }

    if (this.layerManager) {
      this.layerManager.setProps(newProps);
    }

    if (this.effectManager) {
      this.effectManager.setProps(newProps);
    }

    if (this.animationLoop) {
      this.animationLoop.setProps(newProps);
    }

    if (this.deckRenderer) {
      this.deckRenderer.setProps(newProps);
    }

    if (this.deckPicker) {
      this.deckPicker.setProps(newProps);
    }

    this.stats.get('setProps Time').timeEnd();
  }

  needsRedraw() {
    let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      clearRedrawFlags: false
    };

    if (this.props._animate) {
      return 'Deck._animate';
    }

    let redraw = this._needsRedraw;

    if (opts.clearRedrawFlags) {
      this._needsRedraw = false;
    }

    const viewManagerNeedsRedraw = this.viewManager.needsRedraw(opts);
    const layerManagerNeedsRedraw = this.layerManager.needsRedraw(opts);
    const effectManagerNeedsRedraw = this.effectManager.needsRedraw(opts);
    const deckRendererNeedsRedraw = this.deckRenderer.needsRedraw(opts);
    redraw = redraw || viewManagerNeedsRedraw || layerManagerNeedsRedraw || effectManagerNeedsRedraw || deckRendererNeedsRedraw;
    return redraw;
  }

  redraw(force) {
    if (!this.layerManager) {
      return;
    }

    const redrawReason = force || this.needsRedraw({
      clearRedrawFlags: true
    });

    if (!redrawReason) {
      return;
    }

    this.stats.get('Redraw Count').incrementCount();

    if (this.props._customRender) {
      this.props._customRender(redrawReason);
    } else {
      this._drawLayers(redrawReason);
    }
  }

  getViews() {
    return this.viewManager.views;
  }

  getViewports(rect) {
    return this.viewManager.getViewports(rect);
  }

  pickObject(_ref2) {
    let x = _ref2.x,
        y = _ref2.y,
        _ref2$radius = _ref2.radius,
        radius = _ref2$radius === void 0 ? 0 : _ref2$radius,
        _ref2$layerIds = _ref2.layerIds,
        layerIds = _ref2$layerIds === void 0 ? null : _ref2$layerIds;
    this.stats.get('Pick Count').incrementCount();
    this.stats.get('pickObject Time').timeStart();
    const layers = this.layerManager.getLayers({
      layerIds
    });
    const activateViewport = this.layerManager.activateViewport;
    const selectedInfos = this.deckPicker.pickObject({
      x,
      y,
      radius,
      layers,
      viewports: this.getViewports({
        x,
        y
      }),
      activateViewport,
      mode: 'query',
      depth: 1
    }).result;
    this.stats.get('pickObject Time').timeEnd();
    return selectedInfos.length ? selectedInfos[0] : null;
  }

  pickMultipleObjects(_ref3) {
    let x = _ref3.x,
        y = _ref3.y,
        _ref3$radius = _ref3.radius,
        radius = _ref3$radius === void 0 ? 0 : _ref3$radius,
        _ref3$layerIds = _ref3.layerIds,
        layerIds = _ref3$layerIds === void 0 ? null : _ref3$layerIds,
        _ref3$depth = _ref3.depth,
        depth = _ref3$depth === void 0 ? 10 : _ref3$depth;
    this.stats.get('Pick Count').incrementCount();
    this.stats.get('pickMultipleObjects Time').timeStart();
    const layers = this.layerManager.getLayers({
      layerIds
    });
    const activateViewport = this.layerManager.activateViewport;
    const selectedInfos = this.deckPicker.pickObject({
      x,
      y,
      radius,
      layers,
      viewports: this.getViewports({
        x,
        y
      }),
      activateViewport,
      mode: 'query',
      depth
    }).result;
    this.stats.get('pickMultipleObjects Time').timeEnd();
    return selectedInfos;
  }

  pickObjects(_ref4) {
    let x = _ref4.x,
        y = _ref4.y,
        _ref4$width = _ref4.width,
        width = _ref4$width === void 0 ? 1 : _ref4$width,
        _ref4$height = _ref4.height,
        height = _ref4$height === void 0 ? 1 : _ref4$height,
        _ref4$layerIds = _ref4.layerIds,
        layerIds = _ref4$layerIds === void 0 ? null : _ref4$layerIds;
    this.stats.get('Pick Count').incrementCount();
    this.stats.get('pickObjects Time').timeStart();
    const layers = this.layerManager.getLayers({
      layerIds
    });
    const activateViewport = this.layerManager.activateViewport;
    const infos = this.deckPicker.pickObjects({
      x,
      y,
      width,
      height,
      layers,
      viewports: this.getViewports({
        x,
        y,
        width,
        height
      }),
      activateViewport
    });
    this.stats.get('pickObjects Time').timeEnd();
    return infos;
  }

  _createCanvas(props) {
    let canvas = props.canvas;

    if (typeof canvas === 'string') {
      canvas = document.getElementById(canvas);
      assert(canvas);
    }

    if (!canvas) {
      canvas = document.createElement('canvas');
      const parent = props.parent || document.body;
      parent.appendChild(canvas);
    }

    const id = props.id,
          style = props.style;
    canvas.id = id;
    Object.assign(canvas.style, style);
    return canvas;
  }

  _setCanvasSize(props) {
    if (!this.canvas) {
      return;
    }

    let width = props.width,
        height = props.height;

    if (width || width === 0) {
      width = Number.isFinite(width) ? `${width}px` : width;
      this.canvas.style.width = width;
    }

    if (height || height === 0) {
      height = Number.isFinite(height) ? `${height}px` : height;
      this.canvas.style.position = 'absolute';
      this.canvas.style.height = height;
    }
  }

  _updateCanvasSize() {
    if (this._checkForCanvasSizeChange()) {
      const width = this.width,
            height = this.height;
      this.viewManager.setProps({
        width,
        height
      });
      this.props.onResize({
        width: this.width,
        height: this.height
      });
    }
  }

  _checkForCanvasSizeChange() {
    const canvas = this.canvas;

    if (!canvas) {
      return false;
    }

    const newWidth = canvas.clientWidth || canvas.width;
    const newHeight = canvas.clientHeight || canvas.height;

    if (newWidth !== this.width || newHeight !== this.height) {
      this.width = newWidth;
      this.height = newHeight;
      return true;
    }

    return false;
  }

  _createAnimationLoop(props) {
    const width = props.width,
          height = props.height,
          gl = props.gl,
          glOptions = props.glOptions,
          debug = props.debug,
          useDevicePixels = props.useDevicePixels,
          autoResizeDrawingBuffer = props.autoResizeDrawingBuffer;
    return new AnimationLoop({
      width,
      height,
      useDevicePixels,
      autoResizeDrawingBuffer,
      gl,
      onCreateContext: opts => createGLContext(Object.assign({}, glOptions, opts, {
        canvas: this.canvas,
        debug
      })),
      onInitialize: this._onRendererInitialized,
      onRender: this._onRenderFrame,
      onBeforeRender: props.onBeforeRender,
      onAfterRender: props.onAfterRender
    });
  }

  _getViewState(props) {
    return props.viewState || this.viewState;
  }

  _getViews(props) {
    let views = props.views || [new MapView({
      id: 'default-view'
    })];
    views = Array.isArray(views) ? views : [views];

    if (views.length && props.controller) {
      views[0].props.controller = props.controller;
    }

    return views;
  }

  _onPointerMove(event) {
    const _pickRequest = this._pickRequest;

    if (event.type === 'pointerleave') {
      _pickRequest.x = -1;
      _pickRequest.y = -1;
      _pickRequest.radius = 0;
    } else if (event.leftButton || event.rightButton) {
      return;
    } else {
      const pos = event.offsetCenter;

      if (!pos) {
        return;
      }

      _pickRequest.x = pos.x;
      _pickRequest.y = pos.y;
      _pickRequest.radius = this.props.pickingRadius;
    }

    if (this.layerManager) {
      this.layerManager.context.mousePosition = {
        x: _pickRequest.x,
        y: _pickRequest.y
      };
    }

    _pickRequest.callback = this.props.onHover;
    _pickRequest.event = event;
    _pickRequest.mode = 'hover';
  }

  _pickAndCallback() {
    const _pickRequest = this._pickRequest;

    if (_pickRequest.mode) {
      const _this$deckPicker$pick = this.deckPicker.pickObject(Object.assign({
        layers: this.layerManager.getLayers(),
        viewports: this.getViewports(_pickRequest),
        activateViewport: this.layerManager.activateViewport,
        depth: 1
      }, _pickRequest)),
            result = _this$deckPicker$pick.result,
            emptyInfo = _this$deckPicker$pick.emptyInfo;

      if (_pickRequest.callback) {
        const pickedInfo = result.find(info => info.index >= 0) || emptyInfo;

        _pickRequest.callback(pickedInfo, _pickRequest.event);
      }

      _pickRequest.mode = null;
    }
  }

  _updateCursor() {
    if (this.canvas) {
      this.canvas.style.cursor = this.props.getCursor(this.interactiveState);
    }
  }

  _updateAnimationProps(animationProps) {
    this.layerManager.context.animationProps = animationProps;
  }

  _setGLContext(gl) {
    if (this.layerManager) {
      return;
    }

    if (!this.canvas) {
      this.canvas = gl.canvas;
      trackContextState(gl, {
        enable: true,
        copyState: true
      });
    }

    setParameters(gl, {
      blend: true,
      blendFunc: [770, 771, 1, 771],
      polygonOffsetFill: true,
      depthTest: true,
      depthFunc: 515
    });
    this.props.onWebGLInitialized(gl);
    this.eventManager = new EventManager(gl.canvas, {
      touchAction: this.props.touchAction,
      events: {
        pointerdown: this._onPointerDown,
        pointermove: this._onPointerMove,
        pointerleave: this._onPointerMove
      }
    });

    for (const eventType in EVENTS) {
      this.eventManager.on(eventType, this._onEvent);
    }

    this.viewManager = new ViewManager({
      eventManager: this.eventManager,
      onViewStateChange: this._onViewStateChange,
      onInteractiveStateChange: this._onInteractiveStateChange,
      views: this._getViews(this.props),
      viewState: this._getViewState(this.props),
      width: this.width,
      height: this.height
    });
    assert(this.viewManager);
    const viewport = this.viewManager.getViewports()[0];
    this.layerManager = new LayerManager(gl, {
      deck: this,
      stats: this.stats,
      viewport
    });
    this.effectManager = new EffectManager();
    this.deckRenderer = new DeckRenderer(gl);
    this.deckPicker = new DeckPicker(gl);
    this.setProps(this.props);

    this._updateCanvasSize();

    this.props.onLoad();
  }

  _drawLayers(redrawReason, renderOptions) {
    const gl = this.layerManager.context.gl;
    setParameters(gl, this.props.parameters);
    this.props.onBeforeRender({
      gl
    });
    const layers = this.layerManager.getLayers();
    const activateViewport = this.layerManager.activateViewport;
    this.deckRenderer.renderLayers(Object.assign({
      layers,
      viewports: this.viewManager.getViewports(),
      activateViewport,
      views: this.viewManager.getViews(),
      pass: 'screen',
      redrawReason,
      effects: this.effectManager.getEffects()
    }, renderOptions));
    this.props.onAfterRender({
      gl
    });
  }

  _onRendererInitialized(_ref5) {
    let gl = _ref5.gl;

    this._setGLContext(gl);
  }

  _onRenderFrame(animationProps) {
    this._getFrameStats();

    if (this._metricsCounter++ % 60 === 0) {
      this._getMetrics();

      this.stats.reset();
      log.table(3, this.metrics)();

      if (this.props._onMetrics) {
        this.props._onMetrics(this.metrics);
      }
    }

    this._updateCanvasSize();

    this._updateCursor();

    this.layerManager.updateLayers(animationProps);

    this._updateAnimationProps(animationProps);

    this._pickAndCallback();

    this.redraw(false);

    if (this.viewManager) {
      this.viewManager.updateViewStates(animationProps);
    }
  }

  _onViewStateChange(params) {
    const viewState = this.props.onViewStateChange(params) || params.viewState;

    if (this.viewState) {
      this.viewState[params.viewId] = viewState;
      this.viewManager.setProps({
        viewState
      });
    }
  }

  _onInteractiveStateChange(_ref6) {
    let _ref6$isDragging = _ref6.isDragging,
        isDragging = _ref6$isDragging === void 0 ? false : _ref6$isDragging;

    if (isDragging !== this.interactiveState.isDragging) {
      this.interactiveState.isDragging = isDragging;
    }
  }

  _onEvent(event) {
    const eventOptions = EVENTS[event.type];
    const pos = event.offsetCenter;

    if (!eventOptions || !pos) {
      return;
    }

    const layers = this.layerManager.getLayers();
    const info = this.deckPicker.getLastPickedObject({
      x: pos.x,
      y: pos.y,
      layers,
      viewports: this.getViewports(pos)
    }, this._lastPointerDownInfo);
    const layer = info.layer;
    const layerHandler = layer && (layer[eventOptions.handler] || layer.props[eventOptions.handler]);
    const rootHandler = this.props[eventOptions.handler];
    let handled = false;

    if (layerHandler) {
      handled = layerHandler.call(layer, info, event);
    }

    if (!handled && rootHandler) {
      rootHandler(info, event);
    }
  }

  _onPointerDown(event) {
    const pos = event.offsetCenter;
    this._lastPointerDownInfo = this.pickObject({
      x: pos.x,
      y: pos.y,
      radius: this.props.pickingRadius
    });
  }

  _getFrameStats() {
    const stats = this.stats;
    stats.get('frameRate').timeEnd();
    stats.get('frameRate').timeStart();
    const animationLoopStats = this.animationLoop.stats;
    stats.get('GPU Time').addTime(animationLoopStats.get('GPU Time').lastTiming);
    stats.get('CPU Time').addTime(animationLoopStats.get('CPU Time').lastTiming);
  }

  _getMetrics() {
    const metrics = this.metrics,
          stats = this.stats;
    metrics.fps = stats.get('frameRate').getHz();
    metrics.setPropsTime = stats.get('setProps Time').time;
    metrics.updateAttributesTime = stats.get('Update Attributes').time;
    metrics.framesRedrawn = stats.get('Redraw Count').count;
    metrics.pickTime = stats.get('pickObject Time').time + stats.get('pickMultipleObjects Time').time + stats.get('pickObjects Time').time;
    metrics.pickCount = stats.get('Pick Count').count;
    metrics.gpuTime = stats.get('GPU Time').time;
    metrics.cpuTime = stats.get('CPU Time').time;
    metrics.gpuTimePerFrame = stats.get('GPU Time').getAverageTime();
    metrics.cpuTimePerFrame = stats.get('CPU Time').getAverageTime();
    const memoryStats = lumaStats.get('Memory Usage');
    metrics.bufferMemory = memoryStats.get('Buffer Memory').count;
    metrics.textureMemory = memoryStats.get('Texture Memory').count;
    metrics.renderbufferMemory = memoryStats.get('Renderbuffer Memory').count;
    metrics.gpuMemory = memoryStats.get('GPU Memory').count;
  }

}

function isIE11() {
  if (typeof window === undefined) {
    return false;
  }

  const navigator = window.navigator || {};
  const userAgent = navigator.userAgent || '';
  return userAgent.indexOf('Trident/') !== -1;
}

Deck.getPropTypes = getPropTypes;
Deck.defaultProps = defaultProps;
Deck.VERSION = deckGlobal.VERSION;
//# sourceMappingURL=deck.js.map