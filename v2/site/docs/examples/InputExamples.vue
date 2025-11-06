<template>
  <section>
    <div class="mbe4">
      <h3>Basic Input</h3>
    </div>
    <div class="stacked mbe4">
      <VueInput
        v-model:value="basicValue"
        label="Email"
        type="email"
        placeholder="you@example.com"
        class="mbe2"
      />
      <VueInput
        v-model:value="password"
        label="Password"
        type="password"
        placeholder="Enter password"
        class="mbe2"
      />
      <VueInput
        v-model:value="search"
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
        v-model:value="sizeSmall"
        label="Small Input"
        size="small"
        placeholder="Small size"
        class="mbe2"
      />
      <VueInput
        v-model:value="sizeDefault"
        label="Default Input"
        size="default"
        placeholder="Default size"
        class="mbe2"
      />
      <VueInput
        v-model:value="sizeLarge"
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
        v-model:value="shapeDefault"
        label="Default (rectangular)"
        placeholder="Default rectangular"
        class="mbe2"
      />
      <VueInput
        v-model:value="shapeRounded"
        label="Rounded"
        :rounded="true"
        placeholder="Rounded corners"
        class="mbe2"
      />
      <VueInput
        v-model:value="shapeCapsule"
        label="Capsule"
        :capsule="true"
        placeholder="Capsule shape"
        class="mbe2"
      />
      <VueInput
        v-model:value="shapeUnderlined"
        label="Underlined"
        :underlined="true"
        placeholder="Underlined only"
        class="mbe2"
      />
      <VueInput
        v-model:value="shapeUnderlinedBg"
        label="Underlined with Background"
        :underlined-with-background="true"
        placeholder="Underlined with background"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h3>States</h3>
    </div>
    <div class="stacked mbe4">
      <VueInput
        v-model:value="stateDefault"
        label="Normal"
        placeholder="Normal state"
        class="mbe2"
      />
      <VueInput
        v-model:value="stateRequired"
        label="Required"
        :required="true"
        placeholder="Required field"
        help-text="This field is required"
        class="mbe2"
      />
      <VueInput
        v-model:value="stateDisabled"
        label="Disabled"
        :disabled="true"
        placeholder="Disabled input"
        class="mbe2"
      />
      <VueInput
        v-model:value="stateReadonly"
        label="Readonly"
        :readonly="true"
        value="Read-only value"
        class="mbe2"
      />
      <VueInput
        v-model:value="stateInvalid"
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
        v-model:value="textareaValue"
        label="Comments"
        type="textarea"
        placeholder="Enter your comments..."
        :rows="4"
        class="mbe2"
      />
      <VueInput
        v-model:value="textareaLarge"
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
      <h3>With Addons (Automatic Detection)</h3>
      <p style="margin-top: 0.5rem; color: var(--ag-text-secondary); font-size: 0.875rem;">
        Addons are automatically detected when you provide slot content - no props needed!
      </p>
    </div>
    <div class="stacked mbe4">
      <VueInput
        v-model:value="addonLeft"
        label="Website URL"
        placeholder="example.com"
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
        v-model:value="addonRight"
        label="Price"
        placeholder="0.00"
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
        v-model:value="addonBoth"
        label="Amount"
        placeholder="100"
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

      <VueInput
        v-model:value="addonPercent"
        label="Discount"
        type="number"
        placeholder="10"
        class="mbe2"
      >
        <template #addon-right>
          <Percent :size="18" />
        </template>
      </VueInput>
    </div>

    <div class="mbe4">
      <h3>Addons with Style Variants</h3>
      <p style="margin-top: 0.5rem; color: var(--ag-text-secondary); font-size: 0.875rem;">
        Addons work seamlessly with all input styling variants
      </p>
    </div>
    <div class="stacked mbe4">
      <VueInput
        v-model:value="addonRounded"
        label="Rounded with Addons"
        type="number"
        placeholder="0.00"
        :rounded="true"
        class="mbe2"
      >
        <template #addon-left>
          <DollarSign
            :size="18"
            color="var(--ag-primary)"
          />
        </template>
        <template #addon-right>
          <span style="font-weight: 600;">USD</span>
        </template>
      </VueInput>

      <VueInput
        v-model:value="addonCapsule"
        label="Capsule with Addon"
        type="search"
        placeholder="Find products..."
        :capsule="true"
        class="mbe2"
      >
        <template #addon-left>
          <Search
            :size="18"
            color="var(--ag-secondary)"
          />
        </template>
      </VueInput>

      <VueInput
        v-model:value="addonUnderlined"
        label="Underlined with Addon"
        type="number"
        placeholder="10"
        :underlined="true"
        class="mbe2"
      >
        <template #addon-right>
          <Percent :size="18" />
        </template>
      </VueInput>

      <VueInput
        v-model:value="addonUnderlinedBg"
        label="Underlined with Background"
        type="text"
        placeholder="Enter username"
        :underlined-with-background="true"
        class="mbe2"
      >
        <template #addon-left>
          <User2
            :size="18"
            color="var(--ag-secondary)"
          />
        </template>
      </VueInput>
    </div>

    <div class="mbe4">
      <h3>Interactive Event Handling</h3>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >
        Demonstrates event handling with @input, @change, @focus, @blur, and v-model:value
      </p>
    </div>
    <div class="stacked mbe4">
      <!-- Pattern 1: @input event for real-time tracking -->
      <div>
        <VueInput
          v-model:value="interactiveEmail"
          label="Email (@input event)"
          type="email"
          placeholder="you@example.com"
          @input="handleInputEvent"
          class="mbe2"
        />
        <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
          Character count: <strong>{{ interactiveEmail.length }}</strong> | Last input: <strong>{{ lastInputTime }}</strong>
        </p>
      </div>

      <!-- Pattern 2: @change event for completed changes -->
      <div>
        <VueInput
          v-model:value="interactiveUsername"
          label="Username (@change event)"
          placeholder="Enter username"
          @change="handleChangeEvent"
          class="mbe2"
        />
        <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
          Last confirmed value: <strong>{{ confirmedUsername || '(none)' }}</strong>
        </p>
      </div>

      <!-- Pattern 3: Focus and Blur events -->
      <div>
        <VueInput
          v-model:value="interactiveFocus"
          label="Focus Tracking (@focus/@blur)"
          placeholder="Click to focus"
          @focus="handleFocus"
          @blur="handleBlur"
          class="mbe2"
        />
        <p style="margin-top: 0.5rem; font-size: 0.875rem;">
          Status: <strong :style="{ color: isFocused ? 'var(--ag-success)' : 'var(--ag-text-secondary)' }">
            {{ isFocused ? 'Focused' : 'Not focused' }}
          </strong>
          {{ focusCount > 0 ? `(focused ${focusCount} time${focusCount > 1 ? 's' : ''})` : '' }}
        </p>
      </div>

      <!-- Pattern 4: v-model:value with reactive updates -->
      <div>
        <VueInput
          v-model:value="interactiveReactive"
          label="Two-way Binding (v-model:value)"
          placeholder="Type here..."
          class="mbe2"
        />
        <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
          Current value: <strong>{{ interactiveReactive || '(empty)' }}</strong>
        </p>
        <button
          @click="interactiveReactive = 'Programmatically set!'"
          style="margin-top: 0.5rem; padding: 0.25rem 0.75rem; border: 1px solid var(--ag-border); border-radius: var(--ag-radius-sm); cursor: pointer;"
        >
          Set value programmatically
        </button>
      </div>

      <!-- Pattern 5: Textarea with all events -->
      <div>
        <VueInput
          v-model:value="interactiveTextarea"
          label="Textarea with Events"
          type="textarea"
          :rows="3"
          placeholder="Try typing, then click outside..."
          @input="handleTextareaInput"
          @change="handleTextareaChange"
          @focus="handleTextareaFocus"
          @blur="handleTextareaBlur"
          class="mbe2"
        />
        <div style="margin-top: 0.5rem; font-size: 0.875rem; padding: 0.5rem; background: var(--ag-background-secondary); border-radius: 4px;">
          <div>Words: <strong>{{ wordCount }}</strong></div>
          <div>Characters: <strong>{{ interactiveTextarea.length }}</strong></div>
          <div>Status: <strong>{{ textareaStatus }}</strong></div>
        </div>
      </div>
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
        v-model:value="customGradient"
        class="custom-gradient-input mbe2"
        label="Modern Gradient Border"
        placeholder="you@example.com"
        type="email"
      />

      <VueInput
        v-model:value="customMaterial"
        class="custom-material-input mbe2"
        label="Material Design Style"
        placeholder="John Doe"
      />

      <VueInput
        v-model:value="customError"
        class="custom-error-input mbe2"
        label="Custom Error Styling"
        value="invalid-email"
        :invalid="true"
        error-message="Please enter a valid email address"
      />

      <VueInput
        v-model:value="customTextarea"
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
import { Globe, DollarSign, Percent, Search, User2 } from "lucide-vue-next";

