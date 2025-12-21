# End-to-End Component Refactoring Guide

This guide documents the complete process of refactoring a component to follow AgnosticUI v2's interface pattern, using the Tooltip component as a real-world example.

## The Pattern: Core → Wrappers → Stories

The refactoring follows a clear chain:

1. **Core Component** - Define TooltipProps interface with event handlers
2. **Framework Wrappers** - Derive wrapper-specific props from core
3. **Storybook Stories** - Use PropsWithEvents for all stories

This ensures:
- Type safety across the entire stack
- Clear event mapping from `dispatchEvent` to handler props
- Consistency across Lit, React, and Vue implementations

---

## Step 1: Core Component (`/lib/src/components/Tooltip/core/_Tooltip.ts`)

### 1.1 Define Event Types

```typescript
/**
 * Custom event dispatched when the tooltip is shown
 */
export type TooltipShowEvent = CustomEvent<void>;

/**
 * Custom event dispatched when the tooltip is hidden
 */
export type TooltipHideEvent = CustomEvent<void>;
```

**Why**: TypeScript needs explicit event types for type-safe handlers.

### 1.2 Define Props Interface with Event Handlers

```typescript
/**
 * Props interface for Tooltip component including event handlers
 *
 * This interface defines the complete public API of the Tooltip component.
 * The component class implements this interface to enforce type safety between
 * the interface contract and the actual implementation.
 *
 * Event handlers (onShow, onHide) are included directly in the base Props interface,
 * making it simpler for consumers - there's just one interface to import and use.
 *
 * @fires {TooltipShowEvent} show - Fired when the tooltip becomes visible
 * @fires {TooltipHideEvent} hide - Fired when the tooltip becomes hidden
 */
export interface TooltipProps {
  content?: string;
  placement?: Placement;
  distance?: number;
  skidding?: number;
  trigger?: string;
  disabled?: boolean;
  // Event handlers are part of the base interface
  onShow?: (event: TooltipShowEvent) => void;
  onHide?: (event: TooltipHideEvent) => void;
}
```

**Key Points**:
- Single interface with ALL props including event handlers
- No separate `PropsWithEvents` interface needed in core
- Event handlers use proper event types (not just `void`)

### 1.3 Implement the Interface

```typescript
export class Tooltip extends LitElement implements TooltipProps {
  @property({ type: String })
  declare content: string;

  @property({ type: String, reflect: true })
  declare placement: Placement;

  // ... other properties

  updated(changedProperties: Map<string, unknown>) {
    if (this._open) {
      this.dispatchEvent(new CustomEvent('show')); // Maps to onShow
    } else {
      this.dispatchEvent(new CustomEvent('hide')); // Maps to onHide
    }
  }
}
```

**Key Points**:
- `implements TooltipProps` enforces the contract
- TypeScript errors if class properties don't match interface
- `dispatchEvent('show')` maps directly to `onShow` handler

---

## Step 2: Vue Wrapper (`/lib/src/components/Tooltip/vue/index.ts`)

### 2.1 Derive from Core Props

```typescript
// Import types from core to ensure consistency
import type { TooltipProps, TooltipShowEvent, TooltipHideEvent } from '../core/_Tooltip';

/**
 * Vue-specific props interface derived from core TooltipProps
 *
 * This ensures Vue wrapper stays in sync with core component API.
 * We omit onShow/onHide from base props since Vue uses @show/@hide event binding.
 */
export interface VueTooltipProps extends Omit<TooltipProps, 'onShow' | 'onHide'> {
  // All core props are inherited: content, placement, distance, skidding, trigger, disabled
}
```

**Why Omit Event Handlers**:
- Vue templates use `@show` / `@hide` event binding
- Base props don't need event handlers for template usage
- Keep them for programmatic usage in `PropsWithEvents`

### 2.2 Add PropsWithEvents for Programmatic Usage

```typescript
/**
 * Props interface with event handlers for programmatic usage
 * (Storybook, testing, imperative APIs)
 */
export interface VueTooltipPropsWithEvents extends VueTooltipProps {
  onShow?: (event: TooltipShowEvent) => void;
  onHide?: (event: TooltipHideEvent) => void;
}

// Re-export event types for consumer convenience
export type { TooltipShowEvent, TooltipHideEvent } from '../core/_Tooltip';
```

**When to Use**:
- `VueTooltipProps` - For component templates
- `VueTooltipPropsWithEvents` - For Storybook, tests, programmatic APIs

---

## Step 3: React Wrapper (`/lib/src/components/Tooltip/react/ReactTooltip.tsx`)

### 3.1 Derive from Core Props

