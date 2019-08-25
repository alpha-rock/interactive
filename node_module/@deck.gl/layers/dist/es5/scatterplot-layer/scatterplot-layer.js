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

var _scatterplotLayerVertex = _interopRequireDefault(require("./scatterplot-layer-vertex.glsl"));

var _scatterplotLayerFragment = _interopRequireDefault(require("./scatterplot-layer-fragment.glsl"));

var DEFAULT_COLOR = [0, 0, 0, 255];
var defaultProps = {
  radiusScale: {
    type: 'number',
    min: 0,
    value: 1
  },
  radiusMinPixels: {
    type: 'number',
    min: 0,
    value: 0
  },
  radiusMaxPixels: {
    type: 'number',
    min: 0,
    value: Number.MAX_SAFE_INTEGER
  },
  lineWidthUnits: 'meters',
  lineWidthScale: {
    type: 'number',
    min: 0,
    value: 1
  },
  lineWidthMinPixels: {
    type: 'number',
    min: 0,
    value: 0
  },
  lineWidthMaxPixels: {
    type: 'number',
    min: 0,
    value: Number.MAX_SAFE_INTEGER
  },
  stroked: false,
  filled: true,
  getPosition: {
    type: 'accessor',
    value: function value(x) {
      return x.position;
    }
  },
  getRadius: {
    type: 'accessor',
    value: 1
  },
  getFillColor: {
    type: 'accessor',
    value: DEFAULT_COLOR
  },
  getLineColor: {
    type: 'accessor',
    value: DEFAULT_COLOR
  },
  getLineWidth: {
    type: 'accessor',
    value: 1
  },
  strokeWidth: {
    deprecatedFor: 'getLineWidth'
  },
  outline: {
    deprecatedFor: 'stroked'
  },
  getColor: {
    deprecatedFor: ['getFillColor', 'getLineColor']
  }
};

var ScatterplotLayer = function (_Layer) {
  (0, _inherits2.default)(ScatterplotLayer, _Layer);

  function ScatterplotLayer() {
    (0, _classCallCheck2.default)(this, ScatterplotLayer);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ScatterplotLayer).apply(this, arguments));
  }

  (0, _createClass2.default)(ScatterplotLayer, [{
    key: "getShaders",
    value: function getShaders(id) {
      return (0, _get2.default)((0, _getPrototypeOf2.default)(ScatterplotLayer.prototype), "getShaders", this).call(this, {
        vs: _scatterplotLayerVertex.default,
        fs: _scatterplotLayerFragment.default,
        modules: ['project32', 'picking']
      });
    }
  }, {
    key: "initializeState",
    value: function initializeState() {
      this.getAttributeManager().addInstanced({
        instancePositions: {
          size: 3,
          transition: true,
          accessor: 'getPosition'
        },
        instancePositions64xyLow: {
          size: 2,
          accessor: 'getPosition',
          update: this.calculateInstancePositions64xyLow
        },
        instanceRadius: {
          size: 1,
          transition: true,
          accessor: 'getRadius',
          defaultValue: 1
        },
        instanceFillColors: {
          size: this.props.colorFormat.length,
          transition: true,
          normalized: true,
          type: 5121,
          accessor: 'getFillColor',
          defaultValue: [0, 0, 0, 255]
        },
        instanceLineColors: {
          size: this.props.colorFormat.length,
          transition: true,
          normalized: true,
          type: 5121,
          accessor: 'getLineColor',
          defaultValue: [0, 0, 0, 255]
        },
        instanceLineWidths: {
          size: 1,
          transition: true,
          accessor: 'getLineWidth',
          defaultValue: 1
        }
      });
    }
  }, {
    key: "updateState",
    value: function updateState(_ref) {
      var props = _ref.props,
          oldProps = _ref.oldProps,
          changeFlags = _ref.changeFlags;
      (0, _get2.default)((0, _getPrototypeOf2.default)(ScatterplotLayer.prototype), "updateState", this).call(this, {
        props: props,
        oldProps: oldProps,
        changeFlags: changeFlags
      });

      if (changeFlags.extensionsChanged) {
        var gl = this.context.gl;

        if (this.state.model) {
          this.state.model.delete();
        }

        this.setState({
          model: this._getModel(gl)
        });
        this.getAttributeManager().invalidateAll();
      }
    }
  }, {
    key: "draw",
    value: function draw(_ref2) {
      var uniforms = _ref2.uniforms;
      var viewport = this.context.viewport;
      var _this$props = this.props,
          radiusScale = _this$props.radiusScale,
          radiusMinPixels = _this$props.radiusMinPixels,
          radiusMaxPixels = _this$props.radiusMaxPixels,
          stroked = _this$props.stroked,
          filled = _this$props.filled,
          lineWidthUnits = _this$props.lineWidthUnits,
          lineWidthScale = _this$props.lineWidthScale,
          lineWidthMinPixels = _this$props.lineWidthMinPixels,
          lineWidthMaxPixels = _this$props.lineWidthMaxPixels;
      var widthMultiplier = lineWidthUnits === 'pixels' ? viewport.distanceScales.metersPerPixel[2] : 1;
      this.state.model.setUniforms(Object.assign({}, uniforms, {
        stroked: stroked ? 1 : 0,
        filled: filled,
        radiusScale: radiusScale,
        radiusMinPixels: radiusMinPixels,
        radiusMaxPixels: radiusMaxPixels,
        lineWidthScale: lineWidthScale * widthMultiplier,
        lineWidthMinPixels: lineWidthMinPixels,
        lineWidthMaxPixels: lineWidthMaxPixels
      })).draw();
    }
  }, {
    key: "_getModel",
    value: function _getModel(gl) {
      var positions = [-1, -1, 0, -1, 1, 0, 1, 1, 0, 1, -1, 0];
      return new _core2.Model(gl, Object.assign(this.getShaders(), {
        id: this.props.id,
        geometry: new _core2.Geometry({
          drawMode: 6,
          vertexCount: 4,
          attributes: {
            positions: {
              size: 3,
              value: new Float32Array(positions)
            }
          }
        }),
        isInstanced: true,
        shaderCache: this.context.shaderCache
      }));
    }
  }, {
    key: "calculateInstancePositions64xyLow",
    value: function calculateInstancePositions64xyLow(attribute, _ref3) {
      var startRow = _ref3.startRow,
          endRow = _ref3.endRow;
      var isFP64 = this.use64bitPositions();
      attribute.constant = !isFP64;

      if (!isFP64) {
        attribute.value = new Float32Array(2);
        return;
      }

      var _this$props2 = this.props,
          data = _this$props2.data,
          getPosition = _this$props2.getPosition;
      var value = attribute.value,
          size = attribute.size;
      var i = startRow * size;

      var _createIterable = (0, _core.createIterable)(data, startRow, endRow),
          iterable = _createIterable.iterable,
          objectInfo = _createIterable.objectInfo;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var object = _step.value;
          objectInfo.index++;
          var position = getPosition(object, objectInfo);
          value[i++] = (0, _core.fp64LowPart)(position[0]);
          value[i++] = (0, _core.fp64LowPart)(position[1]);
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
  }]);
  return ScatterplotLayer;
}(_core.Layer);

exports.default = ScatterplotLayer;
ScatterplotLayer.layerName = 'ScatterplotLayer';
ScatterplotLayer.defaultProps = defaultProps;
//# sourceMappingURL=scatterplot-layer.js.map