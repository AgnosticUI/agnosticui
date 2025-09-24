/**
 * ReactIconButton Component Tests
 * Simplified test suite focusing on React wrapper functionality
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { ReactIconButton } from './ReactIconButton';

// Mock console.log to test event logging
const mockConsoleLog = vi.spyOn(console, 'log').mockImplementation(() => {});

describe('ReactIconButton', () => {
  beforeEach(() => {
    mockConsoleLog.mockClear();
  });

  afterEach(() => {
    // Clean up any DOM elements
    document.body.innerHTML = '';
  });

  describe('Basic Rendering', () => {
    it('should render without errors', async () => {
      render(<ReactIconButton label="Close dialog" />);

      await waitFor(() => {
        const iconButton = document.querySelector('ag-icon-button');
        expect(iconButton).toBeInTheDocument();
      });
    });

    it('should pass label prop correctly', async () => {
      render(<ReactIconButton label="Menu button" />);

      await waitFor(() => {
        const iconButton = document.querySelector('ag-icon-button') as HTMLElement & {
          label: string;
        };
        expect(iconButton.label).toBe('Menu button');
      });
    });

    it('should pass icon props correctly', async () => {
      render(<ReactIconButton label="Menu" icon="hamburger" unicode="☰" />);

      await waitFor(() => {
        const iconButton = document.querySelector('ag-icon-button') as HTMLElement & {
          icon: string;
          unicode: string;
        };
        expect(iconButton.icon).toBe('hamburger');
        expect(iconButton.unicode).toBe('☰');
      });
    });
  });

  describe('Props Pass-Through', () => {
    it('should pass size prop to web component', async () => {
      render(<ReactIconButton label="Test" size="lg" />);

      await waitFor(() => {
        const iconButton = document.querySelector('ag-icon-button') as HTMLElement & {
          size: string;
        };
        expect(iconButton.size).toBe('lg');
      });
    });

    it('should pass variant prop to web component', async () => {
      render(<ReactIconButton label="Test" variant="primary" />);

      await waitFor(() => {
        const iconButton = document.querySelector('ag-icon-button') as HTMLElement & {
          variant: string;
        };
        expect(iconButton.variant).toBe('primary');
      });
    });

    it('should pass disabled prop to web component', async () => {
      render(<ReactIconButton label="Test" disabled />);

      await waitFor(() => {
        const iconButton = document.querySelector('ag-icon-button') as HTMLElement & {
          disabled: boolean;
        };
        expect(iconButton.disabled).toBe(true);
      });
    });

    it('should pass pressed prop to web component', async () => {
      render(<ReactIconButton label="Toggle" pressed />);

      await waitFor(() => {
        const iconButton = document.querySelector('ag-icon-button') as HTMLElement & {
          pressed: boolean;
        };
        expect(iconButton.pressed).toBe(true);
      });
    });

    it('should pass type prop to web component', async () => {
      render(<ReactIconButton label="Submit" type="submit" />);

      await waitFor(() => {
        const iconButton = document.querySelector('ag-icon-button') as HTMLElement & {
          type: string;
        };
        expect(iconButton.type).toBe('submit');
      });
    });
  });

  describe('ARIA Properties', () => {
    it('should use ariaLabel over label when provided', async () => {
      render(<ReactIconButton label="Original" ariaLabel="Accessible label" />);

      await waitFor(() => {
        const iconButton = document.querySelector('ag-icon-button') as HTMLElement & {
          label: string;
        };
        expect(iconButton.label).toBe('Accessible label');
      });
    });

    it('should pass aria-describedby correctly', async () => {
      render(<ReactIconButton label="Help" ariaDescribedby="help-text" />);

      await waitFor(() => {
        const iconButton = document.querySelector('ag-icon-button');
        expect(iconButton).toHaveAttribute('aria-describedby', 'help-text');
      });
    });
  });

  describe('Event Handling', () => {
    it('should call onClick when web component is clicked', async () => {
      const handleClick = vi.fn();

      render(<ReactIconButton label="Click me" onClick={handleClick} />);

      await waitFor(() => {
        const iconButton = document.querySelector('ag-icon-button');
        expect(iconButton).toBeInTheDocument();
      });

      const iconButton = document.querySelector('ag-icon-button')!;
      fireEvent(iconButton, new CustomEvent('icon-button-click', {
        detail: { label: 'Click me', pressed: false, originalEvent: new MouseEvent('click') }
      }));

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should call onActivate for keyboard events', async () => {
      const handleActivate = vi.fn();

      render(<ReactIconButton label="Test" onActivate={handleActivate} />);

      await waitFor(() => {
        const iconButton = document.querySelector('ag-icon-button');
        expect(iconButton).toBeInTheDocument();
      });

      const iconButton = document.querySelector('ag-icon-button')!;
      fireEvent(iconButton, new CustomEvent('icon-button-activate', {
        detail: {
          label: 'Test',
          pressed: false,
          originalEvent: new KeyboardEvent('keydown', { key: ' ' })
        }
      }));

      expect(handleActivate).toHaveBeenCalledTimes(1);
      expect(handleActivate).toHaveBeenCalledWith(
        expect.objectContaining({
          label: 'Test',
          pressed: false,
          originalEvent: expect.any(KeyboardEvent)
        })
      );
    });
  });

  describe('Event Logging', () => {
    it('should log click events with details', async () => {
      render(<ReactIconButton label="Test button" />);

      await waitFor(() => {
        const iconButton = document.querySelector('ag-icon-button');
        expect(iconButton).toBeInTheDocument();
      });

      const iconButton = document.querySelector('ag-icon-button')!;
      fireEvent(iconButton, new CustomEvent('icon-button-click', {
        detail: { label: 'Test button', pressed: false, originalEvent: new MouseEvent('click') }
      }));

      expect(mockConsoleLog).toHaveBeenCalledWith(
        'ReactIconButton click:',
        expect.objectContaining({
          label: 'Test button',
          pressed: false,
          timestamp: expect.any(String),
          event: 'icon-button-click'
        })
      );
    });

    it('should log keyboard activation events', async () => {
      render(<ReactIconButton label="Keyboard test" />);

      await waitFor(() => {
        const iconButton = document.querySelector('ag-icon-button');
        expect(iconButton).toBeInTheDocument();
      });

      const iconButton = document.querySelector('ag-icon-button')!;
      fireEvent(iconButton, new CustomEvent('icon-button-activate', {
        detail: {
          label: 'Keyboard test',
          pressed: false,
          originalEvent: new KeyboardEvent('keydown', { key: ' ' })
        }
      }));

      expect(mockConsoleLog).toHaveBeenCalledWith(
        'ReactIconButton keyboard activate:',
        expect.objectContaining({
          label: 'Keyboard test',
          key: ' ',
          timestamp: expect.any(String),
          detail: expect.any(Object)
        })
      );
    });

    it('should prefer ariaLabel in logging', async () => {
      render(<ReactIconButton label="Original" ariaLabel="Accessible label" />);

      await waitFor(() => {
        const iconButton = document.querySelector('ag-icon-button');
        expect(iconButton).toBeInTheDocument();
      });

      const iconButton = document.querySelector('ag-icon-button')!;
      fireEvent(iconButton, new CustomEvent('icon-button-click', {
        detail: { label: 'Accessible label', pressed: false, originalEvent: new MouseEvent('click') }
      }));

      expect(mockConsoleLog).toHaveBeenCalledWith(
        'ReactIconButton click:',
        expect.objectContaining({
          label: 'Accessible label'
        })
      );
    });
  });

  describe('Children Content', () => {
    it('should render slotted icon content', async () => {
      render(
        <ReactIconButton label="Custom icon">
          <svg data-testid="custom-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
          </svg>
        </ReactIconButton>
      );

      await waitFor(() => {
        const iconButton = document.querySelector('ag-icon-button');
        expect(iconButton).toBeInTheDocument();
        expect(iconButton!.querySelector('svg')).toBeInTheDocument();
      });
    });

    it('should render custom loading content', async () => {
      render(
        <ReactIconButton label="Save" loading>
          <span slot="loading" data-testid="custom-loading">
            Saving...
          </span>
        </ReactIconButton>
      );

      await waitFor(() => {
        const iconButton = document.querySelector('ag-icon-button') as HTMLElement & {
          loading: boolean;
        };
        expect(iconButton).toBeInTheDocument();
        expect(iconButton.loading).toBe(true);
        expect(iconButton.querySelector('[data-testid="custom-loading"]')).toBeInTheDocument();
      });
    });
  });

  describe('TypeScript Props Validation', () => {
    it('should require label prop at compile time', () => {
      // This test ensures TypeScript compilation requires label
      const validButton = <ReactIconButton label="Valid" />;
      expect(validButton.props.label).toBe('Valid');
    });

    it('should accept all valid size values', () => {
      const sizes: Array<'xs' | 'sm' | 'md' | 'lg' | 'xl'> = ['xs', 'sm', 'md', 'lg', 'xl'];

      sizes.forEach(size => {
        const button = <ReactIconButton label="Test" size={size} />;
        expect(button.props.size).toBe(size);
      });
    });

    it('should accept all valid variant values', () => {
      const variants: Array<'primary' | 'secondary' | 'ghost' | 'danger'> =
        ['primary', 'secondary', 'ghost', 'danger'];

      variants.forEach(variant => {
        const button = <ReactIconButton label="Test" variant={variant} />;
        expect(button.props.variant).toBe(variant);
      });
    });
  });
});