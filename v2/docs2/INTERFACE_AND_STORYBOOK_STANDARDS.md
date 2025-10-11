# Interface and Storybook Standards

This document defines the standards for creating component interfaces and their corresponding Storybook documentation in AgnosticUI v2. The two are presented together because they are intrinsically linked: the Storybook stories are the living documentation and testbed for the component's interface.

## 1. Core Principle: Learn One, Understand All

A developer or LLM assistant who learns the interface and Storybook pattern for one component should be able to immediately understand and work with any other component in the library. Consistency is paramount.

## 2. Part 1: Defining the Core Interface

**Location**: `v2/lib/src/components/MyComponent/core/_MyComponent.ts`

**Rule**: Every component must have a single props interface that includes all properties and event handlers.

**Checklist**:

1.  **Define Event Types**: For each event the component dispatches, export a `CustomEvent` type.

    ```typescript
    // Event with no detail
    export type MyComponentShowEvent = CustomEvent<void>;
    // Event with detail
    export type MyComponentChangeEvent = CustomEvent<{ value: string }>;
    ```

2.  **Define the Props Interface**: Create a single interface named `MyComponentProps`.
    -   Include all component properties (`@property`).
    -   Include all event handlers as optional properties (`onEventName?`).

    ```typescript
    export interface MyComponentProps {
      // Properties
      label?: string;
      disabled?: boolean;

      // Event Handlers
      onShow?: (e: MyComponentShowEvent) => void;
      onChange?: (e: MyComponentChangeEvent) => void;
    }
    ```

3.  **Implement the Interface**: The component class must implement this interface.

    ```typescript
    export class MyComponent extends LitElement implements MyComponentProps {
      // ... property declarations
    }
    ```

## 3. Part 2: Documenting with Storybook

**Objective**: For every component, create a Storybook file for each supported framework (Lit, Vue, React) that documents and tests its interface.

### 3.1. Lit Stories

**Location**: `v2/playgrounds/lit/src/stories/MyComponent.stories.ts`

**Key Patterns**:
-   **Meta**: The `meta` object's type should be `Meta<MyComponentProps>`.
-   **argTypes**: Every prop and event handler from `MyComponentProps` must have an entry.
-   **args**: Provide default values for all props and use `fn()` from `storybook/test` for event handlers.
-   **Render**: Use Lit's `html` template. Bind properties with `.prop=${value}` and events with `@event-name=${handler}`.

**Example**:
```typescript
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { fn } from 'storybook/test';
import 'agnosticui-core/my-component';
import type { MyComponentProps } from 'agnosticui-core/my-component';

const meta: Meta<MyComponentProps> = {
  title: 'AgnosticUI/MyComponent',
  component: 'ag-my-component',
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    onShow: { action: 'show' },
    onChange: { action: 'change' },
  },
  args: {
    label: 'Default Label',
    disabled: false,
    onShow: fn(),
    onChange: fn(),
  },
};

export default meta;

export const Default: StoryObj<MyComponentProps> = {
  render: ({ label, disabled, onShow, onChange }) => html`
    <ag-my-component
      .label=\${label}
      .disabled=\${disabled}
      @show=\${onShow}
      @change=\${onChange}
    ></ag-my-component>
  `,
};
```

### 3.2. Vue Stories

**Location**: `v2/playgrounds/vue/src/stories/MyComponent.stories.ts`

**Key Patterns**:
-   **Meta**: The `meta` object's type should be `Meta<typeof VueMyComponent>`.
-   **Render**: The `render` function returns a Vue component definition object.
-   **Template**: Use a string template. Bind props with `:prop="args.prop"` and events with `@event="args.onEvent"`.

**Example**:
```typescript
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import { VueMyComponent, type VueMyComponentProps } from 'agnosticui-core/my-component/vue';

const meta = {
  title: 'AgnosticUI/MyComponent',
  component: VueMyComponent,
  argTypes: { /* ... same as Lit ... */ },
  args: { /* ... same as Lit ... */ },
} satisfies Meta<typeof VueMyComponent>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  render: (args: VueMyComponentProps) => ({
    components: { VueMyComponent },
    setup() {
      return { args };
    },
    template: `<VueMyComponent :label="args.label" :disabled="args.disabled" @show="args.onShow" @change="args.onChange" />`,
  }),
};
```

### 3.3. React Stories

**Location**: `v2/playgrounds/react/src/stories/MyComponent.stories.tsx`

**Key Patterns**:
-   **Meta**: The `meta` object's type should be `Meta<ReactMyComponentProps>`.
-   **Render**: The `render` function returns a JSX element.
-   **Props**: Pass props by spreading the `args` object: `{...args}`.

**Example**:
```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { ReactMyComponent, type ReactMyComponentProps } from 'agnosticui-core/my-component/react';

const meta: Meta<ReactMyComponentProps> = {
  title: 'AgnosticUI/MyComponent',
  component: ReactMyComponent,
  argTypes: { /* ... same as Lit ... */ },
  args: { /* ... same as Lit ... */ },
} satisfies Meta<ReactMyComponentProps>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  render: (args) => <ReactMyComponent {...args} />,
};
```

## 4. Standard Story Types

For every component, create the following stories where applicable:

-   **`Default`**: The standard, most common usage.
-   **`Variants`**: One story for each major visual variant (e.g., `Primary`, `Secondary`, `Danger`).
-   **`States`**: One story for each important state (e.g., `Disabled`, `Loading`).
-   **`EventTesting`**: An interactive story that provides visual feedback when events are fired. This story should use framework-specific state (`useState` in React, `ref` in Vue) to update the UI and must also call the `args.onEventName` function to ensure events are logged in the Storybook Actions panel.

**EventTesting Example (React)**:
```typescript
export const EventTesting: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <div>
        <p>Last value: {value}</p>
        <ReactMyComponent
          {...args}
          onChange={(e) => {
            setValue(e.detail.value);
            args.onChange?.(e); // Chain to the Storybook action
          }}
        />
      </div>
    );
  },
};
```
