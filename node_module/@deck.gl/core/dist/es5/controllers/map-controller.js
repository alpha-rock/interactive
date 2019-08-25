"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testExports = exports.default = exports.MAPBOX_LIMITS = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _math = require("math.gl");

var _controller = _interopRequireDefault(require("./controller"));

var _viewState = _interopRequireDefault(require("./view-state"));

var _viewportMercatorProject = _interopRequireWildcard(require("viewport-mercator-project"));

var _assert = _interopRequireDefault(require("../utils/assert"));

var _linearInterpolator = _interopRequireDefault(require("../transitions/linear-interpolator"));

var _transitionManager = require("./transition-manager");

var PITCH_MOUSE_THRESHOLD = 5;
var PITCH_ACCEL = 1.2;
var LINEAR_TRANSITION_PROPS = {
  transitionDuration: 300,
  transitionEasing: function transitionEasing(t) {
    return t;
  },
  transitionInterpolator: new _linearInterpolator.default(),
  transitionInterruption: _transitionManager.TRANSITION_EVENTS.BREAK
};
var NO_TRANSITION_PROPS = {
  transitionDuration: 0
};
var MAPBOX_LIMITS = {
  minZoom: 0,
  maxZoom: 20,
  minPitch: 0,
  maxPitch: 60
};
exports.MAPBOX_LIMITS = MAPBOX_LIMITS;
var DEFAULT_STATE = {
  pitch: 0,
  bearing: 0,
  altitude: 1.5
};

