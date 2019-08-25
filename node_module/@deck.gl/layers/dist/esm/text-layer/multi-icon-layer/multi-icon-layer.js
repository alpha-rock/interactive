import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _get from "@babel/runtime/helpers/esm/get";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { createIterable } from '@deck.gl/core';
import IconLayer from '../../icon-layer/icon-layer';
import vs from './multi-icon-layer-vertex.glsl';
import fs from './multi-icon-layer-fragment.glsl';
var DEFAULT_GAMMA = 0.2;
var DEFAULT_BUFFER = 192.0 / 256;
var defaultProps = {
  getRowSize: {
    type: 'accessor',
    value: function value(x) {
      return x.rowSize || [0, 0];
    }
  },
  getOffsets: {
    type: 'accessor',
    value: function value(x) {
      return x.offsets || [0, 0];
    }
  },
  getParagraphSize: {
    type: 'accessor',
    value: function value(x) {
      return x.size || [1, 1];
    }
  },
  getAnchorX: {
    type: 'accessor',
    value: function value(x) {
      return x.anchorX || 0;
    }
  },
  getAnchorY: {
    type: 'accessor',
    value: function value(x) {
      return x.anchorY || 0;
    }
  },
  getPixelOffset: {
    type: 'accessor',
    value: [0, 0]
  },
  getPickingIndex: {
    type: 'accessor',
    value: function value(x) {
      return x.objectIndex;
    }
  }
};

var MultiIconLayer = function (_IconLayer) {
  _inherits(MultiIconLayer, _IconLayer);

  function MultiIconLayer() {
    _classCallCheck(this, MultiIconLayer);

    return _possibleConstructorReturn(this, _getPrototypeOf(MultiIconLayer).apply(this, arguments));
  }

  _createClass(MultiIconLayer, [{
    key: "getShaders",
    value: function getShaders() {
      return Object.assign({}, _get(_getPrototypeOf(MultiIconLayer.prototype), "getShaders", this).call(this), {
        vs: vs,
        fs: fs
      });
    }
  }, {
    key: "initializeState",
    value: function initializeState() {
      _get(_getPrototypeOf(MultiIconLayer.prototype), "initializeState", this).call(this);

      var attributeManager = this.getAttributeManager();
      attributeManager.addInstanced({
        instancePixelOffset: {
          size: 2,
          transition: true,
          accessor: 'getPixelOffset'
        }
      });
    }
  }, {
    key: "updateState",
    value: function updateState(updateParams) {
      _get(_getPrototypeOf(MultiIconLayer.prototype), "updateState", this).call(this, updateParams);

      var changeFlags = updateParams.changeFlags;

      if (changeFlags.updateTriggersChanged && (changeFlags.updateTriggersChanged.getAnchorX || changeFlags.updateTriggersChanged.getAnchorY)) {
        this.getAttributeManager().invalidate('instanceOffsets');
      }
    }
  }, {
    key: "draw",
    value: function draw(_ref) {
      var uniforms = _ref.uniforms;
      var sdf = this.props.sdf;

      _get(_getPrototypeOf(MultiIconLayer.prototype), "draw", this).call(this, {
        uniforms: Object.assign({}, uniforms, {
          buffer: DEFAULT_BUFFER,
          gamma: DEFAULT_GAMMA,
          sdf: Boolean(sdf)
        })
      });
    }
  }, {
    key: "calculateInstanceOffsets",
    value: function calculateInstanceOffsets(attribute, _ref2) {
      var startRow = _ref2.startRow,
          endRow = _ref2.endRow;
      var _this$props = this.props,
          data = _this$props.data,
          iconMapping = _this$props.iconMapping,
          getIcon = _this$props.getIcon,
          getAnchorX = _this$props.getAnchorX,
          getAnchorY = _this$props.getAnchorY,
          getParagraphSize = _this$props.getParagraphSize,
          getRowSize = _this$props.getRowSize,
          getOffsets = _this$props.getOffsets;
      var value = attribute.value,
          size = attribute.size;
      var i = startRow * size;

      var _createIterable = createIterable(data, startRow, endRow),
          iterable = _createIterable.iterable;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var object = _step.value;
          var icon = getIcon(object);
          var rect = iconMapping[icon] || {};

          var _getParagraphSize = getParagraphSize(object),
              _getParagraphSize2 = _slicedToArray(_getParagraphSize, 2),
              width = _getParagraphSize2[0],
              height = _getParagraphSize2[1];

          var _getRowSize = getRowSize(object),
              _getRowSize2 = _slicedToArray(_getRowSize, 1),
              rowWidth = _getRowSize2[0];

          var _getOffsets = getOffsets(object),
              _getOffsets2 = _slicedToArray(_getOffsets, 2),
              offsetX = _getOffsets2[0],
              offsetY = _getOffsets2[1];

          var anchorX = getAnchorX(object);
          var anchorY = getAnchorY(object);
          var rowOffset = (1 - anchorX) * (width - rowWidth) / 2;
          value[i++] = (anchorX - 1) * width / 2 + rowOffset + rect.width / 2 + offsetX || 0;
          value[i++] = (anchorY - 1) * height / 2 + rect.height / 2 + offsetY || 0;
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
    }
  }, {
    key: "calculateInstancePickingColors",
    value: function calculateInstancePickingColors(attribute, _ref3) {
      var startRow = _ref3.startRow,
          endRow = _ref3.endRow;
      var _this$props2 = this.props,
          data = _this$props2.data,
          getPickingIndex = _this$props2.getPickingIndex;
      var value = attribute.value,
          size = attribute.size;
      var i = startRow * size;
      var pickingColor = [];

      var _createIterable2 = createIterable(data, startRow, endRow),
          iterable = _createIterable2.iterable;

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = iterable[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var point = _step2.value;
          var index = getPickingIndex(point);
          this.encodePickingColor(index, pickingColor);
          value[i++] = pickingColor[0];
          value[i++] = pickingColor[1];
          value[i++] = pickingColor[2];
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
  }]);

  return MultiIconLayer;
}(IconLayer);

export { MultiIconLayer as default };
MultiIconLayer.layerName = 'MultiIconLayer';
MultiIconLayer.defaultProps = defaultProps;
//# sourceMappingURL=multi-icon-layer.js.map