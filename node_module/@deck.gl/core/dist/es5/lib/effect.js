"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Effect = function () {
  function Effect() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, Effect);
    var _props$id = props.id,
        id = _props$id === void 0 ? 'effect' : _props$id;
    this.id = id;
    this.props = {};
    Object.assign(this.props, props);
  }

  (0, _createClass2.default)(Effect, [{
    key: "prepare",
    value: function prepare() {}
  }, {
    key: "getParameters",
    value: function getParameters() {}
  }, {
    key: "cleanup",
    value: function cleanup() {}
  }]);
  return Effect;
}();

exports.default = Effect;
//# sourceMappingURL=effect.js.map