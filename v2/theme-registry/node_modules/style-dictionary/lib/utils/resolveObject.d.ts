/**
 *
 * @param {TransformedTokens} object
 * @param {Options} _opts
 * @returns
 */
export default function resolveObject(object: TransformedTokens, _opts?: Options): import("../../types/DesignToken.d.ts").TransformedTokens;
export type TransformedTokens = import("../../types/DesignToken.d.ts").TransformedTokens;
export type TransformedToken = import("../../types/DesignToken.d.ts").TransformedToken;
export type RegexOptions = import("../../types/Config.d.ts").RegexOptions;
export type Options = RegexOptions & {
    ignorePaths?: string[];
    ignoreKeys?: string[];
    usesDtcg?: boolean;
};
