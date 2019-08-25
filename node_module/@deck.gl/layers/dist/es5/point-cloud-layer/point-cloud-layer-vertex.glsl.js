"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = "#define SHADER_NAME point-cloud-layer-vertex-shader\n\nattribute vec3 positions;\nattribute vec3 instanceNormals;\nattribute vec4 instanceColors;\nattribute vec3 instancePositions;\nattribute vec2 instancePositions64xyLow;\nattribute vec3 instancePickingColors;\n\nuniform float opacity;\nuniform float radiusPixels;\n\nvarying vec4 vColor;\nvarying vec2 unitPosition;\n\nvoid main(void) {\n  geometry.worldPosition = instancePositions;\n  geometry.normal = project_normal(instanceNormals);\n  unitPosition = positions.xy;\n  geometry.uv = unitPosition;\n  vec3 offset = vec3(positions.xy * radiusPixels, 0.0);\n  DECKGL_FILTER_SIZE(offset, geometry);\n\n  gl_Position = project_position_to_clipspace(instancePositions, instancePositions64xyLow, vec3(0.), geometry.position);\n  gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);\n  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);\n  vec3 lightColor = lighting_getLightColor(instanceColors.rgb, project_uCameraPosition, geometry.position.xyz, geometry.normal);\n  vColor = vec4(lightColor, instanceColors.a * opacity);\n  DECKGL_FILTER_COLOR(vColor, geometry);\n  picking_setPickingColor(instancePickingColors);\n}\n";
exports.default = _default;
//# sourceMappingURL=point-cloud-layer-vertex.glsl.js.map