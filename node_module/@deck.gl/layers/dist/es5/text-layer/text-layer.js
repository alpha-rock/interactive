"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _core = require("@deck.gl/core");

var _multiIconLayer = _interopRequireDefault(require("./multi-icon-layer/multi-icon-layer"));

var _fontAtlasManager = _interopRequireWildcard(require("./font-atlas-manager"));

var _utils = require("../utils");

var _utils2 = require("./utils");

var DEFAULT_FONT_SETTINGS = {
  fontSize: _fontAtlasManager.DEFAULT_FONT_SIZE,
  buffer: _fontAtlasManager.DEFAULT_BUFFER,
  sdf: false,
  radius: _fontAtlasManager.DEFAULT_RADIUS,
  cutoff: _fontAtlasManager.DEFAULT_CUTOFF
};
var TEXT_ANCHOR = {
  start: 1,
  middle: 0,
  end: -1
};
var ALIGNMENT_BASELINE = {
  top: 1,
  center: 0,
  bottom: -1
};
var DEFAULT_COLOR = [0, 0, 0, 255];
var DEFAULT_LINE_HEIGHT = 1.0;
var FONT_SETTINGS_PROPS = ['fontSize', 'buffer', 'sdf', 'radius', 'cutoff'];
var defaultProps = {
  billboard: true,
  sizeScale: 1,
  sizeUnits: 'pixels',
  sizeMinPixels: 0,
  sizeMaxPixels: Number.MAX_SAFE_INTEGER,
  characterSet: _fontAtlasManager.DEFAULT_CHAR_SET,
  fontFamily: _fontAtlasManager.DEFAULT_FONT_FAMILY,
  fontWeight: _fontAtlasManager.DEFAULT_FONT_WEIGHT,
  lineHeight: DEFAULT_LINE_HEIGHT,
  fontSettings: {},
  getText: {
    type: 'accessor',
    value: function value(x) {
      return x.text;
    }
  },
  getPosition: {
    type: 'accessor',
    value: function value(x) {
      return x.position;
    }
  },
  getColor: {
    type: 'accessor',
    value: DEFAULT_COLOR
  },
  getSize: {
    type: 'accessor',
    value: 32
  },
  getAngle: {
    type: 'accessor',
    value: 0
  },
  getTextAnchor: {
    type: 'accessor',
    value: 'middle'
  },
  getAlignmentBaseline: {
    type: 'accessor',
    value: 'center'
  },
  getPixelOffset: {
    type: 'accessor',
    value: [0, 0]
  }
};

