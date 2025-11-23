# Input

A flexible, accessible form input component that supports text inputs, textareas, various styling variants, validation states, and input addons.

## Examples

<InputExamples />

<script setup>
import InputExamples from '../examples/InputExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <section>
    <!-- Basic input -->
    <VueInput
      v-model:value="email"
      label="Email"
      type="email"
      placeholder="you@example.com"
    />

    <!-- With validation -->
    <VueInput
      v-model:value="username"
      label="Username"
      :required="true"
      :invalid="isInvalid"
      error-message="Username is required"
      help-text="Choose a unique username"
    />

    <!-- Textarea -->
    <VueInput
      v-model:value="message"
      label="Message"
      type="textarea"
      :rows="4"
      placeholder="Enter your message..."
    />

    <!-- With addons (automatically detected) -->
    <VueInput
      v-model:value="price"
      label="Price"
    >
      <template #addon-left>
        <DollarSign :size="18" />
      </template>
    </VueInput>

    <!-- Size variants -->
    <VueInput
      v-model:value="small"
      label="Small Input"
      size="small"
      placeholder="Small size"
    />

    <!-- Shape variants -->
    <VueInput
      v-model="rounded"
      label="Rounded"
      :rounded="true"
      placeholder="Rounded corners"
    />

    <!-- States -->
    <VueInput
      v-model:value="disabled"
      label="Disabled"
      :disabled="true"
      value="Cannot edit"
    />
  </section>
</template>

<script>
import VueInput from "agnosticui-core/input/vue";
import { DollarSign } from "lucide-vue-next";

export default {
  components: {
    VueInput,
    DollarSign,
  },
  data() {
    return {
      email: "",
      username: "",
      isInvalid: false,
      message: "",
      price: "",
      small: "",
      rounded: "",
      disabled: "Cannot edit",
    };
  },
};
</script>
```
:::

::: details React
```tsx
import { useState } from 'react';
import { ReactInput } from 'agnosticui-core/react';

export default function InputExample() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const [message, setMessage] = useState('');
  const [price, setPrice] = useState('');
  const [small, setSmall] = useState('');
  const [rounded, setRounded] = useState('');

  return (
    <section>
      {/* Basic input */}
      <ReactInput
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="Email"
        type="email"
        placeholder="you@example.com"
      />

      {/* With validation */}
      <ReactInput
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        label="Username"
        required
        invalid={isInvalid}
        errorMessage="Username is required"
        helpText="Choose a unique username"
      />

      {/* Textarea */}
      <ReactInput
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        label="Message"
        type="textarea"
        rows={4}
        placeholder="Enter your message..."
      />

      {/* With addons (automatically detected) */}
      <ReactInput
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        label="Price"
      >
        <span slot="addon-left">$</span>
      </ReactInput>

      {/* Size variants */}
      <ReactInput
        value={small}
        onChange={(e) => setSmall(e.target.value)}
        label="Small Input"
        size="small"
        placeholder="Small size"
      />

      {/* Shape variants */}
      <ReactInput
        value={rounded}
        onChange={(e) => setRounded(e.target.value)}
        label="Rounded"
        rounded
        placeholder="Rounded corners"
      />

      {/* States */}
      <ReactInput
        value="Cannot edit"
        label="Disabled"
        disabled
      />
    </section>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/input';

  document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.querySelector('#email-input');
    const usernameInput = document.querySelector('#username-input');
    const messageInput = document.querySelector('#message-input');
    const priceInput = document.querySelector('#price-input');

    // Add event listeners for inputs
    emailInput?.addEventListener('input', (e) => {
      console.log('Email:', e.target.value);
    });

    usernameInput?.addEventListener('blur', (e) => {
      if (!e.target.value) {
        usernameInput.invalid = true;
      } else {
        usernameInput.invalid = false;
      }
    });
  });
</script>

