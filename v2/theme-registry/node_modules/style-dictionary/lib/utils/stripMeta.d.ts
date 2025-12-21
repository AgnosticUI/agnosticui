/**
 * @typedef {import('../../types/DesignToken.d.ts').TransformedTokens} TransformedTokens
 * @typedef {{strip?: string[]; keep?: string[]; usesDtcg?: boolean;}} StripMetaOptions
 */
/**
 * @param {TransformedTokens} obj
 * @param {StripMetaOptions} options
 */
export function _stripMeta(obj: TransformedTokens, options: StripMetaOptions): import("../../types/DesignToken.d.ts").TransformedTokens;
/**
 * @param {TransformedTokens} obj
 * @param {StripMetaOptions} options
 */
export function stripMeta(obj: TransformedTokens, options: StripMetaOptions): import("../../types/DesignToken.d.ts").TransformedTokens;
export type TransformedTokens = import("../../types/DesignToken.d.ts").TransformedTokens;
export type StripMetaOptions = {
    strip?: string[];
    keep?: string[];
    usesDtcg?: boolean;
};
