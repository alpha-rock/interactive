import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

var _DEFAULT_PARAMETERS;

import { Framebuffer, Texture2D } from '@luma.gl/core';
var DEFAULT_PARAMETERS = (_DEFAULT_PARAMETERS = {}, _defineProperty(_DEFAULT_PARAMETERS, 10240, 9728), _defineProperty(_DEFAULT_PARAMETERS, 10241, 9728), _DEFAULT_PARAMETERS);
export function getFloatTexture(gl) {
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
  var texture = new Texture2D(gl, {
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
export function getFramebuffer(gl, opts) {
  var id = opts.id,
      _opts$width2 = opts.width,
      width = _opts$width2 === void 0 ? 1 : _opts$width2,
      _opts$height2 = opts.height,
      height = _opts$height2 === void 0 ? 1 : _opts$height2,
      texture = opts.texture;
  var fb = new Framebuffer(gl, {
    id: id,
    width: width,
    height: height,
    attachments: _defineProperty({}, 36064, texture)
  });
  return fb;
}
export function getFloatArray(array, size) {
  var fillValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (!array || array.length < size) {
    return new Float32Array(size).fill(fillValue);
  }

  return array;
}
//# sourceMappingURL=resource-utils.js.map