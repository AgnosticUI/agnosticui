# Popover

A popover is a floating element that displays rich content in a panel anchored to a trigger element. Unlike tooltips which show brief hints, popovers can contain interactive content like forms, buttons, and complex layouts.

## Examples

<PopoverExamples />

<script setup>
import PopoverExamples from '../examples/PopoverExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <section>
    <!-- Basic popover -->
    <VuePopover>
      <button slot="trigger">Open Popover</button>
      <span slot="title">Popover Title</span>
      <div slot="content">
        <p>This is the popover content.</p>
      </div>
    </VuePopover>

    <!-- Different trigger types -->
    <VuePopover trigger-type="hover">
      <VueButton slot="trigger">Hover Me</VueButton>
      <span slot="title">Hover Popover</span>
      <div slot="content">
        <p>This popover opens on hover.</p>
      </div>
    </VuePopover>

    <!-- Different placements -->
    <VuePopover placement="right">
      <VueButton slot="trigger">Right Placement</VueButton>
      <span slot="title">Positioned Right</span>
      <div slot="content">
        <p>This popover appears to the right of the trigger.</p>
      </div>
    </VuePopover>

    <!-- Rich content example -->
    <VuePopover>
      <VueButton slot="trigger">User Profile</VueButton>
      <span slot="title">John Doe</span>
      <div slot="content">
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div>User profile information...</div>
          <VueButton variant="primary">View Profile</VueButton>
        </div>
      </div>
    </VuePopover>

    <!-- Event handling -->
    <VuePopover
      @show="handleShow"
      @hide="handleHide"
    >
      <VueButton slot="trigger">With Events</VueButton>
      <span slot="title">Event Tracking</span>
      <div slot="content">
        <p>Events fire when popover shows and hides.</p>
      </div>
    </VuePopover>

    <!-- Without close button -->
    <VuePopover :show-close-button="false">
      <VueButton slot="trigger">No Close Button</VueButton>
      <span slot="title">Title Only</span>
      <div slot="content">
        <p>Click outside to close this popover.</p>
      </div>
    </VuePopover>
  </section>
</template>

<script>
import { VuePopover } from "agnosticui-core/popover/vue";
import VueButton from "agnosticui-core/button/vue";

export default {
  components: {
    VuePopover,
    VueButton,
  },
  methods: {
    handleShow() {
      console.log("Popover shown");
    },
    handleHide() {
      console.log("Popover hidden");
    },
  },
};
</script>
```
:::

::: details React
```tsx
import { ReactPopover, PopoverTrigger, PopoverTitle, PopoverContent } from 'agnosticui-core/popover/react';
import { ReactButton } from 'agnosticui-core/button/react';

