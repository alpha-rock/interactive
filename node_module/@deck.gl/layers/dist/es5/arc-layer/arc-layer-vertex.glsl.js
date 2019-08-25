"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = "#define SHADER_NAME arc-layer-vertex-shader\n\nattribute vec3 positions;\nattribute vec4 instanceSourceColors;\nattribute vec4 instanceTargetColors;\nattribute vec4 instancePositions;\nattribute vec4 instancePositions64Low;\nattribute vec3 instancePickingColors;\nattribute float instanceWidths;\nattribute float instanceHeights;\nattribute float instanceTilts;\n\nuniform float numSegments;\nuniform float opacity;\nuniform float widthScale;\nuniform float widthMinPixels;\nuniform float widthMaxPixels;\n\nvarying vec4 vColor;\nvarying vec2 uv;\n\nfloat paraboloid(vec2 source, vec2 target, float ratio) {\n\n  vec2 x = mix(source, target, ratio);\n  vec2 center = mix(source, target, 0.5);\n\n  float dSourceCenter = distance(source, center);\n  float dXCenter = distance(x, center);\n  return (dSourceCenter + dXCenter) * (dSourceCenter - dXCenter);\n}\nvec2 getExtrusionOffset(vec2 line_clipspace, float offset_direction, float width) {\n  vec2 dir_screenspace = normalize(line_clipspace * project_uViewportSize);\n  dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);\n\n  return dir_screenspace * offset_direction * width / 2.0;\n}\n\nfloat getSegmentRatio(float index) {\n  return smoothstep(0.0, 1.0, index / (numSegments - 1.0));\n}\n\nvec3 getPos(vec2 source, vec2 target, float segmentRatio) {\n  float vertexHeight = sqrt(max(0.0, paraboloid(source, target, segmentRatio))) * instanceHeights;\n\n  float tiltAngle = radians(instanceTilts);\n  vec2 tiltDirection = normalize(target - source);\n  vec2 tilt = vec2(-tiltDirection.y, tiltDirection.x) * vertexHeight * sin(tiltAngle);\n\n  return vec3(\n    mix(source, target, segmentRatio) + tilt,\n    vertexHeight * cos(tiltAngle)\n  );\n}\n\nvoid main(void) {\n  geometry.worldPosition = vec3(instancePositions.xy, 0.0);\n  geometry.worldPositionAlt = vec3(instancePositions.zw, 0.0);\n\n  vec2 source = project_position(geometry.worldPosition, instancePositions64Low.xy).xy;\n  vec2 target = project_position(geometry.worldPositionAlt, instancePositions64Low.zw).xy;\n\n  float segmentIndex = positions.x;\n  float segmentRatio = getSegmentRatio(segmentIndex);\n  float indexDir = mix(-1.0, 1.0, step(segmentIndex, 0.0));\n  float nextSegmentRatio = getSegmentRatio(segmentIndex + indexDir);\n\n  vec3 currPos = getPos(source, target, segmentRatio);\n  vec3 nextPos = getPos(source, target, nextSegmentRatio);\n  vec4 curr = project_common_position_to_clipspace(vec4(currPos, 1.0));\n  vec4 next = project_common_position_to_clipspace(vec4(nextPos, 1.0));\n  geometry.position = vec4(currPos, 1.0);\n  uv = vec2(segmentRatio, positions.y);\n  geometry.uv = uv;\n  float widthPixels = clamp(\n    project_size_to_pixel(instanceWidths * widthScale),\n    widthMinPixels, widthMaxPixels\n  );\n  vec3 offset = vec3(\n    getExtrusionOffset((next.xy - curr.xy) * indexDir, positions.y, widthPixels),\n    0.0);\n  DECKGL_FILTER_SIZE(offset, geometry);\n  gl_Position = curr + vec4(project_pixel_size_to_clipspace(offset.xy), 0.0, 0.0);\n  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);\n\n  vec4 color = mix(instanceSourceColors, instanceTargetColors, segmentRatio);\n  vColor = vec4(color.rgb, color.a * opacity);\n  DECKGL_FILTER_COLOR(vColor, geometry);\n  picking_setPickingColor(instancePickingColors);\n}\n";
exports.default = _default;
//# sourceMappingURL=arc-layer-vertex.glsl.js.map