Storybook Story Generation Guide for AgnosticUI v2/lib Web Components with Lit
This guide outlines the process for generating Storybook stories for web components in the v2/lib directory of the AgnosticUI library, using Lit for rendering in a Storybook environment. It is based on the approach used for components like Button (ag-button) and Tabs (ag-tabs). The process is broken down into phases to ensure clarity, iterative development, and user verification at key steps. The goal is to create comprehensive Storybook stories that showcase the component’s attributes, properties, events, slots, and accessibility features while adhering to established patterns.
Note: AgnosticUI core components may use a prefix (Ag, e.g., AgButton) or no prefix (e.g., Tabs, Tab). Always verify the component’s custom element name (e.g., ag-button, ag-tabs) in the source code and use it consistently in stories.

Phase 0: Prompt User to Set Up "npm link"
⛔ STOP: Ask the user to run npm run relink in the relevant playground directory (e.g., v2/playgrounds/lit) to ensure agnosticui-core is available for referencing from code. This step is critical to link the latest compiled web components.
npm run relink

⛔ STOP: Confirm with the user that npm run relink has been executed before proceeding.

Phase 1: Component Analysis and Planning
Objective
Analyze the target web component in v2/lib/src/components/[Component]/_[Component].ts to understand its attributes, properties, events, and slots. Create a task list plan specifying which attributes, properties, variants, events, and accessibility features will be covered in the Storybook stories.
Steps

Read Component File:

Locate the component in v2/lib/src/components/[Component]/_[Component].ts.
Read the entire file, focusing on:
Class Definition: Identify the @customElement decorator to confirm the tag name (e.g., ag-button, ag-tabs).
Properties: Check @property decorators for reactive properties (e.g., variant, size, activeTab).
Attributes: Note which properties reflect to attributes (via reflect: true).
Events: Identify CustomEvent dispatches (e.g., toggle for AgButton, tab-change for Tabs).
Slots: Check the render method for <slot> elements, including named slots (e.g., slot="tab" for Tabs).
Accessibility: Look for ARIA attributes (e.g., aria-label, aria-labelledby) and keyboard handling.




Identify Key Features:

List all properties/attributes (e.g., variant, size for AgButton; activeTab, orientation for Tabs) and their types (string, number, boolean, etc.).
List all emitted events (e.g., toggle for AgButton, tab-change for Tabs) and their payloads.
Identify variants (e.g., variant values like primary, secondary for AgButton; orientation values like horizontal, vertical for Tabs).
Note slots (e.g., default slot for AgButton, tab and panel slots for Tabs).
Document accessibility features (e.g., aria-label, aria-describedby, role attributes).


Create Task List Plan:

Outline the stories to be created, including:

Default Story: Basic usage with minimal attributes/properties.
Variant Stories: One story per major variant (e.g., variant values like primary, secondary; orientation values like horizontal, vertical).
State Stories: Stories for state-based properties (e.g., disabled, loading, pressed for AgButton).
Event Testing Story: A story to test emitted events with visual feedback and Storybook actions.
Accessibility Story: A story demonstrating ARIA attributes or accessibility features.
Slot Stories: Stories showcasing slot usage (default or named slots).


Specify attributes/properties, events, and slots to cover in each story.

Note any special considerations (e.g., preventing default form submission, handling slot content).

Example for Tabs component:
### Task List Plan for Tabs Stories

| Story Name          | Attributes/Properties Covered       | Events Tested         | Slots Used            | Accessibility Features         | Notes                              |
|--------------------|------------------------------------|-----------------------|-----------------------|-------------------------------|------------------------------------|
| Default            | `ariaLabel`                        | None                  | `tab`, `panel`        | `aria-label`                  | Basic horizontal tabs              |
| Vertical           | `orientation: vertical`, `ariaLabel` | None                 | `tab`, `panel`        | `aria-label`                  | Vertical orientation               |
| AutomaticActivation | `activation: automatic`, `ariaLabel` | None                | `tab`, `panel`        | `aria-label`                  | Automatic tab activation           |
| InitialTab         | `activeTab: 2`, `ariaLabel`        | None                  | `tab`, `panel`        | `aria-label`                  | Starts with third tab active       |
| DisabledTab        | `disabled` on `ag-tab`, `ariaLabel` | None                 | `tab`, `panel`        | `aria-disabled`               | One tab disabled                   |
| EventTesting       | `activeTab`, `ariaLabel`           | `tab-change`          | `tab`, `panel`        | `aria-label`                  | Shows active tab index             |
| LabelledBy         | `ariaLabelledBy`                   | None                  | `tab`, `panel`        | `aria-labelledby`             | Uses external heading for labeling |




