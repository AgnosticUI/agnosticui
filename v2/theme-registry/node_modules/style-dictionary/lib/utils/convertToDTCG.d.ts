/**
 * @param {DesignTokens} dictionary
 * @param {{applyTypesToGroup?: boolean}} [opts]
 */
export function convertToDTCG(dictionary: DesignTokens, opts?: {
    applyTypesToGroup?: boolean;
}): import("../../types/DesignToken.d.ts").DesignTokens;
/**
 * @param {Entry} entry
 */
export function resolveZIPEntryData(entry: Entry): Promise<(string | undefined)[]>;
/**
 * @param {Blob} zipBlob
 * @returns {Promise<Record<string, string>>}
 */
export function readZIP(zipBlob: Blob): Promise<Record<string, string>>;
/**
 *
 * @param {Record<string, string>} zipEntries
 */
export function writeZIP(zipEntries: Record<string, string>): Promise<Blob>;
/**
 * @param {Blob|string} blobOrPath
 * @param {{applyTypesToGroup?: boolean}} [opts]
 */
export function convertJSONToDTCG(blobOrPath: Blob | string, opts?: {
    applyTypesToGroup?: boolean;
}): Promise<Blob>;
/**
 * @param {Blob|string} blobOrPath
 * @param {{applyTypesToGroup?: boolean}} [opts]
 */
export function convertZIPToDTCG(blobOrPath: Blob | string, opts?: {
    applyTypesToGroup?: boolean;
}): Promise<Blob>;
export type Entry = import("@zip.js/zip.js").Entry;
export type DesignToken = import("../../types/DesignToken.d.ts").DesignToken;
export type DesignTokens = import("../../types/DesignToken.d.ts").DesignTokens;
