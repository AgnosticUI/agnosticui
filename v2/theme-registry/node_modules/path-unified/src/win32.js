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
} from './path.js';

export const resolve = winResolve;
export const normalize = winNormalize;
export const isAbsolute = winIsAbsolute;
export const join = winJoin;
export const relative = winRelative;
export const toNamespacedPath = winToNamespacedPath;
export const dirname = winDirname;
export const basename = winBasename;
export const extname = winExtname;
export const format = winFormat;
export const parse = winParse;
export const sep = winSep;
export const delimiter = winDelimiter;

export default {
  resolve,
  normalize,
  isAbsolute,
  join,
  relative,
  toNamespacedPath,
  dirname,
  basename,
  extname,
  format,
  parse,
  sep,
  delimiter,
};
