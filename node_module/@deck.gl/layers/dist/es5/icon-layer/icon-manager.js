"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildMapping = buildMapping;
exports.getDiffIcons = getDiffIcons;
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _core = require("@luma.gl/core");

var _images = require("@loaders.gl/images");

var _core2 = require("@deck.gl/core");

var _DEFAULT_TEXTURE_PARA;

var DEFAULT_CANVAS_WIDTH = 1024;
var DEFAULT_BUFFER = 4;

var noop = function noop() {};

var DEFAULT_TEXTURE_PARAMETERS = (_DEFAULT_TEXTURE_PARA = {}, (0, _defineProperty2.default)(_DEFAULT_TEXTURE_PARA, 10241, 9987), (0, _defineProperty2.default)(_DEFAULT_TEXTURE_PARA, 10240, 9729), _DEFAULT_TEXTURE_PARA);

function nextPowOfTwo(number) {
  return Math.pow(2, Math.ceil(Math.log2(number)));
}

function resizeImage(ctx, imageData, width, height) {
  var naturalWidth = imageData.naturalWidth,
      naturalHeight = imageData.naturalHeight;

  if (width === naturalWidth && height === naturalHeight) {
    return imageData;
  }

  ctx.canvas.height = height;
  ctx.canvas.width = width;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.drawImage(imageData, 0, 0, naturalWidth, naturalHeight, 0, 0, width, height);
  return ctx.canvas;
}

function getIconId(icon) {
  return icon && (icon.id || icon.url);
}

function buildRowMapping(mapping, columns, yOffset) {
  for (var i = 0; i < columns.length; i++) {
    var _columns$i = columns[i],
        icon = _columns$i.icon,
        xOffset = _columns$i.xOffset;
    var id = getIconId(icon);
    mapping[id] = Object.assign({}, icon, {
      x: xOffset,
      y: yOffset
    });
  }
}

function resizeTexture(texture, width, height) {
  var oldWidth = texture.width;
  var oldHeight = texture.height;
  var oldPixels = (0, _core.readPixelsToBuffer)(texture, {});
  texture.resize({
    width: width,
    height: height
  });
  texture.setSubImageData({
    data: oldPixels,
    x: 0,
    y: height - oldHeight,
    width: oldWidth,
    height: oldHeight,
    parameters: DEFAULT_TEXTURE_PARAMETERS
  });
  texture.generateMipmap();
  oldPixels.delete();
  return texture;
}

function buildMapping(_ref) {
  var icons = _ref.icons,
      buffer = _ref.buffer,
      _ref$mapping = _ref.mapping,
      mapping = _ref$mapping === void 0 ? {} : _ref$mapping,
      _ref$xOffset = _ref.xOffset,
      xOffset = _ref$xOffset === void 0 ? 0 : _ref$xOffset,
      _ref$yOffset = _ref.yOffset,
      yOffset = _ref$yOffset === void 0 ? 0 : _ref$yOffset,
      canvasWidth = _ref.canvasWidth;
  var rowHeight = 0;
  var columns = [];

  for (var i = 0; i < icons.length; i++) {
    var icon = icons[i];
    var id = getIconId(icon);

    if (!mapping[id]) {
      var height = icon.height,
          width = icon.width;

      if (xOffset + width + buffer > canvasWidth) {
        buildRowMapping(mapping, columns, yOffset);
        xOffset = 0;
        yOffset = rowHeight + yOffset + buffer;
        rowHeight = 0;
        columns = [];
      }

      columns.push({
        icon: icon,
        xOffset: xOffset
      });
      xOffset = xOffset + width + buffer;
      rowHeight = Math.max(rowHeight, height);
    }
  }

  if (columns.length > 0) {
    buildRowMapping(mapping, columns, yOffset);
  }

  return {
    mapping: mapping,
    xOffset: xOffset,
    yOffset: yOffset,
    canvasWidth: canvasWidth,
    canvasHeight: nextPowOfTwo(rowHeight + yOffset + buffer)
  };
}

function getDiffIcons(data, getIcon, cachedIcons) {
  if (!data || !getIcon) {
    return null;
  }

  cachedIcons = cachedIcons || {};
  var icons = {};

  var _createIterable = (0, _core2.createIterable)(data),
      iterable = _createIterable.iterable,
      objectInfo = _createIterable.objectInfo;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var object = _step.value;
      objectInfo.index++;
      var icon = getIcon(object, objectInfo);
      var id = getIconId(icon);

      if (!icon) {
        throw new Error('Icon is missing.');
      }

      if (!icon.url) {
        throw new Error('Icon url is missing.');
      }

      if (!icons[id] && (!cachedIcons[id] || icon.url !== cachedIcons[id].url)) {
        icons[id] = icon;
      }
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

  return icons;
}

