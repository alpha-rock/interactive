"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _heatmapLayerUtils = require("./heatmap-layer-utils");

var _core = require("@luma.gl/core");

var _core2 = require("@deck.gl/core");

var _triangleLayer = _interopRequireDefault(require("./triangle-layer"));

var _resourceUtils = require("../utils/resource-utils");

var _colorUtils = require("../utils/color-utils");

var _weightsVs = _interopRequireDefault(require("./weights-vs.glsl"));

var _weightsFs = _interopRequireDefault(require("./weights-fs.glsl"));

var _maxVs = _interopRequireDefault(require("./max-vs.glsl"));

var _TEXTURE_PARAMETERS;

var RESOLUTION = 2;
var SIZE_2K = 2048;
var ZOOM_DEBOUNCE = 500;
var TEXTURE_PARAMETERS = (_TEXTURE_PARAMETERS = {}, (0, _defineProperty2.default)(_TEXTURE_PARAMETERS, 10240, 9729), (0, _defineProperty2.default)(_TEXTURE_PARAMETERS, 10241, 9729), (0, _defineProperty2.default)(_TEXTURE_PARAMETERS, 10242, 33071), (0, _defineProperty2.default)(_TEXTURE_PARAMETERS, 10243, 33071), _TEXTURE_PARAMETERS);
var defaultProps = {
  getPosition: {
    type: 'accessor',
    value: function value(x) {
      return x.position;
    }
  },
  getWeight: {
    type: 'accessor',
    value: 1
  },
  intensity: {
    type: 'number',
    min: 0,
    value: 1
  },
  radiusPixels: {
    type: 'number',
    min: 1,
    max: 100,
    value: 30
  },
  colorRange: _colorUtils.defaultColorRange,
  threshold: {
    type: 'number',
    min: 0,
    max: 1,
    value: 0.05
  }
};

