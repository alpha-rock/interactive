import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { createModuleInjection } from '@luma.gl/core';
import { PROJECT_COORDINATE_SYSTEM } from '../project/constants';
import { Vector3, Matrix4 } from 'math.gl';
import memoize from '../../utils/memoize';
import { pixelsToWorld } from 'viewport-mercator-project';
var vs = "\nconst int max_lights = 2;\nuniform mat4 shadow_uViewProjectionMatrices[max_lights];\nuniform vec4 shadow_uProjectCenters[max_lights];\nuniform bool shadow_uDrawShadowMap;\nuniform bool shadow_uUseShadowMap;\nuniform int shadow_uLightId;\nuniform float shadow_uLightCount;\n\nvarying vec3 shadow_vPosition[max_lights];\n\nvec4 shadow_setVertexPosition(vec4 position_commonspace) {\n  if (shadow_uDrawShadowMap) {\n    return project_common_position_to_clipspace(position_commonspace, shadow_uViewProjectionMatrices[shadow_uLightId], shadow_uProjectCenters[shadow_uLightId]);\n  }\n  if (shadow_uUseShadowMap) {\n    for (int i = 0; i < max_lights; i++) {\n      if(i < int(shadow_uLightCount)) {\n        vec4 shadowMap_position = project_common_position_to_clipspace(position_commonspace, shadow_uViewProjectionMatrices[i], shadow_uProjectCenters[i]);\n        shadow_vPosition[i] = (shadowMap_position.xyz / shadowMap_position.w + 1.0) / 2.0;\n      }\n    }\n  }\n  return gl_Position;\n}\n";
var fs = "\nconst int max_lights = 2;\nuniform bool shadow_uDrawShadowMap;\nuniform bool shadow_uUseShadowMap;\nuniform sampler2D shadow_uShadowMap0;\nuniform sampler2D shadow_uShadowMap1;\nuniform vec4 shadow_uColor;\nuniform float shadow_uLightCount;\n\nvarying vec3 shadow_vPosition[max_lights];\n\nconst vec4 bitPackShift = vec4(1.0, 255.0, 65025.0, 16581375.0);\nconst vec4 bitUnpackShift = 1.0 / bitPackShift;\nconst vec4 bitMask = vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0,  0.0);\n\nfloat shadow_getShadowWeight(vec3 position, sampler2D shadowMap) {\n  vec4 rgbaDepth = texture2D(shadowMap, position.xy);\n\n  float z = dot(rgbaDepth, bitUnpackShift);\n  return smoothstep(0.001, 0.01, position.z - z);\n}\n\nvec4 shadow_filterShadowColor(vec4 color) {\n  if (shadow_uDrawShadowMap) {\n    vec4 rgbaDepth = fract(gl_FragCoord.z * bitPackShift);\n    rgbaDepth -= rgbaDepth.gbaa * bitMask;\n    return rgbaDepth;\n  }\n  if (shadow_uUseShadowMap) {\n    float shadowAlpha = 0.0;\n    shadowAlpha += shadow_getShadowWeight(shadow_vPosition[0], shadow_uShadowMap0);\n    if(shadow_uLightCount > 1.0) {\n      shadowAlpha += shadow_getShadowWeight(shadow_vPosition[1], shadow_uShadowMap1);\n    }\n    shadowAlpha *= shadow_uColor.a / shadow_uLightCount;\n    float blendedAlpha = shadowAlpha + color.a * (1.0 - shadowAlpha);\n\n    return vec4(\n      mix(color.rgb, shadow_uColor.rgb, shadowAlpha / blendedAlpha),\n      blendedAlpha\n    );\n  }\n  return color;\n}\n";
var moduleName = 'shadow';
var getMemoizedViewportCenterPosition = memoize(getViewportCenterPosition);
var getMemoizedViewProjectionMatrices = memoize(getViewProjectionMatrices);
createModuleInjection(moduleName, {
  hook: 'vs:DECKGL_FILTER_GL_POSITION',
  injection: "\nposition = shadow_setVertexPosition(geometry.position);\n  "
});
createModuleInjection(moduleName, {
  hook: 'fs:DECKGL_FILTER_COLOR',
  injection: "\ncolor = shadow_filterShadowColor(color);\n  "
});
var DEFAULT_SHADOW_COLOR = [0, 0, 0, 1.0];
var VECTOR_TO_POINT_MATRIX = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0];

function screenToCommonSpace(xyz, pixelUnprojectionMatrix) {
  var _xyz = _slicedToArray(xyz, 3),
      x = _xyz[0],
      y = _xyz[1],
      z = _xyz[2];

  var coord = pixelsToWorld([x, y, z], pixelUnprojectionMatrix);

  if (Number.isFinite(z)) {
    return coord;
  }

  return [coord[0], coord[1], 0];
}

function getViewportCenterPosition(_ref) {
  var viewport = _ref.viewport,
      center = _ref.center;
  return new Matrix4(viewport.viewProjectionMatrix).invert().transformVector4(center);
}

