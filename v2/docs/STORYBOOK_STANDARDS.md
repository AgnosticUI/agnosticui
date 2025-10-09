# Storybook Standards

> **Purpose**: Define uniform Storybook integration patterns for AgnosticUI v2 components, ensuring consistent documentation and testing across all frameworks.

**Last Updated**: 2025-01-09
**Status**: Active Standard

**Prerequisites**: Read `INTERFACE_STANDARDS.md` first - it defines the component interface patterns that these stories document.

---

## Core Philosophy: Uniform Documentation

Every AgnosticUI component should have Storybook coverage across all three frameworks (Lit, Vue, React) with:
- ✅ Consistent story structure and naming
- ✅ Proper event logging to Actions panel
- ✅ Interactive controls for all props
- ✅ Standard story types (Default, Variants, States, EventTesting)

**Goal**: A developer familiar with one component's Storybook docs can immediately understand another's.

---

## Part 1: Lit Storybook Pattern

### Basic Setup

```typescript
// /playgrounds/lit/src/stories/Tooltip.stories.ts

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { fn } from 'storybook/test';
import 'agnosticui-core/tooltip';
import type { TooltipProps } from 'agnosticui-core/tooltip';

// Use core Props interface directly - it includes event handlers
const meta: Meta<TooltipProps> = {
  title: 'AgnosticUI/Tooltip',
  component: 'ag-tooltip',
  tags: ['autodocs'],
  argTypes: {
    // Component props
    content: {
      control: 'text',
      description: 'Tooltip content text',
    },
    placement: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Tooltip placement',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the tooltip',
    },

    // Event handlers
    onShow: {
      action: 'show',
      description: 'Emitted when the tooltip is shown',
    },
    onHide: {
      action: 'hide',
      description: 'Emitted when the tooltip is hidden',
    },
  },
  args: {
    content: 'Tooltip content',
    placement: 'top',
    disabled: false,
    onShow: fn(), // Creates action logger
    onHide: fn(), // Creates action logger
  },
};

export default meta;
type Story = StoryObj<TooltipProps>;
```

### Story Implementation

```typescript
export const Default: Story = {
  args: {
    content: 'This is the tooltip content',
    placement: 'top',
  },
  render: ({ content, placement, disabled, onShow, onHide }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-tooltip
        .content=${content}
        .placement=${placement}
        .disabled=${disabled}
        @show=${onShow}
        @hide=${onHide}
      >
        <button>Hover over me</button>
      </ag-tooltip>
    </div>
  `,
};
```

**Key Points**:
- Use `.propName=${value}` for property binding
- Use `@event-name=${handler}` for event binding
- Destructure all relevant args in render function
- Include wrapper div with padding for visual spacing

---

## Part 2: Vue Storybook Pattern

### Basic Setup

```typescript
// /playgrounds/vue/src/stories/Tooltip.stories.ts

import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import { ref } from 'vue';
import { VueTooltip, type VueTooltipProps } from 'agnosticui-core/tooltip/vue';

const meta = {
  title: 'AgnosticUI/Tooltip',
  component: VueTooltip,
  tags: ['autodocs'],
  argTypes: {
    // Component props
    content: {
      control: 'text',
      description: 'Tooltip content text',
    },
    placement: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Tooltip placement',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the tooltip',
    },

    // Event handlers
    onShow: {
      action: 'show',
      description: 'Emitted when the tooltip is shown',
    },
    onHide: {
      action: 'hide',
      description: 'Emitted when the tooltip is hidden',
    },
  },
  args: {
    content: 'Tooltip content',
    placement: 'top',
    disabled: false,
    onShow: fn(),
    onHide: fn(),
  },
} satisfies Meta<VueTooltipProps>;

