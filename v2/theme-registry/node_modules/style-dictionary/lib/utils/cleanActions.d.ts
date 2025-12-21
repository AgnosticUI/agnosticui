/**
 * @typedef {import('../../types/Volume.d.ts').Volume} Volume
 * @typedef {import('../../types/DesignToken.d.ts').Dictionary} Dictionary
 * @typedef {import('../../types/Config.d.ts').PlatformConfig} PlatformConfig
 * @typedef {import('../../types/Config.d.ts').Config} Config
 */
/**
 * Performs the undo of any actions defined in a platform. Pretty
 * simple really. Actions should be an array of functions,
 * the calling function should map the functions accordingly.
 * @static
 * @private
 * @memberof module:style-dictionary
 * @param {Dictionary} dictionary
 * @param {PlatformConfig} platform
 * @param {Config} options
 * @param {Volume} [vol]
 */
export default function cleanActions(dictionary: Dictionary, platform: PlatformConfig, options: Config, vol?: Volume): Promise<void[] | undefined>;
export type Volume = import("../../types/Volume.d.ts").Volume;
export type Dictionary = import("../../types/DesignToken.d.ts").Dictionary;
export type PlatformConfig = import("../../types/Config.d.ts").PlatformConfig;
export type Config = import("../../types/Config.d.ts").Config;
