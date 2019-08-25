import { PhongMaterial } from '@luma.gl/core';
import { CompositeLayer, log } from '@deck.gl/core';
import { ColumnLayer } from '@deck.gl/layers';
import BinSorter from '../utils/bin-sorter';
import { defaultColorRange } from '../utils/color-utils';
import { getQuantizeScale, getLinearScale } from '../utils/scale-utils';
import { getValueFunc } from '../utils/aggregation-operation-utils';
import { pointToHexbin } from './hexagon-aggregator';

function nop() {}

const defaultMaterial = new PhongMaterial();
const defaultProps = {
  colorDomain: null,
  colorRange: defaultColorRange,
  getColorValue: {
    type: 'accessor',
    value: null
  },
  getColorWeight: {
    type: 'accessor',
    value: x => 1
  },
  colorAggregation: 'SUM',
  lowerPercentile: {
    type: 'number',
    value: 0,
    min: 0,
    max: 100
  },
  upperPercentile: {
    type: 'number',
    value: 100,
    min: 0,
    max: 100
  },
  onSetColorDomain: nop,
  elevationDomain: null,
  elevationRange: [0, 1000],
  getElevationValue: {
    type: 'accessor',
    value: null
  },
  getElevationWeight: {
    type: 'accessor',
    value: x => 1
  },
  elevationAggregation: 'SUM',
  elevationLowerPercentile: {
    type: 'number',
    value: 0,
    min: 0,
    max: 100
  },
  elevationUpperPercentile: {
    type: 'number',
    value: 100,
    min: 0,
    max: 100
  },
  elevationScale: {
    type: 'number',
    min: 0,
    value: 1
  },
  onSetElevationDomain: nop,
  radius: {
    type: 'number',
    value: 1000,
    min: 1
  },
  coverage: {
    type: 'number',
    min: 0,
    max: 1,
    value: 1
  },
  extruded: false,
  hexagonAggregator: pointToHexbin,
  getPosition: {
    type: 'accessor',
    value: x => x.position
  },
  material: defaultMaterial
};
const COLOR_PROPS = ['getColorValue', 'colorAggregation', 'getColorWeight'];
const ELEVATION_PROPS = ['getElevationValue', 'elevationAggregation', 'getElevationWeight'];
export default class HexagonLayer extends CompositeLayer {
  initializeState() {
    this.state = {
      hexagons: [],
      sortedColorBins: null,
      sortedElevationBins: null,
      colorValueDomain: null,
      elevationValueDomain: null,
      colorScaleFunc: nop,
      elevationScaleFunc: nop,
      dimensionUpdaters: this.getDimensionUpdaters()
    };
  }

  updateState(_ref) {
    let oldProps = _ref.oldProps,
        props = _ref.props,
        changeFlags = _ref.changeFlags;
    this.updateGetValueFuncs(oldProps, props);
    const dimensionChanges = this.getDimensionChanges(oldProps, props);

    if (changeFlags.dataChanged || this.needsReProjectPoints(oldProps, props)) {
      this.getHexagons();
    } else if (dimensionChanges) {
      dimensionChanges.forEach(f => typeof f === 'function' && f.apply(this));
    }
  }

  colorElevationPropsChanged(oldProps, props) {
    let colorChanged = false;
    let elevationChanged = false;

    for (const p of COLOR_PROPS) {
      if (oldProps[p] !== props[p]) {
        colorChanged = true;
      }
    }

    for (const p of ELEVATION_PROPS) {
      if (oldProps[p] !== props[p]) {
        elevationChanged = true;
      }
    }

    return {
      colorChanged,
      elevationChanged
    };
  }

  updateGetValueFuncs(oldProps, props) {
    let getColorValue = props.getColorValue,
        getElevationValue = props.getElevationValue;
    const _this$props = this.props,
          colorAggregation = _this$props.colorAggregation,
          getColorWeight = _this$props.getColorWeight,
          elevationAggregation = _this$props.elevationAggregation,
          getElevationWeight = _this$props.getElevationWeight;

    const _this$colorElevationP = this.colorElevationPropsChanged(oldProps, props),
          colorChanged = _this$colorElevationP.colorChanged,
          elevationChanged = _this$colorElevationP.elevationChanged;

    if (colorChanged && getColorValue === null) {
      getColorValue = getValueFunc(colorAggregation, getColorWeight);
    }

    if (elevationChanged && getElevationValue === null) {
      getElevationValue = getValueFunc(elevationAggregation, getElevationWeight);
    }

    if (getColorValue) {
      this.setState({
        getColorValue
      });
    }

    if (getElevationValue) {
      this.setState({
        getElevationValue
      });
    }
  }

  needsReProjectPoints(oldProps, props) {
    return oldProps.radius !== props.radius || oldProps.hexagonAggregator !== props.hexagonAggregator;
  }

