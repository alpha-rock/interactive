"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _core = require("@deck.gl/core");

var _shaderModule = _interopRequireDefault(require("./shader-module"));

var defaultProps = {
  getBrushingTarget: {
    type: 'accessor',
    value: [0, 0]
  },
  brushingTarget: 'source',
  brushingEnabled: true,
  brushingRadius: 10000
};

var BrushingExtension = function (_LayerExtension) {
  (0, _inherits2.default)(BrushingExtension, _LayerExtension);

  function BrushingExtension() {
    (0, _classCallCheck2.default)(this, BrushingExtension);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(BrushingExtension).apply(this, arguments));
  }

  (0, _createClass2.default)(BrushingExtension, [{
    key: "getShaders",
    value: function getShaders(extension) {
      return {
        modules: [_shaderModule.default]
      };
    }
  }, {
    key: "initializeState",
    value: function initializeState(context, extension) {
      var _this = this;

      var attributeManager = this.getAttributeManager();

      if (attributeManager) {
        attributeManager.add({
          brushingTargets: {
            size: 2,
            accessor: 'getBrushingTarget',
            update: !this.props.getBrushingTarget && extension.useConstantTargetPositions,
            shaderAttributes: {
              brushingTargets: {
                divisor: 0
              },
              instanceBrushingTargets: {
                divisor: 1
              }
            }
          }
        });
      }

      extension.onMouseMove = function () {
        _this.getCurrentLayer().setNeedsRedraw();
      };

      if (this.context.deck) {
        this.context.deck.eventManager.on({
          pointermove: extension.onMouseMove,
          pointerleave: extension.onMouseMove
        });
      }
    }
  }, {
    key: "finalizeState",
    value: function finalizeState(extension) {
      if (this.context.deck) {
        this.context.deck.eventManager.off({
          pointermove: extension.onMouseMove,
          pointerleave: extension.onMouseMove
        });
      }
    }
  }, {
    key: "useConstantTargetPositions",
    value: function useConstantTargetPositions(attribute) {
      attribute.constant = true;
      attribute.value = new Float32Array(2);
      return;
    }
  }]);
  return BrushingExtension;
}(_core.LayerExtension);

exports.default = BrushingExtension;
BrushingExtension.extensionName = 'BrushingExtension';
BrushingExtension.defaultProps = defaultProps;
//# sourceMappingURL=brushing.js.map