export const getRegistrationTemplate = ({ pascalCaseName, kebabCaseName }) => `
import { ${pascalCaseName} } from './_${pascalCaseName}';

if (!customElements.get('ag-${kebabCaseName}')) {
  customElements.define('ag-${kebabCaseName}', ${pascalCaseName});
}
`;
