"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = "#define SHADER_NAME multi-icon-layer-fragment-shader\n\nprecision highp float;\n\nuniform sampler2D iconsTexture;\nuniform float buffer;\nuniform bool sdf;\n\nvarying vec4 vColor;\nvarying vec2 vTextureCoords;\nvarying float vGamma;\nvarying vec2 uv;\n\nconst float MIN_ALPHA = 0.05;\n\nvoid main(void) {\n  geometry.uv = uv;\n\n  vec4 texColor = texture2D(iconsTexture, vTextureCoords);\n  \n  float alpha = texColor.a;\n  if (sdf) {\n    float distance = texture2D(iconsTexture, vTextureCoords).a;\n    alpha = smoothstep(buffer - vGamma, buffer + vGamma, distance);\n  }\n  float a = alpha * vColor.a;\n\n  if (a < MIN_ALPHA) {\n    discard;\n  }\n\n  gl_FragColor = vec4(vColor.rgb, a);\n\n  DECKGL_FILTER_COLOR(gl_FragColor, geometry);\n}\n";
exports.default = _default;
//# sourceMappingURL=multi-icon-layer-fragment.glsl.js.map