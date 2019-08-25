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

/***/ "../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!**************************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
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

/***/ "../../node_modules/@babel/runtime/regenerator/index.js":
/*!***************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/@babel/runtime/regenerator/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../../node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "../../node_modules/@loaders.gl/images/dist/esm/image-loader.js":
/*!***********************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/@loaders.gl/images/dist/esm/image-loader.js ***!
  \***********************************************************************************************/
/*! exports provided: default, ImageBitmapLoader, HTMLImageLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageBitmapLoader", function() { return ImageBitmapLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLImageLoader", function() { return HTMLImageLoader; });
/* harmony import */ var _lib_parse_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/parse-image */ "../../node_modules/@loaders.gl/images/dist/esm/lib/parse-image.js");

var EXTENSIONS = ['png', 'jpg', 'jpeg', 'gif', 'webp', 'bmp', 'ico', 'svg'];
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Images',
  extensions: EXTENSIONS,
  parse: _lib_parse_image__WEBPACK_IMPORTED_MODULE_0__["canParseImage"] && _lib_parse_image__WEBPACK_IMPORTED_MODULE_0__["parseImage"],
  loadAndParse: !_lib_parse_image__WEBPACK_IMPORTED_MODULE_0__["canParseImage"] && _lib_parse_image__WEBPACK_IMPORTED_MODULE_0__["loadImage"]
});
var ImageBitmapLoader = {
  extensions: EXTENSIONS,
  parse: _lib_parse_image__WEBPACK_IMPORTED_MODULE_0__["parseToImageBitmap"]
};
var HTMLImageLoader = {
  extensions: EXTENSIONS,
  loadAndParse: _lib_parse_image__WEBPACK_IMPORTED_MODULE_0__["loadToHTMLImage"]
};
//# sourceMappingURL=image-loader.js.map

/***/ }),

/***/ "../../node_modules/@loaders.gl/images/dist/esm/image-writer.js":
/*!***********************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/@loaders.gl/images/dist/esm/image-writer.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_encode_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/encode-image */ "../../node_modules/@loaders.gl/images/dist/esm/lib/encode-image.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Images',
  extensions: ['jpeg'],
  encode: _lib_encode_image__WEBPACK_IMPORTED_MODULE_0__["encodeImage"],
  DEFAULT_OPTIONS: {
    type: 'png'
  }
});
//# sourceMappingURL=image-writer.js.map

/***/ }),

/***/ "../../node_modules/@loaders.gl/images/dist/esm/index.js":
/*!****************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/@loaders.gl/images/dist/esm/index.js ***!
  \****************************************************************************************/
/*! exports provided: ImageLoader, HTMLImageLoader, ImageBitmapLoader, ImageWriter, loadImage, isImage, getImageMetadata, getImageMIMEType, getImageSize, decodeImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _image_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-loader */ "../../node_modules/@loaders.gl/images/dist/esm/image-loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageLoader", function() { return _image_loader__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLImageLoader", function() { return _image_loader__WEBPACK_IMPORTED_MODULE_0__["HTMLImageLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageBitmapLoader", function() { return _image_loader__WEBPACK_IMPORTED_MODULE_0__["ImageBitmapLoader"]; });

/* harmony import */ var _image_writer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-writer */ "../../node_modules/@loaders.gl/images/dist/esm/image-writer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageWriter", function() { return _image_writer__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _lib_parse_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/parse-image */ "../../node_modules/@loaders.gl/images/dist/esm/lib/parse-image.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadImage", function() { return _lib_parse_image__WEBPACK_IMPORTED_MODULE_2__["loadImage"]; });

/* harmony import */ var _lib_get_image_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/get-image-metadata */ "../../node_modules/@loaders.gl/images/dist/esm/lib/get-image-metadata.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isImage", function() { return _lib_get_image_metadata__WEBPACK_IMPORTED_MODULE_3__["isImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImageMetadata", function() { return _lib_get_image_metadata__WEBPACK_IMPORTED_MODULE_3__["getImageMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImageMIMEType", function() { return _lib_get_image_metadata__WEBPACK_IMPORTED_MODULE_3__["getImageMIMEType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImageSize", function() { return _lib_get_image_metadata__WEBPACK_IMPORTED_MODULE_3__["getImageSize"]; });

/* harmony import */ var _lib_image_utils_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/image-utils-browser */ "../../node_modules/@loaders.gl/images/dist/esm/lib/image-utils-browser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decodeImage", function() { return _lib_image_utils_browser__WEBPACK_IMPORTED_MODULE_4__["decodeImage"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/@loaders.gl/images/dist/esm/lib/encode-image.js":
/*!***************************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/@loaders.gl/images/dist/esm/lib/encode-image.js ***!
  \***************************************************************************************************/
/*! exports provided: encodeImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeImage", function() { return encodeImage; });
/* harmony import */ var _utils_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/assert */ "../../node_modules/@loaders.gl/images/dist/esm/utils/assert.js");
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/globals */ "../../node_modules/@loaders.gl/images/dist/esm/utils/globals.js");


function encodeImage(image, type) {
  if (_utils_globals__WEBPACK_IMPORTED_MODULE_1__["global"]._encodeImageNode) {
    return _utils_globals__WEBPACK_IMPORTED_MODULE_1__["global"]._encodeImageNode(image, type);
  }

  if (image instanceof HTMLCanvasElement) {
    var _canvas = image;
    return _canvas.toDataURL(type);
  }

  Object(_utils_assert__WEBPACK_IMPORTED_MODULE_0__["default"])(image instanceof Image, 'getImageData accepts image or canvas');
  var canvas = document.createElement('canvas');
  canvas.width = image.width;
  canvas.height = image.height;
  canvas.getContext('2d').drawImage(image, 0, 0);
  var data = canvas.toDataURL(type || 'png').replace(/^data:image\/(png|jpg);base64,/, '');
  return Promise.resolve(data);
}
//# sourceMappingURL=encode-image.js.map

/***/ }),

/***/ "../../node_modules/@loaders.gl/images/dist/esm/lib/get-image-metadata.js":
/*!*********************************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/@loaders.gl/images/dist/esm/lib/get-image-metadata.js ***!
  \*********************************************************************************************************/
/*! exports provided: isImage, getImageMIMEType, getImageSize, getImageMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isImage", function() { return isImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageMIMEType", function() { return getImageMIMEType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageSize", function() { return getImageSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageMetadata", function() { return getImageMetadata; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _image_parsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-parsers */ "../../node_modules/@loaders.gl/images/dist/esm/lib/image-parsers.js");


var ERR_INVALID_MIME_TYPE = "Invalid MIME type. Supported MIME types are: ".concat(Array.from(_image_parsers__WEBPACK_IMPORTED_MODULE_1__["mimeTypeMap"].keys()).join(', '));
function isImage(arrayBuffer, mimeType) {
  if (mimeType) {
    var _getImageTypeHandlers = getImageTypeHandlers(mimeType),
        test = _getImageTypeHandlers.test;

    var dataView = toDataView(arrayBuffer);
    return test(dataView);
  }

  return Boolean(getImageMIMEType(arrayBuffer));
}
function getImageMIMEType(arrayBuffer) {
  var dataView = toDataView(arrayBuffer);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _image_parsers__WEBPACK_IMPORTED_MODULE_1__["mimeTypeMap"].entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_step.value, 2),
          mimeType = _step$value[0],
          test = _step$value[1].test;

      if (test(dataView)) {
        return mimeType;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return null;
}
function getImageSize(arrayBuffer) {
  var mimeType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  mimeType = mimeType || getImageMIMEType(arrayBuffer);

  var _getImageTypeHandlers2 = getImageTypeHandlers(mimeType),
      getSize = _getImageTypeHandlers2.getSize;

  var dataView = toDataView(arrayBuffer);
  var size = getSize(dataView);

  if (!size) {
    throw new Error("invalid image data for type: ".concat(mimeType));
  }

  return size;
}
function getImageMetadata(arrayBuffer) {
  var mimeType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  mimeType = mimeType || getImageMIMEType(arrayBuffer);
  var metadata = getImageSize(arrayBuffer, mimeType);
  metadata.mimeType = mimeType;
  return metadata;
}

function getImageTypeHandlers(mimeType) {
  var handlers = _image_parsers__WEBPACK_IMPORTED_MODULE_1__["mimeTypeMap"].get(mimeType);

  if (!handlers) {
    throw new Error(ERR_INVALID_MIME_TYPE);
  }

  return handlers;
}

function toDataView(data) {
  if (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) {
    return new DataView(data.buffer || data);
  }

  throw new Error('toDataView');
}
//# sourceMappingURL=get-image-metadata.js.map

/***/ }),

/***/ "../../node_modules/@loaders.gl/images/dist/esm/lib/image-parsers.js":
/*!****************************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/@loaders.gl/images/dist/esm/lib/image-parsers.js ***!
  \****************************************************************************************************/
/*! exports provided: mimeTypeMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimeTypeMap", function() { return mimeTypeMap; });
var BIG_ENDIAN = false;
var LITTLE_ENDIAN = true;
var mimeTypeMap = new Map([['image/png', {
  test: isPng,
  getSize: getPngSize
}], ['image/jpeg', {
  test: isJpeg,
  getSize: getJpegSize
}], ['image/gif', {
  test: isGif,
  getSize: getGifSize
}], ['image/bmp', {
  test: isBmp,
  getSize: getBmpSize
}]]);

function isPng(dataView) {
  return dataView.byteLength >= 24 && dataView.getUint32(0, BIG_ENDIAN) === 0x89504e47;
}

function getPngSize(dataView) {
  return {
    width: dataView.getUint32(16, BIG_ENDIAN),
    height: dataView.getUint32(20, BIG_ENDIAN)
  };
}

function isGif(dataView) {
  return dataView.byteLength >= 10 && dataView.getUint32(0, BIG_ENDIAN) === 0x47494638;
}

function getGifSize(dataView) {
  return {
    width: dataView.getUint16(6, LITTLE_ENDIAN),
    height: dataView.getUint16(8, LITTLE_ENDIAN)
  };
}

function isBmp(dataView) {
  return dataView.byteLength >= 2 && dataView.getUint16(0, BIG_ENDIAN) === 0x424d;
}

function getBmpSize(dataView) {
  return {
    width: dataView.getUint32(18, LITTLE_ENDIAN),
    height: dataView.getUint32(22, LITTLE_ENDIAN)
  };
}

function isJpeg(dataView) {
  return dataView.byteLength >= 2 && dataView.getUint16(0, BIG_ENDIAN) === 0xffd8;
}

function getJpegSize(dataView) {
  if (dataView.byteLength < 2 || dataView.getUint16(0, BIG_ENDIAN) !== 0xffd8) {
    return null;
  }

  var _getJpegMarkers = getJpegMarkers(),
      tableMarkers = _getJpegMarkers.tableMarkers,
      sofMarkers = _getJpegMarkers.sofMarkers;

  var i = 2;

  while (i < dataView.byteLength) {
    var marker = dataView.getUint16(i, BIG_ENDIAN);

    if (sofMarkers.has(marker)) {
      return {
        height: dataView.getUint16(i + 5, BIG_ENDIAN),
        width: dataView.getUint16(i + 7, BIG_ENDIAN)
      };
    }

    if (!tableMarkers.has(marker)) {
      return null;
    }

    i += 2;
    i += dataView.getUint16(i, BIG_ENDIAN);
  }

  return null;
}

function getJpegMarkers() {
  var tableMarkers = new Set([0xffdb, 0xffc4, 0xffcc, 0xffdd, 0xfffe]);

  for (var i = 0xffe0; i < 0xfff0; ++i) {
    tableMarkers.add(i);
  }

  var sofMarkers = new Set([0xffc0, 0xffc1, 0xffc2, 0xffc3, 0xffc5, 0xffc6, 0xffc7, 0xffc9, 0xffca, 0xffcb, 0xffcd, 0xffce, 0xffcf, 0xffde]);
  return {
    tableMarkers: tableMarkers,
    sofMarkers: sofMarkers
  };
}
//# sourceMappingURL=image-parsers.js.map

/***/ }),

/***/ "../../node_modules/@loaders.gl/images/dist/esm/lib/image-utils-browser.js":
/*!**********************************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/@loaders.gl/images/dist/esm/lib/image-utils-browser.js ***!
  \**********************************************************************************************************/
/*! exports provided: decodeImage, getImagePixelData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeImage", function() { return decodeImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImagePixelData", function() { return getImagePixelData; });
function decodeImage(arrayBufferOrView, _ref) {
  var _ref$mimeType = _ref.mimeType,
      mimeType = _ref$mimeType === void 0 ? 'image/jpeg' : _ref$mimeType;
  var blob = new Blob([arrayBufferOrView], {
    type: mimeType
  });
  var urlCreator = window.URL || window.webkitURL;
  var imageUrl = urlCreator.createObjectURL(blob);
  return new Promise(function (resolve, reject) {
    var image = new Image();

    image.onload = function () {
      return resolve(image);
    };

    image.onerror = reject;
    image.src = imageUrl;
    return image;
  });
}
function getImagePixelData(image) {
  var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  width = width || image.width;
  height = height || image.height;
  var canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  var ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0, width, height);
  return ctx.getImageData(0, 0, width, height);
}
//# sourceMappingURL=image-utils-browser.js.map

/***/ }),

/***/ "../../node_modules/@loaders.gl/images/dist/esm/lib/parse-image.js":
/*!**************************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/@loaders.gl/images/dist/esm/lib/parse-image.js ***!
  \**************************************************************************************************/
/*! exports provided: canParseImage, parseImage, loadImage, parseToImageBitmap, loadToHTMLImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canParseImage", function() { return canParseImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseImage", function() { return parseImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImage", function() { return loadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseToImageBitmap", function() { return parseToImageBitmap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadToHTMLImage", function() { return loadToHTMLImage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/globals */ "../../node_modules/@loaders.gl/images/dist/esm/utils/globals.js");
/* harmony import */ var _get_image_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-image-metadata */ "../../node_modules/@loaders.gl/images/dist/esm/lib/get-image-metadata.js");




var canParseImage = _utils_globals__WEBPACK_IMPORTED_MODULE_2__["global"]._parseImageNode || typeof ImageBitmap !== 'undefined';
function parseImage(arrayBuffer, options) {
  if (_utils_globals__WEBPACK_IMPORTED_MODULE_2__["global"]._parseImageNode) {
    var _getImageMetadata = Object(_get_image_metadata__WEBPACK_IMPORTED_MODULE_3__["getImageMetadata"])(arrayBuffer),
        mimeType = _getImageMetadata.mimeType;

    return _utils_globals__WEBPACK_IMPORTED_MODULE_2__["global"]._parseImageNode(arrayBuffer, mimeType, options);
  }

  return parseToImageBitmap(arrayBuffer, options);
}
function loadImage(_x) {
  return _loadImage.apply(this, arguments);
}

function _loadImage() {
  _loadImage = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url) {
    var options,
        response,
        arrayBuffer,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};

            if (!(typeof Image === 'undefined')) {
              _context.next = 9;
              break;
            }

            _context.next = 4;
            return fetch(url, options);

          case 4:
            response = _context.sent;
            _context.next = 7;
            return response.arrayBuffer();

          case 7:
            arrayBuffer = _context.sent;
            return _context.abrupt("return", parseImage(arrayBuffer, options));

          case 9:
            _context.next = 11;
            return loadToHTMLImage(url, options);

          case 11:
            return _context.abrupt("return", _context.sent);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadImage.apply(this, arguments);
}

function parseToImageBitmap(arrayBuffer, options) {
  if (typeof createImageBitmap === 'undefined') {
    throw new Error('parseImage');
  }

  var blob = new Blob([new Uint8Array(arrayBuffer)]);
  return createImageBitmap(blob, {
    imageOrientation: options.imageOrientation || 'none',
    premultiplyAlpha: options.premultiplyAlpha || 'default'
  });
}
function loadToHTMLImage(_x2, _x3) {
  return _loadToHTMLImage.apply(this, arguments);
}

function _loadToHTMLImage() {
  _loadToHTMLImage = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(url, options) {
    var src, response, xml;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!/\.svg((\?|#).*)?$/.test(url)) {
              _context2.next = 10;
              break;
            }

            _context2.next = 3;
            return fetch(url, options);

          case 3:
            response = _context2.sent;
            _context2.next = 6;
            return response.text();

          case 6:
            xml = _context2.sent;
            src = "data:image/svg+xml;base64,".concat(btoa(xml));
            _context2.next = 13;
            break;

          case 10:
            _context2.next = 12;
            return url;

          case 12:
            src = _context2.sent;

          case 13:
            _context2.next = 15;
            return new Promise(function (resolve, reject) {
              try {
                var image = new Image();

                image.onload = function () {
                  return resolve(image);
                };

                image.onerror = function (err) {
                  return reject(new Error("Could not load image ".concat(url, ": ").concat(err)));
                };

                image.crossOrigin = options && options.crossOrigin || 'anonymous';
                image.src = src;
              } catch (error) {
                reject(error);
              }
            });

          case 15:
            return _context2.abrupt("return", _context2.sent);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _loadToHTMLImage.apply(this, arguments);
}
//# sourceMappingURL=parse-image.js.map

/***/ }),

/***/ "../../node_modules/@loaders.gl/images/dist/esm/utils/assert.js":
/*!***********************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/@loaders.gl/images/dist/esm/utils/assert.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return assert; });
function assert(condition, message) {
  if (!condition) {
    throw new Error(message || '@loaders.gl/images assertion failed.');
  }
}
//# sourceMappingURL=assert.js.map

/***/ }),

/***/ "../../node_modules/@loaders.gl/images/dist/esm/utils/globals.js":
/*!************************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/@loaders.gl/images/dist/esm/utils/globals.js ***!
  \************************************************************************************************/
/*! exports provided: isBrowser, global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "global", function() { return global_; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "../../node_modules/@babel/runtime/helpers/esm/typeof.js");

var isBrowser = (typeof process === "undefined" ? "undefined" : Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(process)) !== 'object' || String(process) !== '[object process]' || process.browser;
var globals = {
  self: typeof self !== 'undefined' && self,
  window: typeof window !== 'undefined' && window,
  global: typeof global !== 'undefined' && global
};
var global_ = globals.global || globals.self || globals.window;

//# sourceMappingURL=globals.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../process/browser.js */ "../../node_modules/process/browser.js"), __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/@mapbox/tiny-sdf/index.js":
/*!*****************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/@mapbox/tiny-sdf/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = TinySDF;

var INF = 1e20;

function TinySDF(fontSize, buffer, radius, cutoff, fontFamily, fontWeight) {
    this.fontSize = fontSize || 24;
    this.buffer = buffer === undefined ? 3 : buffer;
    this.cutoff = cutoff || 0.25;
    this.fontFamily = fontFamily || 'sans-serif';
    this.fontWeight = fontWeight || 'normal';
    this.radius = radius || 8;
    var size = this.size = this.fontSize + this.buffer * 2;

    this.canvas = document.createElement('canvas');
    this.canvas.width = this.canvas.height = size;

    this.ctx = this.canvas.getContext('2d');
    this.ctx.font = this.fontWeight + ' ' + this.fontSize + 'px ' + this.fontFamily;
    this.ctx.textBaseline = 'middle';
    this.ctx.fillStyle = 'black';

    // temporary arrays for the distance transform
    this.gridOuter = new Float64Array(size * size);
    this.gridInner = new Float64Array(size * size);
    this.f = new Float64Array(size);
    this.d = new Float64Array(size);
    this.z = new Float64Array(size + 1);
    this.v = new Int16Array(size);

    // hack around https://bugzilla.mozilla.org/show_bug.cgi?id=737852
    this.middle = Math.round((size / 2) * (navigator.userAgent.indexOf('Gecko/') >= 0 ? 1.2 : 1));
}

TinySDF.prototype.draw = function (char) {
    this.ctx.clearRect(0, 0, this.size, this.size);
    this.ctx.fillText(char, this.buffer, this.middle);

    var imgData = this.ctx.getImageData(0, 0, this.size, this.size);
    var alphaChannel = new Uint8ClampedArray(this.size * this.size);

    for (var i = 0; i < this.size * this.size; i++) {
        var a = imgData.data[i * 4 + 3] / 255; // alpha value
        this.gridOuter[i] = a === 1 ? 0 : a === 0 ? INF : Math.pow(Math.max(0, 0.5 - a), 2);
        this.gridInner[i] = a === 1 ? INF : a === 0 ? 0 : Math.pow(Math.max(0, a - 0.5), 2);
    }

    edt(this.gridOuter, this.size, this.size, this.f, this.d, this.v, this.z);
    edt(this.gridInner, this.size, this.size, this.f, this.d, this.v, this.z);

    for (i = 0; i < this.size * this.size; i++) {
        var d = this.gridOuter[i] - this.gridInner[i];
        alphaChannel[i] = Math.max(0, Math.min(255, Math.round(255 - 255 * (d / this.radius + this.cutoff))));
    }

    return alphaChannel;
};

// 2D Euclidean distance transform by Felzenszwalb & Huttenlocher https://cs.brown.edu/~pff/dt/
function edt(data, width, height, f, d, v, z) {
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            f[y] = data[y * width + x];
        }
        edt1d(f, d, v, z, height);
        for (y = 0; y < height; y++) {
            data[y * width + x] = d[y];
        }
    }
    for (y = 0; y < height; y++) {
        for (x = 0; x < width; x++) {
            f[x] = data[y * width + x];
        }
        edt1d(f, d, v, z, width);
        for (x = 0; x < width; x++) {
            data[y * width + x] = Math.sqrt(d[x]);
        }
    }
}

// 1D squared distance transform
function edt1d(f, d, v, z, n) {
    v[0] = 0;
    z[0] = -INF;
    z[1] = +INF;

    for (var q = 1, k = 0; q < n; q++) {
        var s = ((f[q] + q * q) - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
        while (s <= z[k]) {
            k--;
            s = ((f[q] + q * q) - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
        }
        k++;
        v[k] = q;
        z[k] = s;
        z[k + 1] = +INF;
    }

    for (q = 0, k = 0; q < n; q++) {
        while (z[k + 1] < q) k++;
        d[q] = (q - v[k]) * (q - v[k]) + f[v[k]];
    }
}


/***/ }),

