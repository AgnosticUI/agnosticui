declare function _default({ dictionary, file, options, header }: {
    dictionary: Dictionary;
    file: File;
    options: LocalOptions & Config;
    header: string;
}): string;
export default _default;
export type Dictionary = import("../../../../types/DesignToken.d.ts").Dictionary;
export type File = import("../../../../types/File.d.ts").File;
export type Config = import("../../../../types/Config.d.ts").Config;
export type LocalOptions = import("../../../../types/Config.d.ts").LocalOptions;
