import { useRef, useState } from 'react'
import { ReactInput } from './components/ag/Input/react'
import { ReactSelectionButtonGroup } from './components/ag/SelectionButtonGroup/react'
import { ReactSelectionButton } from './components/ag/SelectionButton/react'
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
  const [submissionData, setSubmissionData] = useState<FormPayload | null>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!formRef.current) return
    if (!validateAll(formRef.current)) return
    const data = new FormData(formRef.current)
    setSubmissionData(Object.fromEntries(data.entries()) as FormPayload)
  }

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
              onSubmit={handleSubmit}
              noValidate
              style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ag-space-4)', marginTop: 'var(--ag-space-4)' }}
            >
              <div>
                <ReactInput
                  label="Full Name"
                  name="fullName"
                  type="text"
                  required
                />
              </div>
              <div>
                <ReactInput
                  label="Email Address"
                  name="email"
                  type="email"
                  required
                />
              </div>
              <div>
                <ReactInput
                  label="Phone"
                  name="phone"
                  type="tel"
                />
              </div>
              <div>
                <ReactInput
                  label="Message"
                  name="message"
                  type="textarea"
                  required
                />
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
            style={{
              marginTop: 'var(--ag-space-4)',
              padding: 'var(--ag-space-4)',
              background: 'var(--ag-background-secondary)',
              borderRadius: 'var(--ag-radius-md)',
            }}
            role="alert"
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
