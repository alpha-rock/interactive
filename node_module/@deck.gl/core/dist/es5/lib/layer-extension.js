"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayerExtension = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _deepEqual = require("../utils/deep-equal");

var LayerExtension = function () {
  function LayerExtension() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, LayerExtension);
    this.opts = opts;
  }

  (0, _createClass2.default)(LayerExtension, [{
    key: "equals",
    value: function equals(extension) {
      if (this === extension) {
        return true;
      }

      return this.constructor === extension.constructor && (0, _deepEqual.deepEqual)(this.opts, extension.opts);
    }
  }, {
    key: "getShaders",
    value: function getShaders(extension) {
      return null;
    }
  }, {
    key: "getSubLayerProps",
    value: function getSubLayerProps(extension) {
      var _extension$constructo = extension.constructor.defaultProps,
          defaultProps = _extension$constructo === void 0 ? {} : _extension$constructo;
      var newProps = {
        updateTriggers: {}
      };

      for (var key in defaultProps) {
        if (key in this.props) {
          var propDef = defaultProps[key];
          var propValue = this.props[key];
          newProps[key] = propValue;

          if (propDef && propDef.type === 'accessor') {
            newProps.updateTriggers[key] = this.props.updateTriggers[key];

            if (typeof propValue === 'function') {
              newProps[key] = this.getSubLayerAccessor(propValue, true);
            }
          }
        }
      }

      return newProps;
    }
  }, {
    key: "initializeState",
    value: function initializeState(context, extension) {}
  }, {
    key: "updateState",
    value: function updateState(params, extension) {}
  }, {
    key: "finalizeState",
    value: function finalizeState(extension) {}
  }]);
  return LayerExtension;
}();

exports.LayerExtension = LayerExtension;
//# sourceMappingURL=layer-extension.js.map