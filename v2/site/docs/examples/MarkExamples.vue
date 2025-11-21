<template>
  <section class="mbe4">
    <h2>Mark Variants</h2>
    <div class="flex flex-wrap items-center">
      <div class="mis3 mie3">
        <VueMark variant="warning">warning</VueMark>
      </div>
      <div class="mis3 mie3">
        <VueMark variant="info">info</VueMark>
      </div>
      <div class="mis3 mie3">
        <VueMark variant="success">success</VueMark>
      </div>
      <div class="mis3 mie3">
        <VueMark variant="error">error</VueMark>
      </div>
      <div class="mis3 mie3">
        <VueMark variant="primary">primary</VueMark>
      </div>
      <div class="mis3 mie3">
        <VueMark variant="secondary">secondary</VueMark>
      </div>
      <div class="mis3 mie3">
        <VueMark variant="monochrome">monochrome</VueMark>
      </div>
    </div>
  </section>
  <section class="mbe4">
    <h2>Reactive Highlighting</h2>
    <div class="flex items-center mbe4">
      <vue-input
        class="full-width"
        v-model:value="searchTerm"
        label="Enter text to highlight"
        type="text"
      />
    </div>
    <div class="flex items-center mbe3">
      <VueToggle
        v-model="caseSensitive"
        label="Case sensitive"
      />
      <span class="mis2">Case sensitive</span>
    </div>
    <div class="flex items-center mbe3">
      <VueToggle
        v-model="matchAll"
        label="Match all"
      />
      <span class="mis2">Match all</span>
    </div>
    <div class="mbe4">
      <p>
        <VueMark
          :search="searchTerm"
          :case-sensitive="caseSensitive"
          :match-all="matchAll"
          variant="warning"
        >
          The quick brown fox jumps over the lazy dog. The lazy fox was not the same as the other fox.
        </VueMark>
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { VueMark } from "agnosticui-core/mark/vue";
import { VueInput } from "agnosticui-core/input/vue";
import { VueToggle } from "agnosticui-core/toggle/vue"; // Corrected import

const searchTerm = ref("fox");
const caseSensitive = ref(false);
const matchAll = ref(true);
</script>
