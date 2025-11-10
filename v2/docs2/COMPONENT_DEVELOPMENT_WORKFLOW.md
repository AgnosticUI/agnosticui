# Component Development Workflow

This document provides the complete, end-to-end workflow for creating a new component in AgnosticUI v2. It follows a hybrid model that uses an automated script for scaffolding and an LLM agent for implementation.

## Event Conventions

AgnosticUI v2 uses a **standardized dual-dispatch event propagation pattern** for component-specific events, while leveraging native composed events wherever possible. This section documents the conventions established in components like Button and Collapsible, which should be followed when implementing or refactoring any component with events.

### Shadow DOM Event Propagation Fundamentals

Understanding how events propagate across Shadow DOM boundaries is critical to implementing the correct event pattern:

#### Composed Events (Already Available to Consumers)

Most native UI events are **composed** by the browser, meaning they automatically bubble across Shadow DOM boundaries. **Don't reinvent the wheel** - if a native event already does what you need and propagates naturally, let it work as-is.

**Composed Events Include**:
- `click`, `dblclick`
- `mousedown`, `mouseup`, `mousemove`, `mouseover`, `mouseout`
- `keydown`, `keyup`, `keypress`
- `input`, `change`
- `submit`
- `touchstart`, `touchmove`, `touchend`

**Consumer Usage Examples**:
```typescript
// Native composed events work automatically - no special handling needed
const button = document.querySelector('ag-button');

// Method 1: Standard addEventListener (works because click is composed)
button.addEventListener('click', (e) => console.log('Clicked!'));

// Method 2: Callback prop (convenient alternative, especially in frameworks)
// <ag-button .onClick=${(e) => console.log('Clicked!')}></ag-button>
```

**Why These Work**: When you dispatch a `click` event inside the Shadow DOM (e.g., on an internal `<button>` element), the browser marks it as `composed: true` automatically. This allows the event to cross the Shadow boundary and be heard by listeners on the `<ag-button>` custom element itself.

#### Non-Composed/Non-Bubbling Events (Must Be Manually Exposed)

Some events **do not bubble** or are **not composed**, meaning they stay isolated on the element that triggered them. If consumers need access to these events, you must manually re-dispatch them from the host element.

