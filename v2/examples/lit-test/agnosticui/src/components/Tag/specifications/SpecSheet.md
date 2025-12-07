# SpecSheet: ag-tag

This document outlines the specifications for the `ag-tag` web component, based on analysis of the v1 AgnosticUI `tag` component.

## V1 Analysis

The v1 `tag` component was analyzed from `tag.css`, `tag.hbs`, and `tag--close.hbs`.

- **CSS Variants**: The v1 CSS defined color variants (`.tag-info`, `.tag-warning`, `.tag-error`, `.tag-success`) and shape modifiers (`.tag-circle`, `.tag-round`, `.tag-pill`). It also had a text transform utility (`.tag-upper`).
- **Markup**: The v1 Handlebars template (`.hbs`) showed a simple `<span>` element that could accept modifier classes. It also showed a variant with a close button.

## V2 Component: `ag-tag`

The `ag-tag` component will be a presentational web component.

### Props

| Prop          | Type                                           | Default | Description                                                                 |
|---------------|------------------------------------------------|---------|-----------------------------------------------------------------------------|
| `variant`     | `'info' \| 'warning' \| 'error' \| 'success' \| ''` | `''`    | Sets the color variant of the tag. Defaults to a neutral gray.              |
| `shape`       | `'pill' \| 'round' \| 'circle' \| ''`          | `''`    | Sets the border-radius shape. Defaults to a standard slightly rounded corner. |
| `isUppercase` | `boolean`                                      | `false` | If `true`, the tag text will be transformed to uppercase.                   |

### Slots

| Name      | Description                                                                 |
|-----------|-----------------------------------------------------------------------------|
| (default) | The content to be displayed inside the tag, usually text.                   |
| `close`   | An optional slot to place a close button or other interactive element.        |

### CSS Shadow Parts

| Part        | Description                               |
|-------------|-------------------------------------------|
| `tag-wrapper` | The main wrapper element inside the component's shadow DOM. |

### Accessibility

- The component will render a non-interactive `div` or `span` element by default.
- It is intended for presentational purposes, as requested. No specific ARIA roles will be added by the component itself. Consumers can add accessibility attributes as needed for their specific use case.

### Example Usage

**Basic Tag**
```html
<ag-tag>My Tag</ag-tag>
```

**Variant and Shape**
```html
<ag-tag variant="success" shape="pill">Success</ag-tag>
```


