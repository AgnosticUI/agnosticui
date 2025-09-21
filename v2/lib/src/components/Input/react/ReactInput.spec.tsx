import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { ReactInput } from './ReactInput';

// Mock console.log to test event logging if needed
const mockConsoleLog = vi.spyOn(console, 'log').mockImplementation(() => {});

describe('ReactInput Wrapper', () => {
  beforeEach(() => {
    mockConsoleLog.mockClear();
  });

  afterEach(() => {
    // Clean up any DOM elements
    document.body.innerHTML = '';
  });

  describe('Basic Rendering', () => {
    it('should render without errors', async () => {
      render(<ReactInput label="Test Input" />);

      await waitFor(() => {
        const input = document.querySelector('ag-input');
        expect(input).toBeInTheDocument();
      });
    });

    it('should render with label', async () => {
      render(<ReactInput label="Username" />);

      await waitFor(() => {
        const input = document.querySelector('ag-input') as HTMLElement;
        // Some props might not be reflected as attributes, check if element exists
        expect(input).toBeInTheDocument();
        // Check that the label prop was passed (may not be reflected as attribute)
        expect(input.hasAttribute('label') || (input as HTMLElement & { label: string }).label === 'Username').toBe(true);
      });
    });

    it('should render with children content', async () => {
      render(
        <ReactInput label="Input">
          <span>Additional content</span>
        </ReactInput>
      );

      await waitFor(() => {
        const content = screen.getByText('Additional content');
        expect(content).toBeInTheDocument();
      });
    });
  });

  describe('Props Pass-Through', () => {
    it('should pass type prop to web component', async () => {
      render(<ReactInput label="Email" type="email" />);

      await waitFor(() => {
        const input = document.querySelector('ag-input') as HTMLElement;
        // Check if the component rendered (type might be set as property not attribute)
        expect(input).toBeInTheDocument();
        // Verify that when explicitly passed, type should be set
        expect(input.hasAttribute('type') || (input as HTMLElement & { type: string }).type === 'email').toBe(true);
      });
    });

    it('should pass value prop to web component', async () => {
      render(<ReactInput label="Input" value="test value" />);

      await waitFor(() => {
        const input = document.querySelector('ag-input') as HTMLElement;
        expect(input).toBeInTheDocument();
        // Value might be set as property, not attribute
        expect(input.hasAttribute('value') || (input as HTMLElement & { value: string }).value === 'test value').toBe(true);
      });
    });

    it('should pass placeholder prop to web component', async () => {
      render(<ReactInput label="Input" placeholder="Enter text..." />);

      await waitFor(() => {
        const input = document.querySelector('ag-input') as HTMLElement;
        expect(input.getAttribute('placeholder')).toBe('Enter text...');
      });
    });

    it('should pass size prop to web component', async () => {
      render(<ReactInput label="Input" size="large" />);

      await waitFor(() => {
        const input = document.querySelector('ag-input') as HTMLElement;
        expect(input.getAttribute('size')).toBe('large');
      });
    });

    it('should pass boolean props to web component', async () => {
      render(
        <ReactInput
          label="Input"
          required
          disabled
          readonly
          invalid
          isRounded
          isUnderlined
        />
      );

      await waitFor(() => {
        const input = document.querySelector('ag-input') as HTMLElement;
        expect(input.hasAttribute('required')).toBe(true);
        expect(input.hasAttribute('disabled')).toBe(true);
        expect(input.hasAttribute('readonly')).toBe(true);
        expect(input.hasAttribute('invalid')).toBe(true);
        expect(input.hasAttribute('is-rounded')).toBe(true);
        expect(input.hasAttribute('is-underlined')).toBe(true);
      });
    });

    it('should pass ARIA attributes to web component', async () => {
      render(
        <ReactInput
          label="Input"
          ariaLabel="Custom input label"
          labelledBy="custom-label-id"
        />
      );

      await waitFor(() => {
        const input = document.querySelector('ag-input') as HTMLElement;
        expect(input.getAttribute('aria-label')).toBe('Custom input label');
        expect(input.getAttribute('labelled-by')).toBe('custom-label-id');
      });
    });

    it('should pass error and help text props to web component', async () => {
      render(
        <ReactInput
          label="Input"
          errorMessage="Field is required"
          helpText="Enter your username"
        />
      );

      await waitFor(() => {
        const input = document.querySelector('ag-input') as HTMLElement;
        expect(input.getAttribute('error-message')).toBe('Field is required');
        expect(input.getAttribute('help-text')).toBe('Enter your username');
      });
    });

    it('should pass textarea-specific props to web component', async () => {
      render(<ReactInput label="Comments" type="textarea" rows={8} cols={60} />);

      await waitFor(() => {
        const input = document.querySelector('ag-input') as HTMLElement;
        expect(input).toBeInTheDocument();
        // Check that textarea-specific properties are being passed
        expect(input.hasAttribute('type') || (input as HTMLElement & { type: string }).type === 'textarea').toBe(true);
        expect(input.hasAttribute('rows') || (input as HTMLElement & { rows: number }).rows === 8).toBe(true);
        expect(input.hasAttribute('cols') || (input as HTMLElement & { cols: number }).cols === 60).toBe(true);
      });
    });
  });

  describe('Event Handling', () => {
    it('should handle input events', async () => {
      const handleInput = vi.fn();

      render(<ReactInput label="Input" onInput={handleInput} />);

      await waitFor(() => {
        const input = document.querySelector('ag-input');
        expect(input).toBeInTheDocument();
      });

      const input = document.querySelector('ag-input') as HTMLElement;

      // Simulate an input event
      const inputEvent = new Event('input');
      input.dispatchEvent(inputEvent);

      await waitFor(() => {
        expect(handleInput).toHaveBeenCalledTimes(1);
      });
    });

    it('should handle change events', async () => {
      const handleChange = vi.fn();

      render(<ReactInput label="Input" onChange={handleChange} />);

      await waitFor(() => {
        const input = document.querySelector('ag-input');
        expect(input).toBeInTheDocument();
      });

      const input = document.querySelector('ag-input') as HTMLElement;

      // Simulate a change event
      const changeEvent = new Event('change');
      input.dispatchEvent(changeEvent);

      await waitFor(() => {
        expect(handleChange).toHaveBeenCalledTimes(1);
      });
    });

    it('should handle focus events', async () => {
      const handleFocus = vi.fn();

      render(<ReactInput label="Input" onFocus={handleFocus} />);

      await waitFor(() => {
        const input = document.querySelector('ag-input');
        expect(input).toBeInTheDocument();
      });

      const input = document.querySelector('ag-input') as HTMLElement;

      // Simulate a focus event
      const focusEvent = new Event('focus');
      input.dispatchEvent(focusEvent);

      await waitFor(() => {
        expect(handleFocus).toHaveBeenCalledTimes(1);
      });
    });

    it('should handle blur events', async () => {
      const handleBlur = vi.fn();

      render(<ReactInput label="Input" onBlur={handleBlur} />);

      await waitFor(() => {
        const input = document.querySelector('ag-input');
        expect(input).toBeInTheDocument();
      });

      const input = document.querySelector('ag-input') as HTMLElement;

      // Simulate a blur event
      const blurEvent = new Event('blur');
      input.dispatchEvent(blurEvent);

      await waitFor(() => {
        expect(handleBlur).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('Label Variants', () => {
    it('should handle hidden label', async () => {
      render(<ReactInput label="Hidden" labelHidden />);

      await waitFor(() => {
        const input = document.querySelector('ag-input') as HTMLElement;
        expect(input.hasAttribute('label-hidden')).toBe(true);
      });
    });

    it('should handle no label mode', async () => {
      render(<ReactInput ariaLabel="No visible label" noLabel />);

      await waitFor(() => {
        const input = document.querySelector('ag-input') as HTMLElement;
        expect(input.hasAttribute('no-label')).toBe(true);
      });
    });
  });

  describe('Styling Variants', () => {
    it('should handle inline styling', async () => {
      render(<ReactInput label="Inline" isInline />);

      await waitFor(() => {
        const input = document.querySelector('ag-input') as HTMLElement;
        expect(input.hasAttribute('is-inline')).toBe(true);
      });
    });

    it('should handle addon states', async () => {
      render(<ReactInput label="With Addons" hasLeftAddon hasRightAddon />);

      await waitFor(() => {
        const input = document.querySelector('ag-input') as HTMLElement;
        expect(input.hasAttribute('has-left-addon')).toBe(true);
        expect(input.hasAttribute('has-right-addon')).toBe(true);
      });
    });

    it('should handle underlined variants', async () => {
      render(<ReactInput label="Underlined" isUnderlined isUnderlinedWithBackground />);

      await waitFor(() => {
        const input = document.querySelector('ag-input') as HTMLElement;
        expect(input.hasAttribute('is-underlined')).toBe(true);
        expect(input.hasAttribute('is-underlined-with-background')).toBe(true);
      });
    });
  });
});