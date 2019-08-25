import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { PhongMaterial } from '@luma.gl/core';
import { CompositeLayer, createIterable } from '@deck.gl/core';
import SolidPolygonLayer from '../solid-polygon-layer/solid-polygon-layer';
import PathLayer from '../path-layer/path-layer';
import * as Polygon from '../solid-polygon-layer/polygon';
import { replaceInRange } from '../utils';
var defaultLineColor = [0, 0, 0, 255];
var defaultFillColor = [0, 0, 0, 255];
var defaultMaterial = new PhongMaterial();
var defaultProps = {
  stroked: true,
  filled: true,
  extruded: false,
  elevationScale: 1,
  wireframe: false,
  lineWidthUnits: 'meters',
  lineWidthScale: 1,
  lineWidthMinPixels: 0,
  lineWidthMaxPixels: Number.MAX_SAFE_INTEGER,
  lineJointRounded: false,
  lineMiterLimit: 4,
  lineDashJustified: false,
  getPolygon: {
    type: 'accessor',
    value: function value(f) {
      return f.polygon;
    }
  },
  getFillColor: {
    type: 'accessor',
    value: defaultFillColor
  },
  getLineColor: {
    type: 'accessor',
    value: defaultLineColor
  },
  getLineWidth: {
    type: 'accessor',
    value: 1
  },
  getLineDashArray: {
    type: 'accessor',
    value: [0, 0]
  },
  getElevation: {
    type: 'accessor',
    value: 1000
  },
  material: defaultMaterial
};

