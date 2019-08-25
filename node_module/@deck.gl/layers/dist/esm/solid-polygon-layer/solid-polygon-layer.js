import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _get from "@babel/runtime/helpers/esm/get";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { Layer } from '@deck.gl/core';
import { Model, Geometry, hasFeature, FEATURES, PhongMaterial } from '@luma.gl/core';
import PolygonTesselator from './polygon-tesselator';
import vsTop from './solid-polygon-layer-vertex-top.glsl';
import vsSide from './solid-polygon-layer-vertex-side.glsl';
import fs from './solid-polygon-layer-fragment.glsl';
var DEFAULT_COLOR = [0, 0, 0, 255];
var defaultMaterial = new PhongMaterial();
var defaultProps = {
  filled: true,
  extruded: false,
  wireframe: false,
  elevationScale: {
    type: 'number',
    min: 0,
    value: 1
  },
  getPolygon: {
    type: 'accessor',
    value: function value(f) {
      return f.polygon;
    }
  },
  getElevation: {
    type: 'accessor',
    value: 1000
  },
  getFillColor: {
    type: 'accessor',
    value: DEFAULT_COLOR
  },
  getLineColor: {
    type: 'accessor',
    value: DEFAULT_COLOR
  },
  material: defaultMaterial
};
var ATTRIBUTE_TRANSITION = {
  enter: function enter(value, chunk) {
    return chunk.length ? chunk.subarray(chunk.length - value.length) : value;
  }
};

