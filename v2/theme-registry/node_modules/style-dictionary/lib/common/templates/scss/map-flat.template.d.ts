declare function _default({ allTokens, options, header }: {
    allTokens: TransformedToken[];
    options: Config & LocalOptions;
    header: string;
}): string;
export default _default;
export type TransformedToken = import("../../../../types/DesignToken.d.ts").TransformedToken;
export type Config = import("../../../../types/Config.d.ts").Config;
export type LocalOptions = import("../../../../types/Config.d.ts").LocalOptions;
