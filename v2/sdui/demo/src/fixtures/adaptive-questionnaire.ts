import type { AgNode } from '@agnosticui/schema';

// ── Step 1: Reason for visit ─────────────────────────────────────────────────

export const step1Nodes: AgNode[] = [
  { id: 'aq-heading',      component: 'AgText',   text: 'Health intake form',              el: 'h2' },
  { id: 'aq-step-badge',   component: 'AgBadge',  variant: 'info', children: ['aq-step-text'] },
  { id: 'aq-step-text',    component: 'AgText',   text: 'Step 1 of 3' },
  { id: 'aq-divider',      component: 'AgDivider' },
  {
    id: 'aq-reason-group',
    component: 'AgSelectionButtonGroup',
    type: 'radio',
    name: 'reason',
    legend: 'What brings you in today?',
    on_change: 'ANSWER_CHANGE',
    children: ['aq-btn-routine', 'aq-btn-symptoms', 'aq-btn-followup'],
  },
  { id: 'aq-btn-routine',       component: 'AgSelectionButton', value: 'routine',  label: 'Annual checkup',  children: ['aq-btn-routine-text'] },
  { id: 'aq-btn-routine-text',  component: 'AgText',            text: 'Annual checkup' },
  { id: 'aq-btn-symptoms',      component: 'AgSelectionButton', value: 'symptoms', label: 'New symptoms',    children: ['aq-btn-symptoms-text'] },
  { id: 'aq-btn-symptoms-text', component: 'AgText',            text: 'New symptoms' },
  { id: 'aq-btn-followup',      component: 'AgSelectionButton', value: 'followup', label: 'Follow-up visit', children: ['aq-btn-followup-text'] },
  { id: 'aq-btn-followup-text', component: 'AgText',            text: 'Follow-up visit' },
  { id: 'aq-next',         component: 'AgButton', variant: 'primary', shape: 'rounded', fullWidth: true, on_click: 'NEXT_STEP', children: ['aq-next-label'] },
  { id: 'aq-next-label',   component: 'AgText',   text: 'Next' },
];

// ── Step 2a: Annual checkup ──────────────────────────────────────────────────

const step2RoutineNodes: AgNode[] = [
  { id: 'aq2r-heading',      component: 'AgText',   text: 'Health intake form',                 el: 'h2' },
  { id: 'aq2r-badge',        component: 'AgBadge',  variant: 'info', children: ['aq2r-badge-text'] },
  { id: 'aq2r-badge-text',   component: 'AgText',   text: 'Step 2 of 3 · Annual checkup' },
  { id: 'aq2r-divider',      component: 'AgDivider' },
  { id: 'aq-preferred-date', component: 'AgInput',  label: 'Preferred appointment date', type: 'date', rounded: true, on_change: 'ANSWER_CHANGE' },
  { id: 'aq2r-back',         component: 'AgButton', bordered: true, shape: 'rounded', fullWidth: true, on_click: 'PREV_STEP', children: ['aq2r-back-label'] },
  { id: 'aq2r-back-label',   component: 'AgText',   text: 'Back' },
  { id: 'aq2r-next',         component: 'AgButton', variant: 'primary', shape: 'rounded', fullWidth: true, on_click: 'NEXT_STEP', children: ['aq2r-next-label'] },
  { id: 'aq2r-next-label',   component: 'AgText',   text: 'Next' },
];

// ── Step 2b: New symptoms ────────────────────────────────────────────────────
//
// Skip logic: if severity === 'severe', NEXT_STEP routes to urgentNodes instead
// of the contact form (step 3). This is the non-linear path.

