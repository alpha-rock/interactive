import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import log from '../utils/log';
import DrawLayersPass from '../passes/draw-layers-pass';
import PickLayersPass from '../passes/pick-layers-pass';
import getPixelRatio from '../utils/get-pixel-ratio';
import PostProcessEffect from '../effects/post-process-effect';
import { Framebuffer } from '@luma.gl/core';
var LOG_PRIORITY_DRAW = 2;

var DeckRenderer = function () {
  function DeckRenderer(gl) {
    _classCallCheck(this, DeckRenderer);

    this.gl = gl;
    this.pixelRatio = null;
    this.layerFilter = null;
    this.drawPickingColors = false;
    this.drawLayersPass = new DrawLayersPass(gl);
    this.pickLayersPass = new PickLayersPass(gl);
    this.renderCount = 0;
    this._needsRedraw = 'Initial render';
    this.screenBuffer = null;
    this.offscreenBuffer = null;
    this.lastPostProcessEffect = null;
  }

  _createClass(DeckRenderer, [{
    key: "setProps",
    value: function setProps(props) {
      if ('useDevicePixels' in props) {
        this.pixelRatio = getPixelRatio(props.useDevicePixels);
      }

      if ('layerFilter' in props) {
        if (this.layerFilter !== props.layerFilter) {
          this.layerFilter = props.layerFilter;
          this._needsRedraw = 'layerFilter changed';
        }
      }

      if ('drawPickingColors' in props) {
        if (this.drawPickingColors !== props.drawPickingColors) {
          this.drawPickingColors = props.drawPickingColors;
          this._needsRedraw = 'drawPickingColors changed';
        }
      }

      var pixelRatio = this.pixelRatio,
          layerFilter = this.layerFilter;
      this.drawLayersPass.setProps({
        pixelRatio: pixelRatio,
        layerFilter: layerFilter
      });
      this.pickLayersPass.setProps({
        pixelRatio: pixelRatio,
        layerFilter: layerFilter
      });
    }
  }, {
    key: "renderLayers",
    value: function renderLayers(_ref) {
      var _this = this;

      var layers = _ref.layers,
          viewports = _ref.viewports,
          activateViewport = _ref.activateViewport,
          views = _ref.views,
          _ref$redrawReason = _ref.redrawReason,
          redrawReason = _ref$redrawReason === void 0 ? 'unknown reason' : _ref$redrawReason,
          _ref$clearCanvas = _ref.clearCanvas,
          clearCanvas = _ref$clearCanvas === void 0 ? true : _ref$clearCanvas,
          _ref$effects = _ref.effects,
          effects = _ref$effects === void 0 ? [] : _ref$effects,
          pass = _ref.pass,
          stats = _ref.stats;
      var layerPass = this.drawPickingColors ? this.pickLayersPass : this.drawLayersPass;
      var effectProps = this.prepareEffects({
        layers: layers,
        viewports: viewports,
        onViewportActive: activateViewport,
        views: views,
        effects: effects,
        pixelRatio: this.pixelRatio
      });
      var outputBuffer = this.lastPostProcessEffect ? this.screenBuffer : Framebuffer.getDefaultFramebuffer(this.gl);
      var renderStats = layerPass.render({
        layers: layers,
        viewports: viewports,
        views: views,
        onViewportActive: activateViewport,
        redrawReason: redrawReason,
        clearCanvas: clearCanvas,
        effects: effects,
        effectProps: effectProps,
        outputBuffer: outputBuffer
      });
      this.postRender(effects);
      this.renderCount++;

      if (log.priority >= LOG_PRIORITY_DRAW) {
        renderStats.forEach(function (status) {
          _this.logRenderStats({
            status: status,
            pass: pass,
            redrawReason: redrawReason,
            stats: stats,
            renderStats: renderStats
          });
        });
      }
    }
  }, {
    key: "needsRedraw",
    value: function needsRedraw() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        clearRedrawFlags: false
      };
      var redraw = this._needsRedraw;

      if (opts.clearRedrawFlags) {
        this._needsRedraw = false;
      }

      return redraw;
    }
  }, {
    key: "finalize",
    value: function finalize() {
      if (this.screenBuffer) {
        this.screenBuffer.delete();
        this.screenBuffer = null;
      }

      if (this.offscreenBuffer) {
        this.offscreenBuffer.delete();
        this.offscreenBuffer = null;
      }
    }
  }, {
    key: "prepareEffects",
    value: function prepareEffects(params) {
      var effects = params.effects;
      var effectProps = {};
      this.lastPostProcessEffect = null;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = effects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var effect = _step.value;
          Object.assign(effectProps, effect.prepare(this.gl, params));

          if (effect instanceof PostProcessEffect) {
            this.lastPostProcessEffect = effect;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (this.lastPostProcessEffect) {
        this.prepareRenderBuffers();
      }

      return effectProps;
    }
  }, {
    key: "prepareRenderBuffers",
    value: function prepareRenderBuffers() {
      if (!this.screenBuffer) {
        this.screenBuffer = new Framebuffer(this.gl);
      }

      this.screenBuffer.resize();

      if (!this.offscreenBuffer) {
        this.offscreenBuffer = new Framebuffer(this.gl);
      }

      this.offscreenBuffer.resize();
    }
  }, {
    key: "postRender",
    value: function postRender(effects) {
      var params = {
        inputBuffer: this.screenBuffer,
        outputBuffer: this.offscreenBuffer,
        target: null
      };
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = effects[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var effect = _step2.value;

          if (effect instanceof PostProcessEffect) {
            if (effect === this.lastPostProcessEffect) {
              Object.assign(params, {
                target: Framebuffer.getDefaultFramebuffer(this.gl)
              });
              params = effect.render(params);
              break;
            }

            params = effect.render(params);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "logRenderStats",
    value: function logRenderStats(_ref2) {
      var renderStats = _ref2.renderStats,
          pass = _ref2.pass,
          redrawReason = _ref2.redrawReason,
          stats = _ref2.stats;
      var totalCount = renderStats.totalCount,
          visibleCount = renderStats.visibleCount,
          compositeCount = renderStats.compositeCount,
          pickableCount = renderStats.pickableCount;
      var primitiveCount = totalCount - compositeCount;
      var hiddenCount = primitiveCount - visibleCount;
      var message = '';
      message += "RENDER #".concat(this.renderCount, " ").concat(visibleCount, " (of ").concat(totalCount, " layers) to ").concat(pass, " because ").concat(redrawReason, " ");

      if (log.priority > LOG_PRIORITY_DRAW) {
        message += "(".concat(hiddenCount, " hidden, ").concat(compositeCount, " composite ").concat(pickableCount, " pickable)");
      }

      log.log(LOG_PRIORITY_DRAW, message)();

      if (stats) {
        stats.get('Redraw Layers').add(visibleCount);
      }
    }
  }]);

  return DeckRenderer;
}();

export { DeckRenderer as default };
//# sourceMappingURL=deck-renderer.js.map