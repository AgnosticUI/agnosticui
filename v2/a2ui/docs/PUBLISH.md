# AgnosticUI A2UI v1.0 Package Publish Guide

Publish order matters: `@agnosticui/a2ui-lit` must be published first because
`@agnosticui/a2ui-react` and `@agnosticui/a2ui-vue` depend on it.

All packages use the `alpha` dist-tag and immediately promote `latest` to the
same version (matching `agnosticui-core` and `agnosticui-cli`).

## 1. Pre-Publish Audit (`npm pack --dry-run`)

Verify builds, tests, and exact tarball file lists before publishing:

```bash
for pkg in lit react vue; do
  (cd "v2/a2ui/renderers/\$pkg" && npm test && npm run typecheck && npm run build && npm pack --dry-run)
done
```

## 2. Publish `@agnosticui/a2ui-lit` (Catalog + Lit Renderer)

```bash
cd v2/a2ui/renderers/lit
npm run build
npm publish --access public --tag alpha
npm dist-tag add @agnosticui/a2ui-lit@2.0.0-alpha.1 latest
npm dist-tag ls @agnosticui/a2ui-lit
```

## 3. Publish `@agnosticui/a2ui-react` (React 18/19 Renderer & Hook)

```bash
cd v2/a2ui/renderers/react
npm run build
npm publish --access public --tag alpha
npm dist-tag add @agnosticui/a2ui-react@2.0.0-alpha.1 latest
npm dist-tag ls @agnosticui/a2ui-react
```

## 4. Publish `@agnosticui/a2ui-vue` (Vue 3 Renderer & Composable)

```bash
cd v2/a2ui/renderers/vue
npm run build
npm publish --access public --tag alpha
npm dist-tag add @agnosticui/a2ui-vue@2.0.0-alpha.1 latest
npm dist-tag ls @agnosticui/a2ui-vue
```

## 5. Verify Published Registry Metadata

```bash
npm info @agnosticui/a2ui-lit
npm info @agnosticui/a2ui-react
npm info @agnosticui/a2ui-vue
```

## Package Versions

| Package | Version | Exports |
|---------|---------|---------|
| `@agnosticui/a2ui-lit` | `2.0.0-alpha.1` | `.`, `./catalog.json`, `./SKILL.md` |
| `@agnosticui/a2ui-react` | `2.0.0-alpha.1` | `.` |
| `@agnosticui/a2ui-vue` | `2.0.0-alpha.1` | `.` |