/***/ "../../node_modules/earcut/src/earcut.js":
/*!************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/earcut/src/earcut.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = earcut;
module.exports.default = earcut;

function earcut(data, holeIndices, dim) {

    dim = dim || 2;

    var hasHoles = holeIndices && holeIndices.length,
        outerLen = hasHoles ? holeIndices[0] * dim : data.length,
        outerNode = linkedList(data, 0, outerLen, dim, true),
        triangles = [];

    if (!outerNode) return triangles;

    var minX, minY, maxX, maxY, x, y, invSize;

    if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);

    // if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
    if (data.length > 80 * dim) {
        minX = maxX = data[0];
        minY = maxY = data[1];

        for (var i = dim; i < outerLen; i += dim) {
            x = data[i];
            y = data[i + 1];
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
        }

        // minX, minY and invSize are later used to transform coords into integers for z-order calculation
        invSize = Math.max(maxX - minX, maxY - minY);
        invSize = invSize !== 0 ? 1 / invSize : 0;
    }

    earcutLinked(outerNode, triangles, dim, minX, minY, invSize);

    return triangles;
}

// create a circular doubly linked list from polygon points in the specified winding order
function linkedList(data, start, end, dim, clockwise) {
    var i, last;

    if (clockwise === (signedArea(data, start, end, dim) > 0)) {
        for (i = start; i < end; i += dim) last = insertNode(i, data[i], data[i + 1], last);
    } else {
        for (i = end - dim; i >= start; i -= dim) last = insertNode(i, data[i], data[i + 1], last);
    }

    if (last && equals(last, last.next)) {
        removeNode(last);
        last = last.next;
    }

    return last;
}

// eliminate colinear or duplicate points
function filterPoints(start, end) {
    if (!start) return start;
    if (!end) end = start;

    var p = start,
        again;
    do {
        again = false;

        if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
            removeNode(p);
            p = end = p.prev;
            if (p === p.next) break;
            again = true;

        } else {
            p = p.next;
        }
    } while (again || p !== end);

    return end;
}

// main ear slicing loop which triangulates a polygon (given as a linked list)
function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
    if (!ear) return;

    // interlink polygon nodes in z-order
    if (!pass && invSize) indexCurve(ear, minX, minY, invSize);

    var stop = ear,
        prev, next;

    // iterate through ears, slicing them one by one
    while (ear.prev !== ear.next) {
        prev = ear.prev;
        next = ear.next;

        if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
            // cut off the triangle
            triangles.push(prev.i / dim);
            triangles.push(ear.i / dim);
            triangles.push(next.i / dim);

            removeNode(ear);

            // skipping the next vertice leads to less sliver triangles
            ear = next.next;
            stop = next.next;

            continue;
        }

        ear = next;

        // if we looped through the whole remaining polygon and can't find any more ears
        if (ear === stop) {
            // try filtering points and slicing again
            if (!pass) {
                earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);

            // if this didn't work, try curing all small self-intersections locally
            } else if (pass === 1) {
                ear = cureLocalIntersections(ear, triangles, dim);
                earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);

            // as a last resort, try splitting the remaining polygon into two
            } else if (pass === 2) {
                splitEarcut(ear, triangles, dim, minX, minY, invSize);
            }

            break;
        }
    }
}

// check whether a polygon node forms a valid ear with adjacent nodes
function isEar(ear) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    // now make sure we don't have other points inside the potential ear
    var p = ear.next.next;

    while (p !== ear.prev) {
        if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.next;
    }

    return true;
}

function isEarHashed(ear, minX, minY, invSize) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    // triangle bbox; min & max are calculated like this for speed
    var minTX = a.x < b.x ? (a.x < c.x ? a.x : c.x) : (b.x < c.x ? b.x : c.x),
        minTY = a.y < b.y ? (a.y < c.y ? a.y : c.y) : (b.y < c.y ? b.y : c.y),
        maxTX = a.x > b.x ? (a.x > c.x ? a.x : c.x) : (b.x > c.x ? b.x : c.x),
        maxTY = a.y > b.y ? (a.y > c.y ? a.y : c.y) : (b.y > c.y ? b.y : c.y);

    // z-order range for the current triangle bbox;
    var minZ = zOrder(minTX, minTY, minX, minY, invSize),
        maxZ = zOrder(maxTX, maxTY, minX, minY, invSize);

    var p = ear.prevZ,
        n = ear.nextZ;

    // look for points inside the triangle in both directions
    while (p && p.z >= minZ && n && n.z <= maxZ) {
        if (p !== ear.prev && p !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;

        if (n !== ear.prev && n !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
            area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
    }

    // look for remaining points in decreasing z-order
    while (p && p.z >= minZ) {
        if (p !== ear.prev && p !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;
    }

    // look for remaining points in increasing z-order
    while (n && n.z <= maxZ) {
        if (n !== ear.prev && n !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
            area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
    }

    return true;
}

// go through all polygon nodes and cure small local self-intersections
function cureLocalIntersections(start, triangles, dim) {
    var p = start;
    do {
        var a = p.prev,
            b = p.next.next;

        if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {

            triangles.push(a.i / dim);
            triangles.push(p.i / dim);
            triangles.push(b.i / dim);

            // remove two nodes involved
            removeNode(p);
            removeNode(p.next);

            p = start = b;
        }
        p = p.next;
    } while (p !== start);

    return p;
}

// try splitting polygon into two and triangulate them independently
function splitEarcut(start, triangles, dim, minX, minY, invSize) {
    // look for a valid diagonal that divides the polygon into two
    var a = start;
    do {
        var b = a.next.next;
        while (b !== a.prev) {
            if (a.i !== b.i && isValidDiagonal(a, b)) {
                // split the polygon in two by the diagonal
                var c = splitPolygon(a, b);

                // filter colinear points around the cuts
                a = filterPoints(a, a.next);
                c = filterPoints(c, c.next);

                // run earcut on each half
                earcutLinked(a, triangles, dim, minX, minY, invSize);
                earcutLinked(c, triangles, dim, minX, minY, invSize);
                return;
            }
            b = b.next;
        }
        a = a.next;
    } while (a !== start);
}

// link every hole into the outer loop, producing a single-ring polygon without holes
function eliminateHoles(data, holeIndices, outerNode, dim) {
    var queue = [],
        i, len, start, end, list;

    for (i = 0, len = holeIndices.length; i < len; i++) {
        start = holeIndices[i] * dim;
        end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
        list = linkedList(data, start, end, dim, false);
        if (list === list.next) list.steiner = true;
        queue.push(getLeftmost(list));
    }

    queue.sort(compareX);

    // process holes from left to right
    for (i = 0; i < queue.length; i++) {
        eliminateHole(queue[i], outerNode);
        outerNode = filterPoints(outerNode, outerNode.next);
    }

    return outerNode;
}

function compareX(a, b) {
    return a.x - b.x;
}

// find a bridge between vertices that connects hole with an outer ring and and link it
function eliminateHole(hole, outerNode) {
    outerNode = findHoleBridge(hole, outerNode);
    if (outerNode) {
        var b = splitPolygon(outerNode, hole);
        filterPoints(b, b.next);
    }
}

// David Eberly's algorithm for finding a bridge between hole and outer polygon
function findHoleBridge(hole, outerNode) {
    var p = outerNode,
        hx = hole.x,
        hy = hole.y,
        qx = -Infinity,
        m;

    // find a segment intersected by a ray from the hole's leftmost point to the left;
    // segment's endpoint with lesser x will be potential connection point
    do {
        if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
            var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
            if (x <= hx && x > qx) {
                qx = x;
                if (x === hx) {
                    if (hy === p.y) return p;
                    if (hy === p.next.y) return p.next;
                }
                m = p.x < p.next.x ? p : p.next;
            }
        }
        p = p.next;
    } while (p !== outerNode);

    if (!m) return null;

    if (hx === qx) return m.prev; // hole touches outer segment; pick lower endpoint

    // look for points inside the triangle of hole point, segment intersection and endpoint;
    // if there are no points found, we have a valid connection;
    // otherwise choose the point of the minimum angle with the ray as connection point

    var stop = m,
        mx = m.x,
        my = m.y,
        tanMin = Infinity,
        tan;

    p = m.next;

    while (p !== stop) {
        if (hx >= p.x && p.x >= mx && hx !== p.x &&
                pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {

            tan = Math.abs(hy - p.y) / (hx - p.x); // tangential

            if ((tan < tanMin || (tan === tanMin && p.x > m.x)) && locallyInside(p, hole)) {
                m = p;
                tanMin = tan;
            }
        }

        p = p.next;
    }

    return m;
}

// interlink polygon nodes in z-order
function indexCurve(start, minX, minY, invSize) {
    var p = start;
    do {
        if (p.z === null) p.z = zOrder(p.x, p.y, minX, minY, invSize);
        p.prevZ = p.prev;
        p.nextZ = p.next;
        p = p.next;
    } while (p !== start);

    p.prevZ.nextZ = null;
    p.prevZ = null;

    sortLinked(p);
}

// Simon Tatham's linked list merge sort algorithm
// http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
function sortLinked(list) {
    var i, p, q, e, tail, numMerges, pSize, qSize,
        inSize = 1;

    do {
        p = list;
        list = null;
        tail = null;
        numMerges = 0;

        while (p) {
            numMerges++;
            q = p;
            pSize = 0;
            for (i = 0; i < inSize; i++) {
                pSize++;
                q = q.nextZ;
                if (!q) break;
            }
            qSize = inSize;

            while (pSize > 0 || (qSize > 0 && q)) {

                if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
                    e = p;
                    p = p.nextZ;
                    pSize--;
                } else {
                    e = q;
                    q = q.nextZ;
                    qSize--;
                }

                if (tail) tail.nextZ = e;
                else list = e;

                e.prevZ = tail;
                tail = e;
            }

            p = q;
        }

        tail.nextZ = null;
        inSize *= 2;

    } while (numMerges > 1);

    return list;
}

// z-order of a point given coords and inverse of the longer side of data bbox
function zOrder(x, y, minX, minY, invSize) {
    // coords are transformed into non-negative 15-bit integer range
    x = 32767 * (x - minX) * invSize;
    y = 32767 * (y - minY) * invSize;

    x = (x | (x << 8)) & 0x00FF00FF;
    x = (x | (x << 4)) & 0x0F0F0F0F;
    x = (x | (x << 2)) & 0x33333333;
    x = (x | (x << 1)) & 0x55555555;

    y = (y | (y << 8)) & 0x00FF00FF;
    y = (y | (y << 4)) & 0x0F0F0F0F;
    y = (y | (y << 2)) & 0x33333333;
    y = (y | (y << 1)) & 0x55555555;

    return x | (y << 1);
}

// find the leftmost node of a polygon ring
function getLeftmost(start) {
    var p = start,
        leftmost = start;
    do {
        if (p.x < leftmost.x) leftmost = p;
        p = p.next;
    } while (p !== start);

    return leftmost;
}

// check if a point lies within a convex triangle
function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
    return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 &&
           (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 &&
           (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
}

// check if a diagonal between two polygon nodes is valid (lies in polygon interior)
function isValidDiagonal(a, b) {
    return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) &&
           locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b);
}

// signed area of a triangle
function area(p, q, r) {
    return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
}

// check if two points are equal
function equals(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
}

// check if two segments intersect
function intersects(p1, q1, p2, q2) {
    if ((equals(p1, q1) && equals(p2, q2)) ||
        (equals(p1, q2) && equals(p2, q1))) return true;
    return area(p1, q1, p2) > 0 !== area(p1, q1, q2) > 0 &&
           area(p2, q2, p1) > 0 !== area(p2, q2, q1) > 0;
}

// check if a polygon diagonal intersects any polygon segments
function intersectsPolygon(a, b) {
    var p = a;
    do {
        if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i &&
                intersects(p, p.next, a, b)) return true;
        p = p.next;
    } while (p !== a);

    return false;
}

// check if a polygon diagonal is locally inside the polygon
function locallyInside(a, b) {
    return area(a.prev, a, a.next) < 0 ?
        area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 :
        area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
}

// check if the middle point of a polygon diagonal is inside the polygon
function middleInside(a, b) {
    var p = a,
        inside = false,
        px = (a.x + b.x) / 2,
        py = (a.y + b.y) / 2;
    do {
        if (((p.y > py) !== (p.next.y > py)) && p.next.y !== p.y &&
                (px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x))
            inside = !inside;
        p = p.next;
    } while (p !== a);

    return inside;
}

// link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
// if one belongs to the outer ring and another to a hole, it merges it into a single ring
function splitPolygon(a, b) {
    var a2 = new Node(a.i, a.x, a.y),
        b2 = new Node(b.i, b.x, b.y),
        an = a.next,
        bp = b.prev;

    a.next = b;
    b.prev = a;

    a2.next = an;
    an.prev = a2;

    b2.next = a2;
    a2.prev = b2;

    bp.next = b2;
    b2.prev = bp;

    return b2;
}

// create a node and optionally link it with previous one (in a circular doubly linked list)
function insertNode(i, x, y, last) {
    var p = new Node(i, x, y);

    if (!last) {
        p.prev = p;
        p.next = p;

    } else {
        p.next = last.next;
        p.prev = last;
        last.next.prev = p;
        last.next = p;
    }
    return p;
}

function removeNode(p) {
    p.next.prev = p.prev;
    p.prev.next = p.next;

    if (p.prevZ) p.prevZ.nextZ = p.nextZ;
    if (p.nextZ) p.nextZ.prevZ = p.prevZ;
}

function Node(i, x, y) {
    // vertice index in coordinates array
    this.i = i;

    // vertex coordinates
    this.x = x;
    this.y = y;

    // previous and next vertice nodes in a polygon ring
    this.prev = null;
    this.next = null;

    // z-order curve value
    this.z = null;

    // previous and next nodes in z-order
    this.prevZ = null;
    this.nextZ = null;

    // indicates whether this is a steiner point
    this.steiner = false;
}

// return a percentage difference between the polygon area and its triangulation area;
// used to verify correctness of triangulation
earcut.deviation = function (data, holeIndices, dim, triangles) {
    var hasHoles = holeIndices && holeIndices.length;
    var outerLen = hasHoles ? holeIndices[0] * dim : data.length;

    var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
    if (hasHoles) {
        for (var i = 0, len = holeIndices.length; i < len; i++) {
            var start = holeIndices[i] * dim;
            var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
            polygonArea -= Math.abs(signedArea(data, start, end, dim));
        }
    }

    var trianglesArea = 0;
    for (i = 0; i < triangles.length; i += 3) {
        var a = triangles[i] * dim;
        var b = triangles[i + 1] * dim;
        var c = triangles[i + 2] * dim;
        trianglesArea += Math.abs(
            (data[a] - data[c]) * (data[b + 1] - data[a + 1]) -
            (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
    }

    return polygonArea === 0 && trianglesArea === 0 ? 0 :
        Math.abs((trianglesArea - polygonArea) / polygonArea);
};

function signedArea(data, start, end, dim) {
    var sum = 0;
    for (var i = start, j = end - dim; i < end; i += dim) {
        sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
        j = i;
    }
    return sum;
}

// turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts
earcut.flatten = function (data) {
    var dim = data[0][0].length,
        result = {vertices: [], holes: [], dimensions: dim},
        holeIndex = 0;

    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
            for (var d = 0; d < dim; d++) result.vertices.push(data[i][j][d]);
        }
        if (i > 0) {
            holeIndex += data[i - 1].length;
            result.holes.push(holeIndex);
        }
    }
    return result;
};


/***/ }),

/***/ "../../node_modules/process/browser.js":
/*!**********************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/process/browser.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../node_modules/regenerator-runtime/runtime-module.js":
/*!*****************************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/regenerator-runtime/runtime-module.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "../../node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "../../node_modules/regenerator-runtime/runtime.js":
/*!**********************************************************************************!*\
  !*** /Users/missx/Documents/deck.gl/node_modules/regenerator-runtime/runtime.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


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
if (!deck.Layer) {
  throw new Error('@deck.gl/core is not found');
}

module.exports = Object.assign(deck, deckGLLayers);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/arc-layer/arc-layer-fragment.glsl.js":
/*!**************************************************!*\
  !*** ./src/arc-layer/arc-layer-fragment.glsl.js ***!
  \**************************************************/
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
#define SHADER_NAME arc-layer-fragment-shader

precision highp float;

varying vec4 vColor;
varying vec2 uv;

void main(void) {
  gl_FragColor = vColor;
  geometry.uv = uv;

  DECKGL_FILTER_COLOR(gl_FragColor, geometry);
}
`);


/***/ }),

/***/ "./src/arc-layer/arc-layer-vertex.glsl.js":
/*!************************************************!*\
  !*** ./src/arc-layer/arc-layer-vertex.glsl.js ***!
  \************************************************/
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
#define SHADER_NAME arc-layer-vertex-shader

attribute vec3 positions;
attribute vec4 instanceSourceColors;
attribute vec4 instanceTargetColors;
attribute vec4 instancePositions;
attribute vec4 instancePositions64Low;
attribute vec3 instancePickingColors;
attribute float instanceWidths;
attribute float instanceHeights;
attribute float instanceTilts;

uniform float numSegments;
uniform float opacity;
uniform float widthScale;
uniform float widthMinPixels;
uniform float widthMaxPixels;

varying vec4 vColor;
varying vec2 uv;

float paraboloid(vec2 source, vec2 target, float ratio) {

  vec2 x = mix(source, target, ratio);
  vec2 center = mix(source, target, 0.5);

  float dSourceCenter = distance(source, center);
  float dXCenter = distance(x, center);
  return (dSourceCenter + dXCenter) * (dSourceCenter - dXCenter);
}

// offset vector by strokeWidth pixels
// offset_direction is -1 (left) or 1 (right)
vec2 getExtrusionOffset(vec2 line_clipspace, float offset_direction, float width) {
  // normalized direction of the line
  vec2 dir_screenspace = normalize(line_clipspace * project_uViewportSize);
  // rotate by 90 degrees
  dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);

  return dir_screenspace * offset_direction * width / 2.0;
}

float getSegmentRatio(float index) {
  return smoothstep(0.0, 1.0, index / (numSegments - 1.0));
}

vec3 getPos(vec2 source, vec2 target, float segmentRatio) {
  float vertexHeight = sqrt(max(0.0, paraboloid(source, target, segmentRatio))) * instanceHeights;

  float tiltAngle = radians(instanceTilts);
  vec2 tiltDirection = normalize(target - source);
  vec2 tilt = vec2(-tiltDirection.y, tiltDirection.x) * vertexHeight * sin(tiltAngle);

  return vec3(
    mix(source, target, segmentRatio) + tilt,
    vertexHeight * cos(tiltAngle)
  );
}

void main(void) {
  geometry.worldPosition = vec3(instancePositions.xy, 0.0);
  geometry.worldPositionAlt = vec3(instancePositions.zw, 0.0);

  vec2 source = project_position(geometry.worldPosition, instancePositions64Low.xy).xy;
  vec2 target = project_position(geometry.worldPositionAlt, instancePositions64Low.zw).xy;

  float segmentIndex = positions.x;
  float segmentRatio = getSegmentRatio(segmentIndex);
  // if it's the first point, use next - current as direction
  // otherwise use current - prev
  float indexDir = mix(-1.0, 1.0, step(segmentIndex, 0.0));
  float nextSegmentRatio = getSegmentRatio(segmentIndex + indexDir);

  vec3 currPos = getPos(source, target, segmentRatio);
  vec3 nextPos = getPos(source, target, nextSegmentRatio);
  vec4 curr = project_common_position_to_clipspace(vec4(currPos, 1.0));
  vec4 next = project_common_position_to_clipspace(vec4(nextPos, 1.0));
  geometry.position = vec4(currPos, 1.0);
  uv = vec2(segmentRatio, positions.y);
  geometry.uv = uv;

  // Multiply out width and clamp to limits
  // mercator pixels are interpreted as screen pixels
  float widthPixels = clamp(
    project_size_to_pixel(instanceWidths * widthScale),
    widthMinPixels, widthMaxPixels
  );

  // extrude
  vec3 offset = vec3(
    getExtrusionOffset((next.xy - curr.xy) * indexDir, positions.y, widthPixels),
    0.0);
  DECKGL_FILTER_SIZE(offset, geometry);
  gl_Position = curr + vec4(project_pixel_size_to_clipspace(offset.xy), 0.0, 0.0);
  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);

  vec4 color = mix(instanceSourceColors, instanceTargetColors, segmentRatio);
  vColor = vec4(color.rgb, color.a * opacity);
  DECKGL_FILTER_COLOR(vColor, geometry);

  // Set color to be rendered to picking fbo (also used to check for selection highlight).
  picking_setPickingColor(instancePickingColors);
}
`);


/***/ }),

/***/ "./src/arc-layer/arc-layer.js":
/*!************************************!*\
  !*** ./src/arc-layer/arc-layer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ArcLayer; });
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @luma.gl/constants */ "@luma.gl/constants");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _arc_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arc-layer-vertex.glsl */ "./src/arc-layer/arc-layer-vertex.glsl.js");
/* harmony import */ var _arc_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./arc-layer-fragment.glsl */ "./src/arc-layer/arc-layer-fragment.glsl.js");
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









const DEFAULT_COLOR = [0, 0, 0, 255];

const defaultProps = {
  getSourcePosition: {type: 'accessor', value: x => x.sourcePosition},
  getTargetPosition: {type: 'accessor', value: x => x.targetPosition},
  getSourceColor: {type: 'accessor', value: DEFAULT_COLOR},
  getTargetColor: {type: 'accessor', value: DEFAULT_COLOR},
  getWidth: {type: 'accessor', value: 1},
  getHeight: {type: 'accessor', value: 1},
  getTilt: {type: 'accessor', value: 0},

  widthUnits: 'pixels',
  widthScale: {type: 'number', value: 1, min: 0},
  widthMinPixels: {type: 'number', value: 0, min: 0},
  widthMaxPixels: {type: 'number', value: Number.MAX_SAFE_INTEGER, min: 0},

  // Deprecated, remove in v8
  getStrokeWidth: {deprecatedFor: 'getWidth'}
};

class ArcLayer extends _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["Layer"] {
  getShaders() {
    return super.getShaders({vs: _arc_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_2__["default"], fs: _arc_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_3__["default"], modules: ['picking']}); // 'project' module added by default.
  }

  initializeState() {
    const attributeManager = this.getAttributeManager();

    /* eslint-disable max-len */
    attributeManager.addInstanced({
      instancePositions: {
        size: 4,
        transition: true,
        accessor: ['getSourcePosition', 'getTargetPosition'],
        update: this.calculateInstancePositions
      },
      instancePositions64Low: {
        size: 4,
        accessor: ['getSourcePosition', 'getTargetPosition'],
        update: this.calculateInstancePositions64Low
      },
      instanceSourceColors: {
        size: this.props.colorFormat.length,
        type: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.UNSIGNED_BYTE,
        normalized: true,
        transition: true,
        accessor: 'getSourceColor',
        defaultValue: DEFAULT_COLOR
      },
      instanceTargetColors: {
        size: this.props.colorFormat.length,
        type: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.UNSIGNED_BYTE,
        normalized: true,
        transition: true,
        accessor: 'getTargetColor',
        defaultValue: DEFAULT_COLOR
      },
      instanceWidths: {
        size: 1,
        transition: true,
        accessor: 'getWidth',
        defaultValue: 1
      },
      instanceHeights: {
        size: 1,
        transition: true,
        accessor: 'getHeight',
        defaultValue: 1
      },
      instanceTilts: {
        size: 1,
        transition: true,
        accessor: 'getTilt',
        defaultValue: 0
      }
    });
    /* eslint-enable max-len */
  }

  updateState({props, oldProps, changeFlags}) {
    super.updateState({props, oldProps, changeFlags});
    // Re-generate model if geometry changed
    if (changeFlags.extensionsChanged) {
      const {gl} = this.context;
      if (this.state.model) {
        this.state.model.delete();
      }
      this.setState({model: this._getModel(gl)});
      this.getAttributeManager().invalidateAll();
    }
  }

  draw({uniforms}) {
    const {viewport} = this.context;
    const {widthUnits, widthScale, widthMinPixels, widthMaxPixels} = this.props;

    const widthMultiplier = widthUnits === 'pixels' ? viewport.distanceScales.metersPerPixel[2] : 1;

    this.state.model
      .setUniforms(
        Object.assign({}, uniforms, {
          widthScale: widthScale * widthMultiplier,
          widthMinPixels,
          widthMaxPixels
        })
      )
      .draw();
  }

  _getModel(gl) {
    let positions = [];
    const NUM_SEGMENTS = 50;
    /*
     *  (0, -1)-------------_(1, -1)
     *       |          _,-"  |
     *       o      _,-"      o
     *       |  _,-"          |
     *   (0, 1)"-------------(1, 1)
     */
    for (let i = 0; i < NUM_SEGMENTS; i++) {
      positions = positions.concat([i, -1, 0, i, 1, 0]);
    }

    const model = new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__["Model"](
      gl,
      Object.assign({}, this.getShaders(), {
        id: this.props.id,
        geometry: new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__["Geometry"]({
          drawMode: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.TRIANGLE_STRIP,
          attributes: {
            positions: new Float32Array(positions)
          }
        }),
        isInstanced: true,
        shaderCache: this.context.shaderCache
      })
    );

    model.setUniforms({numSegments: NUM_SEGMENTS});

    return model;
  }

  calculateInstancePositions(attribute, {startRow, endRow}) {
    const {data, getSourcePosition, getTargetPosition} = this.props;
    const {value, size} = attribute;
    let i = startRow * size;
    const {iterable, objectInfo} = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["createIterable"])(data, startRow, endRow);
    for (const object of iterable) {
      objectInfo.index++;
      const sourcePosition = getSourcePosition(object, objectInfo);
      value[i++] = sourcePosition[0];
      value[i++] = sourcePosition[1];
      // Call `getTargetPosition` after `sourcePosition` is used in case both accessors write into
      // the same temp array
      const targetPosition = getTargetPosition(object, objectInfo);
      value[i++] = targetPosition[0];
      value[i++] = targetPosition[1];
    }
  }

  calculateInstancePositions64Low(attribute, {startRow, endRow}) {
    const isFP64 = this.use64bitPositions();
    attribute.constant = !isFP64;

    if (!isFP64) {
      attribute.value = new Float32Array(4);
      return;
    }

    const {data, getSourcePosition, getTargetPosition} = this.props;
    const {value, size} = attribute;
    let i = startRow * size;
    const {iterable, objectInfo} = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["createIterable"])(data, startRow, endRow);
    for (const object of iterable) {
      objectInfo.index++;
      const sourcePosition = getSourcePosition(object, objectInfo);
      value[i++] = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["fp64LowPart"])(sourcePosition[0]);
      value[i++] = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["fp64LowPart"])(sourcePosition[1]);
      // Call `getTargetPosition` after `sourcePosition` is used in case both accessors write into
      // the same temp array
      const targetPosition = getTargetPosition(object, objectInfo);
      value[i++] = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["fp64LowPart"])(targetPosition[0]);
      value[i++] = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["fp64LowPart"])(targetPosition[1]);
    }
  }
}

ArcLayer.layerName = 'ArcLayer';
ArcLayer.defaultProps = defaultProps;


/***/ }),

/***/ "./src/bitmap-layer/bitmap-layer-fragment.js":
/*!***************************************************!*\
  !*** ./src/bitmap-layer/bitmap-layer-fragment.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
#define SHADER_NAME bitmap-layer-fragment-shader

#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D bitmapTexture;

varying vec2 vTexCoord;

uniform float desaturate;
uniform vec4 transparentColor;
uniform vec3 tintColor;
uniform float opacity;

// apply desaturation
vec3 color_desaturate(vec3 color) {
  float luminance = (color.r + color.g + color.b) * 0.333333333;
  return mix(color, vec3(luminance), desaturate);
}

// apply tint
vec3 color_tint(vec3 color) {
  return color * tintColor;
}

// blend with background color
vec4 apply_opacity(vec3 color, float alpha) {
  return mix(transparentColor, vec4(color, 1.0), alpha);
}

void main(void) {
  vec4 bitmapColor = texture2D(bitmapTexture, vTexCoord);

  gl_FragColor = apply_opacity(color_tint(color_desaturate(bitmapColor.rgb)), bitmapColor.a * opacity);

  geometry.uv = vTexCoord;
  DECKGL_FILTER_COLOR(gl_FragColor, geometry);
}
`);


/***/ }),

/***/ "./src/bitmap-layer/bitmap-layer-vertex.js":
/*!*************************************************!*\
  !*** ./src/bitmap-layer/bitmap-layer-vertex.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
#define SHADER_NAME bitmap-layer-vertex-shader

attribute vec2 texCoords;
attribute vec3 positions;
attribute vec2 positions64xyLow;
attribute vec3 instancePickingColors;

varying vec2 vTexCoord;

void main(void) {
  geometry.worldPosition = positions;
  geometry.uv = texCoords;

  gl_Position = project_position_to_clipspace(positions, positions64xyLow, vec3(0.0), geometry.position);
  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);

  vTexCoord = texCoords;

  picking_setPickingColor(instancePickingColors);
}
`);


/***/ }),

/***/ "./src/bitmap-layer/bitmap-layer.js":
/*!******************************************!*\
  !*** ./src/bitmap-layer/bitmap-layer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BitmapLayer; });
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "@luma.gl/constants");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bitmap_layer_vertex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bitmap-layer-vertex */ "./src/bitmap-layer/bitmap-layer-vertex.js");
/* harmony import */ var _bitmap_layer_fragment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bitmap-layer-fragment */ "./src/bitmap-layer/bitmap-layer-fragment.js");
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

/* global HTMLVideoElement */







const DEFAULT_TEXTURE_PARAMETERS = {
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_MIN_FILTER]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.LINEAR_MIPMAP_LINEAR,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_MAG_FILTER]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.LINEAR,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_WRAP_S]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.CLAMP_TO_EDGE,
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_WRAP_T]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.CLAMP_TO_EDGE
};

const defaultProps = {
  image: {type: 'object', value: null, async: true},
  bounds: {type: 'array', value: [1, 0, 0, 1], compare: true},

  desaturate: {type: 'number', min: 0, max: 1, value: 0},
  // More context: because of the blending mode we're using for ground imagery,
  // alpha is not effective when blending the bitmap layers with the base map.
  // Instead we need to manually dim/blend rgb values with a background color.
  transparentColor: {type: 'color', value: [0, 0, 0, 0]},
  tintColor: {type: 'color', value: [255, 255, 255]}
};

/*
 * @class
 * @param {object} props
 * @param {number} props.transparentColor - color to interpret transparency to
 * @param {number} props.tintColor - color bias
 */
class BitmapLayer extends _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["Layer"] {
  getShaders() {
    return super.getShaders({vs: _bitmap_layer_vertex__WEBPACK_IMPORTED_MODULE_2__["default"], fs: _bitmap_layer_fragment__WEBPACK_IMPORTED_MODULE_3__["default"], modules: ['project32', 'picking']});
  }

  initializeState() {
    const attributeManager = this.getAttributeManager();

    attributeManager.add({
      positions: {
        size: 3,
        update: this.calculatePositions,
        value: new Float32Array(12),
        noAlloc: true
      },
      positions64xyLow: {
        size: 3,
        update: this.calculatePositions64xyLow,
        value: new Float32Array(12),
        noAlloc: true
      }
    });

    this.setState({numInstances: 1});
  }

  updateState({props, oldProps, changeFlags}) {
    // setup model first
    if (changeFlags.extensionsChanged) {
      const {gl} = this.context;
      if (this.state.model) {
        this.state.model.delete();
      }
      this.setState({model: this._getModel(gl)});
      this.getAttributeManager().invalidateAll();
    }

    if (props.image !== oldProps.image) {
      this.loadTexture(props.image);
    }

    const attributeManager = this.getAttributeManager();

    if (props.bounds !== oldProps.bounds) {
      this.setState({
        positions: this._getPositionsFromBounds(props.bounds)
      });
      attributeManager.invalidate('positions');
      attributeManager.invalidate('positions64xyLow');
    }
  }

  finalizeState() {
    super.finalizeState();

    if (this.state.bitmapTexture) {
      this.state.bitmapTexture.delete();
    }
  }

  _getPositionsFromBounds(bounds) {
    const positions = new Array(12);
    // bounds as [minX, minY, maxX, maxY]
    if (Number.isFinite(bounds[0])) {
      /*
        (minX0, maxY3) ---- (maxX2, maxY3)
               |                  |
               |                  |
               |                  |
        (minX0, minY1) ---- (maxX2, minY1)
     */
      positions[0] = bounds[0];
      positions[1] = bounds[1];
      positions[2] = 0;

      positions[3] = bounds[0];
      positions[4] = bounds[3];
      positions[5] = 0;

      positions[6] = bounds[2];
      positions[7] = bounds[3];
      positions[8] = 0;

      positions[9] = bounds[2];
      positions[10] = bounds[1];
      positions[11] = 0;
    } else {
      // [[minX, minY], [minX, maxY], [maxX, maxY], [maxX, minY]]
      for (let i = 0; i < bounds.length; i++) {
        positions[i * 3 + 0] = bounds[i][0];
        positions[i * 3 + 1] = bounds[i][1];
        positions[i * 3 + 2] = bounds[i][2] || 0;
      }
    }

    return positions;
  }

  _getModel(gl) {
    if (!gl) {
      return null;
    }

    /*
      0,1 --- 1,1
       |       |
      0,0 --- 1,0
    */
    return new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["Model"](
      gl,
      Object.assign({}, this.getShaders(), {
        id: this.props.id,
        shaderCache: this.context.shaderCache,
        geometry: new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["Geometry"]({
          drawMode: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TRIANGLE_FAN,
          vertexCount: 4,
          attributes: {
            texCoords: new Float32Array([0, 0, 0, 1, 1, 1, 1, 0])
          }
        }),
        isInstanced: false
      })
    );
  }

  draw(opts) {
    const {uniforms} = opts;
    const {bitmapTexture, model} = this.state;
    const {image, desaturate, transparentColor, tintColor} = this.props;

    // Update video frame
    if (
      bitmapTexture &&
      image instanceof HTMLVideoElement &&
      image.readyState > HTMLVideoElement.HAVE_METADATA
    ) {
      const sizeChanged =
        bitmapTexture.width !== image.videoWidth || bitmapTexture.height !== image.videoHeight;
      if (sizeChanged) {
        // note clears image and mipmaps when resizing
        bitmapTexture.resize({width: image.videoWidth, height: image.videoHeight, mipmaps: true});
        bitmapTexture.setSubImageData({
          data: image,
          paramters: DEFAULT_TEXTURE_PARAMETERS
        });
      } else {
        bitmapTexture.setSubImageData({
          data: image
        });
      }

      bitmapTexture.generateMipmap();
    }

    // // TODO fix zFighting
    // Render the image
    if (bitmapTexture && model) {
      model
        .setUniforms(
          Object.assign({}, uniforms, {
            bitmapTexture,
            desaturate,
            transparentColor: transparentColor.map(x => x / 255),
            tintColor: tintColor.slice(0, 3).map(x => x / 255)
          })
        )
        .draw();
    }
  }

  loadTexture(image) {
    const {gl} = this.context;

    if (this.state.bitmapTexture) {
      this.state.bitmapTexture.delete();
    }

    if (image instanceof _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["Texture2D"]) {
      this.setState({bitmapTexture: image});
    } else if (image instanceof HTMLVideoElement) {
      // Initialize an empty texture while we wait for the video to load
      this.setState({
        bitmapTexture: new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["Texture2D"](gl, {
          width: 1,
          height: 1,
          parameters: DEFAULT_TEXTURE_PARAMETERS,
          mipmaps: false
        })
      });
    } else if (image) {
      // Browser object: Image, ImageData, HTMLCanvasElement, ImageBitmap
      this.setState({
        bitmapTexture: new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["Texture2D"](gl, {
          data: image,
          parameters: DEFAULT_TEXTURE_PARAMETERS
        })
      });
    }
  }

  calculatePositions({value}) {
    const {positions} = this.state;
    value.set(positions);
  }

  calculatePositions64xyLow(attribute) {
    const isFP64 = this.use64bitPositions();
    attribute.constant = !isFP64;

    if (!isFP64) {
      attribute.value = new Float32Array(4);
      return;
    }

    const {value} = attribute;
    value.set(this.state.positions.map(_deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["fp64LowPart"]));
  }
}

BitmapLayer.layerName = 'BitmapLayer';
BitmapLayer.defaultProps = defaultProps;


/***/ }),

/***/ "./src/column-layer/column-geometry.js":
/*!*********************************************!*\
  !*** ./src/column-layer/column-geometry.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColumnGeometry; });
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @luma.gl/core */ "@luma.gl/constants");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_core__WEBPACK_IMPORTED_MODULE_1__);



class ColumnGeometry extends _luma_gl_core__WEBPACK_IMPORTED_MODULE_1__["Geometry"] {
  constructor(props = {}) {
    const {id = Object(_luma_gl_core__WEBPACK_IMPORTED_MODULE_1__["uid"])('column-geometry')} = props;
    const {indices, attributes} = tesselateColumn(props);
    super({
      ...props,
      id,
      indices,
      attributes
    });
  }
}

