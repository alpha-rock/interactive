import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _get from "@babel/runtime/helpers/esm/get";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { default as LayersPass } from './layers-pass';
import { Framebuffer, Texture2D, Renderbuffer, withParameters } from '@luma.gl/core';

var ShadowPass = function (_LayersPass) {
  _inherits(ShadowPass, _LayersPass);

  function ShadowPass(gl, props) {
    var _parameters, _attachments;

    var _this;

    _classCallCheck(this, ShadowPass);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ShadowPass).call(this, gl, props));
    _this.shadowMap = new Texture2D(gl, {
      width: 1,
      height: 1,
      parameters: (_parameters = {}, _defineProperty(_parameters, 10241, 9729), _defineProperty(_parameters, 10240, 9729), _defineProperty(_parameters, 10242, 33071), _defineProperty(_parameters, 10243, 33071), _parameters)
    });
    _this.depthBuffer = new Renderbuffer(gl, {
      format: 33189,
      width: 1,
      height: 1
    });
    _this.fbo = new Framebuffer(gl, {
      id: 'shadowmap',
      width: 1,
      height: 1,
      attachments: (_attachments = {}, _defineProperty(_attachments, 36064, _this.shadowMap), _defineProperty(_attachments, 36096, _this.depthBuffer), _attachments)
    });
    return _this;
  }

  _createClass(ShadowPass, [{
    key: "render",
    value: function render(params) {
      var _this2 = this;

      var target = this.fbo;
      withParameters(this.gl, {
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

        _get(_getPrototypeOf(ShadowPass.prototype), "render", _this2).call(_this2, Object.assign(params, {
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
}(LayersPass);

export { ShadowPass as default };
//# sourceMappingURL=shadow-pass.js.map