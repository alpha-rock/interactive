"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _core = require("@deck.gl/core");

var _shaderModule = _interopRequireDefault(require("./shader-module"));

var defaultProps = {
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
var DATA_TYPE_FROM_SIZE = {
  1: 'float',
  2: 'vec2',
  3: 'vec3',
  4: 'vec4'
};

var DataFilterExtension = function (_LayerExtension) {
  (0, _inherits2.default)(DataFilterExtension, _LayerExtension);

  function DataFilterExtension() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$filterSize = _ref.filterSize,
        filterSize = _ref$filterSize === void 0 ? 1 : _ref$filterSize;

    (0, _classCallCheck2.default)(this, DataFilterExtension);

    if (!DATA_TYPE_FROM_SIZE[filterSize]) {
      throw new Error('filterSize out of range');
    }

    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DataFilterExtension).call(this, {
      filterSize: filterSize
    }));
  }

  (0, _createClass2.default)(DataFilterExtension, [{
    key: "getShaders",
    value: function getShaders(extension) {
      var filterSize = extension.opts.filterSize;
      return {
        modules: [_shaderModule.default],
        defines: {
          DATAFILTER_TYPE: DATA_TYPE_FROM_SIZE[filterSize]
        }
      };
    }
  }, {
    key: "initializeState",
    value: function initializeState(context, extension) {
      var attributeManager = this.getAttributeManager();

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
  }]);
  return DataFilterExtension;
}(_core.LayerExtension);

exports.default = DataFilterExtension;
DataFilterExtension.extensionName = 'DataFilterExtension';
DataFilterExtension.defaultProps = defaultProps;
//# sourceMappingURL=data-filter.js.map