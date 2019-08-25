import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
const TYPE_DEFINITIONS = {
  boolean: {
    validate(value, propType) {
      return true;
    },

    equal(value1, value2, propType) {
      return Boolean(value1) === Boolean(value2);
    }

  },
  number: {
    validate(value, propType) {
      return Number.isFinite(value) && (!('max' in propType) || value <= propType.max) && (!('min' in propType) || value >= propType.min);
    }

  },
  color: {
    validate(value, propType) {
      return isArray(value) && (value.length === 3 || value.length === 4);
    },

    equal(value1, value2, propType) {
      return arrayEqual(value1, value2);
    }

  },
  accessor: {
    validate(value, propType) {
      const valueType = getTypeOf(value);
      return valueType === 'function' || valueType === getTypeOf(propType.value);
    },

    equal(value1, value2, propType) {
      if (typeof value2 === 'function') {
        return true;
      }

      return arrayEqual(value1, value2);
    }

  },
  array: {
    validate(value, propType) {
      return propType.optional && !value || isArray(value);
    },

    equal(value1, value2, propType) {
      return propType.compare ? arrayEqual(value1, value2) : value1 === value2;
    }

  },
  function: {
    validate(value, propType) {
      return propType.optional && !value || typeof value === 'function';
    },

    equal(value1, value2, propType) {
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

  const len = array1.length;

  if (len !== array2.length) {
    return false;
  }

  for (let i = 0; i < len; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

export function parsePropTypes(propDefs) {
  const propTypes = {};
  const defaultProps = {};
  const deprecatedProps = {};

  for (const _ref of Object.entries(propDefs)) {
    var _ref2 = _slicedToArray(_ref, 2);

    const propName = _ref2[0];
    const propDef = _ref2[1];

    if (propDef && propDef.deprecatedFor) {
      deprecatedProps[propName] = Array.isArray(propDef.deprecatedFor) ? propDef.deprecatedFor : [propDef.deprecatedFor];
    } else {
      const propType = parsePropType(propName, propDef);
      propTypes[propName] = propType;
      defaultProps[propName] = propType.value;
    }
  }

  return {
    propTypes,
    defaultProps,
    deprecatedProps
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
        name,
        type: 'unknown',
        value: propDef
      };
  }
}

function normalizePropDefinition(name, propDef) {
  if (!('type' in propDef)) {
    if (!('value' in propDef)) {
      return {
        name,
        type: 'object',
        value: propDef
      };
    }

    return Object.assign({
      name,
      type: getTypeOf(propDef.value)
    }, propDef);
  }

  return Object.assign({
    name
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

  return typeof value;
}
//# sourceMappingURL=prop-types.js.map