export default function PopoverExample() {
  const handleShow = () => {
    console.log("Popover shown");
  };

  const handleHide = () => {
    console.log("Popover hidden");
  };

  return (
    <section>
      {/* Basic popover */}
      <ReactPopover>
        <PopoverTrigger>
          <button>Open Popover</button>
        </PopoverTrigger>
        <PopoverTitle>
          <span>Popover Title</span>
        </PopoverTitle>
        <PopoverContent>
          <p>This is the popover content.</p>
        </PopoverContent>
      </ReactPopover>

      {/* Different trigger types */}
      <ReactPopover triggerType="hover">
        <PopoverTrigger>
          <ReactButton>Hover Me</ReactButton>
        </PopoverTrigger>
        <PopoverTitle>
          <span>Hover Popover</span>
        </PopoverTitle>
        <PopoverContent>
          <p>This popover opens on hover.</p>
        </PopoverContent>
      </ReactPopover>

      {/* Different placements */}
      <ReactPopover placement="right">
        <PopoverTrigger>
          <ReactButton>Right Placement</ReactButton>
        </PopoverTrigger>
        <PopoverTitle>
          <span>Positioned Right</span>
        </PopoverTitle>
        <PopoverContent>
          <p>This popover appears to the right of the trigger.</p>
        </PopoverContent>
      </ReactPopover>

      {/* Rich content example */}
      <ReactPopover>
        <PopoverTrigger>
          <ReactButton>User Profile</ReactButton>
        </PopoverTrigger>
        <PopoverTitle>
          <span>John Doe</span>
        </PopoverTitle>
        <PopoverContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>User profile information...</div>
            <ReactButton variant="primary">View Profile</ReactButton>
          </div>
        </PopoverContent>
      </ReactPopover>

      {/* Event handling */}
      <ReactPopover
        onShow={handleShow}
        onHide={handleHide}
      >
        <PopoverTrigger>
          <ReactButton>With Events</ReactButton>
        </PopoverTrigger>
        <PopoverTitle>
          <span>Event Tracking</span>
        </PopoverTitle>
        <PopoverContent>
          <p>Events fire when popover shows and hides.</p>
        </PopoverContent>
      </ReactPopover>

      {/* Without close button */}
      <ReactPopover showCloseButton={false}>
        <PopoverTrigger>
          <ReactButton>No Close Button</ReactButton>
        </PopoverTrigger>
        <PopoverTitle>
          <span>Title Only</span>
        </PopoverTitle>
        <PopoverContent>
          <p>Click outside to close this popover.</p>
        </PopoverContent>
      </ReactPopover>
    </section>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/popover';

  document.addEventListener('DOMContentLoaded', () => {
    const popover = document.querySelector('#event-popover');

    popover?.addEventListener('show', (e) => {
      console.log('Popover shown', e.detail);
    });

    popover?.addEventListener('hide', (e) => {
      console.log('Popover hidden', e.detail);
    });
  });
</script>

<section>
  <!-- Basic popover -->
  <ag-popover>
    <button slot="trigger">Open Popover</button>
    <span slot="title">Popover Title</span>
    <div slot="content">
      <p>This is the popover content.</p>
    </div>
  </ag-popover>

  <!-- Different trigger types -->
  <ag-popover trigger-type="hover">
    <button slot="trigger">Hover Me</button>
    <span slot="title">Hover Popover</span>
    <div slot="content">
      <p>This popover opens on hover.</p>
    </div>
  </ag-popover>

  <!-- Different placements -->
  <ag-popover placement="right">
    <button slot="trigger">Right Placement</button>
    <span slot="title">Positioned Right</span>
    <div slot="content">
      <p>This popover appears to the right of the trigger.</p>
    </div>
  </ag-popover>

  <!-- Rich content example -->
  <ag-popover>
    <button slot="trigger">User Profile</button>
    <span slot="title">John Doe</span>
    <div slot="content">
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div>User profile information...</div>
        <button>View Profile</button>
      </div>
    </div>
  </ag-popover>

  <!-- Event handling -->
  <ag-popover id="event-popover">
    <button slot="trigger">With Events</button>
    <span slot="title">Event Tracking</span>
    <div slot="content">
      <p>Events fire when popover shows and hides.</p>
    </div>
  </ag-popover>

  <!-- Without close button -->
  <ag-popover show-close-button="false">
    <button slot="trigger">No Close Button</button>
    <span slot="title">Title Only</span>
    <div slot="content">
      <p>Click outside to close this popover.</p>
    </div>
  </ag-popover>
</section>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placement` | `'top' \| 'top-start' \| 'top-end' \| 'right' \| 'right-start' \| 'right-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end'` | `'bottom'` | Placement of the popover relative to the trigger element |
| `distance` | `number` | `8` | Distance in pixels between the popover and trigger element |
| `skidding` | `number` | `0` | Offset in pixels along the alignment axis |
| `arrow` | `boolean` | `true` | Whether to show an arrow pointing to the trigger element |
| `disabled` | `boolean` | `false` | Prevents the popover from opening |
| `triggerType` | `'click' \| 'hover' \| 'focus'` | `'click'` | How to trigger the popover (click, hover, or focus) |
| `matchTriggerWidth` | `boolean` | `false` | Makes the popover's width match the trigger element's width |
| `showCloseButton` | `boolean` | `true` | Whether to show a close button (×) in the popover header |
| `closeLabel` | `string` | `'Close popover'` | Accessible label for the close button (for screen readers) |
| `trapFocus` | `boolean` | `false` | Whether to trap keyboard focus within the popover when open |

## Events

| Event | Framework | Detail | Description |
|-------|-----------|--------|-------------|
| `show` | Vue: `@show`<br>React: `onShow`<br>Lit: `@show` or `.onShow` | `{ visible: boolean }` | Fired when the popover becomes visible. The `visible` property will be `true`. |
| `hide` | Vue: `@hide`<br>React: `onHide`<br>Lit: `@hide` or `.onHide` | `{ visible: boolean }` | Fired when the popover becomes hidden. The `visible` property will be `false`. |

### Event Patterns

AgnosticUI Popover supports **three event handling patterns**:

1. **addEventListener** (Lit/Vanilla JS):
```javascript
const popover = document.querySelector('ag-popover');
popover.addEventListener('show', (e) => {
  console.log('Popover shown:', e.detail.visible);
});
popover.addEventListener('hide', (e) => {
  console.log('Popover hidden:', e.detail.visible);
});
```

2. **Callback properties** (Lit/Vanilla JS):
```javascript
const popover = document.querySelector('ag-popover');
popover.onShow = (e) => {
  console.log('Popover shown:', e.detail.visible);
};
popover.onHide = (e) => {
  console.log('Popover hidden:', e.detail.visible);
};
```

3. **Framework bindings** (Vue/React):
```vue
<!-- Vue -->
<VuePopover @show="handleShow" @hide="handleHide">
  <!-- ... -->
</VuePopover>
```
```tsx
// React
<ReactPopover onShow={handleShow} onHide={handleHide}>
  {/* ... */}
</ReactPopover>
```

### Event Handling Examples

**Vue:**
```vue
<VuePopover
  @show="handleShow"
  @hide="handleHide"
>
  <button slot="trigger">Toggle Popover</button>
  <span slot="title">Event Example</span>
  <div slot="content">
    <p>Popover content</p>
  </div>
</VuePopover>

<script>
export default {
  methods: {
    handleShow(event) {
      console.log('Popover opened', event.detail.visible); // true
    },
    handleHide(event) {
      console.log('Popover closed', event.detail.visible); // false
    },
  },
};
</script>
```

**React:**
```tsx
<ReactPopover
  onShow={(e) => console.log('Popover opened', e.detail.visible)}
  onHide={(e) => console.log('Popover closed', e.detail.visible)}
>
  <PopoverTrigger>
    <button>Toggle Popover</button>
  </PopoverTrigger>
  <PopoverTitle>
    <span>Event Example</span>
  </PopoverTitle>
  <PopoverContent>
    <p>Popover content</p>
  </PopoverContent>
</ReactPopover>
```

**Lit:**
```html
<!-- Using addEventListener -->
<script>
  const popover = document.querySelector('ag-popover');
  popover.addEventListener('show', (e) => {
    console.log('Popover opened', e.detail.visible);
  });
  popover.addEventListener('hide', (e) => {
    console.log('Popover closed', e.detail.visible);
  });
</script>

<!-- Using callback props -->
<ag-popover id="my-popover"></ag-popover>
<script>
  const popover = document.querySelector('#my-popover');
  popover.onShow = (e) => console.log('Popover opened', e.detail.visible);
  popover.onHide = (e) => console.log('Popover closed', e.detail.visible);
</script>
```

## Slots

### Vue
- **slot="trigger"**: The trigger element that opens the popover when interacted with
- **slot="title"**: Optional title text displayed in the popover header
- **slot="content"**: The main content of the popover (can contain any HTML/components)

### React
- **PopoverTrigger**: Component wrapper for the trigger element
- **PopoverTitle**: Component wrapper for the title content
- **PopoverContent**: Component wrapper for the main content

### Lit
- **slot="trigger"**: The trigger element that opens the popover
- **slot="title"**: Optional title displayed in the popover header
- **slot="content"**: The main content of the popover

## CSS Shadow Parts

Shadow Parts allow you to style internal elements of the popover from outside the shadow DOM using the `::part()` CSS selector.

| Part | Description |
|------|-------------|
| `ag-popover` | The main popover container element that displays the content |
| `ag-popover-arrow` | The arrow element that points to the trigger element |
| `ag-popover-close` | The close button element inside the popover header |

### Customization Example

```css
/* Customize the popover container */
ag-popover::part(ag-popover) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.4);
  padding: 1.5rem;
}

