/**
 * Takes an plain javascript object and will make a flat array of all the leaf nodes.
 * A leaf node in this context has a 'value' property. Potentially refactor this to
 * be more generic.
 * @template {Token | TransformedToken} T
 * @template {Tokens | TransformedTokens} U
 * @param  {U} tokens - The plain object you want flattened into an array.
 * @param {boolean} [usesDtcg] - Whether or not tokens are using DTCG syntax.
 * @return {Array<T>}
 */
export default function flattenTokens<T extends Token | TransformedToken, U extends Tokens | TransformedTokens>(tokens: U, usesDtcg?: boolean): Array<T>;
export type Token = import("../../types/DesignToken.ts").DesignToken;
export type Tokens = import("../../types/DesignToken.ts").DesignTokens;
export type TransformedToken = import("../../types/DesignToken.ts").TransformedToken;
export type TransformedTokens = import("../../types/DesignToken.ts").TransformedTokens;
