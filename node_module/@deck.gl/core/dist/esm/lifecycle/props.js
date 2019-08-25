import _typeof from "@babel/runtime/helpers/esm/typeof";
import assert from '../utils/assert';
export function validateProps(props) {
  var propTypes = getPropTypes(props);

  for (var propName in propTypes) {
    var propType = propTypes[propName];
    var validate = propType.validate;

    if (validate && !validate(props[propName], propType)) {
      throw new Error("Invalid prop ".concat(propName, ": ").concat(props[propName]));
    }
  }
}
export function diffProps(props, oldProps) {
  var propsChangedReason = compareProps({
    newProps: props,
    oldProps: oldProps,
    propTypes: getPropTypes(props),
    ignoreProps: {
      data: null,
      updateTriggers: null,
      extensions: null
    }
  });
  var dataChangedReason = diffDataProps(props, oldProps);
  var updateTriggersChangedReason = false;

  if (!dataChangedReason) {
    updateTriggersChangedReason = diffUpdateTriggers(props, oldProps);
  }

  return {
    dataChanged: dataChangedReason,
    propsChanged: propsChangedReason,
    updateTriggersChanged: updateTriggersChangedReason,
    extensionsChanged: diffExtensions(props, oldProps)
  };
}
export function compareProps() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      newProps = _ref.newProps,
      oldProps = _ref.oldProps,
      _ref$ignoreProps = _ref.ignoreProps,
      ignoreProps = _ref$ignoreProps === void 0 ? {} : _ref$ignoreProps,
      _ref$propTypes = _ref.propTypes,
      propTypes = _ref$propTypes === void 0 ? {} : _ref$propTypes,
      _ref$triggerName = _ref.triggerName,
      triggerName = _ref$triggerName === void 0 ? 'props' : _ref$triggerName;

  assert(oldProps !== undefined && newProps !== undefined, 'compareProps args');

  if (oldProps === newProps) {
    return null;
  }

  if (_typeof(newProps) !== 'object' || newProps === null) {
    return "".concat(triggerName, " changed shallowly");
  }

  if (_typeof(oldProps) !== 'object' || oldProps === null) {
    return "".concat(triggerName, " changed shallowly");
  }

  var _arr = Object.keys(newProps);

  for (var _i = 0; _i < _arr.length; _i++) {
    var key = _arr[_i];

    if (!(key in ignoreProps)) {
      if (!(key in oldProps)) {
        return "".concat(triggerName, ".").concat(key, " added");
      }

      var changed = comparePropValues(newProps[key], oldProps[key], propTypes[key]);

      if (changed) {
        return "".concat(triggerName, ".").concat(key, " ").concat(changed);
      }
    }
  }

  var _arr2 = Object.keys(oldProps);

  for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
    var _key = _arr2[_i2];

    if (!(_key in ignoreProps)) {
      if (!(_key in newProps)) {
        return "".concat(triggerName, ".").concat(_key, " dropped");
      }

      if (!Object.hasOwnProperty.call(newProps, _key)) {
        var _changed = comparePropValues(newProps[_key], oldProps[_key], propTypes[_key]);

        if (_changed) {
          return "".concat(triggerName, ".").concat(_key, " ").concat(_changed);
        }
      }
    }
  }

  return null;
}

function comparePropValues(newProp, oldProp, propType) {
  var equal = propType && propType.equal;

  if (equal && !equal(newProp, oldProp, propType)) {
    return 'changed deeply';
  }

  if (!equal) {
    equal = newProp && oldProp && newProp.equals;

    if (equal && !equal.call(newProp, oldProp)) {
      return 'changed deeply';
    }
  }

  if (!equal && oldProp !== newProp) {
    return 'changed shallowly';
  }

  return null;
}

function diffDataProps(props, oldProps) {
  if (oldProps === null) {
    return 'oldProps is null, initial diff';
  }

  var dataChanged = null;
  var dataComparator = props.dataComparator,
      _dataDiff = props._dataDiff;

  if (dataComparator) {
    if (!dataComparator(props.data, oldProps.data)) {
      dataChanged = 'Data comparator detected a change';
    }
  } else if (props.data !== oldProps.data) {
    dataChanged = 'A new data container was supplied';
  }

  if (dataChanged && _dataDiff) {
    dataChanged = _dataDiff(props.data, oldProps.data) || dataChanged;
  }

  return dataChanged;
}

function diffUpdateTriggers(props, oldProps) {
  if (oldProps === null) {
    return 'oldProps is null, initial diff';
  }

  if ('all' in props.updateTriggers) {
    var diffReason = diffUpdateTrigger(props, oldProps, 'all');

    if (diffReason) {
      return {
        all: true
      };
    }
  }

  var triggerChanged = {};
  var reason = false;

  for (var triggerName in props.updateTriggers) {
    if (triggerName !== 'all') {
      var _diffReason = diffUpdateTrigger(props, oldProps, triggerName);

      if (_diffReason) {
        triggerChanged[triggerName] = true;
        reason = triggerChanged;
      }
    }
  }

  return reason;
}

function diffExtensions(props, oldProps) {
  if (oldProps === null) {
    return 'oldProps is null, initial diff';
  }

  var oldExtensions = oldProps.extensions;
  var extensions = props.extensions;

  if (extensions === oldExtensions) {
    return false;
  }

  if (extensions.length !== oldExtensions.length) {
    return true;
  }

  for (var i = 0; i < extensions.length; i++) {
    if (!extensions[i].equals(oldExtensions[i])) {
      return true;
    }
  }

  return false;
}

function diffUpdateTrigger(props, oldProps, triggerName) {
  var newTriggers = props.updateTriggers[triggerName];
  newTriggers = newTriggers === undefined || newTriggers === null ? {} : newTriggers;
  var oldTriggers = oldProps.updateTriggers[triggerName];
  oldTriggers = oldTriggers === undefined || oldTriggers === null ? {} : oldTriggers;
  var diffReason = compareProps({
    oldProps: oldTriggers,
    newProps: newTriggers,
    triggerName: triggerName
  });
  return diffReason;
}

function getPropTypes(props) {
  var layer = props._component;
  var LayerType = layer && layer.constructor;
  return LayerType ? LayerType._propTypes : {};
}
//# sourceMappingURL=props.js.map