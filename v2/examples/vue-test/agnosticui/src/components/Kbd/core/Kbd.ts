import { AgKbd, type KbdProps } from './_Kbd.js';

if (!customElements.get('ag-kbd')) {
  customElements.define('ag-kbd', AgKbd);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-kbd': AgKbd;
  }
}

export * from './_Kbd.js';
export type KbdVariant = KbdProps['variant'];
export type KbdSize= KbdProps['size'];
export type KbdBordered = KbdProps['bordered'];
export type KbdBackground= KbdProps['background'];