```typescript
import type { Tooltip as TooltipWC, TooltipProps, TooltipShowEvent, TooltipHideEvent } from '../core/_Tooltip';

/**
 * React-specific props interface derived from core TooltipProps
 *
 * This ensures React wrapper stays in sync with core component API.
 * We omit onShow/onHide from base props and add React-specific props (children).
 */
export interface ReactTooltipProps extends Omit<TooltipProps, 'onShow' | 'onHide' | 'content'> {
  // Override content to allow ReactNode for richer content
  content: React.ReactNode;
  // React-specific: children to wrap with tooltip
  children: React.ReactElement;
}
```

**Why Omit/Override**:
- Omit event handlers (added back in `PropsWithEvents`)
- Override `content` from `string` to `React.ReactNode` for flexibility
- Add React-specific props like `children`

### 3.2 Add PropsWithEvents

```typescript
/**
 * Props interface with event handlers for programmatic usage
 * (Storybook, testing, imperative APIs)
 */
export interface ReactTooltipPropsWithEvents extends ReactTooltipProps {
  onShow?: (event: TooltipShowEvent) => void;
  onHide?: (event: TooltipHideEvent) => void;
}

export const ReactTooltip = forwardRef<ReactTooltipHandle, ReactTooltipPropsWithEvents>((
  { children, content, placement, disabled, trigger, onShow, onHide },
  ref
) => {
  // Component accepts event handlers as props
  const handleShow = (event: Event) => onShow?.(event as TooltipShowEvent);
  const handleHide = (event: Event) => onHide?.(event as TooltipHideEvent);

  useEffect(() => {
    const currentTooltip = tooltipRef.current;
    currentTooltip?.addEventListener('show', handleShow);
    currentTooltip?.addEventListener('hide', handleHide);

    return () => {
      currentTooltip?.removeEventListener('show', handleShow);
      currentTooltip?.removeEventListener('hide', handleHide);
    };
  }, [onShow, onHide]);

  // ...
});
```

---

## Step 4: Lit Storybook Story (`/playgrounds/lit/src/stories/Tooltip.stories.ts`)

### 4.1 Import and Configure Meta

```typescript
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { fn } from 'storybook/test';
import 'agnosticui-core/tooltip';
import type { TooltipProps } from 'agnosticui-core/tooltip';

const meta: Meta<TooltipProps> = {
  title: 'AgnosticUI/Tooltip',
  component: 'ag-tooltip',
  tags: ['autodocs'],
  argTypes: {
    // ... property controls
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
    onShow: fn(), // Creates action logger
    onHide: fn(),
  },
};
```

**Key Points**:
- Use `TooltipProps` (includes event handlers)
- Use `fn()` from 'storybook/test' for action logging
- No separate "PropsWithEvents" needed - core TooltipProps has them

### 4.2 Bind Events in Stories

```typescript
export const Default: Story = {
  render: ({ content, placement, trigger, disabled, onShow, onHide }) => html`
    <ag-tooltip
      .content=${content}
      .placement=${placement}
      .trigger=${trigger}
      .disabled=${disabled}
      @show=${onShow}
      @hide=${onHide}
    >
      <button>Hover over me</button>
    </ag-tooltip>
  `,
};
```

**Event Binding**:
- `@show=${onShow}` - Lit binds the event listener
- When component calls `dispatchEvent('show')`, `onShow` handler fires
- Storybook Actions panel shows the event

---

## Step 5: Vue Storybook Story (`/playgrounds/vue/src/stories/Tooltip.stories.ts`)

### 5.1 Import and Configure Meta

```typescript
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import { ref } from 'vue';
import { VueTooltip, type VueTooltipPropsWithEvents } from '../../../../lib/src/components/Tooltip/vue';

const meta = {
  title: 'AgnosticUI/Tooltip',
  component: VueTooltip,
  tags: ['autodocs'],
  argTypes: {
    // ... property controls
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
    trigger: 'hover focus',
    disabled: false,
    onShow: fn(),
    onHide: fn(),
  },
} satisfies Meta<VueTooltipPropsWithEvents>;
```

**Key Points**:
- Use `VueTooltipPropsWithEvents` (for programmatic usage)
- Use `fn()` for action logging

### 5.2 Bind Events in Templates

```typescript
export const Default: Story = {
  render: (args: VueTooltipPropsWithEvents) => ({
    components: { VueTooltip },
    setup() {
      return { args };
    },
    template: `
      <VueTooltip
        :content="args.content"
        :placement="args.placement"
        :trigger="args.trigger"
        :disabled="args.disabled"
        @show="args.onShow"
        @hide="args.onHide"
      >
        <button>Hover over me</button>
      </VueTooltip>
    `,
  }),
};
```