/* Style the arrow */
ag-popover::part(ag-popover-arrow) {
  background: #667eea;
  border-color: #667eea;
}

/* Customize the close button */
ag-popover::part(ag-popover-close) {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 50%;
  padding: 4px;
}

/* Success-themed popover */
.success-popover::part(ag-popover) {
  background: var(--ag-success);
  color: white;
  border: 2px solid var(--ag-success-dark, #059669);
  box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
}

.success-popover::part(ag-popover-arrow) {
  background: var(--ag-success);
  border-color: var(--ag-success-dark, #059669);
}
```

## Accessibility

The Popover implements the [WAI-ARIA Dialog Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) for non-modal overlays:

- Uses `role="dialog"` and `aria-modal="false"` for proper screen reader announcement
- Trigger element has `aria-expanded`, `aria-controls`, and `aria-haspopup` attributes
- Pressing **Escape** closes the popover
- Clicking outside the popover closes it (unless using `triggerType="hover"`)
- Returns focus to the trigger element when closed
- Close button has accessible label via `closeLabel` prop
- Popover is labeled via title slot or `aria-label` when no title is provided
- Optional focus trapping when `trapFocus` is enabled
- Supports keyboard navigation with **Tab** and **Shift+Tab**

### Best Practices

- Always provide a trigger element for keyboard and screen reader users
- Use the `title` slot to provide context about the popover content
- For hover-triggered popovers, ensure content is also accessible via click or focus
- Keep popover content concise and focused
- Use `closeLabel` to provide clear close button instructions for screen readers
- Avoid nesting interactive elements that might trap focus unexpectedly
- Consider using `matchTriggerWidth` for dropdown-style popovers
- For critical actions, use `triggerType="click"` to prevent accidental triggers

## When to Use Popover vs Tooltip

**Use Popover when:**
- You need to display rich, interactive content (forms, buttons, lists)
- Content is complex or requires user interaction
- You want to include formatted text, images, or multiple sections
- The content is important enough to require explicit user action to dismiss

**Use Tooltip when:**
- You need to show brief, non-interactive hints or labels
- Content is simple text (1-2 sentences maximum)
- Information is supplementary and not critical
- You want automatic show/hide on hover without requiring clicks

## Positioning with Floating UI

The Popover uses [@floating-ui/dom](https://floating-ui.com/) for intelligent positioning:

- **Automatic overflow prevention**: Popover flips to the opposite side if there's not enough space
- **Viewport awareness**: Shifts position to stay within the viewport bounds
- **Smart arrow positioning**: Arrow automatically adjusts based on popover position
- **Distance and skidding**: Fine-tune positioning with `distance` and `skidding` props
- **12 placement options**: Comprehensive control over popover positioning

### Placement Options

The `placement` prop accepts these values:
- **Basic**: `top`, `right`, `bottom`, `left`
- **Start aligned**: `top-start`, `right-start`, `bottom-start`, `left-start`
- **End aligned**: `top-end`, `right-end`, `bottom-end`, `left-end`

```vue
<!-- Popover appears to the right, aligned with the top of trigger -->
<VuePopover placement="right-start">
  <!-- ... -->
</VuePopover>
```
