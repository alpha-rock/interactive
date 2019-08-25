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

/***/ "../../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!************************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!***************************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!*******************************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!************************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!*********************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!************************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!******************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!*************************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!******************************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!*************************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!***************************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!***********************************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "../../node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!************************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!***********************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "../../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "../../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "../../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!***************************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "../../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "../../node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "../../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!****************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "../../node_modules/d3-hexbin/index.js":
/*!**********************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/d3-hexbin/index.js ***!
  \**********************************************************************/
/*! exports provided: hexbin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_hexbin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/hexbin */ "../../node_modules/d3-hexbin/src/hexbin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hexbin", function() { return _src_hexbin__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "../../node_modules/d3-hexbin/src/hexbin.js":
/*!***************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/d3-hexbin/src/hexbin.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var thirdPi = Math.PI / 3,
    angles = [0, thirdPi, 2 * thirdPi, 3 * thirdPi, 4 * thirdPi, 5 * thirdPi];

function pointX(d) {
  return d[0];
}

function pointY(d) {
  return d[1];
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var x0 = 0,
      y0 = 0,
      x1 = 1,
      y1 = 1,
      x = pointX,
      y = pointY,
      r,
      dx,
      dy;

  function hexbin(points) {
    var binsById = {}, bins = [], i, n = points.length;

    for (i = 0; i < n; ++i) {
      if (isNaN(px = +x.call(null, point = points[i], i, points))
          || isNaN(py = +y.call(null, point, i, points))) continue;

      var point,
          px,
          py,
          pj = Math.round(py = py / dy),
          pi = Math.round(px = px / dx - (pj & 1) / 2),
          py1 = py - pj;

      if (Math.abs(py1) * 3 > 1) {
        var px1 = px - pi,
            pi2 = pi + (px < pi ? -1 : 1) / 2,
            pj2 = pj + (py < pj ? -1 : 1),
            px2 = px - pi2,
            py2 = py - pj2;
        if (px1 * px1 + py1 * py1 > px2 * px2 + py2 * py2) pi = pi2 + (pj & 1 ? 1 : -1) / 2, pj = pj2;
      }

      var id = pi + "-" + pj, bin = binsById[id];
      if (bin) bin.push(point);
      else {
        bins.push(bin = binsById[id] = [point]);
        bin.x = (pi + (pj & 1) / 2) * dx;
        bin.y = pj * dy;
      }
    }

    return bins;
  }

  function hexagon(radius) {
    var x0 = 0, y0 = 0;
    return angles.map(function(angle) {
      var x1 = Math.sin(angle) * radius,
          y1 = -Math.cos(angle) * radius,
          dx = x1 - x0,
          dy = y1 - y0;
      x0 = x1, y0 = y1;
      return [dx, dy];
    });
  }

  hexbin.hexagon = function(radius) {
    return "m" + hexagon(radius == null ? r : +radius).join("l") + "z";
  };

  hexbin.centers = function() {
    var centers = [],
        j = Math.round(y0 / dy),
        i = Math.round(x0 / dx);
    for (var y = j * dy; y < y1 + r; y += dy, ++j) {
      for (var x = i * dx + (j & 1) * dx / 2; x < x1 + dx / 2; x += dx) {
        centers.push([x, y]);
      }
    }
    return centers;
  };

  hexbin.mesh = function() {
    var fragment = hexagon(r).slice(0, 4).join("l");
    return hexbin.centers().map(function(p) { return "M" + p + "m" + fragment; }).join("");
  };

  hexbin.x = function(_) {
    return arguments.length ? (x = _, hexbin) : x;
  };

  hexbin.y = function(_) {
    return arguments.length ? (y = _, hexbin) : y;
  };

  hexbin.radius = function(_) {
    return arguments.length ? (r = +_, dx = r * 2 * Math.sin(thirdPi), dy = r * 1.5, hexbin) : r;
  };

  hexbin.size = function(_) {
    return arguments.length ? (x0 = y0 = 0, x1 = +_[0], y1 = +_[1], hexbin) : [x1 - x0, y1 - y0];
  };

  hexbin.extent = function(_) {
    return arguments.length ? (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1], hexbin) : [[x0, y0], [x1, y1]];
  };

  return hexbin.radius(1);
});


/***/ }),

/***/ "../../node_modules/gl-matrix/esm/common.js":
/*!***************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/gl-matrix/esm/common.js ***!
  \***************************************************************************/
/*! exports provided: EPSILON, ARRAY_TYPE, RANDOM, setMatrixArrayType, toRadian, equals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPSILON", function() { return EPSILON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARRAY_TYPE", function() { return ARRAY_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RANDOM", function() { return RANDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMatrixArrayType", function() { return setMatrixArrayType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRadian", function() { return toRadian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/**
 * Common utilities
 * @module glMatrix
 */
// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var RANDOM = Math.random;
/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */

function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}
var degree = Math.PI / 180;
/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */

function toRadian(a) {
  return a * degree;
}
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */

function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}

/***/ }),

/***/ "../../node_modules/gl-matrix/esm/mat3.js":
/*!*************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/gl-matrix/esm/mat3.js ***!
  \*************************************************************************/
/*! exports provided: create, fromMat4, clone, copy, fromValues, set, identity, transpose, invert, adjoint, determinant, multiply, translate, rotate, scale, fromTranslation, fromRotation, fromScaling, fromMat2d, fromQuat, normalFromMat4, projection, str, frob, add, subtract, multiplyScalar, multiplyScalarAndAdd, exactEquals, equals, mul, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat4", function() { return fromMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjoint", function() { return adjoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat2d", function() { return fromMat2d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat", function() { return fromQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalFromMat4", function() { return normalFromMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projection", function() { return projection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "../../node_modules/gl-matrix/esm/common.js");

/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](9);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
  }

  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}
/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */

function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}
/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */

function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */

function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}
/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20; // Calculate the determinant

  var det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  out[0] = a11 * a22 - a12 * a21;
  out[1] = a02 * a21 - a01 * a22;
  out[2] = a01 * a12 - a02 * a11;
  out[3] = a12 * a20 - a10 * a22;
  out[4] = a00 * a22 - a02 * a20;
  out[5] = a02 * a10 - a00 * a12;
  out[6] = a10 * a21 - a11 * a20;
  out[7] = a01 * a20 - a00 * a21;
  out[8] = a00 * a11 - a01 * a10;
  return out;
}
/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}
/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b00 = b[0],
      b01 = b[1],
      b02 = b[2];
  var b10 = b[3],
      b11 = b[4],
      b12 = b[5];
  var b20 = b[6],
      b21 = b[7],
      b22 = b[8];
  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;
  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;
  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}
/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */

function translate(out, a, v) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      x = v[0],
      y = v[1];
  out[0] = a00;
  out[1] = a01;
  out[2] = a02;
  out[3] = a10;
  out[4] = a11;
  out[5] = a12;
  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}
/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function rotate(out, a, rad) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;
  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;
  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
}
;
/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1];
  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];
  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat3} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = -s;
  out[4] = c;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat3} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/

function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;
  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;
  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}
/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;
  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;
  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;
  return out;
}
/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/

function normalFromMat4(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  return out;
}
/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */

function projection(out, width, height) {
  out[0] = 2 / width;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = -2 / height;
  out[5] = 0;
  out[6] = -1;
  out[7] = 1;
  out[8] = 1;
  return out;
}
/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ')';
}
/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2));
}
/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}
/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7],
      a8 = a[8];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7],
      b8 = b[8];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a8), Math.abs(b8));
}
/**
 * Alias for {@link mat3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat3.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "../../node_modules/gl-matrix/esm/mat4.js":
/*!*************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/gl-matrix/esm/mat4.js ***!
  \*************************************************************************/
/*! exports provided: create, clone, copy, fromValues, set, identity, transpose, invert, adjoint, determinant, multiply, translate, scale, rotate, rotateX, rotateY, rotateZ, fromTranslation, fromScaling, fromRotation, fromXRotation, fromYRotation, fromZRotation, fromRotationTranslation, fromQuat2, getTranslation, getScaling, getRotation, fromRotationTranslationScale, fromRotationTranslationScaleOrigin, fromQuat, frustum, perspective, perspectiveFromFieldOfView, ortho, lookAt, targetTo, str, frob, add, subtract, multiplyScalar, multiplyScalarAndAdd, exactEquals, equals, mul, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjoint", function() { return adjoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromXRotation", function() { return fromXRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromYRotation", function() { return fromYRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromZRotation", function() { return fromZRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslation", function() { return fromRotationTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat2", function() { return fromQuat2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranslation", function() { return getTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScaling", function() { return getScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRotation", function() { return getRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslationScale", function() { return fromRotationTranslationScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslationScaleOrigin", function() { return fromRotationTranslationScaleOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat", function() { return fromQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frustum", function() { return frustum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perspective", function() { return perspective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perspectiveFromFieldOfView", function() { return perspectiveFromFieldOfView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ortho", function() { return ortho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookAt", function() { return lookAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetTo", function() { return targetTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "../../node_modules/gl-matrix/esm/common.js");

/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](16);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }

  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */

function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */

function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a12 = a[6],
        a13 = a[7];
    var a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}
/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15]; // Cache only the current line of the second matrix

  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */

function translate(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function rotate(out, a, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.sqrt(x * x + y * y + z * z);
  var s, c, t;
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  var b00, b01, b02;
  var b10, b11, b12;
  var b20, b21, b22;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11]; // Construct the elements of the rotation matrix

  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  return out;
}
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Scaling vector
 * @returns {mat4} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function fromRotation(out, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.sqrt(x * x + y * y + z * z);
  var s, c, t;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c; // Perform rotation-specific matrix multiplication

  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */

function fromRotationTranslation(out, q, v) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {quat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */

function fromQuat2(out, a) {
  var translation = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense

  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }

  fromRotationTranslation(out, a, translation);
  return out;
}
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];
  out[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
  out[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
  out[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);
  return out;
}
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {mat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */

function getRotation(out, mat) {
  // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
  var trace = mat[0] + mat[5] + mat[10];
  var S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (mat[6] - mat[9]) / S;
    out[1] = (mat[8] - mat[2]) / S;
    out[2] = (mat[1] - mat[4]) / S;
  } else if (mat[0] > mat[5] && mat[0] > mat[10]) {
    S = Math.sqrt(1.0 + mat[0] - mat[5] - mat[10]) * 2;
    out[3] = (mat[6] - mat[9]) / S;
    out[0] = 0.25 * S;
    out[1] = (mat[1] + mat[4]) / S;
    out[2] = (mat[8] + mat[2]) / S;
  } else if (mat[5] > mat[10]) {
    S = Math.sqrt(1.0 + mat[5] - mat[0] - mat[10]) * 2;
    out[3] = (mat[8] - mat[2]) / S;
    out[0] = (mat[1] + mat[4]) / S;
    out[1] = 0.25 * S;
    out[2] = (mat[6] + mat[9]) / S;
  } else {
    S = Math.sqrt(1.0 + mat[10] - mat[0] - mat[5]) * 2;
    out[3] = (mat[1] - mat[4]) / S;
    out[0] = (mat[8] + mat[2]) / S;
    out[1] = (mat[6] + mat[9]) / S;
    out[2] = 0.25 * S;
  }

  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */

function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @param {vec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */

function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  var ox = o[0];
  var oy = o[1];
  var oz = o[2];
  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;
  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;
  return out;
}
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */

function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}
/**
 * Generates a perspective projection matrix with the given bounds.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspective(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;

  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }

  return out;
}
/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
  var xScale = 2.0 / (leftTan + rightTan);
  var yScale = 2.0 / (upTan + downTan);
  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = far * near / (near - far);
  out[15] = 0.0;
  return out;
}
/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function ortho(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */

function lookAt(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];

  if (Math.abs(eyex - centerx) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] && Math.abs(eyey - centery) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] && Math.abs(eyez - centerz) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    return identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);

  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);

  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */

function targetTo(out, eye, target, up) {
  var eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];
  var z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];
  var len = z0 * z0 + z1 * z1 + z2 * z2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  var x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;
  len = x0 * x0 + x1 * x1 + x2 * x2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}
;
/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
}
/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2));
}
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}
/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  out[9] = a[9] + b[9] * scale;
  out[10] = a[10] + b[10] * scale;
  out[11] = a[11] + b[11] * scale;
  out[12] = a[12] + b[12] * scale;
  out[13] = a[13] + b[13] * scale;
  out[14] = a[14] + b[14] * scale;
  out[15] = a[15] + b[15] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var a8 = a[8],
      a9 = a[9],
      a10 = a[10],
      a11 = a[11];
  var a12 = a[12],
      a13 = a[13],
      a14 = a[14],
      a15 = a[15];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  var b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  var b8 = b[8],
      b9 = b[9],
      b10 = b[10],
      b11 = b[11];
  var b12 = b[12],
      b13 = b[13],
      b14 = b[14],
      b15 = b[15];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}
/**
 * Alias for {@link mat4.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat4.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "../../node_modules/gl-matrix/esm/quat.js":
/*!*************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/gl-matrix/esm/quat.js ***!
  \*************************************************************************/
/*! exports provided: create, identity, setAxisAngle, getAxisAngle, multiply, rotateX, rotateY, rotateZ, calculateW, slerp, random, invert, conjugate, fromMat3, fromEuler, str, clone, fromValues, copy, set, add, mul, scale, dot, lerp, length, len, squaredLength, sqrLen, normalize, exactEquals, equals, rotationTo, sqlerp, setAxes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAxisAngle", function() { return setAxisAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAxisAngle", function() { return getAxisAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateW", function() { return calculateW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slerp", function() { return slerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conjugate", function() { return conjugate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat3", function() { return fromMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEuler", function() { return fromEuler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotationTo", function() { return rotationTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqlerp", function() { return sqlerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAxes", function() { return setAxes; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "../../node_modules/gl-matrix/esm/common.js");
/* harmony import */ var _mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mat3.js */ "../../node_modules/gl-matrix/esm/mat3.js");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vec3.js */ "../../node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vec4.js */ "../../node_modules/gl-matrix/esm/vec4.js");




/**
 * Quaternion
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  out[3] = 1;
  return out;
}
/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/

function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  var s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}
/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {quat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */

function getAxisAngle(out_axis, q) {
  var rad = Math.acos(q[3]) * 2.0;
  var s = Math.sin(rad / 2.0);

  if (s > _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }

  return rad;
}
/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */

function multiply(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateX(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateY(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var by = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateZ(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bz = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}
/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */

function calculateW(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
  return out;
}
/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  var omega, cosom, sinom, scale0, scale1; // calc cosine

  cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)

  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  } // calculate coefficients


  if (1.0 - cosom > _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    // standard case (slerp)
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  } // calculate final values


  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}
/**
 * Generates a random quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

function random(out) {
  // Implementation of http://planning.cs.uiuc.edu/node198.html
  // TODO: Calling random 3 times is probably not the fastest solution
  var u1 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]();
  var u2 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]();
  var u3 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]();
  var sqrt1MinusU1 = Math.sqrt(1 - u1);
  var sqrtU1 = Math.sqrt(u1);
  out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
  out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
  out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
  out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
  return out;
}
/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */

function invert(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  var invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}
/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */

function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */

function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  var fTrace = m[0] + m[4] + m[8];
  var fRoot;

  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0); // 2w

    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot; // 1/(4w)

    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    // |w| <= 1/2
    var i = 0;
    if (m[4] > m[0]) i = 1;
    if (m[8] > m[i * 3 + i]) i = 2;
    var j = (i + 1) % 3;
    var k = (i + 2) % 3;
    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }

  return out;
}
/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */

function fromEuler(out, x, y, z) {
  var halfToRad = 0.5 * Math.PI / 180.0;
  x *= halfToRad;
  y *= halfToRad;
  z *= halfToRad;
  var sx = Math.sin(x);
  var cx = Math.cos(x);
  var sy = Math.sin(y);
  var cy = Math.cos(y);
  var sz = Math.sin(z);
  var cz = Math.cos(z);
  out[0] = sx * cy * cz - cx * sy * sz;
  out[1] = cx * sy * cz + sx * cy * sz;
  out[2] = cx * cy * sz - sx * sy * cz;
  out[3] = cx * cy * cz + sx * sy * sz;
  return out;
}
/**
 * Returns a string representation of a quatenion
 *
 * @param {quat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */

var clone = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["clone"];
/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */

var fromValues = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["fromValues"];
/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */

var copy = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["copy"];
/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */

var set = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["set"];
/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */

var add = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["add"];
/**
 * Alias for {@link quat.multiply}
 * @function
 */

var mul = multiply;
/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */

var scale = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["scale"];
/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

var dot = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["dot"];
/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 * @function
 */

var lerp = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["lerp"];
/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 */

var length = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["length"];
/**
 * Alias for {@link quat.length}
 * @function
 */

var len = length;
/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */

var squaredLength = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["squaredLength"];
/**
 * Alias for {@link quat.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */

var normalize = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["normalize"];
/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat} a The first quaternion.
 * @param {quat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var exactEquals = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["exactEquals"];
/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {quat} a The first vector.
 * @param {quat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var equals = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["equals"];
/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */

var rotationTo = function () {
  var tmpvec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["create"]();
  var xUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["fromValues"](1, 0, 0);
  var yUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["fromValues"](0, 1, 0);
  return function (out, a, b) {
    var dot = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["dot"](a, b);

    if (dot < -0.999999) {
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__["cross"](tmpvec3, xUnitVec3, a);
      if (_vec3_js__WEBPACK_IMPORTED_MODULE_2__["len"](tmpvec3) < 0.000001) _vec3_js__WEBPACK_IMPORTED_MODULE_2__["cross"](tmpvec3, yUnitVec3, a);
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__["normalize"](tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__["cross"](tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot;
      return normalize(out, out);
    }
  };
}();
/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {quat} c the third operand
 * @param {quat} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

var sqlerp = function () {
  var temp1 = create();
  var temp2 = create();
  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));
    return out;
  };
}();
/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */

var setAxes = function () {
  var matr = _mat3_js__WEBPACK_IMPORTED_MODULE_1__["create"]();
  return function (out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];
    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];
    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];
    return normalize(out, fromMat3(out, matr));
  };
}();

/***/ }),

/***/ "../../node_modules/gl-matrix/esm/vec2.js":
/*!*************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/gl-matrix/esm/vec2.js ***!
  \*************************************************************************/
/*! exports provided: create, clone, fromValues, copy, set, add, subtract, multiply, divide, ceil, floor, min, max, round, scale, scaleAndAdd, distance, squaredDistance, length, squaredLength, negate, inverse, normalize, dot, cross, lerp, random, transformMat2, transformMat2d, transformMat3, transformMat4, rotate, angle, zero, str, exactEquals, equals, len, sub, mul, div, dist, sqrDist, sqrLen, forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function() { return scaleAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function() { return squaredDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat2", function() { return transformMat2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat2d", function() { return transformMat2d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat3", function() { return transformMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return angle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zero", function() { return zero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "../../node_modules/gl-matrix/esm/common.js");

/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](2);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
  }

  return out;
}
/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */

function fromValues(x, y) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](2);
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */

function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}
/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}
/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}
/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to ceil
 * @returns {vec2} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
}
/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to floor
 * @returns {vec2} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
}
/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
}
/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
}
/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to round
 * @returns {vec2} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
}
/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}
/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return Math.sqrt(x * x + y * y);
}
/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return x * x + y * y;
}
/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0],
      y = a[1];
  return Math.sqrt(x * x + y * y);
}
/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0],
      y = a[1];
  return x * x + y * y;
}
/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}
/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
}
/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */

function normalize(out, a) {
  var x = a[0],
      y = a[1];
  var len = x * x + y * y;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  return out;
}
/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}
/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
}
/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec2} out
 */

function lerp(out, a, b, t) {
  var ax = a[0],
      ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
}
/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}
/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2d(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}
/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}
/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat4(out, a, m) {
  var x = a[0];
  var y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}
/**
 * Rotate a 2D vector
 * @param {vec2} out The receiving vec2
 * @param {vec2} a The vec2 point to rotate
 * @param {vec2} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec2} out
 */

function rotate(out, a, b, c) {
  //Translate point to the origin
  var p0 = a[0] - b[0],
      p1 = a[1] - b[1],
      sinC = Math.sin(c),
      cosC = Math.cos(c); //perform rotation and translate to correct position

  out[0] = p0 * cosC - p1 * sinC + b[0];
  out[1] = p0 * sinC + p1 * cosC + b[1];
  return out;
}
/**
 * Get the angle between two 2D vectors
 * @param {vec2} a The first operand
 * @param {vec2} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var x1 = a[0],
      y1 = a[1],
      x2 = b[0],
      y2 = b[1];
  var len1 = x1 * x1 + y1 * y1;

  if (len1 > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len1 = 1 / Math.sqrt(len1);
  }

  var len2 = x2 * x2 + y2 * y2;

  if (len2 > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len2 = 1 / Math.sqrt(len2);
  }

  var cosine = (x1 * x2 + y1 * y2) * len1 * len2;

  if (cosine > 1.0) {
    return 0;
  } else if (cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}
/**
 * Set the components of a vec2 to zero
 *
 * @param {vec2} out the receiving vector
 * @returns {vec2} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {vec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return 'vec2(' + a[0] + ', ' + a[1] + ')';
}
/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1];
  var b0 = b[0],
      b1 = b[1];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1));
}
/**
 * Alias for {@link vec2.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec2.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec2.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec2.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec2.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 2;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
    }

    return a;
  };
}();

/***/ }),

/***/ "../../node_modules/gl-matrix/esm/vec3.js":
/*!*************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/gl-matrix/esm/vec3.js ***!
  \*************************************************************************/
/*! exports provided: create, clone, length, fromValues, copy, set, add, subtract, multiply, divide, ceil, floor, min, max, round, scale, scaleAndAdd, distance, squaredDistance, squaredLength, negate, inverse, normalize, dot, cross, lerp, hermite, bezier, random, transformMat4, transformMat3, transformQuat, rotateX, rotateY, rotateZ, angle, zero, str, exactEquals, equals, sub, mul, div, dist, sqrDist, len, sqrLen, forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function() { return scaleAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function() { return squaredDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hermite", function() { return hermite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bezier", function() { return bezier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat3", function() { return transformMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformQuat", function() { return transformQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return angle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zero", function() { return zero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "../../node_modules/gl-matrix/esm/common.js");

/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  return out;
}
/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.sqrt(x * x + y * y + z * z);
}
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */

function fromValues(x, y, z) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */

function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to ceil
 * @returns {vec3} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}
/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to floor
 * @returns {vec3} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}
/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}
/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}
/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to round
 * @returns {vec3} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.sqrt(x * x + y * y + z * z);
}
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}
/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2];
  var bx = b[0],
      by = b[1],
      bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2.0 * Math.PI;
  var z = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2.0 - 1.0;
  var zScale = Math.sqrt(1.0 - z * z) * scale;
  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */

function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];
  var x = a[0],
      y = a[1],
      z = a[2]; // var qvec = [qx, qy, qz];
  // var uv = vec3.cross([], qvec, a);

  var uvx = qy * z - qz * y,
      uvy = qz * x - qx * z,
      uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);

  var uuvx = qy * uvz - qz * uvy,
      uuvy = qz * uvx - qx * uvz,
      uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);

  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2; // vec3.scale(uuv, uuv, 2);

  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));

  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */

function rotateX(out, a, b, c) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0];
  r[1] = p[1] * Math.cos(c) - p[2] * Math.sin(c);
  r[2] = p[1] * Math.sin(c) + p[2] * Math.cos(c); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */

function rotateY(out, a, b, c) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[2] * Math.sin(c) + p[0] * Math.cos(c);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(c) - p[0] * Math.sin(c); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */

function rotateZ(out, a, b, c) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0] * Math.cos(c) - p[1] * Math.sin(c);
  r[1] = p[0] * Math.sin(c) + p[1] * Math.cos(c);
  r[2] = p[2]; //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var tempA = fromValues(a[0], a[1], a[2]);
  var tempB = fromValues(b[0], b[1], b[2]);
  normalize(tempA, tempA);
  normalize(tempB, tempB);
  var cosine = dot(tempA, tempB);

  if (cosine > 1.0) {
    return 0;
  } else if (cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}
/**
 * Set the components of a vec3 to zero
 *
 * @param {vec3} out the receiving vector
 * @returns {vec3} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {vec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}
/**
 * Alias for {@link vec3.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec3.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec3.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec3.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 3;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }

    return a;
  };
}();

/***/ }),

/***/ "../../node_modules/gl-matrix/esm/vec4.js":
/*!*************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/gl-matrix/esm/vec4.js ***!
  \*************************************************************************/
/*! exports provided: create, clone, fromValues, copy, set, add, subtract, multiply, divide, ceil, floor, min, max, round, scale, scaleAndAdd, distance, squaredDistance, length, squaredLength, negate, inverse, normalize, dot, cross, lerp, random, transformMat4, transformQuat, zero, str, exactEquals, equals, sub, mul, div, dist, sqrDist, len, sqrLen, forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function() { return scaleAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function() { return squaredDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformQuat", function() { return transformQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zero", function() { return zero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "../../node_modules/gl-matrix/esm/common.js");

/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
  }

  return out;
}
/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */

function fromValues(x, y, z, w) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */

function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}
/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}
/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to ceil
 * @returns {vec4} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}
/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to floor
 * @returns {vec4} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}
/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}
/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}
/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to round
 * @returns {vec4} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}
/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return Math.sqrt(x * x + y * y + z * z + w * w);
}
/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return Math.sqrt(x * x + y * y + z * z + w * w);
}
/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}
/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to invert
 * @returns {vec4} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
}
/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  var len = x * x + y * y + z * z + w * w;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }

  out[0] = x * len;
  out[1] = y * len;
  out[2] = z * len;
  out[3] = w * len;
  return out;
}
/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
/**
 * Returns the cross-product of three vectors in a 4-dimensional space
 *
 * @param {vec4} result the receiving vector
 * @param {vec4} U the first vector
 * @param {vec4} V the second vector
 * @param {vec4} W the third vector
 * @returns {vec4} result
 */

function cross(out, u, v, w) {
  var A = v[0] * w[1] - v[1] * w[0],
      B = v[0] * w[2] - v[2] * w[0],
      C = v[0] * w[3] - v[3] * w[0],
      D = v[1] * w[2] - v[2] * w[1],
      E = v[1] * w[3] - v[3] * w[1],
      F = v[2] * w[3] - v[3] * w[2];
  var G = u[0];
  var H = u[1];
  var I = u[2];
  var J = u[3];
  out[0] = H * F - I * E + J * D;
  out[1] = -(G * F) + I * C - J * B;
  out[2] = G * E - H * C + J * A;
  out[3] = -(G * D) + H * B - I * A;
  return out;
}
;
/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec4} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  var aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */

function random(out, scale) {
  scale = scale || 1.0; // Marsaglia, George. Choosing a Point from the Surface of a
  // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
  // http://projecteuclid.org/euclid.aoms/1177692644;

  var v1, v2, v3, v4;
  var s1, s2;

  do {
    v1 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
    v2 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
    s1 = v1 * v1 + v2 * v2;
  } while (s1 >= 1);

  do {
    v3 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
    v4 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
    s2 = v3 * v3 + v4 * v4;
  } while (s2 >= 1);

  var d = Math.sqrt((1 - s1) / s2);
  out[0] = scale * v1;
  out[1] = scale * v2;
  out[2] = scale * v3 * d;
  out[3] = scale * v4 * d;
  return out;
}
/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}
/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */

function transformQuat(out, a, q) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3]; // calculate quat * vec

  var ix = qw * x + qy * z - qz * y;
  var iy = qw * y + qz * x - qx * z;
  var iz = qw * z + qx * y - qy * x;
  var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to zero
 *
 * @param {vec4} out the receiving vector
 * @returns {vec4} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {vec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
/**
 * Alias for {@link vec4.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec4.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec4.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec4.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec4.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 4;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      vec[3] = a[i + 3];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
      a[i + 3] = vec[3];
    }

    return a;
  };
}();

/***/ }),

/***/ "../../node_modules/math.gl/dist/esm/addons/polygon.js":
/*!**************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/math.gl/dist/esm/addons/polygon.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Polygon; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/common */ "../../node_modules/math.gl/dist/esm/lib/common.js");




var Polygon = function () {
  function Polygon(points) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Polygon);

    this.points = points;
    this.isClosed = Object(_lib_common__WEBPACK_IMPORTED_MODULE_2__["equals"])(this.points[this.points.length - 1], this.points[0]);
    Object.freeze(this);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Polygon, [{
    key: "getSignedArea",
    value: function getSignedArea() {
      var area = 0;
      this.forEachSegment(function (p1, p2) {
        area += (p1[0] + p2[0]) * (p1[1] - p2[1]);
      });
      return area / 2;
    }
  }, {
    key: "getArea",
    value: function getArea() {
      return Math.abs(this.getSignedArea());
    }
  }, {
    key: "getWindingDirection",
    value: function getWindingDirection() {
      return Math.sign(this.getSignedArea());
    }
  }, {
    key: "forEachSegment",
    value: function forEachSegment(visitor) {
      var length = this.points.length;

      for (var i = 0; i < length - 1; i++) {
        visitor(this.points[i], this.points[i + 1], i, i + 1);
      }

      if (this.isPolygon && !this.isClosed()) {
        visitor(this.points[length - 1], this.points[0], length - 1, 0);
      }
    }
  }]);

  return Polygon;
}();


//# sourceMappingURL=polygon.js.map

/***/ }),

/***/ "../../node_modules/math.gl/dist/esm/euler.js":
/*!*****************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/math.gl/dist/esm/euler.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Euler; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _lib_math_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/math-array */ "../../node_modules/math.gl/dist/esm/lib/math-array.js");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/common */ "../../node_modules/math.gl/dist/esm/lib/common.js");
/* harmony import */ var _matrix4__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./matrix4 */ "../../node_modules/math.gl/dist/esm/matrix4.js");
/* harmony import */ var _quaternion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quaternion */ "../../node_modules/math.gl/dist/esm/quaternion.js");
/* harmony import */ var _vector3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vector3 */ "../../node_modules/math.gl/dist/esm/vector3.js");











var ERR_UNKNOWN_ORDER = 'Unknown Euler angle order';
var ALMOST_ONE = 0.99999;

function validateOrder(value) {
  return value >= 0 && value < 6;
}

function checkOrder(value) {
  if (value < 0 && value >= 6) {
    throw new Error(ERR_UNKNOWN_ORDER);
  }

  return value;
}

var Euler = function (_MathArray) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Euler, _MathArray);

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Euler, [{
    key: "ELEMENTS",
    get: function get() {
      return 4;
    }
  }], [{
    key: "rotationOrder",
    value: function rotationOrder(order) {
      return Euler.RotationOrders[order];
    }
  }, {
    key: "ZYX",
    get: function get() {
      return 0;
    }
  }, {
    key: "YXZ",
    get: function get() {
      return 1;
    }
  }, {
    key: "XZY",
    get: function get() {
      return 2;
    }
  }, {
    key: "ZXY",
    get: function get() {
      return 3;
    }
  }, {
    key: "YZX",
    get: function get() {
      return 4;
    }
  }, {
    key: "XYZ",
    get: function get() {
      return 5;
    }
  }, {
    key: "RollPitchYaw",
    get: function get() {
      return 0;
    }
  }, {
    key: "DefaultOrder",
    get: function get() {
      return Euler.ZYX;
    }
  }, {
    key: "RotationOrders",
    get: function get() {
      return ['ZYX', 'YXZ', 'XZY', 'ZXY', 'YZX', 'XYZ'];
    }
  }]);

  function Euler() {
    var _this;

    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var order = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Euler.DefaultOrder;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Euler);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Euler).call(this));

    if (arguments.length > 0 && Array.isArray(arguments[0])) {
      var _this2;

      (_this2 = _this).fromVector3.apply(_this2, arguments);
    } else {
      _this.set(x, y, z, order);
    }

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Euler, [{
    key: "fromQuaternion",
    value: function fromQuaternion(quaternion) {
      var _quaternion = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(quaternion, 4),
          x = _quaternion[0],
          y = _quaternion[1],
          z = _quaternion[2],
          w = _quaternion[3];

      var ysqr = y * y;
      var t0 = -2.0 * (ysqr + z * z) + 1.0;
      var t1 = +2.0 * (x * y + w * z);
      var t2 = -2.0 * (x * z - w * y);
      var t3 = +2.0 * (y * z + w * x);
      var t4 = -2.0 * (x * x + ysqr) + 1.0;
      t2 = t2 > 1.0 ? 1.0 : t2;
      t2 = t2 < -1.0 ? -1.0 : t2;
      var roll = Math.atan2(t3, t4);
      var pitch = Math.asin(t2);
      var yaw = Math.atan2(t1, t0);
      return new Euler(roll, pitch, yaw, Euler.RollPitchYaw);
    }
  }, {
    key: "copy",
    value: function copy(array) {
      for (var i = 0; i < 3; ++i) {
        this[i] = array[i];
      }

      this[3] = Number.isFinite(array[3]) || this.order;
      return this.check();
    }
  }, {
    key: "set",
    value: function set() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var order = arguments.length > 3 ? arguments[3] : undefined;
      this[0] = x;
      this[1] = y;
      this[2] = z;
      this[3] = Number.isFinite(order) ? order : this[3];
      return this.check();
    }
  }, {
    key: "validate",
    value: function validate() {
      return validateOrder(this[3]) && Number.isFinite(this[0]) && Number.isFinite(this[1]) && Number.isFinite(this[2]);
    }
  }, {
    key: "toArray",
    value: function toArray() {
      var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      array[offset] = this[0];
      array[offset + 1] = this[1];
      array[offset + 2] = this[2];
      return array;
    }
  }, {
    key: "toArray4",
    value: function toArray4() {
      var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      array[offset] = this[0];
      array[offset + 1] = this[1];
      array[offset + 2] = this[2];
      array[offset + 3] = this[3];
      return array;
    }
  }, {
    key: "toVector3",
    value: function toVector3(optionalResult) {
      if (optionalResult) {
        return optionalResult.set(this[0], this[1], this[2]);
      }

      return new _vector3__WEBPACK_IMPORTED_MODULE_10__["default"](this[0], this[1], this[2]);
    }
  }, {
    key: "fromVector3",
    value: function fromVector3(v, order) {
      return this.set(v[0], v[1], v[2], Number.isFinite(order) ? order : this[3]);
    }
  }, {
    key: "fromArray",
    value: function fromArray(array) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      this[0] = array[0 + offset];
      this[1] = array[1 + offset];
      this[2] = array[2 + offset];

      if (array[3] !== undefined) {
        this[3] = array[3];
      }

      return this.check();
    }
  }, {
    key: "fromRollPitchYaw",
    value: function fromRollPitchYaw(roll, pitch, yaw) {
      return this.set(roll, pitch, yaw, Euler.ZYX);
    }
  }, {
    key: "fromRotationMatrix",
    value: function fromRotationMatrix(m) {
      var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Euler.DefaultOrder;

      this._fromRotationMatrix(m, order);

      return this.check();
    }
  }, {
    key: "getRotationMatrix",
    value: function getRotationMatrix() {
      var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _matrix4__WEBPACK_IMPORTED_MODULE_8__["default"]();

      this._getRotationMatrix(m);

      return m;
    }
  }, {
    key: "getQuaternion",
    value: function getQuaternion() {
      var q = new _quaternion__WEBPACK_IMPORTED_MODULE_9__["default"]();

      switch (this[4]) {
        case Euler.XYZ:
          return q.rotateX(this[0]).rotateY(this[1]).rotateZ(this[2]);

        case Euler.YXZ:
          return q.rotateY(this[0]).rotateX(this[1]).rotateZ(this[2]);

        case Euler.ZXY:
          return q.rotateZ(this[0]).rotateX(this[1]).rotateY(this[2]);

        case Euler.ZYX:
          return q.rotateZ(this[0]).rotateY(this[1]).rotateX(this[2]);

        case Euler.YZX:
          return q.rotateY(this[0]).rotateZ(this[1]).rotateX(this[2]);

        case Euler.XZY:
          return q.rotateX(this[0]).rotateZ(this[1]).rotateY(this[2]);

        default:
          throw new Error(ERR_UNKNOWN_ORDER);
      }
    }
  }, {
    key: "_fromRotationMatrix",
    value: function _fromRotationMatrix(m) {
      var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Euler.DefaultOrder;
      var te = m.elements;
      var m11 = te[0],
          m12 = te[4],
          m13 = te[8];
      var m21 = te[1],
          m22 = te[5],
          m23 = te[9];
      var m31 = te[2],
          m32 = te[6],
          m33 = te[10];
      order = order || this[3];

      switch (order) {
        case Euler.XYZ:
          this[1] = Math.asin(Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["clamp"])(m13, -1, 1));

          if (Math.abs(m13) < ALMOST_ONE) {
            this[0] = Math.atan2(-m23, m33);
            this[2] = Math.atan2(-m12, m11);
          } else {
            this[0] = Math.atan2(m32, m22);
            this[2] = 0;
          }

          break;

        case Euler.YXZ:
          this[0] = Math.asin(-Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["clamp"])(m23, -1, 1));

          if (Math.abs(m23) < ALMOST_ONE) {
            this[1] = Math.atan2(m13, m33);
            this[2] = Math.atan2(m21, m22);
          } else {
            this[1] = Math.atan2(-m31, m11);
            this[2] = 0;
          }

          break;

        case Euler.ZXY:
          this[0] = Math.asin(Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["clamp"])(m32, -1, 1));

          if (Math.abs(m32) < ALMOST_ONE) {
            this[1] = Math.atan2(-m31, m33);
            this[2] = Math.atan2(-m12, m22);
          } else {
            this[1] = 0;
            this[2] = Math.atan2(m21, m11);
          }

          break;

        case Euler.ZYX:
          this[1] = Math.asin(-Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["clamp"])(m31, -1, 1));

          if (Math.abs(m31) < ALMOST_ONE) {
            this[0] = Math.atan2(m32, m33);
            this[2] = Math.atan2(m21, m11);
          } else {
            this[0] = 0;
            this[2] = Math.atan2(-m12, m22);
          }

          break;

        case Euler.YZX:
          this[2] = Math.asin(Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["clamp"])(m21, -1, 1));

          if (Math.abs(m21) < ALMOST_ONE) {
            this[0] = Math.atan2(-m23, m22);
            this[1] = Math.atan2(-m31, m11);
          } else {
            this[0] = 0;
            this[1] = Math.atan2(m13, m33);
          }

          break;

        case Euler.XZY:
          this[2] = Math.asin(-Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["clamp"])(m12, -1, 1));

          if (Math.abs(m12) < ALMOST_ONE) {
            this[0] = Math.atan2(m32, m22);
            this[1] = Math.atan2(m13, m11);
          } else {
            this[0] = Math.atan2(-m23, m33);
            this[1] = 0;
          }

          break;

        default:
          throw new Error(ERR_UNKNOWN_ORDER);
      }

      this[3] = order;
      return this;
    }
  }, {
    key: "_getRotationMatrix",
    value: function _getRotationMatrix() {
      var te = new _matrix4__WEBPACK_IMPORTED_MODULE_8__["default"]();
      var x = this.x,
          y = this.y,
          z = this.z;
      var a = Math.cos(x);
      var c = Math.cos(y);
      var e = Math.cos(z);
      var b = Math.sin(x);
      var d = Math.sin(y);
      var f = Math.sin(z);

      switch (this[3]) {
        case Euler.XYZ:
          {
            var ae = a * e,
                af = a * f,
                be = b * e,
                bf = b * f;
            te[0] = c * e;
            te[4] = -c * f;
            te[8] = d;
            te[1] = af + be * d;
            te[5] = ae - bf * d;
            te[9] = -b * c;
            te[2] = bf - ae * d;
            te[6] = be + af * d;
            te[10] = a * c;
            break;
          }

        case Euler.YXZ:
          {
            var ce = c * e,
                cf = c * f,
                de = d * e,
                df = d * f;
            te[0] = ce + df * b;
            te[4] = de * b - cf;
            te[8] = a * d;
            te[1] = a * f;
            te[5] = a * e;
            te[9] = -b;
            te[2] = cf * b - de;
            te[6] = df + ce * b;
            te[10] = a * c;
            break;
          }

        case Euler.ZXY:
          {
            var _ce = c * e,
                _cf = c * f,
                _de = d * e,
                _df = d * f;

            te[0] = _ce - _df * b;
            te[4] = -a * f;
            te[8] = _de + _cf * b;
            te[1] = _cf + _de * b;
            te[5] = a * e;
            te[9] = _df - _ce * b;
            te[2] = -a * d;
            te[6] = b;
            te[10] = a * c;
            break;
          }

        case Euler.ZYX:
          {
            var _ae = a * e,
                _af = a * f,
                _be = b * e,
                _bf = b * f;

            te[0] = c * e;
            te[4] = _be * d - _af;
            te[8] = _ae * d + _bf;
            te[1] = c * f;
            te[5] = _bf * d + _ae;
            te[9] = _af * d - _be;
            te[2] = -d;
            te[6] = b * c;
            te[10] = a * c;
            break;
          }

        case Euler.YZX:
          {
            var ac = a * c,
                ad = a * d,
                bc = b * c,
                bd = b * d;
            te[0] = c * e;
            te[4] = bd - ac * f;
            te[8] = bc * f + ad;
            te[1] = f;
            te[5] = a * e;
            te[9] = -b * e;
            te[2] = -d * e;
            te[6] = ad * f + bc;
            te[10] = ac - bd * f;
            break;
          }

        case Euler.XZY:
          {
            var _ac = a * c,
                _ad = a * d,
                _bc = b * c,
                _bd = b * d;

            te[0] = c * e;
            te[4] = -f;
            te[8] = d * e;
            te[1] = _ac * f + _bd;
            te[5] = a * e;
            te[9] = _ad * f - _bc;
            te[2] = _bc * f - _ad;
            te[6] = b * e;
            te[10] = _bd * f + _ac;
            break;
          }

        default:
          throw new Error(ERR_UNKNOWN_ORDER);
      }

      te[3] = 0;
      te[7] = 0;
      te[11] = 0;
      te[12] = 0;
      te[13] = 0;
      te[14] = 0;
      te[15] = 1;
      return this;
    }
  }, {
    key: "toQuaternion",
    value: function toQuaternion() {
      var cy = Math.cos(this.yaw * 0.5);
      var sy = Math.sin(this.yaw * 0.5);
      var cr = Math.cos(this.roll * 0.5);
      var sr = Math.sin(this.roll * 0.5);
      var cp = Math.cos(this.pitch * 0.5);
      var sp = Math.sin(this.pitch * 0.5);
      var w = cy * cr * cp + sy * sr * sp;
      var x = cy * sr * cp - sy * cr * sp;
      var y = cy * cr * sp + sy * sr * cp;
      var z = sy * cr * cp - cy * sr * sp;
      return new _quaternion__WEBPACK_IMPORTED_MODULE_9__["default"](x, y, z, w);
    }
  }, {
    key: "x",
    get: function get() {
      return this[0];
    },
    set: function set(value) {
      return this[0] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(value);
    }
  }, {
    key: "y",
    get: function get() {
      return this[1];
    },
    set: function set(value) {
      return this[1] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(value);
    }
  }, {
    key: "z",
    get: function get() {
      return this[2];
    },
    set: function set(value) {
      return this[2] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(value);
    }
  }, {
    key: "alpha",
    get: function get() {
      return this[0];
    },
    set: function set(value) {
      return this[0] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(value);
    }
  }, {
    key: "beta",
    get: function get() {
      return this[1];
    },
    set: function set(value) {
      return this[1] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(value);
    }
  }, {
    key: "gamma",
    get: function get() {
      return this[2];
    },
    set: function set(value) {
      return this[2] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(value);
    }
  }, {
    key: "phi",
    get: function get() {
      return this[0];
    },
    set: function set(value) {
      return this[0] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(value);
    }
  }, {
    key: "theta",
    get: function get() {
      return this[1];
    },
    set: function set(value) {
      return this[1] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(value);
    }
  }, {
    key: "psi",
    get: function get() {
      return this[2];
    },
    set: function set(value) {
      return this[2] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(value);
    }
  }, {
    key: "roll",
    get: function get() {
      return this[0];
    },
    set: function set(value) {
      return this[0] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(value);
    }
  }, {
    key: "pitch",
    get: function get() {
      return this[1];
    },
    set: function set(value) {
      return this[1] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(value);
    }
  }, {
    key: "yaw",
    get: function get() {
      return this[2];
    },
    set: function set(value) {
      return this[2] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(value);
    }
  }, {
    key: "order",
    get: function get() {
      return this[3];
    },
    set: function set(value) {
      return this[3] = checkOrder(value);
    }
  }]);

  return Euler;
}(_lib_math_array__WEBPACK_IMPORTED_MODULE_6__["default"]);


//# sourceMappingURL=euler.js.map

/***/ }),

/***/ "../../node_modules/math.gl/dist/esm/index.js":
/*!*****************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/math.gl/dist/esm/index.js ***!
  \*****************************************************************************/
/*! exports provided: Vector2, Vector3, Vector4, Matrix3, Matrix4, Quaternion, config, checkNumber, configure, formatValue, isArray, clone, radians, degrees, sin, cos, tan, asin, acos, atan, clamp, lerp, equals, _SphericalCoordinates, _Pose, _Euler, _Polygon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector2 */ "../../node_modules/math.gl/dist/esm/vector2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vector2", function() { return _vector2__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _vector3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vector3 */ "../../node_modules/math.gl/dist/esm/vector3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vector3", function() { return _vector3__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _vector4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vector4 */ "../../node_modules/math.gl/dist/esm/vector4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vector4", function() { return _vector4__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _matrix3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matrix3 */ "../../node_modules/math.gl/dist/esm/matrix3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Matrix3", function() { return _matrix3__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _matrix4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./matrix4 */ "../../node_modules/math.gl/dist/esm/matrix4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Matrix4", function() { return _matrix4__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _quaternion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quaternion */ "../../node_modules/math.gl/dist/esm/quaternion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Quaternion", function() { return _quaternion__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/common */ "../../node_modules/math.gl/dist/esm/lib/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["config"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkNumber", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["checkNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["configure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatValue", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["formatValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["clone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "radians", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["radians"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "degrees", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["degrees"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sin", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["sin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cos", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["cos"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tan", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["tan"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asin", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["asin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "acos", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["acos"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "atan", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["atan"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["clamp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["lerp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["equals"]; });

/* harmony import */ var _spherical_coordinates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spherical-coordinates */ "../../node_modules/math.gl/dist/esm/spherical-coordinates.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_SphericalCoordinates", function() { return _spherical_coordinates__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _pose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pose */ "../../node_modules/math.gl/dist/esm/pose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_Pose", function() { return _pose__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _euler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./euler */ "../../node_modules/math.gl/dist/esm/euler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_Euler", function() { return _euler__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _addons_polygon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./addons/polygon */ "../../node_modules/math.gl/dist/esm/addons/polygon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_Polygon", function() { return _addons_polygon__WEBPACK_IMPORTED_MODULE_10__["default"]; });












//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/math.gl/dist/esm/lib/common.js":
/*!**********************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/math.gl/dist/esm/lib/common.js ***!
  \**********************************************************************************/
/*! exports provided: config, configure, checkNumber, formatValue, formatAngle, isArray, clone, radians, degrees, sin, cos, tan, asin, acos, atan, clamp, lerp, equals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkNumber", function() { return checkNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatValue", function() { return formatValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatAngle", function() { return formatAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radians", function() { return radians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degrees", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sin", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cos", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tan", function() { return tan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asin", function() { return asin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acos", function() { return acos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atan", function() { return atan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
var config = {};
config.EPSILON = 1e-12;
config.debug = true;
config.precision = 4;
config.printTypes = false;
config.printDegrees = false;
config.printRowMajor = true;

function configure(options) {
  if ('epsilon' in options) {
    config.EPSILON = options.epsilon;
  }

  if ('debug' in options) {
    config.debug = options.debug;
  }
}
function checkNumber(value) {
  if (!Number.isFinite(value)) {
    throw new Error("Invalid number ".concat(value));
  }

  return value;
}

function round(value) {
  return Math.round(value / config.EPSILON) * config.EPSILON;
}

function formatValue(value) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$precision = _ref.precision,
      precision = _ref$precision === void 0 ? config.precision || 4 : _ref$precision;

  value = round(value);
  return parseFloat(value.toPrecision(precision));
}
function formatAngle(value) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$precision = _ref2.precision,
      precision = _ref2$precision === void 0 ? config.precision || 4 : _ref2$precision,
      _ref2$printDegrees = _ref2.printDegrees,
      printDegrees = _ref2$printDegrees === void 0 ? config.printAngles : _ref2$printDegrees;

  value = printDegrees ? degrees(value) : value;
  value = round(value);
  return "".concat(parseFloat(value.toPrecision(precision))).concat(printDegrees ? '°' : '');
}
function isArray(value) {
  return Array.isArray(value) || ArrayBuffer.isView(value) && value.length !== undefined;
}
function clone(array) {
  return array.clone ? array.clone() : new Array(array);
}

function map(value, func) {
  if (isArray(value)) {
    var result = clone(value);

    for (var i = 0; i < result.length; ++i) {
      result[i] = func(result[i], i, result);
    }

    return result;
  }

  return func(value);
}

function radians(degrees) {
  return map(degrees, function (degrees) {
    return degrees / 180 * Math.PI;
  });
}
function degrees(radians) {
  return map(radians, function (radians) {
    return radians * 180 / Math.PI;
  });
}
function sin(radians) {
  return map(radians, function (angle) {
    return Math.sin(angle);
  });
}
function cos(radians) {
  return map(radians, function (angle) {
    return Math.cos(angle);
  });
}
function tan(radians) {
  return map(radians, function (angle) {
    return Math.tan(angle);
  });
}
function asin(radians) {
  return map(radians, function (angle) {
    return Math.asin(angle);
  });
}
function acos(radians) {
  return map(radians, function (angle) {
    return Math.acos(angle);
  });
}
function atan(radians) {
  return map(radians, function (angle) {
    return Math.atan(angle);
  });
}
function clamp(value, min, max) {
  return map(value, function (value) {
    return Math.max(min, Math.min(max, value));
  });
}
function lerp(a, b, t) {
  if (isArray(a)) {
    return a.map(function (ai, i) {
      return lerp(ai, b[i], t);
    });
  }

  return t * b + (1 - t) * a;
}
function equals(a, b) {
  if (isArray(a) && isArray(b)) {
    if (a === b) {
      return true;
    }

    if (a.length !== b.length) {
      return false;
    }

    for (var i = 0; i < a.length; ++i) {
      if (!equals(a[i], b[i])) {
        return false;
      }
    }

    return true;
  }

  return Math.abs(a - b) <= config.EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "../../node_modules/math.gl/dist/esm/lib/math-array.js":
/*!**************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/math.gl/dist/esm/lib/math-array.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MathArray; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common */ "../../node_modules/math.gl/dist/esm/lib/common.js");






function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    var instance = Reflect.construct(cls, Array.from(arguments));
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    return instance;
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}



var MathArray = function (_extendableBuiltin2) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MathArray, _extendableBuiltin2);

  function MathArray() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MathArray);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MathArray).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MathArray, [{
    key: "clone",
    value: function clone() {
      return new this.constructor().copy(this).check();
    }
  }, {
    key: "copy",
    value: function copy(array) {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = array[i];
      }

      return this.check();
    }
  }, {
    key: "set",
    value: function set() {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = (i < 0 || arguments.length <= i ? undefined : arguments[i]) || 0;
      }

      return this.check();
    }
  }, {
    key: "fromArray",
    value: function fromArray(array) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = array[i + offset];
      }

      return this.check();
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.formatString(_common__WEBPACK_IMPORTED_MODULE_5__["config"]);
    }
  }, {
    key: "formatString",
    value: function formatString(opts) {
      var string = '';

      for (var i = 0; i < this.ELEMENTS; ++i) {
        string += (i > 0 ? ', ' : '') + Object(_common__WEBPACK_IMPORTED_MODULE_5__["formatValue"])(this[i], opts);
      }

      return "".concat(opts.printTypes ? this.constructor.name : '', "[").concat(string, "]");
    }
  }, {
    key: "toArray",
    value: function toArray() {
      var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      for (var i = 0; i < this.ELEMENTS; ++i) {
        array[offset + i] = this[i];
      }

      return array;
    }
  }, {
    key: "toFloat32Array",
    value: function toFloat32Array() {
      return new Float32Array(this);
    }
  }, {
    key: "equals",
    value: function equals(array) {
      if (!array || this.length !== array.length) {
        return false;
      }

      for (var i = 0; i < this.ELEMENTS; ++i) {
        if (!Object(_common__WEBPACK_IMPORTED_MODULE_5__["equals"])(this[i], array[i])) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "exactEquals",
    value: function exactEquals(array) {
      if (!array || this.length !== array.length) {
        return false;
      }

      for (var i = 0; i < this.ELEMENTS; ++i) {
        if (this[i] !== array[i]) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "negate",
    value: function negate() {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = -this[i];
      }

      return this.check();
    }
  }, {
    key: "inverse",
    value: function inverse() {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = 1 / this[i];
      }

      return this.check();
    }
  }, {
    key: "lerp",
    value: function lerp(a, b, t) {
      if (t === undefined) {
        t = b;
        b = a;
        a = this;
      }

      for (var i = 0; i < this.ELEMENTS; ++i) {
        var ai = a[i];
        this[i] = ai + t * (b[i] - ai);
      }

      return this.check();
    }
  }, {
    key: "min",
    value: function min(vector) {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = Math.min(vector[i], this[i]);
      }

      return this.check();
    }
  }, {
    key: "max",
    value: function max(vector) {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = Math.max(vector[i], this[i]);
      }

      return this.check();
    }
  }, {
    key: "clamp",
    value: function clamp(minVector, maxVector) {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = Math.min(Math.max(this[i], minVector[i]), maxVector[i]);
      }

      return this.check();
    }
  }, {
    key: "validate",
    value: function validate() {
      var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
      var valid = array && array.length === this.ELEMENTS;

      for (var i = 0; i < this.ELEMENTS; ++i) {
        valid = valid && Number.isFinite(array[i]);
      }

      return valid;
    }
  }, {
    key: "check",
    value: function check() {
      var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;

      if (_common__WEBPACK_IMPORTED_MODULE_5__["config"].debug && !this.validate(array)) {
        throw new Error("math.gl: ".concat(this.constructor.name, " some fields set to invalid numbers'"));
      }

      return this;
    }
  }, {
    key: "sub",
    value: function sub(a) {
      return this.subtract(a);
    }
  }, {
    key: "setScalar",
    value: function setScalar(a) {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = a;
      }

      return this.check();
    }
  }, {
    key: "addScalar",
    value: function addScalar(a) {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] += a;
      }

      return this.check();
    }
  }, {
    key: "subScalar",
    value: function subScalar(a) {
      return this.addScalar(-a);
    }
  }, {
    key: "multiplyScalar",
    value: function multiplyScalar(a) {
      return this.scale(a);
    }
  }, {
    key: "divideScalar",
    value: function divideScalar(a) {
      return this.scale(1 / a);
    }
  }, {
    key: "clampScalar",
    value: function clampScalar(min, max) {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = Math.min(Math.max(this[i], min), max);
      }

      return this.check();
    }
  }]);

  return MathArray;
}(_extendableBuiltin(Array));


//# sourceMappingURL=math-array.js.map

/***/ }),

/***/ "../../node_modules/math.gl/dist/esm/lib/validators.js":
/*!**************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/math.gl/dist/esm/lib/validators.js ***!
  \**************************************************************************************/
/*! exports provided: validateVector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateVector", function() { return validateVector; });
function validateVector(v, length) {
  if (v.length !== length) {
    return false;
  }

  return v.every(Number.isFinite);
}
//# sourceMappingURL=validators.js.map

/***/ }),

/***/ "../../node_modules/math.gl/dist/esm/lib/vector.js":
/*!**********************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/math.gl/dist/esm/lib/vector.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vector; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _math_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./math-array */ "../../node_modules/math.gl/dist/esm/lib/math-array.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common */ "../../node_modules/math.gl/dist/esm/lib/common.js");








var assert = function assert(x, m) {
  if (!x) {
    throw new Error(m);
  }
};

var Vector = function (_MathArray) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Vector, _MathArray);

  function Vector() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Vector);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Vector).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Vector, [{
    key: "len",
    value: function len() {
      return Math.sqrt(this.lengthSquared());
    }
  }, {
    key: "magnitude",
    value: function magnitude() {
      return Math.sqrt(this.lengthSquared());
    }
  }, {
    key: "lengthSquared",
    value: function lengthSquared() {
      var length = 0;

      for (var i = 0; i < this.ELEMENTS; ++i) {
        length += this[i] * this[i];
      }

      return length;
    }
  }, {
    key: "distance",
    value: function distance(mathArray) {
      return Math.sqrt(this.distanceSquared(mathArray));
    }
  }, {
    key: "distanceSquared",
    value: function distanceSquared(mathArray) {
      var length = 0;

      for (var i = 0; i < this.ELEMENTS; ++i) {
        var dist = this[i] - mathArray[i];
        length += dist * dist;
      }

      return Object(_common__WEBPACK_IMPORTED_MODULE_6__["checkNumber"])(length);
    }
  }, {
    key: "dot",
    value: function dot(mathArray) {
      var product = 0;

      for (var i = 0; i < this.ELEMENTS; ++i) {
        product += this[i] * mathArray[i];
      }

      return Object(_common__WEBPACK_IMPORTED_MODULE_6__["checkNumber"])(product);
    }
  }, {
    key: "normalize",
    value: function normalize() {
      var length = this.magnitude();

      if (length !== 0) {
        for (var i = 0; i < this.ELEMENTS; ++i) {
          this[i] /= length;
        }
      }

      return this.check();
    }
  }, {
    key: "add",
    value: function add() {
      for (var _len = arguments.length, vectors = new Array(_len), _key = 0; _key < _len; _key++) {
        vectors[_key] = arguments[_key];
      }

      for (var _i = 0; _i < vectors.length; _i++) {
        var vector = vectors[_i];

        for (var i = 0; i < this.ELEMENTS; ++i) {
          this[i] += vector[i];
        }
      }

      return this.check();
    }
  }, {
    key: "subtract",
    value: function subtract() {
      for (var _len2 = arguments.length, vectors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        vectors[_key2] = arguments[_key2];
      }

      for (var _i2 = 0; _i2 < vectors.length; _i2++) {
        var vector = vectors[_i2];

        for (var i = 0; i < this.ELEMENTS; ++i) {
          this[i] -= vector[i];
        }
      }

      return this.check();
    }
  }, {
    key: "multiply",
    value: function multiply() {
      for (var _len3 = arguments.length, vectors = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        vectors[_key3] = arguments[_key3];
      }

      for (var _i3 = 0; _i3 < vectors.length; _i3++) {
        var vector = vectors[_i3];

        for (var i = 0; i < this.ELEMENTS; ++i) {
          this[i] *= vector[i];
        }
      }

      return this.check();
    }
  }, {
    key: "divide",
    value: function divide() {
      for (var _len4 = arguments.length, vectors = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        vectors[_key4] = arguments[_key4];
      }

      for (var _i4 = 0; _i4 < vectors.length; _i4++) {
        var vector = vectors[_i4];

        for (var i = 0; i < this.ELEMENTS; ++i) {
          this[i] /= vector[i];
        }
      }

      return this.check();
    }
  }, {
    key: "scale",
    value: function scale(_scale) {
      if (Array.isArray(_scale)) {
        return this.multiply(_scale);
      }

      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] *= _scale;
      }

      return this.check();
    }
  }, {
    key: "scaleAndAdd",
    value: function scaleAndAdd(vector, scale) {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = this[i] * scale + vector[i];
      }

      return this.check();
    }
  }, {
    key: "lengthSq",
    value: function lengthSq() {
      return this.lengthSquared();
    }
  }, {
    key: "distanceTo",
    value: function distanceTo(vector) {
      return this.distance(vector);
    }
  }, {
    key: "distanceToSquared",
    value: function distanceToSquared(vector) {
      return this.distanceSquared(vector);
    }
  }, {
    key: "getComponent",
    value: function getComponent(i) {
      assert(i >= 0 && i < this.ELEMENTS, 'index is out of range');
      return Object(_common__WEBPACK_IMPORTED_MODULE_6__["checkNumber"])(this[i]);
    }
  }, {
    key: "setComponent",
    value: function setComponent(i, value) {
      assert(i >= 0 && i < this.ELEMENTS, 'index is out of range');
      this[i] = value;
      return this.check();
    }
  }, {
    key: "addVectors",
    value: function addVectors(a, b) {
      return this.copy(a).add(b);
    }
  }, {
    key: "subVectors",
    value: function subVectors(a, b) {
      return this.copy(a).subtract(b);
    }
  }, {
    key: "multiplyVectors",
    value: function multiplyVectors(a, b) {
      return this.copy(a).multiply(b);
    }
  }, {
    key: "addScaledVector",
    value: function addScaledVector(a, b) {
      return this.add(new this.constructor(a).multiplyScalar(b));
    }
  }, {
    key: "x",
    get: function get() {
      return this[0];
    },
    set: function set(value) {
      return this[0] = Object(_common__WEBPACK_IMPORTED_MODULE_6__["checkNumber"])(value);
    }
  }, {
    key: "y",
    get: function get() {
      return this[1];
    },
    set: function set(value) {
      return this[1] = Object(_common__WEBPACK_IMPORTED_MODULE_6__["checkNumber"])(value);
    }
  }]);

  return Vector;
}(_math_array__WEBPACK_IMPORTED_MODULE_5__["default"]);


//# sourceMappingURL=vector.js.map

/***/ }),

/***/ "../../node_modules/math.gl/dist/esm/matrix3.js":
/*!*******************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/math.gl/dist/esm/matrix3.js ***!
  \*******************************************************************************/
/*! exports provided: validateMatrix3, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateMatrix3", function() { return validateMatrix3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Matrix3; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _lib_math_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/math-array */ "../../node_modules/math.gl/dist/esm/lib/math-array.js");
/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/validators */ "../../node_modules/math.gl/dist/esm/lib/validators.js");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/common */ "../../node_modules/math.gl/dist/esm/lib/common.js");
/* harmony import */ var _vector2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vector2 */ "../../node_modules/math.gl/dist/esm/vector2.js");
/* harmony import */ var _vector3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vector3 */ "../../node_modules/math.gl/dist/esm/vector3.js");
/* harmony import */ var gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! gl-matrix/mat3 */ "../../node_modules/gl-matrix/esm/mat3.js");
/* harmony import */ var gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! gl-matrix/vec2 */ "../../node_modules/gl-matrix/esm/vec2.js");
/* harmony import */ var gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! gl-matrix/vec3 */ "../../node_modules/gl-matrix/esm/vec3.js");














var IDENTITY = [1, 0, 0, 0, 1, 0, 0, 0, 1];
function validateMatrix3(m) {
  return m.length === 9 && Number.isFinite(m[0]) && Number.isFinite(m[1]) && Number.isFinite(m[2]) && Number.isFinite(m[3]) && Number.isFinite(m[4]) && Number.isFinite(m[5]) && Number.isFinite(m[6]) && Number.isFinite(m[7]) && Number.isFinite(m[8]);
}

var Matrix3 = function (_MathArray) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Matrix3, _MathArray);

  function Matrix3() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Matrix3);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Matrix3).call(this));

    if (Array.isArray(args[0]) && arguments.length === 1) {
      _this.copy(args[0]);
    } else {
      _this.identity();
    }

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Matrix3, [{
    key: "setRowMajor",
    value: function setRowMajor() {
      var m00 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var m01 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var m02 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var m10 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var m11 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
      var m12 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var m20 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      var m21 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
      var m22 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 1;
      this[0] = m00;
      this[1] = m10;
      this[2] = m20;
      this[3] = m01;
      this[4] = m11;
      this[5] = m21;
      this[6] = m02;
      this[7] = m12;
      this[8] = m22;
      return this.check();
    }
  }, {
    key: "setColumnMajor",
    value: function setColumnMajor() {
      var m00 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var m10 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var m20 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var m01 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var m11 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
      var m21 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var m02 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      var m12 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
      var m22 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 1;
      this[0] = m00;
      this[1] = m10;
      this[2] = m20;
      this[3] = m01;
      this[4] = m11;
      this[5] = m21;
      this[6] = m02;
      this[7] = m12;
      this[8] = m22;
      return this.check();
    }
  }, {
    key: "copy",
    value: function copy(array) {
      return this.setColumnMajor.apply(this, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(array));
    }
  }, {
    key: "set",
    value: function set() {
      return this.setColumnMajor.apply(this, arguments);
    }
  }, {
    key: "getElement",
    value: function getElement(i, j) {
      var columnMajor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return columnMajor ? this[i * 3 + j] : this[j * 3 + i];
    }
  }, {
    key: "setElement",
    value: function setElement(i, j, value) {
      var columnMajor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (columnMajor) {
        this[i * 3 + j] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_8__["checkNumber"])(value);
      } else {
        this[j * 3 + i] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_8__["checkNumber"])(value);
      }

      return this;
    }
  }, {
    key: "determinant",
    value: function determinant() {
      return gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_11__["determinant"](this);
    }
  }, {
    key: "identity",
    value: function identity() {
      for (var i = 0; i < IDENTITY.length; ++i) {
        this[i] = IDENTITY[i];
      }

      return this.check();
    }
  }, {
    key: "fromQuaternion",
    value: function fromQuaternion(q) {
      gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_11__["fromQuat"](this, q);
      return this.check();
    }
  }, {
    key: "transpose",
    value: function transpose() {
      gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_11__["transpose"](this, this);
      return this.check();
    }
  }, {
    key: "invert",
    value: function invert() {
      gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_11__["invert"](this, this);
      return this.check();
    }
  }, {
    key: "multiplyLeft",
    value: function multiplyLeft(a) {
      gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_11__["multiply"](this, a, this);
      return this.check();
    }
  }, {
    key: "multiplyRight",
    value: function multiplyRight(a) {
      gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_11__["multiply"](this, this, a);
      return this.check();
    }
  }, {
    key: "rotate",
    value: function rotate(radians) {
      gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_11__["rotate"](this, this, radians);
      return this.check();
    }
  }, {
    key: "scale",
    value: function scale(factor) {
      if (Array.isArray(factor)) {
        gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_11__["scale"](this, this, factor);
      } else {
        gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_11__["scale"](this, this, [factor, factor, factor]);
      }

      return this.check();
    }
  }, {
    key: "translate",
    value: function translate(vec) {
      gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_11__["translate"](this, this, vec);
      return this.check();
    }
  }, {
    key: "transformVector2",
    value: function transformVector2(vector, out) {
      out = out || new _vector2__WEBPACK_IMPORTED_MODULE_9__["default"]();
      gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_12__["transformMat3"](out, vector, this);
      Object(_lib_validators__WEBPACK_IMPORTED_MODULE_7__["validateVector"])(out, 2);
      return out;
    }
  }, {
    key: "transformVector3",
    value: function transformVector3(vector, out) {
      out = out || new _vector3__WEBPACK_IMPORTED_MODULE_10__["default"]();
      gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_13__["transformMat3"](out, vector, this);
      Object(_lib_validators__WEBPACK_IMPORTED_MODULE_7__["validateVector"])(out, 3);
      return out;
    }
  }, {
    key: "transformVector",
    value: function transformVector(vector, out) {
      switch (vector.length) {
        case 2:
          return this.transformVector2(vector, out);

        case 3:
          return this.transformVector3(vector, out);

        default:
          throw new Error('Illegal vector');
      }
    }
  }, {
    key: "ELEMENTS",
    get: function get() {
      return 9;
    }
  }]);

  return Matrix3;
}(_lib_math_array__WEBPACK_IMPORTED_MODULE_6__["default"]);


//# sourceMappingURL=matrix3.js.map

/***/ }),

/***/ "../../node_modules/math.gl/dist/esm/matrix4.js":
/*!*******************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/math.gl/dist/esm/matrix4.js ***!
  \*******************************************************************************/
/*! exports provided: validateMatrix4, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateMatrix4", function() { return validateMatrix4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Matrix4; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _lib_math_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/math-array */ "../../node_modules/math.gl/dist/esm/lib/math-array.js");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/common */ "../../node_modules/math.gl/dist/esm/lib/common.js");
/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/validators */ "../../node_modules/math.gl/dist/esm/lib/validators.js");
/* harmony import */ var _vector2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vector2 */ "../../node_modules/math.gl/dist/esm/vector2.js");
/* harmony import */ var _vector3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vector3 */ "../../node_modules/math.gl/dist/esm/vector3.js");
/* harmony import */ var _vector4__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./vector4 */ "../../node_modules/math.gl/dist/esm/vector4.js");
/* harmony import */ var gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! gl-matrix/mat4 */ "../../node_modules/gl-matrix/esm/mat4.js");
/* harmony import */ var gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! gl-matrix/vec2 */ "../../node_modules/gl-matrix/esm/vec2.js");
/* harmony import */ var gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! gl-matrix/vec3 */ "../../node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var gl_matrix_vec4__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! gl-matrix/vec4 */ "../../node_modules/gl-matrix/esm/vec4.js");

















var IDENTITY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
function validateMatrix4(m) {
  return m.length === 16 && Number.isFinite(m[0]) && Number.isFinite(m[1]) && Number.isFinite(m[2]) && Number.isFinite(m[3]) && Number.isFinite(m[4]) && Number.isFinite(m[5]) && Number.isFinite(m[6]) && Number.isFinite(m[7]) && Number.isFinite(m[8]) && Number.isFinite(m[9]) && Number.isFinite(m[10]) && Number.isFinite(m[11]) && Number.isFinite(m[12]) && Number.isFinite(m[13]) && Number.isFinite(m[14]) && Number.isFinite(m[15]);
}

var Matrix4 = function (_MathArray) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Matrix4, _MathArray);

  function Matrix4() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Matrix4);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Matrix4).call(this));

    if (Array.isArray(args[0]) && arguments.length === 1) {
      _this.copy(args[0]);
    } else {
      _this.identity();
    }

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Matrix4, [{
    key: "setRowMajor",
    value: function setRowMajor() {
      var m00 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var m01 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var m02 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var m03 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var m10 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var m11 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
      var m12 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      var m13 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
      var m20 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
      var m21 = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
      var m22 = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 1;
      var m23 = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : 0;
      var m30 = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : 0;
      var m31 = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : 0;
      var m32 = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : 0;
      var m33 = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : 1;
      this[0] = m00;
      this[1] = m10;
      this[2] = m20;
      this[3] = m30;
      this[4] = m01;
      this[5] = m11;
      this[6] = m21;
      this[7] = m31;
      this[8] = m02;
      this[9] = m12;
      this[10] = m22;
      this[11] = m32;
      this[12] = m03;
      this[13] = m13;
      this[14] = m23;
      this[15] = m33;
      return this.check();
    }
  }, {
    key: "setColumnMajor",
    value: function setColumnMajor() {
      var m00 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var m10 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var m20 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var m30 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var m01 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var m11 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
      var m21 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      var m31 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
      var m02 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
      var m12 = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
      var m22 = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 1;
      var m32 = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : 0;
      var m03 = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : 0;
      var m13 = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : 0;
      var m23 = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : 0;
      var m33 = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : 1;
      this[0] = m00;
      this[1] = m10;
      this[2] = m20;
      this[3] = m30;
      this[4] = m01;
      this[5] = m11;
      this[6] = m21;
      this[7] = m31;
      this[8] = m02;
      this[9] = m12;
      this[10] = m22;
      this[11] = m32;
      this[12] = m03;
      this[13] = m13;
      this[14] = m23;
      this[15] = m33;
      return this.check();
    }
  }, {
    key: "copy",
    value: function copy(array) {
      return this.setColumnMajor.apply(this, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(array));
    }
  }, {
    key: "set",
    value: function set() {
      return this.setColumnMajor.apply(this, arguments);
    }
  }, {
    key: "getElement",
    value: function getElement(i, j) {
      var columnMajor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return columnMajor ? this[i][j] : this[j][i];
    }
  }, {
    key: "setElement",
    value: function setElement(i, j, value) {
      var columnMajor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (columnMajor) {
        this[i][j] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_8__["checkNumber"])(value);
      } else {
        this[j][i] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_8__["checkNumber"])(value);
      }

      return this;
    }
  }, {
    key: "determinant",
    value: function determinant() {
      return gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["determinant"](this);
    }
  }, {
    key: "identity",
    value: function identity() {
      return this.copy(IDENTITY);
    }
  }, {
    key: "fromQuaternion",
    value: function fromQuaternion(q) {
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["fromQuat"](this, q);
      return this.check();
    }
  }, {
    key: "frustum",
    value: function frustum(_ref) {
      var left = _ref.left,
          right = _ref.right,
          bottom = _ref.bottom,
          top = _ref.top,
          near = _ref.near,
          far = _ref.far;
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["frustum"](this, left, right, bottom, top, near, far);
      return this.check();
    }
  }, {
    key: "lookAt",
    value: function lookAt(_ref2) {
      var eye = _ref2.eye,
          _ref2$center = _ref2.center,
          center = _ref2$center === void 0 ? [0, 0, 0] : _ref2$center,
          _ref2$up = _ref2.up,
          up = _ref2$up === void 0 ? [0, 1, 0] : _ref2$up;
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["lookAt"](this, eye, center, up);
      return this.check();
    }
  }, {
    key: "ortho",
    value: function ortho(_ref3) {
      var left = _ref3.left,
          right = _ref3.right,
          bottom = _ref3.bottom,
          top = _ref3.top,
          _ref3$near = _ref3.near,
          near = _ref3$near === void 0 ? 0.1 : _ref3$near,
          _ref3$far = _ref3.far,
          far = _ref3$far === void 0 ? 500 : _ref3$far;
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["ortho"](this, left, right, bottom, top, near, far);
      return this.check();
    }
  }, {
    key: "orthographic",
    value: function orthographic(_ref4) {
      var _ref4$fovy = _ref4.fovy,
          fovy = _ref4$fovy === void 0 ? 45 * Math.PI / 180 : _ref4$fovy,
          _ref4$aspect = _ref4.aspect,
          aspect = _ref4$aspect === void 0 ? 1 : _ref4$aspect,
          _ref4$focalDistance = _ref4.focalDistance,
          focalDistance = _ref4$focalDistance === void 0 ? 1 : _ref4$focalDistance,
          _ref4$near = _ref4.near,
          near = _ref4$near === void 0 ? 0.1 : _ref4$near,
          _ref4$far = _ref4.far,
          far = _ref4$far === void 0 ? 500 : _ref4$far;

      if (fovy > Math.PI * 2) {
        throw Error('radians');
      }

      var halfY = fovy / 2;
      var top = focalDistance * Math.tan(halfY);
      var right = top * aspect;
      return new Matrix4().ortho({
        left: -right,
        right: right,
        bottom: -top,
        top: top,
        near: near,
        far: far
      });
    }
  }, {
    key: "perspective",
    value: function perspective() {
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          fovy = _ref5.fovy,
          _ref5$fov = _ref5.fov,
          fov = _ref5$fov === void 0 ? 45 * Math.PI / 180 : _ref5$fov,
          _ref5$aspect = _ref5.aspect,
          aspect = _ref5$aspect === void 0 ? 1 : _ref5$aspect,
          _ref5$near = _ref5.near,
          near = _ref5$near === void 0 ? 0.1 : _ref5$near,
          _ref5$far = _ref5.far,
          far = _ref5$far === void 0 ? 500 : _ref5$far;

      fovy = fovy || fov;

      if (fovy > Math.PI * 2) {
        throw Error('radians');
      }

      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["perspective"](this, fovy, aspect, near, far);
      return this.check();
    }
  }, {
    key: "transpose",
    value: function transpose() {
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["transpose"](this, this);
      return this.check();
    }
  }, {
    key: "invert",
    value: function invert() {
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["invert"](this, this);
      return this.check();
    }
  }, {
    key: "multiplyLeft",
    value: function multiplyLeft(a) {
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["multiply"](this, a, this);
      return this.check();
    }
  }, {
    key: "multiplyRight",
    value: function multiplyRight(a) {
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["multiply"](this, this, a);
      return this.check();
    }
  }, {
    key: "rotateX",
    value: function rotateX(radians) {
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["rotateX"](this, this, radians);
      return this.check();
    }
  }, {
    key: "rotateY",
    value: function rotateY(radians) {
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["rotateY"](this, this, radians);
      return this.check();
    }
  }, {
    key: "rotateZ",
    value: function rotateZ(radians) {
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["rotateZ"](this, this, radians);
      return this.check();
    }
  }, {
    key: "rotateXYZ",
    value: function rotateXYZ(_ref6) {
      var _ref7 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref6, 3),
          rx = _ref7[0],
          ry = _ref7[1],
          rz = _ref7[2];

      return this.rotateX(rx).rotateY(ry).rotateZ(rz);
    }
  }, {
    key: "rotateAxis",
    value: function rotateAxis(radians, axis) {
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["rotate"](this, this, radians, axis);
      return this.check();
    }
  }, {
    key: "scale",
    value: function scale(factor) {
      if (Array.isArray(factor)) {
        gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["scale"](this, this, factor);
      } else {
        gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["scale"](this, this, [factor, factor, factor]);
      }

      return this.check();
    }
  }, {
    key: "translate",
    value: function translate(vec) {
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_13__["translate"](this, this, vec);
      return this.check();
    }
  }, {
    key: "transformVector2",
    value: function transformVector2(vector, out) {
      out = out || new _vector2__WEBPACK_IMPORTED_MODULE_10__["default"]();
      gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_14__["transformMat4"](out, vector, this);
      Object(_lib_validators__WEBPACK_IMPORTED_MODULE_9__["validateVector"])(out, 2);
      return out;
    }
  }, {
    key: "transformVector3",
    value: function transformVector3(vector, out) {
      out = out || new _vector3__WEBPACK_IMPORTED_MODULE_11__["default"]();
      gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_15__["transformMat4"](out, vector, this);
      Object(_lib_validators__WEBPACK_IMPORTED_MODULE_9__["validateVector"])(out, 3);
      return out;
    }
  }, {
    key: "transformVector4",
    value: function transformVector4(vector, out) {
      out = out || new _vector4__WEBPACK_IMPORTED_MODULE_12__["default"]();
      gl_matrix_vec4__WEBPACK_IMPORTED_MODULE_16__["transformMat4"](out, vector, this);
      Object(_lib_validators__WEBPACK_IMPORTED_MODULE_9__["validateVector"])(out, 4);
      return out.check();
    }
  }, {
    key: "transformVector",
    value: function transformVector(vector, out) {
      switch (vector.length) {
        case 2:
          return this.transformVector2(vector, out);

        case 3:
          return this.transformVector3(vector, out);

        case 4:
          return this.transformVector4(vector, out);

        default:
          throw new Error('Illegal vector');
      }
    }
  }, {
    key: "transformDirection",
    value: function transformDirection(vector, out) {
      return this._transformVector(vector, out, 0);
    }
  }, {
    key: "transformPoint",
    value: function transformPoint(vector, out) {
      return this._transformVector(vector, out, 1);
    }
  }, {
    key: "_transformVector",
    value: function _transformVector(vector, out, w) {
      switch (vector.length) {
        case 2:
          out = out || new _vector2__WEBPACK_IMPORTED_MODULE_10__["default"]();
          gl_matrix_vec4__WEBPACK_IMPORTED_MODULE_16__["transformMat4"](out, [vector[0], vector[1], 0, w], this);
          out.length = 2;
          Object(_lib_validators__WEBPACK_IMPORTED_MODULE_9__["validateVector"])(out, 2);
          break;

        case 3:
          out = out || new _vector3__WEBPACK_IMPORTED_MODULE_11__["default"]();
          gl_matrix_vec4__WEBPACK_IMPORTED_MODULE_16__["transformMat4"](out, [vector[0], vector[1], vector[2], w], this);
          out.length = 3;
          Object(_lib_validators__WEBPACK_IMPORTED_MODULE_9__["validateVector"])(out, 3);
          break;

        case 4:
          if (Boolean(w) !== Boolean(vector[3])) {
            throw new Error('math.gl: Matrix4.transformPoint - invalid vector');
          }

          out = out || new _vector4__WEBPACK_IMPORTED_MODULE_12__["default"]();
          gl_matrix_vec4__WEBPACK_IMPORTED_MODULE_16__["transformMat4"](out, vector, this);
          Object(_lib_validators__WEBPACK_IMPORTED_MODULE_9__["validateVector"])(out, 4);
          break;

        default:
          throw new Error('Illegal vector');
      }

      return out;
    }
  }, {
    key: "makeRotationX",
    value: function makeRotationX(radians) {
      return this.identity().rotateX(radians);
    }
  }, {
    key: "makeTranslation",
    value: function makeTranslation(x, y, z) {
      return this.identity().translate([x, y, z]);
    }
  }, {
    key: "ELEMENTS",
    get: function get() {
      return 16;
    }
  }]);

  return Matrix4;
}(_lib_math_array__WEBPACK_IMPORTED_MODULE_7__["default"]);


//# sourceMappingURL=matrix4.js.map

/***/ }),

/***/ "../../node_modules/math.gl/dist/esm/pose.js":
/*!****************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/math.gl/dist/esm/pose.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pose; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _matrix4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matrix4 */ "../../node_modules/math.gl/dist/esm/matrix4.js");
/* harmony import */ var _vector3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vector3 */ "../../node_modules/math.gl/dist/esm/vector3.js");
/* harmony import */ var _euler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./euler */ "../../node_modules/math.gl/dist/esm/euler.js");






var Pose = function () {
  function Pose(_ref) {
    var _ref$x = _ref.x,
        x = _ref$x === void 0 ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === void 0 ? 0 : _ref$y,
        _ref$z = _ref.z,
        z = _ref$z === void 0 ? 0 : _ref$z,
        _ref$roll = _ref.roll,
        roll = _ref$roll === void 0 ? 0 : _ref$roll,
        _ref$pitch = _ref.pitch,
        pitch = _ref$pitch === void 0 ? 0 : _ref$pitch,
        _ref$yaw = _ref.yaw,
        yaw = _ref$yaw === void 0 ? 0 : _ref$yaw,
        position = _ref.position,
        orientation = _ref.orientation;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Pose);

    if (Array.isArray(position) && position.length === 3) {
      this.position = new _vector3__WEBPACK_IMPORTED_MODULE_3__["default"](position);
    } else {
      this.position = new _vector3__WEBPACK_IMPORTED_MODULE_3__["default"](x, y, z);
    }

    if (Array.isArray(orientation) && orientation.length === 4) {
      this.orientation = new _euler__WEBPACK_IMPORTED_MODULE_4__["default"](orientation, orientation[3]);
    } else {
      this.orientation = new _euler__WEBPACK_IMPORTED_MODULE_4__["default"](roll, pitch, yaw, _euler__WEBPACK_IMPORTED_MODULE_4__["default"].RollPitchYaw);
    }
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Pose, [{
    key: "getPosition",
    value: function getPosition() {
      return this.position;
    }
  }, {
    key: "getOrientation",
    value: function getOrientation() {
      return this.orientation;
    }
  }, {
    key: "equals",
    value: function equals(pose) {
      if (!pose) {
        return false;
      }

      return this.position.equals(pose.position) && this.orientation.equals(pose.orientation);
    }
  }, {
    key: "exactEquals",
    value: function exactEquals(pose) {
      if (!pose) {
        return false;
      }

      return this.position.exactEquals(pose.position) && this.orientation.exactEquals(pose.orientation);
    }
  }, {
    key: "getTransformationMatrix",
    value: function getTransformationMatrix() {
      var sr = Math.sin(this.roll);
      var sp = Math.sin(this.pitch);
      var sw = Math.sin(this.yaw);
      var cr = Math.cos(this.roll);
      var cp = Math.cos(this.pitch);
      var cw = Math.cos(this.yaw);
      var matrix = new _matrix4__WEBPACK_IMPORTED_MODULE_2__["default"]().setRowMajor(cw * cp, -sw * cr + cw * sp * sr, sw * sr + cw * sp * cr, this.x, sw * cp, cw * cr + sw * sp * sr, -cw * sr + sw * sp * cr, this.y, -sp, cp * sr, cp * cr, this.z, 0, 0, 0, 1);
      return matrix;
    }
  }, {
    key: "getTransformationMatrixFromPose",
    value: function getTransformationMatrixFromPose(pose) {
      return new _matrix4__WEBPACK_IMPORTED_MODULE_2__["default"]().multiplyRight(this.getTransformationMatrix()).multiplyRight(pose.getTransformationMatrix().invert());
    }
  }, {
    key: "getTransformationMatrixToPose",
    value: function getTransformationMatrixToPose(pose) {
      return new _matrix4__WEBPACK_IMPORTED_MODULE_2__["default"]().multiplyRight(pose.getTransformationMatrix()).multiplyRight(this.getTransformationMatrix().invert());
    }
  }, {
    key: "x",
    get: function get() {
      return this.position.x;
    },
    set: function set(value) {
      return this.position.x = value;
    }
  }, {
    key: "y",
    get: function get() {
      return this.position.y;
    },
    set: function set(value) {
      return this.position.y = value;
    }
  }, {
    key: "z",
    get: function get() {
      return this.position.z;
    },
    set: function set(value) {
      return this.position.z = value;
    }
  }, {
    key: "roll",
    get: function get() {
      return this.orientation.roll;
    },
    set: function set(value) {
      return this.orientation.roll = value;
    }
  }, {
    key: "pitch",
    get: function get() {
      return this.orientation.pitch;
    },
    set: function set(value) {
      return this.orientation.pitch = value;
    }
  }, {
    key: "yaw",
    get: function get() {
      return this.orientation.yaw;
    },
    set: function set(value) {
      return this.orientation.yaw = value;
    }
  }]);

  return Pose;
}();


//# sourceMappingURL=pose.js.map

/***/ }),

/***/ "../../node_modules/math.gl/dist/esm/quaternion.js":
/*!**********************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/math.gl/dist/esm/quaternion.js ***!
  \**********************************************************************************/
/*! exports provided: validateQuaternion, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateQuaternion", function() { return validateQuaternion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Quaternion; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _lib_math_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/math-array */ "../../node_modules/math.gl/dist/esm/lib/math-array.js");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/common */ "../../node_modules/math.gl/dist/esm/lib/common.js");
/* harmony import */ var gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gl-matrix/quat */ "../../node_modules/gl-matrix/esm/quat.js");








var IDENTITY_QUATERNION = [0, 0, 0, 1];
function validateQuaternion(q) {
  return q.length === 4 && Number.isFinite(q[0]) && Number.isFinite(q[1]) && Number.isFinite(q[2]) && Number.isFinite(q[3]);
}

var Quaternion = function (_MathArray) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Quaternion, _MathArray);

  function Quaternion() {
    var _this;

    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var w = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Quaternion);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Quaternion).call(this));

    if (Array.isArray(x) && arguments.length === 1) {
      _this.copy(x);
    } else {
      _this.set(x, y, z, w);
    }

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Quaternion, [{
    key: "fromMatrix3",
    value: function fromMatrix3(m) {
      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["fromMat3"](this, m);
      return this.check();
    }
  }, {
    key: "fromValues",
    value: function fromValues(x, y, z, w) {
      return this.set(x, y, z, w);
    }
  }, {
    key: "identity",
    value: function identity() {
      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["identity"](this);
      return this.check();
    }
  }, {
    key: "length",
    value: function length() {
      return gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["length"](this);
    }
  }, {
    key: "squaredLength",
    value: function squaredLength(a) {
      return gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["squaredLength"](this);
    }
  }, {
    key: "dot",
    value: function dot(a, b) {
      if (b !== undefined) {
        throw new Error('Quaternion.dot only takes one argument');
      }

      return gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["dot"](this, a);
    }
  }, {
    key: "rotationTo",
    value: function rotationTo(vectorA, vectorB) {
      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["rotationTo"](this, vectorA, vectorB);
      return this.check();
    }
  }, {
    key: "add",
    value: function add(a, b) {
      if (b !== undefined) {
        throw new Error('Quaternion.add only takes one argument');
      }

      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["add"](this, a);
      return this.check();
    }
  }, {
    key: "calculateW",
    value: function calculateW() {
      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["calculateW"](this, this);
      return this.check();
    }
  }, {
    key: "conjugate",
    value: function conjugate() {
      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["conjugate"](this, this);
      return this.check();
    }
  }, {
    key: "invert",
    value: function invert() {
      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["invert"](this, this);
      return this.check();
    }
  }, {
    key: "lerp",
    value: function lerp(a, b, t) {
      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["lerp"](this, a, b, t);
      return this.check();
    }
  }, {
    key: "multiply",
    value: function multiply(a, b) {
      if (b !== undefined) {
        throw new Error('Quaternion.multiply only takes one argument');
      }

      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["multiply"](this, this, a);
      return this.check();
    }
  }, {
    key: "normalize",
    value: function normalize() {
      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["normalize"](this, this);
      return this.check();
    }
  }, {
    key: "rotateX",
    value: function rotateX(rad) {
      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["rotateX"](this, this, rad);
      return this.check();
    }
  }, {
    key: "rotateY",
    value: function rotateY(rad) {
      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["rotateY"](this, this, rad);
      return this.check();
    }
  }, {
    key: "rotateZ",
    value: function rotateZ(rad) {
      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["rotateZ"](this, this, rad);
      return this.check();
    }
  }, {
    key: "scale",
    value: function scale(b) {
      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["scale"](this, this, b);
      return this.check();
    }
  }, {
    key: "set",
    value: function set(i, j, k, l) {
      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["set"](this, i, j, k, l);
      return this.check();
    }
  }, {
    key: "setAxisAngle",
    value: function setAxisAngle(axis, rad) {
      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["setAxisAngle"](this, axis, rad);
      return this.check();
    }
  }, {
    key: "slerp",
    value: function slerp(_ref) {
      var _ref$start = _ref.start,
          start = _ref$start === void 0 ? IDENTITY_QUATERNION : _ref$start,
          target = _ref.target,
          ratio = _ref.ratio;
      gl_matrix_quat__WEBPACK_IMPORTED_MODULE_7__["slerp"](this, start, target, ratio);
      return this.check();
    }
  }, {
    key: "ELEMENTS",
    get: function get() {
      return 4;
    }
  }, {
    key: "x",
    get: function get() {
      return this[0];
    },
    set: function set(value) {
      return this[0] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_6__["checkNumber"])(value);
    }
  }, {
    key: "y",
    get: function get() {
      return this[1];
    },
    set: function set(value) {
      return this[1] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_6__["checkNumber"])(value);
    }
  }, {
    key: "z",
    get: function get() {
      return this[2];
    },
    set: function set(value) {
      return this[2] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_6__["checkNumber"])(value);
    }
  }, {
    key: "w",
    get: function get() {
      return this[3];
    },
    set: function set(value) {
      return this[3] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_6__["checkNumber"])(value);
    }
  }]);

  return Quaternion;
}(_lib_math_array__WEBPACK_IMPORTED_MODULE_5__["default"]);


//# sourceMappingURL=quaternion.js.map

/***/ }),

/***/ "../../node_modules/math.gl/dist/esm/spherical-coordinates.js":
/*!*********************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/math.gl/dist/esm/spherical-coordinates.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SphericalCoordinates; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/common */ "../../node_modules/math.gl/dist/esm/lib/common.js");
/* harmony import */ var _vector3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vector3 */ "../../node_modules/math.gl/dist/esm/vector3.js");
/* harmony import */ var gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gl-matrix/vec3 */ "../../node_modules/gl-matrix/esm/vec3.js");







var EPSILON = 0.000001;
var EARTH_RADIUS_METERS = 6.371e6;

var SphericalCoordinates = function () {
  function SphericalCoordinates() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        phi = _ref.phi,
        theta = _ref.theta,
        radius = _ref.radius,
        bearing = _ref.bearing,
        pitch = _ref.pitch,
        altitude = _ref.altitude,
        _ref$radiusScale = _ref.radiusScale,
        radiusScale = _ref$radiusScale === void 0 ? EARTH_RADIUS_METERS : _ref$radiusScale;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SphericalCoordinates);

    if (arguments.length === 0) {
      this.phi = 0;
      this.theta = 0;
      this.radius = 1;
    } else if (Number.isFinite(phi) || Number.isFinite(theta)) {
      this.phi = phi || 0;
      this.theta = theta || 0;
    } else if (Number.isFinite(bearing) || Number.isFinite(pitch)) {
      this.bearing = bearing || 0;
      this.pitch = pitch || 0;
    }

    this.radius = radius || 1;
    this.radiusScale = radiusScale || 1;
    this.check();
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SphericalCoordinates, [{
    key: "toString",
    value: function toString() {
      return this.formatString(_lib_common__WEBPACK_IMPORTED_MODULE_3__["config"]);
    }
  }, {
    key: "formatString",
    value: function formatString(_ref2) {
      var printTypes = _ref2.printTypes,
          printDegrees = _ref2.printDegrees;
      var f = _lib_common__WEBPACK_IMPORTED_MODULE_3__["formatValue"];
      return "".concat(printTypes ? 'Spherical' : '', "[rho:").concat(f(this.radius), ",theta:").concat(f(this.theta), ",phi:").concat(f(this.phi), "]");
    }
  }, {
    key: "equals",
    value: function equals(other) {
      return Object(_lib_common__WEBPACK_IMPORTED_MODULE_3__["equals"])(this.radius, other.radius) && Object(_lib_common__WEBPACK_IMPORTED_MODULE_3__["equals"])(this.theta, other.theta) && Object(_lib_common__WEBPACK_IMPORTED_MODULE_3__["equals"])(this.phi, other.phi);
    }
  }, {
    key: "exactEquals",
    value: function exactEquals(other) {
      return this.radius === other.radius && this.theta === other.theta && this.phi === other.phi;
    }
  }, {
    key: "set",
    value: function set(radius, phi, theta) {
      this.radius = radius;
      this.phi = phi;
      this.theta = theta;
      return this.check();
    }
  }, {
    key: "clone",
    value: function clone() {
      return new this.constructor().copy(this);
    }
  }, {
    key: "copy",
    value: function copy(other) {
      this.radius = other.radius;
      this.phi = other.phi;
      this.theta = other.theta;
      return this.check();
    }
  }, {
    key: "fromLngLatZ",
    value: function fromLngLatZ(_ref3) {
      var _ref4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, 3),
          lng = _ref4[0],
          lat = _ref4[1],
          z = _ref4[2];

      this.radius = 1 + z / this.radiusScale;
      this.phi = Object(_lib_common__WEBPACK_IMPORTED_MODULE_3__["radians"])(lat);
      this.theta = Object(_lib_common__WEBPACK_IMPORTED_MODULE_3__["radians"])(lng);
    }
  }, {
    key: "fromVector3",
    value: function fromVector3(v) {
      this.radius = gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_5__["length"](v);

      if (this.radius === 0) {
        this.theta = 0;
        this.phi = 0;
      } else {
        this.theta = Math.atan2(v[0], v[1]);
        this.phi = Math.acos(Object(_lib_common__WEBPACK_IMPORTED_MODULE_3__["clamp"])(v[2] / this.radius, -1, 1));
      }

      return this.check();
    }
  }, {
    key: "toVector3",
    value: function toVector3() {
      return new _vector3__WEBPACK_IMPORTED_MODULE_4__["default"](0, 0, this.radius).rotateX({
        radians: this.theta
      }).rotateZ({
        radians: this.phi
      });
    }
  }, {
    key: "makeSafe",
    value: function makeSafe() {
      this.phi = Math.max(EPSILON, Math.min(Math.PI - EPSILON, this.phi));
    }
  }, {
    key: "check",
    value: function check() {
      if (!Number.isFinite(this.phi) || !Number.isFinite(this.theta) || !(this.radius > 0)) {
        throw new Error('SphericalCoordinates: some fields set to invalid numbers');
      }

      return this;
    }
  }, {
    key: "bearing",
    get: function get() {
      return 180 - Object(_lib_common__WEBPACK_IMPORTED_MODULE_3__["degrees"])(this.phi);
    },
    set: function set(v) {
      this.phi = Math.PI - Object(_lib_common__WEBPACK_IMPORTED_MODULE_3__["radians"])(v);
    }
  }, {
    key: "pitch",
    get: function get() {
      return Object(_lib_common__WEBPACK_IMPORTED_MODULE_3__["degrees"])(this.theta);
    },
    set: function set(v) {
      this.theta = Object(_lib_common__WEBPACK_IMPORTED_MODULE_3__["radians"])(v);
    }
  }, {
    key: "longitude",
    get: function get() {
      return Object(_lib_common__WEBPACK_IMPORTED_MODULE_3__["degrees"])(this.phi);
    }
  }, {
    key: "latitude",
    get: function get() {
      return Object(_lib_common__WEBPACK_IMPORTED_MODULE_3__["degrees"])(this.theta);
    }
  }, {
    key: "lng",
    get: function get() {
      return Object(_lib_common__WEBPACK_IMPORTED_MODULE_3__["degrees"])(this.phi);
    }
  }, {
    key: "lat",
    get: function get() {
      return Object(_lib_common__WEBPACK_IMPORTED_MODULE_3__["degrees"])(this.theta);
    }
  }, {
    key: "z",
    get: function get() {
      return (this.radius - 1) * this.radiusScale;
    }
  }]);

  return SphericalCoordinates;
}();


//# sourceMappingURL=spherical-coordinates.js.map

/***/ }),

/***/ "../../node_modules/math.gl/dist/esm/vector2.js":
/*!*******************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/math.gl/dist/esm/vector2.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vector2; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _lib_vector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/vector */ "../../node_modules/math.gl/dist/esm/lib/vector.js");
/* harmony import */ var gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gl-matrix/vec2 */ "../../node_modules/gl-matrix/esm/vec2.js");








var Vector2 = function (_Vector) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Vector2, _Vector);

  function Vector2() {
    var _this;

    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Vector2);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Vector2).call(this));

    if (Array.isArray(x) && arguments.length === 1) {
      _this.copy(x);
    } else {
      _this.set(x, y);
    }

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Vector2, [{
    key: "cross",
    value: function cross(vector) {
      gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_6__["cross"](this, this, vector);
      return this.check();
    }
  }, {
    key: "horizontalAngle",
    value: function horizontalAngle() {
      return Math.atan2(this.y, this.x);
    }
  }, {
    key: "verticalAngle",
    value: function verticalAngle() {
      return Math.atan2(this.x, this.y);
    }
  }, {
    key: "operation",
    value: function operation(_operation) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _operation.apply(void 0, [this, this].concat(args));

      return this.check();
    }
  }, {
    key: "ELEMENTS",
    get: function get() {
      return 2;
    }
  }]);

  return Vector2;
}(_lib_vector__WEBPACK_IMPORTED_MODULE_5__["default"]);


//# sourceMappingURL=vector2.js.map

/***/ }),

/***/ "../../node_modules/math.gl/dist/esm/vector3.js":
/*!*******************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/math.gl/dist/esm/vector3.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vector3; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _lib_vector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/vector */ "../../node_modules/math.gl/dist/esm/lib/vector.js");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/common */ "../../node_modules/math.gl/dist/esm/lib/common.js");
/* harmony import */ var gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gl-matrix/vec3 */ "../../node_modules/gl-matrix/esm/vec3.js");








var ORIGIN = [0, 0, 0];

var Vector3 = function (_Vector) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Vector3, _Vector);

  function Vector3() {
    var _this;

    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Vector3);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Vector3).call(this));

    if (Array.isArray(x) && arguments.length === 1) {
      _this.copy(x);
    } else {
      _this.set(x, y, z);
    }

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Vector3, [{
    key: "angle",
    value: function angle(vector) {
      return gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_7__["angle"](this, vector);
    }
  }, {
    key: "cross",
    value: function cross(vector) {
      gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_7__["cross"](this, this, vector);
      return this.check();
    }
  }, {
    key: "rotateX",
    value: function rotateX(_ref) {
      var radians = _ref.radians,
          _ref$origin = _ref.origin,
          origin = _ref$origin === void 0 ? ORIGIN : _ref$origin;
      gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_7__["rotateX"](this, this, origin, radians);
      return this.check();
    }
  }, {
    key: "rotateY",
    value: function rotateY(_ref2) {
      var radians = _ref2.radians,
          _ref2$origin = _ref2.origin,
          origin = _ref2$origin === void 0 ? ORIGIN : _ref2$origin;
      gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_7__["rotateY"](this, this, origin, radians);
      return this.check();
    }
  }, {
    key: "rotateZ",
    value: function rotateZ(_ref3) {
      var radians = _ref3.radians,
          _ref3$origin = _ref3.origin,
          origin = _ref3$origin === void 0 ? ORIGIN : _ref3$origin;
      gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_7__["rotateZ"](this, this, origin, radians);
      return this.check();
    }
  }, {
    key: "operation",
    value: function operation(_operation) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _operation.apply(void 0, [this, this].concat(args));

      return this.check();
    }
  }, {
    key: "ELEMENTS",
    get: function get() {
      return 3;
    }
  }, {
    key: "z",
    get: function get() {
      return this[2];
    },
    set: function set(value) {
      return this[2] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_6__["checkNumber"])(value);
    }
  }]);

  return Vector3;
}(_lib_vector__WEBPACK_IMPORTED_MODULE_5__["default"]);


//# sourceMappingURL=vector3.js.map

/***/ }),

/***/ "../../node_modules/math.gl/dist/esm/vector4.js":
/*!*******************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/math.gl/dist/esm/vector4.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vector4; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _lib_vector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/vector */ "../../node_modules/math.gl/dist/esm/lib/vector.js");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/common */ "../../node_modules/math.gl/dist/esm/lib/common.js");








var Vector4 = function (_Vector) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Vector4, _Vector);

  function Vector4() {
    var _this;

    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var w = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Vector4);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Vector4).call(this));

    if (Array.isArray(x) && arguments.length === 1) {
      _this.copy(x);
    } else {
      _this.set(x, y, z, w);
    }

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Vector4, [{
    key: "applyMatrix4",
    value: function applyMatrix4(m) {
      m.transformVector(this, this);
      return this;
    }
  }, {
    key: "ELEMENTS",
    get: function get() {
      return 4;
    }
  }, {
    key: "z",
    get: function get() {
      return this[2];
    },
    set: function set(value) {
      return this[2] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_6__["checkNumber"])(value);
    }
  }, {
    key: "w",
    get: function get() {
      return this[3];
    },
    set: function set(value) {
      return this[3] = Object(_lib_common__WEBPACK_IMPORTED_MODULE_6__["checkNumber"])(value);
    }
  }]);

  return Vector4;
}(_lib_vector__WEBPACK_IMPORTED_MODULE_5__["default"]);


//# sourceMappingURL=vector4.js.map

/***/ }),

/***/ "../../node_modules/viewport-mercator-project/dist/esm/assert.js":
/*!************************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/viewport-mercator-project/dist/esm/assert.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return assert; });
function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'viewport-mercator-project: assertion failed.');
  }
}
//# sourceMappingURL=assert.js.map

/***/ }),

/***/ "../../node_modules/viewport-mercator-project/dist/esm/fit-bounds.js":
/*!****************************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/viewport-mercator-project/dist/esm/fit-bounds.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fitBounds; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _web_mercator_viewport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-mercator-viewport */ "../../node_modules/viewport-mercator-project/dist/esm/web-mercator-viewport.js");
/* harmony import */ var _assert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assert */ "../../node_modules/viewport-mercator-project/dist/esm/assert.js");



function fitBounds(_ref) {
  var width = _ref.width,
      height = _ref.height,
      bounds = _ref.bounds,
      _ref$padding = _ref.padding,
      padding = _ref$padding === void 0 ? 0 : _ref$padding,
      _ref$offset = _ref.offset,
      offset = _ref$offset === void 0 ? [0, 0] : _ref$offset;

  var _bounds = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(bounds, 2),
      _bounds$ = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_bounds[0], 2),
      west = _bounds$[0],
      south = _bounds$[1],
      _bounds$2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_bounds[1], 2),
      east = _bounds$2[0],
      north = _bounds$2[1];

  if (Number.isFinite(padding)) {
    var p = padding;
    padding = {
      top: p,
      bottom: p,
      left: p,
      right: p
    };
  } else {
    Object(_assert__WEBPACK_IMPORTED_MODULE_2__["default"])(Number.isFinite(padding.top) && Number.isFinite(padding.bottom) && Number.isFinite(padding.left) && Number.isFinite(padding.right));
  }

  var viewport = new _web_mercator_viewport__WEBPACK_IMPORTED_MODULE_1__["default"]({
    width: width,
    height: height,
    longitude: 0,
    latitude: 0,
    zoom: 0
  });
  var nw = viewport.project([west, north]);
  var se = viewport.project([east, south]);
  var size = [Math.abs(se[0] - nw[0]), Math.abs(se[1] - nw[1])];
  var targetSize = [width - padding.left - padding.right - Math.abs(offset[0]) * 2, height - padding.top - padding.bottom - Math.abs(offset[1]) * 2];
  Object(_assert__WEBPACK_IMPORTED_MODULE_2__["default"])(targetSize[0] > 0 && targetSize[1] > 0);
  var scaleX = targetSize[0] / size[0];
  var scaleY = targetSize[1] / size[1];
  var offsetX = (padding.right - padding.left) / 2 / scaleX;
  var offsetY = (padding.bottom - padding.top) / 2 / scaleY;
  var center = [(se[0] + nw[0]) / 2 + offsetX, (se[1] + nw[1]) / 2 + offsetY];
  var centerLngLat = viewport.unproject(center);
  var zoom = viewport.zoom + Math.log2(Math.abs(Math.min(scaleX, scaleY)));
  return {
    longitude: centerLngLat[0],
    latitude: centerLngLat[1],
    zoom: zoom
  };
}
//# sourceMappingURL=fit-bounds.js.map

/***/ }),

/***/ "../../node_modules/viewport-mercator-project/dist/esm/fly-to-viewport.js":
/*!*********************************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/viewport-mercator-project/dist/esm/fly-to-viewport.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return flyToViewport; });
/* harmony import */ var _math_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math-utils */ "../../node_modules/viewport-mercator-project/dist/esm/math-utils.js");
/* harmony import */ var _web_mercator_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-mercator-utils */ "../../node_modules/viewport-mercator-project/dist/esm/web-mercator-utils.js");
/* harmony import */ var gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-matrix/vec2 */ "../../node_modules/gl-matrix/esm/vec2.js");



var EPSILON = 0.01;
var VIEWPORT_TRANSITION_PROPS = ['longitude', 'latitude', 'zoom'];
function flyToViewport(startProps, endProps, t) {
  var viewport = {};
  var rho = 1.414;
  var startZoom = startProps.zoom;
  var startCenter = [startProps.longitude, startProps.latitude];
  var startScale = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_1__["zoomToScale"])(startZoom);
  var endZoom = endProps.zoom;
  var endCenter = [endProps.longitude, endProps.latitude];
  var scale = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_1__["zoomToScale"])(endZoom - startZoom);
  var startCenterXY = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_1__["lngLatToWorld"])(startCenter, startScale);
  var endCenterXY = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_1__["lngLatToWorld"])(endCenter, startScale);
  var uDelta = gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_2__["sub"]([], endCenterXY, startCenterXY);
  var w0 = Math.max(startProps.width, startProps.height);
  var w1 = w0 / scale;
  var u1 = gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_2__["length"](uDelta);

  if (Math.abs(u1) < EPSILON) {
    for (var _i = 0; _i < VIEWPORT_TRANSITION_PROPS.length; _i++) {
      var key = VIEWPORT_TRANSITION_PROPS[_i];
      var startValue = startProps[key];
      var endValue = endProps[key];
      viewport[key] = Object(_math_utils__WEBPACK_IMPORTED_MODULE_0__["lerp"])(startValue, endValue, t);
    }

    return viewport;
  }

  var rho2 = rho * rho;
  var b0 = (w1 * w1 - w0 * w0 + rho2 * rho2 * u1 * u1) / (2 * w0 * rho2 * u1);
  var b1 = (w1 * w1 - w0 * w0 - rho2 * rho2 * u1 * u1) / (2 * w1 * rho2 * u1);
  var r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0);
  var r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
  var S = (r1 - r0) / rho;
  var s = t * S;
  var w = Math.cosh(r0) / Math.cosh(r0 + rho * s);
  var u = w0 * ((Math.cosh(r0) * Math.tanh(r0 + rho * s) - Math.sinh(r0)) / rho2) / u1;
  var scaleIncrement = 1 / w;
  var newZoom = startZoom + Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_1__["scaleToZoom"])(scaleIncrement);
  var newCenterWorld = gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_2__["scale"]([], uDelta, u);
  gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_2__["add"](newCenterWorld, newCenterWorld, startCenterXY);
  gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_2__["scale"](newCenterWorld, newCenterWorld, scaleIncrement);
  var newCenter = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_1__["worldToLngLat"])(newCenterWorld, Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_1__["zoomToScale"])(newZoom));
  viewport.longitude = newCenter[0];
  viewport.latitude = newCenter[1];
  viewport.zoom = newZoom;
  return viewport;
}
//# sourceMappingURL=fly-to-viewport.js.map

/***/ }),

/***/ "../../node_modules/viewport-mercator-project/dist/esm/index.js":
/*!***********************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/viewport-mercator-project/dist/esm/index.js ***!
  \***********************************************************************************************/
/*! exports provided: default, WebMercatorViewport, fitBounds, normalizeViewportProps, flyToViewport, lngLatToWorld, worldToLngLat, worldToPixels, pixelsToWorld, getMeterZoom, getDistanceScales, addMetersToLngLat, getViewMatrix, getProjectionMatrix, getProjectionParameters, PerspectiveMercatorViewport, getUncenteredViewMatrix, projectFlat, unprojectFlat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web_mercator_viewport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web-mercator-viewport */ "../../node_modules/viewport-mercator-project/dist/esm/web-mercator-viewport.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _web_mercator_viewport__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebMercatorViewport", function() { return _web_mercator_viewport__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _fit_bounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fit-bounds */ "../../node_modules/viewport-mercator-project/dist/esm/fit-bounds.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fitBounds", function() { return _fit_bounds__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _normalize_viewport_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normalize-viewport-props */ "../../node_modules/viewport-mercator-project/dist/esm/normalize-viewport-props.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizeViewportProps", function() { return _normalize_viewport_props__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _fly_to_viewport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fly-to-viewport */ "../../node_modules/viewport-mercator-project/dist/esm/fly-to-viewport.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flyToViewport", function() { return _fly_to_viewport__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _web_mercator_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web-mercator-utils */ "../../node_modules/viewport-mercator-project/dist/esm/web-mercator-utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lngLatToWorld", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_4__["lngLatToWorld"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "worldToLngLat", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_4__["worldToLngLat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "worldToPixels", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_4__["worldToPixels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pixelsToWorld", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_4__["pixelsToWorld"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMeterZoom", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_4__["getMeterZoom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDistanceScales", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_4__["getDistanceScales"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addMetersToLngLat", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_4__["addMetersToLngLat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getViewMatrix", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_4__["getViewMatrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProjectionMatrix", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_4__["getProjectionMatrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProjectionParameters", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_4__["getProjectionParameters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PerspectiveMercatorViewport", function() { return _web_mercator_viewport__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUncenteredViewMatrix", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_4__["getViewMatrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "projectFlat", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_4__["lngLatToWorld"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unprojectFlat", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_4__["worldToLngLat"]; });









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/viewport-mercator-project/dist/esm/math-utils.js":
/*!****************************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/viewport-mercator-project/dist/esm/math-utils.js ***!
  \****************************************************************************************************/
/*! exports provided: createMat4, transformVector, mod, lerp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMat4", function() { return createMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformVector", function() { return transformVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mod", function() { return mod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony import */ var gl_matrix_vec4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-matrix/vec4 */ "../../node_modules/gl-matrix/esm/vec4.js");

function createMat4() {
  return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
}
function transformVector(matrix, vector) {
  var result = gl_matrix_vec4__WEBPACK_IMPORTED_MODULE_0__["transformMat4"]([], vector, matrix);
  gl_matrix_vec4__WEBPACK_IMPORTED_MODULE_0__["scale"](result, result, 1 / result[3]);
  return result;
}
function mod(value, divisor) {
  var modulus = value % divisor;
  return modulus < 0 ? divisor + modulus : modulus;
}
function lerp(start, end, step) {
  return step * end + (1 - step) * start;
}
//# sourceMappingURL=math-utils.js.map

/***/ }),

/***/ "../../node_modules/viewport-mercator-project/dist/esm/normalize-viewport-props.js":
/*!******************************************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/viewport-mercator-project/dist/esm/normalize-viewport-props.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeViewportProps; });
/* harmony import */ var _web_mercator_viewport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web-mercator-viewport */ "../../node_modules/viewport-mercator-project/dist/esm/web-mercator-viewport.js");
/* harmony import */ var _math_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math-utils */ "../../node_modules/viewport-mercator-project/dist/esm/math-utils.js");


var MAX_LATITUDE = 85.05113;
var MIN_LATITUDE = -85.05113;
function normalizeViewportProps(_ref) {
  var width = _ref.width,
      height = _ref.height,
      longitude = _ref.longitude,
      latitude = _ref.latitude,
      zoom = _ref.zoom,
      _ref$pitch = _ref.pitch,
      pitch = _ref$pitch === void 0 ? 0 : _ref$pitch,
      _ref$bearing = _ref.bearing,
      bearing = _ref$bearing === void 0 ? 0 : _ref$bearing;

  if (longitude < -180 || longitude > 180) {
    longitude = Object(_math_utils__WEBPACK_IMPORTED_MODULE_1__["mod"])(longitude + 180, 360) - 180;
  }

  if (bearing < -180 || bearing > 180) {
    bearing = Object(_math_utils__WEBPACK_IMPORTED_MODULE_1__["mod"])(bearing + 180, 360) - 180;
  }

  var flatViewport = new _web_mercator_viewport__WEBPACK_IMPORTED_MODULE_0__["default"]({
    width: width,
    height: height,
    longitude: longitude,
    latitude: latitude,
    zoom: zoom
  });
  var topY = flatViewport.project([longitude, MAX_LATITUDE])[1];
  var bottomY = flatViewport.project([longitude, MIN_LATITUDE])[1];
  var shiftY = 0;

  if (bottomY - topY < height) {
    zoom += Math.log2(height / (bottomY - topY));
    flatViewport = new _web_mercator_viewport__WEBPACK_IMPORTED_MODULE_0__["default"]({
      width: width,
      height: height,
      longitude: longitude,
      latitude: latitude,
      zoom: zoom
    });
    topY = flatViewport.project([longitude, MAX_LATITUDE])[1];
    bottomY = flatViewport.project([longitude, MIN_LATITUDE])[1];
  }

  if (topY > 0) {
    shiftY = topY;
  } else if (bottomY < height) {
    shiftY = bottomY - height;
  }

  if (shiftY) {
    latitude = flatViewport.unproject([width / 2, height / 2 + shiftY])[1];
  }

  return {
    width: width,
    height: height,
    longitude: longitude,
    latitude: latitude,
    zoom: zoom,
    pitch: pitch,
    bearing: bearing
  };
}
//# sourceMappingURL=normalize-viewport-props.js.map

/***/ }),

/***/ "../../node_modules/viewport-mercator-project/dist/esm/viewport.js":
/*!**************************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/viewport-mercator-project/dist/esm/viewport.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Viewport; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _math_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./math-utils */ "../../node_modules/viewport-mercator-project/dist/esm/math-utils.js");
/* harmony import */ var _web_mercator_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web-mercator-utils */ "../../node_modules/viewport-mercator-project/dist/esm/web-mercator-utils.js");
/* harmony import */ var gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gl-matrix/mat4 */ "../../node_modules/gl-matrix/esm/mat4.js");






var IDENTITY = Object(_math_utils__WEBPACK_IMPORTED_MODULE_3__["createMat4"])();

var Viewport = function () {
  function Viewport() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        width = _ref.width,
        height = _ref.height,
        _ref$viewMatrix = _ref.viewMatrix,
        viewMatrix = _ref$viewMatrix === void 0 ? IDENTITY : _ref$viewMatrix,
        _ref$projectionMatrix = _ref.projectionMatrix,
        projectionMatrix = _ref$projectionMatrix === void 0 ? IDENTITY : _ref$projectionMatrix;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Viewport);

    this.width = width || 1;
    this.height = height || 1;
    this.scale = 1;
    this.pixelsPerMeter = 1;
    this.viewMatrix = viewMatrix;
    this.projectionMatrix = projectionMatrix;
    var vpm = Object(_math_utils__WEBPACK_IMPORTED_MODULE_3__["createMat4"])();
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_5__["multiply"](vpm, vpm, this.projectionMatrix);
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_5__["multiply"](vpm, vpm, this.viewMatrix);
    this.viewProjectionMatrix = vpm;
    var m = Object(_math_utils__WEBPACK_IMPORTED_MODULE_3__["createMat4"])();
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_5__["scale"](m, m, [this.width / 2, -this.height / 2, 1]);
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_5__["translate"](m, m, [1, -1, 0]);
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_5__["multiply"](m, m, this.viewProjectionMatrix);
    var mInverse = gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_5__["invert"](Object(_math_utils__WEBPACK_IMPORTED_MODULE_3__["createMat4"])(), m);

    if (!mInverse) {
      throw new Error('Pixel project matrix not invertible');
    }

    this.pixelProjectionMatrix = m;
    this.pixelUnprojectionMatrix = mInverse;
    this.equals = this.equals.bind(this);
    this.project = this.project.bind(this);
    this.unproject = this.unproject.bind(this);
    this.projectPosition = this.projectPosition.bind(this);
    this.unprojectPosition = this.unprojectPosition.bind(this);
    this.projectFlat = this.projectFlat.bind(this);
    this.unprojectFlat = this.unprojectFlat.bind(this);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Viewport, [{
    key: "equals",
    value: function equals(viewport) {
      if (!(viewport instanceof Viewport)) {
        return false;
      }

      return viewport.width === this.width && viewport.height === this.height && gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_5__["equals"](viewport.projectionMatrix, this.projectionMatrix) && gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_5__["equals"](viewport.viewMatrix, this.viewMatrix);
    }
  }, {
    key: "project",
    value: function project(xyz) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$topLeft = _ref2.topLeft,
          topLeft = _ref2$topLeft === void 0 ? true : _ref2$topLeft;

      var worldPosition = this.projectPosition(xyz);
      var coord = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_4__["worldToPixels"])(worldPosition, this.pixelProjectionMatrix);

      var _coord = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(coord, 2),
          x = _coord[0],
          y = _coord[1];

      var y2 = topLeft ? y : this.height - y;
      return xyz.length === 2 ? [x, y2] : [x, y2, coord[2]];
    }
  }, {
    key: "unproject",
    value: function unproject(xyz) {
      var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref3$topLeft = _ref3.topLeft,
          topLeft = _ref3$topLeft === void 0 ? true : _ref3$topLeft,
          targetZ = _ref3.targetZ;

      var _xyz = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(xyz, 3),
          x = _xyz[0],
          y = _xyz[1],
          z = _xyz[2];

      var y2 = topLeft ? y : this.height - y;
      var targetZWorld = targetZ && targetZ * this.pixelsPerMeter;
      var coord = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_4__["pixelsToWorld"])([x, y2, z], this.pixelUnprojectionMatrix, targetZWorld);

      var _this$unprojectPositi = this.unprojectPosition(coord),
          _this$unprojectPositi2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$unprojectPositi, 3),
          X = _this$unprojectPositi2[0],
          Y = _this$unprojectPositi2[1],
          Z = _this$unprojectPositi2[2];

      if (Number.isFinite(z)) {
        return [X, Y, Z];
      }

      return Number.isFinite(targetZ) ? [X, Y, targetZ] : [X, Y];
    }
  }, {
    key: "projectPosition",
    value: function projectPosition(xyz) {
      var _this$projectFlat = this.projectFlat(xyz),
          _this$projectFlat2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$projectFlat, 2),
          X = _this$projectFlat2[0],
          Y = _this$projectFlat2[1];

      var Z = (xyz[2] || 0) * this.pixelsPerMeter;
      return [X, Y, Z];
    }
  }, {
    key: "unprojectPosition",
    value: function unprojectPosition(xyz) {
      var _this$unprojectFlat = this.unprojectFlat(xyz),
          _this$unprojectFlat2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$unprojectFlat, 2),
          X = _this$unprojectFlat2[0],
          Y = _this$unprojectFlat2[1];

      var Z = (xyz[2] || 0) / this.pixelsPerMeter;
      return [X, Y, Z];
    }
  }, {
    key: "projectFlat",
    value: function projectFlat(xyz) {
      var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.scale;
      return xyz;
    }
  }, {
    key: "unprojectFlat",
    value: function unprojectFlat(xyz) {
      var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.scale;
      return xyz;
    }
  }]);

  return Viewport;
}();


//# sourceMappingURL=viewport.js.map

/***/ }),

/***/ "../../node_modules/viewport-mercator-project/dist/esm/web-mercator-utils.js":
/*!************************************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/viewport-mercator-project/dist/esm/web-mercator-utils.js ***!
  \************************************************************************************************************/
/*! exports provided: zoomToScale, scaleToZoom, lngLatToWorld, worldToLngLat, getMeterZoom, getDistanceScales, addMetersToLngLat, getViewMatrix, getProjectionParameters, getProjectionMatrix, worldToPixels, pixelsToWorld */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomToScale", function() { return zoomToScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleToZoom", function() { return scaleToZoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lngLatToWorld", function() { return lngLatToWorld; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "worldToLngLat", function() { return worldToLngLat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMeterZoom", function() { return getMeterZoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDistanceScales", function() { return getDistanceScales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMetersToLngLat", function() { return addMetersToLngLat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getViewMatrix", function() { return getViewMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjectionParameters", function() { return getProjectionParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjectionMatrix", function() { return getProjectionMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "worldToPixels", function() { return worldToPixels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pixelsToWorld", function() { return pixelsToWorld; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _math_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math-utils */ "../../node_modules/viewport-mercator-project/dist/esm/math-utils.js");
/* harmony import */ var gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-matrix/mat4 */ "../../node_modules/gl-matrix/esm/mat4.js");
/* harmony import */ var gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gl-matrix/vec2 */ "../../node_modules/gl-matrix/esm/vec2.js");
/* harmony import */ var gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gl-matrix/vec3 */ "../../node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var _assert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assert */ "../../node_modules/viewport-mercator-project/dist/esm/assert.js");






var PI = Math.PI;
var PI_4 = PI / 4;
var DEGREES_TO_RADIANS = PI / 180;
var RADIANS_TO_DEGREES = 180 / PI;
var TILE_SIZE = 512;
var EARTH_CIRCUMFERENCE = 40.03e6;
var DEFAULT_ALTITUDE = 1.5;
function zoomToScale(zoom) {
  return Math.pow(2, zoom);
}
function scaleToZoom(scale) {
  return Math.log2(scale);
}
function lngLatToWorld(_ref, scale) {
  var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
      lng = _ref2[0],
      lat = _ref2[1];

  Object(_assert__WEBPACK_IMPORTED_MODULE_5__["default"])(Number.isFinite(lng) && Number.isFinite(scale));
  Object(_assert__WEBPACK_IMPORTED_MODULE_5__["default"])(Number.isFinite(lat) && lat >= -90 && lat <= 90, 'invalid latitude');
  scale *= TILE_SIZE;
  var lambda2 = lng * DEGREES_TO_RADIANS;
  var phi2 = lat * DEGREES_TO_RADIANS;
  var x = scale * (lambda2 + PI) / (2 * PI);
  var y = scale * (PI - Math.log(Math.tan(PI_4 + phi2 * 0.5))) / (2 * PI);
  return [x, y];
}
function worldToLngLat(_ref3, scale) {
  var _ref4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, 2),
      x = _ref4[0],
      y = _ref4[1];

  scale *= TILE_SIZE;
  var lambda2 = x / scale * (2 * PI) - PI;
  var phi2 = 2 * (Math.atan(Math.exp(PI - y / scale * (2 * PI))) - PI_4);
  return [lambda2 * RADIANS_TO_DEGREES, phi2 * RADIANS_TO_DEGREES];
}
function getMeterZoom(_ref5) {
  var latitude = _ref5.latitude;
  Object(_assert__WEBPACK_IMPORTED_MODULE_5__["default"])(Number.isFinite(latitude));
  var latCosine = Math.cos(latitude * DEGREES_TO_RADIANS);
  return scaleToZoom(EARTH_CIRCUMFERENCE * latCosine) - 9;
}
function getDistanceScales(_ref6) {
  var latitude = _ref6.latitude,
      longitude = _ref6.longitude,
      zoom = _ref6.zoom,
      scale = _ref6.scale,
      _ref6$highPrecision = _ref6.highPrecision,
      highPrecision = _ref6$highPrecision === void 0 ? false : _ref6$highPrecision;
  scale = scale !== undefined ? scale : zoomToScale(zoom);
  Object(_assert__WEBPACK_IMPORTED_MODULE_5__["default"])(Number.isFinite(latitude) && Number.isFinite(longitude) && Number.isFinite(scale));
  var result = {};
  var worldSize = TILE_SIZE * scale;
  var latCosine = Math.cos(latitude * DEGREES_TO_RADIANS);
  var pixelsPerDegreeX = worldSize / 360;
  var pixelsPerDegreeY = pixelsPerDegreeX / latCosine;
  var altPixelsPerMeter = worldSize / EARTH_CIRCUMFERENCE / latCosine;
  result.pixelsPerMeter = [altPixelsPerMeter, -altPixelsPerMeter, altPixelsPerMeter];
  result.metersPerPixel = [1 / altPixelsPerMeter, -1 / altPixelsPerMeter, 1 / altPixelsPerMeter];
  result.pixelsPerDegree = [pixelsPerDegreeX, -pixelsPerDegreeY, altPixelsPerMeter];
  result.degreesPerPixel = [1 / pixelsPerDegreeX, -1 / pixelsPerDegreeY, 1 / altPixelsPerMeter];

  if (highPrecision) {
    var latCosine2 = DEGREES_TO_RADIANS * Math.tan(latitude * DEGREES_TO_RADIANS) / latCosine;
    var pixelsPerDegreeY2 = pixelsPerDegreeX * latCosine2 / 2;
    var altPixelsPerDegree2 = worldSize / EARTH_CIRCUMFERENCE * latCosine2;
    var altPixelsPerMeter2 = altPixelsPerDegree2 / pixelsPerDegreeY * altPixelsPerMeter;
    result.pixelsPerDegree2 = [0, -pixelsPerDegreeY2, altPixelsPerDegree2];
    result.pixelsPerMeter2 = [altPixelsPerMeter2, 0, altPixelsPerMeter2];
  }

  return result;
}
function addMetersToLngLat(lngLatZ, xyz) {
  var _lngLatZ = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(lngLatZ, 3),
      longitude = _lngLatZ[0],
      latitude = _lngLatZ[1],
      z0 = _lngLatZ[2];

  var _xyz = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(xyz, 3),
      x = _xyz[0],
      y = _xyz[1],
      z = _xyz[2];

  var scale = 1;

  var _getDistanceScales = getDistanceScales({
    longitude: longitude,
    latitude: latitude,
    scale: scale,
    highPrecision: true
  }),
      pixelsPerMeter = _getDistanceScales.pixelsPerMeter,
      pixelsPerMeter2 = _getDistanceScales.pixelsPerMeter2;

  var worldspace = lngLatToWorld(lngLatZ, scale);
  worldspace[0] += x * (pixelsPerMeter[0] + pixelsPerMeter2[0] * y);
  worldspace[1] += y * (pixelsPerMeter[1] + pixelsPerMeter2[1] * y);
  var newLngLat = worldToLngLat(worldspace, scale);
  var newZ = (z0 || 0) + (z || 0);
  return Number.isFinite(z0) || Number.isFinite(z) ? [newLngLat[0], newLngLat[1], newZ] : newLngLat;
}
function getViewMatrix(_ref7) {
  var height = _ref7.height,
      pitch = _ref7.pitch,
      bearing = _ref7.bearing,
      altitude = _ref7.altitude,
      _ref7$center = _ref7.center,
      center = _ref7$center === void 0 ? null : _ref7$center,
      _ref7$flipY = _ref7.flipY,
      flipY = _ref7$flipY === void 0 ? false : _ref7$flipY;
  var vm = Object(_math_utils__WEBPACK_IMPORTED_MODULE_1__["createMat4"])();
  gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_2__["translate"](vm, vm, [0, 0, -altitude]);
  gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_2__["scale"](vm, vm, [1, 1, 1 / height]);
  gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_2__["rotateX"](vm, vm, -pitch * DEGREES_TO_RADIANS);
  gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_2__["rotateZ"](vm, vm, bearing * DEGREES_TO_RADIANS);

  if (flipY) {
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_2__["scale"](vm, vm, [1, -1, 1]);
  }

  if (center) {
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_2__["translate"](vm, vm, gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_4__["negate"]([], center));
  }

  return vm;
}
function getProjectionParameters(_ref8) {
  var width = _ref8.width,
      height = _ref8.height,
      _ref8$altitude = _ref8.altitude,
      altitude = _ref8$altitude === void 0 ? DEFAULT_ALTITUDE : _ref8$altitude,
      _ref8$pitch = _ref8.pitch,
      pitch = _ref8$pitch === void 0 ? 0 : _ref8$pitch,
      _ref8$nearZMultiplier = _ref8.nearZMultiplier,
      nearZMultiplier = _ref8$nearZMultiplier === void 0 ? 1 : _ref8$nearZMultiplier,
      _ref8$farZMultiplier = _ref8.farZMultiplier,
      farZMultiplier = _ref8$farZMultiplier === void 0 ? 1 : _ref8$farZMultiplier;
  var pitchRadians = pitch * DEGREES_TO_RADIANS;
  var halfFov = Math.atan(0.5 / altitude);
  var topHalfSurfaceDistance = Math.sin(halfFov) * altitude / Math.sin(Math.PI / 2 - pitchRadians - halfFov);
  var farZ = Math.cos(Math.PI / 2 - pitchRadians) * topHalfSurfaceDistance + altitude;
  return {
    fov: 2 * Math.atan(height / 2 / altitude),
    aspect: width / height,
    focalDistance: altitude,
    near: nearZMultiplier,
    far: farZ * farZMultiplier
  };
}
function getProjectionMatrix(_ref9) {
  var width = _ref9.width,
      height = _ref9.height,
      pitch = _ref9.pitch,
      altitude = _ref9.altitude,
      nearZMultiplier = _ref9.nearZMultiplier,
      farZMultiplier = _ref9.farZMultiplier;

  var _getProjectionParamet = getProjectionParameters({
    width: width,
    height: height,
    altitude: altitude,
    pitch: pitch,
    nearZMultiplier: nearZMultiplier,
    farZMultiplier: farZMultiplier
  }),
      fov = _getProjectionParamet.fov,
      aspect = _getProjectionParamet.aspect,
      near = _getProjectionParamet.near,
      far = _getProjectionParamet.far;

  var projectionMatrix = gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_2__["perspective"]([], fov, aspect, near, far);
  return projectionMatrix;
}
function worldToPixels(xyz, pixelProjectionMatrix) {
  var _xyz2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(xyz, 3),
      x = _xyz2[0],
      y = _xyz2[1],
      _xyz2$ = _xyz2[2],
      z = _xyz2$ === void 0 ? 0 : _xyz2$;

  Object(_assert__WEBPACK_IMPORTED_MODULE_5__["default"])(Number.isFinite(x) && Number.isFinite(y) && Number.isFinite(z));
  return Object(_math_utils__WEBPACK_IMPORTED_MODULE_1__["transformVector"])(pixelProjectionMatrix, [x, y, z, 1]);
}
function pixelsToWorld(xyz, pixelUnprojectionMatrix) {
  var targetZ = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var _xyz3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(xyz, 3),
      x = _xyz3[0],
      y = _xyz3[1],
      z = _xyz3[2];

  Object(_assert__WEBPACK_IMPORTED_MODULE_5__["default"])(Number.isFinite(x) && Number.isFinite(y), 'invalid pixel coordinate');

  if (Number.isFinite(z)) {
    var coord = Object(_math_utils__WEBPACK_IMPORTED_MODULE_1__["transformVector"])(pixelUnprojectionMatrix, [x, y, z, 1]);
    return coord;
  }

  var coord0 = Object(_math_utils__WEBPACK_IMPORTED_MODULE_1__["transformVector"])(pixelUnprojectionMatrix, [x, y, 0, 1]);
  var coord1 = Object(_math_utils__WEBPACK_IMPORTED_MODULE_1__["transformVector"])(pixelUnprojectionMatrix, [x, y, 1, 1]);
  var z0 = coord0[2];
  var z1 = coord1[2];
  var t = z0 === z1 ? 0 : ((targetZ || 0) - z0) / (z1 - z0);
  return gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_3__["lerp"]([], coord0, coord1, t);
}
//# sourceMappingURL=web-mercator-utils.js.map

/***/ }),

/***/ "../../node_modules/viewport-mercator-project/dist/esm/web-mercator-viewport.js":
/*!***************************************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/viewport-mercator-project/dist/esm/web-mercator-viewport.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WebMercatorViewport; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _viewport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewport */ "../../node_modules/viewport-mercator-project/dist/esm/viewport.js");
/* harmony import */ var _web_mercator_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./web-mercator-utils */ "../../node_modules/viewport-mercator-project/dist/esm/web-mercator-utils.js");
/* harmony import */ var _fit_bounds__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fit-bounds */ "../../node_modules/viewport-mercator-project/dist/esm/fit-bounds.js");
/* harmony import */ var gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gl-matrix/vec2 */ "../../node_modules/gl-matrix/esm/vec2.js");











var WebMercatorViewport = function (_Viewport) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(WebMercatorViewport, _Viewport);

  function WebMercatorViewport() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        width = _ref.width,
        height = _ref.height,
        _ref$latitude = _ref.latitude,
        latitude = _ref$latitude === void 0 ? 0 : _ref$latitude,
        _ref$longitude = _ref.longitude,
        longitude = _ref$longitude === void 0 ? 0 : _ref$longitude,
        _ref$zoom = _ref.zoom,
        zoom = _ref$zoom === void 0 ? 0 : _ref$zoom,
        _ref$pitch = _ref.pitch,
        pitch = _ref$pitch === void 0 ? 0 : _ref$pitch,
        _ref$bearing = _ref.bearing,
        bearing = _ref$bearing === void 0 ? 0 : _ref$bearing,
        _ref$altitude = _ref.altitude,
        altitude = _ref$altitude === void 0 ? 1.5 : _ref$altitude,
        nearZMultiplier = _ref.nearZMultiplier,
        farZMultiplier = _ref.farZMultiplier;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WebMercatorViewport);

    width = width || 1;
    height = height || 1;
    var scale = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_7__["zoomToScale"])(zoom);
    altitude = Math.max(0.75, altitude);
    var center = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_7__["lngLatToWorld"])([longitude, latitude], scale);
    center[2] = 0;
    var projectionMatrix = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_7__["getProjectionMatrix"])({
      width: width,
      height: height,
      pitch: pitch,
      bearing: bearing,
      altitude: altitude,
      nearZMultiplier: nearZMultiplier || 1 / height,
      farZMultiplier: farZMultiplier || 1.01
    });
    var viewMatrix = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_7__["getViewMatrix"])({
      height: height,
      center: center,
      pitch: pitch,
      bearing: bearing,
      altitude: altitude,
      flipY: true
    });
    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(WebMercatorViewport).call(this, {
      width: width,
      height: height,
      viewMatrix: viewMatrix,
      projectionMatrix: projectionMatrix
    }));
    _this.latitude = latitude;
    _this.longitude = longitude;
    _this.zoom = zoom;
    _this.pitch = pitch;
    _this.bearing = bearing;
    _this.altitude = altitude;
    _this.scale = scale;
    _this.center = center;
    _this.pixelsPerMeter = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_7__["getDistanceScales"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this))).pixelsPerMeter[2];
    Object.freeze(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(WebMercatorViewport, [{
    key: "projectFlat",
    value: function projectFlat(lngLat) {
      var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.scale;
      return Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_7__["lngLatToWorld"])(lngLat, scale);
    }
  }, {
    key: "unprojectFlat",
    value: function unprojectFlat(xy) {
      var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.scale;
      return Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_7__["worldToLngLat"])(xy, scale);
    }
  }, {
    key: "getMapCenterByLngLatPosition",
    value: function getMapCenterByLngLatPosition(_ref2) {
      var lngLat = _ref2.lngLat,
          pos = _ref2.pos;
      var fromLocation = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_7__["pixelsToWorld"])(pos, this.pixelUnprojectionMatrix);
      var toLocation = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_7__["lngLatToWorld"])(lngLat, this.scale);
      var translate = gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_9__["add"]([], toLocation, gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_9__["negate"]([], fromLocation));
      var newCenter = gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_9__["add"]([], this.center, translate);
      return Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_7__["worldToLngLat"])(newCenter, this.scale);
    }
  }, {
    key: "getLocationAtPoint",
    value: function getLocationAtPoint(_ref3) {
      var lngLat = _ref3.lngLat,
          pos = _ref3.pos;
      return this.getMapCenterByLngLatPosition({
        lngLat: lngLat,
        pos: pos
      });
    }
  }, {
    key: "fitBounds",
    value: function fitBounds(bounds) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var width = this.width,
          height = this.height;

      var _fitBounds2 = Object(_fit_bounds__WEBPACK_IMPORTED_MODULE_8__["default"])(Object.assign({
        width: width,
        height: height,
        bounds: bounds
      }, options)),
          longitude = _fitBounds2.longitude,
          latitude = _fitBounds2.latitude,
          zoom = _fitBounds2.zoom;

      return new WebMercatorViewport({
        width: width,
        height: height,
        longitude: longitude,
        latitude: latitude,
        zoom: zoom
      });
    }
  }]);

  return WebMercatorViewport;
}(_viewport__WEBPACK_IMPORTED_MODULE_6__["default"]);


//# sourceMappingURL=web-mercator-viewport.js.map

/***/ }),

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
if (!deck.LineLayer) {
  throw new Error('@deck.gl/layers is not found');
}

module.exports = Object.assign(deck, deckGLLayers);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/contour-layer/contour-layer.js":
/*!********************************************!*\
  !*** ./src/contour-layer/contour-layer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContourLayer; });
/* harmony import */ var math_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! math.gl */ "../../node_modules/math.gl/dist/esm/index.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contour_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contour-utils */ "./src/contour-layer/contour-utils.js");
/* harmony import */ var _utils_gpu_grid_aggregation_gpu_grid_aggregator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/gpu-grid-aggregation/gpu-grid-aggregator */ "./src/utils/gpu-grid-aggregation/gpu-grid-aggregator.js");
/* harmony import */ var _utils_gpu_grid_aggregation_grid_aggregation_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/gpu-grid-aggregation/grid-aggregation-utils */ "./src/utils/gpu-grid-aggregation/grid-aggregation-utils.js");
// Copyright (c) 2015 - 2018 Uber Technologies, Inc.
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
const DEFAULT_STROKE_WIDTH = 1;
const DEFAULT_THRESHOLD = 1;

const defaultProps = {
  // grid aggregation
  cellSize: {type: 'number', min: 1, max: 1000, value: 1000},
  getPosition: {type: 'accessor', value: x => x.position},
  getWeight: {type: 'accessor', value: x => 1},

  // contour lines
  contours: [{threshold: DEFAULT_THRESHOLD}],

  fp64: false,
  zOffset: 0.005
};

class ContourLayer extends _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["CompositeLayer"] {
  initializeState() {
    const {gl} = this.context;
    const options = {
      id: `${this.id}-gpu-aggregator`,
      shaderCache: this.context.shaderCache
    };
    this.state = {
      contourData: {},
      gridAggregator: new _utils_gpu_grid_aggregation_gpu_grid_aggregator__WEBPACK_IMPORTED_MODULE_3__["default"](gl, options),
      colorTrigger: 0,
      strokeWidthTrigger: 0
    };
  }

  updateState({oldProps, props, changeFlags}) {
    let dataChanged = false;
    let contoursChanged = false;
    const aggregationFlags = this._getAggregationFlags({oldProps, props, changeFlags});
    if (aggregationFlags) {
      dataChanged = true;
      // Clear countsData cache
      this.setState({countsData: null});
      this._aggregateData(aggregationFlags);
    }

    if (this._shouldRebuildContours({oldProps, props})) {
      contoursChanged = true;
      this._updateThresholdData(props);
    }

    if (dataChanged || contoursChanged) {
      this._generateContours();
    } else {
      // data for sublayers not changed check if color or strokeWidth need to be updated
      this._updateSubLayerTriggers(oldProps, props);
    }
  }

  finalizeState() {
    super.finalizeState();
    this.state.gridAggregator.delete();
  }

  renderLayers() {
    const {contourSegments, contourPolygons} = this.state.contourData;
    const hasIsolines = contourSegments && contourSegments.length > 0;
    const hasIsobands = contourPolygons && contourPolygons.length > 0;

    const lineLayer = hasIsolines && new _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["LineLayer"](this._getLineLayerProps());
    const solidPolygonLayer =
      hasIsobands && new _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["SolidPolygonLayer"](this._getSolidPolygonLayerProps());
    return [lineLayer, solidPolygonLayer];
  }

  // Private

  _aggregateData(aggregationFlags) {
    const {
      data,
      cellSize: cellSizeMeters,
      getPosition,
      getWeight,
      gpuAggregation,
      fp64,
      coordinateSystem
    } = this.props;
    const {weights, gridSize, gridOrigin, cellSize, boundingBox} = Object(_utils_gpu_grid_aggregation_grid_aggregation_utils__WEBPACK_IMPORTED_MODULE_4__["pointToDensityGridData"])({
      data,
      cellSizeMeters,
      getPosition,
      weightParams: {count: {getWeight}},
      gpuAggregation,
      gpuGridAggregator: this.state.gridAggregator,
      fp64,
      coordinateSystem,
      viewport: this.context.viewport,
      boundingBox: this.state.boundingBox, // avoid parsing data when it is not changed.
      aggregationFlags
    });

    this.setState({
      countsData: weights.count.aggregationData,
      countsBuffer: weights.count.aggregationBuffer,
      gridSize,
      gridOrigin,
      cellSize,
      boundingBox
    });
  }

  _generateContours() {
    const {gridSize, gridOrigin, cellSize, thresholdData} = this.state;
    let {countsData} = this.state;
    if (!countsData) {
      const {countsBuffer} = this.state;
      countsData = countsBuffer.getData();
      this.setState({countsData});
    }

    const {cellWeights} = _utils_gpu_grid_aggregation_gpu_grid_aggregator__WEBPACK_IMPORTED_MODULE_3__["default"].getCellData({countsData});
    // const thresholds = this.props.contours.map(x => x.threshold);
    const contourData = Object(_contour_utils__WEBPACK_IMPORTED_MODULE_2__["generateContours"])({
      thresholdData,
      cellWeights,
      gridSize,
      gridOrigin,
      cellSize
    });

    // contourData contains both iso-lines and iso-bands if requested.
    this.setState({contourData});
  }

  _getAggregationFlags({oldProps, props, changeFlags}) {
    let aggregationFlags = null;
    if (
      changeFlags.dataChanged ||
      oldProps.gpuAggregation !== props.gpuAggregation ||
      (changeFlags.updateTriggersChanged &&
        (changeFlags.updateTriggersChanged.all || changeFlags.updateTriggersChanged.getPosition))
    ) {
      aggregationFlags = Object.assign({}, aggregationFlags, {dataChanged: true});
    }
    if (oldProps.cellSize !== props.cellSize) {
      aggregationFlags = Object.assign({}, aggregationFlags, {cellSizeChanged: true});
    }
    return aggregationFlags;
  }

  _getLineLayerProps() {
    const {colorTrigger, strokeWidthTrigger} = this.state;

    return this.getSubLayerProps({
      id: 'contour-line-layer',
      data: this.state.contourData.contourSegments,
      getSourcePosition: d => d.start,
      getTargetPosition: d => d.end,
      getColor: this._onGetSublayerColor.bind(this),
      getWidth: this._onGetSublayerStrokeWidth.bind(this),
      widthUnits: 'pixels',
      updateTriggers: {
        getColor: colorTrigger,
        getWidth: strokeWidthTrigger
      }
    });
  }

  _getSolidPolygonLayerProps() {
    const {colorTrigger} = this.state;

    return this.getSubLayerProps({
      id: 'contour-solid-polygon-layer',
      data: this.state.contourData.contourPolygons,
      getPolygon: d => d.vertices,
      getFillColor: this._onGetSublayerColor.bind(this),
      updateTriggers: {
        getFillColor: colorTrigger
      }
    });
  }

  _onGetSublayerColor(element) {
    // element is either a line segment or polygon
    const {contours} = this.props;
    let color = DEFAULT_COLOR;
    contours.forEach(data => {
      if (Object(math_gl__WEBPACK_IMPORTED_MODULE_0__["equals"])(data.threshold, element.threshold)) {
        color = data.color || DEFAULT_COLOR;
      }
    });
    return color;
  }

  _onGetSublayerStrokeWidth(segment) {
    const {contours} = this.props;
    let strokeWidth = DEFAULT_STROKE_WIDTH;
    // Linearly searches the contours, but there should only be few contours
    contours.some(contour => {
      if (contour.threshold === segment.threshold) {
        strokeWidth = contour.strokeWidth || DEFAULT_STROKE_WIDTH;
        return true;
      }
      return false;
    });
    return strokeWidth;
  }

  _shouldRebuildContours({oldProps, props}) {
    if (
      !oldProps.contours ||
      !oldProps.zOffset ||
      oldProps.contours.length !== props.contours.length ||
      oldProps.zOffset !== props.zOffset
    ) {
      return true;
    }
    const oldThresholds = oldProps.contours.map(x => x.threshold);
    const thresholds = props.contours.map(x => x.threshold);

    return thresholds.some((_, i) => !Object(math_gl__WEBPACK_IMPORTED_MODULE_0__["equals"])(thresholds[i], oldThresholds[i]));
  }

  _updateSubLayerTriggers(oldProps, props) {
    if (oldProps && oldProps.contours && props && props.contours) {
      if (props.contours.some((contour, i) => contour.color !== oldProps.contours[i].color)) {
        this.state.colorTrigger++;
      }
      if (
        props.contours.some(
          (contour, i) => contour.strokeWidth !== oldProps.contours[i].strokeWidth
        )
      ) {
        this.state.strokeWidthTrigger++;
      }
    }
  }

  _updateThresholdData(props) {
    const thresholdData = props.contours.map((x, index) => {
      return {
        threshold: x.threshold,
        zIndex: x.zIndex || index,
        zOffset: props.zOffset
      };
    });
    this.setState({thresholdData});
  }
}

ContourLayer.layerName = 'ContourLayer';
ContourLayer.defaultProps = defaultProps;


/***/ }),

/***/ "./src/contour-layer/contour-utils.js":
/*!********************************************!*\
  !*** ./src/contour-layer/contour-utils.js ***!
  \********************************************/
/*! exports provided: generateContours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateContours", function() { return generateContours; });
/* harmony import */ var _marching_squares__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./marching-squares */ "./src/contour-layer/marching-squares.js");


// Given all the cell weights, generates contours for each threshold.
/* eslint-disable max-depth */
function generateContours({
  thresholdData,
  colors,
  cellWeights,
  gridSize,
  gridOrigin,
  cellSize
}) {
  const contourSegments = [];
  const contourPolygons = [];
  const width = gridSize[0];
  const height = gridSize[1];

  thresholdData.forEach((data, index) => {
    const {threshold} = data;
    for (let x = -1; x < width; x++) {
      for (let y = -1; y < height; y++) {
        // Get the MarchingSquares code based on neighbor cell weights.
        const {code, meanCode} = Object(_marching_squares__WEBPACK_IMPORTED_MODULE_0__["getCode"])({
          cellWeights,
          threshold,
          x,
          y,
          width,
          height
        });
        const opts = {
          gridOrigin,
          cellSize,
          x,
          y,
          width,
          height,
          code,
          meanCode,
          thresholdData: data
        };
        if (Array.isArray(threshold)) {
          opts.type = _marching_squares__WEBPACK_IMPORTED_MODULE_0__["CONTOUR_TYPE"].ISO_BANDS;
          const polygons = Object(_marching_squares__WEBPACK_IMPORTED_MODULE_0__["getVertices"])(opts);
          polygons.forEach(polygon => {
            contourPolygons.push({
              vertices: polygon,
              threshold
            });
          });
        } else {
          // Get the intersection vertices based on MarchingSquares code.
          opts.type = _marching_squares__WEBPACK_IMPORTED_MODULE_0__["CONTOUR_TYPE"].ISO_LINES;
          const vertices = Object(_marching_squares__WEBPACK_IMPORTED_MODULE_0__["getVertices"])(opts);
          for (let i = 0; i < vertices.length; i += 2) {
            contourSegments.push({
              start: vertices[i],
              end: vertices[i + 1],
              threshold
            });
          }
        }
      }
    }
  });
  return {contourSegments, contourPolygons};
}
/* eslint-enable max-depth */


/***/ }),

/***/ "./src/contour-layer/marching-squares-codes.js":
/*!*****************************************************!*\
  !*** ./src/contour-layer/marching-squares-codes.js ***!
  \*****************************************************/
/*! exports provided: ISOLINES_CODE_OFFSET_MAP, ISOBANDS_CODE_OFFSET_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ISOLINES_CODE_OFFSET_MAP", function() { return ISOLINES_CODE_OFFSET_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ISOBANDS_CODE_OFFSET_MAP", function() { return ISOBANDS_CODE_OFFSET_MAP; });
// Code to Offsets Map needed to implement Marching Squres algorithm
// Ref: https://en.wikipedia.org/wiki/Marching_squares

// Table to map code to the intersection offsets
// All offsets are relative to the center of marching cell (which is top right corner of grid-cell, and center of marching-square)
const HALF = 0.5;
const ONE6TH = 1 / 6;
const OFFSET = {
  N: [0, HALF], // NORTH
  E: [HALF, 0], // EAST
  S: [0, -HALF], // SOUTH
  W: [-HALF, 0], // WEST

  // CORNERS
  NE: [HALF, HALF],
  NW: [-HALF, HALF],
  SE: [HALF, -HALF],
  SW: [-HALF, -HALF]
};

// NOTE: vertices are ordered in CCW direction, starting from NW corner

// Triangles
const SW_TRIANGLE = [OFFSET.W, OFFSET.SW, OFFSET.S];
const SE_TRIANGLE = [OFFSET.S, OFFSET.SE, OFFSET.E];
const NE_TRIANGLE = [OFFSET.E, OFFSET.NE, OFFSET.N];
const NW_TRIANGLE = [OFFSET.NW, OFFSET.W, OFFSET.N];

// Trapezoids
const SW_TRAPEZOID = [[-HALF, ONE6TH], [-HALF, -ONE6TH], [-ONE6TH, -HALF], [ONE6TH, -HALF]];
const SE_TRAPEZOID = [[-ONE6TH, -HALF], [ONE6TH, -HALF], [HALF, -ONE6TH], [HALF, ONE6TH]];
const NE_TRAPEZOID = [[HALF, -ONE6TH], [HALF, ONE6TH], [ONE6TH, HALF], [-ONE6TH, HALF]];
const NW_TRAPEZOID = [[-HALF, ONE6TH], [-HALF, -ONE6TH], [ONE6TH, HALF], [-ONE6TH, HALF]];

// Rectangles
const S_RECTANGLE = [OFFSET.W, OFFSET.SW, OFFSET.SE, OFFSET.E];
const E_RECTANGLE = [OFFSET.S, OFFSET.SE, OFFSET.NE, OFFSET.N];
const N_RECTANGLE = [OFFSET.NW, OFFSET.W, OFFSET.E, OFFSET.NE];
const W_RECTANGLE = [OFFSET.NW, OFFSET.SW, OFFSET.S, OFFSET.N];
const EW_RECTANGEL = [[-HALF, ONE6TH], [-HALF, -ONE6TH], [HALF, -ONE6TH], [HALF, ONE6TH]];
const SN_RECTANGEL = [[-ONE6TH, -HALF], [ONE6TH, -HALF], [ONE6TH, HALF], [-ONE6TH, HALF]];

// Square
const SQUARE = [OFFSET.NW, OFFSET.SW, OFFSET.SE, OFFSET.NE];

// Pentagons
const SW_PENTAGON = [OFFSET.NW, OFFSET.SW, OFFSET.SE, OFFSET.E, OFFSET.N];
const SE_PENTAGON = [OFFSET.W, OFFSET.SW, OFFSET.SE, OFFSET.NE, OFFSET.N];
const NE_PENTAGON = [OFFSET.NW, OFFSET.W, OFFSET.S, OFFSET.SE, OFFSET.NE];
const NW_PENTAGON = [OFFSET.NW, OFFSET.SW, OFFSET.S, OFFSET.E, OFFSET.NE];

const NW_N_PENTAGON = [OFFSET.NW, OFFSET.W, [HALF, -ONE6TH], [HALF, ONE6TH], OFFSET.N];
const NE_E_PENTAGON = [[-ONE6TH, -HALF], [ONE6TH, -HALF], OFFSET.E, OFFSET.NE, OFFSET.N];
const SE_S_PENTAGON = [[-HALF, ONE6TH], [-HALF, -ONE6TH], OFFSET.S, OFFSET.SE, OFFSET.E];
const SW_W_PENTAGON = [OFFSET.W, OFFSET.SW, OFFSET.S, [ONE6TH, HALF], [-ONE6TH, HALF]];

const NW_W_PENTAGON = [OFFSET.NW, OFFSET.W, [-ONE6TH, -HALF], [ONE6TH, -HALF], OFFSET.N];
const NE_N_PENTAGON = [[-HALF, ONE6TH], [-HALF, -ONE6TH], OFFSET.E, OFFSET.NE, OFFSET.N];
const SE_E_PENTAGON = [OFFSET.S, OFFSET.SE, OFFSET.E, [ONE6TH, HALF], [-ONE6TH, HALF]];
const SW_S_PENTAGON = [OFFSET.W, OFFSET.SW, OFFSET.S, [HALF, -ONE6TH], [HALF, ONE6TH]];

// Hexagon
const S_HEXAGON = [OFFSET.W, OFFSET.SW, OFFSET.SE, OFFSET.E, [ONE6TH, HALF], [-ONE6TH, HALF]];
const E_HEXAGON = [[-HALF, ONE6TH], [-HALF, -ONE6TH], OFFSET.S, OFFSET.SE, OFFSET.NE, OFFSET.N];
const N_HEXAGON = [OFFSET.NW, OFFSET.W, [-ONE6TH, -HALF], [ONE6TH, -HALF], OFFSET.E, OFFSET.NE];
const W_HEXAGON = [OFFSET.NW, OFFSET.SW, OFFSET.S, [HALF, -ONE6TH], [HALF, ONE6TH], OFFSET.N];
const SW_NE_HEXAGON = [OFFSET.W, OFFSET.SW, OFFSET.S, OFFSET.E, OFFSET.NE, OFFSET.N];
const NW_SE_HEXAGON = [OFFSET.NW, OFFSET.W, OFFSET.S, OFFSET.SE, OFFSET.E, OFFSET.N];

// Heptagon (7-sided)
const NE_HEPTAGON = [
  [-HALF, ONE6TH],
  [-HALF, -ONE6TH],
  [-ONE6TH, -HALF],
  [ONE6TH, -HALF],
  OFFSET.E,
  OFFSET.NE,
  OFFSET.N
];
const SW_HEPTAGON = [
  OFFSET.W,
  OFFSET.SW,
  OFFSET.S,
  [HALF, -ONE6TH],
  [HALF, ONE6TH],
  [ONE6TH, HALF],
  [-ONE6TH, HALF]
];
const NW_HEPTAGON = [
  OFFSET.NW,
  OFFSET.W,
  [-ONE6TH, -HALF],
  [ONE6TH, -HALF],
  [HALF, -ONE6TH],
  [HALF, ONE6TH],
  OFFSET.N
];
const SE_HEPTAGON = [
  [-HALF, ONE6TH],
  [-HALF, -ONE6TH],
  OFFSET.S,
  OFFSET.SE,
  OFFSET.E,
  [ONE6TH, HALF],
  [-ONE6TH, HALF]
];

// Octagon
const OCTAGON = [
  [-HALF, ONE6TH],
  [-HALF, -ONE6TH],
  [-ONE6TH, -HALF],
  [ONE6TH, -HALF],
  [HALF, -ONE6TH],
  [HALF, ONE6TH],
  [ONE6TH, HALF],
  [-ONE6TH, HALF]
];

// Note: above wiki page invertes white/black dots for generating the code, we don't
const ISOLINES_CODE_OFFSET_MAP = {
  // key is equal to the code of 4 vertices (invert the code specified in wiki)
  // value can be an array or an Object
  // Array : [line] or [line, line], where each line is [start-point, end-point], and each point is [x, y]
  // Object : to handle saddle cases, whos output depends on mean value of all 4 corners
  //  key: code of mean value (0 or 1)
  //  value: Array , as above defines one or two line segments
  0: [],
  1: [[OFFSET.W, OFFSET.S]],
  2: [[OFFSET.S, OFFSET.E]],
  3: [[OFFSET.W, OFFSET.E]],
  4: [[OFFSET.N, OFFSET.E]],
  5: {
    0: [[OFFSET.W, OFFSET.S], [OFFSET.N, OFFSET.E]],
    1: [[OFFSET.W, OFFSET.N], [OFFSET.S, OFFSET.E]]
  },
  6: [[OFFSET.N, OFFSET.S]],
  7: [[OFFSET.W, OFFSET.N]],
  8: [[OFFSET.W, OFFSET.N]],
  9: [[OFFSET.N, OFFSET.S]],
  10: {
    0: [[OFFSET.W, OFFSET.N], [OFFSET.S, OFFSET.E]],
    1: [[OFFSET.W, OFFSET.S], [OFFSET.N, OFFSET.E]]
  },
  11: [[OFFSET.N, OFFSET.E]],
  12: [[OFFSET.W, OFFSET.E]],
  13: [[OFFSET.S, OFFSET.E]],
  14: [[OFFSET.W, OFFSET.S]],
  15: []
};

function ternaryToIndex(ternary) {
  return parseInt(ternary, 4);
}

const ISOBANDS_CODE_OFFSET_MAP = {
  // Below list of cases, follow the same order as in above mentioned wiki page.
  // Each case has its code on first commented line // T,TR,R,C
  // where T: Top, TR: Top-right, R: Right and C: current, each will be either 0, 1 or 2
  // final code is binary represenation of above code , where takes 2 digits
  // for example:  code 2-2-2-1 => 10-10-10-01 => 10101001 => 169

  // no contours
  [ternaryToIndex('0000')]: [],
  [ternaryToIndex('2222')]: [],

  // single triangle
  [ternaryToIndex('2221')]: [SW_TRIANGLE],
  [ternaryToIndex('2212')]: [SE_TRIANGLE],
  [ternaryToIndex('2122')]: [NE_TRIANGLE],
  [ternaryToIndex('1222')]: [NW_TRIANGLE],
  [ternaryToIndex('0001')]: [SW_TRIANGLE],
  [ternaryToIndex('0010')]: [SE_TRIANGLE],
  [ternaryToIndex('0100')]: [NE_TRIANGLE],
  [ternaryToIndex('1000')]: [NW_TRIANGLE],

  // single trapezoid
  [ternaryToIndex('2220')]: [SW_TRAPEZOID],
  [ternaryToIndex('2202')]: [SE_TRAPEZOID],
  [ternaryToIndex('2022')]: [NE_TRAPEZOID],
  [ternaryToIndex('0222')]: [NW_TRAPEZOID],
  [ternaryToIndex('0002')]: [SW_TRAPEZOID],
  [ternaryToIndex('0020')]: [SE_TRAPEZOID],
  [ternaryToIndex('0200')]: [NE_TRAPEZOID],
  [ternaryToIndex('2000')]: [NW_TRAPEZOID],

  // single rectangle
  [ternaryToIndex('0011')]: [S_RECTANGLE],
  [ternaryToIndex('0110')]: [E_RECTANGLE],
  [ternaryToIndex('1100')]: [N_RECTANGLE],
  [ternaryToIndex('1001')]: [W_RECTANGLE],
  [ternaryToIndex('2211')]: [S_RECTANGLE],
  [ternaryToIndex('2112')]: [E_RECTANGLE],
  [ternaryToIndex('1122')]: [N_RECTANGLE],
  [ternaryToIndex('1221')]: [W_RECTANGLE],
  [ternaryToIndex('2200')]: [EW_RECTANGEL],
  [ternaryToIndex('2002')]: [SN_RECTANGEL],
  [ternaryToIndex('0022')]: [EW_RECTANGEL],
  [ternaryToIndex('0220')]: [SN_RECTANGEL],

  // single square
  // 1111
  [ternaryToIndex('1111')]: [SQUARE],

  // single pentagon
  [ternaryToIndex('1211')]: [SW_PENTAGON],
  [ternaryToIndex('2111')]: [SE_PENTAGON],
  [ternaryToIndex('1112')]: [NE_PENTAGON],
  [ternaryToIndex('1121')]: [NW_PENTAGON],
  [ternaryToIndex('1011')]: [SW_PENTAGON],
  [ternaryToIndex('0111')]: [SE_PENTAGON],
  [ternaryToIndex('1110')]: [NE_PENTAGON],
  [ternaryToIndex('1101')]: [NW_PENTAGON],
  [ternaryToIndex('1200')]: [NW_N_PENTAGON],
  [ternaryToIndex('0120')]: [NE_E_PENTAGON],
  [ternaryToIndex('0012')]: [SE_S_PENTAGON],
  [ternaryToIndex('2001')]: [SW_W_PENTAGON],
  [ternaryToIndex('1022')]: [NW_N_PENTAGON],
  [ternaryToIndex('2102')]: [NE_E_PENTAGON],
  [ternaryToIndex('2210')]: [SE_S_PENTAGON],
  [ternaryToIndex('0221')]: [SW_W_PENTAGON],
  [ternaryToIndex('1002')]: [NW_W_PENTAGON],
  [ternaryToIndex('2100')]: [NE_N_PENTAGON],
  [ternaryToIndex('0210')]: [SE_E_PENTAGON],
  [ternaryToIndex('0021')]: [SW_S_PENTAGON],
  [ternaryToIndex('1220')]: [NW_W_PENTAGON],
  [ternaryToIndex('0122')]: [NE_N_PENTAGON],
  [ternaryToIndex('2012')]: [SE_E_PENTAGON],
  [ternaryToIndex('2201')]: [SW_S_PENTAGON],

  // single hexagon
  [ternaryToIndex('0211')]: [S_HEXAGON],
  [ternaryToIndex('2110')]: [E_HEXAGON],
  [ternaryToIndex('1102')]: [N_HEXAGON],
  [ternaryToIndex('1021')]: [W_HEXAGON],
  [ternaryToIndex('2011')]: [S_HEXAGON],
  [ternaryToIndex('0112')]: [E_HEXAGON],
  [ternaryToIndex('1120')]: [N_HEXAGON],
  [ternaryToIndex('1201')]: [W_HEXAGON],
  [ternaryToIndex('2101')]: [SW_NE_HEXAGON],
  [ternaryToIndex('0121')]: [SW_NE_HEXAGON],
  [ternaryToIndex('1012')]: [NW_SE_HEXAGON],
  [ternaryToIndex('1210')]: [NW_SE_HEXAGON],

  // 6-sided polygons based on mean weight
  // NOTE: merges mean value codes for extreme changes (as per above Wiki doc)
  [ternaryToIndex('0101')]: {
    0: [SW_TRIANGLE, NE_TRIANGLE],
    1: [SW_NE_HEXAGON],
    2: [SW_NE_HEXAGON]
  },
  [ternaryToIndex('1010')]: {
    0: [NW_TRIANGLE, SE_TRIANGLE],
    1: [NW_SE_HEXAGON],
    2: [NW_SE_HEXAGON]
  },
  [ternaryToIndex('2121')]: {
    0: [SW_NE_HEXAGON],
    1: [SW_NE_HEXAGON],
    2: [SW_TRIANGLE, NE_TRIANGLE]
  },
  [ternaryToIndex('1212')]: {
    0: [NW_SE_HEXAGON],
    1: [NW_SE_HEXAGON],
    2: [NW_TRIANGLE, SE_TRIANGLE]
  },

  // 7-sided polygons based on mean weight
  [ternaryToIndex('2120')]: {
    0: [NE_HEPTAGON],
    1: [NE_HEPTAGON],
    2: [SW_TRAPEZOID, NE_TRIANGLE]
  },
  [ternaryToIndex('2021')]: {
    0: [SW_HEPTAGON],
    1: [SW_HEPTAGON],
    2: [SW_TRIANGLE, NE_TRAPEZOID]
  },
  [ternaryToIndex('1202')]: {
    0: [NW_HEPTAGON],
    1: [NW_HEPTAGON],
    2: [NW_TRIANGLE, SE_TRAPEZOID]
  },
  [ternaryToIndex('0212')]: {
    0: [SE_HEPTAGON],
    1: [SE_HEPTAGON],
    2: [SE_TRIANGLE, NW_TRAPEZOID]
  },
  [ternaryToIndex('0102')]: {
    0: [SW_TRAPEZOID, NE_TRIANGLE],
    1: [NE_HEPTAGON],
    2: [NE_HEPTAGON]
  },
  [ternaryToIndex('0201')]: {
    0: [SW_TRIANGLE, NE_TRAPEZOID],
    1: [SW_HEPTAGON],
    2: [SW_HEPTAGON]
  },
  [ternaryToIndex('1020')]: {
    0: [NW_TRIANGLE, SE_TRAPEZOID],
    1: [NW_HEPTAGON],
    2: [NW_HEPTAGON]
  },
  [ternaryToIndex('2010')]: {
    0: [SE_TRIANGLE, NW_TRAPEZOID],
    1: [SE_HEPTAGON],
    2: [SE_HEPTAGON]
  },

  // 8-sided polygons based on mean weight
  [ternaryToIndex('2020')]: {
    0: [NW_TRAPEZOID, SE_TRAPEZOID],
    1: [OCTAGON],
    2: [SW_TRAPEZOID, NE_TRAPEZOID]
  },
  [ternaryToIndex('0202')]: {
    0: [NE_TRAPEZOID, SW_TRAPEZOID],
    1: [OCTAGON],
    2: [NW_TRAPEZOID, SE_TRAPEZOID]
  }
};


/***/ }),

/***/ "./src/contour-layer/marching-squares.js":
/*!***********************************************!*\
  !*** ./src/contour-layer/marching-squares.js ***!
  \***********************************************/
/*! exports provided: CONTOUR_TYPE, getCode, getVertices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTOUR_TYPE", function() { return CONTOUR_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCode", function() { return getCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVertices", function() { return getVertices; });
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _marching_squares_codes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./marching-squares-codes */ "./src/contour-layer/marching-squares-codes.js");
// All utility mehtods needed to implement Marching Squres algorithm
// Ref: https://en.wikipedia.org/wiki/Marching_squares




const CONTOUR_TYPE = {
  ISO_LINES: 1,
  ISO_BANDS: 2
};

const DEFAULT_THRESHOLD_DATA = {
  zIndex: 0,
  zOffset: 0.005
};

// Utility methods

function getVertexCode(weight, threshold) {
  // threshold must be a single value or a range (array of size 2)

  // Iso-bands
  if (Array.isArray(threshold)) {
    if (weight < threshold[0]) {
      return 0;
    }
    return weight < threshold[1] ? 1 : 2;
  }
  // Iso-lines
  return weight >= threshold ? 1 : 0;
}

// Returns marching square code for given cell
/* eslint-disable complexity, max-statements*/
function getCode(opts) {
  // Assumptions
  // Origin is on bottom-left , and X increase to right, Y to top
  // When processing one cell, we process 4 cells, by extending row to top and on column to right
  // to create a 2X2 cell grid
  const {cellWeights, x, y, width, height} = opts;
  let threshold = opts.threshold;
  if (opts.thresholdValue) {
    _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["log"].deprecated('thresholdValue', 'threshold')();
    threshold = opts.thresholdValue;
  }

  const isLeftBoundary = x < 0;
  const isRightBoundary = x >= width - 1;
  const isBottomBoundary = y < 0;
  const isTopBoundary = y >= height - 1;
  const isBoundary = isLeftBoundary || isRightBoundary || isBottomBoundary || isTopBoundary;

  const weights = {};
  const codes = {};

  // TOP
  if (isLeftBoundary || isTopBoundary) {
    codes.top = 0;
  } else {
    weights.top = cellWeights[(y + 1) * width + x];
    codes.top = getVertexCode(weights.top, threshold);
  }

  // TOP-RIGHT
  if (isRightBoundary || isTopBoundary) {
    codes.topRight = 0;
  } else {
    weights.topRight = cellWeights[(y + 1) * width + x + 1];
    codes.topRight = getVertexCode(weights.topRight, threshold);
  }

  // RIGHT
  if (isRightBoundary || isBottomBoundary) {
    codes.right = 0;
  } else {
    weights.right = cellWeights[y * width + x + 1];
    codes.right = getVertexCode(weights.right, threshold);
  }

  // CURRENT
  if (isLeftBoundary || isBottomBoundary) {
    codes.current = 0;
  } else {
    weights.current = cellWeights[y * width + x];
    codes.current = getVertexCode(weights.current, threshold);
  }

  const {top, topRight, right, current} = codes;
  let code = -1;
  if (Number.isFinite(threshold)) {
    code = (top << 3) | (topRight << 2) | (right << 1) | current;
  }
  if (Array.isArray(threshold)) {
    code = (top << 6) | (topRight << 4) | (right << 2) | current;
  }

  let meanCode = 0;
  // meanCode is only needed for saddle cases, and they should
  // only occur when we are not processing a cell on boundary
  // because when on a boundary either, bottom-row, top-row, left-column or right-column will have both 0 codes
  if (!isBoundary) {
    meanCode = getVertexCode(
      (weights.top + weights.topRight + weights.right + weights.current) / 4,
      threshold
    );
  }
  return {code, meanCode};
}
/* eslint-enable complexity, max-statements*/

// Returns intersection vertices for given cellindex
// [x, y] refers current marchng cell, reference vertex is always top-right corner
function getVertices(opts) {
  const {gridOrigin, cellSize, x, y, code, meanCode, type = CONTOUR_TYPE.ISO_LINES} = opts;
  const thresholdData = Object.assign({}, DEFAULT_THRESHOLD_DATA, opts.thresholdData);
  let offsets =
    type === CONTOUR_TYPE.ISO_BANDS
      ? _marching_squares_codes__WEBPACK_IMPORTED_MODULE_1__["ISOBANDS_CODE_OFFSET_MAP"][code]
      : _marching_squares_codes__WEBPACK_IMPORTED_MODULE_1__["ISOLINES_CODE_OFFSET_MAP"][code];

  // handle saddle cases
  if (!Array.isArray(offsets)) {
    offsets = offsets[meanCode];
  }

  // Reference vertex is at top-right move to top-right corner

  const vZ = thresholdData.zIndex * thresholdData.zOffset;
  const rX = (x + 1) * cellSize[0];
  const rY = (y + 1) * cellSize[1];

  const refVertexX = gridOrigin[0] + rX;
  const refVertexY = gridOrigin[1] + rY;

  // offsets format
  // ISO_LINES: [[1A, 1B], [2A, 2B]],
  // ISO_BANDS: [[1A, 1B, 1C, ...], [2A, 2B, 2C, ...]],

  // vertices format

  // ISO_LINES: [[x1A, y1A], [x1B, y1B], [x2A, x2B], ...],

  // ISO_BANDS:  => confirms to SolidPolygonLayer's simple polygon format
  //      [
  //        [[x1A, y1A], [x1B, y1B], [x1C, y1C] ... ],
  //        ...
  //      ]

  if (type === CONTOUR_TYPE.ISO_BANDS) {
    const polygons = [];
    offsets.forEach(polygonOffsets => {
      const polygon = [];
      polygonOffsets.forEach(xyOffset => {
        const vX = refVertexX + xyOffset[0] * cellSize[0];
        const vY = refVertexY + xyOffset[1] * cellSize[1];
        polygon.push([vX, vY, vZ]);
      });
      polygons.push(polygon);
    });
    return polygons;
  }

  // default case is ISO_LINES
  const lines = [];
  offsets.forEach(xyOffsets => {
    xyOffsets.forEach(offset => {
      const vX = refVertexX + offset[0] * cellSize[0];
      const vY = refVertexY + offset[1] * cellSize[1];
      lines.push([vX, vY, vZ]);
    });
  });
  return lines;
}


/***/ }),

/***/ "./src/cpu-grid-layer/cpu-grid-layer.js":
/*!**********************************************!*\
  !*** ./src/cpu-grid-layer/cpu-grid-layer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CPUGridLayer; });
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/core */ "@luma.gl/constants");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_bin_sorter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/bin-sorter */ "./src/utils/bin-sorter.js");
/* harmony import */ var _utils_color_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/color-utils */ "./src/utils/color-utils.js");
/* harmony import */ var _utils_scale_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/scale-utils */ "./src/utils/scale-utils.js");
/* harmony import */ var _grid_aggregator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid-aggregator */ "./src/cpu-grid-layer/grid-aggregator.js");
/* harmony import */ var _utils_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/aggregation-operation-utils */ "./src/utils/aggregation-operation-utils.js");
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










function nop() {}

const defaultMaterial = new _luma_gl_core__WEBPACK_IMPORTED_MODULE_0__["PhongMaterial"]();

const defaultProps = {
  // color
  colorDomain: null,
  colorRange: _utils_color_utils__WEBPACK_IMPORTED_MODULE_3__["defaultColorRange"],
  getColorValue: {type: 'accessor', value: null}, // default value is calcuated from `getColorWeight` and `colorAggregation`
  getColorWeight: {type: 'accessor', value: x => 1},
  colorAggregation: 'SUM',
  lowerPercentile: {type: 'number', min: 0, max: 100, value: 0},
  upperPercentile: {type: 'number', min: 0, max: 100, value: 100},
  onSetColorDomain: nop,

  // elevation
  elevationDomain: null,
  elevationRange: [0, 1000],
  getElevationValue: {type: 'accessor', value: null}, // default value is calcuated from `getElevationWeight` and `elevationAggregation`
  getElevationWeight: {type: 'accessor', value: x => 1},
  elevationAggregation: 'SUM',
  elevationLowerPercentile: {type: 'number', min: 0, max: 100, value: 0},
  elevationUpperPercentile: {type: 'number', min: 0, max: 100, value: 100},
  elevationScale: 1,
  onSetElevationDomain: nop,

  // grid
  cellSize: {type: 'number', min: 0, max: 1000, value: 1000},
  coverage: {type: 'number', min: 0, max: 1, value: 1},
  getPosition: {type: 'accessor', value: x => x.position},
  extruded: false,

  // Optional material for 'lighting' shader module
  material: defaultMaterial
};

const COLOR_PROPS = ['getColorValue', 'colorAggregation', 'getColorWeight'];
const ELEVATION_PROPS = ['getElevationValue', 'elevationAggregation', 'getElevationWeight'];

class CPUGridLayer extends _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["CompositeLayer"] {
  initializeState() {
    this.state = {
      layerData: [],
      sortedColorBins: null,
      sortedElevationBins: null,
      colorValueDomain: null,
      elevationValueDomain: null,
      colorScaleFunc: nop,
      elevationScaleFunc: nop,
      dimensionUpdaters: this.getDimensionUpdaters()
    };
  }

  updateState({oldProps, props, changeFlags}) {
    this.updateGetValueFuncs(oldProps, props);
    const reprojectNeeded = this.needsReProjectPoints(oldProps, props, changeFlags);

    if (changeFlags.dataChanged || reprojectNeeded) {
      // project data into hexagons, and get sortedBins
      this.getLayerData();
    } else {
      const dimensionChanges = this.getDimensionChanges(oldProps, props) || [];
      dimensionChanges.forEach(f => typeof f === 'function' && f.apply(this));
    }
  }

  colorElevationPropsChanged(oldProps, props) {
    let colorChanged = false;
    let elevationChanged = false;
    for (const p of COLOR_PROPS) {
      if (oldProps[p] !== props[p]) {
        colorChanged = true;
      }
    }
    for (const p of ELEVATION_PROPS) {
      if (oldProps[p] !== props[p]) {
        elevationChanged = true;
      }
    }
    return {colorChanged, elevationChanged};
  }

  updateGetValueFuncs(oldProps, props) {
    let {getColorValue, getElevationValue} = props;
    const {colorAggregation, getColorWeight, elevationAggregation, getElevationWeight} = this.props;
    const {colorChanged, elevationChanged} = this.colorElevationPropsChanged(oldProps, props);

    if (colorChanged && getColorValue === null) {
      // If `getColorValue` is not provided, build it.
      getColorValue = Object(_utils_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_6__["getValueFunc"])(colorAggregation, getColorWeight);
    }
    if (elevationChanged && getElevationValue === null) {
      // If `getElevationValue` is not provided, build it.
      getElevationValue = Object(_utils_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_6__["getValueFunc"])(elevationAggregation, getElevationWeight);
    }
    if (getColorValue) {
      this.setState({getColorValue});
    }
    if (getElevationValue) {
      this.setState({getElevationValue});
    }
  }

  needsReProjectPoints(oldProps, props, changeFlags) {
    return (
      oldProps.cellSize !== props.cellSize ||
      (changeFlags.updateTriggersChanged &&
        (changeFlags.updateTriggersChanged.all || changeFlags.updateTriggersChanged.getPosition))
    );
  }

  getDimensionUpdaters() {
    // dimension updaters are sequential,
    // if the first one needs to be called, the 2nd and 3rd one will automatically
    // be called. e.g. if ColorValue needs to be updated, getColorValueDomain and getColorScale
    // will automatically be called
    return {
      getFillColor: [
        {
          id: 'value',
          triggers: ['getColorValue', 'getColorWeight', 'colorAggregation'],
          updater: this.getSortedColorBins
        },
        {
          id: 'domain',
          triggers: ['lowerPercentile', 'upperPercentile'],
          updater: this.getColorValueDomain
        },
        {
          id: 'scaleFunc',
          triggers: ['colorDomain', 'colorRange'],
          updater: this.getColorScale
        }
      ],
      getElevation: [
        {
          id: 'value',
          triggers: ['getElevationValue', 'getElevationWeight', 'elevationAggregation'],
          updater: this.getSortedElevationBins
        },
        {
          id: 'domain',
          triggers: ['elevationLowerPercentile', 'elevationUpperPercentile'],
          updater: this.getElevationValueDomain
        },
        {
          id: 'scaleFunc',
          triggers: ['elevationDomain', 'elevationRange'],
          updater: this.getElevationScale
        }
      ]
    };
  }

  getDimensionChanges(oldProps, props) {
    const {dimensionUpdaters} = this.state;
    const updaters = [];

    // get dimension to be updated
    for (const dimensionKey in dimensionUpdaters) {
      // return the first triggered updater for each dimension
      const needUpdate = dimensionUpdaters[dimensionKey].find(item =>
        item.triggers.some(t => oldProps[t] !== props[t])
      );

      if (needUpdate) {
        updaters.push(needUpdate.updater);
      }
    }

    return updaters.length ? updaters : null;
  }

  getPickingInfo({info}) {
    const {sortedColorBins, sortedElevationBins} = this.state;

    const isPicked = info.picked && info.index > -1;
    let object = null;

    if (isPicked) {
      const cell = this.state.layerData[info.index];

      const colorValue =
        sortedColorBins.binMap[cell.index] && sortedColorBins.binMap[cell.index].value;
      const elevationValue =
        sortedElevationBins.binMap[cell.index] && sortedElevationBins.binMap[cell.index].value;

      object = Object.assign(
        {
          colorValue,
          elevationValue
        },
        cell
      );
    }

    // add bin colorValue and elevationValue to info
    return Object.assign(info, {
      picked: Boolean(object),
      // override object with picked cell
      object
    });
  }

  getUpdateTriggers() {
    const {dimensionUpdaters} = this.state;

    // merge all dimension triggers
    const updateTriggers = {};

    for (const dimensionKey in dimensionUpdaters) {
      updateTriggers[dimensionKey] = {};

      for (const step of dimensionUpdaters[dimensionKey]) {
        step.triggers.forEach(prop => {
          updateTriggers[dimensionKey][prop] = this.props[prop];
        });
      }
    }

    return updateTriggers;
  }

  getLayerData() {
    const {data, cellSize, getPosition} = this.props;
    const {layerData} = Object(_grid_aggregator__WEBPACK_IMPORTED_MODULE_5__["pointToDensityGridDataCPU"])(data, cellSize, getPosition);

    this.setState({layerData});
    this.getSortedBins();
  }

  getValueDomain() {
    this.getColorValueDomain();
    this.getElevationValueDomain();
  }

  getSortedBins() {
    this.getSortedColorBins();
    this.getSortedElevationBins();
  }

  getSortedColorBins() {
    const {getColorValue} = this.state;
    const sortedColorBins = new _utils_bin_sorter__WEBPACK_IMPORTED_MODULE_2__["default"](this.state.layerData || [], getColorValue);

    this.setState({sortedColorBins});
    this.getColorValueDomain();
  }

  getSortedElevationBins() {
    const {getElevationValue} = this.state;
    const sortedElevationBins = new _utils_bin_sorter__WEBPACK_IMPORTED_MODULE_2__["default"](this.state.layerData || [], getElevationValue);
    this.setState({sortedElevationBins});
    this.getElevationValueDomain();
  }

  getColorValueDomain() {
    const {lowerPercentile, upperPercentile, onSetColorDomain} = this.props;

    this.state.colorValueDomain = this.state.sortedColorBins.getValueRange([
      lowerPercentile,
      upperPercentile
    ]);

    if (typeof onSetColorDomain === 'function') {
      onSetColorDomain(this.state.colorValueDomain);
    }

    this.getColorScale();
  }

  getElevationValueDomain() {
    const {elevationLowerPercentile, elevationUpperPercentile, onSetElevationDomain} = this.props;

    this.state.elevationValueDomain = this.state.sortedElevationBins.getValueRange([
      elevationLowerPercentile,
      elevationUpperPercentile
    ]);

    if (typeof onSetElevationDomain === 'function') {
      onSetElevationDomain(this.state.elevationValueDomain);
    }

    this.getElevationScale();
  }

  getColorScale() {
    const {colorRange} = this.props;
    const colorDomain = this.props.colorDomain || this.state.colorValueDomain;

    this.state.colorScaleFunc = Object(_utils_scale_utils__WEBPACK_IMPORTED_MODULE_4__["getQuantizeScale"])(colorDomain, colorRange);
  }

  getElevationScale() {
    const {elevationRange} = this.props;
    const elevationDomain = this.props.elevationDomain || this.state.elevationValueDomain;

    this.state.elevationScaleFunc = Object(_utils_scale_utils__WEBPACK_IMPORTED_MODULE_4__["getLinearScale"])(elevationDomain, elevationRange);
  }

  _onGetSublayerColor(cell) {
    const {sortedColorBins, colorScaleFunc, colorValueDomain} = this.state;

    const cv = sortedColorBins.binMap[cell.index] && sortedColorBins.binMap[cell.index].value;
    const colorDomain = this.props.colorDomain || colorValueDomain;

    const isColorValueInDomain = cv >= colorDomain[0] && cv <= colorDomain[colorDomain.length - 1];

    // if cell value is outside domain, set alpha to 0
    const color = isColorValueInDomain ? colorScaleFunc(cv) : [0, 0, 0, 0];

    // add alpha to color if not defined in colorRange
    color[3] = Number.isFinite(color[3]) ? color[3] : 255;

    return color;
  }

  _onGetSublayerElevation(cell) {
    const {sortedElevationBins, elevationScaleFunc, elevationValueDomain} = this.state;
    const ev =
      sortedElevationBins.binMap[cell.index] && sortedElevationBins.binMap[cell.index].value;

    const elevationDomain = this.props.elevationDomain || elevationValueDomain;

    const isElevationValueInDomain =
      ev >= elevationDomain[0] && ev <= elevationDomain[elevationDomain.length - 1];

    // if cell value is outside domain, set elevation to -1
    return isElevationValueInDomain ? elevationScaleFunc(ev) : -1;
  }

  renderLayers() {
    const {elevationScale, extruded, cellSize, coverage, material, transitions} = this.props;

    const SubLayerClass = this.getSubLayerClass('grid-cell', _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["GridCellLayer"]);

    return new SubLayerClass(
      {
        cellSize,
        coverage,
        material,
        elevationScale,
        extruded,

        getFillColor: this._onGetSublayerColor.bind(this),
        getElevation: this._onGetSublayerElevation.bind(this),
        transitions: transitions && {
          getFillColor: transitions.getColorValue || transitions.getColorWeight,
          getElevation: transitions.getElevationValue || transitions.getElevationWeight
        }
      },
      this.getSubLayerProps({
        id: 'grid-cell',
        updateTriggers: this.getUpdateTriggers()
      }),
      {
        data: this.state.layerData
      }
    );
  }
}

CPUGridLayer.layerName = 'CPUGridLayer';
CPUGridLayer.defaultProps = defaultProps;


/***/ }),

/***/ "./src/cpu-grid-layer/grid-aggregator.js":
/*!***********************************************!*\
  !*** ./src/cpu-grid-layer/grid-aggregator.js ***!
  \***********************************************/
/*! exports provided: pointToDensityGridDataCPU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointToDensityGridDataCPU", function() { return pointToDensityGridDataCPU; });
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__);
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



const R_EARTH = 6378000;

/**
 * Calculate density grid from an array of points
 * @param {Iterable} points
 * @param {number} cellSize - cell size in meters
 * @param {function} getPosition - position accessor
 * @returns {object} - grid data, cell dimension
 */
function pointToDensityGridDataCPU(points, cellSize, getPosition) {
  const {gridHash, gridOffset} = _pointsToGridHashing(points, cellSize, getPosition);
  const layerData = _getGridLayerDataFromGridHash(gridHash, gridOffset);

  return {
    gridHash,
    gridOffset,
    layerData
  };
}

/**
 * Project points into each cell, return a hash table of cells
 * @param {Iterable} points
 * @param {number} cellSize - unit size in meters
 * @param {function} getPosition - position accessor
 * @returns {object} - grid hash and cell dimension
 */
/* eslint-disable max-statements */
function _pointsToGridHashing(points = [], cellSize, getPosition) {
  // find the geometric center of sample points
  let latMin = Infinity;
  let latMax = -Infinity;
  let pLat;

  const {iterable, objectInfo} = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["createIterable"])(points);
  for (const pt of iterable) {
    objectInfo.index++;
    pLat = getPosition(pt, objectInfo)[1];
    if (Number.isFinite(pLat)) {
      latMin = pLat < latMin ? pLat : latMin;
      latMax = pLat > latMax ? pLat : latMax;
    }
  }

  const centerLat = (latMin + latMax) / 2;

  const gridOffset = _calculateGridLatLonOffset(cellSize, centerLat);

  if (gridOffset.xOffset <= 0 || gridOffset.yOffset <= 0) {
    return {gridHash: {}, gridOffset};
  }

  // calculate count per cell
  const gridHash = {};

  // Iterating over again, reset index
  objectInfo.index = -1;
  for (const pt of iterable) {
    objectInfo.index++;
    const [lng, lat] = getPosition(pt, objectInfo);

    if (Number.isFinite(lat) && Number.isFinite(lng)) {
      const latIdx = Math.floor((lat + 90) / gridOffset.yOffset);
      const lonIdx = Math.floor((lng + 180) / gridOffset.xOffset);
      const key = `${latIdx}-${lonIdx}`;

      gridHash[key] = gridHash[key] || {count: 0, points: []};
      gridHash[key].count += 1;
      gridHash[key].points.push(pt);
    }
  }

  return {gridHash, gridOffset};
}
/* eslint-enable max-statements */

function _getGridLayerDataFromGridHash(gridHash, gridOffset) {
  return Object.keys(gridHash).reduce((accu, key, i) => {
    const idxs = key.split('-');
    const latIdx = parseInt(idxs[0], 10);
    const lonIdx = parseInt(idxs[1], 10);

    accu.push(
      Object.assign(
        {
          index: i,
          position: [-180 + gridOffset.xOffset * lonIdx, -90 + gridOffset.yOffset * latIdx]
        },
        gridHash[key]
      )
    );

    return accu;
  }, []);
}

/**
 * calculate grid layer cell size in lat lon based on world unit size
 * and current latitude
 * @param {number} cellSize
 * @param {number} latitude
 * @returns {object} - lat delta and lon delta
 */
function _calculateGridLatLonOffset(cellSize, latitude) {
  const yOffset = _calculateLatOffset(cellSize);
  const xOffset = _calculateLonOffset(latitude, cellSize);
  return {yOffset, xOffset};
}

/**
 * with a given x-km change, calculate the increment of latitude
 * based on stackoverflow http://stackoverflow.com/questions/7477003
 * @param {number} dy - change in km
 * @return {number} - increment in latitude
 */
function _calculateLatOffset(dy) {
  return (dy / R_EARTH) * (180 / Math.PI);
}

/**
 * with a given x-km change, and current latitude
 * calculate the increment of longitude
 * based on stackoverflow http://stackoverflow.com/questions/7477003
 * @param {number} lat - latitude of current location (based on city)
 * @param {number} dx - change in km
 * @return {number} - increment in longitude
 */
function _calculateLonOffset(lat, dx) {
  return ((dx / R_EARTH) * (180 / Math.PI)) / Math.cos((lat * Math.PI) / 180);
}


/***/ }),

/***/ "./src/gpu-grid-layer/gpu-grid-cell-layer-fragment.glsl.js":
/*!*****************************************************************!*\
  !*** ./src/gpu-grid-layer/gpu-grid-cell-layer-fragment.glsl.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (`\
#version 300 es
#define SHADER_NAME gpu-grid-cell-layer-fragment-shader

precision highp float;

in vec4 vColor;

out vec4 fragColor;

void main(void) {
  fragColor = vColor;
  fragColor = picking_filterColor(fragColor);
}
`);


/***/ }),

/***/ "./src/gpu-grid-layer/gpu-grid-cell-layer-vertex.glsl.js":
/*!***************************************************************!*\
  !*** ./src/gpu-grid-layer/gpu-grid-cell-layer-vertex.glsl.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

// Inspired by screen-grid-layer vertex shader in deck.gl

/* harmony default export */ __webpack_exports__["default"] = (`\
#version 300 es
#define SHADER_NAME gpu-grid-cell-layer-vertex-shader
#define RANGE_COUNT 6

in vec3 positions;
in vec3 normals;

in vec4 colors;
in vec4 elevations;
in vec3 instancePickingColors;

// Custom uniforms
uniform vec2 offset;
uniform bool extruded;
uniform float cellSize;
uniform float coverage;
uniform float opacity;
uniform float elevationScale;

uniform ivec2 gridSize;
uniform vec2 gridOrigin;
uniform vec2 gridOriginLow;
uniform vec2 gridOffset;
uniform vec2 gridOffsetLow;
uniform vec4 colorRange[RANGE_COUNT];
uniform vec2 elevationRange;

// Domain uniforms
uniform vec2 colorDomain;
uniform bool colorDomainValid;
uniform vec2 elevationDomain;
uniform bool elevationDomainValid;

layout(std140) uniform;
uniform ColorData
{
  vec4 maxMinCount;
} colorData;
uniform ElevationData
{
  vec4 maxMinCount;
} elevationData;

#define EPSILON 0.00001

// Result
out vec4 vColor;

vec4 quantizeScale(vec2 domain, vec4 range[RANGE_COUNT], float value) {
  vec4 outColor = vec4(0., 0., 0., 0.);
  if (value >= (domain.x - EPSILON) && value <= (domain.y + EPSILON)) {
    float domainRange = domain.y - domain.x;
    if (domainRange <= 0.) {
      outColor = colorRange[0];
    } else {
      float rangeCount = float(RANGE_COUNT);
      float rangeStep = domainRange / rangeCount;
      float idx = floor((value - domain.x) / rangeStep);
      idx = clamp(idx, 0., rangeCount - 1.);
      int intIdx = int(idx);
      outColor = colorRange[intIdx];
    }
  }
  return outColor;
}

float linearScale(vec2 domain, vec2 range, float value) {
  if (value >= (domain.x - EPSILON) && value <= (domain.y + EPSILON)) {
    return ((value - domain.x) / (domain.y - domain.x)) * (range.y - range.x) + range.x;
  }
  return -1.;
}

void main(void) {

  vec2 clrDomain = colorDomainValid ? colorDomain : vec2(colorData.maxMinCount.a, colorData.maxMinCount.r);
  vec4 color = quantizeScale(clrDomain, colorRange, colors.r);

  float elevation = 0.0;

  if (extruded) {
    vec2 elvDomain = elevationDomainValid ? elevationDomain : vec2(elevationData.maxMinCount.a, elevationData.maxMinCount.r);
    elevation = linearScale(elvDomain, elevationRange, elevations.r);
    elevation = elevation  * (positions.z + 1.0) / 2.0 * elevationScale;
  }

  // if aggregated color or elevation is 0 do not render
  float shouldRender = float(color.r > 0.0 && elevations.r >= 0.0);
  float dotRadius = cellSize / 2. * coverage * shouldRender;

  int yIndex = (gl_InstanceID / gridSize[0]);
  int xIndex = gl_InstanceID - (yIndex * gridSize[0]);

  vec2 instancePositionXFP64 = mul_fp64(vec2(gridOffset[0], gridOffsetLow[0]), vec2(float(xIndex), 0.));
  instancePositionXFP64 = sum_fp64(instancePositionXFP64, vec2(gridOrigin[0], gridOriginLow[0]));
  vec2 instancePositionYFP64 = mul_fp64(vec2(gridOffset[1], gridOffsetLow[1]), vec2(float(yIndex), 0.));
  instancePositionYFP64 = sum_fp64(instancePositionYFP64, vec2(gridOrigin[1], gridOriginLow[1]));

  vec3 centroidPosition = vec3(instancePositionXFP64[0], instancePositionYFP64[0], elevation);
  vec2 centroidPosition64xyLow = vec2(instancePositionXFP64[1], instancePositionYFP64[1]);
  vec3 pos = vec3(project_size(positions.xy + offset) * dotRadius, 0.);

  // Set color to be rendered to picking fbo (also used to check for selection highlight).
  picking_setPickingColor(instancePickingColors);

  vec4 position_commonspace;
  gl_Position = project_position_to_clipspace(centroidPosition, centroidPosition64xyLow, pos, position_commonspace);

  // Light calculations
  // Worldspace is the linear space after Mercator projection

  vec3 normals_commonspace = project_normal(normals);

   if (extruded) {
    vec3 lightColor = lighting_getLightColor(color.rgb, project_uCameraPosition, position_commonspace.xyz, normals_commonspace);
    vColor = vec4(lightColor, color.a * opacity) / 255.;
  } else {
    vColor = vec4(color.rgb, color.a * opacity) / 255.;
  }
}
`);


/***/ }),

/***/ "./src/gpu-grid-layer/gpu-grid-cell-layer.js":
/*!***************************************************!*\
  !*** ./src/gpu-grid-layer/gpu-grid-cell-layer.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GPUGridCellLayer; });
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @luma.gl/constants */ "@luma.gl/constants");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_color_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/color-utils */ "./src/utils/color-utils.js");
/* harmony import */ var _gpu_grid_cell_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gpu-grid-cell-layer-vertex.glsl */ "./src/gpu-grid-layer/gpu-grid-cell-layer-vertex.glsl.js");
/* harmony import */ var _gpu_grid_cell_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gpu-grid-cell-layer-fragment.glsl */ "./src/gpu-grid-layer/gpu-grid-cell-layer-fragment.glsl.js");
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




const defaultMaterial = new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__["PhongMaterial"]();





const COLOR_DATA_UBO_INDEX = 0;
const ELEVATION_DATA_UBO_INDEX = 1;

const defaultProps = {
  // color
  colorDomain: null,
  colorRange: _utils_color_utils__WEBPACK_IMPORTED_MODULE_2__["defaultColorRange"],

  // elevation
  elevationDomain: null,
  elevationRange: [0, 1000],
  elevationScale: {type: 'number', min: 0, value: 1},

  // grid
  gridSize: {type: 'array', min: 0, value: [1, 1]},
  gridOrigin: {type: 'array', min: 0, value: [0, 0]},
  gridOffset: {type: 'array', min: 0, value: [0, 0]},

  cellSize: {type: 'number', min: 0, max: 1000, value: 1000},
  offset: {type: 'array', min: 0, value: [1, 1]},
  coverage: {type: 'number', min: 0, max: 1, value: 1},
  extruded: true,

  material: defaultMaterial
};

class GPUGridCellLayer extends _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["Layer"] {
  getShaders() {
    return super.getShaders({
      vs: _gpu_grid_cell_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_3__["default"],
      fs: _gpu_grid_cell_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_4__["default"],
      modules: ['project32', 'gouraud-lighting', 'picking', _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__["fp64"]]
    });
  }

  initializeState() {
    const {gl} = this.context;
    const attributeManager = this.getAttributeManager();
    attributeManager.addInstanced({
      colors: {
        size: 4,
        update: this.calculateColors,
        noAlloc: true
      },
      elevations: {
        size: 4,
        update: this.calculateElevations,
        noAlloc: true
      }
    });
    const model = this._getModel(gl);
    this._setupUniformBuffer(model);
    this.setState({model});
  }

  _getModel(gl) {
    return new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__["Model"](
      gl,
      Object.assign({}, this.getShaders(), {
        id: this.props.id,
        geometry: new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__["CubeGeometry"](),
        isInstanced: true,
        shaderCache: this.context.shaderCache
      })
    );
  }

  draw({uniforms}) {
    const {
      data,
      cellSize,
      offset,
      extruded,
      elevationScale,
      coverage,
      gridSize,
      gridOrigin,
      gridOffset,
      elevationRange
    } = this.props;

    const gridOriginLow = [Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["fp64LowPart"])(gridOrigin[0]), Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["fp64LowPart"])(gridOrigin[1])];
    const gridOffsetLow = [Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["fp64LowPart"])(gridOffset[0]), Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["fp64LowPart"])(gridOffset[1])];
    const domainUniforms = this.getDomainUniforms();
    const uniformBuffers = {
      colorMaxMinBuffer: data.color.maxMinBuffer,
      elevationMaxMinBuffer: data.elevation.maxMinBuffer
    };
    const colorRange = Object(_utils_color_utils__WEBPACK_IMPORTED_MODULE_2__["colorRangeToFlatArray"])(this.props.colorRange);

    this.bindUniformBuffers(uniformBuffers);
    this.state.model
      .setUniforms(
        Object.assign({}, uniforms, domainUniforms, {
          cellSize,
          offset,
          extruded,
          elevationScale,
          coverage,
          gridSize,
          gridOrigin,
          gridOriginLow,
          gridOffset,
          gridOffsetLow,
          colorRange,
          elevationRange
        })
      )
      .draw();
    this.unbindUniformBuffers(uniformBuffers);
  }

  bindUniformBuffers({colorMaxMinBuffer, elevationMaxMinBuffer}) {
    colorMaxMinBuffer.bind({target: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.UNIFORM_BUFFER, index: COLOR_DATA_UBO_INDEX});
    elevationMaxMinBuffer.bind({target: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.UNIFORM_BUFFER, index: ELEVATION_DATA_UBO_INDEX});
  }

  unbindUniformBuffers({colorMaxMinBuffer, elevationMaxMinBuffer}) {
    colorMaxMinBuffer.unbind({target: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.UNIFORM_BUFFER, index: COLOR_DATA_UBO_INDEX});
    elevationMaxMinBuffer.unbind({target: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.UNIFORM_BUFFER, index: ELEVATION_DATA_UBO_INDEX});
  }

  calculateColors(attribute) {
    const {data} = this.props;
    attribute.update({
      buffer: data.color.aggregationBuffer
    });
  }

  calculateElevations(attribute) {
    const {data} = this.props;
    attribute.update({
      buffer: data.elevation.aggregationBuffer
    });
  }

  getDomainUniforms() {
    const {colorDomain, elevationDomain} = this.props;
    const domainUniforms = {};
    if (colorDomain !== null) {
      domainUniforms.colorDomainValid = true;
      domainUniforms.colorDomain = colorDomain;
    } else {
      domainUniforms.colorDomainValid = false;
    }
    if (elevationDomain !== null) {
      domainUniforms.elevationDomainValid = true;
      domainUniforms.elevationDomain = elevationDomain;
    } else {
      domainUniforms.elevationDomainValid = false;
    }
    return domainUniforms;
  }

  _setupUniformBuffer(model) {
    const gl = this.context.gl;
    const programHandle = model.program.handle;

    const colorIndex = gl.getUniformBlockIndex(programHandle, 'ColorData');
    const elevationIndex = gl.getUniformBlockIndex(programHandle, 'ElevationData');
    gl.uniformBlockBinding(programHandle, colorIndex, COLOR_DATA_UBO_INDEX);
    gl.uniformBlockBinding(programHandle, elevationIndex, ELEVATION_DATA_UBO_INDEX);
  }
}

GPUGridCellLayer.layerName = 'GPUGridCellLayer';
GPUGridCellLayer.defaultProps = defaultProps;


/***/ }),

/***/ "./src/gpu-grid-layer/gpu-grid-layer.js":
/*!**********************************************!*\
  !*** ./src/gpu-grid-layer/gpu-grid-layer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GPUGridLayer; });
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/core */ "@luma.gl/constants");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_gpu_grid_aggregation_gpu_grid_aggregator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/gpu-grid-aggregation/gpu-grid-aggregator */ "./src/utils/gpu-grid-aggregation/gpu-grid-aggregator.js");
/* harmony import */ var _utils_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/aggregation-operation-utils */ "./src/utils/aggregation-operation-utils.js");
/* harmony import */ var _utils_gpu_grid_aggregation_grid_aggregation_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/gpu-grid-aggregation/grid-aggregation-utils */ "./src/utils/gpu-grid-aggregation/grid-aggregation-utils.js");
/* harmony import */ var _utils_color_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/color-utils */ "./src/utils/color-utils.js");
/* harmony import */ var _gpu_grid_cell_layer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gpu-grid-cell-layer */ "./src/gpu-grid-layer/gpu-grid-cell-layer.js");
/* harmony import */ var _cpu_grid_layer_grid_aggregator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../cpu-grid-layer/grid-aggregator */ "./src/cpu-grid-layer/grid-aggregator.js");
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











const defaultMaterial = new _luma_gl_core__WEBPACK_IMPORTED_MODULE_0__["PhongMaterial"]();
const defaultProps = {
  // color
  colorDomain: null,
  colorRange: _utils_color_utils__WEBPACK_IMPORTED_MODULE_5__["defaultColorRange"],
  getColorWeight: {type: 'accessor', value: x => 1},
  colorAggregation: 'SUM',

  // elevation
  elevationDomain: null,
  elevationRange: [0, 1000],
  getElevationWeight: {type: 'accessor', value: x => 1},
  elevationAggregation: 'SUM',
  elevationScale: {type: 'number', min: 0, value: 1},

  // grid
  cellSize: {type: 'number', min: 0, max: 1000, value: 1000},
  coverage: {type: 'number', min: 0, max: 1, value: 1},
  getPosition: {type: 'accessor', value: x => x.position},
  extruded: false,
  fp64: false,

  // Optional material for 'lighting' shader module
  material: defaultMaterial,

  // GPU Aggregation
  gpuAggregation: true
};

class GPUGridLayer extends _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["CompositeLayer"] {
  initializeState() {
    const {gl} = this.context;
    const isSupported = _utils_gpu_grid_aggregation_gpu_grid_aggregator__WEBPACK_IMPORTED_MODULE_2__["default"].isSupported(gl);
    if (!isSupported) {
      _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["log"].error('GPUGridLayer is not supported on this browser, use GridLayer instead')();
    }
    const options = {
      id: `${this.id}-gpu-aggregator`,
      shaderCache: this.context.shaderCache
    };
    this.state = {
      gpuGridAggregator: new _utils_gpu_grid_aggregation_gpu_grid_aggregator__WEBPACK_IMPORTED_MODULE_2__["default"](gl, options),
      isSupported
    };
  }

  updateState(opts) {
    const aggregationFlags = this.getAggregationFlags(opts);
    if (aggregationFlags) {
      // aggregate points into grid cells
      this.getLayerData(aggregationFlags);
      // reset cached CPU Aggregation results (used for picking)
      this.setState({gridHash: null});
    }
  }

  finalizeState() {
    super.finalizeState();
    this.state.gpuGridAggregator.delete();
  }

  getAggregationFlags({oldProps, props, changeFlags}) {
    let aggregationFlags = null;
    if (!this.state.isSupported) {
      // Skip update, layer not supported
      return false;
    }
    if (this.isDataChanged({oldProps, props, changeFlags})) {
      aggregationFlags = Object.assign({}, aggregationFlags, {dataChanged: true});
    }
    if (oldProps.cellSize !== props.cellSize) {
      aggregationFlags = Object.assign({}, aggregationFlags, {cellSizeChanged: true});
    }
    return aggregationFlags;
  }

  isDataChanged({oldProps, props, changeFlags}) {
    // Flags affecting aggregation data
    if (changeFlags.dataChanged) {
      return true;
    }
    if (oldProps.gpuAggregation !== props.gpuAggregation) {
      return true;
    }
    if (
      oldProps.colorAggregation !== props.colorAggregation ||
      oldProps.elevationAggregation !== props.elevationAggregation
    ) {
      return true;
    }
    if (
      changeFlags.updateTriggersChanged &&
      (changeFlags.updateTriggersChanged.all ||
        changeFlags.updateTriggersChanged.getPosition ||
        changeFlags.updateTriggersChanged.getColorWeight ||
        changeFlags.updateTriggersChanged.getElevationWeight)
    ) {
      return true;
    }
    return false;
  }

  getHashKeyForIndex(index) {
    const {gridSize, gridOrigin, cellSize} = this.state;
    const yIndex = Math.floor(index / gridSize[0]);
    const xIndex = index - yIndex * gridSize[0];
    // This will match the index to the hash-key to access aggregation data from CPU aggregation results.
    const latIdx = Math.floor(
      (yIndex * cellSize[1] + gridOrigin[1] + 90 + cellSize[1] / 2) / cellSize[1]
    );
    const lonIdx = Math.floor(
      (xIndex * cellSize[0] + gridOrigin[0] + 180 + cellSize[0] / 2) / cellSize[0]
    );
    return `${latIdx}-${lonIdx}`;
  }

  getPositionForIndex(index) {
    const {gridSize, gridOrigin, cellSize} = this.state;
    const yIndex = Math.floor(index / gridSize[0]);
    const xIndex = index - yIndex * gridSize[0];
    const yPos = yIndex * cellSize[1] + gridOrigin[1];
    const xPos = xIndex * cellSize[0] + gridOrigin[0];
    return [xPos, yPos];
  }

  getPickingInfo({info, mode}) {
    const {index} = info;
    let object = null;
    if (index >= 0) {
      const {gpuGridAggregator} = this.state;
      const position = this.getPositionForIndex(index);
      const colorInfo = _utils_gpu_grid_aggregation_gpu_grid_aggregator__WEBPACK_IMPORTED_MODULE_2__["default"].getAggregationData(
        Object.assign({pixelIndex: index}, gpuGridAggregator.getData('color'))
      );
      const elevationInfo = _utils_gpu_grid_aggregation_gpu_grid_aggregator__WEBPACK_IMPORTED_MODULE_2__["default"].getAggregationData(
        Object.assign({pixelIndex: index}, gpuGridAggregator.getData('elevation'))
      );

      object = {
        colorValue: colorInfo.cellWeight,
        elevationValue: elevationInfo.cellWeight,
        count: colorInfo.cellCount || elevationInfo.cellCount,
        position,
        totalCount: colorInfo.totalCount || elevationInfo.totalCount
      };
      if (mode !== 'hover') {
        // perform CPU aggregation for full list of points for each cell
        const {data, getPosition} = this.props;
        let {gridHash} = this.state;
        if (!gridHash) {
          const cpuAggregation = Object(_cpu_grid_layer_grid_aggregator__WEBPACK_IMPORTED_MODULE_7__["pointToDensityGridDataCPU"])(data, this.props.cellSize, getPosition);
          gridHash = cpuAggregation.gridHash;
          this.setState({gridHash});
        }
        const key = this.getHashKeyForIndex(index);
        const cpuAggregationData = gridHash[key];
        Object.assign(object, cpuAggregationData);
      }
    }

    return Object.assign(info, {
      picked: Boolean(object),
      // override object with picked cell
      object
    });
  }

  getLayerData(aggregationFlags) {
    const {
      data,
      cellSize: cellSizeMeters,
      getPosition,
      gpuAggregation,
      getColorWeight,
      colorAggregation,
      getElevationWeight,
      elevationAggregation,
      fp64
    } = this.props;
    const weightParams = {
      color: {
        getWeight: getColorWeight,
        operation:
          _utils_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_3__["AGGREGATION_OPERATION"][colorAggregation] ||
          _utils_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_3__["AGGREGATION_OPERATION"][defaultProps.colorAggregation],
        needMin: true,
        needMax: true,
        combineMaxMin: true
      },
      elevation: {
        getWeight: getElevationWeight,
        operation:
          _utils_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_3__["AGGREGATION_OPERATION"][elevationAggregation] ||
          _utils_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_3__["AGGREGATION_OPERATION"][defaultProps.elevationAggregation],
        needMin: true,
        needMax: true,
        combineMaxMin: true
      }
    };
    const {weights, gridSize, gridOrigin, cellSize, boundingBox} = Object(_utils_gpu_grid_aggregation_grid_aggregation_utils__WEBPACK_IMPORTED_MODULE_4__["pointToDensityGridData"])({
      data,
      cellSizeMeters,
      getPosition,
      weightParams,
      gpuAggregation,
      gpuGridAggregator: this.state.gpuGridAggregator,
      boundingBox: this.state.boundingBox, // avoid parsing data when it is not changed.
      aggregationFlags,
      fp64
    });
    this.setState({weights, gridSize, gridOrigin, cellSize, boundingBox});
  }

  renderLayers() {
    if (!this.state.isSupported) {
      return null;
    }
    const {
      elevationScale,
      extruded,
      cellSize: cellSizeMeters,
      coverage,
      material,
      elevationRange,
      colorDomain,
      elevationDomain
    } = this.props;

    const {weights, gridSize, gridOrigin, cellSize} = this.state;

    const colorRange = Object(_utils_color_utils__WEBPACK_IMPORTED_MODULE_5__["colorRangeToFlatArray"])(this.props.colorRange);

    const SubLayerClass = this.getSubLayerClass('gpu-grid-cell', _gpu_grid_cell_layer__WEBPACK_IMPORTED_MODULE_6__["default"]);

    return new SubLayerClass(
      {
        gridSize,
        gridOrigin,
        gridOffset: cellSize,
        colorRange,
        elevationRange,
        colorDomain,
        elevationDomain,

        cellSize: cellSizeMeters,
        coverage,
        material,
        elevationScale,
        extruded
      },
      this.getSubLayerProps({
        id: 'gpu-grid-cell'
      }),
      {
        data: weights,
        numInstances: gridSize[0] * gridSize[1]
      }
    );
  }
}

GPUGridLayer.layerName = 'GPUGridLayer';
GPUGridLayer.defaultProps = defaultProps;


/***/ }),

/***/ "./src/grid-layer/grid-layer.js":
/*!**************************************!*\
  !*** ./src/grid-layer/grid-layer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridLayer; });
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_gpu_grid_aggregation_gpu_grid_aggregator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/gpu-grid-aggregation/gpu-grid-aggregator */ "./src/utils/gpu-grid-aggregation/gpu-grid-aggregator.js");
/* harmony import */ var _gpu_grid_layer_gpu_grid_layer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gpu-grid-layer/gpu-grid-layer */ "./src/gpu-grid-layer/gpu-grid-layer.js");
/* harmony import */ var _cpu_grid_layer_cpu_grid_layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cpu-grid-layer/cpu-grid-layer */ "./src/cpu-grid-layer/cpu-grid-layer.js");





const defaultProps = Object.assign({}, _gpu_grid_layer_gpu_grid_layer__WEBPACK_IMPORTED_MODULE_2__["default"].defaultProps, _cpu_grid_layer_cpu_grid_layer__WEBPACK_IMPORTED_MODULE_3__["default"].defaultProps, {
  gpuAggregation: false
});

class GridLayer extends _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["CompositeLayer"] {
  initializeState() {
    this.state = {
      useGPUAggregation: true
    };
  }

  updateState({oldProps, props, changeFlags}) {
    const newState = {};
    newState.useGPUAggregation = this.canUseGPUAggregation(props);
    this.setState(newState);
  }

  renderLayers() {
    const {data, updateTriggers} = this.props;
    const id = this.state.useGPUAggregation ? 'GPU' : 'CPU';
    const LayerType = this.state.useGPUAggregation
      ? this.getSubLayerClass('GPU', _gpu_grid_layer_gpu_grid_layer__WEBPACK_IMPORTED_MODULE_2__["default"])
      : this.getSubLayerClass('CPU', _cpu_grid_layer_cpu_grid_layer__WEBPACK_IMPORTED_MODULE_3__["default"]);
    return new LayerType(
      this.props,
      this.getSubLayerProps({
        id,
        updateTriggers
      }),
      {
        data
      }
    );
  }

  // Private methods

  canUseGPUAggregation(props) {
    const {
      gpuAggregation,
      lowerPercentile,
      upperPercentile,
      getColorValue,
      getElevationValue
    } = props;
    if (!gpuAggregation) {
      // cpu aggregation is requested
      return false;
    }
    if (!_utils_gpu_grid_aggregation_gpu_grid_aggregator__WEBPACK_IMPORTED_MODULE_1__["default"].isSupported(this.context.gl)) {
      return false;
    }
    if (lowerPercentile !== 0 || upperPercentile !== 100) {
      // percentile calculations requires sorting not supported on GPU
      return false;
    }
    if (getColorValue !== null || getElevationValue !== null) {
      // accessor for custom color or elevation calculation is specified
      return false;
    }
    return true;
  }
}

GridLayer.layerName = 'GridLayer';
GridLayer.defaultProps = defaultProps;


/***/ }),

/***/ "./src/heatmap-layer/heatmap-layer-utils.js":
/*!**************************************************!*\
  !*** ./src/heatmap-layer/heatmap-layer-utils.js ***!
  \**************************************************/
/*! exports provided: getBounds, boundsContain, packVertices, scaleToAspectRatio, getTextureCoordinates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBounds", function() { return getBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundsContain", function() { return boundsContain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packVertices", function() { return packVertices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleToAspectRatio", function() { return scaleToAspectRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextureCoordinates", function() { return getTextureCoordinates; });
function getBounds(points) {
  // Now build bounding box in world space (aligned to world coordiante system)
  const x = points.map(p => p[0]);
  const y = points.map(p => p[1]);

  const xMin = Math.min.apply(null, x);
  const xMax = Math.max.apply(null, x);
  const yMin = Math.min.apply(null, y);
  const yMax = Math.max.apply(null, y);

  return [xMin, yMin, xMax, yMax];
}

// true if currentBounds contains targetBounds, false otherwise
function boundsContain(currentBounds, targetBounds) {
  if (
    targetBounds[0] >= currentBounds[0] &&
    targetBounds[2] <= currentBounds[2] &&
    targetBounds[1] >= currentBounds[1] &&
    targetBounds[3] <= currentBounds[3]
  ) {
    return true;
  }
  return false;
}

const scratchArray = new Float32Array(12);

// For given rectangle bounds generates two triangles vertices that coverit completely
function packVertices(points, dimensions = 2) {
  let index = 0;
  for (const point of points) {
    for (let i = 0; i < dimensions; i++) {
      scratchArray[index++] = point[i] || 0;
    }
  }
  return scratchArray;
}

// Expands boundingBox:[xMin, yMin, xMax, yMax] to match aspect ratio of given width and height
function scaleToAspectRatio(boundingBox, width, height) {
  const [xMin, yMin, xMax, yMax] = boundingBox;

  const currentWidth = xMax - xMin;
  const currentHeight = yMax - yMin;

  let newWidth = currentWidth;
  let newHeight = currentHeight;
  if (currentWidth / currentHeight < width / height) {
    // expand bounding box width
    newWidth = (width / height) * currentHeight;
  } else {
    newHeight = (height / width) * currentWidth;
  }

  if (newWidth < width) {
    newWidth = width;
    newHeight = height;
  }

  const xCenter = (xMax + xMin) / 2;
  const yCenter = (yMax + yMin) / 2;

  return [
    xCenter - newWidth / 2,
    yCenter - newHeight / 2,
    xCenter + newWidth / 2,
    yCenter + newHeight / 2
  ];
}

// Get texture coordiante of point inside a bounding box
function getTextureCoordinates(point, bounds) {
  const [xMin, yMin, xMax, yMax] = bounds;
  return [(point[0] - xMin) / (xMax - xMin), (point[1] - yMin) / (yMax - yMin)];
}


/***/ }),

/***/ "./src/heatmap-layer/heatmap-layer.js":
/*!********************************************!*\
  !*** ./src/heatmap-layer/heatmap-layer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeatmapLayer; });
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "@luma.gl/constants");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heatmap_layer_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heatmap-layer-utils */ "./src/heatmap-layer/heatmap-layer-utils.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _triangle_layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./triangle-layer */ "./src/heatmap-layer/triangle-layer.js");
/* harmony import */ var _utils_resource_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/resource-utils */ "./src/utils/resource-utils.js");
/* harmony import */ var _utils_color_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/color-utils */ "./src/utils/color-utils.js");
/* harmony import */ var _weights_vs_glsl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./weights-vs.glsl */ "./src/heatmap-layer/weights-vs.glsl.js");
/* harmony import */ var _weights_fs_glsl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./weights-fs.glsl */ "./src/heatmap-layer/weights-fs.glsl.js");
/* harmony import */ var _max_vs_glsl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./max-vs.glsl */ "./src/heatmap-layer/max-vs.glsl.js");
// Copyright (c) 2015 - 2019 Uber Technologies, Inc.
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

/* global setTimeout */











const RESOLUTION = 2; // (number of common space pixels) / (number texels)
const SIZE_2K = 2048;
const ZOOM_DEBOUNCE = 500; // milliseconds
const TEXTURE_PARAMETERS = {
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_MAG_FILTER]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.LINEAR,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_MIN_FILTER]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.LINEAR,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_WRAP_S]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.CLAMP_TO_EDGE,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_WRAP_T]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.CLAMP_TO_EDGE
};

const defaultProps = {
  getPosition: {type: 'accessor', value: x => x.position},
  getWeight: {type: 'accessor', value: 1},
  intensity: {type: 'number', min: 0, value: 1},
  radiusPixels: {type: 'number', min: 1, max: 100, value: 30},
  colorRange: _utils_color_utils__WEBPACK_IMPORTED_MODULE_5__["defaultColorRange"],
  threshold: {type: 'number', min: 0, max: 1, value: 0.05}
};

class HeatmapLayer extends _deck_gl_core__WEBPACK_IMPORTED_MODULE_2__["CompositeLayer"] {
  initializeState() {
    const {gl} = this.context;
    const textureSize = Math.min(SIZE_2K, Object(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["getParameter"])(gl, gl.MAX_TEXTURE_SIZE));
    this.state = {textureSize, supported: true};
    if (!Object(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["isWebGL2"])(gl)) {
      _deck_gl_core__WEBPACK_IMPORTED_MODULE_2__["log"].error(`HeatmapLayer ${this.id} is not supported on this browser, requires WebGL2`)();
      this.setState({supported: false});
      return;
    }
    this._setupAttributes();
    this._setupResources();
  }

  shouldUpdateState({changeFlags}) {
    // Need to be updated when viewport changes
    return changeFlags.somethingChanged;
  }

  updateState(opts) {
    if (!this.state.supported) {
      return;
    }
    super.updateState(opts);
    const {props, oldProps} = opts;
    const changeFlags = this._getChangeFlags(opts);

    if (changeFlags.viewportChanged) {
      changeFlags.boundsChanged = this._updateBounds();
    }

    if (changeFlags.dataChanged || changeFlags.boundsChanged || changeFlags.uniformsChanged) {
      this._updateWeightmap();
    } else if (changeFlags.viewportZoomChanged) {
      this._debouncedUpdateWeightmap();
    }

    if (props.colorRange !== oldProps.colorRange) {
      this._updateColorTexture(opts);
    }

    if (changeFlags.viewportChanged) {
      this._updateTextureRenderingBounds();
    }

    this.setState({zoom: opts.context.viewport.zoom});
  }

  renderLayers() {
    if (!this.state.supported) {
      return [];
    }
    const {
      weightsTexture,
      triPositionBuffer,
      triTexCoordBuffer,
      maxWeightsTexture,
      colorTexture
    } = this.state;
    const {updateTriggers, intensity, threshold} = this.props;

    return new _triangle_layer__WEBPACK_IMPORTED_MODULE_3__["default"](
      this.getSubLayerProps({
        id: `${this.id}-triangle-layer`,
        updateTriggers
      }),
      {
        id: 'heatmap-triangle-layer',
        data: {
          attributes: {
            positions: triPositionBuffer,
            texCoords: triTexCoordBuffer
          }
        },
        vertexCount: 4,
        maxTexture: maxWeightsTexture,
        colorTexture,
        texture: weightsTexture,
        intensity,
        threshold
      }
    );
  }

  finalizeState() {
    super.finalizeState();
    const {
      weightsTransform,
      weightsTexture,
      maxWeightTransform,
      maxWeightsTexture,
      triPositionBuffer,
      triTexCoordBuffer,
      colorTexture
    } = this.state;
    /* eslint-disable no-unused-expressions */
    weightsTransform && weightsTransform.delete();
    weightsTexture && weightsTexture.delete();
    maxWeightTransform && maxWeightTransform.delete();
    maxWeightsTexture && maxWeightsTexture.delete();
    triPositionBuffer && triPositionBuffer.delete();
    triTexCoordBuffer && triTexCoordBuffer.delete();
    colorTexture && colorTexture.delete();
    /* eslint-enable no-unused-expressions */
  }

  // PRIVATE

  // override Composite layer private method to create AttributeManager instance
  _getAttributeManager() {
    return new _deck_gl_core__WEBPACK_IMPORTED_MODULE_2__["AttributeManager"](this.context.gl, {
      id: this.props.id,
      stats: this.context.stats
    });
  }

  _getChangeFlags(opts) {
    const {oldProps, props} = opts;
    const changeFlags = {};
    if (this._isDataChanged(opts)) {
      changeFlags.dataChanged = true;
    }
    if (oldProps.radiusPixels !== props.radiusPixels) {
      changeFlags.uniformsChanged = true;
    }
    changeFlags.viewportChanged = opts.changeFlags.viewportChanged;

    const {zoom} = this.state;
    if (!opts.context.viewport || opts.context.viewport.zoom !== zoom) {
      changeFlags.viewportZoomChanged = true;
    }

    return changeFlags;
  }

  _isDataChanged({changeFlags}) {
    if (changeFlags.dataChanged) {
      return true;
    }
    if (
      changeFlags.updateTriggersChanged &&
      (changeFlags.updateTriggersChanged.all ||
        changeFlags.updateTriggersChanged.getPosition ||
        changeFlags.updateTriggersChanged.getWeight)
    ) {
      return true;
    }
    return false;
  }

  _setupAttributes() {
    const attributeManager = this.getAttributeManager();
    attributeManager.add({
      positions: {size: 3, accessor: 'getPosition'},
      weights: {size: 1, accessor: 'getWeight'}
    });
  }

  _setupResources() {
    const {gl} = this.context;
    const {textureSize} = this.state;
    const weightsTexture = Object(_utils_resource_utils__WEBPACK_IMPORTED_MODULE_4__["getFloatTexture"])(gl, {
      width: textureSize,
      height: textureSize,
      parameters: TEXTURE_PARAMETERS
    });
    const maxWeightsTexture = Object(_utils_resource_utils__WEBPACK_IMPORTED_MODULE_4__["getFloatTexture"])(gl); // 1 X 1 texture
    const weightsTransform = new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["Transform"](gl, {
      id: `${this.id}-weights-transform`,
      vs: _weights_vs_glsl__WEBPACK_IMPORTED_MODULE_6__["default"],
      _fs: _weights_fs_glsl__WEBPACK_IMPORTED_MODULE_7__["default"],
      modules: ['project32'],
      elementCount: 1,
      _targetTexture: weightsTexture,
      _targetTextureVarying: 'weightsTexture'
    });

    this.setState({
      weightsTexture,
      maxWeightsTexture,
      weightsTransform,
      model: weightsTransform.model,
      maxWeightTransform: new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["Transform"](gl, {
        id: `${this.id}-max-weights-transform`,
        _sourceTextures: {
          inTexture: weightsTexture
        },
        _targetTexture: maxWeightsTexture,
        _targetTextureVarying: 'outTexture',
        vs: _max_vs_glsl__WEBPACK_IMPORTED_MODULE_8__["default"],
        elementCount: textureSize * textureSize
      }),
      zoom: null,
      triPositionBuffer: new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["Buffer"](gl, {
        byteLength: 48,
        accessor: {size: 3}
      }),
      triTexCoordBuffer: new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["Buffer"](gl, {
        byteLength: 48,
        accessor: {size: 2}
      })
    });
  }

  _updateMaxWeightValue() {
    const {maxWeightTransform} = this.state;
    maxWeightTransform.run({
      parameters: {
        blend: true,
        depthTest: false,
        blendFunc: [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.ONE, _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.ONE],
        blendEquation: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX
      }
    });
  }

  // Computes world bounds area that needs to be processed for generate heatmap
  _updateBounds(forceUpdate = false) {
    const {textureSize} = this.state;
    const {viewport} = this.context;

    // Unproject all 4 corners of the current screen coordinates into world coordinates (lng/lat)
    // Takes care of viewport has non zero bearing/pitch (i.e axis not aligned with world coordiante system)
    const viewportCorners = [
      viewport.unproject([0, 0]),
      viewport.unproject([viewport.width, 0]),
      viewport.unproject([viewport.width, viewport.height]),
      viewport.unproject([0, viewport.height])
    ];

    // #1: get world bounds for current viewport extends
    const visibleWorldBounds = Object(_heatmap_layer_utils__WEBPACK_IMPORTED_MODULE_1__["getBounds"])(viewportCorners); // TODO: Change to visible bounds
    // #2 : convert world bounds to common (Flat) bounds
    const visibleCommonBounds = this._worldToCommonBounds(visibleWorldBounds);

    const newState = {visibleWorldBounds, viewportCorners};
    let boundsChanged = false;

    if (
      forceUpdate ||
      !this.state.worldBounds ||
      !Object(_heatmap_layer_utils__WEBPACK_IMPORTED_MODULE_1__["boundsContain"])(this.state.worldBounds, visibleWorldBounds)
    ) {
      // #3: extend common bounds to match aspect ratio with viewport
      const scaledCommonBounds = Object(_heatmap_layer_utils__WEBPACK_IMPORTED_MODULE_1__["scaleToAspectRatio"])(
        visibleCommonBounds,
        textureSize * RESOLUTION,
        textureSize * RESOLUTION
      );

      // #4 :convert aligned common bounds to world bounds
      const worldBounds = this._commonToWorldBounds(scaledCommonBounds);

      // Clip webmercator projection limits
      if (this.props.coordinateSystem === _deck_gl_core__WEBPACK_IMPORTED_MODULE_2__["COORDINATE_SYSTEM"].LNGLAT) {
        worldBounds[1] = Math.max(worldBounds[1], -85.051129);
        worldBounds[3] = Math.min(worldBounds[3], 85.051129);
        worldBounds[0] = Math.max(worldBounds[0], -360);
        worldBounds[2] = Math.min(worldBounds[2], 360);
      }

      // #5: now convert world bounds to common using Layer's coordiante system and origin
      const normalizedCommonBounds = this._worldToCommonBounds(worldBounds, {
        scaleToAspect: true,
        normalize: true,
        width: textureSize * RESOLUTION,
        height: textureSize * RESOLUTION
      });

      newState.worldBounds = worldBounds;
      newState.normalizedCommonBounds = normalizedCommonBounds;

      boundsChanged = true;
    }
    this.setState(newState);
    return boundsChanged;
  }

  _updateTextureRenderingBounds() {
    // Just render visible portion of the texture
    const {
      triPositionBuffer,
      triTexCoordBuffer,
      normalizedCommonBounds,
      viewportCorners
    } = this.state;

    const {viewport} = this.context;
    const commonBounds = normalizedCommonBounds.map(x => x * viewport.scale);

    triPositionBuffer.subData(Object(_heatmap_layer_utils__WEBPACK_IMPORTED_MODULE_1__["packVertices"])(viewportCorners, 3));

    const textureBounds = viewportCorners.map(p =>
      Object(_heatmap_layer_utils__WEBPACK_IMPORTED_MODULE_1__["getTextureCoordinates"])(viewport.projectPosition(p), commonBounds)
    );
    triTexCoordBuffer.subData(Object(_heatmap_layer_utils__WEBPACK_IMPORTED_MODULE_1__["packVertices"])(textureBounds, 2));
  }

  _updateColorTexture(opts) {
    const {colorRange} = opts.props;
    let {colorTexture} = this.state;
    const colors = Object(_utils_color_utils__WEBPACK_IMPORTED_MODULE_5__["colorRangeToFlatArray"])(colorRange, true);

    if (colorTexture) {
      colorTexture.setImageData({
        data: colors,
        width: colorRange.length
      });
    } else {
      colorTexture = Object(_utils_resource_utils__WEBPACK_IMPORTED_MODULE_4__["getFloatTexture"])(this.context.gl, {
        data: colors,
        width: colorRange.length,
        parameters: TEXTURE_PARAMETERS
      });
    }
    this.setState({colorTexture});
  }

  _updateWeightmap() {
    const {radiusPixels} = this.props;
    const {weightsTransform, worldBounds, textureSize} = this.state;

    // base Layer class doesn't update attributes for composite layers, hence manually trigger it.
    this._updateAttributes(this.props);

    const moduleParameters = Object.assign(Object.create(this.props), {
      viewport: this.context.viewport,
      pickingActive: 0
    });

    // #5: convert world bounds to common using Layer's coordiante system and origin
    const commonBounds = this._worldToCommonBounds(worldBounds, {
      useLayerCoordinateSystem: true,
      scaleToAspect: true,
      width: textureSize * RESOLUTION,
      height: textureSize * RESOLUTION
    });

    const uniforms = Object.assign({}, weightsTransform.model.getModuleUniforms(moduleParameters), {
      radiusPixels,
      commonBounds,
      textureWidth: textureSize
    });
    // Attribute manager sets data array count as instaceCount on model
    // we need to set that as elementCount on 'weightsTransform'
    weightsTransform.update({
      elementCount: this.getNumInstances()
    });
    weightsTransform.run({
      uniforms,
      parameters: {
        blend: true,
        depthTest: false,
        blendFunc: [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.ONE, _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.ONE],
        blendEquation: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FUNC_ADD
      },
      clearRenderTarget: true
    });
    this._updateMaxWeightValue();

    this.setState({lastUpdate: Date.now()});
  }

  _debouncedUpdateWeightmap(fromTimer = false) {
    let {updateTimer} = this.state;
    const timeSinceLastUpdate = Date.now() - this.state.lastUpdate;

    if (fromTimer) {
      updateTimer = null;
    }

    if (timeSinceLastUpdate >= ZOOM_DEBOUNCE) {
      // update
      this._updateBounds(true);
      this._updateWeightmap();
      this._updateTextureRenderingBounds();
    } else if (!updateTimer) {
      updateTimer = setTimeout(
        this._debouncedUpdateWeightmap.bind(this, true),
        ZOOM_DEBOUNCE - timeSinceLastUpdate
      );
    }

    this.setState({updateTimer});
  }

  // input: worldBounds: [minLong, minLat, maxLong, maxLat]
  // input: opts.useLayerCoordinateSystem : layers coordiante system is used
  // optput: commonBounds: [minX, minY, maxX, maxY]
  _worldToCommonBounds(worldBounds, opts = {}) {
    const {useLayerCoordinateSystem = false, scaleToAspect = false, width, height} = opts;
    const [minLong, minLat, maxLong, maxLat] = worldBounds;
    const {viewport} = this.context;

    let topLeftCommon;
    let bottomRightCommon;

    // Y-axis is flipped between World and Common bounds
    if (useLayerCoordinateSystem) {
      topLeftCommon = this.projectPosition([minLong, maxLat, 0]);
      bottomRightCommon = this.projectPosition([maxLong, minLat, 0]);
    } else {
      topLeftCommon = viewport.projectPosition([minLong, maxLat, 0]);
      bottomRightCommon = viewport.projectPosition([maxLong, minLat, 0]);
    }
    // Ignore z component
    let commonBounds = topLeftCommon.slice(0, 2).concat(bottomRightCommon.slice(0, 2));
    if (scaleToAspect) {
      commonBounds = Object(_heatmap_layer_utils__WEBPACK_IMPORTED_MODULE_1__["scaleToAspectRatio"])(commonBounds, width, height);
    }
    if (opts.normalize) {
      commonBounds = commonBounds.map(x => x / viewport.scale);
    }
    return commonBounds;
  }

  // input commonBounds: [xMin, yMin, xMax, yMax]
  // output worldBounds: [minLong, minLat, maxLong, maxLat]
  _commonToWorldBounds(commonBounds) {
    const [xMin, yMin, xMax, yMax] = commonBounds;
    const {viewport} = this.context;
    const topLeftWorld = viewport.unprojectPosition([xMin, yMax]);
    const bottomRightWorld = viewport.unprojectPosition([xMax, yMin]);

    return topLeftWorld.slice(0, 2).concat(bottomRightWorld.slice(0, 2));
  }
}

HeatmapLayer.layerName = 'HeatmapLayer';
HeatmapLayer.defaultProps = defaultProps;


/***/ }),

/***/ "./src/heatmap-layer/max-vs.glsl.js":
/*!******************************************!*\
  !*** ./src/heatmap-layer/max-vs.glsl.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`\
#version 300 es
in vec4 inTexture;
out vec4 outTexture;

void main()
{
outTexture = inTexture;
gl_Position = vec4(0, 0, 0, 1.);
}
`);


/***/ }),

/***/ "./src/heatmap-layer/triangle-layer-fragment.glsl.js":
/*!***********************************************************!*\
  !*** ./src/heatmap-layer/triangle-layer-fragment.glsl.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (`\
#define SHADER_NAME triangle-layer-fragment-shader

precision highp float;

uniform float opacity;
uniform sampler2D texture;
varying vec2 vTexCoords;
uniform sampler2D colorTexture;
uniform float threshold;

varying float vIntensity;

vec4 getLinearColor(float value) {
  float factor = clamp(value, 0., 1.);
  vec4 color = texture2D(colorTexture, vec2(factor, 0.5));
  color.a *= min(value / threshold, 1.0);
  return color;
}

void main(void) {
  float weight = texture2D(texture, vTexCoords).r;
  if (weight == 0.) {
     discard;
  }
  vec4 linearColor = getLinearColor(weight * vIntensity);
  linearColor.a *= opacity;
  gl_FragColor =linearColor;
}
`);


/***/ }),

/***/ "./src/heatmap-layer/triangle-layer-vertex.glsl.js":
/*!*********************************************************!*\
  !*** ./src/heatmap-layer/triangle-layer-vertex.glsl.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

// Inspired by screen-grid-layer vertex shader in deck.gl

/* harmony default export */ __webpack_exports__["default"] = (`\
#define SHADER_NAME heatp-map-layer-vertex-shader

uniform sampler2D maxTexture;
uniform float intensity;

attribute vec3 positions;
attribute vec2 texCoords;

varying vec2 vTexCoords;
varying float vIntensity;

void main(void) {
  gl_Position = project_position_to_clipspace(positions, vec2(0.0), vec3(0.0));
  vTexCoords = texCoords;
  float maxValue = texture2D(maxTexture, vec2(0.5)).r;
  vIntensity = intensity / maxValue;
}
`);


/***/ }),

/***/ "./src/heatmap-layer/triangle-layer.js":
/*!*********************************************!*\
  !*** ./src/heatmap-layer/triangle-layer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TriangleLayer; });
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "@luma.gl/constants");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _triangle_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./triangle-layer-vertex.glsl */ "./src/heatmap-layer/triangle-layer-vertex.glsl.js");
/* harmony import */ var _triangle_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./triangle-layer-fragment.glsl */ "./src/heatmap-layer/triangle-layer-fragment.glsl.js");
// Copyright (c) 2015 - 2019 Uber Technologies, Inc.
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







const defaultProps = {
  count: 0, // number of triangles to be rendered
  texture: null
};

class TriangleLayer extends _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["Layer"] {
  getShaders() {
    return {vs: _triangle_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_2__["default"], fs: _triangle_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_3__["default"], modules: ['project32']};
  }

  initializeState() {
    const {gl} = this.context;
    const attributeManager = this.getAttributeManager();
    attributeManager.add({
      positions: {size: 3, noAlloc: true},
      texCoords: {size: 2, noAlloc: true}
    });
    this.setState({
      model: this._getModel(gl)
    });
  }

  _getModel(gl) {
    const {vertexCount} = this.props;

    return new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["Model"](
      gl,
      Object.assign({}, this.getShaders(), {
        id: this.props.id,
        geometry: new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["Geometry"]({
          drawMode: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TRIANGLE_FAN,
          vertexCount
        }),
        shaderCache: this.context.shaderCache
      })
    );
  }

  draw({uniforms}) {
    const {model} = this.state;
    const {texture, maxTexture, colorTexture, intensity, threshold} = this.props;
    model.setUniforms({texture, maxTexture, colorTexture, intensity, threshold}).draw();
  }
}

TriangleLayer.layerName = 'TriangleLayer';
TriangleLayer.defaultProps = defaultProps;


/***/ }),

/***/ "./src/heatmap-layer/weights-fs.glsl.js":
/*!**********************************************!*\
  !*** ./src/heatmap-layer/weights-fs.glsl.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`\
varying vec4 weightsTexture;
// Epanechnikov function, keeping for reference
// float epanechnikovKDE(float u) {
//   return 0.75 * (1.0 - u * u);
// }
float gaussianKDE(float u){
  return pow(2.71828, -u*u/0.05555)/(1.77245385*0.166666);
}
void main()
{
  float dist = length(gl_PointCoord - vec2(0.5, 0.5));
  if (dist > 0.5) {
    discard;
  }
  gl_FragColor.rgb = weightsTexture.rgb * gaussianKDE(2. * dist);
  gl_FragColor.a = 1.0;
}
`);


/***/ }),

/***/ "./src/heatmap-layer/weights-vs.glsl.js":
/*!**********************************************!*\
  !*** ./src/heatmap-layer/weights-vs.glsl.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`\
attribute vec3 positions;
attribute float weights;
varying vec4 weightsTexture;
uniform float radiusPixels;
uniform float textureWidth;
uniform vec4 commonBounds;
void main()
{
  weightsTexture = vec4(weights, 0., 0., 1.);

  float radiusTexels  = radiusPixels * textureWidth / (commonBounds.z - commonBounds.x);
  gl_PointSize = radiusTexels * 2.;

  vec3 commonPosition = project_position(positions, vec2(0));

  // map xy from commonBounds to [-1, 1]
  gl_Position.xy = (commonPosition.xy - commonBounds.xy) / (commonBounds.zw - commonBounds.xy) ;
  gl_Position.xy = (gl_Position.xy * 2.) - (1.);
}
`);


/***/ }),

/***/ "./src/hexagon-layer/hexagon-aggregator.js":
/*!*************************************************!*\
  !*** ./src/hexagon-layer/hexagon-aggregator.js ***!
  \*************************************************/
/*! exports provided: pointToHexbin, getRadiusInPixel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointToHexbin", function() { return pointToHexbin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRadiusInPixel", function() { return getRadiusInPixel; });
/* harmony import */ var d3_hexbin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-hexbin */ "../../node_modules/d3-hexbin/index.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_1__);
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




/**
 * Use d3-hexbin to performs hexagonal binning from geo points to hexagons
 * @param {Iterable} data - array of points
 * @param {Number} radius - hexagon radius in meter
 * @param {function} getPosition - get points lon lat
 * @param {Object} viewport - current viewport object

 * @return {Object} - hexagons and countRange
 */
function pointToHexbin({data, radius, getPosition}, viewport) {
  // get hexagon radius in mercator world unit
  const radiusInPixel = getRadiusInPixel(radius, viewport);

  // add world space coordinates to points
  const screenPoints = [];
  const {iterable, objectInfo} = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["createIterable"])(data);
  for (const object of iterable) {
    objectInfo.index++;
    const position = getPosition(object, objectInfo);
    const arrayIsFinite = Number.isFinite(position[0]) && Number.isFinite(position[1]);
    if (arrayIsFinite) {
      screenPoints.push(
        Object.assign(
          {
            screenCoord: viewport.projectFlat(position)
          },
          object
        )
      );
    } else {
      _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["log"].warn('HexagonLayer: invalid position')();
    }
  }

  const newHexbin = Object(d3_hexbin__WEBPACK_IMPORTED_MODULE_0__["hexbin"])()
    .radius(radiusInPixel)
    .x(d => d.screenCoord[0])
    .y(d => d.screenCoord[1]);

  const hexagonBins = newHexbin(screenPoints);

  return {
    hexagons: hexagonBins.map((hex, index) => ({
      position: viewport.unprojectFlat([hex.x, hex.y]),
      points: hex,
      index
    }))
  };
}

/**
 * Get radius in mercator world space coordinates from meter
 * @param {Number} radius - in meter
 * @param {Object} viewport - current viewport object

 * @return {Number} radius in mercator world spcae coordinates
 */
function getRadiusInPixel(radius, viewport) {
  const {pixelsPerMeter} = viewport.getDistanceScales();

  // x, y distance should be the same
  return radius * pixelsPerMeter[0];
}


/***/ }),

/***/ "./src/hexagon-layer/hexagon-layer.js":
/*!********************************************!*\
  !*** ./src/hexagon-layer/hexagon-layer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HexagonLayer; });
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/core */ "@luma.gl/constants");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_bin_sorter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/bin-sorter */ "./src/utils/bin-sorter.js");
/* harmony import */ var _utils_color_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/color-utils */ "./src/utils/color-utils.js");
/* harmony import */ var _utils_scale_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/scale-utils */ "./src/utils/scale-utils.js");
/* harmony import */ var _utils_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/aggregation-operation-utils */ "./src/utils/aggregation-operation-utils.js");
/* harmony import */ var _hexagon_aggregator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hexagon-aggregator */ "./src/hexagon-layer/hexagon-aggregator.js");
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












function nop() {}

const defaultMaterial = new _luma_gl_core__WEBPACK_IMPORTED_MODULE_0__["PhongMaterial"]();

const defaultProps = {
  // color
  colorDomain: null,
  colorRange: _utils_color_utils__WEBPACK_IMPORTED_MODULE_3__["defaultColorRange"],
  getColorValue: {type: 'accessor', value: null}, // default value is calcuated from `getColorWeight` and `colorAggregation`
  getColorWeight: {type: 'accessor', value: x => 1},
  colorAggregation: 'SUM',
  lowerPercentile: {type: 'number', value: 0, min: 0, max: 100},
  upperPercentile: {type: 'number', value: 100, min: 0, max: 100},
  onSetColorDomain: nop,

  // elevation
  elevationDomain: null,
  elevationRange: [0, 1000],
  getElevationValue: {type: 'accessor', value: null}, // default value is calcuated from `getElevationWeight` and `elevationAggregation`
  getElevationWeight: {type: 'accessor', value: x => 1},
  elevationAggregation: 'SUM',
  elevationLowerPercentile: {type: 'number', value: 0, min: 0, max: 100},
  elevationUpperPercentile: {type: 'number', value: 100, min: 0, max: 100},
  elevationScale: {type: 'number', min: 0, value: 1},
  onSetElevationDomain: nop,

  radius: {type: 'number', value: 1000, min: 1},
  coverage: {type: 'number', min: 0, max: 1, value: 1},
  extruded: false,
  hexagonAggregator: _hexagon_aggregator__WEBPACK_IMPORTED_MODULE_6__["pointToHexbin"],
  getPosition: {type: 'accessor', value: x => x.position},
  // Optional material for 'lighting' shader module
  material: defaultMaterial
};

const COLOR_PROPS = ['getColorValue', 'colorAggregation', 'getColorWeight'];
const ELEVATION_PROPS = ['getElevationValue', 'elevationAggregation', 'getElevationWeight'];

class HexagonLayer extends _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["CompositeLayer"] {
  initializeState() {
    this.state = {
      hexagons: [],
      sortedColorBins: null,
      sortedElevationBins: null,
      colorValueDomain: null,
      elevationValueDomain: null,
      colorScaleFunc: nop,
      elevationScaleFunc: nop,
      dimensionUpdaters: this.getDimensionUpdaters()
    };
  }

  updateState({oldProps, props, changeFlags}) {
    this.updateGetValueFuncs(oldProps, props);
    const dimensionChanges = this.getDimensionChanges(oldProps, props);

    if (changeFlags.dataChanged || this.needsReProjectPoints(oldProps, props)) {
      // project data into hexagons, and get sortedColorBins
      this.getHexagons();
    } else if (dimensionChanges) {
      dimensionChanges.forEach(f => typeof f === 'function' && f.apply(this));
    }
  }

  colorElevationPropsChanged(oldProps, props) {
    let colorChanged = false;
    let elevationChanged = false;
    for (const p of COLOR_PROPS) {
      if (oldProps[p] !== props[p]) {
        colorChanged = true;
      }
    }
    for (const p of ELEVATION_PROPS) {
      if (oldProps[p] !== props[p]) {
        elevationChanged = true;
      }
    }
    return {colorChanged, elevationChanged};
  }

  updateGetValueFuncs(oldProps, props) {
    let {getColorValue, getElevationValue} = props;
    const {colorAggregation, getColorWeight, elevationAggregation, getElevationWeight} = this.props;
    const {colorChanged, elevationChanged} = this.colorElevationPropsChanged(oldProps, props);

    if (colorChanged && getColorValue === null) {
      // If `getColorValue` is not provided, build it.
      getColorValue = Object(_utils_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_5__["getValueFunc"])(colorAggregation, getColorWeight);
    }
    if (elevationChanged && getElevationValue === null) {
      // If `getElevationValue` is not provided, build it.
      getElevationValue = Object(_utils_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_5__["getValueFunc"])(elevationAggregation, getElevationWeight);
    }
    if (getColorValue) {
      this.setState({getColorValue});
    }
    if (getElevationValue) {
      this.setState({getElevationValue});
    }
  }

  needsReProjectPoints(oldProps, props) {
    return (
      oldProps.radius !== props.radius || oldProps.hexagonAggregator !== props.hexagonAggregator
    );
  }

  getDimensionUpdaters() {
    // dimension updaters are sequential,
    // if the first one needs to be called, the 2nd and 3rd one will automatically
    // be called. e.g. if ColorValue needs to be updated, getColorValueDomain and getColorScale
    // will automatically be called
    return {
      getFillColor: [
        {
          id: 'value',
          triggers: ['getColorValue', 'getColorWeight', 'colorAggregation'],
          updater: this.getSortedColorBins
        },
        {
          id: 'domain',
          triggers: ['lowerPercentile', 'upperPercentile'],
          updater: this.getColorValueDomain
        },
        {
          id: 'scaleFunc',
          triggers: ['colorDomain', 'colorRange'],
          updater: this.getColorScale
        }
      ],
      getElevation: [
        {
          id: 'value',
          triggers: ['getElevationValue', 'getElevationWeight', 'elevationAggregation'],
          updater: this.getSortedElevationBins
        },
        {
          id: 'domain',
          triggers: ['elevationLowerPercentile', 'elevationUpperPercentile'],
          updater: this.getElevationValueDomain
        },
        {
          id: 'scaleFunc',
          triggers: ['elevationDomain', 'elevationRange'],
          updater: this.getElevationScale
        }
      ]
    };
  }

  getDimensionChanges(oldProps, props) {
    const {dimensionUpdaters} = this.state;
    const updaters = [];

    // get dimension to be updated
    for (const dimensionKey in dimensionUpdaters) {
      // return the first triggered updater for each dimension
      const needUpdate = dimensionUpdaters[dimensionKey].find(item =>
        item.triggers.some(t => oldProps[t] !== props[t])
      );

      if (needUpdate) {
        updaters.push(needUpdate.updater);
      }
    }

    return updaters.length ? updaters : null;
  }

  getHexagons() {
    const {hexagonAggregator} = this.props;
    const {viewport} = this.context;
    const {hexagons, hexagonVertices} = hexagonAggregator(this.props, viewport);
    this.updateRadiusAngle(hexagonVertices);
    this.setState({hexagons});
    this.getSortedBins();
  }

  getPickingInfo({info}) {
    const {sortedColorBins, sortedElevationBins} = this.state;
    const isPicked = info.picked && info.index > -1;

    let object = null;
    if (isPicked) {
      const cell = this.state.hexagons[info.index];

      const colorValue =
        sortedColorBins.binMap[cell.index] && sortedColorBins.binMap[cell.index].value;
      const elevationValue =
        sortedElevationBins.binMap[cell.index] && sortedElevationBins.binMap[cell.index].value;

      object = Object.assign(
        {
          colorValue,
          elevationValue
        },
        cell
      );
    }

    // add bin colorValue and elevationValue to info
    return Object.assign(info, {
      picked: Boolean(object),
      // override object with picked cell
      object
    });
  }

  getUpdateTriggers() {
    const {dimensionUpdaters} = this.state;

    // merge all dimension triggers
    const updateTriggers = {};

    for (const dimensionKey in dimensionUpdaters) {
      updateTriggers[dimensionKey] = {};

      for (const step of dimensionUpdaters[dimensionKey]) {
        step.triggers.forEach(prop => {
          updateTriggers[dimensionKey][prop] = this.props[prop];
        });
      }
    }

    return updateTriggers;
  }

  updateRadiusAngle(vertices) {
    let {radius} = this.props;
    let angle = 90;

    if (Array.isArray(vertices)) {
      if (vertices.length < 6) {
        _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["log"].error('HexagonCellLayer: hexagonVertices needs to be an array of 6 points')();
      }

      // calculate angle and vertices from hexagonVertices if provided
      const vertex0 = vertices[0];
      const vertex3 = vertices[3];

      // transform to space coordinates
      const {viewport} = this.context;
      const {pixelsPerMeter} = viewport.getDistanceScales();
      const spaceCoord0 = this.projectFlat(vertex0);
      const spaceCoord3 = this.projectFlat(vertex3);

      // distance between two close centroids
      const dx = spaceCoord0[0] - spaceCoord3[0];
      const dy = spaceCoord0[1] - spaceCoord3[1];
      const dxy = Math.sqrt(dx * dx + dy * dy);

      // Calculate angle that the perpendicular hexagon vertex axis is tilted
      angle = ((Math.acos(dx / dxy) * -Math.sign(dy)) / Math.PI) * 180 + 90;
      radius = dxy / 2 / pixelsPerMeter[0];
    }

    this.setState({angle, radius});
  }

  getValueDomain() {
    this.getColorValueDomain();
    this.getElevationValueDomain();
  }

  getSortedBins() {
    this.getSortedColorBins();
    this.getSortedElevationBins();
  }

  getSortedColorBins() {
    const {getColorValue} = this.state;
    const sortedColorBins = new _utils_bin_sorter__WEBPACK_IMPORTED_MODULE_2__["default"](this.state.hexagons || [], getColorValue);

    this.setState({sortedColorBins});
    this.getColorValueDomain();
  }

  getSortedElevationBins() {
    const {getElevationValue} = this.state;
    const sortedElevationBins = new _utils_bin_sorter__WEBPACK_IMPORTED_MODULE_2__["default"](this.state.hexagons || [], getElevationValue);
    this.setState({sortedElevationBins});
    this.getElevationValueDomain();
  }

  getColorValueDomain() {
    const {lowerPercentile, upperPercentile, onSetColorDomain} = this.props;

    if (lowerPercentile > upperPercentile) {
      _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["log"].warn('HexagonLayer: lowerPercentile is bigger than upperPercentile')();
    }

    this.state.colorValueDomain = this.state.sortedColorBins.getValueRange([
      lowerPercentile,
      upperPercentile
    ]);

    if (typeof onSetColorDomain === 'function') {
      onSetColorDomain(this.state.colorValueDomain);
    }

    this.getColorScale();
  }

  getElevationValueDomain() {
    const {elevationLowerPercentile, elevationUpperPercentile, onSetElevationDomain} = this.props;

    this.state.elevationValueDomain = this.state.sortedElevationBins.getValueRange([
      elevationLowerPercentile,
      elevationUpperPercentile
    ]);

    if (typeof onSetElevationDomain === 'function') {
      onSetElevationDomain(this.state.elevationValueDomain);
    }

    this.getElevationScale();
  }

  getColorScale() {
    const {colorRange} = this.props;
    const colorDomain = this.props.colorDomain || this.state.colorValueDomain;

    this.state.colorScaleFunc = Object(_utils_scale_utils__WEBPACK_IMPORTED_MODULE_4__["getQuantizeScale"])(colorDomain, colorRange);
  }

  getElevationScale() {
    const {elevationRange} = this.props;
    const elevationDomain = this.props.elevationDomain || this.state.elevationValueDomain;

    this.state.elevationScaleFunc = Object(_utils_scale_utils__WEBPACK_IMPORTED_MODULE_4__["getLinearScale"])(elevationDomain, elevationRange);
  }

  _onGetSublayerColor(cell) {
    const {sortedColorBins, colorScaleFunc, colorValueDomain} = this.state;

    const cv = sortedColorBins.binMap[cell.index] && sortedColorBins.binMap[cell.index].value;
    const colorDomain = this.props.colorDomain || colorValueDomain;

    const isColorValueInDomain = cv >= colorDomain[0] && cv <= colorDomain[colorDomain.length - 1];

    // if cell value is outside domain, set alpha to 0
    const color = isColorValueInDomain ? colorScaleFunc(cv) : [0, 0, 0, 0];

    // add alpha to color if not defined in colorRange
    color[3] = Number.isFinite(color[3]) ? color[3] : 255;

    return color;
  }

  _onGetSublayerElevation(cell) {
    const {sortedElevationBins, elevationScaleFunc, elevationValueDomain} = this.state;
    const ev =
      sortedElevationBins.binMap[cell.index] && sortedElevationBins.binMap[cell.index].value;

    const elevationDomain = this.props.elevationDomain || elevationValueDomain;

    const isElevationValueInDomain =
      ev >= elevationDomain[0] && ev <= elevationDomain[elevationDomain.length - 1];

    // if cell value is outside domain, set elevation to -1
    return isElevationValueInDomain ? elevationScaleFunc(ev) : -1;
  }

  renderLayers() {
    const {elevationScale, extruded, coverage, material, transitions} = this.props;
    const {angle, radius} = this.state;

    const SubLayerClass = this.getSubLayerClass('hexagon-cell', _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["ColumnLayer"]);

    return new SubLayerClass(
      {
        radius,
        diskResolution: 6,
        elevationScale,
        angle,
        extruded,
        coverage,
        material,

        getFillColor: this._onGetSublayerColor.bind(this),
        getElevation: this._onGetSublayerElevation.bind(this),
        transitions: transitions && {
          getFillColor: transitions.getColorValue || transitions.getColorWeight,
          getElevation: transitions.getElevationValue || transitions.getElevationWeight
        }
      },
      this.getSubLayerProps({
        id: 'hexagon-cell',
        updateTriggers: this.getUpdateTriggers()
      }),
      {
        data: this.state.hexagons
      }
    );
  }
}

HexagonLayer.layerName = 'HexagonLayer';
HexagonLayer.defaultProps = defaultProps;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: ScreenGridLayer, CPUGridLayer, HexagonLayer, ContourLayer, GridLayer, GPUGridLayer, AGGREGATION_OPERATION, HeatmapLayer, _GPUGridAggregator, experimental */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "experimental", function() { return experimental; });
/* harmony import */ var _screen_grid_layer_screen_grid_layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen-grid-layer/screen-grid-layer */ "./src/screen-grid-layer/screen-grid-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenGridLayer", function() { return _screen_grid_layer_screen_grid_layer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _cpu_grid_layer_cpu_grid_layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cpu-grid-layer/cpu-grid-layer */ "./src/cpu-grid-layer/cpu-grid-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CPUGridLayer", function() { return _cpu_grid_layer_cpu_grid_layer__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _hexagon_layer_hexagon_layer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hexagon-layer/hexagon-layer */ "./src/hexagon-layer/hexagon-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HexagonLayer", function() { return _hexagon_layer_hexagon_layer__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _contour_layer_contour_layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contour-layer/contour-layer */ "./src/contour-layer/contour-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContourLayer", function() { return _contour_layer_contour_layer__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _grid_layer_grid_layer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid-layer/grid-layer */ "./src/grid-layer/grid-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridLayer", function() { return _grid_layer_grid_layer__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _gpu_grid_layer_gpu_grid_layer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gpu-grid-layer/gpu-grid-layer */ "./src/gpu-grid-layer/gpu-grid-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GPUGridLayer", function() { return _gpu_grid_layer_gpu_grid_layer__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _utils_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/aggregation-operation-utils */ "./src/utils/aggregation-operation-utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AGGREGATION_OPERATION", function() { return _utils_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_6__["AGGREGATION_OPERATION"]; });

/* harmony import */ var _heatmap_layer_heatmap_layer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./heatmap-layer/heatmap-layer */ "./src/heatmap-layer/heatmap-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeatmapLayer", function() { return _heatmap_layer_heatmap_layer__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _utils_gpu_grid_aggregation_gpu_grid_aggregator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/gpu-grid-aggregation/gpu-grid-aggregator */ "./src/utils/gpu-grid-aggregation/gpu-grid-aggregator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_GPUGridAggregator", function() { return _utils_gpu_grid_aggregation_gpu_grid_aggregator__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _utils_bin_sorter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/bin-sorter */ "./src/utils/bin-sorter.js");
/* harmony import */ var _utils_scale_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/scale-utils */ "./src/utils/scale-utils.js");
/* harmony import */ var _utils_color_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/color-utils */ "./src/utils/color-utils.js");
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









// experimental export







const experimental = {
  BinSorter: _utils_bin_sorter__WEBPACK_IMPORTED_MODULE_9__["default"],

  linearScale: _utils_scale_utils__WEBPACK_IMPORTED_MODULE_10__["linearScale"],
  getLinearScale: _utils_scale_utils__WEBPACK_IMPORTED_MODULE_10__["getLinearScale"],
  quantizeScale: _utils_scale_utils__WEBPACK_IMPORTED_MODULE_10__["quantizeScale"],
  getQuantizeScale: _utils_scale_utils__WEBPACK_IMPORTED_MODULE_10__["getQuantizeScale"],

  defaultColorRange: _utils_color_utils__WEBPACK_IMPORTED_MODULE_11__["defaultColorRange"]
};


/***/ }),

/***/ "./src/screen-grid-layer/screen-grid-layer-fragment-webgl1.glsl.js":
/*!*************************************************************************!*\
  !*** ./src/screen-grid-layer/screen-grid-layer-fragment-webgl1.glsl.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* fragment shader for the grid-layer */
/* harmony default export */ __webpack_exports__["default"] = (`\
#define SHADER_NAME screen-grid-layer-fragment-shader-webgl1

precision highp float;

varying vec4 vColor;
varying float vSampleCount;

void main(void) {
  if (vSampleCount <= 0.0) {
    discard;
  }
  gl_FragColor = vColor;

  gl_FragColor = picking_filterColor(gl_FragColor);
}
`);


/***/ }),

/***/ "./src/screen-grid-layer/screen-grid-layer-fragment.glsl.js":
/*!******************************************************************!*\
  !*** ./src/screen-grid-layer/screen-grid-layer-fragment.glsl.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* fragment shader for the grid-layer */
/* harmony default export */ __webpack_exports__["default"] = (`\
#version 300 es
#define SHADER_NAME screen-grid-layer-fragment-shader

precision highp float;

in vec4 vColor;
in float vSampleCount;
out vec4 fragColor;

void main(void) {
  if (vSampleCount <= 0.0) {
    discard;
  }
  fragColor = vColor;

  fragColor = picking_filterColor(fragColor);
}
`);


/***/ }),

/***/ "./src/screen-grid-layer/screen-grid-layer-vertex-webgl1.glsl.js":
/*!***********************************************************************!*\
  !*** ./src/screen-grid-layer/screen-grid-layer-vertex-webgl1.glsl.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (`\
#define SHADER_NAME screen-grid-layer-vertex-shader-webgl1
#define RANGE_COUNT 6

attribute vec3 positions;
attribute vec3 instancePositions;
attribute vec4 instanceCounts;
attribute vec3 instancePickingColors;

uniform float opacity;
uniform vec3 cellScale;
uniform vec4 minColor;
uniform vec4 maxColor;
uniform float maxWeight;
uniform vec4 colorRange[RANGE_COUNT];
uniform vec2 colorDomain;
uniform bool shouldUseMinMax;

varying vec4 vColor;
varying float vSampleCount;

vec4 quantizeScale(vec2 domain, vec4 range[RANGE_COUNT], float value) {
  vec4 outColor = vec4(0., 0., 0., 0.);
  if (value >= domain.x && value <= domain.y) {
    float domainRange = domain.y - domain.x;
    if (domainRange <= 0.) {
      outColor = colorRange[0];
    } else {
      float rangeCount = float(RANGE_COUNT);
      float rangeStep = domainRange / rangeCount;
      float idx = floor((value - domain.x) / rangeStep);
      idx = clamp(idx, 0., rangeCount - 1.);
      int intIdx = int(idx);
      outColor = colorRange[intIdx];
    }
  }
  outColor = outColor / 255.;
  return outColor;
}

void main(void) {
  vSampleCount = instanceCounts.a;

  float weight = instanceCounts.r;
  float step = weight / maxWeight;
  vec4 minMaxColor = mix(minColor, maxColor, step) / 255.;

  vec2 domain = colorDomain;
  float domainMaxValid = float(colorDomain.y != 0.);
  domain.y = mix(maxWeight, colorDomain.y, domainMaxValid);
  vec4 rangeColor = quantizeScale(domain, colorRange, weight);

  float rangeMinMax = float(shouldUseMinMax);
  vec4 color = mix(rangeColor, minMaxColor, rangeMinMax);
  vColor = vec4(color.rgb, color.a * opacity);

  // Set color to be rendered to picking fbo (also used to check for selection highlight).
  picking_setPickingColor(instancePickingColors);

  gl_Position = vec4(instancePositions + positions * cellScale, 1.);
}
`);


/***/ }),

/***/ "./src/screen-grid-layer/screen-grid-layer-vertex.glsl.js":
/*!****************************************************************!*\
  !*** ./src/screen-grid-layer/screen-grid-layer-vertex.glsl.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (`\
#version 300 es
#define SHADER_NAME screen-grid-layer-vertex-shader
#define RANGE_COUNT 6

in vec3 positions;
in vec3 instancePositions;
in vec4 instanceCounts;
in vec3 instancePickingColors;

layout(std140) uniform;
uniform float opacity;
uniform vec3 cellScale;
uniform vec4 minColor;
uniform vec4 maxColor;
uniform AggregationData
{
  vec4 maxCount;
} aggregationData;

uniform vec4 colorRange[RANGE_COUNT];
uniform vec2 colorDomain;
uniform bool shouldUseMinMax;

out vec4 vColor;
out float vSampleCount;

vec4 quantizeScale(vec2 domain, vec4 range[RANGE_COUNT], float value) {
  vec4 outColor = vec4(0., 0., 0., 0.);
  if (value >= domain.x && value <= domain.y) {
    float domainRange = domain.y - domain.x;
    if (domainRange <= 0.) {
      outColor = colorRange[0];
    } else {
      float rangeCount = float(RANGE_COUNT);
      float rangeStep = domainRange / rangeCount;
      float idx = floor((value - domain.x) / rangeStep);
      idx = clamp(idx, 0., rangeCount - 1.);
      int intIdx = int(idx);
      outColor = colorRange[intIdx];
    }
  }
  outColor = outColor / 255.;
  return outColor;
}

void main(void) {
  vSampleCount = instanceCounts.a;

  float weight = instanceCounts.r ;
  float maxWeight = aggregationData.maxCount.r;
  float step = weight / maxWeight;
  vec4 minMaxColor = mix(minColor, maxColor, step) / 255.;

  vec2 domain = colorDomain;
  float domainMaxValid = float(colorDomain.y != 0.);
  domain.y = mix(maxWeight, colorDomain.y, domainMaxValid);
  vec4 rangeColor = quantizeScale(domain, colorRange, weight);

  float rangeMinMax = float(shouldUseMinMax);
  vec4 color = mix(rangeColor, minMaxColor, rangeMinMax);
  vColor = vec4(color.rgb, color.a * opacity);

  // Set color to be rendered to picking fbo (also used to check for selection highlight).
  picking_setPickingColor(instancePickingColors);

  gl_Position = vec4(instancePositions + positions * cellScale, 1.);
}
`);


/***/ }),

/***/ "./src/screen-grid-layer/screen-grid-layer.js":
/*!****************************************************!*\
  !*** ./src/screen-grid-layer/screen-grid-layer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScreenGridLayer; });
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_color_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/color-utils */ "./src/utils/color-utils.js");
/* harmony import */ var _utils_gpu_grid_aggregation_gpu_grid_aggregator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/gpu-grid-aggregation/gpu-grid-aggregator */ "./src/utils/gpu-grid-aggregation/gpu-grid-aggregator.js");
/* harmony import */ var _utils_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/aggregation-operation-utils */ "./src/utils/aggregation-operation-utils.js");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @luma.gl/constants */ "@luma.gl/constants");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _screen_grid_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screen-grid-layer-vertex.glsl */ "./src/screen-grid-layer/screen-grid-layer-vertex.glsl.js");
/* harmony import */ var _screen_grid_layer_vertex_webgl1_glsl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./screen-grid-layer-vertex-webgl1.glsl */ "./src/screen-grid-layer/screen-grid-layer-vertex-webgl1.glsl.js");
/* harmony import */ var _screen_grid_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./screen-grid-layer-fragment.glsl */ "./src/screen-grid-layer/screen-grid-layer-fragment.glsl.js");
/* harmony import */ var _screen_grid_layer_fragment_webgl1_glsl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./screen-grid-layer-fragment-webgl1.glsl */ "./src/screen-grid-layer/screen-grid-layer-fragment-webgl1.glsl.js");
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


const {count} = _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["experimental"];












const DEFAULT_MINCOLOR = [0, 0, 0, 0];
const DEFAULT_MAXCOLOR = [0, 255, 0, 255];
const AGGREGATION_DATA_UBO_INDEX = 0;
const COLOR_PROPS = [`minColor`, `maxColor`, `colorRange`, `colorDomain`];

const defaultProps = {
  cellSizePixels: {value: 100, min: 1},
  cellMarginPixels: {value: 2, min: 0, max: 5},

  colorDomain: null,
  colorRange: _utils_color_utils__WEBPACK_IMPORTED_MODULE_1__["defaultColorRange"],

  getPosition: {type: 'accessor', value: d => d.position},
  getWeight: {type: 'accessor', value: d => [1, 0, 0]},

  gpuAggregation: true,
  aggregation: 'SUM'
};

class ScreenGridLayer extends _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["Layer"] {
  getShaders() {
    const shaders = Object(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_4__["isWebGL2"])(this.context.gl) ? {vs: _screen_grid_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_5__["default"], fs: _screen_grid_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_7__["default"]} : {vs: _screen_grid_layer_vertex_webgl1_glsl__WEBPACK_IMPORTED_MODULE_6__["default"], fs: _screen_grid_layer_fragment_webgl1_glsl__WEBPACK_IMPORTED_MODULE_8__["default"]};
    shaders.modules = ['picking'];
    return super.getShaders(shaders);
  }

  initializeState() {
    const attributeManager = this.getAttributeManager();
    const {gl} = this.context;

    /* eslint-disable max-len */
    attributeManager.addInstanced({
      instancePositions: {size: 3, update: this.calculateInstancePositions},
      instanceCounts: {
        size: 4,
        transition: true,
        accessor: ['getPosition', 'getWeight'],
        update: this.calculateInstanceCounts,
        noAlloc: true
      }
    });
    /* eslint-disable max-len */

    const options = {
      id: `${this.id}-aggregator`,
      shaderCache: this.context.shaderCache
    };
    const maxBuffer = this._getMaxCountBuffer(gl);
    const weights = {
      color: {
        size: 1,
        operation: _utils_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_3__["AGGREGATION_OPERATION"].SUM,
        needMax: true,
        maxBuffer
      }
    };
    this.setState({
      model: this._getModel(gl),
      gpuGridAggregator: new _utils_gpu_grid_aggregation_gpu_grid_aggregator__WEBPACK_IMPORTED_MODULE_2__["default"](gl, options),
      maxBuffer,
      weights
    });

    this._setupUniformBuffer();
  }

  shouldUpdateState({changeFlags}) {
    return changeFlags.somethingChanged;
  }

  updateState(opts) {
    super.updateState(opts);

    this._updateUniforms(opts);

    if (opts.changeFlags.dataChanged) {
      this._processData();
    }

    const changeFlags = this._getAggregationChangeFlags(opts);

    if (changeFlags) {
      if (changeFlags.cellSizeChanged || changeFlags.viewportChanged) {
        this._updateGridParams();
      }
      const {pointCount} = this.state;
      if (pointCount > 0) {
        this._updateAggregation(changeFlags);
      }
    }
  }

  finalizeState() {
    super.finalizeState();

    const {aggregationBuffer, maxBuffer, gpuGridAggregator} = this.state;
    gpuGridAggregator.delete();
    if (aggregationBuffer) {
      aggregationBuffer.delete();
    }
    if (maxBuffer) {
      maxBuffer.delete();
    }
  }

  draw({uniforms}) {
    const {gl} = this.context;
    const {parameters = {}} = this.props;
    const minColor = this.props.minColor || DEFAULT_MINCOLOR;
    const maxColor = this.props.maxColor || DEFAULT_MAXCOLOR;

    // If colorDomain not specified we use default domain [1, maxCount]
    // maxCount value will be deduced from aggregated buffer in the vertex shader.
    const colorDomain = this.props.colorDomain || [1, 0];
    const {model, maxBuffer, cellScale, shouldUseMinMax, colorRange, maxWeight} = this.state;
    const layerUniforms = {
      minColor,
      maxColor,
      cellScale,
      colorRange,
      colorDomain,
      shouldUseMinMax
    };

    if (Object(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_4__["isWebGL2"])(gl)) {
      maxBuffer.bind({target: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_4___default.a.UNIFORM_BUFFER});
    } else {
      layerUniforms.maxWeight = maxWeight;
    }
    uniforms = Object.assign(layerUniforms, uniforms);
    model.draw({
      uniforms,
      parameters: Object.assign(
        {
          depthTest: false,
          depthMask: false
        },
        parameters
      )
    });
    if (Object(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_4__["isWebGL2"])(gl)) {
      maxBuffer.unbind();
    }
  }

  calculateInstancePositions(attribute, {numInstances}) {
    const {width, height} = this.context.viewport;
    const {cellSizePixels} = this.props;
    const {numCol} = this.state;
    const {value, size} = attribute;

    for (let i = 0; i < numInstances; i++) {
      const x = i % numCol;
      const y = Math.floor(i / numCol);
      value[i * size + 0] = ((x * cellSizePixels) / width) * 2 - 1;
      value[i * size + 1] = 1 - ((y * cellSizePixels) / height) * 2;
      value[i * size + 2] = 0;
    }
  }

  calculateInstanceCounts(attribute, {numInstances}) {
    const {aggregationBuffer} = this.state;
    attribute.update({
      buffer: aggregationBuffer
    });
  }

  getPickingInfo({info, mode}) {
    const {index} = info;
    if (index >= 0) {
      const {gpuGridAggregator} = this.state;
      // Get color aggregation results
      const aggregationResults = gpuGridAggregator.getData('color');

      // Each instance (one cell) is aggregated into single pixel,
      // Get current instance's aggregation details.
      info.object = _utils_gpu_grid_aggregation_gpu_grid_aggregator__WEBPACK_IMPORTED_MODULE_2__["default"].getAggregationData(
        Object.assign({pixelIndex: index}, aggregationResults)
      );
    }

    return info;
  }

  // HELPER Methods

  _getAggregationChangeFlags({oldProps, props, changeFlags}) {
    const cellSizeChanged =
      props.cellSizePixels !== oldProps.cellSizePixels ||
      props.cellMarginPixels !== oldProps.cellMarginPixels;
    const dataChanged = changeFlags.dataChanged || props.aggregation !== oldProps.aggregation;
    const viewportChanged = changeFlags.viewportChanged;

    if (cellSizeChanged || dataChanged || viewportChanged) {
      return {cellSizeChanged, dataChanged, viewportChanged};
    }

    return null;
  }

  _getModel(gl) {
    return new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_4__["Model"](
      gl,
      Object.assign({}, this.getShaders(), {
        id: this.props.id,
        geometry: new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_4__["Geometry"]({
          drawMode: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_4___default.a.TRIANGLE_FAN,
          attributes: {
            positions: new Float32Array([0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0])
          }
        }),
        isInstanced: true,
        shaderCache: this.context.shaderCache
      })
    );
  }

  // Creates and returns a Uniform Buffer object to hold maxCount value.
  _getMaxCountBuffer(gl) {
    return new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_4__["Buffer"](gl, {
      byteLength: 4 * 4, // Four floats
      index: AGGREGATION_DATA_UBO_INDEX,
      accessor: {
        size: 4
      }
    });
  }

  // Process 'data' and build positions and weights Arrays.
  _processData() {
    const {data, getPosition, getWeight} = this.props;
    const pointCount = count(data);
    const positions = new Float64Array(pointCount * 2);
    const colorWeights = new Float32Array(pointCount * 3);
    const {weights} = this.state;

    const {iterable, objectInfo} = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["createIterable"])(data);
    for (const object of iterable) {
      objectInfo.index++;
      const position = getPosition(object, objectInfo);
      const weight = getWeight(object, objectInfo);
      const {index} = objectInfo;

      positions[index * 2] = position[0];
      positions[index * 2 + 1] = position[1];

      if (Array.isArray(weight)) {
        colorWeights[index * 3] = weight[0];
        colorWeights[index * 3 + 1] = weight[1];
        colorWeights[index * 3 + 2] = weight[2];
      } else {
        // backward compitability
        colorWeights[index * 3] = weight;
      }
    }
    weights.color.values = colorWeights;
    this.setState({positions, pointCount});
  }

  // Set a binding point for the aggregation uniform block index
  _setupUniformBuffer() {
    const gl = this.context.gl;
    // For WebGL1, uniform buffer is not used.
    if (!Object(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_4__["isWebGL2"])(gl)) {
      return;
    }
    const programHandle = this.state.model.program.handle;

    // TODO: Replace with luma.gl api when ready.
    const uniformBlockIndex = gl.getUniformBlockIndex(programHandle, 'AggregationData');
    gl.uniformBlockBinding(programHandle, uniformBlockIndex, AGGREGATION_DATA_UBO_INDEX);
  }

  _shouldUseMinMax() {
    const {minColor, maxColor, colorDomain, colorRange} = this.props;
    if (minColor || maxColor) {
      _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["log"].deprecated('ScreenGridLayer props: minColor and maxColor', 'colorRange, colorDomain')();
      return true;
    }
    // minColor and maxColor not supplied, check if colorRange or colorDomain supplied.
    // NOTE: colorDomain and colorRange are experimental features, use them only when supplied.
    if (colorDomain || colorRange) {
      return false;
    }
    // None specified, use default minColor and maxColor
    return true;
  }

  _updateAggregation(changeFlags) {
    const attributeManager = this.getAttributeManager();
    const {cellSizePixels, gpuAggregation} = this.props;

    const {positions, weights} = this.state;
    const {viewport} = this.context;

    weights.color.operation =
      _utils_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_3__["AGGREGATION_OPERATION"][this.props.aggregation.toUpperCase()] || _utils_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_3__["AGGREGATION_OPERATION"].SUM;

    let projectPoints = false;
    let gridTransformMatrix = null;

    if (this.context.viewport instanceof _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["WebMercatorViewport"]) {
      // project points from world space (lng/lat) to viewport (screen) space.
      projectPoints = true;
    } else {
      projectPoints = false;
      // Use pixelProjectionMatrix to transform points to viewport (screen) space.
      gridTransformMatrix = viewport.pixelProjectionMatrix;
    }
    const results = this.state.gpuGridAggregator.run({
      positions,
      weights,
      cellSize: [cellSizePixels, cellSizePixels],
      viewport,
      changeFlags,
      useGPU: gpuAggregation,
      projectPoints,
      gridTransformMatrix
    });

    const maxWeight =
      results.color.maxData && Number.isFinite(results.color.maxData[0])
        ? results.color.maxData[0]
        : 0;

    this.setState({
      maxWeight // uniform to use under WebGL1
    });

    attributeManager.invalidate('instanceCounts');
  }

  _updateUniforms({oldProps, props, changeFlags}) {
    const newState = {};
    if (COLOR_PROPS.some(key => oldProps[key] !== props[key])) {
      newState.shouldUseMinMax = this._shouldUseMinMax();
    }

    if (oldProps.colorRange !== props.colorRange) {
      newState.colorRange = Object(_utils_color_utils__WEBPACK_IMPORTED_MODULE_1__["colorRangeToFlatArray"])(props.colorRange);
    }

    if (
      oldProps.cellMarginPixels !== props.cellMarginPixels ||
      oldProps.cellSizePixels !== props.cellSizePixels ||
      changeFlags.viewportChanged
    ) {
      const {width, height} = this.context.viewport;
      const {cellSizePixels, cellMarginPixels} = this.props;
      const margin = cellSizePixels > cellMarginPixels ? cellMarginPixels : 0;

      newState.cellScale = new Float32Array([
        ((cellSizePixels - margin) / width) * 2,
        (-(cellSizePixels - margin) / height) * 2,
        1
      ]);
    }
    this.setState(newState);
  }

  _updateGridParams() {
    const attributeManager = this.getAttributeManager();
    attributeManager.invalidateAll();
    const {width, height} = this.context.viewport;
    const {cellSizePixels} = this.props;
    const {gl} = this.context;

    const numCol = Math.ceil(width / cellSizePixels);
    const numRow = Math.ceil(height / cellSizePixels);
    const numInstances = numCol * numRow;
    const dataBytes = numInstances * 4 * 4;
    let aggregationBuffer = this.state.aggregationBuffer;
    if (aggregationBuffer) {
      aggregationBuffer.delete();
    }

    aggregationBuffer = new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_4__["Buffer"](gl, {
      byteLength: dataBytes,
      accessor: {
        size: 4,
        type: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_4___default.a.FLOAT,
        divisor: 1
      }
    });
    this.state.weights.color.aggregationBuffer = aggregationBuffer;
    this.setState({
      numCol,
      numRow,
      numInstances,
      aggregationBuffer
    });
  }
}

ScreenGridLayer.layerName = 'ScreenGridLayer';
ScreenGridLayer.defaultProps = defaultProps;


/***/ }),

/***/ "./src/utils/aggregation-operation-utils.js":
/*!**************************************************!*\
  !*** ./src/utils/aggregation-operation-utils.js ***!
  \**************************************************/
/*! exports provided: AGGREGATION_OPERATION, getMean, getSum, getMax, getMin, getValueFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGGREGATION_OPERATION", function() { return AGGREGATION_OPERATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMean", function() { return getMean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSum", function() { return getSum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMax", function() { return getMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMin", function() { return getMin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueFunc", function() { return getValueFunc; });
// Copyright (c) 2015 - 2019 Uber Technologies, Inc.
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

const AGGREGATION_OPERATION = {
  SUM: 1,
  MEAN: 2,
  MIN: 3,
  MAX: 4
};

function sumReducer(accu, cur) {
  return accu + cur;
}

function maxReducer(accu, cur) {
  return cur > accu ? cur : accu;
}

function minReducer(accu, cur) {
  return cur < accu ? cur : accu;
}

function getMean(pts, accessor) {
  const filtered = pts.map(accessor).filter(Number.isFinite);

  return filtered.length ? filtered.reduce(sumReducer, 0) / filtered.length : null;
}

function getSum(pts, accessor) {
  const filtered = pts.map(accessor).filter(Number.isFinite);

  return filtered.length ? filtered.reduce(sumReducer, 0) : null;
}

function getMax(pts, accessor) {
  const filtered = pts.map(accessor).filter(Number.isFinite);

  return filtered.length ? filtered.reduce(maxReducer, -Infinity) : null;
}

function getMin(pts, accessor) {
  const filtered = pts.map(accessor).filter(Number.isFinite);

  return filtered.length ? filtered.reduce(minReducer, Infinity) : null;
}

// Function to convert from aggregation/accessor props (like colorAggregation and getColorWeight) to getValue prop (like getColorValue)
function getValueFunc(aggregation, accessor) {
  const op = AGGREGATION_OPERATION[aggregation.toUpperCase()] || AGGREGATION_OPERATION.SUM;
  switch (op) {
    case AGGREGATION_OPERATION.MIN:
      return pts => getMin(pts, accessor);
    case AGGREGATION_OPERATION.SUM:
      return pts => getSum(pts, accessor);
    case AGGREGATION_OPERATION.MEAN:
      return pts => getMean(pts, accessor);
    case AGGREGATION_OPERATION.MAX:
      return pts => getMax(pts, accessor);
    default:
      return null;
  }
}


/***/ }),

/***/ "./src/utils/bin-sorter.js":
/*!*********************************!*\
  !*** ./src/utils/bin-sorter.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BinSorter; });
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

// getValue takes an array of points returns a value to sort the bins on.
// by default it returns the number of points
// this is where to pass in a function to color the bins by
// avg/mean/max of specific value of the point
const defaultGetValue = points => points.length;

class BinSorter {
  constructor(bins = [], getValue = defaultGetValue) {
    this.sortedBins = this.getSortedBins(bins, getValue);
    this.maxCount = this.getMaxCount();
    this.binMap = this.getBinMap();
  }

  /**
   * Get an array of object with sorted values and index of bins
   * @param {Array} bins
   * @param {Function} getValue
   * @return {Array} array of values and index lookup
   */
  getSortedBins(bins, getValue) {
    return bins
      .reduce((accu, h, i) => {
        const value = getValue(h.points);

        if (value !== null && value !== undefined) {
          // filter bins if value is null or undefined
          accu.push({
            i: Number.isFinite(h.index) ? h.index : i,
            value,
            counts: h.points.length
          });
        }

        return accu;
      }, [])
      .sort((a, b) => a.value - b.value);
  }

  /**
   * Get range of values of all bins
   * @param {Number[]} range
   * @param {Number} range[0] - lower bound
   * @param {Number} range[1] - upper bound
   * @return {Array} array of new value range
   */
  getValueRange([lower, upper]) {
    const len = this.sortedBins.length;
    if (!len) {
      return [0, 0];
    }
    const lowerIdx = Math.ceil((lower / 100) * (len - 1));
    const upperIdx = Math.floor((upper / 100) * (len - 1));

    return [this.sortedBins[lowerIdx].value, this.sortedBins[upperIdx].value];
  }

  /**
   * Get ths max count of all bins
   * @return {Number | Boolean} max count
   */
  getMaxCount() {
    let maxCount = 0;
    this.sortedBins.forEach(x => (maxCount = maxCount > x.counts ? maxCount : x.counts));
    return maxCount;
  }

  /**
   * Get a mapping from cell/hexagon index to sorted bin
   * This is used to retrieve bin value for color calculation
   * @return {Object} bin index to sortedBins
   */
  getBinMap() {
    return this.sortedBins.reduce(
      (mapper, curr) =>
        Object.assign(mapper, {
          [curr.i]: curr
        }),
      {}
    );
  }
}


/***/ }),

/***/ "./src/utils/color-utils.js":
/*!**********************************!*\
  !*** ./src/utils/color-utils.js ***!
  \**********************************/
/*! exports provided: defaultColorRange, colorRangeToFlatArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultColorRange", function() { return defaultColorRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorRangeToFlatArray", function() { return colorRangeToFlatArray; });
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

const defaultColorRange = [
  [255, 255, 178],
  [254, 217, 118],
  [254, 178, 76],
  [253, 141, 60],
  [240, 59, 32],
  [189, 0, 38]
];

// Converts a colorRange array to a flat array with 4 components per color
function colorRangeToFlatArray(colorRange, normalize = false, ArrayType = Float32Array) {
  let flatArray;

  if (Number.isFinite(colorRange[0])) {
    // its already a flat array.
    flatArray = new ArrayType(colorRange);
  } else {
    // flatten it
    flatArray = new ArrayType(colorRange.length * 4);
    let index = 0;

    for (let i = 0; i < colorRange.length; i++) {
      const color = colorRange[i];
      flatArray[index++] = color[0];
      flatArray[index++] = color[1];
      flatArray[index++] = color[2];
      flatArray[index++] = Number.isFinite(color[3]) ? color[3] : 255;
    }
  }

  if (normalize) {
    for (let i = 0; i < flatArray.length; i++) {
      flatArray[i] /= 255;
    }
  }
  return flatArray;
}


/***/ }),

/***/ "./src/utils/gpu-grid-aggregation/aggregate-all-fs.glsl.js":
/*!*****************************************************************!*\
  !*** ./src/utils/gpu-grid-aggregation/aggregate-all-fs.glsl.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Copyright (c) 2015 - 2018 Uber Technologies, Inc.
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

/* harmony default export */ __webpack_exports__["default"] = (`\
#version 300 es
#define SHADER_NAME gpu-aggregation-all-fs

precision highp float;

in vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform bool combineMaxMin;
out vec4 fragColor;
void main(void) {
  vec4 textureColor = texture(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));
  if (textureColor.a == 0.) {
    discard;
  }
  fragColor.rgb = textureColor.rgb;
  // if combineMinMax is true, use Alpha channel for first weights min value.
  fragColor.a = combineMaxMin ? textureColor.r : textureColor.a;
}
`);


/***/ }),

/***/ "./src/utils/gpu-grid-aggregation/aggregate-all-vs-64.glsl.js":
/*!********************************************************************!*\
  !*** ./src/utils/gpu-grid-aggregation/aggregate-all-vs-64.glsl.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Copyright (c) 2015 - 2018 Uber Technologies, Inc.
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

/* harmony default export */ __webpack_exports__["default"] = (`\
#version 300 es
#define SHADER_NAME gpu-aggregation-all-vs-64

in vec2 position;
uniform ivec2 gridSize;
out vec2 vTextureCoord;

void main(void) {
  // Map each position to single pixel
  vec2 pos = vec2(-1.0, -1.0);

  // Move to pixel center, pixel-size in screen sapce (2/gridSize) * 0.5 => 1/gridSize
  vec2 offset = 1.0 / vec2(gridSize);
  pos = pos + offset;

  gl_Position = vec4(pos, 0.0, 1.0);

  int yIndex = gl_InstanceID / gridSize[0];
  int xIndex = gl_InstanceID - (yIndex * gridSize[0]);

  vec2 yIndexFP64 = vec2(float(yIndex), 0.);
  vec2 xIndexFP64 = vec2(float(xIndex), 0.);
  vec2 gridSizeYFP64 = vec2(gridSize[1], 0.);
  vec2 gridSizeXFP64 = vec2(gridSize[0], 0.);

  vec2 texCoordXFP64 = div_fp64(yIndexFP64, gridSizeYFP64);
  vec2 texCoordYFP64 = div_fp64(xIndexFP64, gridSizeXFP64);

  vTextureCoord = vec2(texCoordYFP64.x, texCoordXFP64.x);
}
`);


/***/ }),

/***/ "./src/utils/gpu-grid-aggregation/aggregate-to-grid-fs.glsl.js":
/*!*********************************************************************!*\
  !*** ./src/utils/gpu-grid-aggregation/aggregate-to-grid-fs.glsl.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Copyright (c) 2015 - 2018 Uber Technologies, Inc.
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

/* harmony default export */ __webpack_exports__["default"] = (`\
#define SHADER_NAME gpu-aggregation-to-grid-fs

precision highp float;

varying vec3 vWeights;

void main(void) {
  gl_FragColor = vec4(vWeights, 1.0);
}
`);


/***/ }),

/***/ "./src/utils/gpu-grid-aggregation/aggregate-to-grid-vs-64.glsl.js":
/*!************************************************************************!*\
  !*** ./src/utils/gpu-grid-aggregation/aggregate-to-grid-vs-64.glsl.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Copyright (c) 2015 - 2018 Uber Technologies, Inc.
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

/* harmony default export */ __webpack_exports__["default"] = (`\
#define SHADER_NAME gpu-aggregation-to-grid-vs-64

attribute vec2 positions;
attribute vec2 positions64xyLow;
attribute vec3 weights;
uniform vec2 windowSize;
uniform vec2 cellSize;
uniform vec2 gridSize;
uniform vec2 uProjectionMatrixFP64[16];
uniform bool projectPoints;

varying vec3 vWeights;

void project_to_pixel(vec2 pos, vec2 pos64xyLow, out vec2 pixelXY64[2]) {

  vec2 result64[4];
  vec2 position64[4];
  position64[0] = vec2(pos.x, pos64xyLow.x);
  position64[1] = vec2(pos.y, pos64xyLow.y);
  position64[2] = vec2(0., 0.);
  position64[3] = vec2(1., 0.);
  mat4_vec4_mul_fp64(uProjectionMatrixFP64, position64,
  result64);

  pixelXY64[0] = div_fp64(result64[0], result64[3]);
  pixelXY64[1] = div_fp64(result64[1], result64[3]);
}

void main(void) {

  vWeights = weights;

  vec2 windowPos = positions;
  vec2 windowPos64xyLow = positions64xyLow;
  if (projectPoints) {
    vec2 projectedXY[2];
    project_position_fp64(windowPos, windowPos64xyLow, projectedXY);
    windowPos.x = projectedXY[0].x;
    windowPos.y = projectedXY[1].x;
    windowPos64xyLow.x = projectedXY[0].y;
    windowPos64xyLow.y = projectedXY[1].y;
  }

  vec2 pixelXY64[2];
  project_to_pixel(windowPos, windowPos64xyLow, pixelXY64);

  // Transform (0,0):windowSize -> (0, 0): gridSize
  vec2 gridXY64[2];
  gridXY64[0] = div_fp64(pixelXY64[0], vec2(cellSize.x, 0));
  gridXY64[1] = div_fp64(pixelXY64[1], vec2(cellSize.y, 0));
  float x = floor(gridXY64[0].x);
  float y = floor(gridXY64[1].x);
  vec2 pos = vec2(x, y);

  // Transform (0,0):gridSize -> (-1, -1):(1,1)
  pos = (pos * (2., 2.) / (gridSize)) - (1., 1.);

  // Move to pixel center, pixel-size in screen sapce (2/gridSize) * 0.5 => 1/gridSize
  vec2 offset = 1.0 / gridSize;
  pos = pos + offset;

  gl_Position = vec4(pos, 0.0, 1.0);
}
`);


/***/ }),

/***/ "./src/utils/gpu-grid-aggregation/aggregate-to-grid-vs.glsl.js":
/*!*********************************************************************!*\
  !*** ./src/utils/gpu-grid-aggregation/aggregate-to-grid-vs.glsl.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Copyright (c) 2015 - 2018 Uber Technologies, Inc.
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

/* harmony default export */ __webpack_exports__["default"] = (`\
#define SHADER_NAME gpu-aggregation-to-grid-vs

attribute vec2 positions;
attribute vec3 weights;
uniform vec2 windowSize;
uniform vec2 cellSize;
uniform vec2 gridSize;
uniform mat4 uProjectionMatrix;
uniform bool projectPoints;

varying vec3 vWeights;

vec2 project_to_pixel(vec4 pos) {
  vec4 result =  uProjectionMatrix * pos;
  return result.xy/result.w;
}

void main(void) {

  vWeights = weights;

  vec4 windowPos = vec4(positions, 0, 1.);
  if (projectPoints) {
    windowPos = project_position_to_clipspace(vec3(positions, 0), vec2(0, 0), vec3(0, 0, 0));
  }

  vec2 pos = project_to_pixel(windowPos);

  // Transform (0,0):windowSize -> (0, 0): gridSize
  pos = floor(pos / cellSize);

  // Transform (0,0):gridSize -> (-1, -1):(1,1)
  pos = (pos * (2., 2.) / (gridSize)) - (1., 1.);

  // Move to pixel center, pixel-size in screen sapce (2/gridSize) * 0.5 => 1/gridSize
  vec2 offset = 1.0 / gridSize;
  pos = pos + offset;

  gl_Position = vec4(pos, 0.0, 1.0);
}
`);


/***/ }),

/***/ "./src/utils/gpu-grid-aggregation/gpu-grid-aggregator-constants.js":
/*!*************************************************************************!*\
  !*** ./src/utils/gpu-grid-aggregation/gpu-grid-aggregator-constants.js ***!
  \*************************************************************************/
/*! exports provided: DEFAULT_CHANGE_FLAGS, DEFAULT_RUN_PARAMS, MAX_32_BIT_FLOAT, MIN_BLEND_EQUATION, MAX_BLEND_EQUATION, MAX_MIN_BLEND_EQUATION, EQUATION_MAP, ELEMENTCOUNT, DEFAULT_WEIGHT_PARAMS, IDENTITY_MATRIX, PIXEL_SIZE, WEIGHT_SIZE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CHANGE_FLAGS", function() { return DEFAULT_CHANGE_FLAGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RUN_PARAMS", function() { return DEFAULT_RUN_PARAMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_32_BIT_FLOAT", function() { return MAX_32_BIT_FLOAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_BLEND_EQUATION", function() { return MIN_BLEND_EQUATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_BLEND_EQUATION", function() { return MAX_BLEND_EQUATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_MIN_BLEND_EQUATION", function() { return MAX_MIN_BLEND_EQUATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EQUATION_MAP", function() { return EQUATION_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELEMENTCOUNT", function() { return ELEMENTCOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_WEIGHT_PARAMS", function() { return DEFAULT_WEIGHT_PARAMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDENTITY_MATRIX", function() { return IDENTITY_MATRIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PIXEL_SIZE", function() { return PIXEL_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEIGHT_SIZE", function() { return WEIGHT_SIZE; });
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "@luma.gl/constants");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../aggregation-operation-utils */ "./src/utils/aggregation-operation-utils.js");


const DEFAULT_CHANGE_FLAGS = {
  dataChanged: true,
  viewportChanged: true,
  cellSizeChanged: true
};

const DEFAULT_RUN_PARAMS = {
  changeFlags: DEFAULT_CHANGE_FLAGS,
  projectPoints: false,
  useGPU: true,
  fp64: false,
  viewport: null,
  gridTransformMatrix: null,
  createBufferObjects: true
};

const MAX_32_BIT_FLOAT = 3.402823466e38;
const MIN_BLEND_EQUATION = [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MIN, _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FUNC_ADD];
const MAX_BLEND_EQUATION = [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX, _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FUNC_ADD];
const MAX_MIN_BLEND_EQUATION = [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MAX, _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.MIN];
const EQUATION_MAP = {
  [_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_1__["AGGREGATION_OPERATION"].SUM]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FUNC_ADD,
  [_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_1__["AGGREGATION_OPERATION"].MEAN]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FUNC_ADD,
  [_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_1__["AGGREGATION_OPERATION"].MIN]: MIN_BLEND_EQUATION,
  [_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_1__["AGGREGATION_OPERATION"].MAX]: MAX_BLEND_EQUATION
};

const ELEMENTCOUNT = 4;
const DEFAULT_WEIGHT_PARAMS = {
  size: 1,
  operation: _aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_1__["AGGREGATION_OPERATION"].SUM,
  needMin: false,
  needMax: false,
  combineMaxMin: false
};

const IDENTITY_MATRIX = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
const PIXEL_SIZE = 4; // RGBA32F
const WEIGHT_SIZE = 3;


/***/ }),

/***/ "./src/utils/gpu-grid-aggregation/gpu-grid-aggregator.js":
/*!***************************************************************!*\
  !*** ./src/utils/gpu-grid-aggregation/gpu-grid-aggregator.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GPUGridAggregator; });
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "@luma.gl/constants");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var viewport_mercator_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! viewport-mercator-project */ "../../node_modules/viewport-mercator-project/dist/esm/index.js");
/* harmony import */ var _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gpu-grid-aggregator-constants */ "./src/utils/gpu-grid-aggregation/gpu-grid-aggregator-constants.js");
/* harmony import */ var _aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../aggregation-operation-utils */ "./src/utils/aggregation-operation-utils.js");
/* harmony import */ var _aggregate_to_grid_vs_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aggregate-to-grid-vs.glsl */ "./src/utils/gpu-grid-aggregation/aggregate-to-grid-vs.glsl.js");
/* harmony import */ var _aggregate_to_grid_vs_64_glsl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aggregate-to-grid-vs-64.glsl */ "./src/utils/gpu-grid-aggregation/aggregate-to-grid-vs-64.glsl.js");
/* harmony import */ var _aggregate_to_grid_fs_glsl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./aggregate-to-grid-fs.glsl */ "./src/utils/gpu-grid-aggregation/aggregate-to-grid-fs.glsl.js");
/* harmony import */ var _aggregate_all_vs_64_glsl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./aggregate-all-vs-64.glsl */ "./src/utils/gpu-grid-aggregation/aggregate-all-vs-64.glsl.js");
/* harmony import */ var _aggregate_all_fs_glsl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./aggregate-all-fs.glsl */ "./src/utils/gpu-grid-aggregation/aggregate-all-fs.glsl.js");
/* harmony import */ var _transform_mean_vs_glsl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./transform-mean-vs.glsl */ "./src/utils/gpu-grid-aggregation/transform-mean-vs.glsl.js");
/* harmony import */ var _resource_utils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../resource-utils.js */ "./src/utils/resource-utils.js");




const {fp64ifyMatrix4} = _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["fp64"];












const BUFFER_NAMES = ['aggregationBuffer', 'maxMinBuffer', 'minBuffer', 'maxBuffer'];
const ARRAY_BUFFER_MAP = {
  maxData: 'maxBuffer',
  minData: 'minBuffer',
  maxMinData: 'maxMinBuffer'
};

class GPUGridAggregator {
  // Decode and return aggregation data of given pixel.
  static getAggregationData({aggregationData, maxData, minData, maxMinData, pixelIndex}) {
    const index = pixelIndex * _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_3__["PIXEL_SIZE"];
    const results = {};
    if (aggregationData) {
      results.cellCount = aggregationData[index + 3];
      results.cellWeight = aggregationData[index];
    }
    if (maxMinData) {
      results.maxCellWieght = maxMinData[0];
      results.minCellWeight = maxMinData[3];
    } else {
      if (maxData) {
        results.maxCellWieght = maxData[0];
        results.totalCount = maxData[3];
      }
      if (minData) {
        results.minCellWeight = minData[0];
        results.totalCount = maxData[3];
      }
    }
    return results;
  }

  // Decodes and retuns counts and weights of all cells
  static getCellData({countsData, size = 1}) {
    const numCells = countsData.length / 4;
    const cellWeights = new Float32Array(numCells * size);
    const cellCounts = new Uint32Array(numCells);
    for (let i = 0; i < numCells; i++) {
      // weights in RGB channels
      for (let sizeIndex = 0; sizeIndex < size; sizeIndex++) {
        cellWeights[i * size + sizeIndex] = countsData[i * 4 + sizeIndex];
      }
      // count in Alpha channel
      cellCounts[i] = countsData[i * 4 + 3];
    }
    return {cellCounts, cellWeights};
  }

  static isSupported(gl) {
    return (
      Object(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["isWebGL2"])(gl) &&
      Object(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["hasFeatures"])(
        gl,
        _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["FEATURES"].BLEND_EQUATION_MINMAX,
        _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["FEATURES"].COLOR_ATTACHMENT_RGBA32F,
        _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["FEATURES"].TEXTURE_FLOAT
      )
    );
  }

  // DEBUG ONLY
  // static logData({aggregationBuffer, minBuffer, maxBuffer, maxMinBuffer, limit = 10}) {
  //   if (aggregationBuffer) {
  //     console.log('Aggregation Data:');
  //     const agrData = aggregationBuffer.getData();
  //     for (let index = 0; index < agrData.length && limit > 0; index += 4) {
  //       if (agrData[index + 3] > 0) {
  //         console.log(
  //           `index: ${index} weights: ${agrData[index]} ${agrData[index + 1]} ${
  //             agrData[index + 2]
  //           } count: ${agrData[index + 3]}`
  //         );
  //         limit--;
  //       }
  //     }
  //   }
  //   const obj = {minBuffer, maxBuffer, maxMinBuffer};
  //   for (const key in obj) {
  //     if (obj[key]) {
  //       const data = obj[key].getData();
  //       console.log(`${key} data : R: ${data[0]} G: ${data[1]} B: ${data[2]} A: ${data[3]}`);
  //     }
  //   }
  // }

  constructor(gl, opts = {}) {
    this.id = opts.id || 'gpu-grid-aggregator';
    this.shaderCache = opts.shaderCache || null;
    this.gl = gl;
    this.state = {
      // cache weights and position data to process when data is not changed
      weights: null,
      gridPositions: null,
      positionsBuffer: null,
      positions64xyLowBuffer: null,
      vertexCount: 0,

      // flags/variables that affect the aggregation
      fp64: null,
      useGPU: null,
      numCol: 0,
      numRow: 0,
      windowSize: null,
      cellSize: null,

      // per weight GPU resources
      weightAttributes: {},
      textures: {},
      meanTextures: {},
      buffers: {},
      framebuffers: {},
      maxMinFramebuffers: {},
      minFramebuffers: {},
      maxFramebuffers: {},
      equations: {},

      // common resources to be deleted
      resources: {},

      // results
      results: {}
    };
    this._hasGPUSupport =
      Object(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["isWebGL2"])(gl) && // gl_InstanceID usage in min/max calculation shaders
      Object(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["hasFeatures"])(
        this.gl,
        _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["FEATURES"].BLEND_EQUATION_MINMAX, // set min/max blend modes
        _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["FEATURES"].COLOR_ATTACHMENT_RGBA32F, // render to float texture
        _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["FEATURES"].TEXTURE_FLOAT // sample from a float texture
      );
  }

  // Delete owned resources.
  /* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }] */
  delete() {
    const {gridAggregationModel, allAggregationModel, meanTransform} = this;
    const {
      positionsBuffer,
      positions64xyLowBuffer,
      textures,
      framebuffers,
      maxMinFramebuffers,
      minFramebuffers,
      maxFramebuffers,
      meanTextures,
      resources
    } = this.state;

    gridAggregationModel && gridAggregationModel.delete();
    allAggregationModel && allAggregationModel.delete();
    meanTransform && meanTransform.delete();

    positionsBuffer && positionsBuffer.delete();
    positions64xyLowBuffer && positions64xyLowBuffer.delete();
    this.deleteResources([
      framebuffers,
      textures,
      maxMinFramebuffers,
      minFramebuffers,
      maxFramebuffers,
      meanTextures,
      resources
    ]);
  }

  // Perform aggregation and retun the results
  run(opts = {}) {
    // reset results
    this.setState({results: {}});
    const aggregationParams = this.getAggregationParams(opts);
    this.updateGridSize(aggregationParams);
    const {useGPU} = aggregationParams;
    if (this._hasGPUSupport && useGPU) {
      return this.runAggregationOnGPU(aggregationParams);
    }
    if (useGPU) {
      _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["log"].warn('GPUGridAggregator: GPU Aggregation not supported, falling back to CPU')();
    }
    return this.runAggregationOnCPU(aggregationParams);
  }

  // Reads aggregation data into JS Array object
  // For WebGL1, data is available in JS Array objects already.
  // For WebGL2, data is read from Buffer objects and cached for subsequent queries.
  getData(weightId) {
    const data = {};
    const results = this.state.results;
    if (!results[weightId].aggregationData) {
      // cache the results if reading from the buffer (WebGL2 path)
      results[weightId].aggregationData = results[weightId].aggregationBuffer.getData();
    }
    data.aggregationData = results[weightId].aggregationData;

    // Check for optional results
    for (const arrayName in ARRAY_BUFFER_MAP) {
      const bufferName = ARRAY_BUFFER_MAP[arrayName];

      if (results[weightId][arrayName] || results[weightId][bufferName]) {
        // cache the result
        results[weightId][arrayName] =
          results[weightId][arrayName] || results[weightId][bufferName].getData();
        data[arrayName] = results[weightId][arrayName];
      }
    }
    return data;
  }

  // PRIVATE

  deleteResources(resources) {
    resources = Array.isArray(resources) ? resources : [resources];
    resources.forEach(obj => {
      for (const name in obj) {
        obj[name].delete();
      }
    });
  }

  getAggregationParams(opts) {
    const aggregationParams = Object.assign({}, _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_RUN_PARAMS"], opts);
    const {
      useGPU,
      gridTransformMatrix,
      viewport,
      weights,
      projectPoints,
      cellSize
    } = aggregationParams;
    if (this.state.useGPU !== useGPU) {
      // CPU/GPU resources need to reinitialized, force set the change flags.
      aggregationParams.changeFlags = Object.assign(
        {},
        aggregationParams.changeFlags,
        _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_CHANGE_FLAGS"]
      );
    }
    if (
      cellSize &&
      (!this.state.cellSize ||
        this.state.cellSize[0] !== cellSize[0] ||
        this.state.cellSize[1] !== cellSize[1])
    ) {
      aggregationParams.changeFlags.cellSizeChanged = true;
      // For GridLayer aggregation, cellSize is calculated by parsing all input data as it depends
      // on bounding box, cache cellSize
      this.setState({cellSize});
    }

    this.validateProps(aggregationParams, opts);

    this.setState({useGPU});
    aggregationParams.gridTransformMatrix =
      (projectPoints ? viewport.viewportMatrix : gridTransformMatrix) || _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_3__["IDENTITY_MATRIX"];

    if (weights) {
      aggregationParams.weights = this.normalizeWeightParams(weights);

      // cache weights to process when only cellSize or viewport is changed.
      // position data is cached in Buffers for GPU case and in 'gridPositions' for CPU case.
      this.setState({weights: aggregationParams.weights});
    }
    return aggregationParams;
  }

  normalizeWeightParams(weights) {
    const result = {};
    for (const id in weights) {
      result[id] = Object.assign({}, _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_WEIGHT_PARAMS"], weights[id]);
    }
    return result;
  }

  // Update priveate state
  setState(updateObject) {
    Object.assign(this.state, updateObject);
  }

  shouldTransformToGrid(opts) {
    const {projectPoints, changeFlags} = opts;
    if (
      !this.state.gridPositions ||
      changeFlags.dataChanged ||
      (projectPoints && changeFlags.viewportChanged) // world space aggregation (GridLayer) doesn't change when viewport is changed.
    ) {
      return true;
    }
    return false;
  }

  updateGridSize(opts) {
    const {viewport, cellSize} = opts;
    const width = opts.width || viewport.width;
    const height = opts.height || viewport.height;
    const numCol = Math.ceil(width / cellSize[0]);
    const numRow = Math.ceil(height / cellSize[1]);
    this.setState({numCol, numRow, windowSize: [width, height]});
  }

  /* eslint-disable complexity */
  // validate and log.assert
  validateProps(aggregationParams, opts) {
    const {changeFlags, projectPoints, gridTransformMatrix} = aggregationParams;
    _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["log"].assert(
      changeFlags.dataChanged || changeFlags.viewportChanged || changeFlags.cellSizeChanged
    );

    // log.assert for required options
    _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["log"].assert(
      !changeFlags.dataChanged ||
        (opts.positions &&
          opts.weights &&
          (!opts.projectPositions || opts.viewport) &&
          opts.cellSize)
    );
    _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["log"].assert(!changeFlags.cellSizeChanged || opts.cellSize);

    // viewport is needed only when performing screen space aggregation (projectPoints is true)
    _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["log"].assert(!(changeFlags.viewportChanged && projectPoints) || opts.viewport);

    if (projectPoints && gridTransformMatrix) {
      _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["log"].warn('projectPoints is true, gridTransformMatrix is ignored')();
    }
  }
  /* eslint-enable complexity */

  // CPU Aggregation methods

  // aggregated weight value to a cell
  /* eslint-disable max-depth */
  calculateAggregationData(opts) {
    const {weights, results, cellIndex, posIndex} = opts;
    for (const id in weights) {
      const {values, size, operation} = weights[id];
      const {aggregationData} = results[id];

      // Fill RGB with weights
      for (let sizeIndex = 0; sizeIndex < size; sizeIndex++) {
        const cellElementIndex = cellIndex + sizeIndex;
        const weightComponent = values[posIndex * _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_3__["WEIGHT_SIZE"] + sizeIndex];

        if (aggregationData[cellIndex + 3] === 0) {
          // if the cell is getting update the first time, set the value directly.
          aggregationData[cellElementIndex] = weightComponent;
        } else {
          switch (operation) {
            case _aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_4__["AGGREGATION_OPERATION"].SUM:
            case _aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_4__["AGGREGATION_OPERATION"].MEAN:
              aggregationData[cellElementIndex] += weightComponent;
              // MEAN value is calculated during 'calculateMeanMaxMinData'
              break;
            case _aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_4__["AGGREGATION_OPERATION"].MIN:
              aggregationData[cellElementIndex] = Math.min(
                aggregationData[cellElementIndex],
                weightComponent
              );
              break;
            case _aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_4__["AGGREGATION_OPERATION"].MAX:
              aggregationData[cellElementIndex] = Math.max(
                aggregationData[cellElementIndex],
                weightComponent
              );
              break;
            default:
              // Not a valid operation enum.
              _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["log"].assert(false);
              break;
          }
        }
      }

      // Track the count per grid-cell
      aggregationData[cellIndex + 3]++;
    }
  }

  /* eslint-disable max-depth, complexity */
  calculateMeanMaxMinData(opts) {
    const {validCellIndices, results, weights} = opts;

    // collect max/min values
    validCellIndices.forEach(cellIndex => {
      for (const id in results) {
        const {size, needMin, needMax, operation} = weights[id];
        const {aggregationData, minData, maxData, maxMinData} = results[id];
        const calculateMinMax = needMin || needMax;
        const calculateMean = operation === _aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_4__["AGGREGATION_OPERATION"].MEAN;
        const combineMaxMin = needMin && needMax && weights[id].combineMaxMin;
        const count = aggregationData[cellIndex + _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_3__["ELEMENTCOUNT"] - 1];
        for (
          let sizeIndex = 0;
          sizeIndex < size && (calculateMinMax || calculateMean);
          sizeIndex++
        ) {
          const cellElementIndex = cellIndex + sizeIndex;
          let weight = aggregationData[cellElementIndex];
          if (calculateMean) {
            aggregationData[cellElementIndex] /= count;
            weight = aggregationData[cellElementIndex];
          }
          if (combineMaxMin) {
            // use RGB for max values for 3 weights.
            maxMinData[sizeIndex] = Math.max(maxMinData[sizeIndex], weight);
          } else {
            if (needMin) {
              minData[sizeIndex] = Math.min(minData[sizeIndex], weight);
            }
            if (needMax) {
              maxData[sizeIndex] = Math.max(maxData[sizeIndex], weight);
            }
          }
        }
        // update total aggregation values.
        if (combineMaxMin) {
          // Use Alpha channel to store total min value for weight#0
          maxMinData[_gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_3__["ELEMENTCOUNT"] - 1] = Math.min(
            maxMinData[_gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_3__["ELEMENTCOUNT"] - 1],
            aggregationData[cellIndex + 0]
          );
        } else {
          // Use Alpha channel to store total counts.
          if (needMin) {
            minData[_gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_3__["ELEMENTCOUNT"] - 1] += count;
          }
          if (needMax) {
            maxData[_gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_3__["ELEMENTCOUNT"] - 1] += count;
          }
        }
      }
    });
  }
  /* eslint-enable max-depth */

  initCPUResults(opts) {
    const weights = opts.weights || this.state.weights;
    const {numCol, numRow} = this.state;
    const results = {};
    // setup results object
    for (const id in weights) {
      let {aggregationData, minData, maxData, maxMinData} = weights[id];
      const {needMin, needMax} = weights[id];
      const combineMaxMin = needMin && needMax && weights[id].combineMaxMin;

      const aggregationSize = numCol * numRow * _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_3__["ELEMENTCOUNT"];
      aggregationData = Object(_resource_utils_js__WEBPACK_IMPORTED_MODULE_11__["getFloatArray"])(aggregationData, aggregationSize);
      if (combineMaxMin) {
        maxMinData = Object(_resource_utils_js__WEBPACK_IMPORTED_MODULE_11__["getFloatArray"])(maxMinData, _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_3__["ELEMENTCOUNT"]);
        // RGB for max value
        maxMinData.fill(-Infinity, 0, _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_3__["ELEMENTCOUNT"] - 1);
        // Alpha for min value
        maxMinData[_gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_3__["ELEMENTCOUNT"] - 1] = Infinity;
      } else {
        // RGB for min/max values
        // Alpha for total count
        if (needMin) {
          minData = Object(_resource_utils_js__WEBPACK_IMPORTED_MODULE_11__["getFloatArray"])(minData, _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_3__["ELEMENTCOUNT"], Infinity);
          minData[_gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_3__["ELEMENTCOUNT"] - 1] = 0;
        }
        if (needMax) {
          maxData = Object(_resource_utils_js__WEBPACK_IMPORTED_MODULE_11__["getFloatArray"])(maxData, _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_3__["ELEMENTCOUNT"], -Infinity);
          maxData[_gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_3__["ELEMENTCOUNT"] - 1] = 0;
        }
      }
      results[id] = Object.assign({}, weights[id], {
        aggregationData,
        minData,
        maxData,
        maxMinData
      });
    }
    return results;
  }

  /* eslint-disable max-statements */
  runAggregationOnCPU(opts) {
    const {positions, cellSize, gridTransformMatrix, viewport, projectPoints} = opts;
    let {weights} = opts;
    const {numCol, numRow} = this.state;
    const results = this.initCPUResults(opts);
    // screen space or world space projection required
    const gridTransformRequired = this.shouldTransformToGrid(opts);
    let gridPositions;
    const pos = [0, 0, 0];

    _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["log"].assert(gridTransformRequired || opts.changeFlags.cellSizeChanged);

    let posCount;
    if (gridTransformRequired) {
      posCount = positions.length / 2;
      gridPositions = new Float64Array(positions.length);
      this.setState({gridPositions});
    } else {
      gridPositions = this.state.gridPositions;
      weights = this.state.weights;
      posCount = gridPositions.length / 2;
    }

    const validCellIndices = new Set();
    for (let posIndex = 0; posIndex < posCount; posIndex++) {
      let x;
      let y;
      if (gridTransformRequired) {
        pos[0] = positions[posIndex * 2];
        pos[1] = positions[posIndex * 2 + 1];
        if (projectPoints) {
          [x, y] = viewport.project(pos);
        } else {
          [x, y] = Object(viewport_mercator_project__WEBPACK_IMPORTED_MODULE_2__["worldToPixels"])(pos, gridTransformMatrix);
        }
        gridPositions[posIndex * 2] = x;
        gridPositions[posIndex * 2 + 1] = y;
      } else {
        x = gridPositions[posIndex * 2];
        y = gridPositions[posIndex * 2 + 1];
      }

      const colId = Math.floor(x / cellSize[0]);
      const rowId = Math.floor(y / cellSize[1]);
      if (colId >= 0 && colId < numCol && rowId >= 0 && rowId < numRow) {
        const cellIndex = (colId + rowId * numCol) * _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_3__["ELEMENTCOUNT"];
        validCellIndices.add(cellIndex);
        this.calculateAggregationData({weights, results, cellIndex, posIndex});
      }
    }

    this.calculateMeanMaxMinData({validCellIndices, results, weights});

    // Update buffer objects.
    this.updateAggregationBuffers(opts, results);

    this.setState({results});
    return results;
  }
  /* eslint-disable max-statements */

  updateCPUResultBuffer({gl, bufferName, id, data, result}) {
    const {resources} = this.state;
    const resourceName = `cpu-result-${id}-${bufferName}`;
    result[bufferName] = result[bufferName] || resources[resourceName];
    if (result[bufferName]) {
      result[bufferName].setData({data});
    } else {
      // save resource for garbage collection
      resources[resourceName] = new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["Buffer"](gl, data);
      result[bufferName] = resources[resourceName];
    }
  }

  updateAggregationBuffers(opts, results) {
    if (!opts.createBufferObjects) {
      return;
    }
    const weights = opts.weights || this.state.weights;
    for (const id in results) {
      const {aggregationData, minData, maxData, maxMinData} = results[id];
      const {needMin, needMax} = weights[id];
      const combineMaxMin = needMin && needMax && weights[id].combineMaxMin;
      this.updateCPUResultBuffer({
        gl: this.gl,
        bufferName: 'aggregationBuffer',
        id,
        data: aggregationData,
        result: results[id]
      });
      if (combineMaxMin) {
        this.updateCPUResultBuffer({
          gl: this.gl,
          bufferName: 'maxMinBuffer',
          id,
          data: maxMinData,
          result: results[id]
        });
      } else {
        if (needMin) {
          this.updateCPUResultBuffer({
            gl: this.gl,
            bufferName: 'minBuffer',
            id,
            data: minData,
            result: results[id]
          });
        }
        if (needMax) {
          this.updateCPUResultBuffer({
            gl: this.gl,
            bufferName: 'maxBuffer',
            id,
            data: maxData,
            result: results[id]
          });
        }
      }
    }
  }

  // GPU Aggregation methods

  getAggregateData(opts) {
    const results = {};
    const {
      textures,
      framebuffers,
      maxMinFramebuffers,
      minFramebuffers,
      maxFramebuffers,
      weights
    } = this.state;

    for (const id in weights) {
      results[id] = {};
      const {needMin, needMax, combineMaxMin} = weights[id];
      results[id].aggregationTexture = textures[id];
      results[id].aggregationBuffer = Object(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["readPixelsToBuffer"])(framebuffers[id], {
        target: weights[id].aggregationBuffer, // update if a buffer is provided
        sourceType: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FLOAT
      });
      if (needMin && needMax && combineMaxMin) {
        results[id].maxMinBuffer = Object(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["readPixelsToBuffer"])(maxMinFramebuffers[id], {
          target: weights[id].maxMinBuffer, // update if a buffer is provided
          sourceType: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FLOAT
        });
      } else {
        if (needMin) {
          results[id].minBuffer = Object(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["readPixelsToBuffer"])(minFramebuffers[id], {
            target: weights[id].minBuffer, // update if a buffer is provided
            sourceType: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FLOAT
          });
        }
        if (needMax) {
          results[id].maxBuffer = Object(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["readPixelsToBuffer"])(maxFramebuffers[id], {
            target: weights[id].maxBuffer, // update if a buffer is provided
            sourceType: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FLOAT
          });
        }
      }
    }
    this.trackGPUResultBuffers(results, weights);
    return results;
  }

  getAggregationModel(fp64 = false) {
    const {gl, shaderCache} = this;
    return new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["Model"](gl, {
      id: 'Gird-Aggregation-Model',
      vs: fp64 ? _aggregate_to_grid_vs_64_glsl__WEBPACK_IMPORTED_MODULE_6__["default"] : _aggregate_to_grid_vs_glsl__WEBPACK_IMPORTED_MODULE_5__["default"],
      fs: _aggregate_to_grid_fs_glsl__WEBPACK_IMPORTED_MODULE_7__["default"],
      modules: fp64 ? [_deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["project64"]] : ['project32'],
      shaderCache,
      vertexCount: 0,
      drawMode: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.POINTS
    });
  }

  getAllAggregationModel() {
    const {gl, shaderCache} = this;
    const {numCol, numRow} = this.state;
    return new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["Model"](gl, {
      id: 'All-Aggregation-Model',
      vs: _aggregate_all_vs_64_glsl__WEBPACK_IMPORTED_MODULE_8__["default"],
      fs: _aggregate_all_fs_glsl__WEBPACK_IMPORTED_MODULE_9__["default"],
      modules: [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["fp64"]],
      shaderCache,
      vertexCount: 1,
      drawMode: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.POINTS,
      isInstanced: true,
      instanceCount: numCol * numRow,
      attributes: {
        position: [0, 0]
      }
    });
  }

  getMeanTransform(opts) {
    if (this.meanTransform) {
      this.meanTransform.update(opts);
    } else {
      this.meanTransform = new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["Transform"](
        this.gl,
        Object.assign(
          {},
          {
            vs: _transform_mean_vs_glsl__WEBPACK_IMPORTED_MODULE_10__["default"],
            _targetTextureVarying: 'meanValues'
          },
          opts
        )
      );
    }
    return this.meanTransform;
  }

  renderAggregateData(opts) {
    const {cellSize, viewport, gridTransformMatrix, projectPoints} = opts;
    const {
      numCol,
      numRow,
      windowSize,
      maxMinFramebuffers,
      minFramebuffers,
      maxFramebuffers,
      weights
    } = this.state;

    const uProjectionMatrixFP64 = fp64ifyMatrix4(gridTransformMatrix);
    const gridSize = [numCol, numRow];
    const parameters = {
      blend: true,
      depthTest: false,
      blendFunc: [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.ONE, _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.ONE]
    };
    const moduleSettings = {viewport};
    const uniforms = {
      windowSize,
      cellSize,
      gridSize,
      uProjectionMatrix: gridTransformMatrix,
      uProjectionMatrixFP64,
      projectPoints
    };

    for (const id in weights) {
      const {needMin, needMax} = weights[id];
      const combineMaxMin = needMin && needMax && weights[id].combineMaxMin;
      this.renderToWeightsTexture({id, parameters, moduleSettings, uniforms, gridSize});
      if (combineMaxMin) {
        this.renderToMaxMinTexture({
          id,
          parameters: Object.assign({}, parameters, {blendEquation: _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_3__["MAX_MIN_BLEND_EQUATION"]}),
          gridSize,
          minOrMaxFb: maxMinFramebuffers[id],
          clearParams: {clearColor: [0, 0, 0, _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_3__["MAX_32_BIT_FLOAT"]]},
          combineMaxMin
        });
      } else {
        if (needMin) {
          this.renderToMaxMinTexture({
            id,
            parameters: Object.assign({}, parameters, {blendEquation: _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_3__["MIN_BLEND_EQUATION"]}),
            gridSize,
            minOrMaxFb: minFramebuffers[id],
            clearParams: {clearColor: [_gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_3__["MAX_32_BIT_FLOAT"], _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_3__["MAX_32_BIT_FLOAT"], _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_3__["MAX_32_BIT_FLOAT"], 0]},
            combineMaxMin
          });
        }
        if (needMax) {
          this.renderToMaxMinTexture({
            id,
            parameters: Object.assign({}, parameters, {blendEquation: _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_3__["MAX_BLEND_EQUATION"]}),
            gridSize,
            minOrMaxFb: maxFramebuffers[id],
            combineMaxMin
          });
        }
      }
    }
  }

  // render all aggregated grid-cells to generate Min, Max or MaxMin data texture
  renderToMaxMinTexture(opts) {
    const {id, parameters, gridSize, minOrMaxFb, combineMaxMin, clearParams = {}} = opts;
    const {framebuffers} = this.state;
    const {gl, allAggregationModel} = this;

    minOrMaxFb.bind();
    gl.viewport(0, 0, gridSize[0], gridSize[1]);
    Object(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["withParameters"])(gl, clearParams, () => {
      gl.clear(gl.COLOR_BUFFER_BIT);
    });
    allAggregationModel.draw({
      parameters,
      uniforms: {
        uSampler: framebuffers[id].texture,
        gridSize,
        combineMaxMin
      }
    });
    minOrMaxFb.unbind();
  }

  // render all data points to aggregate weights
  renderToWeightsTexture(opts) {
    const {id, parameters, moduleSettings, uniforms, gridSize} = opts;
    const {framebuffers, equations, weightAttributes, weights} = this.state;
    const {gl, gridAggregationModel} = this;
    const {operation} = weights[id];

    framebuffers[id].bind();
    gl.viewport(0, 0, gridSize[0], gridSize[1]);
    const clearColor =
      operation === _aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_4__["AGGREGATION_OPERATION"].MIN
        ? [_gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_3__["MAX_32_BIT_FLOAT"], _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_3__["MAX_32_BIT_FLOAT"], _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_3__["MAX_32_BIT_FLOAT"], 0]
        : [0, 0, 0, 0];
    Object(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["withParameters"])(gl, {clearColor}, () => {
      gl.clear(gl.COLOR_BUFFER_BIT);
    });

    const attributes = {weights: weightAttributes[id]};
    gridAggregationModel.draw({
      parameters: Object.assign({}, parameters, {blendEquation: equations[id]}),
      moduleSettings,
      uniforms,
      attributes
    });
    framebuffers[id].unbind();

    if (operation === _aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_4__["AGGREGATION_OPERATION"].MEAN) {
      const {meanTextures, textures} = this.state;
      const transformOptions = {
        _sourceTextures: {aggregationValues: meanTextures[id]}, // contains aggregated data
        _targetTexture: textures[id], // store mean values,
        elementCount: textures[id].width * textures[id].height
      };
      const meanTransform = this.getMeanTransform(transformOptions);
      meanTransform.run({
        parameters: {
          blend: false,
          depthTest: false
        }
      });

      // update framebuffer with mean results so readPixelsToBuffer returns mean values
      framebuffers[id].attach({[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COLOR_ATTACHMENT0]: textures[id]});
    }
  }

  runAggregationOnGPU(opts) {
    this.updateModels(opts);
    this.setupFramebuffers(opts);
    this.renderAggregateData(opts);
    const results = this.getAggregateData(opts);
    this.setState({results});
    return results;
  }

  // set up framebuffer for each weight
  /* eslint-disable complexity, max-depth */
  setupFramebuffers(opts) {
    const {
      numCol,
      numRow,
      textures,
      framebuffers,
      maxMinFramebuffers,
      minFramebuffers,
      maxFramebuffers,
      resources,
      meanTextures,
      equations,
      weights
    } = this.state;
    const framebufferSize = {width: numCol, height: numRow};
    for (const id in weights) {
      const {needMin, needMax, combineMaxMin, operation} = weights[id];
      textures[id] =
        weights[id].aggregationTexture ||
        textures[id] ||
        Object(_resource_utils_js__WEBPACK_IMPORTED_MODULE_11__["getFloatTexture"])(this.gl, {id: `${id}-texture`, width: numCol, height: numRow});
      textures[id].resize(framebufferSize);
      let texture = textures[id];
      if (operation === _aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_4__["AGGREGATION_OPERATION"].MEAN) {
        // For MEAN, we first aggregatet into a temp texture
        meanTextures[id] =
          meanTextures[id] ||
          Object(_resource_utils_js__WEBPACK_IMPORTED_MODULE_11__["getFloatTexture"])(this.gl, {id: `${id}-mean-texture`, width: numCol, height: numRow});
        meanTextures[id].resize(framebufferSize);
        texture = meanTextures[id];
      }
      if (framebuffers[id]) {
        framebuffers[id].attach({[_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COLOR_ATTACHMENT0]: texture});
      } else {
        framebuffers[id] = Object(_resource_utils_js__WEBPACK_IMPORTED_MODULE_11__["getFramebuffer"])(this.gl, {
          id: `${id}-fb`,
          width: numCol,
          height: numRow,
          texture
        });
      }
      framebuffers[id].resize(framebufferSize);
      equations[id] = _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_3__["EQUATION_MAP"][operation];
      // For min/max framebuffers will use default size 1X1
      if (needMin || needMax) {
        if (needMin && needMax && combineMaxMin) {
          if (!maxMinFramebuffers[id]) {
            resources[`${id}-maxMin`] = Object(_resource_utils_js__WEBPACK_IMPORTED_MODULE_11__["getFloatTexture"])(this.gl, {id: `${id}-maxMinTex`});
            maxMinFramebuffers[id] = Object(_resource_utils_js__WEBPACK_IMPORTED_MODULE_11__["getFramebuffer"])(this.gl, {
              id: `${id}-maxMinFb`,
              texture: resources[`${id}-maxMin`]
            });
          }
        } else {
          if (needMin) {
            if (!minFramebuffers[id]) {
              resources[`${id}-min`] = Object(_resource_utils_js__WEBPACK_IMPORTED_MODULE_11__["getFloatTexture"])(this.gl, {id: `${id}-minTex`});
              minFramebuffers[id] = Object(_resource_utils_js__WEBPACK_IMPORTED_MODULE_11__["getFramebuffer"])(this.gl, {
                id: `${id}-minFb`,
                texture: resources[`${id}-min`]
              });
            }
          }
          if (needMax) {
            if (!maxFramebuffers[id]) {
              resources[`${id}-max`] = Object(_resource_utils_js__WEBPACK_IMPORTED_MODULE_11__["getFloatTexture"])(this.gl, {id: `${id}-maxTex`});
              maxFramebuffers[id] = Object(_resource_utils_js__WEBPACK_IMPORTED_MODULE_11__["getFramebuffer"])(this.gl, {
                id: `${id}-maxFb`,
                texture: resources[`${id}-max`]
              });
            }
          }
        }
      }
    }
  }
  /* eslint-enable complexity, max-depth */

  setupModels(fp64 = false) {
    if (this.gridAggregationModel) {
      this.gridAggregationModel.delete();
    }
    this.gridAggregationModel = this.getAggregationModel(fp64);
    if (!this.allAggregationModel) {
      // Model doesn't have to change when fp64 flag changes
      this.allAggregationModel = this.getAllAggregationModel();
    }
  }

  // set up buffers for all weights
  setupWeightAttributes(opts) {
    const {weightAttributes, vertexCount, weights, resources} = this.state;
    for (const id in weights) {
      const {values} = weights[id];
      // values can be Array, Float32Array or Buffer
      if (Array.isArray(values) || values.constructor === Float32Array) {
        _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["log"].assert(values.length / 3 === vertexCount);
        const typedArray = Array.isArray(values) ? new Float32Array(values) : values;
        if (weightAttributes[id] instanceof _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["Buffer"]) {
          weightAttributes[id].setData(typedArray);
        } else {
          resources[`${id}-buffer`] = new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["Buffer"](this.gl, typedArray);
          weightAttributes[id] = resources[`${id}-buffer`];
        }
      } else {
        // log.assert((values instanceof Attribute) || (values instanceof Buffer));
        _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["log"].assert(values instanceof _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["Buffer"]);
        weightAttributes[id] = values;
      }
    }
  }

  // GPU Aggregation results are provided in Buffers, if new Buffer objects are created track them for later deletion.
  /* eslint-disable max-depth */
  trackGPUResultBuffers(results, weights) {
    const {resources} = this.state;
    for (const id in results) {
      if (results[id]) {
        for (const bufferName of BUFFER_NAMES) {
          if (results[id][bufferName] && weights[id][bufferName] !== results[id][bufferName]) {
            // No result buffer is provided in weights object, `readPixelsToBuffer` has created a new Buffer object
            // collect the new buffer for garabge collection
            const name = `gpu-result-${id}-${bufferName}`;
            if (resources[name]) {
              resources[name].delete();
            }
            resources[name] = results[id][bufferName];
          }
        }
      }
    }
  }
  /* eslint-enable max-depth */

  /* eslint-disable max-statements */
  updateModels(opts) {
    const {gl} = this;
    const {positions, positions64xyLow, changeFlags} = opts;
    const {numCol, numRow} = this.state;
    const aggregationModelAttributes = {};
    let modelDirty = false;

    if (opts.fp64 !== this.state.fp64) {
      this.setupModels(opts.fp64);
      this.setState({fp64: opts.fp64});
      modelDirty = true;
    }

    if (changeFlags.dataChanged || !this.state.positionsBuffer) {
      let {positionsBuffer, positions64xyLowBuffer} = this.state;
      if (positionsBuffer) {
        positionsBuffer.delete();
      }
      if (positions64xyLowBuffer) {
        positions64xyLowBuffer.delete();
      }
      const vertexCount = positions.length / 2;
      positionsBuffer = new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["Buffer"](gl, new Float32Array(positions));
      positions64xyLowBuffer = new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["Buffer"](gl, {
        data: new Float32Array(positions64xyLow),
        accessor: {size: 2}
      });
      this.setState({positionsBuffer, positions64xyLowBuffer, vertexCount});

      this.setupWeightAttributes(opts);
      modelDirty = true;
    }

    if (modelDirty) {
      const {vertexCount, positionsBuffer, positions64xyLowBuffer} = this.state;
      aggregationModelAttributes.positions = positionsBuffer;
      if (opts.fp64) {
        aggregationModelAttributes.positions64xyLow = positions64xyLowBuffer;
      }
      this.gridAggregationModel.setVertexCount(vertexCount);
      this.gridAggregationModel.setAttributes(aggregationModelAttributes);
    }

    if (changeFlags.cellSizeChanged || changeFlags.viewportChanged) {
      this.allAggregationModel.setInstanceCount(numCol * numRow);
    }
  }
  /* eslint-enable max-statements */
}


/***/ }),

/***/ "./src/utils/gpu-grid-aggregation/grid-aggregation-utils.js":
/*!******************************************************************!*\
  !*** ./src/utils/gpu-grid-aggregation/grid-aggregation-utils.js ***!
  \******************************************************************/
/*! exports provided: pointToDensityGridData, alignToCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointToDensityGridData", function() { return pointToDensityGridData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignToCell", function() { return alignToCell; });
/* harmony import */ var math_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! math.gl */ "../../node_modules/math.gl/dist/esm/index.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @luma.gl/core */ "@luma.gl/constants");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_2__);



const {count} = _deck_gl_core__WEBPACK_IMPORTED_MODULE_2__["experimental"];
const {fp64LowPart} = _luma_gl_core__WEBPACK_IMPORTED_MODULE_1__["fp64"];

const R_EARTH = 6378000;

function toFinite(n) {
  return Number.isFinite(n) ? n : 0;
}

// Takes data and aggregation params and returns aggregated data.
function pointToDensityGridData({
  data,
  getPosition,
  cellSizeMeters,
  gpuGridAggregator,
  gpuAggregation,
  aggregationFlags,
  weightParams,
  fp64 = false,
  coordinateSystem = _deck_gl_core__WEBPACK_IMPORTED_MODULE_2__["COORDINATE_SYSTEM"].LNGLAT,
  viewport = null,
  boundingBox = null
}) {
  let gridData = {};
  if (aggregationFlags.dataChanged) {
    gridData = parseGridData(data, getPosition, weightParams);
    boundingBox = gridData.boundingBox;
  }
  let cellSize = [cellSizeMeters, cellSizeMeters];
  let worldOrigin = [0, 0];
  _deck_gl_core__WEBPACK_IMPORTED_MODULE_2__["log"].assert(
    coordinateSystem === _deck_gl_core__WEBPACK_IMPORTED_MODULE_2__["COORDINATE_SYSTEM"].LNGLAT || coordinateSystem === _deck_gl_core__WEBPACK_IMPORTED_MODULE_2__["COORDINATE_SYSTEM"].IDENTITY
  );

  switch (coordinateSystem) {
    case _deck_gl_core__WEBPACK_IMPORTED_MODULE_2__["COORDINATE_SYSTEM"].LNGLAT:
    case _deck_gl_core__WEBPACK_IMPORTED_MODULE_2__["COORDINATE_SYSTEM"].LNGLAT_DEPRECATED:
      const gridOffset = getGridOffset(boundingBox, cellSizeMeters);
      cellSize = [gridOffset.xOffset, gridOffset.yOffset];
      worldOrigin = [-180, -90]; // Origin used to define grid cell boundaries
      break;
    case _deck_gl_core__WEBPACK_IMPORTED_MODULE_2__["COORDINATE_SYSTEM"].IDENTITY:
      const {width, height} = viewport;
      worldOrigin = [-width / 2, -height / 2]; // Origin used to define grid cell boundaries
      break;
    default:
      // Currently other coodinate systems not supported/verified.
      _deck_gl_core__WEBPACK_IMPORTED_MODULE_2__["log"].assert(false);
  }

  const opts = getGPUAggregationParams({boundingBox, cellSize, worldOrigin});

  const aggregatedData = gpuGridAggregator.run({
    positions: gridData.positions,
    positions64xyLow: gridData.positions64xyLow,
    weights: gridData.weights,
    cellSize,
    width: opts.width,
    height: opts.height,
    gridTransformMatrix: opts.gridTransformMatrix,
    useGPU: gpuAggregation,
    changeFlags: aggregationFlags,
    fp64
  });

  return {
    weights: aggregatedData,
    gridSize: opts.gridSize,
    gridOrigin: opts.gridOrigin,
    cellSize,
    boundingBox
  };
}

// Parse input data to build positions, wights and bounding box.
/* eslint-disable max-statements */
function parseGridData(data, getPosition, weightParams) {
  const pointCount = count(data);

  // For CPU Aggregation this needs to have full 64 bit precession, hence don't use FLoat32Array
  // For GPU Aggregation this will be converted into Float32Array
  const positions = new Float64Array(pointCount * 2);
  const positions64xyLow = new Float32Array(pointCount * 2);

  let yMin = Infinity;
  let yMax = -Infinity;
  let xMin = Infinity;
  let xMax = -Infinity;
  let y;
  let x;

  const weights = {};
  for (const name in weightParams) {
    weights[name] = Object.assign({}, weightParams[name], {
      values: new Float32Array(pointCount * 3)
    });
  }

  const {iterable, objectInfo} = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_2__["createIterable"])(data);
  for (const object of iterable) {
    objectInfo.index++;
    const position = getPosition(object, objectInfo);
    const {index} = objectInfo;
    x = position[0];
    y = position[1];
    positions[index * 2] = x;
    positions[index * 2 + 1] = y;

    positions64xyLow[index * 2] = fp64LowPart(x);
    positions64xyLow[index * 2 + 1] = fp64LowPart(y);

    for (const name in weightParams) {
      const weight = weightParams[name].getWeight(object);

      // Aggregator expects each weight is an array of size 3
      if (Array.isArray(weight)) {
        weights[name].values[index * 3] = weight[0];
        weights[name].values[index * 3 + 1] = weight[1];
        weights[name].values[index * 3 + 2] = weight[2];
      } else {
        // backward compitability
        weights[name].values[index * 3] = weight;
      }
    }

    if (Number.isFinite(y) && Number.isFinite(x)) {
      yMin = y < yMin ? y : yMin;
      yMax = y > yMax ? y : yMax;

      xMin = x < xMin ? x : xMin;
      xMax = x > xMax ? x : xMax;
    }
  }

  const boundingBox = {
    xMin: toFinite(xMin),
    xMax: toFinite(xMax),
    yMin: toFinite(yMin),
    yMax: toFinite(yMax)
  };
  return {
    positions,
    positions64xyLow,
    weights,
    boundingBox
  };
}
/* eslint-enable max-statements */

/**
 * Based on geometric center of sample points, calculate cellSize in lng/lat (degree) space
 * @param {object} gridData - contains bounding box of data
 * @param {number} cellSize - grid cell size in meters
 * @returns {yOffset, xOffset} - cellSize size lng/lat (degree) space.
 */

function getGridOffset(boundingBox, cellSize) {
  const {yMin, yMax} = boundingBox;
  const latMin = yMin;
  const latMax = yMax;
  const centerLat = (latMin + latMax) / 2;

  return calculateGridLatLonOffset(cellSize, centerLat);
}

/**
 * calculate grid layer cell size in lat lon based on world unit size
 * and current latitude
 * @param {number} cellSize
 * @param {number} latitude
 * @returns {object} - lat delta and lon delta
 */
function calculateGridLatLonOffset(cellSize, latitude) {
  const yOffset = calculateLatOffset(cellSize);
  const xOffset = calculateLonOffset(latitude, cellSize);
  return {yOffset, xOffset};
}

/**
 * with a given x-km change, calculate the increment of latitude
 * based on stackoverflow http://stackoverflow.com/questions/7477003
 * @param {number} dy - change in km
 * @return {number} - increment in latitude
 */
function calculateLatOffset(dy) {
  return (dy / R_EARTH) * (180 / Math.PI);
}

/**
 * with a given x-km change, and current latitude
 * calculate the increment of longitude
 * based on stackoverflow http://stackoverflow.com/questions/7477003
 * @param {number} lat - latitude of current location (based on city)
 * @param {number} dx - change in km
 * @return {number} - increment in longitude
 */
function calculateLonOffset(lat, dx) {
  return ((dx / R_EARTH) * (180 / Math.PI)) / Math.cos((lat * Math.PI) / 180);
}

// Aligns `inValue` to given `cellSize`
function alignToCell(inValue, cellSize) {
  const sign = inValue < 0 ? -1 : 1;

  let value = sign < 0 ? Math.abs(inValue) + cellSize : Math.abs(inValue);

  value = Math.floor(value / cellSize) * cellSize;

  return value * sign;
}

// Calculate grid parameters
function getGPUAggregationParams({boundingBox, cellSize, worldOrigin}) {
  const {yMin, yMax, xMin, xMax} = boundingBox;

  // NOTE: this alignment will match grid cell boundaries with existing CPU implementation
  // this gurantees identical aggregation results when switching between CPU and GPU aggregation.
  // Also gurantees same cell boundaries, when overlapping between two different layers (like ScreenGrid and Contour)
  // We first move worldOrigin to [0, 0], align the lower bounding box , then move worldOrigin to its original value.
  const originX = alignToCell(xMin - worldOrigin[0], cellSize[0]) + worldOrigin[0];
  const originY = alignToCell(yMin - worldOrigin[1], cellSize[1]) + worldOrigin[1];

  // Setup transformation matrix so that every point is in +ve range
  const gridTransformMatrix = new math_gl__WEBPACK_IMPORTED_MODULE_0__["Matrix4"]().translate([-1 * originX, -1 * originY, 0]);

  const gridOrigin = [originX, originY];
  const width = xMax - xMin + cellSize[0];
  const height = yMax - yMin + cellSize[1];

  const gridSize = [Math.ceil(width / cellSize[0]), Math.ceil(height / cellSize[1])];

  return {
    gridOrigin,
    gridSize,
    width,
    height,
    gridTransformMatrix
  };
}


/***/ }),

/***/ "./src/utils/gpu-grid-aggregation/transform-mean-vs.glsl.js":
/*!******************************************************************!*\
  !*** ./src/utils/gpu-grid-aggregation/transform-mean-vs.glsl.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Copyright (c) 2015 - 2018 Uber Technologies, Inc.
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

/* harmony default export */ __webpack_exports__["default"] = (`\
#define SHADER_NAME gpu-aggregation-transform-mean-vs
attribute vec4 aggregationValues;
varying vec4 meanValues;

void main()
{
  // TODO: Use 64-bit division ?? not needed given this is aggregation ??
  bool isCellValid = bool(aggregationValues.w > 0.);
  // aggregationValues:  XYZ contain aggregated values, W contains count
  meanValues.xyz = isCellValid ? aggregationValues.xyz/aggregationValues.w : vec3(0, 0, 0);
  meanValues.w = aggregationValues.w;
}
`);


/***/ }),

/***/ "./src/utils/resource-utils.js":
/*!*************************************!*\
  !*** ./src/utils/resource-utils.js ***!
  \*************************************/
/*! exports provided: getFloatTexture, getFramebuffer, getFloatArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFloatTexture", function() { return getFloatTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFramebuffer", function() { return getFramebuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFloatArray", function() { return getFloatArray; });
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "@luma.gl/constants");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);



const DEFAULT_PARAMETERS = {
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_MAG_FILTER]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.NEAREST,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_MIN_FILTER]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.NEAREST
};

function getFloatTexture(gl, opts = {}) {
  const {
    width = 1,
    height = 1,
    data = null,
    unpackFlipY = true,
    parameters = DEFAULT_PARAMETERS
  } = opts;
  const texture = new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["Texture2D"](gl, {
    data,
    format: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGBA32F,
    type: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.FLOAT,
    border: 0,
    mipmaps: false,
    parameters,
    dataFormat: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.RGBA,
    width,
    height,
    unpackFlipY
  });
  return texture;
}

function getFramebuffer(gl, opts) {
  const {id, width = 1, height = 1, texture} = opts;
  const fb = new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["Framebuffer"](gl, {
    id,
    width,
    height,
    attachments: {
      [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.COLOR_ATTACHMENT0]: texture
    }
  });

  return fb;
}

function getFloatArray(array, size, fillValue = 0) {
  if (!array || array.length < size) {
    return new Float32Array(size).fill(fillValue);
  }
  return array;
}


/***/ }),

/***/ "./src/utils/scale-utils.js":
/*!**********************************!*\
  !*** ./src/utils/scale-utils.js ***!
  \**********************************/
/*! exports provided: linearScale, quantizeScale, getQuantizeScale, getLinearScale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linearScale", function() { return linearScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeScale", function() { return quantizeScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizeScale", function() { return getQuantizeScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLinearScale", function() { return getLinearScale; });
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__);
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



// Linear scale maps continuous domain to continuous range
function linearScale(domain, range, value) {
  return ((value - domain[0]) / (domain[1] - domain[0])) * (range[1] - range[0]) + range[0];
}

// Quantize scale is similar to linear scales,
// except it uses a discrete rather than continuous range
function quantizeScale(domain, range, value) {
  const domainRange = domain[1] - domain[0];
  if (domainRange <= 0) {
    _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["log"].warn('quantizeScale: invalid domain, returning range[0]')();
    return range[0];
  }
  const step = domainRange / range.length;
  const idx = Math.floor((value - domain[0]) / step);
  const clampIdx = Math.max(Math.min(idx, range.length - 1), 0);

  return range[clampIdx];
}

// return a quantize scale function
function getQuantizeScale(domain, range) {
  return value => quantizeScale(domain, range, value);
}

// return a linear scale funciton
function getLinearScale(domain, range) {
  return value =>
    ((value - domain[0]) / (domain[1] - domain[0])) * (range[1] - range[0]) + range[0];
}


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