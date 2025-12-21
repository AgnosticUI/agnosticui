/**
 * @typedef {import('../../../types/Config.d.ts').GetReferencesOptions} GetReferencesOptions
 * @typedef {import('../../StyleDictionary.js').default} Dictionary
 * @typedef {import('../../../types/DesignToken.d.ts').TransformedTokens} Tokens
 * @typedef {import('../../../types/DesignToken.d.ts').TransformedToken} Token
 */
/**
 * This is a helper function that is added to the dictionary object that
 * is passed to formats and actions. It will resolve a reference giving
 * you access to the token (not just the value) that a value references.
 * This allows formats to have variable references in the output. For example:
 *
 * ```css
 * --color-background-base: var(--color-core-white);
 * ```
 *
 * @param {string|Object<string, string|any>} value the value that contains a reference
 * @param {Tokens} tokens the dictionary to search in
 * @param {GetReferencesOptions} [opts]
 * @param {Token[]} [references] array of token's references because a token's value can contain multiple references due to string interpolation
 * @returns {Token[]}
 */
export function getReferences(value: string | {
    [x: string]: string | any;
}, tokens: Tokens, opts?: GetReferencesOptions, references?: Token[]): Token[];
export type GetReferencesOptions = import("../../../types/Config.d.ts").GetReferencesOptions;
export type Dictionary = import("../../StyleDictionary.js").default;
export type Tokens = import("../../../types/DesignToken.d.ts").TransformedTokens;
export type Token = import("../../../types/DesignToken.d.ts").TransformedToken;