const step2SymptomsNodes: AgNode[] = [
  { id: 'aq2s-heading',       component: 'AgText',   text: 'Health intake form',                  el: 'h2' },
  { id: 'aq2s-badge',         component: 'AgBadge',  variant: 'warning', children: ['aq2s-badge-text'] },
  { id: 'aq2s-badge-text',    component: 'AgText',   text: 'Step 2 of 3 · New symptoms' },
  { id: 'aq2s-divider',       component: 'AgDivider' },
  { id: 'aq-symptoms',        component: 'AgInput',  label: 'Describe your symptoms', rows: 3, rounded: true, required: true, on_change: 'ANSWER_CHANGE' },
  {
    id: 'aq-severity-group',
    component: 'AgSelectionButtonGroup',
    type: 'radio',
    name: 'severity',
    legend: 'How severe are your symptoms?',
    on_change: 'ANSWER_CHANGE',
    children: ['aq-sev-mild', 'aq-sev-moderate', 'aq-sev-severe'],
  },
  { id: 'aq-sev-mild',          component: 'AgSelectionButton', value: 'mild',     label: 'Mild',     children: ['aq-sev-mild-text'] },
  { id: 'aq-sev-mild-text',    component: 'AgText',            text: 'Mild' },
  { id: 'aq-sev-moderate',     component: 'AgSelectionButton', value: 'moderate', label: 'Moderate', children: ['aq-sev-moderate-text'] },
  { id: 'aq-sev-moderate-text', component: 'AgText',           text: 'Moderate' },
  { id: 'aq-sev-severe',       component: 'AgSelectionButton', value: 'severe',   label: 'Severe',   children: ['aq-sev-severe-text'] },
  { id: 'aq-sev-severe-text',  component: 'AgText',            text: 'Severe' },
  { id: 'aq2s-back',          component: 'AgButton', bordered: true, shape: 'rounded', fullWidth: true, on_click: 'PREV_STEP', children: ['aq2s-back-label'] },
  { id: 'aq2s-back-label',    component: 'AgText',   text: 'Back' },
  { id: 'aq2s-next',          component: 'AgButton', variant: 'primary', shape: 'rounded', fullWidth: true, on_click: 'NEXT_STEP', children: ['aq2s-next-label'] },
  { id: 'aq2s-next-label',    component: 'AgText',   text: 'Next' },
];

// ── Step 2c: Follow-up visit ─────────────────────────────────────────────────

const step2FollowupNodes: AgNode[] = [
  { id: 'aq2f-heading',        component: 'AgText',   text: 'Health intake form',                  el: 'h2' },
  { id: 'aq2f-badge',          component: 'AgBadge',  variant: 'info', children: ['aq2f-badge-text'] },
  { id: 'aq2f-badge-text',     component: 'AgText',   text: 'Step 2 of 3 · Follow-up visit' },
  { id: 'aq2f-divider',        component: 'AgDivider' },
  { id: 'aq-followup-reason',  component: 'AgInput',  label: 'Reason for follow-up', type: 'text', rounded: true, on_change: 'ANSWER_CHANGE' },
  { id: 'aq-last-visit',       component: 'AgInput',  label: 'Date of last visit',   type: 'date', rounded: true, on_change: 'ANSWER_CHANGE' },
  { id: 'aq2f-back',           component: 'AgButton', bordered: true, shape: 'rounded', fullWidth: true, on_click: 'PREV_STEP', children: ['aq2f-back-label'] },
  { id: 'aq2f-back-label',     component: 'AgText',   text: 'Back' },
  { id: 'aq2f-next',           component: 'AgButton', variant: 'primary', shape: 'rounded', fullWidth: true, on_click: 'NEXT_STEP', children: ['aq2f-next-label'] },
  { id: 'aq2f-next-label',     component: 'AgText',   text: 'Next' },
];

// ── Step 3: Contact info (shared — shown for routine and non-severe symptoms) ─

const step3Nodes: AgNode[] = [
  { id: 'aq3-heading',      component: 'AgText',   text: 'Health intake form',                   el: 'h2' },
  { id: 'aq3-badge',        component: 'AgBadge',  variant: 'info', children: ['aq3-badge-text'] },
  { id: 'aq3-badge-text',   component: 'AgText',   text: 'Step 3 of 3 · Contact details' },
  { id: 'aq3-divider',      component: 'AgDivider' },
  { id: 'aq-name',          component: 'AgInput',  label: 'Full name',     type: 'text',  rounded: true, required: true, on_change: 'ANSWER_CHANGE' },
  { id: 'aq-email',         component: 'AgInput',  label: 'Email address', type: 'email', rounded: true, required: true, on_change: 'ANSWER_CHANGE' },
  { id: 'aq-phone',         component: 'AgInput',  label: 'Phone number',  type: 'tel',   rounded: true, on_change: 'ANSWER_CHANGE' },
  { id: 'aq3-back',         component: 'AgButton', bordered: true, shape: 'rounded', fullWidth: true, on_click: 'PREV_STEP', children: ['aq3-back-label'] },
  { id: 'aq3-back-label',   component: 'AgText',   text: 'Back' },
  { id: 'aq3-submit',       component: 'AgButton', variant: 'primary', shape: 'rounded', fullWidth: true, on_click: 'SUBMIT', children: ['aq3-submit-label'] },
  { id: 'aq3-submit-label', component: 'AgText',   text: 'Book appointment' },
];

