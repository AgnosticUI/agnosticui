export default formats;
export type Format = import("../../types/Format.d.ts").Format;
export type FormatArgs = import("../../types/Format.d.ts").FormatFnArguments;
export type FormattingOverrides = import("../../types/File.d.ts").FormattingOverrides;
export type OutputReferences = import("../../types/Format.d.ts").OutputReferences;
export type Token = import("../../types/DesignToken.d.ts").TransformedToken;
export type Tokens = import("../../types/DesignToken.d.ts").TransformedTokens;
export type Config = import("../../types/Config.d.ts").Config;
export type LocalOptions = import("../../types/Config.d.ts").LocalOptions;
export type StripMetaOptions = import("../utils/stripMeta.js").StripMetaOptions;
/**
 * @type {Record<string, Format['format']>}
 */
declare const formats: Record<string, Format["format"]>;