var SolidPolygonLayer = function (_Layer) {
  _inherits(SolidPolygonLayer, _Layer);

  function SolidPolygonLayer() {
    _classCallCheck(this, SolidPolygonLayer);

    return _possibleConstructorReturn(this, _getPrototypeOf(SolidPolygonLayer).apply(this, arguments));
  }

  _createClass(SolidPolygonLayer, [{
    key: "getShaders",
    value: function getShaders(vs) {
      return _get(_getPrototypeOf(SolidPolygonLayer.prototype), "getShaders", this).call(this, {
        vs: vs,
        fs: fs,
        defines: {},
        modules: ['project32', 'gouraud-lighting', 'picking']
      });
    }
  }, {
    key: "initializeState",
    value: function initializeState() {
      var _this = this;

      var gl = this.context.gl;
      this.setState({
        numInstances: 0,
        polygonTesselator: new PolygonTesselator({
          IndexType: !gl || hasFeature(gl, FEATURES.ELEMENT_INDEX_UINT32) ? Uint32Array : Uint16Array
        })
      });
      var attributeManager = this.getAttributeManager();
      var noAlloc = true;
      attributeManager.remove(['instancePickingColors']);
      attributeManager.add({
        indices: {
          size: 1,
          isIndexed: true,
          update: this.calculateIndices,
          noAlloc: noAlloc
        },
        positions: {
          size: 3,
          transition: ATTRIBUTE_TRANSITION,
          accessor: 'getPolygon',
          update: this.calculatePositions,
          noAlloc: noAlloc,
          shaderAttributes: {
            positions: {
              offset: 0,
              divisor: 0
            },
            instancePositions: {
              offset: 0,
              divisor: 1
            },
            nextPositions: {
              offset: 12,
              divisor: 1
            }
          }
        },
        positions64xyLow: {
          size: 2,
          update: this.calculatePositionsLow,
          noAlloc: noAlloc,
          shaderAttributes: {
            positions64xyLow: {
              offset: 0,
              divisor: 0
            },
            instancePositions64xyLow: {
              offset: 0,
              divisor: 1
            },
            nextPositions64xyLow: {
              offset: 8,
              divisor: 1
            }
          }
        },
        vertexValid: {
          size: 1,
          divisor: 1,
          type: 5121,
          update: this.calculateVertexValid,
          noAlloc: noAlloc
        },
        elevations: {
          size: 1,
          transition: ATTRIBUTE_TRANSITION,
          accessor: 'getElevation',
          shaderAttributes: {
            elevations: {
              divisor: 0
            },
            instanceElevations: {
              divisor: 1
            }
          }
        },
        fillColors: {
          alias: 'colors',
          size: this.props.colorFormat.length,
          type: 5121,
          normalized: true,
          transition: ATTRIBUTE_TRANSITION,
          accessor: 'getFillColor',
          defaultValue: DEFAULT_COLOR,
          shaderAttributes: {
            fillColors: {
              divisor: 0
            },
            instanceFillColors: {
              divisor: 1
            }
          }
        },
        lineColors: {
          alias: 'colors',
          size: this.props.colorFormat.length,
          type: 5121,
          normalized: true,
          transition: ATTRIBUTE_TRANSITION,
          accessor: 'getLineColor',
          defaultValue: DEFAULT_COLOR,
          shaderAttributes: {
            lineColors: {
              divisor: 0
            },
            instanceLineColors: {
              divisor: 1
            }
          }
        },
        pickingColors: {
          size: 3,
          type: 5121,
          accessor: function accessor(object, _ref) {
            var index = _ref.index,
                value = _ref.target;
            return _this.encodePickingColor(index, value);
          },
          shaderAttributes: {
            pickingColors: {
              divisor: 0
            },
            instancePickingColors: {
              divisor: 1
            }
          }
        }
      });
    }
  }, {
    key: "draw",
    value: function draw(_ref2) {
      var uniforms = _ref2.uniforms;
      var _this$props = this.props,
          extruded = _this$props.extruded,
          filled = _this$props.filled,
          wireframe = _this$props.wireframe,
          elevationScale = _this$props.elevationScale;
      var _this$state = this.state,
          topModel = _this$state.topModel,
          sideModel = _this$state.sideModel,
          polygonTesselator = _this$state.polygonTesselator;
      var renderUniforms = Object.assign({}, uniforms, {
        extruded: Boolean(extruded),
        elevationScale: elevationScale
      });

      if (sideModel) {
        sideModel.setInstanceCount(polygonTesselator.instanceCount - 1);
        sideModel.setUniforms(renderUniforms);

        if (wireframe) {
          sideModel.setDrawMode(3);
          sideModel.setUniforms({
            isWireframe: true
          }).draw();
        }

        if (filled) {
          sideModel.setDrawMode(6);
          sideModel.setUniforms({
            isWireframe: false
          }).draw();
        }
      }

      if (topModel) {
        topModel.setVertexCount(polygonTesselator.get('indices').length);
        topModel.setUniforms(renderUniforms).draw();
      }
    }
  }, {
    key: "updateState",
    value: function updateState(updateParams) {
      _get(_getPrototypeOf(SolidPolygonLayer.prototype), "updateState", this).call(this, updateParams);

      this.updateGeometry(updateParams);
      var props = updateParams.props,
          oldProps = updateParams.oldProps,
          changeFlags = updateParams.changeFlags;
      var attributeManager = this.getAttributeManager();
      var regenerateModels = changeFlags.extensionsChanged || props.filled !== oldProps.filled || props.extruded !== oldProps.extruded;

      if (regenerateModels) {
        if (this.state.models) {
          this.state.models.forEach(function (model) {
            return model.delete();
          });
        }

        this.setState(this._getModels(this.context.gl));
        attributeManager.invalidateAll();
      }
    }
  }, {
    key: "updateGeometry",
    value: function updateGeometry(_ref3) {
      var props = _ref3.props,
          oldProps = _ref3.oldProps,
          changeFlags = _ref3.changeFlags;
      var geometryConfigChanged = changeFlags.dataChanged || changeFlags.updateTriggersChanged && (changeFlags.updateTriggersChanged.all || changeFlags.updateTriggersChanged.getPolygon);

      if (geometryConfigChanged) {
        var polygonTesselator = this.state.polygonTesselator;
        polygonTesselator.updateGeometry({
          data: props.data,
          getGeometry: props.getPolygon,
          positionFormat: props.positionFormat,
          fp64: this.use64bitPositions(),
          dataChanged: changeFlags.dataChanged
        });
        this.setState({
          numInstances: polygonTesselator.instanceCount,
          bufferLayout: polygonTesselator.bufferLayout
        });

        if (!changeFlags.dataChanged) {
          this.getAttributeManager().invalidateAll();
        }
      }
    }
  }, {
    key: "_getModels",
    value: function _getModels(gl) {
      var _this$props2 = this.props,
          id = _this$props2.id,
          filled = _this$props2.filled,
          extruded = _this$props2.extruded;
      var topModel;
      var sideModel;

      if (filled) {
        var shaders = this.getShaders(vsTop);
        shaders.defines.NON_INSTANCED_MODEL = 1;
        topModel = new Model(gl, Object.assign({}, shaders, {
          id: "".concat(id, "-top"),
          drawMode: 4,
          attributes: {
            vertexPositions: new Float32Array([0, 1])
          },
          uniforms: {
            isWireframe: false,
            isSideVertex: false
          },
          vertexCount: 0,
          isIndexed: true,
          shaderCache: this.context.shaderCache
        }));
      }

      if (extruded) {
        sideModel = new Model(gl, Object.assign({}, this.getShaders(vsSide), {
          id: "".concat(id, "-side"),
          geometry: new Geometry({
            drawMode: 1,
            vertexCount: 4,
            attributes: {
              vertexPositions: {
                size: 2,
                value: new Float32Array([1, 1, 0, 1, 0, 0, 1, 0])
              }
            }
          }),
          instanceCount: 0,
          isInstanced: 1,
          shaderCache: this.context.shaderCache
        }));
        sideModel.userData.excludeAttributes = {
          indices: true
        };
      }

      return {
        models: [sideModel, topModel].filter(Boolean),
        topModel: topModel,
        sideModel: sideModel
      };
    }
  }, {
    key: "calculateIndices",
    value: function calculateIndices(attribute) {
      var polygonTesselator = this.state.polygonTesselator;
      attribute.bufferLayout = polygonTesselator.indexLayout;
      attribute.value = polygonTesselator.get('indices');
    }
  }, {
    key: "calculatePositions",
    value: function calculatePositions(attribute) {
      var polygonTesselator = this.state.polygonTesselator;
      attribute.bufferLayout = polygonTesselator.bufferLayout;
      attribute.value = polygonTesselator.get('positions');
    }
  }, {
    key: "calculatePositionsLow",
    value: function calculatePositionsLow(attribute) {
      var isFP64 = this.use64bitPositions();
      attribute.constant = !isFP64;

      if (!isFP64) {
        attribute.value = new Float32Array(2);
        return;
      }

      attribute.value = this.state.polygonTesselator.get('positions64xyLow');
    }
  }, {
    key: "calculateVertexValid",
    value: function calculateVertexValid(attribute) {
      attribute.value = this.state.polygonTesselator.get('vertexValid');
    }
  }, {
    key: "clearPickingColor",
    value: function clearPickingColor(color) {
      var pickedPolygonIndex = this.decodePickingColor(color);
      var bufferLayout = this.state.polygonTesselator.bufferLayout;
      var numVertices = bufferLayout[pickedPolygonIndex];
      var startInstanceIndex = 0;

      for (var polygonIndex = 0; polygonIndex < pickedPolygonIndex; polygonIndex++) {
        startInstanceIndex += bufferLayout[polygonIndex];
      }

      var pickingColors = this.getAttributeManager().attributes.pickingColors;
      var value = pickingColors.value;
      var endInstanceIndex = startInstanceIndex + numVertices;
      value.fill(0, startInstanceIndex * 3, endInstanceIndex * 3);
      pickingColors.update({
        value: value
      });
    }
  }]);

  return SolidPolygonLayer;
}(Layer);

export { SolidPolygonLayer as default };
SolidPolygonLayer.layerName = 'SolidPolygonLayer';
SolidPolygonLayer.defaultProps = defaultProps;
//# sourceMappingURL=solid-polygon-layer.js.map