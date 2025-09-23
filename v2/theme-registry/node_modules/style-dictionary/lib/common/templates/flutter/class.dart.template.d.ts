declare function _default({ allTokens, file, options, formatProperty, header }: {
    allTokens: TransformedToken[];
    file: File;
    options: LocalOptions & Config;
    formatProperty: (token: TransformedToken) => string;
    header: string;
}): string;
export default _default;
export type TransformedToken = import("../../../../types/DesignToken.d.ts").TransformedToken;
export type Config = import("../../../../types/Config.d.ts").Config;
export type File = import("../../../../types/File.d.ts").File;
export type LocalOptions = import("../../../../types/Config.d.ts").LocalOptions;
