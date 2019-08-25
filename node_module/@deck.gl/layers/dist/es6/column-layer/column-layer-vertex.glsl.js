export default `\

#define SHADER_NAME column-layer-vertex-shader

attribute vec3 positions;
attribute vec3 normals;

attribute vec3 instancePositions;
attribute float instanceElevations;
attribute vec2 instancePositions64xyLow;
attribute vec4 instanceFillColors;
attribute vec4 instanceLineColors;
attribute float instanceStrokeWidths;

attribute vec3 instancePickingColors;

// Custom uniforms
uniform float opacity;
uniform float radius;
uniform float angle;
uniform vec2 offset;
uniform bool extruded;
uniform bool isStroke;
uniform float coverage;
uniform float elevationScale;
uniform float edgeDistance;
uniform float widthScale;
uniform float widthMinPixels;
uniform float widthMaxPixels;

// Result
varying vec4 vColor;

void main(void) {
  geometry.worldPosition = instancePositions;
  
  vec4 color = isStroke ? instanceLineColors : instanceFillColors;
  // rotate primitive position and normal
  mat2 rotationMatrix = mat2(cos(angle), sin(angle), -sin(angle), cos(angle));

  // calculate elevation, if 3d not enabled set to 0
  // cylindar gemoetry height are between -1.0 to 1.0, transform it to between 0, 1
  float elevation = 0.0;
  // calculate stroke offset
  float strokeOffsetRatio = 1.0;

  if (extruded) {
    elevation = instanceElevations * (positions.z + 1.0) / 2.0 * elevationScale;
  } else if (isStroke) {
    float widthPixels = clamp(project_size_to_pixel(instanceStrokeWidths * widthScale),
      widthMinPixels, widthMaxPixels) / 2.0;
    strokeOffsetRatio += sign(positions.z) * project_pixel_size(widthPixels) / project_size(edgeDistance * coverage * radius);
  }

  // if alpha == 0.0 or z < 0.0, do not render element
  float shouldRender = float(color.a > 0.0 && instanceElevations >= 0.0);
  float dotRadius = radius * coverage * shouldRender;

  geometry.normal = project_normal(vec3(rotationMatrix * normals.xy, normals.z));

  // project center of column
  vec3 centroidPosition = vec3(instancePositions.xy, instancePositions.z + elevation);
  vec2 centroidPosition64xyLow = instancePositions64xyLow;
  vec3 pos = vec3(project_size(rotationMatrix * positions.xy * strokeOffsetRatio + offset) * dotRadius, 0.);
  DECKGL_FILTER_SIZE(pos, geometry);

  gl_Position = project_position_to_clipspace(centroidPosition, centroidPosition64xyLow, pos, geometry.position);
  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);

  // Light calculations
  if (extruded && !isStroke) {
    vec3 lightColor = lighting_getLightColor(color.rgb, project_uCameraPosition, geometry.position.xyz, geometry.normal);
    vColor = vec4(lightColor, color.a * opacity);
  } else {
    vColor = vec4(color.rgb, color.a * opacity);
  }
  DECKGL_FILTER_COLOR(vColor, geometry);

  // Set color to be rendered to picking fbo (also used to check for selection highlight).
  picking_setPickingColor(instancePickingColors);
}
`;
//# sourceMappingURL=column-layer-vertex.glsl.js.map