import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";

var LRUCache = function () {
  function LRUCache() {
    var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;

    _classCallCheck(this, LRUCache);

    this.limit = limit;
    this.clear();
  }

  _createClass(LRUCache, [{
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

export { LRUCache as default };
//# sourceMappingURL=lru-cache.js.map