import ComponentState from '../lifecycle/component-state';
export default class LayerState extends ComponentState {
  constructor(_ref) {
    let attributeManager = _ref.attributeManager,
        layer = _ref.layer;
    super(layer);
    this.attributeManager = attributeManager;
    this.model = null;
    this.needsRedraw = true;
    this.subLayers = null;
  }

  get layer() {
    return this.component;
  }

  set layer(layer) {
    this.component = layer;
  }

}
//# sourceMappingURL=layer-state.js.map