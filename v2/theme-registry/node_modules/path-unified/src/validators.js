/**
 * Create a list string in the form like 'A and B' or 'A, B, ..., and Z'.
 * We cannot use Intl.ListFormat because it's not available in
 * --without-intl builds.
 * @param {string[]} array An array of strings.
 * @param {string} [type] The list type to be inserted before the last element.
 * @returns {string}
 */
function formatList(array, type = 'and') {
  switch (array.length) {
    case 0:
      return '';
    case 1:
      return `${array[0]}`;
    case 2:
      return `${array[0]} ${type} ${array[1]}`;
    case 3:
      return `${array[0]}, ${array[1]}, ${type} ${array[2]}`;
    default:
      return `${array.slice(0, -1).join(', ')}, ${type} ${array[array.length - 1]}`;
  }
}

const kTypes = [
  'string',
  'function',
  'number',
  'object',
  // Accept 'Function' and 'Object' as alternative to the lower cased version.
  'Function',
  'Object',
  'boolean',
  'bigint',
  'symbol',
];

const classRegExp = /^[A-Z][a-zA-Z0-9]*$/;

/**
 * @param {string} name
 * @param {string|string[]} expected
 * @param {*} actual
 */
function getMessage(name, expected, actual) {
  if (!Array.isArray(expected)) {
    expected = [expected];
  }

  let msg = 'The ';
  if (name.endsWith(' argument')) {
    // For cases like 'first argument'
    msg += `${name} `;
  } else {
    const type = name.includes('.') ? 'property' : 'argument';
    msg += `"${name}" ${type} `;
  }
  msg += 'must be ';

  const types = [];
  const instances = [];
  const other = [];

  for (const value of expected) {
    if (kTypes.includes(value)) {
      types.push(value.toLowerCase());
    } else if (classRegExp.exec(value) !== null) {
      instances.push(value);
    } else {
      other.push(value);
    }
  }

  // Special handle `object` in case other instances are allowed to outline
  // the differences between each other.
  if (instances.length > 0) {
    const pos = types.indexOf('object');
    if (pos !== -1) {
      types.splice(pos, 1);
      instances.push('Object');
    }
  }

  if (types.length > 0) {
    msg += `${types.length > 1 ? 'one of type' : 'of type'} ${formatList(types, 'or')}`;
    if (instances.length > 0 || other.length > 0) msg += ' or ';
  }

  if (instances.length > 0) {
    msg += `an instance of ${formatList(instances, 'or')}`;
    if (other.length > 0) msg += ' or ';
  }

  if (other.length > 0) {
    if (other.length > 1) {
      msg += `one of ${formatList(other, 'or')}`;
    } else {
      if (other[0].toLowerCase() !== other[0]) msg += 'an ';
      msg += `${other[0]}`;
    }
  }

  msg += `. Received ${typeof actual}`;
  return msg;
}

/**
 * In order not to have to fork too much,
 * we're simplifying this node error type
 */
class ERR_INVALID_ARG_TYPE extends Error {
  /**
   * @param {string} name
   * @param {string|string[]} expected
   * @param {*} actual
   */
  constructor(name, expected, actual) {
    const msg = getMessage(name, expected, actual);
    super(msg);
    this.name = 'ERR_INVALID_ARG_TYPE';
  }
}

const kValidateObjectNone = 0;
const kValidateObjectAllowNullable = 1 << 0;
const kValidateObjectAllowArray = 1 << 1;
const kValidateObjectAllowFunction = 1 << 2;

/**
 * @callback validateObject
 * @param {*} value
 * @param {string} name
 * @param {number} [options]
 */

/** @type {validateObject} */
export const validateObject = (value, name, options = kValidateObjectNone) => {
  if (options === kValidateObjectNone) {
    if (value === null || Array.isArray(value)) {
      throw new ERR_INVALID_ARG_TYPE(name, 'Object', value);
    }

    if (typeof value !== 'object') {
      throw new ERR_INVALID_ARG_TYPE(name, 'Object', value);
    }
  } else {
    const throwOnNullable = (kValidateObjectAllowNullable & options) === 0;

    if (throwOnNullable && value === null) {
      throw new ERR_INVALID_ARG_TYPE(name, 'Object', value);
    }

    const throwOnArray = (kValidateObjectAllowArray & options) === 0;

    if (throwOnArray && Array.isArray(value)) {
      throw new ERR_INVALID_ARG_TYPE(name, 'Object', value);
    }

    const throwOnFunction = (kValidateObjectAllowFunction & options) === 0;
    const typeofValue = typeof value;

    if (typeofValue !== 'object' && (throwOnFunction || typeofValue !== 'function')) {
      throw new ERR_INVALID_ARG_TYPE(name, 'Object', value);
    }
  }
};

/**
 * @callback validateString
 * @param {*} value
 * @param {string} name
 * @returns {asserts value is string}
 */

/** @type {validateString} */
export const validateString = (value, name) => {
  if (typeof value !== 'string') throw new ERR_INVALID_ARG_TYPE(name, 'string', value);
};