function getViewProjectionMatrices(_ref2) {
  var viewport = _ref2.viewport,
      shadowMatrices = _ref2.shadowMatrices;
  var projectionMatrices = [];
  var pixelUnprojectionMatrix = viewport.pixelUnprojectionMatrix;
  var farZ = viewport.isGeospatial ? undefined : 1;
  var corners = [[0, 0, farZ], [viewport.width, 0, farZ], [0, viewport.height, farZ], [viewport.width, viewport.height, farZ], [0, 0, -1], [viewport.width, 0, -1], [0, viewport.height, -1], [viewport.width, viewport.height, -1]].map(function (pixel) {
    return screenToCommonSpace(pixel, pixelUnprojectionMatrix);
  });
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var shadowMatrix = _step.value;
      var viewMatrix = shadowMatrix.clone().translate(new Vector3(viewport.center).negate());
      var positions = corners.map(function (corner) {
        return viewMatrix.transformVector3(corner);
      });
      var projectionMatrix = new Matrix4().ortho({
        left: Math.min.apply(Math, _toConsumableArray(positions.map(function (position) {
          return position[0];
        }))),
        right: Math.max.apply(Math, _toConsumableArray(positions.map(function (position) {
          return position[0];
        }))),
        bottom: Math.min.apply(Math, _toConsumableArray(positions.map(function (position) {
          return position[1];
        }))),
        top: Math.max.apply(Math, _toConsumableArray(positions.map(function (position) {
          return position[1];
        }))),
        near: Math.min.apply(Math, _toConsumableArray(positions.map(function (position) {
          return -position[2];
        }))),
        far: Math.max.apply(Math, _toConsumableArray(positions.map(function (position) {
          return -position[2];
        })))
      });
      projectionMatrices.push(projectionMatrix.multiplyRight(shadowMatrix));
    };

    for (var _iterator = shadowMatrices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return projectionMatrices;
}

function createShadowUniforms() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var uniforms = {
    shadow_uDrawShadowMap: Boolean(opts.drawToShadowMap),
    shadow_uUseShadowMap: opts.shadowMaps ? opts.shadowMaps.length > 0 : false,
    shadow_uColor: opts.shadowColor || DEFAULT_SHADOW_COLOR,
    shadow_uLightId: opts.shadowLightId || 0,
    shadow_uLightCount: opts.shadowMatrices.length
  };
  var center = getMemoizedViewportCenterPosition({
    viewport: opts.viewport,
    center: context.project_uCenter
  });
  var projectCenters = [];
  var viewProjectionMatrices = getMemoizedViewProjectionMatrices({
    shadowMatrices: opts.shadowMatrices,
    viewport: opts.viewport
  }).slice();

  for (var i = 0; i < opts.shadowMatrices.length; i++) {
    var viewProjectionMatrix = viewProjectionMatrices[i];
    var viewProjectionMatrixCentered = viewProjectionMatrix.clone().translate(new Vector3(opts.viewport.center).negate());

    if (context.project_uCoordinateSystem === PROJECT_COORDINATE_SYSTEM.LNG_LAT) {
      viewProjectionMatrices[i] = viewProjectionMatrixCentered;
      projectCenters[i] = [0, 0, 0, 0];
    } else {
      viewProjectionMatrices[i] = viewProjectionMatrix.clone().multiplyRight(VECTOR_TO_POINT_MATRIX);
      projectCenters[i] = viewProjectionMatrixCentered.transformVector4(center);
    }
  }

  for (var _i = 0; _i < viewProjectionMatrices.length; _i++) {
    uniforms["shadow_uViewProjectionMatrices[".concat(_i, "]")] = viewProjectionMatrices[_i];
    uniforms["shadow_uProjectCenters[".concat(_i, "]")] = projectCenters[_i];

    if (opts.shadowMaps && opts.shadowMaps.length > 0) {
      uniforms["shadow_uShadowMap".concat(_i)] = opts.shadowMaps[_i];
    } else {
      uniforms["shadow_uShadowMap".concat(_i)] = opts.dummyShadowMap;
    }
  }

  return uniforms;
}

export default {
  name: 'shadow',
  dependencies: ['project'],
  vs: vs,
  fs: fs,
  getUniforms: function getUniforms() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (opts.drawToShadowMap || opts.shadowMaps && opts.shadowMaps.length > 0) {
      var shadowUniforms = {};
      var _opts$shadowEnabled = opts.shadowEnabled,
          shadowEnabled = _opts$shadowEnabled === void 0 ? true : _opts$shadowEnabled;

      if (shadowEnabled && opts.shadowMatrices && opts.shadowMatrices.length > 0) {
        Object.assign(shadowUniforms, createShadowUniforms(opts, context));
      } else {
        Object.assign(shadowUniforms, {
          shadow_uDrawShadowMap: false,
          shadow_uUseShadowMap: false
        });
      }

      return shadowUniforms;
    }

    return {};
  }
};
//# sourceMappingURL=shadow.js.map