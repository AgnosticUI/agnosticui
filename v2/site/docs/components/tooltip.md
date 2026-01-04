# Tooltip

<AlphaWarning />


A flexible, accessible tooltip component that displays contextual information on hover, focus, or click.

## Examples

<FrameworkExample
  component="tooltip"
  :vue-code="vueCode"
  :lit-code="litCode"
  :react-code="reactCode"
>
  <template #vue>
    <TooltipExamples />
  </template>
  <template #lit>
    <tooltip-lit-examples></tooltip-lit-examples>
  </template>
</FrameworkExample>

<script setup>
import AlphaWarning from '../components/AlphaWarning.vue'
import TooltipExamples from '../examples/TooltipExamples.vue'
import FrameworkExample from '../.vitepress/theme/components/FrameworkExample.vue'
import '../examples/TooltipLitExamples.js'
import vueCode from '../examples/TooltipExamples.vue?raw'
import litCode from '../examples/TooltipLitExamples.js?raw'
import reactCode from '../examples/TooltipReactExamples.jsx?raw'
</script>



## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `string` | `''` | The text content to display in the tooltip |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right' \| 'top-start' \| 'top-end' \| 'bottom-start' \| 'bottom-end' \| 'left-start' \| 'left-end' \| 'right-start' \| 'right-end'` | `'top'` | Placement of the tooltip relative to the trigger |
| `distance` | `number` | `8` | Distance in pixels between tooltip and trigger |
| `skidding` | `number` | `0` | Offset in pixels along the alignment axis |
| `trigger` | `string` | `'hover focus'` | Space-separated trigger events: 'hover', 'focus', 'click' |
| `disabled` | `boolean` | `false` | Prevents the tooltip from showing |

## Events

| Event | Framework | Detail | Description |
|-------|-----------|--------|-------------|
| `show` | Vue: `@show`<br>React: `onShow`<br>Lit: `@show` or `.onShow` | `{ visible: boolean }` | Fired when the tooltip becomes visible. The `visible` property will be `true`. |
| `hide` | Vue: `@hide`<br>React: `onHide`<br>Lit: `@hide` or `.onHide` | `{ visible: boolean }` | Fired when the tooltip becomes hidden. The `visible` property will be `false`. |

### Event Patterns

AgnosticUI Tooltip supports **three event handling patterns**:

1. **addEventListener** (Lit/Vanilla JS):
```javascript
const tooltip = document.querySelector('ag-tooltip');
tooltip.addEventListener('show', (e) => {
  console.log('Tooltip shown:', e.detail.visible);
});
```

2. **Callback props** (Lit/Vanilla JS):
```javascript
const tooltip = document.querySelector('ag-tooltip');
tooltip.onShow = (e) => {
  console.log('Tooltip shown:', e.detail.visible);
};
```

3. **Framework event handlers** (Vue/React):
```vue
<!-- Vue -->
<VueTooltip @show="handleShow" @hide="handleHide" />
```
```tsx
// React
<ReactTooltip onShow={handleShow} onHide={handleHide} />
```

All three patterns work identically thanks to the **dual-dispatch** system.

## Accessibility

The Tooltip component implements the [WAI-ARIA Tooltip Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/):

- Uses `role="tooltip"` for proper screen reader identification
- Keyboard support: Focus shows tooltip, Escape dismisses it
- Always include `aria-label` on icon-only buttons
- Keep content brief (one sentence or less)
- Include 'focus' trigger for keyboard accessibility

## CSS Shadow Parts

| Part | Description |
| --- | --- |
| `ag-tooltip` | The main tooltip container element that displays the content |
| `ag-tooltip-arrow` | The arrow element that points to the trigger element |

### Customization Example

```css
.custom-tooltip::part(ag-tooltip) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  padding: 12px 16px;
  font-weight: 600;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  max-width: 250px;
}

.custom-tooltip::part(ag-tooltip-arrow) {
  background: #667eea;
}
```

```html
<VueTooltip class="custom-tooltip" content="Customized tooltip">
  <VueButton>Hover me</VueButton>
</VueTooltip>

<ReactTooltip className="custom-tooltip" content="Customized tooltip">
  <ReactButton>Hover me</ReactButton>
</ReactTooltip>

<ag-tooltip class="custom-tooltip" content="Customized tooltip">
  <button>Hover me</button>
</ag-tooltip>
```
