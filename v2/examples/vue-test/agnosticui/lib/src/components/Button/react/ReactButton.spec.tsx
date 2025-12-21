import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
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
        const content = screen.getByText('Click Me');
        expect(content).toBeInTheDocument();
      });
    });
  });

  describe('Props Pass-Through', () => {
    it('should pass ARIA attributes', async () => {
      render(
        <ReactButton aria-label="Close dialog" aria-describedby="help-text">
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
});