**Non-Bubbling Events Include**:
- `focus`, `blur` (isolated, don't bubble even in light DOM)
- `load`, `error`
- `scroll`
- Custom component-specific events (e.g., `toggle`, `collapse`, `expand`)

**Example: Manually Exposing `focus` and `blur`**:
```typescript
export class AgButton extends LitElement {
  @property({ attribute: false })
  declare onFocus?: (event: FocusEvent) => void;

  @property({ attribute: false })
  declare onBlur?: (event: FocusEvent) => void;

  private _handleFocus(event: FocusEvent) {
    // Re-dispatch from host so consumers can listen on <ag-button>
    this.dispatchEvent(new FocusEvent('focus', {
      bubbles: true,
      composed: true,
      // Optionally preserve other event properties
    }));

    // Invoke callback if provided
    if (this.onFocus) {
      this.onFocus(event);
    }
  }

  render() {
    return html`
      <button @focus=${this._handleFocus} @blur=${this._handleBlur}>
        <slot></slot>
      </button>
    `;
  }
}
```

**Key Rule**: Only manually expose events that don't naturally propagate OR are component-specific state changes (like `toggle`). For everything else, let native browser behavior handle it.

### Core Event Patterns

AgnosticUI v2 uses two primary event patterns:

1. **Native Event Pattern**: Leverage composed events with optional callback props for convenience
2. **Custom Event Pattern**: Dual-dispatch pattern for component-specific state changes

#### Pattern 1: Native Events with Optional Callbacks

For events that already compose naturally (like `click`), we provide optional callback props as a convenience, especially for framework users:

```typescript
// Props interface
export interface ButtonProps {
  onClick?: (event: MouseEvent) => void;
  // Note: We still provide the callback even though click composes naturally
  // This is a convenience for framework users who prefer props over addEventListener
}

// Implementation
export class AgButton extends LitElement {
  @property({ attribute: false })
  declare onClick?: (event: MouseEvent) => void;

  private _handleClick(event: MouseEvent) {
    // Native click already composes - we just invoke callback if provided
    if (this.onClick) {
      this.onClick(event);
    }
  }

  render() {
    return html`
      <button @click=${this._handleClick}>
        <slot></slot>
      </button>
    `;
  }
}
```

**Consumer Usage**:
```typescript
// Method 1: Standard addEventListener (works because click is composed)
buttonElement.addEventListener('click', (e) => console.log('Clicked!'));

// Method 2: Callback prop (convenient, especially in Lit/frameworks)
html`<ag-button .onClick=${(e) => console.log('Clicked!')}></ag-button>`

// Method 3: Framework wrappers (React)
<ReactButton onClick={(e) => console.log('Clicked!')} />
```

#### Pattern 2: Custom Events with Dual-Dispatch

For component-specific behavior (state changes, interactions unique to the component), dispatch a CustomEvent AND invoke a callback prop:

```typescript
// 1. Define event types
export interface ButtonToggleEventDetail {
  pressed: boolean;
}
export type ButtonToggleEvent = CustomEvent<ButtonToggleEventDetail>;

// 2. Add callback prop to Props interface
export interface ButtonProps {
  toggle?: boolean;
  pressed?: boolean;
  onToggle?: (event: ButtonToggleEvent) => void;
}

// 3. Implement dual-dispatch pattern
export class AgButton extends LitElement {
  @property({ attribute: false })
  declare onToggle?: (event: ButtonToggleEvent) => void;

  private _handleClick(event: MouseEvent) {
    if (this.onClick) {
      this.onClick(event);
    }

    if (this.toggle && !this.disabled && !event.defaultPrevented) {
      this.pressed = !this.pressed;

      // Dispatch custom event with composed: true and bubbles: true
      const toggleEvent = new CustomEvent<ButtonToggleEventDetail>('toggle', {
        detail: { pressed: this.pressed },
        bubbles: true,
        composed: true,
      });

      // Dispatch DOM event first
      this.dispatchEvent(toggleEvent);

      // Then invoke callback if provided
      if (this.onToggle) {
        this.onToggle(toggleEvent);
      }
    }
  }
}
```

**Consumer Usage**:
```typescript
// Method 1: Standard addEventListener
buttonElement.addEventListener('toggle', (e) => {
  console.log('Toggled to', e.detail.pressed);
});

// Method 2: Callback prop
html`<ag-button toggle .onToggle=${(e) => console.log('Toggled to', e.detail.pressed)}></ag-button>`

// Method 3: Framework wrappers (React)
<ReactButton toggle onToggle={(e) => console.log('Toggled to', e.detail.pressed)} />
```

### Lit Core Implementation Pattern

The canonical Lit implementation establishes the event contract for all frameworks:

```typescript
// Event types at the top of the file
export interface ToggleEventDetail {
  pressed: boolean;
}
export type ToggleEvent = CustomEvent<ToggleEventDetail>;

// Props interface
export interface MyComponentProps {
  // Native event callbacks (optional convenience)
  onClick?: (event: MouseEvent) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;

  // Custom event callbacks (for component-specific behavior)
  onToggle?: (event: ToggleEvent) => void;
}

// Component implementation
export class MyComponent extends LitElement implements MyComponentProps {
  // Declare callbacks as properties (NOT reflected as attributes)
  @property({ attribute: false })
  declare onClick?: (event: MouseEvent) => void;

  @property({ attribute: false })
  declare onFocus?: (event: FocusEvent) => void;

  @property({ attribute: false })
  declare onBlur?: (event: FocusEvent) => void;

  @property({ attribute: false })
  declare onToggle?: (event: ToggleEvent) => void;

  // Native composed event handler (click already bubbles naturally)
  private _handleClick(event: MouseEvent) {
    if (this.onClick) {
      this.onClick(event);
    }
    // ... handle toggle logic if needed
  }

  // Non-bubbling event handler (focus doesn't bubble, must re-dispatch)
  private _handleFocus(event: FocusEvent) {
    // Re-dispatch from host for consumer access
    this.dispatchEvent(new FocusEvent('focus', {
      bubbles: true,
      composed: true,
    }));

    if (this.onFocus) {
      this.onFocus(event);
    }
  }

  // Custom event handler (component-specific state change)
  private _handleToggle() {
    const toggleEvent = new CustomEvent<ToggleEventDetail>('toggle', {
      detail: { pressed: this.pressed },
      bubbles: true,
      composed: true,
    });

    // Dispatch DOM event first
    this.dispatchEvent(toggleEvent);

    // Then invoke callback if provided
    if (this.onToggle) {
      this.onToggle(toggleEvent);
    }
  }
}
```

**Key Implementation Details**:
- Use `@property({ attribute: false })` for callback props to prevent them from being reflected as HTML attributes
- Event names use lowercase (e.g., `'toggle'`, `'focus'`) as per DOM standards
- Always set `bubbles: true` and `composed: true` for CustomEvents to ensure cross-boundary propagation
- For non-bubbling native events (focus, blur), re-dispatch them from the host element
- For composed native events (click), you can optionally invoke callbacks but don't need to re-dispatch

### React Wrapper Pattern

React wrappers use `@lit/react`'s `createComponent` to map DOM events to React event props:

```typescript
import * as React from "react";
import { createComponent, type EventName } from "@lit/react";
import {
  AgButton,
  type ButtonProps,
  type ButtonToggleEvent,
} from "../core/Button";

export interface ReactButtonProps extends ButtonProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  // Explicitly include event handler types
  onClick?: (event: MouseEvent) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
  onToggle?: (event: ButtonToggleEvent) => void;
}

export const ReactButton = createComponent({
  tagName: "ag-button",
  elementClass: AgButton,
  react: React,
  events: {
    // Map custom events (native composed events like click work automatically)
    onToggle: "toggle" as EventName<ButtonToggleEvent>,
  },
});

// Re-export event types
export type { ButtonToggleEvent } from "../core/Button";
```

**Key Implementation Details**:
- Only map custom events in the `events` object - native composed events (click, input, etc.) work automatically through React's event system
- Use `as EventName<MyCustomEvent>` for proper TypeScript typing
- Re-export event types for consumer convenience

### Vue Wrapper Pattern

Vue wrappers bridge web component events to Vue's emit system:

```typescript
<template>
  <ag-button
    ref="buttonRef"
    :type="type"
    :toggle="toggle"
    :pressed="pressed"
    @click="handleClick"
    @focus="handleFocus"
    @blur="handleBlur"
    @toggle="handleToggle"
    v-bind="$attrs"
  >
    <slot />
  </ag-button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type {
  ButtonProps,
  ButtonToggleEvent,
  ButtonToggleEventDetail,
} from "../core/Button";
import "../core/Button";

// Omit callback props (Vue uses emits instead)
export interface VueButtonProps
  extends Omit<ButtonProps, "onClick" | "onFocus" | "onBlur" | "onToggle"> {}

const props = withDefaults(defineProps<VueButtonProps>(), {
  type: "button",
  toggle: false,
  pressed: false,
});

// Define emits for all events (native + custom)
const emit = defineEmits<{
  click: [event: MouseEvent];
  focus: [event: FocusEvent];
  blur: [event: FocusEvent];
  toggle: [detail: ButtonToggleEventDetail];
  "update:pressed": [pressed: boolean];  // v-model support
}>();

const buttonRef = ref<HTMLElement>();

// Bridge handlers
const handleClick = (event: MouseEvent) => {
  emit("click", event);
};

const handleFocus = (event: FocusEvent) => {
  emit("focus", event);
};

const handleBlur = (event: FocusEvent) => {
  emit("blur", event);
};

const handleToggle = (event: Event) => {
  const toggleEvent = event as ButtonToggleEvent;
  emit("toggle", toggleEvent.detail);
  emit("update:pressed", toggleEvent.detail.pressed);
};
</script>
```

**Key Implementation Details**:
- Listen to all events with `@eventname` (lowercase, no "on" prefix)
- Omit callback props from VueProps interface (use emits instead)
- For custom events, emit the `detail` payload (not the entire CustomEvent) for cleaner Vue consumer code
- For native events, emit the full event object
- Add `update:propName` emits for v-model support on state props

### Event Naming Conventions

- **DOM Event Names**: Use lowercase, no prefixes (e.g., `'toggle'`, `'change'`, `'select'`)
- **Callback Props**: Use camelCase with "on" prefix (e.g., `onToggle`, `onChange`, `onSelect`)
- **Event Type Names**: Use PascalCase with "Event" suffix (e.g., `ToggleEvent`, `ChangeEvent`)
- **Event Detail Interfaces**: Use PascalCase with "EventDetail" suffix (e.g., `ToggleEventDetail`)

### Common Custom Event Patterns

#### Toggle Events (Button, Collapsible)

**Use Case**: Components with binary state (pressed/unpressed, open/closed)

```typescript
// Event definition
export interface ToggleEventDetail {
  pressed: boolean;  // or 'open: boolean' for Collapsible
}
export type ToggleEvent = CustomEvent<ToggleEventDetail>;

// Dispatch implementation
const toggleEvent = new CustomEvent<ToggleEventDetail>('toggle', {
  detail: { pressed: this.pressed },
  bubbles: true,
  composed: true,
});
this.dispatchEvent(toggleEvent);
if (this.onToggle) {
  this.onToggle(toggleEvent);
}
```

**Vue Integration with v-model support**:
```typescript
const emit = defineEmits<{
  toggle: [detail: ToggleEventDetail];
  "update:pressed": [pressed: boolean];
}>();

const handleToggle = (event: Event) => {
  const toggleEvent = event as ToggleEvent;
  emit("toggle", toggleEvent.detail);
  emit("update:pressed", toggleEvent.detail.pressed);
};
```

### Refactoring Legacy Components

When refactoring components with legacy event patterns, follow these steps:

1. **Audit Events**: Identify all events the component dispatches
   - Categorize as: Native Composed (already works) vs. Non-Bubbling (needs re-dispatch) vs. Custom (needs dual-dispatch)
2. **Add Event Types**: Create TypeScript interfaces for custom event detail payloads
3. **Update Props Interface**: Add optional callback props with proper typing
4. **Add Property Declarations**: Use `@property({ attribute: false })` for all callback props
5. **Implement Correct Pattern**:
   - Native composed events: Just invoke callback if provided
   - Non-bubbling events: Re-dispatch from host + invoke callback
   - Custom events: Dual-dispatch (dispatchEvent + callback)
6. **Update React Wrapper**: Map only custom events in `events` object
7. **Update Vue Wrapper**:
   - Remove callback props from VueProps interface
   - Add all events to emit signatures
   - Create bridge handlers
   - Add v-model support where appropriate
8. **Update Tests**: Verify both addEventListener and callback props work
9. **Update Storybook**: Add interactive event handling examples for all frameworks
10. **Update Documentation**: Document events in API tables with usage examples

### Testing Events

Test both dispatch mechanisms for custom events:

```typescript
it('dispatches toggle event (addEventListener pattern)', async () => {
  const el = await fixture<AgButton>(html`<ag-button toggle></ag-button>`);
  const toggleSpy = vi.fn();
  el.addEventListener('toggle', toggleSpy);

  el.click();
  await el.updateComplete;

  expect(toggleSpy).toHaveBeenCalledOnce();
  expect(toggleSpy.mock.calls[0][0].detail).toEqual({ pressed: true });
});

it('invokes onToggle callback (prop pattern)', async () => {
  const onToggleSpy = vi.fn();
  const el = await fixture<AgButton>(
    html`<ag-button toggle .onToggle=${onToggleSpy}></ag-button>`
  );

  el.click();
  await el.updateComplete;

  expect(onToggleSpy).toHaveBeenCalledOnce();
  expect(onToggleSpy.mock.calls[0][0].detail).toEqual({ pressed: true });
});

it('click event propagates naturally (composed event)', async () => {
  const el = await fixture<AgButton>(html`<ag-button></ag-button>`);
  const clickSpy = vi.fn();
  el.addEventListener('click', clickSpy);

  el.click();
  await el.updateComplete;

  expect(clickSpy).toHaveBeenCalledOnce();
});
```

## Phase 1: Scaffolding (Automated Script)

The first step is to use the unified scaffolding script to create all the necessary boilerplate files for the new component. This eliminates manual setup and ensures consistency.

1.  **Run the Scaffolding Script**:
    From the `v2/lib` directory, run the following command, replacing `MyComponent` with the PascalCase name of your component:

    ```shell
    npm run scaffold -- MyComponent
    ```

2.  **Review the Output**:
    The script will create a comprehensive set of files across the project, including:
    -   Core component files in `v2/lib/src/components/MyComponent/`.
    -   A `specifications` directory with a `README.md` to guide the next step, and also a `specifications/v1/` directory which will also be used in the next human-in-the-loop step where it will be populated with reference implementations from the v1 AgnosticUI. This directory typically will get populated by human-in-the-loop with:
        -   `.hbs` (Handlebars) template files showing the component's markup structure and variants
        -   `.css` files demonstrating styling patterns, variants (e.g., `.card-success`, `.card-error`), modifiers (e.g., `.card-animated`), and design token usage. **IMPORTANT** Use the .css for inspiration and to understand what variants, colors, shapes, etc., are required. However, you will need to translate any --agnostic- custom properties to the --ag- ones offered in ag-tokens.css.
        -   **Purpose**: These v1 files serve as inspiration for props, styling variants, and behavioral features. The LLM agent should analyze these files to identify features that should be ported into the v2 implementation to ensure feature parity if appropriate.
    -   React and Vue wrapper skeletons.
    -   Boilerplate Storybook stories for Lit, React, and Vue.
    -   Boilerplate documentation pages for the Vitepress site (`.md` and `.vue` examples).
    -   It will also automatically update `package.json` exports and the Vitepress sidebar navigation.

## Phase 2: Specification (Human-in-the-Loop)
**STOP / PAUSE FOR USER INPUT**: I need human to: [add a11y specifications and specifications/v1 v1 AgnosticUI references for v1 parity of html/css (optional)]

This phase is crucial for ensuring the component is built to be accessible from the start.

1.  **Gather Accessibility Documentation**:
    -   Find the relevant WAI-ARIA Authoring Practices Guide (APG) pattern, BBC GEL guide, or other accessibility source materials for your component.
    -   Save these files into the newly created `v2/lib/src/components/MyComponent/specifications/` directory.

## Phase 3: Synthesis & Implementation (LLM Agent)

Now, the LLM agent takes over to perform the context-aware implementation work.

### Step 1: Specification Synthesis

1.  **Instruct the Agent**:
    -   Ask the agent to read the source materials in the `specifications` directory.
    -   If a `specifications/v1` directory exists, instruct the agent to analyze it for feature inspiration.

2.  **Agent Creates SpecSheet**:
    -   The agent will first synthesize the source materials into a `SpecSheet.md` file, creating a clear blueprint for implementation and testing.
    -   **V1 Analysis** (if applicable): The agent should:
        -   Review v1 `.css` files to identify styling variants (e.g., color variants, modifiers like `animated`, `rounded`)
        -   Review v1 `.hbs` templates to understand markup patterns and prop usage
        -   Document any v1 features that should be ported to v2 for feature parity
        -   Update the `SpecSheet.md` to include these v1-inspired features

## Slot Detection Patterns

When implementing components with slots that have fallback content, follow these critical patterns to ensure proper slot detection across all frameworks (especially Vue).

### The Slot Detection Problem

Components often need to detect whether a slot has content to conditionally render fallback content. However, slot detection behaves differently across frameworks:

- **React/Lit**: Reliably trigger `slotchange` events when slot content changes
- **Vue**: Does NOT reliably trigger `slotchange` events due to how Vue projects slots into web components

### Required Pattern for Slot Detection

Follow this exact pattern (as demonstrated in Divider, Input, and EmptyState components):

#### 1. Use Reactive State Properties (NOT Slot References)

```typescript
// ❌ WRONG: Storing slot references (null on initial render)
private _iconSlot: HTMLSlotElement | null = null;
private _actionsSlot: HTMLSlotElement | null = null;

// ✅ CORRECT: Store boolean state using reactive properties
@property({ type: Boolean, state: true })
private _hasIconSlot = false;

@property({ type: Boolean, state: true })
private _hasActionsSlot = false;
```

**Why**: Slot references are `null` during initial render, causing `hasSlotContent()` checks to fail.

#### 2. Implement Event-Driven Slot Change Handler

```typescript
private _handleSlotChange(e: Event) {
  const slot = e.target as HTMLSlotElement;
  const slotName = slot.name;

  if (slotName === 'icon') {
    this._hasIconSlot = hasSlotContent(slot);
  } else if (slotName === 'actions') {
    this._hasActionsSlot = hasSlotContent(slot);
  }

  this.requestUpdate();
}
```

**Key Points**:
- Get slot element from `e.target` (NOT from stored references)
- Call `hasSlotContent()` on the event target
- Store result in reactive state property
- Call `requestUpdate()` to trigger re-render

#### 3. Initial Detection in firstUpdated with setTimeout

```typescript
override firstUpdated() {
  // Initial check for slot content
  // We need to defer this check to avoid "change in update" warning
  setTimeout(() => {
    const iconSlot = this.shadowRoot?.querySelector('slot[name="icon"]') as HTMLSlotElement;
    const actionsSlot = this.shadowRoot?.querySelector('slot[name="actions"]') as HTMLSlotElement;

    const hadIconSlot = this._hasIconSlot;
    const hadActionsSlot = this._hasActionsSlot;

    this._hasIconSlot = hasSlotContent(iconSlot);
    this._hasActionsSlot = hasSlotContent(actionsSlot);

    // Only request update if something changed
    if (hadIconSlot !== this._hasIconSlot || hadActionsSlot !== this._hasActionsSlot) {
      this.requestUpdate();
    }
  }, 0);
}
```

**Key Points**:
- Use `setTimeout` to defer check (avoids Lit update cycle warnings)
- Store previous values to detect changes
- Only call `requestUpdate()` if state actually changed

#### 4. Attach Event Handlers in Render

```typescript
render() {
  return html`
    <slot name="icon" @slotchange=${this._handleSlotChange}></slot>
    ${!this._hasIconSlot ? html`
      <!-- Fallback content -->
    ` : ''}

    <slot name="actions" @slotchange=${this._handleSlotChange}>
      ${this.buttonText && !this._hasActionsSlot
        ? html`<button>${this.buttonText}</button>`
        : ''}
    </slot>
  `;
}
```

**Key Points**:
- Attach `@slotchange` handler directly on `<slot>` elements
- Use reactive state properties (e.g., `this._hasActionsSlot`) in conditionals
- NEVER call `hasSlotContent()` directly in render method

### Vue-Specific: Manual Event Dispatch

Vue wrappers must manually dispatch `slotchange` events after mounting:

```typescript
// In VueMyComponent.vue setup()
onMounted(async () => {
  await customElements.whenDefined('ag-mycomponent');
  await nextTick();

  // Manually trigger slot content detection for Vue
  // Vue's slot content might not trigger slotchange event reliably
  await nextTick();
  const webComponent = agComponent.value;
  if (webComponent) {
    const iconSlot = webComponent.shadowRoot?.querySelector('slot[name="icon"]');
    const actionsSlot = webComponent.shadowRoot?.querySelector('slot[name="actions"]');

    if (iconSlot) {
      iconSlot.dispatchEvent(new Event("slotchange"));
    }
    if (actionsSlot) {
      actionsSlot.dispatchEvent(new Event("slotchange"));
    }
  }
});
```

**Why**: Vue doesn't automatically trigger `slotchange` events when slots are projected, so we must manually dispatch them.

### hasSlotContent Utility

The `hasSlotContent` utility (in `v2/lib/src/utils/slot.ts`) checks if a slot has meaningful content:

```typescript
export function hasSlotContent(slot: HTMLSlotElement | null): boolean {
  if (!slot) {
    return false;
  }
  const assignedNodes = slot.assignedNodes({ flatten: true });

  // Helper to check if an element has meaningful content
  const hasElementContent = (element: Element): boolean => {
    // Check if element has any child elements
    if (element.children.length > 0) {
      return true;
    }
    // Check if element has non-whitespace text content
    if (element.textContent?.trim() !== '') {
      return true;
    }
    return false;
  };

  return assignedNodes.some((node) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as Element;
      // Check if this element actually has content
      return hasElementContent(element);
    }
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent?.trim() !== '';
    }
    return false;
  });
}
```

**Key Features**:
- Returns `false` for `null` slots
- Handles empty wrapper elements (important for Vue!)
- Checks both element children and text content
- Ignores whitespace-only text nodes

### Common Mistakes to Avoid

1. ❌ **Storing slot references instead of state**
   ```typescript
   private _iconSlot: HTMLSlotElement | null = null; // WRONG
   ```

2. ❌ **Calling hasSlotContent in render**
   ```typescript
   render() {
     const hasIcon = hasSlotContent(this._iconSlot); // WRONG - null on first render
   }
   ```

3. ❌ **Not handling Vue's lack of slotchange events**
   ```vue
   <!-- VueMyComponent.vue without manual dispatch - WRONG -->
   <script setup>
   onMounted(async () => {
     await customElements.whenDefined('ag-mycomponent');
     // Missing manual slotchange dispatch!
   });
   </script>
   ```

4. ❌ **Checking slot references without setTimeout**
   ```typescript
   firstUpdated() {
     this._hasIconSlot = hasSlotContent(this._iconSlot); // WRONG - timing issue
   }
   ```

### Testing Slot Detection

Always test slot detection in all three frameworks:

```typescript
// Lit test
it('shows fallback when slot is empty', async () => {
  const el = await fixture(html`<ag-empty-state buttonText="Click"></ag-empty-state>`);
  const button = el.shadowRoot?.querySelector('button');
  expect(button?.textContent).toBe('Click');
});

// Ensure Vue wrapper tests manually dispatch slotchange events
```

## Vue to Lit Attribute Naming Conventions

Vue uses kebab-case for HTML attributes, while Lit has specific rules for mapping property names to attributes. Understanding this mapping is critical for Vue integration.

### The Attribute Mapping Problem

When Vue passes props to web components using kebab-case attributes (e.g., `:button-text="value"`), Lit must be configured to recognize these attribute names. By default, Lit converts camelCase property names to **all lowercase** attributes (not kebab-case).

#### Default Lit Behavior

```typescript
// Lit component
@property({ type: String }) buttonText = '';  // Maps to 'buttontext' attribute

// Vue template
<ag-empty-state :button-text="value">  // Passes 'button-text' attribute
</ag-empty-state>

// RESULT: Mismatch! Vue's 'button-text' ≠ Lit's 'buttontext'
```

### Required Pattern: Explicit Attribute Names

For all camelCase properties that will be used from Vue, **explicitly specify the kebab-case attribute name**:

```typescript
// ✅ CORRECT: Explicit attribute mapping
@property({ type: String, attribute: 'button-text' }) buttonText = '';
@property({ type: String, attribute: 'error-message' }) errorMessage = '';
@property({ type: String, attribute: 'help-text' }) helpText = '';
@property({ type: String, attribute: 'label-hidden' }) labelHidden = false;
@property({ type: Boolean, attribute: 'no-label' }) noLabel = false;
@property({ type: Boolean, attribute: 'underlined-with-background' }) underlinedWithBackground = false;
```

### When to Use Explicit Attributes

| Property Name Pattern | Needs Explicit Attribute? | Example |
|----------------------|---------------------------|---------|
| Single word | ❌ No | `title`, `size`, `variant` |
| camelCase (2+ words) | ✅ Yes | `buttonText` → `attribute: 'button-text'` |
| Boolean props | Depends on name | `disabled` (no), `isRounded` (yes, use `is-rounded`) |

### Naming Convention Standards

Follow these conventions for consistency across the codebase:

#### 1. Simple Props (No Attribute Needed)

```typescript
@property({ type: String }) title = '';
@property({ type: String }) subtitle = '';
@property({ type: String }) size = 'md';
@property({ type: Boolean }) disabled = false;
@property({ type: Boolean }) readonly = false;
```

#### 2. Multi-Word Props (Attribute Required)

```typescript
// Text/String props
@property({ type: String, attribute: 'button-text' }) buttonText = '';
@property({ type: String, attribute: 'aria-label' }) ariaLabel = '';
@property({ type: String, attribute: 'labelled-by' }) labelledBy = '';

// Boolean props with multiple words
@property({ type: Boolean, attribute: 'is-rounded' }) isRounded = false;
@property({ type: Boolean, attribute: 'is-bordered' }) isBordered = false;
@property({ type: Boolean, attribute: 'no-label' }) noLabel = false;

// Compound boolean props
@property({ type: Boolean, attribute: 'underlined-with-background' })
underlinedWithBackground = false;
```

#### 3. Reflected Props (Both Ways)

For props that should be readable as attributes from JavaScript (useful for CSS selectors), add `reflect: true`:

```typescript
@property({ type: String, reflect: true })
size: 'sm' | 'md' | 'lg' = 'md';

@property({ type: String, reflect: true, attribute: 'aria-label' })
ariaLabel = '';
```

**Note**: Reflection is typically used for:
- Size/variant props used in CSS attribute selectors
- ARIA attributes that external scripts might read
- Props that define component state visually

### Vue Wrapper Pattern

Vue wrappers should use kebab-case attributes that match the Lit property declarations:

```vue
<template>
  <ag-empty-state
    ref="agComponent"
    :title="title"
    :subtitle="subtitle"
    :button-text="buttonText"        <!-- Matches attribute: 'button-text' -->
    :size="size"
    :bordered="bordered || undefined"
    :rounded="rounded || undefined"
    v-bind="$attrs"
  >
    <!-- slots -->
  </ag-empty-state>
</template>

<script lang="ts">
export default defineComponent({
  name: 'VueEmptyState',
  props: {
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    buttonText: { type: String, default: '' },  // Vue prop is camelCase
    size: { type: String as PropType<'sm' | 'md' | 'lg'>, default: 'md' },
    bordered: { type: Boolean, default: false },
    rounded: { type: Boolean, default: false },
  },
  // ...
});
</script>
```

**Key Pattern**:
- Vue component props: camelCase (`buttonText`)
- Vue template attributes: kebab-case (`:button-text`)
- Lit property decorator: Explicit attribute (`attribute: 'button-text'`)

### Debugging Attribute Mapping Issues

If a prop isn't being passed from Vue to the Lit component:

1. **Check the browser DevTools Elements tab**:
   ```html
   <!-- Should see: -->
   <ag-empty-state button-text="Click Me" title="Hello">

   <!-- Not: -->
   <ag-empty-state buttontext="Click Me" title="Hello">
   ```

2. **Add console logging to debug**:
   ```typescript
   // In Lit component
   @property({ type: String, attribute: 'button-text' })
   set buttonText(value: string) {
     console.log('[EmptyState] buttonText set to:', value);
     this._buttonText = value;
   }
   get buttonText() { return this._buttonText; }
   private _buttonText = '';
   ```

3. **Verify in Vue wrapper**:
   ```vue
   <script setup lang="ts">
   const props = defineProps<{ buttonText: string }>();

   watch(() => props.buttonText, (newValue) => {
     console.log('[VueEmptyState] buttonText changed to:', newValue);
   });
   </script>
   ```

### Common Mistakes to Avoid

1. ❌ **Forgetting attribute mapping for multi-word props**
   ```typescript
   @property({ type: String }) buttonText = '';  // WRONG - creates 'buttontext' attribute
   ```

2. ❌ **Using camelCase in Vue templates**
   ```vue
   <ag-empty-state :buttonText="value">  <!-- WRONG - doesn't work in HTML -->
   </ag-empty-state>
   ```

3. ❌ **Inconsistent naming between Vue prop and attribute**
   ```vue
   <!-- Vue component defines 'buttonLabel' but Lit expects 'button-text' -->
   <template>
     <ag-empty-state :button-label="buttonLabel">  <!-- WRONG -->
     </ag-empty-state>
   </template>
   ```

4. ❌ **Using `or undefined` for string props**
   ```vue
   <!-- String props should use empty string, not undefined -->
   <ag-empty-state :button-text="buttonText || undefined">  <!-- WRONG -->
   <ag-empty-state :button-text="buttonText">  <!-- CORRECT -->
   ```

### Reference Examples

See these components for correct patterns:
- **Input** (`v2/lib/src/components/Input/core/_Input.ts`): Lines 418-422 (errorMessage, helpText, etc.)
- **EmptyState** (`v2/lib/src/components/EmptyState/core/_EmptyState.ts`): Line 17 (buttonText)
- **VueInput** (`v2/lib/src/components/Input/vue/VueInput.vue`): Lines 98-116 (Vue template usage)

### Step 2: Core Component Implementation

Using the `SpecSheet.md`, the agent will:

1.  **Implement Core Component**:
    -   Implement the full logic of the core Lit web component in `_MyComponent.ts`, including all identified variants and props.
    -   Ensure all accessibility requirements are implemented (ARIA attributes, keyboard handling, focus management).
    -   **⚠️ CRITICAL**: Use correct CSS attribute selectors for boolean props:
        -   ✅ CORRECT: `:host([propname])` for boolean attributes
        -   ❌ WRONG: `:host([propname="true"])` will NOT work with Lit
        -   Lit reflects boolean props as present/absent, not as `="true"`/`="false"`
    -   **⚠️ CRITICAL**: Use correct design token patterns:
        -   ONLY use design tokens derived CSS custom properties that are built to ag-token.css (derived from the v2/themeregistry design tokens). Do NOT make up CSS custom properties that do NOT already exists.
        -   ✅ CORRECT: Use core tokens directly
            -   Border: `border: var(--ag-border-width-1) solid var(--ag-border);`
            -   Spacing: `padding: var(--ag-space-3);`
            -   Radius: `border-radius: var(--ag-radius-md);`
        -   ❌ WRONG: Do NOT create component-specific tokens
            -   `--ag-alert-padding`, `--ag-card-border-width` (these should not exist)
        -   ❌ WRONG: These tokens do NOT exist:
            -   `--ag-border-width` (use `--ag-border-width-1`, `--ag-border-width-2`, etc.)
            -   `--ag-border-color` (use `--ag-border` or `--ag-border-subtle`)
    -   **⚠️ CRITICAL**: Dark Mode Support:
        -   **Token Files**: AgnosticUI uses two auto-generated token files:
            -   `ag-tokens.css` - Light mode tokens with `:where(html)` selector
            -   `ag-tokens-dark.css` - Dark mode tokens with `[data-theme="dark"]` selector
        -   **Token Usage**: ALWAYS use existing design tokens from these files. Dark mode works automatically when users add `data-theme="dark"` to their HTML element.
        -   **Adding New Tokens**: If you absolutely need a new token that doesn't exist:
            1. Add it to the appropriate JSON file in `v2/theme-registry/tokens/`
            2. Add both light and dark variants in the appropriate color files (`v2/theme-registry/tokens/colors/`)
            3. Run `npm run build` in `v2/theme-registry/` to regenerate token files
            4. Document the new token in the theme-registry README
        -   **Testing Dark Mode**: Always test components in both light and dark modes by toggling `data-theme="dark"` on the HTML element
        -   ✅ CORRECT: Use semantic tokens that work in both modes
            ```css
            color: var(--ag-text-primary);        /* Auto-adapts to dark mode */
            background: var(--ag-background-primary);
            border-color: var(--ag-border);
            ```
        -   ❌ WRONG: Hard-coded colors or component-specific overrides
            ```css
            color: #111827;                       /* Doesn't adapt to dark mode */
            background: white;
            border-color: #e5e7eb;
            ```
    -   **⚠️ CRITICAL**: Expose CSS Shadow Parts for customization:
        -   Shadow Parts allow users to style internal elements of your component from outside the shadow DOM
        -   Add `part` attributes to key internal elements that users might want to customize
        -   **Naming Convention**: Use lowercase, hyphenated names (e.g., `part="card-wrapper"`, `part="alert-icon"`)
        -   **Which elements to expose**:
            -   ✅ Main wrapper/container elements
            -   ✅ Interactive elements (buttons, inputs, links)
            -   ✅ Visual indicator elements (icons, badges, status indicators)
            -   ✅ Structural elements (headers, footers, content wrappers)
            -   ❌ Skip internal implementation details that shouldn't be customized
        -   **Example patterns**:
            ```typescript
            // Card component
            render() {
              return html`
                <div class="card-wrapper" part="ag-card-wrapper">
                  <slot name="header" part="ag-card-header"></slot>
                  <div class="card-content" part="ag-card-content">
                    <slot></slot>
                  </div>
                  <slot name="footer" part="ag-card-footer"></slot>
                </div>
              `;
            }

            // Button component
            render() {
              return html`
                <button part="ag-button" type=${this.type}>
                  <slot></slot>
                </button>
              `;
            }

            // Alert component
            render() {
              return html`
                <div class="alert" part="ag-alert">
                  <div class="alert-content" part="ag-alert-content">
                    <slot></slot>
                  </div>
                </div>
              `;
            }
            ```
        -   **Documentation Required**: Every exposed part must be documented in:
            1. Component TypeScript interface (JSDoc comment using `@csspart` tags)
            2. Storybook story showing customization example (all three frameworks: Lit, React, Vue)
            3. VitePress documentation Parts table (similar to Props table)
            4. VitePress examples component with visual customization demos (`v2/site/docs/examples/MyComponentExamples.vue`)
    -   **⚠️ CRITICAL**: Custom Element Registration:
        -   **DO NOT use `@customElement` decorator** - This causes issues with React Storybook's `react-docgen-plugin` which tries to parse the core TypeScript file
        -   **DO use manual registration** at the end of your component file
        -   **DO include TypeScript type mapping** for IDE autocomplete and type safety
        -   **✅ CORRECT Pattern** (Standard for all components):
            ```typescript
            import { LitElement, html, css } from 'lit';
            import { property } from 'lit/decorators.js';  // NO customElement import!

            export interface MyComponentProps {
              // ... props
            }

            export class MyComponent extends LitElement implements MyComponentProps {
              // reflect: true required for attribute reflection
              @property({ type: String, reflect: true })
              public myProp = '';

              // ... component implementation
            }

            // Manual registration with conditional check
            if (!customElements.get('ag-mycomponent')) {
              customElements.define('ag-mycomponent', MyComponent);
            }

            // TypeScript type mapping for autocomplete
            declare global {
              interface HTMLElementTagNameMap {
                'ag-mycomponent': MyComponent;
              }
            }
            ```
        -   **❌ WRONG Patterns**:
            ```typescript
            // ❌ WRONG: Using @customElement decorator
            @customElement('ag-mycomponent')
            export class MyComponent extends LitElement {
              // This breaks React Storybook!
            }

            // ❌ WRONG: No conditional check
            customElements.define('ag-mycomponent', MyComponent);
            // Can cause errors if component is imported multiple times

            // ❌ WRONG: Missing HTMLElementTagNameMap
            if (!customElements.get('ag-mycomponent')) {
              customElements.define('ag-mycomponent', MyComponent);
            }
            // Missing TypeScript support for element tag names
            ```
        -   **Why This Pattern?**:
            1. **React Storybook Compatibility**: The `@customElement` decorator causes parsing errors in Storybook's react-docgen-plugin
            2. **Re-import Safety**: The conditional check prevents errors when the component module is imported multiple times
            3. **TypeScript Support**: The `HTMLElementTagNameMap` declaration enables:
               - Autocomplete for element tag names in TypeScript
               - Type checking for `document.createElement('ag-mycomponent')`
               - Better IDE support across frameworks
        -   **Placement**: Always place registration at the **very end** of your component file, after the class definition

2.  **Write Unit Tests**:
    -   Write comprehensive unit tests in `_MyComponent.spec.ts` that verify:
        -   The core unit tests use `vitest`; DO NOT use `@open-wc/testing`
        -   All props and variants
        -   Accessibility requirements
        -   Edge cases and error handling
        -   **⚠️ CRITICAL TEST**: CSS selectors use `[attrname]` not `[attrname="true"]` for boolean props
            ```typescript
            it('uses correct CSS attribute selectors for boolean props', () => {
              const styleContent = MyComponent.styles.toString();
              expect(styleContent).toContain(':host([propname])');
              expect(styleContent).not.toContain('[propname="true"]');
            });
            ```
    -   **Verify**: Run `npm run test -- MyComponent` to ensure all tests pass.

### Step 3: Framework Wrappers

The agent will implement framework-specific wrappers:

1.  **React Wrapper**:
    -   Complete the React wrapper in `v2/lib/src/components/react/MyComponent.tsx`
    -   Use `@lit/react` to create a proper React component wrapper
    -   Ensure TypeScript types are correctly exported

2.  **Vue Wrapper**:
    -   Complete the Vue wrapper in `v2/lib/src/components/vue/MyComponent.vue`
    -   **⚠️ CRITICAL**: Follow this complete Vue wrapper pattern:

        ```vue
        <template>
          <ag-mycomponent ref="agComponent">
            <slot name="header" slot="header" />
            <slot />
            <slot name="footer" slot="footer" />
          </ag-mycomponent>
        </template>

        <script lang="ts">
        import { defineComponent, onMounted, ref, watchEffect, nextTick, type PropType } from 'vue';
        import type { MyComponentProps, MyComponentVariant } from '../core/_MyComponent';
        import '../core/MyComponent'; // Registers the ag-mycomponent web component

        export default defineComponent({
          name: 'VueMyComponent',
          props: {
            propOne: { type: Boolean, default: false },
            propTwo: { type: String, default: '' },
            variant: {
              type: String as PropType<MyComponentVariant>,
              default: '' as MyComponentVariant,
            },
          },
          setup(props) {
            const agComponent = ref<HTMLElement & MyComponentProps | null>(null);

            const syncProps = () => {
              const webComponent = agComponent.value;
              if (!webComponent) return;

              webComponent.propOne = props.propOne;
              webComponent.propTwo = props.propTwo;
              webComponent.variant = props.variant;
            };

            onMounted(async () => {
              await customElements.whenDefined('ag-mycomponent');
              await nextTick();
              syncProps();
            });

            watchEffect(() => {
              if (agComponent.value) {
                syncProps();
              }
            });

            return { agComponent };
          },
        });
        </script>
        ```

    -   **Key Points**:
        - Template uses `ref="agComponent"` to get reference to web component
        - Slots are forwarded using `<slot name="header" slot="header" />` pattern
        - Import the core component to register it: `import '../core/MyComponent';`
        - Use `watchEffect` (NOT `watch(props, ...)`) for reactive prop syncing
        - Type the ref as `ref<HTMLElement & MyComponentProps | null>(null)`
        - Wait for custom element definition before initial sync
        - Type variant props with `PropType<MyComponentVariant>`

### Step 4: Storybook Stories (CRITICAL VERIFICATION STEP)

**This step is crucial**: The Storybook stories verify that the component works correctly in all three frameworks before documenting it.

The agent will create comprehensive Storybook stories showing all variants, states, and interactions:

1.  **Lit Stories** (`v2/playgrounds/lit/src/stories/MyComponent.stories.ts`):
    -   **IMPORTANT**: Set `title: 'AgnosticUI Lit/MyComponent'` (not 'AgnosticUI/MyComponent')
    -   **⚠️ CRITICAL**: Use property binding (`.propName`) consistently, NOT boolean attribute binding (`?propname`):
        ```typescript
        // ✅ CORRECT - use property binding for all props:
        html`<ag-card
          .isSkinned=${args.isSkinned}
          .isStacked=${args.isStacked}
          .variant=${args.variant}
        ></ag-card>`

        // ❌ WRONG - boolean attribute binding doesn't work for false values:
        html`<ag-card
          ?isskinned=${args.isSkinned}  // When false, removes attribute but property still true!
        ></ag-card>`
        ```
        **Why**: Boolean attribute binding (`?`) only adds/removes attributes but doesn't set the underlying property to false. Since Lit properties have default values and reflect, this causes the default (often `true`) to persist even when you pass `false`.
    -   Default story
    -   Stories for each variant (e.g., success, info, error, warning)
    -   Stories for each boolean prop (e.g., isShadow, isAnimated)
    -   Interactive stories demonstrating events and user interactions
    -   Combined prop examples

2.  **React Stories** (`v2/playgrounds/react/src/stories/MyComponent.stories.tsx`):
    -   **IMPORTANT**: Set `title: 'AgnosticUI React/MyComponent'` (not 'AgnosticUI/MyComponent')
    -   Same coverage as Lit stories but using React component wrapper
    -   Ensure React-specific patterns work (e.g., event handlers, refs)

3.  **Vue Stories** (`v2/playgrounds/vue/src/stories/MyComponent.stories.ts`):
    -   **IMPORTANT**: Set `title: 'AgnosticUI Vue/MyComponent'` (not 'AgnosticUI/MyComponent')
    -   Same coverage as Lit stories but using Vue component
    -   Ensure Vue-specific patterns work (e.g., v-model, slots)
    -   **⚠️ CRITICAL - CSS Parts Customization Story**: For components with CSS Shadow Parts, create a `CSSPartsCustomization` or `CustomizedWithCSSParts` story using the `v-html` pattern:
        ```typescript
        export const CSSPartsCustomization: Story = {
          args: {
            // your component args
          },
          render: (args) => ({
            components: { VueMyComponent },
            setup() {
              const styles = `
                <style>
                  .custom-component::part(ag-my-part) {
                    /* custom styles */
                  }
                </style>
              `;
              return { args, styles };
            },
            template: `
              <div>
                <div v-html="styles"></div>
                <VueMyComponent v-bind="args" class="custom-component" />
              </div>
            `,
          }),
        };
        ```
        **Why this pattern**: Using `v-html="styles"` is cleaner than injecting styles into `document.head` and avoids issues with Vue's scoped styles not working with Shadow Parts.

4.  **Verify Storybook**:
STOP - Ask user if they would like to do the next step of building, pack'ing, installing, and running the storybooks.

**STOP / PAUSE FOR USER INPUT**: Ask human: [would you like to do the next step of running `npm run build`, `npm pack`, `npm i /path/to/tarball` (from Storybooks (react, vue, lit), and in v2/site run: `npm run reinstall:lib &&  npm run docs:dev`? And then `npm run storybook` from the 3 storybooks?]

This phase is crucial for ensuring the component is built to be accessible from the start.

    -   Start each playground's Storybook to visually verify:
        ```shell
        # From v2/playgrounds/lit
        npm run storybook

        # From v2/playgrounds/react
        npm run storybook

        # From v2/playgrounds/vue
        npm run storybook
        ```
    -   Check that all stories render correctly
    -   Verify interactive examples work as expected
    -   Test accessibility features (keyboard navigation, screen reader compatibility)
    -   **⚠️ CRITICAL - Dark Mode Testing**:
        -   Test each story in BOTH light and dark modes
        -   Add `data-theme="dark"` to the HTML element in browser DevTools to toggle dark mode
        -   Verify text contrast, background colors, and borders are appropriate in both modes
        -   Check for common dark mode issues:
            -   Light text on light backgrounds (poor contrast)
            -   Dark text on dark backgrounds (poor contrast)
            -   Hard-coded colors that don't adapt
            -   Missing or washed-out visual elements

### Step 5: Vitepress Documentation (AFTER Storybook Verification)

Only after the component is proven to work in all three Storybook playgrounds should the agent create the documentation:

1.  **Documentation Page** (`v2/site/docs/components/mycomponent.md`):
    -   Write comprehensive documentation with:
        -   Component overview and use cases
        -   Installation instructions
        -   Usage examples for Lit, React, and Vue
        -   API documentation (props, events, slots)
        -   Accessibility guidelines
        -   Examples inspired by the working Storybook stories
    -   **⚠️ CRITICAL - Markdown Code Fences**: When creating markdown documentation files:
        -   Use plain triple backticks for code fences (` ``` `), NOT escaped backticks (`\`\`\``)
        -   The scaffold template uses a `codeFence` variable to avoid escaping issues
        -   When manually writing markdown with the Write tool, use literal triple backticks
        -   Example:
            ```markdown
            CORRECT:
            ```vue
            <template>...</template>
            ```

            INCORRECT (overly escaped):
            \`\`\`vue
            <template>...</template>
            \`\`\`
            ```

2.  **Example Component** (`v2/site/docs/examples/MyComponentExamples.vue`):
    -   Create rich, interactive examples showcasing:
        -   Basic usage
        -   All variants
        -   Common patterns and combinations
        -   Best practices
        -   **⚠️ CRITICAL**: If the component has CSS Shadow Parts, include a "CSS Shadow Parts Customization" section with:
            -   Multiple visual examples showing different customization approaches
            -   Corresponding `<style>` block (not scoped) with the CSS Parts selectors
            -   Example pattern:
                ```vue
                <template>
                  <section>
                    <!-- other examples... -->

                    <div class="mbe4">
                      <h3>CSS Shadow Parts Customization</h3>
                      <p class="mbs2 mbe3">
                        Use CSS Shadow Parts to customize the component's appearance.
                      </p>
                    </div>
                    <div class="stacked-mobile mbe4">
                      <VueMyComponent class="custom-variant-1" />
                      <VueMyComponent class="custom-variant-2" />
                      <VueMyComponent class="custom-variant-3" />
                    </div>
                  </section>
                </template>

                <style>
                .custom-variant-1::part(ag-my-part) {
                  /* customization */
                }
                </style>
                ```

## Phase 4: Final Verification & Integration

**Objective**: Ensure the new component is fully integrated, tested across all playgrounds, and the project is stable.

### Step 1: Build & Test the Library

STOP: Ask user if they would like to first as I typically prefer to do this myself.

From the `v2/lib` directory:

1.  **Build the Library**:
    Generate the `dist` files for the new component.
    ```shell
    npm run build
    ```

2.  **Run Full Validation Suite**:
    ```shell
    npm run lint && npm run typecheck && npm run test
    ```
    All checks must pass before proceeding.

### Step 2: Verify All Storybook Playgrounds

Verify the component works correctly in all three framework playgrounds:

1.  **Lit Playground** (`v2/playgrounds/lit`):
    ```shell
    cd playgrounds/lit
    npm run storybook
    ```
    - Navigate to MyComponent stories
    - Test all variants and interactions
    - Verify accessibility (keyboard navigation, focus management)

2.  **React Playground** (`v2/playgrounds/react`):
    ```shell
    cd playgrounds/react
    npm run storybook
    ```
    - Verify React wrapper works correctly
    - Test React-specific patterns (event handlers, refs)
    - Ensure type safety in TypeScript

3.  **Vue Playground** (`v2/playgrounds/vue`):
    ```shell
    cd playgrounds/vue
    npm run storybook
    ```
    - Verify Vue integration works correctly
    - Test Vue-specific patterns (slots, events)
    - Check for any console warnings or errors

### Step 3: Verify Documentation Site

Navigate to the `v2/site` directory:

1.  **Reinstall Local Library**:
    ```shell
    cd site
    npm run reinstall:lib
    ```

2.  **Start Documentation Dev Server**:
    ```shell
    npm run docs:dev
    ```

3.  **Verify Documentation Page**:
    - Navigate to the new component's documentation page
    - Test all interactive examples
    - Verify code snippets are correct
    - Check that navigation sidebar includes the new component
    - Test responsive behavior

### Step 4: Final Checklist

Before marking the component as complete, verify:

- [ ] Core component tests pass (12+ tests recommended)
- [ ] Library builds without errors or warnings
- [ ] Lit Storybook stories render and work correctly
- [ ] React Storybook stories render and work correctly
- [ ] Vue Storybook stories render and work correctly
- [ ] Vitepress documentation page renders correctly
- [ ] All interactive examples in docs work as expected
- [ ] Component appears in navigation sidebar
- [ ] No TypeScript errors in any playground
- [ ] Accessibility features verified (keyboard, screen reader)
- [ ] No console errors or warnings in any environment
- [ ] **Dark mode tested in all Storybook playgrounds (Lit, React, Vue)**
- [ ] **Component uses only design tokens from ag-tokens.css/ag-tokens-dark.css (no hard-coded colors)**
- [ ] **Text contrast is adequate in both light and dark modes**
- [ ] **All visual elements (borders, backgrounds, icons) are visible in both modes**

### Step 5: Await Human Approval

Announce that the task is complete and provide a summary:
- Number of tests passing
- List of Storybook stories created (Lit, React, Vue)
- Link to documentation page
- Any notes or caveats

Await final approval from the user.
