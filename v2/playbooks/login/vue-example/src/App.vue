<script setup lang="ts">
import { ref } from 'vue';
import { Mail, Lock } from 'lucide-vue-next';
import SkinSwitcher from './SkinSwitcher.vue';
import VueButton from './components/ag/Button/vue/VueButton.vue';
import VueInput from './components/ag/Input/vue/VueInput.vue';
import VueCard from './components/ag/Card/vue/VueCard.vue';
import VueLink from './components/ag/Link/vue/VueLink.vue';
import VueCheckbox from './components/ag/Checkbox/vue/VueCheckbox.vue';
import VueDivider from './components/ag/Divider/vue/VueDivider.vue';
import VueImage from './components/ag/Image/vue/VueImage.vue';

const email = ref('');
const password = ref('');
const rememberMe = ref(false);

// Responsive background image sources - only load on tablet and desktop
const bgImageSources = [
  {
    srcset: '/login-bg.jpg',
    media: '(min-width: 768px)',
  },
];
</script>

<template>
  <div class="login-page">
    <!-- Mobile: Form only on white background -->
    <div class="login-form-wrapper">
      <div class="login-column-left">
        <form class="login-form" @submit.prevent>
          <div class="login-logo">
            <img src="/logo.svg" alt="Logo" />
          </div>

          <h1 class="login-title">Welcome back!</h1>

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
              Login
            </VueButton>
          </div>

          <VueDivider>or</VueDivider>

          <div class="social-buttons">
            <div class="social-button">
              <VueButton :full-width="true" bordered shape="rounded">
                <img src="/facebook-icon.svg" alt="" class="social-icon" />
                Facebook
              </VueButton>
            </div>
            <div class="social-button">
              <VueButton :full-width="true" bordered shape="rounded">
                <img src="/google-icon.svg" alt="" class="social-icon" />
                Google
              </VueButton>
            </div>
          </div>

          <p class="login-footer">
            Don't have an account? <VueLink href="#" variant="primary">Sign up</VueLink>
          </p>
        </form>
      </div>
    </div>

    <!-- Tablet: Card floating on background image -->
    <div class="login-card-wrapper">
      <div class="login-card">
        <VueCard rounded="md">
          <form class="login-form" @submit.prevent>
            <div class="login-logo">
              <img src="/logo.svg" alt="Logo" />
            </div>

            <h1 class="login-title">Welcome back!</h1>

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
                Login
              </VueButton>
            </div>

            <VueDivider>or</VueDivider>

            <div class="social-buttons">
              <div class="social-button">
                <VueButton :full-width="true" bordered shape="rounded">
                  <img src="/facebook-icon.svg" alt="" class="social-icon" />
                  Facebook
                </VueButton>
              </div>
              <div class="social-button">
                <VueButton :full-width="true" bordered shape="rounded">
                  <img src="/google-icon.svg" alt="" class="social-icon" />
                  Google
                </VueButton>
              </div>
            </div>

            <p class="login-footer">
              Don't have an account? <VueLink href="#" variant="primary">Sign up</VueLink>
            </p>
          </form>
        </VueCard>
      </div>
    </div>

    <!-- Right Column - Background Image (desktop only) -->
    <div class="login-column-right">
      <VueImage
        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        alt=""
        :sources="bgImageSources"
        class="login-bg-image"
        fit="cover"
      />
    </div>

    <!-- Full-screen background for tablet -->
    <div class="tablet-background">
      <VueImage
        src="/login-bg.jpg"
        alt=""
        class="tablet-bg-image"
        fit="cover"
      />
    </div>

    <SkinSwitcher />
  </div>
</template>
