import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import React from 'react';
import { ReactDrawer, DrawerHeader, DrawerFooter } from './ReactDrawer';

// Mock console.log to test event logging if needed
const mockConsoleLog = vi.spyOn(console, 'log').mockImplementation(() => { });

describe('ReactDrawer Wrapper', () => {
  beforeEach(() => {
    mockConsoleLog.mockClear();
  });

  afterEach(() => {
    // Clean up any DOM elements
    document.body.innerHTML = '';
  });

  describe('Basic Rendering', () => {
    it('should render without errors', async () => {
      render(<ReactDrawer>Drawer Content</ReactDrawer>);

      await waitFor(() => {
        const drawer = document.querySelector('ag-drawer');
        expect(drawer).toBeInTheDocument();
      });
    });

    it('should render children content', async () => {
      render(<ReactDrawer>Drawer Content</ReactDrawer>);

      await waitFor(() => {
        const drawer = document.querySelector('ag-drawer');
        expect(drawer).toHaveTextContent('Drawer Content');
      });
    });

    it('should not be open by default', async () => {
      render(<ReactDrawer>Drawer Content</ReactDrawer>);

      await waitFor(() => {
        const drawer = document.querySelector('ag-drawer') as HTMLElement & { open: boolean };
        expect(drawer.open).toBe(false);
      });
    });
  });

  describe('Props Pass-Through', () => {
    it('should pass open prop to web component', async () => {
      render(<ReactDrawer open>Drawer Content</ReactDrawer>);

      await waitFor(() => {
        const drawer = document.querySelector('ag-drawer') as HTMLElement & { open: boolean };
        expect(drawer.open).toBe(true);
      });
    });

    it('should pass heading prop to web component', async () => {
      render(<ReactDrawer heading="Test Drawer">Drawer Content</ReactDrawer>);

      await waitFor(() => {
        const drawer = document.querySelector('ag-drawer') as HTMLElement & { heading: string };
        expect(drawer.heading).toBe('Test Drawer');
      });
    });

    it('should pass description prop to web component', async () => {
      render(<ReactDrawer description="Test description">Drawer Content</ReactDrawer>);

      await waitFor(() => {
        const drawer = document.querySelector('ag-drawer') as HTMLElement & { description: string };
        expect(drawer.description).toBe('Test description');
      });
    });

    it('should pass boolean props to web component', async () => {
      render(
        <ReactDrawer
          noCloseOnEscape={true}
          noCloseOnBackdrop={true}
          showCloseButton={true}
        >
          Drawer Content
        </ReactDrawer>
      );

      await waitFor(() => {
        const drawer = document.querySelector('ag-drawer');
        expect(drawer).toBeInTheDocument();
      });

      // Give web component time to initialize properties
      await new Promise(resolve => setTimeout(resolve, 200));

      const drawer = document.querySelector('ag-drawer') as HTMLElement & {
        noCloseOnEscape: boolean;
        noCloseOnBackdrop: boolean;
        showCloseButton: boolean;
        updateComplete?: Promise<void>;
      };

      // Wait for Lit updateComplete if available
      if (drawer.updateComplete) {
        await drawer.updateComplete;
      }

      expect(drawer.noCloseOnEscape).toBe(true);
      expect(drawer.noCloseOnBackdrop).toBe(true);
      expect(drawer.showCloseButton).toBe(true);
    });

    it('should pass position prop to web component', async () => {
      render(<ReactDrawer position="start">Drawer Content</ReactDrawer>);

      await waitFor(() => {
        const drawer = document.querySelector('ag-drawer') as HTMLElement & { position: string };
        expect(drawer.position).toBe('start');
      });
    });

    it('should handle className and id props', async () => {
      render(
        <ReactDrawer className="custom-class" id="my-drawer">
          Drawer Content
        </ReactDrawer>
      );

      await waitFor(() => {
        const drawer = document.querySelector('ag-drawer');
        expect(drawer).toHaveClass('custom-class');
        expect(drawer).toHaveAttribute('id', 'my-drawer');
      });
    });
  });

  describe('Event Handling', () => {
    it('should handle dialog-open events', async () => {
      const handleDialogOpen = vi.fn();

      render(<ReactDrawer onDialogOpen={handleDialogOpen}>Drawer Content</ReactDrawer>);

      await waitFor(() => {
        const drawer = document.querySelector('ag-drawer');
        expect(drawer).toBeInTheDocument();
      });

      const drawer = document.querySelector('ag-drawer') as HTMLElement;

      // Simulate a dialog-open event
      const openEvent = new CustomEvent('dialog-open', { bubbles: true });
      drawer.dispatchEvent(openEvent);

      await waitFor(() => {
        expect(handleDialogOpen).toHaveBeenCalledTimes(1);
      });
    });

    it('should handle dialog-close and onClose events', async () => {
      const handleDialogClose = vi.fn();
      const handleClose = vi.fn();

      render(
        <ReactDrawer onDialogClose={handleDialogClose} onClose={handleClose}>
          Drawer Content
        </ReactDrawer>
      );

      await waitFor(() => {
        const drawer = document.querySelector('ag-drawer');
        expect(drawer).toBeInTheDocument();
      });

      const drawer = document.querySelector('ag-drawer') as HTMLElement;

      // Simulate a dialog-close event
      const closeEvent = new CustomEvent('dialog-close', { bubbles: true });
      drawer.dispatchEvent(closeEvent);

      await waitFor(() => {
        expect(handleDialogClose).toHaveBeenCalledTimes(1);
        expect(handleClose).toHaveBeenCalledTimes(1);
      });
    });

    it('should handle dialog-cancel events', async () => {
      const handleDialogCancel = vi.fn();

      render(<ReactDrawer onDialogCancel={handleDialogCancel}>Drawer Content</ReactDrawer>);

      await waitFor(() => {
        const drawer = document.querySelector('ag-drawer');
        expect(drawer).toBeInTheDocument();
      });

      const drawer = document.querySelector('ag-drawer') as HTMLElement;

      // Simulate a dialog-cancel event
      const cancelEvent = new CustomEvent('dialog-cancel', { bubbles: true });
      drawer.dispatchEvent(cancelEvent);

      await waitFor(() => {
        expect(handleDialogCancel).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('Slot Components', () => {
    it('should render DrawerHeader with slot attribute', async () => {
      render(
        <ReactDrawer>
          <DrawerHeader>Custom Header</DrawerHeader>
          Drawer Content
        </ReactDrawer>
      );

      await waitFor(() => {
        const header = document.querySelector('[slot="header"]');
        expect(header).toBeInTheDocument();
        expect(header).toHaveTextContent('Custom Header');
      });
    });

    it('should render DrawerFooter with slot attribute', async () => {
      render(
        <ReactDrawer>
          Drawer Content
          <DrawerFooter>Custom Footer</DrawerFooter>
        </ReactDrawer>
      );

      await waitFor(() => {
        const footer = document.querySelector('[slot="footer"]');
        expect(footer).toBeInTheDocument();
        expect(footer).toHaveTextContent('Custom Footer');
      });
    });

    it('should render both header and footer slots', async () => {
      render(
        <ReactDrawer>
          <DrawerHeader>Header Content</DrawerHeader>
          Main drawer content
          <DrawerFooter>Footer Content</DrawerFooter>
        </ReactDrawer>
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
