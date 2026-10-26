import { describe, it, expect, beforeEach, afterEach, vi, beforeAll } from 'vitest';
import { axe, toHaveNoViolations } from 'jest-axe';
import styles from './slider-structure.module.css';
import './Slider.js';

expect.extend(toHaveNoViolations);

// Mock ElementInternals for Happy DOM environment execution
beforeAll(() => {
  if (!HTMLElement.prototype.attachInternals) {
    HTMLElement.prototype.attachInternals = vi.fn().mockImplementation(() => ({
      form: null,
      labels: [],
      setFormValue: vi.fn(),
      setValidity: vi.fn(),
      checkValidity: vi.fn(() => true),
      reportValidity: vi.fn(() => true),
      validity: {},
      validationMessage: '',
      willValidate: true,
    }));
  }
});

type AgSliderElement = HTMLElementTagNameMap['ag-slider'];

describe('ag-slider core layout assertions', () => {
  let element: AgSliderElement;

  beforeEach(async () => {
    element = document.createElement('ag-slider');
    document.body.appendChild(element);
    if (element.updateComplete) await element.updateComplete;
  });

  afterEach(() => {
    element?.remove();
    vi.clearAllMocks();
  });

  describe('Structural & Default Value Tokens', () => {
    it('should confirm component definition inside the registry custom elements map', () => {
      expect(element).toBeInstanceOf(HTMLElement);
      expect(element.tagName).toBe('AG-SLIDER');
    });

    it('should verify layout module style dictionary token structures exist', () => {
      expect(typeof styles.sliderWrapper).toBe('string');
      expect(typeof styles.sliderContainer).toBe('string');
      expect(typeof styles.sliderTrack).toBe('string');
    });

    it('should fallback natively to specified defaults', () => {
      expect(element.min).toBe(0);
      expect(element.max).toBe(100);
      expect(element.step).toBe(1);
      expect(element.value).toBe(0);
      expect(element.dual).toBe(false);
      expect(element.vertical).toBe(false);
      expect(element.filled).toBe(false);
      expect(element.monochrome).toBe(false);
      expect(element.disabled).toBe(false);
      expect(element.readonly).toBe(false);
      expect(element.size).toBe('default');
    });

    it('should apply atomic property updates asynchronously', async () => {
      element.value = 50;
      if (element.updateComplete) await element.updateComplete;
      expect(element.value).toBe(50);
    });

    it('should split values array accurately when mapping multi-thumb states', async () => {
      element.dual = true;
      element.value = [25, 75];
      if (element.updateComplete) await element.updateComplete;
      
      expect(element.dual).toBe(true);
      expect(element.value).toEqual([25, 75]);
    });
  });

    describe('Range Boundaries & Validation Constraints', () => {
    it('should enforce hard clamp limits on out-of-bound configurations', async () => {
      element.min = 10;
      element.max = 90;
      element.value = 5; // Sub-minimum mapping
      if (element.updateComplete) await element.updateComplete;
      expect(element.value).toBe(10);

      element.value = 95; // Super-maximum mapping
      if (element.updateComplete) await element.updateComplete;
      expect(element.value).toBe(90);
    });

    it('should capture increments and snap values across active step ticks', async () => {
      element.step = 10;
      element.value = 23;
      if (element.updateComplete) await element.updateComplete;
      expect((element.value as number) % 10).toBe(0);
    });
  });

  describe('Event Propagation & Simulation Hooks', () => {
    it('should cascade input tracking handlers to external receivers', async () => {
      const inputHandler = vi.fn();
      element.addEventListener('input', inputHandler);

      element['_updateValue'](30, 'input');
      if (element.updateComplete) await element.updateComplete;
      expect(inputHandler).toHaveBeenCalled();
    });

    it('should trigger commit change triggers when updating bounds', async () => {
      const changeHandler = vi.fn();
      element.addEventListener('change', changeHandler);

      element['_updateValue'](40, 'change');
      if (element.updateComplete) await element.updateComplete;
      expect(changeHandler).toHaveBeenCalled();
    });

    it('should drop incoming input state changes when read-only attribute blocks update layers', async () => {
      element.readonly = true;
      if (element.updateComplete) await element.updateComplete;

      const inputHandler = vi.fn();
      element.addEventListener('input', inputHandler);

      element['_updateValue'](60, 'input');
      if (element.updateComplete) await element.updateComplete;
      expect(inputHandler).not.toHaveBeenCalled();
    });

    it('should ignore incoming interaction frames when disabled property locks interface operations', async () => {
      element.disabled = true;
      if (element.updateComplete) await element.updateComplete;

      const inputHandler = vi.fn();
      element.addEventListener('input', inputHandler);

      element['_updateValue'](70, 'input');
      if (element.updateComplete) await element.updateComplete;
      expect(inputHandler).not.toHaveBeenCalled();
    });
  });

  describe('Dual Slider Gap Constraints', () => {
    beforeEach(async () => {
      element.dual = true;
      element.value = [30, 70];
      if (element.updateComplete) await element.updateComplete;
    });

    it('should lock active ranges to prevent cross-thumb overlap issues', async () => {
      element['_updateValue']([45, 46], 'input');
      if (element.updateComplete) await element.updateComplete;

      const values = element.value as [number, number];
      expect(values[1] - values[0]).toBeGreaterThanOrEqual(element.step);
    });
  });

    describe('Visual Class Variant Lookups', () => {
    it('should map component hooks to explicit style classes instead of raw literal strings', async () => {
      element.filled = true;
      if (element.updateComplete) await element.updateComplete;
      expect(element.filled).toBe(true);
      expect(element.hasAttribute('filled')).toBe(true);
    });

    it('should support monochrome element themes', async () => {
      element.monochrome = true;
      if (element.updateComplete) await element.updateComplete;
      expect(element.monochrome).toBe(true);
      expect(element.hasAttribute('monochrome')).toBe(true);
    });

    it('should configure vertical variations smoothly across layouts', async () => {
      element.vertical = true;
      if (element.updateComplete) await element.updateComplete;
      expect(element.vertical).toBe(true);
      expect(element.hasAttribute('vertical')).toBe(true);
    });
  });

  describe('Accessibility Engine Compliance Validation', () => {
    it('should bind native input properties to assistive tech descriptors for single elements', async () => {
      element.value = 50;
      if (element.updateComplete) await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      expect(input).toBeDefined();
      expect(input.getAttribute('aria-valuenow')).toBe('50');
      expect(input.getAttribute('aria-valuemin')).toBe('0');
      expect(input.getAttribute('aria-valuemax')).toBe('100');
    });

    it('should dual-bind min and max indicators inside group controllers', async () => {
      element.dual = true;
      element.value = [20, 80];
      if (element.updateComplete) await element.updateComplete;

      const inputs = element.shadowRoot?.querySelectorAll('input') as NodeListOf<HTMLInputElement>;
      expect(inputs).toHaveLength(2);

      const [minInput, maxInput] = Array.from(inputs);
      // Correct assertions to match [20, 80]
      expect(minInput.getAttribute('aria-valuenow')).toBe('20');
      expect(maxInput.getAttribute('aria-valuenow')).toBe('80');
    });


    it('should clear structural automated accessibility audits safely', async () => {
      element.label = 'Volume Control Settings';
      if (element.updateComplete) await element.updateComplete;

      const results = await axe(element);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Teardown & Lifecycle Verification', () => {
    it('should remove window event handlers completely upon component disconnection from root trees', () => {
      const removeEventListenerSpy = vi.spyOn(document, 'removeEventListener');
      element.disconnectedCallback();

      expect(removeEventListenerSpy).toHaveBeenCalledWith('pointermove', expect.any(Function));
      expect(removeEventListenerSpy).toHaveBeenCalledWith('pointerup', expect.any(Function));
      expect(removeEventListenerSpy).toHaveBeenCalledWith('pointercancel', expect.any(Function));
      
      removeEventListenerSpy.mockRestore();
    });
  });
});
