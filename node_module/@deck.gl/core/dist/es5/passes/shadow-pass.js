"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _layersPass = _interopRequireDefault(require("./layers-pass"));

var _core = require("@luma.gl/core");

var ShadowPass = function (_LayersPass) {
  (0, _inherits2.default)(ShadowPass, _LayersPass);

  function ShadowPass(gl, props) {
    var _parameters, _attachments;

    var _this;

    (0, _classCallCheck2.default)(this, ShadowPass);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ShadowPass).call(this, gl, props));
    _this.shadowMap = new _core.Texture2D(gl, {
      width: 1,
      height: 1,
      parameters: (_parameters = {}, (0, _defineProperty2.default)(_parameters, 10241, 9729), (0, _defineProperty2.default)(_parameters, 10240, 9729), (0, _defineProperty2.default)(_parameters, 10242, 33071), (0, _defineProperty2.default)(_parameters, 10243, 33071), _parameters)
    });
    _this.depthBuffer = new _core.Renderbuffer(gl, {
      format: 33189,
      width: 1,
      height: 1
    });
    _this.fbo = new _core.Framebuffer(gl, {
      id: 'shadowmap',
      width: 1,
      height: 1,
      attachments: (_attachments = {}, (0, _defineProperty2.default)(_attachments, 36064, _this.shadowMap), (0, _defineProperty2.default)(_attachments, 36096, _this.depthBuffer), _attachments)
    });
    return _this;
  }

  (0, _createClass2.default)(ShadowPass, [{
    key: "render",
    value: function render(params) {
      var _this2 = this;

      var target = this.fbo;
      (0, _core.withParameters)(this.gl, {
        depthRange: [0, 1],
        depthTest: true,
        blend: false,
        clearColor: [1, 1, 1, 1]
      }, function () {
        var viewport = params.viewports[0];
        var width = viewport.width * _this2.props.pixelRatio;
        var height = viewport.height * _this2.props.pixelRatio;

        if (width !== target.width || height !== target.height) {
          target.resize({
            width: width,
            height: height
          });
        }

        (0, _get2.default)((0, _getPrototypeOf2.default)(ShadowPass.prototype), "render", _this2).call(_this2, Object.assign(params, {
          outputBuffer: target
        }));
      });
    }
  }, {
    key: "getModuleParameters",
    value: function getModuleParameters(layer, effects, effectProps) {
      var moduleParameters = Object.assign(Object.create(layer.props), {
        viewport: layer.context.viewport,
        pickingActive: 0,
        drawToShadowMap: true,
        devicePixelRatio: this.props.pixelRatio
      });
      Object.assign(moduleParameters, effectProps);
      return moduleParameters;
    }
  }, {
    key: "delete",
    value: function _delete() {
      if (this.fbo) {
        this.fbo.delete();
        this.fbo = null;
      }

      if (this.shadowMap) {
        this.shadowMap.delete();
        this.shadowMap = null;
      }

      if (this.depthBuffer) {
        this.depthBuffer.delete();
        this.depthBuffer = null;
      }
    }
  }]);
  return ShadowPass;
}(_layersPass.default);

exports.default = ShadowPass;
//# sourceMappingURL=shadow-pass.js.map