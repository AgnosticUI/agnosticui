/**
 * @typedef {import('../../types/Volume.d.ts').Volume} Volume
 * @typedef {import('../../types/DesignToken.d.ts').PreprocessedTokens} Tokens
 * @typedef {import('../../types/DesignToken.d.ts').TransformedTokens} TransformedTokens
 * @typedef {import('../../types/DesignToken.d.ts').DesignToken} Token
 * @typedef {import('../../types/DesignToken.d.ts').TransformedToken} TransformedToken
 * @typedef {import('../../types/Config.d.ts').PlatformConfig} PlatformConfig
 * @typedef {import('../../types/Config.d.ts').Config} Config
 */
/**
 * Applies transforms on all tokens. This
 * does not happen inline, rather it is functional
 * and returns a new object. By doing this,
 * we can perform transforms for different platforms
 * on the same style dictionary.
 * @private
 * @param {Tokens|TransformedTokens} obj
 * @param {PlatformConfig} config
 * @param {Config} options
 * @param {{ transformedPropRefs?: string[], deferredPropValueTransforms?: string[] }} [ctx]
 * @param {string[]} [path]
 * @param {Record<string, Tokens|TransformedTokens|Token|TransformedToken>} [transformedObj]
 * @param {Volume} [volume]
 * @returns {Promise<TransformedTokens>}
 */
export default function transformObject(obj: Tokens | TransformedTokens, config: PlatformConfig, options: Config, { transformedPropRefs, deferredPropValueTransforms }?: {
    transformedPropRefs?: string[];
    deferredPropValueTransforms?: string[];
}, path?: string[], transformedObj?: Record<string, Tokens | TransformedTokens | Token | TransformedToken>, volume?: Volume): Promise<TransformedTokens>;
export type Volume = import("../../types/Volume.d.ts").Volume;
export type Tokens = import("../../types/DesignToken.d.ts").PreprocessedTokens;
export type TransformedTokens = import("../../types/DesignToken.d.ts").TransformedTokens;
export type Token = import("../../types/DesignToken.d.ts").DesignToken;
export type TransformedToken = import("../../types/DesignToken.d.ts").TransformedToken;
export type PlatformConfig = import("../../types/Config.d.ts").PlatformConfig;
export type Config = import("../../types/Config.d.ts").Config;
