# Storybook Story Generation Guide for AgnosticUI v2/lib Components

This guide outlines the process for generating Storybook stories from components in the `v2/lib` directory of the AgnosticUI library, based on the approach used for components like `Accordion`, `Breadcrumb`, and `Dialog`. The process is broken down into phases to ensure clarity, iterative development, and user verification at key steps. The goal is to create comprehensive Storybook stories that showcase the component’s props, variants, events, and accessibility features while adhering to the established patterns.

---

## Phase 1: Component Analysis and Planning

### Objective

Analyze the target component in `v2/lib/src/components/[Component]/vue/[Component].vue` to understand its props, emits, and usage patterns. Create a task list plan specifying which properties, variants, and events will be covered in the Storybook stories.

### Steps

1. **Read Component File**:

   - Locate the component in `v2/lib/src/components/[Component]/vue/[Component].vue`.
   - Read the entire file, focusing on:
     - **Props Interface**: Identify the props defined in the `defineProps` call or exported interface (e.g., `Vue[Component]Props`).
     - **Emits**: Note any events defined in `defineEmits`.
     - **Slots**: Check for slots (e.g., `<slot />`) that allow custom content.
     - **Web Component Integration**: Confirm the use of `<ag-[component]>` and any ref-based logic for setting props or handling events.

2. **Identify Key Features**:

   - List all props (e.g., `open`, `heading`, `noCloseOnEscape`) and their types (boolean, string, number, etc.).
   - List all emitted events (e.g., `dialog-open`, `dialog-close`).
   - Identify variants (e.g., different `type` values like `default`, `slash`, `bullet` for Breadcrumb).
   - Note accessibility features (e.g., `ariaLabel`, `aria-describedby`).

3. **Create Task List Plan**:

   - Outline the stories to be created, including:
     - **Default Story**: Basic usage with minimal props.
     - **Variant Stories**: One story per major variant (e.g., different `type` values or boolean toggles like `showCloseButton`).
     - **Event Testing Story**: A story to test emitted events with visual feedback and Storybook actions.
     - **Accessibility Story**: A story demonstrating ARIA attributes or accessibility features.
     - **Custom Content Story** (if applicable): A story showing slot usage with custom HTML.
   - Specify props to cover in each story.
   - Note any special considerations (e.g., preventing default navigation for links, handling boolean attributes).

4. **Output Plan**:

   - Present the task list in a markdown table or list, detailing:
     - Story name
     - Props/variants covered
     - Events tested (if applicable)
     - Accessibility features
   - Example for a `Dialog` component:

     ```markdown
     ### Task List Plan for Dialog Stories

     | Story Name        | Props Covered                          | Events Tested                                  | Accessibility Features | Notes                           |
     | ----------------- | -------------------------------------- | ---------------------------------------------- | ---------------------- | ------------------------------- |
     | Default           | `heading`, `description`               | None                                           | `ariaLabel`            | Basic closed dialog             |
     | OpenDialog        | `open: true`, `heading`, `description` | `dialog-open`                                  | `ariaLabel`            | Dialog open by default          |
     | WithCloseButton   | `showCloseButton: true`, `open`        | `dialog-close`                                 | `ariaLabel`            | Shows close button              |
     | NoCloseOnEscape   | `noCloseOnEscape: true`, `open`        | `dialog-cancel`                                | `ariaLabel`            | Prevents Escape key closing     |
     | NoCloseOnBackdrop | `noCloseOnBackdrop: true`, `open`      | `dialog-close`                                 | `ariaLabel`            | Prevents backdrop click closing |
     | WithCustomContent | `heading`, `open`, `showCloseButton`   | None                                           | `ariaLabel`            | Uses slot for custom content    |
     | EventTesting      | `open`, `showCloseButton`              | `dialog-open`, `dialog-close`, `dialog-cancel` | `ariaLabel`            | Visual feedback for events      |
     | Accessible        | `ariaLabel`, `aria-describedby`        | None                                           | `aria-describedby`     | Demonstrates ARIA attributes    |
     ```

5. **Request User Approval**:

   - Output the plan and explicitly ask the user to verify and approve before proceeding.
   - Example:

     ```markdown
     Please review the task list plan above for the Dialog component stories. Confirm that the planned stories, props, events, and accessibility features meet your requirements, or specify any changes needed. Once approved, I will proceed to Phase 2 to implement the minimal Default story.

     **⛔ STOP - Waiting for your approval.**
     ```

**⛔ STOP**: Do not proceed to Phase 2 until the user approves the plan.

---

## Phase 2: Minimal Default Story Implementation

### Objective

Implement a minimal Storybook story file (`[Component].stories.ts`) with a single `Default` story to ensure the component renders without errors in Storybook. This allows the user to verify basic functionality before expanding to additional stories.

### Steps

