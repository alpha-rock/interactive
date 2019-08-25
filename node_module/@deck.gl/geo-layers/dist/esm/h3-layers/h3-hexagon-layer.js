import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { h3ToGeoBoundary, h3GetResolution, h3ToGeo, geoToH3, h3IsPentagon, h3Distance, edgeLength, UNITS } from 'h3-js';
import { lerp } from 'math.gl';
import { CompositeLayer, createIterable } from '@deck.gl/core';
import { ColumnLayer, PolygonLayer } from '@deck.gl/layers';
var UPDATE_THRESHOLD_KM = 10;
export function normalizeLongitudes(vertices, refLng) {
  refLng = refLng === undefined ? vertices[0][0] : refLng;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = vertices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var pt = _step.value;
      var deltaLng = pt[0] - refLng;

      if (deltaLng > 180) {
        pt[0] -= 360;
      } else if (deltaLng < -180) {
        pt[0] += 360;
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
}
export function scalePolygon(hexId, vertices, factor) {
  var _h3ToGeo = h3ToGeo(hexId),
      _h3ToGeo2 = _slicedToArray(_h3ToGeo, 2),
      lat = _h3ToGeo2[0],
      lng = _h3ToGeo2[1];

  var actualCount = vertices.length;
  normalizeLongitudes(vertices, lng);
  var vertexCount = vertices[0] === vertices[actualCount - 1] ? actualCount - 1 : actualCount;

  for (var i = 0; i < vertexCount; i++) {
    vertices[i][0] = lerp(lng, vertices[i][0], factor);
    vertices[i][1] = lerp(lat, vertices[i][1], factor);
  }
}

function getHexagonCentroid(getHexagon, object, objectInfo) {
  var hexagonId = getHexagon(object, objectInfo);

  var _h3ToGeo3 = h3ToGeo(hexagonId),
      _h3ToGeo4 = _slicedToArray(_h3ToGeo3, 2),
      lat = _h3ToGeo4[0],
      lng = _h3ToGeo4[1];

  return [lng, lat];
}

function h3ToPolygon(hexId) {
  var coverage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var vertices = h3ToGeoBoundary(hexId, true);

  if (coverage !== 1) {
    scalePolygon(hexId, vertices, coverage);
  } else {
    normalizeLongitudes(vertices);
  }

  return vertices;
}

function mergeTriggers(getHexagon, coverage) {
  var trigger;

  if (getHexagon === undefined || getHexagon === null) {
    trigger = coverage;
  } else if (_typeof(getHexagon) === 'object') {
    trigger = Object.assign({}, getHexagon, {
      coverage: coverage
    });
  } else {
    trigger = {
      getHexagon: getHexagon,
      coverage: coverage
    };
  }

  return trigger;
}

var defaultProps = Object.assign({}, PolygonLayer.defaultProps, {
  highPrecision: false,
  coverage: {
    type: 'number',
    min: 0,
    max: 1,
    value: 1
  },
  getHexagon: {
    type: 'accessor',
    value: function value(x) {
      return x.hexagon;
    }
  },
  extruded: true,
  getColor: null
});

var H3HexagonLayer = function (_CompositeLayer) {
  _inherits(H3HexagonLayer, _CompositeLayer);

  function H3HexagonLayer() {
    _classCallCheck(this, H3HexagonLayer);

    return _possibleConstructorReturn(this, _getPrototypeOf(H3HexagonLayer).apply(this, arguments));
  }

  _createClass(H3HexagonLayer, [{
    key: "shouldUpdateState",
    value: function shouldUpdateState(_ref) {
      var changeFlags = _ref.changeFlags;
      return this._shouldUseHighPrecision() ? changeFlags.propsOrDataChanged : changeFlags.somethingChanged;
    }
  }, {
    key: "updateState",
    value: function updateState(_ref2) {
      var props = _ref2.props,
          oldProps = _ref2.oldProps,
          changeFlags = _ref2.changeFlags;

      if (changeFlags.dataChanged || changeFlags.updateTriggers && changeFlags.updateTriggers.getHexagon) {
        var resolution = -1;
        var hasPentagon = false;

        var _createIterable = createIterable(props.data),
            iterable = _createIterable.iterable,
            objectInfo = _createIterable.objectInfo;

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = iterable[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var object = _step2.value;
            objectInfo.index++;
            var hexId = props.getHexagon(object, objectInfo);
            resolution = resolution < 0 ? h3GetResolution(hexId) : resolution;

            if (h3IsPentagon(hexId)) {
              hasPentagon = true;
              break;
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

        this.setState({
          resolution: resolution,
          edgeLengthKM: resolution >= 0 ? edgeLength(resolution, UNITS.km) : 0,
          hasPentagon: hasPentagon
        });
      }

      this._updateVertices(this.context.viewport);
    }
  }, {
    key: "_shouldUseHighPrecision",
    value: function _shouldUseHighPrecision() {
      var _this$state = this.state,
          resolution = _this$state.resolution,
          hasPentagon = _this$state.hasPentagon;
      return this.props.highPrecision || hasPentagon || resolution >= 0 && resolution <= 5;
    }
  }, {
    key: "_updateVertices",
    value: function _updateVertices(viewport) {
      if (this._shouldUseHighPrecision()) {
        return;
      }

      var _this$state2 = this.state,
          resolution = _this$state2.resolution,
          edgeLengthKM = _this$state2.edgeLengthKM,
          centerHex = _this$state2.centerHex;

      if (resolution < 0) {
        return;
      }

      var hex = geoToH3(viewport.latitude, viewport.longitude, resolution);

      if (centerHex === hex || centerHex && h3Distance(centerHex, hex) * edgeLengthKM < UPDATE_THRESHOLD_KM) {
        return;
      }

      var pixelsPerMeter = viewport.distanceScales.pixelsPerMeter;
      var vertices = h3ToPolygon(hex);

      var _h3ToGeo5 = h3ToGeo(hex),
          _h3ToGeo6 = _slicedToArray(_h3ToGeo5, 2),
          centerLat = _h3ToGeo6[0],
          centerLng = _h3ToGeo6[1];

      var _viewport$projectFlat = viewport.projectFlat([centerLng, centerLat]),
          _viewport$projectFlat2 = _slicedToArray(_viewport$projectFlat, 2),
          centerX = _viewport$projectFlat2[0],
          centerY = _viewport$projectFlat2[1];

      vertices = vertices.map(function (p) {
        var worldPosition = viewport.projectFlat(p);
        worldPosition[0] = (worldPosition[0] - centerX) / pixelsPerMeter[0];
        worldPosition[1] = (worldPosition[1] - centerY) / pixelsPerMeter[1];
        return worldPosition;
      });
      this.setState({
        centerHex: hex,
        vertices: vertices
      });
    }
  }, {
    key: "renderLayers",
    value: function renderLayers() {
      return this._shouldUseHighPrecision() ? this._renderPolygonLayer() : this._renderColumnLayer();
    }
  }, {
    key: "_getForwardProps",
    value: function _getForwardProps() {
      var _this$props = this.props,
          elevationScale = _this$props.elevationScale,
          material = _this$props.material,
          coverage = _this$props.coverage,
          extruded = _this$props.extruded,
          wireframe = _this$props.wireframe,
          stroked = _this$props.stroked,
          filled = _this$props.filled,
          lineWidthUnits = _this$props.lineWidthUnits,
          lineWidthScale = _this$props.lineWidthScale,
          lineWidthMinPixels = _this$props.lineWidthMinPixels,
          lineWidthMaxPixels = _this$props.lineWidthMaxPixels,
          getColor = _this$props.getColor,
          getFillColor = _this$props.getFillColor,
          getElevation = _this$props.getElevation,
          getLineColor = _this$props.getLineColor,
          getLineWidth = _this$props.getLineWidth,
          updateTriggers = _this$props.updateTriggers;
      return {
        elevationScale: elevationScale,
        extruded: extruded,
        coverage: coverage,
        wireframe: wireframe,
        stroked: stroked,
        filled: filled,
        lineWidthUnits: lineWidthUnits,
        lineWidthScale: lineWidthScale,
        lineWidthMinPixels: lineWidthMinPixels,
        lineWidthMaxPixels: lineWidthMaxPixels,
        material: material,
        getElevation: getElevation,
        getFillColor: getColor || getFillColor,
        getLineColor: getLineColor,
        getLineWidth: getLineWidth,
        updateTriggers: {
          getFillColor: updateTriggers.getColor || updateTriggers.getFillColor,
          getElevation: updateTriggers.getElevation,
          getLineColor: updateTriggers.getLineColor,
          getLineWidth: updateTriggers.getLineWidth
        }
      };
    }
  }, {
    key: "_renderPolygonLayer",
    value: function _renderPolygonLayer() {
      var _this$props2 = this.props,
          data = _this$props2.data,
          getHexagon = _this$props2.getHexagon,
          updateTriggers = _this$props2.updateTriggers,
          coverage = _this$props2.coverage;
      var SubLayerClass = this.getSubLayerClass('hexagon-cell-hifi', PolygonLayer);

      var forwardProps = this._getForwardProps();

      forwardProps.updateTriggers.getPolygon = mergeTriggers(updateTriggers.getHexagon, coverage);
      return new SubLayerClass(forwardProps, this.getSubLayerProps({
        id: 'hexagon-cell-hifi',
        updateTriggers: forwardProps.updateTriggers
      }), {
        data: data,
        getPolygon: function getPolygon(object, objectInfo) {
          var hexagonId = getHexagon(object, objectInfo);
          return h3ToPolygon(hexagonId, coverage);
        }
      });
    }
  }, {
    key: "_renderColumnLayer",
    value: function _renderColumnLayer() {
      var _this$props3 = this.props,
          data = _this$props3.data,
          getHexagon = _this$props3.getHexagon,
          updateTriggers = _this$props3.updateTriggers;
      var SubLayerClass = this.getSubLayerClass('hexagon-cell', ColumnLayer);

      var forwardProps = this._getForwardProps();

      forwardProps.updateTriggers.getPosition = updateTriggers.getHexagon;
      return new SubLayerClass(forwardProps, this.getSubLayerProps({
        id: 'hexagon-cell',
        updateTriggers: forwardProps.updateTriggers
      }), {
        data: data,
        diskResolution: 6,
        radius: 1,
        vertices: this.state.vertices,
        getPosition: getHexagonCentroid.bind(null, getHexagon)
      });
    }
  }]);

  return H3HexagonLayer;
}(CompositeLayer);

export { H3HexagonLayer as default };
H3HexagonLayer.defaultProps = defaultProps;
H3HexagonLayer.layerName = 'H3HexagonLayer';
//# sourceMappingURL=h3-hexagon-layer.js.map