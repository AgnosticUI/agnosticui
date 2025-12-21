/**
 * @typedef {import('../../types/Volume.d.ts').Volume} Volume
 * @typedef {import('../../types/Config.d.ts').Config} Config
 * @typedef {import('../../types/DesignToken.d.ts').DesignTokens} DesignTokens
 */
/**
 * @param {string} filePath
 * @param {Volume} [vol] - Filesystem volume to use
 */
export function loadFile(filePath: string, vol?: Volume): Promise<import("../../types/DesignToken.d.ts").DesignTokens | import("../../types/Config.d.ts").Config | undefined>;
export type Volume = import("../../types/Volume.d.ts").Volume;
export type Config = import("../../types/Config.d.ts").Config;
export type DesignTokens = import("../../types/DesignToken.d.ts").DesignTokens;
