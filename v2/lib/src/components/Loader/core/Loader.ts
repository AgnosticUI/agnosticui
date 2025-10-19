
import { Loader } from './_Loader';

if (!customElements.get('ag-loader')) {
  customElements.define('ag-loader', Loader);
}
