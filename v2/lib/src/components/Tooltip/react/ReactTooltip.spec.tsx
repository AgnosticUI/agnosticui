import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { Tooltip, type TooltipHandle } from './ReactTooltip';

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
        <Tooltip content="Test tooltip">
          <button>Test Button</button>
        </Tooltip>
      );

      await waitFor(() => {
        const tooltip = document.querySelector('ag-tooltip');
        expect(tooltip).toBeInTheDocument();
      });
    });

    it('should render children content', async () => {
      render(
        <Tooltip content="Tooltip text">
          <span>Trigger Element</span>
        </Tooltip>
      );

      await waitFor(() => {
        const trigger = screen.getByText('Trigger Element');
        expect(trigger).toBeInTheDocument();
      });
    });

    it('should pass content prop to web component', async () => {
      render(
        <Tooltip content="Test tooltip content">
          <button>Hover me</button>
        </Tooltip>
      );

      await waitFor(() => {
        const tooltip = document.querySelector('ag-tooltip') as HTMLElement;
        expect(tooltip).toBeInTheDocument();
        // Check the attribute rather than the property initially
        expect(tooltip.getAttribute('content')).toBe('Test tooltip content');
      });
    });
  });

  describe('Props Pass-Through', () => {
    it('should pass placement prop to web component', async () => {
      render(
        <Tooltip content="Tooltip" placement="bottom">
          <button>Button</button>
        </Tooltip>
      );

      await waitFor(() => {
        const tooltip = document.querySelector('ag-tooltip') as HTMLElement;
        // Check the attribute which should reflect the prop
        expect(tooltip.getAttribute('placement')).toBe('bottom');
      });
    });

    it('should pass trigger prop to web component', async () => {
      render(
        <Tooltip content="Tooltip" trigger="click">
          <button>Button</button>
        </Tooltip>
      );

      await waitFor(() => {
        const tooltip = document.querySelector('ag-tooltip') as HTMLElement;
        // Check the attribute which should reflect the prop
        expect(tooltip.getAttribute('trigger')).toBe('click');
      });
    });
  });

  describe('Event Handling', () => {
    it('should handle show events', async () => {
      const handleShow = vi.fn();

      render(
        <Tooltip content="Test" onShow={handleShow}>
          <button>Button</button>
        </Tooltip>
      );

      await waitFor(() => {
        const tooltip = document.querySelector('ag-tooltip');
        expect(tooltip).toBeInTheDocument();
      });

      const tooltip = document.querySelector('ag-tooltip') as HTMLElement;

      // Simulate a show event
      const showEvent = new CustomEvent('show');
      tooltip.dispatchEvent(showEvent);

      await waitFor(() => {
        expect(handleShow).toHaveBeenCalledTimes(1);
      });
    });

    it('should handle hide events', async () => {
      const handleHide = vi.fn();

      render(
        <Tooltip content="Test" onHide={handleHide}>
          <button>Button</button>
        </Tooltip>
      );

      await waitFor(() => {
        const tooltip = document.querySelector('ag-tooltip');
        expect(tooltip).toBeInTheDocument();
      });

      const tooltip = document.querySelector('ag-tooltip') as HTMLElement;

      // Simulate a hide event
      const hideEvent = new CustomEvent('hide');
      tooltip.dispatchEvent(hideEvent);

      await waitFor(() => {
        expect(handleHide).toHaveBeenCalled();
      });
    });
  });

  describe('Imperative API', () => {
    it('should provide show, hide, and toggle methods via ref', async () => {
      const tooltipRef = React.createRef<TooltipHandle>();

      render(
        <Tooltip ref={tooltipRef} content="Test">
          <button>Button</button>
        </Tooltip>
      );

      await waitFor(() => {
        const tooltip = document.querySelector('ag-tooltip');
        expect(tooltip).toBeInTheDocument();
      });

      // Check that ref provides the expected methods
      expect(tooltipRef.current).toBeTruthy();
      expect(typeof tooltipRef.current?.show).toBe('function');
      expect(typeof tooltipRef.current?.hide).toBe('function');
      expect(typeof tooltipRef.current?.toggle).toBe('function');
    });

    it('should call web component methods when using imperative API', async () => {
      const tooltipRef = React.createRef<TooltipHandle>();

      render(
        <Tooltip ref={tooltipRef} content="Test">
          <button>Button</button>
        </Tooltip>
      );

      await waitFor(() => {
        const tooltip = document.querySelector('ag-tooltip');
        expect(tooltip).toBeInTheDocument();
      });

      const tooltip = document.querySelector('ag-tooltip') as HTMLElement & {
        show: () => void;
        hide: () => void;
        toggle: () => void;
      };

      // Mock the methods if they don't exist (since web component may not be fully loaded)
      if (!tooltip.show) tooltip.show = vi.fn();
      if (!tooltip.hide) tooltip.hide = vi.fn();
      if (!tooltip.toggle) tooltip.toggle = vi.fn();

      const showSpy = vi.spyOn(tooltip, 'show');
      const hideSpy = vi.spyOn(tooltip, 'hide');
      const toggleSpy = vi.spyOn(tooltip, 'toggle');

      // Test imperative methods
      tooltipRef.current?.show();
      expect(showSpy).toHaveBeenCalledTimes(1);

      tooltipRef.current?.hide();
      expect(hideSpy).toHaveBeenCalledTimes(1);

      tooltipRef.current?.toggle();
      expect(toggleSpy).toHaveBeenCalledTimes(1);
    });
  });
});