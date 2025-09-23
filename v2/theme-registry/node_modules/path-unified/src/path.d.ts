/**
 * path.resolve([from ...], to)
 * @param {...string} args
 * @returns {string}
 */
export function winResolve(...args: string[]): string;
/**
 * @param {string} path
 * @returns {string}
 */
export function winNormalize(path: string): string;
/**
 * @param {string} path
 * @returns {boolean}
 */
export function winIsAbsolute(path: string): boolean;
/**
 * @param {...string} args
 * @returns {string}
 */
export function winJoin(...args: string[]): string;
/**
 * It will solve the relative path from `from` to `to`, for instance
 * from = 'C:\\orandea\\test\\aaa'
 * to = 'C:\\orandea\\impl\\bbb'
 * The output of the function should be: '..\\..\\impl\\bbb'
 * @param {string} from
 * @param {string} to
 * @returns {string}
 */
export function winRelative(from: string, to: string): string;
/**
 * @param {string} path
 * @returns {string}
 */
export function winToNamespacedPath(path: string): string;
/**
 * @param {string} path
 * @returns {string}
 */
export function winDirname(path: string): string;
/**
 * @param {string} path
 * @param {string} [suffix]
 * @returns {string}
 */
export function winBasename(path: string, suffix?: string | undefined): string;
/**
 * @param {string} path
 * @returns {string}
 */
export function winExtname(path: string): string;
/**
 * @param {string} path
 * @returns {{
 *  dir: string;
 *  root: string;
 *  base: string;
 *  name: string;
 *  ext: string;
 *  }}
 */
export function winParse(path: string): {
    dir: string;
    root: string;
    base: string;
    name: string;
    ext: string;
};
/**
 * path.resolve([from ...], to)
 * @param {...string} args
 * @returns {string}
 */
export function posResolve(...args: string[]): string;
/**
 * @param {string} path
 * @returns {string}
 */
export function posNormalize(path: string): string;
/**
 * @param {string} path
 * @returns {boolean}
 */
export function posIsAbsolute(path: string): boolean;
/**
 * @param {...string} args
 * @returns {string}
 */
export function posJoin(...args: string[]): string;
/**
 * @param {string} from
 * @param {string} to
 * @returns {string}
 */
export function posRelative(from: string, to: string): string;
/**
 * @param {string} path
 * @returns {string}
 */
export function posToNamespacedPath(path: string): string;
/**
 * @param {string} path
 * @returns {string}
 */
export function posDirname(path: string): string;
/**
 * @param {string} path
 * @param {string} [suffix]
 * @returns {string}
 */
export function posBasename(path: string, suffix?: string | undefined): string;
/**
 * @param {string} path
 * @returns {string}
 */
export function posExtname(path: string): string;
/**
 * @param {string} path
 * @returns {{
 *   dir: string;
 *   root: string;
 *   base: string;
 *   name: string;
 *   ext: string;
 *   }}
 */
export function posParse(path: string): {
    dir: string;
    root: string;
    base: string;
    name: string;
    ext: string;
};
/**
 * @param {string} sep
 * @param {{
 *  dir?: string;
 *  root?: string;
 *  base?: string;
 *  name?: string;
 *  ext?: string;
 *  }} pathObject
 * @returns {string}
 */
export const winFormat: (pathObject: {
    dir?: string | undefined;
    root?: string | undefined;
    base?: string | undefined;
    name?: string | undefined;
    ext?: string | undefined;
}) => string;
export const winSep: "\\";
export const winDelimiter: ";";
/**
 * @param {string} sep
 * @param {{
 *  dir?: string;
 *  root?: string;
 *  base?: string;
 *  name?: string;
 *  ext?: string;
 *  }} pathObject
 * @returns {string}
 */
export const posFormat: (pathObject: {
    dir?: string | undefined;
    root?: string | undefined;
    base?: string | undefined;
    name?: string | undefined;
    ext?: string | undefined;
}) => string;
export const posSep: "/";
export const posDelimiter: ":";
export namespace win32 {
    export { __posix as posix };
    export { __win32 as win32 };
    export { winResolve as resolve };
    export { winNormalize as normalize };
    export { winIsAbsolute as isAbsolute };
    export { winJoin as join };
    export { winRelative as relative };
    export { winToNamespacedPath as toNamespacedPath };
    export { winDirname as dirname };
    export { winBasename as basename };
    export { winExtname as extname };
    export { winFormat as format };
    export { winParse as parse };
    export { winSep as sep };
    export { winDelimiter as delimiter };
}
export namespace posix {
    export { __posix as posix };
    export { __win32 as win32 };
    export { posResolve as resolve };
    export { posNormalize as normalize };
    export { posIsAbsolute as isAbsolute };
    export { posJoin as join };
    export { posRelative as relative };
    export { posToNamespacedPath as toNamespacedPath };
    export { posDirname as dirname };
    export { posBasename as basename };
    export { posExtname as extname };
    export { posFormat as format };
    export { posParse as parse };
    export { posSep as sep };
    export { posDelimiter as delimiter };
}
declare namespace _default { }
export default _default;
/**
 * path.resolve([from ...], to)
 * @param {...string} args
 * @returns {string}
 */
export function resolve(...args: string[]): string;
/**
 * @param {string} path
 * @returns {string}
 */
export function normalize(path: string): string;
/**
 * @param {string} path
 * @returns {boolean}
 */
export function isAbsolute(path: string): boolean;
/**
 * @param {...string} args
 * @returns {string}
 */
export function join(...args: string[]): string;
/**
 * It will solve the relative path from `from` to `to`, for instance
 * from = 'C:\\orandea\\test\\aaa'
 * to = 'C:\\orandea\\impl\\bbb'
 * The output of the function should be: '..\\..\\impl\\bbb'
 * @param {string} from
 * @param {string} to
 * @returns {string}
 */
export function relative(from: string, to: string): string;
/**
 * @param {string} path
 * @returns {string}
 */
export function toNamespacedPath(path: string): string;
/**
 * @param {string} path
 * @returns {string}
 */
export function dirname(path: string): string;
/**
 * @param {string} path
 * @param {string} [suffix]
 * @returns {string}
 */
export function basename(path: string, suffix?: string | undefined): string;
/**
 * @param {string} path
 * @returns {string}
 */
export function extname(path: string): string;
export const format: (pathObject: {
    dir?: string | undefined;
    root?: string | undefined;
    base?: string | undefined;
    name?: string | undefined;
    ext?: string | undefined;
}) => string;
/**
 * @param {string} path
 * @returns {{
 *  dir: string;
 *  root: string;
 *  base: string;
 *  name: string;
 *  ext: string;
 *  }}
 */
export function parse(path: string): {
    dir: string;
    root: string;
    base: string;
    name: string;
    ext: string;
};
export const sep: "/" | "\\";
export const delimiter: ";" | ":";
declare namespace __posix { }
declare namespace __win32 { }
