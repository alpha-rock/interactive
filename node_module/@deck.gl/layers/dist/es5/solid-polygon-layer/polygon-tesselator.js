"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var Polygon = _interopRequireWildcard(require("./polygon"));

var _core = require("@deck.gl/core");

var Tesselator = _core.experimental.Tesselator;

var PolygonTesselator = function (_Tesselator) {
  (0, _inherits2.default)(PolygonTesselator, _Tesselator);

  function PolygonTesselator(_ref) {
    var data = _ref.data,
        getGeometry = _ref.getGeometry,
        fp64 = _ref.fp64,
        positionFormat = _ref.positionFormat,
        _ref$IndexType = _ref.IndexType,
        IndexType = _ref$IndexType === void 0 ? Uint32Array : _ref$IndexType;
    (0, _classCallCheck2.default)(this, PolygonTesselator);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PolygonTesselator).call(this, {
      data: data,
      getGeometry: getGeometry,
      fp64: fp64,
      positionFormat: positionFormat,
      attributes: {
        positions: {
          size: 3
        },
        positions64xyLow: {
          size: 2,
          fp64Only: true
        },
        vertexValid: {
          type: Uint8ClampedArray,
          size: 1
        },
        indices: {
          type: IndexType,
          size: 1
        }
      }
    }));
  }

  (0, _createClass2.default)(PolygonTesselator, [{
    key: "get",
    value: function get(attributeName) {
      if (attributeName === 'indices') {
        return this.attributes.indices.subarray(0, this.vertexCount);
      }

      return this.attributes[attributeName];
    }
  }, {
    key: "getGeometrySize",
    value: function getGeometrySize(polygon) {
      return Polygon.getVertexCount(polygon, this.positionSize);
    }
  }, {
    key: "updateGeometryAttributes",
    value: function updateGeometryAttributes(polygon, context) {
      polygon = Polygon.normalize(polygon, this.positionSize, context.geometrySize);

      this._updateIndices(polygon, context);

      this._updatePositions(polygon, context);
    }
  }, {
    key: "_updateIndices",
    value: function _updateIndices(polygon, _ref2) {
      var geometryIndex = _ref2.geometryIndex,
          offset = _ref2.vertexStart,
          indexStart = _ref2.indexStart;
      var attributes = this.attributes,
          indexLayout = this.indexLayout,
          typedArrayManager = this.typedArrayManager;
      var target = attributes.indices;
      var i = indexStart;
      var indices = Polygon.getSurfaceIndices(polygon, this.positionSize);
      target = typedArrayManager.allocate(target, indexStart + indices.length, {
        copy: true
      });

      for (var j = 0; j < indices.length; j++) {
        target[i++] = indices[j] + offset;
      }

      indexLayout[geometryIndex] = indices.length;
      attributes.indices = target;
    }
  }, {
    key: "_updatePositions",
    value: function _updatePositions(polygon, _ref3) {
      var vertexStart = _ref3.vertexStart,
          geometrySize = _ref3.geometrySize;
      var _this$attributes = this.attributes,
          positions = _this$attributes.positions,
          positions64xyLow = _this$attributes.positions64xyLow,
          vertexValid = _this$attributes.vertexValid,
          fp64 = this.fp64,
          positionSize = this.positionSize;
      var i = vertexStart;
      var polygonPositions = polygon.positions,
          holeIndices = polygon.holeIndices;

      for (var j = 0; j < geometrySize; j++) {
        var x = polygonPositions[j * positionSize];
        var y = polygonPositions[j * positionSize + 1];
        var z = positionSize > 2 ? polygonPositions[j * positionSize + 2] : 0;
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        if (fp64) {
          positions64xyLow[i * 2] = (0, _core.fp64LowPart)(x);
          positions64xyLow[i * 2 + 1] = (0, _core.fp64LowPart)(y);
        }

        vertexValid[i] = 1;
        i++;
      }

      if (holeIndices) {
        for (var _j = 0; _j < holeIndices.length; _j++) {
          vertexValid[vertexStart + holeIndices[_j] / positionSize - 1] = 0;
        }
      }

      vertexValid[vertexStart + geometrySize - 1] = 0;
    }
  }]);
  return PolygonTesselator;
}(Tesselator);

exports.default = PolygonTesselator;
//# sourceMappingURL=polygon-tesselator.js.map