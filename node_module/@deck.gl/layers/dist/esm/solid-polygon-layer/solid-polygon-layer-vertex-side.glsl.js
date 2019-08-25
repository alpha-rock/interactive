import main from './solid-polygon-layer-vertex-main.glsl';
export default "#define SHADER_NAME solid-polygon-layer-vertex-shader-side\n#define IS_SIDE_VERTEX\n\n\nattribute vec3 instancePositions;\nattribute vec2 instancePositions64xyLow;\nattribute vec3 nextPositions;\nattribute vec2 nextPositions64xyLow;\nattribute float instanceElevations;\nattribute vec4 instanceFillColors;\nattribute vec4 instanceLineColors;\nattribute vec3 instancePickingColors;\n\n".concat(main, "\n\nvoid main(void) {\n  PolygonProps props;\n\n  props.positions = instancePositions;\n  props.positions64xyLow = instancePositions64xyLow;\n  props.elevations = instanceElevations;\n  props.fillColors = instanceFillColors;\n  props.lineColors = instanceLineColors;\n  props.pickingColors = instancePickingColors;\n  props.nextPositions = nextPositions;\n  props.nextPositions64xyLow = nextPositions64xyLow;\n\n  calculatePosition(props);\n}\n");
//# sourceMappingURL=solid-polygon-layer-vertex-side.glsl.js.map