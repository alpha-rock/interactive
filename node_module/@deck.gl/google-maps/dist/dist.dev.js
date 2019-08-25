(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("deck"));
	else if(typeof define === 'function' && define.amd)
		define(["deck"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("deck")) : factory(root["deck"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__deck_gl_core__) {
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

/* WEBPACK VAR INJECTION */(function(global) {const GoogleMapsUtils = __webpack_require__(/*! ./src */ "./src/index.js");

/* global window, global */
const _global = typeof window === 'undefined' ? global : window;
const deck = _global.deck || {};

// Check if peer dependencies are included
if (!deck.Layer) {
  throw new Error('@deck.gl/core is not found');
}

module.exports = Object.assign(deck, GoogleMapsUtils);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/google-maps-overlay.js":
/*!************************************!*\
  !*** ./src/google-maps-overlay.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GoogleMapsOverlay; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* global google */


const HIDE_ALL_LAYERS = () => false;

class GoogleMapsOverlay {
  constructor(props) {
    this.props = {};

    this._map = null;

    const overlay = new google.maps.OverlayView();
    overlay.onAdd = this._onAdd.bind(this);
    overlay.onRemove = this._onRemove.bind(this);
    overlay.draw = this._draw.bind(this);
    this._overlay = overlay;

    this.setProps(props);
  }

  /* Public API */

  setMap(map) {
    if (map === this._map) {
      return;
    }
    if (this._map) {
      this._overlay.setMap(null);
      this._map = null;
    }
    if (map) {
      this._map = map;
      this._overlay.setMap(map);
    }
  }

  setProps(props) {
    Object.assign(this.props, props);
    if (this._deck) {
      this._deck.setProps(this.props);
    }
  }

  pickObject(params) {
    return this._deck && this._deck.pickObject(params);
  }

  pickMultipleObjects(params) {
    return this._deck && this._deck.pickMultipleObjects(params);
  }

  pickObjects(params) {
    return this._deck && this._deck.pickObjects(params);
  }

  finalize() {
    this.setMap(null);
    if (this._deck) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["destroyDeckInstance"])(this._deck);
      this._deck = null;
    }
  }

  /* Private API */
  _onAdd() {
    this._deck = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createDeckInstance"])(this._map, this._overlay, this._deck);
    this._deck.setProps(this.props);
  }

  _onRemove() {
    // Clear deck canvas
    this._deck.setProps({layerFilter: HIDE_ALL_LAYERS});
  }

  _draw() {
    const deck = this._deck;
    const {width, height, left, top, zoom, pitch, latitude, longitude} = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getViewState"])(
      this._map,
      this._overlay
    );

    const canSyncWithGoogleMaps = zoom >= 0 && pitch === 0;

    deck.canvas.style.left = `${left}px`;
    deck.canvas.style.top = `${top}px`;

    deck.setProps({
      width,
      height,
      viewState: {latitude, longitude, zoom},
      // deck.gl cannot sync with the base map with zoom < 0 and/or tilt
      layerFilter: canSyncWithGoogleMaps ? this.props.layerFilter : HIDE_ALL_LAYERS
    });
    // Deck is initialized
    deck.redraw();
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: GoogleMapsOverlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _google_maps_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./google-maps-overlay */ "./src/google-maps-overlay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsOverlay", function() { return _google_maps_overlay__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: createDeckInstance, destroyDeckInstance, getViewState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDeckInstance", function() { return createDeckInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyDeckInstance", function() { return destroyDeckInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getViewState", function() { return getViewState; });
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__);
/* global document, google */


/**
 * Get a new deck instance
 * @param map (google.maps.Map) - The parent Map instance
 * @param overlay (google.maps.OverlayView) - A maps Overlay instance
 * @param [deck] (Deck) - a previously created instances
 */
function createDeckInstance(map, overlay, deck) {
  if (deck) {
    if (deck.props.userData._googleMap === map) {
      return deck;
    }
    // deck instance was created for a different map
    destroyDeckInstance(deck);
  }

  const eventListeners = {
    click: null,
    mousemove: null,
    mouseout: null
  };

  deck = new _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["Deck"]({
    canvas: createDeckCanvas(overlay),
    initialViewState: {
      longitude: 0,
      latitude: 0,
      zoom: 1
    },
    controller: false,
    userData: {
      _googleMap: map,
      _eventListeners: eventListeners
    }
  });

  // Register event listeners
  for (const eventType in eventListeners) {
    eventListeners[eventType] = map.addListener(eventType, evt =>
      handleMouseEvent(deck, eventType, evt)
    );
  }

  return deck;
}

function createDeckCanvas(overlay) {
  const container = overlay.getPanes().overlayLayer;
  const deckCanvas = document.createElement('canvas');
  Object.assign(deckCanvas.style, {
    // map container position is always non-static
    position: 'absolute'
  });

  container.appendChild(deckCanvas);
  return deckCanvas;
}

/**
 * Safely remove a deck instance
 * @param deck (Deck) - a previously created instances
 */
function destroyDeckInstance(deck) {
  const {_eventListeners: eventListeners} = deck.props.userData;

  // Unregister event listeners
  for (const eventType in eventListeners) {
    eventListeners[eventType].remove();
  }

  deck.finalize();

  // Remove canvas
  deck.canvas.parentNode.removeChild(deck.canvas);
}

/**
 * Get the current view state
 * @param map (google.maps.Map) - The parent Map instance
 * @param overlay (google.maps.OverlayView) - A maps Overlay instance
 */
function getViewState(map, overlay) {
  // The map fills the container div unless it's in fullscreen mode
  // at which point the first child of the container is promoted
  const container = map.getDiv().firstChild;
  const width = container.offsetWidth;
  const height = container.offsetHeight;

  // Canvas position relative to draggable map's container depends on
  // overlayView's projection, not the map's. Have to use the center of the
  // map for this, not the top left, for the same reason as above.
  const projection = overlay.getProjection();

  const bounds = map.getBounds();
  const ne = bounds.getNorthEast();
  const sw = bounds.getSouthWest();
  const topRight = projection.fromLatLngToDivPixel(ne);
  const bottomLeft = projection.fromLatLngToDivPixel(sw);

  // google maps places overlays in a container anchored at the map center.
  // the container CSS is manipulated during dragging.
  // We need to update left/top of the deck canvas to match the base map.
  const nwContainerPx = new google.maps.Point(0, 0);
  const nw = projection.fromContainerPixelToLatLng(nwContainerPx);
  const nwDivPx = projection.fromLatLngToDivPixel(nw);

  // Compute fractional zoom.
  const scale = (topRight.x - bottomLeft.x) / width;
  const zoom = Math.log2(scale) + map.getZoom() - 1;

  // Compute fractional center.
  const centerPx = new google.maps.Point(width / 2, height / 2);
  const centerContainer = projection.fromContainerPixelToLatLng(centerPx);
  const latitude = centerContainer.lat();
  const longitude = centerContainer.lng();

  return {
    width,
    height,
    left: nwDivPx.x,
    top: nwDivPx.y,
    zoom,
    pitch: map.getTilt(),
    latitude,
    longitude
  };
}

// Triggers picking on a mouse event
function handleMouseEvent(deck, type, event) {
  let callback;
  switch (type) {
    case 'click':
      // Hack: because we do not listen to pointer down, perform picking now
      deck._lastPointerDownInfo = deck.pickObject({
        x: event.pixel.x,
        y: event.pixel.y
      });
      callback = deck._onEvent;
      break;

    case 'mousemove':
      type = 'pointermove';
      callback = deck._onPointerMove;
      break;

    case 'mouseout':
      type = 'pointerleave';
      callback = deck._onPointerMove;
      break;

    default:
      return;
  }

  callback({
    type,
    offsetCenter: event.pixel,
    srcEvent: event
  });
}


/***/ }),

/***/ "@deck.gl/core":
/*!***********************!*\
  !*** external "deck" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__deck_gl_core__;

/***/ })

/******/ });
});