/* eslint-disable max-statements, complexity */
function tesselateColumn(props) {
  const {radius, height = 1, nradial = 10, vertices} = props;
  _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["log"].assert(!vertices || vertices.length >= nradial);

  const vertsAroundEdge = nradial + 1; // loop
  const numVertices = vertsAroundEdge * 3; // top, side top edge, side bottom edge

  const stepAngle = (Math.PI * 2) / nradial;

  // Used for wireframe
  const indices = new Uint16Array(nradial * 3 * 2); // top loop, side vertical, bottom loop

  const positions = new Float32Array(numVertices * 3);
  const normals = new Float32Array(numVertices * 3);

  let i = 0;

  // side tesselation: 0, 1, 2, 3, 4, 5, ...
  //
  // 0 - 2 - 4  ... top
  // | / | / |
  // 1 - 3 - 5  ... bottom
  //
  for (let j = 0; j < vertsAroundEdge; j++) {
    const a = j * stepAngle;
    const vertex = vertices && vertices[j % nradial];
    const nextVertex = vertices && vertices[(j + 1) % nradial];
    const sin = Math.sin(a);
    const cos = Math.cos(a);

    for (let k = 0; k < 2; k++) {
      positions[i + 0] = vertex ? vertex[0] : cos * radius;
      positions[i + 1] = vertex ? vertex[1] : sin * radius;
      positions[i + 2] = (1 / 2 - k) * height;

      normals[i + 0] = vertex ? nextVertex[0] - vertex[0] : cos;
      normals[i + 1] = vertex ? nextVertex[1] - vertex[1] : sin;

      i += 3;
    }
  }

  // top tesselation: 0, -1, 1, -2, 2, -3, 3, ...
  //
  //    0 -- 1
  //   /      \
  // -1        2
  //  |        |
  // -2        3
  //   \      /
  //   -3 -- 4
  //
  for (let j = 0; j < vertsAroundEdge; j++) {
    const v = Math.floor(j / 2) * Math.sign((j % 2) - 0.5);
    const a = v * stepAngle;
    const vertex = vertices && vertices[(v + nradial) % nradial];
    const sin = Math.sin(a);
    const cos = Math.cos(a);

    positions[i + 0] = vertex ? vertex[0] : cos * radius;
    positions[i + 1] = vertex ? vertex[1] : sin * radius;
    positions[i + 2] = height / 2;

    normals[i + 2] = 1;

    i += 3;
  }

  let index = 0;
  for (let j = 0; j < nradial; j++) {
    // top loop
    indices[index++] = j * 2 + 0;
    indices[index++] = j * 2 + 2;
    // side vertical
    indices[index++] = j * 2 + 0;
    indices[index++] = j * 2 + 1;
    // bottom loop
    indices[index++] = j * 2 + 1;
    indices[index++] = j * 2 + 3;
  }

  return {
    indices,
    attributes: {
      POSITION: {size: 3, value: positions},
      NORMAL: {size: 3, value: normals}
    }
  };
}


/***/ }),

/***/ "./src/column-layer/column-layer-fragment.glsl.js":
/*!********************************************************!*\
  !*** ./src/column-layer/column-layer-fragment.glsl.js ***!
  \********************************************************/
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
#define SHADER_NAME column-layer-fragment-shader

precision highp float;

varying vec4 vColor;

void main(void) {
  gl_FragColor = vColor;
  DECKGL_FILTER_COLOR(gl_FragColor, geometry);
}
`);


/***/ }),

/***/ "./src/column-layer/column-layer-vertex.glsl.js":
/*!******************************************************!*\
  !*** ./src/column-layer/column-layer-vertex.glsl.js ***!
  \******************************************************/
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
`);


/***/ }),

/***/ "./src/column-layer/column-layer.js":
/*!******************************************!*\
  !*** ./src/column-layer/column-layer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColumnLayer; });
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @luma.gl/constants */ "@luma.gl/constants");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _column_geometry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./column-geometry */ "./src/column-layer/column-geometry.js");
/* harmony import */ var _column_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./column-layer-vertex.glsl */ "./src/column-layer/column-layer-vertex.glsl.js");
/* harmony import */ var _column_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./column-layer-fragment.glsl */ "./src/column-layer/column-layer-fragment.glsl.js");
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




const DEFAULT_COLOR = [0, 0, 0, 255];

const defaultProps = {
  diskResolution: {type: 'number', min: 4, value: 20},
  vertices: null,
  radius: {type: 'number', min: 0, value: 1000},
  angle: {type: 'number', value: 0},
  offset: {type: 'array', value: [0, 0]},
  coverage: {type: 'number', min: 0, max: 1, value: 1},
  elevationScale: {type: 'number', min: 0, value: 1},

  lineWidthUnits: 'meters',
  lineWidthScale: 1,
  lineWidthMinPixels: 0,
  lineWidthMaxPixels: Number.MAX_SAFE_INTEGER,

  extruded: true,
  wireframe: false,
  filled: true,
  stroked: false,

  getPosition: {type: 'accessor', value: x => x.position},
  getFillColor: {type: 'accessor', value: DEFAULT_COLOR},
  getLineColor: {type: 'accessor', value: DEFAULT_COLOR},
  getLineWidth: {type: 'accessor', value: 1},
  getElevation: {type: 'accessor', value: 1000},
  material: defaultMaterial,
  getColor: {deprecatedFor: ['getFillColor', 'getLineColor']}
};

class ColumnLayer extends _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["Layer"] {
  getShaders() {
    return super.getShaders({vs: _column_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_3__["default"], fs: _column_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_4__["default"], modules: ['project32', 'gouraud-lighting', 'picking']});
  }

  /**
   * DeckGL calls initializeState when GL context is available
   * Essentially a deferred constructor
   */
  initializeState() {
    const attributeManager = this.getAttributeManager();
    /* eslint-disable max-len */
    attributeManager.addInstanced({
      instancePositions: {
        size: 3,
        transition: true,
        accessor: 'getPosition'
      },
      instanceElevations: {
        size: 1,
        transition: true,
        accessor: 'getElevation'
      },
      instancePositions64xyLow: {
        size: 2,
        accessor: 'getPosition',
        update: this.calculateInstancePositions64xyLow
      },
      instanceFillColors: {
        size: this.props.colorFormat.length,
        type: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.UNSIGNED_BYTE,
        normalized: true,
        transition: true,
        accessor: 'getFillColor',
        defaultValue: DEFAULT_COLOR
      },
      instanceLineColors: {
        size: this.props.colorFormat.length,
        type: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.UNSIGNED_BYTE,
        normalized: true,
        transition: true,
        accessor: 'getLineColor',
        defaultValue: DEFAULT_COLOR
      },
      instanceStrokeWidths: {
        size: 1,
        accessor: 'getLineWidth',
        transition: true
      }
    });
    /* eslint-enable max-len */
  }

  updateState({props, oldProps, changeFlags}) {
    super.updateState({props, oldProps, changeFlags});

    const regenerateModels = changeFlags.extensionsChanged;

    if (regenerateModels) {
      const {gl} = this.context;
      if (this.state.model) {
        this.state.model.delete();
      }
      this.setState({model: this._getModel(gl)});
      this.getAttributeManager().invalidateAll();
    }

    if (
      regenerateModels ||
      props.diskResolution !== oldProps.diskResolution ||
      props.vertices !== oldProps.vertices
    ) {
      this._updateGeometry(props);
    }
  }

  getGeometry(diskResolution, vertices) {
    const geometry = new _column_geometry__WEBPACK_IMPORTED_MODULE_2__["default"]({
      radius: 1,
      height: 2,
      vertices,
      nradial: diskResolution
    });

    let meanVertexDistance = 0;
    if (vertices) {
      for (let i = 0; i < diskResolution; i++) {
        const p = vertices[i];
        const d = Math.sqrt(p[0] * p[0] + p[1] * p[1]);
        meanVertexDistance += d / diskResolution;
      }
    } else {
      meanVertexDistance = 1;
    }
    this.setState({
      edgeDistance: Math.cos(Math.PI / diskResolution) * meanVertexDistance
    });

    return geometry;
  }

  _getModel(gl) {
    return new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__["Model"](
      gl,
      Object.assign({}, this.getShaders(), {
        id: this.props.id,
        isInstanced: true,
        shaderCache: this.context.shaderCache
      })
    );
  }

  _updateGeometry({diskResolution, vertices}) {
    const geometry = this.getGeometry(diskResolution, vertices);

    this.setState({
      fillVertexCount: geometry.attributes.POSITION.value.length / 3,
      wireframeVertexCount: geometry.indices.value.length
    });

    this.state.model.setProps({geometry});
  }

  draw({uniforms}) {
    const {viewport} = this.context;
    const {
      lineWidthUnits,
      lineWidthScale,
      lineWidthMinPixels,
      lineWidthMaxPixels,

      elevationScale,
      extruded,
      filled,
      stroked,
      wireframe,
      offset,
      coverage,
      radius,
      angle
    } = this.props;
    const {model, fillVertexCount, wireframeVertexCount, edgeDistance} = this.state;

    const widthMultiplier =
      lineWidthUnits === 'pixels' ? viewport.distanceScales.metersPerPixel[2] : 1;

    model.setUniforms(
      Object.assign({}, uniforms, {
        radius,
        angle: (angle / 180) * Math.PI,
        offset,
        extruded,
        coverage,
        elevationScale,
        edgeDistance,
        widthScale: lineWidthScale * widthMultiplier,
        widthMinPixels: lineWidthMinPixels,
        widthMaxPixels: lineWidthMaxPixels
      })
    );

    // When drawing 3d: draw wireframe first so it doesn't get occluded by depth test
    if (extruded && wireframe) {
      model.setProps({isIndexed: true});
      model
        .setVertexCount(wireframeVertexCount)
        .setDrawMode(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.LINES)
        .setUniforms({isStroke: true})
        .draw();
    }
    if (filled) {
      model.setProps({isIndexed: false});
      model
        .setVertexCount(fillVertexCount)
        .setDrawMode(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.TRIANGLE_STRIP)
        .setUniforms({isStroke: false})
        .draw();
    }
    // When drawing 2d: draw fill before stroke so that the outline is always on top
    if (!extruded && stroked) {
      model.setProps({isIndexed: false});
      // The width of the stroke is achieved by flattening the side of the cylinder.
      // Skip the last 1/3 of the vertices which is the top.
      model
        .setVertexCount((fillVertexCount * 2) / 3)
        .setDrawMode(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.TRIANGLE_STRIP)
        .setUniforms({isStroke: true})
        .draw();
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

ColumnLayer.layerName = 'ColumnLayer';
ColumnLayer.defaultProps = defaultProps;


/***/ }),

/***/ "./src/column-layer/grid-cell-layer.js":
/*!*********************************************!*\
  !*** ./src/column-layer/grid-cell-layer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridCellLayer; });
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/core */ "@luma.gl/constants");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _column_layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./column-layer */ "./src/column-layer/column-layer.js");
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




const defaultProps = {
  cellSize: {type: 'number', min: 0, value: 1000},
  offset: {type: 'array', min: 0, value: [1, 1]}
};

class GridCellLayer extends _column_layer__WEBPACK_IMPORTED_MODULE_1__["default"] {
  getGeometry(diskResolution) {
    return new _luma_gl_core__WEBPACK_IMPORTED_MODULE_0__["CubeGeometry"]();
  }

  draw({uniforms}) {
    const {elevationScale, extruded, offset, coverage, cellSize, angle} = this.props;
    this.state.model
      .setUniforms(
        Object.assign({}, uniforms, {
          radius: cellSize / 2,
          angle,
          offset,
          extruded,
          coverage,
          elevationScale,
          edgeDistance: 1,
          isWireframe: false
        })
      )
      .draw();
  }
}

GridCellLayer.layerName = 'GridCellLayer';
GridCellLayer.defaultProps = defaultProps;


/***/ }),

/***/ "./src/geojson-layer/geojson-layer.js":
/*!********************************************!*\
  !*** ./src/geojson-layer/geojson-layer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GeoJsonLayer; });
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scatterplot_layer_scatterplot_layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scatterplot-layer/scatterplot-layer */ "./src/scatterplot-layer/scatterplot-layer.js");
/* harmony import */ var _path_layer_path_layer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../path-layer/path-layer */ "./src/path-layer/path-layer.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @luma.gl/core */ "@luma.gl/constants");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _solid_polygon_layer_solid_polygon_layer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../solid-polygon-layer/solid-polygon-layer */ "./src/solid-polygon-layer/solid-polygon-layer.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _geojson__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./geojson */ "./src/geojson-layer/geojson.js");
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





// Use primitive layer to avoid "Composite Composite" layers for now





const defaultLineColor = [0, 0, 0, 255];
const defaultFillColor = [0, 0, 0, 255];
const defaultMaterial = new _luma_gl_core__WEBPACK_IMPORTED_MODULE_3__["PhongMaterial"]();

const defaultProps = {
  stroked: true,
  filled: true,
  extruded: false,
  wireframe: false,

  lineWidthUnits: 'meters',
  lineWidthScale: 1,
  lineWidthMinPixels: 0,
  lineWidthMaxPixels: Number.MAX_SAFE_INTEGER,
  lineJointRounded: false,
  lineMiterLimit: 4,

  elevationScale: 1,

  pointRadiusScale: 1,
  pointRadiusMinPixels: 0, //  min point radius in pixels
  pointRadiusMaxPixels: Number.MAX_SAFE_INTEGER, // max point radius in pixels

  lineDashJustified: false,

  // Line and polygon outline color
  getLineColor: {type: 'accessor', value: defaultLineColor},
  // Point and polygon fill color
  getFillColor: {type: 'accessor', value: defaultFillColor},
  // Point radius
  getRadius: {type: 'accessor', value: 1},
  // Line and polygon outline accessors
  getLineWidth: {type: 'accessor', value: 1},
  // Line dash array accessor
  getLineDashArray: {type: 'accessor', value: [0, 0]},
  // Polygon extrusion accessor
  getElevation: {type: 'accessor', value: 1000},
  // Optional material for 'lighting' shader module
  material: defaultMaterial
};

function getCoordinates(f) {
  return f.geometry.coordinates;
}

class GeoJsonLayer extends _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["CompositeLayer"] {
  initializeState() {
    this.state = {
      features: {}
    };
  }

  updateState({props, changeFlags}) {
    if (!changeFlags.dataChanged) {
      return;
    }
    const features = Object(_geojson__WEBPACK_IMPORTED_MODULE_6__["getGeojsonFeatures"])(props.data);
    const wrapFeature = this.getSubLayerRow.bind(this);

    if (Array.isArray(changeFlags.dataChanged)) {
      const oldFeatures = this.state.features;
      const newFeatures = {};
      const featuresDiff = {};
      for (const key in oldFeatures) {
        newFeatures[key] = oldFeatures[key].slice();
        featuresDiff[key] = [];
      }

      for (const dataRange of changeFlags.dataChanged) {
        const partialFeatures = Object(_geojson__WEBPACK_IMPORTED_MODULE_6__["separateGeojsonFeatures"])(features, wrapFeature, dataRange);
        for (const key in oldFeatures) {
          featuresDiff[key].push(
            Object(_utils__WEBPACK_IMPORTED_MODULE_5__["replaceInRange"])({
              data: newFeatures[key],
              getIndex: f => f.__source.index,
              dataRange,
              replace: partialFeatures[key]
            })
          );
        }
      }
      this.setState({features: newFeatures, featuresDiff});
    } else {
      this.setState({
        features: Object(_geojson__WEBPACK_IMPORTED_MODULE_6__["separateGeojsonFeatures"])(features, wrapFeature),
        featuresDiff: {}
      });
    }
  }

  /* eslint-disable complexity */
  renderLayers() {
    const {features, featuresDiff} = this.state;
    const {pointFeatures, lineFeatures, polygonFeatures, polygonOutlineFeatures} = features;

    // Layer composition props
    const {stroked, filled, extruded, wireframe, material, transitions} = this.props;

    // Rendering props underlying layer
    const {
      lineWidthUnits,
      lineWidthScale,
      lineWidthMinPixels,
      lineWidthMaxPixels,
      lineJointRounded,
      lineMiterLimit,
      pointRadiusScale,
      pointRadiusMinPixels,
      pointRadiusMaxPixels,
      elevationScale,
      lineDashJustified
    } = this.props;

    // Accessor props for underlying layers
    const {
      getLineColor,
      getFillColor,
      getRadius,
      getLineWidth,
      getLineDashArray,
      getElevation,
      updateTriggers
    } = this.props;

    const PolygonFillLayer = this.getSubLayerClass('polygons-fill', _solid_polygon_layer_solid_polygon_layer__WEBPACK_IMPORTED_MODULE_4__["default"]);
    const PolygonStrokeLayer = this.getSubLayerClass('polygons-stroke', _path_layer_path_layer__WEBPACK_IMPORTED_MODULE_2__["default"]);
    const LineStringsLayer = this.getSubLayerClass('line-strings', _path_layer_path_layer__WEBPACK_IMPORTED_MODULE_2__["default"]);
    const PointsLayer = this.getSubLayerClass('points', _scatterplot_layer_scatterplot_layer__WEBPACK_IMPORTED_MODULE_1__["default"]);

    // Filled Polygon Layer
    const polygonFillLayer =
      this.shouldRenderSubLayer('polygons-fill', polygonFeatures) &&
      new PolygonFillLayer(
        {
          _dataDiff: featuresDiff.polygonFeatures && (() => featuresDiff.polygonFeatures),

          extruded,
          elevationScale,
          filled,
          wireframe,
          material,
          getElevation: this.getSubLayerAccessor(getElevation),
          getFillColor: this.getSubLayerAccessor(getFillColor),
          getLineColor: this.getSubLayerAccessor(getLineColor),

          transitions: transitions && {
            getPolygon: transitions.geometry,
            getElevation: transitions.getElevation,
            getFillColor: transitions.getFillColor,
            getLineColor: transitions.getLineColor
          }
        },
        this.getSubLayerProps({
          id: 'polygons-fill',
          updateTriggers: {
            getElevation: updateTriggers.getElevation,
            getFillColor: updateTriggers.getFillColor,
            getLineColor: updateTriggers.getLineColor
          }
        }),
        {
          data: polygonFeatures,
          getPolygon: getCoordinates
        }
      );

    const polygonLineLayer =
      !extruded &&
      stroked &&
      this.shouldRenderSubLayer('polygons-stroke', polygonOutlineFeatures) &&
      new PolygonStrokeLayer(
        {
          _dataDiff:
            featuresDiff.polygonOutlineFeatures && (() => featuresDiff.polygonOutlineFeatures),

          widthUnits: lineWidthUnits,
          widthScale: lineWidthScale,
          widthMinPixels: lineWidthMinPixels,
          widthMaxPixels: lineWidthMaxPixels,
          rounded: lineJointRounded,
          miterLimit: lineMiterLimit,
          dashJustified: lineDashJustified,

          getColor: this.getSubLayerAccessor(getLineColor),
          getWidth: this.getSubLayerAccessor(getLineWidth),
          getDashArray: this.getSubLayerAccessor(getLineDashArray),

          transitions: transitions && {
            getPath: transitions.geometry,
            getColor: transitions.getLineColor,
            getWidth: transitions.getLineWidth
          }
        },
        this.getSubLayerProps({
          id: 'polygons-stroke',
          updateTriggers: {
            getColor: updateTriggers.getLineColor,
            getWidth: updateTriggers.getLineWidth,
            getDashArray: updateTriggers.getLineDashArray
          }
        }),
        {
          data: polygonOutlineFeatures,
          getPath: getCoordinates
        }
      );

    const pathLayer =
      this.shouldRenderSubLayer('linestrings', lineFeatures) &&
      new LineStringsLayer(
        {
          _dataDiff: featuresDiff.lineFeatures && (() => featuresDiff.lineFeatures),

          widthUnits: lineWidthUnits,
          widthScale: lineWidthScale,
          widthMinPixels: lineWidthMinPixels,
          widthMaxPixels: lineWidthMaxPixels,
          rounded: lineJointRounded,
          miterLimit: lineMiterLimit,
          dashJustified: lineDashJustified,

          getColor: this.getSubLayerAccessor(getLineColor),
          getWidth: this.getSubLayerAccessor(getLineWidth),
          getDashArray: this.getSubLayerAccessor(getLineDashArray),

          transitions: transitions && {
            getPath: transitions.geometry,
            getColor: transitions.getLineColor,
            getWidth: transitions.getLineWidth
          }
        },
        this.getSubLayerProps({
          id: 'line-strings',
          updateTriggers: {
            getColor: updateTriggers.getLineColor,
            getWidth: updateTriggers.getLineWidth,
            getDashArray: updateTriggers.getLineDashArray
          }
        }),
        {
          data: lineFeatures,
          getPath: getCoordinates
        }
      );

    const pointLayer =
      this.shouldRenderSubLayer('points', pointFeatures) &&
      new PointsLayer(
        {
          _dataDiff: featuresDiff.pointFeatures && (() => featuresDiff.pointFeatures),

          stroked,
          filled,
          radiusScale: pointRadiusScale,
          radiusMinPixels: pointRadiusMinPixels,
          radiusMaxPixels: pointRadiusMaxPixels,
          lineWidthUnits,
          lineWidthScale,
          lineWidthMinPixels,
          lineWidthMaxPixels,

          getFillColor: this.getSubLayerAccessor(getFillColor),
          getLineColor: this.getSubLayerAccessor(getLineColor),
          getRadius: this.getSubLayerAccessor(getRadius),
          getLineWidth: this.getSubLayerAccessor(getLineWidth),

          transitions: transitions && {
            getPosition: transitions.geometry,
            getFillColor: transitions.getFillColor,
            getLineColor: transitions.getLineColor,
            getRadius: transitions.getRadius,
            getLineWidth: transitions.getLineWidth
          }
        },
        this.getSubLayerProps({
          id: 'points',
          updateTriggers: {
            getFillColor: updateTriggers.getFillColor,
            getLineColor: updateTriggers.getLineColor,
            getRadius: updateTriggers.getRadius,
            getLineWidth: updateTriggers.getLineWidth
          }
        }),
        {
          data: pointFeatures,
          getPosition: getCoordinates
        }
      );

    return [
      // If not extruded: flat fill layer is drawn below outlines
      !extruded && polygonFillLayer,
      polygonLineLayer,
      pathLayer,
      pointLayer,
      // If extruded: draw fill layer last for correct blending behavior
      extruded && polygonFillLayer
    ];
  }
  /* eslint-enable complexity */
}

GeoJsonLayer.layerName = 'GeoJsonLayer';
GeoJsonLayer.defaultProps = defaultProps;


/***/ }),

/***/ "./src/geojson-layer/geojson.js":
/*!**************************************!*\
  !*** ./src/geojson-layer/geojson.js ***!
  \**************************************/
/*! exports provided: getGeojsonFeatures, separateGeojsonFeatures, validateGeometry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGeojsonFeatures", function() { return getGeojsonFeatures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "separateGeojsonFeatures", function() { return separateGeojsonFeatures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateGeometry", function() { return validateGeometry; });
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


/**
 * "Normalizes" complete or partial GeoJSON data into iterable list of features
 * Can accept GeoJSON geometry or "Feature", "FeatureCollection" in addition
 * to plain arrays and iterables.
 * Works by extracting the feature array or wrapping single objects in an array,
 * so that subsequent code can simply iterate over features.
 *
 * @param {object} geojson - geojson data
 * @param {Object|Array} data - geojson object (FeatureCollection, Feature or
 *  Geometry) or array of features
 * @return {Array|"iteratable"} - iterable list of features
 */
function getGeojsonFeatures(geojson) {
  // If array, assume this is a list of features
  if (Array.isArray(geojson)) {
    return geojson;
  }

  _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["log"].assert(geojson.type, 'GeoJSON does not have type');

  switch (geojson.type) {
    case 'Feature':
      // Wrap the feature in a 'Features' array
      return [geojson];
    case 'FeatureCollection':
      // Just return the 'Features' array from the collection
      _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["log"].assert(Array.isArray(geojson.features), 'GeoJSON does not have features array');
      return geojson.features;
    default:
      // Assume it's a geometry, we'll check type in separateGeojsonFeatures
      // Wrap the geometry object in a 'Feature' object and wrap in an array
      return [{geometry: geojson}];
  }
}

// Linearize
function separateGeojsonFeatures(features, wrapFeature, dataRange = {}) {
  const separated = {
    pointFeatures: [],
    lineFeatures: [],
    polygonFeatures: [],
    polygonOutlineFeatures: []
  };
  const {startRow = 0, endRow = features.length} = dataRange;

  for (let featureIndex = startRow; featureIndex < endRow; featureIndex++) {
    const feature = features[featureIndex];

    _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["log"].assert(feature && feature.geometry, 'GeoJSON does not have geometry');

    const {geometry} = feature;

    if (geometry.type === 'GeometryCollection') {
      _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["log"].assert(Array.isArray(geometry.geometries), 'GeoJSON does not have geometries array');
      const {geometries} = geometry;
      for (let i = 0; i < geometries.length; i++) {
        const subGeometry = geometries[i];
        separateGeometry(subGeometry, separated, wrapFeature, feature, featureIndex);
      }
    } else {
      separateGeometry(geometry, separated, wrapFeature, feature, featureIndex);
    }
  }

  return separated;
}

function separateGeometry(geometry, separated, wrapFeature, sourceFeature, sourceFeatureIndex) {
  const {type, coordinates} = geometry;
  const {pointFeatures, lineFeatures, polygonFeatures, polygonOutlineFeatures} = separated;

  if (!validateGeometry(type, coordinates)) {
    // Avoid hard failure if some features are malformed
    _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["log"].warn(`${type} coordinates are malformed`)();
    return;
  }

  // Split each feature, but keep track of the source feature and index (for Multi* geometries)
  switch (type) {
    case 'Point':
      pointFeatures.push(
        wrapFeature(
          {
            geometry
          },
          sourceFeature,
          sourceFeatureIndex
        )
      );
      break;
    case 'MultiPoint':
      coordinates.forEach(point => {
        pointFeatures.push(
          wrapFeature(
            {
              geometry: {type: 'Point', coordinates: point}
            },
            sourceFeature,
            sourceFeatureIndex
          )
        );
      });
      break;
    case 'LineString':
      lineFeatures.push(
        wrapFeature(
          {
            geometry
          },
          sourceFeature,
          sourceFeatureIndex
        )
      );
      break;
    case 'MultiLineString':
      // Break multilinestrings into multiple lines
      coordinates.forEach(path => {
        lineFeatures.push(
          wrapFeature(
            {
              geometry: {type: 'LineString', coordinates: path}
            },
            sourceFeature,
            sourceFeatureIndex
          )
        );
      });
      break;
    case 'Polygon':
      polygonFeatures.push(
        wrapFeature(
          {
            geometry
          },
          sourceFeature,
          sourceFeatureIndex
        )
      );
      // Break polygon into multiple lines
      coordinates.forEach(path => {
        polygonOutlineFeatures.push(
          wrapFeature(
            {
              geometry: {type: 'LineString', coordinates: path}
            },
            sourceFeature,
            sourceFeatureIndex
          )
        );
      });
      break;
    case 'MultiPolygon':
      // Break multipolygons into multiple polygons
      coordinates.forEach(polygon => {
        polygonFeatures.push(
          wrapFeature(
            {
              geometry: {type: 'Polygon', coordinates: polygon}
            },
            sourceFeature,
            sourceFeatureIndex
          )
        );
        // Break polygon into multiple lines
        polygon.forEach(path => {
          polygonOutlineFeatures.push(
            wrapFeature(
              {
                geometry: {type: 'LineString', coordinates: path}
              },
              sourceFeature,
              sourceFeatureIndex
            )
          );
        });
      });
      break;
    default:
  }
}

/**
 * Simple GeoJSON validation util. For perf reasons we do not validate against the full spec,
 * only the following:
   - geometry.type is supported
   - geometry.coordinate has correct nesting level
 */
const COORDINATE_NEST_LEVEL = {
  Point: 1,
  MultiPoint: 2,
  LineString: 2,
  MultiLineString: 3,
  Polygon: 3,
  MultiPolygon: 4
};

function validateGeometry(type, coordinates) {
  let nestLevel = COORDINATE_NEST_LEVEL[type];

  _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["log"].assert(nestLevel, `Unknown GeoJSON type ${type}`);

  while (coordinates && --nestLevel > 0) {
    coordinates = coordinates[0];
  }

  return coordinates && Number.isFinite(coordinates[0]);
}


/***/ }),

/***/ "./src/icon-layer/icon-layer-fragment.glsl.js":
/*!****************************************************!*\
  !*** ./src/icon-layer/icon-layer-fragment.glsl.js ***!
  \****************************************************/
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
#define SHADER_NAME icon-layer-fragment-shader

precision highp float;

uniform float opacity;
uniform sampler2D iconsTexture;

varying float vColorMode;
varying vec4 vColor;
varying vec2 vTextureCoords;
varying vec2 uv;

const float MIN_ALPHA = 0.05;

