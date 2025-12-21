/**
 * Returns the paths name be joining its parts with a given separator.
 *
 * @typedef {import('../../../types/Config.d.ts').RegexOptions} RegexOptions
 *
 * @private
 * @param {string[]} path
 * @param {RegexOptions} [opts]
 * @returns {string} - The paths name
 */
export default function getName(path: string[], opts?: RegexOptions): string;
/**
 * Returns the paths name be joining its parts with a given separator.
 */
export type RegexOptions = import("../../../types/Config.d.ts").RegexOptions;
