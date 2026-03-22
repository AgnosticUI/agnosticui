# SDUI Package Publish Guide

Publish order matters: `@agnosticui/schema` must be published before the renderers
because they depend on it.

All packages use the `alpha` dist-tag then immediately point `latest` to the same version
(same convention as `agnosticui-core` and `agnosticui-cli`).

## 1. Schema

```bash
cd v2/sdui/schema
npm run build
npm publish --access public --tag alpha
npm dist-tag add @agnosticui/schema@2.0.0-alpha.1 latest
# Verify dist-tags
npm dist-tag ls @agnosticui/schema
```

## 2. React renderer

```bash
cd v2/sdui/renderers/react
npm run build
npm publish --access public --tag alpha
npm dist-tag add @agnosticui/render-react@2.0.0-alpha.1 latest
# Verify dist-tags
npm dist-tag ls @agnosticui/render-react
```

## 3. Vue renderer

```bash
cd v2/sdui/renderers/vue
npm run build
npm publish --access public --tag alpha
npm dist-tag add @agnosticui/render-vue@2.0.0-alpha.1 latest
# Verify dist-tags
npm dist-tag ls @agnosticui/render-vue
```

## 4. Lit renderer

```bash
cd v2/sdui/renderers/lit
npm run build
npm publish --access public --tag alpha
npm dist-tag add @agnosticui/render-lit@2.0.0-alpha.1 latest
# Verify dist-tags
npm dist-tag ls @agnosticui/render-lit
```

## Verify

```bash
npm info @agnosticui/schema
npm info @agnosticui/render-react
npm info @agnosticui/render-vue
npm info @agnosticui/render-lit
```

## Package versions

| Package | Version |
|---------|---------|
| `@agnosticui/schema` | `2.0.0-alpha.1` |
| `@agnosticui/render-react` | `2.0.0-alpha.1` |
| `@agnosticui/render-vue` | `2.0.0-alpha.1` |
| `@agnosticui/render-lit` | `2.0.0-alpha.1` |
