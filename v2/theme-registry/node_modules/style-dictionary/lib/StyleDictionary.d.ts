/**
 * Style Dictionary module
 *
 * @module style-dictionary
 * @typicalname StyleDictionary
 * @example
 * ```js
 * import StyleDictionary from 'style-dictionary';
 * new StyleDictionary.extend('config.json').buildAllPlatforms();
 * ```
 */
export default class StyleDictionary extends Register {
    static VERSION: string;
    /**
     * @param {Config | string} config
     * @param {{
     *   init?: boolean,
     *   verbosity?: LogConfig['verbosity'],
     *   warnings?: LogConfig['warnings'],
     *   volume?: Volume
     * }} ctorOpts
     */
    constructor(config?: Config | string, { init, verbosity, warnings, volume }?: {
        init?: boolean;
        verbosity?: LogConfig["verbosity"];
        warnings?: LogConfig["warnings"];
        volume?: Volume;
    });
    /** @param {Config} v */
    set options(v: Config);
    /** @returns {Config} */
    get options(): Config;
    _options: import("../types/Config.d.ts").Config | undefined;
    config: string | import("../types/Config.d.ts").Config;
    /** @type {PreprocessedTokens} */
    tokens: PreprocessedTokens;
    /** @type {Token[]} */
    allTokens: Token[];
    /** @type {Map<string, Token>} */
    tokenMap: Map<string, Token>;
    /** @type {boolean | undefined} */
    usesDtcg: boolean | undefined;
    /** @type {LogConfig} */
    log: LogConfig;
    /** @type {string[]} */
    source: string[];
    /** @type {string[]} */
    include: string[];
    /** @type {ExpandConfig|undefined} */
    expand: ExpandConfig | undefined;
    /** @type {Record<string, PlatformConfig>} */
    platforms: Record<string, PlatformConfig>;
    /** @type {string[]} */
    parsers: string[];
    /** @type {string[]} */
    preprocessors: string[];
    /** @type {Volume} */
    volume: Volume;
    /**
     * Gets set after transform because filter happens on format level,
     * so we know they are transformed by then.
     * @type {TransformedTokens}
     */
    unfilteredTokens: TransformedTokens;
    /** @type {TransformedToken[]} */
    unfilteredAllTokens: TransformedToken[];
    hasInitialized: Promise<any>;
    hasInitializedResolve: (value: any) => void;
    /**
     * Storing the platform specific transformed tokens so we can prevent re-running exportPlatform when we already know the outcome
     * Same thing for platform specific configs, we don't need to call transformConfig again if we already know the outcome
     */
    /** @type {Record<string,Dictionary>} */
    _dictionaries: Record<string, Dictionary>;
    /** @type {Record<string,PlatformConfig>} */
    _platformConfigs: Record<string, PlatformConfig>;
    /**
     * @param {{verbosity?: LogConfig['verbosity'], warnings?: LogConfig['warnings']}} [opts]
     * @returns
     */
    init(opts?: {
        verbosity?: LogConfig["verbosity"];
        warnings?: LogConfig["warnings"];
    }): Promise<StyleDictionary>;
    /**
     * @param {Config | string} [config]
     * @param {{
     *   mutateOriginal?: boolean,
     *   verbosity?: LogConfig['verbosity'],
     *   warnings?: LogConfig['warnings'],
     *   volume?: Volume
     * }} [opts]
     * @returns {Promise<StyleDictionary>}
     */
    extend(config?: Config | string, opts?: {
        mutateOriginal?: boolean;
        verbosity?: LogConfig["verbosity"];
        warnings?: LogConfig["warnings"];
        volume?: Volume;
    }): Promise<StyleDictionary>;
    /**
     * @param {ExpandConfig} [expandCfg]
     * @returns
     */
    shouldRunExpansion(expandCfg?: ExpandConfig): boolean;
    /**
     * @param {string} platform
     * @param {{ cache?: boolean }} [opts]
     */
    getPlatformConfig(platform: string, opts?: {
        cache?: boolean;
    }): import("../types/Config.d.ts").PlatformConfig;
    /**
     * @param {string} platform
     * @param {{ cache?: boolean }} [opts]
     */
    getPlatformTokens(platform: string, opts?: {
        cache?: boolean;
    }): Promise<import("../types/DesignToken.d.ts").Dictionary>;
    /**
     * Public wrapper around _exportPlatform, returns only tokens object
     * Here for backwards compatibility.
     * @deprecated use getPlatformTokens instead
     *
     * @param {string} platform
     * @param {{ cache?: boolean }} [opts]
     * @returns {Promise<TransformedTokens>}
     */
    exportPlatform(platform: string, opts?: {
        cache?: boolean;
    }): Promise<TransformedTokens>;
    /**
     * @param {string} platform
     * @returns {Promise<Dictionary>}
     */
    _exportPlatform(platform: string): Promise<Dictionary>;
    /**
     * This will get the dictionary / platformConfig for specified platform name
     * Runs transforms, reference resolutions
     * @deprecated use getPlatformConfig / getPlatformTokens instead
     * @param {string} platform
     * @param {{ cache?: boolean }} [opts]
     * @returns
     */
    getPlatform(platform: string, opts?: {
        cache?: boolean;
    }): Promise<{
        dictionary: import("../types/DesignToken.d.ts").Dictionary;
        platformConfig: import("../types/Config.d.ts").PlatformConfig;
    }>;
    /**
     * Runs the format step and collects logs
     * This step may also return no output if all has been filtered out
     * Or return no destination if no destination was given,
     * this can happen if user wants to get the output in JS memory,
     * rather than outputted as a file on the filesystem
     *
     * @param {File} file
     * @param {PlatformConfig} platform
     * @param {Dictionary} dictionary
     * @returns {Promise<{
     *   logs: Record<"warning" | "success", string[]>
     *   destination?: string
     *   output?: unknown
     * }>}
     */
    formatFile(file: File, platform: PlatformConfig, dictionary: Dictionary): Promise<{
        logs: Record<"warning" | "success", string[]>;
        destination?: string;
        output?: unknown;
    }>;
    /**
     * @param {string} platform
     * @param {{ cache?: boolean }} [opts]
     */
    formatPlatform(platform: string, opts?: {
        cache?: boolean;
    }): Promise<{
        output: unknown;
        destination: string | undefined;
    }[]>;
    /**
     * @param {{ cache?: boolean }} [opts]
     * @returns
     */
    formatAllPlatforms(opts?: {
        cache?: boolean;
    }): Promise<{}>;
    /**
     * @param {string} platform
     * @param {{ cache?: boolean }} [opts]
     * @returns
     */
    buildPlatform(platform: string, opts?: {
        cache?: boolean;
    }): Promise<this>;
    /**
     * @param {{ cache?: boolean }} [opts]
     * @returns
     */
    buildAllPlatforms(opts?: {
        cache?: boolean;
    }): Promise<this>;
    /**
     * @param {string} platform
     * @param {{ cache?: boolean }} [opts]
     * @returns
     */
    cleanPlatform(platform: string, opts?: {
        cache?: boolean;
    }): Promise<this>;
    /**
     * @param {{ cache?: boolean }} [opts]
     * @returns
     */
    cleanAllPlatforms(opts?: {
        cache?: boolean;
    }): Promise<this>;
}
export type Volume = import("../types/Volume.d.ts").Volume;
export type Config = import("../types/Config.d.ts").Config;
export type PlatformConfig = import("../types/Config.d.ts").PlatformConfig;
export type LogConfig = import("../types/Config.d.ts").LogConfig;
export type Expand = import("../types/Config.d.ts").Expand;
export type ExpandConfig = import("../types/Config.d.ts").ExpandConfig;
export type File = import("../types/File.d.ts").File;
export type Filter = import("../types/Filter.d.ts").Filter;
export type Token = import("../types/DesignToken.d.ts").DesignToken;
export type TransformedToken = import("../types/DesignToken.d.ts").TransformedToken;
export type Tokens = import("../types/DesignToken.d.ts").DesignTokens;
export type PreprocessedTokens = import("../types/DesignToken.d.ts").PreprocessedTokens;
export type TransformedTokens = import("../types/DesignToken.d.ts").TransformedTokens;
export type Dictionary = import("../types/DesignToken.d.ts").Dictionary;
import { Register } from './Register.js';
