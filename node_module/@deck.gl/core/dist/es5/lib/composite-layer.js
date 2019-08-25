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

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _layer = _interopRequireDefault(require("./layer"));

var _log = _interopRequireDefault(require("../utils/log"));

var _flatten = require("../utils/flatten");

var CompositeLayer = function (_Layer) {
  (0, _inherits2.default)(CompositeLayer, _Layer);

  function CompositeLayer() {
    (0, _classCallCheck2.default)(this, CompositeLayer);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CompositeLayer).apply(this, arguments));
  }

  (0, _createClass2.default)(CompositeLayer, [{
    key: "getSubLayers",
    value: function getSubLayers() {
      return this.internalState && this.internalState.subLayers || [];
    }
  }, {
    key: "initializeState",
    value: function initializeState() {}
  }, {
    key: "setState",
    value: function setState(updateObject) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(CompositeLayer.prototype), "setState", this).call(this, updateObject);
      this.setLayerNeedsUpdate();
    }
  }, {
    key: "getPickingInfo",
    value: function getPickingInfo(_ref) {
      var info = _ref.info;
      var object = info.object;
      var isDataWrapped = object && object.__source && object.__source.parent && object.__source.parent.id === this.id;

      if (!isDataWrapped) {
        return info;
      }

      return Object.assign(info, {
        object: object.__source.object,
        index: object.__source.index
      });
    }
  }, {
    key: "renderLayers",
    value: function renderLayers() {
      return null;
    }
  }, {
    key: "shouldRenderSubLayer",
    value: function shouldRenderSubLayer(id, data) {
      var overridingProps = this.props._subLayerProps;
      return data && data.length || overridingProps && overridingProps[id];
    }
  }, {
    key: "getSubLayerClass",
    value: function getSubLayerClass(id, DefaultLayerClass) {
      var overridingProps = this.props._subLayerProps;
      return overridingProps && overridingProps[id] && overridingProps[id].type || DefaultLayerClass;
    }
  }, {
    key: "getSubLayerRow",
    value: function getSubLayerRow(row, sourceObject, sourceObjectIndex) {
      row.__source = {
        parent: this,
        object: sourceObject,
        index: sourceObjectIndex
      };
      return row;
    }
  }, {
    key: "getSubLayerAccessor",
    value: function getSubLayerAccessor(accessor) {
      if (typeof accessor === 'function') {
        var objectInfo = {
          data: this.props.data,
          target: []
        };
        return function (x, i) {
          if (x.__source) {
            objectInfo.index = x.__source.index;
            return accessor(x.__source.object, objectInfo);
          }

          return accessor(x, i);
        };
      }

      return accessor;
    }
  }, {
    key: "getSubLayerProps",
    value: function getSubLayerProps(sublayerProps) {
      var _this$props = this.props,
          opacity = _this$props.opacity,
          pickable = _this$props.pickable,
          visible = _this$props.visible,
          parameters = _this$props.parameters,
          getPolygonOffset = _this$props.getPolygonOffset,
          highlightedObjectIndex = _this$props.highlightedObjectIndex,
          autoHighlight = _this$props.autoHighlight,
          highlightColor = _this$props.highlightColor,
          coordinateSystem = _this$props.coordinateSystem,
          coordinateOrigin = _this$props.coordinateOrigin,
          wrapLongitude = _this$props.wrapLongitude,
          positionFormat = _this$props.positionFormat,
          modelMatrix = _this$props.modelMatrix,
          extensions = _this$props.extensions,
          overridingProps = _this$props._subLayerProps;
      var newProps = {
        opacity: opacity,
        pickable: pickable,
        visible: visible,
        parameters: parameters,
        getPolygonOffset: getPolygonOffset,
        highlightedObjectIndex: highlightedObjectIndex,
        autoHighlight: autoHighlight,
        highlightColor: highlightColor,
        coordinateSystem: coordinateSystem,
        coordinateOrigin: coordinateOrigin,
        wrapLongitude: wrapLongitude,
        positionFormat: positionFormat,
        modelMatrix: modelMatrix,
        extensions: extensions
      };

      if (sublayerProps) {
        var overridingSublayerProps = overridingProps && overridingProps[sublayerProps.id];
        var overridingSublayerTriggers = overridingSublayerProps && overridingSublayerProps.updateTriggers;
        Object.assign(newProps, sublayerProps, overridingSublayerProps, {
          id: "".concat(this.props.id, "-").concat(sublayerProps.id),
          updateTriggers: Object.assign({
            all: this.props.updateTriggers.all
          }, sublayerProps.updateTriggers, overridingSublayerTriggers)
        });
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = extensions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var extension = _step.value;
          var passThroughProps = extension.getSubLayerProps.call(this, extension);
          Object.assign(newProps, passThroughProps, {
            updateTriggers: Object.assign(newProps.updateTriggers, passThroughProps.updateTriggers)
          });
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

      return newProps;
    }
  }, {
    key: "_getAttributeManager",
    value: function _getAttributeManager() {
      return null;
    }
  }, {
    key: "_renderLayers",
    value: function _renderLayers() {
      var subLayers = this.internalState.subLayers;

      if (subLayers && !this.needsUpdate()) {
        _log.default.log(3, "Composite layer reused subLayers ".concat(this), this.internalState.subLayers)();
      } else {
        subLayers = this.renderLayers();
        subLayers = (0, _flatten.flatten)(subLayers, {
          filter: Boolean
        });
        this.internalState.subLayers = subLayers;

        _log.default.log(2, "Composite layer rendered new subLayers ".concat(this), subLayers)();
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = subLayers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var layer = _step2.value;
          layer.parent = this;
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
    key: "isComposite",
    get: function get() {
      return true;
    }
  }]);
  return CompositeLayer;
}(_layer.default);

exports.default = CompositeLayer;
CompositeLayer.layerName = 'CompositeLayer';
//# sourceMappingURL=composite-layer.js.map