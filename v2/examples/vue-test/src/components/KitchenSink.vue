<script setup lang="ts">
import { ref } from "vue";
import { VueAvatar } from "./ag/Avatar/vue";
import { VueBadge } from "./ag/Badge/vue";
import { VueButton } from "./ag/Button/vue";
import { VueCard } from "./ag/Card/vue";
import { VueCheckbox } from "./ag/Checkbox/vue";
import { VueCombobox } from "./ag/Combobox/vue";
import { VueDivider } from "./ag/Divider/vue";
import { VueFieldset } from "./ag/Fieldset/vue";
import { VueFlexRow } from "./ag/Flex/vue";
import { VueIcon } from "./ag/Icon/vue";
import { VueImage } from "./ag/Image/vue";
import { VueInput } from "./ag/Input/vue";
import { VueMark } from "./ag/Mark/vue";
import { VueRadio } from "./ag/Radio/vue";
import { VueRating } from "./ag/Rating/vue";
import { VueSelect } from "./ag/Select/vue";
import { VueSlider } from "./ag/Slider/vue";
import { VueTag } from "./ag/Tag/vue";
import { VueToggle } from "./ag/Toggle/vue";

defineProps<{ msg: string }>();

// Component state
const checkboxValue = ref(true);
const radioValue = ref("option1");
const inputValue = ref("Hello AgnosticUI");
const selectValue = ref("vue");
const sliderValue = ref(50);
const toggleValue = ref(false);
const ratingValue = ref(3);
const comboboxValue = ref("");

const comboboxOptions = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "lit", label: "Lit" },
];

const selectOptions = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
];
</script>