1. **Create Story File**:

   - Create `playgrounds/vue/src/stories/[Component].stories.ts`.
   - Follow the pattern from previous examples (e.g., `Breadcrumb.stories.ts`, `Dialog.stories.ts`).

2. **Set Up Meta Configuration**:

   - Import `Meta` and `StoryObj` from `@storybook/vue3-vite` and `fn` from `storybook/test`.
   - Import the component (e.g., `Vue[Component]` from `agnosticui-core/[component]`).
   - Define the `meta` object with:
     - `title`: `'AgnosticUI/[Component]'` (e.g., `'AgnosticUI/Dialog'`).
     - `component`: The imported `Vue[Component]`.
     - `tags`: `['autodocs']` for automatic documentation.
     - `argTypes`: Define controls for all props from the `Vue[Component]Props` interface (e.g., `boolean` for `open`, `text` for `heading`, `action` for events).
     - `args`: Set default values matching the component’s `withDefaults` (e.g., `open: false`, `heading: 'Dialog Title'`).
   - Use `satisfies Meta<typeof Vue[Component]>` for TypeScript compatibility.

3. **Implement Default Story**:
   - Create a `Default` story that:
     - Uses minimal props (e.g., `heading`, `description` for Dialog).
     - Renders the component with a simple template, including any default slot content if applicable.
     - Example for Dialog:
       ```typescript
       export const Default: Story = {
         args: {
           heading: "Default Dialog",
           description: "This is a default dialog.",
         },
         render: (args) => ({
           components: { VueDialog },
           setup() {
             return { args };
           },
           template: `
             <VueDialog v-bind="args">
               <p>This is the default dialog content.</p>
             </VueDialog>
           `,
         }),
       };
       ```

Now, ask user to Test in Storybook.

**⛔ STOP - Waiting for your approval.**

Ask user to verify that the `Default` story renders without errors and displays the component correctly.

Once user confirms proceed to next step.

**⛔ STOP**: Do not proceed to 5. until the user confirms the `Default` story works and specifies how to proceed.

5.  **Remaining Stories and Props**:

Please confirm that the `Default` story works in Storybook. Then, let me know how you'd like to proceed:

- Implement all remaining stories in one shot.
- Tackle specific props/variants first (e.g., boolean props like `open`, `showCloseButton`).
- Other preferences?

**⛔ STOP - Waiting for your approval.**
**⛔ STOP**: Do not proceed to phase 3 until the user confirms the `Default` story works and specifies how to proceed.

---

## Phase 3: Implement Remaining Stories

### Objective

Implement the remaining Storybook work based on the user’s feedback from Phase 2, covering all planned props, variants, events, and accessibility features.

# EXAMPLE

Please let the follow serve as an example Storybook story and not the patterns, use of props interface, how events are handled in the story via `v-bind="args"` and `v-model:open="open"` patterns:

