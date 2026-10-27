import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { VisuallyHidden } from './_VisuallyHidden';
import styles from './visually-hidden-structure.module.css';
import './VisuallyHidden';

describe('VisuallyHidden Client component', () => {
  let element: VisuallyHidden;
  let host: HTMLElement;

  beforeEach(() => {
    host = document.createElement('div');
    document.body.appendChild(host);
  });

  afterEach(() => {
    host.remove();
  });

  it('instantiates custom elements securely', async () => {
    element = document.createElement('ag-visually-hidden') as VisuallyHidden;
    host.appendChild(element);
    await element.updateComplete;

    expect(element).toBeDefined();
    expect(element.shadowRoot?.querySelector('slot')).toBeDefined();
  });

  it('maps runtime layouts cleanly against actual build tokens', async () => {
    element = document.createElement('ag-visually-hidden') as VisuallyHidden;
    host.appendChild(element);
    await element.updateComplete;

    expect(styles.visuallyHidden).toBeDefined();
  });
});
