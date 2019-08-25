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

var _scatterplotLayer = _interopRequireDefault(require("../scatterplot-layer/scatterplot-layer"));

var _pathLayer = _interopRequireDefault(require("../path-layer/path-layer"));

var _core2 = require("@luma.gl/core");

var _solidPolygonLayer = _interopRequireDefault(require("../solid-polygon-layer/solid-polygon-layer"));

var _utils = require("../utils");

var _geojson = require("./geojson");

var defaultLineColor = [0, 0, 0, 255];
var defaultFillColor = [0, 0, 0, 255];
var defaultMaterial = new _core2.PhongMaterial();
var defaultProps = {
  stroked: true,
  filled: true,
  extruded: false,
  wireframe: false,
  lineWidthUnits: 'meters',
  lineWidthScale: 1,
  lineWidthMinPixels: 0,
  lineWidthMaxPixels: Number.MAX_SAFE_INTEGER,
  lineJointRounded: false,
  lineMiterLimit: 4,
  elevationScale: 1,
  pointRadiusScale: 1,
  pointRadiusMinPixels: 0,
  pointRadiusMaxPixels: Number.MAX_SAFE_INTEGER,
  lineDashJustified: false,
  getLineColor: {
    type: 'accessor',
    value: defaultLineColor
  },
  getFillColor: {
    type: 'accessor',
    value: defaultFillColor
  },
  getRadius: {
    type: 'accessor',
    value: 1
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

function getCoordinates(f) {
  return f.geometry.coordinates;
}

var GeoJsonLayer = function (_CompositeLayer) {
  (0, _inherits2.default)(GeoJsonLayer, _CompositeLayer);

  function GeoJsonLayer() {
    (0, _classCallCheck2.default)(this, GeoJsonLayer);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(GeoJsonLayer).apply(this, arguments));
  }

  (0, _createClass2.default)(GeoJsonLayer, [{
    key: "initializeState",
    value: function initializeState() {
      this.state = {
        features: {}
      };
    }
  }, {
    key: "updateState",
    value: function updateState(_ref) {
      var props = _ref.props,
          changeFlags = _ref.changeFlags;

      if (!changeFlags.dataChanged) {
        return;
      }

      var features = (0, _geojson.getGeojsonFeatures)(props.data);
      var wrapFeature = this.getSubLayerRow.bind(this);

      if (Array.isArray(changeFlags.dataChanged)) {
        var oldFeatures = this.state.features;
        var newFeatures = {};
        var featuresDiff = {};

        for (var key in oldFeatures) {
          newFeatures[key] = oldFeatures[key].slice();
          featuresDiff[key] = [];
        }

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = changeFlags.dataChanged[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var dataRange = _step.value;
            var partialFeatures = (0, _geojson.separateGeojsonFeatures)(features, wrapFeature, dataRange);

            for (var _key in oldFeatures) {
              featuresDiff[_key].push((0, _utils.replaceInRange)({
                data: newFeatures[_key],
                getIndex: function getIndex(f) {
                  return f.__source.index;
                },
                dataRange: dataRange,
                replace: partialFeatures[_key]
              }));
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

        this.setState({
          features: newFeatures,
          featuresDiff: featuresDiff
        });
      } else {
        this.setState({
          features: (0, _geojson.separateGeojsonFeatures)(features, wrapFeature),
          featuresDiff: {}
        });
      }
    }
  }, {
    key: "renderLayers",
    value: function renderLayers() {
      var _this$state = this.state,
          features = _this$state.features,
          featuresDiff = _this$state.featuresDiff;
      var pointFeatures = features.pointFeatures,
          lineFeatures = features.lineFeatures,
          polygonFeatures = features.polygonFeatures,
          polygonOutlineFeatures = features.polygonOutlineFeatures;
      var _this$props = this.props,
          stroked = _this$props.stroked,
          filled = _this$props.filled,
          extruded = _this$props.extruded,
          wireframe = _this$props.wireframe,
          material = _this$props.material,
          transitions = _this$props.transitions;
      var _this$props2 = this.props,
          lineWidthUnits = _this$props2.lineWidthUnits,
          lineWidthScale = _this$props2.lineWidthScale,
          lineWidthMinPixels = _this$props2.lineWidthMinPixels,
          lineWidthMaxPixels = _this$props2.lineWidthMaxPixels,
          lineJointRounded = _this$props2.lineJointRounded,
          lineMiterLimit = _this$props2.lineMiterLimit,
          pointRadiusScale = _this$props2.pointRadiusScale,
          pointRadiusMinPixels = _this$props2.pointRadiusMinPixels,
          pointRadiusMaxPixels = _this$props2.pointRadiusMaxPixels,
          elevationScale = _this$props2.elevationScale,
          lineDashJustified = _this$props2.lineDashJustified;
      var _this$props3 = this.props,
          getLineColor = _this$props3.getLineColor,
          getFillColor = _this$props3.getFillColor,
          getRadius = _this$props3.getRadius,
          getLineWidth = _this$props3.getLineWidth,
          getLineDashArray = _this$props3.getLineDashArray,
          getElevation = _this$props3.getElevation,
          updateTriggers = _this$props3.updateTriggers;
      var PolygonFillLayer = this.getSubLayerClass('polygons-fill', _solidPolygonLayer.default);
      var PolygonStrokeLayer = this.getSubLayerClass('polygons-stroke', _pathLayer.default);
      var LineStringsLayer = this.getSubLayerClass('line-strings', _pathLayer.default);
      var PointsLayer = this.getSubLayerClass('points', _scatterplotLayer.default);
      var polygonFillLayer = this.shouldRenderSubLayer('polygons-fill', polygonFeatures) && new PolygonFillLayer({
        _dataDiff: featuresDiff.polygonFeatures && function () {
          return featuresDiff.polygonFeatures;
        },
        extruded: extruded,
        elevationScale: elevationScale,
        filled: filled,
        wireframe: wireframe,
        material: material,
        getElevation: this.getSubLayerAccessor(getElevation),
        getFillColor: this.getSubLayerAccessor(getFillColor),
        getLineColor: this.getSubLayerAccessor(getLineColor),
        transitions: transitions && {
          getPolygon: transitions.geometry,
          getElevation: transitions.getElevation,
          getFillColor: transitions.getFillColor,
          getLineColor: transitions.getLineColor
        }
      }, this.getSubLayerProps({
        id: 'polygons-fill',
        updateTriggers: {
          getElevation: updateTriggers.getElevation,
          getFillColor: updateTriggers.getFillColor,
          getLineColor: updateTriggers.getLineColor
        }
      }), {
        data: polygonFeatures,
        getPolygon: getCoordinates
      });
      var polygonLineLayer = !extruded && stroked && this.shouldRenderSubLayer('polygons-stroke', polygonOutlineFeatures) && new PolygonStrokeLayer({
        _dataDiff: featuresDiff.polygonOutlineFeatures && function () {
          return featuresDiff.polygonOutlineFeatures;
        },
        widthUnits: lineWidthUnits,
        widthScale: lineWidthScale,
        widthMinPixels: lineWidthMinPixels,
        widthMaxPixels: lineWidthMaxPixels,
        rounded: lineJointRounded,
        miterLimit: lineMiterLimit,
        dashJustified: lineDashJustified,
        getColor: this.getSubLayerAccessor(getLineColor),
        getWidth: this.getSubLayerAccessor(getLineWidth),
        getDashArray: this.getSubLayerAccessor(getLineDashArray),
        transitions: transitions && {
          getPath: transitions.geometry,
          getColor: transitions.getLineColor,
          getWidth: transitions.getLineWidth
        }
      }, this.getSubLayerProps({
        id: 'polygons-stroke',
        updateTriggers: {
          getColor: updateTriggers.getLineColor,
          getWidth: updateTriggers.getLineWidth,
          getDashArray: updateTriggers.getLineDashArray
        }
      }), {
        data: polygonOutlineFeatures,
        getPath: getCoordinates
      });
      var pathLayer = this.shouldRenderSubLayer('linestrings', lineFeatures) && new LineStringsLayer({
        _dataDiff: featuresDiff.lineFeatures && function () {
          return featuresDiff.lineFeatures;
        },
        widthUnits: lineWidthUnits,
        widthScale: lineWidthScale,
        widthMinPixels: lineWidthMinPixels,
        widthMaxPixels: lineWidthMaxPixels,
        rounded: lineJointRounded,
        miterLimit: lineMiterLimit,
        dashJustified: lineDashJustified,
        getColor: this.getSubLayerAccessor(getLineColor),
        getWidth: this.getSubLayerAccessor(getLineWidth),
        getDashArray: this.getSubLayerAccessor(getLineDashArray),
        transitions: transitions && {
          getPath: transitions.geometry,
          getColor: transitions.getLineColor,
          getWidth: transitions.getLineWidth
        }
      }, this.getSubLayerProps({
        id: 'line-strings',
        updateTriggers: {
          getColor: updateTriggers.getLineColor,
          getWidth: updateTriggers.getLineWidth,
          getDashArray: updateTriggers.getLineDashArray
        }
      }), {
        data: lineFeatures,
        getPath: getCoordinates
      });
      var pointLayer = this.shouldRenderSubLayer('points', pointFeatures) && new PointsLayer({
        _dataDiff: featuresDiff.pointFeatures && function () {
          return featuresDiff.pointFeatures;
        },
        stroked: stroked,
        filled: filled,
        radiusScale: pointRadiusScale,
        radiusMinPixels: pointRadiusMinPixels,
        radiusMaxPixels: pointRadiusMaxPixels,
        lineWidthUnits: lineWidthUnits,
        lineWidthScale: lineWidthScale,
        lineWidthMinPixels: lineWidthMinPixels,
        lineWidthMaxPixels: lineWidthMaxPixels,
        getFillColor: this.getSubLayerAccessor(getFillColor),
        getLineColor: this.getSubLayerAccessor(getLineColor),
        getRadius: this.getSubLayerAccessor(getRadius),
        getLineWidth: this.getSubLayerAccessor(getLineWidth),
        transitions: transitions && {
          getPosition: transitions.geometry,
          getFillColor: transitions.getFillColor,
          getLineColor: transitions.getLineColor,
          getRadius: transitions.getRadius,
          getLineWidth: transitions.getLineWidth
        }
      }, this.getSubLayerProps({
        id: 'points',
        updateTriggers: {
          getFillColor: updateTriggers.getFillColor,
          getLineColor: updateTriggers.getLineColor,
          getRadius: updateTriggers.getRadius,
          getLineWidth: updateTriggers.getLineWidth
        }
      }), {
        data: pointFeatures,
        getPosition: getCoordinates
      });
      return [!extruded && polygonFillLayer, polygonLineLayer, pathLayer, pointLayer, extruded && polygonFillLayer];
    }
  }]);
  return GeoJsonLayer;
}(_core.CompositeLayer);

exports.default = GeoJsonLayer;
GeoJsonLayer.layerName = 'GeoJsonLayer';
GeoJsonLayer.defaultProps = defaultProps;
//# sourceMappingURL=geojson-layer.js.map