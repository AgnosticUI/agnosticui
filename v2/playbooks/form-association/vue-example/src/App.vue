<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import VueInput from './components/ag/Input/vue/VueInput.vue'
import VueSelectionButtonGroup from './components/ag/SelectionButtonGroup/vue/VueSelectionButtonGroup.vue'
import './components/ag/SelectionButton/core/SelectionButton'
import VueRadio from './components/ag/Radio/vue/VueRadio.vue'
import VueCheckbox from './components/ag/Checkbox/vue/VueCheckbox.vue'
import VueToggle from './components/ag/Toggle/vue/VueToggle.vue'
import VueButton from './components/ag/Button/vue/VueButton.vue'
import VueCard from './components/ag/Card/vue/VueCard.vue'
import VueDivider from './components/ag/Divider/vue/VueDivider.vue'

type FormPayload = Record<string, string>

const formRef = ref<HTMLFormElement | null>(null)
const resultRef = ref<HTMLDivElement | null>(null)
const submissionData = ref<FormPayload | null>(null)

watch(submissionData, (val) => {
  if (val) {
    nextTick(() => resultRef.value?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }
})

function validateAll(form: HTMLFormElement): boolean {
  let valid = true
  for (const el of Array.from(form.elements)) {
    if (typeof (el as HTMLInputElement).reportValidity === 'function') {
      if (!(el as HTMLInputElement).reportValidity()) valid = false
    }
  }
  return valid
}

function handleSubmit(e: Event) {
  e.preventDefault()
  console.log('[handleSubmit] called')
  if (!formRef.value) return

  const elements = Array.from(formRef.value.elements)
  console.log('[handleSubmit] form.elements count:', elements.length)
  elements.forEach((el) => {
    const input = el as HTMLInputElement
    console.log(`  element: tag=${el.tagName} name="${input.name}" value="${input.value}"`)
  })

  // :state() verification — confirms CustomStateSet is wired up correctly
  ;['AG-RADIO', 'AG-CHECKBOX', 'AG-TOGGLE'].forEach((tag) => {
    elements
      .filter((el) => el.tagName === tag)
      .forEach((el) => {
        const e = el as HTMLElement & { name?: string }
        console.log(
          `  ${tag.toLowerCase()} name="${e.name}" :state(checked)=${e.matches(':state(checked)')} :state(invalid)=${e.matches(':state(invalid)')}`
        )
      })
  })

  const valid = validateAll(formRef.value)
  console.log('[handleSubmit] validateAll result:', valid)
  if (!valid) return

  const data = new FormData(formRef.value)
  const entries = [...data.entries()]
  console.log('[handleSubmit] FormData entries:', entries)
  submissionData.value = Object.fromEntries(entries) as FormPayload
}

function handleReset() {
  formRef.value?.reset()
  submissionData.value = null
}
</script>

<template>
  <div style="padding: var(--ag-space-8)">
    <div style="max-width: 540px; margin: 0 auto">
      <VueCard>
        <div style="padding: var(--ag-space-6)">
          <h2 style="margin: 0 0 var(--ag-space-2) 0">Contact Us</h2>
          <VueDivider />
          <form
            ref="formRef"
            @submit.prevent="handleSubmit"
            novalidate
            style="display: flex; flex-direction: column; gap: var(--ag-space-4); margin-top: var(--ag-space-4)"
          >
            <div>
              <VueInput label="Full Name" name="fullName" type="text" :required="true" />
            </div>
            <div>
              <VueInput label="Email Address" name="email" type="email" :required="true" />
            </div>
            <div>
              <VueInput label="Phone" name="phone" type="tel" />
            </div>
            <div>
              <VueInput label="Message" name="message" type="textarea" :required="true" />
            </div>
            <div>
              <VueSelectionButtonGroup
                name="frequency"
                type="radio"
                :required="true"
                :validationMessages="{ valueMissing: 'Please select a newsletter frequency.' }"
                legend="How often would you like to hear from us?"
              >
                <ag-selection-button value="weekly">Weekly</ag-selection-button>
                <ag-selection-button value="monthly">Monthly</ag-selection-button>
                <ag-selection-button value="major">Only major announcements</ag-selection-button>
              </VueSelectionButtonGroup>
            </div>
            <div>
              <fieldset style="border: 1px solid var(--ag-border-color, #e2e8f0); border-radius: var(--ag-radius-md, 6px); padding: var(--ag-space-3) var(--ag-space-4); margin: 0">
                <legend style="padding: 0 var(--ag-space-2); font-size: 0.875rem; font-weight: 500; color: var(--ag-text-primary)">Preferred contact method *</legend>
                <VueRadio name="contactMethod" value="email" labelText="Email" :required="true" />
                <VueRadio name="contactMethod" value="phone" labelText="Phone" :required="true" />
                <VueRadio name="contactMethod" value="either" labelText="Either" :required="true" />
              </fieldset>
            </div>
            <div>
              <VueCheckbox name="subscribe" value="yes" labelText="Subscribe to our newsletter" />
            </div>
            <div>
              <VueToggle
                label="I agree to the Terms & Conditions"
                name="terms"
                :required="true"
                :validationMessages="{ valueMissing: 'Please accept the terms and conditions to continue.' }"
              />
            </div>
            <div style="display: flex; gap: var(--ag-space-3); justify-content: flex-end; margin-top: var(--ag-space-2)">
              <VueButton type="button" @click="handleReset">Clear</VueButton>
              <VueButton type="submit" variant="primary">Send Message →</VueButton>
            </div>
          </form>
        </div>
      </VueCard>

      <div
        v-if="submissionData"
        ref="resultRef"
        role="alert"
        style="margin-top: var(--ag-space-4); padding: var(--ag-space-4); background: var(--ag-background-secondary); border-radius: var(--ag-radius-md); color: var(--ag-text-primary)"
      >
        <strong>✓ Message sent!</strong>
        <ul style="margin: var(--ag-space-2) 0 0 0; padding: 0 0 0 var(--ag-space-4)">
          <li v-for="(value, key) in submissionData" :key="key">
            <strong>{{ key }}:</strong> {{ value }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
/* :state() demo — visual proof that CustomStateSet is working */
ag-radio:state(checked),
ag-checkbox:state(checked),
ag-toggle:state(checked) {
  outline: 2px dashed #22c55e;
  outline-offset: 3px;
  border-radius: 4px;
}
ag-radio:state(invalid),
ag-checkbox:state(invalid),
ag-toggle:state(invalid) {
  outline: 2px dashed #ef4444;
  outline-offset: 3px;
  border-radius: 4px;
}
</style>
