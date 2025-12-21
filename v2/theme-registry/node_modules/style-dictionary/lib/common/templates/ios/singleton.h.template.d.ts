declare function _default({ file, options, header }: {
    file: File;
    options: LocalOptions & Config;
    header: string;
}): string;
export default _default;
export type File = import("../../../../types/File.d.ts").File;
export type Config = import("../../../../types/Config.d.ts").Config;
export type LocalOptions = import("../../../../types/Config.d.ts").LocalOptions;
