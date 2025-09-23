declare function _default({ dictionary, options, file, header }: {
    dictionary: Dictionary;
    options: Config & LocalOptions;
    file: File;
    header: string;
}): string;
export default _default;
export type Dictionary = import("../../../../types/DesignToken.d.ts").Dictionary;
export type File = import("../../../../types/File.d.ts").File;
export type Config = import("../../../../types/Config.d.ts").Config;
export type LocalOptions = import("../../../../types/Config.d.ts").LocalOptions;
