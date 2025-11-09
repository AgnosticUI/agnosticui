import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { FlexContainer } from './_FlexContainer.js';
import { FlexRow } from '../FlexRow.js';
import { FlexCol } from '../FlexCol.js';
import { FlexInline } from '../FlexInline.js';
import './FlexContainer.js';
import '../FlexRow.js';
import '../FlexCol.js';
import '../FlexInline.js';

expect.extend(toHaveNoViolations);
describe('FlexContainer', () => {
  let container: FlexContainer;
  beforeEach(async () => {
    container = document.createElement('ag-flex-container') as FlexContainer;
    container.innerHTML = `
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    `;
    document.body.appendChild(container);
    await container.updateComplete;
  });
  afterEach(() => {
    container?.remove();
    vi.clearAllMocks();
  });
  describe('Basic Functionality', () => {
    it('should initialize with correct default properties', () => {
      expect(container.direction).toBe('row');
      expect(container.wrap).toBe('nowrap');
      expect(container.justify).toBe('flex-start');
      expect(container.align).toBe('stretch');
      expect(container.alignContent).toBe('stretch');
      expect(container.gap).toBe('var(--ag-space-0, 0)');
      expect(container.inline).toBe(false);
      expect(container.reverse).toBe(false);
      expect(container.stretchChildren).toBe(false);
    });
    it('should render with flex display', () => {
      // Check the CSS property on the host element
      expect(container.style.getPropertyValue('--flex-direction')).toBe('row');
    });
    it('should have no accessibility violations', async () => {
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
    it('should expose ag-flex-container part on slot', () => {
      const slot = container.shadowRoot?.querySelector('slot');
      expect(slot?.getAttribute('part')).toBe('ag-flex-container');
    });
  });
  describe('Property Validation', () => {
    it('should validate direction property and fallback to default', async () => {
      container.direction = 'invalid-value' as any;
      await container.updateComplete;
      expect(container.direction).toBe('row');
    });
    it('should validate justify property and fallback to default', async () => {
      container.justify = 'invalid-value' as any;
      await container.updateComplete;
      expect(container.justify).toBe('flex-start');
    });
    it('should validate align property and fallback to default', async () => {
      container.align = 'invalid-value' as any;
      await container.updateComplete;
      expect(container.align).toBe('stretch');
    });
    it('should validate alignContent property and fallback to default', async () => {
      container.alignContent = 'invalid-value' as any;
      await container.updateComplete;
      expect(container.alignContent).toBe('stretch');
    });
    it('should validate wrap property and fallback to default', async () => {
      container.wrap = 'invalid-value' as any;
      await container.updateComplete;
      expect(container.wrap).toBe('nowrap');
    });
  });
  describe('Gap Validation', () => {
    it('should accept valid gap values without warnings', async () => {
      const consoleSpy = vi.spyOn(console, 'warn');
     
      container.gap = '16px';
      await container.updateComplete;
     
      container.gap = '2rem';
      await container.updateComplete;
     
      container.gap = '1em 2em';
      await container.updateComplete;
     
      container.gap = 'var(--ag-space-4)';
      await container.updateComplete;
     
      container.gap = 'calc(100% - 20px)';
      await container.updateComplete;
     
      expect(consoleSpy).not.toHaveBeenCalled();
    });
    it('should warn on potentially invalid gap values', async () => {
      const consoleSpy = vi.spyOn(console, 'warn');

      container.gap = 'invalid-value';
      await container.updateComplete;

      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('Potentially invalid gap value')
      );
      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('invalid-value')
      );

      consoleSpy.mockClear();

      container.gap = 'foo bar';
      await container.updateComplete;

      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('Potentially invalid gap value')
      );
      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('foo bar')
      );
    });
    it('should handle empty and zero gap values gracefully', async () => {
      const consoleSpy = vi.spyOn(console, 'warn');

      container.gap = '';
      await container.updateComplete;
      expect(container.style.getPropertyValue('--flex-gap')).toBe('var(--ag-space-0, 0)');

      container.gap = '0';
      await container.updateComplete;
      expect(container.style.getPropertyValue('--flex-gap')).toBe('var(--ag-space-0, 0)');

      expect(consoleSpy).not.toHaveBeenCalled();
    });
  });
  describe('Reverse Prop Behavior', () => {
    it('should flip row to row-reverse when reverse is true', async () => {
      container.direction = 'row';
      container.reverse = true;
      await container.updateComplete;
      expect(container.style.getPropertyValue('--flex-direction')).toBe('row-reverse');
    });
    it('should flip column to column-reverse when reverse is true', async () => {
      container.direction = 'column';
      container.reverse = true;
      await container.updateComplete;
      expect(container.style.getPropertyValue('--flex-direction')).toBe('column-reverse');
    });
    it('should handle row-reverse direction with reverse flag', async () => {
      container.direction = 'row-reverse';
      container.reverse = true;
      await container.updateComplete;
      expect(container.style.getPropertyValue('--flex-direction')).toBe('row');
    });
    it('should handle column-reverse direction with reverse flag', async () => {
      container.direction = 'column-reverse';
      container.reverse = true;
      await container.updateComplete;
      expect(container.style.getPropertyValue('--flex-direction')).toBe('column');
    });
  });
  describe('Stretch Children Feature', () => {
    it('should apply stretch-children attribute when enabled', async () => {
      container.stretchChildren = true;
      await container.updateComplete;
      expect(container.hasAttribute('stretch-children')).toBe(true);
    });
    it('should handle dynamically added children with stretch-children', async () => {
      container.stretchChildren = true;
      await container.updateComplete;
      // Add a new child dynamically
      const newChild = document.createElement('div');
      newChild.textContent = 'Dynamic Child';
      container.appendChild(newChild);
      await container.updateComplete;
      // The stretch-children styles should apply to the new child
      expect(container.hasAttribute('stretch-children')).toBe(true);
    });
  });
  describe('Nested Composition', () => {
    it('should work with nested flex components', async () => {
      const nestedContainer = document.createElement('ag-flex-col') as FlexCol;
      nestedContainer.innerHTML = `
        <ag-flex-row justify="space-between">
          <div>Left</div>
          <div>Right</div>
        </ag-flex-row>
        <ag-flex-inline gap="var(--ag-space-2)">
          <button>Action 1</button>
          <button>Action 2</button>
        </ag-flex-inline>
      `;

      document.body.appendChild(nestedContainer);
      await nestedContainer.updateComplete;
      // Verify the nested structure works
      const flexRow = nestedContainer.querySelector('ag-flex-row') as FlexRow;
      const flexInline = nestedContainer.querySelector('ag-flex-inline') as FlexInline;

      expect(flexRow).toBeTruthy();
      expect(flexInline).toBeTruthy();
      expect(nestedContainer.style.getPropertyValue('--flex-direction')).toBe('column');
      expect(flexRow.style.getPropertyValue('--flex-direction')).toBe('row');
      expect(flexInline.inline).toBe(true);
      nestedContainer.remove();
    });
  });
  describe('Dynamic Property Changes', () => {
    it('should handle multiple property changes in sequence', async () => {
      container.direction = 'column';
      container.justify = 'center';
      container.gap = '8px';
      await container.updateComplete;
      expect(container.style.getPropertyValue('--flex-direction')).toBe('column');
      expect(container.style.getPropertyValue('--flex-justify')).toBe('center');
      expect(container.style.getPropertyValue('--flex-gap')).toBe('8px');
    });
    it('should handle reverse toggle with existing direction', async () => {
      container.direction = 'row';
      await container.updateComplete;
      expect(container.style.getPropertyValue('--flex-direction')).toBe('row');
      container.reverse = true;
      await container.updateComplete;
      expect(container.style.getPropertyValue('--flex-direction')).toBe('row-reverse');
      container.reverse = false;
      await container.updateComplete;
      expect(container.style.getPropertyValue('--flex-direction')).toBe('row');
    });
  });
  describe('Accessibility with Interactive Content', () => {
    it('should maintain focus order with interactive children', async () => {
      const interactiveContainer = document.createElement('ag-flex-container') as FlexContainer;
      interactiveContainer.innerHTML = `
        <button>First</button>
        <button>Second</button>
        <button>Third</button>
      `;
      document.body.appendChild(interactiveContainer);
      await interactiveContainer.updateComplete;
      const buttons = interactiveContainer.querySelectorAll('button');
      buttons[0].focus();
      expect(document.activeElement).toBe(buttons[0]);

      // Verify natural focus order
      buttons[1].focus();
      expect(document.activeElement).toBe(buttons[1]);

      interactiveContainer.remove();
    });
    it('should have no a11y violations with interactive content', async () => {
      const interactiveContainer = document.createElement('ag-flex-container') as FlexContainer;
      interactiveContainer.innerHTML = `
        <button aria-label="Action 1">Action 1</button>
        <button aria-label="Action 2">Action 2</button>
      `;
      document.body.appendChild(interactiveContainer);
      await interactiveContainer.updateComplete;
      const results = await axe(interactiveContainer);
      expect(results).toHaveNoViolations();
      interactiveContainer.remove();
    });
  });
});
describe('FlexRow', () => {
  let flexRow: any;
  beforeEach(async () => {
    flexRow = document.createElement('ag-flex-row');
    flexRow.innerHTML = `<div>Item</div>`;
    document.body.appendChild(flexRow);
    await flexRow.updateComplete;
  });
  afterEach(() => {
    flexRow?.remove();
  });
  it('should have row direction by default', () => {
    expect(flexRow.direction).toBe('row');
    expect(flexRow.style.getPropertyValue('--flex-direction')).toBe('row');
  });
});
describe('FlexCol', () => {
  let flexCol: any;
  beforeEach(async () => {
    flexCol = document.createElement('ag-flex-col');
    flexCol.innerHTML = `<div>Item</div>`;
    document.body.appendChild(flexCol);
    await flexCol.updateComplete;
  });
  afterEach(() => {
    flexCol?.remove();
  });
  it('should have column direction by default', () => {
    expect(flexCol.direction).toBe('column');
    expect(flexCol.style.getPropertyValue('--flex-direction')).toBe('column');
  });
});
describe('FlexInline', () => {
  let flexInline: any;
  beforeEach(async () => {
    flexInline = document.createElement('ag-flex-inline');
    flexInline.innerHTML = `<div>Item</div>`;
    document.body.appendChild(flexInline);
    await flexInline.updateComplete;
  });
  afterEach(() => {
    flexInline?.remove();
  });
  it('should have inline-flex display by default', () => {
    expect(flexInline.inline).toBe(true);
  });
});