var IconManager = function () {
  function IconManager(gl, _ref2) {
    var _ref2$onUpdate = _ref2.onUpdate,
        onUpdate = _ref2$onUpdate === void 0 ? noop : _ref2$onUpdate;
    (0, _classCallCheck2.default)(this, IconManager);
    this.gl = gl;
    this.onUpdate = onUpdate;
    this._getIcon = null;
    this._texture = null;
    this._externalTexture = null;
    this._mapping = {};
    this._autoPacking = false;
    this._xOffset = 0;
    this._yOffset = 0;
    this._buffer = DEFAULT_BUFFER;
    this._canvasWidth = DEFAULT_CANVAS_WIDTH;
    this._canvasHeight = 0;
    this._canvas = null;
  }

  (0, _createClass2.default)(IconManager, [{
    key: "finalize",
    value: function finalize() {
      if (this._texture) {
        this._texture.delete();
      }
    }
  }, {
    key: "getTexture",
    value: function getTexture() {
      return this._texture || this._externalTexture;
    }
  }, {
    key: "getIconMapping",
    value: function getIconMapping(object, objectInfo) {
      var icon = this._getIcon(object, objectInfo);

      var id = this._autoPacking ? getIconId(icon) : icon;
      return this._mapping[id] || {};
    }
  }, {
    key: "setProps",
    value: function setProps(_ref3) {
      var autoPacking = _ref3.autoPacking,
          iconAtlas = _ref3.iconAtlas,
          iconMapping = _ref3.iconMapping,
          data = _ref3.data,
          getIcon = _ref3.getIcon;

      if (autoPacking !== undefined) {
        this._autoPacking = autoPacking;
      }

      if (getIcon) {
        this._getIcon = getIcon;
      }

      if (iconMapping) {
        this._mapping = iconMapping;
      }

      if (iconAtlas) {
        this._updateIconAtlas(iconAtlas);
      }

      if (this._autoPacking && (data || getIcon) && typeof document !== 'undefined') {
        this._canvas = this._canvas || document.createElement('canvas');

        this._updateAutoPacking(data);
      }
    }
  }, {
    key: "_updateIconAtlas",
    value: function _updateIconAtlas(iconAtlas) {
      if (this._texture) {
        this._texture.delete();

        this._texture = null;
      }

      if (iconAtlas instanceof _core.Texture2D) {
        iconAtlas.setParameters(DEFAULT_TEXTURE_PARAMETERS);
        this._externalTexture = iconAtlas;
        this.onUpdate();
      } else if (iconAtlas) {
        this._texture = new _core.Texture2D(this.gl, {
          data: iconAtlas,
          parameters: DEFAULT_TEXTURE_PARAMETERS
        });
        this.onUpdate();
      }
    }
  }, {
    key: "_updateAutoPacking",
    value: function _updateAutoPacking(data) {
      var icons = Object.values(getDiffIcons(data, this._getIcon, this._mapping) || {});

      if (icons.length > 0) {
        var _buildMapping = buildMapping({
          icons: icons,
          buffer: this._buffer,
          canvasWidth: this._canvasWidth,
          mapping: this._mapping,
          xOffset: this._xOffset,
          yOffset: this._yOffset
        }),
            mapping = _buildMapping.mapping,
            xOffset = _buildMapping.xOffset,
            yOffset = _buildMapping.yOffset,
            canvasHeight = _buildMapping.canvasHeight;

        this._mapping = mapping;
        this._xOffset = xOffset;
        this._yOffset = yOffset;
        this._canvasHeight = canvasHeight;

        if (!this._texture) {
          this._texture = new _core.Texture2D(this.gl, {
            width: this._canvasWidth,
            height: this._canvasHeight,
            parameters: DEFAULT_TEXTURE_PARAMETERS
          });
        }

        if (this._texture.height !== this._canvasHeight) {
          resizeTexture(this._texture, this._canvasWidth, this._canvasHeight);
        }

        this.onUpdate();

        this._loadIcons(icons);
      }
    }
  }, {
    key: "_loadIcons",
    value: function _loadIcons(icons) {
      var _this = this;

      var ctx = this._canvas.getContext('2d');

      var canvasHeight = this._texture.height;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        var _loop = function _loop() {
          var icon = _step2.value;
          (0, _images.loadImage)(icon.url).then(function (imageData) {
            var id = getIconId(icon);
            var _this$_mapping$id = _this._mapping[id],
                x = _this$_mapping$id.x,
                y = _this$_mapping$id.y,
                width = _this$_mapping$id.width,
                height = _this$_mapping$id.height;
            var data = resizeImage(ctx, imageData, width, height);

            _this._texture.setSubImageData({
              data: data,
              x: x,
              y: canvasHeight - y - height,
              width: width,
              height: height,
              parameters: Object.assign({}, DEFAULT_TEXTURE_PARAMETERS, (0, _defineProperty2.default)({}, 37440, true))
            });

            _this._texture.generateMipmap();

            _this.onUpdate();
          });
        };

        for (var _iterator2 = icons[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          _loop();
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
  return IconManager;
}();

exports.default = IconManager;
//# sourceMappingURL=icon-manager.js.map