var TextLayer = function (_CompositeLayer) {
  (0, _inherits2.default)(TextLayer, _CompositeLayer);

  function TextLayer() {
    (0, _classCallCheck2.default)(this, TextLayer);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TextLayer).apply(this, arguments));
  }

  (0, _createClass2.default)(TextLayer, [{
    key: "initializeState",
    value: function initializeState() {
      this.state = {
        fontAtlasManager: new _fontAtlasManager.default(this.context.gl)
      };
    }
  }, {
    key: "updateState",
    value: function updateState(_ref) {
      var _this = this;

      var props = _ref.props,
          oldProps = _ref.oldProps,
          changeFlags = _ref.changeFlags;
      var fontChanged = this.fontChanged(oldProps, props);

      if (fontChanged) {
        this.updateFontAtlas({
          oldProps: oldProps,
          props: props
        });
      }

      var textChanged = changeFlags.dataChanged || fontChanged || props.lineHeight !== oldProps.lineHeight || changeFlags.updateTriggersChanged && (changeFlags.updateTriggersChanged.all || changeFlags.updateTriggersChanged.getText);

      if (textChanged && Array.isArray(changeFlags.dataChanged)) {
        var data = this.state.data.slice();
        var dataDiff = changeFlags.dataChanged.map(function (dataRange) {
          return (0, _utils.replaceInRange)({
            data: data,
            getIndex: function getIndex(p) {
              return p.__source.index;
            },
            dataRange: dataRange,
            replace: _this.transformStringToLetters(dataRange)
          });
        });
        this.setState({
          data: data,
          dataDiff: dataDiff
        });
      } else if (textChanged) {
        this.setState({
          data: this.transformStringToLetters(),
          dataDiff: null
        });
      }
    }
  }, {
    key: "finalizeState",
    value: function finalizeState() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(TextLayer.prototype), "finalizeState", this).call(this);
      this.state.fontAtlasManager.finalize();
    }
  }, {
    key: "updateFontAtlas",
    value: function updateFontAtlas(_ref2) {
      var oldProps = _ref2.oldProps,
          props = _ref2.props;
      var characterSet = props.characterSet,
          fontSettings = props.fontSettings,
          fontFamily = props.fontFamily,
          fontWeight = props.fontWeight;
      var fontAtlasManager = this.state.fontAtlasManager;
      fontAtlasManager.setProps(Object.assign({}, DEFAULT_FONT_SETTINGS, fontSettings, {
        characterSet: characterSet,
        fontFamily: fontFamily,
        fontWeight: fontWeight
      }));
      var scale = fontAtlasManager.scale,
          texture = fontAtlasManager.texture,
          mapping = fontAtlasManager.mapping;
      this.setState({
        scale: scale,
        iconAtlas: texture,
        iconMapping: mapping
      });
      this.setNeedsRedraw(true);
    }
  }, {
    key: "fontChanged",
    value: function fontChanged(oldProps, props) {
      if (oldProps.fontFamily !== props.fontFamily || oldProps.characterSet !== props.characterSet || oldProps.fontWeight !== props.fontWeight) {
        return true;
      }

      if (oldProps.fontSettings === props.fontSettings) {
        return false;
      }

      var oldFontSettings = oldProps.fontSettings || {};
      var fontSettings = props.fontSettings || {};
      return FONT_SETTINGS_PROPS.some(function (prop) {
        return oldFontSettings[prop] !== fontSettings[prop];
      });
    }
  }, {
    key: "getPickingInfo",
    value: function getPickingInfo(_ref3) {
      var info = _ref3.info;
      return Object.assign(info, {
        object: info.index >= 0 ? this.props.data[info.index] : null
      });
    }
  }, {
    key: "transformStringToLetters",
    value: function transformStringToLetters() {
      var _this2 = this;

      var dataRange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$props = this.props,
          data = _this$props.data,
          lineHeight = _this$props.lineHeight,
          getText = _this$props.getText;
      var iconMapping = this.state.iconMapping;
      var startRow = dataRange.startRow,
          endRow = dataRange.endRow;

      var _createIterable = (0, _core.createIterable)(data, startRow, endRow),
          iterable = _createIterable.iterable,
          objectInfo = _createIterable.objectInfo;

      var transformedData = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var object = _step.value;

          var transformCharacter = function transformCharacter(transformed) {
            return _this2.getSubLayerRow(transformed, object, objectInfo.index);
          };

          objectInfo.index++;
          var text = getText(object, objectInfo);

          if (text) {
            (0, _utils2.transformParagraph)(text, lineHeight, iconMapping, transformCharacter, transformedData);
          }
        };

        for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
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

      return transformedData;
    }
  }, {
    key: "getAnchorXFromTextAnchor",
    value: function getAnchorXFromTextAnchor(getTextAnchor) {
      if (typeof getTextAnchor === 'function') {
        getTextAnchor = this.getSubLayerAccessor(getTextAnchor);
        return function (x) {
          return TEXT_ANCHOR[getTextAnchor(x)] || 0;
        };
      }

      return function () {
        return TEXT_ANCHOR[getTextAnchor] || 0;
      };
    }
  }, {
    key: "getAnchorYFromAlignmentBaseline",
    value: function getAnchorYFromAlignmentBaseline(getAlignmentBaseline) {
      if (typeof getAlignmentBaseline === 'function') {
        getAlignmentBaseline = this.getSubLayerAccessor(getAlignmentBaseline);
        return function (x) {
          return TEXT_ANCHOR[getAlignmentBaseline(x)] || 0;
        };
      }

      return function () {
        return ALIGNMENT_BASELINE[getAlignmentBaseline] || 0;
      };
    }
  }, {
    key: "renderLayers",
    value: function renderLayers() {
      var _this$state = this.state,
          data = _this$state.data,
          dataDiff = _this$state.dataDiff,
          scale = _this$state.scale,
          iconAtlas = _this$state.iconAtlas,
          iconMapping = _this$state.iconMapping;
      var _this$props2 = this.props,
          getPosition = _this$props2.getPosition,
          getColor = _this$props2.getColor,
          getSize = _this$props2.getSize,
          getAngle = _this$props2.getAngle,
          getTextAnchor = _this$props2.getTextAnchor,
          getAlignmentBaseline = _this$props2.getAlignmentBaseline,
          getPixelOffset = _this$props2.getPixelOffset,
          billboard = _this$props2.billboard,
          sdf = _this$props2.sdf,
          sizeScale = _this$props2.sizeScale,
          sizeUnits = _this$props2.sizeUnits,
          sizeMinPixels = _this$props2.sizeMinPixels,
          sizeMaxPixels = _this$props2.sizeMaxPixels,
          transitions = _this$props2.transitions,
          updateTriggers = _this$props2.updateTriggers;
      var SubLayerClass = this.getSubLayerClass('characters', _multiIconLayer.default);
      return new SubLayerClass({
        sdf: sdf,
        iconAtlas: iconAtlas,
        iconMapping: iconMapping,
        _dataDiff: dataDiff && function () {
          return dataDiff;
        },
        getPosition: this.getSubLayerAccessor(getPosition),
        getColor: this.getSubLayerAccessor(getColor),
        getSize: this.getSubLayerAccessor(getSize),
        getAngle: this.getSubLayerAccessor(getAngle),
        getAnchorX: this.getAnchorXFromTextAnchor(getTextAnchor),
        getAnchorY: this.getAnchorYFromAlignmentBaseline(getAlignmentBaseline),
        getPixelOffset: this.getSubLayerAccessor(getPixelOffset),
        getPickingIndex: function getPickingIndex(obj) {
          return obj.__source.index;
        },
        billboard: billboard,
        sizeScale: sizeScale * scale,
        sizeUnits: sizeUnits,
        sizeMinPixels: sizeMinPixels * scale,
        sizeMaxPixels: sizeMaxPixels * scale,
        transitions: transitions && {
          getPosition: transitions.getPosition,
          getAngle: transitions.getAngle,
          getColor: transitions.getColor,
          getSize: transitions.getSize,
          getPixelOffset: updateTriggers.getPixelOffset
        }
      }, this.getSubLayerProps({
        id: 'characters',
        updateTriggers: {
          getPosition: updateTriggers.getPosition,
          getAngle: updateTriggers.getAngle,
          getColor: updateTriggers.getColor,
          getSize: updateTriggers.getSize,
          getPixelOffset: updateTriggers.getPixelOffset,
          getAnchorX: updateTriggers.getTextAnchor,
          getAnchorY: updateTriggers.getAlignmentBaseline
        }
      }), {
        data: data,
        getIcon: function getIcon(d) {
          return d.text;
        },
        getRowSize: function getRowSize(d) {
          return d.rowSize;
        },
        getOffsets: function getOffsets(d) {
          return [d.offsetLeft, d.offsetTop];
        },
        getParagraphSize: function getParagraphSize(d) {
          return d.size;
        }
      });
    }
  }]);
  return TextLayer;
}(_core.CompositeLayer);

exports.default = TextLayer;
TextLayer.layerName = 'TextLayer';
TextLayer.defaultProps = defaultProps;
//# sourceMappingURL=text-layer.js.map