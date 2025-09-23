/**
 *
 * This is for creating the comment at the top of generated files with the generated at date.
 * It will use the custom file header if defined on the configuration, or use the
 * default file header.
 * @memberof module:formatHelpers
 * @name fileHeader
 * @param {Object} opts
 * @param {File} [opts.file] - The file object that is passed to the format.
 * @param {'short' | 'xml' | 'long'} [opts.commentStyle] - The only options are 'short', 'xml' and 'long', which will use the // or \<!-- --> or \/\* style comments respectively. Default fallback is 'long'.
 * @param {Formatting} [opts.formatting] - Custom formatting properties that define parts of a comment in code. The configurable strings are: prefix, lineSeparator, header, and footer.
 * @param {Config} [opts.options]
 * @returns {Promise<string>}
 * @example
 * ```js
 * StyleDictionary.registerFormat({
 *   name: 'myCustomFormat',
 *   format: function({ dictionary, file }) {
 *     return fileHeader({file, commentStyle: commentStyles.short}) +
 *       dictionary.allTokens.map(token => `${token.name} = ${token.value}`)
 *         .join('\n');
 *   }
 * });
 * ```
 */
export default function fileHeader({ file, commentStyle, formatting, options }: {
    file?: import("../../../types/File.d.ts").File | undefined;
    commentStyle?: "short" | "long" | "xml" | undefined;
    formatting?: import("../../../types/File.d.ts").FormattingOptions | undefined;
    options?: import("../../../types/Config.d.ts").Config | undefined;
}): Promise<string>;
export type File = import("../../../types/File.d.ts").File;
export type FileHeader = import("../../../types/File.d.ts").FileHeader;
export type Formatting = import("../../../types/File.d.ts").FormattingOptions;
export type Config = import("../../../types/Config.d.ts").Config;
