/**
 * @typedef {import('../types/Volume.d.ts').Volume} Volume
 * @typedef {import('../types/Config.d.ts').PlatformConfig} Config
 */
/**
 * Takes a platform config object and a tokens
 * object and cleans all the files. Tokens object
 * should have been transformed and resolved before this
 * point.
 * @memberOf StyleDictionary
 * @param {Config} platform
 * @param {Volume} [vol]
 */
export default function cleanDirs(platform: Config, vol?: Volume): Promise<void[] | undefined>;
export type Volume = import("../types/Volume.d.ts").Volume;
export type Config = import("../types/Config.d.ts").PlatformConfig;
