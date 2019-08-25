"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFloatTexture = getFloatTexture;
exports.getFramebuffer = getFramebuffer;
exports.getFloatArray = getFloatArray;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _core = require("@luma.gl/core");

var _DEFAULT_PARAMETERS;

var DEFAULT_PARAMETERS = (_DEFAULT_PARAMETERS = {}, (0, _defineProperty2.default)(_DEFAULT_PARAMETERS, 10240, 9728), (0, _defineProperty2.default)(_DEFAULT_PARAMETERS, 10241, 9728), _DEFAULT_PARAMETERS);

function getFloatTexture(gl) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _opts$width = opts.width,
      width = _opts$width === void 0 ? 1 : _opts$width,
      _opts$height = opts.height,
      height = _opts$height === void 0 ? 1 : _opts$height,
      _opts$data = opts.data,
      data = _opts$data === void 0 ? null : _opts$data,
      _opts$unpackFlipY = opts.unpackFlipY,
      unpackFlipY = _opts$unpackFlipY === void 0 ? true : _opts$unpackFlipY,
      _opts$parameters = opts.parameters,
      parameters = _opts$parameters === void 0 ? DEFAULT_PARAMETERS : _opts$parameters;
  var texture = new _core.Texture2D(gl, {
    data: data,
    format: 34836,
    type: 5126,
    border: 0,
    mipmaps: false,
    parameters: parameters,
    dataFormat: 6408,
    width: width,
    height: height,
    unpackFlipY: unpackFlipY
  });
  return texture;
}

function getFramebuffer(gl, opts) {
  var id = opts.id,
      _opts$width2 = opts.width,
      width = _opts$width2 === void 0 ? 1 : _opts$width2,
      _opts$height2 = opts.height,
      height = _opts$height2 === void 0 ? 1 : _opts$height2,
      texture = opts.texture;
  var fb = new _core.Framebuffer(gl, {
    id: id,
    width: width,
    height: height,
    attachments: (0, _defineProperty2.default)({}, 36064, texture)
  });
  return fb;
}

function getFloatArray(array, size) {
  var fillValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (!array || array.length < size) {
    return new Float32Array(size).fill(fillValue);
  }

  return array;
}
//# sourceMappingURL=resource-utils.js.map