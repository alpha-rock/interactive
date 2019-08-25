"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = "#define SHADER_NAME multi-icon-layer-vertex-shader\n\nattribute vec2 positions;\n\nattribute vec3 instancePositions;\nattribute vec2 instancePositions64xyLow;\nattribute float instanceSizes;\nattribute float instanceAngles;\nattribute vec4 instanceColors;\nattribute vec3 instancePickingColors;\nattribute vec4 instanceIconFrames;\nattribute float instanceColorModes;\nattribute vec2 instanceOffsets;\nattribute vec2 instancePixelOffset;\n\nuniform float sizeScale;\nuniform float sizeMinPixels;\nuniform float sizeMaxPixels;\nuniform vec2 iconsTextureDim;\nuniform float gamma;\nuniform float opacity;\nuniform bool billboard;\n\nvarying vec4 vColor;\nvarying vec2 vTextureCoords;\nvarying float vGamma;\nvarying vec2 uv;\n\nvec2 rotate_by_angle(vec2 vertex, float angle) {\n  float angle_radian = angle * PI / 180.0;\n  float cos_angle = cos(angle_radian);\n  float sin_angle = sin(angle_radian);\n  mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);\n  return rotationMatrix * vertex;\n}\n\nvoid main(void) {\n  geometry.worldPosition = instancePositions;\n  geometry.uv = positions;\n  uv = positions;\n\n  vec2 iconSize = instanceIconFrames.zw;\n  float sizePixels = clamp(\n    project_size_to_pixel(instanceSizes * sizeScale),\n    sizeMinPixels, sizeMaxPixels\n  );\n  float instanceScale = iconSize.y == 0.0 ? 0.0 : sizePixels / iconSize.y;\n  vec2 pixelOffset = positions / 2.0 * iconSize + instanceOffsets;\n\n  pixelOffset = rotate_by_angle(pixelOffset, instanceAngles) * instanceScale;\n  pixelOffset += instancePixelOffset;\n  \n  if (billboard)  {\n    pixelOffset.y *= -1.0;\n    gl_Position = project_position_to_clipspace(instancePositions, instancePositions64xyLow, vec3(0.0), geometry.position); \n    vec3 offset = vec3(pixelOffset, 0.0);\n    DECKGL_FILTER_SIZE(offset, geometry);\n    gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);\n\n  } else {\n    vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);\n    DECKGL_FILTER_SIZE(offset_common, geometry);\n    gl_Position = project_position_to_clipspace(instancePositions, instancePositions64xyLow, offset_common, geometry.position); \n  }\n  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);\n\n  vTextureCoords = mix(\n    instanceIconFrames.xy,\n    instanceIconFrames.xy + iconSize,\n    (positions.xy + 1.0) / 2.0\n  ) / iconsTextureDim;\n\n  vTextureCoords.y = 1.0 - vTextureCoords.y;\n\n  vColor = vec4(instanceColors.rgb, instanceColors.a * opacity);\n  DECKGL_FILTER_COLOR(vColor, geometry);\n  picking_setPickingColor(instancePickingColors);\n\n  vGamma = gamma / (sizeScale * iconSize.y);\n}\n";
exports.default = _default;
//# sourceMappingURL=multi-icon-layer-vertex.glsl.js.map