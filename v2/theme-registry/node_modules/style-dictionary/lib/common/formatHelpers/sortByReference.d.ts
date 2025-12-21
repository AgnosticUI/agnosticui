/**
 * A function that returns a sorting function to be used with Array.sort that
 * will sort the allTokens array based on references. This is to make sure
 * if you use output references that you never use a reference before it is
 * defined.
 * @memberof module:formatHelpers
 * @name sortByReference
 * @example
 * ```javascript
 * dictionary.allTokens.sort(sortByReference(dictionary))
 * ```
 * @param {Tokens} tokens
 * @param {{unfilteredTokens?: Tokens, usesDtcg?: boolean}} [opts]
 * @returns {(a: Token, b: Token) => number}
 */
export default function sortByReference(tokens: Tokens, { unfilteredTokens, usesDtcg }?: {
    unfilteredTokens?: Tokens;
    usesDtcg?: boolean;
}): (a: Token, b: Token) => number;
export type Tokens = import("../../../types/DesignToken.d.ts").TransformedTokens;
export type Token = import("../../../types/DesignToken.d.ts").TransformedToken;
