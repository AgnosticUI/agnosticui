import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import './ButtonFx';

describe('ButtonFx', () => {
  it('renders correctly', async () => {
    const el = await fixture<ButtonFx>(html`<ag-button-fx></ag-button-fx>`);
    expect(el).to.be.an.instanceOf(ButtonFx);
    await expect(el).to.be.accessible();
  });

  // TODO: Add tests based on SpecSheet.md
});
