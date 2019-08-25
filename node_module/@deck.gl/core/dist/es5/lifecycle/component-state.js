"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _asyncIterator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncIterator"));

var _log = _interopRequireDefault(require("../utils/log"));

var _assert = _interopRequireDefault(require("../utils/assert"));

var _iterableUtils = require("../utils/iterable-utils");

var EMPTY_PROPS = Object.freeze({});

var ComponentState = function () {
  function ComponentState() {
    var component = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    (0, _classCallCheck2.default)(this, ComponentState);
    this.component = component;
    this.asyncProps = {};

    this.onAsyncPropUpdated = function () {};

    this.oldProps = EMPTY_PROPS;
    this.oldAsyncProps = null;
  }

  (0, _createClass2.default)(ComponentState, [{
    key: "getOldProps",
    value: function getOldProps() {
      return this.oldAsyncProps || this.oldProps;
    }
  }, {
    key: "resetOldProps",
    value: function resetOldProps() {
      this.oldAsyncProps = null;
      this.oldProps = this.component.props;
    }
  }, {
    key: "freezeAsyncOldProps",
    value: function freezeAsyncOldProps() {
      if (!this.oldAsyncProps) {
        this.oldProps = this.oldProps || this.component.props;
        this.oldAsyncProps = Object.create(this.oldProps);

        for (var propName in this.asyncProps) {
          Object.defineProperty(this.oldAsyncProps, propName, {
            enumerable: true,
            value: this.oldProps[propName]
          });
        }
      }
    }
  }, {
    key: "hasAsyncProp",
    value: function hasAsyncProp(propName) {
      return propName in this.asyncProps;
    }
  }, {
    key: "getAsyncProp",
    value: function getAsyncProp(propName) {
      var asyncProp = this.asyncProps[propName];
      return asyncProp && asyncProp.resolvedValue;
    }
  }, {
    key: "isAsyncPropLoading",
    value: function isAsyncPropLoading(propName) {
      var asyncProp = this.asyncProps[propName];
      return Boolean(asyncProp && asyncProp.pendingLoadCount > 0 && asyncProp.pendingLoadCount !== asyncProp.resolvedLoadCount);
    }
  }, {
    key: "setAsyncProps",
    value: function setAsyncProps(props) {
      var resolvedValues = props._asyncPropResolvedValues || {};
      var originalValues = props._asyncPropOriginalValues || props;
      var defaultValues = props._asyncPropDefaultValues || {};

      for (var propName in resolvedValues) {
        var value = resolvedValues[propName];

        this._createAsyncPropData(propName, value, defaultValues[propName]);

        this._updateAsyncProp(propName, value);
      }

      for (var _propName in originalValues) {
        var _value2 = originalValues[_propName];

        this._createAsyncPropData(_propName, _value2, defaultValues[_propName]);

        this._updateAsyncProp(_propName, _value2);
      }
    }
  }, {
    key: "_updateAsyncProp",
    value: function _updateAsyncProp(propName, value) {
      if (!this._didAsyncInputValueChange(propName, value)) {
        return;
      }

      if (typeof value === 'string') {
        var fetch = this.layer.props.fetch;
        var url = value;
        value = fetch(url, {
          propName: propName,
          layer: this.layer
        });
      }

      if (value instanceof Promise) {
        this._watchPromise(propName, value);

        return;
      }

      if ((0, _iterableUtils.isAsyncIterable)(value)) {
        this._resolveAsyncIterable(propName, value);

        return;
      }

      this._setPropValue(propName, value);
    }
  }, {
    key: "_didAsyncInputValueChange",
    value: function _didAsyncInputValueChange(propName, value) {
      var asyncProp = this.asyncProps[propName];

      if (value === asyncProp.lastValue) {
        return false;
      }

      asyncProp.lastValue = value;
      return true;
    }
  }, {
    key: "_setPropValue",
    value: function _setPropValue(propName, value) {
      var asyncProp = this.asyncProps[propName];
      asyncProp.value = value;
      asyncProp.resolvedValue = value;
      asyncProp.pendingLoadCount++;
      asyncProp.resolvedLoadCount = asyncProp.pendingLoadCount;
    }
  }, {
    key: "_setAsyncPropValue",
    value: function _setAsyncPropValue(propName, value, loadCount) {
      var asyncProp = this.asyncProps[propName];

      if (asyncProp && loadCount >= asyncProp.resolvedLoadCount) {
        (0, _assert.default)(value !== undefined);
        this.freezeAsyncOldProps();
        asyncProp.resolvedValue = value;
        asyncProp.resolvedLoadCount = loadCount;
        this.onAsyncPropUpdated(propName, value);
      }
    }
  }, {
    key: "_watchPromise",
    value: function _watchPromise(propName, promise) {
      var _this = this;

      var asyncProp = this.asyncProps[propName];
      asyncProp.pendingLoadCount++;
      var loadCount = asyncProp.pendingLoadCount;
      promise.then(function (data) {
        data = _this._postProcessValue(propName, data);

        _this._setAsyncPropValue(propName, data, loadCount);

        var onDataLoad = _this.layer.props.onDataLoad;

        if (propName === 'data' && onDataLoad) {
          onDataLoad(data, {
            propName: propName,
            layer: _this.layer
          });
        }
      }).catch(function (error) {
        return _log.default.error(error)();
      });
    }
  }, {
    key: "_resolveAsyncIterable",
    value: function () {
      var _resolveAsyncIterable2 = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee(propName, iterable) {
        var asyncProp, loadCount, data, count, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, chunk, onDataLoad;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (propName !== 'data') {
                  this._setPropValue(propName, iterable);
                }

                asyncProp = this.asyncProps[propName];
                asyncProp.pendingLoadCount++;
                loadCount = asyncProp.pendingLoadCount;
                data = [];
                count = 0;
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _context.prev = 8;
                _iterator = (0, _asyncIterator2.default)(iterable);

              case 10:
                _context.next = 12;
                return _iterator.next();

              case 12:
                _step = _context.sent;
                _iteratorNormalCompletion = _step.done;
                _context.next = 16;
                return _step.value;

              case 16:
                _value = _context.sent;

                if (_iteratorNormalCompletion) {
                  _context.next = 26;
                  break;
                }

                chunk = _value;
                data = this._postProcessValue(propName, chunk, data);
                Object.defineProperty(data, '__diff', {
                  enumerable: false,
                  value: [{
                    startRow: count,
                    endRow: data.length
                  }]
                });
                count = data.length;

                this._setAsyncPropValue(propName, data, loadCount);

              case 23:
                _iteratorNormalCompletion = true;
                _context.next = 10;
                break;

              case 26:
                _context.next = 32;
                break;

              case 28:
                _context.prev = 28;
                _context.t0 = _context["catch"](8);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 32:
                _context.prev = 32;
                _context.prev = 33;

                if (!(!_iteratorNormalCompletion && _iterator.return != null)) {
                  _context.next = 37;
                  break;
                }

                _context.next = 37;
                return _iterator.return();

              case 37:
                _context.prev = 37;

                if (!_didIteratorError) {
                  _context.next = 40;
                  break;
                }

                throw _iteratorError;

              case 40:
                return _context.finish(37);

              case 41:
                return _context.finish(32);

              case 42:
                onDataLoad = this.layer.props.onDataLoad;

                if (onDataLoad) {
                  onDataLoad(data, {
                    propName: propName,
                    layer: this.layer
                  });
                }

              case 44:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[8, 28, 32, 42], [33,, 37, 41]]);
      }));

      function _resolveAsyncIterable(_x, _x2) {
        return _resolveAsyncIterable2.apply(this, arguments);
      }

      return _resolveAsyncIterable;
    }()
  }, {
    key: "_postProcessValue",
    value: function _postProcessValue(propName, value, previousValue) {
      var _ref = this.component ? this.component.props : {},
          dataTransform = _ref.dataTransform;

      if (propName !== 'data') {
        return value;
      }

      if (dataTransform) {
        return dataTransform(value, previousValue);
      }

      return previousValue ? previousValue.concat(value) : value;
    }
  }, {
    key: "_createAsyncPropData",
    value: function _createAsyncPropData(propName, value, defaultValue) {
      var asyncProp = this.asyncProps[propName];

      if (!asyncProp) {
        this.asyncProps[propName] = {
          lastValue: null,
          resolvedValue: defaultValue,
          pendingLoadCount: 0,
          resolvedLoadCount: 0
        };
      }
    }
  }]);
  return ComponentState;
}();

exports.default = ComponentState;
//# sourceMappingURL=component-state.js.map