  getDimensionUpdaters() {
    return {
      getFillColor: [{
        id: 'value',
        triggers: ['getColorValue', 'getColorWeight', 'colorAggregation'],
        updater: this.getSortedColorBins
      }, {
        id: 'domain',
        triggers: ['lowerPercentile', 'upperPercentile'],
        updater: this.getColorValueDomain
      }, {
        id: 'scaleFunc',
        triggers: ['colorDomain', 'colorRange'],
        updater: this.getColorScale
      }],
      getElevation: [{
        id: 'value',
        triggers: ['getElevationValue', 'getElevationWeight', 'elevationAggregation'],
        updater: this.getSortedElevationBins
      }, {
        id: 'domain',
        triggers: ['elevationLowerPercentile', 'elevationUpperPercentile'],
        updater: this.getElevationValueDomain
      }, {
        id: 'scaleFunc',
        triggers: ['elevationDomain', 'elevationRange'],
        updater: this.getElevationScale
      }]
    };
  }

  getDimensionChanges(oldProps, props) {
    const dimensionUpdaters = this.state.dimensionUpdaters;
    const updaters = [];

    for (const dimensionKey in dimensionUpdaters) {
      const needUpdate = dimensionUpdaters[dimensionKey].find(item => item.triggers.some(t => oldProps[t] !== props[t]));

      if (needUpdate) {
        updaters.push(needUpdate.updater);
      }
    }

    return updaters.length ? updaters : null;
  }

  getHexagons() {
    const hexagonAggregator = this.props.hexagonAggregator;
    const viewport = this.context.viewport;

    const _hexagonAggregator = hexagonAggregator(this.props, viewport),
          hexagons = _hexagonAggregator.hexagons,
          hexagonVertices = _hexagonAggregator.hexagonVertices;

    this.updateRadiusAngle(hexagonVertices);
    this.setState({
      hexagons
    });
    this.getSortedBins();
  }

  getPickingInfo(_ref2) {
    let info = _ref2.info;
    const _this$state = this.state,
          sortedColorBins = _this$state.sortedColorBins,
          sortedElevationBins = _this$state.sortedElevationBins;
    const isPicked = info.picked && info.index > -1;
    let object = null;

    if (isPicked) {
      const cell = this.state.hexagons[info.index];
      const colorValue = sortedColorBins.binMap[cell.index] && sortedColorBins.binMap[cell.index].value;
      const elevationValue = sortedElevationBins.binMap[cell.index] && sortedElevationBins.binMap[cell.index].value;
      object = Object.assign({
        colorValue,
        elevationValue
      }, cell);
    }

    return Object.assign(info, {
      picked: Boolean(object),
      object
    });
  }

  getUpdateTriggers() {
    const dimensionUpdaters = this.state.dimensionUpdaters;
    const updateTriggers = {};

    for (const dimensionKey in dimensionUpdaters) {
      updateTriggers[dimensionKey] = {};

      for (const step of dimensionUpdaters[dimensionKey]) {
        step.triggers.forEach(prop => {
          updateTriggers[dimensionKey][prop] = this.props[prop];
        });
      }
    }

    return updateTriggers;
  }

  updateRadiusAngle(vertices) {
    let radius = this.props.radius;
    let angle = 90;

    if (Array.isArray(vertices)) {
      if (vertices.length < 6) {
        log.error('HexagonCellLayer: hexagonVertices needs to be an array of 6 points')();
      }

      const vertex0 = vertices[0];
      const vertex3 = vertices[3];
      const viewport = this.context.viewport;

      const _viewport$getDistance = viewport.getDistanceScales(),
            pixelsPerMeter = _viewport$getDistance.pixelsPerMeter;

      const spaceCoord0 = this.projectFlat(vertex0);
      const spaceCoord3 = this.projectFlat(vertex3);
      const dx = spaceCoord0[0] - spaceCoord3[0];
      const dy = spaceCoord0[1] - spaceCoord3[1];
      const dxy = Math.sqrt(dx * dx + dy * dy);
      angle = Math.acos(dx / dxy) * -Math.sign(dy) / Math.PI * 180 + 90;
      radius = dxy / 2 / pixelsPerMeter[0];
    }

    this.setState({
      angle,
      radius
    });
  }

  getValueDomain() {
    this.getColorValueDomain();
    this.getElevationValueDomain();
  }

  getSortedBins() {
    this.getSortedColorBins();
    this.getSortedElevationBins();
  }

  getSortedColorBins() {
    const getColorValue = this.state.getColorValue;
    const sortedColorBins = new BinSorter(this.state.hexagons || [], getColorValue);
    this.setState({
      sortedColorBins
    });
    this.getColorValueDomain();
  }

