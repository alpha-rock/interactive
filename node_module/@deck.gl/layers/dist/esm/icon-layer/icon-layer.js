import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _get from "@babel/runtime/helpers/esm/get";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { Layer, createIterable, fp64LowPart } from '@deck.gl/core';
import { Model, Geometry } from '@luma.gl/core';
import vs from './icon-layer-vertex.glsl';
import fs from './icon-layer-fragment.glsl';
import IconManager from './icon-manager';
var DEFAULT_COLOR = [0, 0, 0, 255];
var defaultProps = {
  iconAtlas: {
    type: 'object',
    value: null,
    async: true
  },
  iconMapping: {
    type: 'object',
    value: {},
    async: true
  },
  sizeScale: {
    type: 'number',
    value: 1,
    min: 0
  },
  billboard: true,
  sizeUnits: 'pixels',
  sizeMinPixels: {
    type: 'number',
    min: 0,
    value: 0
  },
  sizeMaxPixels: {
    type: 'number',
    min: 0,
    value: Number.MAX_SAFE_INTEGER
  },
  getPosition: {
    type: 'accessor',
    value: function value(x) {
      return x.position;
    }
  },
  getIcon: {
    type: 'accessor',
    value: function value(x) {
      return x.icon;
    }
  },
  getColor: {
    type: 'accessor',
    value: DEFAULT_COLOR
  },
  getSize: {
    type: 'accessor',
    value: 1
  },
  getAngle: {
    type: 'accessor',
    value: 0
  }
};

