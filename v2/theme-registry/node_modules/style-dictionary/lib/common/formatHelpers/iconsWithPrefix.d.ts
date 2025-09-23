/**
 * @typedef {import('../../../types/DesignToken.d.ts').TransformedToken} Token
 * @typedef {import('../../../types/Config.d.ts').Config} Options
 * @typedef {import('../../../types/Config.d.ts').PlatformConfig} PlatformConfig
 */
/**
 *
 * This is used to create CSS (and CSS pre-processor) lists of icons. It assumes you are
 * using an icon font and creates helper classes with the :before pseudo-selector to add
 * a unicode character.
 * __You probably don't need this.__
 * @memberof module:formatHelpers
 * @name iconsWithPrefix
 * @param {String} prefix - Character to prefix variable names, like '$' for Sass
 * @param {Token[]} allTokens - allTokens array on the dictionary object passed to the format function.
 * @param {Options} options - options object passed to the format function.
 * @param {PlatformConfig} platform - platform specific options
 * @returns {String}
 * @example
 * ```js
 * StyleDictionary.registerFormat({
 *   name: 'myCustomFormat',
 *   format: function({ dictionary, options }) {
 *     return iconsWithPrefix('$', dictionary.allTokens, options);
 *   }
 * });
 * ```
 */
export default function iconsWithPrefix(prefix: string, allTokens: Token[], options: Options, platform: PlatformConfig): string;
export type Token = import("../../../types/DesignToken.d.ts").TransformedToken;
export type Options = import("../../../types/Config.d.ts").Config;
export type PlatformConfig = import("../../../types/Config.d.ts").PlatformConfig;