Output Plan:

Present the task list in a markdown table or list, detailing:
Story name
Attributes/properties covered
Events tested (if applicable)
Slots used
Accessibility features


Example output:Please review the task list plan above for the Tabs component stories. Confirm that the planned stories, attributes, properties, events, slots, and accessibility features meet your requirements, or specify any changes needed. Once approved, I will proceed to Phase 2 to implement the minimal Default story.

**⛔ STOP - Waiting for your approval.**





⛔ STOP: Do not proceed to Phase 2 until the user approves the plan.

Phase 2: Minimal Default Story Implementation
Objective
Implement a minimal Storybook story file ([Component].stories.ts) with a single Default story to ensure the web component renders without errors in Storybook’s Lit environment. This allows the user to verify basic functionality before expanding to additional stories.
Steps

Create Story File:

Create playgrounds/lit/src/stories/[Component].stories.ts.
Follow the pattern from existing examples (e.g., Button.stories.ts, Tabs.stories.ts).


Set Up Meta Configuration:

Import Meta and StoryObj from @storybook/web-components and html from lit.
Import the web component’s type (e.g., import type { AgButton } from 'agnosticui-core/button' or import type { Tabs } from 'agnosticui-core/tabs').
Import the web component’s module to register it (e.g., import 'agnosticui-core/button' or import 'agnosticui-core/tabs').
Define the meta object with:
title: 'Components/[Component]' (e.g., 'Components/Tabs').
component: The custom element tag (e.g., 'ag-tabs').
tags: ['autodocs'] for automatic documentation.
argTypes: Define controls for all properties/attributes (e.g., select for variant, boolean for disabled, number for activeTab, text for ariaLabel).
args: Set default values matching the component’s defaults (e.g., activation: 'manual', activeTab: 0 for Tabs).
parameters: Include actions.handles for events (e.g., ['toggle', 'focus', 'blur'] for AgButton).


Use satisfies Meta<ComponentType> for TypeScript compatibility, where ComponentType is the component’s type (e.g., AgButton, Tabs).


Implement Default Story:

Create a Default story that:
Uses minimal attributes/properties (e.g., ariaLabel for Tabs).
Includes required slots (e.g., <ag-tab slot="tab"> and <ag-tab-panel slot="panel"> for Tabs).
Uses Lit’s html template literal to render the component.
Binds properties using .property=${value} and attributes using attribute=${value} as needed.
Example for Tabs:export const Default: Story = {
  args: {
    ariaLabel: 'Default Tabs',
  },
  render: ({ ariaLabel }) => html`
    <ag-tabs aria-label=${ariaLabel}>
      <ag-tab slot="tab" panel="panel-1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel-2">Tab 2</ag-tab>
      <ag-tab slot="tab" panel="panel-3">Tab 3</ag-tab>
      <ag-tab-panel slot="panel" panel="panel-1">Content for Tab 1</ag-tab-panel>
      <ag-tab-panel slot="panel" panel="panel-2">Content for Tab 2</ag-tab-panel>
      <ag-tab-panel slot="panel" panel="panel-3">Content for Tab 3</ag-tab-panel>
    </ag-tabs>
  `,
};






Test in Storybook:

Ask the user to run Storybook (npm run storybook in v2/playgrounds/lit) and verify that the Default story renders without errors.
Example prompt:I have implemented the `Default` story for the [Component] component in `playgrounds/lit/src/stories/[Component].stories.ts`. Please run `npm run storybook` in `v2/playgrounds/lit` and confirm that the story renders correctly. If there are any issues, please share the error details for debugging.

**⛔ STOP - Waiting for your confirmation.**





⛔ STOP: Do not proceed to Phase 3 until the user confirms the Default story works and specifies how to proceed.

Request User Guidance for Remaining Stories:

After the user confirms the Default story, ask how they’d like to proceed:
Implement all remaining stories in one shot.
Tackle specific props/variants first (e.g., boolean props, specific variants).
Focus on specific stories (e.g., EventTesting, Accessible).
Other preferences.


Example prompt:The `Default` story for [Component] has been implemented. Please confirm it renders correctly in Storybook. Then, let me know how you'd like to proceed:

- Implement all remaining stories from the Phase 1 plan.
- Focus on specific props/variants (e.g., `variant`, `disabled`).
- Prioritize specific stories (e.g., `EventTesting`, `Accessible`).
- Other preferences?

**⛔ STOP - Waiting for your instructions.**





⛔ STOP: Do not proceed to Phase 3 until the user confirms the Default story works and provides instructions.

