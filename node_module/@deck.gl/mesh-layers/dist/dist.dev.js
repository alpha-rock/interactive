(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("deck"), require("luma"));
	else if(typeof define === 'function' && define.amd)
		define(["deck", "luma"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("deck"), require("luma")) : factory(root["deck"], root["luma"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__deck_gl_core__, __WEBPACK_EXTERNAL_MODULE__luma_gl_constants__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./bundle.js":
/*!*******************!*\
  !*** ./bundle.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const deckGLLayers = __webpack_require__(/*! ./src */ "./src/index.js");

/* global window, global */
const _global = typeof window === 'undefined' ? global : window;
const deck = _global.deck || {};

// Check if peer dependencies are included
if (!deck.Layer) {
  throw new Error('@deck.gl/core is not found');
}

module.exports = Object.assign(deck, deckGLLayers);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: SimpleMeshLayer, ScenegraphLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _simple_mesh_layer_simple_mesh_layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple-mesh-layer/simple-mesh-layer */ "./src/simple-mesh-layer/simple-mesh-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleMeshLayer", function() { return _simple_mesh_layer_simple_mesh_layer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _scenegraph_layer_scenegraph_layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenegraph-layer/scenegraph-layer */ "./src/scenegraph-layer/scenegraph-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScenegraphLayer", function() { return _scenegraph_layer_scenegraph_layer__WEBPACK_IMPORTED_MODULE_1__["default"]; });

// Copyright (c) 2015 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
/* eslint-disable max-len */





/***/ }),

/***/ "./src/scenegraph-layer/gltf-utils.js":
/*!********************************************!*\
  !*** ./src/scenegraph-layer/gltf-utils.js ***!
  \********************************************/
/*! exports provided: waitForGLTFAssets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waitForGLTFAssets", function() { return waitForGLTFAssets; });
/* global requestAnimationFrame */

async function waitForGLTFAssets(gltfObjects) {
  const remaining = [];

  gltfObjects.scenes.forEach(scene => {
    scene.traverse(model => {
      Object.values(model.model.program.uniforms).forEach(uniform => {
        if (uniform.loaded === false) {
          remaining.push(uniform);
        }
      });
    });
  });

  return await waitWhileCondition(() => remaining.some(uniform => !uniform.loaded));
}

async function waitWhileCondition(condition) {
  while (condition()) {
    await new Promise(resolve => requestAnimationFrame(resolve));
  }
}


/***/ }),

/***/ "./src/scenegraph-layer/scenegraph-layer-fragment.glsl.js":
/*!****************************************************************!*\
  !*** ./src/scenegraph-layer/scenegraph-layer-fragment.glsl.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`\
#if (__VERSION__ < 300)
  #define _varying varying
  #define _texture2D texture2D
  #define fragmentColor gl_FragColor
#else
  #define _varying in
  #define _texture2D texture
  out vec4 fragmentColor;
#endif

// Uniforms
// none

// Varying
_varying vec4 vColor;

// MODULE_PBR contains all the varying definitions needed
#ifndef MODULE_PBR
  #if defined(HAS_UV) && defined(HAS_BASECOLORMAP)
    _varying vec2 vTEXCOORD_0;
    uniform sampler2D u_BaseColorSampler;
  #endif
#endif

void main(void) {
  #ifdef MODULE_PBR
    fragmentColor = vColor * pbr_filterColor(vec4(0));
    geometry.uv = pbr_vUV;
  #else
    #if defined(HAS_UV) && defined(HAS_BASECOLORMAP)
      fragmentColor = vColor * _texture2D(u_BaseColorSampler, vTEXCOORD_0);
      geometry.uv = vTEXCOORD_0;
    #else
      fragmentColor = vColor;
    #endif
  #endif

  DECKGL_FILTER_COLOR(fragmentColor, geometry);
}
`);


/***/ }),

