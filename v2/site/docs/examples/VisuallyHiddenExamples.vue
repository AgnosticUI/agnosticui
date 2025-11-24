<template>
  <section>
    <div class="mbe4">
      <h3 class="mbs1 mbe3">Visually Hidden Usage</h3>
      <p class="mbe3">
        The <code>VisuallyHidden</code> component will hide content from the screen,
        but the content will still be available to screen readers. This is useful
        for accessibility, for example, providing a text label for an icon-only button.
      </p>
      <p>
        In the example below, we have a button with a "Close" icon. Sighted users
        can see the icon, and screen reader users will hear the text "Close".
      </p>
    </div>
    <div class="flex-inline-center mbe4">
      <button class="btn btn-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
        <VueVisuallyHidden>Close</VueVisuallyHidden>
      </button>
    </div>
    <div class="mbe4">
      <p>
        You can also use it to provide additional context that might be obvious
        to sighted users but not to screen reader users.
      </p>
    </div>
    <div class="mbe4">
      <p>
        New post<VueVisuallyHidden> (opens in a new window)</VueVisuallyHidden>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { VueVisuallyHidden } from 'agnosticui-core/visually-hidden/vue';
</script>