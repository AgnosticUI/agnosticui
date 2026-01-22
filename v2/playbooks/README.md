# AgnosticUI Playbooks

Playbooks are complete, working example applications that demonstrate AgnosticUI components in realistic scenarios. Each playbook includes implementations for React, Vue, and Lit.

## Directory Structure

```
v2/playbooks/
├── README.md              # This file
├── login/                 # Login form playbook
│   ├── PROMPT.md          # LLM prompt for customization
│   ├── NOTES.md           # Development notes
│   ├── design/            # Design assets (Figma exports, etc.)
│   ├── react-example/     # Complete React implementation
│   ├── vue-example/       # Complete Vue implementation
│   └── lit-example/       # Complete Lit implementation
└── [future-playbook]/     # Same structure as login/
```

## StackBlitz Integration

Playbooks are available as live StackBlitz demos on the documentation site. The integration works via the `PlaybookStackBlitz` Vue component which fetches files from GitHub and creates a StackBlitz project on-the-fly.

### Key Files

- **Component:** `v2/site/docs/.vitepress/theme/components/PlaybookStackBlitz.vue`
- **Config:** `v2/site/docs/.vitepress/theme/components/playbooks-config.ts`

### How It Works

1. User clicks "Open in StackBlitz" button on the docs site
2. Component reads the playbook config from `playbooks-config.ts`
3. Files are fetched from `raw.githubusercontent.com`
4. Binary file references (like `.jpg`) are replaced with raw GitHub URLs
5. StackBlitz SDK creates and opens the project

## Creating a New Playbook

### 1. Create the Directory Structure

```bash
mkdir -p v2/playbooks/[name]/{react,vue,lit}-example
```

### 2. Build Each Framework Example

Use the AgnosticUI CLI to scaffold components:

```bash
cd v2/playbooks/[name]/react-example
npm create vite@latest . -- --template react-ts
npx agnosticui-cli init --framework react
npx agnosticui-cli add button input checkbox  # etc.
```

Repeat for Vue (`--template vue-ts`, `--framework vue`) and Lit (`--template lit-ts`, no framework flag needed for Lit as it uses core directly).

### 3. Add the PROMPT.md

Create a `PROMPT.md` file with instructions for LLMs to understand and customize the playbook. See `login/PROMPT.md` for reference.

### 4. Update the StackBlitz Config

Edit `v2/site/docs/.vitepress/theme/components/playbooks-config.ts`:

```typescript
export const playbooksConfig: Record<string, PlaybookConfig> = {
  login: { ... },

  // Add your new playbook
  [name]: {
    title: 'Your Title',
    frameworks: {
      react: [
        // Config files
        'index.html',
        'package.json',
        'vite.config.ts',
        'tsconfig.json',
        'tsconfig.app.json',
        'tsconfig.node.json',
        // Public assets
        'public/your-assets.svg',
        // App files
        'src/App.tsx',
        'src/App.css',
        'src/main.tsx',
        'src/index.css',
        // Use shared arrays for component files
        ...SHARED_CORE_FILES,
        ...REACT_WRAPPER_FILES,
      ],
      vue: [
        // Similar structure with VUE_WRAPPER_FILES
        ...SHARED_CORE_FILES,
        ...VUE_WRAPPER_FILES,
      ],
      lit: [
        // Lit uses core directly, no wrapper files
        ...SHARED_CORE_FILES,
      ],
    },
    // Optional: binary files that need URL replacement
    binaryFiles: {
      '/image.jpg': `${GITHUB_RAW_BASE}/[name]/react-example/public/image.jpg`,
    },
  },
}
```

### 5. Create the Documentation Page

Add a markdown file at `v2/site/docs/playbooks/[name].md`:

```markdown
# Your Playbook Title

Description of the playbook.

<script setup>
import PlaybookStackBlitz from '../.vitepress/theme/components/PlaybookStackBlitz.vue'
</script>

## Try it Live

<PlaybookStackBlitz playbook="[name]" />

## What's Included

- Feature 1
- Feature 2
```

### 6. Add to Navigation

Update `v2/site/docs/.vitepress/config.mts` to include the new playbook in the sidebar.

## Shared File Arrays

The config uses shared arrays to reduce duplication:

- `SHARED_CORE_FILES` - Core component implementations (Button, Input, etc.)
- `REACT_WRAPPER_FILES` - React wrapper components
- `VUE_WRAPPER_FILES` - Vue wrapper components

Lit uses core directly, so it only needs `SHARED_CORE_FILES`.

## Binary Files

StackBlitz SDK only supports text files. For binary assets (images, fonts):

1. Keep them in the `public/` folder of the example
2. Add URL mappings to `binaryFiles` in the config
3. The component replaces local paths with raw GitHub URLs

Example:
```typescript
binaryFiles: {
  '/hero-image.jpg': `${GITHUB_RAW_BASE}/checkout/react-example/public/hero-image.jpg`,
}
```

## Reference Implementation

See the `login/` playbook for a complete example of:
- Three framework implementations
- PROMPT.md for LLM customization
- Design assets
- StackBlitz config integration
