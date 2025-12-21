/**
 * @typedef {import('../../../types/Config.d.ts').LocalOptions} Options
 */
/**
 * Outputs an object with swift format configurations. Sets import, object type and access control.
 * @memberof module:formatHelpers
 * @name setSwiftFileProperties
 * @param {{objectType?:string; import?: string[]; accessControl?: string;}} options - The options object declared at configuration
 * @param {String} [objectType] - The type of the object in the final file. Could be a class, enum, struct, etc.
 * @param {String} [transformGroup] - The transformGroup of the file, so it can be applied proper import
 */
export default function setSwiftFileProperties(options: {
    objectType?: string;
    import?: string[];
    accessControl?: string;
}, objectType?: string, transformGroup?: string): {
    objectType?: string;
    import?: string[];
    accessControl?: string;
};
export type Options = import("../../../types/Config.d.ts").LocalOptions;
