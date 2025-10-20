<template>
  <section>
    <div class="mbe4">
      <h3>Basic Input</h3>
    </div>
    <div class="stacked mbe4">
      <VueInput
        v-model="basicValue"
        label="Email"
        type="email"
        placeholder="you@example.com"
        class="mbe2"
      />
      <VueInput
        v-model="password"
        label="Password"
        type="password"
        placeholder="Enter password"
        class="mbe2"
      />
      <VueInput
        v-model="search"
        label="Search"
        type="search"
        placeholder="Search..."
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h3>Sizes</h3>
    </div>
    <div class="stacked mbe4">
      <VueInput
        v-model="sizeSmall"
        label="Small Input"
        size="small"
        placeholder="Small size"
        class="mbe2"
      />
      <VueInput
        v-model="sizeDefault"
        label="Default Input"
        size="default"
        placeholder="Default size"
        class="mbe2"
      />
      <VueInput
        v-model="sizeLarge"
        label="Large Input"
        size="large"
        placeholder="Large size"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h3>Shape Variants</h3>
    </div>
    <div class="stacked mbe4">
      <VueInput
        v-model="shapeDefault"
        label="Default (rectangular)"
        placeholder="Default rectangular"
        class="mbe2"
      />
      <VueInput
        v-model="shapeRounded"
        label="Rounded"
        :is-rounded="true"
        placeholder="Rounded corners"
        class="mbe2"
      />
      <VueInput
        v-model="shapeCapsule"
        label="Capsule"
        :is-capsule="true"
        placeholder="Capsule shape"
        class="mbe2"
      />
      <VueInput
        v-model="shapeUnderlined"
        label="Underlined"
        :is-underlined="true"
        placeholder="Underlined only"
        class="mbe2"
      />
      <VueInput
        v-model="shapeUnderlinedBg"
        label="Underlined with Background"
        :is-underlined-with-background="true"
        placeholder="Underlined with background"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h3>States</h3>
    </div>
    <div class="stacked mbe4">
      <VueInput
        v-model="stateDefault"
        label="Normal"
        placeholder="Normal state"
        class="mbe2"
      />
      <VueInput
        v-model="stateRequired"
        label="Required"
        :required="true"
        placeholder="Required field"
        help-text="This field is required"
        class="mbe2"
      />
      <VueInput
        v-model="stateDisabled"
        label="Disabled"
        :disabled="true"
        placeholder="Disabled input"
        class="mbe2"
      />
      <VueInput
        v-model="stateReadonly"
        label="Readonly"
        :readonly="true"
        value="Read-only value"
        class="mbe2"
      />
      <VueInput
        v-model="stateInvalid"
        label="Invalid"
        :invalid="true"
        placeholder="Invalid input"
        error-message="This field has an error"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h3>Textarea</h3>
    </div>
    <div class="stacked mbe4">
      <VueInput
        v-model="textareaValue"
        label="Comments"
        type="textarea"
        placeholder="Enter your comments..."
        :rows="4"
        class="mbe2"
      />
      <VueInput
        v-model="textareaLarge"
        label="Description"
        type="textarea"
        placeholder="Enter description..."
        :rows="6"
        size="large"
        help-text="Provide a detailed description"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h3>With Addons</h3>
    </div>
    <div class="stacked mbe4">
      <VueInput
        v-model="addonLeft"
        label="Website URL"
        placeholder="example.com"
        :has-left-addon="true"
        class="mbe2"
      >
        <template #addon-left>
          <Globe
            :size="18"
            color="var(--ag-primary)"
          />
        </template>
      </VueInput>

      <VueInput
        v-model="addonRight"
        label="Price"
        placeholder="0.00"
        :has-right-addon="true"
        class="mbe2"
      >
        <template #addon-right>
          <DollarSign
            :size="18"
            color="var(--ag-success)"
          />
        </template>
      </VueInput>

      <VueInput
        v-model="addonBoth"
        label="Amount"
        placeholder="100"
        :has-left-addon="true"
        :has-right-addon="true"
        class="mbe2"
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
    </div>

    <div class="mbe4">
      <h3>CSS Shadow Parts Customization</h3>
      <p style="margin-top: 0.5rem; margin-bottom: 1rem; color: var(--vp-c-text-2);">
        Input can be customized using CSS Shadow Parts:
        <code>::part(ag-input)</code>,
        <code>::part(ag-textarea)</code>,
        <code>::part(ag-input-label)</code>,
        <code>::part(ag-input-error)</code>,
        <code>::part(ag-input-help)</code>
      </p>
    </div>
    <div class="stacked mbe4">
      <VueInput
        v-model="customGradient"
        class="custom-gradient-input mbe2"
        label="Modern Gradient Border"
        placeholder="you@example.com"
        type="email"
      />

      <VueInput
        v-model="customMaterial"
        class="custom-material-input mbe2"
        label="Material Design Style"
        placeholder="John Doe"
      />

      <VueInput
        v-model="customError"
        class="custom-error-input mbe2"
        label="Custom Error Styling"
        value="invalid-email"
        :invalid="true"
        error-message="Please enter a valid email address"
      />

      <VueInput
        v-model="customTextarea"
        class="custom-textarea mbe2"
        label="Styled Textarea"
        type="textarea"
        :rows="4"
        placeholder="Paste your code here..."
        help-text="Monospace font with dashed border"
      />
    </div>
  </section>
