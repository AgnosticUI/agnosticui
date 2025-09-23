/**
 * @param {string | Blob} stringOrBlob
 * @param {string} filename
 */
export function downloadJSON(stringOrBlob: string | Blob, filename?: string): void;
/**
 * @param {Record<string, string> | Blob} filesOrBlob
 * @param {string} filename
 */
export function downloadZIP(filesOrBlob: Record<string, string> | Blob, filename?: string): Promise<void>;