/***/ "./src/scenegraph-layer/scenegraph-layer-vertex.glsl.js":
/*!**************************************************************!*\
  !*** ./src/scenegraph-layer/scenegraph-layer-vertex.glsl.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`\
#if (__VERSION__ < 300)
  #define _attribute attribute
  #define _varying varying
#else
  #define _attribute in
#define _varying out
#endif

// Instance attributes
_attribute vec3 instancePositions;
_attribute vec2 instancePositions64xy;
_attribute vec4 instanceColors;
_attribute vec3 instancePickingColors;
_attribute mat3 instanceModelMatrix;
_attribute vec3 instanceTranslation;

// Uniforms
uniform float sizeScale;
uniform mat4 sceneModelMatrix;

// Attributes
_attribute vec4 POSITION;

#ifdef HAS_UV
  _attribute vec2 TEXCOORD_0;
#endif

#ifdef MODULE_PBR
  #ifdef HAS_NORMALS
    _attribute vec4 NORMAL;
  #endif
#endif

// Varying
_varying vec4 vColor;

// MODULE_PBR contains all the varying definitions needed
#ifndef MODULE_PBR
  #ifdef HAS_UV
    _varying vec2 vTEXCOORD_0;
  #endif
#endif

// Main
void main(void) {
  #if defined(HAS_UV) && !defined(MODULE_PBR)
    vTEXCOORD_0 = TEXCOORD_0;
    geometry.uv = vTEXCOORD_0;
  #endif

  geometry.worldPosition = instancePositions;

  #ifdef MODULE_PBR
    // set PBR data
    #ifdef HAS_NORMALS
      pbr_vNormal = project_normal(instanceModelMatrix * (sceneModelMatrix * vec4(NORMAL.xyz, 0.0)).xyz);
      geometry.normal = pbr_vNormal;
    #endif

    #ifdef HAS_UV
      pbr_vUV = TEXCOORD_0;
    #else
      pbr_vUV = vec2(0., 0.);
    #endif    
    geometry.uv = pbr_vUV;
  #endif

  vec3 pos = (instanceModelMatrix * (sceneModelMatrix * POSITION).xyz) * sizeScale + instanceTranslation;
  pos = project_size(pos);
  DECKGL_FILTER_SIZE(pos, geometry);

  gl_Position = project_position_to_clipspace(instancePositions, instancePositions64xy, pos, geometry.position);
  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);

  #ifdef MODULE_PBR
    // set PBR data
    pbr_vPosition = geometry.position.xyz;
  #endif

  vColor = instanceColors;
  DECKGL_FILTER_COLOR(vColor, geometry);

  picking_setPickingColor(instancePickingColors);
}
`);


/***/ }),

/***/ "./src/scenegraph-layer/scenegraph-layer.js":
/*!**************************************************!*\
  !*** ./src/scenegraph-layer/scenegraph-layer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScenegraphLayer; });
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @luma.gl/core */ "@luma.gl/constants");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gltf_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gltf-utils */ "./src/scenegraph-layer/gltf-utils.js");
/* harmony import */ var _utils_matrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/matrix */ "./src/utils/matrix.js");
/* harmony import */ var _scenegraph_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scenegraph-layer-vertex.glsl */ "./src/scenegraph-layer/scenegraph-layer-vertex.glsl.js");
/* harmony import */ var _scenegraph_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scenegraph-layer-fragment.glsl */ "./src/scenegraph-layer/scenegraph-layer-fragment.glsl.js");
// Copyright (c) 2019 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.












const DEFAULT_COLOR = [255, 255, 255, 255];

const defaultProps = {
  scenegraph: {type: 'object', value: null, async: true},
  getScene: gltf => {
    if (gltf && gltf.scenes) {
      // gltf post processor replaces `gltf.scene` number with the scene `object`
      return typeof gltf.scene === 'object' ? gltf.scene : gltf.scenes[gltf.scene || 0];
    }
    return gltf;
  },
  getAnimator: scenegraph => scenegraph && scenegraph.animator,
  _animations: null,

  sizeScale: {type: 'number', value: 1, min: 0},
  getPosition: {type: 'accessor', value: x => x.position},
  getColor: {type: 'accessor', value: DEFAULT_COLOR},

  // flat or pbr
  _lighting: 'flat',
  // _lighting must be pbr for this to work
  _imageBasedLightingEnvironment: null,

  // yaw, pitch and roll are in degrees
  // https://en.wikipedia.org/wiki/Euler_angles
  // [pitch, yaw, roll]
  getOrientation: {type: 'accessor', value: [0, 0, 0]},
  getScale: {type: 'accessor', value: [1, 1, 1]},
  getTranslation: {type: 'accessor', value: [0, 0, 0]},
  // 4x4 matrix
  getTransformMatrix: {type: 'accessor', value: []}
};

class ScenegraphLayer extends _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["Layer"] {
  initializeState() {
    const attributeManager = this.getAttributeManager();
    attributeManager.addInstanced({
      instancePositions: {
        size: 3,
        accessor: 'getPosition',
        transition: true
      },
      instancePositions64xy: {
        size: 2,
        accessor: 'getPosition',
        update: this.calculateInstancePositions64xyLow
      },
      instanceColors: {
        type: _luma_gl_core__WEBPACK_IMPORTED_MODULE_1___default.a.UNSIGNED_BYTE,
        size: this.props.colorFormat.length,
        accessor: 'getColor',
        normalized: true,
        defaultValue: DEFAULT_COLOR,
        transition: true
      },
      instanceModelMatrix: _utils_matrix__WEBPACK_IMPORTED_MODULE_3__["MATRIX_ATTRIBUTES"]
    });
  }