export default {
  name: "InputExamples",
  components: {
    VueInput,
    Globe,
    DollarSign,
    Percent,
    User2,
    Search,
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
      addonPercent: "",

      // Addons with style variants
      addonRounded: "",
      addonCapsule: "",
      addonUnderlined: "",
      addonUnderlinedBg: "",

      // Custom styles
      customGradient: "",
      customMaterial: "",
      customError: "",
      customTextarea: "",

      // Interactive event handling
      interactiveEmail: "",
      lastInputTime: "(none)",
      interactiveUsername: "",
      confirmedUsername: "",
      interactiveFocus: "",
      isFocused: false,
      focusCount: 0,
      interactiveReactive: "",
      interactiveTextarea: "",
      textareaStatus: "Ready",
    };
  },
  computed: {
    wordCount() {
      if (!this.interactiveTextarea.trim()) return 0;
      return this.interactiveTextarea.trim().split(/\s+/).length;
    },
  },
  methods: {
    handleInputEvent(event) {
      const now = new Date();
      this.lastInputTime = now.toLocaleTimeString();
      console.log("Input event:", event);
    },
    handleChangeEvent(event) {
      this.confirmedUsername = this.interactiveUsername;
      console.log("Change event:", event);
    },
    handleFocus(event) {
      this.isFocused = true;
      this.focusCount++;
      console.log("Focus event:", event);
    },
    handleBlur(event) {
      this.isFocused = false;
      console.log("Blur event:", event);
    },
    handleTextareaInput(event) {
      this.textareaStatus = "Typing...";
      console.log("Textarea input event:", event);
    },
    handleTextareaChange(event) {
      this.textareaStatus = "Changes saved";
      console.log("Textarea change event:", event);
    },
    handleTextareaFocus(event) {
      this.textareaStatus = "Focused";
      console.log("Textarea focus event:", event);
    },
    handleTextareaBlur(event) {
      this.textareaStatus = "Ready";
      console.log("Textarea blur event:", event);
    },
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
