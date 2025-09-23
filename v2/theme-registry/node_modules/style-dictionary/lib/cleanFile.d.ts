/**
 * Takes the style property object and a format and returns a
 * string that can be written to a file.
 * @memberOf StyleDictionary
 * @param {File} file
 * @param {PlatformConfig} [platform]
 * @param {Volume} [vol]
 */
export default function cleanFile(file: File, platform?: PlatformConfig, vol?: Volume): Promise<Record<"warning" | "success", string[]>>;
export type Volume = import("../types/Volume.d.ts").Volume;
export type File = import("../types/File.d.ts").File;
export type PlatformConfig = import("../types/Config.d.ts").PlatformConfig;