  updateState(params) {
    super.updateState(params);
    const {props, oldProps} = params;

    if (props.scenegraph !== oldProps.scenegraph) {
      this._updateScenegraph(props);
    } else if (props._animations !== oldProps._animations) {
      this._applyAnimationsProp(this.state.scenegraph, this.state.animator, props._animations);
    }
  }

  finalizeState() {
    super.finalizeState();
    this._deleteScenegraph();
  }

  _updateScenegraph(props) {
    const {gl} = this.context;
    let scenegraphData;
    if (props.scenegraph instanceof _luma_gl_core__WEBPACK_IMPORTED_MODULE_1__["ScenegraphNode"]) {
      // Signature 1: props.scenegraph is a proper luma.gl Scenegraph
      scenegraphData = {scenes: [props.scenegraph]};
    } else if (props.scenegraph && !props.scenegraph.gltf) {
      // Converts loaders.gl gltf to luma.gl scenegraph using the undocumented @luma.gl/addons function
      const gltf = props.scenegraph;
      const gltfObjects = Object(_luma_gl_core__WEBPACK_IMPORTED_MODULE_1__["createGLTFObjects"])(gl, gltf, this.getLoadOptions());
      scenegraphData = Object.assign({gltf}, gltfObjects);

      Object(_gltf_utils__WEBPACK_IMPORTED_MODULE_2__["waitForGLTFAssets"])(gltfObjects).then(() => this.setNeedsRedraw());
    } else {
      // DEPRECATED PATH: Assumes this data was loaded through GLTFScenegraphLoader
      _luma_gl_core__WEBPACK_IMPORTED_MODULE_1__["log"].deprecated(
        'ScenegraphLayer.props.scenegraph',
        'Use GLTFLoader instead of GLTFScenegraphLoader'
      );
      scenegraphData = props.scenegraph;
    }

    const options = {layer: this, gl};
    const scenegraph = props.getScene(scenegraphData, options);
    const animator = props.getAnimator(scenegraphData, options);

    if (scenegraph instanceof _luma_gl_core__WEBPACK_IMPORTED_MODULE_1__["ScenegraphNode"]) {
      this._deleteScenegraph();
      this._applyAllAttributes(scenegraph);
      this._applyAnimationsProp(scenegraph, animator, props._animations);
      this.setState({scenegraph, animator});
    } else if (scenegraph !== null) {
      _luma_gl_core__WEBPACK_IMPORTED_MODULE_1__["log"].warn('invalid scenegraph:', scenegraph)();
    }
  }

  _applyAllAttributes(scenegraph) {
    if (this.state.attributesAvailable) {
      const allAttributes = this.getAttributeManager().getAttributes();
      scenegraph.traverse(model => {
        this._setModelAttributes(model.model, allAttributes);
      });
    }
  }

  _applyAnimationsProp(scenegraph, animator, animationsProp) {
    if (!scenegraph || !animator || !animationsProp) {
      return;
    }

    const animations = animator.getAnimations();

    // sort() to ensure '*' comes first so that other values can override
    Object.keys(animationsProp)
      .sort()
      .forEach(key => {
        // Key can be:
        //  - number for index number
        //  - name for animation name
        //  - * to affect all animations
        const value = animationsProp[key];

        if (key === '*') {
          animations.forEach(animation => {
            Object.assign(animation, value);
          });
        } else if (Number.isFinite(Number(key))) {
          const number = Number(key);
          if (number >= 0 && number < animations.length) {
            Object.assign(animations[number], value);
          } else {
            _luma_gl_core__WEBPACK_IMPORTED_MODULE_1__["log"].warn(`animation ${key} not found`)();
          }
        } else {
          const findResult = animations.find(({name}) => name === key);
          if (findResult) {
            Object.assign(findResult, value);
          } else {
            _luma_gl_core__WEBPACK_IMPORTED_MODULE_1__["log"].warn(`animation ${key} not found`)();
          }
        }
      });
  }

  _deleteScenegraph() {
    const {scenegraph} = this.state;
    if (scenegraph instanceof _luma_gl_core__WEBPACK_IMPORTED_MODULE_1__["ScenegraphNode"]) {
      scenegraph.delete();
    }
  }

  addVersionToShader(source) {
    if (Object(_luma_gl_core__WEBPACK_IMPORTED_MODULE_1__["isWebGL2"])(this.context.gl)) {
      return `#version 300 es\n${source}`;
    }

    return source;
  }

