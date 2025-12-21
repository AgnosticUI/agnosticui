/**
 * @typedef {import('../types/Volume.d.ts').Volume} Volume
 * @typedef {import('../types/Config.d.ts').PlatformConfig} PlatformConfig
 */
/**
 * Takes a platform config object and a dictionary
 * object and cleans all the files. Dictionary object
 * should have been transformed and resolved before this
 * point.
 * @memberOf StyleDictionary
 * @param {PlatformConfig} platform
 * @param {Volume} [vol]
 */
export default function cleanFiles(platform: PlatformConfig, vol?: Volume): Promise<Record<"warning" | "success", string[]>[] | undefined>;
export type Volume = import("../types/Volume.d.ts").Volume;
export type PlatformConfig = import("../types/Config.d.ts").PlatformConfig;
