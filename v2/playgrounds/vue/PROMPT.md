# Prompt

Create a Vue component and its Storybook story for a component named [ComponentName] in the agnosticui project. The component wraps the [web-component-name] web component from agnosticui-core (located at agnosticui-core/dist/components/[ComponentName]/core/\_[ComponentName].js) and uses the Vue wrapper from agnosticui-core/dist/components/[ComponentName]/vue/Vue[ComponentName].js. Follow these steps:

1. Create the Component File ([ComponentName].vue)

Location: Save in v2/playgrounds/vue/src/stories/[ComponentName].vue.

Structure:

Use <script lang="ts" setup> for TypeScript and Vue 3’s composition API.

Import the web component from agnosticui-core/[component-name] to register it.

Import the Vue wrapper from agnosticui-core/[component-name]/vue as Vue[ComponentName].

Define props matching the web component’s attributes (e.g., [list props like type, variant, size, etc.]), with appropriate types and defaults.

Define emits for events emitted by the web component (e.g., [list emits like click, toggle, etc.]).

Bind props and events to <Vue[ComponentName]> in the template, using the default slot for content if applicable.

Example (based on VueButton.vue):

Props: [e.g., type: 'button' | 'submit' | 'reset', variant: '' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger', size: 'small' | 'medium' | 'large', disabled: boolean, etc.].

Emits: [e.g., click: (event: Event) => void, toggle: (detail: { pressed: boolean }) => void].

Template: Bind props (e.g., :type="type", :variant="variant") and events (e.g., @click="onClick", @toggle="onToggle") to <Vue[ComponentName]>, with slot content (e.g., {{ label }}).

Template for [ComponentName].vue:

```vue
<template>
  <Vue[ComponentName]
    [bind
    props,
    e.g.,
    :prop1="prop1"
    :prop2="prop2"
    ]
    [bind
    events,
    e.g.,
    @event1="onEvent1"
    ]
  >
    {{ label }}
    <!-- Adjust slot content as needed -->
  </Vue[ComponentName]>
</template>

<script lang="ts" setup>
import 'agnosticui-core/[component-name]'; // Register the [web-component-name] web component
import Vue[ComponentName] from 'agnosticui-core/[component-name]/vue'; // Import the Vue wrapper

const props = withDefaults(
  defineProps<{
    /**
     * Description of prop1 (e.g., label for the component)
     */
    [prop1]: string;
    /**
     * Description of prop2
     */
    [prop2]?: [type, e.g., 'option1' | 'option2' | 'option3'];
    // Add other props with types and descriptions
    /**
     * Background color (not supported by Vue[ComponentName], included for compatibility)
     */
    backgroundColor?: string;
  }>(),
  {
    [prop1]: '[default value]',
    [prop2]: '[default value]',
    // Add defaults for other props
  }
);

const emit = defineEmits<{
  (e: '[event1]', [param]: [type]): void;
  // Add other emits
}>();

const [onEvent1] = ([param]: [type]) => {
  emit('[event1]', [param]);
};
</script>
```

2. Create the Storybook Story File ([ComponentName].stories.ts)

Location: Save in v2/playgrounds/vue/src/stories/[ComponentName].stories.ts.

Structure:

Use TypeScript with @storybook/vue3-vite and storybook/test for action spying.

Define a meta object with title, component, tags: ['autodocs'], argTypes for each prop, and default args.

Create stories for each prop or key feature (e.g., [Primary, Secondary, Large, Small, Disabled, etc.]).

For grouped or composite components, use a render function to display multiple instances if needed (e.g., like the Grouped story for buttons).

Example (based on Button.stories.ts):

argTypes: Define controls for each prop (e.g., select for enums like variant, boolean for flags like disabled, text for strings like ariaLabel).

args: Set default values matching withDefaults in the component.

Stories: Create one story per prop or feature, ensuring each includes the required label prop and other relevant props.

Template for [ComponentName].stories.ts:

```ts
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import [ComponentName] from './[ComponentName].vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/[ComponentName]',
  component: [ComponentName],
  tags: ['autodocs'],
  argTypes: {
    [prop1]: {
      control: '[control type, e.g., text]',
      description: '[Description of prop1]',
    },
    [prop2]: {
      control: 'select',
      options: ['[option1]', '[option2]', '[option3]'],
      description: '[Description of prop2]',
    },
    // Add other props
    backgroundColor: {
      control: 'color',
      description: 'Background color (not supported by Vue[ComponentName], included for compatibility)',
    },
    [event1]: {
      action: '[event1]',
      description: 'Emitted when [event description]',
    },
    // Add other events
  },
  args: {
    [prop1]: '[default value]',
    [prop2]: '[default value]',
    // Add other props
    [event1]: fn(),
    // Add other events
  },
} satisfies Meta<typeof [ComponentName]>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    [prop1]: '[value]',
  },
};

export const [Feature1]: Story = {
  args: {
    [prop1]: '[value]',
    [prop2]: '[value]',
  },
};

// Add stories for other features (e.g., [Feature2], [Feature3])
export const [Grouped or Composite]: Story = {
  render: (args) => ({
    components: { [ComponentName] },
    setup() {
      return { args };
    },
    template: `
      <div [style if needed, e.g., style="display: flex;"]>
        <[ComponentName] v-bind="args" [prop1]="[value1]" />
        <[ComponentName] v-bind="args" [prop1]="[value2]" />
        <[ComponentName] v-bind="args" [prop1]="[value3]" />
      </div>
    `,
  }),
  args: {
    [prop1]: '[fallback value]',
    // Add relevant props
  },
};
```
