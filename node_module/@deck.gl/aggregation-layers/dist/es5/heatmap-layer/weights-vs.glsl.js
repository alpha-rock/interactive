"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = "attribute vec3 positions;\nattribute float weights;\nvarying vec4 weightsTexture;\nuniform float radiusPixels;\nuniform float textureWidth;\nuniform vec4 commonBounds;\nvoid main()\n{\n  weightsTexture = vec4(weights, 0., 0., 1.);\n\n  float radiusTexels  = radiusPixels * textureWidth / (commonBounds.z - commonBounds.x);\n  gl_PointSize = radiusTexels * 2.;\n\n  vec3 commonPosition = project_position(positions, vec2(0));\n  gl_Position.xy = (commonPosition.xy - commonBounds.xy) / (commonBounds.zw - commonBounds.xy) ;\n  gl_Position.xy = (gl_Position.xy * 2.) - (1.);\n}\n";
exports.default = _default;
//# sourceMappingURL=weights-vs.glsl.js.map