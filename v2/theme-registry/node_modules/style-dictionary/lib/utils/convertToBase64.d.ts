/**
 * @typedef {import('../../types/Volume.d.ts').Volume} Volume
 * Takes a file and converts it to a base64 string.
 * @private
 * @param {string} filePath - Path to the file you want base64'd
 * @param {Volume} [vol]
 * @returns {Promise<string>}
 */
export default function convertToBase64(filePath: string, vol?: Volume): Promise<string>;
/**
 * Takes a file and converts it to a base64 string.
 */
export type Volume = import("../../types/Volume.d.ts").Volume;
