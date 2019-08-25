"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = "varying vec4 weightsTexture;\nfloat gaussianKDE(float u){\n  return pow(2.71828, -u*u/0.05555)/(1.77245385*0.166666);\n}\nvoid main()\n{\n  float dist = length(gl_PointCoord - vec2(0.5, 0.5));\n  if (dist > 0.5) {\n    discard;\n  }\n  gl_FragColor.rgb = weightsTexture.rgb * gaussianKDE(2. * dist);\n  gl_FragColor.a = 1.0;\n}\n";
exports.default = _default;
//# sourceMappingURL=weights-fs.glsl.js.map