</template>

<script>
import VueInput from "agnosticui-core/input/vue";
import { Globe, DollarSign } from "lucide-vue-next";

export default {
  name: "InputExamples",
  components: {
    VueInput,
    Globe,
    DollarSign,
  },
  data() {
    return {
      // Basic
      basicValue: "",
      password: "",
      search: "",

      // Sizes
      sizeSmall: "",
      sizeDefault: "",
      sizeLarge: "",

      // Shapes
      shapeDefault: "",
      shapeRounded: "",
      shapeCapsule: "",
      shapeUnderlined: "",
      shapeUnderlinedBg: "",

      // States
      stateDefault: "",
      stateRequired: "",
      stateDisabled: "Disabled value",
      stateReadonly: "Read-only value",
      stateInvalid: "",

      // Textarea
      textareaValue: "",
      textareaLarge: "",

      // Addons
      addonLeft: "",
      addonRight: "",
      addonBoth: "",

      // Custom styles
      customGradient: "",
      customMaterial: "",
      customError: "",
      customTextarea: "",
    };
  },
};
</script>

<style scoped>
/* Modern gradient input style */
.custom-gradient-input::part(ag-input) {
  border: 2px solid transparent;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
  border-radius: 12px;
  padding: 0.75rem 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.custom-gradient-input::part(ag-input):focus {
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  transform: translateY(-1px);
}

.custom-gradient-input::part(ag-input-label) {
  font-weight: 700;
  color: #667eea;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
}

/* Material Design-inspired */
.custom-material-input::part(ag-input) {
  border: none;
  border-bottom: 2px solid #e5e7eb;
  border-radius: 0;
  padding: 0.5rem 0;
  background: transparent;
  transition: border-color 0.2s ease;
}

.custom-material-input::part(ag-input):focus {
  border-bottom-color: #667eea;
  outline: none;
}

.custom-material-input::part(ag-input-label) {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
}

/* Error state customization */
.custom-error-input::part(ag-input-error) {
  color: #dc2626;
  font-weight: 600;
  font-size: 0.875rem;
  padding: 0.5rem;
  background: #fee2e2;
  border-left: 3px solid #dc2626;
  border-radius: 4px;
  margin-top: 0.5rem;
}

.custom-error-input::part(ag-input) {
  border-color: #dc2626;
  background: #fef2f2;
}

.custom-error-input::part(ag-input):focus {
  outline-color: #dc2626;
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}

/* Textarea customization */
.custom-textarea::part(ag-textarea) {
  border: 2px dashed #9ca3af;
  border-radius: 12px;
  background: #f9fafb;
  padding: 1rem;
  font-family: "Monaco", "Courier New", monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  transition: all 0.3s ease;
}

.custom-textarea::part(ag-textarea):focus {
  border-style: solid;
  border-color: #667eea;
  background: white;
}

.custom-textarea::part(ag-input-label) {
  font-weight: 700;
  color: #374151;
}
</style>
