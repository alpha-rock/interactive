"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parsePosition = parsePosition;
exports.getPosition = getPosition;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var PERCENT_OR_PIXELS_REGEX = /([0-9]+\.?[0-9]*)(%|px)/;

function parsePosition(value) {
  switch ((0, _typeof2.default)(value)) {
    case 'number':
      return {
        position: value,
        relative: false
      };

    case 'string':
      var match = value.match(PERCENT_OR_PIXELS_REGEX);

      if (match && match.length >= 3) {
        var relative = match[2] === '%';
        var position = parseFloat(match[1]);
        return {
          position: relative ? position / 100 : position,
          relative: relative
        };
      }

    default:
      throw new Error("Could not parse position string ".concat(value));
  }
}

function getPosition(position, extent) {
  return position.relative ? Math.round(position.position * extent) : position.position;
}
//# sourceMappingURL=positions.js.map