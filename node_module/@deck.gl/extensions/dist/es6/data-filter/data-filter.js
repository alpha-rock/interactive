import { LayerExtension } from '@deck.gl/core';
import shaderModule from './shader-module';
const defaultProps = {
  getFilterValue: {
    type: 'accessor',
    value: 0
  },
  filterEnabled: true,
  filterRange: [-1, 1],
  filterSoftRange: null,
  filterTransformSize: true,
  filterTransformColor: true
};
const DATA_TYPE_FROM_SIZE = {
  1: 'float',
  2: 'vec2',
  3: 'vec3',
  4: 'vec4'
};
export default class DataFilterExtension extends LayerExtension {
  constructor() {
    let _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$filterSize = _ref.filterSize,
        filterSize = _ref$filterSize === void 0 ? 1 : _ref$filterSize;

    if (!DATA_TYPE_FROM_SIZE[filterSize]) {
      throw new Error('filterSize out of range');
    }

    super({
      filterSize
    });
  }

  getShaders(extension) {
    const filterSize = extension.opts.filterSize;
    return {
      modules: [shaderModule],
      defines: {
        DATAFILTER_TYPE: DATA_TYPE_FROM_SIZE[filterSize]
      }
    };
  }

  initializeState(context, extension) {
    const attributeManager = this.getAttributeManager();

    if (attributeManager) {
      attributeManager.add({
        filterValues: {
          size: extension.opts.filterSize,
          accessor: 'getFilterValue',
          shaderAttributes: {
            filterValues: {
              divisor: 0
            },
            instanceFilterValues: {
              divisor: 1
            }
          }
        }
      });
    }
  }

}
DataFilterExtension.extensionName = 'DataFilterExtension';
DataFilterExtension.defaultProps = defaultProps;
//# sourceMappingURL=data-filter.js.map