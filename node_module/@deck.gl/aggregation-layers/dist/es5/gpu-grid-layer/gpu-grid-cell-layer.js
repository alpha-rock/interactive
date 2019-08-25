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

var _core = require("@deck.gl/core");

var _core2 = require("@luma.gl/core");

var _colorUtils = require("../utils/color-utils");

var _gpuGridCellLayerVertex = _interopRequireDefault(require("./gpu-grid-cell-layer-vertex.glsl"));

var _gpuGridCellLayerFragment = _interopRequireDefault(require("./gpu-grid-cell-layer-fragment.glsl"));

var defaultMaterial = new _core2.PhongMaterial();
var COLOR_DATA_UBO_INDEX = 0;
var ELEVATION_DATA_UBO_INDEX = 1;
var defaultProps = {
  colorDomain: null,
  colorRange: _colorUtils.defaultColorRange,
  elevationDomain: null,
  elevationRange: [0, 1000],
  elevationScale: {
    type: 'number',
    min: 0,
    value: 1
  },
  gridSize: {
    type: 'array',
    min: 0,
    value: [1, 1]
  },
  gridOrigin: {
    type: 'array',
    min: 0,
    value: [0, 0]
  },
  gridOffset: {
    type: 'array',
    min: 0,
    value: [0, 0]
  },
  cellSize: {
    type: 'number',
    min: 0,
    max: 1000,
    value: 1000
  },
  offset: {
    type: 'array',
    min: 0,
    value: [1, 1]
  },
  coverage: {
    type: 'number',
    min: 0,
    max: 1,
    value: 1
  },
  extruded: true,
  material: defaultMaterial
};