var HeatmapLayer = function (_CompositeLayer) {
  (0, _inherits2.default)(HeatmapLayer, _CompositeLayer);

  function HeatmapLayer() {
    (0, _classCallCheck2.default)(this, HeatmapLayer);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(HeatmapLayer).apply(this, arguments));
  }

  (0, _createClass2.default)(HeatmapLayer, [{
    key: "initializeState",
    value: function initializeState() {
      var gl = this.context.gl;
      var textureSize = Math.min(SIZE_2K, (0, _core.getParameter)(gl, 3379));
      this.state = {
        textureSize: textureSize,
        supported: true
      };

      if (!(0, _core.isWebGL2)(gl)) {
        _core2.log.error("HeatmapLayer ".concat(this.id, " is not supported on this browser, requires WebGL2"))();

        this.setState({
          supported: false
        });
        return;
      }

      this._setupAttributes();

      this._setupResources();
    }
  }, {
    key: "shouldUpdateState",
    value: function shouldUpdateState(_ref) {
      var changeFlags = _ref.changeFlags;
      return changeFlags.somethingChanged;
    }
  }, {
    key: "updateState",
    value: function updateState(opts) {
      if (!this.state.supported) {
        return;
      }

      (0, _get2.default)((0, _getPrototypeOf2.default)(HeatmapLayer.prototype), "updateState", this).call(this, opts);
      var props = opts.props,
          oldProps = opts.oldProps;

      var changeFlags = this._getChangeFlags(opts);

      if (changeFlags.viewportChanged) {
        changeFlags.boundsChanged = this._updateBounds();
      }

      if (changeFlags.dataChanged || changeFlags.boundsChanged || changeFlags.uniformsChanged) {
        this._updateWeightmap();
      } else if (changeFlags.viewportZoomChanged) {
        this._debouncedUpdateWeightmap();
      }

      if (props.colorRange !== oldProps.colorRange) {
        this._updateColorTexture(opts);
      }

      if (changeFlags.viewportChanged) {
        this._updateTextureRenderingBounds();
      }

      this.setState({
        zoom: opts.context.viewport.zoom
      });
    }
  }, {
    key: "renderLayers",
    value: function renderLayers() {
      if (!this.state.supported) {
        return [];
      }

      var _this$state = this.state,
          weightsTexture = _this$state.weightsTexture,
          triPositionBuffer = _this$state.triPositionBuffer,
          triTexCoordBuffer = _this$state.triTexCoordBuffer,
          maxWeightsTexture = _this$state.maxWeightsTexture,
          colorTexture = _this$state.colorTexture;
      var _this$props = this.props,
          updateTriggers = _this$props.updateTriggers,
          intensity = _this$props.intensity,
          threshold = _this$props.threshold;
      return new _triangleLayer.default(this.getSubLayerProps({
        id: "".concat(this.id, "-triangle-layer"),
        updateTriggers: updateTriggers
      }), {
        id: 'heatmap-triangle-layer',
        data: {
          attributes: {
            positions: triPositionBuffer,
            texCoords: triTexCoordBuffer
          }
        },
        vertexCount: 4,
        maxTexture: maxWeightsTexture,
        colorTexture: colorTexture,
        texture: weightsTexture,
        intensity: intensity,
        threshold: threshold
      });
    }
  }, {
    key: "finalizeState",
    value: function finalizeState() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(HeatmapLayer.prototype), "finalizeState", this).call(this);
      var _this$state2 = this.state,
          weightsTransform = _this$state2.weightsTransform,
          weightsTexture = _this$state2.weightsTexture,
          maxWeightTransform = _this$state2.maxWeightTransform,
          maxWeightsTexture = _this$state2.maxWeightsTexture,
          triPositionBuffer = _this$state2.triPositionBuffer,
          triTexCoordBuffer = _this$state2.triTexCoordBuffer,
          colorTexture = _this$state2.colorTexture;
      weightsTransform && weightsTransform.delete();
      weightsTexture && weightsTexture.delete();
      maxWeightTransform && maxWeightTransform.delete();
      maxWeightsTexture && maxWeightsTexture.delete();
      triPositionBuffer && triPositionBuffer.delete();
      triTexCoordBuffer && triTexCoordBuffer.delete();
      colorTexture && colorTexture.delete();
    }
  }, {
    key: "_getAttributeManager",
    value: function _getAttributeManager() {
      return new _core2.AttributeManager(this.context.gl, {
        id: this.props.id,
        stats: this.context.stats
      });
    }
  }, {
    key: "_getChangeFlags",
    value: function _getChangeFlags(opts) {
      var oldProps = opts.oldProps,
          props = opts.props;
      var changeFlags = {};

      if (this._isDataChanged(opts)) {
        changeFlags.dataChanged = true;
      }

      if (oldProps.radiusPixels !== props.radiusPixels) {
        changeFlags.uniformsChanged = true;
      }

      changeFlags.viewportChanged = opts.changeFlags.viewportChanged;
      var zoom = this.state.zoom;

      if (!opts.context.viewport || opts.context.viewport.zoom !== zoom) {
        changeFlags.viewportZoomChanged = true;
      }

      return changeFlags;
    }
  }, {
    key: "_isDataChanged",
    value: function _isDataChanged(_ref2) {
      var changeFlags = _ref2.changeFlags;

      if (changeFlags.dataChanged) {
        return true;
      }

      if (changeFlags.updateTriggersChanged && (changeFlags.updateTriggersChanged.all || changeFlags.updateTriggersChanged.getPosition || changeFlags.updateTriggersChanged.getWeight)) {
        return true;
      }

      return false;
    }
  }, {
    key: "_setupAttributes",
    value: function _setupAttributes() {
      var attributeManager = this.getAttributeManager();
      attributeManager.add({
        positions: {
          size: 3,
          accessor: 'getPosition'
        },
        weights: {
          size: 1,
          accessor: 'getWeight'
        }
      });
    }
  }, {
    key: "_setupResources",
    value: function _setupResources() {
      var gl = this.context.gl;
      var textureSize = this.state.textureSize;
      var weightsTexture = (0, _resourceUtils.getFloatTexture)(gl, {
        width: textureSize,
        height: textureSize,
        parameters: TEXTURE_PARAMETERS
      });
      var maxWeightsTexture = (0, _resourceUtils.getFloatTexture)(gl);
      var weightsTransform = new _core.Transform(gl, {
        id: "".concat(this.id, "-weights-transform"),
        vs: _weightsVs.default,
        _fs: _weightsFs.default,
        modules: ['project32'],
        elementCount: 1,
        _targetTexture: weightsTexture,
        _targetTextureVarying: 'weightsTexture'
      });
      this.setState({
        weightsTexture: weightsTexture,
        maxWeightsTexture: maxWeightsTexture,
        weightsTransform: weightsTransform,
        model: weightsTransform.model,
        maxWeightTransform: new _core.Transform(gl, {
          id: "".concat(this.id, "-max-weights-transform"),
          _sourceTextures: {
            inTexture: weightsTexture
          },
          _targetTexture: maxWeightsTexture,
          _targetTextureVarying: 'outTexture',
          vs: _maxVs.default,
          elementCount: textureSize * textureSize
        }),
        zoom: null,
        triPositionBuffer: new _core.Buffer(gl, {
          byteLength: 48,
          accessor: {
            size: 3
          }
        }),
        triTexCoordBuffer: new _core.Buffer(gl, {
          byteLength: 48,
          accessor: {
            size: 2
          }
        })
      });
    }
  }, {
    key: "_updateMaxWeightValue",
    value: function _updateMaxWeightValue() {
      var maxWeightTransform = this.state.maxWeightTransform;
      maxWeightTransform.run({
        parameters: {
          blend: true,
          depthTest: false,
          blendFunc: [1, 1],
          blendEquation: 32776
        }
      });
    }
  }, {
    key: "_updateBounds",
    value: function _updateBounds() {
      var forceUpdate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var textureSize = this.state.textureSize;
      var viewport = this.context.viewport;
      var viewportCorners = [viewport.unproject([0, 0]), viewport.unproject([viewport.width, 0]), viewport.unproject([viewport.width, viewport.height]), viewport.unproject([0, viewport.height])];
      var visibleWorldBounds = (0, _heatmapLayerUtils.getBounds)(viewportCorners);

      var visibleCommonBounds = this._worldToCommonBounds(visibleWorldBounds);

      var newState = {
        visibleWorldBounds: visibleWorldBounds,
        viewportCorners: viewportCorners
      };
      var boundsChanged = false;

      if (forceUpdate || !this.state.worldBounds || !(0, _heatmapLayerUtils.boundsContain)(this.state.worldBounds, visibleWorldBounds)) {
        var scaledCommonBounds = (0, _heatmapLayerUtils.scaleToAspectRatio)(visibleCommonBounds, textureSize * RESOLUTION, textureSize * RESOLUTION);

        var worldBounds = this._commonToWorldBounds(scaledCommonBounds);

        if (this.props.coordinateSystem === _core2.COORDINATE_SYSTEM.LNGLAT) {
          worldBounds[1] = Math.max(worldBounds[1], -85.051129);
          worldBounds[3] = Math.min(worldBounds[3], 85.051129);
          worldBounds[0] = Math.max(worldBounds[0], -360);
          worldBounds[2] = Math.min(worldBounds[2], 360);
        }

        var normalizedCommonBounds = this._worldToCommonBounds(worldBounds, {
          scaleToAspect: true,
          normalize: true,
          width: textureSize * RESOLUTION,
          height: textureSize * RESOLUTION
        });

        newState.worldBounds = worldBounds;
        newState.normalizedCommonBounds = normalizedCommonBounds;
        boundsChanged = true;
      }

      this.setState(newState);
      return boundsChanged;
    }
  }, {
    key: "_updateTextureRenderingBounds",
    value: function _updateTextureRenderingBounds() {
      var _this$state3 = this.state,
          triPositionBuffer = _this$state3.triPositionBuffer,
          triTexCoordBuffer = _this$state3.triTexCoordBuffer,
          normalizedCommonBounds = _this$state3.normalizedCommonBounds,
          viewportCorners = _this$state3.viewportCorners;
      var viewport = this.context.viewport;
      var commonBounds = normalizedCommonBounds.map(function (x) {
        return x * viewport.scale;
      });
      triPositionBuffer.subData((0, _heatmapLayerUtils.packVertices)(viewportCorners, 3));
      var textureBounds = viewportCorners.map(function (p) {
        return (0, _heatmapLayerUtils.getTextureCoordinates)(viewport.projectPosition(p), commonBounds);
      });
      triTexCoordBuffer.subData((0, _heatmapLayerUtils.packVertices)(textureBounds, 2));
    }
  }, {
    key: "_updateColorTexture",
    value: function _updateColorTexture(opts) {
      var colorRange = opts.props.colorRange;
      var colorTexture = this.state.colorTexture;
      var colors = (0, _colorUtils.colorRangeToFlatArray)(colorRange, true);

      if (colorTexture) {
        colorTexture.setImageData({
          data: colors,
          width: colorRange.length
        });
      } else {
        colorTexture = (0, _resourceUtils.getFloatTexture)(this.context.gl, {
          data: colors,
          width: colorRange.length,
          parameters: TEXTURE_PARAMETERS
        });
      }

      this.setState({
        colorTexture: colorTexture
      });
    }
  }, {
    key: "_updateWeightmap",
    value: function _updateWeightmap() {
      var radiusPixels = this.props.radiusPixels;
      var _this$state4 = this.state,
          weightsTransform = _this$state4.weightsTransform,
          worldBounds = _this$state4.worldBounds,
          textureSize = _this$state4.textureSize;

      this._updateAttributes(this.props);

      var moduleParameters = Object.assign(Object.create(this.props), {
        viewport: this.context.viewport,
        pickingActive: 0
      });

      var commonBounds = this._worldToCommonBounds(worldBounds, {
        useLayerCoordinateSystem: true,
        scaleToAspect: true,
        width: textureSize * RESOLUTION,
        height: textureSize * RESOLUTION
      });

      var uniforms = Object.assign({}, weightsTransform.model.getModuleUniforms(moduleParameters), {
        radiusPixels: radiusPixels,
        commonBounds: commonBounds,
        textureWidth: textureSize
      });
      weightsTransform.update({
        elementCount: this.getNumInstances()
      });
      weightsTransform.run({
        uniforms: uniforms,
        parameters: {
          blend: true,
          depthTest: false,
          blendFunc: [1, 1],
          blendEquation: 32774
        },
        clearRenderTarget: true
      });

      this._updateMaxWeightValue();

      this.setState({
        lastUpdate: Date.now()
      });
    }
  }, {
    key: "_debouncedUpdateWeightmap",
    value: function _debouncedUpdateWeightmap() {
      var fromTimer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var updateTimer = this.state.updateTimer;
      var timeSinceLastUpdate = Date.now() - this.state.lastUpdate;

      if (fromTimer) {
        updateTimer = null;
      }

      if (timeSinceLastUpdate >= ZOOM_DEBOUNCE) {
        this._updateBounds(true);

        this._updateWeightmap();

        this._updateTextureRenderingBounds();
      } else if (!updateTimer) {
        updateTimer = setTimeout(this._debouncedUpdateWeightmap.bind(this, true), ZOOM_DEBOUNCE - timeSinceLastUpdate);
      }

      this.setState({
        updateTimer: updateTimer
      });
    }
  }, {
    key: "_worldToCommonBounds",
    value: function _worldToCommonBounds(worldBounds) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _opts$useLayerCoordin = opts.useLayerCoordinateSystem,
          useLayerCoordinateSystem = _opts$useLayerCoordin === void 0 ? false : _opts$useLayerCoordin,
          _opts$scaleToAspect = opts.scaleToAspect,
          scaleToAspect = _opts$scaleToAspect === void 0 ? false : _opts$scaleToAspect,
          width = opts.width,
          height = opts.height;

      var _worldBounds = (0, _slicedToArray2.default)(worldBounds, 4),
          minLong = _worldBounds[0],
          minLat = _worldBounds[1],
          maxLong = _worldBounds[2],
          maxLat = _worldBounds[3];

      var viewport = this.context.viewport;
      var topLeftCommon;
      var bottomRightCommon;

      if (useLayerCoordinateSystem) {
        topLeftCommon = this.projectPosition([minLong, maxLat, 0]);
        bottomRightCommon = this.projectPosition([maxLong, minLat, 0]);
      } else {
        topLeftCommon = viewport.projectPosition([minLong, maxLat, 0]);
        bottomRightCommon = viewport.projectPosition([maxLong, minLat, 0]);
      }

      var commonBounds = topLeftCommon.slice(0, 2).concat(bottomRightCommon.slice(0, 2));

      if (scaleToAspect) {
        commonBounds = (0, _heatmapLayerUtils.scaleToAspectRatio)(commonBounds, width, height);
      }

      if (opts.normalize) {
        commonBounds = commonBounds.map(function (x) {
          return x / viewport.scale;
        });
      }

      return commonBounds;
    }
  }, {
    key: "_commonToWorldBounds",
    value: function _commonToWorldBounds(commonBounds) {
      var _commonBounds = (0, _slicedToArray2.default)(commonBounds, 4),
          xMin = _commonBounds[0],
          yMin = _commonBounds[1],
          xMax = _commonBounds[2],
          yMax = _commonBounds[3];

      var viewport = this.context.viewport;
      var topLeftWorld = viewport.unprojectPosition([xMin, yMax]);
      var bottomRightWorld = viewport.unprojectPosition([xMax, yMin]);
      return topLeftWorld.slice(0, 2).concat(bottomRightWorld.slice(0, 2));
    }
  }]);
  return HeatmapLayer;
}(_core2.CompositeLayer);

exports.default = HeatmapLayer;
HeatmapLayer.layerName = 'HeatmapLayer';
HeatmapLayer.defaultProps = defaultProps;
//# sourceMappingURL=heatmap-layer.js.map