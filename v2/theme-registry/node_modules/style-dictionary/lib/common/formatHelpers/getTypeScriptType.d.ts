/**
 * @typedef {import('../../../types/Config.d.ts').LocalOptions} Options
 * @typedef {import('../../../types/Config.d.ts').Config} Config
 */
/**
 * Given some value, returns a basic valid TypeScript type for that value.
 * Supports numbers, strings, booleans, arrays and objects of any of those types.
 *
 * @memberof module:formatHelpers
 * @name getTypeScriptType
 * @example
 * ```javascript
 * StyleDictionary.registerFormat({
 *   name: 'myCustomFormat',
 *   format: function({ dictionary, options }) {
 *    return dictionary.allTokens.map(function(prop) {
 *      var to_ret_prop = 'export const ' + prop.name + ' : ' + getTypeScriptType(prop.value) + ';';
 *      if (prop.comment)
 *        to_ret_prop = to_ret_prop.concat(' // ' + prop.comment);
 *      return to_ret_prop;
 *    }).join('\n');
 *   }
 * });
 *```
 * @param {any} value A value to check the type of.
 * @param {Config & {outputStringLiterals?: boolean}} [options]
 * @return {String} A valid name for a TypeScript type.
 *
 */
export default function getTypeScriptType(value: any, options?: Config & {
    outputStringLiterals?: boolean;
}): string;
export type Options = import("../../../types/Config.d.ts").LocalOptions;
export type Config = import("../../../types/Config.d.ts").Config;