// ── Urgent screen (severe symptoms — skips contact form entirely) ─────────────

const urgentNodes: AgNode[] = [
  { id: 'aq-urgent-alert',   component: 'AgAlert', variant: 'danger', bordered: true, rounded: true, children: ['aq-urgent-text'] },
  { id: 'aq-urgent-text',    component: 'AgText',  text: 'Based on your reported symptoms, please call 911 or go to your nearest emergency room immediately.' },
  { id: 'aq-urgent-card',    component: 'AgCard',  shadow: true, rounded: 'md', children: ['aq-urgent-heading', 'aq-urgent-body'] },
  { id: 'aq-urgent-heading', component: 'AgText',  text: 'Seek immediate care', el: 'h2' },
  { id: 'aq-urgent-body',    component: 'AgText',  text: 'Severe symptoms require urgent evaluation. Do not wait for a scheduled appointment.', el: 'p' },
  { id: 'aq-restart',        component: 'AgButton', bordered: true, shape: 'rounded', fullWidth: true, on_click: 'RESTART', children: ['aq-restart-label'] },
  { id: 'aq-restart-label',  component: 'AgText',  text: 'Start over' },
];

// ── Confirmation screen ───────────────────────────────────────────────────────

const confirmationNodes: AgNode[] = [
  { id: 'aq-ok-alert',         component: 'AgAlert', variant: 'success', bordered: true, rounded: true, children: ['aq-ok-text'] },
  { id: 'aq-ok-text',          component: 'AgText',  text: 'Your appointment request has been submitted.' },
  { id: 'aq-ok-card',          component: 'AgCard',  shadow: true, rounded: 'md', children: ['aq-ok-badge', 'aq-ok-heading', 'aq-ok-body'] },
  { id: 'aq-ok-badge',         component: 'AgBadge', variant: 'success', children: ['aq-ok-badge-text'] },
  { id: 'aq-ok-badge-text',    component: 'AgText',  text: 'Confirmed' },
  { id: 'aq-ok-heading',       component: 'AgText',  text: 'Appointment requested', el: 'h2' },
  { id: 'aq-ok-body',          component: 'AgText',  text: "We've received your request and will confirm your appointment by email within 24 hours.", el: 'p' },
  { id: 'aq-restart2',         component: 'AgButton', bordered: true, shape: 'rounded', fullWidth: true, on_click: 'RESTART', children: ['aq-restart2-label'] },
  { id: 'aq-restart2-label',   component: 'AgText',  text: 'Start a new request' },
];

// ── Transition function (the "server") ───────────────────────────────────────
//
// Called by the consumer after every NEXT_STEP or SUBMIT action with the full
// accumulated answers object. Returns the next screen's nodes.
//
// This is the fixture-as-server pattern from SPECIFICATION.md section 5.4:
// swap this function for a fetch('/api/next-step', { body: JSON.stringify(answers) })
// and the consumer code is identical.

export function getNextNodes(answers: Record<string, unknown>): AgNode[] {
  const reason = answers['aq-reason-group'] as string | undefined;

  // Step 1: no reason selected yet
  if (!reason) return step1Nodes;

  // Step 2: branch on reason — stay on this branch until the key field is present
  if (reason === 'routine'  && answers['aq-preferred-date'] === undefined) return step2RoutineNodes;
  if (reason === 'symptoms' && answers['aq-symptoms']       === undefined) return step2SymptomsNodes;
  if (reason === 'followup' && answers['aq-followup-reason'] === undefined) return step2FollowupNodes;

  // Skip logic: severe symptoms bypass the contact form entirely
  if (reason === 'symptoms' && answers['aq-severity-group'] === 'severe') return urgentNodes;

  // Step 3: contact info (all non-urgent paths converge here)
  if (answers['aq-name'] === undefined) return step3Nodes;

  // Confirmation
  return confirmationNodes;
}
