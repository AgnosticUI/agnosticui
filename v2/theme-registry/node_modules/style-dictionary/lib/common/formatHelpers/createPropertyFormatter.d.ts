/**
 * Split a string comment by newlines and
 * convert to multi-line comment if necessary
 * @param {string} to_ret_token
 * @param {string} comment
 * @param {Formatting} options
 * @returns {string}
 */
export function addComment(to_ret_token: string, comment: string, options: Formatting): string;
/**
 * Creates a function that can be used to format a token. This can be useful
 * to use as the function on `dictionary.allTokens.map`. The formatting
 * is configurable either by supplying a `format` option or a `formatting` object
 * which uses: prefix, indentation, separator, suffix, and commentStyle.
 * @memberof module:formatHelpers
 * @name createPropertyFormatter
 * @example
 * ```javascript
 * import { propertyFormatNames } from 'style-dictionary/enums';
 *
 * StyleDictionary.registerFormat({
 *   name: 'myCustomFormat',
 *   format: function({ dictionary, options }) {
 *     const { outputReferences } = options;
 *     const formatProperty = createPropertyFormatter({
 *       outputReferences,
 *       dictionary,
 *       format: propertyFormatNames.css
 *     });
 *     return dictionary.allTokens.map(formatProperty).join('\n');
 *   }
 * });
 * ```
 * @param {Object} options
 * @param {OutputReferences} [options.outputReferences] - Whether or not to output references. You will want to pass this from the `options` object sent to the format function.
 * @param {boolean} [options.outputReferenceFallbacks] - Whether or not to output css variable fallback values when using output references. You will want to pass this from the `options` object sent to the format function.
 * @param {Dictionary} options.dictionary - The dictionary object sent to the format function
 * @param {string} [options.format] - Available formats are: 'css', 'sass', 'less', and 'stylus'. If you want to customize the format and can't use one of those predefined formats, use the `formatting` option
 * @param {Formatting} [options.formatting] - Custom formatting properties that define parts of a declaration line in code. The configurable strings are: `prefix`, `indentation`, `separator`, `suffix`, `lineSeparator`, `fileHeaderTimestamp`, `header`, `footer`, `commentStyle` and `commentPosition`. Those are used to generate a line like this: `${indentation}${prefix}${token.name}${separator} ${token.value}${suffix}`. The remaining formatting options are used for the fileHeader helper.
 * @param {boolean} [options.themeable] [false] - Whether tokens should default to being themeable.
 * @param {boolean} [options.usesDtcg] [false] - Whether DTCG token syntax should be uses.
 * @returns {(token: import('../../../types/DesignToken.d.ts').TransformedToken) => string}
 */
export default function createPropertyFormatter({ outputReferences, outputReferenceFallbacks, dictionary, format, formatting, themeable, usesDtcg, }: {
    outputReferences?: import("../../../types/Format.d.ts").OutputReferences | undefined;
    outputReferenceFallbacks?: boolean | undefined;
    dictionary: Dictionary;
    format?: string | undefined;
    formatting?: import("../../../types/File.d.ts").FormattingOptions | undefined;
    themeable?: boolean | undefined;
    usesDtcg?: boolean | undefined;
}): (token: import("../../../types/DesignToken.d.ts").TransformedToken) => string;
export type TransformedToken = import("../../../types/DesignToken.d.ts").TransformedToken;
export type Dictionary = import("../../../types/DesignToken.d.ts").Dictionary;
export type Formatting = import("../../../types/File.d.ts").FormattingOptions;
export type OutputReferences = import("../../../types/Format.d.ts").OutputReferences;
