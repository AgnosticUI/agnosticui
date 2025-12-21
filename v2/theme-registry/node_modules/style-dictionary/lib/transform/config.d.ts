/**
 * Takes a platform platformConfig object and returns a new one
 * that has filters, transforms, formats, and actions
 * mapped properly.
 * @private
 * @param {PlatformConfig} platformConfig
 * @param {StyleDictionary} dictionary
 * @param {string} platformName (only used for error messaging)
 * @returns {PlatformConfig}
 */
export default function transformConfig(platformConfig: PlatformConfig, dictionary: StyleDictionary, platformName: string): PlatformConfig;
export type StyleDictionary = import("../StyleDictionary.js").default;
export type Transform = import("../../types/Transform.d.ts").Transform;
export type File = import("../../types/File.d.ts").File;
export type Action = import("../../types/Action.d.ts").Action;
export type PlatformConfig = import("../../types/Config.d.ts").PlatformConfig;
