<template>
  <section>
    <div class="mbe4">
      <h3>Basic Select</h3>
      <p class="mbs2 mbe3">
        A standard select dropdown with custom styling.
      </p>
    </div>
    <div class="mbe4">
      <label for="tennis-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
        Greatest Tennis Player
      </label>
      <VueSelect id="tennis-select" name="tennis" style="max-width: 400px;">
        <option value="">- Select a player -</option>
        <option value="andre">Andre Agassi</option>
        <option value="serena">Serena Williams</option>
        <option value="roger">Roger Federer</option>
        <option value="mac">John McEnroe</option>
        <option value="martina">Martina Navratilova</option>
        <option value="rafa">Rafael Nadal</option>
        <option value="borg">Bjorn Borg</option>
        <option value="althea">Althea Gibson</option>
      </VueSelect>
    </div>

    <div class="mbe4">
      <h3>Size Variants</h3>
      <p class="mbs2 mbe3">
        The Select component comes in three sizes: small, default, and large.
      </p>
    </div>
    <div class="mbe4" style="max-width: 400px;">
      <div class="mbe3">
        <label for="small-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
          Small Select
        </label>
        <VueSelect id="small-select" size="small" name="small">
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </VueSelect>
      </div>

      <div class="mbe3">
        <label for="default-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
          Default Select
        </label>
        <VueSelect id="default-select" name="default">
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </VueSelect>
      </div>

      <div class="mbe3">
        <label for="large-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
          Large Select
        </label>
        <VueSelect id="large-select" size="large" name="large">
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </VueSelect>
      </div>
    </div>

    <div class="mbe4">
      <h3>Disabled State</h3>
      <p class="mbs2 mbe3">
        Selects can be disabled to prevent user interaction.
      </p>
    </div>
    <div class="mbe4" style="max-width: 400px;">
      <label for="disabled-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
        Disabled Select
      </label>
      <VueSelect id="disabled-select" :disabled="true" name="disabled">
        <option value="">Cannot select</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </VueSelect>
    </div>

    <div class="mbe4">
      <h3>Multiple Selection</h3>
      <p class="mbs2 mbe3">
        Enable multiple selection mode with the <code>multiple</code> prop. Use Ctrl/Cmd + Click to select multiple options.
      </p>
    </div>
    <div class="mbe4" style="max-width: 400px;">
      <label for="multiple-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
        Favorite Tennis Players (Select Multiple)
      </label>
      <VueSelect
        id="multiple-select"
        :multiple="true"
        :multiple-size="6"
        name="multiple"
      >
        <option value="andre">Andre Agassi</option>
        <option value="serena">Serena Williams</option>
        <option value="roger">Roger Federer</option>
        <option value="mac">John McEnroe</option>
        <option value="martina">Martina Navratilova</option>
        <option value="rafa">Rafael Nadal</option>
        <option value="borg">Bjorn Borg</option>
        <option value="althea">Althea Gibson</option>
      </VueSelect>
    </div>

    <div class="mbe4">
      <h3>With Change Handler</h3>
      <p class="mbs2 mbe3">
        Listen to selection changes with the <code>@change</code> event.
      </p>
    </div>
    <div class="mbe4" style="max-width: 400px;">
      <label for="change-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
        Select a Fruit
      </label>
      <VueSelect
        id="change-select"
        name="fruit"
        @change="handleChange"
      >
        <option value="">Choose a fruit</option>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
        <option value="grape">Grape</option>
      </VueSelect>
      <p v-if="selectedFruit" style="margin-top: 0.75rem; padding: 0.75rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md);">
        You selected: <strong>{{ selectedFruit }}</strong>
      </p>
    </div>

    <div class="mbe4">
      <h3>With v-model</h3>
      <p class="mbs2 mbe3">
        Use <code>v-model:value</code> for two-way data binding.
      </p>
    </div>
    <div class="mbe4" style="max-width: 400px;">
      <label for="vmodel-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
        Choose Your Favorite Color
      </label>
      <VueSelect
        id="vmodel-select"
        name="color"
        v-model:value="selectedColor"
      >
        <option value="">Choose a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="purple">Purple</option>
      </VueSelect>
      <p v-if="selectedColor" style="margin-top: 0.75rem; padding: 0.75rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md);">
        Your favorite color is: <strong>{{ selectedColor }}</strong>
      </p>
    </div>

    <div class="mbe4">
      <h3>Multiple Selection with v-model</h3>
      <p class="mbs2 mbe3">
        Use <code>v-model:value</code> with <code>multiple</code> to manage an array of selected values.
      </p>
    </div>
    <div class="mbe4" style="max-width: 400px;">
      <label for="vmodel-multiple-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
        Select Your Favorite Sports (Ctrl/Cmd + Click)
      </label>
      <VueSelect
        id="vmodel-multiple-select"
        name="sports"
        v-model:value="selectedSports"
        :multiple="true"
        :multiple-size="5"
      >
        <option value="tennis">Tennis</option>
        <option value="football">Football</option>
        <option value="basketball">Basketball</option>
        <option value="baseball">Baseball</option>
        <option value="soccer">Soccer</option>
      </VueSelect>
      <p v-if="selectedSports.length > 0" style="margin-top: 0.75rem; padding: 0.75rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md);">
        You selected <strong>{{ selectedSports.length }}</strong> sport(s): {{ selectedSports.join(', ') }}
      </p>
    </div>

    <div class="mbe4">
      <h3>Event Handling</h3>
      <p class="mbs2 mbe3">
        The Select component fires multiple events: <code>@change</code>, <code>@focus</code>, <code>@blur</code>, and <code>@click</code>.
      </p>
    </div>
    <div class="mbe4" style="max-width: 600px;">
      <label for="event-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
        Interact with this select to see events
      </label>
      <VueSelect
        id="event-select"
        name="events"
        @change="handleEventChange"
        @focus="handleFocus"
        @blur="handleBlur"
        @click="handleClick"
      >
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </VueSelect>
      <div v-if="eventLog.length > 0" style="margin-top: 0.75rem; padding: 0.75rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md);">
        <strong>Event Log (most recent first):</strong>
        <div style="margin-top: 0.5rem; font-family: monospace; font-size: 0.875rem; line-height: 1.6;">
          <div v-for="(event, index) in eventLog" :key="index">{{ event }}</div>
        </div>
      </div>
    </div>

    <div class="mbe4">
      <h3>External Label Support</h3>
      <p class="mbs2 mbe3">
        The Select component supports external labels with helper text, required fields, and validation states.
      </p>
    </div>
    <div class="mbe4" style="max-width: 400px;">
      <div class="mbe3">
        <VueSelect
          label="Favorite Framework"
          name="framework"
        >
          <option value="">Choose a framework</option>
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="angular">Angular</option>
          <option value="svelte">Svelte</option>
        </VueSelect>
      </div>

      <div class="mbe3">
        <VueSelect
          label="Country"
          help-text="Select your country of residence"
          name="country"
        >
          <option value="">Select a country</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
          <option value="au">Australia</option>
        </VueSelect>
      </div>

      <div class="mbe3">
        <VueSelect
          label="Preferred Language"
          :required="true"
          help-text="This field is required"
          name="language"
        >
          <option value="">Select a language</option>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </VueSelect>
      </div>

      <div class="mbe3">
        <VueSelect
          label="Payment Method"
          :required="true"
          :invalid="true"
          error-message="Please select a payment method to continue"
          name="payment"
        >
          <option value="">Select payment method</option>
          <option value="credit">Credit Card</option>
          <option value="debit">Debit Card</option>
          <option value="paypal">PayPal</option>
        </VueSelect>
      </div>
    </div>

    <div class="mbe4">
      <h3>Label Positioning</h3>
      <p class="mbs2 mbe3">
        Control label position with <code>label-position</code>: 'top' (default), 'start', 'end', or 'bottom'.
        <strong>Note:</strong> 'bottom' is not recommended as the dropdown will cover the label.
      </p>
    </div>
    <div class="mbe4" style="max-width: 600px;">
      <div class="mbe3">
        <VueSelect
          label="Top Label (Default)"
          label-position="top"
          name="pos-top"
        >
          <option value="">Select option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </VueSelect>
      </div>

      <div class="mbe3">
        <VueSelect
          label="Start Position"
          label-position="start"
          name="pos-start"
        >
          <option value="">Select option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </VueSelect>
      </div>

      <div class="mbe3">
        <VueSelect
          label="End Position"
          label-position="end"
          name="pos-end"
        >
          <option value="">Select option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </VueSelect>
      </div>

      <div class="mbe3">
        <VueSelect
          label="Bottom Position (Not Recommended)"
          label-position="bottom"
          name="pos-bottom"
          help-text="The dropdown will cover this label when opened"
        >
          <option value="">Select option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </VueSelect>
      </div>
    </div>

    <div class="mbe4">
      <h3>CSS Shadow Parts Customization</h3>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize the select's appearance.
      </p>
    </div>
    <div class="mbe4" style="max-width: 400px;">
      <label for="custom-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
        Custom Styled Select
      </label>
      <VueSelect
        id="custom-select"
        name="custom"
        class="custom-select"
      >
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="purple">Purple</option>
      </VueSelect>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { VueSelect } from 'agnosticui-core/select/vue';

