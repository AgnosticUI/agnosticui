declare function _default({ dictionary, options }: {
    dictionary: Dictionary;
    options: Config & LocalOptions;
}): string;
export default _default;
export type Tokens = import("../../../../types/DesignToken.d.ts").TransformedTokens;
export type Dictionary = import("../../../../types/DesignToken.d.ts").Dictionary;
export type Config = import("../../../../types/Config.d.ts").Config;
export type LocalOptions = import("../../../../types/Config.d.ts").LocalOptions;
