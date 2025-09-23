import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import React from 'react';
import { ReactDialog, DialogHeader, DialogFooter } from './ReactDialog';

// Mock console.log to test event logging if needed
const mockConsoleLog = vi.spyOn(console, 'log').mockImplementation(() => {});

describe('ReactDialog Wrapper', () => {
  beforeEach(() => {
    mockConsoleLog.mockClear();
  });

  afterEach(() => {
    // Clean up any DOM elements
    document.body.innerHTML = '';
  });

  describe('Basic Rendering', () => {
    it('should render without errors', async () => {
      render(<ReactDialog>Dialog Content</ReactDialog>);

      await waitFor(() => {
        const dialog = document.querySelector('ag-dialog');
        expect(dialog).toBeInTheDocument();
      });
    });

    it('should render children content', async () => {
      render(<ReactDialog>Dialog Content</ReactDialog>);

      await waitFor(() => {
        const dialog = document.querySelector('ag-dialog');
        expect(dialog).toHaveTextContent('Dialog Content');
      });
    });

    it('should not be open by default', async () => {
      render(<ReactDialog>Dialog Content</ReactDialog>);

      await waitFor(() => {
        const dialog = document.querySelector('ag-dialog') as HTMLElement & { open: boolean };
        expect(dialog.open).toBe(false);
      });
    });
  });

  describe('Props Pass-Through', () => {
    it('should pass open prop to web component', async () => {
      render(<ReactDialog open>Dialog Content</ReactDialog>);

      await waitFor(() => {
        const dialog = document.querySelector('ag-dialog') as HTMLElement & { open: boolean };
        expect(dialog.open).toBe(true);
      });
    });

    it('should pass heading prop to web component', async () => {
      render(<ReactDialog heading="Test Dialog">Dialog Content</ReactDialog>);

      await waitFor(() => {
        const dialog = document.querySelector('ag-dialog') as HTMLElement & { heading: string };
        expect(dialog.heading).toBe('Test Dialog');
      });
    });

    it('should pass description prop to web component', async () => {
      render(<ReactDialog description="Test description">Dialog Content</ReactDialog>);

      await waitFor(() => {
        const dialog = document.querySelector('ag-dialog') as HTMLElement & { description: string };
        expect(dialog.description).toBe('Test description');
      });
    });

    it('should pass boolean props to web component', async () => {
      render(
        <ReactDialog
          closeOnEscape={false}
          closeOnBackdrop={false}
          showCloseButton={true}
        >
          Dialog Content
        </ReactDialog>
      );

      await waitFor(() => {
        const dialog = document.querySelector('ag-dialog');
        expect(dialog).toBeInTheDocument();
        // Wait for web component to be fully initialized
      });

      // Give web component time to initialize properties
      await new Promise(resolve => setTimeout(resolve, 200));

      const dialog = document.querySelector('ag-dialog') as HTMLElement & {
        closeOnEscape: boolean;
        closeOnBackdrop: boolean;
        showCloseButton: boolean;
        updateComplete?: Promise<void>;
      };

      // Wait for Lit updateComplete if available
      if (dialog.updateComplete) {
        await dialog.updateComplete;
      }

      expect(dialog.closeOnEscape).toBe(false);
      expect(dialog.closeOnBackdrop).toBe(false);
      expect(dialog.showCloseButton).toBe(true);
    });

    it('should handle className and id props', async () => {
      render(
        <ReactDialog className="custom-class" id="my-dialog">
          Dialog Content
        </ReactDialog>
      );

      await waitFor(() => {
        const dialog = document.querySelector('ag-dialog');
        expect(dialog).toHaveClass('custom-class');
        expect(dialog).toHaveAttribute('id', 'my-dialog');
      });
    });
  });

  describe('Event Handling', () => {
    it('should handle dialog-open events', async () => {
      const handleDialogOpen = vi.fn();

      render(<ReactDialog onDialogOpen={handleDialogOpen}>Dialog Content</ReactDialog>);

      await waitFor(() => {
        const dialog = document.querySelector('ag-dialog');
        expect(dialog).toBeInTheDocument();
      });

      const dialog = document.querySelector('ag-dialog') as HTMLElement;

      // Simulate a dialog-open event
      const openEvent = new CustomEvent('dialog-open', { bubbles: true });
      dialog.dispatchEvent(openEvent);

      await waitFor(() => {
        expect(handleDialogOpen).toHaveBeenCalledTimes(1);
      });
    });

    it('should handle dialog-close events', async () => {
      const handleDialogClose = vi.fn();

      render(<ReactDialog onDialogClose={handleDialogClose}>Dialog Content</ReactDialog>);

      await waitFor(() => {
        const dialog = document.querySelector('ag-dialog');
        expect(dialog).toBeInTheDocument();
      });

      const dialog = document.querySelector('ag-dialog') as HTMLElement;

      // Simulate a dialog-close event
      const closeEvent = new CustomEvent('dialog-close', { bubbles: true });
      dialog.dispatchEvent(closeEvent);

      await waitFor(() => {
        expect(handleDialogClose).toHaveBeenCalledTimes(1);
      });
    });

    it('should handle dialog-cancel events', async () => {
      const handleDialogCancel = vi.fn();

      render(<ReactDialog onDialogCancel={handleDialogCancel}>Dialog Content</ReactDialog>);

      await waitFor(() => {
        const dialog = document.querySelector('ag-dialog');
        expect(dialog).toBeInTheDocument();
      });

      const dialog = document.querySelector('ag-dialog') as HTMLElement;

      // Simulate a dialog-cancel event (e.g., from ESC key)
      const cancelEvent = new CustomEvent('dialog-cancel', { bubbles: true });
      dialog.dispatchEvent(cancelEvent);

      await waitFor(() => {
        expect(handleDialogCancel).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('Slot Components', () => {
    it('should render DialogHeader with slot attribute', async () => {
      render(
        <ReactDialog>
          <DialogHeader>Custom Header</DialogHeader>
          Dialog Content
        </ReactDialog>
      );

      await waitFor(() => {
        const header = document.querySelector('[slot="header"]');
        expect(header).toBeInTheDocument();
        expect(header).toHaveTextContent('Custom Header');
      });
    });

    it('should render DialogFooter with slot attribute', async () => {
      render(
        <ReactDialog>
          Dialog Content
          <DialogFooter>Custom Footer</DialogFooter>
        </ReactDialog>
      );

      await waitFor(() => {
        const footer = document.querySelector('[slot="footer"]');
        expect(footer).toBeInTheDocument();
        expect(footer).toHaveTextContent('Custom Footer');
      });
    });

    it('should render both header and footer slots', async () => {
      render(
        <ReactDialog>
          <DialogHeader>Header Content</DialogHeader>
          Main dialog content
          <DialogFooter>Footer Content</DialogFooter>
        </ReactDialog>
      );

      await waitFor(() => {
        const header = document.querySelector('[slot="header"]');
        const footer = document.querySelector('[slot="footer"]');
        expect(header).toHaveTextContent('Header Content');
        expect(footer).toHaveTextContent('Footer Content');
      });
    });
  });
});