void main(void) {
  geometry.uv = uv;

  vec4 texColor = texture2D(iconsTexture, vTextureCoords);

  // if colorMode == 0, use pixel color from the texture
  // if colorMode == 1 or rendering picking buffer, use texture as transparency mask
  vec3 color = mix(texColor.rgb, vColor.rgb, vColorMode);
  // Take the global opacity and the alpha from vColor into account for the alpha component
  float a = texColor.a * opacity * vColor.a;

  if (a < MIN_ALPHA) {
    discard;
  }

  gl_FragColor = vec4(color, a);
  DECKGL_FILTER_COLOR(gl_FragColor, geometry);
}
`);


/***/ }),

/***/ "./src/icon-layer/icon-layer-vertex.glsl.js":
/*!**************************************************!*\
  !*** ./src/icon-layer/icon-layer-vertex.glsl.js ***!
  \**************************************************/
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
#define SHADER_NAME icon-layer-vertex-shader

attribute vec2 positions;

attribute vec3 instancePositions;
attribute vec2 instancePositions64xyLow;
attribute float instanceSizes;
attribute float instanceAngles;
attribute vec4 instanceColors;
attribute vec3 instancePickingColors;
attribute vec4 instanceIconFrames;
attribute float instanceColorModes;
attribute vec2 instanceOffsets;

uniform float sizeScale;
uniform vec2 iconsTextureDim;
uniform float sizeMinPixels;
uniform float sizeMaxPixels;
uniform bool billboard;

varying float vColorMode;
varying vec4 vColor;
varying vec2 vTextureCoords;
varying vec2 uv;

vec2 rotate_by_angle(vec2 vertex, float angle) {
  float angle_radian = angle * PI / 180.0;
  float cos_angle = cos(angle_radian);
  float sin_angle = sin(angle_radian);
  mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
  return rotationMatrix * vertex;
}

void main(void) {
  geometry.worldPosition = instancePositions;
  geometry.uv = positions;
  uv = positions;

  vec2 iconSize = instanceIconFrames.zw;
  // convert size in meters to pixels, then scaled and clamp
 
  // project meters to pixels and clamp to limits 
  float sizePixels = clamp(
    project_size_to_pixel(instanceSizes * sizeScale), 
    sizeMinPixels, sizeMaxPixels
  );

  // scale icon height to match instanceSize
  float instanceScale = iconSize.y == 0.0 ? 0.0 : sizePixels / iconSize.y;

  // scale and rotate vertex in "pixel" value and convert back to fraction in clipspace
  vec2 pixelOffset = positions / 2.0 * iconSize + instanceOffsets;
  pixelOffset = rotate_by_angle(pixelOffset, instanceAngles) * instanceScale;

  if (billboard)  {
    pixelOffset.y *= -1.0;
    gl_Position = project_position_to_clipspace(instancePositions, instancePositions64xyLow, vec3(0.0), geometry.position);
    vec3 offset = vec3(pixelOffset, 0.0);
    DECKGL_FILTER_SIZE(offset, geometry);
    gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);

  } else {
    vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
    DECKGL_FILTER_SIZE(offset_common, geometry);
    gl_Position = project_position_to_clipspace(instancePositions, instancePositions64xyLow, offset_common, geometry.position); 
  }
  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);

  vTextureCoords = mix(
    instanceIconFrames.xy,
    instanceIconFrames.xy + iconSize,
    (positions.xy + 1.0) / 2.0
  ) / iconsTextureDim;

  vTextureCoords.y = 1.0 - vTextureCoords.y;

  vColor = instanceColors;
  DECKGL_FILTER_COLOR(vColor, geometry);

  vColorMode = instanceColorModes;

  // Set color to be rendered to picking fbo (also used to check for selection highlight).
  picking_setPickingColor(instancePickingColors);
}
`);


/***/ }),

/***/ "./src/icon-layer/icon-layer.js":
/*!**************************************!*\
  !*** ./src/icon-layer/icon-layer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconLayer; });
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @luma.gl/constants */ "@luma.gl/constants");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon-layer-vertex.glsl */ "./src/icon-layer/icon-layer-vertex.glsl.js");
/* harmony import */ var _icon_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon-layer-fragment.glsl */ "./src/icon-layer/icon-layer-fragment.glsl.js");
/* harmony import */ var _icon_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon-manager */ "./src/icon-layer/icon-manager.js");
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








const DEFAULT_COLOR = [0, 0, 0, 255];
/*
 * @param {object} props
 * @param {Texture2D | string} props.iconAtlas - atlas image url or texture
 * @param {object} props.iconMapping - icon names mapped to icon definitions
 * @param {object} props.iconMapping[icon_name].x - x position of icon on the atlas image
 * @param {object} props.iconMapping[icon_name].y - y position of icon on the atlas image
 * @param {object} props.iconMapping[icon_name].width - width of icon on the atlas image
 * @param {object} props.iconMapping[icon_name].height - height of icon on the atlas image
 * @param {object} props.iconMapping[icon_name].anchorX - x anchor of icon on the atlas image,
 *   default to width / 2
 * @param {object} props.iconMapping[icon_name].anchorY - y anchor of icon on the atlas image,
 *   default to height / 2
 * @param {object} props.iconMapping[icon_name].mask - whether icon is treated as a transparency
 *   mask. If true, user defined color is applied. If false, original color from the image is
 *   applied. Default to false.
 * @param {number} props.size - icon size in pixels
 * @param {func} props.getPosition - returns anchor position of the icon, in [lng, lat, z]
 * @param {func} props.getIcon - returns icon name as a string
 * @param {func} props.getSize - returns icon size multiplier as a number
 * @param {func} props.getColor - returns color of the icon in [r, g, b, a]. Only works on icons
 *   with mask: true.
 * @param {func} props.getAngle - returns rotating angle (in degree) of the icon.
 */
const defaultProps = {
  iconAtlas: {type: 'object', value: null, async: true},
  iconMapping: {type: 'object', value: {}, async: true},
  sizeScale: {type: 'number', value: 1, min: 0},
  billboard: true,
  sizeUnits: 'pixels',
  sizeMinPixels: {type: 'number', min: 0, value: 0}, //  min point radius in pixels
  sizeMaxPixels: {type: 'number', min: 0, value: Number.MAX_SAFE_INTEGER}, // max point radius in pixels

  getPosition: {type: 'accessor', value: x => x.position},
  getIcon: {type: 'accessor', value: x => x.icon},
  getColor: {type: 'accessor', value: DEFAULT_COLOR},
  getSize: {type: 'accessor', value: 1},
  getAngle: {type: 'accessor', value: 0}
};

class IconLayer extends _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["Layer"] {
  getShaders() {
    return super.getShaders({vs: _icon_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_2__["default"], fs: _icon_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_3__["default"], modules: ['project32', 'picking']});
  }

  initializeState() {
    this.state = {
      iconManager: new _icon_manager__WEBPACK_IMPORTED_MODULE_4__["default"](this.context.gl, {onUpdate: () => this._onUpdate()})
    };

    const attributeManager = this.getAttributeManager();
    /* eslint-disable max-len */
    attributeManager.addInstanced({
      instancePositions: {
        size: 3,
        transition: true,
        accessor: 'getPosition'
      },
      instancePositions64xyLow: {
        size: 2,
        accessor: 'getPosition',
        update: this.calculateInstancePositions64xyLow
      },
      instanceSizes: {
        size: 1,
        transition: true,
        accessor: 'getSize',
        defaultValue: 1
      },
      instanceOffsets: {size: 2, accessor: 'getIcon', update: this.calculateInstanceOffsets},
      instanceIconFrames: {size: 4, accessor: 'getIcon', update: this.calculateInstanceIconFrames},
      instanceColorModes: {
        size: 1,
        type: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.UNSIGNED_BYTE,
        accessor: 'getIcon',
        update: this.calculateInstanceColorMode
      },
      instanceColors: {
        size: this.props.colorFormat.length,
        type: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.UNSIGNED_BYTE,
        normalized: true,
        transition: true,
        accessor: 'getColor',
        defaultValue: DEFAULT_COLOR
      },
      instanceAngles: {
        size: 1,
        transition: true,
        accessor: 'getAngle',
        defaultValue: 0
      }
    });
    /* eslint-enable max-len */
  }

  /* eslint-disable max-statements, complexity */
  updateState({oldProps, props, changeFlags}) {
    super.updateState({props, oldProps, changeFlags});

    const attributeManager = this.getAttributeManager();
    const {iconManager} = this.state;
    const {iconAtlas, iconMapping, data, getIcon} = props;

    let iconMappingChanged = false;
    const prePacked = iconAtlas || this.props._asyncPropOriginalValues.iconAtlas;

    // prepacked iconAtlas from user
    if (prePacked) {
      if (oldProps.iconAtlas !== props.iconAtlas) {
        iconManager.setProps({iconAtlas, autoPacking: false});
      }

      if (oldProps.iconMapping !== props.iconMapping) {
        iconManager.setProps({iconMapping});
        iconMappingChanged = true;
      }
    } else {
      // otherwise, use autoPacking
      iconManager.setProps({autoPacking: true});
    }

    if (
      changeFlags.dataChanged ||
      (changeFlags.updateTriggersChanged &&
        (changeFlags.updateTriggersChanged.all || changeFlags.updateTriggersChanged.getIcon))
    ) {
      iconManager.setProps({data, getIcon});
      iconMappingChanged = true;
    }

    if (iconMappingChanged) {
      attributeManager.invalidate('instanceOffsets');
      attributeManager.invalidate('instanceIconFrames');
      attributeManager.invalidate('instanceColorModes');
    }

    if (changeFlags.extensionsChanged) {
      const {gl} = this.context;
      if (this.state.model) {
        this.state.model.delete();
      }
      this.setState({model: this._getModel(gl)});
      attributeManager.invalidateAll();
    }
  }
  /* eslint-enable max-statements, complexity */

  finalizeState() {
    super.finalizeState();
    // Release resources held by the icon manager
    this.state.iconManager.finalize();
  }

  draw({uniforms}) {
    const {sizeScale, sizeMinPixels, sizeMaxPixels, sizeUnits, billboard} = this.props;
    const {iconManager} = this.state;
    const {viewport} = this.context;

    const iconsTexture = iconManager.getTexture();
    if (iconsTexture) {
      this.state.model
        .setUniforms(
          Object.assign({}, uniforms, {
            iconsTexture,
            iconsTextureDim: [iconsTexture.width, iconsTexture.height],
            sizeScale:
              sizeScale * (sizeUnits === 'pixels' ? viewport.distanceScales.metersPerPixel[2] : 1),
            sizeMinPixels,
            sizeMaxPixels,
            billboard
          })
        )
        .draw();
    }
  }

  _getModel(gl) {
    const positions = [-1, -1, 0, -1, 1, 0, 1, 1, 0, 1, -1, 0];

    return new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__["Model"](
      gl,
      Object.assign({}, this.getShaders(), {
        id: this.props.id,
        geometry: new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__["Geometry"]({
          drawMode: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.TRIANGLE_FAN,
          attributes: {
            positions: new Float32Array(positions)
          }
        }),
        isInstanced: true,
        shaderCache: this.context.shaderCache
      })
    );
  }

  _onUpdate() {
    this.setNeedsRedraw();
  }

  calculateInstancePositions64xyLow(attribute) {
    const isFP64 = this.use64bitPositions();
    attribute.constant = !isFP64;

    if (!isFP64) {
      attribute.value = new Float32Array(2);
      return;
    }

    const {data, getPosition} = this.props;
    const {value} = attribute;
    let i = 0;
    const {iterable, objectInfo} = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["createIterable"])(data);
    for (const object of iterable) {
      objectInfo.index++;
      const position = getPosition(object, objectInfo);
      value[i++] = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["fp64LowPart"])(position[0]);
      value[i++] = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["fp64LowPart"])(position[1]);
    }
  }

  calculateInstanceOffsets(attribute, {startRow, endRow}) {
    const {data} = this.props;
    const {iconManager} = this.state;
    const {value, size} = attribute;
    let i = startRow * size;
    const {iterable, objectInfo} = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["createIterable"])(data, startRow, endRow);
    for (const object of iterable) {
      objectInfo.index++;
      const rect = iconManager.getIconMapping(object, objectInfo);
      value[i++] = rect.width / 2 - rect.anchorX || 0;
      value[i++] = rect.height / 2 - rect.anchorY || 0;
    }
  }

  calculateInstanceColorMode(attribute, {startRow, endRow}) {
    const {data} = this.props;
    const {iconManager} = this.state;
    const {value, size} = attribute;
    let i = startRow * size;
    const {iterable, objectInfo} = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["createIterable"])(data, startRow, endRow);
    for (const object of iterable) {
      objectInfo.index++;
      const mapping = iconManager.getIconMapping(object, objectInfo);
      const colorMode = mapping.mask;
      value[i++] = colorMode ? 1 : 0;
    }
  }

  calculateInstanceIconFrames(attribute, {startRow, endRow}) {
    const {data} = this.props;
    const {iconManager} = this.state;
    const {value, size} = attribute;
    let i = startRow * size;
    const {iterable, objectInfo} = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["createIterable"])(data, startRow, endRow);
    for (const object of iterable) {
      objectInfo.index++;
      const rect = iconManager.getIconMapping(object, objectInfo);
      value[i++] = rect.x || 0;
      value[i++] = rect.y || 0;
      value[i++] = rect.width || 0;
      value[i++] = rect.height || 0;
    }
  }
}

IconLayer.layerName = 'IconLayer';
IconLayer.defaultProps = defaultProps;


/***/ }),

/***/ "./src/icon-layer/icon-manager.js":
/*!****************************************!*\
  !*** ./src/icon-layer/icon-manager.js ***!
  \****************************************/
/*! exports provided: buildMapping, getDiffIcons, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildMapping", function() { return buildMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDiffIcons", function() { return getDiffIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconManager; });
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/constants */ "@luma.gl/constants");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loaders_gl_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @loaders.gl/images */ "../../node_modules/@loaders.gl/images/dist/esm/index.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_2__);
/* global document */





const DEFAULT_CANVAS_WIDTH = 1024;
const DEFAULT_BUFFER = 4;

const noop = () => {};

const DEFAULT_TEXTURE_PARAMETERS = {
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_MIN_FILTER]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.LINEAR_MIPMAP_LINEAR,
  // GL.LINEAR is the default value but explicitly set it here
  [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.TEXTURE_MAG_FILTER]: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.LINEAR
};

function nextPowOfTwo(number) {
  return Math.pow(2, Math.ceil(Math.log2(number)));
}

// resize image to given width and height
function resizeImage(ctx, imageData, width, height) {
  const {naturalWidth, naturalHeight} = imageData;
  if (width === naturalWidth && height === naturalHeight) {
    return imageData;
  }

  ctx.canvas.height = height;
  ctx.canvas.width = width;

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
  ctx.drawImage(imageData, 0, 0, naturalWidth, naturalHeight, 0, 0, width, height);

  return ctx.canvas;
}

function getIconId(icon) {
  return icon && (icon.id || icon.url);
}

// traverse icons in a row of icon atlas
// extend each icon with left-top coordinates
function buildRowMapping(mapping, columns, yOffset) {
  for (let i = 0; i < columns.length; i++) {
    const {icon, xOffset} = columns[i];
    const id = getIconId(icon);
    mapping[id] = Object.assign({}, icon, {
      x: xOffset,
      y: yOffset
    });
  }
}

// resize texture without losing original data
function resizeTexture(texture, width, height) {
  const oldWidth = texture.width;
  const oldHeight = texture.height;
  const oldPixels = Object(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["readPixelsToBuffer"])(texture, {});

  texture.resize({width, height});

  texture.setSubImageData({
    data: oldPixels,
    x: 0,
    y: height - oldHeight,
    width: oldWidth,
    height: oldHeight,
    parameters: DEFAULT_TEXTURE_PARAMETERS
  });

  texture.generateMipmap();

  oldPixels.delete();
  return texture;
}

/**
 * Generate coordinate mapping to retrieve icon left-top position from an icon atlas
 * @param icons {Array<Object>} list of icons, each icon requires url, width, height
 * @param buffer {Number} add buffer to the right and bottom side of the image
 * @param xOffset {Number} right position of last icon in old mapping
 * @param yOffset {Number} top position in last icon in old mapping
 * @param canvasWidth {Number} max width of canvas
 * @param mapping {object} old mapping
 * @returns {{mapping: {'/icon/1': {url, width, height, ...}},, canvasHeight: {Number}}}
 */
function buildMapping({icons, buffer, mapping = {}, xOffset = 0, yOffset = 0, canvasWidth}) {
  // height of current row
  let rowHeight = 0;

  let columns = [];
  // Strategy to layout all the icons into a texture:
  // traverse the icons sequentially, layout the icons from left to right, top to bottom
  // when the sum of the icons width is equal or larger than canvasWidth,
  // move to next row starting from total height so far plus max height of the icons in previous row
  // row width is equal to canvasWidth
  // row height is decided by the max height of the icons in that row
  // mapping coordinates of each icon is its left-top position in the texture
  for (let i = 0; i < icons.length; i++) {
    const icon = icons[i];
    const id = getIconId(icon);

    if (!mapping[id]) {
      const {height, width} = icon;

      // fill one row
      if (xOffset + width + buffer > canvasWidth) {
        buildRowMapping(mapping, columns, yOffset);

        xOffset = 0;
        yOffset = rowHeight + yOffset + buffer;
        rowHeight = 0;
        columns = [];
      }

      columns.push({
        icon,
        xOffset
      });

      xOffset = xOffset + width + buffer;
      rowHeight = Math.max(rowHeight, height);
    }
  }

  if (columns.length > 0) {
    buildRowMapping(mapping, columns, yOffset);
  }

  return {
    mapping,
    xOffset,
    yOffset,
    canvasWidth,
    canvasHeight: nextPowOfTwo(rowHeight + yOffset + buffer)
  };
}

// extract icons from data
// return icons should be unique, and not cached or cached but url changed
function getDiffIcons(data, getIcon, cachedIcons) {
  if (!data || !getIcon) {
    return null;
  }

  cachedIcons = cachedIcons || {};
  const icons = {};
  const {iterable, objectInfo} = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_2__["createIterable"])(data);
  for (const object of iterable) {
    objectInfo.index++;
    const icon = getIcon(object, objectInfo);
    const id = getIconId(icon);

    if (!icon) {
      throw new Error('Icon is missing.');
    }

    if (!icon.url) {
      throw new Error('Icon url is missing.');
    }

    if (!icons[id] && (!cachedIcons[id] || icon.url !== cachedIcons[id].url)) {
      icons[id] = icon;
    }
  }
  return icons;
}

class IconManager {
  constructor(
    gl,
    {
      onUpdate = noop // notify IconLayer when icon texture update
    }
  ) {
    this.gl = gl;
    this.onUpdate = onUpdate;

    this._getIcon = null;

    this._texture = null;
    this._externalTexture = null;
    this._mapping = {};

    this._autoPacking = false;

    // internal props used when autoPacking applied
    // right position of last icon
    this._xOffset = 0;
    // top position of last icon
    this._yOffset = 0;
    this._buffer = DEFAULT_BUFFER;
    this._canvasWidth = DEFAULT_CANVAS_WIDTH;
    this._canvasHeight = 0;
    this._canvas = null;
  }

  finalize() {
    if (this._texture) {
      this._texture.delete();
    }
  }

  getTexture() {
    return this._texture || this._externalTexture;
  }

  getIconMapping(object, objectInfo) {
    const icon = this._getIcon(object, objectInfo);
    const id = this._autoPacking ? getIconId(icon) : icon;
    return this._mapping[id] || {};
  }

  setProps({autoPacking, iconAtlas, iconMapping, data, getIcon}) {
    if (autoPacking !== undefined) {
      this._autoPacking = autoPacking;
    }

    if (getIcon) {
      this._getIcon = getIcon;
    }

    if (iconMapping) {
      this._mapping = iconMapping;
    }

    if (iconAtlas) {
      this._updateIconAtlas(iconAtlas);
    }

    if (this._autoPacking && (data || getIcon) && typeof document !== 'undefined') {
      this._canvas = this._canvas || document.createElement('canvas');

      this._updateAutoPacking(data);
    }
  }

  _updateIconAtlas(iconAtlas) {
    if (this._texture) {
      this._texture.delete();
      this._texture = null;
    }
    if (iconAtlas instanceof _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["Texture2D"]) {
      iconAtlas.setParameters(DEFAULT_TEXTURE_PARAMETERS);

      this._externalTexture = iconAtlas;
      this.onUpdate();
    } else if (iconAtlas) {
      // Browser object: Image, ImageData, HTMLCanvasElement, ImageBitmap
      this._texture = new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["Texture2D"](this.gl, {
        data: iconAtlas,
        parameters: DEFAULT_TEXTURE_PARAMETERS
      });
      this.onUpdate();
    }
  }

  _updateAutoPacking(data) {
    const icons = Object.values(getDiffIcons(data, this._getIcon, this._mapping) || {});

    if (icons.length > 0) {
      // generate icon mapping
      const {mapping, xOffset, yOffset, canvasHeight} = buildMapping({
        icons,
        buffer: this._buffer,
        canvasWidth: this._canvasWidth,
        mapping: this._mapping,
        xOffset: this._xOffset,
        yOffset: this._yOffset
      });

      this._mapping = mapping;
      this._xOffset = xOffset;
      this._yOffset = yOffset;
      this._canvasHeight = canvasHeight;

      // create new texture
      if (!this._texture) {
        this._texture = new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_0__["Texture2D"](this.gl, {
          width: this._canvasWidth,
          height: this._canvasHeight,
          parameters: DEFAULT_TEXTURE_PARAMETERS
        });
      }

      if (this._texture.height !== this._canvasHeight) {
        resizeTexture(this._texture, this._canvasWidth, this._canvasHeight);
      }

      this.onUpdate();

      // load images
      this._loadIcons(icons);
    }
  }

  _loadIcons(icons) {
    const ctx = this._canvas.getContext('2d');
    const canvasHeight = this._texture.height;

    for (const icon of icons) {
      Object(_loaders_gl_images__WEBPACK_IMPORTED_MODULE_1__["loadImage"])(icon.url).then(imageData => {
        const id = getIconId(icon);
        const {x, y, width, height} = this._mapping[id];

        const data = resizeImage(ctx, imageData, width, height);

        this._texture.setSubImageData({
          data,
          x,
          y: canvasHeight - y - height, // flip Y as texture stored as reversed Y
          width,
          height,
          parameters: Object.assign({}, DEFAULT_TEXTURE_PARAMETERS, {
            [_luma_gl_constants__WEBPACK_IMPORTED_MODULE_0___default.a.UNPACK_FLIP_Y_WEBGL]: true
          })
        });

        // Call to regenerate mipmaps after modifying texture(s)
        this._texture.generateMipmap();

        this.onUpdate();
      });
    }
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: ArcLayer, BitmapLayer, IconLayer, LineLayer, PointCloudLayer, ScatterplotLayer, ColumnLayer, GridCellLayer, PathLayer, PolygonLayer, GeoJsonLayer, TextLayer, SolidPolygonLayer, _MultiIconLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arc_layer_arc_layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arc-layer/arc-layer */ "./src/arc-layer/arc-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArcLayer", function() { return _arc_layer_arc_layer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _bitmap_layer_bitmap_layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bitmap-layer/bitmap-layer */ "./src/bitmap-layer/bitmap-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BitmapLayer", function() { return _bitmap_layer_bitmap_layer__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _icon_layer_icon_layer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon-layer/icon-layer */ "./src/icon-layer/icon-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconLayer", function() { return _icon_layer_icon_layer__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _line_layer_line_layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./line-layer/line-layer */ "./src/line-layer/line-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineLayer", function() { return _line_layer_line_layer__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _point_cloud_layer_point_cloud_layer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./point-cloud-layer/point-cloud-layer */ "./src/point-cloud-layer/point-cloud-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PointCloudLayer", function() { return _point_cloud_layer_point_cloud_layer__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _scatterplot_layer_scatterplot_layer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scatterplot-layer/scatterplot-layer */ "./src/scatterplot-layer/scatterplot-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScatterplotLayer", function() { return _scatterplot_layer_scatterplot_layer__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _column_layer_column_layer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./column-layer/column-layer */ "./src/column-layer/column-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColumnLayer", function() { return _column_layer_column_layer__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _column_layer_grid_cell_layer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./column-layer/grid-cell-layer */ "./src/column-layer/grid-cell-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridCellLayer", function() { return _column_layer_grid_cell_layer__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _path_layer_path_layer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./path-layer/path-layer */ "./src/path-layer/path-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PathLayer", function() { return _path_layer_path_layer__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _polygon_layer_polygon_layer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./polygon-layer/polygon-layer */ "./src/polygon-layer/polygon-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolygonLayer", function() { return _polygon_layer_polygon_layer__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _geojson_layer_geojson_layer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./geojson-layer/geojson-layer */ "./src/geojson-layer/geojson-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeoJsonLayer", function() { return _geojson_layer_geojson_layer__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _text_layer_text_layer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./text-layer/text-layer */ "./src/text-layer/text-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextLayer", function() { return _text_layer_text_layer__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _solid_polygon_layer_solid_polygon_layer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./solid-polygon-layer/solid-polygon-layer */ "./src/solid-polygon-layer/solid-polygon-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SolidPolygonLayer", function() { return _solid_polygon_layer_solid_polygon_layer__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _text_layer_multi_icon_layer_multi_icon_layer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./text-layer/multi-icon-layer/multi-icon-layer */ "./src/text-layer/multi-icon-layer/multi-icon-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_MultiIconLayer", function() { return _text_layer_multi_icon_layer_multi_icon_layer__WEBPACK_IMPORTED_MODULE_13__["default"]; });

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

// Core Layers














// Experimental layer exports



/***/ }),

/***/ "./src/line-layer/line-layer-fragment.glsl.js":
/*!****************************************************!*\
  !*** ./src/line-layer/line-layer-fragment.glsl.js ***!
  \****************************************************/
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
#define SHADER_NAME line-layer-fragment-shader

precision highp float;

varying vec4 vColor;
varying vec2 uv;

void main(void) {
  geometry.uv = uv;

  gl_FragColor = vColor;

  DECKGL_FILTER_COLOR(gl_FragColor, geometry);
}
`);


/***/ }),

/***/ "./src/line-layer/line-layer-vertex.glsl.js":
/*!**************************************************!*\
  !*** ./src/line-layer/line-layer-vertex.glsl.js ***!
  \**************************************************/
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
#define SHADER_NAME line-layer-vertex-shader

attribute vec3 positions;
attribute vec3 instanceSourcePositions;
attribute vec3 instanceTargetPositions;
attribute vec4 instanceSourceTargetPositions64xyLow;
attribute vec4 instanceColors;
attribute vec3 instancePickingColors;
attribute float instanceWidths;

uniform float opacity;
uniform float widthScale;
uniform float widthMinPixels;
uniform float widthMaxPixels;

varying vec4 vColor;
varying vec2 uv;

// offset vector by strokeWidth pixels
// offset_direction is -1 (left) or 1 (right)
vec2 getExtrusionOffset(vec2 line_clipspace, float offset_direction, float width) {
  // normalized direction of the line
  vec2 dir_screenspace = normalize(line_clipspace * project_uViewportSize);
  // rotate by 90 degrees
  dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);

  return dir_screenspace * offset_direction * width / 2.0;
}

void main(void) {
  geometry.worldPosition = instanceSourcePositions;
  geometry.worldPositionAlt = instanceTargetPositions;

  // Position
  vec4 source_commonspace;
  vec4 target_commonspace;
  vec4 source = project_position_to_clipspace(instanceSourcePositions, instanceSourceTargetPositions64xyLow.xy, vec3(0.), source_commonspace);
  vec4 target = project_position_to_clipspace(instanceTargetPositions, instanceSourceTargetPositions64xyLow.zw, vec3(0.), target_commonspace);

  // Multiply out width and clamp to limits
  float widthPixels = clamp(
    project_size_to_pixel(instanceWidths * widthScale),
    widthMinPixels, widthMaxPixels
  );
  
  // linear interpolation of source & target to pick right coord
  float segmentIndex = positions.x;
  vec4 p = mix(source, target, segmentIndex);
  geometry.position = mix(source_commonspace, target_commonspace, segmentIndex);
  uv = positions.xy;
  geometry.uv = uv;

  // extrude
  vec3 offset = vec3(
    getExtrusionOffset(target.xy - source.xy, positions.y, widthPixels),
    0.0);
  DECKGL_FILTER_SIZE(offset, geometry);
  gl_Position = p + vec4(project_pixel_size_to_clipspace(offset.xy), 0.0, 0.0);
  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);

  // Color
  vColor = vec4(instanceColors.rgb, instanceColors.a * opacity);
  DECKGL_FILTER_COLOR(vColor, geometry);

  // Set color to be rendered to picking fbo (also used to check for selection highlight).
  picking_setPickingColor(instancePickingColors);
}
`);


/***/ }),

/***/ "./src/line-layer/line-layer.js":
/*!**************************************!*\
  !*** ./src/line-layer/line-layer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LineLayer; });
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @luma.gl/constants */ "@luma.gl/constants");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _line_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line-layer-vertex.glsl */ "./src/line-layer/line-layer-vertex.glsl.js");
/* harmony import */ var _line_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./line-layer-fragment.glsl */ "./src/line-layer/line-layer-fragment.glsl.js");
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








const DEFAULT_COLOR = [0, 0, 0, 255];

const defaultProps = {
  getSourcePosition: {type: 'accessor', value: x => x.sourcePosition},
  getTargetPosition: {type: 'accessor', value: x => x.targetPosition},
  getColor: {type: 'accessor', value: DEFAULT_COLOR},
  getWidth: {type: 'accessor', value: 1},

  widthUnits: 'pixels',
  widthScale: {type: 'number', value: 1, min: 0},
  widthMinPixels: {type: 'number', value: 0, min: 0},
  widthMaxPixels: {type: 'number', value: Number.MAX_SAFE_INTEGER, min: 0},

  // Deprecated, remove in v8
  getStrokeWidth: {deprecatedFor: 'getWidth'}
};

class LineLayer extends _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["Layer"] {
  getShaders() {
    return super.getShaders({vs: _line_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_2__["default"], fs: _line_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_3__["default"], modules: ['project32', 'picking']});
  }

  initializeState() {
    const attributeManager = this.getAttributeManager();

    /* eslint-disable max-len */
    attributeManager.addInstanced({
      instanceSourcePositions: {
        size: 3,
        transition: true,
        accessor: 'getSourcePosition'
      },
      instanceTargetPositions: {
        size: 3,
        transition: true,
        accessor: 'getTargetPosition'
      },
      instanceSourceTargetPositions64xyLow: {
        size: 4,
        accessor: ['getSourcePosition', 'getTargetPosition'],
        update: this.calculateInstanceSourceTargetPositions64xyLow
      },
      instanceColors: {
        size: this.props.colorFormat.length,
        type: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.UNSIGNED_BYTE,
        normalized: true,
        transition: true,
        accessor: 'getColor',
        defaultValue: [0, 0, 0, 255]
      },
      instanceWidths: {
        size: 1,
        transition: true,
        accessor: 'getWidth',
        defaultValue: 1
      }
    });
    /* eslint-enable max-len */
  }

  updateState({props, oldProps, changeFlags}) {
    super.updateState({props, oldProps, changeFlags});

    if (changeFlags.extensionsChanged) {
      const {gl} = this.context;
      if (this.state.model) {
        this.state.model.delete();
      }
      this.setState({model: this._getModel(gl)});
      this.getAttributeManager().invalidateAll();
    }
  }

  draw({uniforms}) {
    const {viewport} = this.context;
    const {widthUnits, widthScale, widthMinPixels, widthMaxPixels} = this.props;

    const widthMultiplier = widthUnits === 'pixels' ? viewport.distanceScales.metersPerPixel[2] : 1;

    this.state.model
      .setUniforms(
        Object.assign({}, uniforms, {
          widthScale: widthScale * widthMultiplier,
          widthMinPixels,
          widthMaxPixels
        })
      )
      .draw();
  }

  _getModel(gl) {
    /*
     *  (0, -1)-------------_(1, -1)
     *       |          _,-"  |
     *       o      _,-"      o
     *       |  _,-"          |
     *   (0, 1)"-------------(1, 1)
     */
    const positions = [0, -1, 0, 0, 1, 0, 1, -1, 0, 1, 1, 0];

    return new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__["Model"](
      gl,
      Object.assign({}, this.getShaders(), {
        id: this.props.id,
        geometry: new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__["Geometry"]({
          drawMode: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.TRIANGLE_STRIP,
          attributes: {
            positions: new Float32Array(positions)
          }
        }),
        isInstanced: true,
        shaderCache: this.context.shaderCache
      })
    );
  }

  calculateInstanceSourceTargetPositions64xyLow(attribute, {startRow, endRow}) {
    const isFP64 = this.use64bitPositions();
    attribute.constant = !isFP64;

    if (!isFP64) {
      attribute.value = new Float32Array(4);
      return;
    }

    const {data, getSourcePosition, getTargetPosition} = this.props;
    const {value, size} = attribute;
    let i = startRow * size;
    const {iterable, objectInfo} = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["createIterable"])(data, startRow, endRow);
    for (const object of iterable) {
      objectInfo.index++;
      const sourcePosition = getSourcePosition(object, objectInfo);
      const targetPosition = getTargetPosition(object, objectInfo);
      value[i++] = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["fp64LowPart"])(sourcePosition[0]);
      value[i++] = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["fp64LowPart"])(sourcePosition[1]);
      value[i++] = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["fp64LowPart"])(targetPosition[0]);
      value[i++] = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["fp64LowPart"])(targetPosition[1]);
    }
  }
}

LineLayer.layerName = 'LineLayer';
LineLayer.defaultProps = defaultProps;


/***/ }),

