/**
 * @typedef {import('../../types/DesignToken.d.ts').DesignTokens} Tokens
 * @typedef {import('../../types/DesignToken.d.ts').TransformedTokens} TransformedTokens
 */
/**
 * TODO: see if we can use deepmerge instead of maintaining our own utility
 * Main reason for having our own is that we have a collision function that warns users
 * when props from different objects collide, e.g. multiple token files colliding on the same token name
 * https://github.com/TehShrike/deepmerge/issues/262 created a feature request
 *
 * Performs an deep extend on the objects, from right to left.
 * @private
 * @template {Object} T - Generic type T extends from "Object", to be maximally permissive
 * @param {Array<T>} objects - An array of JS objects
 * @param {{collision?: Function, overrideKeys?: string[]}} [opts] - deepExtend options to change its behavior.
 * @param {string[]} [path] - (for internal use) An array of strings which is the current path down the object when this is called recursively.
 * @returns {T}
 */
export default function deepExtend<T extends Object>(objects: Array<T>, opts?: {
    collision?: Function;
    overrideKeys?: string[];
}, path?: string[]): T;
export type Tokens = import("../../types/DesignToken.d.ts").DesignTokens;
export type TransformedTokens = import("../../types/DesignToken.d.ts").TransformedTokens;