<section>
  <!-- Basic input -->
  <ag-input
    id="email-input"
    label="Email"
    type="email"
    placeholder="you@example.com"
  ></ag-input>

  <!-- With validation -->
  <ag-input
    id="username-input"
    label="Username"
    required
    error-message="Username is required"
    help-text="Choose a unique username"
  ></ag-input>

  <!-- Textarea -->
  <ag-input
    id="message-input"
    label="Message"
    type="textarea"
    rows="4"
    placeholder="Enter your message..."
  ></ag-input>

  <!-- With addons (automatically detected) -->
  <ag-input
    id="price-input"
    label="Price"
  >
    <span slot="addon-left">$</span>
  </ag-input>

  <!-- Size variants -->
  <ag-input
    label="Small Input"
    size="small"
    placeholder="Small size"
  ></ag-input>

  <!-- Shape variants -->
  <ag-input
    label="Rounded"
    rounded
    placeholder="Rounded corners"
  ></ag-input>

  <!-- States -->
  <ag-input
    label="Disabled"
    disabled
    value="Cannot edit"
  ></ag-input>
</section>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string` | `''` | The input value (use with v-model for two-way binding) |
| `label` | `string` | `''` | Label text for the input. Best practice is to always provide a visible label. |
| `type` | `string` | `'text'` | Input type (text, email, password, search, tel, url, number, date, time, color, or 'textarea' for textarea element) |
| `placeholder` | `string` | `''` | Placeholder text shown when input is empty |
| `size` | `'small' \| 'default' \| 'large'` | `'default'` | Size variant of the input |
| `name` | `string` | `''` | Name attribute for form submission |
| `required` | `boolean` | `false` | Marks the field as required. Displays an asterisk (*) after the label |
| `disabled` | `boolean` | `false` | Disables the input, preventing interaction |
| `readonly` | `boolean` | `false` | Makes the input read-only but still focusable |
| `invalid` | `boolean` | `false` | Marks the input as invalid. Changes border color to red and sets aria-invalid |
| `helpText` | `string` | `''` | Helper text displayed below the input |
| `errorMessage` | `string` | `''` | Error message displayed when invalid. Linked via aria-describedby |
| `rounded` | `boolean` | `false` | Applies rounded corners (border-radius: md) |
| `capsule` | `boolean` | `false` | Applies capsule shape (fully rounded ends) |
| `underlined` | `boolean` | `false` | Shows only bottom border (underlined style) |
| `underlinedWithBackground` | `boolean` | `false` | Underlined style with subtle background color |
| `inline` | `boolean` | `false` | Changes display to inline-block for inline layouts |
| `labelPosition` | `'top' \| 'start' \| 'end' \| 'bottom'` | `'top'` | Controls label placement. `top`/`bottom` for vertical layout, `start`/`end` for horizontal (respects RTL) |
| `labelHidden` | `boolean` | `false` | Visually hides the label while keeping it accessible to screen readers |
| `noLabel` | `boolean` | `false` | Completely removes the label element. Use with ariaLabel for accessibility |
| `ariaLabel` | `string` | `''` | ARIA label for accessibility when label is not visible |
| `labelledBy` | `string` | `''` | ID of element that labels this input (aria-labelledby) |
| ~~`hasLeftAddon`~~ | `boolean` | `false` | **Deprecated:** Addons are now automatically detected. Simply use the `addon-left` slot. |
| ~~`hasRightAddon`~~ | `boolean` | `false` | **Deprecated:** Addons are now automatically detected. Simply use the `addon-right` slot. |
| `rows` | `number` | `4` | Number of rows for textarea (only applies when type="textarea") |
| `cols` | `number` | `50` | Number of columns for textarea (only applies when type="textarea") |

## Events

The Input component follows AgnosticUI v2 event conventions for native events. All events work consistently across Lit, React, and Vue:

| Event | Payload | Description |
|-------|---------|-------------|
| `click` | `MouseEvent` | Native click event on the input |
| `input` | `InputEvent` | Native input event, fired on every keystroke |
| `change` | `Event` | Native change event, fired when input loses focus after value changed |
| `focus` | `FocusEvent` | Fired when input receives focus (re-dispatched from host for cross-shadow-DOM access) |
| `blur` | `FocusEvent` | Fired when input loses focus (re-dispatched from host for cross-shadow-DOM access) |

### Framework-Specific Event Usage

**Vue:**
- Use `v-model:value` for two-way binding
- Listen to events with `@event-name` syntax (e.g., `@input`, `@change`, `@focus`, `@blur`)
- The `update:value` emit is automatically fired on input for v-model support

```vue
<VueInput
  v-model:value="email"
  label="Email"
  @input="handleInput"
  @change="handleChange"
  @focus="handleFocus"
  @blur="handleBlur"
