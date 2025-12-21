/**
 * @typedef {import('../../../types/Config.d.ts').RegexOptions} RegexOptions
 * Checks if the value uses a value reference.
 * @memberof Dictionary
 * @param {string|any} value
 * @param {RegExp|RegexOptions} [regexOrOptions]
 * @returns {boolean} - True, if the value uses a value reference
 */
export default function usesReferences(value: string | any, regexOrOptions?: RegExp | RegexOptions): boolean;
/**
 * Checks if the value uses a value reference.
 */
export type RegexOptions = import("../../../types/Config.d.ts").RegexOptions;
