# Fieldset

A semantic fieldset component that groups related form controls with an optional legend. Follows WAI-ARIA best practices for accessible form grouping.

## Examples

<FieldsetExamples />

<script setup>
import FieldsetExamples from '../examples/FieldsetExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <section>
    <!-- Basic fieldset -->
    <VueFieldset legend="Personal Information">
      <VueInput
        v-model:value="firstName"
        label="First Name"
        placeholder="John"
      />
      <VueInput
        v-model:value="lastName"
        label="Last Name"
        placeholder="Doe"
      />
    </VueFieldset>

    <!-- Bordered fieldset -->
    <VueFieldset
      legend="Shipping Address"
      :bordered="true"
    >
      <VueInput
        v-model:value="street"
        label="Street Address"
        placeholder="123 Main St"
      />
      <VueInput
        v-model:value="city"
        label="City"
        placeholder="San Francisco"
      />
    </VueFieldset>

    <!-- Radio group -->
    <VueFieldset
      legend="Preferred Contact Method"
      :bordered="true"
    >
      <VueRadio
        name="contact"
        value="email"
        label-text="Email"
        :checked="contact === 'email'"
        @change="contact = 'email'"
      />
      <VueRadio
        name="contact"
        value="phone"
        label-text="Phone"
        :checked="contact === 'phone'"
        @change="contact = 'phone'"
      />
    </VueFieldset>

    <!-- Horizontal layout -->
    <VueFieldset
      legend="Date of Birth"
      layout="horizontal"
      :bordered="true"
    >
      <VueInput
        v-model:value="month"
        label="Month"
        placeholder="MM"
        size="small"
      />
      <VueInput
        v-model:value="day"
        label="Day"
        placeholder="DD"
        size="small"
      />
      <VueInput
        v-model:value="year"
        label="Year"
        placeholder="YYYY"
        size="small"
      />
    </VueFieldset>

    <!-- Hidden legend (still accessible) -->
    <VueFieldset
      legend="Search Options"
      :legend-hidden="true"
      :bordered="true"
    >
      <VueInput
        v-model:value="query"
        label="Search Query"
        placeholder="Enter search terms..."
      />
      <VueCheckbox
        name="options"
        value="case-sensitive"
        label-text="Case Sensitive"
      />
    </VueFieldset>
  </section>
</template>

<script>
import VueFieldset from "agnosticui-core/fieldset/vue";
import VueInput from "agnosticui-core/input/vue";
import VueRadio from "agnosticui-core/radio/vue";
import VueCheckbox from "agnosticui-core/checkbox/vue";

export default {
  components: {
    VueFieldset,
    VueInput,
    VueRadio,
    VueCheckbox,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      street: "",
      city: "",
      contact: "email",
      month: "",
      day: "",
      year: "",
      query: "",
    };
  },
};
</script>
```
:::

::: details React
```tsx
import { useState } from 'react';
import { ReactFieldset } from 'agnosticui-core/react';
import { ReactInput } from 'agnosticui-core/react';
import { ReactRadio } from 'agnosticui-core/react';
import { ReactCheckbox } from 'agnosticui-core/react';