/>
```

**React:**
- All native events work automatically through callback props
- Use `onInput`, `onChange`, `onFocus`, `onBlur`, `onClick`

```tsx
<ReactInput
  label="Email"
  onInput={(e) => console.log('input:', e.target.value)}
  onChange={(e) => console.log('change:', e.target.value)}
  onFocus={(e) => console.log('focused')}
  onBlur={(e) => console.log('blurred')}
/>
```

**Lit/Web Components:**
- Use both `addEventListener` and callback properties
- Focus and blur events bubble through shadow DOM

```js
// addEventListener pattern
const input = document.querySelector('ag-input');
input.addEventListener('input', (e) => console.log(e.target.value));
input.addEventListener('focus', (e) => console.log('focused'));

// Or use callback props
input.onInput = (e) => console.log(e.target.value);
input.onFocus = (e) => console.log('focused');
```

## Slots

| Slot | Description |
|------|-------------|
| `addon-left` | Content to display on the left side of the input (automatically detected when provided) |
| `addon-right` | Content to display on the right side of the input (automatically detected when provided) |

## Accessibility

The Input component follows [BBC GEL Form Guidelines](https://www.bbc.co.uk/gel/guidelines/how-to-design-forms) and [WCAG 2.1 Level AA](https://www.w3.org/WAI/WCAG21/quickref/):

- **Label Above Input**: Labels are positioned above inputs by default (BBC GEL best practice) for better mobile usability and internationalization
- **Semantic HTML**: Uses native `<input>` and `<label>` elements with proper `for` attribute association
- **ARIA Support**: Implements `aria-invalid`, `aria-required`, `aria-describedby` for validation states
- **Error Messaging**: Error messages are properly linked via `aria-describedby` for screen reader announcement
- **Focus Management**: Clear focus indicators using design system tokens
- **Required Fields**: Visual asterisk (*) indicator with proper ARIA markup
- **Help Text**: Associated with input via `aria-describedby` for context

### Label Requirements

Always provide a label for accessibility. The component supports multiple label patterns:

**Visible label (recommended):**
```vue
<VueInput
  v-model:value="email"
  label="Email Address"
/>
```

**Visually hidden label (when design requires it):**
```vue
<VueInput
  v-model:value="search"
  label="Search"
  :label-hidden="true"
  placeholder="Search..."
/>
```

**Custom label positioning:**
```vue
<label for="custom-input">Custom Label</label>
<VueInput
  v-model:value="value"
  :no-label="true"
  labelled-by="custom-input"
