import { AgKbd, type KbdProps } from './_Kbd';

if (!customElements.get('ag-kbd')) {
  customElements.define('ag-kbd', AgKbd);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-kbd': AgKbd;
  }
}

export * from './_Kbd';
export type KbdVariant = KbdProps['variant'];
export type KbdSize= KbdProps['size'];
export type KbdBordered = KbdProps['bordered'];
export type KbdBackground= KbdProps['background'];
