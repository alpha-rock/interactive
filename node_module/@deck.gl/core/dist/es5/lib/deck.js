"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _layerManager = _interopRequireDefault(require("./layer-manager"));

var _viewManager = _interopRequireDefault(require("./view-manager"));

var _mapView = _interopRequireDefault(require("../views/map-view"));

var _effectManager = _interopRequireDefault(require("./effect-manager"));

var _effect = _interopRequireDefault(require("./effect"));

var _deckRenderer = _interopRequireDefault(require("./deck-renderer"));

var _deckPicker = _interopRequireDefault(require("./deck-picker"));

var _log = _interopRequireDefault(require("../utils/log"));

var _init = _interopRequireDefault(require("./init"));

var _core = require("@luma.gl/core");

var _probe = require("probe.gl");

var _mjolnir = require("mjolnir.js");

var _assert = _interopRequireDefault(require("../utils/assert"));

var _constants = require("./constants");

function noop() {}

var getCursor = function getCursor(_ref) {
  var isDragging = _ref.isDragging;
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
    effects: PropTypes.arrayOf(PropTypes.instanceOf(_effect.default)),
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

var defaultProps = {
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
  getCursor: getCursor,
  debug: false,
  drawPickingColors: false
};

var Deck = function () {
  function Deck(props) {
    (0, _classCallCheck2.default)(this, Deck);
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
      _log.default.warn('IE 11 support will be deprecated in v8.0')();
    }

    if (!props.gl) {
      if (typeof document !== 'undefined') {
        this.canvas = this._createCanvas(props);
      }
    }

    this.animationLoop = this._createAnimationLoop(props);
    this.stats = new _probe.Stats({
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

  (0, _createClass2.default)(Deck, [{
    key: "finalize",
    value: function finalize() {
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
  }, {
    key: "setProps",
    value: function setProps(props) {
      this.stats.get('setProps Time').timeStart();

      if ('onLayerHover' in props) {
        _log.default.removed('onLayerHover', 'onHover')();
      }

      if ('onLayerClick' in props) {
        _log.default.removed('onLayerClick', 'onClick')();
      }

      props = Object.assign({}, this.props, props);
      this.props = props;

      this._setCanvasSize(props);

      var newProps = Object.assign({}, props, {
        views: this._getViews(this.props),
        width: this.width,
        height: this.height
      });

      var viewState = this._getViewState(props);

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
  }, {
    key: "needsRedraw",
    value: function needsRedraw() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        clearRedrawFlags: false
      };

      if (this.props._animate) {
        return 'Deck._animate';
      }

      var redraw = this._needsRedraw;

      if (opts.clearRedrawFlags) {
        this._needsRedraw = false;
      }

      var viewManagerNeedsRedraw = this.viewManager.needsRedraw(opts);
      var layerManagerNeedsRedraw = this.layerManager.needsRedraw(opts);
      var effectManagerNeedsRedraw = this.effectManager.needsRedraw(opts);
      var deckRendererNeedsRedraw = this.deckRenderer.needsRedraw(opts);
      redraw = redraw || viewManagerNeedsRedraw || layerManagerNeedsRedraw || effectManagerNeedsRedraw || deckRendererNeedsRedraw;
      return redraw;
    }
  }, {
    key: "redraw",
    value: function redraw(force) {
      if (!this.layerManager) {
        return;
      }

      var redrawReason = force || this.needsRedraw({
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
  }, {
    key: "getViews",
    value: function getViews() {
      return this.viewManager.views;
    }
  }, {
    key: "getViewports",
    value: function getViewports(rect) {
      return this.viewManager.getViewports(rect);
    }
  }, {
    key: "pickObject",
    value: function pickObject(_ref2) {
      var x = _ref2.x,
          y = _ref2.y,
          _ref2$radius = _ref2.radius,
          radius = _ref2$radius === void 0 ? 0 : _ref2$radius,
          _ref2$layerIds = _ref2.layerIds,
          layerIds = _ref2$layerIds === void 0 ? null : _ref2$layerIds;
      this.stats.get('Pick Count').incrementCount();
      this.stats.get('pickObject Time').timeStart();
      var layers = this.layerManager.getLayers({
        layerIds: layerIds
      });
      var activateViewport = this.layerManager.activateViewport;
      var selectedInfos = this.deckPicker.pickObject({
        x: x,
        y: y,
        radius: radius,
        layers: layers,
        viewports: this.getViewports({
          x: x,
          y: y
        }),
        activateViewport: activateViewport,
        mode: 'query',
        depth: 1
      }).result;
      this.stats.get('pickObject Time').timeEnd();
      return selectedInfos.length ? selectedInfos[0] : null;
    }
  }, {
    key: "pickMultipleObjects",
    value: function pickMultipleObjects(_ref3) {
      var x = _ref3.x,
          y = _ref3.y,
          _ref3$radius = _ref3.radius,
          radius = _ref3$radius === void 0 ? 0 : _ref3$radius,
          _ref3$layerIds = _ref3.layerIds,
          layerIds = _ref3$layerIds === void 0 ? null : _ref3$layerIds,
          _ref3$depth = _ref3.depth,
          depth = _ref3$depth === void 0 ? 10 : _ref3$depth;
      this.stats.get('Pick Count').incrementCount();
      this.stats.get('pickMultipleObjects Time').timeStart();
      var layers = this.layerManager.getLayers({
        layerIds: layerIds
      });
      var activateViewport = this.layerManager.activateViewport;
      var selectedInfos = this.deckPicker.pickObject({
        x: x,
        y: y,
        radius: radius,
        layers: layers,
        viewports: this.getViewports({
          x: x,
          y: y
        }),
        activateViewport: activateViewport,
        mode: 'query',
        depth: depth
      }).result;
      this.stats.get('pickMultipleObjects Time').timeEnd();
      return selectedInfos;
    }
  }, {
    key: "pickObjects",
    value: function pickObjects(_ref4) {
      var x = _ref4.x,
          y = _ref4.y,
          _ref4$width = _ref4.width,
          width = _ref4$width === void 0 ? 1 : _ref4$width,
          _ref4$height = _ref4.height,
          height = _ref4$height === void 0 ? 1 : _ref4$height,
          _ref4$layerIds = _ref4.layerIds,
          layerIds = _ref4$layerIds === void 0 ? null : _ref4$layerIds;
      this.stats.get('Pick Count').incrementCount();
      this.stats.get('pickObjects Time').timeStart();
      var layers = this.layerManager.getLayers({
        layerIds: layerIds
      });
      var activateViewport = this.layerManager.activateViewport;
      var infos = this.deckPicker.pickObjects({
        x: x,
        y: y,
        width: width,
        height: height,
        layers: layers,
        viewports: this.getViewports({
          x: x,
          y: y,
          width: width,
          height: height
        }),
        activateViewport: activateViewport
      });
      this.stats.get('pickObjects Time').timeEnd();
      return infos;
    }
  }, {
    key: "_createCanvas",
    value: function _createCanvas(props) {
      var canvas = props.canvas;

      if (typeof canvas === 'string') {
        canvas = document.getElementById(canvas);
        (0, _assert.default)(canvas);
      }

      if (!canvas) {
        canvas = document.createElement('canvas');
        var parent = props.parent || document.body;
        parent.appendChild(canvas);
      }

      var id = props.id,
          style = props.style;
      canvas.id = id;
      Object.assign(canvas.style, style);
      return canvas;
    }
  }, {
    key: "_setCanvasSize",
    value: function _setCanvasSize(props) {
      if (!this.canvas) {
        return;
      }

      var width = props.width,
          height = props.height;

      if (width || width === 0) {
        width = Number.isFinite(width) ? "".concat(width, "px") : width;
        this.canvas.style.width = width;
      }

      if (height || height === 0) {
        height = Number.isFinite(height) ? "".concat(height, "px") : height;
        this.canvas.style.position = 'absolute';
        this.canvas.style.height = height;
      }
    }
  }, {
    key: "_updateCanvasSize",
    value: function _updateCanvasSize() {
      if (this._checkForCanvasSizeChange()) {
        var width = this.width,
            height = this.height;
        this.viewManager.setProps({
          width: width,
          height: height
        });
        this.props.onResize({
          width: this.width,
          height: this.height
        });
      }
    }
  }, {
    key: "_checkForCanvasSizeChange",
    value: function _checkForCanvasSizeChange() {
      var canvas = this.canvas;

      if (!canvas) {
        return false;
      }

      var newWidth = canvas.clientWidth || canvas.width;
      var newHeight = canvas.clientHeight || canvas.height;

      if (newWidth !== this.width || newHeight !== this.height) {
        this.width = newWidth;
        this.height = newHeight;
        return true;
      }

      return false;
    }
  }, {
    key: "_createAnimationLoop",
    value: function _createAnimationLoop(props) {
      var _this = this;

      var width = props.width,
          height = props.height,
          gl = props.gl,
          glOptions = props.glOptions,
          debug = props.debug,
          useDevicePixels = props.useDevicePixels,
          autoResizeDrawingBuffer = props.autoResizeDrawingBuffer;
      return new _core.AnimationLoop({
        width: width,
        height: height,
        useDevicePixels: useDevicePixels,
        autoResizeDrawingBuffer: autoResizeDrawingBuffer,
        gl: gl,
        onCreateContext: function onCreateContext(opts) {
          return (0, _core.createGLContext)(Object.assign({}, glOptions, opts, {
            canvas: _this.canvas,
            debug: debug
          }));
        },
        onInitialize: this._onRendererInitialized,
        onRender: this._onRenderFrame,
        onBeforeRender: props.onBeforeRender,
        onAfterRender: props.onAfterRender
      });
    }
  }, {
    key: "_getViewState",
    value: function _getViewState(props) {
      return props.viewState || this.viewState;
    }
  }, {
    key: "_getViews",
    value: function _getViews(props) {
      var views = props.views || [new _mapView.default({
        id: 'default-view'
      })];
      views = Array.isArray(views) ? views : [views];

      if (views.length && props.controller) {
        views[0].props.controller = props.controller;
      }

      return views;
    }
  }, {
    key: "_onPointerMove",
    value: function _onPointerMove(event) {
      var _pickRequest = this._pickRequest;

      if (event.type === 'pointerleave') {
        _pickRequest.x = -1;
        _pickRequest.y = -1;
        _pickRequest.radius = 0;
      } else if (event.leftButton || event.rightButton) {
        return;
      } else {
        var pos = event.offsetCenter;

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
  }, {
    key: "_pickAndCallback",
    value: function _pickAndCallback() {
      var _pickRequest = this._pickRequest;

      if (_pickRequest.mode) {
        var _this$deckPicker$pick = this.deckPicker.pickObject(Object.assign({
          layers: this.layerManager.getLayers(),
          viewports: this.getViewports(_pickRequest),
          activateViewport: this.layerManager.activateViewport,
          depth: 1
        }, _pickRequest)),
            result = _this$deckPicker$pick.result,
            emptyInfo = _this$deckPicker$pick.emptyInfo;

        if (_pickRequest.callback) {
          var pickedInfo = result.find(function (info) {
            return info.index >= 0;
          }) || emptyInfo;

          _pickRequest.callback(pickedInfo, _pickRequest.event);
        }

        _pickRequest.mode = null;
      }
    }
  }, {
    key: "_updateCursor",
    value: function _updateCursor() {
      if (this.canvas) {
        this.canvas.style.cursor = this.props.getCursor(this.interactiveState);
      }
    }
  }, {
    key: "_updateAnimationProps",
    value: function _updateAnimationProps(animationProps) {
      this.layerManager.context.animationProps = animationProps;
    }
  }, {
    key: "_setGLContext",
    value: function _setGLContext(gl) {
      if (this.layerManager) {
        return;
      }

      if (!this.canvas) {
        this.canvas = gl.canvas;
        (0, _core.trackContextState)(gl, {
          enable: true,
          copyState: true
        });
      }

      (0, _core.setParameters)(gl, {
        blend: true,
        blendFunc: [770, 771, 1, 771],
        polygonOffsetFill: true,
        depthTest: true,
        depthFunc: 515
      });
      this.props.onWebGLInitialized(gl);
      this.eventManager = new _mjolnir.EventManager(gl.canvas, {
        touchAction: this.props.touchAction,
        events: {
          pointerdown: this._onPointerDown,
          pointermove: this._onPointerMove,
          pointerleave: this._onPointerMove
        }
      });

      for (var eventType in _constants.EVENTS) {
        this.eventManager.on(eventType, this._onEvent);
      }

      this.viewManager = new _viewManager.default({
        eventManager: this.eventManager,
        onViewStateChange: this._onViewStateChange,
        onInteractiveStateChange: this._onInteractiveStateChange,
        views: this._getViews(this.props),
        viewState: this._getViewState(this.props),
        width: this.width,
        height: this.height
      });
      (0, _assert.default)(this.viewManager);
      var viewport = this.viewManager.getViewports()[0];
      this.layerManager = new _layerManager.default(gl, {
        deck: this,
        stats: this.stats,
        viewport: viewport
      });
      this.effectManager = new _effectManager.default();
      this.deckRenderer = new _deckRenderer.default(gl);
      this.deckPicker = new _deckPicker.default(gl);
      this.setProps(this.props);

      this._updateCanvasSize();

      this.props.onLoad();
    }
  }, {
    key: "_drawLayers",
    value: function _drawLayers(redrawReason, renderOptions) {
      var gl = this.layerManager.context.gl;
      (0, _core.setParameters)(gl, this.props.parameters);
      this.props.onBeforeRender({
        gl: gl
      });
      var layers = this.layerManager.getLayers();
      var activateViewport = this.layerManager.activateViewport;
      this.deckRenderer.renderLayers(Object.assign({
        layers: layers,
        viewports: this.viewManager.getViewports(),
        activateViewport: activateViewport,
        views: this.viewManager.getViews(),
        pass: 'screen',
        redrawReason: redrawReason,
        effects: this.effectManager.getEffects()
      }, renderOptions));
      this.props.onAfterRender({
        gl: gl
      });
    }
  }, {
    key: "_onRendererInitialized",
    value: function _onRendererInitialized(_ref5) {
      var gl = _ref5.gl;

      this._setGLContext(gl);
    }
  }, {
    key: "_onRenderFrame",
    value: function _onRenderFrame(animationProps) {
      this._getFrameStats();

      if (this._metricsCounter++ % 60 === 0) {
        this._getMetrics();

        this.stats.reset();

        _log.default.table(3, this.metrics)();

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
  }, {
    key: "_onViewStateChange",
    value: function _onViewStateChange(params) {
      var viewState = this.props.onViewStateChange(params) || params.viewState;

      if (this.viewState) {
        this.viewState[params.viewId] = viewState;
        this.viewManager.setProps({
          viewState: viewState
        });
      }
    }
  }, {
    key: "_onInteractiveStateChange",
    value: function _onInteractiveStateChange(_ref6) {
      var _ref6$isDragging = _ref6.isDragging,
          isDragging = _ref6$isDragging === void 0 ? false : _ref6$isDragging;

      if (isDragging !== this.interactiveState.isDragging) {
        this.interactiveState.isDragging = isDragging;
      }
    }
  }, {
    key: "_onEvent",
    value: function _onEvent(event) {
      var eventOptions = _constants.EVENTS[event.type];
      var pos = event.offsetCenter;

      if (!eventOptions || !pos) {
        return;
      }

      var layers = this.layerManager.getLayers();
      var info = this.deckPicker.getLastPickedObject({
        x: pos.x,
        y: pos.y,
        layers: layers,
        viewports: this.getViewports(pos)
      }, this._lastPointerDownInfo);
      var layer = info.layer;
      var layerHandler = layer && (layer[eventOptions.handler] || layer.props[eventOptions.handler]);
      var rootHandler = this.props[eventOptions.handler];
      var handled = false;

      if (layerHandler) {
        handled = layerHandler.call(layer, info, event);
      }

      if (!handled && rootHandler) {
        rootHandler(info, event);
      }
    }
  }, {
    key: "_onPointerDown",
    value: function _onPointerDown(event) {
      var pos = event.offsetCenter;
      this._lastPointerDownInfo = this.pickObject({
        x: pos.x,
        y: pos.y,
        radius: this.props.pickingRadius
      });
    }
  }, {
    key: "_getFrameStats",
    value: function _getFrameStats() {
      var stats = this.stats;
      stats.get('frameRate').timeEnd();
      stats.get('frameRate').timeStart();
      var animationLoopStats = this.animationLoop.stats;
      stats.get('GPU Time').addTime(animationLoopStats.get('GPU Time').lastTiming);
      stats.get('CPU Time').addTime(animationLoopStats.get('CPU Time').lastTiming);
    }
  }, {
    key: "_getMetrics",
    value: function _getMetrics() {
      var metrics = this.metrics,
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

      var memoryStats = _core.lumaStats.get('Memory Usage');

      metrics.bufferMemory = memoryStats.get('Buffer Memory').count;
      metrics.textureMemory = memoryStats.get('Texture Memory').count;
      metrics.renderbufferMemory = memoryStats.get('Renderbuffer Memory').count;
      metrics.gpuMemory = memoryStats.get('GPU Memory').count;
    }
  }]);
  return Deck;
}();

exports.default = Deck;

function isIE11() {
  if ((typeof window === "undefined" ? "undefined" : (0, _typeof2.default)(window)) === undefined) {
    return false;
  }

  var navigator = window.navigator || {};
  var userAgent = navigator.userAgent || '';
  return userAgent.indexOf('Trident/') !== -1;
}

Deck.getPropTypes = getPropTypes;
Deck.defaultProps = defaultProps;
Deck.VERSION = _init.default.VERSION;
//# sourceMappingURL=deck.js.map