var IconLayer = function (_Layer) {
  _inherits(IconLayer, _Layer);

  function IconLayer() {
    _classCallCheck(this, IconLayer);

    return _possibleConstructorReturn(this, _getPrototypeOf(IconLayer).apply(this, arguments));
  }

  _createClass(IconLayer, [{
    key: "getShaders",
    value: function getShaders() {
      return _get(_getPrototypeOf(IconLayer.prototype), "getShaders", this).call(this, {
        vs: vs,
        fs: fs,
        modules: ['project32', 'picking']
      });
    }
  }, {
    key: "initializeState",
    value: function initializeState() {
      var _this = this;

      this.state = {
        iconManager: new IconManager(this.context.gl, {
          onUpdate: function onUpdate() {
            return _this._onUpdate();
          }
        })
      };
      var attributeManager = this.getAttributeManager();
      attributeManager.addInstanced({
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
        instanceSizes: {
          size: 1,
          transition: true,
          accessor: 'getSize',
          defaultValue: 1
        },
        instanceOffsets: {
          size: 2,
          accessor: 'getIcon',
          update: this.calculateInstanceOffsets
        },
        instanceIconFrames: {
          size: 4,
          accessor: 'getIcon',
          update: this.calculateInstanceIconFrames
        },
        instanceColorModes: {
          size: 1,
          type: 5121,
          accessor: 'getIcon',
          update: this.calculateInstanceColorMode
        },
        instanceColors: {
          size: this.props.colorFormat.length,
          type: 5121,
          normalized: true,
          transition: true,
          accessor: 'getColor',
          defaultValue: DEFAULT_COLOR
        },
        instanceAngles: {
          size: 1,
          transition: true,
          accessor: 'getAngle',
          defaultValue: 0
        }
      });
    }
  }, {
    key: "updateState",
    value: function updateState(_ref) {
      var oldProps = _ref.oldProps,
          props = _ref.props,
          changeFlags = _ref.changeFlags;

      _get(_getPrototypeOf(IconLayer.prototype), "updateState", this).call(this, {
        props: props,
        oldProps: oldProps,
        changeFlags: changeFlags
      });

      var attributeManager = this.getAttributeManager();
      var iconManager = this.state.iconManager;
      var iconAtlas = props.iconAtlas,
          iconMapping = props.iconMapping,
          data = props.data,
          getIcon = props.getIcon;
      var iconMappingChanged = false;
      var prePacked = iconAtlas || this.props._asyncPropOriginalValues.iconAtlas;

      if (prePacked) {
        if (oldProps.iconAtlas !== props.iconAtlas) {
          iconManager.setProps({
            iconAtlas: iconAtlas,
            autoPacking: false
          });
        }

        if (oldProps.iconMapping !== props.iconMapping) {
          iconManager.setProps({
            iconMapping: iconMapping
          });
          iconMappingChanged = true;
        }
      } else {
        iconManager.setProps({
          autoPacking: true
        });
      }

      if (changeFlags.dataChanged || changeFlags.updateTriggersChanged && (changeFlags.updateTriggersChanged.all || changeFlags.updateTriggersChanged.getIcon)) {
        iconManager.setProps({
          data: data,
          getIcon: getIcon
        });
        iconMappingChanged = true;
      }

      if (iconMappingChanged) {
        attributeManager.invalidate('instanceOffsets');
        attributeManager.invalidate('instanceIconFrames');
        attributeManager.invalidate('instanceColorModes');
      }

      if (changeFlags.extensionsChanged) {
        var gl = this.context.gl;

        if (this.state.model) {
          this.state.model.delete();
        }

        this.setState({
          model: this._getModel(gl)
        });
        attributeManager.invalidateAll();
      }
    }
  }, {
    key: "finalizeState",
    value: function finalizeState() {
      _get(_getPrototypeOf(IconLayer.prototype), "finalizeState", this).call(this);

      this.state.iconManager.finalize();
    }
  }, {
    key: "draw",
    value: function draw(_ref2) {
      var uniforms = _ref2.uniforms;
      var _this$props = this.props,
          sizeScale = _this$props.sizeScale,
          sizeMinPixels = _this$props.sizeMinPixels,
          sizeMaxPixels = _this$props.sizeMaxPixels,
          sizeUnits = _this$props.sizeUnits,
          billboard = _this$props.billboard;
      var iconManager = this.state.iconManager;
      var viewport = this.context.viewport;
      var iconsTexture = iconManager.getTexture();

      if (iconsTexture) {
        this.state.model.setUniforms(Object.assign({}, uniforms, {
          iconsTexture: iconsTexture,
          iconsTextureDim: [iconsTexture.width, iconsTexture.height],
          sizeScale: sizeScale * (sizeUnits === 'pixels' ? viewport.distanceScales.metersPerPixel[2] : 1),
          sizeMinPixels: sizeMinPixels,
          sizeMaxPixels: sizeMaxPixels,
          billboard: billboard
        })).draw();
      }
    }
  }, {
    key: "_getModel",
    value: function _getModel(gl) {
      var positions = [-1, -1, 0, -1, 1, 0, 1, 1, 0, 1, -1, 0];
      return new Model(gl, Object.assign({}, this.getShaders(), {
        id: this.props.id,
        geometry: new Geometry({
          drawMode: 6,
          attributes: {
            positions: new Float32Array(positions)
          }
        }),
        isInstanced: true,
        shaderCache: this.context.shaderCache
      }));
    }
  }, {
    key: "_onUpdate",
    value: function _onUpdate() {
      this.setNeedsRedraw();
    }
  }, {
    key: "calculateInstancePositions64xyLow",
    value: function calculateInstancePositions64xyLow(attribute) {
      var isFP64 = this.use64bitPositions();
      attribute.constant = !isFP64;

      if (!isFP64) {
        attribute.value = new Float32Array(2);
        return;
      }

      var _this$props2 = this.props,
          data = _this$props2.data,
          getPosition = _this$props2.getPosition;
      var value = attribute.value;
      var i = 0;

      var _createIterable = createIterable(data),
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
          value[i++] = fp64LowPart(position[0]);
          value[i++] = fp64LowPart(position[1]);
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
    key: "calculateInstanceOffsets",
    value: function calculateInstanceOffsets(attribute, _ref3) {
      var startRow = _ref3.startRow,
          endRow = _ref3.endRow;
      var data = this.props.data;
      var iconManager = this.state.iconManager;
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
          var rect = iconManager.getIconMapping(object, objectInfo);
          value[i++] = rect.width / 2 - rect.anchorX || 0;
          value[i++] = rect.height / 2 - rect.anchorY || 0;
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
    key: "calculateInstanceColorMode",
    value: function calculateInstanceColorMode(attribute, _ref4) {
      var startRow = _ref4.startRow,
          endRow = _ref4.endRow;
      var data = this.props.data;
      var iconManager = this.state.iconManager;
      var value = attribute.value,
          size = attribute.size;
      var i = startRow * size;

      var _createIterable3 = createIterable(data, startRow, endRow),
          iterable = _createIterable3.iterable,
          objectInfo = _createIterable3.objectInfo;

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = iterable[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var object = _step3.value;
          objectInfo.index++;
          var mapping = iconManager.getIconMapping(object, objectInfo);
          var colorMode = mapping.mask;
          value[i++] = colorMode ? 1 : 0;
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
    }
  }, {
    key: "calculateInstanceIconFrames",
    value: function calculateInstanceIconFrames(attribute, _ref5) {
      var startRow = _ref5.startRow,
          endRow = _ref5.endRow;
      var data = this.props.data;
      var iconManager = this.state.iconManager;
      var value = attribute.value,
          size = attribute.size;
      var i = startRow * size;

      var _createIterable4 = createIterable(data, startRow, endRow),
          iterable = _createIterable4.iterable,
          objectInfo = _createIterable4.objectInfo;

      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = iterable[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var object = _step4.value;
          objectInfo.index++;
          var rect = iconManager.getIconMapping(object, objectInfo);
          value[i++] = rect.x || 0;
          value[i++] = rect.y || 0;
          value[i++] = rect.width || 0;
          value[i++] = rect.height || 0;
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  }]);

  return IconLayer;
}(Layer);

export { IconLayer as default };
IconLayer.layerName = 'IconLayer';
IconLayer.defaultProps = defaultProps;
//# sourceMappingURL=icon-layer.js.map