"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDeckInstance = createDeckInstance;
exports.destroyDeckInstance = destroyDeckInstance;
exports.getViewState = getViewState;

var _core = require("@deck.gl/core");

function createDeckInstance(map, overlay, deck) {
  if (deck) {
    if (deck.props.userData._googleMap === map) {
      return deck;
    }

    destroyDeckInstance(deck);
  }

  var eventListeners = {
    click: null,
    mousemove: null,
    mouseout: null
  };
  deck = new _core.Deck({
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

  var _loop = function _loop(eventType) {
    eventListeners[eventType] = map.addListener(eventType, function (evt) {
      return handleMouseEvent(deck, eventType, evt);
    });
  };

  for (var eventType in eventListeners) {
    _loop(eventType);
  }

  return deck;
}

function createDeckCanvas(overlay) {
  var container = overlay.getPanes().overlayLayer;
  var deckCanvas = document.createElement('canvas');
  Object.assign(deckCanvas.style, {
    position: 'absolute'
  });
  container.appendChild(deckCanvas);
  return deckCanvas;
}

function destroyDeckInstance(deck) {
  var eventListeners = deck.props.userData._eventListeners;

  for (var eventType in eventListeners) {
    eventListeners[eventType].remove();
  }

  deck.finalize();
  deck.canvas.parentNode.removeChild(deck.canvas);
}

function getViewState(map, overlay) {
  var container = map.getDiv().firstChild;
  var width = container.offsetWidth;
  var height = container.offsetHeight;
  var projection = overlay.getProjection();
  var bounds = map.getBounds();
  var ne = bounds.getNorthEast();
  var sw = bounds.getSouthWest();
  var topRight = projection.fromLatLngToDivPixel(ne);
  var bottomLeft = projection.fromLatLngToDivPixel(sw);
  var nwContainerPx = new google.maps.Point(0, 0);
  var nw = projection.fromContainerPixelToLatLng(nwContainerPx);
  var nwDivPx = projection.fromLatLngToDivPixel(nw);
  var scale = (topRight.x - bottomLeft.x) / width;
  var zoom = Math.log2(scale) + map.getZoom() - 1;
  var centerPx = new google.maps.Point(width / 2, height / 2);
  var centerContainer = projection.fromContainerPixelToLatLng(centerPx);
  var latitude = centerContainer.lat();
  var longitude = centerContainer.lng();
  return {
    width: width,
    height: height,
    left: nwDivPx.x,
    top: nwDivPx.y,
    zoom: zoom,
    pitch: map.getTilt(),
    latitude: latitude,
    longitude: longitude
  };
}

function handleMouseEvent(deck, type, event) {
  var callback;

  switch (type) {
    case 'click':
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
    type: type,
    offsetCenter: event.pixel,
    srcEvent: event
  });
}
//# sourceMappingURL=utils.js.map