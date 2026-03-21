import 'agnosticui-core/styles/tokens.css';
import 'agnosticui-core/styles/tokens-dark.css';
import '@agnosticui/render-lit';
import { contactFormNodes } from './contactFormNodes';

const renderer = document.querySelector('ag-dynamic-renderer');
if (!renderer) throw new Error('Missing <ag-dynamic-renderer> in index.html');

// The nodes property is typed on AgDynamicRenderer — cast to any for simplicity here
(renderer as any).nodes = contactFormNodes;
(renderer as any).actions = {
  SUBMIT_FORM: () => alert('Form submitted via SDUI action dispatcher!'),
};
