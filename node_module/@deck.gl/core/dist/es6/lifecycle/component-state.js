import _asyncIterator from "@babel/runtime/helpers/esm/asyncIterator";
import log from '../utils/log';
import assert from '../utils/assert';
import { isAsyncIterable } from '../utils/iterable-utils';
const EMPTY_PROPS = Object.freeze({});
export default class ComponentState {
  constructor() {
    let component = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    this.component = component;
    this.asyncProps = {};

    this.onAsyncPropUpdated = () => {};

    this.oldProps = EMPTY_PROPS;
    this.oldAsyncProps = null;
  }

  getOldProps() {
    return this.oldAsyncProps || this.oldProps;
  }

  resetOldProps() {
    this.oldAsyncProps = null;
    this.oldProps = this.component.props;
  }

  freezeAsyncOldProps() {
    if (!this.oldAsyncProps) {
      this.oldProps = this.oldProps || this.component.props;
      this.oldAsyncProps = Object.create(this.oldProps);

      for (const propName in this.asyncProps) {
        Object.defineProperty(this.oldAsyncProps, propName, {
          enumerable: true,
          value: this.oldProps[propName]
        });
      }
    }
  }

  hasAsyncProp(propName) {
    return propName in this.asyncProps;
  }

  getAsyncProp(propName) {
    const asyncProp = this.asyncProps[propName];
    return asyncProp && asyncProp.resolvedValue;
  }

  isAsyncPropLoading(propName) {
    const asyncProp = this.asyncProps[propName];
    return Boolean(asyncProp && asyncProp.pendingLoadCount > 0 && asyncProp.pendingLoadCount !== asyncProp.resolvedLoadCount);
  }

  setAsyncProps(props) {
    const resolvedValues = props._asyncPropResolvedValues || {};
    const originalValues = props._asyncPropOriginalValues || props;
    const defaultValues = props._asyncPropDefaultValues || {};

    for (const propName in resolvedValues) {
      const value = resolvedValues[propName];

      this._createAsyncPropData(propName, value, defaultValues[propName]);

      this._updateAsyncProp(propName, value);
    }

    for (const propName in originalValues) {
      const value = originalValues[propName];

      this._createAsyncPropData(propName, value, defaultValues[propName]);

      this._updateAsyncProp(propName, value);
    }
  }

  _updateAsyncProp(propName, value) {
    if (!this._didAsyncInputValueChange(propName, value)) {
      return;
    }

    if (typeof value === 'string') {
      const fetch = this.layer.props.fetch;
      const url = value;
      value = fetch(url, {
        propName,
        layer: this.layer
      });
    }

    if (value instanceof Promise) {
      this._watchPromise(propName, value);

      return;
    }

    if (isAsyncIterable(value)) {
      this._resolveAsyncIterable(propName, value);

      return;
    }

    this._setPropValue(propName, value);
  }

  _didAsyncInputValueChange(propName, value) {
    const asyncProp = this.asyncProps[propName];

    if (value === asyncProp.lastValue) {
      return false;
    }

    asyncProp.lastValue = value;
    return true;
  }

  _setPropValue(propName, value) {
    const asyncProp = this.asyncProps[propName];
    asyncProp.value = value;
    asyncProp.resolvedValue = value;
    asyncProp.pendingLoadCount++;
    asyncProp.resolvedLoadCount = asyncProp.pendingLoadCount;
  }

  _setAsyncPropValue(propName, value, loadCount) {
    const asyncProp = this.asyncProps[propName];

    if (asyncProp && loadCount >= asyncProp.resolvedLoadCount) {
      assert(value !== undefined);
      this.freezeAsyncOldProps();
      asyncProp.resolvedValue = value;
      asyncProp.resolvedLoadCount = loadCount;
      this.onAsyncPropUpdated(propName, value);
    }
  }

  _watchPromise(propName, promise) {
    const asyncProp = this.asyncProps[propName];
    asyncProp.pendingLoadCount++;
    const loadCount = asyncProp.pendingLoadCount;
    promise.then(data => {
      data = this._postProcessValue(propName, data);

      this._setAsyncPropValue(propName, data, loadCount);

      const onDataLoad = this.layer.props.onDataLoad;

      if (propName === 'data' && onDataLoad) {
        onDataLoad(data, {
          propName,
          layer: this.layer
        });
      }
    }).catch(error => log.error(error)());
  }

  async _resolveAsyncIterable(propName, iterable) {
    if (propName !== 'data') {
      this._setPropValue(propName, iterable);
    }

    const asyncProp = this.asyncProps[propName];
    asyncProp.pendingLoadCount++;
    const loadCount = asyncProp.pendingLoadCount;
    let data = [];
    let count = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;

    var _iteratorError;

    try {
      for (var _iterator = _asyncIterator(iterable), _step, _value; _step = await _iterator.next(), _iteratorNormalCompletion = _step.done, _value = await _step.value, !_iteratorNormalCompletion; _iteratorNormalCompletion = true) {
        const chunk = _value;
        data = this._postProcessValue(propName, chunk, data);
        Object.defineProperty(data, '__diff', {
          enumerable: false,
          value: [{
            startRow: count,
            endRow: data.length
          }]
        });
        count = data.length;

        this._setAsyncPropValue(propName, data, loadCount);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          await _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    const onDataLoad = this.layer.props.onDataLoad;

    if (onDataLoad) {
      onDataLoad(data, {
        propName,
        layer: this.layer
      });
    }
  }

  _postProcessValue(propName, value, previousValue) {
    const _ref = this.component ? this.component.props : {},
          dataTransform = _ref.dataTransform;

    if (propName !== 'data') {
      return value;
    }

    if (dataTransform) {
      return dataTransform(value, previousValue);
    }

    return previousValue ? previousValue.concat(value) : value;
  }

  _createAsyncPropData(propName, value, defaultValue) {
    const asyncProp = this.asyncProps[propName];

    if (!asyncProp) {
      this.asyncProps[propName] = {
        lastValue: null,
        resolvedValue: defaultValue,
        pendingLoadCount: 0,
        resolvedLoadCount: 0
      };
    }
  }

}
//# sourceMappingURL=component-state.js.map