"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _deepEqual = require("../utils/deep-equal");

var _lightingEffect = _interopRequireDefault(require("../effects/lighting/lighting-effect"));

var DEFAULT_LIGHTING_EFFECT = new _lightingEffect.default();

var EffectManager = function () {
  function EffectManager() {
    (0, _classCallCheck2.default)(this, EffectManager);
    this.effects = [];
    this._internalEffects = [];
    this._needsRedraw = 'Initial render';
    this.setEffects();
  }

  (0, _createClass2.default)(EffectManager, [{
    key: "setProps",
    value: function setProps(props) {
      if ('effects' in props) {
        if (props.effects.length !== this.effects.length || !(0, _deepEqual.deepEqual)(props.effects, this.effects)) {
          this.setEffects(props.effects);
          this._needsRedraw = 'effects changed';
        }
      }
    }
  }, {
    key: "needsRedraw",
    value: function needsRedraw() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        clearRedrawFlags: false
      };
      var redraw = this._needsRedraw;

      if (opts.clearRedrawFlags) {
        this._needsRedraw = false;
      }

      return redraw;
    }
  }, {
    key: "getEffects",
    value: function getEffects() {
      return this._internalEffects;
    }
  }, {
    key: "finalize",
    value: function finalize() {
      this.cleanup();
    }
  }, {
    key: "setEffects",
    value: function setEffects() {
      var effects = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.cleanup();
      this.effects = effects;

      this._createInternalEffects();
    }
  }, {
    key: "cleanup",
    value: function cleanup() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.effects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var effect = _step.value;
          effect.cleanup();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this._internalEffects[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _effect = _step2.value;

          _effect.cleanup();
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.effects.length = 0;
      this._internalEffects.length = 0;
    }
  }, {
    key: "_createInternalEffects",
    value: function _createInternalEffects() {
      this._internalEffects = this.effects.slice();

      if (!this.effects.some(function (effect) {
        return effect instanceof _lightingEffect.default;
      })) {
        this._internalEffects.push(DEFAULT_LIGHTING_EFFECT);
      }
    }
  }]);
  return EffectManager;
}();

exports.default = EffectManager;
//# sourceMappingURL=effect-manager.js.map