  getLoadOptions() {
    const modules = ['project32', 'picking'];
    const {_lighting, _imageBasedLightingEnvironment} = this.props;

    if (_lighting === 'pbr') {
      modules.push(_luma_gl_core__WEBPACK_IMPORTED_MODULE_1__["pbr"]);
    }

    let env = null;
    if (_imageBasedLightingEnvironment) {
      if (typeof _imageBasedLightingEnvironment === 'function') {
        env = _imageBasedLightingEnvironment({gl: this.context.gl, layer: this});
      } else {
        env = _imageBasedLightingEnvironment;
      }
    }

    return {
      gl: this.context.gl,
      waitForFullLoad: true,
      imageBasedLightingEnvironment: env,
      modelOptions: {
        vs: this.addVersionToShader(_scenegraph_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_4__["default"]),
        fs: this.addVersionToShader(_scenegraph_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_5__["default"]),
        modules,
        isInstanced: true
      },
      // tangents are not supported
      useTangents: false
    };
  }

  updateAttributes(changedAttributes) {
    this.setState({attributesAvailable: true});
    if (!this.state.scenegraph) return;

    this.state.scenegraph.traverse(model => {
      this._setModelAttributes(model.model, changedAttributes);
    });
  }

  draw({moduleParameters = null, parameters = {}, context}) {
    if (!this.state.scenegraph) return;

    if (this.props._animations && this.state.animator) {
      this.state.animator.animate(context.animationProps.time);
    }

    const {sizeScale} = this.props;
    const numInstances = this.getNumInstances();
    this.state.scenegraph.traverse((model, {worldMatrix}) => {
      model.model.setInstanceCount(numInstances);
      model.updateModuleSettings(moduleParameters);
      model.draw({
        parameters,
        uniforms: {
          sizeScale,
          sceneModelMatrix: worldMatrix,
          // Needed for PBR (TODO: find better way to get it)
          u_Camera: model.model.program.uniforms.project_uCameraPosition
        }
      });
    });
  }

  calculateInstancePositions64xyLow(attribute, {startRow, endRow}) {
    const isFP64 = this.use64bitPositions();
    attribute.constant = !isFP64;

    if (!isFP64) {
      attribute.value = new Float32Array(2);
      return;
    }

    const {data, getPosition} = this.props;
    const {value, size} = attribute;
    let i = startRow * size;
    const {iterable, objectInfo} = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["createIterable"])(data, startRow, endRow);
    for (const point of iterable) {
      objectInfo.index++;
      const position = getPosition(point, objectInfo);
      value[i++] = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["fp64LowPart"])(position[0]);
      value[i++] = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["fp64LowPart"])(position[1]);
    }
  }
}

ScenegraphLayer.layerName = 'ScenegraphLayer';
ScenegraphLayer.defaultProps = defaultProps;


/***/ }),

/***/ "./src/simple-mesh-layer/simple-mesh-layer-fragment.glsl.js":
/*!******************************************************************!*\
  !*** ./src/simple-mesh-layer/simple-mesh-layer-fragment.glsl.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`#version 300 es
#define SHADER_NAME simple-mesh-layer-fs

precision highp float;

uniform bool hasTexture;
uniform sampler2D sampler;
uniform bool flatShading;

in vec2 vTexCoord;
in vec3 cameraPosition;
in vec3 normals_commonspace;
in vec4 position_commonspace;
in vec4 vColor;

out vec4 fragColor;

void main(void) {
  geometry.uv = vTexCoord;

  vec3 normal;
  if (flatShading) {
    normal = normalize(cross(dFdx(position_commonspace.xyz), dFdy(position_commonspace.xyz)));
  } else {
    normal = normals_commonspace;
  }

  vec4 color = hasTexture ? texture(sampler, vTexCoord) : vColor;
  vec3 lightColor = lighting_getLightColor(color.rgb, cameraPosition, position_commonspace.xyz, normal);
  fragColor = vec4(lightColor, color.a);

  DECKGL_FILTER_COLOR(fragColor, geometry);
}
`);


/***/ }),

/***/ "./src/simple-mesh-layer/simple-mesh-layer-fragment.glsl1.js":
/*!*******************************************************************!*\
  !*** ./src/simple-mesh-layer/simple-mesh-layer-fragment.glsl1.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
#define SHADER_NAME simple-mesh-layer-fs

// Note(Tarek): headless-gl supports derivatives, but doesn't report it via getExtension. Awesome!
#ifdef DERIVATIVES
#define FLAT_SHADE_NORMAL normalize(cross(dFdx(position_commonspace.xyz), dFdy(position_commonspace.xyz)))
#else
#define FLAT_SHADE_NORMAL vec3(0.0, 0.0, 1.0)
#endif

precision highp float;

uniform bool hasTexture;
uniform sampler2D sampler;
uniform bool flatShading;

varying vec2 vTexCoord;
varying vec3 cameraPosition;
varying vec3 normals_commonspace;
varying vec4 position_commonspace;
varying vec4 vColor;

void main(void) {
  geometry.uv = vTexCoord;

  vec3 normal;
  if (flatShading) {
    normal = FLAT_SHADE_NORMAL;
  } else {
    normal = normals_commonspace;
  }

  vec4 color = hasTexture ? texture2D(sampler, vTexCoord) : vColor;
  vec3 lightColor = lighting_getLightColor(color.rgb, cameraPosition, position_commonspace.xyz, normal);
  gl_FragColor = vec4(lightColor, color.a);

  DECKGL_FILTER_COLOR(gl_FragColor, geometry);
}
`);


/***/ }),

