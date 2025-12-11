# AgnosticUI Local - Reference Library

This is the AgnosticUI Local reference library.

**Version:** ${VERSION}
**Built:** $(date -u +"%Y-%m-%d")

## Structure

```
agnosticui/
├── lib/
│   ├── dist/          # Built components
│   └── src/           # Source files (for reference)
├── tokens/            # Design system tokens
├── docs/              # Documentation
├── version.json       # Version metadata
├── components.json    # Component registry
└── README.md          # This file
```

## Usage

This library is designed to be used with the AgnosticUI CLI:

\`\`\`bash
npx ag init
npx ag add button
\`\`\`

The CLI will prompt you to install required dependencies (`lit` and `@lit/react` for React projects).

Visit https://agnosticui.com for full documentation.
