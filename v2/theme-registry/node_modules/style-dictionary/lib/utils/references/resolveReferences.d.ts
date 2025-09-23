/**
 * @typedef {import('../../../types/Config.d.ts').ResolveReferencesOptions} RefOpts
 * @typedef {import('../../../types/Config.d.ts').ResolveReferencesOptionsInternal} RefOptsInternal
 * @typedef {import('../../../types/DesignToken.d.ts').PreprocessedTokens} Tokens
 * @typedef {import('../../../types/DesignToken.d.ts').DesignToken} Token
 */
/**
 * Public API wrapper around the functon below this one
 * @param {string} value
 * @param {Tokens} tokens
 * @param {RefOpts} [opts]
 * @returns {string|number|undefined}
 */
export function resolveReferences(value: string, tokens: Tokens, opts?: RefOpts): string | number | undefined;
/**
 * Utility to resolve references inside a string value
 * @param {string} value
 * @param {Tokens} tokens
 * @param {RefOptsInternal} [opts]
 * @returns {string|number|undefined}
 */
export function _resolveReferences(value: string, tokens: Tokens, { regex, separator, opening_character, closing_character, usesDtcg, warnImmediately, ignorePaths, current_context, stack, foundCirc, firstIteration, }?: RefOptsInternal): string | number | undefined;
export type RefOpts = import("../../../types/Config.d.ts").ResolveReferencesOptions;
export type RefOptsInternal = import("../../../types/Config.d.ts").ResolveReferencesOptionsInternal;
export type Tokens = import("../../../types/DesignToken.d.ts").PreprocessedTokens;
export type Token = import("../../../types/DesignToken.d.ts").DesignToken;
