"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _iterableUtils = require("./iterable-utils");

var _typedArrayManager = _interopRequireDefault(require("./typed-array-manager"));

var Tesselator = function () {
  function Tesselator() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, Tesselator);
    var _opts$attributes = opts.attributes,
        attributes = _opts$attributes === void 0 ? {} : _opts$attributes;
    this.typedArrayManager = _typedArrayManager.default;
    this.indexLayout = null;
    this.bufferLayout = null;
    this.vertexCount = 0;
    this.instanceCount = 0;
    this.attributes = {};
    this._attributeDefs = attributes;
    this.updateGeometry(opts);
    Object.seal(this);
  }

  (0, _createClass2.default)(Tesselator, [{
    key: "updateGeometry",
    value: function updateGeometry(_ref) {
      var data = _ref.data,
          getGeometry = _ref.getGeometry,
          positionFormat = _ref.positionFormat,
          fp64 = _ref.fp64,
          dataChanged = _ref.dataChanged;
      this.data = data;
      this.getGeometry = getGeometry;
      this.fp64 = fp64;
      this.positionSize = positionFormat === 'XY' ? 2 : 3;

      if (Array.isArray(dataChanged)) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = dataChanged[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var dataRange = _step.value;

            this._rebuildGeometry(dataRange);
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
      } else {
        this._rebuildGeometry();
      }
    }
  }, {
    key: "updatePartialGeometry",
    value: function updatePartialGeometry(_ref2) {
      var startRow = _ref2.startRow,
          endRow = _ref2.endRow;

      this._rebuildGeometry({
        startRow: startRow,
        endRow: endRow
      });
    }
  }, {
    key: "updateGeometryAttributes",
    value: function updateGeometryAttributes(geometry, startIndex, size) {
      throw new Error('Not implemented');
    }
  }, {
    key: "getGeometrySize",
    value: function getGeometrySize(geometry) {
      throw new Error('Not implemented');
    }
  }, {
    key: "_forEachGeometry",
    value: function _forEachGeometry(visitor, startRow, endRow) {
      var data = this.data,
          getGeometry = this.getGeometry;

      var _createIterable = (0, _iterableUtils.createIterable)(data, startRow, endRow),
          iterable = _createIterable.iterable,
          objectInfo = _createIterable.objectInfo;

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = iterable[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var object = _step2.value;
          objectInfo.index++;
          var geometry = getGeometry(object, objectInfo);
          visitor(geometry, objectInfo.index);
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
    }
  }, {
    key: "_rebuildGeometry",
    value: function _rebuildGeometry(dataRange) {
      var _this = this;

      if (!this.data || !this.getGeometry) {
        return;
      }

      var indexLayout = this.indexLayout,
          bufferLayout = this.bufferLayout;

      if (!dataRange) {
        indexLayout = [];
        bufferLayout = [];
      }

      var _ref3 = dataRange || {},
          _ref3$startRow = _ref3.startRow,
          startRow = _ref3$startRow === void 0 ? 0 : _ref3$startRow,
          _ref3$endRow = _ref3.endRow,
          endRow = _ref3$endRow === void 0 ? Infinity : _ref3$endRow;

      this._forEachGeometry(function (geometry, dataIndex) {
        bufferLayout[dataIndex] = _this.getGeometrySize(geometry);
      }, startRow, endRow);

      var instanceCount = 0;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = bufferLayout[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var count = _step3.value;
          instanceCount += count;
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      var attributes = this.attributes,
          _attributeDefs = this._attributeDefs,
          typedArrayManager = this.typedArrayManager,
          fp64 = this.fp64;

      for (var name in _attributeDefs) {
        var def = _attributeDefs[name];
        def.copy = Boolean(dataRange);

        if (!def.fp64Only || fp64) {
          attributes[name] = typedArrayManager.allocate(attributes[name], instanceCount, def);
        }
      }

      this.indexLayout = indexLayout;
      this.bufferLayout = bufferLayout;
      this.instanceCount = instanceCount;
      var context = {
        vertexStart: 0,
        indexStart: 0
      };

      for (var i = 0; i < startRow; i++) {
        context.vertexStart += bufferLayout[i];
        context.indexStart += indexLayout[i] || 0;
      }

      this._forEachGeometry(function (geometry, dataIndex) {
        var geometrySize = bufferLayout[dataIndex];
        context.geometryIndex = dataIndex;
        context.geometrySize = geometrySize;

        _this.updateGeometryAttributes(geometry, context);

        context.vertexStart += geometrySize;
        context.indexStart += indexLayout[dataIndex] || 0;
      }, startRow, endRow);

      var vertexCount = context.indexStart;

      for (var _i = endRow; _i < indexLayout.length; _i++) {
        vertexCount += indexLayout[_i];
      }

      this.vertexCount = vertexCount;
    }
  }]);
  return Tesselator;
}();

exports.default = Tesselator;
//# sourceMappingURL=tesselator.js.map