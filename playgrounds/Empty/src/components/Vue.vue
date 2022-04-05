<template>
  <section class="mbe40">
    <div class="h4 mbe32 flex items-center">
      <img
        width="24"
        height="24"
        src="/assets/Vue-icon.svg"
        alt="Vue logo"
        class="mie12"
      />Vue 3 EmptyState
    </div>
    <EmptyState
      isRounded
      isBordered
    >
      <template #header>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#999"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
          />
        </svg>
      </template>
      <template #body>
        <div class="h4">
          No connections yet
        </div>
        <p
          class="mbe16"
          style="color: var(--agnostic-gray-dark);"
        >
          Click below to add some friends
        </p>
      </template>
      <template #footer>
        <Button
          isRounded
          mode="primary"
        >Invite friend</Button>
      </template>
    </EmptyState>
    <div class="mbe24" />
    <EmptyState
      isRounded
      isBackground
    >
      <template #header>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#999"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
          />
        </svg>
      </template>
      <template #body>
        <div class="h4">
          No connections yet
        </div>
        <p
          class="mbe16"
          style="color: var(--agnostic-gray-dark);"
        >
          Click below to add some friends
        </p>
      </template>
      <template #footer>
        <Button
          isRounded
          mode="primary"
        >Invite friend</Button>
      </template>
    </EmptyState>
  </section>
</template>

<script setup>
// Components CSS
import "agnostic-vue/dist/index.css";
import { Button, EmptyState } from "agnostic-vue";
</script>
