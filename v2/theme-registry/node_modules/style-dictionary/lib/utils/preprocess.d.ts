/**
 * @typedef {import('../../types/DesignToken.d.ts').PreprocessedTokens} PreprocessedTokens
 * @typedef {import('../../types/Config.d.ts').Config} Config
 * @typedef {import('../../types/Config.d.ts').PlatformConfig} PlatformConfig
 * @typedef {import('../../types/Preprocessor.d.ts').Preprocessor} Preprocessor
 */
/**
 * Run all registered preprocessors on the dictionary,
 * returning the preprocessed dictionary in each step.
 *
 * @param {PreprocessedTokens} tokens
 * @param {string[]} [appliedPreprocessors]
 * @param {Record<string, Preprocessor['preprocessor']>} [preprocessorObj]
 * @param {Config|PlatformConfig} [options]
 * @returns {Promise<PreprocessedTokens>}
 */
export function preprocess(tokens: PreprocessedTokens, appliedPreprocessors?: string[], preprocessorObj?: Record<string, Preprocessor["preprocessor"]>, options?: Config | PlatformConfig): Promise<PreprocessedTokens>;
export type PreprocessedTokens = import("../../types/DesignToken.d.ts").PreprocessedTokens;
export type Config = import("../../types/Config.d.ts").Config;
export type PlatformConfig = import("../../types/Config.d.ts").PlatformConfig;
export type Preprocessor = import("../../types/Preprocessor.d.ts").Preprocessor;