var MapState = function (_ViewState) {
  (0, _inherits2.default)(MapState, _ViewState);

  function MapState() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        width = _ref.width,
        height = _ref.height,
        latitude = _ref.latitude,
        longitude = _ref.longitude,
        zoom = _ref.zoom,
        _ref$bearing = _ref.bearing,
        bearing = _ref$bearing === void 0 ? DEFAULT_STATE.bearing : _ref$bearing,
        _ref$pitch = _ref.pitch,
        pitch = _ref$pitch === void 0 ? DEFAULT_STATE.pitch : _ref$pitch,
        _ref$altitude = _ref.altitude,
        altitude = _ref$altitude === void 0 ? DEFAULT_STATE.altitude : _ref$altitude,
        _ref$maxZoom = _ref.maxZoom,
        maxZoom = _ref$maxZoom === void 0 ? MAPBOX_LIMITS.maxZoom : _ref$maxZoom,
        _ref$minZoom = _ref.minZoom,
        minZoom = _ref$minZoom === void 0 ? MAPBOX_LIMITS.minZoom : _ref$minZoom,
        _ref$maxPitch = _ref.maxPitch,
        maxPitch = _ref$maxPitch === void 0 ? MAPBOX_LIMITS.maxPitch : _ref$maxPitch,
        _ref$minPitch = _ref.minPitch,
        minPitch = _ref$minPitch === void 0 ? MAPBOX_LIMITS.minPitch : _ref$minPitch,
        startPanLngLat = _ref.startPanLngLat,
        startZoomLngLat = _ref.startZoomLngLat,
        startBearing = _ref.startBearing,
        startPitch = _ref.startPitch,
        startZoom = _ref.startZoom;

    (0, _classCallCheck2.default)(this, MapState);
    (0, _assert.default)(Number.isFinite(longitude), '`longitude` must be supplied');
    (0, _assert.default)(Number.isFinite(latitude), '`latitude` must be supplied');
    (0, _assert.default)(Number.isFinite(zoom), '`zoom` must be supplied');
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MapState).call(this, {
      width: width,
      height: height,
      latitude: latitude,
      longitude: longitude,
      zoom: zoom,
      bearing: bearing,
      pitch: pitch,
      altitude: altitude,
      maxZoom: maxZoom,
      minZoom: minZoom,
      maxPitch: maxPitch,
      minPitch: minPitch
    }));
    _this._interactiveState = {
      startPanLngLat: startPanLngLat,
      startZoomLngLat: startZoomLngLat,
      startBearing: startBearing,
      startPitch: startPitch,
      startZoom: startZoom
    };
    return _this;
  }

  (0, _createClass2.default)(MapState, [{
    key: "getViewportProps",
    value: function getViewportProps() {
      return this._viewportProps;
    }
  }, {
    key: "getInteractiveState",
    value: function getInteractiveState() {
      return this._interactiveState;
    }
  }, {
    key: "panStart",
    value: function panStart(_ref2) {
      var pos = _ref2.pos;
      return this._getUpdatedState({
        startPanLngLat: this._unproject(pos)
      });
    }
  }, {
    key: "pan",
    value: function pan(_ref3) {
      var pos = _ref3.pos,
          startPos = _ref3.startPos;

      var startPanLngLat = this._interactiveState.startPanLngLat || this._unproject(startPos);

      if (!startPanLngLat) {
        return this;
      }

      var _this$_calculateNewLn = this._calculateNewLngLat({
        startPanLngLat: startPanLngLat,
        pos: pos
      }),
          _this$_calculateNewLn2 = (0, _slicedToArray2.default)(_this$_calculateNewLn, 2),
          longitude = _this$_calculateNewLn2[0],
          latitude = _this$_calculateNewLn2[1];

      return this._getUpdatedState({
        longitude: longitude,
        latitude: latitude
      });
    }
  }, {
    key: "panEnd",
    value: function panEnd() {
      return this._getUpdatedState({
        startPanLngLat: null
      });
    }
  }, {
    key: "rotateStart",
    value: function rotateStart(_ref4) {
      var pos = _ref4.pos;
      return this._getUpdatedState({
        startBearing: this._viewportProps.bearing,
        startPitch: this._viewportProps.pitch
      });
    }
  }, {
    key: "rotate",
    value: function rotate(_ref5) {
      var _ref5$deltaScaleX = _ref5.deltaScaleX,
          deltaScaleX = _ref5$deltaScaleX === void 0 ? 0 : _ref5$deltaScaleX,
          _ref5$deltaScaleY = _ref5.deltaScaleY,
          deltaScaleY = _ref5$deltaScaleY === void 0 ? 0 : _ref5$deltaScaleY;
      var _this$_interactiveSta = this._interactiveState,
          startBearing = _this$_interactiveSta.startBearing,
          startPitch = _this$_interactiveSta.startPitch;

      if (!Number.isFinite(startBearing) || !Number.isFinite(startPitch)) {
        return this;
      }

      var _this$_calculateNewPi = this._calculateNewPitchAndBearing({
        deltaScaleX: deltaScaleX,
        deltaScaleY: deltaScaleY,
        startBearing: startBearing,
        startPitch: startPitch
      }),
          pitch = _this$_calculateNewPi.pitch,
          bearing = _this$_calculateNewPi.bearing;

      return this._getUpdatedState({
        bearing: bearing,
        pitch: pitch
      });
    }
  }, {
    key: "rotateEnd",
    value: function rotateEnd() {
      return this._getUpdatedState({
        startBearing: null,
        startPitch: null
      });
    }
  }, {
    key: "zoomStart",
    value: function zoomStart(_ref6) {
      var pos = _ref6.pos;
      return this._getUpdatedState({
        startZoomLngLat: this._unproject(pos),
        startZoom: this._viewportProps.zoom
      });
    }
  }, {
    key: "zoom",
    value: function zoom(_ref7) {
      var pos = _ref7.pos,
          startPos = _ref7.startPos,
          scale = _ref7.scale;
      (0, _assert.default)(scale > 0, '`scale` must be a positive number');
      var _this$_interactiveSta2 = this._interactiveState,
          startZoom = _this$_interactiveSta2.startZoom,
          startZoomLngLat = _this$_interactiveSta2.startZoomLngLat;

      if (!Number.isFinite(startZoom)) {
        startZoom = this._viewportProps.zoom;
        startZoomLngLat = this._unproject(startPos) || this._unproject(pos);
      }

      (0, _assert.default)(startZoomLngLat, '`startZoomLngLat` prop is required ' + 'for zoom behavior to calculate where to position the map.');

      var zoom = this._calculateNewZoom({
        scale: scale,
        startZoom: startZoom
      });

      var zoomedViewport = new _viewportMercatorProject.default(Object.assign({}, this._viewportProps, {
        zoom: zoom
      }));

      var _zoomedViewport$getLo = zoomedViewport.getLocationAtPoint({
        lngLat: startZoomLngLat,
        pos: pos
      }),
          _zoomedViewport$getLo2 = (0, _slicedToArray2.default)(_zoomedViewport$getLo, 2),
          longitude = _zoomedViewport$getLo2[0],
          latitude = _zoomedViewport$getLo2[1];

      return this._getUpdatedState({
        zoom: zoom,
        longitude: longitude,
        latitude: latitude
      });
    }
  }, {
    key: "zoomEnd",
    value: function zoomEnd() {
      return this._getUpdatedState({
        startZoomLngLat: null,
        startZoom: null
      });
    }
  }, {
    key: "zoomIn",
    value: function zoomIn() {
      return this._zoomFromCenter(2);
    }
  }, {
    key: "zoomOut",
    value: function zoomOut() {
      return this._zoomFromCenter(0.5);
    }
  }, {
    key: "moveLeft",
    value: function moveLeft() {
      return this._panFromCenter([100, 0]);
    }
  }, {
    key: "moveRight",
    value: function moveRight() {
      return this._panFromCenter([-100, 0]);
    }
  }, {
    key: "moveUp",
    value: function moveUp() {
      return this._panFromCenter([0, 100]);
    }
  }, {
    key: "moveDown",
    value: function moveDown() {
      return this._panFromCenter([0, -100]);
    }
  }, {
    key: "rotateLeft",
    value: function rotateLeft() {
      return this._getUpdatedState({
        bearing: this._viewportProps.bearing - 15
      });
    }
  }, {
    key: "rotateRight",
    value: function rotateRight() {
      return this._getUpdatedState({
        bearing: this._viewportProps.bearing + 15
      });
    }
  }, {
    key: "rotateUp",
    value: function rotateUp() {
      return this._getUpdatedState({
        pitch: this._viewportProps.pitch + 10
      });
    }
  }, {
    key: "rotateDown",
    value: function rotateDown() {
      return this._getUpdatedState({
        pitch: this._viewportProps.pitch - 10
      });
    }
  }, {
    key: "shortestPathFrom",
    value: function shortestPathFrom(viewState) {
      var fromProps = viewState.getViewportProps();
      var props = Object.assign({}, this._viewportProps);
      var bearing = props.bearing,
          longitude = props.longitude;

      if (Math.abs(bearing - fromProps.bearing) > 180) {
        props.bearing = bearing < 0 ? bearing + 360 : bearing - 360;
      }

      if (Math.abs(longitude - fromProps.longitude) > 180) {
        props.longitude = longitude < 0 ? longitude + 360 : longitude - 360;
      }

      return props;
    }
  }, {
    key: "_zoomFromCenter",
    value: function _zoomFromCenter(scale) {
      var _this$_viewportProps = this._viewportProps,
          width = _this$_viewportProps.width,
          height = _this$_viewportProps.height;
      return this.zoom({
        pos: [width / 2, height / 2],
        scale: scale
      });
    }
  }, {
    key: "_panFromCenter",
    value: function _panFromCenter(offset) {
      var _this$_viewportProps2 = this._viewportProps,
          width = _this$_viewportProps2.width,
          height = _this$_viewportProps2.height;
      return this.pan({
        startPos: [width / 2, height / 2],
        pos: [width / 2 + offset[0], height / 2 + offset[1]]
      });
    }
  }, {
    key: "_getUpdatedState",
    value: function _getUpdatedState(newProps) {
      return new MapState(Object.assign({}, this._viewportProps, this._interactiveState, newProps));
    }
  }, {
    key: "_applyConstraints",
    value: function _applyConstraints(props) {
      var maxZoom = props.maxZoom,
          minZoom = props.minZoom,
          zoom = props.zoom;
      props.zoom = (0, _math.clamp)(zoom, minZoom, maxZoom);
      var maxPitch = props.maxPitch,
          minPitch = props.minPitch,
          pitch = props.pitch;
      props.pitch = (0, _math.clamp)(pitch, minPitch, maxPitch);
      Object.assign(props, (0, _viewportMercatorProject.normalizeViewportProps)(props));
      return props;
    }
  }, {
    key: "_unproject",
    value: function _unproject(pos) {
      var viewport = new _viewportMercatorProject.default(this._viewportProps);
      return pos && viewport.unproject(pos);
    }
  }, {
    key: "_calculateNewLngLat",
    value: function _calculateNewLngLat(_ref8) {
      var startPanLngLat = _ref8.startPanLngLat,
          pos = _ref8.pos;
      var viewport = new _viewportMercatorProject.default(this._viewportProps);
      return viewport.getMapCenterByLngLatPosition({
        lngLat: startPanLngLat,
        pos: pos
      });
    }
  }, {
    key: "_calculateNewZoom",
    value: function _calculateNewZoom(_ref9) {
      var scale = _ref9.scale,
          startZoom = _ref9.startZoom;
      var _this$_viewportProps3 = this._viewportProps,
          maxZoom = _this$_viewportProps3.maxZoom,
          minZoom = _this$_viewportProps3.minZoom;
      var zoom = startZoom + Math.log2(scale);
      return (0, _math.clamp)(zoom, minZoom, maxZoom);
    }
  }, {
    key: "_calculateNewPitchAndBearing",
    value: function _calculateNewPitchAndBearing(_ref10) {
      var deltaScaleX = _ref10.deltaScaleX,
          deltaScaleY = _ref10.deltaScaleY,
          startBearing = _ref10.startBearing,
          startPitch = _ref10.startPitch;
      deltaScaleY = (0, _math.clamp)(deltaScaleY, -1, 1);
      var _this$_viewportProps4 = this._viewportProps,
          minPitch = _this$_viewportProps4.minPitch,
          maxPitch = _this$_viewportProps4.maxPitch;
      var bearing = startBearing + 180 * deltaScaleX;
      var pitch = startPitch;

      if (deltaScaleY > 0) {
        pitch = startPitch + deltaScaleY * (maxPitch - startPitch);
      } else if (deltaScaleY < 0) {
        pitch = startPitch - deltaScaleY * (minPitch - startPitch);
      }

      return {
        pitch: pitch,
        bearing: bearing
      };
    }
  }]);
  return MapState;
}(_viewState.default);

