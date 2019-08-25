"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = "\n#define SHADER_NAME simple-mesh-layer-fs\n\n// Note(Tarek): headless-gl supports derivatives, but doesn't report it via getExtension. Awesome!\n#ifdef DERIVATIVES\n#define FLAT_SHADE_NORMAL normalize(cross(dFdx(position_commonspace.xyz), dFdy(position_commonspace.xyz)))\n#else\n#define FLAT_SHADE_NORMAL vec3(0.0, 0.0, 1.0)\n#endif\n\nprecision highp float;\n\nuniform bool hasTexture;\nuniform sampler2D sampler;\nuniform bool flatShading;\n\nvarying vec2 vTexCoord;\nvarying vec3 cameraPosition;\nvarying vec3 normals_commonspace;\nvarying vec4 position_commonspace;\nvarying vec4 vColor;\n\nvoid main(void) {\n  geometry.uv = vTexCoord;\n\n  vec3 normal;\n  if (flatShading) {\n    normal = FLAT_SHADE_NORMAL;\n  } else {\n    normal = normals_commonspace;\n  }\n\n  vec4 color = hasTexture ? texture2D(sampler, vTexCoord) : vColor;\n  vec3 lightColor = lighting_getLightColor(color.rgb, cameraPosition, position_commonspace.xyz, normal);\n  gl_FragColor = vec4(lightColor, color.a);\n\n  DECKGL_FILTER_COLOR(gl_FragColor, geometry);\n}\n";
exports.default = _default;
//# sourceMappingURL=simple-mesh-layer-fragment.glsl1.js.map