/***/ "./src/path-layer/path-layer-fragment.glsl.js":
/*!****************************************************!*\
  !*** ./src/path-layer/path-layer-fragment.glsl.js ***!
  \****************************************************/
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
#define SHADER_NAME path-layer-fragment-shader

precision highp float;

uniform float jointType;
uniform float miterLimit;
uniform float alignMode;

varying vec4 vColor;
varying vec2 vCornerOffset;
varying float vMiterLength;
varying vec2 vDashArray;
/*
 * vPathPosition represents the relative coordinates of the current fragment on the path segment.
 * vPathPosition.x - position along the width of the path, between [-1, 1]. 0 is the center line.
 * vPathPosition.y - position along the length of the path, between [0, L / width].
 */
varying vec2 vPathPosition;
varying float vPathLength;

// mod doesn't work correctly for negative numbers
float mod2(float a, float b) {
  return a - floor(a / b) * b;
}

float round(float x) {
  return floor(x + 0.5);
}

// if given position is in the gap part of the dashed line
// dashArray.x: solid stroke length, relative to width
// dashArray.y: gap length, relative to width
// alignMode:
// 0 - no adjustment
// o----     ----     ----     ---- o----     -o----     ----     o
// 1 - stretch to fit, draw half dash at each end for nicer joints
// o--    ----    ----    ----    --o--      --o--     ----     --o
bool dash_isFragInGap() {
  float solidLength = vDashArray.x;
  float gapLength = vDashArray.y;

  float unitLength = solidLength + gapLength;

  if (unitLength == 0.0) {
    return false;
  }

  unitLength = mix(
    unitLength,
    vPathLength / round(vPathLength / unitLength),
    alignMode
  );

  float offset = alignMode * solidLength / 2.0;

  return gapLength > 0.0 &&
    vPathPosition.y >= 0.0 &&
    vPathPosition.y <= vPathLength &&
    mod2(vPathPosition.y + offset, unitLength) > solidLength;
}

void main(void) {
  geometry.uv = vPathPosition;

  // if joint is rounded, test distance from the corner
  if (jointType > 0.0 && vMiterLength > 0.0 && length(vCornerOffset) > 1.0) {
    // Enable to debug joints
    // gl_FragColor = vec4(0., 1., 0., 1.);
    // return;
    discard;
  }
  if (jointType == 0.0 && vMiterLength > miterLimit) {
    // Enable to debug joints
    // gl_FragColor = vec4(0., 0., 1., 1.);
    // return;
    discard;
  }
  if (vColor.a == 0.0 || dash_isFragInGap()) {
    // Enable to debug joints
    // gl_FragColor = vec4(0., 1., 1., 1.);
    // return;
    discard;
  }
  gl_FragColor = vColor;

  DECKGL_FILTER_COLOR(gl_FragColor, geometry);
}
`);


/***/ }),

/***/ "./src/path-layer/path-layer-vertex.glsl.js":
/*!**************************************************!*\
  !*** ./src/path-layer/path-layer-vertex.glsl.js ***!
  \**************************************************/
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
#define SHADER_NAME path-layer-vertex-shader

attribute vec3 positions;

attribute float instanceTypes;
attribute vec3 instanceStartPositions;
attribute vec3 instanceEndPositions;
attribute vec3 instanceLeftPositions;
attribute vec3 instanceRightPositions;
attribute vec4 instanceLeftStartPositions64xyLow;
attribute vec4 instanceEndRightPositions64xyLow;
attribute float instanceStrokeWidths;
attribute vec4 instanceColors;
attribute vec3 instancePickingColors;
attribute vec2 instanceDashArrays;

uniform float widthScale;
uniform float widthMinPixels;
uniform float widthMaxPixels;
uniform float jointType;
uniform float miterLimit;
uniform bool billboard;

uniform float opacity;

varying vec4 vColor;
varying vec2 vCornerOffset;
varying float vMiterLength;
varying vec2 vDashArray;
varying vec2 vPathPosition;
varying float vPathLength;

const float EPSILON = 0.001;
const vec3 ZERO_OFFSET = vec3(0.0);

float flipIfTrue(bool flag) {
  return -(float(flag) * 2. - 1.);
}

// calculate line join positions
vec3 lineJoin(
  vec3 prevPoint, vec3 currPoint, vec3 nextPoint,
  float relativePosition, bool isEnd, bool isJoint,
  vec2 width, vec2 widthPixels
) {
  vec2 deltaA = (currPoint.xy - prevPoint.xy) / width;
  vec2 deltaB = (nextPoint.xy - currPoint.xy) / width;

  float lenA = length(deltaA);
  float lenB = length(deltaB);

  // when two points are closer than PIXEL_EPSILON in pixels,
  // assume they are the same point to avoid precision issue
  lenA = lenA > EPSILON ? lenA : 0.0;
  lenB = lenB > EPSILON ? lenB : 0.0;

  vec2 dirA = lenA > 0. ? normalize(deltaA) : vec2(0.0, 0.0);
  vec2 dirB = lenB > 0. ? normalize(deltaB) : vec2(0.0, 0.0);

  vec2 perpA = vec2(-dirA.y, dirA.x);
  vec2 perpB = vec2(-dirB.y, dirB.x);

  // tangent of the corner
  vec2 tangent = vec2(dirA + dirB);
  tangent = length(tangent) > 0. ? normalize(tangent) : perpA;
  // direction of the corner
  vec2 miterVec = vec2(-tangent.y, tangent.x);
  // width offset from current position
  vec2 perp = isEnd ? perpA : perpB;
  float L = isEnd ? lenA : lenB;

  // cap super sharp angles
  float sinHalfA = abs(dot(miterVec, perp));
  float cosHalfA = abs(dot(dirA, miterVec));

  bool turnsRight = dirA.x * dirB.y > dirA.y * dirB.x;

  float offsetScale = 1.0 / max(sinHalfA, EPSILON);

  float cornerPosition = isJoint ?
    0.0 :
    flipIfTrue(turnsRight == (relativePosition > 0.0));

  // do not bevel if line segment is too short
  cornerPosition *=
    float(cornerPosition <= 0.0 || sinHalfA < min(lenA, lenB) * cosHalfA);

  // trim if inside corner extends further than the line segment
  if (cornerPosition < 0.0) {
    offsetScale = min(offsetScale, L / max(cosHalfA, EPSILON));
  }

  vMiterLength = cornerPosition >= 0.0 ?
    mix(offsetScale, 0.0, cornerPosition) :
    offsetScale * cornerPosition;
  vMiterLength -= sinHalfA * jointType;

  float offsetDirection = mix(
    positions.y,
    mix(
      flipIfTrue(turnsRight),
      positions.y * flipIfTrue(turnsRight == (positions.x == 1.)),
      cornerPosition
    ),
    step(0.0, cornerPosition)
  );

  vec2 offsetVec = mix(miterVec, -tangent, step(0.5, cornerPosition));
  offsetScale = mix(offsetScale, 1.0 / max(cosHalfA, 0.001), step(0.5, cornerPosition));

  // special treatment for start cap and end cap
  bool isStartCap = lenA == 0.0 || (!isEnd && (instanceTypes == 1.0 || instanceTypes == 3.0));
  bool isEndCap = lenB == 0.0 || (isEnd && (instanceTypes == 2.0 || instanceTypes == 3.0));
  bool isCap = isStartCap || isEndCap;

  // 0: center, 1: side
  cornerPosition = isCap ? (1.0 - positions.z) : 0.;

  // start of path: use next - curr
  if (isStartCap) {
    offsetVec = mix(dirB, perpB, cornerPosition);
  }

  // end of path: use curr - prev
  if (isEndCap) {
    offsetVec = mix(dirA, perpA, cornerPosition);
  }

  // extend out a triangle to envelope the round cap
  if (isCap) {
    offsetScale = mix(4.0 * jointType, 1.0, cornerPosition);
    vMiterLength = 1.0 - cornerPosition;
    offsetDirection = mix(flipIfTrue(isStartCap), positions.y, cornerPosition);
  }

  vCornerOffset = offsetVec * offsetDirection * offsetScale;

  // Generate variables for dash calculation
  vDashArray = instanceDashArrays;
  vPathLength = L;
  // vec2 offsetFromStartOfPath = isEnd ? vCornerOffset + deltaA : vCornerOffset;
  vec2 offsetFromStartOfPath = vCornerOffset;
  if (isEnd) {
    offsetFromStartOfPath += deltaA;
  }
  vec2 dir = isEnd ? dirA : dirB;
  vPathPosition = vec2(
    positions.y + positions.z * offsetDirection,
    dot(offsetFromStartOfPath, dir)
  );
  geometry.uv = vPathPosition;

  float isValid = step(instanceTypes, 3.5);
  vec3 offset = vec3(vCornerOffset * widthPixels * isValid, 0.0);
  DECKGL_FILTER_SIZE(offset, geometry);
  return currPoint + vec3(offset.xy / widthPixels * width, 0.0);
}

// calculate line join positions
// extract params from attributes and uniforms
vec3 lineJoin(vec3 prevPoint, vec3 currPoint, vec3 nextPoint) {

  // relative position to the corner:
  // -1: inside (smaller side of the angle)
  // 0: center
  // 1: outside (bigger side of the angle)

  float relativePosition = positions.y;
  bool isEnd = positions.x > EPSILON;
  bool isJoint = positions.z > EPSILON;

  vec2 widthPixels = vec2(clamp(project_size_to_pixel(instanceStrokeWidths * widthScale),
    widthMinPixels, widthMaxPixels) / 2.0);

  vec2 width = billboard ? project_pixel_size_to_clipspace(widthPixels) : project_pixel_size(widthPixels);

  return lineJoin(
    prevPoint, currPoint, nextPoint,
    relativePosition, isEnd, isJoint,
    width, widthPixels
  );
}

// In clipspace extrusion, if a line extends behind the camera, clip it to avoid visual artifacts
void clipLine(inout vec4 position, vec4 refPosition) {
  if (position.w < EPSILON) {
    float r = (EPSILON - refPosition.w) / (position.w - refPosition.w);
    position = refPosition + (position - refPosition) * r;
  }
}

void main() {
  geometry.worldPosition = instanceStartPositions;
  geometry.worldPositionAlt = instanceEndPositions;

  vColor = vec4(instanceColors.rgb, instanceColors.a * opacity);

  // Set color to be rendered to picking fbo (also used to check for selection highlight).
  picking_setPickingColor(instancePickingColors);

  float isEnd = positions.x;

  vec3 prevPosition = mix(instanceLeftPositions, instanceStartPositions, isEnd);
  vec2 prevPosition64xyLow = mix(instanceLeftStartPositions64xyLow.xy, instanceLeftStartPositions64xyLow.zw, isEnd);

  vec3 currPosition = mix(instanceStartPositions, instanceEndPositions, isEnd);
  vec2 currPosition64xyLow = mix(instanceLeftStartPositions64xyLow.zw, instanceEndRightPositions64xyLow.xy, isEnd);

  vec3 nextPosition = mix(instanceEndPositions, instanceRightPositions, isEnd);
  vec2 nextPosition64xyLow = mix(instanceEndRightPositions64xyLow.xy, instanceEndRightPositions64xyLow.zw, isEnd);

  if (billboard) {
    // Extrude in clipspace
    vec4 prevPositionScreen = project_position_to_clipspace(prevPosition, prevPosition64xyLow, ZERO_OFFSET);
    vec4 currPositionScreen = project_position_to_clipspace(currPosition, currPosition64xyLow, ZERO_OFFSET, geometry.position);
    vec4 nextPositionScreen = project_position_to_clipspace(nextPosition, nextPosition64xyLow, ZERO_OFFSET);

    clipLine(prevPositionScreen, currPositionScreen);
    clipLine(nextPositionScreen, currPositionScreen);
    clipLine(currPositionScreen, mix(nextPositionScreen, prevPositionScreen, isEnd));

    vec3 pos = lineJoin(
      prevPositionScreen.xyz / prevPositionScreen.w,
      currPositionScreen.xyz / currPositionScreen.w,
      nextPositionScreen.xyz / nextPositionScreen.w
    );

    gl_Position = vec4(pos * currPositionScreen.w, currPositionScreen.w);
  } else {
    // Extrude in commonspace
    prevPosition = project_position(prevPosition, prevPosition64xyLow);
    currPosition = project_position(currPosition, currPosition64xyLow);
    nextPosition = project_position(nextPosition, nextPosition64xyLow);

    vec4 pos = vec4(
      lineJoin(prevPosition, currPosition, nextPosition),
      1.0);
    geometry.position = pos;
    gl_Position = project_common_position_to_clipspace(pos);
  }
  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
  DECKGL_FILTER_COLOR(vColor, geometry);
}
`);


/***/ }),

/***/ "./src/path-layer/path-layer.js":
/*!**************************************!*\
  !*** ./src/path-layer/path-layer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PathLayer; });
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @luma.gl/constants */ "@luma.gl/constants");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _path_tesselator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./path-tesselator */ "./src/path-layer/path-tesselator.js");
/* harmony import */ var _path_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./path-layer-vertex.glsl */ "./src/path-layer/path-layer-vertex.glsl.js");
/* harmony import */ var _path_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./path-layer-fragment.glsl */ "./src/path-layer/path-layer-fragment.glsl.js");
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










const DEFAULT_COLOR = [0, 0, 0, 255];

const defaultProps = {
  widthUnits: 'meters',
  widthScale: {type: 'number', min: 0, value: 1}, // stroke width in meters
  widthMinPixels: {type: 'number', min: 0, value: 0}, //  min stroke width in pixels
  widthMaxPixels: {type: 'number', min: 0, value: Number.MAX_SAFE_INTEGER}, // max stroke width in pixels
  rounded: false,
  miterLimit: {type: 'number', min: 0, value: 4},
  dashJustified: false,
  billboard: false,

  getPath: {type: 'accessor', value: object => object.path},
  getColor: {type: 'accessor', value: DEFAULT_COLOR},
  getWidth: {type: 'accessor', value: 1},
  getDashArray: {type: 'accessor', value: [0, 0]}
};

const ATTRIBUTE_TRANSITION = {
  enter: (value, chunk) => {
    return chunk.length ? chunk.subarray(chunk.length - value.length) : value;
  }
};

class PathLayer extends _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["Layer"] {
  getShaders() {
    return super.getShaders({vs: _path_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_3__["default"], fs: _path_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_4__["default"], modules: ['project32', 'picking']}); // 'project' module added by default.
  }

  initializeState() {
    const noAlloc = true;
    const attributeManager = this.getAttributeManager();
    /* eslint-disable max-len */
    attributeManager.addInstanced({
      startPositions: {
        size: 3,
        // Hack - Attribute class needs this to properly apply partial update
        // The first 3 numbers of the value is just padding
        offset: 12,
        transition: ATTRIBUTE_TRANSITION,
        accessor: 'getPath',
        update: this.calculateStartPositions,
        noAlloc,
        shaderAttributes: {
          instanceLeftPositions: {
            offset: 0
          },
          instanceStartPositions: {
            offset: 12
          }
        }
      },
      endPositions: {
        size: 3,
        transition: ATTRIBUTE_TRANSITION,
        accessor: 'getPath',
        update: this.calculateEndPositions,
        noAlloc,
        shaderAttributes: {
          instanceEndPositions: {
            offset: 0
          },
          instanceRightPositions: {
            offset: 12
          }
        }
      },
      instanceLeftStartPositions64xyLow: {
        size: 4,
        stride: 8,
        update: this.calculateLeftStartPositions64xyLow,
        noAlloc
      },
      instanceEndRightPositions64xyLow: {
        size: 4,
        stride: 8,
        update: this.calculateEndRightPositions64xyLow,
        noAlloc
      },
      instanceTypes: {
        size: 1,
        type: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.UNSIGNED_BYTE,
        update: this.calculateSegmentTypes,
        noAlloc
      },
      instanceStrokeWidths: {
        size: 1,
        accessor: 'getWidth',
        transition: ATTRIBUTE_TRANSITION,
        defaultValue: 1
      },
      instanceDashArrays: {size: 2, accessor: 'getDashArray'},
      instanceColors: {
        size: this.props.colorFormat.length,
        type: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.UNSIGNED_BYTE,
        normalized: true,
        accessor: 'getColor',
        transition: ATTRIBUTE_TRANSITION,
        defaultValue: DEFAULT_COLOR
      },
      instancePickingColors: {
        size: 3,
        type: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.UNSIGNED_BYTE,
        accessor: (object, {index, target: value}) => this.encodePickingColor(index, value)
      }
    });
    /* eslint-enable max-len */

    this.setState({
      pathTesselator: new _path_tesselator__WEBPACK_IMPORTED_MODULE_2__["default"]({})
    });
  }

  updateState({oldProps, props, changeFlags}) {
    super.updateState({props, oldProps, changeFlags});

    const attributeManager = this.getAttributeManager();

    const geometryChanged =
      changeFlags.dataChanged ||
      (changeFlags.updateTriggersChanged &&
        (changeFlags.updateTriggersChanged.all || changeFlags.updateTriggersChanged.getPath));

    if (geometryChanged) {
      const {pathTesselator} = this.state;
      pathTesselator.updateGeometry({
        data: props.data,
        getGeometry: props.getPath,
        positionFormat: props.positionFormat,
        fp64: this.use64bitPositions(),
        dataChanged: changeFlags.dataChanged
      });
      this.setState({
        numInstances: pathTesselator.instanceCount,
        bufferLayout: pathTesselator.bufferLayout
      });
      if (!changeFlags.dataChanged) {
        // Base `layer.updateState` only invalidates all attributes on data change
        // Cover the rest of the scenarios here
        attributeManager.invalidateAll();
      }
    }

    if (changeFlags.extensionsChanged) {
      const {gl} = this.context;
      if (this.state.model) {
        this.state.model.delete();
      }
      this.setState({model: this._getModel(gl)});
      attributeManager.invalidateAll();
    }
  }

  draw({uniforms}) {
    const {viewport} = this.context;
    const {
      rounded,
      billboard,
      miterLimit,
      widthUnits,
      widthScale,
      widthMinPixels,
      widthMaxPixels,
      dashJustified
    } = this.props;

    const widthMultiplier = widthUnits === 'pixels' ? viewport.distanceScales.metersPerPixel[2] : 1;

    this.state.model
      .setUniforms(
        Object.assign({}, uniforms, {
          jointType: Number(rounded),
          billboard,
          alignMode: Number(dashJustified),
          widthScale: widthScale * widthMultiplier,
          miterLimit,
          widthMinPixels,
          widthMaxPixels
        })
      )
      .draw();
  }

  _getModel(gl) {
    /*
     *       _
     *        "-_ 1                   3                       5
     *     _     "o---------------------o-------------------_-o
     *       -   / ""--..__              '.             _.-' /
     *   _     "@- - - - - ""--..__- - - - x - - - -_.@'    /
     *    "-_  /                   ""--..__ '.  _,-` :     /
     *       "o----------------------------""-o'    :     /
     *      0,2                            4 / '.  :     /
     *                                      /   '.:     /
     *                                     /     :'.   /
     *                                    /     :  ', /
     *                                   /     :     o
     */

    const SEGMENT_INDICES = [
      // start corner
      0,
      2,
      1,
      // body
      1,
      2,
      4,
      1,
      4,
      3,
      // end corner
      3,
      4,
      5
    ];

    // [0] position on segment - 0: start, 1: end
    // [1] side of path - -1: left, 0: center, 1: right
    // [2] role - 0: offset point 1: joint point
    const SEGMENT_POSITIONS = [
      // bevel start corner
      0,
      0,
      1,
      // start inner corner
      0,
      -1,
      0,
      // start outer corner
      0,
      1,
      0,
      // end inner corner
      1,
      -1,
      0,
      // end outer corner
      1,
      1,
      0,
      // bevel end corner
      1,
      0,
      1
    ];

    return new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__["Model"](
      gl,
      Object.assign({}, this.getShaders(), {
        id: this.props.id,
        geometry: new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__["Geometry"]({
          drawMode: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.TRIANGLES,
          attributes: {
            indices: new Uint16Array(SEGMENT_INDICES),
            positions: new Float32Array(SEGMENT_POSITIONS)
          }
        }),
        isInstanced: true,
        shaderCache: this.context.shaderCache
      })
    );
  }

  calculateStartPositions(attribute) {
    const {pathTesselator} = this.state;

    attribute.bufferLayout = pathTesselator.bufferLayout;
    attribute.value = pathTesselator.get('startPositions');
  }

  calculateEndPositions(attribute) {
    const {pathTesselator} = this.state;

    attribute.bufferLayout = pathTesselator.bufferLayout;
    attribute.value = pathTesselator.get('endPositions');
  }

  calculateSegmentTypes(attribute) {
    const {pathTesselator} = this.state;

    attribute.bufferLayout = pathTesselator.bufferLayout;
    attribute.value = pathTesselator.get('segmentTypes');
  }

  calculateLeftStartPositions64xyLow(attribute) {
    const isFP64 = this.use64bitPositions();
    attribute.constant = !isFP64;

    if (isFP64) {
      attribute.value = this.state.pathTesselator.get('startPositions64XyLow');
    } else {
      attribute.value = new Float32Array(4);
    }
  }

  calculateEndRightPositions64xyLow(attribute) {
    const isFP64 = this.use64bitPositions();
    attribute.constant = !isFP64;

    if (isFP64) {
      attribute.value = this.state.pathTesselator.get('endPositions64XyLow');
    } else {
      attribute.value = new Float32Array(4);
    }
  }

  clearPickingColor(color) {
    const pickedPathIndex = this.decodePickingColor(color);
    const {bufferLayout} = this.state.pathTesselator;
    const numVertices = bufferLayout[pickedPathIndex];

    let startInstanceIndex = 0;
    for (let pathIndex = 0; pathIndex < pickedPathIndex; pathIndex++) {
      startInstanceIndex += bufferLayout[pathIndex];
    }

    const {instancePickingColors} = this.getAttributeManager().attributes;

    const {value} = instancePickingColors;
    const endInstanceIndex = startInstanceIndex + numVertices;
    value.fill(0, startInstanceIndex * 3, endInstanceIndex * 3);
    instancePickingColors.update({value});
  }
}

PathLayer.layerName = 'PathLayer';
PathLayer.defaultProps = defaultProps;


/***/ }),

/***/ "./src/path-layer/path-tesselator.js":
/*!*******************************************!*\
  !*** ./src/path-layer/path-tesselator.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PathTesselator; });
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

const {Tesselator} = _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["experimental"];

const START_CAP = 1;
const END_CAP = 2;
const INVALID = 4;

// This class is set up to allow querying one attribute at a time
// the way the AttributeManager expects it
class PathTesselator extends Tesselator {
  constructor({data, getGeometry, positionFormat, fp64}) {
    super({
      data,
      getGeometry,
      fp64,
      positionFormat,
      attributes: {
        startPositions: {size: 3, padding: 3},
        endPositions: {size: 3, padding: 3},
        segmentTypes: {size: 1, type: Uint8ClampedArray},
        startPositions64XyLow: {size: 2, padding: 2, fp64Only: true},
        endPositions64XyLow: {size: 2, padding: 2, fp64Only: true}
      }
    });
  }

  /* Getters */
  get(attributeName) {
    return this.attributes[attributeName];
  }

  /* Implement base Tesselator interface */
  getGeometrySize(path) {
    const numPoints = this.getPathLength(path);
    if (numPoints < 2) {
      // invalid path
      return 0;
    }
    if (this.isClosed(path)) {
      // minimum 3 vertices
      return numPoints < 3 ? 0 : numPoints + 1;
    }
    return numPoints - 1;
  }

  /* eslint-disable max-statements, complexity */
  updateGeometryAttributes(path, context) {
    const {
      attributes: {
        startPositions,
        endPositions,
        startPositions64XyLow,
        endPositions64XyLow,
        segmentTypes
      },
      fp64
    } = this;

    const {geometrySize} = context;
    if (geometrySize === 0) {
      return;
    }
    const isPathClosed = this.isClosed(path);

    let startPoint;
    let endPoint;

    // startPositions   --  A0  B0 B1 B2 B3 B0 B1
    // endPositions         A1  B1 B2 B3 B0 B1 B2  --
    // segmentTypes         3   4  0  0  0  0  4
    for (let i = context.vertexStart, ptIndex = 0; ptIndex < geometrySize; i++, ptIndex++) {
      startPoint = endPoint || this.getPointOnPath(path, 0);
      endPoint = this.getPointOnPath(path, ptIndex + 1);

      segmentTypes[i] = 0;
      if (ptIndex === 0) {
        if (isPathClosed) {
          segmentTypes[i] += INVALID;
        } else {
          segmentTypes[i] += START_CAP;
        }
      }
      if (ptIndex === geometrySize - 1) {
        if (isPathClosed) {
          segmentTypes[i] += INVALID;
        } else {
          segmentTypes[i] += END_CAP;
        }
      }

      startPositions[i * 3 + 3] = startPoint[0];
      startPositions[i * 3 + 4] = startPoint[1];
      startPositions[i * 3 + 5] = startPoint[2] || 0;

      endPositions[i * 3] = endPoint[0];
      endPositions[i * 3 + 1] = endPoint[1];
      endPositions[i * 3 + 2] = endPoint[2] || 0;

      if (fp64) {
        startPositions64XyLow[i * 2 + 2] = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["fp64LowPart"])(startPoint[0]);
        startPositions64XyLow[i * 2 + 3] = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["fp64LowPart"])(startPoint[1]);
        endPositions64XyLow[i * 2] = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["fp64LowPart"])(endPoint[0]);
        endPositions64XyLow[i * 2 + 1] = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["fp64LowPart"])(endPoint[1]);
      }
    }
  }
  /* eslint-enable max-statements, complexity */

  /* Utilities */
  getPathLength(path) {
    if (Number.isFinite(path[0])) {
      // flat format
      return path.length / this.positionSize;
    }
    return path.length;
  }

  getPointOnPath(path, index) {
    if (Number.isFinite(path[0])) {
      // flat format
      const {positionSize} = this;
      if (index * positionSize >= path.length) {
        // loop
        index += 1 - path.length / positionSize;
      }
      // TODO - avoid creating new arrays when using binary
      return [
        path[index * positionSize],
        path[index * positionSize + 1],
        positionSize === 3 ? path[index * positionSize + 2] : 0
      ];
    }
    if (index >= path.length) {
      // loop
      index += 1 - path.length;
    }
    return path[index];
  }

  isClosed(path) {
    const numPoints = this.getPathLength(path);
    const firstPoint = this.getPointOnPath(path, 0);
    const lastPoint = this.getPointOnPath(path, numPoints - 1);
    return (
      firstPoint[0] === lastPoint[0] &&
      firstPoint[1] === lastPoint[1] &&
      firstPoint[2] === lastPoint[2]
    );
  }
}


