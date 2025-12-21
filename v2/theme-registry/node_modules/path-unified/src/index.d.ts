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
export const resolve: typeof winResolve;
export const normalize: typeof winNormalize;
export const isAbsolute: typeof winIsAbsolute;
export const join: typeof winJoin;
export const relative: typeof winRelative;
export const toNamespacedPath: typeof winToNamespacedPath;
export const dirname: typeof winDirname;
export const basename: typeof winBasename;
export const extname: typeof winExtname;
export const format: (pathObject: {
    dir?: string | undefined;
    root?: string | undefined;
    base?: string | undefined;
    name?: string | undefined;
    ext?: string | undefined;
}) => string;
export const parse: typeof winParse;
export const sep: "/" | "\\";
export const delimiter: ";" | ":";
declare namespace __posix { }
declare namespace __win32 { }
import { winResolve } from './path.js';
import { winNormalize } from './path.js';
import { winIsAbsolute } from './path.js';
import { winJoin } from './path.js';
import { winRelative } from './path.js';
import { winToNamespacedPath } from './path.js';
import { winDirname } from './path.js';
import { winBasename } from './path.js';
import { winExtname } from './path.js';
import { winFormat } from './path.js';
import { winParse } from './path.js';
import { winSep } from './path.js';
import { winDelimiter } from './path.js';
import { posResolve } from './path.js';
import { posNormalize } from './path.js';
import { posIsAbsolute } from './path.js';
import { posJoin } from './path.js';
import { posRelative } from './path.js';
import { posToNamespacedPath } from './path.js';
import { posDirname } from './path.js';
import { posBasename } from './path.js';
import { posExtname } from './path.js';
import { posFormat } from './path.js';
import { posParse } from './path.js';
import { posSep } from './path.js';
import { posDelimiter } from './path.js';
