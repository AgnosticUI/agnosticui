<script setup lang="ts">
import VueAlert from '../src/components/ag/Alert/vue/VueAlert.vue';
import VueToast from '../src/components/ag/Toast/vue/VueToast.vue';
import VueBadge from '../src/components/ag/Badge/vue/VueBadge.vue';
import VueBadgeFx from '../src/components/ag/BadgeFx/vue/VueBadgeFx.vue';
import VueProgress from '../src/components/ag/Progress/vue/VueProgress.vue';
import VueProgressRing from '../src/components/ag/ProgressRing/vue/VueProgressRing.vue';
import VueSpinner from '../src/components/ag/Spinner/vue/VueSpinner.vue';
import VueLoader from '../src/components/ag/Loader/vue/VueLoader.vue';
import VueSkeletonLoader from '../src/components/ag/SkeletonLoader/vue/VueSkeletonLoader.vue';
</script>

<template>
  <main style="padding: 20px; display: flex; flex-direction: column; gap: 20px">
    <h1>Feedback</h1>
    <VueAlert variant="success">Success alert</VueAlert>
    <VueToast :open="true" type="success">Toast message</VueToast>
    <VueBadge :value="5" />
    <VueBadgeFx :value="3" />
    <VueProgress :value="60" label="Progress" />
    <VueProgressRing :value="75" label="75%" />
    <VueSpinner aria-label="Loading" />
    <VueLoader aria-label="Loading content" />
    <VueSkeletonLoader variant="text" width="200px" height="16px" />
  </main>
</template>
