import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { AgEmptyState } from './EmptyState.js';
import './EmptyState.js'; // Ensures registration

expect.extend(toHaveNoViolations);

describe('AgEmptyState', () => {
  let el: AgEmptyState;

  beforeEach(() => {
    el = document.createElement('ag-empty-state') as AgEmptyState;
    document.body.appendChild(el);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('renders default empty state with icon and no title/subtitle/button', () => {
    const icon = el.shadowRoot?.querySelector('.icon');
    const title = el.shadowRoot?.querySelector('.title');
    const subtitle = el.shadowRoot?.querySelector('.subtitle');
    const button = el.shadowRoot?.querySelector('button');

    expect(icon).toBeTruthy();
    expect(title).toBeNull();
    expect(subtitle).toBeNull();
    expect(button).toBeNull();
  });

  it('renders title, subtitle, and button when provided', async () => {
    el.title = 'No Results';
    el.subtitle = 'Try adjusting your filters.';
    el.buttonText = 'Reload';
    await el.updateComplete;

    const title = el.shadowRoot?.querySelector('.title');
    const subtitle = el.shadowRoot?.querySelector('.subtitle');
    const button = el.shadowRoot?.querySelector('button');

    expect(title?.textContent).toBe('No Results');
    expect(subtitle?.textContent).toBe('Try adjusting your filters.');
    expect(button?.textContent).toBe('Reload');
  });

  it('applies bordered and rounded styles correctly', async () => {
    el.bordered = true;
    el.rounded = true;
    await el.updateComplete;

    const wrapper = el.shadowRoot?.querySelector('.empty');
    expect(wrapper?.classList.contains('empty-bordered')).toBe(true);
    expect(wrapper?.classList.contains('empty-rounded')).toBe(true);
  });

  it('renders slotted icon when provided', async () => {
    const slotWrapper = document.createElement('div');
    slotWrapper.slot = 'icon';
    slotWrapper.textContent = '⭐';
    el.appendChild(slotWrapper);
    await el.updateComplete;

    const defaultIcon = el.shadowRoot?.querySelector('svg');
    expect(defaultIcon).toBeNull();

    const slotted = el.querySelector('[slot="icon"]');
    expect(slotted?.textContent).toBe('⭐');
  });

  it('renders slotted actions when provided', async () => {
    const customButton = document.createElement('button');
    customButton.slot = 'actions';
    customButton.textContent = 'Custom Action';
    el.appendChild(customButton);
    await el.updateComplete;

    const slotted = el.querySelector('[slot="actions"]');
    expect(slotted?.textContent).toBe('Custom Action');

    // Should not render default button
    const defaultButton = el.shadowRoot?.querySelector('button');
    expect(defaultButton).toBeNull();
  });

  it('has correct accessibility role and label', () => {
    const wrapper = el.shadowRoot?.querySelector('.empty');
    expect(wrapper?.getAttribute('role')).toBe('region');
    expect(wrapper?.getAttribute('aria-label')).toBe('Empty state');
  });

  it('has no axe accessibility violations', async () => {
    el.title = 'Nothing here yet';
    el.subtitle = 'Start by adding something new.';
    el.buttonText = 'Add item';
    await el.updateComplete;

    const results = await axe(el);
    expect(results).toHaveNoViolations();
  });
});
