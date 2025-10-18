
import { Avatar } from './_Avatar';

if (!customElements.get('ag-avatar')) {
  customElements.define('ag-avatar', Avatar);
}
