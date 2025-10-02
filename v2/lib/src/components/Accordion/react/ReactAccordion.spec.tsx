import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import React from 'react';
import { ReactAccordion, AccordionItem, ItemHeader, ItemContent } from './ReactAccordion';

// Mock console.log to test event logging if needed
const mockConsoleLog = vi.spyOn(console, 'log').mockImplementation(() => {});

describe('ReactAccordion Wrappers', () => {
  beforeEach(() => {
    mockConsoleLog.mockClear();
  });

  afterEach(() => {
    // Clean up any DOM elements
    document.body.innerHTML = '';
  });

  describe('ReactAccordion Container', () => {
    it('should render without errors', async () => {
      render(<ReactAccordion>Test Content</ReactAccordion>);

      await waitFor(() => {
        const accordion = document.querySelector('ag-accordion');
        expect(accordion).toBeInTheDocument();
      });
    });

    it('should render children content', async () => {
      render(<ReactAccordion>Accordion Children</ReactAccordion>);

      await waitFor(() => {
        const accordion = document.querySelector('ag-accordion');
        expect(accordion).toHaveTextContent('Accordion Children');
      });
    });
  });

  describe('AccordionItem Component', () => {
    it('should render without errors', async () => {
      render(<AccordionItem>Item Content</AccordionItem>);

      await waitFor(() => {
        const item = document.querySelector('ag-accordion-item');
        expect(item).toBeInTheDocument();
      });
    });

    it('should pass open prop to web component', async () => {
      render(<AccordionItem open={true}>Open Item</AccordionItem>);

      await waitFor(() => {
        const item = document.querySelector('ag-accordion-item') as HTMLElement & { open: boolean };
        expect(item.open).toBe(true);
      });
    });

    it('should handle toggle events with stopPropagation', async () => {
      const handleToggle = vi.fn();

      render(<AccordionItem onToggle={handleToggle}>Test Item</AccordionItem>);

      await waitFor(() => {
        const item = document.querySelector('ag-accordion-item');
        expect(item).toBeInTheDocument();
      });

      const item = document.querySelector('ag-accordion-item') as HTMLElement & {
        toggle: () => void;
        updateComplete: Promise<boolean>;
      };

      // Call toggle method directly to trigger the event
      item.toggle();
      await item.updateComplete;

      await waitFor(() => {
        expect(handleToggle).toHaveBeenCalledWith({ open: true });
      });
    });

    it('should render children content', async () => {
      render(<AccordionItem>Item Children</AccordionItem>);

      await waitFor(() => {
        const item = document.querySelector('ag-accordion-item');
        expect(item).toHaveTextContent('Item Children');
      });
    });
  });

  describe('ItemHeader Component', () => {
    it('should render as slot="header"', async () => {
      render(<ItemHeader>Header Content</ItemHeader>);

      await waitFor(() => {
        const header = document.querySelector('span[slot="header"]');
        expect(header).toBeInTheDocument();
        expect(header).toHaveTextContent('Header Content');
      });
    });
  });

  describe('ItemContent Component', () => {
    it('should render as slot="content"', async () => {
      render(<ItemContent>Content Body</ItemContent>);

      await waitFor(() => {
        const content = document.querySelector('div[slot="content"]');
        expect(content).toBeInTheDocument();
        expect(content).toHaveTextContent('Content Body');
      });
    });
  });

  describe('Full Accordion Integration', () => {
    it('should render complete accordion structure', async () => {
      const handleToggle = vi.fn();

      render(
        <ReactAccordion>
          <AccordionItem onToggle={handleToggle}>
            <ItemHeader>Section 1</ItemHeader>
            <ItemContent>Content for section 1</ItemContent>
          </AccordionItem>
          <AccordionItem open={true}>
            <ItemHeader>Section 2</ItemHeader>
            <ItemContent>Content for section 2</ItemContent>
          </AccordionItem>
        </ReactAccordion>
      );

      await waitFor(() => {
        const accordion = document.querySelector('ag-accordion');
        const items = document.querySelectorAll('ag-accordion-item');
        const headers = document.querySelectorAll('span[slot="header"]');
        const contents = document.querySelectorAll('div[slot="content"]');

        expect(accordion).toBeInTheDocument();
        expect(items).toHaveLength(2);
        expect(headers).toHaveLength(2);
        expect(contents).toHaveLength(2);

        expect(headers[0]).toHaveTextContent('Section 1');
        expect(headers[1]).toHaveTextContent('Section 2');
        expect(contents[0]).toHaveTextContent('Content for section 1');
        expect(contents[1]).toHaveTextContent('Content for section 2');

        // Check that second item is open
        const secondItem = items[1] as HTMLElement & { open: boolean };
        expect(secondItem.open).toBe(true);
      });
    });
  });
});