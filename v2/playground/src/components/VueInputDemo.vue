<template>
  <div style="padding: 1rem;">
    <h3>Vue Input Wrapper Examples</h3>

    <p style="font-size: 0.875rem; color: var(--c-text-light); margin: 0 0 1rem 0; padding: 0.5rem; background-color: var(--c-bg-secondary); border-radius: 4px; border: 1px solid var(--c-border);">
      💡 <strong>Console Logging:</strong> Open your browser console (<kbd>F12</kbd> → Console tab) to see input events from all Vue input examples below.
      <button @click="logEventTip" style="color: var(--agnostic-primary); text-decoration: underline; background: none; border: none; cursor: pointer; padding: 0; font: inherit;">Click here</button> for event debugging tips!
    </p>

    <div v-if="!isReady" style="padding: 1rem; color: #666;">
      Loading Vue Input components...
    </div>

    <div v-else>
      <h4>Basic Input Examples</h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1rem 0;">
        <VueInput
          label="Basic Text Input"
          placeholder="Enter text..."
          @input="handleInput"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
        />

        <VueInput
          label="Email Input"
          type="email"
          placeholder="Enter email..."
          @input="handleInput"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
        />

        <VueInput
          label="Password Input"
          type="password"
          placeholder="Enter password..."
          @input="handleInput"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
        />

        <VueInput
          label="Number Input"
          type="number"
          placeholder="Enter number..."
          @input="handleInput"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
        />
      </div>

      <h4>Size Variants</h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; margin: 1rem 0;">
        <VueInput
          label="Small Input"
          size="small"
          placeholder="Small size..."
          @input="handleInput"
          @change="handleChange"
        />

        <VueInput
          label="Default Input"
          size="default"
          placeholder="Default size..."
          @input="handleInput"
          @change="handleChange"
        />

        <VueInput
          label="Large Input"
          size="large"
          placeholder="Large size..."
          @input="handleInput"
          @change="handleChange"
        />
      </div>

      <h4>Styling Variants</h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1rem 0;">
        <VueInput
          label="Rounded Input"
          :is-rounded="true"
          placeholder="Rounded corners..."
          @input="handleInput"
          @change="handleChange"
        />

        <VueInput
          label="Underlined Input"
          :is-underlined="true"
          placeholder="Underlined style..."
          @input="handleInput"
          @change="handleChange"
        />

        <VueInput
          label="Underlined with Background"
          :is-underlined-with-background="true"
          placeholder="Underlined + background..."
          @input="handleInput"
          @change="handleChange"
        />

        <VueInput
          label="Inline Input"
          :is-inline="true"
          placeholder="Inline display..."
          @input="handleInput"
          @change="handleChange"
        />
      </div>

      <h4>State Variants</h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1rem 0;">
        <VueInput
          label="Required Input"
          :required="true"
          placeholder="Required field..."
          @input="handleInput"
          @change="handleChange"
        />

        <VueInput
          label="Disabled Input"
          :disabled="true"
          value="Cannot edit this"
          @input="handleInput"
          @change="handleChange"
        />

        <VueInput
          label="Readonly Input"
          :readonly="true"
          value="Read-only value"
          @input="handleInput"
          @change="handleChange"
        />

        <VueInput
          label="Invalid Input"
          :invalid="true"
          error-message="This field has an error"
          value="Invalid value"
          @input="handleInput"
          @change="handleChange"
        />
      </div>

      <h4>Help Text and Validation</h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1rem 0;">
        <VueInput
          label="Input with Help Text"
          help-text="This is helpful information about the field"
          placeholder="Enter value..."
          @input="handleInput"
          @change="handleChange"
        />

        <VueInput
          label="Validation Example"
          :invalid="validationState.isInvalid"
          :error-message="validationState.errorMessage"
          :value="validationState.value"
          @input="handleValidationInput"
          @change="handleChange"
          placeholder="Must be at least 5 characters..."
        />
      </div>

      <h4>Textarea Examples</h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1rem 0;">
        <VueInput
          label="Basic Textarea"
          type="textarea"
          placeholder="Enter multi-line text..."
          :rows="4"
          @input="handleInput"
          @change="handleChange"
        />

        <VueInput
          label="Large Textarea"
          type="textarea"
          size="large"
          placeholder="Large textarea..."
          :rows="6"
          :cols="80"
          @input="handleInput"
          @change="handleChange"
        />
      </div>

      <h4>Label Variants</h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1rem 0;">
        <VueInput
          label="Hidden Label Input"
          :label-hidden="true"
          placeholder="Label is visually hidden..."
          @input="handleInput"
          @change="handleChange"
        />

        <VueInput
          :no-label="true"
          aria-label="Input without visible label"
          placeholder="No visible label (has aria-label)..."
          @input="handleInput"
          @change="handleChange"
        />
      </div>

      <h4>Reactive Value Binding</h4>
      <div style="display: flex; gap: 1rem; margin: 1rem 0; align-items: end;">
        <VueInput
          label="Two-way Binding"
          :value="reactiveValue"
          @input="handleReactiveInput"
          placeholder="Type here..."
          style="flex: 1;"
        />

        <div style="padding: 0.75rem; background: var(--c-bg-secondary); border-radius: 4px; border: 1px solid var(--c-border); min-width: 200px;">
          <strong>Current Value:</strong><br>
          <code>{{ reactiveValue || '(empty)' }}</code>
        </div>
      </div>

      <h4>Addon Examples</h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1rem 0;">
        <VueInput
          label="Left Addon"
          :has-left-addon="true"
          placeholder="With left addon..."
          @input="handleInput"
          @change="handleChange"
        >
          <span slot="addon-left">$</span>
        </VueInput>

        <VueInput
          label="Right Addon"
          :has-right-addon="true"
          placeholder="With right addon..."
          @input="handleInput"
          @change="handleChange"
        >
          <span slot="addon-right">.com</span>
        </VueInput>

        <VueInput
          label="Both Addons"
          :has-left-addon="true"
          :has-right-addon="true"
          placeholder="Amount..."
          @input="handleInput"
          @change="handleChange"
        >
          <span slot="addon-left">$</span>
          <span slot="addon-right">USD</span>
        </VueInput>
      </div>

      <h4>Imperative API Demo</h4>
      <div style="display: flex; gap: 1rem; margin: 1rem 0; align-items: end;">
        <VueInput
          ref="imperativeInput"
          label="Controlled Input"
          placeholder="Use buttons to control focus..."
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          style="flex: 1;"
        />

        <div style="display: flex; gap: 0.5rem;">
          <button @click="focusInput" style="padding: 0.5rem 1rem; border: 1px solid var(--c-border); border-radius: 4px; background: var(--c-bg); color: var(--c-text); cursor: pointer;">
            Focus
          </button>
          <button @click="blurInput" style="padding: 0.5rem 1rem; border: 1px solid var(--c-border); border-radius: 4px; background: var(--c-bg); color: var(--c-text); cursor: pointer;">
            Blur
          </button>
          <button @click="selectInput" style="padding: 0.5rem 1rem; border: 1px solid var(--c-border); border-radius: 4px; background: var(--c-bg); color: var(--c-text); cursor: pointer;">
            Select
          </button>
        </div>
      </div>

      <h4>Complex Form Example</h4>
      <div style="background-color: var(--c-bg-secondary); padding: 1rem; border-radius: 4px; margin: 1rem 0;">
        <form @submit.prevent="handleFormSubmit">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
            <VueInput
              label="First Name"
              :required="true"
              v-model:value="formData.firstName"
              @input="handleFormInput"
              placeholder="Enter first name..."
            />

            <VueInput
              label="Last Name"
              :required="true"
              v-model:value="formData.lastName"
              @input="handleFormInput"
              placeholder="Enter last name..."
            />
          </div>

          <div style="margin-bottom: 1rem;">
            <VueInput
              label="Email Address"
              type="email"
              :required="true"
              v-model:value="formData.email"
              @input="handleFormInput"
              placeholder="Enter email address..."
            />
          </div>

          <div style="margin-bottom: 1rem;">
            <VueInput
              label="Bio"
              type="textarea"
              v-model:value="formData.bio"
              @input="handleFormInput"
              :rows="4"
              placeholder="Tell us about yourself..."
            />
          </div>

          <div style="display: flex; gap: 1rem; align-items: center;">
            <button type="submit" style="padding: 0.75rem 1.5rem; border: 1px solid var(--agnostic-primary); border-radius: 4px; background: var(--agnostic-primary); color: white; cursor: pointer;">
              Submit Form
            </button>
            <button type="button" @click="resetForm" style="padding: 0.75rem 1.5rem; border: 1px solid var(--c-border); border-radius: 4px; background: var(--c-bg); color: var(--c-text); cursor: pointer;">
              Reset
            </button>
          </div>
        </form>

        <div v-if="formSubmitted" style="margin-top: 1rem; padding: 0.75rem; background: var(--c-bg); border-radius: 4px; border: 1px solid var(--c-border);">
          <strong>Form Data Submitted:</strong>
          <pre style="margin: 0.5rem 0; font-size: 0.875rem;">{{ JSON.stringify(formData, null, 2) }}</pre>
        </div>
      </div>

      <h4>Accessibility Features</h4>
      <div style="background-color: var(--c-bg-secondary); padding: 1rem; border-radius: 4px; margin: 1rem 0;">
        <p><strong>Keyboard Navigation:</strong></p>
        <ul style="margin: 0.5rem 0; padding-left: 1.5rem;">
          <li><kbd>Tab</kbd> to navigate between inputs</li>
          <li><kbd>Shift+Tab</kbd> to navigate backwards</li>
          <li>Type to enter text in focused input</li>
          <li>Screen readers announce labels and error messages</li>
        </ul>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">
          <VueInput
            label="Accessible Input 1"
            help-text="Use Tab to move to next field"
            @input="handleInput"
            @focus="handleFocus"
            @blur="handleBlur"
          />

          <VueInput
            label="Accessible Input 2"
            help-text="Screen readers announce this help text"
            @input="handleInput"
            @focus="handleFocus"
            @blur="handleBlur"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { VueInput } from 'agnosticui-core/input/vue';

