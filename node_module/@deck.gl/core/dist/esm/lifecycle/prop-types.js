import _typeof from "@babel/runtime/helpers/esm/typeof";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var TYPE_DEFINITIONS = {
  boolean: {
    validate: function validate(value, propType) {
      return true;
    },
    equal: function equal(value1, value2, propType) {
      return Boolean(value1) === Boolean(value2);
    }
  },
  number: {
    validate: function validate(value, propType) {
      return Number.isFinite(value) && (!('max' in propType) || value <= propType.max) && (!('min' in propType) || value >= propType.min);
    }
  },
  color: {
    validate: function validate(value, propType) {
      return isArray(value) && (value.length === 3 || value.length === 4);
    },
    equal: function equal(value1, value2, propType) {
      return arrayEqual(value1, value2);
    }
  },
  accessor: {
    validate: function validate(value, propType) {
      var valueType = getTypeOf(value);
      return valueType === 'function' || valueType === getTypeOf(propType.value);
    },
    equal: function equal(value1, value2, propType) {
      if (typeof value2 === 'function') {
        return true;
      }

      return arrayEqual(value1, value2);
    }
  },
  array: {
    validate: function validate(value, propType) {
      return propType.optional && !value || isArray(value);
    },
    equal: function equal(value1, value2, propType) {
      return propType.compare ? arrayEqual(value1, value2) : value1 === value2;
    }
  },
  function: {
    validate: function validate(value, propType) {
      return propType.optional && !value || typeof value === 'function';
    },
    equal: function equal(value1, value2, propType) {
      return !propType.compare || value1 === value2;
    }
  }
};

function arrayEqual(array1, array2) {
  if (array1 === array2) {
    return true;
  }

  if (!isArray(array1) || !isArray(array2)) {
    return false;
  }

  var len = array1.length;

  if (len !== array2.length) {
    return false;
  }

  for (var i = 0; i < len; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

export function parsePropTypes(propDefs) {
  var propTypes = {};
  var defaultProps = {};
  var deprecatedProps = {};

  var _arr = Object.entries(propDefs);

  for (var _i = 0; _i < _arr.length; _i++) {
    var _arr$_i = _slicedToArray(_arr[_i], 2),
        propName = _arr$_i[0],
        propDef = _arr$_i[1];

    if (propDef && propDef.deprecatedFor) {
      deprecatedProps[propName] = Array.isArray(propDef.deprecatedFor) ? propDef.deprecatedFor : [propDef.deprecatedFor];
    } else {
      var propType = parsePropType(propName, propDef);
      propTypes[propName] = propType;
      defaultProps[propName] = propType.value;
    }
  }

  return {
    propTypes: propTypes,
    defaultProps: defaultProps,
    deprecatedProps: deprecatedProps
  };
}

function parsePropType(name, propDef) {
  switch (getTypeOf(propDef)) {
    case 'object':
      return normalizePropDefinition(name, propDef);

    case 'array':
      return normalizePropDefinition(name, {
        type: 'array',
        value: propDef,
        compare: false
      });

    case 'boolean':
      return normalizePropDefinition(name, {
        type: 'boolean',
        value: propDef
      });

    case 'number':
      return normalizePropDefinition(name, {
        type: 'number',
        value: propDef
      });

    case 'function':
      return normalizePropDefinition(name, {
        type: 'function',
        value: propDef,
        compare: true
      });

    default:
      return {
        name: name,
        type: 'unknown',
        value: propDef
      };
  }
}

function normalizePropDefinition(name, propDef) {
  if (!('type' in propDef)) {
    if (!('value' in propDef)) {
      return {
        name: name,
        type: 'object',
        value: propDef
      };
    }

    return Object.assign({
      name: name,
      type: getTypeOf(propDef.value)
    }, propDef);
  }

  return Object.assign({
    name: name
  }, TYPE_DEFINITIONS[propDef.type], propDef);
}

function isArray(value) {
  return Array.isArray(value) || ArrayBuffer.isView(value);
}

function getTypeOf(value) {
  if (isArray(value)) {
    return 'array';
  }

  if (value === null) {
    return 'null';
  }

  return _typeof(value);
}
//# sourceMappingURL=prop-types.js.map