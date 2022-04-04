<template>
  <section class="mbe40">
    <div class="h4 mbe32 flex items-center">
      <img
        width="24"
        height="24"
        src="/assets/Vue-icon.svg"
        alt="Vue logo"
        class="mie12"
      />Vue 3 Choice Inputs
    </div>
    <ChoiceInput
      id="r1"
      type="radio"
      legend-label="Radio"
      :options="[
        { name: 'solo', value: 'stevie', label: 'Stevie Wonder'},
        { name: 'solo', value: 'whitney', label: 'Whitney Houston' },
        { name: 'solo', value: 'charlie', label: 'Charlie Wilson' }
      ]"
    />
    <ChoiceInput
      id="c1"
      type="checkbox"
      :options="[
        { name: 'bands', value: 'bonjovi', label: 'Bon Jovi'},
        { name: 'bands', value: 'stones', label: 'Rolling Stones' },
        { name: 'bands', value: 'isleybros', label: 'Isley Brothers' }
      ]"
      legend-label="Large"
      size="large"
      is-inline
    />
    <ChoiceInput
      id="c2"
      type="checkbox"
      legend-label="Checkbox with specific options disabled"
      :disabledOptions="['stones', 'isleybros']"
      :options="[{ name: 'bands2', value: 'bonjovi', label: 'Bon Jovi'}, { name: 'bands2', value: 'stones', label: 'Rolling Stones' }, { name: 'bands2', value: 'isleybros', label: 'Isley Brothers' }, { name: 'bands2', value: 'parliament', label: 'Parliament-Funkadelic' }]"
    />
    <div class="mbs24 mbe24">
      <p class="mbe16">Pass <code>false</code> to <code>:is-fieldset</code> (Vue) or
        <code>isFieldset</code> (React, Svelte) to hide the fieldset from sighted
        users. Also, we can use a reactive boolean ref to toggle button's <code>isDisabled</code>:
      </p>
      <ChoiceInput
        id="c3"
        type="checkbox"
        :options="[
          { name: 'tos', value: 'agrees', label: 'I have read and agree to the Terms of Service'},
        ]"
        legend-label="Large"
        size="large"
        :is-fieldset="false"
        @change="toggleTosAgreedTo"
      />
    </div>
    <Button
      mode="primary"
      :is-disabled="!agreedToTos"
    >Submit</Button>
  </section>
</template>

<script setup>
import { ref, onMounted, useCssModule } from "vue";
// Components CSS
import "agnostic-vue/dist/index.css";
import { Button, ChoiceInput } from "agnostic-vue";

let agreedToTos = ref(false);
const toggleTosAgreedTo = () => {
  agreedToTos.value = !agreedToTos.value;
};
</script>
