import { Layer, createIterable, fp64LowPart } from '@deck.gl/core';
import { ScenegraphNode, isWebGL2, pbr, log } from '@luma.gl/core';
import { createGLTFObjects } from '@luma.gl/addons';
import { waitForGLTFAssets } from './gltf-utils';
import { MATRIX_ATTRIBUTES } from '../utils/matrix';
import vs from './scenegraph-layer-vertex.glsl';
import fs from './scenegraph-layer-fragment.glsl';
const DEFAULT_COLOR = [255, 255, 255, 255];
const defaultProps = {
  scenegraph: {
    type: 'object',
    value: null,
    async: true
  },
  getScene: gltf => {
    if (gltf && gltf.scenes) {
      return typeof gltf.scene === 'object' ? gltf.scene : gltf.scenes[gltf.scene || 0];
    }

    return gltf;
  },
  getAnimator: scenegraph => scenegraph && scenegraph.animator,
  _animations: null,
  sizeScale: {
    type: 'number',
    value: 1,
    min: 0
  },
  getPosition: {
    type: 'accessor',
    value: x => x.position
  },
  getColor: {
    type: 'accessor',
    value: DEFAULT_COLOR
  },
  _lighting: 'flat',
  _imageBasedLightingEnvironment: null,
  getOrientation: {
    type: 'accessor',
    value: [0, 0, 0]
  },
  getScale: {
    type: 'accessor',
    value: [1, 1, 1]
  },
  getTranslation: {
    type: 'accessor',
    value: [0, 0, 0]
  },
  getTransformMatrix: {
    type: 'accessor',
    value: []
  }
};
export default class ScenegraphLayer extends Layer {
  initializeState() {
    const attributeManager = this.getAttributeManager();
    attributeManager.addInstanced({
      instancePositions: {
        size: 3,
        accessor: 'getPosition',
        transition: true
      },
      instancePositions64xy: {
        size: 2,
        accessor: 'getPosition',
        update: this.calculateInstancePositions64xyLow
      },
      instanceColors: {
        type: 5121,
        size: this.props.colorFormat.length,
        accessor: 'getColor',
        normalized: true,
        defaultValue: DEFAULT_COLOR,
        transition: true
      },
      instanceModelMatrix: MATRIX_ATTRIBUTES
    });
  }

  updateState(params) {
    super.updateState(params);
    const props = params.props,
          oldProps = params.oldProps;

    if (props.scenegraph !== oldProps.scenegraph) {
      this._updateScenegraph(props);
    } else if (props._animations !== oldProps._animations) {
      this._applyAnimationsProp(this.state.scenegraph, this.state.animator, props._animations);
    }
  }

  finalizeState() {
    super.finalizeState();

    this._deleteScenegraph();
  }

  _updateScenegraph(props) {
    const gl = this.context.gl;
    let scenegraphData;

    if (props.scenegraph instanceof ScenegraphNode) {
      scenegraphData = {
        scenes: [props.scenegraph]
      };
    } else if (props.scenegraph && !props.scenegraph.gltf) {
      const gltf = props.scenegraph;
      const gltfObjects = createGLTFObjects(gl, gltf, this.getLoadOptions());
      scenegraphData = Object.assign({
        gltf
      }, gltfObjects);
      waitForGLTFAssets(gltfObjects).then(() => this.setNeedsRedraw());
    } else {
      log.deprecated('ScenegraphLayer.props.scenegraph', 'Use GLTFLoader instead of GLTFScenegraphLoader');
      scenegraphData = props.scenegraph;
    }

    const options = {
      layer: this,
      gl
    };
    const scenegraph = props.getScene(scenegraphData, options);
    const animator = props.getAnimator(scenegraphData, options);

    if (scenegraph instanceof ScenegraphNode) {
      this._deleteScenegraph();

      this._applyAllAttributes(scenegraph);

      this._applyAnimationsProp(scenegraph, animator, props._animations);

      this.setState({
        scenegraph,
        animator
      });
    } else if (scenegraph !== null) {
      log.warn('invalid scenegraph:', scenegraph)();
    }
  }

  _applyAllAttributes(scenegraph) {
    if (this.state.attributesAvailable) {
      const allAttributes = this.getAttributeManager().getAttributes();
      scenegraph.traverse(model => {
        this._setModelAttributes(model.model, allAttributes);
      });
    }
  }