/>
```

## Form Integration

Use v-model for two-way data binding with form data:

```vue
<template>
  <form @submit.prevent="handleSubmit">
    <VueInput
      v-model:value="form.firstName"
      label="First Name"
      name="firstName"
      :required="true"
      :invalid="errors.firstName"
      :error-message="errors.firstName"
    />

    <VueInput
      v-model:value="form.email"
      label="Email"
      name="email"
      type="email"
      :required="true"
      :invalid="errors.email"
      :error-message="errors.email"
      @blur="validateEmail"
    />

    <VueInput
      v-model:value="form.message"
      label="Message"
      name="message"
      type="textarea"
      :rows="6"
      help-text="Optional: Tell us more"
    />

    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        firstName: "",
        email: "",
        message: "",
      },
      errors: {
        firstName: "",
        email: "",
      },
    };
  },
  methods: {
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.form.email) && this.form.email !== "") {
        this.errors.email = "Please enter a valid email address";
      } else {
        this.errors.email = "";
      }
    },
    handleSubmit() {
      // Validate all fields
      this.errors.firstName = this.form.firstName ? "" : "First name is required";
      this.validateEmail();

      if (!this.errors.firstName && !this.errors.email) {
        // Submit form
        console.log("Form submitted:", this.form);
      }
    },
  },
};
</script>
```

## Input Addons

Add icons or text before or after the input using slots. Addons are **automatically detected** when you provide slot content - no props needed!

```vue
<template>
  <!-- Icon addon with color (left side) -->
  <VueInput
    v-model:value="url"
    label="Website URL"
    placeholder="example.com"
  >
    <template #addon-left>
      <Globe
        :size="18"
        color="var(--ag-primary)"
      />
    </template>
  </VueInput>

  <!-- Icon addon on right -->
  <VueInput
    v-model:value="price"
    label="Price"
    placeholder="0.00"
  >
    <template #addon-right>
      <DollarSign
        :size="18"
        color="var(--ag-success)"
      />
    </template>
  </VueInput>

  <!-- Both left and right addons -->
  <VueInput
    v-model:value="amount"
    label="Amount"
    placeholder="100"
  >
    <template #addon-left>
      <DollarSign
        :size="18"
        color="var(--ag-success)"
      />
    </template>
    <template #addon-right>
      <span>.00</span>
    </template>
  </VueInput>

  <!-- Text addons -->
  <VueInput
    v-model:value="discount"
    label="Discount"
    type="number"
    placeholder="10"
  >
    <template #addon-right>
      <span style="font-weight: bold;">%</span>
    </template>
  </VueInput>
</template>

<script>
import VueInput from "agnosticui-core/input/vue";
import { Globe, DollarSign } from "lucide-vue-next";

export default {
  components: { VueInput, Globe, DollarSign },
  data() {
    return { url: "", price: "", amount: "", discount: "" };
  },
};
</script>
```

## Input Types

The component supports all HTML5 input types:

- **Text-based**: `text` (default), `email`, `password`, `search`, `tel`, `url`
- **Numeric**: `number`
- **Date/Time**: `date`, `time`, `datetime-local`, `month`, `week`
- **Other**: `color`, `file`, `range`
- **Textarea**: Use `type="textarea"` for multi-line text input

```vue
<VueInput v-model:value="email" label="Email" type="email" />
<VueInput v-model:value="password" label="Password" type="password" />
<VueInput v-model:value="date" label="Date" type="date" />
<VueInput v-model:value="message" label="Message" type="textarea" :rows="4" />
```

## Shape Variants

Customize the input appearance with shape variants:

```vue
<!-- Default: Rectangular -->
<VueInput v-model:value="value" label="Default" />

<!-- Rounded corners -->
<VueInput v-model:value="value" label="Rounded" :rounded="true" />

<!-- Capsule (fully rounded) -->
<VueInput v-model:value="value" label="Capsule" :capsule="true" />

<!-- Underlined only -->
<VueInput v-model:value="value" label="Underlined" :underlined="true" />

<!-- Underlined with background -->
<VueInput
  v-model:value="value"
  label="Underlined + BG"
  :underlined-with-background="true"
/>
```

## Label Positioning

Control label placement with the `labelPosition` prop. Supports four directional values that work across all form controls:

```vue
<!-- Top (default) - Label above input -->
<VueInput
  v-model:value="name"
  label="Full Name"
  label-position="top"
  placeholder="Enter your name"
/>

<!-- Start - Label before input (horizontal, respects RTL) -->
<VueInput
  v-model:value="age"
  label="Age:"
  label-position="start"
  placeholder="25"
/>

<!-- End - Label after input (horizontal, respects RTL) -->
<VueInput
  v-model:value="amount"
  label="USD"
  label-position="end"
  placeholder="100"
/>

<!-- Bottom - Label below input -->
<VueInput
  v-model:value="code"
  label="Verification Code"
  label-position="bottom"
  placeholder="Enter code"
