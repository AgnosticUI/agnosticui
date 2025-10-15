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
    };
  },
};
</script>