export default defineComponent({
  name: 'SelectExamples',
  components: {
    VueSelect,
  },
  setup() {
    // Basic @change example
    const selectedFruit = ref('');

    // Vue wrapper emits detail payload directly, not full CustomEvent
    const handleChange = (detail: { value: string | string[] }) => {
      selectedFruit.value = detail.value as string;
    };

    // v-model examples
    const selectedColor = ref('');
    const selectedSports = ref<string[]>([]);

    // Event logging example
    const eventLog = ref<string[]>([]);

    const logEvent = (message: string) => {
      eventLog.value.unshift(message);
      if (eventLog.value.length > 8) eventLog.value.pop();
    };

    const handleEventChange = (detail: { value: string | string[] }) => {
      logEvent(`@change - value: ${detail.value}`);
    };

    const handleFocus = () => {
      logEvent('@focus');
    };

    const handleBlur = () => {
      logEvent('@blur');
    };

    const handleClick = () => {
      logEvent('@click');
    };

    return {
      selectedFruit,
      handleChange,
      selectedColor,
      selectedSports,
      eventLog,
      handleEventChange,
      handleFocus,
      handleBlur,
      handleClick,
    };
  },
});
</script>

<style scoped>
.custom-select::part(ag-select) {
  border: 2px solid var(--ag-primary);
  border-radius: var(--ag-radius-lg);
  font-weight: 500;
  background-color: var(--ag-background-secondary);
}

.custom-select::part(ag-select):focus {
  border-color: var(--ag-primary-dark);
  box-shadow: 0 0 0 3px var(--ag-blue-100);
}
</style>