/***/ }),

/***/ "./src/point-cloud-layer/point-cloud-layer-fragment.glsl.js":
/*!******************************************************************!*\
  !*** ./src/point-cloud-layer/point-cloud-layer-fragment.glsl.js ***!
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

/* harmony default export */ __webpack_exports__["default"] = (`\
#define SHADER_NAME point-cloud-layer-fragment-shader

precision highp float;

varying vec4 vColor;
varying vec2 unitPosition;

void main(void) {
  geometry.uv = unitPosition;

  float distToCenter = length(unitPosition);

  if (distToCenter > 1.0) {
    discard;
  }

  gl_FragColor = vColor;
  DECKGL_FILTER_COLOR(gl_FragColor, geometry);
}
`);


/***/ }),

/***/ "./src/point-cloud-layer/point-cloud-layer-vertex.glsl.js":
/*!****************************************************************!*\
  !*** ./src/point-cloud-layer/point-cloud-layer-vertex.glsl.js ***!
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
#define SHADER_NAME point-cloud-layer-vertex-shader

attribute vec3 positions;
attribute vec3 instanceNormals;
attribute vec4 instanceColors;
attribute vec3 instancePositions;
attribute vec2 instancePositions64xyLow;
attribute vec3 instancePickingColors;

uniform float opacity;
uniform float radiusPixels;

varying vec4 vColor;
varying vec2 unitPosition;

void main(void) {
  geometry.worldPosition = instancePositions;
  geometry.normal = project_normal(instanceNormals);

  // position on the containing square in [-1, 1] space
  unitPosition = positions.xy;
  geometry.uv = unitPosition;

  // Find the center of the point and add the current vertex
  vec3 offset = vec3(positions.xy * radiusPixels, 0.0);
  DECKGL_FILTER_SIZE(offset, geometry);

  gl_Position = project_position_to_clipspace(instancePositions, instancePositions64xyLow, vec3(0.), geometry.position);
  gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);

  // Apply lighting
  vec3 lightColor = lighting_getLightColor(instanceColors.rgb, project_uCameraPosition, geometry.position.xyz, geometry.normal);

  // Apply opacity to instance color, or return instance picking color
  vColor = vec4(lightColor, instanceColors.a * opacity);
  DECKGL_FILTER_COLOR(vColor, geometry);

  // Set color to be rendered to picking fbo (also used to check for selection highlight).
  picking_setPickingColor(instancePickingColors);
}
`);


/***/ }),

/***/ "./src/point-cloud-layer/point-cloud-layer.js":
/*!****************************************************!*\
  !*** ./src/point-cloud-layer/point-cloud-layer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PointCloudLayer; });
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @luma.gl/constants */ "@luma.gl/constants");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _point_cloud_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./point-cloud-layer-vertex.glsl */ "./src/point-cloud-layer/point-cloud-layer-vertex.glsl.js");
/* harmony import */ var _point_cloud_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./point-cloud-layer-fragment.glsl */ "./src/point-cloud-layer/point-cloud-layer-fragment.glsl.js");
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








const DEFAULT_COLOR = [0, 0, 0, 255];
const DEFAULT_NORMAL = [0, 0, 1];
const defaultMaterial = new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__["PhongMaterial"]();

const defaultProps = {
  sizeUnits: 'pixels',
  pointSize: {type: 'number', min: 0, value: 10}, //  point radius in pixels

  getPosition: {type: 'accessor', value: x => x.position},
  getNormal: {type: 'accessor', value: DEFAULT_NORMAL},
  getColor: {type: 'accessor', value: DEFAULT_COLOR},

  material: defaultMaterial,

  // Depreated
  radiusPixels: {deprecatedFor: 'pointSize'}
};

// support loaders.gl point cloud format
function normalizeData(data) {
  const {header, attributes} = data;
  if (!header || !attributes) {
    return;
  }

  data.length = header.vertexCount;

  if (attributes.POSITION) {
    attributes.instancePositions = attributes.POSITION;
    attributes.instancePositions64xyLow = {constant: true, value: new Float32Array(2)};
  }
  if (attributes.NORMAL) {
    attributes.instanceNormals = attributes.NORMAL;
  }
  if (attributes.COLOR_0) {
    attributes.instanceColors = attributes.COLOR_0;
  }
}

class PointCloudLayer extends _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["Layer"] {
  getShaders(id) {
    return super.getShaders({vs: _point_cloud_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_2__["default"], fs: _point_cloud_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_3__["default"], modules: ['project32', 'gouraud-lighting', 'picking']});
  }

  initializeState() {
    /* eslint-disable max-len */
    this.getAttributeManager().addInstanced({
      instancePositions: {
        size: 3,
        transition: true,
        accessor: 'getPosition'
      },
      instancePositions64xyLow: {
        size: 2,
        accessor: 'getPosition',
        update: this.calculateInstancePositions64xyLow
      },
      instanceNormals: {
        size: 3,
        transition: true,
        accessor: 'getNormal',
        defaultValue: DEFAULT_NORMAL
      },
      instanceColors: {
        size: this.props.colorFormat.length,
        type: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.UNSIGNED_BYTE,
        normalized: true,
        transition: true,
        accessor: 'getColor',
        defaultValue: DEFAULT_COLOR
      }
    });
    /* eslint-enable max-len */
  }

  updateState({props, oldProps, changeFlags}) {
    super.updateState({props, oldProps, changeFlags});
    if (changeFlags.extensionsChanged) {
      const {gl} = this.context;
      if (this.state.model) {
        this.state.model.delete();
      }
      this.setState({model: this._getModel(gl)});
      this.getAttributeManager().invalidateAll();
    }
    if (changeFlags.dataChanged) {
      normalizeData(props.data);
    }
  }

  draw({uniforms}) {
    const {viewport} = this.context;
    const {pointSize, sizeUnits} = this.props;

    const sizeMultiplier = sizeUnits === 'meters' ? viewport.distanceScales.pixelsPerMeter[2] : 1;

    this.state.model
      .setUniforms(
        Object.assign({}, uniforms, {
          radiusPixels: pointSize * sizeMultiplier
        })
      )
      .draw();
  }

  _getModel(gl) {
    // a triangle that minimally cover the unit circle
    const positions = [];
    for (let i = 0; i < 3; i++) {
      const angle = (i / 3) * Math.PI * 2;
      positions.push(Math.cos(angle) * 2, Math.sin(angle) * 2, 0);
    }

    return new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__["Model"](
      gl,
      Object.assign({}, this.getShaders(), {
        id: this.props.id,
        geometry: new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__["Geometry"]({
          drawMode: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.TRIANGLES,
          attributes: {
            positions: new Float32Array(positions)
          }
        }),
        isInstanced: true,
        shaderCache: this.context.shaderCache
      })
    );
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

PointCloudLayer.layerName = 'PointCloudLayer';
PointCloudLayer.defaultProps = defaultProps;


/***/ }),

/***/ "./src/polygon-layer/polygon-layer.js":
/*!********************************************!*\
  !*** ./src/polygon-layer/polygon-layer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PolygonLayer; });
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/core */ "@luma.gl/constants");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _solid_polygon_layer_solid_polygon_layer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../solid-polygon-layer/solid-polygon-layer */ "./src/solid-polygon-layer/solid-polygon-layer.js");
/* harmony import */ var _path_layer_path_layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../path-layer/path-layer */ "./src/path-layer/path-layer.js");
/* harmony import */ var _solid_polygon_layer_polygon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../solid-polygon-layer/polygon */ "./src/solid-polygon-layer/polygon.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
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








const defaultLineColor = [0, 0, 0, 255];
const defaultFillColor = [0, 0, 0, 255];
const defaultMaterial = new _luma_gl_core__WEBPACK_IMPORTED_MODULE_0__["PhongMaterial"]();

const defaultProps = {
  stroked: true,
  filled: true,
  extruded: false,
  elevationScale: 1,
  wireframe: false,

  lineWidthUnits: 'meters',
  lineWidthScale: 1,
  lineWidthMinPixels: 0,
  lineWidthMaxPixels: Number.MAX_SAFE_INTEGER,
  lineJointRounded: false,
  lineMiterLimit: 4,
  lineDashJustified: false,

  getPolygon: {type: 'accessor', value: f => f.polygon},
  // Polygon fill color
  getFillColor: {type: 'accessor', value: defaultFillColor},
  // Point, line and polygon outline color
  getLineColor: {type: 'accessor', value: defaultLineColor},
  // Line and polygon outline accessors
  getLineWidth: {type: 'accessor', value: 1},
  // Line dash array accessor
  getLineDashArray: {type: 'accessor', value: [0, 0]},
  // Polygon extrusion accessor
  getElevation: {type: 'accessor', value: 1000},

  // Optional material for 'lighting' shader module
  material: defaultMaterial
};

class PolygonLayer extends _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["CompositeLayer"] {
  initializeState() {
    this.state = {
      paths: []
    };
  }

  updateState({oldProps, props, changeFlags}) {
    const geometryChanged =
      changeFlags.dataChanged ||
      (changeFlags.updateTriggersChanged &&
        (changeFlags.updateTriggersChanged.all || changeFlags.updateTriggersChanged.getPolygon));

    if (geometryChanged && Array.isArray(changeFlags.dataChanged)) {
      const paths = this.state.paths.slice();
      const pathsDiff = changeFlags.dataChanged.map(dataRange =>
        Object(_utils__WEBPACK_IMPORTED_MODULE_5__["replaceInRange"])({
          data: paths,
          getIndex: p => p.__source.index,
          dataRange,
          replace: this._getPaths(dataRange)
        })
      );
      this.setState({paths, pathsDiff});
    } else if (geometryChanged) {
      this.setState({
        paths: this._getPaths(),
        pathsDiff: null
      });
    }
  }

  _getPaths(dataRange = {}) {
    const {data, getPolygon, positionFormat} = this.props;
    const paths = [];
    const positionSize = positionFormat === 'XY' ? 2 : 3;
    const {startRow, endRow} = dataRange;

    const {iterable, objectInfo} = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["createIterable"])(data, startRow, endRow);
    for (const object of iterable) {
      objectInfo.index++;
      const {positions, holeIndices} = _solid_polygon_layer_polygon__WEBPACK_IMPORTED_MODULE_4__["normalize"](
        getPolygon(object, objectInfo),
        positionSize
      );

      if (holeIndices) {
        // split the positions array into `holeIndices.length + 1` rings
        // holeIndices[-1] falls back to 0
        // holeIndices[holeIndices.length] falls back to positions.length
        for (let i = 0; i <= holeIndices.length; i++) {
          const path = positions.subarray(
            holeIndices[i - 1] || 0,
            holeIndices[i] || positions.length
          );
          paths.push(this.getSubLayerRow({path}, object, objectInfo.index));
        }
      } else {
        paths.push(this.getSubLayerRow({path: positions}, object, objectInfo.index));
      }
    }
    return paths;
  }

  /* eslint-disable complexity */
  renderLayers() {
    // Layer composition props
    const {
      data,
      _dataDiff,
      stroked,
      filled,
      extruded,
      wireframe,
      elevationScale,
      transitions,
      positionFormat
    } = this.props;

    // Rendering props underlying layer
    const {
      lineWidthUnits,
      lineWidthScale,
      lineWidthMinPixels,
      lineWidthMaxPixels,
      lineJointRounded,
      lineMiterLimit,
      lineDashJustified
    } = this.props;

    // Accessor props for underlying layers
    const {
      getFillColor,
      getLineColor,
      getLineWidth,
      getLineDashArray,
      getElevation,
      getPolygon,
      updateTriggers,
      material
    } = this.props;

    const {paths, pathsDiff} = this.state;

    const FillLayer = this.getSubLayerClass('fill', _solid_polygon_layer_solid_polygon_layer__WEBPACK_IMPORTED_MODULE_2__["default"]);
    const StrokeLayer = this.getSubLayerClass('stroke', _path_layer_path_layer__WEBPACK_IMPORTED_MODULE_3__["default"]);

    // Filled Polygon Layer
    const polygonLayer =
      this.shouldRenderSubLayer('fill', paths) &&
      new FillLayer(
        {
          _dataDiff,
          extruded,
          elevationScale,

          filled,
          wireframe,

          getElevation,
          getFillColor,
          getLineColor,

          material,
          transitions
        },
        this.getSubLayerProps({
          id: 'fill',
          updateTriggers: {
            getPolygon: updateTriggers.getPolygon,
            getElevation: updateTriggers.getElevation,
            getFillColor: updateTriggers.getFillColor,
            getLineColor: updateTriggers.getLineColor
          }
        }),
        {
          data,
          positionFormat,
          getPolygon
        }
      );

    // Polygon line layer
    const polygonLineLayer =
      !extruded &&
      stroked &&
      this.shouldRenderSubLayer('stroke', paths) &&
      new StrokeLayer(
        {
          _dataDiff: pathsDiff && (() => pathsDiff),
          widthUnits: lineWidthUnits,
          widthScale: lineWidthScale,
          widthMinPixels: lineWidthMinPixels,
          widthMaxPixels: lineWidthMaxPixels,
          rounded: lineJointRounded,
          miterLimit: lineMiterLimit,
          dashJustified: lineDashJustified,

          transitions: transitions && {
            getWidth: transitions.getLineWidth,
            getColor: transitions.getLineColor,
            getPath: transitions.getPolygon
          },

          getColor: this.getSubLayerAccessor(getLineColor),
          getWidth: this.getSubLayerAccessor(getLineWidth),
          getDashArray: this.getSubLayerAccessor(getLineDashArray)
        },
        this.getSubLayerProps({
          id: 'stroke',
          updateTriggers: {
            getWidth: updateTriggers.getLineWidth,
            getColor: updateTriggers.getLineColor,
            getDashArray: updateTriggers.getLineDashArray
          }
        }),
        {
          data: paths,
          positionFormat,
          getPath: x => x.path
        }
      );

    return [
      // If not extruded: flat fill layer is drawn below outlines
      !extruded && polygonLayer,
      polygonLineLayer,
      // If extruded: draw fill layer last for correct blending behavior
      extruded && polygonLayer
    ];
  }
  /* eslint-enable complexity */
}

PolygonLayer.layerName = 'PolygonLayer';
PolygonLayer.defaultProps = defaultProps;


/***/ }),

/***/ "./src/scatterplot-layer/scatterplot-layer-fragment.glsl.js":
/*!******************************************************************!*\
  !*** ./src/scatterplot-layer/scatterplot-layer-fragment.glsl.js ***!
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

/* harmony default export */ __webpack_exports__["default"] = (`\
#define SHADER_NAME scatterplot-layer-fragment-shader

precision highp float;

uniform bool filled;

varying vec4 vFillColor;
varying vec4 vLineColor;
varying vec2 unitPosition;
varying float innerUnitRadius;

void main(void) {
  geometry.uv = unitPosition;

  float distToCenter = length(unitPosition);

  if (distToCenter > 1.0) {
    discard;
  } 
  if (distToCenter > innerUnitRadius) {
    gl_FragColor = vLineColor;
  } else if (filled) {
    gl_FragColor = vFillColor;
  } else {
    discard;
  }

  DECKGL_FILTER_COLOR(gl_FragColor, geometry);
}
`);


/***/ }),

/***/ "./src/scatterplot-layer/scatterplot-layer-vertex.glsl.js":
/*!****************************************************************!*\
  !*** ./src/scatterplot-layer/scatterplot-layer-vertex.glsl.js ***!
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
#define SHADER_NAME scatterplot-layer-vertex-shader

attribute vec3 positions;

attribute vec3 instancePositions;
attribute vec2 instancePositions64xyLow;
attribute float instanceRadius;
attribute float instanceLineWidths;
attribute vec4 instanceFillColors;
attribute vec4 instanceLineColors;
attribute vec3 instancePickingColors;

uniform float opacity;
uniform float radiusScale;
uniform float radiusMinPixels;
uniform float radiusMaxPixels;
uniform float lineWidthScale;
uniform float lineWidthMinPixels;
uniform float lineWidthMaxPixels;
uniform float stroked;
uniform bool filled;

varying vec4 vFillColor;
varying vec4 vLineColor;
varying vec2 unitPosition;
varying float innerUnitRadius;

void main(void) {
  geometry.worldPosition = instancePositions;

  // Multiply out radius and clamp to limits
  float outerRadiusPixels = clamp(
    project_size_to_pixel(radiusScale * instanceRadius),
    radiusMinPixels, radiusMaxPixels
  );
  
  // Multiply out line width and clamp to limits
  float lineWidthPixels = clamp(
    project_size_to_pixel(lineWidthScale * instanceLineWidths),
    lineWidthMinPixels, lineWidthMaxPixels
  );

  // outer radius needs to offset by half stroke width
  outerRadiusPixels += stroked * lineWidthPixels / 2.0;

  // position on the containing square in [-1, 1] space
  unitPosition = positions.xy;
  geometry.uv = unitPosition;

  innerUnitRadius = 1.0 - stroked * lineWidthPixels / outerRadiusPixels;
  
  vec3 offset = positions * project_pixel_size(outerRadiusPixels);
  DECKGL_FILTER_SIZE(offset, geometry);
  gl_Position = project_position_to_clipspace(instancePositions, instancePositions64xyLow, offset, geometry.position);
  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);

  // Apply opacity to instance color, or return instance picking color
  vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * opacity);
  DECKGL_FILTER_COLOR(vFillColor, geometry);
  vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * opacity);
  DECKGL_FILTER_COLOR(vLineColor, geometry);
  
  // Set color to be rendered to picking fbo (also used to check for selection highlight).
  picking_setPickingColor(instancePickingColors);
}
`);


/***/ }),

/***/ "./src/scatterplot-layer/scatterplot-layer.js":
/*!****************************************************!*\
  !*** ./src/scatterplot-layer/scatterplot-layer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScatterplotLayer; });
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @luma.gl/constants */ "@luma.gl/constants");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scatterplot_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scatterplot-layer-vertex.glsl */ "./src/scatterplot-layer/scatterplot-layer-vertex.glsl.js");
/* harmony import */ var _scatterplot_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scatterplot-layer-fragment.glsl */ "./src/scatterplot-layer/scatterplot-layer-fragment.glsl.js");
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








const DEFAULT_COLOR = [0, 0, 0, 255];

const defaultProps = {
  radiusScale: {type: 'number', min: 0, value: 1},
  radiusMinPixels: {type: 'number', min: 0, value: 0}, //  min point radius in pixels
  radiusMaxPixels: {type: 'number', min: 0, value: Number.MAX_SAFE_INTEGER}, // max point radius in pixels

  lineWidthUnits: 'meters',
  lineWidthScale: {type: 'number', min: 0, value: 1},
  lineWidthMinPixels: {type: 'number', min: 0, value: 0},
  lineWidthMaxPixels: {type: 'number', min: 0, value: Number.MAX_SAFE_INTEGER},

  stroked: false,
  filled: true,

  getPosition: {type: 'accessor', value: x => x.position},
  getRadius: {type: 'accessor', value: 1},
  getFillColor: {type: 'accessor', value: DEFAULT_COLOR},
  getLineColor: {type: 'accessor', value: DEFAULT_COLOR},
  getLineWidth: {type: 'accessor', value: 1},

  // deprecated
  strokeWidth: {deprecatedFor: 'getLineWidth'},
  outline: {deprecatedFor: 'stroked'},
  getColor: {deprecatedFor: ['getFillColor', 'getLineColor']}
};

class ScatterplotLayer extends _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["Layer"] {
  getShaders(id) {
    return super.getShaders({vs: _scatterplot_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_2__["default"], fs: _scatterplot_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_3__["default"], modules: ['project32', 'picking']});
  }

  initializeState() {
    this.getAttributeManager().addInstanced({
      instancePositions: {
        size: 3,
        transition: true,
        accessor: 'getPosition'
      },
      instancePositions64xyLow: {
        size: 2,
        accessor: 'getPosition',
        update: this.calculateInstancePositions64xyLow
      },
      instanceRadius: {
        size: 1,
        transition: true,
        accessor: 'getRadius',
        defaultValue: 1
      },
      instanceFillColors: {
        size: this.props.colorFormat.length,
        transition: true,
        normalized: true,
        type: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.UNSIGNED_BYTE,
        accessor: 'getFillColor',
        defaultValue: [0, 0, 0, 255]
      },
      instanceLineColors: {
        size: this.props.colorFormat.length,
        transition: true,
        normalized: true,
        type: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.UNSIGNED_BYTE,
        accessor: 'getLineColor',
        defaultValue: [0, 0, 0, 255]
      },
      instanceLineWidths: {
        size: 1,
        transition: true,
        accessor: 'getLineWidth',
        defaultValue: 1
      }
    });
  }

  updateState({props, oldProps, changeFlags}) {
    super.updateState({props, oldProps, changeFlags});
    if (changeFlags.extensionsChanged) {
      const {gl} = this.context;
      if (this.state.model) {
        this.state.model.delete();
      }
      this.setState({model: this._getModel(gl)});
      this.getAttributeManager().invalidateAll();
    }
  }

  draw({uniforms}) {
    const {viewport} = this.context;
    const {
      radiusScale,
      radiusMinPixels,
      radiusMaxPixels,
      stroked,
      filled,
      lineWidthUnits,
      lineWidthScale,
      lineWidthMinPixels,
      lineWidthMaxPixels
    } = this.props;

    const widthMultiplier =
      lineWidthUnits === 'pixels' ? viewport.distanceScales.metersPerPixel[2] : 1;

    this.state.model
      .setUniforms(
        Object.assign({}, uniforms, {
          stroked: stroked ? 1 : 0,
          filled,
          radiusScale,
          radiusMinPixels,
          radiusMaxPixels,
          lineWidthScale: lineWidthScale * widthMultiplier,
          lineWidthMinPixels,
          lineWidthMaxPixels
        })
      )
      .draw();
  }

  _getModel(gl) {
    // a square that minimally cover the unit circle
    const positions = [-1, -1, 0, -1, 1, 0, 1, 1, 0, 1, -1, 0];

    return new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__["Model"](
      gl,
      Object.assign(this.getShaders(), {
        id: this.props.id,
        geometry: new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__["Geometry"]({
          drawMode: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.TRIANGLE_FAN,
          vertexCount: 4,
          attributes: {
            positions: {size: 3, value: new Float32Array(positions)}
          }
        }),
        isInstanced: true,
        shaderCache: this.context.shaderCache
      })
    );
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

ScatterplotLayer.layerName = 'ScatterplotLayer';
ScatterplotLayer.defaultProps = defaultProps;


/***/ }),

/***/ "./src/solid-polygon-layer/polygon-tesselator.js":
/*!*******************************************************!*\
  !*** ./src/solid-polygon-layer/polygon-tesselator.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PolygonTesselator; });
/* harmony import */ var _polygon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polygon */ "./src/solid-polygon-layer/polygon.js");
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

// Handles tesselation of polygons with holes
// - 2D surfaces
// - 2D outlines
// - 3D surfaces (top and sides only)
// - 3D wireframes (not yet)


const {Tesselator} = _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["experimental"];

// This class is set up to allow querying one attribute at a time
// the way the AttributeManager expects it
class PolygonTesselator extends Tesselator {
  constructor({data, getGeometry, fp64, positionFormat, IndexType = Uint32Array}) {
    super({
      data,
      getGeometry,
      fp64,
      positionFormat,
      attributes: {
        positions: {size: 3},
        positions64xyLow: {size: 2, fp64Only: true},
        vertexValid: {type: Uint8ClampedArray, size: 1},
        indices: {type: IndexType, size: 1}
      }
    });
  }

  /* Getters */
  get(attributeName) {
    if (attributeName === 'indices') {
      return this.attributes.indices.subarray(0, this.vertexCount);
    }

    return this.attributes[attributeName];
  }

  /* Implement base Tesselator interface */
  getGeometrySize(polygon) {
    return _polygon__WEBPACK_IMPORTED_MODULE_0__["getVertexCount"](polygon, this.positionSize);
  }

  updateGeometryAttributes(polygon, context) {
    polygon = _polygon__WEBPACK_IMPORTED_MODULE_0__["normalize"](polygon, this.positionSize, context.geometrySize);

    this._updateIndices(polygon, context);
    this._updatePositions(polygon, context);
  }

  // Flatten the indices array
  _updateIndices(polygon, {geometryIndex, vertexStart: offset, indexStart}) {
    const {attributes, indexLayout, typedArrayManager} = this;

    let target = attributes.indices;
    let i = indexStart;

    // 1. get triangulated indices for the internal areas
    const indices = _polygon__WEBPACK_IMPORTED_MODULE_0__["getSurfaceIndices"](polygon, this.positionSize);

    // make sure the buffer is large enough
    target = typedArrayManager.allocate(target, indexStart + indices.length, {
      copy: true
    });

    // 2. offset each index by the number of indices in previous polygons
    for (let j = 0; j < indices.length; j++) {
      target[i++] = indices[j] + offset;
    }

    indexLayout[geometryIndex] = indices.length;
    attributes.indices = target;
  }

  // Flatten out all the vertices of all the sub subPolygons
  _updatePositions(polygon, {vertexStart, geometrySize}) {
    const {
      attributes: {positions, positions64xyLow, vertexValid},
      fp64,
      positionSize
    } = this;

    let i = vertexStart;
    const {positions: polygonPositions, holeIndices} = polygon;

    for (let j = 0; j < geometrySize; j++) {
      const x = polygonPositions[j * positionSize];
      const y = polygonPositions[j * positionSize + 1];
      const z = positionSize > 2 ? polygonPositions[j * positionSize + 2] : 0;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      if (fp64) {
        positions64xyLow[i * 2] = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["fp64LowPart"])(x);
        positions64xyLow[i * 2 + 1] = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["fp64LowPart"])(y);
      }
      vertexValid[i] = 1;
      i++;
    }

    /* We are reusing the some buffer for `nextPositions` by offseting one vertex
     * to the left. As a result,
     * the last vertex of each ring overlaps with the first vertex of the next ring.
     * `vertexValid` is used to mark the end of each ring so we don't draw these
     * segments:
      positions      A0 A1 A2 A3 A4 B0 B1 B2 C0 ...
      nextPositions  A1 A2 A3 A4 B0 B1 B2 C0 C1 ...
      vertexValid    1  1  1  1  0  1  1  0  1 ...
     */
    if (holeIndices) {
      for (let j = 0; j < holeIndices.length; j++) {
        vertexValid[vertexStart + holeIndices[j] / positionSize - 1] = 0;
      }
    }
    vertexValid[vertexStart + geometrySize - 1] = 0;
  }
}


/***/ }),

/***/ "./src/solid-polygon-layer/polygon.js":
/*!********************************************!*\
  !*** ./src/solid-polygon-layer/polygon.js ***!
  \********************************************/
/*! exports provided: getVertexCount, normalize, getSurfaceIndices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVertexCount", function() { return getVertexCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSurfaceIndices", function() { return getSurfaceIndices; });
/* harmony import */ var earcut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! earcut */ "../../node_modules/earcut/src/earcut.js");
/* harmony import */ var earcut__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(earcut__WEBPACK_IMPORTED_MODULE_0__);
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

/* eslint-disable max-params */


// 4 data formats are supported:
// Simple Polygon: an array of points
// Complex Polygon: an array of array of points (array of rings)
//   with the first ring representing the outer hull and other rings representing holes
// Simple Flat: an array of numbers (flattened "simple polygon")
// Complex Flat: {position: array<number>, holeIndices: array<number>}
//   (flattened "complex polygon")

/**
 * Ensure a polygon is valid format
 * @param {Array|Object} polygon
 */
function validate(polygon) {
  polygon = (polygon && polygon.positions) || polygon;
  if (!Array.isArray(polygon) && !ArrayBuffer.isView(polygon)) {
    throw new Error('invalid polygon');
  }
}

/**
 * Check if a polygon is simple or complex
 * @param {Array} polygon - either a complex or simple polygon
 * @return {Boolean} - true if the polygon is a simple polygon (i.e. not an array of polygons)
 */
function isSimple(polygon) {
  return polygon.length >= 1 && polygon[0].length >= 2 && Number.isFinite(polygon[0][0]);
}

/**
 * Check if a simple polygon is a closed ring
 * @param {Array} simplePolygon - array of points
 * @return {Boolean} - true if the simple polygon is a closed ring
 */
function isNestedRingClosed(simplePolygon) {
  // check if first and last vertex are the same
  const p0 = simplePolygon[0];
  const p1 = simplePolygon[simplePolygon.length - 1];

  return p0[0] === p1[0] && p0[1] === p1[1] && p0[2] === p1[2];
}

/**
 * Check if a simple flat array is a closed ring
 * @param {Array} positions - array of numbers
 * @param {Number} size - size of a position, 2 (xy) or 3 (xyz)
 * @param {Number} startIndex - start index of the path in the positions array
 * @param {Number} endIndex - end index of the path in the positions array
 * @return {Boolean} - true if the simple flat array is a closed ring
 */
