import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
export function getBounds(points) {
  var x = points.map(function (p) {
    return p[0];
  });
  var y = points.map(function (p) {
    return p[1];
  });
  var xMin = Math.min.apply(null, x);
  var xMax = Math.max.apply(null, x);
  var yMin = Math.min.apply(null, y);
  var yMax = Math.max.apply(null, y);
  return [xMin, yMin, xMax, yMax];
}
export function boundsContain(currentBounds, targetBounds) {
  if (targetBounds[0] >= currentBounds[0] && targetBounds[2] <= currentBounds[2] && targetBounds[1] >= currentBounds[1] && targetBounds[3] <= currentBounds[3]) {
    return true;
  }

  return false;
}
var scratchArray = new Float32Array(12);
export function packVertices(points) {
  var dimensions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var index = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = points[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var point = _step.value;

      for (var i = 0; i < dimensions; i++) {
        scratchArray[index++] = point[i] || 0;
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

  return scratchArray;
}
export function scaleToAspectRatio(boundingBox, width, height) {
  var _boundingBox = _slicedToArray(boundingBox, 4),
      xMin = _boundingBox[0],
      yMin = _boundingBox[1],
      xMax = _boundingBox[2],
      yMax = _boundingBox[3];

  var currentWidth = xMax - xMin;
  var currentHeight = yMax - yMin;
  var newWidth = currentWidth;
  var newHeight = currentHeight;

  if (currentWidth / currentHeight < width / height) {
    newWidth = width / height * currentHeight;
  } else {
    newHeight = height / width * currentWidth;
  }

  if (newWidth < width) {
    newWidth = width;
    newHeight = height;
  }

  var xCenter = (xMax + xMin) / 2;
  var yCenter = (yMax + yMin) / 2;
  return [xCenter - newWidth / 2, yCenter - newHeight / 2, xCenter + newWidth / 2, yCenter + newHeight / 2];
}
export function getTextureCoordinates(point, bounds) {
  var _bounds = _slicedToArray(bounds, 4),
      xMin = _bounds[0],
      yMin = _bounds[1],
      xMax = _bounds[2],
      yMax = _bounds[3];

  return [(point[0] - xMin) / (xMax - xMin), (point[1] - yMin) / (yMax - yMin)];
}
//# sourceMappingURL=heatmap-layer-utils.js.map