/***/ "./src/simple-mesh-layer/simple-mesh-layer-vertex.glsl.js":
/*!****************************************************************!*\
  !*** ./src/simple-mesh-layer/simple-mesh-layer-vertex.glsl.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`#version 300 es
#define SHADER_NAME simple-mesh-layer-vs

// Scale the model
uniform float sizeScale;

// Primitive attributes
in vec3 positions;
in vec3 normals;
in vec2 texCoords;

// Instance attributes
in vec3 instancePositions;
in vec2 instancePositions64xy;
in vec4 instanceColors;
in vec3 instancePickingColors;
in mat3 instanceModelMatrix;
in vec3 instanceTranslation;

// Outputs to fragment shader
out vec2 vTexCoord;
out vec3 cameraPosition;
out vec3 normals_commonspace;
out vec4 position_commonspace;
out vec4 vColor;

void main(void) {
  geometry.worldPosition = instancePositions;
  geometry.uv = texCoords;

  vTexCoord = texCoords;
  cameraPosition = project_uCameraPosition;
  normals_commonspace = project_normal(instanceModelMatrix * normals);
  vColor = instanceColors;
  geometry.normal = normals_commonspace;

  vec3 pos = (instanceModelMatrix * positions) * sizeScale + instanceTranslation;
  pos = project_size(pos);
  DECKGL_FILTER_SIZE(pos, geometry);

  gl_Position = project_position_to_clipspace(instancePositions, instancePositions64xy, pos, position_commonspace);
  geometry.position = position_commonspace;
  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);

  DECKGL_FILTER_COLOR(vColor, geometry);

  picking_setPickingColor(instancePickingColors);
}
`);


/***/ }),

/***/ "./src/simple-mesh-layer/simple-mesh-layer-vertex.glsl1.js":
/*!*****************************************************************!*\
  !*** ./src/simple-mesh-layer/simple-mesh-layer-vertex.glsl1.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
#define SHADER_NAME simple-mesh-layer-vs

// Scale the model
uniform float sizeScale;

// Primitive attributes
attribute vec3 positions;
attribute vec3 normals;
attribute vec2 texCoords;

// Instance attributes
attribute vec3 instancePositions;
attribute vec2 instancePositions64xy;
attribute vec4 instanceColors;
attribute vec3 instancePickingColors;
attribute mat3 instanceModelMatrix;
attribute vec3 instanceTranslation;

// Outputs to fragment shader
varying vec2 vTexCoord;
varying vec3 cameraPosition;
varying vec3 normals_commonspace;
varying vec4 position_commonspace;
varying vec4 vColor;

void main(void) {
  geometry.worldPosition = instancePositions;
  geometry.uv = texCoords;

  vTexCoord = texCoords;
  cameraPosition = project_uCameraPosition;
  normals_commonspace = project_normal(instanceModelMatrix * normals);
  vColor = instanceColors;
  geometry.normal = normals_commonspace;

  vec3 pos = (instanceModelMatrix * positions) * sizeScale + instanceTranslation;
  pos = project_size(pos);
  DECKGL_FILTER_SIZE(pos, geometry);

  gl_Position = project_position_to_clipspace(instancePositions, instancePositions64xy, pos, position_commonspace);
  geometry.position = position_commonspace;
  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);

  DECKGL_FILTER_COLOR(vColor, geometry);

  picking_setPickingColor(instancePickingColors);
}
`);


/***/ }),

