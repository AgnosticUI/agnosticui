# Tooltip

A flexible, accessible tooltip component that displays contextual information when users hover over, focus on, or click an element. Built following the WAI-ARIA Authoring Practices Guide with smart positioning using Floating UI.

## Examples

<TooltipExamples />

<script setup>
import TooltipExamples from '../examples/TooltipExamples.vue'
</script>

## Usage

```vue
<template>
  <section>
    <!-- Basic tooltip -->
    <VueTooltip content="This is helpful information">
      <VueButton>Hover me</VueButton>
    </VueTooltip>

    <!-- Different placements -->
    <VueTooltip
      content="Appears on the right"
      placement="right"
    >
      <VueButton>Right tooltip</VueButton>
    </VueTooltip>

    <!-- Click trigger -->
    <VueTooltip
      content="Click to toggle"
      trigger="click"
    >
      <VueButton>Click trigger</VueButton>
    </VueTooltip>

    <!-- With events -->
    <VueTooltip
      content="Event handling"
      @show="handleShow"
      @hide="handleHide"
    >
      <VueButton>With events</VueButton>
    </VueTooltip>

    <!-- Programmatic control -->
    <VueTooltip
      ref="tooltipRef"
      content="Controlled tooltip"
    >
      <VueButton>Controlled</VueButton>
    </VueTooltip>
    <VueButton @click="$refs.tooltipRef.show()">
      Show Tooltip
    </VueButton>

    <!-- Disabled state -->
    <VueTooltip
      content="Won't appear"
      :disabled="true"
    >
      <VueButton>Disabled tooltip</VueButton>
    </VueTooltip>

    <!-- Icon-only button (accessibility best practice) -->
    <VueTooltip content="Edit item">
      <VueButton aria-label="Edit">
        <Pencil :size="18" />
      </VueButton>
    </VueTooltip>
  </section>
</template>

<script>
import VueTooltip from "agnosticui-core/tooltip/vue";
import VueButton from "agnosticui-core/button/vue";
import { Pencil } from "lucide-vue-next";

export default {
  name: "TooltipExample",
  components: {
    VueTooltip,
    VueButton,
    Pencil,
  },
  methods: {
    handleShow() {
      console.log("Tooltip shown");
    },
    handleHide() {
      console.log("Tooltip hidden");
    },
  },
};
</script>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `string` | `''` | The text content to display in the tooltip |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right' \| 'top-start' \| 'top-end' \| 'bottom-start' \| 'bottom-end' \| 'left-start' \| 'left-end' \| 'right-start' \| 'right-end'` | `'top'` | Preferred placement of the tooltip relative to the trigger element |
| `distance` | `number` | `8` | Distance in pixels between the tooltip and trigger element (mainAxis offset) |
| `skidding` | `number` | `0` | Offset in pixels along the alignment axis (crossAxis offset) |
| `trigger` | `string` | `'hover focus'` | Space-separated list of trigger events: 'hover', 'focus', 'click', or combinations like 'hover focus' |
| `disabled` | `boolean` | `false` | When true, prevents the tooltip from showing |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `@show` | `void` | Emitted when the tooltip becomes visible |
| `@hide` | `void` | Emitted when the tooltip becomes hidden |

## Methods

The component exposes imperative methods via template refs:

| Method | Description |
|--------|-------------|
| `show()` | Programmatically show the tooltip |
| `hide()` | Programmatically hide the tooltip |
| `toggle()` | Toggle the tooltip visibility |

**Example:**

```vue
<template>
  <VueTooltip ref="tooltipRef" content="Controlled">
    <VueButton>Target</VueButton>
  </VueTooltip>
  <VueButton @click="$refs.tooltipRef.show()">Show</VueButton>
  <VueButton @click="$refs.tooltipRef.hide()">Hide</VueButton>
  <VueButton @click="$refs.tooltipRef.toggle()">Toggle</VueButton>
</template>
```

## Accessibility

The Tooltip component implements the [WAI-ARIA Tooltip Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/):

- **Semantic role**: Uses `role="tooltip"` for proper screen reader identification
- **ARIA relationship**: Automatically sets `aria-describedby` on the trigger element to link it with the tooltip
- **Keyboard support**: 
  - Focus trigger shows tooltip (when trigger includes 'focus')
  - Escape key dismisses tooltip
  - Tooltip is not focusable itself (supplementary information only)
- **Mouse support**:
  - Hover over trigger shows tooltip (when trigger includes 'hover')
  - Moving mouse away hides tooltip with 100ms delay
  - Hovering over tooltip itself keeps it visible
