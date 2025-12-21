/**
 * @typedef {import('../../../types/DesignToken.d.ts').TransformedToken} TransformedToken
 * @typedef {import('../../../types/DesignToken.d.ts').Dictionary} Dictionary
 *
 * @param {TransformedToken} token
 * @param {{ dictionary: Dictionary, usesDtcg?: boolean }} dictionary
 * @returns
 */
export function outputReferencesFilter(token: TransformedToken, { dictionary, usesDtcg }: {
    dictionary: Dictionary;
    usesDtcg?: boolean;
}): boolean;
export type TransformedToken = import("../../../types/DesignToken.d.ts").TransformedToken;
export type Dictionary = import("../../../types/DesignToken.d.ts").Dictionary;
