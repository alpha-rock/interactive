"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var LRUCache = function () {
  function LRUCache() {
    var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
    (0, _classCallCheck2.default)(this, LRUCache);
    this.limit = limit;
    this.clear();
  }

  (0, _createClass2.default)(LRUCache, [{
    key: "clear",
    value: function clear() {
      this._cache = {};
      this._order = [];
    }
  }, {
    key: "get",
    value: function get(key) {
      var value = this._cache[key];

      if (value) {
        this._deleteOrder(key);

        this._appendOrder(key);
      }

      return value;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      if (!this._cache[key]) {
        if (Object.keys(this._cache).length === this.limit) {
          this.delete(this._order[0]);
        }

        this._cache[key] = value;

        this._appendOrder(key);
      } else {
        this.delete(key);
        this._cache[key] = value;

        this._appendOrder(key);
      }
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      var value = this._cache[key];

      if (value) {
        this._deleteCache(key);

        this._deleteOrder(key);
      }
    }
  }, {
    key: "_deleteCache",
    value: function _deleteCache(key) {
      delete this._cache[key];
    }
  }, {
    key: "_deleteOrder",
    value: function _deleteOrder(key) {
      var index = this._order.findIndex(function (o) {
        return o === key;
      });

      if (index >= 0) {
        this._order.splice(index, 1);
      }
    }
  }, {
    key: "_appendOrder",
    value: function _appendOrder(key) {
      this._order.push(key);
    }
  }]);
  return LRUCache;
}();

exports.default = LRUCache;
//# sourceMappingURL=lru-cache.js.map