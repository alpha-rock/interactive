"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClosestObject = getClosestObject;
exports.getUniqueObjects = getUniqueObjects;

var _log = _interopRequireDefault(require("../../utils/log"));

var NO_PICKED_OBJECT = {
  pickedColor: null,
  pickedLayer: null,
  pickedObjectIndex: -1
};

function getClosestObject(_ref) {
  var pickedColors = _ref.pickedColors,
      layers = _ref.layers,
      deviceX = _ref.deviceX,
      deviceY = _ref.deviceY,
      deviceRadius = _ref.deviceRadius,
      deviceRect = _ref.deviceRect;

  if (pickedColors) {
    var x = deviceRect.x,
        y = deviceRect.y,
        width = deviceRect.width,
        height = deviceRect.height;
    var minSquareDistanceToCenter = deviceRadius * deviceRadius;
    var closestPixelIndex = -1;
    var i = 0;

    for (var row = 0; row < height; row++) {
      var dy = row + y - deviceY;
      var dy2 = dy * dy;

      if (dy2 > minSquareDistanceToCenter) {
        i += 4 * width;
      } else {
        for (var col = 0; col < width; col++) {
          var pickedLayerIndex = pickedColors[i + 3] - 1;

          if (pickedLayerIndex >= 0) {
            var dx = col + x - deviceX;
            var d2 = dx * dx + dy2;

            if (d2 <= minSquareDistanceToCenter) {
              minSquareDistanceToCenter = d2;
              closestPixelIndex = i;
            }
          }

          i += 4;
        }
      }
    }

    if (closestPixelIndex >= 0) {
      var _pickedLayerIndex = pickedColors[closestPixelIndex + 3] - 1;

      var pickedColor = pickedColors.slice(closestPixelIndex, closestPixelIndex + 4);
      var pickedLayer = layers[_pickedLayerIndex];

      if (pickedLayer) {
        var pickedObjectIndex = pickedLayer.decodePickingColor(pickedColor);
        return {
          pickedColor: pickedColor,
          pickedLayer: pickedLayer,
          pickedObjectIndex: pickedObjectIndex
        };
      }

      _log.default.error('Picked non-existent layer. Is picking buffer corrupt?')();
    }
  }

  return NO_PICKED_OBJECT;
}

function getUniqueObjects(_ref2) {
  var pickedColors = _ref2.pickedColors,
      layers = _ref2.layers;
  var uniqueColors = new Map();

  if (pickedColors) {
    for (var i = 0; i < pickedColors.length; i += 4) {
      var pickedLayerIndex = pickedColors[i + 3] - 1;

      if (pickedLayerIndex >= 0) {
        var pickedColor = pickedColors.slice(i, i + 4);
        var colorKey = pickedColor.join(',');

        if (!uniqueColors.has(colorKey)) {
          var pickedLayer = layers[pickedLayerIndex];

          if (pickedLayer) {
            uniqueColors.set(colorKey, {
              pickedColor: pickedColor,
              pickedLayer: pickedLayer,
              pickedObjectIndex: pickedLayer.decodePickingColor(pickedColor)
            });
          } else {
            _log.default.error('Picked non-existent layer. Is picking buffer corrupt?')();
          }
        }
      }
    }
  }

  return Array.from(uniqueColors.values());
}
//# sourceMappingURL=query-object.js.map