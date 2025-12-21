import {
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

export const resolve = posResolve;
export const normalize = posNormalize;
export const isAbsolute = posIsAbsolute;
export const join = posJoin;
export const relative = posRelative;
export const toNamespacedPath = posToNamespacedPath;
export const dirname = posDirname;
export const basename = posBasename;
export const extname = posExtname;
export const format = posFormat;
export const parse = posParse;
export const sep = posSep;
export const delimiter = posDelimiter;

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
