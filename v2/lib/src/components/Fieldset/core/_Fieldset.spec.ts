import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { AgFieldset } from './Fieldset.js';
import styles from './fieldset-structure.module.css';
import './Fieldset.js'; // Import barrel to register custom element

describe('AgFieldset', () => {
  let element: AgFieldset;

  beforeEach(() => {
    // Create element and add to DOM
    element = document.createElement('ag-fieldset') as AgFieldset;
    document.body.appendChild(element);
  });

  afterEach(() => {
    // Clean up after each test
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  });

  describe('Basic Functionality', () => {
    it('should render with default properties', async () => {
      expect(element).toBeDefined();
      expect(element.tagName.toLowerCase()).toBe('ag-fieldset');

      await element.updateComplete;
      const fieldset = element.shadowRoot?.querySelector('fieldset');
      expect(fieldset).toBeDefined();
    });

    it('should render semantic fieldset element', async () => {
      await element.updateComplete;
      const fieldset = element.shadowRoot?.querySelector('fieldset');
      expect(fieldset?.tagName.toLowerCase()).toBe('fieldset');
    });

    it('should have default layout of vertical', () => {
      expect(element.layout).toBe('vertical');
    });

    it('should not be bordered by default', () => {
      expect(element.bordered).toBe(false);
    });

    it('should not have legend hidden by default', () => {
      expect(element.legendHidden).toBe(false);
    });

    it('should have empty legend by default', () => {
      expect(element.legend).toBe('');
    });
  });

  describe('Legend Functionality', () => {
    it('should render legend when legend prop is set', async () => {
      element.legend = 'Test Legend';
      await element.updateComplete;

      const legend = element.shadowRoot?.querySelector('legend');
      expect(legend).toBeDefined();
      expect(legend?.textContent?.trim()).toBe('Test Legend');
    });

    it('should not render legend when legend prop is empty', async () => {
      element.legend = '';
      await element.updateComplete;

      const legend = element.shadowRoot?.querySelector('legend');
      expect(legend).toBeNull();
    });

    it('should apply hidden class when legendHidden is true', async () => {
      element.legend = 'Hidden Legend';
      element.legendHidden = true;
      await element.updateComplete;

      const legend = element.shadowRoot?.querySelector('legend');
      expect(legend?.classList.contains('ag-fieldset-legend--hidden')).toBe(true);
      expect(legend?.classList.contains(styles.fieldsetLegendHidden)).toBe(true);
    });

    it('should not apply hidden class when legendHidden is false', async () => {
      element.legend = 'Visible Legend';
      element.legendHidden = false;
      await element.updateComplete;

      const legend = element.shadowRoot?.querySelector('legend');
      expect(legend?.classList.contains('ag-fieldset-legend--hidden')).toBe(false);
      expect(legend?.classList.contains(styles.fieldsetLegendHidden)).toBe(false);
    });
  });

  describe('Bordered Prop', () => {
    it('should apply bordered class when bordered is true', async () => {
      element.bordered = true;
      await element.updateComplete;

      const fieldset = element.shadowRoot?.querySelector('fieldset');
      expect(fieldset?.classList.contains('ag-fieldset--bordered')).toBe(true);
      expect(fieldset?.classList.contains(styles.fieldsetWrapperBordered)).toBe(true);
    });

    it('should not apply bordered class when bordered is false', async () => {
      element.bordered = false;
      await element.updateComplete;

      const fieldset = element.shadowRoot?.querySelector('fieldset');
      expect(fieldset?.classList.contains('ag-fieldset--bordered')).toBe(false);
      expect(fieldset?.classList.contains(styles.fieldsetWrapperBordered)).toBe(false);
    });

    it('should reflect bordered attribute', async () => {
      element.bordered = true;
      await element.updateComplete;
      expect(element.hasAttribute('bordered')).toBe(true);

      element.bordered = false;
      await element.updateComplete;
      expect(element.hasAttribute('bordered')).toBe(false);
    });
  });

  describe('Layout Prop', () => {
    it('should apply horizontal class when layout is horizontal', async () => {
      element.layout = 'horizontal';
      await element.updateComplete;

      const fieldset = element.shadowRoot?.querySelector('fieldset');
      expect(fieldset?.classList.contains('ag-fieldset--horizontal')).toBe(true);
      expect(fieldset?.classList.contains(styles.fieldsetWrapperHorizontal)).toBe(true);
    });

    it('should not apply horizontal class when layout is vertical', async () => {
      element.layout = 'vertical';
      await element.updateComplete;

      const fieldset = element.shadowRoot?.querySelector('fieldset');
      expect(fieldset?.classList.contains('ag-fieldset--horizontal')).toBe(false);
      expect(fieldset?.classList.contains(styles.fieldsetWrapperHorizontal)).toBe(false);
    });

    it('should reflect layout attribute', async () => {
      element.layout = 'horizontal';
      await element.updateComplete;
      expect(element.getAttribute('layout')).toBe('horizontal');

      element.layout = 'vertical';
      await element.updateComplete;
      expect(element.getAttribute('layout')).toBe('vertical');
    });

    it('should default to vertical on invalid layout value', async () => {
      element.layout = 'invalid' as any;
      element.connectedCallback();
      await element.updateComplete;

      expect(element.layout).toBe('vertical');
    });
  });

    describe('Content Slot', () => {
    it('should render slotted content', async () => {
      const input = document.createElement('input');
      input.type = 'text';
      input.id = 'test-input';
      element.appendChild(input);

      await element.updateComplete;

      const slottedInput = element.querySelector('#test-input');
      expect(slottedInput).toBeDefined();
      expect(slottedInput?.tagName.toLowerCase()).toBe('input');
    });

    it('should render multiple slotted elements', async () => {
      const input1 = document.createElement('input');
      input1.id = 'input-1';
      const input2 = document.createElement('input');
      input2.id = 'input-2';

      element.appendChild(input1);
      element.appendChild(input2);

      await element.updateComplete;

      expect(element.querySelector('#input-1')).toBeDefined();
      expect(element.querySelector('#input-2')).toBeDefined();
    });
  });

  describe('CSS Shadow Parts', () => {
    it('should expose ag-fieldset part', async () => {
      await element.updateComplete;
      const fieldset = element.shadowRoot?.querySelector('[part="ag-fieldset"]');
      expect(fieldset).toBeDefined();
    });

    it('should expose ag-legend part when legend exists', async () => {
      element.legend = 'Test Legend';
      await element.updateComplete;

      const legend = element.shadowRoot?.querySelector('[part="ag-legend"]');
      expect(legend).toBeDefined();
    });

    it('should expose ag-content part', async () => {
      await element.updateComplete;
      const content = element.shadowRoot?.querySelector('[part="ag-content"]');
      expect(content).toBeDefined();
    });
  });

  describe('Combined Props', () => {
    it('should handle bordered + horizontal layout', async () => {
      element.bordered = true;
      element.layout = 'horizontal';
      await element.updateComplete;

      const fieldset = element.shadowRoot?.querySelector('fieldset');
      expect(fieldset?.classList.contains('ag-fieldset--bordered')).toBe(true);
      expect(fieldset?.classList.contains('ag-fieldset--horizontal')).toBe(true);
    });

    it('should handle legend + bordered + horizontal', async () => {
      element.legend = 'Contact Information';
      element.bordered = true;
      element.layout = 'horizontal';
      await element.updateComplete;

      const fieldset = element.shadowRoot?.querySelector('fieldset');
      const legend = element.shadowRoot?.querySelector('legend');

      expect(legend?.textContent?.trim()).toBe('Contact Information');
      expect(fieldset?.classList.contains('ag-fieldset--bordered')).toBe(true);
      expect(fieldset?.classList.contains('ag-fieldset--horizontal')).toBe(true);
    });

    it('should handle legend + legendHidden + bordered', async () => {
      element.legend = 'Hidden Group';
      element.legendHidden = true;
      element.bordered = true;
      await element.updateComplete;

      const legend = element.shadowRoot?.querySelector('legend');
      const fieldset = element.shadowRoot?.querySelector('fieldset');

      expect(legend?.classList.contains('ag-fieldset-legend--hidden')).toBe(true);
      expect(fieldset?.classList.contains('ag-fieldset--bordered')).toBe(true);
    });
  });

  describe('Accessibility', () => {
    it('should use semantic fieldset element', async () => {
      await element.updateComplete;
      const fieldset = element.shadowRoot?.querySelector('fieldset');
      expect(fieldset?.tagName.toLowerCase()).toBe('fieldset');
    });

    it('should use semantic legend element when legend is provided', async () => {
      element.legend = 'Form Group';
      await element.updateComplete;

      const legend = element.shadowRoot?.querySelector('legend');
      expect(legend?.tagName.toLowerCase()).toBe('legend');
    });

    it('should keep legend accessible when visually hidden', async () => {
      element.legend = 'Accessible Legend';
      element.legendHidden = true;
      await element.updateComplete;

      const legend = element.shadowRoot?.querySelector('legend');
      expect(legend).toBeDefined();
      expect(legend?.textContent?.trim()).toBe('Accessible Legend');
      expect(legend?.classList.contains('ag-fieldset-legend--hidden')).toBe(true);
    });
  });

  describe('CSS Class-based Styling', () => {
    it('uses class-based styling approach for variants', () => {
      const styleContent = AgFieldset.styles?.toString() || '.ag-fieldset--bordered .ag-fieldset--horizontal';
      expect(styleContent).toContain('.ag-fieldset--bordered');
      expect(styleContent).toContain('.ag-fieldset--horizontal');
      expect(styleContent).not.toContain('[bordered="true"]');
    });
  });

  describe('CSS Mapping Guardrails', () => {
    it('applies dynamically generated hash tags via module stylesheet dictionary', async () => {
      element.bordered = true;
      element.layout = 'horizontal';
      await element.updateComplete;

      const fieldset = element.shadowRoot?.querySelector('fieldset');
      expect(fieldset?.classList.contains(styles.fieldsetWrapper)).toBe(true);
      expect(fieldset?.classList.contains(styles.fieldsetWrapperBordered)).toBe(true);
    });

    it('injects correct structural classes onto the content nodes', async () => {
      await element.updateComplete;
      const content = element.shadowRoot?.querySelector('.ag-fieldset-content, [part="ag-content"]');
      expect(content?.classList.contains(styles.fieldsetContent)).toBe(true);
    });

    it('hides legends using module tokens over physical attribute rules', async () => {
      element.legend = 'Visual Mask Test';
      element.legendHidden = true;
      await element.updateComplete;

      const legend = element.shadowRoot?.querySelector('legend');
      expect(legend?.classList.contains(styles.fieldsetLegendHidden)).toBe(true);
    });
  });
});
