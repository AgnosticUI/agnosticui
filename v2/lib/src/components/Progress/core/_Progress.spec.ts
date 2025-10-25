import { describe, it, expect, afterEach } from 'vitest';
import { Progress } from './Progress';

// Register the custom element
if (!customElements.get('ag-progress')) {
  customElements.define('ag-progress', Progress);
}

describe('Progress Component', () => {
  let element: Progress;

  afterEach(() => {
    element?.remove();
  });

    it('should render with default props', async () => {
    element = document.createElement('ag-progress') as Progress;
    document.body.appendChild(element);
    await element.updateComplete;

    const progressEl = element.shadowRoot?.querySelector('progress');
    expect(progressEl).not.toBeNull();
    expect(progressEl?.hasAttribute('value')).toBe(false); // Indeterminate
    expect(progressEl?.max).toBe(100);
  });

  it('should set the value and max props', async () => {
    element = document.createElement('ag-progress') as Progress;
    element.value = 50;
    element.max = 150;
    document.body.appendChild(element);
    await element.updateComplete;

    const progressEl = element.shadowRoot?.querySelector('progress');
    expect(progressEl?.value).toBe(50);
    expect(progressEl?.max).toBe(150);
  });

  it('should be in an indeterminate state when value is not provided', async () => {
    element = document.createElement('ag-progress') as Progress;
    document.body.appendChild(element);
    await element.updateComplete;

    const progressEl = element.shadowRoot?.querySelector('progress');
    expect(progressEl?.hasAttribute('value')).toBe(false);
  });

  it('should set the accessible label', async () => {
    element = document.createElement('ag-progress') as Progress;
    element.label = 'Loading...';
    document.body.appendChild(element);
    await element.updateComplete;

    const labelEl = element.shadowRoot?.querySelector('.progress-label');
    expect(labelEl?.textContent).toBe('Loading...');

    const progressEl = element.shadowRoot?.querySelector('progress');
    expect(progressEl?.getAttribute('aria-label')).toBe('Loading...');
  });

  it('should expose CSS shadow parts', async () => {
    element = document.createElement('ag-progress') as Progress;
    element.label = 'test';
    document.body.appendChild(element);
    await element.updateComplete;

        const wrapper = element.shadowRoot?.querySelector('[part="ag-progress-wrapper"]');
    const label = element.shadowRoot?.querySelector('[part="progress-label"]');
    const progressBar = element.shadowRoot?.querySelector('[part="ag-progress-bar"]');

    expect(wrapper).not.toBeNull();
    expect(label).not.toBeNull();
    expect(progressBar).not.toBeNull();
  });
});