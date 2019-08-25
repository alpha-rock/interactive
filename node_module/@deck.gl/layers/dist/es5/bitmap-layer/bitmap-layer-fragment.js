"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = "\n#define SHADER_NAME bitmap-layer-fragment-shader\n\n#ifdef GL_ES\nprecision highp float;\n#endif\n\nuniform sampler2D bitmapTexture;\n\nvarying vec2 vTexCoord;\n\nuniform float desaturate;\nuniform vec4 transparentColor;\nuniform vec3 tintColor;\nuniform float opacity;\n\n// apply desaturation\nvec3 color_desaturate(vec3 color) {\n  float luminance = (color.r + color.g + color.b) * 0.333333333;\n  return mix(color, vec3(luminance), desaturate);\n}\n\n// apply tint\nvec3 color_tint(vec3 color) {\n  return color * tintColor;\n}\n\n// blend with background color\nvec4 apply_opacity(vec3 color, float alpha) {\n  return mix(transparentColor, vec4(color, 1.0), alpha);\n}\n\nvoid main(void) {\n  vec4 bitmapColor = texture2D(bitmapTexture, vTexCoord);\n\n  gl_FragColor = apply_opacity(color_tint(color_desaturate(bitmapColor.rgb)), bitmapColor.a * opacity);\n\n  geometry.uv = vTexCoord;\n  DECKGL_FILTER_COLOR(gl_FragColor, geometry);\n}\n";
exports.default = _default;
//# sourceMappingURL=bitmap-layer-fragment.js.map