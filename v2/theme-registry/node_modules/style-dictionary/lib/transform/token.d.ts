/**
 * Applies all transforms to a token. This is a pure function,
 * it returns a new token object rather than mutating it inline.
 * @private
 * @param {Token} token
 * @param {PlatformConfig} config
 * @param {Config} options
 * @param {Volume} [vol]
 * @returns {Promise<Token|undefined>} - A new property object with transforms applied.
 */
export default function transformToken(token: Token, config: PlatformConfig, options: Config, vol?: Volume): Promise<Token | undefined>;
export type Volume = import("../../types/Volume.d.ts").Volume;
export type Token = import("../../types/DesignToken.d.ts").TransformedToken;
export type PlatformConfig = import("../../types/Config.d.ts").PlatformConfig;
export type Config = import("../../types/Config.d.ts").Config;
export type Transform = import("../../types/Transform.d.ts").Transform;
export type NameTransform = import("../../types/Transform.d.ts").NameTransform;
