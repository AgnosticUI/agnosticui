/**
 * @typedef {import('../../../types/DesignToken.d.ts').TransformedTokens} Tokens
 * @typedef {import('../../../types/DesignToken.d.ts').TransformedToken} Token
 * @param {string[]} path
 * @param {Tokens} tokensObj
 * @returns {Token|undefined}
 */
export default function getValueByPath(path: string[], tokensObj: Tokens): Token | undefined;
export type Tokens = import("../../../types/DesignToken.d.ts").TransformedTokens;
export type Token = import("../../../types/DesignToken.d.ts").TransformedToken;
