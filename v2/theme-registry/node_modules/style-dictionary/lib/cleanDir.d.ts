/**
 * @typedef {import('../types/Volume.d.ts').Volume} Volume
 * @typedef {import('../types/Config.d.ts').PlatformConfig} Config
 * @typedef {import('../types/File.d.ts').File} File
 */
/**
 * Takes the style property object and a format and returns a
 * string that can be written to a file.
 * @memberOf StyleDictionary
 * @param {File} file
 * @param {Config} [platform]
 * @param {Volume} [vol]
 */
export default function cleanDir(file: File, platform?: Config, vol?: Volume): Promise<void>;
export type Volume = import("../types/Volume.d.ts").Volume;
export type Config = import("../types/Config.d.ts").PlatformConfig;
export type File = import("../types/File.d.ts").File;
