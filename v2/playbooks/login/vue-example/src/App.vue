<script setup lang="ts">
import { ref } from 'vue';
import { Mail, Lock } from 'lucide-vue-next';
import VueButton from './components/ag/Button/vue/VueButton.vue';
import VueInput from './components/ag/Input/vue/VueInput.vue';
import VueCard from './components/ag/Card/vue/VueCard.vue';
import VueLink from './components/ag/Link/vue/VueLink.vue';
import VueCheckbox from './components/ag/Checkbox/vue/VueCheckbox.vue';
import VueDivider from './components/ag/Divider/vue/VueDivider.vue';

const email = ref('');
const password = ref('');
const rememberMe = ref(false);

const handleSubmit = (e: Event) => {
  e.preventDefault();
  console.log('Login submitted:', {
    email: email.value,
    password: password.value,
    rememberMe: rememberMe.value
  });
};
</script>

<template>
  <div class="login-page">
    <!-- Left Column - Form -->
    <div class="login-column-left">
      <!-- Card wrapper for tablet only -->
      <div class="login-card-wrapper">
        <VueCard class="login-card">
          <form class="login-form" @submit="handleSubmit">
            <!-- Logo -->
            <div class="login-logo">
              <img src="/logo.svg" alt="AgnosticUI" />
            </div>

            <!-- Title -->
            <h1 class="login-title">Welcome back!</h1>

            <!-- Email Field -->
            <div class="form-field">
              <VueInput
                v-model:value="email"
                label="Email"
                type="email"
                placeholder="Enter your email"
              >
                <template #addon-left>
                  <span class="input-icon">
                    <Mail :size="18" style="color: var(--ag-text-secondary)" />
                  </span>
                </template>
              </VueInput>
            </div>

            <!-- Password Field -->
            <div class="form-field">
              <VueInput
                v-model:value="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
              >
                <template #addon-left>
                  <span class="input-icon">
                    <Lock :size="18" style="color: var(--ag-text-secondary)" />
                  </span>
                </template>
              </VueInput>
            </div>

            <!-- Auxiliary Row -->
            <div class="auxiliary-row">
              <VueCheckbox :checked="rememberMe" @update:checked="rememberMe = $event">
                Remember me
              </VueCheckbox>
              <VueLink href="#" variant="monochrome">
                Forgot password?
              </VueLink>
            </div>

            <!-- Login Button -->
            <div class="login-button">
              <VueButton type="submit" variant="monochrome" shape="rounded">
                Login
              </VueButton>
            </div>

            <!-- Divider -->
            <VueDivider>or</VueDivider>

            <!-- Social Login Buttons -->
            <div class="social-buttons">
              <div class="social-button">
                <VueButton bordered shape="rounded">
                  <img src="/facebook-icon.svg" alt="" class="social-icon" />
                  Facebook
                </VueButton>
              </div>
              <div class="social-button">
                <VueButton bordered shape="rounded">
                  <img src="/google-icon.svg" alt="" class="social-icon" />
                  Google
                </VueButton>
              </div>
            </div>

            <!-- Footer -->
            <p class="login-footer">
              Don't have an account?
              <VueLink href="#" variant="primary">
                Sign up
              </VueLink>
            </p>
          </form>
        </VueCard>
      </div>

      <!-- Direct form wrapper for mobile and desktop -->
      <div class="login-form-wrapper">
        <form class="login-form" @submit="handleSubmit">
          <!-- Logo -->
          <div class="login-logo">
            <img src="/logo.svg" alt="AgnosticUI" />
          </div>

          <!-- Title -->
          <h1 class="login-title">Welcome back!</h1>

          <!-- Email Field -->
          <div class="form-field">
            <VueInput
              v-model:value="email"
              label="Email"
              type="email"
              placeholder="Enter your email"
            >
              <template #addon-left>
                <span class="input-icon">
                  <Mail :size="18" style="color: var(--ag-text-secondary)" />
                </span>
              </template>
            </VueInput>
          </div>

          <!-- Password Field -->
          <div class="form-field">
            <VueInput
              v-model:value="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
            >
              <template #addon-left>
                <span class="input-icon">
                  <Lock :size="18" style="color: var(--ag-text-secondary)" />
                </span>
              </template>
            </VueInput>
          </div>

          <!-- Auxiliary Row -->
          <div class="auxiliary-row">
            <VueCheckbox v-model:checked="rememberMe">
              Remember me
            </VueCheckbox>
            <VueLink href="#" variant="monochrome">
              Forgot password?
            </VueLink>
          </div>

          <!-- Login Button -->
          <div class="login-button">
            <VueButton type="submit" variant="monochrome" shape="rounded">
              Login
            </VueButton>
          </div>

          <!-- Divider -->
          <VueDivider>or</VueDivider>

          <!-- Social Login Buttons -->
          <div class="social-buttons">
            <div class="social-button">
              <VueButton bordered shape="rounded">
                <img src="/facebook-icon.svg" alt="" class="social-icon" />
                Facebook
              </VueButton>
            </div>
            <div class="social-button">
              <VueButton bordered shape="rounded">
                <img src="/google-icon.svg" alt="" class="social-icon" />
                Google
              </VueButton>
            </div>
          </div>

          <!-- Footer -->
          <p class="login-footer">
            Don't have an account?
            <VueLink href="#" variant="primary">
              Sign up
            </VueLink>
          </p>
        </form>
      </div>
    </div>

    <!-- Right Column - Background Image (desktop only) -->
    <div class="login-column-right">
      <picture>
        <source media="(min-width: 768px)" srcset="/login-bg.jpg" />
        <img
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          alt=""
          class="login-bg-image"
        />
      </picture>
    </div>

    <!-- Full-screen background for tablet -->
    <div class="tablet-background">
      <img src="/login-bg.jpg" alt="" />
    </div>
  </div>
</template>
