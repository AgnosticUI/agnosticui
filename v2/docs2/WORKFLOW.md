# Developer Workflow and Verification

This document describes the workflow for building the AgnosticUI library, packing it, and verifying it across React, Vue, and Lit playgrounds, as well as the documentation site.

## 1. Build and Pack Library
Navigate to the library directory and run the full build suite.
```bash
cd v2/lib
npm run lint && npm run typecheck && npm run test && npm run build && npm pack
```
This will generate a `.tgz` tarball in the `v2/lib` directory. Note the filename of the generated tarball (e.g., `agnosticui-x.y.z.tgz`).

## 2. Verify in Playgrounds
For each playground (React, Vue, Lit), install the packed tarball and run Storybook.

### React
```bash
cd v2/playgrounds/react
# Replace <tarball-path> with the actual path to the .tgz file from step 1
npm i ../../lib/agnosticui-<version>.tgz
npm run storybook
```

### Vue
```bash
cd v2/playgrounds/vue
# Replace <tarball-path> with the actual path to the .tgz file from step 1
npm i ../../lib/agnosticui-<version>.tgz
npm run storybook
```

### Lit
```bash
cd v2/playgrounds/lit
# Replace <tarball-path> with the actual path to the .tgz file from step 1
npm i ../../lib/agnosticui-<version>.tgz
npm run storybook
```

**Note**: You may need to accept port conflict increments (e.g., 6006 -> 6007) if running multiple Storybooks simultaneously.
**Verification**: Manually verify the components in the opened Storybook tabs.

## 3. Verify Documentation Site
After verifying components, update the documentation site.

```bash
cd v2/site
npm run reinstall:lib
npm run docs:dev
```
**Verification**: Check the Vitepress documentation to ensure it looks correct.

### Documentation Structure
The documentation uses a pattern where a Markdown file imports a corresponding Vue example file to render live components.

1.  **Markdown Documentation**: Create/edit a file in `v2/site/docs/components/<component>.md`.
    *   Import the examples component:
        ```markdown
        <script setup>
        import ComponentExamples from '../examples/ComponentExamples.vue'
        </script>
        ```
    *   Use the examples component in the markdown: `<ComponentExamples />`

2.  **Vue Examples**: Create/edit a file in `v2/site/docs/examples/ComponentExamples.vue`.
    *   This file should contain the Vue implementation of the component examples.
    *   Import components from `agnosticui-core`.
    *   Use `<template>`, `<script setup>`, and `<style scoped>` as needed.

**Example Reference**: See `v2/site/docs/components/tag.md` and `v2/site/docs/examples/TagExamples.vue`.
