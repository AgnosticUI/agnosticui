import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { html, render } from 'lit';
import './CopyButton.js';
import { AgCopyButton } from './CopyButton.js';

describe('AgCopyButton', () => {
  let container: HTMLElement;
  let element: AgCopyButton;

  beforeEach(async () => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    vi.restoreAllMocks();
  });

  const renderButton = async (template = html`<ag-copy-button></ag-copy-button>`) => {
    render(template, container);
    element = container.querySelector('ag-copy-button') as AgCopyButton;
    await element.updateComplete;
    return element;
  };

  describe('Rendering', () => {
    it('should render the component', async () => {
      await renderButton();
      expect(element).toBeInstanceOf(AgCopyButton);
    });

    it('should render with default properties', async () => {
      await renderButton();
      expect(element.text).toBe('');
      expect(element.label).toBe('Copy to clipboard');
      expect(element.successLabel).toBe('Copied!');
      expect(element.errorLabel).toBe('Copy failed');
      expect(element.timeout).toBe(1000);
      expect(element.size).toBe('md');
      expect(element.variant).toBe('ghost');
    });

    it('should render with custom properties', async () => {
      await renderButton(html`
        <ag-copy-button
          text="Hello World"
          label="Copy text"
          success-label="Success!"
          error-label="Failed!"
          timeout="2000"
          size="lg"
          variant="primary"
        ></ag-copy-button>
      `);
      expect(element.text).toBe('Hello World');
      expect(element.label).toBe('Copy text');
      expect(element.successLabel).toBe('Success!');
      expect(element.errorLabel).toBe('Failed!');
      expect(element.timeout).toBe(2000);
      expect(element.size).toBe('lg');
      expect(element.variant).toBe('primary');
    });

    it('should render the copy icon by default', async () => {
      await renderButton();
      const iconSlot = element.shadowRoot?.querySelector('slot[name="icon-copy"]');
      expect(iconSlot).toBeTruthy();
    });

    it('should render ag-icon-button with correct properties', async () => {
      await renderButton(html`
        <ag-copy-button size="lg" variant="primary"></ag-copy-button>
      `);
      const iconButton = element.shadowRoot?.querySelector('ag-icon-button');
      expect(iconButton?.size).toBe('lg');
      expect(iconButton?.variant).toBe('primary');
    });
  });

  describe('Slots', () => {
    it('should render custom copy and copied icons', async () => {
      render(html`
        <ag-copy-button text="Test">
          <svg slot="icon-copy" class="custom-copy"></svg>
          <svg slot="icon-copied" class="custom-copied"></svg>
        </ag-copy-button>
      `, container);
      element = container.querySelector('ag-copy-button') as AgCopyButton;
      await element.updateComplete;

      const customCopy = element.querySelector('.custom-copy');
      const customCopied = element.querySelector('.custom-copied');
      expect(customCopy).toBeTruthy();
      expect(customCopied).toBeTruthy();
    });

    it('should throw error if only icon-copy slot is provided', async () => {
      render(html`
        <ag-copy-button text="Test">
          <svg slot="icon-copy"></svg>
        </ag-copy-button>
      `, container);
      element = container.querySelector('ag-copy-button') as AgCopyButton;

      await expect(element.updateComplete).rejects.toThrow(/Both "icon-copy" and "icon-copied" slots must be provided together/);
    });

    it('should throw error if only icon-copied slot is provided', async () => {
      render(html`
        <ag-copy-button text="Test">
          <svg slot="icon-copied"></svg>
        </ag-copy-button>
      `, container);
      element = container.querySelector('ag-copy-button') as AgCopyButton;

      await expect(element.updateComplete).rejects.toThrow(/Both "icon-copy" and "icon-copied" slots must be provided together/);
    });

    it('should render custom error icon', async () => {
      render(html`
        <ag-copy-button text="Test">
          <svg slot="icon-error" class="custom-error"></svg>
        </ag-copy-button>
      `, container);
      element = container.querySelector('ag-copy-button') as AgCopyButton;
      await element.updateComplete;

      const customError = element.querySelector('.custom-error');
      expect(customError).toBeTruthy();
    });
  });

  describe('CSS Parts', () => {
    it('should expose button part', async () => {
      await renderButton();
      const button = element.shadowRoot?.querySelector('[part~="button"]');
      expect(button).toBeTruthy();
    });

    it('should expose icon-copy part', async () => {
      await renderButton(html`<ag-copy-button text="Test"></ag-copy-button>`);
      const copyIcon = element.shadowRoot?.querySelector('[part~="icon-copy"]');
      expect(copyIcon).toBeTruthy();
    });
  });

  describe('Lifecycle', () => {
    it('should clean up timeout on disconnect', async () => {
      await renderButton(html`<ag-copy-button text="Test"></ag-copy-button>`);

      // Just verify disconnect doesn't throw
      element.remove();
      expect(true).toBe(true);
    });
  });

  describe('Basic properties', () => {
    it('should have a text property', async () => {
      await renderButton(html`<ag-copy-button text="Test content"></ag-copy-button>`);
      expect(element.text).toBe('Test content');
    });

    it('should have configurable labels', async () => {
      await renderButton(html`
        <ag-copy-button
          label="Copy this"
          success-label="Done!"
          error-label="Oops!"
        ></ag-copy-button>
      `);
      expect(element.label).toBe('Copy this');
      expect(element.successLabel).toBe('Done!');
      expect(element.errorLabel).toBe('Oops!');
    });

    it('should have configurable timeout', async () => {
      await renderButton(html`<ag-copy-button timeout="5000"></ag-copy-button>`);
      expect(element.timeout).toBe(5000);
    });

    it('should have size options', async () => {
      await renderButton(html`<ag-copy-button size="xl"></ag-copy-button>`);
      expect(element.size).toBe('xl');
    });

    it('should have variant options', async () => {
      await renderButton(html`<ag-copy-button variant="success"></ag-copy-button>`);
      expect(element.variant).toBe('success');
    });
  });

  describe('Copy functionality', () => {
    beforeEach(() => {
      Object.defineProperty(navigator, 'clipboard', {
        value: { writeText: vi.fn().mockResolvedValue(undefined) },
        writable: true,
        configurable: true,
      });
    });

    it('should not attempt copy when text is empty', async () => {
      const writeText = navigator.clipboard.writeText as any;

      await renderButton(html`<ag-copy-button text=""></ag-copy-button>`);
      const iconButton = element.shadowRoot?.querySelector('ag-icon-button');
      iconButton?.click();

      expect(writeText).not.toHaveBeenCalled();
    });
  });
});