<template>
  <div class="kitchen-sink">
    <h1>{{ msg }}</h1>
    <p class="subtitle">A comprehensive showcase of AgnosticUI Vue components</p>

    <!-- Avatars -->
    <section class="component-section">
      <h2>Avatars</h2>
      <VueFlexRow
        gap="lg"
        align="center"
      >
        <VueAvatar
          img-src="https://i.pravatar.cc/150?img=1"
          img-alt="User 1"
        />
        <VueAvatar
          text="AB"
          size="sm"
        />
        <VueAvatar text="CD" />
        <VueAvatar
          text="EF"
          size="lg"
        />
        <VueAvatar
          text="XL"
          size="xl"
        />
        <VueAvatar
          img-src="https://i.pravatar.cc/150?img=4"
          img-alt="User 4"
        />
        <VueAvatar
          variant="success"
          text="OK"
        />
        <VueAvatar
          variant="info"
          text="??"
        />
        <VueAvatar
          variant="warning"
          text="!!"
        />
        <VueAvatar
          variant="error"
          text="XX"
        />
      </VueFlexRow>
    </section>

    <VueDivider />

    <section class="component-section">
      <VueFlexRow gap="1rem">
        <div class="demo-box">Item 1</div>
        <div class="demo-box">Item 2</div>
        <div class="demo-box">Item 3</div>
      </VueFlexRow>

      <VueFlexCol gap="1rem">
        <div class="demo-box">Row 1</div>
        <div class="demo-box">Row 2</div>
        <div class="demo-box">Row 3</div>
      </VueFlexCol>

      <VueFlexRow justify="space-between">
        <div class="demo-box demo-box-primary">Header Left</div>
        <div class="demo-box demo-box-primary">Header Right</div>
      </VueFlexRow>
    </section>

    <!-- Badges -->
    <section class="component-section">
      <h2>Badges</h2>
      <VueFlexRow
        gap="lg"
        align="center"
        wrap="wrap"
      >
        <VueBadge class="mis1">Default</VueBadge>
        <VueBadge
          class="mis1"
          variant="success"
        >Success</VueBadge>
        <VueBadge
          class="mis1"
          variant="info"
        >Info</VueBadge>
        <VueBadge
          class="mis1"
          variant="warning"
        >Warning</VueBadge>
        <VueBadge
          class="mis1"
          variant="danger"
        >Error</VueBadge>
        <VueBadge
          dot
          variant="success"
        ></VueBadge>
        <VueBadge
          dot
          variant="warning"
        ></VueBadge>
      </VueFlexRow>
    </section>

    <VueDivider />

    <!-- Buttons -->
    <section class="component-section">
      <h2>Buttons</h2>
      <VueFlexRow
        gap="md"
        wrap="wrap"
      >
        <VueButton>Default Button</VueButton>
        <VueButton variant="primary">Primary</VueButton>
        <VueButton variant="secondary">Secondary</VueButton>
        <VueButton variant="success">Success</VueButton>
        <VueButton variant="monochrome">Monochrome</VueButton>
        <VueButton variant="warning">Warning</VueButton>
        <VueButton variant="danger">Danger (Error)</VueButton>
        <VueButton :disabled="true">Disabled</VueButton>
        <VueButton shape="rounded">Rounded</VueButton>
        <VueButton
          :bordered="true"
          shape="rounded"
          variant="primary"
        >Bordered</VueButton>
      </VueFlexRow>

      <h3 class="subsection-title">Button Sizes</h3>
      <VueFlexRow
        gap="md"
        align="center"
      >
        <VueButton size="sm">Small</VueButton>
        <VueButton>Default</VueButton>
        <VueButton size="lg">Large</VueButton>
      </VueFlexRow>
    </section>

    <VueDivider />

    <!-- Cards -->
    <section class="component-section">
      <h2>Cards</h2>
      <VueFlexRow
        gap="lg"
        wrap="wrap"
      >
        <VueCard style="width: 300px">
          <template #header>
            <h3 class="card-header">Card Header</h3>
          </template>
          <p>This is the card body content. Cards are great for containing related information.</p>
          <template #footer>
            <VueFlexRow
              justify="flex-end"
              gap="sm"
            >
              <VueButton size="sm">Cancel</VueButton>
              <VueButton
                size="sm"
                variant="primary"
              >Confirm</VueButton>
            </VueFlexRow>
          </template>
        </VueCard>

        <VueCard
          isBorder
          style="width: 300px"
        >
          <template #header>
            <h3 class="card-header">Bordered Card</h3>
          </template>
          <p>This card has a border style applied.</p>
        </VueCard>

        <VueCard
          isShadow
          style="width: 300px"
        >
          <template #header>
            <h3 class="card-header">Shadow Card</h3>
          </template>
          <p>This card has a shadow effect.</p>
        </VueCard>
      </VueFlexRow>
    </section>

    <VueDivider />

    <!-- Form Controls -->
    <section class="component-section">
      <h2>Form Controls</h2>

      <VueFieldset legend="Contact Information">
        <div class="form-layout">
          <VueInput
            v-model="inputValue"
            label="Name"
            placeholder="Enter your name"
          />

          <VueInput
            label="Email"
            type="email"
            placeholder="your@email.com"
          />

          <VueInput
            label="Disabled Input"
            placeholder="This is disabled"
            disabled
          />
        </div>
      </VueFieldset>

      <h3 class="subsection-title">Checkbox</h3>
      <VueCheckbox
        :checked="checkboxValue"
        @update:checked="checkboxValue = $event"
        name="subscription"
        value="agree"
        labelText="I agree to the terms and conditions"
        size="medium"
        theme="default"
        labelPosition="end"
        :disabled="false"
        :indeterminate="false"
      ></VueCheckbox>

      <h3 class="subsection-title">Radio Buttons</h3>
      <VueRadio
        v-model="radioValue"
        value="option1"
        label="Option 1"
        name="radioGroup"
      />
      <VueRadio
        v-model="radioValue"
        value="option2"
        label="Option 2"
        name="radioGroup"
      />
      <VueRadio
        v-model="radioValue"
        value="option3"
        label="Option 3"
        name="radioGroup"
      />

      <h3 class="subsection-title">Select</h3>
      <VueSelect
        v-model="selectValue"
        :options="selectOptions"
        label="Choose Framework"
      />

      <h3 class="subsection-title">Combobox</h3>
      <VueCombobox
        v-model="comboboxValue"
        :options="comboboxOptions"
        label="Search Frameworks"
        placeholder="Type to search..."
      />

      <h3 class="subsection-title">Slider</h3>
      <VueSlider
        v-model="sliderValue"
        label="Volume"
        :min="0"
        :max="100"
      />
      <p>Current value: {{ sliderValue }}</p>

      <h3 class="subsection-title">Toggle</h3>
      <VueToggle
        v-model="toggleValue"
        label="Enable notifications"
      />
      <p>Toggle is: {{ toggleValue ? "ON" : "OFF" }}</p>

      <h3 class="subsection-title">Rating</h3>
      <VueRating
        v-model="ratingValue"
        :max="5"
      />
      <p>Rating: {{ ratingValue }} / 5</p>
    </section>

    <VueDivider />

    <!-- Icons & Images -->
    <section class="component-section">
      <h2>Icons & Images</h2>

      <h3 class="subsection-title">Icons</h3>
      <VueFlexRow
        gap="lg"
        align="center"
      >
        <VueIcon
          type="success"
          size="16"
        />
        <VueIcon type="info" />
        <VueIcon
          type="warning"
          size="18"
        />
        <VueIcon
          type="error"
          size="24"
        />
      </VueFlexRow>

      <h3 class="subsection-title">Images</h3>
      <VueFlexRow gap="lg">
        <VueImage
          src="https://via.placeholder.com/150"
          alt="Placeholder"
          :width="150"
          :height="150"
          aspectRatio="1/1"
          :fade="true"
        />
        <VueImage
          src="https://via.placeholder.com/150/ff0000"
          alt="Red placeholder"
          :width="150"
          :height="150"
          aspectRatio="1/1"
          :fade="true"
          isRounded
        />
      </VueFlexRow>
    </section>

    <VueDivider />

    <!-- Tags -->
    <section class="component-section">
      <h2>Tags</h2>
      <VueFlexRow
        gap="md"
        wrap="wrap"
      >
        <VueTag>Default Tag</VueTag>
        <VueTag type="success">Success</VueTag>
        <VueTag type="info">Info</VueTag>
        <VueTag type="warning">Warning</VueTag>
        <VueTag type="error">Error</VueTag>
        <VueTag shape="round">Rounded</VueTag>
        <VueTag shape="pill">Pill</VueTag>
      </VueFlexRow>
    </section>

    <VueDivider />

    <!-- Text Utilities -->
    <section class="component-section">
      <h2>Text Utilities</h2>

      <h3 class="subsection-title">Mark (Highlight)</h3>
      <p>
        This text has <VueMark>highlighted content</VueMark> using the Mark component.
      </p>
      <p>
        You can also use different colors:
        <VueMark type="success">success</VueMark>,
        <VueMark type="info">info</VueMark>,
        <VueMark type="warning">warning</VueMark>,
        <VueMark type="error">error</VueMark>
      </p>
    </section>

    <VueDivider />

    <!-- Layout -->
    <section class="component-section">
      <h2>Layout - Flex</h2>

      <h3 class="subsection-title">Horizontal Layout</h3>
      <VueFlexRow gap="md">
        <VueCard style="flex: 1">
          <p>Item 1</p>
        </VueCard>
        <VueCard style="flex: 1">
          <p>Item 2</p>
        </VueCard>
        <VueCard style="flex: 1">
          <p>Item 3</p>
        </VueCard>
      </VueFlexRow>

      <h3 class="subsection-title">Vertical Layout</h3>
      <VueFlexRow
        direction="column"
        gap="md"
      >
        <VueCard>
          <p>Stacked Item 1</p>
        </VueCard>
        <VueCard>
          <p>Stacked Item 2</p>
        </VueCard>
        <VueCard>
          <p>Stacked Item 3</p>
        </VueCard>
      </VueFlexRow>

      <h3 class="subsection-title">Alignment Examples</h3>
      <VueFlexRow
        justify="center"
        align="center"
        gap="md"
        class="flex-demo-box"
      >
        <VueBadge variant="info">Centered</VueBadge>
        <VueBadge variant="info">Centered</VueBadge>
      </VueFlexRow>

      <VueFlexRow
        justify="space-between"
        align="center"
        class="flex-demo-box"
      >
        <VueBadge variant="info">Start</VueBadge>
        <VueBadge variant="info">Space Between</VueBadge>
        <VueBadge variant="info">End</VueBadge>
      </VueFlexRow>
    </section>

    <VueDivider />

    <!-- Dividers -->
    <section class="component-section">
      <h2>Dividers</h2>
      <p>Horizontal divider (default):</p>
      <VueDivider />
      <p>Divider with content:</p>
      <VueDivider>OR</VueDivider>
      <p>Divider with different alignment:</p>
      <VueDivider justify="start">Start</VueDivider>
      <VueDivider justify="end">End</VueDivider>
    </section>

    <footer class="kitchen-sink-footer">
      <VueDivider />
      <p class="footer-text">
        Built with AgnosticUI v2 • Vue Framework
      </p>
    </footer>
  </div>
</template>

<style scoped>
.mbe1 {
  margin-block-end: var(--ag-space-1);
}
.mbe2 {
  margin-block-end: var(--ag-space-2);
}
.mbe3 {
  margin-block-end: var(--ag-space-3);
}
.mbe4 {
  margin-block-end: var(--ag-space-4);
}
.mis1 {
  margin-inline-start: var(--ag-space-1);
}
.mis2 {
  margin-inline-start: var(--ag-space-2);
}
.mis3 {
  margin-inline-start: var(--ag-space-3);
}
.mis4 {
  margin-inline-start: var(--ag-space-4);
}
.demo-box {
  padding: 1rem;
  margin-inline-end: var(--ag-space-2);
  margin-block-end: var(--ag-space-2);
  background: var(--ag-blue-100);
  border: 1px solid var(--ag-blue-300);
  border-radius: 3px;
  text-align: center;
  font-size: 0.875rem;
  color: var(--ag-neutral-900);
}

.demo-box-primary {
  background: var(--ag-blue-100);
  border-color: var(--ag-blue-300);
  color: var(--ag-neutral-900);
}
</style>
