import VueIntlFormatter from './VueIntlFormatter.vue';
import type { IntlFormatterProps } from '../core/IntlFormatter';

export { VueIntlFormatter };
export default VueIntlFormatter;

/** Props for VueIntlFormatter */
export interface VueIntlFormatterProps extends Omit<IntlFormatterProps, 'onFormatError'> {}
