export class Register {
    /**
     * Below is a ton of boilerplate. Explanation:
     *
     * You can register things on the StyleDictionary class level e.g. StyleDictionary.registerFormat()
     * You can also register these things on StyleDictionary instance (through config) or on StyleDictionary instance's platform property.
     *
     * Therefore, we have to make use of static props vs instance props and use getters and setters to merge these together.
     */
    static hooks: Required<import("../types/Config.d.ts").Hooks>;
    /**
     * @param {typeof Register | Register} target
     * @param {keyof Hooks} hook
     * @param {string} name
     */
    static deleteExistingHook(target: typeof Register | Register, hook: keyof Hooks, name: string): void;
    /**
     * @param {Transform} cfg
     */
    static registerTransform(cfg: Transform): void;
    /**
     * @param {Transform} transform
     * @param {typeof Register | Register} target
     */
    static __registerTransform(transform: Transform, target: typeof Register | Register): typeof Register;
    /**
     * @param {{ name: string; transforms: string[]; }} cfg
     */
    static registerTransformGroup(cfg: {
        name: string;
        transforms: string[];
    }): void;
    /**
     * @param {{ name: string; transforms: string[]; }} transformGroup
     * @param {typeof Register | Register} target
     */
    static __registerTransformGroup(transformGroup: {
        name: string;
        transforms: string[];
    }, target: typeof Register | Register): typeof Register | Register;
    /**
     * @param {Format} cfg
     */
    static registerFormat(cfg: Format): void;
    /**
     * @param  {Format} format
     * @param {typeof Register | Register} target
     */
    static __registerFormat(format: Format, target: typeof Register | Register): typeof Register | Register;
    /**
     * @param {Action} cfg
     */
    static registerAction(cfg: Action): void;
    /**
     * @param {Action} action
     * @param {typeof Register | Register} target
     */
    static __registerAction(action: Action, target: typeof Register | Register): typeof Register | Register;
    /**
     * @param {Filter} cfg
     */
    static registerFilter(cfg: Filter): void;
    /**
     * @param {Filter} filter
     * @param {typeof Register | Register} target
     */
    static __registerFilter(filter: Filter, target: typeof Register | Register): typeof Register | Register;
    /**
     * @param {Parser} cfg
     */
    static registerParser(cfg: Parser): void;
    /**
     * @param {Parser} parser
     * @param {typeof Register | Register} target
     */
    static __registerParser(parser: Parser, target: typeof Register | Register): typeof Register | Register;
    /**
     * @param {Preprocessor} cfg
     */
    static registerPreprocessor(cfg: Preprocessor): void;
    /**
     * @param {Preprocessor} cfg
     * @param {typeof Register | Register} target
     */
    static __registerPreprocessor(cfg: Preprocessor, target: typeof Register | Register): typeof Register | Register;
    /**
     * @param {{name: string; fileHeader: FileHeader;}} cfg
     */
    static registerFileHeader(cfg: {
        name: string;
        fileHeader: FileHeader;
    }): void;
    /**
     * @param {{name: string; fileHeader: FileHeader;}} cfg
     * @param {typeof Register | Register} target
     */
    static __registerFileHeader(cfg: {
        name: string;
        fileHeader: FileHeader;
    }, target: typeof Register | Register): typeof Register | Register;
    /**
     * @param {Required<Hooks>} v
     */
    set hooks(v: Required<Hooks>);
    /** @type {Required<Hooks>} */
    get hooks(): Required<Hooks>;
    _hooks: Required<import("../types/Config.d.ts").Hooks> | undefined;
    /**
     * @param {Transform} cfg
     */
    registerTransform(cfg: Transform): void;
    /**
     * @param {{ name: string; transforms: string[]; }} cfg
     */
    registerTransformGroup(cfg: {
        name: string;
        transforms: string[];
    }): void;
    /**
     * @param {Format} cfg
     */
    registerFormat(cfg: Format): void;
    /**
     * @param {Action} cfg
     */
    registerAction(cfg: Action): void;
    /**
     * @param {Filter} cfg
     */
    registerFilter(cfg: Filter): void;
    /**
     * @param {Parser} cfg
     */
    registerParser(cfg: Parser): void;
    /**
     * @param {Preprocessor} cfg
     */
    registerPreprocessor(cfg: Preprocessor): void;
    /**
     * @param {{name: string; fileHeader: FileHeader;}} cfg
     */
    registerFileHeader(cfg: {
        name: string;
        fileHeader: FileHeader;
    }): void;
}
export type FileHeader = import("../types/File.d.ts").FileHeader;
export type Parser = import("../types/Parser.d.ts").Parser;
export type Preprocessor = import("../types/Preprocessor.d.ts").Preprocessor;
export type Transform = import("../types/Transform.d.ts").Transform;
export type Filter = import("../types/Filter.d.ts").Filter;
export type Format = import("../types/Format.d.ts").Format;
export type Action = import("../types/Action.d.ts").Action;
export type Hooks = import("../types/Config.d.ts").Hooks;
