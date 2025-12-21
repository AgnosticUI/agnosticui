/**
 * @typedef {import('../../types/DesignToken.js').Dictionary} Dictionary
 * @typedef {import('../../types/Config.d.ts').PlatformConfig} PlatformConfig
 * @typedef {import('../../types/Config.d.ts').Config} Options
 * @typedef {import('../../types/File.d.ts').File} File
 * @typedef {import('../../types/Format.d.ts').FormatFnArguments} FormatFnArguments
 *

/**
 * @param {FormatFnArguments} param0
 */
export default function createFormatArgs({ dictionary, platform, options, file }: FormatFnArguments): FormatFnArguments & Dictionary;
export type Dictionary = import("../../types/DesignToken.js").Dictionary;
export type PlatformConfig = import("../../types/Config.d.ts").PlatformConfig;
export type Options = import("../../types/Config.d.ts").Config;
export type File = import("../../types/File.d.ts").File;
/**
 * /**
 */
export type FormatFnArguments = import("../../types/Format.d.ts").FormatFnArguments;
