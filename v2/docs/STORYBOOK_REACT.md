# Storybook Story Generation Guide for AgnosticUI v2/lib React Components
This guide outlines the process for generating Storybook stories for React-wrapped web components in the v2/lib directory of the AgnosticUI library, using React for rendering in a Storybook environment. It is based on the approach used for components like Button (ReactButton). The process is broken down into phases to ensure clarity, iterative development, and user verification at key steps. The goal is to create comprehensive Storybook stories that showcase the component’s props, events, slots (via children), and accessibility features while adhering to established patterns.
Note: AgnosticUI core components may use a prefix (Ag, e.g., AgButton) or no prefix (e.g., Tabs, Tab). The React wrappers use a React prefix (e.g., ReactButton, ReactTabs). Always verify the component’s custom element name (e.g., ag-button, ag-tabs) and React wrapper name in the source code.

## Phase 0: Prompt User to Set Up "npm link"
⛔ STOP: Ask the user to run npm run relink in the relevant playground directory (e.g., v2/playgrounds/react) to ensure agnosticui-core is available for referencing from code. This step is critical to link the latest compiled web components and their React wrappers.
npm run relink

⛔ STOP: Confirm with the user that npm run relink has been executed before proceeding.

## Phase 1: Component Analysis and Planning
Objective
Analyze the target React component in v2/lib/src/components/[Component]/react/[Component].tsx to understand its props, events, and usage patterns. Create a task list plan specifying which props, variants, events, and accessibility features will be covered in the Storybook stories.
Steps

Read Component File:

Locate the React component in v2/lib/src/components/[Component]/react/[Component].tsx.
Read the entire file, focusing on:
Props Interface: Identify the props defined in the exported interface (e.g., ReactButtonProps).
Events: Note any event handlers passed as props (e.g., onClick, onToggle for ReactButton).
Children: Check for support of React children, which typically map to the default slot of the underlying web component.
Web Component Integration: Confirm the use of the underlying web component (e.g., <ag-button> for ReactButton) and any ref-based logic for setting properties or handling events.




Identify Key Features:

List all props (e.g., variant, size, disabled for ReactButton) and their types (string, boolean, function, etc.).
List all event handlers (e.g., onClick, onToggle for ReactButton) and their payloads.
Identify variants (e.g., variant values like primary, secondary; size values like sm, lg).
Note support for children (e.g., text or JSX elements passed to ReactButton).
Document accessibility features (e.g., ariaLabel, ariaDescribedby).


Create Task List Plan:

Outline the stories to be created, including:

Default Story: Basic usage with minimal props.
Variant Stories: One story per major variant (e.g., variant values like primary, secondary; size values like x-sm, xl).
State Stories: Stories for state-based props (e.g., disabled, loading, pressed for ReactButton).
Event Testing Story: A story to test event handlers with visual feedback and Storybook actions.
Accessibility Story: A story demonstrating ARIA attributes or accessibility features.
Children Story: A story showcasing custom JSX children (if applicable).


Specify props, events, and children to cover in each story.

Note any special considerations (e.g., preventing default form submission, handling event payloads).

Example for ReactButton component:
### Task List Plan for Button Stories

| Story Name          | Props Covered                          | Events Tested         | Children Used         | Accessibility Features         | Notes                              |
|--------------------|---------------------------------------|-----------------------|-----------------------|-------------------------------|------------------------------------|
| Default            | `variant`, `size`                     | `onClick`             | Text                  | `ariaLabel`                   | Basic button with controls         |
| Primary            | `variant: primary`                    | None                  | Text                  | `ariaLabel`                   | Primary variant                    |
| Secondary          | `variant: secondary`                  | None                  | Text                  | `ariaLabel`                   | Secondary variant                  |
| ExtraSmall         | `size: x-sm`, `variant`               | None                  | Text                  | `ariaLabel`                   | Extra small size                   |
| Disabled           | `disabled: true`, `variant`           | None                  | Text                  | `aria-disabled`               | Disabled state                     |
| Loading            | `loading: true`, `variant`           | None                  | Text                  | `aria-busy`                   | Loading state                      |
| ToggleOn           | `toggle: true`, `pressed: true`       | `onToggle`            | Text                  | `aria-pressed`                | Toggle button pressed              |
| EventTesting       | `variant`, `toggle`, `pressed`        | `onClick`, `onToggle` | Text                  | `ariaLabel`                   | Visual feedback for events         |
| Accessible         | `ariaLabel`, `ariaDescribedby`        | None                  | Text                  | `aria-describedby`            | ARIA attributes                    |
| FormSubmit         | `type: submit`, `variant`             | `onClick`             | Text                  | `ariaLabel`                   | Form submit behavior               |
| Children           | `variant`                             | None                  | JSX (e.g., `<span>`)  | `ariaLabel`                   | Custom JSX children                |