var PolygonLayer = function (_CompositeLayer) {
  _inherits(PolygonLayer, _CompositeLayer);

  function PolygonLayer() {
    _classCallCheck(this, PolygonLayer);

    return _possibleConstructorReturn(this, _getPrototypeOf(PolygonLayer).apply(this, arguments));
  }

  _createClass(PolygonLayer, [{
    key: "initializeState",
    value: function initializeState() {
      this.state = {
        paths: []
      };
    }
  }, {
    key: "updateState",
    value: function updateState(_ref) {
      var _this = this;

      var oldProps = _ref.oldProps,
          props = _ref.props,
          changeFlags = _ref.changeFlags;
      var geometryChanged = changeFlags.dataChanged || changeFlags.updateTriggersChanged && (changeFlags.updateTriggersChanged.all || changeFlags.updateTriggersChanged.getPolygon);

      if (geometryChanged && Array.isArray(changeFlags.dataChanged)) {
        var paths = this.state.paths.slice();
        var pathsDiff = changeFlags.dataChanged.map(function (dataRange) {
          return replaceInRange({
            data: paths,
            getIndex: function getIndex(p) {
              return p.__source.index;
            },
            dataRange: dataRange,
            replace: _this._getPaths(dataRange)
          });
        });
        this.setState({
          paths: paths,
          pathsDiff: pathsDiff
        });
      } else if (geometryChanged) {
        this.setState({
          paths: this._getPaths(),
          pathsDiff: null
        });
      }
    }
  }, {
    key: "_getPaths",
    value: function _getPaths() {
      var dataRange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$props = this.props,
          data = _this$props.data,
          getPolygon = _this$props.getPolygon,
          positionFormat = _this$props.positionFormat;
      var paths = [];
      var positionSize = positionFormat === 'XY' ? 2 : 3;
      var startRow = dataRange.startRow,
          endRow = dataRange.endRow;

      var _createIterable = createIterable(data, startRow, endRow),
          iterable = _createIterable.iterable,
          objectInfo = _createIterable.objectInfo;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var object = _step.value;
          objectInfo.index++;

          var _Polygon$normalize = Polygon.normalize(getPolygon(object, objectInfo), positionSize),
              positions = _Polygon$normalize.positions,
              holeIndices = _Polygon$normalize.holeIndices;

          if (holeIndices) {
            for (var i = 0; i <= holeIndices.length; i++) {
              var path = positions.subarray(holeIndices[i - 1] || 0, holeIndices[i] || positions.length);
              paths.push(this.getSubLayerRow({
                path: path
              }, object, objectInfo.index));
            }
          } else {
            paths.push(this.getSubLayerRow({
              path: positions
            }, object, objectInfo.index));
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

      return paths;
    }
  }, {
    key: "renderLayers",
    value: function renderLayers() {
      var _this$props2 = this.props,
          data = _this$props2.data,
          _dataDiff = _this$props2._dataDiff,
          stroked = _this$props2.stroked,
          filled = _this$props2.filled,
          extruded = _this$props2.extruded,
          wireframe = _this$props2.wireframe,
          elevationScale = _this$props2.elevationScale,
          transitions = _this$props2.transitions,
          positionFormat = _this$props2.positionFormat;
      var _this$props3 = this.props,
          lineWidthUnits = _this$props3.lineWidthUnits,
          lineWidthScale = _this$props3.lineWidthScale,
          lineWidthMinPixels = _this$props3.lineWidthMinPixels,
          lineWidthMaxPixels = _this$props3.lineWidthMaxPixels,
          lineJointRounded = _this$props3.lineJointRounded,
          lineMiterLimit = _this$props3.lineMiterLimit,
          lineDashJustified = _this$props3.lineDashJustified;
      var _this$props4 = this.props,
          getFillColor = _this$props4.getFillColor,
          getLineColor = _this$props4.getLineColor,
          getLineWidth = _this$props4.getLineWidth,
          getLineDashArray = _this$props4.getLineDashArray,
          getElevation = _this$props4.getElevation,
          getPolygon = _this$props4.getPolygon,
          updateTriggers = _this$props4.updateTriggers,
          material = _this$props4.material;
      var _this$state = this.state,
          paths = _this$state.paths,
          pathsDiff = _this$state.pathsDiff;
      var FillLayer = this.getSubLayerClass('fill', SolidPolygonLayer);
      var StrokeLayer = this.getSubLayerClass('stroke', PathLayer);
      var polygonLayer = this.shouldRenderSubLayer('fill', paths) && new FillLayer({
        _dataDiff: _dataDiff,
        extruded: extruded,
        elevationScale: elevationScale,
        filled: filled,
        wireframe: wireframe,
        getElevation: getElevation,
        getFillColor: getFillColor,
        getLineColor: getLineColor,
        material: material,
        transitions: transitions
      }, this.getSubLayerProps({
        id: 'fill',
        updateTriggers: {
          getPolygon: updateTriggers.getPolygon,
          getElevation: updateTriggers.getElevation,
          getFillColor: updateTriggers.getFillColor,
          getLineColor: updateTriggers.getLineColor
        }
      }), {
        data: data,
        positionFormat: positionFormat,
        getPolygon: getPolygon
      });
      var polygonLineLayer = !extruded && stroked && this.shouldRenderSubLayer('stroke', paths) && new StrokeLayer({
        _dataDiff: pathsDiff && function () {
          return pathsDiff;
        },
        widthUnits: lineWidthUnits,
        widthScale: lineWidthScale,
        widthMinPixels: lineWidthMinPixels,
        widthMaxPixels: lineWidthMaxPixels,
        rounded: lineJointRounded,
        miterLimit: lineMiterLimit,
        dashJustified: lineDashJustified,
        transitions: transitions && {
          getWidth: transitions.getLineWidth,
          getColor: transitions.getLineColor,
          getPath: transitions.getPolygon
        },
        getColor: this.getSubLayerAccessor(getLineColor),
        getWidth: this.getSubLayerAccessor(getLineWidth),
        getDashArray: this.getSubLayerAccessor(getLineDashArray)
      }, this.getSubLayerProps({
        id: 'stroke',
        updateTriggers: {
          getWidth: updateTriggers.getLineWidth,
          getColor: updateTriggers.getLineColor,
          getDashArray: updateTriggers.getLineDashArray
        }
      }), {
        data: paths,
        positionFormat: positionFormat,
        getPath: function getPath(x) {
          return x.path;
        }
      });
      return [!extruded && polygonLayer, polygonLineLayer, extruded && polygonLayer];
    }
  }]);

  return PolygonLayer;
}(CompositeLayer);

export { PolygonLayer as default };
PolygonLayer.layerName = 'PolygonLayer';
PolygonLayer.defaultProps = defaultProps;
//# sourceMappingURL=polygon-layer.js.map