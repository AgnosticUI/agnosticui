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
        Listen to selection changes with the <code>change</code> event.
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
    const selectedFruit = ref('');

    const handleChange = (e: CustomEvent) => {
      selectedFruit.value = e.detail.value;
    };

    return {
      selectedFruit,
      handleChange,
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
