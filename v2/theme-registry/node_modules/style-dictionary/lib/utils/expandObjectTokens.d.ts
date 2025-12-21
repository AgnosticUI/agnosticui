/**
 * expandTypesMap and this function may be slightly confusing,
 * refer to the unit tests for a better explanation
 * @param {string} subtype
 * @param {string} compositionType
 * @param {Expand['typesMap']} expandTypesMap
 * @returns {string}
 */
export function getTypeFromMap(subtype: string, compositionType: string, expandTypesMap?: Expand["typesMap"]): string;
/**
 * @param {DesignToken} token
 * @param {Config} opts
 * @param {PlatformConfig} [platform]
 */
export function expandToken(token: DesignToken, opts: Config, platform?: PlatformConfig): import("../../types/DesignToken.d.ts").PreprocessedTokens;
/**
 * @param {PreprocessedTokens} dictionary
 * @param {Config} opts
 * @param {PlatformConfig} [platform]
 */
export function expandTokens(dictionary: PreprocessedTokens, opts: Config, platform?: PlatformConfig): import("../../types/DesignToken.d.ts").PreprocessedTokens;
export namespace DTCGTypesMap {
    namespace border {
        let style: string;
        let width: string;
    }
    namespace transition {
        let delay: string;
        let timingFunction: string;
    }
    namespace shadow {
        let offsetX: string;
        let offsetY: string;
        let blur: string;
        let spread: string;
    }
    namespace gradient {
        let position: string;
    }
    namespace typography {
        let fontSize: string;
        let letterSpacing: string;
        let lineHeight: string;
    }
    namespace strokeStyle {
        let dashArray: string;
    }
}
export type DesignToken = import("../../types/DesignToken.d.ts").DesignToken;
export type PreprocessedTokens = import("../../types/DesignToken.d.ts").PreprocessedTokens;
export type Expand = import("../../types/Config.d.ts").Expand;
export type ExpandConfig = import("../../types/Config.d.ts").ExpandConfig;
export type ExpandFilter = import("../../types/Config.d.ts").ExpandFilter;
export type Config = import("../../types/Config.d.ts").Config;
export type PlatformConfig = import("../../types/Config.d.ts").PlatformConfig;
