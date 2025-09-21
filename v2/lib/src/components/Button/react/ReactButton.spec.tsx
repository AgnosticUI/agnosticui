import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { ReactButton } from './ReactButton';

// Mock console.log to test event logging if needed
const mockConsoleLog = vi.spyOn(console, 'log').mockImplementation(() => {});

describe('ReactButton Wrapper', () => {
  beforeEach(() => {
    mockConsoleLog.mockClear();
  });

  afterEach(() => {
    // Clean up any DOM elements
    document.body.innerHTML = '';
  });

  describe('Basic Rendering', () => {
    it('should render without errors', async () => {
      render(<ReactButton>Test Button</ReactButton>);

      await waitFor(() => {
        const button = document.querySelector('ag-button');
        expect(button).toBeInTheDocument();
      });
    });

    it('should render children content', async () => {
      render(<ReactButton>Click Me</ReactButton>);

      await waitFor(() => {
        const button = document.querySelector('ag-button');
        expect(button).toHaveTextContent('Click Me');
      });
    });
  });

  describe('Props Pass-Through', () => {
    it('should pass type prop to web component', async () => {
      render(<ReactButton type="submit">Submit</ReactButton>);

      await waitFor(() => {
        const button = document.querySelector('ag-button') as HTMLElement & { type: string };
        expect(button.type).toBe('submit');
      });
    });

    it('should pass disabled prop to web component', async () => {
      render(<ReactButton disabled>Disabled</ReactButton>);

      await waitFor(() => {
        const button = document.querySelector('ag-button') as HTMLElement & { disabled: boolean };
        expect(button.disabled).toBe(true);
      });
    });

    it('should pass loading prop to web component', async () => {
      render(<ReactButton loading>Loading</ReactButton>);

      await waitFor(() => {
        const button = document.querySelector('ag-button') as HTMLElement & { loading: boolean };
        expect(button.loading).toBe(true);
      });
    });

    it('should pass toggle and pressed props to web component', async () => {
      render(<ReactButton toggle pressed>Toggle</ReactButton>);

      await waitFor(() => {
        const button = document.querySelector('ag-button') as HTMLElement & { toggle: boolean; pressed: boolean };
        expect(button.toggle).toBe(true);
        expect(button.pressed).toBe(true);
      });
    });

    it('should pass ARIA attributes to web component', async () => {
      render(
        <ReactButton
          ariaLabel="Close dialog"
          ariaDescribedby="help-text"
        >
          Close
        </ReactButton>
      );

      await waitFor(() => {
        const button = document.querySelector('ag-button');
        expect(button).toHaveAttribute('aria-label', 'Close dialog');
        expect(button).toHaveAttribute('aria-describedby', 'help-text');
      });
    });
  });

  describe('Event Handling', () => {
    it('should handle click events', async () => {
      const handleClick = vi.fn();

      render(<ReactButton onClick={handleClick}>Click Me</ReactButton>);

      await waitFor(() => {
        const button = document.querySelector('ag-button');
        expect(button).toBeInTheDocument();
      });

      const button = document.querySelector('ag-button') as HTMLElement;
      fireEvent.click(button);

      await waitFor(() => {
        expect(handleClick).toHaveBeenCalledTimes(1);
      });
    });

    it('should handle toggle events', async () => {
      const handleToggle = vi.fn();

      render(<ReactButton toggle onToggle={handleToggle}>Toggle</ReactButton>);

      await waitFor(() => {
        const button = document.querySelector('ag-button');
        expect(button).toBeInTheDocument();
      });

      const button = document.querySelector('ag-button') as HTMLElement;

      // Simulate a toggle event with detail
      const toggleEvent = new CustomEvent('toggle', {
        detail: { pressed: true }
      });

      button.dispatchEvent(toggleEvent);

      await waitFor(() => {
        expect(handleToggle).toHaveBeenCalledWith({ pressed: true });
      });
    });

    it('should handle className and id props', async () => {
      render(
        <ReactButton className="custom-class" id="my-button">
          Styled Button
        </ReactButton>
      );

      await waitFor(() => {
        const button = document.querySelector('ag-button');
        expect(button).toHaveClass('custom-class');
        expect(button).toHaveAttribute('id', 'my-button');
      });
    });
  });
});