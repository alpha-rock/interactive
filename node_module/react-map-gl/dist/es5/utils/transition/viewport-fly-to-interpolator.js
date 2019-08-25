"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _assert = _interopRequireDefault(require("../assert"));

var _transitionInterpolator = _interopRequireDefault(require("./transition-interpolator"));

var _viewportMercatorProject = require("viewport-mercator-project");

var _transitionUtils = require("./transition-utils");

var _mathUtils = require("../math-utils");

var VIEWPORT_TRANSITION_PROPS = ['longitude', 'latitude', 'zoom', 'bearing', 'pitch'];
var REQUIRED_PROPS = ['latitude', 'longitude', 'zoom', 'width', 'height'];
var LINEARLY_INTERPOLATED_PROPS = ['bearing', 'pitch'];

var ViewportFlyToInterpolator = function (_TransitionInterpolat) {
  (0, _inherits2["default"])(ViewportFlyToInterpolator, _TransitionInterpolat);

  function ViewportFlyToInterpolator() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, ViewportFlyToInterpolator);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(ViewportFlyToInterpolator)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "propNames", VIEWPORT_TRANSITION_PROPS);
    return _this;
  }

  (0, _createClass2["default"])(ViewportFlyToInterpolator, [{
    key: "initializeProps",
    value: function initializeProps(startProps, endProps) {
      var startViewportProps = {};
      var endViewportProps = {};

      for (var _i = 0, _REQUIRED_PROPS = REQUIRED_PROPS; _i < _REQUIRED_PROPS.length; _i++) {
        var key = _REQUIRED_PROPS[_i];
        var startValue = startProps[key];
        var endValue = endProps[key];
        (0, _assert["default"])((0, _transitionUtils.isValid)(startValue) && (0, _transitionUtils.isValid)(endValue), "".concat(key, " must be supplied for transition"));
        startViewportProps[key] = startValue;
        endViewportProps[key] = (0, _transitionUtils.getEndValueByShortestPath)(key, startValue, endValue);
      }

      for (var _i2 = 0, _LINEARLY_INTERPOLATE = LINEARLY_INTERPOLATED_PROPS; _i2 < _LINEARLY_INTERPOLATE.length; _i2++) {
        var _key2 = _LINEARLY_INTERPOLATE[_i2];

        var _startValue = startProps[_key2] || 0;

        var _endValue = endProps[_key2] || 0;

        startViewportProps[_key2] = _startValue;
        endViewportProps[_key2] = (0, _transitionUtils.getEndValueByShortestPath)(_key2, _startValue, _endValue);
      }

      return {
        start: startViewportProps,
        end: endViewportProps
      };
    }
  }, {
    key: "interpolateProps",
    value: function interpolateProps(startProps, endProps, t) {
      var viewport = (0, _viewportMercatorProject.flyToViewport)(startProps, endProps, t);

      for (var _i3 = 0, _LINEARLY_INTERPOLATE2 = LINEARLY_INTERPOLATED_PROPS; _i3 < _LINEARLY_INTERPOLATE2.length; _i3++) {
        var key = _LINEARLY_INTERPOLATE2[_i3];
        viewport[key] = (0, _mathUtils.lerp)(startProps[key], endProps[key], t);
      }

      return viewport;
    }
  }]);
  return ViewportFlyToInterpolator;
}(_transitionInterpolator["default"]);

exports["default"] = ViewportFlyToInterpolator;
//# sourceMappingURL=viewport-fly-to-interpolator.js.map