/***/ "./src/simple-mesh-layer/simple-mesh-layer.js":
/*!****************************************************!*\
  !*** ./src/simple-mesh-layer/simple-mesh-layer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleMeshLayer; });
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @luma.gl/constants */ "@luma.gl/constants");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/matrix */ "./src/utils/matrix.js");
/* harmony import */ var _simple_mesh_layer_vertex_glsl1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simple-mesh-layer-vertex.glsl1 */ "./src/simple-mesh-layer/simple-mesh-layer-vertex.glsl1.js");
/* harmony import */ var _simple_mesh_layer_fragment_glsl1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./simple-mesh-layer-fragment.glsl1 */ "./src/simple-mesh-layer/simple-mesh-layer-fragment.glsl1.js");
/* harmony import */ var _simple_mesh_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./simple-mesh-layer-vertex.glsl */ "./src/simple-mesh-layer/simple-mesh-layer-vertex.glsl.js");
/* harmony import */ var _simple_mesh_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./simple-mesh-layer-fragment.glsl */ "./src/simple-mesh-layer/simple-mesh-layer-fragment.glsl.js");
// Note: This file will either be moved back to deck.gl or reformatted to web-monorepo standards
// Disabling lint temporarily to facilitate copying code in and out of this repo
/* eslint-disable */

// Copyright (c) 2015 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.







// NOTE(Tarek): Should eventually phase out the glsl1 versions.





// Replacement for the external assert method to reduce bundle size
function assert(condition, message) {
  if (!condition) {
    throw new Error(`deck.gl: ${message}`);
  }
}

/*
 * Convert image data into texture
 * @returns {Texture2D} texture
 */
function getTextureFromData(gl, data, opts) {
  if (data instanceof _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__["Texture2D"]) {
    return data;
  }
  return new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__["Texture2D"](gl, Object.assign({data}, opts));
}

function validateGeometryAttributes(attributes) {
  assert(
    attributes.positions || attributes.POSITION,
    'SimpleMeshLayer requires "postions" or "POSITION" attribute in mesh property.'
  );
}

/*
 * Convert mesh data into geometry
 * @returns {Geometry} geometry
 */
function getGeometry(data) {
  if (data.attributes) {
    validateGeometryAttributes(data.attributes);
    if (data instanceof _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__["Geometry"]) {
      return data;
    } else {
      return new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__["Geometry"](data);
    }
  } else if (data.positions || data.POSITION) {
    validateGeometryAttributes(data);
    return new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__["Geometry"]({
      attributes: data
    });
  }
  throw Error('Invalid mesh');
}

const DEFAULT_COLOR = [0, 0, 0, 255];
const defaultMaterial = new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__["PhongMaterial"]();

const defaultProps = {
  mesh: {value: null, type: 'object', async: true},
  texture: null,
  sizeScale: {type: 'number', value: 1, min: 0},
  // TODO - parameters should be merged, not completely overridden
  parameters: {
    depthTest: true,
    depthFunc: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.LEQUAL
  },

  // NOTE(Tarek): Quick and dirty wireframe. Just draws
  // the same mesh with LINE_STRIPS. Won't follow edges
  // of the original mesh.
  wireframe: false,
  // Optional material for 'lighting' shader module
  material: defaultMaterial,
  getPosition: {type: 'accessor', value: x => x.position},
  getColor: {type: 'accessor', value: DEFAULT_COLOR},

  // yaw, pitch and roll are in degrees
  // https://en.wikipedia.org/wiki/Euler_angles
  // [pitch, yaw, roll]
  getOrientation: {type: 'accessor', value: [0, 0, 0]},
  getScale: {type: 'accessor', value: [1, 1, 1]},
  getTranslation: {type: 'accessor', value: [0, 0, 0]},
  // 4x4 matrix
  getTransformMatrix: {type: 'accessor', value: []}
};

class SimpleMeshLayer extends _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["Layer"] {
  getShaders() {
    const gl2 = Object(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__["isWebGL2"])(this.context.gl);
    const vs = gl2 ? _simple_mesh_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_5__["default"] : _simple_mesh_layer_vertex_glsl1__WEBPACK_IMPORTED_MODULE_3__["default"];
    const fs = gl2 ? _simple_mesh_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_6__["default"] : _simple_mesh_layer_fragment_glsl1__WEBPACK_IMPORTED_MODULE_4__["default"];

    return super.getShaders({vs, fs, modules: ['project32', 'phong-lighting', 'picking']});
  }

  initializeState() {
    const attributeManager = this.getAttributeManager();

    attributeManager.addInstanced({
      instancePositions: {
        transition: true,
        size: 3,
        accessor: 'getPosition'
      },
      instancePositions64xy: {
        size: 2,
        accessor: 'getPosition',
        update: this.calculateInstancePositions64xyLow
      },
      instanceColors: {
        type: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.UNSIGNED_BYTE,
        transition: true,
        size: this.props.colorFormat.length,
        normalized: true,
        accessor: 'getColor',
        defaultValue: [0, 0, 0, 255]
      },
      instanceModelMatrix: _utils_matrix__WEBPACK_IMPORTED_MODULE_2__["MATRIX_ATTRIBUTES"]
    });

    this.setState({
      // Avoid luma.gl's missing uniform warning
      // TODO - add feature to luma.gl to specify ignored uniforms?
      emptyTexture: new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__["Texture2D"](this.context.gl, {
        data: new Uint8Array(4),
        width: 1,
        height: 1
      })
    });
  }

