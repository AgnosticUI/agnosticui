import { useRef, useState, useEffect } from 'react'
import { ReactInput } from './components/ag/Input/react'
import { ReactSelectionButtonGroup } from './components/ag/SelectionButtonGroup/react'
import { ReactSelectionButton } from './components/ag/SelectionButton/react'
import { ReactRadio } from './components/ag/Radio/react'
import { ReactCheckbox } from './components/ag/Checkbox/react'
import { ReactToggle } from './components/ag/Toggle/react'
import { ReactButton } from './components/ag/Button/react'
import { ReactCard } from './components/ag/Card/react'
import { ReactDivider } from './components/ag/Divider/react'

function validateAll(form: HTMLFormElement): boolean {
  let valid = true
  for (const el of Array.from(form.elements)) {
    if (typeof (el as HTMLInputElement).reportValidity === 'function') {
      if (!(el as HTMLInputElement).reportValidity()) valid = false
    }
  }
  return valid
}

type FormPayload = Record<string, string>

export default function App() {
  const formRef = useRef<HTMLFormElement>(null)
  const resultRef = useRef<HTMLDivElement>(null)
  const [submissionData, setSubmissionData] = useState<FormPayload | null>(null)

  // Use a native addEventListener instead of React's onSubmit prop.
  // When ag-button calls form.requestSubmit() from inside a Lit shadow DOM,
  // React's synthetic event delegation may not call preventDefault() in time
  // to stop native form navigation. A direct listener on the form element
  // guarantees preventDefault() runs before the browser submits.
  useEffect(() => {
    const form = formRef.current
    if (!form) return

    function onSubmit(e: Event) {
      e.preventDefault()
      console.log('[handleSubmit] called')

      const elements = Array.from(form!.elements)
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

      const valid = validateAll(form!)
      console.log('[handleSubmit] validateAll result:', valid)
      if (!valid) return

      const data = new FormData(form!)
      const entries = [...data.entries()]
      console.log('[handleSubmit] FormData entries:', entries)
      setSubmissionData(Object.fromEntries(entries) as FormPayload)
    }

    form.addEventListener('submit', onSubmit)
    return () => form.removeEventListener('submit', onSubmit)
  }, [])

  useEffect(() => {
    if (submissionData) {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [submissionData])

  function handleReset() {
    formRef.current?.reset()
    setSubmissionData(null)
  }

  return (
    <div style={{ padding: 'var(--ag-space-8)' }}>
      <div style={{ maxWidth: '540px', margin: '0 auto' }}>
        <ReactCard>
          <div style={{ padding: 'var(--ag-space-6)' }}>
            <h2 style={{ margin: '0 0 var(--ag-space-2) 0' }}>Contact Us</h2>
            <ReactDivider />
            <form
              ref={formRef}
              noValidate
              style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ag-space-4)', marginTop: 'var(--ag-space-4)' }}
            >
              <div>
                <ReactInput label="Full Name" name="fullName" type="text" required />
              </div>
              <div>
                <ReactInput label="Email Address" name="email" type="email" required />
              </div>
              <div>
                <ReactInput label="Phone" name="phone" type="tel" />
              </div>
              <div>
                <ReactInput label="Message" name="message" type="textarea" required />
              </div>
              <div>
                <ReactSelectionButtonGroup
                  name="frequency"
                  type="radio"
                  required
                  validationMessages={{ valueMissing: 'Please select a newsletter frequency.' }}
                  legend="How often would you like to hear from us?"
                >
                  <ReactSelectionButton value="weekly">Weekly</ReactSelectionButton>
                  <ReactSelectionButton value="monthly">Monthly</ReactSelectionButton>
                  <ReactSelectionButton value="major">Only major announcements</ReactSelectionButton>
                </ReactSelectionButtonGroup>
              </div>
              <div>
                <fieldset style={{ border: '1px solid var(--ag-border-color, #e2e8f0)', borderRadius: 'var(--ag-radius-md, 6px)', padding: 'var(--ag-space-3) var(--ag-space-4)', margin: 0 }}>
                  <legend style={{ padding: '0 var(--ag-space-2)', fontSize: '0.875rem', fontWeight: 500, color: 'var(--ag-text-primary)' }}>Preferred contact method *</legend>
                  <ReactRadio name="contactMethod" value="email" labelText="Email" required />
                  <ReactRadio name="contactMethod" value="phone" labelText="Phone" required />
                  <ReactRadio name="contactMethod" value="either" labelText="Either" required />
                </fieldset>
              </div>
              <div>
                <ReactCheckbox name="subscribe" value="yes" labelText="Subscribe to our newsletter" />
              </div>
              <div>
                <ReactToggle
                  label="I agree to the Terms & Conditions"
                  name="terms"
                  required
                  validationMessages={{ valueMissing: 'Please accept the terms and conditions to continue.' }}
                />
              </div>
              <div style={{ display: 'flex', gap: 'var(--ag-space-3)', justifyContent: 'flex-end', marginTop: 'var(--ag-space-2)' }}>
                <ReactButton type="button" onClick={handleReset}>Clear</ReactButton>
                <ReactButton type="submit" variant="primary">Send Message →</ReactButton>
              </div>
            </form>
          </div>
        </ReactCard>

        {submissionData && (
          <div
            ref={resultRef}
            role="alert"
            style={{
              marginTop: 'var(--ag-space-4)',
              padding: 'var(--ag-space-4)',
              background: 'var(--ag-background-secondary)',
              borderRadius: 'var(--ag-radius-md)',
              color: 'var(--ag-text-primary)',
            }}
          >
            <strong>✓ Message sent!</strong>
            <ul style={{ margin: 'var(--ag-space-2) 0 0 0', padding: '0 0 0 var(--ag-space-4)' }}>
              {Object.entries(submissionData).map(([key, value]) => (
                <li key={key}><strong>{key}:</strong> {value}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
