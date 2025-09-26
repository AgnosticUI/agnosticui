import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
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