function isFlatRingClosed(positions, size, startIndex, endIndex) {
  for (let i = 0; i < size; i++) {
    if (positions[startIndex + i] !== positions[endIndex - size + i]) {
      return false;
    }
  }
  return true;
}

/**
 * Copy a simple polygon coordinates into a flat array, closes the ring if needed.
 * @param {Float64Array} target - destination
 * @param {Number} targetStartIndex - index in the destination to start copying into
 * @param {Array} simplePolygon - array of points
 * @param {Number} size - size of a position, 2 (xy) or 3 (xyz)
 * @returns {Number} - the index of the write head in the destination
 */
function copyNestedRing(target, targetStartIndex, simplePolygon, size) {
  let targetIndex = targetStartIndex;
  const len = simplePolygon.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < size; j++) {
      target[targetIndex++] = simplePolygon[i][j] || 0;
    }
  }

  if (!isNestedRingClosed(simplePolygon)) {
    for (let j = 0; j < size; j++) {
      target[targetIndex++] = simplePolygon[0][j] || 0;
    }
  }
  return targetIndex;
}

/**
 * Copy a simple flat array into another flat array, closes the ring if needed.
 * @param {Float64Array} target - destination
 * @param {Number} targetStartIndex - index in the destination to start copying into
 * @param {Array} positions - array of numbers
 * @param {Number} size - size of a position, 2 (xy) or 3 (xyz)
 * @param {Number} [srcStartIndex] - start index of the path in the positions array
 * @param {Number} [srcEndIndex] - end index of the path in the positions array
 * @returns {Number} - the index of the write head in the destination
 */
function copyFlatRing(target, targetStartIndex, positions, size, srcStartIndex = 0, srcEndIndex) {
  srcEndIndex = srcEndIndex || positions.length;
  const srcLength = srcEndIndex - srcStartIndex;
  if (srcLength <= 0) {
    return targetStartIndex;
  }
  let targetIndex = targetStartIndex;

  for (let i = 0; i < srcLength; i++) {
    target[targetIndex++] = positions[srcStartIndex + i];
  }

  if (!isFlatRingClosed(positions, size, srcStartIndex, srcEndIndex)) {
    for (let i = 0; i < size; i++) {
      target[targetIndex++] = positions[srcStartIndex + i];
    }
  }
  return targetIndex;
}

/**
 * Counts the number of vertices in a simple polygon, closes the polygon if needed.
 * @param {Array} simplePolygon - array of points
 * @returns {Number} vertex count
 */
function getNestedVertexCount(simplePolygon) {
  return (isNestedRingClosed(simplePolygon) ? 0 : 1) + simplePolygon.length;
}

/**
 * Counts the number of vertices in a simple flat array, closes the polygon if needed.
 * @param {Array} positions - array of numbers
 * @param {Number} size - size of a position, 2 (xy) or 3 (xyz)
 * @param {Number} [startIndex] - start index of the path in the positions array
 * @param {Number} [endIndex] - end index of the path in the positions array
 * @returns {Number} vertex count
 */
function getFlatVertexCount(positions, size, startIndex = 0, endIndex) {
  endIndex = endIndex || positions.length;
  if (startIndex >= endIndex) {
    return 0;
  }
  return (
    (isFlatRingClosed(positions, size, startIndex, endIndex) ? 0 : 1) +
    (endIndex - startIndex) / size
  );
}

/**
 * Counts the number of vertices in any polygon representation.
 * @param {Array|Object} polygon
 * @param {Number} positionSize - size of a position, 2 (xy) or 3 (xyz)
 * @returns {Number} vertex count
 */
function getVertexCount(polygon, positionSize) {
  validate(polygon);

  if (polygon.positions) {
    // complex flat
    const {positions, holeIndices} = polygon;

    if (holeIndices) {
      let vertexCount = 0;
      // split the positions array into `holeIndices.length + 1` rings
      // holeIndices[-1] falls back to 0
      // holeIndices[holeIndices.length] falls back to positions.length
      for (let i = 0; i <= holeIndices.length; i++) {
        vertexCount += getFlatVertexCount(
          polygon.positions,
          positionSize,
          holeIndices[i - 1],
          holeIndices[i]
        );
      }
      return vertexCount;
    }
    polygon = positions;
  }
  if (Number.isFinite(polygon[0])) {
    // simple flat
    return getFlatVertexCount(polygon, positionSize);
  }
  if (!isSimple(polygon)) {
    // complex polygon
    let vertexCount = 0;
    for (const simplePolygon of polygon) {
      vertexCount += getNestedVertexCount(simplePolygon);
    }
    return vertexCount;
  }
  // simple polygon
  return getNestedVertexCount(polygon);
}

/**
 * Normalize any polygon representation into the "complex flat" format
 * @param {Array|Object} polygon
 * @param {Number} positionSize - size of a position, 2 (xy) or 3 (xyz)
 * @param {Number} [vertexCount] - pre-computed vertex count in the polygon.
 *   If provided, will skip counting.
 * @return {Object} - {positions: <Float64Array>, holeIndices: <Array|null>}
 */
/* eslint-disable max-statements */
function normalize(polygon, positionSize, vertexCount) {
  validate(polygon);

  vertexCount = vertexCount || getVertexCount(polygon, positionSize);

  const positions = new Float64Array(vertexCount * positionSize);
  const holeIndices = [];

  if (polygon.positions) {
    // complex flat
    const {positions: srcPositions, holeIndices: srcHoleIndices} = polygon;

    if (srcHoleIndices) {
      let targetIndex = 0;
      // split the positions array into `holeIndices.length + 1` rings
      // holeIndices[-1] falls back to 0
      // holeIndices[holeIndices.length] falls back to positions.length
      for (let i = 0; i <= srcHoleIndices.length; i++) {
        targetIndex = copyFlatRing(
          positions,
          targetIndex,
          srcPositions,
          positionSize,
          srcHoleIndices[i - 1],
          srcHoleIndices[i]
        );
        holeIndices.push(targetIndex);
      }
      // The last one is not a starting index of a hole, remove
      holeIndices.pop();

      return {positions, holeIndices};
    }
    polygon = srcPositions;
  }
  if (Number.isFinite(polygon[0])) {
    // simple flat
    copyFlatRing(positions, 0, polygon, positionSize);
    return {positions, holeIndices: null};
  }
  if (!isSimple(polygon)) {
    // complex polygon
    let targetIndex = 0;

    for (const simplePolygon of polygon) {
      targetIndex = copyNestedRing(positions, targetIndex, simplePolygon, positionSize);
      holeIndices.push(targetIndex);
    }
    // The last one is not a starting index of a hole, remove
    holeIndices.pop();
    // last index points to the end of the array, remove it
    return {positions, holeIndices};
  }
  // simple polygon
  copyNestedRing(positions, 0, polygon, positionSize);
  return {positions, holeIndices: null};
}
/* eslint-enable max-statements */

/*
 * Get vertex indices for drawing polygon mesh
 * @param {Object} normalizedPolygon - {positions, holeIndices}
 * @param {Number} positionSize - size of a position, 2 (xy) or 3 (xyz)
 * @returns {Array} array of indices
 */
function getSurfaceIndices(normalizedPolygon, positionSize) {
  let holeIndices = null;

  if (normalizedPolygon.holeIndices) {
    holeIndices = normalizedPolygon.holeIndices.map(positionIndex => positionIndex / positionSize);
  }
  // Let earcut triangulate the polygon
  return earcut__WEBPACK_IMPORTED_MODULE_0___default()(normalizedPolygon.positions, holeIndices, positionSize);
}


/***/ }),

/***/ "./src/solid-polygon-layer/solid-polygon-layer-fragment.glsl.js":
/*!**********************************************************************!*\
  !*** ./src/solid-polygon-layer/solid-polygon-layer-fragment.glsl.js ***!
  \**********************************************************************/
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
#define SHADER_NAME solid-polygon-layer-fragment-shader

precision highp float;

varying vec4 vColor;
varying float isValid;

void main(void) {
  if (isValid < 0.5) {
    discard;
  }

  gl_FragColor = vColor;

  DECKGL_FILTER_COLOR(gl_FragColor, geometry);
}
`);


/***/ }),

/***/ "./src/solid-polygon-layer/solid-polygon-layer-vertex-main.glsl.js":
/*!*************************************************************************!*\
  !*** ./src/solid-polygon-layer/solid-polygon-layer-vertex-main.glsl.js ***!
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

/* harmony default export */ __webpack_exports__["default"] = (`\

attribute vec2 vertexPositions;
attribute float vertexValid;

uniform bool extruded;
uniform bool isWireframe;
uniform float elevationScale;
uniform float opacity;

varying vec4 vColor;
varying float isValid;

struct PolygonProps {
  vec4 fillColors;
  vec4 lineColors;
  vec3 positions;
  vec3 nextPositions;
  vec3 pickingColors;
  vec2 positions64xyLow;
  vec2 nextPositions64xyLow;
  float elevations;
};

vec3 project_offset_normal(vec3 vector) {
  if (project_uCoordinateSystem == COORDINATE_SYSTEM_LNG_LAT ||
    project_uCoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSETS ||
    project_uCoordinateSystem == COORDINATE_SYSTEM_LNGLAT_AUTO_OFFSET) {
    // normals generated by the polygon tesselator are in lnglat offsets instead of meters
    return normalize(vector * project_uCommonUnitsPerWorldUnit);
  }
  return project_normal(vector);
}

void calculatePosition(PolygonProps props) {
  vec3 pos;
  vec2 pos64xyLow;
  vec3 normal;
  vec4 colors = isWireframe ? props.lineColors : props.fillColors;

  geometry.worldPosition = props.positions;
  geometry.worldPositionAlt = props.nextPositions;

#ifdef IS_SIDE_VERTEX
  pos = mix(props.positions, props.nextPositions, vertexPositions.x);
  pos64xyLow = mix(props.positions64xyLow, props.nextPositions64xyLow, vertexPositions.x);
  isValid = vertexValid;
#else
  pos = props.positions;
  pos64xyLow = props.positions64xyLow;
  isValid = 1.0;
#endif

  if (extruded) {
    pos.z += props.elevations * vertexPositions.y * elevationScale;
    
#ifdef IS_SIDE_VERTEX
    normal = vec3(props.positions.y - props.nextPositions.y, props.nextPositions.x - props.positions.x, 0.0);
    normal = project_offset_normal(normal);
#else
    normal = vec3(0.0, 0.0, 1.0);
#endif
    geometry.normal = normal;
  }

  gl_Position = project_position_to_clipspace(pos, pos64xyLow, vec3(0.), geometry.position);
  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);

  if (extruded) {
    vec3 lightColor = lighting_getLightColor(colors.rgb, project_uCameraPosition, geometry.position.xyz, normal);
    vColor = vec4(lightColor, colors.a * opacity);
  } else {
    vColor = vec4(colors.rgb, colors.a * opacity);
  }
  DECKGL_FILTER_COLOR(vColor, geometry);

  // Set color to be rendered to picking fbo (also used to check for selection highlight).
  picking_setPickingColor(props.pickingColors);
}
`);


/***/ }),

/***/ "./src/solid-polygon-layer/solid-polygon-layer-vertex-side.glsl.js":
/*!*************************************************************************!*\
  !*** ./src/solid-polygon-layer/solid-polygon-layer-vertex-side.glsl.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _solid_polygon_layer_vertex_main_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solid-polygon-layer-vertex-main.glsl */ "./src/solid-polygon-layer/solid-polygon-layer-vertex-main.glsl.js");
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
#define SHADER_NAME solid-polygon-layer-vertex-shader-side
#define IS_SIDE_VERTEX


attribute vec3 instancePositions;
attribute vec2 instancePositions64xyLow;
attribute vec3 nextPositions;
attribute vec2 nextPositions64xyLow;
attribute float instanceElevations;
attribute vec4 instanceFillColors;
attribute vec4 instanceLineColors;
attribute vec3 instancePickingColors;

${_solid_polygon_layer_vertex_main_glsl__WEBPACK_IMPORTED_MODULE_0__["default"]}

void main(void) {
  PolygonProps props;

  props.positions = instancePositions;
  props.positions64xyLow = instancePositions64xyLow;
  props.elevations = instanceElevations;
  props.fillColors = instanceFillColors;
  props.lineColors = instanceLineColors;
  props.pickingColors = instancePickingColors;
  props.nextPositions = nextPositions;
  props.nextPositions64xyLow = nextPositions64xyLow;

  calculatePosition(props);
}
`);


/***/ }),

/***/ "./src/solid-polygon-layer/solid-polygon-layer-vertex-top.glsl.js":
/*!************************************************************************!*\
  !*** ./src/solid-polygon-layer/solid-polygon-layer-vertex-top.glsl.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _solid_polygon_layer_vertex_main_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solid-polygon-layer-vertex-main.glsl */ "./src/solid-polygon-layer/solid-polygon-layer-vertex-main.glsl.js");
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
#define SHADER_NAME solid-polygon-layer-vertex-shader

attribute vec3 positions;
attribute vec2 positions64xyLow;
attribute float elevations;
attribute vec4 fillColors;
attribute vec4 lineColors;
attribute vec3 pickingColors;

${_solid_polygon_layer_vertex_main_glsl__WEBPACK_IMPORTED_MODULE_0__["default"]}

void main(void) {
  PolygonProps props;

  props.positions = positions;
  props.positions64xyLow = positions64xyLow;
  props.elevations = elevations;
  props.fillColors = fillColors;
  props.lineColors = lineColors;
  props.pickingColors = pickingColors;

  calculatePosition(props);
}
`);


/***/ }),

/***/ "./src/solid-polygon-layer/solid-polygon-layer.js":
/*!********************************************************!*\
  !*** ./src/solid-polygon-layer/solid-polygon-layer.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SolidPolygonLayer; });
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @luma.gl/constants */ "@luma.gl/constants");
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _polygon_tesselator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./polygon-tesselator */ "./src/solid-polygon-layer/polygon-tesselator.js");
/* harmony import */ var _solid_polygon_layer_vertex_top_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solid-polygon-layer-vertex-top.glsl */ "./src/solid-polygon-layer/solid-polygon-layer-vertex-top.glsl.js");
/* harmony import */ var _solid_polygon_layer_vertex_side_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./solid-polygon-layer-vertex-side.glsl */ "./src/solid-polygon-layer/solid-polygon-layer-vertex-side.glsl.js");
/* harmony import */ var _solid_polygon_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./solid-polygon-layer-fragment.glsl */ "./src/solid-polygon-layer/solid-polygon-layer-fragment.glsl.js");
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





// Polygon geometry generation is managed by the polygon tesselator






const DEFAULT_COLOR = [0, 0, 0, 255];
const defaultMaterial = new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__["PhongMaterial"]();

const defaultProps = {
  filled: true,
  // Whether to extrude
  extruded: false,
  // Whether to draw a GL.LINES wireframe of the polygon
  wireframe: false,

  // elevation multiplier
  elevationScale: {type: 'number', min: 0, value: 1},

  // Accessor for polygon geometry
  getPolygon: {type: 'accessor', value: f => f.polygon},
  // Accessor for extrusion height
  getElevation: {type: 'accessor', value: 1000},
  // Accessor for colors
  getFillColor: {type: 'accessor', value: DEFAULT_COLOR},
  getLineColor: {type: 'accessor', value: DEFAULT_COLOR},

  // Optional settings for 'lighting' shader module
  material: defaultMaterial
};

const ATTRIBUTE_TRANSITION = {
  enter: (value, chunk) => {
    return chunk.length ? chunk.subarray(chunk.length - value.length) : value;
  }
};

class SolidPolygonLayer extends _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["Layer"] {
  getShaders(vs) {
    return super.getShaders({
      vs,
      fs: _solid_polygon_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_5__["default"],
      defines: {},
      modules: ['project32', 'gouraud-lighting', 'picking']
    });
  }

  initializeState() {
    const {gl} = this.context;
    this.setState({
      numInstances: 0,
      polygonTesselator: new _polygon_tesselator__WEBPACK_IMPORTED_MODULE_2__["default"]({
        IndexType: !gl || Object(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__["hasFeature"])(gl, _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__["FEATURES"].ELEMENT_INDEX_UINT32) ? Uint32Array : Uint16Array
      })
    });

    const attributeManager = this.getAttributeManager();
    const noAlloc = true;

    attributeManager.remove(['instancePickingColors']);

    /* eslint-disable max-len */
    attributeManager.add({
      indices: {size: 1, isIndexed: true, update: this.calculateIndices, noAlloc},
      positions: {
        size: 3,
        transition: ATTRIBUTE_TRANSITION,
        accessor: 'getPolygon',
        update: this.calculatePositions,
        noAlloc,
        shaderAttributes: {
          positions: {
            offset: 0,
            divisor: 0
          },
          instancePositions: {
            offset: 0,
            divisor: 1
          },
          nextPositions: {
            offset: 12,
            divisor: 1
          }
        }
      },
      positions64xyLow: {
        size: 2,
        update: this.calculatePositionsLow,
        noAlloc,
        shaderAttributes: {
          positions64xyLow: {
            offset: 0,
            divisor: 0
          },
          instancePositions64xyLow: {
            offset: 0,
            divisor: 1
          },
          nextPositions64xyLow: {
            offset: 8,
            divisor: 1
          }
        }
      },
      vertexValid: {
        size: 1,
        divisor: 1,
        type: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.UNSIGNED_BYTE,
        update: this.calculateVertexValid,
        noAlloc
      },
      elevations: {
        size: 1,
        transition: ATTRIBUTE_TRANSITION,
        accessor: 'getElevation',
        shaderAttributes: {
          elevations: {
            divisor: 0
          },
          instanceElevations: {
            divisor: 1
          }
        }
      },
      fillColors: {
        alias: 'colors',
        size: this.props.colorFormat.length,
        type: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.UNSIGNED_BYTE,
        normalized: true,
        transition: ATTRIBUTE_TRANSITION,
        accessor: 'getFillColor',
        defaultValue: DEFAULT_COLOR,
        shaderAttributes: {
          fillColors: {
            divisor: 0
          },
          instanceFillColors: {
            divisor: 1
          }
        }
      },
      lineColors: {
        alias: 'colors',
        size: this.props.colorFormat.length,
        type: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.UNSIGNED_BYTE,
        normalized: true,
        transition: ATTRIBUTE_TRANSITION,
        accessor: 'getLineColor',
        defaultValue: DEFAULT_COLOR,
        shaderAttributes: {
          lineColors: {
            divisor: 0
          },
          instanceLineColors: {
            divisor: 1
          }
        }
      },
      pickingColors: {
        size: 3,
        type: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.UNSIGNED_BYTE,
        accessor: (object, {index, target: value}) => this.encodePickingColor(index, value),
        shaderAttributes: {
          pickingColors: {
            divisor: 0
          },
          instancePickingColors: {
            divisor: 1
          }
        }
      }
    });
    /* eslint-enable max-len */
  }

  draw({uniforms}) {
    const {extruded, filled, wireframe, elevationScale} = this.props;
    const {topModel, sideModel, polygonTesselator} = this.state;

    const renderUniforms = Object.assign({}, uniforms, {
      extruded: Boolean(extruded),
      elevationScale
    });

    // Note: the order is important
    if (sideModel) {
      sideModel.setInstanceCount(polygonTesselator.instanceCount - 1);
      sideModel.setUniforms(renderUniforms);
      if (wireframe) {
        sideModel.setDrawMode(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.LINE_STRIP);
        sideModel.setUniforms({isWireframe: true}).draw();
      }
      if (filled) {
        sideModel.setDrawMode(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.TRIANGLE_FAN);
        sideModel.setUniforms({isWireframe: false}).draw();
      }
    }

    if (topModel) {
      topModel.setVertexCount(polygonTesselator.get('indices').length);
      topModel.setUniforms(renderUniforms).draw();
    }
  }

  updateState(updateParams) {
    super.updateState(updateParams);

    this.updateGeometry(updateParams);

    const {props, oldProps, changeFlags} = updateParams;
    const attributeManager = this.getAttributeManager();

    const regenerateModels =
      changeFlags.extensionsChanged ||
      props.filled !== oldProps.filled ||
      props.extruded !== oldProps.extruded;

    if (regenerateModels) {
      if (this.state.models) {
        this.state.models.forEach(model => model.delete());
      }

      this.setState(this._getModels(this.context.gl));
      attributeManager.invalidateAll();
    }
  }

  updateGeometry({props, oldProps, changeFlags}) {
    const geometryConfigChanged =
      changeFlags.dataChanged ||
      (changeFlags.updateTriggersChanged &&
        (changeFlags.updateTriggersChanged.all || changeFlags.updateTriggersChanged.getPolygon));

    // When the geometry config  or the data is changed,
    // tessellator needs to be invoked
    if (geometryConfigChanged) {
      const {polygonTesselator} = this.state;
      polygonTesselator.updateGeometry({
        data: props.data,
        getGeometry: props.getPolygon,
        positionFormat: props.positionFormat,
        fp64: this.use64bitPositions(),
        dataChanged: changeFlags.dataChanged
      });

      this.setState({
        numInstances: polygonTesselator.instanceCount,
        bufferLayout: polygonTesselator.bufferLayout
      });

      if (!changeFlags.dataChanged) {
        // Base `layer.updateState` only invalidates all attributes on data change
        // Cover the rest of the scenarios here
        this.getAttributeManager().invalidateAll();
      }
    }
  }

  _getModels(gl) {
    const {id, filled, extruded} = this.props;

    let topModel;
    let sideModel;

    if (filled) {
      const shaders = this.getShaders(_solid_polygon_layer_vertex_top_glsl__WEBPACK_IMPORTED_MODULE_3__["default"]);
      shaders.defines.NON_INSTANCED_MODEL = 1;

      topModel = new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__["Model"](
        gl,
        Object.assign({}, shaders, {
          id: `${id}-top`,
          drawMode: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.TRIANGLES,
          attributes: {
            vertexPositions: new Float32Array([0, 1])
          },
          uniforms: {
            isWireframe: false,
            isSideVertex: false
          },
          vertexCount: 0,
          isIndexed: true,
          shaderCache: this.context.shaderCache
        })
      );
    }
    if (extruded) {
      sideModel = new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__["Model"](
        gl,
        Object.assign({}, this.getShaders(_solid_polygon_layer_vertex_side_glsl__WEBPACK_IMPORTED_MODULE_4__["default"]), {
          id: `${id}-side`,
          geometry: new _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__["Geometry"]({
            drawMode: _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.LINES,
            vertexCount: 4,
            attributes: {
              // top right - top left - bootom left - bottom right
              vertexPositions: {
                size: 2,
                value: new Float32Array([1, 1, 0, 1, 0, 0, 1, 0])
              }
            }
          }),
          instanceCount: 0,
          isInstanced: 1,
          shaderCache: this.context.shaderCache
        })
      );

      sideModel.userData.excludeAttributes = {indices: true};
    }

    return {
      models: [sideModel, topModel].filter(Boolean),
      topModel,
      sideModel
    };
  }

  calculateIndices(attribute) {
    const {polygonTesselator} = this.state;
    attribute.bufferLayout = polygonTesselator.indexLayout;
    attribute.value = polygonTesselator.get('indices');
  }

  calculatePositions(attribute) {
    const {polygonTesselator} = this.state;
    attribute.bufferLayout = polygonTesselator.bufferLayout;
    attribute.value = polygonTesselator.get('positions');
  }
  calculatePositionsLow(attribute) {
    const isFP64 = this.use64bitPositions();
    attribute.constant = !isFP64;

    if (!isFP64) {
      attribute.value = new Float32Array(2);
      return;
    }

    attribute.value = this.state.polygonTesselator.get('positions64xyLow');
  }

  calculateVertexValid(attribute) {
    attribute.value = this.state.polygonTesselator.get('vertexValid');
  }

  clearPickingColor(color) {
    const pickedPolygonIndex = this.decodePickingColor(color);
    const {bufferLayout} = this.state.polygonTesselator;
    const numVertices = bufferLayout[pickedPolygonIndex];

    let startInstanceIndex = 0;
    for (let polygonIndex = 0; polygonIndex < pickedPolygonIndex; polygonIndex++) {
      startInstanceIndex += bufferLayout[polygonIndex];
    }

    const {pickingColors} = this.getAttributeManager().attributes;

    const {value} = pickingColors;
    const endInstanceIndex = startInstanceIndex + numVertices;
    value.fill(0, startInstanceIndex * 3, endInstanceIndex * 3);
    pickingColors.update({value});
  }
}

SolidPolygonLayer.layerName = 'SolidPolygonLayer';
SolidPolygonLayer.defaultProps = defaultProps;


/***/ }),

/***/ "./src/text-layer/font-atlas-manager.js":
/*!**********************************************!*\
  !*** ./src/text-layer/font-atlas-manager.js ***!
  \**********************************************/
/*! exports provided: DEFAULT_CHAR_SET, DEFAULT_FONT_FAMILY, DEFAULT_FONT_WEIGHT, DEFAULT_FONT_SIZE, DEFAULT_BUFFER, DEFAULT_CUTOFF, DEFAULT_RADIUS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CHAR_SET", function() { return DEFAULT_CHAR_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_FONT_FAMILY", function() { return DEFAULT_FONT_FAMILY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_FONT_WEIGHT", function() { return DEFAULT_FONT_WEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_FONT_SIZE", function() { return DEFAULT_FONT_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_BUFFER", function() { return DEFAULT_BUFFER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CUTOFF", function() { return DEFAULT_CUTOFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RADIUS", function() { return DEFAULT_RADIUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FontAtlasManager; });
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luma.gl/core */ "@luma.gl/constants");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mapbox_tiny_sdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mapbox/tiny-sdf */ "../../node_modules/@mapbox/tiny-sdf/index.js");
/* harmony import */ var _mapbox_tiny_sdf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mapbox_tiny_sdf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/text-layer/utils.js");
/* harmony import */ var _lru_cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lru-cache */ "./src/text-layer/lru-cache.js");
/* global document */








function getDefaultCharacterSet() {
  const charSet = [];
  for (let i = 32; i < 128; i++) {
    charSet.push(String.fromCharCode(i));
  }
  return charSet;
}

const DEFAULT_CHAR_SET = getDefaultCharacterSet();
const DEFAULT_FONT_FAMILY = 'Monaco, monospace';
const DEFAULT_FONT_WEIGHT = 'normal';
const DEFAULT_FONT_SIZE = 64;
const DEFAULT_BUFFER = 2;
const DEFAULT_CUTOFF = 0.25;
const DEFAULT_RADIUS = 3;

const GL_TEXTURE_WRAP_S = 0x2802;
const GL_TEXTURE_WRAP_T = 0x2803;
const GL_CLAMP_TO_EDGE = 0x812f;
const MAX_CANVAS_WIDTH = 1024;

const BASELINE_SCALE = 0.9;
const HEIGHT_SCALE = 1.2;

// only preserve latest three fontAtlas
const CACHE_LIMIT = 3;

/**
 * [key]: {
 *   xOffset, // x position of last character in mapping
 *   yOffset, // y position of last character in mapping
 *   mapping, // x, y coordinate of each character in shared `fontAtlas`
 *   data, // canvas
 *   width. // canvas.width,
 *   height, // canvas.height
 * }
 *
 */
const cache = new _lru_cache__WEBPACK_IMPORTED_MODULE_3__["default"](CACHE_LIMIT);

const VALID_PROPS = [
  'fontFamily',
  'fontWeight',
  'characterSet',
  'fontSize',
  'sdf',
  'buffer',
  'cutoff',
  'radius'
];

/**
 * get all the chars not in cache
 * @param key cache key
 * @param characterSet (Array|Set)
 * @returns {Array} chars not in cache
 */
function getNewChars(key, characterSet) {
  const cachedFontAtlas = cache.get(key);
  if (!cachedFontAtlas) {
    return characterSet;
  }

  const newChars = [];
  const cachedMapping = cachedFontAtlas.mapping;
  let cachedCharSet = Object.keys(cachedMapping);
  cachedCharSet = new Set(cachedCharSet);

  let charSet = characterSet;
  if (charSet instanceof Array) {
    charSet = new Set(charSet);
  }

  charSet.forEach(char => {
    if (!cachedCharSet.has(char)) {
      newChars.push(char);
    }
  });

  return newChars;
}

function populateAlphaChannel(alphaChannel, imageData) {
  // populate distance value from tinySDF to image alpha channel
  for (let i = 0; i < alphaChannel.length; i++) {
    imageData.data[4 * i + 3] = alphaChannel[i];
  }
}

function setTextStyle(ctx, fontFamily, fontSize, fontWeight) {
  ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
  ctx.fillStyle = '#000';
  ctx.textBaseline = 'baseline';
  ctx.textAlign = 'left';
}

class FontAtlasManager {
  constructor(gl) {
    this.gl = gl;

    // font settings
    this.props = {
      fontFamily: DEFAULT_FONT_FAMILY,
      fontWeight: DEFAULT_FONT_WEIGHT,
      characterSet: DEFAULT_CHAR_SET,
      fontSize: DEFAULT_FONT_SIZE,
      buffer: DEFAULT_BUFFER,
      // sdf only props
      // https://github.com/mapbox/tiny-sdf
      sdf: false,
      cutoff: DEFAULT_CUTOFF,
      radius: DEFAULT_RADIUS
    };

    // key is used for caching generated fontAtlas
    this._key = null;
    this._texture = new _luma_gl_core__WEBPACK_IMPORTED_MODULE_0__["Texture2D"](this.gl);
  }

  finalize() {
    this._texture.delete();
  }

  get texture() {
    return this._texture;
  }

  get mapping() {
    const data = cache.get(this._key);
    return data && data.mapping;
  }

  get scale() {
    return HEIGHT_SCALE;
  }

  setProps(props = {}) {
    VALID_PROPS.forEach(prop => {
      if (prop in props) {
        this.props[prop] = props[prop];
      }
    });

    // update cache key
    const oldKey = this._key;
    this._key = this._getKey();

    const charSet = getNewChars(this._key, this.props.characterSet);
    const cachedFontAtlas = cache.get(this._key);

    // if a fontAtlas associated with the new settings is cached and
    // there are no new chars
    if (cachedFontAtlas && charSet.length === 0) {
      // update texture with cached fontAtlas
      if (this._key !== oldKey) {
        this._updateTexture(cachedFontAtlas);
      }
      return;
    }

    // update fontAtlas with new settings
    const fontAtlas = this._generateFontAtlas(this._key, charSet, cachedFontAtlas);
    this._updateTexture(fontAtlas);

    // update cache
    cache.set(this._key, fontAtlas);
  }

  _updateTexture({data: canvas, width, height}) {
    // resize texture
    if (this._texture.width !== width || this._texture.height !== height) {
      this._texture.resize({width, height});
    }

    // update image data
    this._texture.setImageData({
      data: canvas,
      width,
      height,
      parameters: {
        [GL_TEXTURE_WRAP_S]: GL_CLAMP_TO_EDGE,
        [GL_TEXTURE_WRAP_T]: GL_CLAMP_TO_EDGE,
        [_luma_gl_core__WEBPACK_IMPORTED_MODULE_0___default.a.UNPACK_FLIP_Y_WEBGL]: true
      }
    });

    // this is required step after texture data changed
    this._texture.generateMipmap();
  }

  _generateFontAtlas(key, characterSet, cachedFontAtlas) {
    const {fontFamily, fontWeight, fontSize, buffer, sdf, radius, cutoff} = this.props;
    let canvas = cachedFontAtlas && cachedFontAtlas.data;
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.width = MAX_CANVAS_WIDTH;
    }
    const ctx = canvas.getContext('2d');

    setTextStyle(ctx, fontFamily, fontSize, fontWeight);

    // 1. build mapping
    const {mapping, canvasHeight, xOffset, yOffset} = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["buildMapping"])(
      Object.assign(
        {
          getFontWidth: char => ctx.measureText(char).width,
          fontHeight: fontSize * HEIGHT_SCALE,
          buffer,
          characterSet,
          maxCanvasWidth: MAX_CANVAS_WIDTH
        },
        cachedFontAtlas && {
          mapping: cachedFontAtlas.mapping,
          xOffset: cachedFontAtlas.xOffset,
          yOffset: cachedFontAtlas.yOffset
        }
      )
    );

    // 2. update canvas
    // copy old canvas data to new canvas only when height changed
    if (canvas.height !== canvasHeight) {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      canvas.height = canvasHeight;
      ctx.putImageData(imageData, 0, 0);
    }
    setTextStyle(ctx, fontFamily, fontSize, fontWeight);

    // 3. layout characters
    if (sdf) {
      const tinySDF = new _mapbox_tiny_sdf__WEBPACK_IMPORTED_MODULE_1___default.a(fontSize, buffer, radius, cutoff, fontFamily, fontWeight);
      // used to store distance values from tinySDF
      // tinySDF.size equals `fontSize + buffer * 2`
      const imageData = ctx.getImageData(0, 0, tinySDF.size, tinySDF.size);

      for (const char of characterSet) {
        populateAlphaChannel(tinySDF.draw(char), imageData);
        ctx.putImageData(imageData, mapping[char].x - buffer, mapping[char].y - buffer);
      }
    } else {
      for (const char of characterSet) {
        ctx.fillText(char, mapping[char].x, mapping[char].y + fontSize * BASELINE_SCALE);
      }
    }

    return {
      xOffset,
      yOffset,
      mapping,
      data: canvas,
      width: canvas.width,
      height: canvas.height
    };
  }

  _getKey() {
    const {gl, fontFamily, fontWeight, fontSize, buffer, sdf, radius, cutoff} = this.props;
    if (sdf) {
      return `${gl} ${fontFamily} ${fontWeight} ${fontSize} ${buffer} ${radius} ${cutoff}`;
    }
    return `${gl} ${fontFamily} ${fontWeight} ${fontSize} ${buffer}`;
  }
}


/***/ }),

/***/ "./src/text-layer/lru-cache.js":
/*!*************************************!*\
  !*** ./src/text-layer/lru-cache.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LRUCache; });
/**
 * LRU Cache class with limit
 *
 * Update order for each get/set operation
 * Delete oldest when reach given limit
 */

class LRUCache {
  constructor(limit = 5) {
    this.limit = limit;

    this.clear();
  }

  clear() {
    this._cache = {};
    // access/update order, first item is oldest, last item is newest
    this._order = [];
  }

  get(key) {
    const value = this._cache[key];
    if (value) {
      // update order
      this._deleteOrder(key);
      this._appendOrder(key);
    }
    return value;
  }

  set(key, value) {
    if (!this._cache[key]) {
      // if reach limit, delete the oldest
      if (Object.keys(this._cache).length === this.limit) {
        this.delete(this._order[0]);
      }

      this._cache[key] = value;
      this._appendOrder(key);
    } else {
      // if found in cache, delete the old one, insert new one to the first of list
      this.delete(key);

      this._cache[key] = value;
      this._appendOrder(key);
    }
  }

  delete(key) {
    const value = this._cache[key];
    if (value) {
      this._deleteCache(key);
      this._deleteOrder(key);
    }
  }

  _deleteCache(key) {
    delete this._cache[key];
  }

  _deleteOrder(key) {
    const index = this._order.findIndex(o => o === key);
    if (index >= 0) {
      this._order.splice(index, 1);
    }
  }

  _appendOrder(key) {
    this._order.push(key);
  }
}


/***/ }),

/***/ "./src/text-layer/multi-icon-layer/multi-icon-layer-fragment.glsl.js":
/*!***************************************************************************!*\
  !*** ./src/text-layer/multi-icon-layer/multi-icon-layer-fragment.glsl.js ***!
  \***************************************************************************/
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
#define SHADER_NAME multi-icon-layer-fragment-shader

precision highp float;

uniform sampler2D iconsTexture;
uniform float buffer;
uniform bool sdf;

varying vec4 vColor;
varying vec2 vTextureCoords;
varying float vGamma;
varying vec2 uv;

const float MIN_ALPHA = 0.05;

void main(void) {
  geometry.uv = uv;

  vec4 texColor = texture2D(iconsTexture, vTextureCoords);
  
  float alpha = texColor.a;
  // if enable sdf (signed distance fields)
  if (sdf) {
    float distance = texture2D(iconsTexture, vTextureCoords).a;
    alpha = smoothstep(buffer - vGamma, buffer + vGamma, distance);
  }

  // Take the global opacity and the alpha from vColor into account for the alpha component
  float a = alpha * vColor.a;

  if (a < MIN_ALPHA) {
    discard;
  }

  gl_FragColor = vec4(vColor.rgb, a);

  DECKGL_FILTER_COLOR(gl_FragColor, geometry);
}
`);


