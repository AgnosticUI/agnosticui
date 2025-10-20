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
      v-model="email"
      label="Email"
      type="email"
      placeholder="you@example.com"
    />

    <!-- With validation -->
    <VueInput
      v-model="username"
      label="Username"
      :required="true"
      :invalid="isInvalid"
      error-message="Username is required"
      help-text="Choose a unique username"
    />

    <!-- Textarea -->
    <VueInput
      v-model="message"
      label="Message"
      type="textarea"
      :rows="4"
      placeholder="Enter your message..."
    />

    <!-- With addons -->
    <VueInput
      v-model="price"
      label="Price"
      :has-left-addon="true"
    >
      <template #addon-left>
        <DollarSign :size="18" />
      </template>
    </VueInput>

    <!-- Size variants -->
    <VueInput
      v-model="small"
      label="Small Input"
      size="small"
      placeholder="Small size"
    />

    <!-- Shape variants -->
    <VueInput
      v-model="rounded"
      label="Rounded"
      :is-rounded="true"
      placeholder="Rounded corners"
    />

    <!-- States -->
    <VueInput
      v-model="disabled"
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

      {/* With addons */}
      <ReactInput
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        label="Price"
        hasLeftAddon
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

  <!-- With addons -->
  <ag-input
    id="price-input"
    label="Price"
    has-left-addon
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
| `isRounded` | `boolean` | `false` | Applies rounded corners (border-radius: md) |
| `isCapsule` | `boolean` | `false` | Applies capsule shape (fully rounded ends) |
| `isUnderlined` | `boolean` | `false` | Shows only bottom border (underlined style) |
| `isUnderlinedWithBackground` | `boolean` | `false` | Underlined style with subtle background color |
| `isInline` | `boolean` | `false` | Changes display to inline-block for inline layouts |
| `labelHidden` | `boolean` | `false` | Visually hides the label while keeping it accessible to screen readers |
| `noLabel` | `boolean` | `false` | Completely removes the label element. Use with ariaLabel for accessibility |
| `ariaLabel` | `string` | `''` | ARIA label for accessibility when label is not visible |
| `labelledBy` | `string` | `''` | ID of element that labels this input (aria-labelledby) |
| `hasLeftAddon` | `boolean` | `false` | Enables left addon slot for icons or text |
| `hasRightAddon` | `boolean` | `false` | Enables right addon slot for icons or text |
| `rows` | `number` | `4` | Number of rows for textarea (only applies when type="textarea") |
| `cols` | `number` | `50` | Number of columns for textarea (only applies when type="textarea") |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `@update:modelValue` | `string` | Emitted when the input value changes. Use with v-model for two-way binding |
| `@input` | `Event` | Native input event, fired on every keystroke |
| `@change` | `Event` | Native change event, fired when input loses focus after value changed |
| `@focus` | `Event` | Fired when input receives focus |
| `@blur` | `Event` | Fired when input loses focus |

## Slots

| Slot | Description |
|------|-------------|
| `addon-left` | Content to display on the left side of the input (requires hasLeftAddon prop) |
| `addon-right` | Content to display on the right side of the input (requires hasRightAddon prop) |

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
  v-model="email"
  label="Email Address"
/>
```

**Visually hidden label (when design requires it):**
```vue
<VueInput
  v-model="search"
  label="Search"
  :label-hidden="true"
  placeholder="Search..."
/>
```

**Custom label positioning:**
```vue
<label for="custom-input">Custom Label</label>
<VueInput
  v-model="value"
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
      v-model="form.firstName"
      label="First Name"
      name="firstName"
      :required="true"
      :invalid="errors.firstName"
      :error-message="errors.firstName"
    />

    <VueInput
      v-model="form.email"
      label="Email"
      name="email"
      type="email"
      :required="true"
      :invalid="errors.email"
      :error-message="errors.email"
      @blur="validateEmail"
    />

    <VueInput
      v-model="form.message"
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

Add icons or text before or after the input using slots:

```vue
<template>
  <!-- Icon addon with color -->
  <VueInput
    v-model="url"
    label="Website URL"
    placeholder="example.com"
    :has-left-addon="true"
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
    v-model="price"
    label="Price"
    placeholder="0.00"
    :has-right-addon="true"
  >
    <template #addon-right>
      <DollarSign
        :size="18"
        color="var(--ag-success)"
      />
    </template>
  </VueInput>

  <!-- Both icon and text addons -->
  <VueInput
    v-model="amount"
    label="Amount"
    placeholder="100"
    :has-left-addon="true"
    :has-right-addon="true"
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
</template>

<script>
import VueInput from "agnosticui-core/input/vue";
import { Globe, DollarSign } from "lucide-vue-next";

export default {
  components: { VueInput, Globe, DollarSign },
  data() {
    return { url: "", price: "", amount: "" };
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
<VueInput v-model="email" label="Email" type="email" />
<VueInput v-model="password" label="Password" type="password" />
<VueInput v-model="date" label="Date" type="date" />
<VueInput v-model="message" label="Message" type="textarea" :rows="4" />
```

## Shape Variants

Customize the input appearance with shape variants:

```vue
<!-- Default: Rectangular -->
<VueInput v-model="value" label="Default" />

<!-- Rounded corners -->
<VueInput v-model="value" label="Rounded" :is-rounded="true" />

<!-- Capsule (fully rounded) -->
<VueInput v-model="value" label="Capsule" :is-capsule="true" />

<!-- Underlined only -->
<VueInput v-model="value" label="Underlined" :is-underlined="true" />

<!-- Underlined with background -->
<VueInput
  v-model="value"
  label="Underlined + BG"
  :is-underlined-with-background="true"
/>
```

## Validation

Show validation states and error messages:

```vue
<template>
  <VueInput
    v-model="email"
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
