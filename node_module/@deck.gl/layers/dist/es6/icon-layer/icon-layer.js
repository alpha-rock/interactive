import { Layer, createIterable, fp64LowPart } from '@deck.gl/core';
import { Model, Geometry } from '@luma.gl/core';
import vs from './icon-layer-vertex.glsl';
import fs from './icon-layer-fragment.glsl';
import IconManager from './icon-manager';
const DEFAULT_COLOR = [0, 0, 0, 255];
const defaultProps = {
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
    value: x => x.position
  },
  getIcon: {
    type: 'accessor',
    value: x => x.icon
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
export default class IconLayer extends Layer {
  getShaders() {
    return super.getShaders({
      vs,
      fs,
      modules: ['project32', 'picking']
    });
  }

  initializeState() {
    this.state = {
      iconManager: new IconManager(this.context.gl, {
        onUpdate: () => this._onUpdate()
      })
    };
    const attributeManager = this.getAttributeManager();
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

  updateState(_ref) {
    let oldProps = _ref.oldProps,
        props = _ref.props,
        changeFlags = _ref.changeFlags;
    super.updateState({
      props,
      oldProps,
      changeFlags
    });
    const attributeManager = this.getAttributeManager();
    const iconManager = this.state.iconManager;
    const iconAtlas = props.iconAtlas,
          iconMapping = props.iconMapping,
          data = props.data,
          getIcon = props.getIcon;
    let iconMappingChanged = false;
    const prePacked = iconAtlas || this.props._asyncPropOriginalValues.iconAtlas;

    if (prePacked) {
      if (oldProps.iconAtlas !== props.iconAtlas) {
        iconManager.setProps({
          iconAtlas,
          autoPacking: false
        });
      }

      if (oldProps.iconMapping !== props.iconMapping) {
        iconManager.setProps({
          iconMapping
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
        data,
        getIcon
      });
      iconMappingChanged = true;
    }

    if (iconMappingChanged) {
      attributeManager.invalidate('instanceOffsets');
      attributeManager.invalidate('instanceIconFrames');
      attributeManager.invalidate('instanceColorModes');
    }

    if (changeFlags.extensionsChanged) {
      const gl = this.context.gl;

      if (this.state.model) {
        this.state.model.delete();
      }

      this.setState({
        model: this._getModel(gl)
      });
      attributeManager.invalidateAll();
    }
  }

  finalizeState() {
    super.finalizeState();
    this.state.iconManager.finalize();
  }

  draw(_ref2) {
    let uniforms = _ref2.uniforms;
    const _this$props = this.props,
          sizeScale = _this$props.sizeScale,
          sizeMinPixels = _this$props.sizeMinPixels,
          sizeMaxPixels = _this$props.sizeMaxPixels,
          sizeUnits = _this$props.sizeUnits,
          billboard = _this$props.billboard;
    const iconManager = this.state.iconManager;
    const viewport = this.context.viewport;
    const iconsTexture = iconManager.getTexture();

    if (iconsTexture) {
      this.state.model.setUniforms(Object.assign({}, uniforms, {
        iconsTexture,
        iconsTextureDim: [iconsTexture.width, iconsTexture.height],
        sizeScale: sizeScale * (sizeUnits === 'pixels' ? viewport.distanceScales.metersPerPixel[2] : 1),
        sizeMinPixels,
        sizeMaxPixels,
        billboard
      })).draw();
    }
  }

  _getModel(gl) {
    const positions = [-1, -1, 0, -1, 1, 0, 1, 1, 0, 1, -1, 0];
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

  _onUpdate() {
    this.setNeedsRedraw();
  }

  calculateInstancePositions64xyLow(attribute) {
    const isFP64 = this.use64bitPositions();
    attribute.constant = !isFP64;

    if (!isFP64) {
      attribute.value = new Float32Array(2);
      return;
    }

    const _this$props2 = this.props,
          data = _this$props2.data,
          getPosition = _this$props2.getPosition;
    const value = attribute.value;
    let i = 0;

    const _createIterable = createIterable(data),
          iterable = _createIterable.iterable,
          objectInfo = _createIterable.objectInfo;

    for (const object of iterable) {
      objectInfo.index++;
      const position = getPosition(object, objectInfo);
      value[i++] = fp64LowPart(position[0]);
      value[i++] = fp64LowPart(position[1]);
    }
  }

  calculateInstanceOffsets(attribute, _ref3) {
    let startRow = _ref3.startRow,
        endRow = _ref3.endRow;
    const data = this.props.data;
    const iconManager = this.state.iconManager;
    const value = attribute.value,
          size = attribute.size;
    let i = startRow * size;

    const _createIterable2 = createIterable(data, startRow, endRow),
          iterable = _createIterable2.iterable,
          objectInfo = _createIterable2.objectInfo;

    for (const object of iterable) {
      objectInfo.index++;
      const rect = iconManager.getIconMapping(object, objectInfo);
      value[i++] = rect.width / 2 - rect.anchorX || 0;
      value[i++] = rect.height / 2 - rect.anchorY || 0;
    }
  }

  calculateInstanceColorMode(attribute, _ref4) {
    let startRow = _ref4.startRow,
        endRow = _ref4.endRow;
    const data = this.props.data;
    const iconManager = this.state.iconManager;
    const value = attribute.value,
          size = attribute.size;
    let i = startRow * size;

    const _createIterable3 = createIterable(data, startRow, endRow),
          iterable = _createIterable3.iterable,
          objectInfo = _createIterable3.objectInfo;

    for (const object of iterable) {
      objectInfo.index++;
      const mapping = iconManager.getIconMapping(object, objectInfo);
      const colorMode = mapping.mask;
      value[i++] = colorMode ? 1 : 0;
    }
  }

  calculateInstanceIconFrames(attribute, _ref5) {
    let startRow = _ref5.startRow,
        endRow = _ref5.endRow;
    const data = this.props.data;
    const iconManager = this.state.iconManager;
    const value = attribute.value,
          size = attribute.size;
    let i = startRow * size;

    const _createIterable4 = createIterable(data, startRow, endRow),
          iterable = _createIterable4.iterable,
          objectInfo = _createIterable4.objectInfo;

    for (const object of iterable) {
      objectInfo.index++;
      const rect = iconManager.getIconMapping(object, objectInfo);
      value[i++] = rect.x || 0;
      value[i++] = rect.y || 0;
      value[i++] = rect.width || 0;
      value[i++] = rect.height || 0;
    }
  }

}
IconLayer.layerName = 'IconLayer';
IconLayer.defaultProps = defaultProps;
//# sourceMappingURL=icon-layer.js.map