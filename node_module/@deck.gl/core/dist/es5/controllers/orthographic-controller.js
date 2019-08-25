"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _controller = _interopRequireDefault(require("./controller"));

var _orbitController = require("./orbit-controller");

var _linearInterpolator = _interopRequireDefault(require("../transitions/linear-interpolator"));

var _transitionManager = require("./transition-manager");

var LINEAR_TRANSITION_PROPS = {
  transitionDuration: 300,
  transitionEasing: function transitionEasing(t) {
    return t;
  },
  transitionInterpolator: new _linearInterpolator.default(['target', 'zoom']),
  transitionInterruption: _transitionManager.TRANSITION_EVENTS.BREAK
};

var OrthographicController = function (_Controller) {
  (0, _inherits2.default)(OrthographicController, _Controller);

  function OrthographicController(props) {
    var _this;

    (0, _classCallCheck2.default)(this, OrthographicController);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(OrthographicController).call(this, _orbitController.OrbitState, props));
    _this.invertPan = true;
    return _this;
  }

  (0, _createClass2.default)(OrthographicController, [{
    key: "_onPanRotate",
    value: function _onPanRotate(event) {
      return false;
    }
  }, {
    key: "_getTransitionProps",
    value: function _getTransitionProps() {
      return LINEAR_TRANSITION_PROPS;
    }
  }]);
  return OrthographicController;
}(_controller.default);

exports.default = OrthographicController;
//# sourceMappingURL=orthographic-controller.js.map