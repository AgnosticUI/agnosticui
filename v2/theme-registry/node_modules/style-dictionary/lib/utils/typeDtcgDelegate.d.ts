/**
 * @typedef {import('../../types/DesignToken.d.ts').DesignTokens} DesignTokens
 * @typedef {import('../../types/DesignToken.d.ts').DesignToken} DesignToken
 * @typedef {import('../../types/DesignToken.d.ts').PreprocessedTokens} PreprocessedTokens
 */
/**
 * @param {DesignTokens} tokens
 * @returns {PreprocessedTokens}
 */
export function typeDtcgDelegate(tokens: DesignTokens): PreprocessedTokens;
export type DesignTokens = import("../../types/DesignToken.d.ts").DesignTokens;
export type DesignToken = import("../../types/DesignToken.d.ts").DesignToken;
export type PreprocessedTokens = import("../../types/DesignToken.d.ts").PreprocessedTokens;
