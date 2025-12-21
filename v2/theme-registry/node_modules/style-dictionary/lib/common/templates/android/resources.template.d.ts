declare function _default(opts: {
    dictionary: Dictionary;
    file?: File;
    header?: string;
    options: Config;
}): string;
export default _default;
export type Dictionary = import("../../../../types/DesignToken.d.ts").Dictionary;
export type Token = import("../../../../types/DesignToken.d.ts").TransformedToken;
export type Tokens = import("../../../../types/DesignToken.d.ts").TransformedTokens;
export type File = import("../../../../types/File.d.ts").File;
export type Config = import("../../../../types/Config.d.ts").Config;
export type FileHeader = import("../../../../types/File.d.ts").FileHeader;
