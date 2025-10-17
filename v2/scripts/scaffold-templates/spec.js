
import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import './${pascalCaseName}';

describe('${pascalCaseName}', () => {
  it('renders correctly', async () => {
    const el = await fixture<${pascalCaseName}>(html`<ag-${kebabCaseName}></ag-${kebabCaseName}>`);
    expect(el).to.be.an.instanceOf(${pascalCaseName});
    await expect(el).to.be.accessible();
  });

  // TODO: Add tests based on SpecSheet.md
});
