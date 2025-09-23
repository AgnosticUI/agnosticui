import type { TransformedToken } from './DesignToken.js';
import type { FormatFn } from './Format.js';
import type { LocalOptions, Config } from './Config.js';
import type { Filter } from './Filter.js';
import { commentPositions, commentStyles } from '../lib/enums/index.js';
type commentStyles = typeof commentStyles;
type commentPositions = typeof commentPositions;
export interface FormattingOptions extends FormattingOverrides {
    prefix?: string;
    suffix?: string;
    lineSeparator?: string;
    separator?: string;
}
export interface FormattingOverrides {
    commentStyle?: commentStyles[keyof commentStyles];
    commentPosition?: commentPositions[keyof commentPositions];
    indentation?: string;
    header?: string;
    footer?: string;
    fileHeaderTimestamp?: boolean;
}
export type FileHeader = (defaultMessage?: string[], options?: Config) => Promise<string[]> | string[];
export interface File {
    destination?: string;
    format?: string | FormatFn;
    filter?: string | Partial<TransformedToken> | Filter['filter'];
    options?: LocalOptions;
}
export {};
