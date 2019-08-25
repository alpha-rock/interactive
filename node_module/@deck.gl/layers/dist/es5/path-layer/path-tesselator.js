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

var Tesselator = _core.experimental.Tesselator;
var START_CAP = 1;
var END_CAP = 2;
var INVALID = 4;

var PathTesselator = function (_Tesselator) {
  (0, _inherits2.default)(PathTesselator, _Tesselator);

  function PathTesselator(_ref) {
    var data = _ref.data,
        getGeometry = _ref.getGeometry,
        positionFormat = _ref.positionFormat,
        fp64 = _ref.fp64;
    (0, _classCallCheck2.default)(this, PathTesselator);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PathTesselator).call(this, {
      data: data,
      getGeometry: getGeometry,
      fp64: fp64,
      positionFormat: positionFormat,
      attributes: {
        startPositions: {
          size: 3,
          padding: 3
        },
        endPositions: {
          size: 3,
          padding: 3
        },
        segmentTypes: {
          size: 1,
          type: Uint8ClampedArray
        },
        startPositions64XyLow: {
          size: 2,
          padding: 2,
          fp64Only: true
        },
        endPositions64XyLow: {
          size: 2,
          padding: 2,
          fp64Only: true
        }
      }
    }));
  }

  (0, _createClass2.default)(PathTesselator, [{
    key: "get",
    value: function get(attributeName) {
      return this.attributes[attributeName];
    }
  }, {
    key: "getGeometrySize",
    value: function getGeometrySize(path) {
      var numPoints = this.getPathLength(path);

      if (numPoints < 2) {
        return 0;
      }

      if (this.isClosed(path)) {
        return numPoints < 3 ? 0 : numPoints + 1;
      }

      return numPoints - 1;
    }
  }, {
    key: "updateGeometryAttributes",
    value: function updateGeometryAttributes(path, context) {
      var _this$attributes = this.attributes,
          startPositions = _this$attributes.startPositions,
          endPositions = _this$attributes.endPositions,
          startPositions64XyLow = _this$attributes.startPositions64XyLow,
          endPositions64XyLow = _this$attributes.endPositions64XyLow,
          segmentTypes = _this$attributes.segmentTypes,
          fp64 = this.fp64;
      var geometrySize = context.geometrySize;

      if (geometrySize === 0) {
        return;
      }

      var isPathClosed = this.isClosed(path);
      var startPoint;
      var endPoint;

      for (var i = context.vertexStart, ptIndex = 0; ptIndex < geometrySize; i++, ptIndex++) {
        startPoint = endPoint || this.getPointOnPath(path, 0);
        endPoint = this.getPointOnPath(path, ptIndex + 1);
        segmentTypes[i] = 0;

        if (ptIndex === 0) {
          if (isPathClosed) {
            segmentTypes[i] += INVALID;
          } else {
            segmentTypes[i] += START_CAP;
          }
        }

        if (ptIndex === geometrySize - 1) {
          if (isPathClosed) {
            segmentTypes[i] += INVALID;
          } else {
            segmentTypes[i] += END_CAP;
          }
        }

        startPositions[i * 3 + 3] = startPoint[0];
        startPositions[i * 3 + 4] = startPoint[1];
        startPositions[i * 3 + 5] = startPoint[2] || 0;
        endPositions[i * 3] = endPoint[0];
        endPositions[i * 3 + 1] = endPoint[1];
        endPositions[i * 3 + 2] = endPoint[2] || 0;

        if (fp64) {
          startPositions64XyLow[i * 2 + 2] = (0, _core.fp64LowPart)(startPoint[0]);
          startPositions64XyLow[i * 2 + 3] = (0, _core.fp64LowPart)(startPoint[1]);
          endPositions64XyLow[i * 2] = (0, _core.fp64LowPart)(endPoint[0]);
          endPositions64XyLow[i * 2 + 1] = (0, _core.fp64LowPart)(endPoint[1]);
        }
      }
    }
  }, {
    key: "getPathLength",
    value: function getPathLength(path) {
      if (Number.isFinite(path[0])) {
        return path.length / this.positionSize;
      }

      return path.length;
    }
  }, {
    key: "getPointOnPath",
    value: function getPointOnPath(path, index) {
      if (Number.isFinite(path[0])) {
        var positionSize = this.positionSize;

        if (index * positionSize >= path.length) {
          index += 1 - path.length / positionSize;
        }

        return [path[index * positionSize], path[index * positionSize + 1], positionSize === 3 ? path[index * positionSize + 2] : 0];
      }

      if (index >= path.length) {
        index += 1 - path.length;
      }

      return path[index];
    }
  }, {
    key: "isClosed",
    value: function isClosed(path) {
      var numPoints = this.getPathLength(path);
      var firstPoint = this.getPointOnPath(path, 0);
      var lastPoint = this.getPointOnPath(path, numPoints - 1);
      return firstPoint[0] === lastPoint[0] && firstPoint[1] === lastPoint[1] && firstPoint[2] === lastPoint[2];
    }
  }]);
  return PathTesselator;
}(Tesselator);

exports.default = PathTesselator;
//# sourceMappingURL=path-tesselator.js.map