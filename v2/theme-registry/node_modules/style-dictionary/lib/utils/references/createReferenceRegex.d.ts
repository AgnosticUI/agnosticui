/**
 * @typedef {import('../../../types/Config.d.ts').RegexOptions} RegexOptions
 * @param {RegexOptions} opts
 * @returns {RegExp}
 */
export default function createReferenceRegex(opts?: RegexOptions): RegExp;
export type RegexOptions = import("../../../types/Config.d.ts").RegexOptions;
