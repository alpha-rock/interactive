"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _view = _interopRequireDefault(require("./view"));

var _viewport = _interopRequireDefault(require("../viewports/viewport"));

var _math = require("math.gl");

var _orthographicController = _interopRequireDefault(require("../controllers/orthographic-controller"));

var viewMatrix = new _math.Matrix4().lookAt({
  eye: [0, 0, 1]
});

function getProjectionMatrix(_ref) {
  var width = _ref.width,
      height = _ref.height,
      near = _ref.near,
      far = _ref.far;
  width = width || 1;
  height = height || 1;
  return new _math.Matrix4().ortho({
    left: -width / 2,
    right: width / 2,
    bottom: height / 2,
    top: -height / 2,
    near: near,
    far: far
  });
}

var OrthographicViewport = function (_Viewport) {
  (0, _inherits2.default)(OrthographicViewport, _Viewport);

  function OrthographicViewport(_ref2) {
    var _this;

    var id = _ref2.id,
        x = _ref2.x,
        y = _ref2.y,
        width = _ref2.width,
        height = _ref2.height,
        _ref2$near = _ref2.near,
        near = _ref2$near === void 0 ? 0.1 : _ref2$near,
        _ref2$far = _ref2.far,
        far = _ref2$far === void 0 ? 1000 : _ref2$far,
        _ref2$zoom = _ref2.zoom,
        zoom = _ref2$zoom === void 0 ? 0 : _ref2$zoom,
        _ref2$target = _ref2.target,
        target = _ref2$target === void 0 ? [0, 0, 0] : _ref2$target;
    (0, _classCallCheck2.default)(this, OrthographicViewport);
    return (0, _possibleConstructorReturn2.default)(_this, new _viewport.default({
      id: id,
      x: x,
      y: y,
      width: width,
      height: height,
      position: target,
      viewMatrix: viewMatrix,
      projectionMatrix: getProjectionMatrix({
        width: width,
        height: height,
        near: near,
        far: far
      }),
      zoom: zoom
    }));
  }

  return OrthographicViewport;
}(_viewport.default);

var OrthographicView = function (_View) {
  (0, _inherits2.default)(OrthographicView, _View);

  function OrthographicView(props) {
    (0, _classCallCheck2.default)(this, OrthographicView);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(OrthographicView).call(this, Object.assign({}, props, {
      type: OrthographicViewport
    })));
  }

  (0, _createClass2.default)(OrthographicView, [{
    key: "controller",
    get: function get() {
      return this._getControllerProps({
        type: _orthographicController.default,
        ViewportType: OrthographicViewport
      });
    }
  }]);
  return OrthographicView;
}(_view.default);

exports.default = OrthographicView;
OrthographicView.displayName = 'OrthographicView';
//# sourceMappingURL=orthographic-view.js.map