```ts
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { fn } from "storybook/test";
import { VueDialog } from "agnosticui-core/dialog/vue";
import type { VueDialogExtendedProps } from "agnosticui-core/dialog/vue";
import VueButton from "agnosticui-core/button/vue";
import { ref } from "vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "AgnosticUI/Dialog",
  component: VueDialog,
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "Whether the dialog is open",
    },
    heading: {
      control: "text",
      description: "The heading text for the dialog",
    },
    description: {
      control: "text",
      description: "The description text for the dialog",
    },
    noCloseOnEscape: {
      control: "boolean",
      description: "Prevents closing the dialog when pressing the Escape key",
    },
    noCloseOnBackdrop: {
      control: "boolean",
      description: "Prevents closing the dialog when clicking the backdrop",
    },
    showCloseButton: {
      control: "boolean",
      description: "Shows a close button in the dialog",
    },
    onDialogOpen: {
      action: "dialog-open",
      description: "Emitted when the dialog is opened",
    },
    onDialogClose: {
      action: "dialog-close",
      description: "Emitted when the dialog is closed",
    },
    onDialogCancel: {
      action: "dialog-cancel",
      description: "Emitted when the dialog is canceled",
    },
  },
  args: {
    open: false,
    heading: "Dialog Title",
    description: "This is a description of the dialog.",
    noCloseOnEscape: false,
    noCloseOnBackdrop: false,
    showCloseButton: false,
    onDialogOpen: fn(),
    onDialogClose: fn(),
    onDialogCancel: fn(),
  } satisfies Meta<typeof VueDialog>,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: "Default Dialog",
    description: "This is a default dialog.",
  },
  render: (args: VueDialogExtendedProps) => ({
    components: { VueDialog, VueButton },
    setup() {
      const open = ref(false);
      const show = () => {
        open.value = true;
      };
      return { args, open, show };
    },
    template: `
      <div>
        <VueButton @click="show">Open Dialog</VueButton>
        <VueDialog v-bind="args" v-model:open="open">
          <p>This is the default dialog content.</p>
        </VueDialog>
      </div>
    `,
  }),
};

export const OpenDialog: Story = {
  args: {
    heading: "Open Dialog",
    description: "This dialog is open by default.",
  },
  render: (args: VueDialogExtendedProps) => ({
    components: { VueDialog, VueButton },
    setup() {
      const open = ref(false);
      const show = () => {
        open.value = true;
      };
      return { args, open, show };
    },
    template: `
      <div>
        <VueButton @click="show">Open Dialog</VueButton>
        <VueDialog v-bind="args" v-model:open="open">
          <p>This dialog is open when rendered.</p>
        </VueDialog>
      </div>
    `,
  }),
};

export const WithCloseButton: Story = {
  args: {
    heading: "Dialog with Close Button",
    description: "This dialog has a close button.",
    showCloseButton: true,
  },
  render: (args: VueDialogExtendedProps) => ({
    components: { VueDialog, VueButton },
    setup() {
      const open = ref(false);
      const show = () => {
        open.value = true;
      };
      return { args, open, show };
    },
    template: `
      <div>
        <VueButton @click="show">Open Dialog</VueButton>
        <VueDialog v-bind="args" v-model:open="open">
          <p>This dialog includes a close button.</p>
        </VueDialog>
      </div>
    `,
  }),
};

export const NoCloseOnEscape: Story = {
  args: {
    heading: "No Close on Escape",
    description: "This dialog cannot be closed with the Escape key.",
    noCloseOnEscape: true,
  },
  render: (args: VueDialogExtendedProps) => ({
    components: { VueDialog, VueButton },
    setup() {
      const open = ref(false);
      const show = () => {
        open.value = true;
      };
      return { args, open, show };
    },
    template: `
      <div>
        <VueButton @click="show">Open Dialog</VueButton>
        <VueDialog v-bind="args" v-model:open="open">
          <p>Try pressing Escape; the dialog won't close.</p>
        </VueDialog>
      </div>
    `,
  }),
};

export const NoCloseOnBackdrop: Story = {
  args: {
    heading: "No Close on Backdrop",
    description: "This dialog cannot be closed by clicking the backdrop.",
    noCloseOnBackdrop: true,
  },
  render: (args: VueDialogExtendedProps) => ({
    components: { VueDialog, VueButton },
    setup() {
      const open = ref(false);
      const show = () => {
        open.value = true;
      };
      return { args, open, show };
    },
    template: `
      <div>
        <VueButton @click="show">Open Dialog</VueButton>
        <VueDialog v-bind="args" v-model:open="open">
          <p>Click the backdrop; the dialog won't close.</p>
        </VueDialog>
      </div>
    `,
  }),
};

export const WithCustomContent: Story = {
  args: {
    heading: "Custom Content Dialog",
    description: "This dialog contains custom content.",
    showCloseButton: true,
  },
  render: (args: VueDialogExtendedProps) => ({
    components: { VueDialog, VueButton },
    setup() {
      const open = ref(false);
      const show = () => {
        open.value = true;
      };
      return { args, open, show };
    },
    template: `
      <div>
        <VueButton @click="show">Open Dialog</VueButton>
        <VueDialog v-bind="args" v-model:open="open">
          <div>
            <h3>Custom Content</h3>
            <p>This dialog includes custom HTML content.</p>
            <VueButton>Action Button</VueButton>
          </div>
        </VueDialog>
      </div>
    `,
  }),
};

export const EventTesting: Story = {
  args: {
    heading: "Event Testing Dialog",
    description: "Interact to test dialog events.",
    showCloseButton: true,
  },
  render: (args: VueDialogExtendedProps) => ({
    components: { VueDialog, VueButton },
    setup() {
      const open = ref(false);
      const show = () => {
        open.value = true;
      };
      const eventMessage = ref<string | null>(null);
      const onOpen = () => {
        args.onDialogOpen?.();
        eventMessage.value = "Dialog opened";
      };
      const onClose = () => {
        args.onDialogClose?.();
        eventMessage.value = "Dialog closed";
      };
      const onCancel = () => {
        args.onDialogCancel?.();
        eventMessage.value = "Dialog canceled";
      };
      return { args, open, show, onOpen, onClose, onCancel, eventMessage };
    },
    template: `
      <div>
        <VueButton @click="show">Open Dialog</VueButton>
        <VueDialog
          v-bind="args"
          v-model:open="open"
          @dialog-open="onOpen"
          @dialog-close="onClose"
          @dialog-cancel="onCancel"
        >
          <p>Interact with the dialog to test events (open, close, cancel).</p>
        </VueDialog>
        <p v-if="eventMessage">{{ eventMessage }}</p>
      </div>
    `,
  }),
};
```
