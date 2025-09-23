/**
 * @typedef {import('../../../types/DesignToken.d.ts').TransformedTokens} Tokens
 */
/**
 * Outputs an object stripping out everything except values
 * @memberof module:formatHelpers
 * @name minifyDictionary
 * @param {Tokens} obj - The object to minify. You will most likely pass `dictionary.tokens` to it.
 * @param {boolean} [usesDtcg] - Whether or not tokens are using DTCG syntax.
 * @returns {Tokens}
 * @example
 * ```js
 * StyleDictionary.registerFormat({
 *   name: 'myCustomFormat',
 *   format: function({ dictionary }) {
 *     return JSON.stringify(minifyDictionary(dictionary.tokens));
 *   }
 * });
 * ```
 */
export default function minifyDictionary(obj: Tokens, usesDtcg?: boolean): Tokens;
export type Tokens = import("../../../types/DesignToken.d.ts").TransformedTokens;
