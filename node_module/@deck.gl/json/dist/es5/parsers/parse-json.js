"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseJSON;

function parseJSON(json) {
  return typeof json === 'string' ? JSON.parse(json) : Object.assign({}, json);
}
//# sourceMappingURL=parse-json.js.map