import { default as LayersPass } from './layers-pass';
import { Framebuffer, Texture2D, Renderbuffer, withParameters } from '@luma.gl/core';
export default class ShadowPass extends LayersPass {
  constructor(gl, props) {
    super(gl, props);
    this.shadowMap = new Texture2D(gl, {
      width: 1,
      height: 1,
      parameters: {
        [10241]: 9729,
        [10240]: 9729,
        [10242]: 33071,
        [10243]: 33071
      }
    });
    this.depthBuffer = new Renderbuffer(gl, {
      format: 33189,
      width: 1,
      height: 1
    });
    this.fbo = new Framebuffer(gl, {
      id: 'shadowmap',
      width: 1,
      height: 1,
      attachments: {
        [36064]: this.shadowMap,
        [36096]: this.depthBuffer
      }
    });
  }

  render(params) {
    const target = this.fbo;
    withParameters(this.gl, {
      depthRange: [0, 1],
      depthTest: true,
      blend: false,
      clearColor: [1, 1, 1, 1]
    }, () => {
      const viewport = params.viewports[0];
      const width = viewport.width * this.props.pixelRatio;
      const height = viewport.height * this.props.pixelRatio;

      if (width !== target.width || height !== target.height) {
        target.resize({
          width,
          height
        });
      }

      super.render(Object.assign(params, {
        outputBuffer: target
      }));
    });
  }

  getModuleParameters(layer, effects, effectProps) {
    const moduleParameters = Object.assign(Object.create(layer.props), {
      viewport: layer.context.viewport,
      pickingActive: 0,
      drawToShadowMap: true,
      devicePixelRatio: this.props.pixelRatio
    });
    Object.assign(moduleParameters, effectProps);
    return moduleParameters;
  }

  delete() {
    if (this.fbo) {
      this.fbo.delete();
      this.fbo = null;
    }

    if (this.shadowMap) {
      this.shadowMap.delete();
      this.shadowMap = null;
    }

    if (this.depthBuffer) {
      this.depthBuffer.delete();
      this.depthBuffer = null;
    }
  }

}
//# sourceMappingURL=shadow-pass.js.map