export default function FieldsetExample() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [contact, setContact] = useState('email');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');
  const [query, setQuery] = useState('');

  return (
    <section>
      {/* Basic fieldset */}
      <ReactFieldset legend="Personal Information">
        <ReactInput
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          label="First Name"
          placeholder="John"
        />
        <ReactInput
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          label="Last Name"
          placeholder="Doe"
        />
      </ReactFieldset>

      {/* Bordered fieldset */}
      <ReactFieldset
        legend="Shipping Address"
        bordered
      >
        <ReactInput
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          label="Street Address"
          placeholder="123 Main St"
        />
        <ReactInput
          value={city}
          onChange={(e) => setCity(e.target.value)}
          label="City"
          placeholder="San Francisco"
        />
      </ReactFieldset>

      {/* Radio group */}
      <ReactFieldset
        legend="Preferred Contact Method"
        bordered
      >
        <ReactRadio
          name="contact"
          value="email"
          labelText="Email"
          checked={contact === 'email'}
          onChange={() => setContact('email')}
        />
        <ReactRadio
          name="contact"
          value="phone"
          labelText="Phone"
          checked={contact === 'phone'}
          onChange={() => setContact('phone')}
        />
      </ReactFieldset>

      {/* Horizontal layout */}
      <ReactFieldset
        legend="Date of Birth"
        layout="horizontal"
        bordered
      >
        <ReactInput
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          label="Month"
          placeholder="MM"
          size="small"
        />
        <ReactInput
          value={day}
          onChange={(e) => setDay(e.target.value)}
          label="Day"
          placeholder="DD"
          size="small"
        />
        <ReactInput
          value={year}
          onChange={(e) => setYear(e.target.value)}
          label="Year"
          placeholder="YYYY"
          size="small"
        />
      </ReactFieldset>

      {/* Hidden legend (still accessible) */}
      <ReactFieldset
        legend="Search Options"
        legendHidden
        bordered
      >
        <ReactInput
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          label="Search Query"
          placeholder="Enter search terms..."
        />
        <ReactCheckbox
          name="options"
          value="case-sensitive"
          labelText="Case Sensitive"
        />
      </ReactFieldset>
    </section>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/fieldset';
  import 'agnosticui-core/input';
  import 'agnosticui-core/radio';
  import 'agnosticui-core/checkbox';

  document.addEventListener('DOMContentLoaded', () => {
    // Event listeners for radio buttons
    const emailRadio = document.querySelector('#contact-email');
    const phoneRadio = document.querySelector('#contact-phone');

    emailRadio?.addEventListener('change', (e) => {
      if (e.target.checked) {
        console.log('Email selected');
      }
    });

    phoneRadio?.addEventListener('change', (e) => {
      if (e.target.checked) {
        console.log('Phone selected');
      }
    });
  });
</script>

<section>
  <!-- Basic fieldset -->
  <ag-fieldset legend="Personal Information">
    <ag-input
      label="First Name"
      placeholder="John"
    ></ag-input>
    <ag-input
      label="Last Name"
      placeholder="Doe"
    ></ag-input>
  </ag-fieldset>

  <!-- Bordered fieldset -->
  <ag-fieldset
    legend="Shipping Address"
    bordered
  >
    <ag-input
      label="Street Address"
      placeholder="123 Main St"
    ></ag-input>
    <ag-input
      label="City"
      placeholder="San Francisco"
    ></ag-input>
  </ag-fieldset>

  <!-- Radio group -->
  <ag-fieldset
    legend="Preferred Contact Method"
    bordered
  >
    <ag-radio
      id="contact-email"
      name="contact"
      value="email"
      label-text="Email"
      checked
    ></ag-radio>
    <ag-radio
      id="contact-phone"
      name="contact"
      value="phone"
      label-text="Phone"
    ></ag-radio>
  </ag-fieldset>

  <!-- Horizontal layout -->
  <ag-fieldset
    legend="Date of Birth"
    layout="horizontal"
    bordered
  >
    <ag-input
      label="Month"
      placeholder="MM"
      size="small"
    ></ag-input>
    <ag-input
      label="Day"
      placeholder="DD"
      size="small"
    ></ag-input>
    <ag-input
      label="Year"
      placeholder="YYYY"
      size="small"
    ></ag-input>
  </ag-fieldset>

  <!-- Hidden legend (still accessible) -->
  <ag-fieldset
    legend="Search Options"
    legend-hidden
    bordered
  >
    <ag-input
      label="Search Query"
      placeholder="Enter search terms..."
    ></ag-input>
    <ag-checkbox
      name="options"
      value="case-sensitive"
      label-text="Case Sensitive"
    ></ag-checkbox>
  </ag-fieldset>
</section>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `legend` | `string` | `''` | Legend text for the fieldset. Provides a descriptive title for the group of form controls. |
| `bordered` | `boolean` | `false` | Whether to apply borders and padding around the fieldset for visual grouping. |
| `layout` | `'vertical' \| 'horizontal'` | `'vertical'` | Layout mode for the fieldset content. Use 'horizontal' for side-by-side form controls. |
| `legendHidden` | `boolean` | `false` | Visually hides the legend while keeping it accessible to screen readers. |

## Slots

| Slot | Description |
|------|-------------|
| default | Content slot for form controls and other elements to be grouped within the fieldset. |

## Accessibility

The Fieldset component follows [W3C WAI-ARIA Grouping Content](https://www.w3.org/WAI/tutorials/forms/grouping/) best practices and [WCAG 2.1 Level AA](https://www.w3.org/WAI/WCAG21/quickref/):

- **Semantic Grouping**: Uses native `<fieldset>` and `<legend>` elements for proper semantic structure
- **Screen Reader Support**: Legend is announced before each form control in the group, providing essential context
- **Required Context**: Always include a legend (use `legendHidden` if you need to hide it visually)
- **Keyboard Navigation**: Fieldset doesn't interfere with natural keyboard navigation of form controls
- **Focus Management**: Form controls within maintain their native focus behavior
- **ARIA Labels**: Legend provides automatic labeling context for grouped controls

### When to Use Fieldset

Use fieldset to group related form controls in these scenarios:

**Radio Button Groups (Required):**
```vue
<VueFieldset legend="Preferred Contact Method">
  <VueRadio name="contact" value="email" label-text="Email" />
  <VueRadio name="contact" value="phone" label-text="Phone" />
  <VueRadio name="contact" value="sms" label-text="SMS" />
</VueFieldset>
```

**Checkbox Groups:**
```vue
<VueFieldset legend="Notification Preferences">
  <VueCheckbox name="notifications" value="email" label-text="Email Updates" />
  <VueCheckbox name="notifications" value="sms" label-text="SMS Alerts" />
</VueFieldset>
```

**Related Form Fields:**
```vue
<VueFieldset legend="Shipping Address">
  <VueInput label="Street" />
  <VueInput label="City" />
  <VueInput label="ZIP Code" />
</VueFieldset>
```

**Multi-part Inputs:**
```vue
<VueFieldset legend="Credit Card Expiration" layout="horizontal">
  <VueInput label="Month" size="small" />
  <VueInput label="Year" size="small" />
</VueFieldset>
```

## Form Integration

Fieldsets are essential for organizing complex forms and providing accessibility context:

```vue
<template>
  <form @submit.prevent="handleSubmit">
    <VueFieldset
      legend="Personal Information"
      :bordered="true"
    >
      <VueInput
        v-model:value="form.firstName"
        label="First Name"
        name="firstName"
        :required="true"
        :invalid="!!errors.firstName"
        :error-message="errors.firstName"
      />
      <VueInput
        v-model:value="form.lastName"
        label="Last Name"
        name="lastName"
        :required="true"
        :invalid="!!errors.lastName"
        :error-message="errors.lastName"
      />
      <VueInput
        v-model:value="form.email"
        label="Email"
        name="email"
        type="email"
        :required="true"
        :invalid="!!errors.email"
        :error-message="errors.email"
      />
    </VueFieldset>

    <VueFieldset
      legend="Communication Preferences"
      :bordered="true"
    >
      <VueCheckbox
        name="preferences"
        value="newsletter"
        label-text="Subscribe to Newsletter"
        :checked="form.preferences.newsletter"
        @change="form.preferences.newsletter = !form.preferences.newsletter"
      />
      <VueCheckbox
        name="preferences"
        value="updates"
        label-text="Product Updates"
        :checked="form.preferences.updates"
        @change="form.preferences.updates = !form.preferences.updates"
      />
    </VueFieldset>

    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        preferences: {
          newsletter: false,
          updates: true,
        },
      },
      errors: {
        firstName: "",
        lastName: "",
        email: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      // Validate and submit form
      this.validateForm();
      if (this.isFormValid()) {
        console.log("Form submitted:", this.form);
      }
    },
    validateForm() {
      this.errors.firstName = this.form.firstName ? "" : "First name is required";
      this.errors.lastName = this.form.lastName ? "" : "Last name is required";
      this.errors.email = this.isValidEmail(this.form.email) ? "" : "Valid email is required";
    },
    isFormValid() {
      return !this.errors.firstName && !this.errors.lastName && !this.errors.email;
    },
    isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
  },
};
</script>
```

## Layout Variants

### Vertical Layout (Default)

Form controls are stacked vertically, which is the standard form layout:

```vue
<VueFieldset legend="Contact Information">
  <VueInput v-model:value="name" label="Name" />
  <VueInput v-model:value="email" label="Email" type="email" />
  <VueInput v-model:value="phone" label="Phone" type="tel" />
</VueFieldset>
```

### Horizontal Layout

Form controls are arranged side-by-side with flexible wrapping:

```vue
<VueFieldset
  legend="Date of Birth"
  layout="horizontal"
>
  <VueInput v-model:value="month" label="Month" size="small" />
  <VueInput v-model:value="day" label="Day" size="small" />
  <VueInput v-model:value="year" label="Year" size="small" />
</VueFieldset>
```

The horizontal layout uses flexbox with wrapping, so controls will wrap to the next line on smaller screens.

## Styling Options

### Bordered Fieldset

Add visual borders and padding for clearer visual grouping:

```vue
<VueFieldset
  legend="Account Settings"
  :bordered="true"
>
  <!-- Form controls -->
</VueFieldset>
```

### Hidden Legend

Keep the legend accessible to screen readers while hiding it visually:

```vue
<VueFieldset
  legend="Filter Options"
  :legend-hidden="true"
>
  <!-- When the visual design doesn't require a visible legend -->
</VueFieldset>
```

**Important**: Always provide a legend for accessibility. Use `legendHidden` instead of omitting the legend entirely.

## Nested Fieldsets

For complex forms, you can nest fieldsets to create hierarchical groupings:

```vue
<VueFieldset legend="Account Settings" :bordered="true">
  <VueFieldset legend="Profile">
    <VueInput v-model:value="username" label="Username" />
    <VueInput v-model:value="displayName" label="Display Name" />
  </VueFieldset>

  <VueFieldset legend="Privacy">
    <VueCheckbox value="public" label-text="Make Profile Public" />
    <VueCheckbox value="searchable" label-text="Allow Search Indexing" />
  </VueFieldset>
</VueFieldset>
```

## Best Practices

1. **Always Include a Legend** - Essential for accessibility and context. Use `legendHidden` if you need to hide it visually.

2. **Use for Radio Groups** - Radio button groups should always be wrapped in a fieldset with a descriptive legend.

3. **Group Related Fields** - Use fieldsets to group fields that share a common purpose or context (e.g., shipping address, payment info).

4. **Keep Legends Descriptive** - Write clear, concise legends that describe the purpose of the grouped controls.

5. **Consider Bordered Style** - Use `bordered` prop for better visual separation in complex forms.

6. **Choose Appropriate Layout** - Use `layout="horizontal"` for compact, related inputs (like date parts). Use default vertical for most forms.

7. **Don't Overuse** - Not every form needs fieldsets. Use them when grouping provides meaningful context.

8. **Validate as a Group** - When validating forms, consider fieldset boundaries for error messaging and focus management.

## CSS Shadow Parts

The Fieldset component exposes the following CSS Shadow Parts for custom styling:

| Part | Description |
|------|-------------|
| `ag-fieldset` | The fieldset element itself |
| `ag-legend` | The legend element |
| `ag-content` | The content wrapper div that holds slotted controls |

### Customization Examples

```css
/* Modern gradient border fieldset */
ag-fieldset::part(ag-fieldset) {
  border: 2px solid transparent;
  background: linear-gradient(white, white) padding-box,
              linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
  border-radius: 16px;
  padding: 1.5rem;
}

ag-fieldset::part(ag-legend) {
  font-weight: 700;
  font-size: 1.125rem;
  color: #667eea;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Premium dark theme */
ag-fieldset::part(ag-fieldset) {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  border: 2px solid #475569;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

ag-fieldset::part(ag-legend) {
  font-weight: 700;
  color: #f1f5f9;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #475569;
}

/* Minimalist style */
ag-fieldset::part(ag-fieldset) {
  border: none;
  border-left: 4px solid var(--ag-primary);
  padding-left: 1.5rem;
  background: var(--ag-background-secondary);
}

ag-fieldset::part(ag-legend) {
  font-weight: 600;
  color: var(--ag-primary);
  text-transform: uppercase;
  font-size: 0.875rem;
  letter-spacing: 0.1em;
}

/* Content spacing customization */
ag-fieldset::part(ag-content) {
  display: flex;
  flex-direction: column;
  gap: var(--ag-space-5);
}
```

See the **CSS Shadow Parts Customization** section in the examples above for live demonstrations.

## When to Use

**Use Fieldset when:**
- Grouping radio buttons (always required for radio groups)
- Grouping related checkboxes for multiple selections
- Organizing related form fields (address, payment info, etc.)
- Creating multi-part inputs (date, phone number, etc.)
- Building complex forms that need logical sections

**Consider alternatives when:**
- You only have a single form control - no grouping needed
- The form is very simple (1-2 fields) - grouping may add unnecessary complexity
- You need visual sections without semantic grouping - consider using divs with headings instead

## Customization with CSS Variables

You can customize spacing using CSS variables:

```css
ag-fieldset {
  --ag-fieldset-padding: var(--ag-space-6);
  --ag-fieldset-gap: var(--ag-space-5);
  --ag-fieldset-legend-margin-bottom: var(--ag-space-4);
}
```

## Resources

- [W3C: Grouping Controls](https://www.w3.org/WAI/tutorials/forms/grouping/)
- [MDN: fieldset element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset)
- [BBC GEL: Form Guidelines](https://www.bbc.co.uk/gel/guidelines/how-to-design-forms)
