export type validateObject = (value: any, name: string, options?: number | undefined) => any;
/**
 * @callback validateObject
 * @param {*} value
 * @param {string} name
 * @param {number} [options]
 */
/** @type {validateObject} */
export const validateObject: validateObject;
export type validateString = (value: any, name: string) => asserts value is string;
/**
 * @callback validateString
 * @param {*} value
 * @param {string} name
 * @returns {asserts value is string}
 */
/** @type {validateString} */
export const validateString: validateString;
