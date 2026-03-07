<script setup lang="ts">
import VueAvatar from '../src/components/ag/Avatar/vue/VueAvatar.vue';
import VueImage from '../src/components/ag/Image/vue/VueImage.vue';
import VueIcon from '../src/components/ag/Icon/vue/VueIcon.vue';
import VueTag from '../src/components/ag/Tag/vue/VueTag.vue';
import VueMark from '../src/components/ag/Mark/vue/VueMark.vue';
import VueKbd from '../src/components/ag/Kbd/vue/VueKbd.vue';
import VueIntlFormatter from '../src/components/ag/IntlFormatter/vue/VueIntlFormatter.vue';
import VueTimeline from '../src/components/ag/Timeline/vue/Timeline.vue';
import VueTimelineItem from '../src/components/ag/Timeline/vue/TimelineItem.vue';
import VueMessageBubble from '../src/components/ag/MessageBubble/vue/VueMessageBubble.vue';
import VueEmptyState from '../src/components/ag/EmptyState/vue/VueEmptyState.vue';
import VueVisuallyHidden from '../src/components/ag/VisuallyHidden/vue/VueVisuallyHidden.vue';
import VueScrollProgress from '../src/components/ag/ScrollProgress/vue/VueScrollProgress.vue';
import VueScrollToButton from '../src/components/ag/ScrollToButton/vue/VueScrollToButton.vue';

const placeholder = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
</script>

<template>
  <main style="padding: 20px; display: flex; flex-direction: column; gap: 20px">
    <h1>Display</h1>
    <VueAvatar text="AB" />
    <VueImage :src="placeholder" alt="placeholder" :width="200" :height="100" />
    <VueIcon size="md">
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <circle cx="12" cy="12" r="10" />
      </svg>
    </VueIcon>
    <VueTag variant="success">Tag</VueTag>
    <VueMark>Highlighted text</VueMark>
    <VueKbd :bordered="true">Ctrl</VueKbd>
    <VueIntlFormatter type="number" :value="1234567" />
    <VueTimeline aria-label="Demo timeline">
      <VueTimelineItem>
        <template #ag-start>Start</template>
        <template #ag-marker>•</template>
        <template #ag-end>End</template>
      </VueTimelineItem>
    </VueTimeline>
    <VueMessageBubble from="me" message="Hello!" time="12:00" author="Alice" />
    <VueEmptyState />
    <VueVisuallyHidden>Screen reader only</VueVisuallyHidden>
    <VueScrollProgress mode="bar" />
    <VueScrollToButton label="Top" />
  </main>
</template>
