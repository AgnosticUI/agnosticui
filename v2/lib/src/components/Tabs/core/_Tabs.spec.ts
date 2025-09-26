import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Tabs } from './_Tabs';

describe('Tabs - Component Initialization', () => {
  let element: Tabs;

  beforeEach(() => {
    element = document.createElement('ag-tabs') as Tabs;
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('should render with default properties', async () => {
    element.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
    `;

    await element.updateComplete;

    expect(element).toBeDefined();
    expect(element.activation).toBe('manual');
    expect(element.activeTab).toBe(0);
    expect(element.orientation).toBe('horizontal');
  });

  it('should render with custom properties', async () => {
    element.activation = 'automatic';
    element.activeTab = 1;
    element.orientation = 'vertical';

    await element.updateComplete;

    expect(element.activation).toBe('automatic');
    expect(element.activeTab).toBe(1);
    expect(element.orientation).toBe('vertical');
  });

  it('should create tablist with proper ARIA role', async () => {
    await element.updateComplete;

    const tablist = element.shadowRoot?.querySelector('[role="tablist"]');
    expect(tablist).toBeDefined();
    expect(tablist?.getAttribute('role')).toBe('tablist');
  });

  it('should render tabs with proper slot content', async () => {
    element.innerHTML = `
      <ag-tab slot="tab" panel="panel1">First Tab</ag-tab>
      <ag-tab slot="tab" panel="panel2">Second Tab</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">First Content</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Second Content</ag-tab-panel>
    `;

    await element.updateComplete;

    const tabs = element.querySelectorAll('ag-tab');
    expect(tabs).toHaveLength(2);

    const panels = element.querySelectorAll('ag-tab-panel');
    expect(panels).toHaveLength(2);
  });

  it('should handle empty tabs gracefully', async () => {
    await element.updateComplete;

    expect(element).toBeDefined();
    expect(element.activation).toBe('manual');
    expect(element.activeTab).toBe(0);
  });
});

describe('Tabs - ARIA Compliance', () => {
  let element: Tabs;

  beforeEach(() => {
    element = document.createElement('ag-tabs') as Tabs;
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('should implement required ARIA roles correctly', async () => {
    element.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
    `;

    await element.updateComplete;

    const tablist = element.shadowRoot?.querySelector('[role="tablist"]');
    expect(tablist).toBeDefined();
    expect(tablist?.getAttribute('role')).toBe('tablist');

    const tabs = element.querySelectorAll('ag-tab');
    tabs.forEach(tab => {
      expect(tab.getAttribute('role')).toBe('tab');
    });

    const panels = element.querySelectorAll('ag-tab-panel');
    panels.forEach(panel => {
      expect(panel.getAttribute('role')).toBe('tabpanel');
    });
  });

  it('should manage aria-selected state correctly', async () => {
    element.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
    `;

    await element.updateComplete;

    // Verify elements exist first
    const tabs = element.querySelectorAll('ag-tab');
    const panels = element.querySelectorAll('ag-tab-panel');
    expect(tabs).toHaveLength(2);
    expect(panels).toHaveLength(2);

    // Manually call the update method that should set ARIA attributes
    (element as any)._updateTabsAndPanels();

    // First tab should be selected by default
    expect(tabs[0].getAttribute('aria-selected')).toBe('true');
    expect(tabs[1].getAttribute('aria-selected')).toBe('false');
  });

  it('should establish proper tab-panel associations with aria-controls', async () => {
    element.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
    `;

    await element.updateComplete;

    // Verify elements exist first
    const tabs = element.querySelectorAll('ag-tab');
    const panels = element.querySelectorAll('ag-tab-panel');
    expect(tabs).toHaveLength(2);
    expect(panels).toHaveLength(2);

    // Manually call the update method that should set ARIA attributes
    (element as any)._updateTabsAndPanels();

    expect(tabs[0].getAttribute('aria-controls')).toBe('panel1');
    expect(tabs[1].getAttribute('aria-controls')).toBe('panel2');

    expect(panels[0].getAttribute('aria-labelledby')).toBe(tabs[0].id);
    expect(panels[1].getAttribute('aria-labelledby')).toBe(tabs[1].id);
  });

  it('should implement roving tabindex pattern', async () => {
    element.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
    `;

    await element.updateComplete;

    // Verify elements exist first
    const tabs = element.querySelectorAll('ag-tab');
    expect(tabs).toHaveLength(2);

    // Manually call the update method that should set ARIA attributes
    (element as any)._updateTabsAndPanels();

    // Only active tab should be focusable
    expect(tabs[0].getAttribute('tabindex')).toBe('0');
    expect(tabs[1].getAttribute('tabindex')).toBe('-1');
  });

  it('should hide inactive panels with hidden attribute', async () => {
    element.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
    `;

    await element.updateComplete;

    const panels = element.querySelectorAll('ag-tab-panel');

    // Manually call the update method that should set ARIA attributes
    (element as any)._updateTabsAndPanels();

    // First panel should be visible, second should be hidden
    expect(panels[0].hasAttribute('hidden')).toBe(false);
    expect(panels[1].hasAttribute('hidden')).toBe(true);
  });

  it('should make panels focusable with tabindex="0"', async () => {
    element.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
    `;

    await element.updateComplete;

    const panels = element.querySelectorAll('ag-tab-panel');
    panels.forEach(panel => {
      expect(panel.getAttribute('tabindex')).toBe('0');
    });
  });

  it('should set aria-orientation based on orientation prop', async () => {
    element.orientation = 'vertical';
    await element.updateComplete;

    const tablist = element.shadowRoot?.querySelector('[role="tablist"]');
    expect(tablist?.getAttribute('aria-orientation')).toBe('vertical');

    element.orientation = 'horizontal';
    await element.updateComplete;
    expect(tablist?.getAttribute('aria-orientation')).toBe('horizontal');
  });

  it('should support aria-label and aria-labelledby on tablist', async () => {
    element.ariaLabel = 'Main navigation';
    await element.updateComplete;

    const tablist = element.shadowRoot?.querySelector('[role="tablist"]');
    expect(tablist?.getAttribute('aria-label')).toBe('Main navigation');

    element.ariaLabel = '';
    element.ariaLabelledBy = 'nav-heading';
    await element.updateComplete;
    expect(tablist?.getAttribute('aria-labelledby')).toBe('nav-heading');
  });
});