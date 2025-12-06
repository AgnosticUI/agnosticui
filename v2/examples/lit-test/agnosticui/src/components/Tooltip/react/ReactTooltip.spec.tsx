import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { ReactTooltip } from './ReactTooltip';

// Mock console.log to test event logging if needed
const mockConsoleLog = vi.spyOn(console, 'log').mockImplementation(() => {});

describe('ReactTooltip Wrapper', () => {
  beforeEach(() => {
    mockConsoleLog.mockClear();
  });

  afterEach(() => {
    // Clean up any DOM elements
    document.body.innerHTML = '';
  });

  describe('Basic Rendering', () => {
    it('should render without errors', async () => {
      render(
        <ReactTooltip content="Test tooltip">
          <button>Test Button</button>
        </ReactTooltip>
      );

      await waitFor(() => {
        const tooltip = document.querySelector('ag-tooltip');
        expect(tooltip).toBeInTheDocument();
      });
    });

    it('should render children content', async () => {
      render(
        <ReactTooltip content="Tooltip text">
          <span>Trigger Element</span>
        </ReactTooltip>
      );

      await waitFor(() => {
        const trigger = screen.getByText('Trigger Element');
        expect(trigger).toBeInTheDocument();
      });
    });

    it('should pass content prop to web component', async () => {
      render(
        <ReactTooltip content="Test tooltip content">
          <button>Hover me</button>
        </ReactTooltip>
      );

      await waitFor(() => {
        const tooltip = document.querySelector('ag-tooltip') as HTMLElement;
        expect(tooltip).toBeInTheDocument();
      });
    });
  });

  describe('Props Pass-Through', () => {
    it('should pass placement prop to web component', async () => {
      render(
        <ReactTooltip content="Tooltip" placement="bottom">
          <button>Button</button>
        </ReactTooltip>
      );

      await waitFor(() => {
        const tooltip = document.querySelector('ag-tooltip') as HTMLElement;
        expect(tooltip).toBeInTheDocument();
      });
    });

    it('should pass trigger prop to web component', async () => {
      render(
        <ReactTooltip content="Tooltip" trigger="click">
          <button>Button</button>
        </ReactTooltip>
      );

      await waitFor(() => {
        const tooltip = document.querySelector('ag-tooltip') as HTMLElement;
        expect(tooltip).toBeInTheDocument();
      });
    });
  });
});