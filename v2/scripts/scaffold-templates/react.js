export const getReactTemplate = ({ pascalCaseName, kebabCaseName }) => `
import { createComponent } from '@lit/react';
import React from 'react';
import { ${pascalCaseName}, type ${pascalCaseName}Props } from '../core/_${pascalCaseName}';

export type React${pascalCaseName}Props = ${pascalCaseName}Props;

export const React${pascalCaseName} = createComponent({
  tagName: 'ag-${kebabCaseName}',
  elementClass: ${pascalCaseName},
  react: React,
  events: {
    // onEventName: 'event-name',
  },
});
`;
