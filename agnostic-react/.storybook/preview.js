import React from 'react';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" }
};

export const decorators = [
  (Story) => <div style={{fontFamily: 'var(--agnostic-font-family)'}}><Story /></div>
];

require("!style-loader!css-loader!../src/css/common.min.css");
