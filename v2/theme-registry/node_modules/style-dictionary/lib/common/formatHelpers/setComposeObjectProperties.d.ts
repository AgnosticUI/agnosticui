/**
 * @typedef {import('../../../types/Config.d.ts').LocalOptions} Options
 */
/**
 * Outputs an object for compose format configurations. Sets import.
 * @memberof module:formatHelpers
 * @name setComposeObjectProperties
 * @param {{import?:string[]}} [options] - The options object declared at configuration
 * @returns {Object}
 */
export default function setComposeObjectProperties(options?: {
    import?: string[];
}): Object;
export type Options = import("../../../types/Config.d.ts").LocalOptions;
