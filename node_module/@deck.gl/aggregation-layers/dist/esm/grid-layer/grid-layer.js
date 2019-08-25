import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { CompositeLayer } from '@deck.gl/core';
import GPUGridAggregator from '../utils/gpu-grid-aggregation/gpu-grid-aggregator';
import GPUGridLayer from '../gpu-grid-layer/gpu-grid-layer';
import CPUGridLayer from '../cpu-grid-layer/cpu-grid-layer';
var defaultProps = Object.assign({}, GPUGridLayer.defaultProps, CPUGridLayer.defaultProps, {
  gpuAggregation: false
});

var GridLayer = function (_CompositeLayer) {
  _inherits(GridLayer, _CompositeLayer);

  function GridLayer() {
    _classCallCheck(this, GridLayer);

    return _possibleConstructorReturn(this, _getPrototypeOf(GridLayer).apply(this, arguments));
  }

  _createClass(GridLayer, [{
    key: "initializeState",
    value: function initializeState() {
      this.state = {
        useGPUAggregation: true
      };
    }
  }, {
    key: "updateState",
    value: function updateState(_ref) {
      var oldProps = _ref.oldProps,
          props = _ref.props,
          changeFlags = _ref.changeFlags;
      var newState = {};
      newState.useGPUAggregation = this.canUseGPUAggregation(props);
      this.setState(newState);
    }
  }, {
    key: "renderLayers",
    value: function renderLayers() {
      var _this$props = this.props,
          data = _this$props.data,
          updateTriggers = _this$props.updateTriggers;
      var id = this.state.useGPUAggregation ? 'GPU' : 'CPU';
      var LayerType = this.state.useGPUAggregation ? this.getSubLayerClass('GPU', GPUGridLayer) : this.getSubLayerClass('CPU', CPUGridLayer);
      return new LayerType(this.props, this.getSubLayerProps({
        id: id,
        updateTriggers: updateTriggers
      }), {
        data: data
      });
    }
  }, {
    key: "canUseGPUAggregation",
    value: function canUseGPUAggregation(props) {
      var gpuAggregation = props.gpuAggregation,
          lowerPercentile = props.lowerPercentile,
          upperPercentile = props.upperPercentile,
          getColorValue = props.getColorValue,
          getElevationValue = props.getElevationValue;

      if (!gpuAggregation) {
        return false;
      }

      if (!GPUGridAggregator.isSupported(this.context.gl)) {
        return false;
      }

      if (lowerPercentile !== 0 || upperPercentile !== 100) {
        return false;
      }

      if (getColorValue !== null || getElevationValue !== null) {
        return false;
      }

      return true;
    }
  }]);

  return GridLayer;
}(CompositeLayer);

export { GridLayer as default };
GridLayer.layerName = 'GridLayer';
GridLayer.defaultProps = defaultProps;
//# sourceMappingURL=grid-layer.js.map