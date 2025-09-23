import { isWindows } from './isWindows.js';
import {
  winResolve,
  winNormalize,
  winIsAbsolute,
  winJoin,
  winRelative,
  winToNamespacedPath,
  winDirname,
  winBasename,
  winExtname,
  winFormat,
  winParse,
  winSep,
  winDelimiter,
  posResolve,
  posNormalize,
  posIsAbsolute,
  posJoin,
  posRelative,
  posToNamespacedPath,
  posDirname,
  posBasename,
  posExtname,
  posFormat,
  posParse,
  posSep,
  posDelimiter,
} from './path.js';

// browser-compatible windows check
const platformIsWin32 = isWindows();

const __win32 = {
  resolve: winResolve,
  normalize: winNormalize,
  isAbsolute: winIsAbsolute,
  join: winJoin,
  relative: winRelative,
  toNamespacedPath: winToNamespacedPath,
  dirname: winDirname,
  basename: winBasename,
  extname: winExtname,
  format: winFormat,
  parse: winParse,
  sep: winSep,
  delimiter: winDelimiter,
};

const __posix = {
  resolve: posResolve,
  normalize: posNormalize,
  isAbsolute: posIsAbsolute,
  join: posJoin,
  relative: posRelative,
  toNamespacedPath: posToNamespacedPath,
  dirname: posDirname,
  basename: posBasename,
  extname: posExtname,
  format: posFormat,
  parse: posParse,
  sep: posSep,
  delimiter: posDelimiter,
};

// import { win32 } from 'path-unified' -> bad for treeshaking
export const win32 = {
  ...__win32,
  posix: __posix, // this makes it bad for treeshaking too since otherwise we'd only need to load posix stuff... but keeping it to support current path API
  win32: __win32,
};

// import { posix } from 'path-unified' -> bad for treeshaking
export const posix = {
  ...__posix,
  posix: __posix,
  win32: __win32, // this makes it bad for treeshaking too since otherwise we'd only need to load posix stuff... but keeping it to support current path API
};

// import path from 'path-unified' -> bad for treeshaking
export default platformIsWin32 ? win32 : posix;

// import { resolve } from 'path-unified' -> ideal for treeshaking
export const resolve = platformIsWin32 ? winResolve : posResolve;
export const normalize = platformIsWin32 ? winNormalize : posNormalize;
export const isAbsolute = platformIsWin32 ? winIsAbsolute : posIsAbsolute;
export const join = platformIsWin32 ? winJoin : posJoin;
export const relative = platformIsWin32 ? winRelative : posRelative;
export const toNamespacedPath = platformIsWin32 ? winToNamespacedPath : posToNamespacedPath;
export const dirname = platformIsWin32 ? winDirname : posDirname;
export const basename = platformIsWin32 ? winBasename : posBasename;
export const extname = platformIsWin32 ? winExtname : posExtname;
export const format = platformIsWin32 ? winFormat : posFormat;
export const parse = platformIsWin32 ? winParse : posParse;
export const sep = platformIsWin32 ? winSep : posSep;
export const delimiter = platformIsWin32 ? winDelimiter : posDelimiter;
