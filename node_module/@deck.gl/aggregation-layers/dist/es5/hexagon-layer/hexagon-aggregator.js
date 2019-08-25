"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pointToHexbin = pointToHexbin;
exports.getRadiusInPixel = getRadiusInPixel;

var _d3Hexbin = require("d3-hexbin");

var _core = require("@deck.gl/core");

function pointToHexbin(_ref, viewport) {
  var data = _ref.data,
      radius = _ref.radius,
      getPosition = _ref.getPosition;
  var radiusInPixel = getRadiusInPixel(radius, viewport);
  var screenPoints = [];

  var _createIterable = (0, _core.createIterable)(data),
      iterable = _createIterable.iterable,
      objectInfo = _createIterable.objectInfo;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var object = _step.value;
      objectInfo.index++;
      var position = getPosition(object, objectInfo);
      var arrayIsFinite = Number.isFinite(position[0]) && Number.isFinite(position[1]);

      if (arrayIsFinite) {
        screenPoints.push(Object.assign({
          screenCoord: viewport.projectFlat(position)
        }, object));
      } else {
        _core.log.warn('HexagonLayer: invalid position')();
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

  var newHexbin = (0, _d3Hexbin.hexbin)().radius(radiusInPixel).x(function (d) {
    return d.screenCoord[0];
  }).y(function (d) {
    return d.screenCoord[1];
  });
  var hexagonBins = newHexbin(screenPoints);
  return {
    hexagons: hexagonBins.map(function (hex, index) {
      return {
        position: viewport.unprojectFlat([hex.x, hex.y]),
        points: hex,
        index: index
      };
    })
  };
}

function getRadiusInPixel(radius, viewport) {
  var _viewport$getDistance = viewport.getDistanceScales(),
      pixelsPerMeter = _viewport$getDistance.pixelsPerMeter;

  return radius * pixelsPerMeter[0];
}
//# sourceMappingURL=hexagon-aggregator.js.map