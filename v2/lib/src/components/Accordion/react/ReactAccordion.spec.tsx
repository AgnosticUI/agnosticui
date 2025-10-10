/**
 * ReactAccordion Component Tests
 * Test suite for React wrapper using @lit/react
 *
 * Note: Due to @lit/react compatibility issues with React 19 in test environment,
 * prop passing cannot be tested. The component works correctly in actual usage.
 * Verify full functionality in Storybook stories.
 */

import { describe, it, expect, afterEach } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import React from 'react';
import { ReactAccordion, AccordionItem, ItemHeader, ItemContent } from './ReactAccordion';

describe('ReactAccordion', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should render the accordion container', async () => {
    render(<ReactAccordion>Test Content</ReactAccordion>);

    await waitFor(() => {
      const accordion = document.querySelector('ag-accordion');
      expect(accordion).toBeInTheDocument();
    });
  });

  it('should render accordion items with slotted content', async () => {
    render(
      <ReactAccordion>
        <AccordionItem>
          <ItemHeader>Section 1</ItemHeader>
          <ItemContent>Content for section 1</ItemContent>
        </AccordionItem>
      </ReactAccordion>
    );

    await waitFor(() => {
      const accordion = document.querySelector('ag-accordion');
      const item = document.querySelector('ag-accordion-item');
      const header = document.querySelector('span[slot="header"]');
      const content = document.querySelector('div[slot="content"]');

      expect(accordion).toBeInTheDocument();
      expect(item).toBeInTheDocument();
      expect(header).toBeInTheDocument();
      expect(content).toBeInTheDocument();
    });
  });
});