/***/ }),

/***/ "./src/text-layer/multi-icon-layer/multi-icon-layer-vertex.glsl.js":
/*!*************************************************************************!*\
  !*** ./src/text-layer/multi-icon-layer/multi-icon-layer-vertex.glsl.js ***!
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

/* harmony default export */ __webpack_exports__["default"] = (`\
#define SHADER_NAME multi-icon-layer-vertex-shader

attribute vec2 positions;

attribute vec3 instancePositions;
attribute vec2 instancePositions64xyLow;
attribute float instanceSizes;
attribute float instanceAngles;
attribute vec4 instanceColors;
attribute vec3 instancePickingColors;
attribute vec4 instanceIconFrames;
attribute float instanceColorModes;
attribute vec2 instanceOffsets;

// the following three attributes are for the multi-icon layer
attribute vec2 instancePixelOffset;

uniform float sizeScale;
uniform float sizeMinPixels;
uniform float sizeMaxPixels;
uniform vec2 iconsTextureDim;
uniform float gamma;
uniform float opacity;
uniform bool billboard;

varying vec4 vColor;
varying vec2 vTextureCoords;
varying float vGamma;
varying vec2 uv;

vec2 rotate_by_angle(vec2 vertex, float angle) {
  float angle_radian = angle * PI / 180.0;
  float cos_angle = cos(angle_radian);
  float sin_angle = sin(angle_radian);
  mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
  return rotationMatrix * vertex;
}

void main(void) {
  geometry.worldPosition = instancePositions;
  geometry.uv = positions;
  uv = positions;

  vec2 iconSize = instanceIconFrames.zw;
 
  // project meters to pixels and clamp to limits 
  float sizePixels = clamp(
    project_size_to_pixel(instanceSizes * sizeScale),
    sizeMinPixels, sizeMaxPixels
  );

  // scale icon height to match instanceSize
  float instanceScale = iconSize.y == 0.0 ? 0.0 : sizePixels / iconSize.y;

  // scale and rotate vertex in "pixel" value and convert back to fraction in clipspace
  vec2 pixelOffset = positions / 2.0 * iconSize + instanceOffsets;

  pixelOffset = rotate_by_angle(pixelOffset, instanceAngles) * instanceScale;
  pixelOffset += instancePixelOffset;
  
  if (billboard)  {
    pixelOffset.y *= -1.0;
    gl_Position = project_position_to_clipspace(instancePositions, instancePositions64xyLow, vec3(0.0), geometry.position); 
    vec3 offset = vec3(pixelOffset, 0.0);
    DECKGL_FILTER_SIZE(offset, geometry);
    gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);

  } else {
    vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
    DECKGL_FILTER_SIZE(offset_common, geometry);
    gl_Position = project_position_to_clipspace(instancePositions, instancePositions64xyLow, offset_common, geometry.position); 
  }
  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);

  vTextureCoords = mix(
    instanceIconFrames.xy,
    instanceIconFrames.xy + iconSize,
    (positions.xy + 1.0) / 2.0
  ) / iconsTextureDim;

  vTextureCoords.y = 1.0 - vTextureCoords.y;

  vColor = vec4(instanceColors.rgb, instanceColors.a * opacity);
  DECKGL_FILTER_COLOR(vColor, geometry);
  picking_setPickingColor(instancePickingColors);

  vGamma = gamma / (sizeScale * iconSize.y);
}
`);


/***/ }),

/***/ "./src/text-layer/multi-icon-layer/multi-icon-layer.js":
/*!*************************************************************!*\
  !*** ./src/text-layer/multi-icon-layer/multi-icon-layer.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MultiIconLayer; });
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon_layer_icon_layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icon-layer/icon-layer */ "./src/icon-layer/icon-layer.js");
/* harmony import */ var _multi_icon_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multi-icon-layer-vertex.glsl */ "./src/text-layer/multi-icon-layer/multi-icon-layer-vertex.glsl.js");
/* harmony import */ var _multi_icon_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./multi-icon-layer-fragment.glsl */ "./src/text-layer/multi-icon-layer/multi-icon-layer-fragment.glsl.js");
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







// TODO expose as layer properties
const DEFAULT_GAMMA = 0.2;
const DEFAULT_BUFFER = 192.0 / 256;

const defaultProps = {
  // each paragraph can have one or multiple row(s)
  // each row can have one or multiple character(s)
  getRowSize: {type: 'accessor', value: x => x.rowSize || [0, 0]},
  // offset from the left, top position of the paragraph
  getOffsets: {type: 'accessor', value: x => x.offsets || [0, 0]},
  // [width, height] of the paragraph
  getParagraphSize: {type: 'accessor', value: x => x.size || [1, 1]},
  // 1: left, 0: middle, -1: right
  getAnchorX: {type: 'accessor', value: x => x.anchorX || 0},
  // 1: top, 0: center, -1: bottom
  getAnchorY: {type: 'accessor', value: x => x.anchorY || 0},
  getPixelOffset: {type: 'accessor', value: [0, 0]},

  // object with the same pickingIndex will be picked when any one of them is being picked
  getPickingIndex: {type: 'accessor', value: x => x.objectIndex}
};

class MultiIconLayer extends _icon_layer_icon_layer__WEBPACK_IMPORTED_MODULE_1__["default"] {
  getShaders() {
    return Object.assign({}, super.getShaders(), {
      vs: _multi_icon_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_2__["default"],
      fs: _multi_icon_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_3__["default"]
    });
  }

  initializeState() {
    super.initializeState();

    const attributeManager = this.getAttributeManager();
    attributeManager.addInstanced({
      instancePixelOffset: {
        size: 2,
        transition: true,
        accessor: 'getPixelOffset'
      }
    });
  }

  updateState(updateParams) {
    super.updateState(updateParams);
    const {changeFlags} = updateParams;

    if (
      changeFlags.updateTriggersChanged &&
      (changeFlags.updateTriggersChanged.getAnchorX || changeFlags.updateTriggersChanged.getAnchorY)
    ) {
      this.getAttributeManager().invalidate('instanceOffsets');
    }
  }

  draw({uniforms}) {
    const {sdf} = this.props;
    super.draw({
      uniforms: Object.assign({}, uniforms, {
        // Refer the following doc about gamma and buffer
        // https://blog.mapbox.com/drawing-text-with-signed-distance-fields-in-mapbox-gl-b0933af6f817
        buffer: DEFAULT_BUFFER,
        gamma: DEFAULT_GAMMA,
        sdf: Boolean(sdf)
      })
    });
  }

  calculateInstanceOffsets(attribute, {startRow, endRow}) {
    const {
      data,
      iconMapping,
      getIcon,
      getAnchorX,
      getAnchorY,
      getParagraphSize,
      getRowSize,
      getOffsets
    } = this.props;
    const {value, size} = attribute;
    let i = startRow * size;
    const {iterable} = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["createIterable"])(data, startRow, endRow);

    for (const object of iterable) {
      const icon = getIcon(object);
      const rect = iconMapping[icon] || {};
      const [width, height] = getParagraphSize(object);
      const [rowWidth] = getRowSize(object);
      const [offsetX, offsetY] = getOffsets(object);
      const anchorX = getAnchorX(object);
      const anchorY = getAnchorY(object);

      // For a multi-line object, offset in x-direction needs consider
      // the row offset in the paragraph and the object offset in the row
      const rowOffset = ((1 - anchorX) * (width - rowWidth)) / 2;
      value[i++] = ((anchorX - 1) * width) / 2 + rowOffset + rect.width / 2 + offsetX || 0;
      value[i++] = ((anchorY - 1) * height) / 2 + rect.height / 2 + offsetY || 0;
    }
  }

  calculateInstancePickingColors(attribute, {startRow, endRow}) {
    const {data, getPickingIndex} = this.props;
    const {value, size} = attribute;
    let i = startRow * size;
    const pickingColor = [];
    const {iterable} = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["createIterable"])(data, startRow, endRow);

    for (const point of iterable) {
      const index = getPickingIndex(point);
      this.encodePickingColor(index, pickingColor);

      value[i++] = pickingColor[0];
      value[i++] = pickingColor[1];
      value[i++] = pickingColor[2];
    }
  }
}

MultiIconLayer.layerName = 'MultiIconLayer';
MultiIconLayer.defaultProps = defaultProps;


/***/ }),

/***/ "./src/text-layer/text-layer.js":
/*!**************************************!*\
  !*** ./src/text-layer/text-layer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextLayer; });
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _multi_icon_layer_multi_icon_layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multi-icon-layer/multi-icon-layer */ "./src/text-layer/multi-icon-layer/multi-icon-layer.js");
/* harmony import */ var _font_atlas_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./font-atlas-manager */ "./src/text-layer/font-atlas-manager.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/text-layer/utils.js");
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







const DEFAULT_FONT_SETTINGS = {
  fontSize: _font_atlas_manager__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_FONT_SIZE"],
  buffer: _font_atlas_manager__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_BUFFER"],
  sdf: false,
  radius: _font_atlas_manager__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_RADIUS"],
  cutoff: _font_atlas_manager__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CUTOFF"]
};

const TEXT_ANCHOR = {
  start: 1,
  middle: 0,
  end: -1
};

const ALIGNMENT_BASELINE = {
  top: 1,
  center: 0,
  bottom: -1
};

const DEFAULT_COLOR = [0, 0, 0, 255];

const DEFAULT_LINE_HEIGHT = 1.0;

const FONT_SETTINGS_PROPS = ['fontSize', 'buffer', 'sdf', 'radius', 'cutoff'];

const defaultProps = {
  billboard: true,
  sizeScale: 1,
  sizeUnits: 'pixels',
  sizeMinPixels: 0,
  sizeMaxPixels: Number.MAX_SAFE_INTEGER,

  characterSet: _font_atlas_manager__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CHAR_SET"],
  fontFamily: _font_atlas_manager__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_FONT_FAMILY"],
  fontWeight: _font_atlas_manager__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_FONT_WEIGHT"],
  lineHeight: DEFAULT_LINE_HEIGHT,
  fontSettings: {},

  getText: {type: 'accessor', value: x => x.text},
  getPosition: {type: 'accessor', value: x => x.position},
  getColor: {type: 'accessor', value: DEFAULT_COLOR},
  getSize: {type: 'accessor', value: 32},
  getAngle: {type: 'accessor', value: 0},
  getTextAnchor: {type: 'accessor', value: 'middle'},
  getAlignmentBaseline: {type: 'accessor', value: 'center'},
  getPixelOffset: {type: 'accessor', value: [0, 0]}
};

class TextLayer extends _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["CompositeLayer"] {
  initializeState() {
    this.state = {
      fontAtlasManager: new _font_atlas_manager__WEBPACK_IMPORTED_MODULE_2__["default"](this.context.gl)
    };
  }

  updateState({props, oldProps, changeFlags}) {
    const fontChanged = this.fontChanged(oldProps, props);
    if (fontChanged) {
      this.updateFontAtlas({oldProps, props});
    }

    const textChanged =
      changeFlags.dataChanged ||
      fontChanged ||
      props.lineHeight !== oldProps.lineHeight ||
      (changeFlags.updateTriggersChanged &&
        (changeFlags.updateTriggersChanged.all || changeFlags.updateTriggersChanged.getText));

    if (textChanged && Array.isArray(changeFlags.dataChanged)) {
      const data = this.state.data.slice();
      const dataDiff = changeFlags.dataChanged.map(dataRange =>
        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["replaceInRange"])({
          data,
          getIndex: p => p.__source.index,
          dataRange,
          replace: this.transformStringToLetters(dataRange)
        })
      );
      this.setState({data, dataDiff});
    } else if (textChanged) {
      this.setState({
        data: this.transformStringToLetters(),
        dataDiff: null
      });
    }
  }

  finalizeState() {
    super.finalizeState();
    // Release resources held by the font atlas manager
    this.state.fontAtlasManager.finalize();
  }

  updateFontAtlas({oldProps, props}) {
    const {characterSet, fontSettings, fontFamily, fontWeight} = props;

    // generate test characterSet
    const fontAtlasManager = this.state.fontAtlasManager;
    fontAtlasManager.setProps(
      Object.assign({}, DEFAULT_FONT_SETTINGS, fontSettings, {
        characterSet,
        fontFamily,
        fontWeight
      })
    );

    const {scale, texture, mapping} = fontAtlasManager;

    this.setState({
      scale,
      iconAtlas: texture,
      iconMapping: mapping
    });

    this.setNeedsRedraw(true);
  }

  fontChanged(oldProps, props) {
    if (
      oldProps.fontFamily !== props.fontFamily ||
      oldProps.characterSet !== props.characterSet ||
      oldProps.fontWeight !== props.fontWeight
    ) {
      return true;
    }

    if (oldProps.fontSettings === props.fontSettings) {
      return false;
    }

    const oldFontSettings = oldProps.fontSettings || {};
    const fontSettings = props.fontSettings || {};

    return FONT_SETTINGS_PROPS.some(prop => oldFontSettings[prop] !== fontSettings[prop]);
  }

  getPickingInfo({info}) {
    // because `TextLayer` assign the same pickingInfoIndex for one text label,
    // here info.index refers the index of text label in props.data
    return Object.assign(info, {
      // override object with original data
      object: info.index >= 0 ? this.props.data[info.index] : null
    });
  }

  /* eslint-disable no-loop-func */
  transformStringToLetters(dataRange = {}) {
    const {data, lineHeight, getText} = this.props;
    const {iconMapping} = this.state;
    const {startRow, endRow} = dataRange;
    const {iterable, objectInfo} = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["createIterable"])(data, startRow, endRow);

    const transformedData = [];

    for (const object of iterable) {
      const transformCharacter = transformed => {
        return this.getSubLayerRow(transformed, object, objectInfo.index);
      };

      objectInfo.index++;
      const text = getText(object, objectInfo);
      if (text) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_4__["transformParagraph"])(text, lineHeight, iconMapping, transformCharacter, transformedData);
      }
    }

    return transformedData;
  }

  getAnchorXFromTextAnchor(getTextAnchor) {
    if (typeof getTextAnchor === 'function') {
      getTextAnchor = this.getSubLayerAccessor(getTextAnchor);
      return x => TEXT_ANCHOR[getTextAnchor(x)] || 0;
    }
    return () => TEXT_ANCHOR[getTextAnchor] || 0;
  }

  getAnchorYFromAlignmentBaseline(getAlignmentBaseline) {
    if (typeof getAlignmentBaseline === 'function') {
      getAlignmentBaseline = this.getSubLayerAccessor(getAlignmentBaseline);
      return x => TEXT_ANCHOR[getAlignmentBaseline(x)] || 0;
    }
    return () => ALIGNMENT_BASELINE[getAlignmentBaseline] || 0;
  }

  renderLayers() {
    const {data, dataDiff, scale, iconAtlas, iconMapping} = this.state;

    const {
      getPosition,
      getColor,
      getSize,
      getAngle,
      getTextAnchor,
      getAlignmentBaseline,
      getPixelOffset,
      billboard,
      sdf,
      sizeScale,
      sizeUnits,
      sizeMinPixels,
      sizeMaxPixels,
      transitions,
      updateTriggers
    } = this.props;

    const SubLayerClass = this.getSubLayerClass('characters', _multi_icon_layer_multi_icon_layer__WEBPACK_IMPORTED_MODULE_1__["default"]);

    return new SubLayerClass(
      {
        sdf,
        iconAtlas,
        iconMapping,

        _dataDiff: dataDiff && (() => dataDiff),

        getPosition: this.getSubLayerAccessor(getPosition),
        getColor: this.getSubLayerAccessor(getColor),
        getSize: this.getSubLayerAccessor(getSize),
        getAngle: this.getSubLayerAccessor(getAngle),
        getAnchorX: this.getAnchorXFromTextAnchor(getTextAnchor),
        getAnchorY: this.getAnchorYFromAlignmentBaseline(getAlignmentBaseline),
        getPixelOffset: this.getSubLayerAccessor(getPixelOffset),
        getPickingIndex: obj => obj.__source.index,
        billboard,
        sizeScale: sizeScale * scale,
        sizeUnits,
        sizeMinPixels: sizeMinPixels * scale,
        sizeMaxPixels: sizeMaxPixels * scale,

        transitions: transitions && {
          getPosition: transitions.getPosition,
          getAngle: transitions.getAngle,
          getColor: transitions.getColor,
          getSize: transitions.getSize,
          getPixelOffset: updateTriggers.getPixelOffset
        }
      },
      this.getSubLayerProps({
        id: 'characters',
        updateTriggers: {
          getPosition: updateTriggers.getPosition,
          getAngle: updateTriggers.getAngle,
          getColor: updateTriggers.getColor,
          getSize: updateTriggers.getSize,
          getPixelOffset: updateTriggers.getPixelOffset,
          getAnchorX: updateTriggers.getTextAnchor,
          getAnchorY: updateTriggers.getAlignmentBaseline
        }
      }),
      {
        data,
        getIcon: d => d.text,
        getRowSize: d => d.rowSize,
        getOffsets: d => [d.offsetLeft, d.offsetTop],
        getParagraphSize: d => d.size
      }
    );
  }
}

TextLayer.layerName = 'TextLayer';
TextLayer.defaultProps = defaultProps;


/***/ }),

/***/ "./src/text-layer/utils.js":
/*!*********************************!*\
  !*** ./src/text-layer/utils.js ***!
  \*********************************/
/*! exports provided: nextPowOfTwo, buildMapping, transformRow, transformParagraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextPowOfTwo", function() { return nextPowOfTwo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildMapping", function() { return buildMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformRow", function() { return transformRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformParagraph", function() { return transformParagraph; });
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__);
// TODO merge with icon-layer/icon-manager


const MISSING_CHAR_WIDTH = 32;

function nextPowOfTwo(number) {
  return Math.pow(2, Math.ceil(Math.log2(number)));
}

/**
 * Generate character mapping table or update from an existing mapping table
 * @param characterSet {Array|Set} new characters
 * @param getFontWidth {Function} function to get width of each character
 * @param fontHeight {Number} height of font
 * @param buffer {Number} buffer surround each character
 * @param maxCanvasWidth {Number} max width of font atlas
 * @param mapping {Object} old mapping table
 * @param xOffset {Number} x position of last character in old mapping table
 * @param yOffset {Number} y position of last character in old mapping table
 * @returns {{
 *   mapping: Object,
 *   xOffset: Number, x position of last character
 *   yOffset: Number, y position of last character in old mapping table
 *   canvasHeight: Number, height of the font atlas canvas, power of 2
 *  }}
 */
function buildMapping({
  characterSet,
  getFontWidth,
  fontHeight,
  buffer,
  maxCanvasWidth,
  mapping = {},
  xOffset = 0,
  yOffset = 0
}) {
  let row = 0;
  // continue from x position of last character in the old mapping
  let x = xOffset;
  Array.from(characterSet).forEach((char, i) => {
    if (!mapping[char]) {
      // measure texts
      // TODO - use Advanced text metrics when they are adopted:
      // https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics
      const width = getFontWidth(char, i);

      if (x + width + buffer * 2 > maxCanvasWidth) {
        x = 0;
        row++;
      }
      mapping[char] = {
        x: x + buffer,
        y: yOffset + row * (fontHeight + buffer * 2) + buffer,
        width,
        height: fontHeight,
        mask: true
      };
      x += width + buffer * 2;
    }
  });

  const rowHeight = fontHeight + buffer * 2;

  return {
    mapping,
    xOffset: x,
    yOffset: yOffset + row * rowHeight,
    canvasHeight: nextPowOfTwo(yOffset + (row + 1) * rowHeight)
  };
}

function transformRow(row, iconMapping, lineHeight) {
  let offsetLeft = 0;
  let rowHeight = 0;

  let characters = Array.from(row);
  characters = characters.map((character, i) => {
    const datum = {
      text: character,
      offsetLeft
    };

    const frame = iconMapping[character];

    if (frame) {
      offsetLeft += frame.width;
      if (!rowHeight) {
        // frame.height should be a constant
        rowHeight = frame.height * lineHeight;
      }
    } else {
      _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["log"].warn(`Missing character: ${character}`)();
      offsetLeft += MISSING_CHAR_WIDTH;
    }

    return datum;
  });

  return {characters, rowWidth: offsetLeft, rowHeight};
}

/**
 * Transform a text paragraph to an array of characters, each character contains
 * @param paragraph {String}
 * @param lineHeight {Number} css line-height
 * @param iconMapping {Object} character mapping table for retrieving a character from font atlas
 * @param transformCharacter {Function} callback to transform a single character
 * @param transformedData {Array} output transformed data array, each datum contains
 *   - text: character
 *   - index: character index in the paragraph
 *   - offsetLeft: x offset in the row,
 *   - offsetTop: y offset in the paragraph
 *   - size: [width, height] size of the paragraph
 *   - rowSize: [rowWidth, rowHeight] size of the row
 *   - len: length of the paragraph
 */
function transformParagraph(
  paragraph,
  lineHeight,
  iconMapping,
  transformCharacter,
  transformedData
) {
  const rows = paragraph.split('\n');

  // width and height of the paragraph
  const size = [0, 0];
  let offsetTop = 0;

  rows.forEach(row => {
    const {characters, rowWidth, rowHeight} = transformRow(row, iconMapping, lineHeight);
    const rowSize = [rowWidth, rowHeight];

    characters.forEach(datum => {
      datum.offsetTop = offsetTop;
      datum.size = size;
      datum.rowSize = rowSize;

      transformedData.push(transformCharacter(datum));
    });

    offsetTop = offsetTop + rowHeight;
    size[0] = Math.max(size[0], rowWidth);
  });

  // last row
  size[1] = offsetTop;
}


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: replaceInRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceInRange", function() { return replaceInRange; });
// Assume data array is sorted by <accessor>
// Replaces the specified range with a new subarray
// Mutates the data array
// Returns {startRow, endRow} of the inserted items
function replaceInRange({data, getIndex, dataRange, replace}) {
  const {startRow = 0, endRow = Infinity} = dataRange;
  const count = data.length;
  let replaceStart = count;
  let replaceEnd = count;
  for (let i = 0; i < count; i++) {
    const row = getIndex(data[i]);
    if (replaceStart > i && row >= startRow) {
      replaceStart = i;
    }
    if (row >= endRow) {
      replaceEnd = i;
      break;
    }
  }
  let index = replaceStart;
  const dataLengthChanged = replaceEnd - replaceStart !== replace.length;
  // Save the items after replaceEnd before we overwrite data
  const endChunk = dataLengthChanged && data.slice(replaceEnd);
  // Insert new items
  for (let i = 0; i < replace.length; i++) {
    data[index++] = replace[i];
  }
  if (dataLengthChanged) {
    // Append items after replaceEnd
    for (let i = 0; i < endChunk.length; i++) {
      data[index++] = endChunk[i];
    }
    // Trim additional items
    data.length = index;
  }

  return {
    startRow: replaceStart,
    endRow: replaceStart + replace.length
  };
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