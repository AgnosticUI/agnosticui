# Using React Tabs with Storybook

This guide shows how to set up the React Tabs component in Storybook with proper event handling.

## Understanding the Interface Pattern

AgnosticUI v2 components follow a consistent pattern: **single Props interface with event handlers included**. This makes the API predictable and type-safe.

### How It Works

The core component defines its complete API in one interface:

```typescript
// In /lib/src/components/Tabs/core/_Tabs.ts
export interface TabsProps {
  activation?: 'manual' | 'automatic';
  activeTab?: number;
  orientation?: 'horizontal' | 'vertical';
  // Event handlers are part of the base interface
  onTabChange?: (event: TabChangeEvent) => void;
}

export class Tabs extends LitElement implements TabsProps {
  // implements enforces that the class matches the interface

  private _activateTab(index: number) {
    // When component dispatches an event...
    this.dispatchEvent(new CustomEvent('tab-change', {
      detail: { activeTab: index, previousTab: previousTab }
    }));
    // ...it maps to the onTabChange handler in TabsProps
  }
}
```

### Benefits for Consumers

1. **Clear event mapping**: `dispatchEvent('tab-change')` → `onTabChange` prop
2. **Type safety**: `implements TabsProps` ensures the component actually provides what the interface promises
3. **Single source of truth**: One interface defines the entire public API
4. **Framework consistency**: React, Vue, and Lit wrappers all follow the same core pattern

### React-Specific Types

React wrappers extend the core pattern:

```typescript
// In /lib/src/components/Tabs/react/ReactTabs.tsx
export interface ReactTabsProps {
  activation?: 'manual' | 'automatic';
  activeTab?: number;
  orientation?: 'horizontal' | 'vertical';
  ariaLabel?: string;
  ariaLabelledBy?: string;
  children?: ReactNode;
  className?: string;
  id?: string;
}

// For programmatic usage (Storybook, testing, imperative APIs)
export interface ReactTabsPropsWithEvents extends ReactTabsProps {
  onTabChange?: (detail: { activeTab: number; previousTab: number }) => void;
}
```

### Real-World Example: Complete Tooltip Refactoring

The Tooltip component demonstrates this pattern end-to-end. Here's how React derives from core:

**Core** defines the complete API:
```typescript
export type TooltipShowEvent = CustomEvent<void>;
export type TooltipHideEvent = CustomEvent<void>;

export interface TooltipProps {
  content?: string;
  placement?: Placement;
  disabled?: boolean;
  onShow?: (event: TooltipShowEvent) => void;
  onHide?: (event: TooltipHideEvent) => void;
}

export class Tooltip extends LitElement implements TooltipProps {
  // implements enforces the contract
}
```

**React** derives from core with React-specific overrides:
```typescript
// Omit event handlers and content, add React-specific props
export interface ReactTooltipProps extends Omit<TooltipProps, 'onShow' | 'onHide' | 'content'> {
  content: React.ReactNode;  // Override to allow rich content
  children: React.ReactElement;  // React-specific
}

// Add event handlers back for programmatic usage
export interface ReactTooltipPropsWithEvents extends ReactTooltipProps {
  onShow?: (event: TooltipShowEvent) => void;
  onHide?: (event: TooltipHideEvent) => void;
}

export const ReactTooltip = forwardRef<ReactTooltipHandle, ReactTooltipPropsWithEvents>((props, ref) => {
  // Component wires up events from core web component to React props
  useEffect(() => {
    const handleShow = (event: Event) => props.onShow?.(event as TooltipShowEvent);
    const handleHide = (event: Event) => props.onHide?.(event as TooltipHideEvent);

    tooltipRef.current?.addEventListener('show', handleShow);
    tooltipRef.current?.addEventListener('hide', handleHide);

    return () => {
      tooltipRef.current?.removeEventListener('show', handleShow);
      tooltipRef.current?.removeEventListener('hide', handleHide);
    };
  }, [props.onShow, props.onHide]);
});
```

**Benefits**:
- React wrapper automatically stays in sync with core API
- TypeScript errors if core adds props that React doesn't handle
- Clear event flow: core `dispatchEvent` → React `useEffect` → prop handler

