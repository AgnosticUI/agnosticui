
import { Spinner } from './_Spinner';

if (!customElements.get('ag-spinner')) {
  customElements.define('ag-spinner', Spinner);
}