  getSortedElevationBins() {
    const getElevationValue = this.state.getElevationValue;
    const sortedElevationBins = new BinSorter(this.state.hexagons || [], getElevationValue);
    this.setState({
      sortedElevationBins
    });
    this.getElevationValueDomain();
  }

  getColorValueDomain() {
    const _this$props2 = this.props,
          lowerPercentile = _this$props2.lowerPercentile,
          upperPercentile = _this$props2.upperPercentile,
          onSetColorDomain = _this$props2.onSetColorDomain;

    if (lowerPercentile > upperPercentile) {
      log.warn('HexagonLayer: lowerPercentile is bigger than upperPercentile')();
    }

    this.state.colorValueDomain = this.state.sortedColorBins.getValueRange([lowerPercentile, upperPercentile]);

    if (typeof onSetColorDomain === 'function') {
      onSetColorDomain(this.state.colorValueDomain);
    }

    this.getColorScale();
  }

  getElevationValueDomain() {
    const _this$props3 = this.props,
          elevationLowerPercentile = _this$props3.elevationLowerPercentile,
          elevationUpperPercentile = _this$props3.elevationUpperPercentile,
          onSetElevationDomain = _this$props3.onSetElevationDomain;
    this.state.elevationValueDomain = this.state.sortedElevationBins.getValueRange([elevationLowerPercentile, elevationUpperPercentile]);

    if (typeof onSetElevationDomain === 'function') {
      onSetElevationDomain(this.state.elevationValueDomain);
    }

    this.getElevationScale();
  }

  getColorScale() {
    const colorRange = this.props.colorRange;
    const colorDomain = this.props.colorDomain || this.state.colorValueDomain;
    this.state.colorScaleFunc = getQuantizeScale(colorDomain, colorRange);
  }

  getElevationScale() {
    const elevationRange = this.props.elevationRange;
    const elevationDomain = this.props.elevationDomain || this.state.elevationValueDomain;
    this.state.elevationScaleFunc = getLinearScale(elevationDomain, elevationRange);
  }

  _onGetSublayerColor(cell) {
    const _this$state2 = this.state,
          sortedColorBins = _this$state2.sortedColorBins,
          colorScaleFunc = _this$state2.colorScaleFunc,
          colorValueDomain = _this$state2.colorValueDomain;
    const cv = sortedColorBins.binMap[cell.index] && sortedColorBins.binMap[cell.index].value;
    const colorDomain = this.props.colorDomain || colorValueDomain;
    const isColorValueInDomain = cv >= colorDomain[0] && cv <= colorDomain[colorDomain.length - 1];
    const color = isColorValueInDomain ? colorScaleFunc(cv) : [0, 0, 0, 0];
    color[3] = Number.isFinite(color[3]) ? color[3] : 255;
    return color;
  }

  _onGetSublayerElevation(cell) {
    const _this$state3 = this.state,
          sortedElevationBins = _this$state3.sortedElevationBins,
          elevationScaleFunc = _this$state3.elevationScaleFunc,
          elevationValueDomain = _this$state3.elevationValueDomain;
    const ev = sortedElevationBins.binMap[cell.index] && sortedElevationBins.binMap[cell.index].value;
    const elevationDomain = this.props.elevationDomain || elevationValueDomain;
    const isElevationValueInDomain = ev >= elevationDomain[0] && ev <= elevationDomain[elevationDomain.length - 1];
    return isElevationValueInDomain ? elevationScaleFunc(ev) : -1;
  }

  renderLayers() {
    const _this$props4 = this.props,
          elevationScale = _this$props4.elevationScale,
          extruded = _this$props4.extruded,
          coverage = _this$props4.coverage,
          material = _this$props4.material,
          transitions = _this$props4.transitions;
    const _this$state4 = this.state,
          angle = _this$state4.angle,
          radius = _this$state4.radius;
    const SubLayerClass = this.getSubLayerClass('hexagon-cell', ColumnLayer);
    return new SubLayerClass({
      radius,
      diskResolution: 6,
      elevationScale,
      angle,
      extruded,
      coverage,
      material,
      getFillColor: this._onGetSublayerColor.bind(this),
      getElevation: this._onGetSublayerElevation.bind(this),
      transitions: transitions && {
        getFillColor: transitions.getColorValue || transitions.getColorWeight,
        getElevation: transitions.getElevationValue || transitions.getElevationWeight
      }
    }, this.getSubLayerProps({
      id: 'hexagon-cell',
      updateTriggers: this.getUpdateTriggers()
    }), {
      data: this.state.hexagons
    });
  }

}
HexagonLayer.layerName = 'HexagonLayer';
HexagonLayer.defaultProps = defaultProps;
//# sourceMappingURL=hexagon-layer.js.map