// Import web components to ensure they're registered
import 'agnosticui-core';

const isReady = ref(false);
const reactiveValue = ref('');
const imperativeInput = ref();

// Validation state for example
const validationState = reactive({
  value: '',
  isInvalid: false,
  errorMessage: ''
});

// Form data
const formData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  bio: ''
});
const formSubmitted = ref(false);

onMounted(async () => {
  // Wait for web components to be defined before rendering
  try {
    await Promise.all([
      customElements.whenDefined('ag-input'),
    ]);
    console.log('Web components are ready for Vue Input wrappers!');
    isReady.value = true;
  } catch (error) {
    console.error('Error waiting for web components:', error);
    // Fall back to rendering anyway after a short delay
    setTimeout(() => {
      isReady.value = true;
    }, 1000);
  }
});

const handleInput = (event: Event) => {
  const input = event.target as HTMLInputElement | HTMLTextAreaElement;
  const label = input.closest('ag-input')?.getAttribute('label') || 'Unknown Input';

  console.log(`📝 Vue Input changed: "${label}"`, {
    label,
    value: input.value,
    type: input.type || 'text',
    timestamp: new Date().toLocaleTimeString(),
    eventType: 'vue-input-input'
  });
};

const handleChange = (event: Event) => {
  const input = event.target as HTMLInputElement | HTMLTextAreaElement;
  const label = input.closest('ag-input')?.getAttribute('label') || 'Unknown Input';

  console.log(`✅ Vue Input committed: "${label}"`, {
    label,
    value: input.value,
    timestamp: new Date().toLocaleTimeString(),
    eventType: 'vue-input-change'
  });
};

