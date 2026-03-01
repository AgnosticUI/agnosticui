<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import VueInput from './components/ag/Input/vue/VueInput.vue'
import VueSelectionButtonGroup from './components/ag/SelectionButtonGroup/vue/VueSelectionButtonGroup.vue'
import './components/ag/SelectionButton/core/SelectionButton'
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
