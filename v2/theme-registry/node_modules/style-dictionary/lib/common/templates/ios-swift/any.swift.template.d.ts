declare function _default({ allTokens, file, formatProperty, options, header }: {
    allTokens: TransformedToken[];
    file: File;
    formatProperty: (token: TransformedToken) => string;
    options: Config & LocalOptions;
    header: string;
}): string;
export default _default;
export type TransformedToken = import("../../../../types/DesignToken.d.ts").TransformedToken;
export type Config = import("../../../../types/Config.d.ts").Config;
export type File = import("../../../../types/File.d.ts").File;
export type LocalOptions = import("../../../../types/Config.d.ts").LocalOptions;
