import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { CompositeLayer } from '@deck.gl/core';
import { PolygonLayer } from '@deck.gl/layers';
import { getS2Polygon } from './s2-utils';
var defaultProps = Object.assign({
  getS2Token: {
    type: 'accessor',
    value: function value(d) {
      return d.token;
    }
  }
}, PolygonLayer.defaultProps);

var S2Layer = function (_CompositeLayer) {
  _inherits(S2Layer, _CompositeLayer);

  function S2Layer() {
    _classCallCheck(this, S2Layer);

    return _possibleConstructorReturn(this, _getPrototypeOf(S2Layer).apply(this, arguments));
  }

  _createClass(S2Layer, [{
    key: "renderLayers",
    value: function renderLayers() {
      var _this$props = this.props,
          data = _this$props.data,
          getS2Token = _this$props.getS2Token;
      var _this$props2 = this.props,
          elevationScale = _this$props2.elevationScale,
          extruded = _this$props2.extruded,
          wireframe = _this$props2.wireframe,
          filled = _this$props2.filled,
          stroked = _this$props2.stroked,
          lineWidthUnits = _this$props2.lineWidthUnits,
          lineWidthScale = _this$props2.lineWidthScale,
          lineWidthMinPixels = _this$props2.lineWidthMinPixels,
          lineWidthMaxPixels = _this$props2.lineWidthMaxPixels,
          lineJointRounded = _this$props2.lineJointRounded,
          lineMiterLimit = _this$props2.lineMiterLimit,
          lineDashJustified = _this$props2.lineDashJustified,
          getElevation = _this$props2.getElevation,
          getFillColor = _this$props2.getFillColor,
          getLineColor = _this$props2.getLineColor,
          getLineWidth = _this$props2.getLineWidth,
          getLineDashArray = _this$props2.getLineDashArray;
      var _this$props3 = this.props,
          updateTriggers = _this$props3.updateTriggers,
          material = _this$props3.material;
      var CellLayer = this.getSubLayerClass('cell', PolygonLayer);
      return new CellLayer({
        filled: filled,
        wireframe: wireframe,
        extruded: extruded,
        elevationScale: elevationScale,
        stroked: stroked,
        lineWidthUnits: lineWidthUnits,
        lineWidthScale: lineWidthScale,
        lineWidthMinPixels: lineWidthMinPixels,
        lineWidthMaxPixels: lineWidthMaxPixels,
        lineJointRounded: lineJointRounded,
        lineMiterLimit: lineMiterLimit,
        lineDashJustified: lineDashJustified,
        material: material,
        getElevation: getElevation,
        getFillColor: getFillColor,
        getLineColor: getLineColor,
        getLineWidth: getLineWidth,
        getLineDashArray: getLineDashArray
      }, this.getSubLayerProps({
        id: 'cell',
        updateTriggers: {
          getElevation: updateTriggers.getElevation,
          getFillColor: updateTriggers.getFillColor,
          getLineColor: updateTriggers.getLineColor,
          getLineWidth: updateTriggers.getLineWidth,
          getLineDashArray: updateTriggers.getLineDashArray
        }
      }), {
        data: data,
        getPolygon: function getPolygon(x, objectInfo) {
          return getS2Polygon(getS2Token(x, objectInfo));
        }
      });
    }
  }]);

  return S2Layer;
}(CompositeLayer);

export { S2Layer as default };
S2Layer.layerName = 'S2Layer';
S2Layer.defaultProps = defaultProps;
//# sourceMappingURL=s2-layer.js.map