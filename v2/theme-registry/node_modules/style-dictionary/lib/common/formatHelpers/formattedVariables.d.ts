/**
 *
 * This is used to create lists of variables like Sass variables or CSS custom properties
 * @memberof module:formatHelpers
 * @name formattedVariables
 * @param {Object} options
 * @param {String} options.format - What type of variables to output. Options are: css, sass, less, and stylus
 * @param {Dictionary} options.dictionary - The dictionary object that gets passed to the format method.
 * @param {OutputReferences} [options.outputReferences] - Whether or not to output references
 * @param {Boolean} [options.outputReferenceFallbacks] - Whether or not to output a faLLback value for output references
 * @param {Formatting} [options.formatting] - Custom formatting properties that define parts of a declaration line in code. This will get passed to `formatHelpers` -> `createPropertyformat` and used for the `lineSeparator` between lines of code.
 * @param {Boolean} [options.themeable] [false] - Whether tokens should default to being themeable.
 * @param {boolean} [options.usesDtcg] [false] - Whether DTCG token syntax should be uses.
 * @returns {String}
 * @example
 * ```js
 * import { propertyFormatNames } from 'style-dictionary/enums';
 *
 * StyleDictionary.registerFormat({
 *   name: 'myCustomFormat',
 *   format: function({ dictionary, options }) {
 *     return formattedVariables({
 *       format: propertyFormatNames.less,
 *       dictionary,
 *       outputReferences: options.outputReferences
 *     });
 *   }
 * });
 * ```
 */
export default function formattedVariables({ format, dictionary, outputReferences, outputReferenceFallbacks, formatting, themeable, usesDtcg, }: {
    format: string;
    dictionary: Dictionary;
    outputReferences?: import("../../../types/Format.d.ts").OutputReferences | undefined;
    outputReferenceFallbacks?: boolean | undefined;
    formatting?: import("../../../types/File.d.ts").FormattingOptions | undefined;
    themeable?: boolean | undefined;
    usesDtcg?: boolean | undefined;
}): string;
export type Token = import("../../../types/DesignToken.d.ts").TransformedToken;
export type Tokens = import("../../../types/DesignToken.d.ts").TransformedTokens;
export type Formatting = import("../../../types/File.d.ts").FormattingOptions;
export type OutputReferences = import("../../../types/Format.d.ts").OutputReferences;
export type Dictionary = import("../../../types/DesignToken.d.ts").Dictionary;
