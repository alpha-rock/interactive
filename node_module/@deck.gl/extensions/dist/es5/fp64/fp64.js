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

var _core = require("@deck.gl/core");

var Fp64Extension = function (_LayerExtension) {
  (0, _inherits2.default)(Fp64Extension, _LayerExtension);

  function Fp64Extension() {
    (0, _classCallCheck2.default)(this, Fp64Extension);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Fp64Extension).apply(this, arguments));
  }

  (0, _createClass2.default)(Fp64Extension, [{
    key: "getShaders",
    value: function getShaders(opts) {
      if (this.props.coordinateSystem !== _core.COORDINATE_SYSTEM.LNGLAT_DEPRECATED) {
        throw new Error('fp64: coordinateSystem must be LNGLAT_DEPRECATED');
      }

      return {
        modules: [_core.project64]
      };
    }
  }]);
  return Fp64Extension;
}(_core.LayerExtension);

exports.default = Fp64Extension;
Fp64Extension.extensionName = 'Fp64Extension';
//# sourceMappingURL=fp64.js.map