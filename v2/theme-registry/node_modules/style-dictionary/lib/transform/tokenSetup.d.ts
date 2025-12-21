/**
 * @typedef {import('../../types/DesignToken.d.ts').DesignToken} Token
 * @typedef {import('../../types/DesignToken.d.ts').TransformedToken} TransformedToken
 */
/**
 * Takes a token object, a leaf node in a tokens object, and
 * returns a new object that has some tokens set. It clones the
 * original object for safekeeping, adds a name, adds an attributes object,
 * and a path array.
 * @private
 * @param {Token|TransformedToken} token - the token object to setup
 * @param {string} name - The name of the token, which will should be its key in the object.
 * @param {string[]} path - The path of keys to get to the token from the top level of the tokens object.
 * @returns {TransformedToken} - A new object that is setup and ready to go.
 */
export default function tokenSetup(token: Token | TransformedToken, name: string, path: string[]): TransformedToken;
export type Token = import("../../types/DesignToken.d.ts").DesignToken;
export type TransformedToken = import("../../types/DesignToken.d.ts").TransformedToken;