Output Plan:

Present the task list in a markdown table or list, detailing:
Story name
Props covered
Events tested (if applicable)
Children used
Accessibility features


Example output:Please review the task list plan above for the ReactButton component stories. Confirm that the planned stories, props, events, children, and accessibility features meet your requirements, or specify any changes needed. Once approved, I will proceed to Phase 2 to implement the minimal Default story.

**⛔ STOP - Waiting for your approval.**





⛔ STOP: Do not proceed to Phase 2 until the user approves the plan.

## Phase 2: Minimal Default Story Implementation
Objective
Implement a minimal Storybook story file ([Component].stories.tsx) with a single Default story to ensure the React component renders without errors in Storybook’s React environment. This allows the user to verify basic functionality before expanding to additional stories.
Steps

Create Story File:

Create playgrounds/react/src/stories/[Component].stories.tsx.
Follow the pattern from existing examples (e.g., Button.stories.tsx).


Set Up Meta Configuration:

Import Meta and StoryObj from @storybook/react.
Import the React component and its props interface (e.g., import { ReactButton, ReactButtonProps } from 'agnosticui-core/button/react').
Define the meta object with:
title: 'Components/[Component]' (e.g., 'Components/Button').
component: The imported React[Component] (e.g., ReactButton).
tags: ['autodocs'] for automatic documentation.
argTypes: Define controls for all props from the React[Component]Props interface (e.g., select for variant, boolean for disabled, text for ariaLabel, function for onClick).
args: Set default values matching the component’s defaults (e.g., variant: 'primary', size: 'md' for ReactButton).
parameters: Include actions.handles for events (e.g., ['click', 'toggle'] for ReactButton) and configure docs.source for proper source code display.


Use satisfies Meta<React[Component]Props> for TypeScript compatibility.


Implement Default Story:

Create a Default story that:
Uses minimal props (e.g., variant, size for ReactButton).
Includes children (e.g., text or JSX) to demonstrate the default slot.
Spreads props using {...args} for Storybook controls.
Includes event handlers for debugging (e.g., onClick={() => console.log('Click')}).
Example for ReactButton:export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    type: 'button',
    onClick: () => console.log('Click'),
  },
  render: (args) => {
    console.log('Default story args:', args); // Debug prop changes
    return <ReactButton {...args}>Controlled Button</ReactButton>;
  },
};






Test in Storybook:

Ask the user to run Storybook (npm run storybook in v2/playgrounds/react) and verify that the Default story renders without errors.
Example prompt:I have implemented the `Default` story for the React[Component] component in `playgrounds/react/src/stories/[Component].stories.tsx`. Please run `npm run storybook` in `v2/playgrounds/react` and confirm that the story renders correctly. If there are any issues, please share the error details for debugging.

**⛔ STOP - Waiting for your confirmation.**





⛔ STOP: Do not proceed to Phase 3 until the user confirms the Default story works and specifies how to proceed.

Request User Guidance for Remaining Stories:

After the user confirms the Default story, ask how they’d like to proceed:
Implement all remaining stories in one shot.
Tackle specific props/variants first (e.g., boolean props, specific variants).
Focus on specific stories (e.g., EventTesting, Accessible).
Other preferences.


Example prompt:The `Default` story for React[Component] has been implemented. Please confirm it renders correctly in Storybook. Then, let me know how you'd like to proceed:

- Implement all remaining stories from the Phase 1 plan.
- Focus on specific props/variants (e.g., `variant`, `disabled`).
- Prioritize specific stories (e.g., `EventTesting`, `Accessible`).
- Other preferences?