export default meta;
type Story = StoryObj<typeof meta>;
```

### Story Implementation

```typescript
export const Default: Story = {
  args: {
    content: 'This is the tooltip content',
  },
  render: (args: VueTooltipProps) => ({
    components: { VueTooltip },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; padding: 50px;">
        <VueTooltip
          :content="args.content"
          :placement="args.placement"
          :disabled="args.disabled"
          @show="args.onShow"
          @hide="args.onHide"
        >
          <button>Hover over me</button>
        </VueTooltip>
      </div>
    `,
  }),
};
```

### Event Testing Story with Reactive State

```typescript
export const EventTesting: Story = {
  args: {
    content: 'Tooltip with event tracking',
  },
  render: (args: VueTooltipProps) => ({
    components: { VueTooltip },
    setup() {
      const showCount = ref(0);
      const hideCount = ref(0);

      const handleShow = (event: Event) => {
        showCount.value++;
        args.onShow?.(event as any);
      };

      const handleHide = (event: Event) => {
        hideCount.value++;
        args.onHide?.(event as any);
      };

      return { args, showCount, hideCount, handleShow, handleHide };
    },
    template: `
      <div style="display: flex; flex-direction: column; align-items: center; padding: 50px; gap: 1rem;">
        <div style="display: flex; gap: 2rem;">
          <p>Show count: {{ showCount }}</p>
          <p>Hide count: {{ hideCount }}</p>
        </div>
        <VueTooltip
          :content="args.content"
          :placement="args.placement"
          @show="handleShow"
          @hide="handleHide"
        >
          <button>Hover to trigger events</button>
        </VueTooltip>
      </div>
    `,
  }),
};
```

**Key Points**:
- Use `:prop="value"` for prop binding
- Use `@event="handler"` for event binding
- Return `args` from setup function
- For event testing, create local handlers that increment counters AND call `args.onEventName?.()`
- This pattern logs to Actions while also showing visual feedback

---

## Part 3: React Storybook Pattern

### Basic Setup

```typescript
// /playgrounds/react/src/stories/Tooltip.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { fn } from 'storybook/test';
import { ReactTooltip, type ReactTooltipProps } from 'agnosticui-core/tooltip/react';

const meta: Meta<ReactTooltipProps> = {
  title: 'AgnosticUI/Tooltip',
  component: ReactTooltip,
  tags: ['autodocs'],
  argTypes: {
    // Component props
    content: {
      control: 'text',
      description: 'Tooltip content text',
    },
    placement: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Tooltip placement',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the tooltip',
    },

    // Event handlers
    onShow: {
      action: 'show',
      description: 'Emitted when the tooltip is shown',
    },
    onHide: {
      action: 'hide',
      description: 'Emitted when the tooltip is hidden',
    },
  },
  args: {
    content: 'Tooltip content',
    placement: 'top',
    disabled: false,
    onShow: fn(),
    onHide: fn(),
  },
} satisfies Meta<ReactTooltipProps>;

export default meta;
type Story = StoryObj<typeof meta>;
```

### Story Implementation

```typescript
export const Default: Story = {
  args: {
    content: 'This is the tooltip content',
  },
  render: (args: ReactTooltipProps) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <ReactTooltip {...args}>
        <button>Hover over me</button>
      </ReactTooltip>
    </div>
  ),
};
```

### Event Testing Story with State

```typescript
export const EventTesting: Story = {
  args: {
    content: 'Tooltip with event tracking',
  },
  render: (args: ReactTooltipProps) => {
    const [showCount, setShowCount] = useState(0);
    const [hideCount, setHideCount] = useState(0);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '50px', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <p>Show count: {showCount}</p>
          <p>Hide count: {hideCount}</p>
        </div>
        <ReactTooltip
          {...args}
          onShow={(event) => {
            setShowCount(c => c + 1);
            args.onShow?.(event);
          }}
          onHide={(event) => {
            setHideCount(c => c + 1);
            args.onHide?.(event);
          }}
        >
          <button>Hover to trigger events</button>
        </ReactTooltip>
      </div>
    );
  },
};
```

**Key Points**:
- Spread `{...args}` for simple prop passing
- For event testing, override specific handlers with wrappers that update state AND call `args.onEventName?.()`
- Use `useState` for reactive state tracking
- This pattern logs to Actions while also showing visual feedback

---

## Part 4: Standard Story Types

Every component should include these story types (when applicable):

### 1. Default Story (Required)

The simplest, most common usage:

```typescript
export const Default: Story = {
  args: { /* minimal args */ },
  render: (args) => /* basic usage */
};
```

### 2. Variant Stories (If Applicable)

One story per major variant:

```typescript
export const Primary: Story = {
  args: { variant: 'primary' },
  render: /* ... */
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
  render: /* ... */
};

export const Success: Story = {
  args: { variant: 'success' },
  render: /* ... */
};
```

### 3. Size Stories (If Applicable)

One story per size option:

```typescript
export const Small: Story = {
  args: { size: 'sm' },
  render: /* ... */
};

export const Medium: Story = {
  args: { size: 'md' },
  render: /* ... */
};

export const Large: Story = {
  args: { size: 'lg' },
  render: /* ... */
};
```

### 4. State Stories (If Applicable)

One story per important state:

```typescript
export const Disabled: Story = {
  args: { disabled: true },
  render: /* ... */
};

export const Loading: Story = {
  args: { loading: true },
  render: /* ... */
};

export const Error: Story = {
  args: { error: true },
  render: /* ... */
};
```

### 5. Event Testing Story (Required for Components with Events)

Interactive story showing events with visual feedback:

```typescript
export const EventTesting: Story = {
  render: (args) => {
    // Use framework-specific state management (ref, useState, etc.)
    // Show counters or visual indicators of events firing
    // Chain args.onEventName?.() to preserve Actions logging
  }
};
```

### 6. Accessibility Story (If Applicable)

Demonstrating ARIA attributes:

```typescript
export const Accessible: Story = {
  args: {
    ariaLabel: 'Custom accessible label',
    ariaDescribedby: 'description-id',
  },
  render: (args) => html`
    <div>
      <p id="description-id">This describes the component</p>
      <ag-component
        .ariaLabel=${args.ariaLabel}
        .ariaDescribedby=${args.ariaDescribedby}
      >
        Content
      </ag-component>
    </div>
  `
};
```

---

## Part 5: Storybook Refactoring Checklist

Use this checklist when adding/updating Storybook stories:

### All Frameworks

- [ ] Story file exists in correct location (`/playgrounds/{framework}/src/stories/`)
- [ ] Import `fn` from 'storybook/test'
- [ ] Import component and types from correct package path
- [ ] Meta configuration includes title, component, tags, argTypes, args
- [ ] All event handlers have argTypes with `action: 'event-name'`
- [ ] Default args include `onEventName: fn()` for all events
- [ ] Default story exists
- [ ] Variant stories exist (if component has variants)
- [ ] State stories exist (disabled, loading, etc.)
- [ ] EventTesting story exists (if component has events)
- [ ] Stories properly bind event handlers to preserve Actions logging

### Lit-Specific

- [ ] Import component side-effect: `import 'agnosticui-core/component'`
- [ ] Import Props type: `import type { ComponentProps } from 'agnosticui-core/component'`
- [ ] Meta uses `Meta<ComponentProps>`
- [ ] Stories use property binding: `.propName=${value}`
- [ ] Stories use event binding: `@event-name=${handler}`

### Vue-Specific

- [ ] Import component and type: `import { VueComponent, type VueComponentProps } from 'agnosticui-core/component/vue'`
- [ ] Meta uses `satisfies Meta<VueComponentProps>`
- [ ] Stories return object with `components`, `setup()`, `template`
- [ ] Template uses prop binding: `:prop="value"`
- [ ] Template uses event binding: `@event="handler"`
- [ ] EventTesting story uses `ref()` for reactive state

### React-Specific

- [ ] Import component and type: `import { ReactComponent, type ReactComponentProps } from 'agnosticui-core/component/react'`
- [ ] Meta uses `satisfies Meta<ReactComponentProps>`
- [ ] Stories use JSX rendering
- [ ] Props passed via spread: `{...args}` or individually
- [ ] EventTesting story uses `useState` for reactive state

---

## Part 6: Event Logging Best Practices

### Always Chain Handlers in EventTesting Stories

**DO THIS** ✅:
```typescript
// Vue
const handleShow = (event: Event) => {
  showCount.value++;
  args.onShow?.(event as any); // ✅ Chain to preserve Actions logging
};

// React
onShow={(event) => {
  setShowCount(c => c + 1);
  args.onShow?.(event); // ✅ Chain to preserve Actions logging
}}
```

**DON'T DO THIS** ❌:
```typescript
// Vue
const handleShow = (event: Event) => {
  showCount.value++;
  // ❌ No chaining - Actions won't log
};

// React
onShow={(event) => {
  setShowCount(c => c + 1);
  // ❌ No chaining - Actions won't log
}}
```

### Verify Actions Panel

After implementing stories, verify:
1. Open component in Storybook
2. Open Actions panel (bottom of screen)
3. Interact with component (click, hover, etc.)
4. Verify events appear in Actions with correct names and details

---

## Part 7: Troubleshooting

### Events Not Logging to Actions Panel

**Problem**: Events fire but don't appear in Actions panel

**Checklist**:
1. ✅ Using `fn()` from 'storybook/test': `import { fn } from 'storybook/test'`
2. ✅ Args include handler: `args: { onShow: fn() }`
3. ✅ ArgTypes include action: `onShow: { action: 'show' }`
4. ✅ Event properly bound in render:
   - Lit: `@show=${onShow}`
   - Vue: `@show="args.onShow"`
   - React: `onShow={args.onShow}`
5. ✅ EventTesting story chains handler: `args.onShow?.(event)`

### Controls Not Updating Component

**Problem**: Changing controls doesn't update component

**Solution**:
- Lit: Use property binding `.prop=${value}`, not attribute
- Vue: Use v-bind `:prop="value"`, not static
- React: Spread args `{...args}` or bind individually

### TypeScript Errors in Stories

**Problem**: Type errors about missing properties

**Solution**: Make sure you're importing the correct Props type:
- Lit: Import from core package
- Vue: Import `VueComponentProps`
- React: Import `ReactComponentProps`

---

## Part 8: Template for New Components

When creating stories for a new component, use this template:

```typescript
// 1. Imports
import type { Meta, StoryObj } from '@storybook/{framework}';
import { fn } from 'storybook/test';
// ... component imports

// 2. Meta configuration
const meta = {
  title: 'AgnosticUI/ComponentName',
  component: /* ... */,
  tags: ['autodocs'],
  argTypes: {
    // Props
    // Event handlers with action
  },
  args: {
    // Default values
    // Event handlers with fn()
  },
} satisfies Meta<ComponentProps>;

export default meta;
type Story = StoryObj<typeof meta>;

// 3. Default story
export const Default: Story = {
  args: { /* ... */ },
  render: /* ... */
};

// 4. Variant/State stories
export const Variant: Story = { /* ... */ };
export const Disabled: Story = { /* ... */ };

// 5. Event testing story (if component has events)
export const EventTesting: Story = {
  render: (args) => {
    // Framework-specific state management
    // Visual feedback + chain args.onEventName?.()
  }
};
```

---

## Part 9: Quality Standards

Before marking stories as complete, verify:

### Visual Quality
- [ ] Component renders correctly in Storybook
- [ ] Layout is centered/properly spaced
- [ ] All variants are visually distinct
- [ ] States (disabled, loading) are clearly visible

### Functional Quality
- [ ] All controls work (change values updates component)
- [ ] All events log to Actions panel
- [ ] EventTesting story shows visual feedback
- [ ] No console errors or warnings

### Documentation Quality
- [ ] All props have descriptions in argTypes
- [ ] All events have descriptions in argTypes
- [ ] Story names are clear and descriptive
- [ ] Code examples are readable and well-formatted

---

## Summary: Quick Checklist

For each component, ensure:

- [ ] **Lit story** exists with all standard story types
- [ ] **Vue story** exists with all standard story types
- [ ] **React story** exists with all standard story types
- [ ] All stories use `fn()` for event handlers
- [ ] EventTesting story exists for each framework
- [ ] Events log to Actions panel correctly
- [ ] Stories follow naming conventions
- [ ] Documentation is complete and accurate

**Goal**: Uniform, predictable, professional documentation across all components. ✅
