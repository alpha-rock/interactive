import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { experimental, fp64LowPart } from '@deck.gl/core';
var Tesselator = experimental.Tesselator;
var START_CAP = 1;
var END_CAP = 2;
var INVALID = 4;

var PathTesselator = function (_Tesselator) {
  _inherits(PathTesselator, _Tesselator);

  function PathTesselator(_ref) {
    var data = _ref.data,
        getGeometry = _ref.getGeometry,
        positionFormat = _ref.positionFormat,
        fp64 = _ref.fp64;

    _classCallCheck(this, PathTesselator);

    return _possibleConstructorReturn(this, _getPrototypeOf(PathTesselator).call(this, {
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

  _createClass(PathTesselator, [{
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
          startPositions64XyLow[i * 2 + 2] = fp64LowPart(startPoint[0]);
          startPositions64XyLow[i * 2 + 3] = fp64LowPart(startPoint[1]);
          endPositions64XyLow[i * 2] = fp64LowPart(endPoint[0]);
          endPositions64XyLow[i * 2 + 1] = fp64LowPart(endPoint[1]);
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

export { PathTesselator as default };
//# sourceMappingURL=path-tesselator.js.map