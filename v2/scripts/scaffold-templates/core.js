
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// export type ${pascalCaseName}Event = CustomEvent<{ /* payload */ }>;

export interface ${pascalCaseName}Props {
  // Add component props here
}

@customElement('ag-${kebabCaseName}')
export class ${pascalCaseName} extends LitElement implements ${pascalCaseName}Props {
  // TODO: Implement properties and logic
  
  render() {
    return html`<p>${pascalCaseName} works!</p>`;
  }
}
