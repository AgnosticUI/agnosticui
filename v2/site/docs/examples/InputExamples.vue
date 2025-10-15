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
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h3>With Help Text</h3>
    </div>
    <div class="stacked mbe4">
      <VueInput
        v-model="helpTextExample"
        label="Username"
        placeholder="Enter username"
        help-text="Choose a unique username (3-20 characters)"
        class="mbe2"
      />
      <VueInput
        v-model="errorExample"
        label="Email"
        placeholder="you@example.com"
        :invalid="true"
        error-message="Please enter a valid email address"
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
      <h3>Label Variants</h3>
    </div>
    <div class="stacked mbe4">
      <VueInput
        v-model="labelVisible"
        label="Visible Label"
        placeholder="Label is visible"
        class="mbe2"
      />
      <VueInput
        v-model="labelHidden"
        label="Hidden Label (for screen readers)"
        :label-hidden="true"
        placeholder="Label is visually hidden but accessible"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h3>Form Example</h3>
    </div>
    <div class="stacked mbe4">
      <VueInput
        v-model="form.firstName"
        label="First Name"
        placeholder="John"
        :required="true"
        class="mbe2"
      />
      <VueInput
        v-model="form.lastName"
        label="Last Name"
        placeholder="Doe"
        :required="true"
        class="mbe2"
      />
      <VueInput
        v-model="form.email"
        label="Email"
        type="email"
        placeholder="john.doe@example.com"
        :required="true"
        :invalid="form.emailError"
        :error-message="form.emailError ? 'Please enter a valid email' : ''"
        class="mbe2"
        @blur="validateEmail"
      />
      <VueInput
        v-model="form.phone"
        label="Phone"
        type="tel"
        placeholder="(555) 123-4567"
        help-text="Format: (XXX) XXX-XXXX"
        class="mbe2"
      />
      <VueInput
        v-model="form.message"
        label="Message"
        type="textarea"
        placeholder="Your message..."
        :rows="4"
        help-text="Tell us what you think"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h3>Input Types</h3>
    </div>
    <div class="stacked mbe4">
      <VueInput
        v-model="typeText"
        label="Text"
        type="text"
        placeholder="Text input"
        class="mbe2"
      />
      <VueInput
        v-model="typeNumber"
        label="Number"
        type="number"
        placeholder="123"
        class="mbe2"
      />
      <VueInput
        v-model="typeDate"
        label="Date"
        type="date"
        class="mbe2"
      />
      <VueInput
        v-model="typeTime"
        label="Time"
        type="time"
        class="mbe2"
      />
      <VueInput
        v-model="typeColor"
        label="Color"
        type="color"
        class="mbe2"
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

      // Help text
      helpTextExample: "",
      errorExample: "",

      // Textarea
      textareaValue: "",
      textareaLarge: "",

      // Addons
      addonLeft: "",
      addonRight: "",
      addonBoth: "",

      // Labels
      labelVisible: "",
      labelHidden: "",

      // Form
      form: {
        firstName: "",
        lastName: "",
        email: "",
        emailError: false,
        phone: "",
        message: "",
      },

      // Input types
      typeText: "",
      typeNumber: "",
      typeDate: "",
      typeTime: "",
      typeColor: "#3b82f6",
    };
  },
  methods: {
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.form.emailError =
        !emailRegex.test(this.form.email) && this.form.email !== "";
    },
  },
};
</script>