**⛔ STOP - Waiting for your instructions.**





⛔ STOP: Do not proceed to Phase 3 until the user confirms the Default story works and provides instructions.

## Phase 3: Implement Remaining Stories
Objective
Implement the remaining Storybook stories based on the user’s feedback from Phase 2, covering all planned props, variants, events, children, and accessibility features.
Steps

Implement Variant Stories:

Create stories for each variant (e.g., Primary, Secondary, Success for ReactButton).
Use minimal props to highlight the variant (e.g., variant="primary").
Example for ReactButton:export const Primary: Story = {
  args: { variant: 'primary' },
  render: ({ variant }) => <ReactButton variant={variant}>Primary Button</ReactButton>,
};




Implement State Stories:

Create stories for state-based props (e.g., disabled, loading, pressed for ReactButton).
Example for ReactButton:export const Disabled: Story = {
  args: { variant: 'primary', disabled: true },
  render: ({ variant, disabled }) => <ReactButton variant={variant} disabled={disabled}>Disabled Button</ReactButton>,
};




Implement Event Testing Story:

Create an EventTesting story to test event handlers with visual feedback (e.g., updating state) and Storybook actions.
Use React state (e.g., useState) to demonstrate dynamic updates.
Example for ReactButton:export const EventTesting: Story = {
  args: {
    variant: 'primary',
    toggle: true,
    onToggle: (detail) => console.log('Toggle:', detail),
  },
  render: ({ variant, toggle, onToggle }) => {
    const [pressed, setPressed] = useState(false);
    return (
      <div>
        <p>Pressed: {pressed.toString()}</p>
        <ReactButton
          variant={variant}
          toggle={toggle}
          pressed={pressed}
          onToggle={(detail) => {
            setPressed(detail.pressed);
            onToggle(detail);
          }}
        >
          Toggle Button
        </ReactButton>
      </div>
    );
  },
};




Implement Children Story:

Create a story to demonstrate custom JSX children (if supported).
Example for ReactButton:export const Children: Story = {
  args: { variant: 'primary' },
  render: ({ variant }) => (
    <ReactButton variant={variant}>
      <span>Custom <strong>Content</strong></span>
    </ReactButton>
  ),
};




Implement Accessibility Story:

Create an Accessible story to showcase ARIA attributes (e.g., ariaLabel, ariaDescribedby).
Example for ReactButton:export const Accessible: Story = {
  args: {
    variant: 'primary',
    ariaLabel: 'Custom button label',
    ariaDescribedby: 'description-id',
  },
  render: ({ variant, ariaLabel, ariaDescribedby }) => (
    <div>
      <p id="description-id">This button performs an action</p>
      <ReactButton variant={variant} ariaLabel={ariaLabel} ariaDescribedby={ariaDescribedby}>
        Accessible Button
      </ReactButton>
    </div>
  ),
};




Test and Validate:

Ask the user to run Storybook and verify that all stories render correctly and that events are logged in the Actions panel.
Example prompt:All planned stories for React[Component] have been implemented in `playgrounds/react/src/stories/[Component].stories.tsx`. Please run `npm run storybook` in `v2/playgrounds/react` and confirm that the stories render correctly, events are logged in the Actions panel, and accessibility features work as expected. If there are any issues, please share the error details or desired changes.

**⛔ STOP - Waiting for your confirmation.**






Troubleshooting
If you encounter errors when rendering a React component in Storybook, follow these steps to debug the issue.
1. Check Your Build Process
The most common source of errors is an outdated build. After making any changes to component source code in the v2/lib directory, you must:

Run npm run build in the v2/lib directory.
Run npm run relink in the relevant playground directory (e.g., v2/playgrounds/react).

```shell
cd v2/lib
npm run build
cd ../playgrounds/react
npm run relink
```

2. Isolate the Web Component
If the error persists, test the underlying web component directly to isolate whether the issue is in the React wrapper or the core web component:
// In [Component].stories.tsx
import { useEffect } from 'react';

