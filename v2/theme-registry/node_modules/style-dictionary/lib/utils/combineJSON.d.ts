/**
 * Takes an array of json files and merges
 * them together. Optionally does a deep extend.
 * @private
 * @param {string[]} arr - Array of paths to json (or node modules that export objects) files
 * @param {Boolean} [deep=false] - If it should perform a deep merge
 * @param {Function} [collision] - A function to be called when a name collision happens that isn't a normal deep merge of objects
 * @param {boolean} [source] - If json files are "sources", tag tokens
 * @param {Record<string, Omit<Parser, 'name'>>} [parsers] - Custom file parsers
 * @param {boolean} [usesDtcg] - Whether or not tokens are using DTCG syntax.
 * @param {Volume} [vol] - Filesystem volume to use
 * @returns {Promise<{tokens: Tokens, usesDtcg: boolean|undefined }>}
 */
export default function combineJSON(arr: string[], deep?: boolean, collision?: Function, source?: boolean, parsers?: Record<string, Omit<Parser, "name">>, usesDtcg?: boolean, vol?: Volume): Promise<{
    tokens: Tokens;
    usesDtcg: boolean | undefined;
}>;
export type Volume = import("../../types/Volume.d.ts").Volume;
export type Tokens = import("../../types/DesignToken.d.ts").DesignTokens;
export type Token = import("../../types/DesignToken.d.ts").DesignToken;
export type Parser = import("../../types/Parser.d.ts").Parser;
