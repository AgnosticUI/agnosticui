/**
 * @typedef {import('../types/Volume.d.ts').Volume} Volume
 */
/**
 * Allow to be overridden by setter, set default to memfs for browser env, node:fs for node env
 * Default CJS export when converted to ESM, messes up the types a bit so we need to
 * cast the default import to type of Volume by first casting to unknown...
 */
export let fs: Volume;
export function setFs(_fs: Volume, isNodeFS?: boolean): void;
export type Volume = import("../types/Volume.d.ts").Volume;