- **Screen readers**: Tooltip content is announced when the trigger element receives focus
- **Non-intrusive**: Tooltip is `pointer-events: none` by default, doesn't block interaction

### Best Practices

**Use tooltips for:**
- Brief, supplementary information (one sentence or less)
- Icon-only buttons that need text labels
- Abbreviations and truncated text
- Help text for form fields

**Don't use tooltips for:**
- Essential information users need to complete a task
- Long explanations (use a popover or modal instead)
- Interactive content (tooltips shouldn't contain buttons or links)
- Mobile-only interfaces (consider always-visible text instead)

**Accessibility requirements:**
- Always provide `aria-label` on icon-only buttons
- Keep tooltip content concise
- Don't rely solely on hover (include focus trigger for keyboard users)
- Ensure trigger element is keyboard accessible (focusable)

## Placement and Positioning

The Tooltip component uses [Floating UI](https://floating-ui.com/) for intelligent positioning:

### Basic Placements

```vue
<VueTooltip placement="top">Top</VueTooltip>
<VueTooltip placement="bottom">Bottom</VueTooltip>
<VueTooltip placement="left">Left</VueTooltip>
<VueTooltip placement="right">Right</VueTooltip>
```

### Alignment Variants

```vue
<VueTooltip placement="top-start">Aligned to start</VueTooltip>
<VueTooltip placement="top-end">Aligned to end</VueTooltip>
<VueTooltip placement="bottom-start">Bottom start</VueTooltip>
<VueTooltip placement="right-end">Right end</VueTooltip>
```

### Smart Positioning

The tooltip automatically:
- **Flips** to the opposite side if there's not enough space
- **Shifts** along the axis to stay within the viewport
- **Adjusts** arrow position to point at the trigger element
- **Updates** position when scrolling or resizing

### Custom Positioning

```vue
<!-- More distance from trigger -->
<VueTooltip
  content="20px away"
  :distance="20"
>
  <VueButton>Custom distance</VueButton>
</VueTooltip>

<!-- Offset along the alignment axis -->
<VueTooltip
  content="Shifted 30px"
  placement="top"
  :skidding="30"
>
  <VueButton>Custom skidding</VueButton>
</VueTooltip>
```

## Trigger Options

Control when the tooltip appears:

```vue
<!-- Hover only (default includes focus too) -->
<VueTooltip
  content="Hover to show"
  trigger="hover"
>
  <VueButton>Hover only</VueButton>
</VueTooltip>

<!-- Focus only (keyboard users) -->
<VueTooltip
  content="Focus to show"
  trigger="focus"
>
  <VueButton>Focus only</VueButton>
</VueTooltip>

<!-- Click to toggle -->
<VueTooltip
  content="Click to toggle"
  trigger="click"
>
  <VueButton>Click trigger</VueButton>
</VueTooltip>

<!-- Multiple triggers -->
<VueTooltip
  content="Hover or focus"
  trigger="hover focus"
>
  <VueButton>Hover + Focus</VueButton>
</VueTooltip>

<!-- All triggers -->
<VueTooltip
  content="Any interaction"
  trigger="hover focus click"
>
  <VueButton>All triggers</VueButton>
</VueTooltip>
```

## Event Handling

Listen to tooltip visibility changes:

```vue
<template>
  <VueTooltip
    content="Hover me"
    @show="onTooltipShow"
    @hide="onTooltipHide"
  >
    <VueButton>With events</VueButton>
  </VueTooltip>

  <div v-if="tooltipVisible">
    Tooltip is currently visible!
  </div>
</template>

<script>
export default {
  data() {
    return {
      tooltipVisible: false,
    };
  },
  methods: {
    onTooltipShow() {
      this.tooltipVisible = true;
      console.log("Tooltip shown");
    },
    onTooltipHide() {
      this.tooltipVisible = false;
      console.log("Tooltip hidden");
    },
  },
};
</script>
```

## Programmatic Control

Control tooltip visibility imperatively using template refs:

```vue
<template>
  <div>
    <VueTooltip
      ref="myTooltip"
      content="Controlled tooltip"
    >
      <VueButton>Target element</VueButton>
    </VueTooltip>

    <VueButton @click="showTooltip">Show</VueButton>
    <VueButton @click="hideTooltip">Hide</VueButton>
    <VueButton @click="toggleTooltip">Toggle</VueButton>
  </div>
</template>

<script>
export default {
  methods: {
    showTooltip() {
      this.$refs.myTooltip.show();
    },
    hideTooltip() {
      this.$refs.myTooltip.hide();
    },
    toggleTooltip() {
      this.$refs.myTooltip.toggle();
    },
  },
};
</script>
```

## Icon-Only Buttons

Tooltips are essential for icon-only buttons to ensure accessibility:

```vue
<template>
  <div class="icon-toolbar">
    <VueTooltip content="Edit item">
      <VueButton aria-label="Edit">
        <Pencil :size="18" />
      </VueButton>
    </VueTooltip>

    <VueTooltip content="Delete item">
      <VueButton
        variant="danger"
        aria-label="Delete"
      >
        <Trash2 :size="18" />
      </VueButton>
    </VueTooltip>

    <VueTooltip content="Share content">
      <VueButton
        variant="secondary"
        aria-label="Share"
      >
        <Share2 :size="18" />
      </VueButton>
    </VueTooltip>
  </div>
</template>

<script>
import VueTooltip from "agnosticui-core/tooltip/vue";
import VueButton from "agnosticui-core/button/vue";
import { Pencil, Trash2, Share2 } from "lucide-vue-next";

export default {
  components: {
    VueTooltip,
    VueButton,
    Pencil,
    Trash2,
    Share2,
  },
};
</script>
```

**Important:** Always include `aria-label` on icon-only buttons even when using tooltips. Screen reader users may not trigger the tooltip, so the aria-label ensures the button's purpose is always clear.

## With Different Elements

Tooltips can wrap any focusable element:

```vue
<template>
  <!-- On a link -->
  <VueTooltip content="Opens in new tab">
    <a href="https://example.com" target="_blank">
      External link
    </a>
  </VueTooltip>

  <!-- On a span (make it focusable) -->
  <VueTooltip content="Hypertext Transfer Protocol">
    <span
      tabindex="0"
      style="cursor: help; text-decoration: underline dotted;"
    >
      HTTP
    </span>
  </VueTooltip>

  <!-- On a custom button -->
  <VueTooltip content="More information">
    <button class="custom-button">
      <Info :size="20" />
    </button>
  </VueTooltip>
</template>
```

**Note:** For non-interactive elements like `<span>`, add `tabindex="0"` to make them keyboard accessible and include the 'focus' trigger.

## Disabled State

Disable tooltips dynamically:

```vue
<template>
  <VueTooltip
    content="This tooltip can be toggled"
    :disabled="tooltipDisabled"
  >
    <VueButton>Hover me</VueButton>
  </VueTooltip>

  <VueButton @click="tooltipDisabled = !tooltipDisabled">
    {{ tooltipDisabled ? 'Enable' : 'Disable' }} Tooltip
  </VueButton>
</template>

<script>
export default {
  data() {
    return {
      tooltipDisabled: false,
    };
  },
};
</script>
```

## Styling

The tooltip uses design system tokens and can be customized via CSS custom properties:

```css
/* Override default styles */
ag-tooltip::part(base) {
  background: var(--ag-primary);
  font-size: var(--ag-font-size-xs);
  padding: var(--ag-space-1) var(--ag-space-2);
}

/* Style the arrow */
ag-tooltip::part(arrow) {
  /* Arrow inherits background from base */
}
```

**Available CSS custom properties:**
- `--ag-z-index-modal` - Z-index of tooltip (default: high stacking context)
- `--ag-motion-fast` - Fade transition duration
- `--ag-neutral-900` - Background color
- `--ag-white` - Text color
- `--ag-space-2`, `--ag-space-3` - Padding
- `--ag-radius-md` - Border radius
- `--ag-font-size-sm` - Font size

## Best Practices

1. **Keep it brief** - Tooltips should contain one sentence or less
2. **Don't hide critical info** - Essential information should be visible without hovering
3. **Include focus trigger** - Always include 'focus' in trigger for keyboard accessibility
4. **Use with icon buttons** - Essential for making icon-only buttons accessible
5. **Provide aria-label** - Always include aria-label on icon-only buttons
6. **Consider mobile** - Hover doesn't work on touch devices; consider showing info by default
7. **Test with keyboard** - Ensure tooltips appear when tabbing through the page
8. **Don't nest interactive content** - Tooltips shouldn't contain buttons or links

## When to Use

**Use Tooltip when:**
- Providing supplementary information for UI elements
- Labeling icon-only buttons or controls
- Explaining abbreviations or truncated text
- Offering brief help text for form fields
- Showing keyboard shortcuts

**Consider alternatives when:**
- Information is essential (use visible text instead)
- Content is long (use Popover or Modal)
- Content needs to be interactive (use Popover or Dropdown)
- Targeting mobile-only (consider always-visible text)
- User needs to copy text (tooltips disappear on blur)
