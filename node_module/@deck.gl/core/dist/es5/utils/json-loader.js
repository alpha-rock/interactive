"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function isJSON(text) {
  var firstChar = text[0];
  var lastChar = text[text.length - 1];
  return firstChar === '{' && lastChar === '}' || firstChar === '[' && lastChar === ']';
}

var _default = {
  name: 'JSON',
  extensions: ['json', 'geojson'],
  testText: isJSON,
  parseTextSync: JSON.parse
};
exports.default = _default;
//# sourceMappingURL=json-loader.js.map