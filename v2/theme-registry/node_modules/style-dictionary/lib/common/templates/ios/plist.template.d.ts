declare function _default({ dictionary, options, header }: {
    dictionary: Dictionary;
    options: Config & LocalOptions;
    header: string;
}): string;
export default _default;
export type Dictionary = import("../../../../types/DesignToken.d.ts").Dictionary;
export type TransformedToken = import("../../../../types/DesignToken.d.ts").TransformedToken;
export type Config = import("../../../../types/Config.d.ts").Config;
export type LocalOptions = import("../../../../types/Config.d.ts").LocalOptions;
