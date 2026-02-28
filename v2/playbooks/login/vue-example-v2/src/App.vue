<script setup lang="ts">
import { ref } from 'vue';
import { Mail, Lock } from 'lucide-vue-next';
import VueButton from './components/ag/Button/vue/VueButton.vue';
import VueInput from './components/ag/Input/vue/VueInput.vue';
import VueCard from './components/ag/Card/vue/VueCard.vue';
import VueLink from './components/ag/Link/vue/VueLink.vue';
import VueCheckbox from './components/ag/Checkbox/vue/VueCheckbox.vue';
import VueDivider from './components/ag/Divider/vue/VueDivider.vue';
import SkinSwitcher from './SkinSwitcher.vue';

const email = ref('');
const password = ref('');
const rememberMe = ref(false);
const dark = ref(document.documentElement.getAttribute('data-theme') === 'dark');

function toggleTheme() {
  dark.value = !dark.value;
  document.documentElement.setAttribute('data-theme', dark.value ? 'dark' : '');
  localStorage.setItem('ag-theme', dark.value ? 'dark' : '');
}
</script>

<template>
  <div class="login-page">
    <!-- Header — dark mode toggle -->
    <header class="login-header">
      <button
        class="theme-toggle"
        @click="toggleTheme"
        :aria-label="dark ? 'Switch to light mode' : 'Switch to dark mode'"
      >
        <svg v-if="dark" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
      </button>
    </header>

    <span class="bg-shape bg-shape--1" aria-hidden="true" />
    <span class="bg-shape bg-shape--2" aria-hidden="true" />
    <span class="bg-shape bg-shape--3" aria-hidden="true" />
    <span class="bg-shape bg-shape--4" aria-hidden="true" />

    <div class="login-card">
      <VueCard rounded="md">
        <form @submit.prevent>
          <div class="login-logo">
            <img :src="dark ? '/logo-dark-mode.svg' : '/logo.svg'" alt="Logo" />
          </div>

          <h1 class="login-title">Welcome back!</h1>
          <p class="login-subtitle">Please enter your details to login.</p>

          <!-- SSO Buttons — side-by-side, above credential fields -->
          <div class="sso-buttons">
            <VueButton :full-width="true" bordered shape="rounded">
              <img src="/google-icon.svg" alt="" class="social-icon" />
              Google
            </VueButton>
            <VueButton :full-width="true" bordered shape="rounded">
              <img src="/facebook-icon.svg" alt="" class="social-icon" />
              Facebook
            </VueButton>
          </div>

          <VueDivider>or</VueDivider>

          <div class="form-field">
            <VueInput
              v-model:value="email"
              label="Email"
              type="email"
              rounded
              placeholder="Enter your email"
            >
              <template #addon-left>
                <span class="input-icon">
                  <Mail :size="18" />
                </span>
              </template>
            </VueInput>
          </div>

          <div class="form-field">
            <VueInput
              v-model:value="password"
              label="Password"
              type="password"
              rounded
              placeholder="Enter your password"
            >
              <template #addon-left>
                <span class="input-icon">
                  <Lock :size="18" />
                </span>
              </template>
            </VueInput>
          </div>

          <div class="auxiliary-row">
            <VueCheckbox :checked="rememberMe" @update:checked="rememberMe = $event">
              Remember me
            </VueCheckbox>
            <VueLink href="#" variant="monochrome">Forgot password?</VueLink>
          </div>

          <div class="login-button">
            <VueButton :full-width="true" type="submit" variant="monochrome" shape="rounded">
              Log In
            </VueButton>
          </div>

          <p class="login-footer">
            Don't have an account?
            <VueLink href="#" variant="primary">Sign up</VueLink>
          </p>
        </form>
      </VueCard>
    </div>

    <SkinSwitcher />
  </div>
</template>