  _applyAnimationsProp(scenegraph, animator, animationsProp) {
    if (!scenegraph || !animator || !animationsProp) {
      return;
    }

    const animations = animator.getAnimations();
    Object.keys(animationsProp).sort().forEach(key => {
      const value = animationsProp[key];

      if (key === '*') {
        animations.forEach(animation => {
          Object.assign(animation, value);
        });
      } else if (Number.isFinite(Number(key))) {
        const number = Number(key);

        if (number >= 0 && number < animations.length) {
          Object.assign(animations[number], value);
        } else {
          log.warn(`animation ${key} not found`)();
        }
      } else {
        const findResult = animations.find((_ref) => {
          let name = _ref.name;
          return name === key;
        });

        if (findResult) {
          Object.assign(findResult, value);
        } else {
          log.warn(`animation ${key} not found`)();
        }
      }
    });
  }

  _deleteScenegraph() {
    const scenegraph = this.state.scenegraph;

    if (scenegraph instanceof ScenegraphNode) {
      scenegraph.delete();
    }
  }

  addVersionToShader(source) {
    if (isWebGL2(this.context.gl)) {
      return `#version 300 es\n${source}`;
    }

    return source;
  }

  getLoadOptions() {
    const modules = ['project32', 'picking'];
    const _this$props = this.props,
          _lighting = _this$props._lighting,
          _imageBasedLightingEnvironment = _this$props._imageBasedLightingEnvironment;

    if (_lighting === 'pbr') {
      modules.push(pbr);
    }

    let env = null;

    if (_imageBasedLightingEnvironment) {
      if (typeof _imageBasedLightingEnvironment === 'function') {
        env = _imageBasedLightingEnvironment({
          gl: this.context.gl,
          layer: this
        });
      } else {
        env = _imageBasedLightingEnvironment;
      }
    }

    return {
      gl: this.context.gl,
      waitForFullLoad: true,
      imageBasedLightingEnvironment: env,
      modelOptions: {
        vs: this.addVersionToShader(vs),
        fs: this.addVersionToShader(fs),
        modules,
        isInstanced: true
      },
      useTangents: false
    };
  }

  updateAttributes(changedAttributes) {
    this.setState({
      attributesAvailable: true
    });
    if (!this.state.scenegraph) return;
    this.state.scenegraph.traverse(model => {
      this._setModelAttributes(model.model, changedAttributes);
    });
  }

  draw(_ref2) {
    let _ref2$moduleParameter = _ref2.moduleParameters,
        moduleParameters = _ref2$moduleParameter === void 0 ? null : _ref2$moduleParameter,
        _ref2$parameters = _ref2.parameters,
        parameters = _ref2$parameters === void 0 ? {} : _ref2$parameters,
        context = _ref2.context;
    if (!this.state.scenegraph) return;

    if (this.props._animations && this.state.animator) {
      this.state.animator.animate(context.animationProps.time);
    }

    const sizeScale = this.props.sizeScale;
    const numInstances = this.getNumInstances();
    this.state.scenegraph.traverse((model, _ref3) => {
      let worldMatrix = _ref3.worldMatrix;
      model.model.setInstanceCount(numInstances);
      model.updateModuleSettings(moduleParameters);
      model.draw({
        parameters,
        uniforms: {
          sizeScale,
          sceneModelMatrix: worldMatrix,
          u_Camera: model.model.program.uniforms.project_uCameraPosition
        }
      });
    });
  }

  calculateInstancePositions64xyLow(attribute, _ref4) {
    let startRow = _ref4.startRow,
        endRow = _ref4.endRow;
    const isFP64 = this.use64bitPositions();
    attribute.constant = !isFP64;

    if (!isFP64) {
      attribute.value = new Float32Array(2);
      return;
    }

    const _this$props2 = this.props,
          data = _this$props2.data,
          getPosition = _this$props2.getPosition;
    const value = attribute.value,
          size = attribute.size;
    let i = startRow * size;

    const _createIterable = createIterable(data, startRow, endRow),
          iterable = _createIterable.iterable,
          objectInfo = _createIterable.objectInfo;

    for (const point of iterable) {
      objectInfo.index++;
      const position = getPosition(point, objectInfo);
      value[i++] = fp64LowPart(position[0]);
      value[i++] = fp64LowPart(position[1]);
    }
  }

}
ScenegraphLayer.layerName = 'ScenegraphLayer';
ScenegraphLayer.defaultProps = defaultProps;
//# sourceMappingURL=scenegraph-layer.js.map