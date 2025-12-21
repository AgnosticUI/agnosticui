/**
 * Takes a dictionary and filters the `allTokens` array and the `tokens`
 * object using a function provided by the user.
 *
 * @param {Dictionary} dictionary
 * @param {Filter['filter']} [filter] - A function that receives a token object
 *   and returns `true` if the token should be included in the output
 *   or `false` if the token should be excluded from the output
 * @param {Config} [options]
 * @returns {Promise<Dictionary>} dictionary - A new dictionary containing only the
 *   tokens that matched the filter (or the original dictionary if no filter
 *   function was provided).
 */
export default function filterTokens(dictionary: Dictionary, filter?: Filter["filter"], options?: Config): Promise<Dictionary>;
export type Dictionary = import("../types/DesignToken.d.ts").Dictionary;
export type Tokens = import("../types/DesignToken.d.ts").TransformedTokens;
export type Token = import("../types/DesignToken.d.ts").TransformedToken;
export type Filter = import("../types/Filter.d.ts").Filter;
export type Config = import("../types/Config.d.ts").Config;
