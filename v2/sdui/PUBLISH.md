# SDUI Package Publish Guide

Publish order matters: `@agnosticui/schema` must be published before the renderers
because they depend on it.

All packages use the `alpha` dist-tag (same convention as `agnosticui-core` and `agnosticui-cli`).

## 1. Schema

```bash
cd v2/sdui/schema
npm run build
npm publish --access public --tag alpha
```

## 2. React renderer

```bash
cd v2/sdui/renderers/react
npm run build
npm publish --access public --tag alpha
```

## 3. Vue renderer

```bash
cd v2/sdui/renderers/vue
npm run build
npm publish --access public --tag alpha
```

## 4. Lit renderer

```bash
cd v2/sdui/renderers/lit
npm run build
npm publish --access public --tag alpha
```

## Verify

```bash
npm info @agnosticui/schema
npm info @agnosticui/render-react
npm info @agnosticui/render-vue
npm info @agnosticui/render-lit
```

## 5. Point latest dist-tag to the published version

Required — matches the convention used for `agnosticui-core` and `agnosticui-cli`.
Without this step, `npm install @agnosticui/schema` finds nothing; users would need `@alpha`.

```bash
npm dist-tag add @agnosticui/schema@2.0.0-alpha.1 latest
npm dist-tag add @agnosticui/render-react@2.0.0-alpha.1 latest
npm dist-tag add @agnosticui/render-vue@2.0.0-alpha.1 latest
npm dist-tag add @agnosticui/render-lit@2.0.0-alpha.1 latest
```

## Package versions

| Package | Version |
|---------|---------|
| `@agnosticui/schema` | `2.0.0-alpha.1` |
| `@agnosticui/render-react` | `2.0.0-alpha.1` |
| `@agnosticui/render-vue` | `2.0.0-alpha.1` |
| `@agnosticui/render-lit` | `2.0.0-alpha.1` |
