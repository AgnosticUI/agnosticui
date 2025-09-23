export const verbosityInfo: "Use log.verbosity \"verbose\" or use CLI option --verbose for more details.\nRefer to: https://styledictionary.com/reference/logging/";
export class GroupMessages {
    /** @type {{[key: string]: string[]}} */
    groupedMessages: {
        [key: string]: string[];
    };
    GROUP: {
        PropertyReferenceWarnings: string;
        PropertyValueCollisions: string;
        TemplateDeprecationWarnings: string;
        RegisterTemplateDeprecationWarnings: string;
        SassMapFormatDeprecationWarnings: string;
        MissingRegisterTransformErrors: string;
        PropertyNameCollisionWarnings: string;
        FilteredOutputReferences: string;
        UnknownCSSFontProperties: string;
    };
    /**
     *
     * @param {string} messageGroup
     * @returns {string[]}
     */
    flush(messageGroup: string): string[];
    /**
     * @param {string} messageGroup
     * @param {string} message
     */
    add(messageGroup: string, message: string): void;
    /**
     * @param {string} messageGroup
     * @param {string} message
     */
    remove(messageGroup: string, message: string): void;
    /**
     *
     * @param {string} messageGroup
     * @returns {number}
     */
    count(messageGroup: string): number;
    /**
     *
     * @param {string} messageGroup
     * @returns {string[]}
     */
    fetchMessages(messageGroup: string): string[];
    /**
     * @param {string} messageGroup
     */
    clear(messageGroup: string): void;
}
declare const _default: GroupMessages;
export default _default;
