<template>
  <section class="signup">
    <div class="h2">{{t("signup")}}</div>
    <p class="mbe24">{{t("createAccount")}}<a
        class="loginlink"
        href="#"
      >{{t("login")}}</a></p>
    <form @submit.prevent>
      <Input
        id="uname-vue"
        name="usernameVue"
        :label="t('username')"
        v-model="formState.usernameVue"
        @change="($event) => handleChange('usernameVue', $event)"
        autocomplete="username"
        @blur="handleBlur('usernameVue')"
        :isInvalid="result.hasErrors('usernameVue')"
        :invalidText="result.getErrors('usernameVue').join(' ')"
      />
      <div class="mbs12"></div>
      <Input
        id="pword-vue"
        name="passwordVue"
        :label="t('password')"
        :type="textIsVisible ? 'text' : 'password'"
        autocomplete="new-password"
        v-model="formState.passwordVue"
        @change="($event) => handleChange('passwordVue', $event)"
        @blur="handleBlur('passwordVue')"
        :isInvalid="result.hasErrors('passwordVue')"
        :invalidText="`${result.getErrors('passwordVue').join(' ')} ${result.getWarnings('passwordVue').join(' ')}`"
        hasRightAddon
      >
      <template #addonRight>
        <InputAddonItem addon-right>
          <Button
            is-blank
            @click="toggleTextVisibility()"
          >
            <span class="screenreader-only">{{t('passwordVisibilityToggle')}}</span>
            <EyeClosed v-if="textIsVisible" />
            <EyeOpen v-else />
          </Button>
        </InputAddonItem>
      </template>
      </Input>
      <div class="mbs12"></div>
      <Input
        id="confirm-vue"
        name="confirmVue"
        :label="t('confirm')"
        :type="textIsVisibleConfirm ? 'text' : 'password'"
        autocomplete="new-password-confirm"
        v-model="formState.confirmVue"
        @change="($event) => handleChange('confirmVue', $event)"
        @blur="handleBlur('confirmVue')"
        :isInvalid="result.hasErrors('confirmVue')"
        :invalidText="result.getErrors('confirmVue').join(' ')"
        hasRightAddon
      >
      <template #addonRight>
        <InputAddonItem addon-right>
          <Button
            is-blank
            @click="toggleTextVisibilityConfirm()"
          >
            <span class="screenreader-only">{{t('confirmPasswordVisibilityToggle')}}</span>
            <EyeClosed v-if="textIsVisibleConfirm" />
            <EyeOpen v-else />
          </Button>
        </InputAddonItem>
      </template>
      </Input>
      <div class="mbs12"></div>
      <ChoiceInput
        id="agrees-vue"
        type="checkbox"
        :checkedOptions="checked"
        :isFieldset="false"
        :legendLabel="t('agreeTOS')"
        :isInvalid="result.hasErrors('tosVue')"
        :options="checkboxOptions"
        @change="handleCheckbox($event)"
      />
      <div class="mbs32"></div>
      <Button
        type="submit"
        mode="primary"
        @click="handleSubmit()"
        size="large"
        :isDisabled="!result.isValid()"
      >Submit</Button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";

// Nanostores
import { useStore } from "@nanostores/vue";
import { language } from "../../store/language";
import { i18n, getI18n } from "../../store/i18n";

// Components CSS
import "agnostic-vue/dist/index.css";
import { Card, Input, InputAddonItem, Button, ChoiceInput } from "agnostic-vue";

import EyeClosed from "./icons/EyeClosed.vue";
import EyeOpen from "./icons/EyeOpen.vue";
import suiteVue from "./suiteVue";

// When language gets updated, useStore will cause currentLanguage to
// update and that will cause Vue to rerender
const currentLanguage = useStore(language);

const t = (key: string) => {
  const dereferenced = currentLanguage.value;
  const lang = dereferenced?.value || "en_US";
  return getI18n(lang, key);
};

const passwordVue = ref("");
const usernameVue = ref("");

const log = (message, extra) => {
  console.log(message, extra);
};

let touched = {
  tosVue: false,
  usernameVue: false,
  passwordVue: false,
  confirmVue: false,
};

let formState = {};
let result = ref(null);
result.value = suiteVue.get();
let checked = [];

const checkboxOptions = computed(() => {
  const dereferenced = currentLanguage.value;
  const lang = dereferenced?.value || "en_US";
  const resolvedLabel = getI18n(lang, "agreeTOS");
  return [
    {
      name: "tosVue",
      value: "tosVue",
      label: resolvedLabel,
    },
  ];
});

const validate = (fieldName) => {
  if (touched[fieldName]) {
    result.value = suiteVue(formState, fieldName, t);
    result.value.done((res) => {
      result.value = res;
    });
  }
};

/**
 * Anytime the current language is changed, we want to react and revalidate
 * all the fields. Since validate will ensure the field has first been "touched"
 * before validating it will only revalidate fields it should. The motive for this
 * is essentially if we have error hints in English, then select Spanish, we want
 * those errors to be updated into Spanish.
 */
watch(currentLanguage, () => {
  const fields = Object.keys(touched);
  fields.forEach((field) => validate(field));
});

const updateState = (fieldName, value) => {
  formState[fieldName] = value;
};

/**
 * Blurring field makes it "touched" and candidate for validation
 */
const handleBlur = (name) => {
  if (touched[name] === false) {
    touched[name] = true;
    // First time this field is considered "touched" e.g. user just tab'd or clicked out
    // of the field. As such, we now need to validate said field for the first time!
    validate(name);
  }
};

const handleCheckbox = (checkedItems) => {
  // Since often user will simply click (not TAB then SPACE select
  // checked) we consider any interaction w/checkbox as now "touched"
  touched.tosVue = true;
  checked = [];
  formState.tosVue = false;
  if (checked.length) {
    formState.tosVue = true;
    checked = ["tosVue"];
  }
  updateState("tosVue", !!checkedItems.length);
  validate("tosVue", !!checkedItems.length);
};

const handleChange = (name, ev) => {
  const value = ev.target.value;
  updateState(name, value);
  validate(name);
};

let textIsVisible = ref(false);
const toggleTextVisibility = () => {
  textIsVisible.value = !textIsVisible.value;
};

let textIsVisibleConfirm = ref(false);
const toggleTextVisibilityConfirm = () => {
  textIsVisibleConfirm.value = !textIsVisibleConfirm.value;
};

const handleSubmit = (e) => log("handleSubmit called...", e);
</script>
<style scoped>
.h2 {
  font-family: Cochin, Georgia, "Times New Roman", serif;
  letter-spacing: 0.03rem;
}

.loginlink {
  color: var(--agnostic-dark);
  font-weight: 700;
}
.password-eye-btn :global(svg) {
  color: var(--neutral-x-dark);
}
.password-eye-btn {
  opacity: 75%;
  transition: opacity var(--agnostic-timing-medium);
}

.password-eye-btn:hover {
  opacity: 100%;
}
</style>
