import { Kbd, type KbdProps } from './_Kbd.js';

if (!customElements.get('ag-kbd')) {
  customElements.define('ag-kbd', Kbd);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-kbd': Kbd;
  }
}

export * from './_Kbd.js';
export type KbdVariant = KbdProps['variant'];
export type KbdSize= KbdProps['size'];
export type KbdBordered = KbdProps['bordered'];
export type KbdBackground= KbdProps['background'];
