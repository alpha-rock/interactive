"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = "#define SHADER_NAME triangle-layer-fragment-shader\n\nprecision highp float;\n\nuniform float opacity;\nuniform sampler2D texture;\nvarying vec2 vTexCoords;\nuniform sampler2D colorTexture;\nuniform float threshold;\n\nvarying float vIntensity;\n\nvec4 getLinearColor(float value) {\n  float factor = clamp(value, 0., 1.);\n  vec4 color = texture2D(colorTexture, vec2(factor, 0.5));\n  color.a *= min(value / threshold, 1.0);\n  return color;\n}\n\nvoid main(void) {\n  float weight = texture2D(texture, vTexCoords).r;\n  if (weight == 0.) {\n     discard;\n  }\n  vec4 linearColor = getLinearColor(weight * vIntensity);\n  linearColor.a *= opacity;\n  gl_FragColor =linearColor;\n}\n";
exports.default = _default;
//# sourceMappingURL=triangle-layer-fragment.glsl.js.map