const handleFocus = (event: Event) => {
  const input = event.target as HTMLInputElement | HTMLTextAreaElement;
  const label = input.closest('ag-input')?.getAttribute('label') || 'Unknown Input';

  console.log(`🎯 Vue Input focused: "${label}"`, {
    label,
    timestamp: new Date().toLocaleTimeString(),
    eventType: 'vue-input-focus'
  });
};

const handleBlur = (event: Event) => {
  const input = event.target as HTMLInputElement | HTMLTextAreaElement;
  const label = input.closest('ag-input')?.getAttribute('label') || 'Unknown Input';

  console.log(`👋 Vue Input blurred: "${label}"`, {
    label,
    timestamp: new Date().toLocaleTimeString(),
    eventType: 'vue-input-blur'
  });
};

const handleReactiveInput = (event: Event) => {
  const input = event.target as HTMLInputElement;
  reactiveValue.value = input.value;

  console.log(`🔄 Vue Input reactive binding: "${input.value}"`, {
    value: input.value,
    timestamp: new Date().toLocaleTimeString(),
    eventType: 'vue-input-reactive'
  });
};

const handleValidationInput = (event: Event) => {
  const input = event.target as HTMLInputElement;
  validationState.value = input.value;

  // Simple validation: minimum 5 characters
  if (input.value.length > 0 && input.value.length < 5) {
    validationState.isInvalid = true;
    validationState.errorMessage = 'Must be at least 5 characters long';
  } else {
    validationState.isInvalid = false;
    validationState.errorMessage = '';
  }

  console.log(`🔍 Vue Input validation: "${input.value}"`, {
    value: input.value,
    isValid: !validationState.isInvalid,
    errorMessage: validationState.errorMessage,
    timestamp: new Date().toLocaleTimeString(),
    eventType: 'vue-input-validation'
  });
};