Phase 3: Implement Remaining Stories
Objective
Implement the remaining Storybook stories based on the user’s feedback from Phase 2, covering all planned attributes, properties, variants, events, slots, and accessibility features.
Steps

Implement Variant Stories:

Create stories for each variant (e.g., Primary, Secondary, Success for AgButton; Vertical, AutomaticActivation for Tabs).
Use minimal props to highlight the variant (e.g., variant="primary" for AgButton).
Example for AgButton:export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  render: ({ variant }) => html`<ag-button .variant=${variant}>Primary Button</ag-button>`,
};




Implement State Stories:

Create stories for state-based properties (e.g., disabled, loading, pressed for AgButton).
Example for AgButton:export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
  },
  render: ({ variant, disabled }) => html`<ag-button .variant=${variant} .disabled=${disabled}>Disabled Button</ag-button>`,
};




Implement Event Testing Story:

Create an EventTesting story to test emitted events using Storybook’s useArgs hook for dynamic updates and console.log for action logging.
Example for Tabs:export const EventTesting: Story = {
  args: {
    ariaLabel: 'Event Testing Tabs',
  },
  render: ({ ariaLabel }) => {
    const [args, updateArgs] = useArgs();
    const onTabChange = (e: CustomEvent) => {
      updateArgs({ activeTab: e.detail.activeTab });
      console.log('tab-change event:', e.detail);
    };
    return html`
      <p>Active Tab Index: ${args.activeTab ?? 0}</p>
      <ag-tabs
        .activeTab=${args.activeTab}
        aria-label=${ariaLabel}
        @tab-change=${onTabChange}
      >
        <ag-tab slot="tab" panel="panel-1">Tab 1</ag-tab>
        <ag-tab slot="tab" panel="panel-2">Tab 2</ag-tab>
        <ag-tab slot="tab" panel="panel-3">Tab 3</ag-tab>
        <ag-tab-panel slot="panel" panel="panel-1">Content for Tab 1</ag-tab-panel>
        <ag-tab-panel slot="panel" panel="panel-2">Content for Tab 2</ag-tab-panel>
        <ag-tab-panel slot="panel" panel="panel-3">Content for Tab 3</ag-tab-panel>
      </ag-tabs>
    `;
  },
};




Implement Slot Stories:

Create stories to demonstrate slot usage (default or named slots).
Example for Tabs:export const CustomContent: Story = {
  args: {
    ariaLabel: 'Custom Content Tabs',
  },
  render: ({ ariaLabel }) => html`
    <ag-tabs aria-label=${ariaLabel}>
      <ag-tab slot="tab" panel="panel-1">Custom Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel-2">Custom Tab 2</ag-tab>
      <ag-tab-panel slot="panel" panel="panel-1">
        <div>
          <h3>Custom Content</h3>
          <p>This is custom HTML content for Tab 1.</p>
        </div>
      </ag-tab-panel>
      <ag-tab-panel slot="panel" panel="panel-2">Content for Tab 2</ag-tab-panel>
    </ag-tabs>
  `,
};




Implement Accessibility Story:

Create an Accessible story to showcase ARIA attributes (e.g., aria-label, aria-labelledby, aria-describedby).
Example for AgButton:export const Accessible: Story = {
  args: {
    variant: 'primary',
    ariaLabel: 'Custom button label',
    ariaDescribedby: 'description-id',
  },
  render: ({ variant, ariaLabel, ariaDescribedby }) => html`
    <div>
      <p id="description-id">This button performs an action</p>
      <ag-button .variant=${variant} .ariaLabel=${ariaLabel} .ariaDescribedby=${ariaDescribedby}>
        Accessible Button
      </ag-button>
    </div>
  `,
};




Test and Validate:

Ask the user to run Storybook and verify that all stories render correctly and that events are logged in the Actions panel.
Example prompt:All planned stories for [Component] have been implemented in `playgrounds/lit/src/stories/[Component].stories.ts`. Please run `npm run storybook` in `v2/playgrounds/lit` and confirm that the stories render correctly, events are logged in the Actions panel, and accessibility features work as expected. If there are any issues, please share the error details or desired changes.

**⛔ STOP - Waiting for your confirmation.**






Troubleshooting
If you encounter errors when rendering a web component in Storybook, follow these steps to debug the issue.
1. Check Your Build Process
The most common source of errors is an outdated build. After making any changes to component source code in the v2/lib directory, you must:

Run npm run build in the v2/lib directory.
Run npm run relink in the relevant playground directory (e.g., v2/playgrounds/lit).

