
import { AgTag } from './_Tag';

if (!customElements.get('ag-tag')) {
  customElements.define('ag-tag', AgTag);
}
