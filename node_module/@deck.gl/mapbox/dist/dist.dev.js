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

/* WEBPACK VAR INJECTION */(function(global) {const MapboxUtils = __webpack_require__(/*! ./src */ "./src/index.js");

/* global window, global */
const _global = typeof window === 'undefined' ? global : window;
const deck = _global.deck || {};

// Check if peer dependencies are included
if (!deck.Layer) {
  throw new Error('@deck.gl/core is not found');
}

module.exports = Object.assign(deck, MapboxUtils);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/deck-utils.js":
/*!***************************!*\
  !*** ./src/deck-utils.js ***!
  \***************************/
/*! exports provided: getDeckInstance, addLayer, removeLayer, updateLayer, drawLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDeckInstance", function() { return getDeckInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLayer", function() { return addLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLayer", function() { return removeLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLayer", function() { return updateLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawLayer", function() { return drawLayer; });
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deck.gl/core */ "@deck.gl/core");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__);


function getDeckInstance({map, gl, deck}) {
  // Only create one deck instance per context
  if (map.__deck) {
    return map.__deck;
  }

  const customRender = deck && deck.props._customRender;

  const deckProps = {
    useDevicePixels: true,
    _customRender: () => {
      map.triggerRepaint();
      if (customRender) {
        // customRender may be subscribed by DeckGL React component to update child props
        // make sure it is still called
        customRender();
      }
    },
    // TODO: import these defaults from a single source of truth
    parameters: {
      depthMask: true,
      depthTest: true,
      blendFunc: [gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA],
      blendEquation: gl.FUNC_ADD
    },
    userData: {
      isExternal: false,
      mapboxLayers: new Set()
    }
  };

  if (deck) {
    deck.setProps(deckProps);
    deck.props.userData.isExternal = true;
  } else {
    // Using external gl context - do not set css size
    Object.assign(deckProps, {
      gl,
      width: false,
      height: false,
      viewState: getViewState(map)
    });
    deck = new _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["Deck"](deckProps);

    // If deck is externally provided (React use case), we use deck's viewState to
    // drive the map.
    // Otherwise (pure JS use case), we use the map's viewState to drive deck.
    map.on('move', () => onMapMove(deck, map));
    map.on('remove', () => {
      deck.finalize();
      map.__deck = null;
    });
  }
  map.__deck = deck;
  map.on('render', () => afterRender(deck, map));

  return deck;
}

function addLayer(deck, layer) {
  deck.props.userData.mapboxLayers.add(layer);
  updateLayers(deck);
}

function removeLayer(deck, layer) {
  deck.props.userData.mapboxLayers.delete(layer);
  updateLayers(deck);
}

function updateLayer(deck, layer) {
  updateLayers(deck);
}

function drawLayer(deck, map, layer) {
  let {currentViewport} = deck.props.userData;
  if (!currentViewport) {
    // This is the first layer drawn in this render cycle.
    // Generate viewport from the current map state.
    currentViewport = getViewport(deck, map, true);
    deck.props.userData.currentViewport = currentViewport;
  }

  deck._drawLayers('mapbox-repaint', {
    viewports: [currentViewport],
    // TODO - accept layerFilter in drawLayers' renderOptions
    layers: getLayers(deck, deckLayer => shouldDrawLayer(layer.id, deckLayer)),
    clearCanvas: false
  });
}

function getViewState(map) {
  const {lng, lat} = map.getCenter();
  return {
    longitude: lng,
    latitude: lat,
    zoom: map.getZoom(),
    bearing: map.getBearing(),
    pitch: map.getPitch()
  };
}

function getViewport(deck, map, useMapboxProjection = true) {
  return new _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["WebMercatorViewport"](
    Object.assign(
      {
        x: 0,
        y: 0,
        width: deck.width,
        height: deck.height
      },
      getViewState(map),
      // https://github.com/mapbox/mapbox-gl-js/issues/7573
      useMapboxProjection
        ? {
            // match mapbox's projection matrix
            nearZMultiplier: deck.height ? 1 / deck.height : 1,
            farZMultiplier: 1
          }
        : {
            // use deck.gl's projection matrix
            nearZMultiplier: 0.1,
            farZMultiplier: 10
          }
    )
  );
}

function afterRender(deck, map) {
  const {mapboxLayers, isExternal} = deck.props.userData;

  if (isExternal) {
    // Draw non-Mapbox layers
    const mapboxLayerIds = Array.from(mapboxLayers, layer => layer.id);
    const layers = getLayers(deck, deckLayer => {
      for (const id of mapboxLayerIds) {
        if (shouldDrawLayer(id, deckLayer)) {
          return false;
        }
      }
      return true;
    });
    if (layers.length > 0) {
      deck._drawLayers('mapbox-repaint', {
        viewports: [getViewport(deck, map, false)],
        layers,
        clearCanvas: false
      });
    }
  }

  // End of render cycle, clear generated viewport
  deck.props.userData.currentViewport = null;
}

function onMapMove(deck, map) {
  deck.setProps({
    viewState: getViewState(map)
  });
  // Camera changed, will trigger a map repaint right after this
  // Clear any change flag triggered by setting viewState so that deck does not request
  // a second repaint
  deck.needsRedraw({clearRedrawFlags: true});
}

function getLayers(deck, layerFilter) {
  const layers = deck.layerManager.getLayers();
  return layers.filter(layerFilter);
}

function shouldDrawLayer(id, layer) {
  let layerInstance = layer;
  while (layerInstance) {
    if (layerInstance.id === id) {
      return true;
    }
    layerInstance = layerInstance.parent;
  }
  return false;
}

function updateLayers(deck) {
  if (deck.props.userData.isExternal) {
    return;
  }

  const layers = [];
  deck.props.userData.mapboxLayers.forEach(deckLayer => {
    const LayerType = deckLayer.props.type;
    const layer = new LayerType(deckLayer.props);
    layers.push(layer);
  });
  deck.setProps({layers});
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: MapboxLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mapbox_layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapbox-layer */ "./src/mapbox-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapboxLayer", function() { return _mapbox_layer__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/mapbox-layer.js":
/*!*****************************!*\
  !*** ./src/mapbox-layer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MapboxLayer; });
/* harmony import */ var _deck_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deck-utils */ "./src/deck-utils.js");


class MapboxLayer {
  /* eslint-disable no-this-before-super */
  constructor(props) {
    if (!props.id) {
      throw new Error('Layer must have an unique id');
    }

    this.id = props.id;
    this.type = 'custom';
    this.renderingMode = props.renderingMode || '3d';
    this.map = null;
    this.deck = null;
    this.props = props;
  }

  /* Mapbox custom layer methods */

  onAdd(map, gl) {
    this.map = map;
    this.deck = Object(_deck_utils__WEBPACK_IMPORTED_MODULE_0__["getDeckInstance"])({map, gl, deck: this.props.deck});
    Object(_deck_utils__WEBPACK_IMPORTED_MODULE_0__["addLayer"])(this.deck, this);
  }

  onRemove() {
    Object(_deck_utils__WEBPACK_IMPORTED_MODULE_0__["removeLayer"])(this.deck, this);
  }

  setProps(props) {
    // id cannot be changed
    Object.assign(this.props, props, {id: this.id});
    // safe guard in case setProps is called before onAdd
    if (this.deck) {
      Object(_deck_utils__WEBPACK_IMPORTED_MODULE_0__["updateLayer"])(this.deck, this);
    }
  }

  render(gl, matrix) {
    Object(_deck_utils__WEBPACK_IMPORTED_MODULE_0__["drawLayer"])(this.deck, this.map, this);
  }
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