  updateState({props, oldProps, changeFlags}) {
    super.updateState({props, oldProps, changeFlags});

    if (props.mesh !== oldProps.mesh || changeFlags.extensionsChanged) {
      if (this.state.model) {
        this.state.model.delete();
      }
      if (props.mesh) {
        this.setState({model: this.getModel(props.mesh)});

        const attributes = props.mesh.attributes || props.mesh;
        this.setState({
          hasNormals: Boolean(attributes.NORMAL || attributes.normals)
        });
      }
      this.getAttributeManager().invalidateAll();
    }

    if (props.texture !== oldProps.texture) {
      this.setTexture(props.texture);
    }

    if (this.state.model) {
      this.state.model.setDrawMode(this.props.wireframe ? _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.LINE_STRIP : _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.TRIANGLES);
    }
  }

  finalizeState() {
    super.finalizeState();

    this.state.emptyTexture.delete();
    if (this.state.texture) {
      this.state.texture.delete();
    }
  }

  draw({uniforms}) {
    if (!this.state.model) {
      return;
    }

    const {sizeScale} = this.props;

    this.state.model.draw({
      uniforms: Object.assign({}, uniforms, {
        sizeScale,
        flatShade: !this.state.hasNormals
      })
    });
  }

  getModel(mesh) {
    const model = new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__["Model"](
      this.context.gl,
      Object.assign({}, this.getShaders(), {
        id: this.props.id,
        geometry: getGeometry(mesh),
        isInstanced: true,
        shaderCache: this.context.shaderCache
      })
    );

    const {texture, emptyTexture} = this.state;
    model.setUniforms({
      sampler: texture || emptyTexture,
      hasTexture: Boolean(texture)
    });

    return model;
  }

  setTexture(image) {
    const {gl} = this.context;
    const {emptyTexture, model} = this.state;

    if (this.state.texture) {
      this.state.texture.delete();
    }

    const texture = image ? getTextureFromData(gl, image) : null;
    this.setState({texture});

    if (model) {
      // props.mesh may not be ready at this time.
      // The sampler will be set when `getModel` is called
      model.setUniforms({
        sampler: texture || emptyTexture,
        hasTexture: Boolean(texture)
      });
    }
  }

  calculateInstancePositions64xyLow(attribute, {startRow, endRow}) {
    const isFP64 = this.use64bitPositions();
    attribute.constant = !isFP64;

    if (!isFP64) {
      attribute.value = new Float32Array(2);
      return;
    }

    const {data, getPosition} = this.props;
    const {value, size} = attribute;
    let i = startRow * size;
    const {iterable, objectInfo} = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["createIterable"])(data, startRow, endRow);
    for (const object of iterable) {
      objectInfo.index++;
      const position = getPosition(object, objectInfo);
      value[i++] = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["fp64LowPart"])(position[0]);
      value[i++] = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["fp64LowPart"])(position[1]);
    }
  }
}

SimpleMeshLayer.layerName = 'SimpleMeshLayer';
SimpleMeshLayer.defaultProps = defaultProps;


/***/ }),

/***/ "./src/utils/matrix.js":
/*!*****************************!*\
  !*** ./src/utils/matrix.js ***!
  \*****************************/
/*! exports provided: MATRIX_ATTRIBUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATRIX_ATTRIBUTES", function() { return MATRIX_ATTRIBUTES; });
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__);


/* eslint-disable max-statements, complexity */
const RADIAN_PER_DEGREE = Math.PI / 180;
const modelMatrix = new Float32Array(16);
const valueArray = new Float32Array(12);

function calculateTransformMatrix(targetMatrix, orientation, scale) {
  const pitch = orientation[0] * RADIAN_PER_DEGREE;
  const yaw = orientation[1] * RADIAN_PER_DEGREE;
  const roll = orientation[2] * RADIAN_PER_DEGREE;

  const sr = Math.sin(roll);
  const sp = Math.sin(pitch);
  const sw = Math.sin(yaw);

  const cr = Math.cos(roll);
  const cp = Math.cos(pitch);
  const cw = Math.cos(yaw);

  const scx = scale[0];
  const scy = scale[1];
  const scz = scale[2];

  targetMatrix[0] = scx * cw * cp; // 0,0
  targetMatrix[1] = scx * sw * cp; // 1,0
  targetMatrix[2] = scx * -sp; // 2,0
  targetMatrix[3] = scy * (-sw * cr + cw * sp * sr); // 0,1
  targetMatrix[4] = scy * (cw * cr + sw * sp * sr); // 1,1
  targetMatrix[5] = scy * cp * sr; // 2,1
  targetMatrix[6] = scz * (sw * sr + cw * sp * cr); // 0,2
  targetMatrix[7] = scz * (-cw * sr + sw * sp * cr); // 1,2
  targetMatrix[8] = scz * cp * cr; // 2,2
}