const focusInput = () => {
  imperativeInput.value?.focus();
  console.log('⚡ Vue Input focused imperatively', {
    method: 'focus()',
    timestamp: new Date().toLocaleTimeString(),
    eventType: 'vue-input-imperative'
  });
};

const blurInput = () => {
  imperativeInput.value?.blur();
  console.log('⚡ Vue Input blurred imperatively', {
    method: 'blur()',
    timestamp: new Date().toLocaleTimeString(),
    eventType: 'vue-input-imperative'
  });
};

const selectInput = () => {
  imperativeInput.value?.select();
  console.log('⚡ Vue Input selected imperatively', {
    method: 'select()',
    timestamp: new Date().toLocaleTimeString(),
    eventType: 'vue-input-imperative'
  });
};

const handleFormInput = (event: Event) => {
  const input = event.target as HTMLInputElement | HTMLTextAreaElement;
  const label = input.closest('ag-input')?.getAttribute('label') || 'Unknown Field';

  console.log(`📋 Vue Form Input: "${label}"`, {
    label,
    value: input.value,
    timestamp: new Date().toLocaleTimeString(),
    eventType: 'vue-form-input'
  });
};

const handleFormSubmit = () => {
  formSubmitted.value = true;
  console.log('📤 Vue Form submitted', {
    formData: { ...formData },
    timestamp: new Date().toLocaleTimeString(),
    eventType: 'vue-form-submit'
  });

  // Reset after 5 seconds
  setTimeout(() => {
    formSubmitted.value = false;
  }, 5000);
};

const resetForm = () => {
  Object.assign(formData, {
    firstName: '',
    lastName: '',
    email: '',
    bio: ''
  });
  formSubmitted.value = false;

  console.log('🔄 Vue Form reset', {
    timestamp: new Date().toLocaleTimeString(),
    eventType: 'vue-form-reset'
  });
};

const logEventTip = () => {
  console.log('🎯 TIP: Expand the logged objects to see how we extract input values, labels, validation states, and form data from Vue event handlers and reactive bindings!');
};
</script>