export const RawWebComponentTest: Story = {
  render: () => {
    useEffect(() => {
      // Ensure web component is defined
      import('agnosticui-core/[component]');
    }, []);
    return <ag-[component-lowercase]>Test Content</ag-[component-lowercase]>;
  },
};


Replace [component-lowercase] with the component’s tag name (e.g., ag-button, ag-tabs).
If this story works, the issue is likely in the React wrapper.
If this story fails, the issue is in the core web component (e.g., _Button.ts).

3. Check for Web Component Lifecycle Errors
A common error is Uncaught NotSupportedError: Failed to execute 'createElement' on 'Document': The result must not have attributes. This occurs when setting attributes in the component’s constructor():
// INCORRECT - Throws an error
constructor() {
  super();
  this.setAttribute('role', 'button');
}

Fix: Move attribute setting to connectedCallback():
// CORRECT
connectedCallback() {
  super.connectedCallback();
  this.setAttribute('role', 'button');
}

4. Verify Prop Mapping
React components wrap web components, mapping React props to web component properties or attributes. Check the React wrapper ([Component].tsx) to ensure props are correctly passed:

Properties: Use ref to set JavaScript properties (e.g., elementRef.current.variant = props.variant).
Attributes: Use setAttribute for attributes that don’t map to properties.
Events: Ensure event handlers (e.g., onClick, onToggle) are correctly bound to custom events (e.g., elementRef.current.addEventListener('toggle', ...)).

If props or events are not working, verify the wrapper’s implementation.
5. Event Handling Issues
If events (e.g., onClick, onToggle) are not firing in the Storybook Actions panel:

Ensure the event name is correct in parameters.actions.handles or the on[Event] prop.
Verify the React wrapper dispatches the event correctly (e.g., onToggle maps to the toggle custom event).
Example for ReactButton:parameters: {
  actions: {
    handles: ['click', 'toggle'],
  },
},



6. Children/Slot Issues
If children are not rendering correctly:

Confirm the React wrapper passes children to the default slot of the web component.
Check the web component’s render method for a <slot> element.
Example for ReactButton:<ReactButton variant="primary">
  <span>Custom Content</span>
</ReactButton>



7. Storybook Source Code Display
If the Storybook source code displays incorrectly (e.g., showing <F> instead of <ReactButton>), ensure the docs.source.transform function is configured:
parameters: {
  docs: {
    source: {
      state: 'open',
      transform: (src: string) => {
        return src.replace(/<F\s/g, '<ReactButton ').replace(/<\/F>/g, '</ReactButton>');
      },
    },
  },
},


Example
Below is an example Storybook story for the ReactButton component, illustrating the patterns for props, events, children, and accessibility. Use this as a reference, not a strict template, and adapt to the specific component’s props, events, and children.
import type { Meta, StoryObj } from '@storybook/react';
import { ReactButton, ReactButtonProps } from 'agnosticui-core/button/react';

const meta: Meta<ReactButtonProps> = {
  title: 'Components/Button',
  component: ReactButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['', 'primary', 'secondary', 'success', 'warning', 'danger'],
      description: 'Visual style of the button',
    },
    size: {
      control: 'select',
      options: ['x-sm', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the button',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Button type for form behavior',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
    onClick: {
      action: 'click',
      description: 'Emitted when the button is clicked',
    },
    onToggle: {
      action: 'toggle',
      description: 'Emitted when the toggle state changes',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    type: 'button',
    disabled: false,
    onClick: () => console.log('Click'),
    onToggle: (detail) => console.log('Toggle:', detail),
  },
  parameters: {
    actions: {
      handles: ['click', 'toggle'],
    },
    docs: {
      source: {
        state: 'open',
        transform: (src: string) => {
          return src.replace(/<F\s/g, '<ReactButton ').replace(/<\/F>/g, '</ReactButton>');
        },
      },
    },
  },
} satisfies Meta<ReactButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    type: 'button',
  },
  render: (args) => <ReactButton {...args}>Controlled Button</ReactButton>,
};

This example demonstrates:

Importing the React component and its props interface.
Setting up meta with argTypes, args, and parameters.
Using satisfies for TypeScript.
Rendering with JSX and spreading props ({...args}).
Configuring event actions and source code display.

