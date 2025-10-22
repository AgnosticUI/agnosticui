
import { Icon } from './_Icon';

if (!customElements.get('ag-icon')) {
  customElements.define('ag-icon', Icon);
}
