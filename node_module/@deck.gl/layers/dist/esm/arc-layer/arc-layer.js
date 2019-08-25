import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _get from "@babel/runtime/helpers/esm/get";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { Layer, createIterable, fp64LowPart } from '@deck.gl/core';
import { Model, Geometry } from '@luma.gl/core';
import vs from './arc-layer-vertex.glsl';
import fs from './arc-layer-fragment.glsl';
var DEFAULT_COLOR = [0, 0, 0, 255];
var defaultProps = {
  getSourcePosition: {
    type: 'accessor',
    value: function value(x) {
      return x.sourcePosition;
    }
  },
  getTargetPosition: {
    type: 'accessor',
    value: function value(x) {
      return x.targetPosition;
    }
  },
  getSourceColor: {
    type: 'accessor',
    value: DEFAULT_COLOR
  },
  getTargetColor: {
    type: 'accessor',
    value: DEFAULT_COLOR
  },
  getWidth: {
    type: 'accessor',
    value: 1
  },
  getHeight: {
    type: 'accessor',
    value: 1
  },
  getTilt: {
    type: 'accessor',
    value: 0
  },
  widthUnits: 'pixels',
  widthScale: {
    type: 'number',
    value: 1,
    min: 0
  },
  widthMinPixels: {
    type: 'number',
    value: 0,
    min: 0
  },
  widthMaxPixels: {
    type: 'number',
    value: Number.MAX_SAFE_INTEGER,
    min: 0
  },
  getStrokeWidth: {
    deprecatedFor: 'getWidth'
  }
};

var ArcLayer = function (_Layer) {
  _inherits(ArcLayer, _Layer);

  function ArcLayer() {
    _classCallCheck(this, ArcLayer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ArcLayer).apply(this, arguments));
  }

  _createClass(ArcLayer, [{
    key: "getShaders",
    value: function getShaders() {
      return _get(_getPrototypeOf(ArcLayer.prototype), "getShaders", this).call(this, {
        vs: vs,
        fs: fs,
        modules: ['picking']
      });
    }
  }, {
    key: "initializeState",
    value: function initializeState() {
      var attributeManager = this.getAttributeManager();
      attributeManager.addInstanced({
        instancePositions: {
          size: 4,
          transition: true,
          accessor: ['getSourcePosition', 'getTargetPosition'],
          update: this.calculateInstancePositions
        },
        instancePositions64Low: {
          size: 4,
          accessor: ['getSourcePosition', 'getTargetPosition'],
          update: this.calculateInstancePositions64Low
        },
        instanceSourceColors: {
          size: this.props.colorFormat.length,
          type: 5121,
          normalized: true,
          transition: true,
          accessor: 'getSourceColor',
          defaultValue: DEFAULT_COLOR
        },
        instanceTargetColors: {
          size: this.props.colorFormat.length,
          type: 5121,
          normalized: true,
          transition: true,
          accessor: 'getTargetColor',
          defaultValue: DEFAULT_COLOR
        },
        instanceWidths: {
          size: 1,
          transition: true,
          accessor: 'getWidth',
          defaultValue: 1
        },
        instanceHeights: {
          size: 1,
          transition: true,
          accessor: 'getHeight',
          defaultValue: 1
        },
        instanceTilts: {
          size: 1,
          transition: true,
          accessor: 'getTilt',
          defaultValue: 0
        }
      });
    }
  }, {
    key: "updateState",
    value: function updateState(_ref) {
      var props = _ref.props,
          oldProps = _ref.oldProps,
          changeFlags = _ref.changeFlags;

      _get(_getPrototypeOf(ArcLayer.prototype), "updateState", this).call(this, {
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
          widthUnits = _this$props.widthUnits,
          widthScale = _this$props.widthScale,
          widthMinPixels = _this$props.widthMinPixels,
          widthMaxPixels = _this$props.widthMaxPixels;
      var widthMultiplier = widthUnits === 'pixels' ? viewport.distanceScales.metersPerPixel[2] : 1;
      this.state.model.setUniforms(Object.assign({}, uniforms, {
        widthScale: widthScale * widthMultiplier,
        widthMinPixels: widthMinPixels,
        widthMaxPixels: widthMaxPixels
      })).draw();
    }
  }, {
    key: "_getModel",
    value: function _getModel(gl) {
      var positions = [];
      var NUM_SEGMENTS = 50;

      for (var i = 0; i < NUM_SEGMENTS; i++) {
        positions = positions.concat([i, -1, 0, i, 1, 0]);
      }

      var model = new Model(gl, Object.assign({}, this.getShaders(), {
        id: this.props.id,
        geometry: new Geometry({
          drawMode: 5,
          attributes: {
            positions: new Float32Array(positions)
          }
        }),
        isInstanced: true,
        shaderCache: this.context.shaderCache
      }));
      model.setUniforms({
        numSegments: NUM_SEGMENTS
      });
      return model;
    }
  }, {
    key: "calculateInstancePositions",
    value: function calculateInstancePositions(attribute, _ref3) {
      var startRow = _ref3.startRow,
          endRow = _ref3.endRow;
      var _this$props2 = this.props,
          data = _this$props2.data,
          getSourcePosition = _this$props2.getSourcePosition,
          getTargetPosition = _this$props2.getTargetPosition;
      var value = attribute.value,
          size = attribute.size;
      var i = startRow * size;

      var _createIterable = createIterable(data, startRow, endRow),
          iterable = _createIterable.iterable,
          objectInfo = _createIterable.objectInfo;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var object = _step.value;
          objectInfo.index++;
          var sourcePosition = getSourcePosition(object, objectInfo);
          value[i++] = sourcePosition[0];
          value[i++] = sourcePosition[1];
          var targetPosition = getTargetPosition(object, objectInfo);
          value[i++] = targetPosition[0];
          value[i++] = targetPosition[1];
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
    key: "calculateInstancePositions64Low",
    value: function calculateInstancePositions64Low(attribute, _ref4) {
      var startRow = _ref4.startRow,
          endRow = _ref4.endRow;
      var isFP64 = this.use64bitPositions();
      attribute.constant = !isFP64;

      if (!isFP64) {
        attribute.value = new Float32Array(4);
        return;
      }

      var _this$props3 = this.props,
          data = _this$props3.data,
          getSourcePosition = _this$props3.getSourcePosition,
          getTargetPosition = _this$props3.getTargetPosition;
      var value = attribute.value,
          size = attribute.size;
      var i = startRow * size;

      var _createIterable2 = createIterable(data, startRow, endRow),
          iterable = _createIterable2.iterable,
          objectInfo = _createIterable2.objectInfo;

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = iterable[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var object = _step2.value;
          objectInfo.index++;
          var sourcePosition = getSourcePosition(object, objectInfo);
          value[i++] = fp64LowPart(sourcePosition[0]);
          value[i++] = fp64LowPart(sourcePosition[1]);
          var targetPosition = getTargetPosition(object, objectInfo);
          value[i++] = fp64LowPart(targetPosition[0]);
          value[i++] = fp64LowPart(targetPosition[1]);
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

  return ArcLayer;
}(Layer);

export { ArcLayer as default };
ArcLayer.layerName = 'ArcLayer';
ArcLayer.defaultProps = defaultProps;
//# sourceMappingURL=arc-layer.js.map