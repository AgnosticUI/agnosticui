/**
 * Allows converting your tokens to one of the 3 data structures available:
 * 'map' -> JavaScript Map
 * 'object' -> JavaScript Object
 * 'array' -> JavaScript Array
 *
 * The input format is automatically detected
 *
 * The return type depends on the "output" prop input, hence the use of a generic / type mapping
 * @template {keyof TypeMap} T
 * @param {Tokens | Token[] | TokenMap} tokens
 * @param {{output: T, usesDtcg?: boolean}} options
 * @return {TypeMap[T]}
 */
export function convertTokenData<T extends keyof TypeMap>(tokens: Tokens | Token[] | TokenMap, options: {
    output: T;
    usesDtcg?: boolean;
}): TypeMap[T];
export type DesignTokens = import("../../types/DesignToken").DesignTokens;
export type DesignToken = import("../../types/DesignToken").DesignToken;
export type TransformedTokens = import("../../types/DesignToken").TransformedTokens;
export type TransformedToken = import("../../types/DesignToken").TransformedToken;
export type Token = DesignToken | TransformedToken;
export type Tokens = DesignTokens | TransformedTokens;
export type TokenMap = Map<string, Token>;
export type TypeMap = {
    "map": TokenMap;
    "object": Tokens;
    "array": Token[];
};
