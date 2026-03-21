import { AgDynamicRenderer, createDispatcher } from '@agnosticui/render-react';
import { contactFormNodes } from './contactFormNodes';

const dispatch = createDispatcher({
  SUBMIT_FORM: () => alert('Form submitted via SDUI action dispatcher!'),
});

export default function App() {
  return (
    <div style={{ padding: '2rem', maxWidth: '480px' }}>
      <h1 style={{ fontFamily: 'system-ui', marginBottom: '1.5rem' }}>
        SDUI Smoke Test — React
      </h1>
      <AgDynamicRenderer
        nodes={contactFormNodes}
        actions={{ SUBMIT_FORM: () => dispatch('SUBMIT_FORM') }}
      />
    </div>
  );
}