var MapController = function (_Controller) {
  (0, _inherits2.default)(MapController, _Controller);

  function MapController(props) {
    var _this2;

    (0, _classCallCheck2.default)(this, MapController);
    _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MapController).call(this, MapState, props));
    _this2.invertPan = true;
    return _this2;
  }

  (0, _createClass2.default)(MapController, [{
    key: "_getTransitionProps",
    value: function _getTransitionProps() {
      return LINEAR_TRANSITION_PROPS;
    }
  }, {
    key: "_onPanRotate",
    value: function _onPanRotate(event) {
      if (!this.dragRotate) {
        return false;
      }

      var deltaX = event.deltaX,
          deltaY = event.deltaY;

      var _this$getCenter = this.getCenter(event),
          _this$getCenter2 = (0, _slicedToArray2.default)(_this$getCenter, 2),
          centerY = _this$getCenter2[1];

      var startY = centerY - deltaY;

      var _this$controllerState = this.controllerState.getViewportProps(),
          width = _this$controllerState.width,
          height = _this$controllerState.height;

      var deltaScaleX = deltaX / width;
      var deltaScaleY = 0;

      if (deltaY > 0) {
        if (Math.abs(height - startY) > PITCH_MOUSE_THRESHOLD) {
          deltaScaleY = deltaY / (startY - height) * PITCH_ACCEL;
        }
      } else if (deltaY < 0) {
        if (startY > PITCH_MOUSE_THRESHOLD) {
          deltaScaleY = 1 - centerY / startY;
        }
      }

      deltaScaleY = Math.min(1, Math.max(-1, deltaScaleY));
      var newControllerState = this.controllerState.rotate({
        deltaScaleX: deltaScaleX,
        deltaScaleY: deltaScaleY
      });
      return this.updateViewport(newControllerState, NO_TRANSITION_PROPS, {
        isDragging: true,
        isRotating: true
      });
    }
  }]);
  return MapController;
}(_controller.default);

exports.default = MapController;
var testExports = {
  MapState: MapState
};
exports.testExports = testExports;
//# sourceMappingURL=map-controller.js.map