var GPUGridCellLayer = function (_Layer) {
  (0, _inherits2.default)(GPUGridCellLayer, _Layer);

  function GPUGridCellLayer() {
    (0, _classCallCheck2.default)(this, GPUGridCellLayer);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(GPUGridCellLayer).apply(this, arguments));
  }

  (0, _createClass2.default)(GPUGridCellLayer, [{
    key: "getShaders",
    value: function getShaders() {
      return (0, _get2.default)((0, _getPrototypeOf2.default)(GPUGridCellLayer.prototype), "getShaders", this).call(this, {
        vs: _gpuGridCellLayerVertex.default,
        fs: _gpuGridCellLayerFragment.default,
        modules: ['project32', 'gouraud-lighting', 'picking', _core2.fp64]
      });
    }
  }, {
    key: "initializeState",
    value: function initializeState() {
      var gl = this.context.gl;
      var attributeManager = this.getAttributeManager();
      attributeManager.addInstanced({
        colors: {
          size: 4,
          update: this.calculateColors,
          noAlloc: true
        },
        elevations: {
          size: 4,
          update: this.calculateElevations,
          noAlloc: true
        }
      });

      var model = this._getModel(gl);

      this._setupUniformBuffer(model);

      this.setState({
        model: model
      });
    }
  }, {
    key: "_getModel",
    value: function _getModel(gl) {
      return new _core2.Model(gl, Object.assign({}, this.getShaders(), {
        id: this.props.id,
        geometry: new _core2.CubeGeometry(),
        isInstanced: true,
        shaderCache: this.context.shaderCache
      }));
    }
  }, {
    key: "draw",
    value: function draw(_ref) {
      var uniforms = _ref.uniforms;
      var _this$props = this.props,
          data = _this$props.data,
          cellSize = _this$props.cellSize,
          offset = _this$props.offset,
          extruded = _this$props.extruded,
          elevationScale = _this$props.elevationScale,
          coverage = _this$props.coverage,
          gridSize = _this$props.gridSize,
          gridOrigin = _this$props.gridOrigin,
          gridOffset = _this$props.gridOffset,
          elevationRange = _this$props.elevationRange;
      var gridOriginLow = [(0, _core.fp64LowPart)(gridOrigin[0]), (0, _core.fp64LowPart)(gridOrigin[1])];
      var gridOffsetLow = [(0, _core.fp64LowPart)(gridOffset[0]), (0, _core.fp64LowPart)(gridOffset[1])];
      var domainUniforms = this.getDomainUniforms();
      var uniformBuffers = {
        colorMaxMinBuffer: data.color.maxMinBuffer,
        elevationMaxMinBuffer: data.elevation.maxMinBuffer
      };
      var colorRange = (0, _colorUtils.colorRangeToFlatArray)(this.props.colorRange);
      this.bindUniformBuffers(uniformBuffers);
      this.state.model.setUniforms(Object.assign({}, uniforms, domainUniforms, {
        cellSize: cellSize,
        offset: offset,
        extruded: extruded,
        elevationScale: elevationScale,
        coverage: coverage,
        gridSize: gridSize,
        gridOrigin: gridOrigin,
        gridOriginLow: gridOriginLow,
        gridOffset: gridOffset,
        gridOffsetLow: gridOffsetLow,
        colorRange: colorRange,
        elevationRange: elevationRange
      })).draw();
      this.unbindUniformBuffers(uniformBuffers);
    }
  }, {
    key: "bindUniformBuffers",
    value: function bindUniformBuffers(_ref2) {
      var colorMaxMinBuffer = _ref2.colorMaxMinBuffer,
          elevationMaxMinBuffer = _ref2.elevationMaxMinBuffer;
      colorMaxMinBuffer.bind({
        target: 35345,
        index: COLOR_DATA_UBO_INDEX
      });
      elevationMaxMinBuffer.bind({
        target: 35345,
        index: ELEVATION_DATA_UBO_INDEX
      });
    }
  }, {
    key: "unbindUniformBuffers",
    value: function unbindUniformBuffers(_ref3) {
      var colorMaxMinBuffer = _ref3.colorMaxMinBuffer,
          elevationMaxMinBuffer = _ref3.elevationMaxMinBuffer;
      colorMaxMinBuffer.unbind({
        target: 35345,
        index: COLOR_DATA_UBO_INDEX
      });
      elevationMaxMinBuffer.unbind({
        target: 35345,
        index: ELEVATION_DATA_UBO_INDEX
      });
    }
  }, {
    key: "calculateColors",
    value: function calculateColors(attribute) {
      var data = this.props.data;
      attribute.update({
        buffer: data.color.aggregationBuffer
      });
    }
  }, {
    key: "calculateElevations",
    value: function calculateElevations(attribute) {
      var data = this.props.data;
      attribute.update({
        buffer: data.elevation.aggregationBuffer
      });
    }
  }, {
    key: "getDomainUniforms",
    value: function getDomainUniforms() {
      var _this$props2 = this.props,
          colorDomain = _this$props2.colorDomain,
          elevationDomain = _this$props2.elevationDomain;
      var domainUniforms = {};

      if (colorDomain !== null) {
        domainUniforms.colorDomainValid = true;
        domainUniforms.colorDomain = colorDomain;
      } else {
        domainUniforms.colorDomainValid = false;
      }

      if (elevationDomain !== null) {
        domainUniforms.elevationDomainValid = true;
        domainUniforms.elevationDomain = elevationDomain;
      } else {
        domainUniforms.elevationDomainValid = false;
      }

      return domainUniforms;
    }
  }, {
    key: "_setupUniformBuffer",
    value: function _setupUniformBuffer(model) {
      var gl = this.context.gl;
      var programHandle = model.program.handle;
      var colorIndex = gl.getUniformBlockIndex(programHandle, 'ColorData');
      var elevationIndex = gl.getUniformBlockIndex(programHandle, 'ElevationData');
      gl.uniformBlockBinding(programHandle, colorIndex, COLOR_DATA_UBO_INDEX);
      gl.uniformBlockBinding(programHandle, elevationIndex, ELEVATION_DATA_UBO_INDEX);
    }
  }]);
  return GPUGridCellLayer;
}(_core.Layer);

exports.default = GPUGridCellLayer;
GPUGridCellLayer.layerName = 'GPUGridCellLayer';
GPUGridCellLayer.defaultProps = defaultProps;
//# sourceMappingURL=gpu-grid-cell-layer.js.map