/>
```

**Use Cases:**
- **`top` (default)**: Best for most forms - follows BBC GEL guidelines for mobile usability
- **`start`**: Compact horizontal layouts, admin panels, settings forms
- **`end`**: Less common, useful when label is a unit or suffix (e.g., "USD", "kg")
- **`bottom`**: Rare, use sparingly for special design requirements

**Progressive Enhancement:**
Horizontal layouts (`start`/`end`) use modern CSS `field-sizing: content` in Chrome 123+ and Safari TP for responsive input widths, with graceful fallback to fixed width in other browsers.

## Validation

Show validation states and error messages:

```vue
<template>
  <VueInput
    v-model:value="email"
    label="Email"
    type="email"
    :required="true"
    :invalid="emailError"
    :error-message="emailError ? 'Please enter a valid email' : ''"
    help-text="We'll never share your email"
    @blur="validateEmail"
  />
</template>

<script>
export default {
  data() {
    return {
      email: "",
      emailError: false,
    };
  },
  methods: {
    validateEmail() {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.emailError = !regex.test(this.email) && this.email !== "";
    },
  },
};
</script>
```

## Best Practices

1. **Always provide a label** - Essential for accessibility and usability
2. **Use appropriate input types** - Triggers correct mobile keyboards and built-in validation
3. **Provide helpful error messages** - Tell users what went wrong and how to fix it
4. **Use help text for context** - Explain format requirements or provide examples
5. **Mark required fields** - Use the `required` prop to show the asterisk indicator
6. **Validate on blur** - Check input validity when user leaves the field
7. **Keep labels above inputs** - Follows BBC GEL guidelines for better mobile UX
8. **Consider placeholder text carefully** - Don't rely on placeholders alone for instructions

## CSS Shadow Parts

The Input component exposes the following CSS Shadow Parts for custom styling:

| Part | Description |
|------|-------------|
| `ag-input` | The input element itself |
| `ag-textarea` | The textarea element (when type="textarea") |
| `ag-input-wrapper` | Main wrapper div around all elements |
| `ag-input-label` | The label element |
| `ag-input-required` | Required indicator asterisk (*) |
| `ag-input-help` | Help text div below the input |
| `ag-input-error` | Error message div |
| `ag-input-field-wrapper` | Wrapper div for input with addons |
| `ag-input-addon-left` | Left addon container |
| `ag-input-addon-right` | Right addon container |

### Customization Examples

```css
/* Modern gradient border */
ag-input::part(ag-input) {
  border: 2px solid transparent;
  background: linear-gradient(white, white) padding-box,
              linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
  border-radius: 12px;
  padding: 0.75rem 1rem;
}

ag-input::part(ag-input):focus {
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

/* Custom label styling */
ag-input::part(ag-input-label) {
  font-weight: 700;
  color: #667eea;
  text-transform: uppercase;
  font-size: 0.75rem;
}

/* Styled error messages */
ag-input::part(ag-input-error) {
  color: #dc2626;
  font-weight: 600;
  padding: 0.5rem;
  background: #fee2e2;
  border-left: 3px solid #dc2626;
  border-radius: 4px;
}

/* Material Design underline style */
ag-input::part(ag-input) {
  border: none;
  border-bottom: 2px solid #e5e7eb;
  border-radius: 0;
  background: transparent;
  transition: border-color 0.2s ease;
}

ag-input::part(ag-input):focus {
  border-bottom-color: #667eea;
}
```

See the **CSS Shadow Parts Customization** section in the examples above for more styling demonstrations.

## When to Use

**Use Input when:**
- Collecting short, single-line text data (name, email, etc.)
- Building forms for data entry
- You need validation and error messaging
- You need different input types (email, password, date, etc.)

**Use Textarea (type="textarea") when:**
- Collecting longer, multi-line text (comments, descriptions, etc.)
- User needs to see multiple lines of their input at once

**Consider alternatives when:**
- You have a fixed set of options - use Select or Radio buttons instead
- You need yes/no or on/off - use Toggle or Checkbox instead
- You need date/time selection with a calendar - consider a DatePicker component
