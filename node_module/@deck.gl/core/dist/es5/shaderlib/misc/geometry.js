"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var vs = "\nstruct VertexGeometry {\n  vec4 position;\n  vec3 worldPosition;\n  vec3 worldPositionAlt;\n  vec3 normal;\n  vec2 uv;\n} geometry;\n";
var fs = "\nstruct FragmentGeometry {\n  vec2 uv;\n} geometry;\n";
var _default = {
  name: 'geometry',
  vs: vs,
  fs: fs
};
exports.default = _default;
//# sourceMappingURL=geometry.js.map