### 5.3 Event Testing Story with State

```typescript
export const EventTesting: Story = {
  render: (args: VueTooltipPropsWithEvents) => ({
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
      <div>
        <p>Show count: {{ showCount }}</p>
        <p>Hide count: {{ hideCount }}</p>
        <VueTooltip
          :content="args.content"
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

---

## Step 6: React Storybook Story (`/playgrounds/react/src/stories/Tooltip.stories.tsx`)

### 6.1 Import and Configure Meta

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { fn } from 'storybook/test';
import { ReactTooltip, type ReactTooltipPropsWithEvents } from 'agnosticui-core/tooltip/react';

const meta: Meta<ReactTooltipPropsWithEvents> = {
  title: 'AgnosticUI/Tooltip',
  component: ReactTooltip,
  tags: ['autodocs'],
  argTypes: {
    // ... property controls
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
    trigger: 'hover focus',
    disabled: false,
    onShow: fn(),
    onHide: fn(),
  },
} satisfies Meta<ReactTooltipPropsWithEvents>;
```

### 6.2 Basic Stories

```typescript
export const Default: Story = {
  render: (args: ReactTooltipPropsWithEvents) => (
    <ReactTooltip {...args}>
      <button>Hover over me</button>
    </ReactTooltip>
  ),
};
```

### 6.3 Event Testing Story with State

```typescript
export const EventTesting: Story = {
  render: (args: ReactTooltipPropsWithEvents) => {
    const [showCount, setShowCount] = useState(0);
    const [hideCount, setHideCount] = useState(0);

    return (
      <div>
        <p>Show count: {showCount}</p>
        <p>Hide count: {hideCount}</p>
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

---

## Summary: The Complete Chain

### Event Flow

```
┌─────────────────────────────────────────────────────────────┐
│ 1. Core Component                                            │
│    this.dispatchEvent(new CustomEvent('show'))              │
│                          ↓                                   │
│    Defined in interface: onShow?: (event) => void           │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│ 2. Framework Wrapper                                         │
│    Vue: @show="args.onShow"                                 │
│    React: <ReactTooltip onShow={...} />                    │
│    Lit: @show=${onShow}                                     │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│ 3. Storybook Story                                           │
│    args: { onShow: fn() }  // Logs to Actions panel         │
└─────────────────────────────────────────────────────────────┘
```

### Type Flow

```
┌─────────────────────────────────────────────────────────────┐
│ Core: TooltipProps (with onShow/onHide)                     │
└─────────────────────────────────────────────────────────────┘
                          ↓
        ┌─────────────────┴─────────────────┐
        ↓                                    ↓
┌────────────────┐                  ┌────────────────┐
│ VueTooltipProps│                  │ReactTooltipProps│
│ extends Omit   │                  │ extends Omit    │
└────────────────┘                  └────────────────┘
        ↓                                    ↓
┌───────────────────────┐          ┌───────────────────────┐
│VueTooltipPropsWithEvents│        │ReactTooltipPropsWithEvents│
│(adds back onShow/onHide)│        │(adds back onShow/onHide)  │
└───────────────────────┘          └───────────────────────┘
```

### Key Benefits

1. **Single Source of Truth**: Core TooltipProps defines the complete API
2. **Type Safety**: `implements TooltipProps` prevents drift
3. **Clear Event Mapping**: `dispatchEvent('show')` → `onShow` prop
4. **Framework Consistency**: Same pattern across Lit, React, Vue
5. **Automatic Sync**: Wrappers derive from core, stay in sync automatically

### Checklist for New Components

- [ ] Core: Define event types (`CustomEvent<Detail>`)
- [ ] Core: Create Props interface with event handlers (`onEventName`)
- [ ] Core: Implement interface (`implements Props`)
- [ ] Core: Dispatch events that map to handlers
- [ ] Vue: Derive VueProps from core with `Omit<Props, 'onX' | 'onY'>`
- [ ] Vue: Create VuePropsWithEvents that extends VueProps
- [ ] React: Derive ReactProps from core with necessary overrides
- [ ] React: Create ReactPropsWithEvents that extends ReactProps
- [ ] Lit Story: Use core Props, bind with `@event=${handler}`
- [ ] Vue Story: Use VuePropsWithEvents, bind with `@event="handler"`
- [ ] React Story: Use ReactPropsWithEvents, pass as props
- [ ] All Stories: Use `fn()` for action logging
- [ ] Test: Verify events appear in Storybook Actions panel