function getExtendedMat3FromMat4(mat4) {
  mat4[0] = mat4[0];
  mat4[1] = mat4[1];
  mat4[2] = mat4[2];
  mat4[3] = mat4[4];
  mat4[4] = mat4[5];
  mat4[5] = mat4[6];
  mat4[6] = mat4[8];
  mat4[7] = mat4[9];
  mat4[8] = mat4[10];
  mat4[9] = mat4[12];
  mat4[10] = mat4[13];
  mat4[11] = mat4[14];

  return mat4.subarray(0, 12);
}

const MATRIX_ATTRIBUTES = {
  size: 12,
  accessor: ['getOrientation', 'getScale', 'getTranslation', 'getTransformMatrix'],
  shaderAttributes: {
    instanceModelMatrix__LOCATION_0: {
      size: 3,
      stride: 48,
      offset: 0
    },
    instanceModelMatrix__LOCATION_1: {
      size: 3,
      stride: 48,
      offset: 12
    },
    instanceModelMatrix__LOCATION_2: {
      size: 3,
      stride: 48,
      offset: 24
    },
    instanceTranslation: {
      size: 3,
      stride: 48,
      offset: 36
    }
  },

  update(attribute, {startRow, endRow}) {
    // NOTE(Tarek): "this" will be bound to a layer!
    const {data, getOrientation, getScale, getTranslation, getTransformMatrix} = this.props;

    const arrayMatrix = Array.isArray(getTransformMatrix);
    const constantMatrix = arrayMatrix && getTransformMatrix.length === 16;
    const constantScale = Array.isArray(getScale);
    const constantOrientation = Array.isArray(getOrientation);
    const constantTranslation = Array.isArray(getTranslation);

    const hasMatrix = constantMatrix || (!arrayMatrix && Boolean(getTransformMatrix(data[0])));

    if (hasMatrix) {
      attribute.constant = constantMatrix;
    } else {
      attribute.constant = constantOrientation && constantScale && constantTranslation;
    }

    const instanceModelMatrixData = attribute.value;

    if (attribute.constant) {
      let matrix;

      if (hasMatrix) {
        modelMatrix.set(getTransformMatrix);
        matrix = getExtendedMat3FromMat4(modelMatrix);
      } else {
        matrix = valueArray;

        const orientation = getOrientation;
        const scale = getScale;

        calculateTransformMatrix(matrix, orientation, scale);
        matrix.set(getTranslation, 9);
      }

      attribute.value = new Float32Array(matrix);
    } else {
      let i = startRow * attribute.size;
      const {iterable, objectInfo} = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["createIterable"])(data, startRow, endRow);
      for (const object of iterable) {
        objectInfo.index++;
        let matrix;

        if (hasMatrix) {
          modelMatrix.set(
            constantMatrix ? getTransformMatrix : getTransformMatrix(object, objectInfo)
          );
          matrix = getExtendedMat3FromMat4(modelMatrix);
        } else {
          matrix = valueArray;

          const orientation = constantOrientation
            ? getOrientation
            : getOrientation(object, objectInfo);
          const scale = constantScale ? getScale : getScale(object, objectInfo);

          calculateTransformMatrix(matrix, orientation, scale);
          matrix.set(constantTranslation ? getTranslation : getTranslation(object, objectInfo), 9);
        }

        instanceModelMatrixData[i++] = matrix[0];
        instanceModelMatrixData[i++] = matrix[1];
        instanceModelMatrixData[i++] = matrix[2];
        instanceModelMatrixData[i++] = matrix[3];
        instanceModelMatrixData[i++] = matrix[4];
        instanceModelMatrixData[i++] = matrix[5];
        instanceModelMatrixData[i++] = matrix[6];
        instanceModelMatrixData[i++] = matrix[7];
        instanceModelMatrixData[i++] = matrix[8];
        instanceModelMatrixData[i++] = matrix[9];
        instanceModelMatrixData[i++] = matrix[10];
        instanceModelMatrixData[i++] = matrix[11];
      }
    }
  }
};


/***/ }),

/***/ "@deck.gl/core":
/*!***********************!*\
  !*** external "deck" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__deck_gl_core__;

/***/ }),

/***/ "@luma.gl/constants":
/*!***********************!*\
  !*** external "luma" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__luma_gl_constants__;

/***/ })

/******/ });
});