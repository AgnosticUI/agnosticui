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

describe('Tabs - Keyboard Navigation', () => {
  let element: Tabs;

  beforeEach(() => {
    element = document.createElement('ag-tabs') as Tabs;
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('should handle arrow key navigation between tabs', async () => {
    element.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab slot="tab" panel="panel3">Tab 3</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel3">Content 3</ag-tab-panel>
    `;

    await element.updateComplete;
    (element as any)._updateTabsAndPanels();

    const tabs = element.querySelectorAll('ag-tab');

    // Simulate ArrowRight key press on first tab
    const arrowRightEvent = new KeyboardEvent('keydown', {
      key: 'ArrowRight',
      bubbles: true
    });

    tabs[0].dispatchEvent(arrowRightEvent);
    await element.updateComplete;

    // Focus should move to second tab (manual activation)
    expect(tabs[0].getAttribute('tabindex')).toBe('-1');
    expect(tabs[1].getAttribute('tabindex')).toBe('0');

    // In manual mode, activeTab should not change until Space/Enter
    expect(element.activeTab).toBe(0);
  });

  it('should handle Home key to move to first tab', async () => {
    element.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab slot="tab" panel="panel3">Tab 3</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel3">Content 3</ag-tab-panel>
    `;

    element.activeTab = 2; // Start with third tab active
    await element.updateComplete;
    (element as any)._updateTabsAndPanels();

    const tabs = element.querySelectorAll('ag-tab');

    // Simulate Home key press
    const homeEvent = new KeyboardEvent('keydown', {
      key: 'Home',
      bubbles: true
    });

    tabs[2].dispatchEvent(homeEvent);
    await element.updateComplete;

    // Focus should move to first tab
    expect(tabs[0].getAttribute('tabindex')).toBe('0');
    expect(tabs[1].getAttribute('tabindex')).toBe('-1');
    expect(tabs[2].getAttribute('tabindex')).toBe('-1');
  });

  it('should handle End key to move to last tab', async () => {
    element.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab slot="tab" panel="panel3">Tab 3</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel3">Content 3</ag-tab-panel>
    `;

    await element.updateComplete;
    (element as any)._updateTabsAndPanels();

    const tabs = element.querySelectorAll('ag-tab');

    // Simulate End key press
    const endEvent = new KeyboardEvent('keydown', {
      key: 'End',
      bubbles: true
    });

    tabs[0].dispatchEvent(endEvent);
    await element.updateComplete;

    // Focus should move to last tab
    expect(tabs[0].getAttribute('tabindex')).toBe('-1');
    expect(tabs[1].getAttribute('tabindex')).toBe('-1');
    expect(tabs[2].getAttribute('tabindex')).toBe('0');
  });

  it('should activate tab with Space key in manual mode', async () => {
    element.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
    `;

    await element.updateComplete;
    (element as any)._updateTabsAndPanels();

    const tabs = element.querySelectorAll('ag-tab');

    // Move focus to second tab first
    (element as any)._setFocusedTab(1);

    // Simulate Space key press
    const spaceEvent = new KeyboardEvent('keydown', {
      key: ' ',
      bubbles: true
    });

    tabs[1].dispatchEvent(spaceEvent);
    await element.updateComplete;

    // Tab should now be activated
    expect(element.activeTab).toBe(1);
    expect(tabs[1].getAttribute('aria-selected')).toBe('true');
  });

  it('should activate tab with Enter key in manual mode', async () => {
    element.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
    `;

    await element.updateComplete;
    (element as any)._updateTabsAndPanels();

    const tabs = element.querySelectorAll('ag-tab');

    // Move focus to second tab first
    (element as any)._setFocusedTab(1);

    // Simulate Enter key press
    const enterEvent = new KeyboardEvent('keydown', {
      key: 'Enter',
      bubbles: true
    });

    tabs[1].dispatchEvent(enterEvent);
    await element.updateComplete;

    // Tab should now be activated
    expect(element.activeTab).toBe(1);
    expect(tabs[1].getAttribute('aria-selected')).toBe('true');
  });

  it('should activate tab immediately on arrow keys in automatic mode', async () => {
    element.activation = 'automatic';
    element.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
    `;

    await element.updateComplete;
    (element as any)._updateTabsAndPanels();

    const tabs = element.querySelectorAll('ag-tab');

    // Simulate ArrowRight key press
    const arrowRightEvent = new KeyboardEvent('keydown', {
      key: 'ArrowRight',
      bubbles: true
    });

    tabs[0].dispatchEvent(arrowRightEvent);
    await element.updateComplete;

    // In automatic mode, tab should be activated immediately
    expect(element.activeTab).toBe(1);
    expect(tabs[1].getAttribute('aria-selected')).toBe('true');
  });

  it('should handle vertical orientation arrow keys', async () => {
    element.orientation = 'vertical';
    element.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
    `;

    await element.updateComplete;
    (element as any)._updateTabsAndPanels();

    const tabs = element.querySelectorAll('ag-tab');

    // Simulate ArrowDown key press (should work like ArrowRight in horizontal)
    const arrowDownEvent = new KeyboardEvent('keydown', {
      key: 'ArrowDown',
      bubbles: true
    });

    tabs[0].dispatchEvent(arrowDownEvent);
    await element.updateComplete;

    // Focus should move to second tab
    expect(tabs[0].getAttribute('tabindex')).toBe('-1');
    expect(tabs[1].getAttribute('tabindex')).toBe('0');
  });
});

describe('Tabs - Tab Interaction', () => {
  let element: Tabs;

  beforeEach(() => {
    element = document.createElement('ag-tabs') as Tabs;
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('should activate tab on click', async () => {
    element.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
    `;

    await element.updateComplete;
    (element as any)._updateTabsAndPanels();

    const tabs = element.querySelectorAll('ag-tab');

    // Click on second tab
    tabs[1].click();
    await element.updateComplete;

    // Second tab should be activated and focused
    expect(element.activeTab).toBe(1);
    expect(tabs[1].getAttribute('aria-selected')).toBe('true');
    expect(tabs[1].getAttribute('tabindex')).toBe('0');
    expect(tabs[0].getAttribute('tabindex')).toBe('-1');
  });

  it('should switch panel visibility on tab activation', async () => {
    element.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
    `;

    await element.updateComplete;
    (element as any)._updateTabsAndPanels();

    const tabs = element.querySelectorAll('ag-tab');
    const panels = element.querySelectorAll('ag-tab-panel');

    // Initially first panel visible, second hidden
    expect(panels[0].hasAttribute('hidden')).toBe(false);
    expect(panels[1].hasAttribute('hidden')).toBe(true);

    // Click second tab
    tabs[1].click();
    await element.updateComplete;

    // Now second panel visible, first hidden
    expect(panels[0].hasAttribute('hidden')).toBe(true);
    expect(panels[1].hasAttribute('hidden')).toBe(false);
  });

  it('should handle programmatic activeTab changes', async () => {
    element.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab slot="tab" panel="panel3">Tab 3</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel3">Content 3</ag-tab-panel>
    `;

    await element.updateComplete;
    (element as any)._updateTabsAndPanels();

    const tabs = element.querySelectorAll('ag-tab');
    const panels = element.querySelectorAll('ag-tab-panel');

    // Programmatically change to third tab
    element.activeTab = 2;
    await element.updateComplete;

    // Third tab should be selected and focused
    expect(tabs[2].getAttribute('aria-selected')).toBe('true');
    expect(tabs[2].getAttribute('tabindex')).toBe('0');
    expect(tabs[0].getAttribute('tabindex')).toBe('-1');
    expect(tabs[1].getAttribute('tabindex')).toBe('-1');

    // Third panel should be visible
    expect(panels[0].hasAttribute('hidden')).toBe(true);
    expect(panels[1].hasAttribute('hidden')).toBe(true);
    expect(panels[2].hasAttribute('hidden')).toBe(false);
  });

  it('should handle disabled state gracefully', async () => {
    element.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2" disabled>Tab 2</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
    `;

    await element.updateComplete;
    (element as any)._updateTabsAndPanels();

    const tabs = element.querySelectorAll('ag-tab');

    // Mark second tab as disabled
    tabs[1].setAttribute('disabled', '');
    tabs[1].setAttribute('aria-disabled', 'true');

    // Try to click disabled tab
    tabs[1].click();
    await element.updateComplete;

    // Should stay on first tab
    expect(element.activeTab).toBe(0);
    expect(tabs[0].getAttribute('aria-selected')).toBe('true');
    expect(tabs[1].getAttribute('aria-selected')).toBe('false');
  });

  it('should emit tab change events', async () => {
    element.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
    `;

    await element.updateComplete;
    (element as any)._updateTabsAndPanels();

    let changeEventDetail: any = null;
    element.addEventListener('tab-change', (event: any) => {
      changeEventDetail = event.detail;
    });

    const tabs = element.querySelectorAll('ag-tab');

    // Click second tab
    tabs[1].click();
    await element.updateComplete;

    // Should have fired change event
    expect(changeEventDetail).toBeTruthy();
    expect(changeEventDetail.activeTab).toBe(1);
    expect(changeEventDetail.previousTab).toBe(0);
  });

  it('should handle edge case with no panels', async () => {
    element.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
    `;

    await element.updateComplete;
    (element as any)._updateTabsAndPanels();

    const tabs = element.querySelectorAll('ag-tab');

    // Click second tab (no panels exist)
    tabs[1].click();
    await element.updateComplete;

    // Should still work for tab selection
    expect(element.activeTab).toBe(1);
    expect(tabs[1].getAttribute('aria-selected')).toBe('true');
  });

  it('should handle edge case with no tabs', async () => {
    element.innerHTML = `
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
    `;

    await element.updateComplete;
    (element as any)._updateTabsAndPanels();

    // Should not throw errors
    expect(element.activeTab).toBe(0);
    expect(element.querySelectorAll('ag-tab')).toHaveLength(0);
  });
});