This ensures your latest code is compiled and linked into the Storybook environment.
cd v2/lib
npm run build
cd ../playgrounds/lit
npm run relink

2. Isolate the Web Component
If the error persists, confirm that the web component itself is functional:
// In [Component].stories.ts
export const RawWebComponentTest: Story = {
  render: () => html`
    <ag-[component-lowercase] aria-label="Test">
      <!-- Add minimal required content, e.g., slots -->
    </ag-[component-lowercase]>
  `,
};


Replace [component-lowercase] with the component’s tag name (e.g., ag-button, ag-tabs).
If this story works, the issue is likely in the story configuration or props.
If this story fails, the issue is in the core web component (e.g., _Button.ts, _Tabs.ts).

3. Check for Web Component Lifecycle Errors
A common error is Uncaught NotSupportedError: Failed to execute 'createElement' on 'Document': The result must not have attributes. This occurs when setting attributes in the component’s constructor():
// INCORRECT - Throws an error
constructor() {
  super();
  this.setAttribute('role', 'tab');
}

Fix: Move attribute setting to connectedCallback():
// CORRECT
connectedCallback() {
  super.connectedCallback();
  this.setAttribute('role', 'tab');
}

4. Verify Property vs. Attribute Binding
Web components may use properties (set via .property=${value}) or attributes (set via attribute=${value}). Check the component’s @property decorators to confirm which properties reflect to attributes. For example:

Use .variant=${variant} for properties (Lit binds to the JavaScript property).
Use variant=${variant} for attributes (Lit sets the DOM attribute).

If a property does not reflect to an attribute, use property binding. If unsure, check the component’s source for reflect: true.
5. Event Handling Issues
If events (e.g., toggle, tab-change) are not firing in the Storybook Actions panel:

Ensure the event name is correct in parameters.actions.handles or the @event binding.
Verify the component dispatches the event using CustomEvent in the source code.
Example for AgButton:parameters: {
  actions: {
    handles: ['toggle', 'focus', 'blur'],
  },
},



6. Slot Content Issues
If slots are not rendering correctly:

Confirm the slot name (e.g., slot="tab" for Tabs) matches the component’s render method.
Ensure required slots are provided (e.g., both tab and panel slots for Tabs).
Example for Tabs:<ag-tab slot="tab" panel="panel-1">Tab 1</ag-tab>
<ag-tab-panel slot="panel" panel="panel-1">Content</ag-tab-panel>




Example
Below is an example Storybook story for the Tabs component, illustrating the patterns for attributes, properties, events, slots, and accessibility. Use this as a reference, not a strict template, and adapt to the specific component’s props, events, and slots.
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { useArgs } from 'storybook/preview-api';
import 'agnosticui-core/tabs';
import type { Tabs } from 'agnosticui-core/tabs';

const meta: Meta<Tabs> = {
  title: 'Components/Tabs',
  component: 'ag-tabs',
  tags: ['autodocs'],
  argTypes: {
    activation: {
      control: 'select',
      options: ['manual', 'automatic'],
      description: 'Determines how tabs are activated.',
    },
    activeTab: {
      control: 'number',
      description: 'The index of the currently active tab.',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the tabs.',
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label for the tabs container.',
    },
    ariaLabelledBy: {
      control: 'text',
      description: 'ID of the element that labels the tabs container.',
    },
  },
  args: {
    activation: 'manual',
    activeTab: 0,
    orientation: 'horizontal',
    ariaLabel: 'AgnosticUI Tabs',
  },
  parameters: {
    actions: {
      handles: ['tab-change'],
    },
  },
} satisfies Meta<Tabs>;

export default meta;
type Story = StoryObj<Tabs>;

export const Default: Story = {
  args: {
    ariaLabel: 'Default Tabs',
  },
  render: ({ ariaLabel }) => html`
    <ag-tabs aria-label=${ariaLabel}>
      <ag-tab slot="tab" panel="panel-1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel-2">Tab 2</ag-tab>
      <ag-tab slot="tab" panel="panel-3">Tab 3</ag-tab>
      <ag-tab-panel slot="panel" panel="panel-1">Content for Tab 1</ag-tab-panel>
      <ag-tab-panel slot="panel" panel="panel-2">Content for Tab 2</ag-tab-panel>
      <ag-tab-panel slot="panel" panel="panel-3">Content for Tab 3</ag-tab-panel>
    </ag-tabs>
  `,
};

This example demonstrates:

Importing the component and its type.
Setting up meta with argTypes and args.
Using satisfies for TypeScript.
Rendering with Lit’s html template literal.
Binding attributes (e.g., aria-label=${ariaLabel}).
Including required slots (tab, panel).

