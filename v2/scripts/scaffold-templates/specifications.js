export function getSpecificationsTemplate({ pascalCaseName }) {
  return `# Accessibility Specifications

This directory is for collecting accessibility documentation and requirements for the **${pascalCaseName}** component.

## Instructions

1.  Find the relevant WAI-ARIA Authoring Practices Guide (APG) pattern for this component.
2.  Download or save the relevant content into this directory.
3.  Instruct the LLM agent to read these files and synthesize a \`SpecSheet.md\` summarizing the key requirements (ARIA roles, states, keyboard navigation, etc.).
`;
}