**For the complete end-to-end refactoring process**, see:
- `/lib/src/components/Tooltip/REFACTORING_GUIDE.md` - Step-by-step guide
- Shows: Core → Vue wrapper → React wrapper → All Storybook stories
- Includes event flow diagrams, type derivation, and testing patterns

## Quick Setup

### 1. Import the types and components

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { ReactTabs, Tab, TabPanel, type ReactTabsPropsWithEvents } from 'agnosticui-core/tabs/react';
```

**Note**: Use `ReactTabsPropsWithEvents` for Storybook - it extends the base props with event handlers for programmatic usage.

### 2. Configure the meta with default args

```typescript
const meta: Meta<ReactTabsPropsWithEvents> = {
  title: 'Components/Tabs',
  component: ReactTabs,
  tags: ['autodocs'],
  argTypes: {
    // ... your argTypes
    onTabChange: {
      action: 'tab-change',
      description: 'Emitted when the active tab changes.',
    },
  },
  args: {
    activation: 'manual',
    activeTab: 0,
    orientation: 'horizontal',
    ariaLabel: 'AgnosticUI Tabs',
    onTabChange: fn(), // Creates the action logger
  },
} satisfies Meta<ReactTabsPropsWithEvents>;

export default meta;
type Story = StoryObj<typeof meta>;
```

### 3. Create stories

```typescript
export const Default: Story = {
  args: {
    ariaLabel: 'Default Tabs',
  },
  render: (args: ReactTabsPropsWithEvents) => (
    <ReactTabs {...args}>
      <Tab panel="panel-1">Tab 1</Tab>
      <Tab panel="panel-2">Tab 2</Tab>
      <Tab panel="panel-3">Tab 3</Tab>
      <TabPanel id="panel-1">Content for Tab 1</TabPanel>
      <TabPanel id="panel-2">Content for Tab 2</TabPanel>
      <TabPanel id="panel-3">Content for Tab 3</TabPanel>
    </ReactTabs>
  ),
};
```

## Event Details

The `onTabChange` event provides the following details:

```typescript
interface TabChangeEventDetail {
  activeTab: number;      // Index of the newly active tab
  previousTab: number;    // Index of the previously active tab
}
```

## Using with Reactive State

For interactive examples that update the active tab:

```typescript
export const EventTesting: Story = {
  args: {
    ariaLabel: 'Event Testing Tabs',
  },
  render: (args: ReactTabsPropsWithEvents) => {
    const [activeTab, setActiveTab] = useState(0);
    return (
      <div>
        <p>Active Tab Index: {activeTab}</p>
        <ReactTabs
          {...args}
          activeTab={activeTab}
          onTabChange={(detail) => {
            setActiveTab(detail.activeTab);
            args.onTabChange?.(detail);
          }}
        >
          <Tab panel="panel-1">Tab 1</Tab>
          <Tab panel="panel-2">Tab 2</Tab>
          <Tab panel="panel-3">Tab 3</Tab>
          <TabPanel id="panel-1">Content for Tab 1. Interact to see events.</TabPanel>
          <TabPanel id="panel-2">Content for Tab 2. Interact to see events.</TabPanel>
          <TabPanel id="panel-3">Content for Tab 3. Interact to see events.</TabPanel>
        </ReactTabs>
      </div>
    );
  },
};
```

## Important Notes

### Panel IDs
The `Tab` component uses the `panel` prop to specify which panel it controls, and the `TabPanel` component uses the `id` prop. These must match:

```typescript
<Tab panel="panel-1">Tab 1</Tab>
<TabPanel id="panel-1">Content for Tab 1</TabPanel>
```

### Ref Access
You can access the underlying web component using refs:

```typescript
const tabsRef = useRef<AgnosticTabsElement>(null);

<ReactTabs ref={tabsRef} {...args}>
  {/* ... */}
</ReactTabs>

// Later, you can call methods:
// tabsRef.current?.selectTab(2);
```

## Complete Example

See `/playgrounds/react/src/stories/Tabs.stories.tsx` for a complete working example.
