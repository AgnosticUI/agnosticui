# Tooltip Component

A fully accessible, minimalist and themeable tooltip component following WAI-ARIA APG guidelines.

## Quick Start

### Installation

```bash
npm install agnosticui-core
```

### Basic Usage

```html
<ag-tooltip content="Helpful information">
  <button>Hover me</button>
</ag-tooltip>
```

### Styled Variants

```html
<!-- Minimal styled tooltip -->
<minimal-tooltip content="Clean minimal design">
  <button>Styled tooltip</button>
</minimal-tooltip>
```

### Import in JavaScript/TypeScript

```javascript
// Canonical (minimalist and themeable)
import 'agnosticui-core';

// Styled components
import 'agnosticui-core/tooltip/styled/MinimalTooltip';
```

## Component Variants

### 1. Canonical Tooltip (`ag-tooltip`)
- **Minimalist and themeable**: Functional CSS only
- **APG compliant**: Full accessibility support
- **Customizable**: Easy to theme and style
- **Upgrade safe**: Immutable implementation

### 2. Styled Components

#### MinimalTooltip (`minimal-tooltip`)
- **Clean design**: Subtle shadows and rounded corners
- **Theme support**: Light/dark theme compatibility
- **Self-contained**: All styling embedded
- **Production ready**: No external CSS dependencies

## API Reference

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `content` | `string` | `''` | Tooltip text content |
| `placement` | `Placement` | `'top'` | Preferred position (`top`, `bottom`, `left`, `right`) |
| `distance` | `number` | `8` | Distance from trigger (px) |
| `skidding` | `number` | `0` | Cross-axis offset (px) |
| `trigger` | `string` | `'hover focus'` | Activation method |
| `disabled` | `boolean` | `false` | Disable tooltip |

### Methods

| Method | Description |
|--------|-------------|
| `show()` | Programmatically show tooltip |
| `hide()` | Programmatically hide tooltip |
| `toggle()` | Toggle tooltip visibility |

### Events

| Event | Description |
|-------|-------------|
| `show` | Fired when tooltip begins to show |
| `hide` | Fired when tooltip begins to hide |

### CSS Parts

| Part | Description |
|------|-------------|
| `base` | Tooltip container |
| `arrow` | Tooltip arrow element |

## Examples

### Different Placements

```html
<ag-tooltip content="Top tooltip" placement="top">
  <button>Top</button>
</ag-tooltip>

<ag-tooltip content="Bottom tooltip" placement="bottom">
  <button>Bottom</button>
</ag-tooltip>

<ag-tooltip content="Left tooltip" placement="left">
  <button>Left</button>
</ag-tooltip>

<ag-tooltip content="Right tooltip" placement="right">
  <button>Right</button>
</ag-tooltip>
```

### Different Triggers

```html
<!-- Hover and focus (default) -->
<ag-tooltip content="Hover or focus" trigger="hover focus">
  <button>Hover/Focus</button>
</ag-tooltip>

<!-- Click only -->
<ag-tooltip content="Click to toggle" trigger="click">
  <button>Click</button>
</ag-tooltip>

<!-- Focus only -->
<ag-tooltip content="Focus only" trigger="focus">
  <input type="text" placeholder="Focus me" />
</ag-tooltip>
```

### Programmatic Control

```javascript
const tooltip = document.querySelector('ag-tooltip');

// Show/hide programmatically
tooltip.show();
tooltip.hide();
tooltip.toggle();

// Listen to events
tooltip.addEventListener('show', () => console.log('Tooltip shown'));
tooltip.addEventListener('hide', () => console.log('Tooltip hidden'));
```

### Custom Styling

```css
/* Style the canonical tooltip */
ag-tooltip::part(base) {
  background: #1f2937;
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
}

ag-tooltip::part(arrow) {
  background: #1f2937;
}
```

## Accessibility

### Keyboard Support

| Key | Action |
|-----|--------|
| `Tab` | Move focus to trigger, show tooltip |
| `Shift + Tab` | Move focus away, hide tooltip |
| `Escape` | Dismiss tooltip |

### Screen Reader Support

- ✅ **ARIA**: Proper `role="tooltip"`
- ✅ **Association**: `aria-describedby` connects trigger to tooltip
- ✅ **Visibility**: Hidden from assistive technologies when not shown
- ✅ **Focus Management**: Tooltip never receives focus

### WCAG 2.1 Compliance

- ✅ **Hoverable**: Can move mouse over tooltip content
- ✅ **Dismissible**: Escape key and pointer leave dismisses
- ✅ **Persistent**: Remains visible until dismissed
- ✅ **Content on Hover**: Meets SC 1.4.13 requirements

## Component Ejection

Copy the component to your project for full customization:

```bash
# Eject tooltip component
agui eject tooltip ./src/components/ui/tooltip

# Use ejected component
import { Tooltip } from './src/components/ui/tooltip';
```

### What's Ejected

```
tooltip/
├── Tooltip.ts                 # Experimental interface
├── core/_Tooltip.ts           # Canonical implementation
├── core/_Tooltip.spec.ts      # Comprehensive tests
├── styled/MinimalTooltip.ts   # Styled variant
├── specifications/            # APG specifications
├── spec.md                    # Component specification
└── README.md                  # This documentation
```

## Advanced Usage

### React Integration

```jsx
import { ReactTooltip } from 'agnosticui-core/react';

function MyComponent() {
  return (
    <ReactTooltip content="React tooltip">
      <button>React Button</button>
    </ReactTooltip>
  );
}
```

### Framework Integration

The tooltip works with any framework:

```html
<!-- Vue -->
<ag-tooltip content="Vue tooltip">
  <button @click="handleClick">Vue Button</button>
</ag-tooltip>

<!-- Svelte -->
<ag-tooltip content="Svelte tooltip">
  <button on:click={handleClick}>Svelte Button</button>
</ag-tooltip>

<!-- Angular -->
<ag-tooltip content="Angular tooltip">
  <button (click)="handleClick()">Angular Button</button>
</ag-tooltip>
```

## Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## Performance

- **Bundle size**: ~3KB gzipped (canonical)
- **Runtime**: Minimal overhead with Floating UI
- **Memory**: Efficient event handling and cleanup

## Migration

### From V1

```html
<!-- V1 -->
<div class="tooltip" data-tooltip="content">Button</div>

<!-- V2 -->
<ag-tooltip content="content">
  <button>Button</button>
</ag-tooltip>
```

### From Other Libraries

Most tooltip libraries can be replaced with minimal changes:

```html
<!-- Other library -->
<div title="tooltip content">Button</div>

<!-- AgnosticUI -->
<ag-tooltip content="tooltip content">
  <button>Button</button>
</ag-tooltip>
```

## Contributing

See the [Contributing Guide](../../CONTRIBUTING.md) for development setup and guidelines.

## License

MIT License - see [LICENSE](../../LICENSE) for details.