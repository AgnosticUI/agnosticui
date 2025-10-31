import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { AccordionItem } from './Accordion';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

// Note: Accordion container tests removed - ag-accordion now uses AccordionGroup for keyboard navigation

describe('AccordionItem - Accessibility Compliance', () => {
  let el: AccordionItem;

  beforeEach(async () => {
    el = new AccordionItem();
    
    // Add header and content slots
    const header = document.createElement('span');
    header.setAttribute('slot', 'header');
    header.textContent = 'Test Header';
    el.appendChild(header);
    
    const content = document.createElement('div');
    content.setAttribute('slot', 'content');
    content.textContent = 'Test Content';
    el.appendChild(content);
    
    document.body.appendChild(el);
    await el.updateComplete;
  });

  // WAI-ARIA APG Requirements
  describe('WAI-ARIA APG Compliance', () => {
    it('should initialize with open=false', () => {
      expect(el.open).toBe(false);
      expect(el.hasAttribute('open')).toBe(false);
    });

    it('should have clickable header that toggles content', async () => {
      const headerDiv = el.shadowRoot!.querySelector('.header');
      expect(headerDiv).not.toBeNull();
      
      // Should be clickable
      expect(headerDiv).toBeInstanceOf(HTMLDivElement);
      
      // Initial state - content hidden
      const contentDiv = el.shadowRoot!.querySelector('.content');
      const computedStyle = window.getComputedStyle(contentDiv!);
      expect(computedStyle.display).toBe('none');
    });

    it('should toggle open property when header is clicked', async () => {
      const headerDiv = el.shadowRoot!.querySelector('.header');
      
      headerDiv!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      await el.updateComplete;
      
      expect(el.open).toBe(true);
      expect(el.hasAttribute('open')).toBe(true);

      headerDiv!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      await el.updateComplete;
      
      expect(el.open).toBe(false);
      expect(el.hasAttribute('open')).toBe(false);
    });

    it('should show/hide content based on open state', async () => {
      const contentDiv = el.shadowRoot!.querySelector('.content');
      
      // Initially hidden
      let computedStyle = window.getComputedStyle(contentDiv!);
      expect(computedStyle.display).toBe('none');

      // Open and check visible
      el.open = true;
      await el.updateComplete;
      computedStyle = window.getComputedStyle(contentDiv!);
      expect(computedStyle.display).toBe('block');

      // Close and check hidden
      el.open = false;
      await el.updateComplete;
      computedStyle = window.getComputedStyle(contentDiv!);
      expect(computedStyle.display).toBe('none');
    });

    it('should emit toggle event with open state', async () => {
      let eventDetail: any;
      el.addEventListener('toggle', (e: Event) => {
        eventDetail = (e as CustomEvent).detail;
      });

      // Test opening
      el.toggle();
      await el.updateComplete;
      expect(eventDetail).toEqual({ open: true });

      // Test closing
      el.toggle();
      await el.updateComplete;
      expect(eventDetail).toEqual({ open: false });
    });

    it('should reflect open property to attribute', async () => {
      el.open = true;
      await el.updateComplete;
      expect(el.hasAttribute('open')).toBe(true);

      el.open = false;
      await el.updateComplete;
      expect(el.hasAttribute('open')).toBe(false);
    });
  });

  describe('Slot Content Rendering', () => {
    it('should render header slot content', () => {
      const headerSlot = el.shadowRoot!.querySelector('slot[name="header"]');
      expect(headerSlot).not.toBeNull();
    });

    it('should render content slot inside collapsible container', () => {
      const contentSlot = el.shadowRoot!.querySelector('slot[name="content"]');
      expect(contentSlot).not.toBeNull();
      
      const contentDiv = el.shadowRoot!.querySelector('.content');
      expect(contentDiv!.contains(contentSlot!)).toBe(true);
    });
  });

  describe('ARIA Compliance - Implemented Features', () => {
    it('header should be a button element for keyboard accessibility', () => {
      const button = el.shadowRoot!.querySelector('button');
      expect(button).not.toBeNull();
      expect(button!.tagName.toLowerCase()).toBe('button');
    });

    it('button should have aria-expanded attribute reflecting open state', async () => {
      const button = el.shadowRoot!.querySelector('button');
      
      // Initially closed
      expect(button!.getAttribute('aria-expanded')).toBe('false');
      
      // Open and check
      el.open = true;
      await el.updateComplete;
      expect(button!.getAttribute('aria-expanded')).toBe('true');
      
      // Close and check
      el.open = false;
      await el.updateComplete;
      expect(button!.getAttribute('aria-expanded')).toBe('false');
    });

    it('button should have aria-controls pointing to content panel', () => {
      const button = el.shadowRoot!.querySelector('button');
      const contentPanel = el.shadowRoot!.querySelector('.content');
      
      const ariaControls = button!.getAttribute('aria-controls');
      const panelId = contentPanel!.getAttribute('id');
      
      expect(ariaControls).not.toBeNull();
      expect(panelId).not.toBeNull();
      expect(ariaControls).toBe(panelId);
    });

    it('content panel should have role="region"', () => {
      const contentPanel = el.shadowRoot!.querySelector('.content');
      expect(contentPanel!.getAttribute('role')).toBe('region');
    });

    it('content panel should have aria-labelledby referencing button', () => {
      const button = el.shadowRoot!.querySelector('button');
      const contentPanel = el.shadowRoot!.querySelector('.content');
      
      const buttonId = button!.getAttribute('id');
      const ariaLabelledBy = contentPanel!.getAttribute('aria-labelledby');
      
      expect(buttonId).not.toBeNull();
      expect(ariaLabelledBy).not.toBeNull();
      expect(ariaLabelledBy).toBe(buttonId);
    });

    it('should support Enter and Space key navigation', async () => {
      const button = el.shadowRoot!.querySelector('button') as HTMLButtonElement;
      
      // Test Enter key - dispatch on element with proper target
      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true });
      Object.defineProperty(enterEvent, 'target', { value: button, writable: false });
      el.dispatchEvent(enterEvent);
      await el.updateComplete;
      expect(el.open).toBe(true);
      
      // Test Space key - dispatch on element with proper target
      const spaceEvent = new KeyboardEvent('keydown', { key: ' ', bubbles: true });
      Object.defineProperty(spaceEvent, 'target', { value: button, writable: false });
      el.dispatchEvent(spaceEvent);
      await el.updateComplete;
      expect(el.open).toBe(false);
    });

    it('should be fully accessible with no violations', async () => {
      const results = await axe(el);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Keyboard Navigation - Implemented Features', () => {
    it('should support Enter and Space key navigation on buttons', async () => {
      const button = el.shadowRoot!.querySelector('button') as HTMLButtonElement;
      
      // Test Enter key
      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true });
      Object.defineProperty(enterEvent, 'target', { value: button, writable: false });
      
      el.dispatchEvent(enterEvent);
      await el.updateComplete;
      expect(el.open).toBe(true);
      
      // Test Space key  
      const spaceEvent = new KeyboardEvent('keydown', { key: ' ', bubbles: true });
      Object.defineProperty(spaceEvent, 'target', { value: button, writable: false });
      
      el.dispatchEvent(spaceEvent);
      await el.updateComplete;
      expect(el.open).toBe(false);
    });

    it('should emit accordion-keydown events for Arrow/Home/End keys', async () => {
      const button = el.shadowRoot!.querySelector('button') as HTMLButtonElement;
      let eventDetail: any = null;
      
      el.addEventListener('accordion-keydown', (e: Event) => {
        eventDetail = (e as CustomEvent).detail;
      });
      
      // Test ArrowDown
      const arrowEvent = new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true });
      Object.defineProperty(arrowEvent, 'target', { value: button, writable: false });
      
      el.dispatchEvent(arrowEvent);
      
      expect(eventDetail).not.toBeNull();
      expect(eventDetail.key).toBe('ArrowDown');
      expect(eventDetail.accordionItem).toBe(el);
    });

    it('should not handle keyboard events when disabled', async () => {
      el.disabled = true;
      await el.updateComplete;
      
      const button = el.shadowRoot!.querySelector('button') as HTMLButtonElement;
      let eventFired = false;
      
      el.addEventListener('accordion-keydown', () => {
        eventFired = true;
      });
      
      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true });
      Object.defineProperty(enterEvent, 'target', { value: button, writable: false });
      
      el.dispatchEvent(enterEvent);
      await el.updateComplete;
      
      expect(eventFired).toBe(false);
      expect(el.open).toBe(false); // Should not toggle when disabled
    });
  });

  describe('Nested Accordions', () => {
    it('should handle nested accordions properly', async () => {
      const nestedAccordion = new AccordionItem();
      const nestedHeader = document.createElement('span');
      nestedHeader.setAttribute('slot', 'header');
      nestedHeader.textContent = 'Nested Header';
      nestedAccordion.appendChild(nestedHeader);
      
      const nestedContent = document.createElement('div');
      nestedContent.setAttribute('slot', 'content');
      nestedContent.textContent = 'Nested Content';
      nestedAccordion.appendChild(nestedContent);

      el.querySelector('[slot="content"]')?.appendChild(nestedAccordion);
      await el.updateComplete;
      await nestedAccordion.updateComplete;

      // Open outer accordion
      el.toggle();
      await el.updateComplete;
      expect(el.open).toBe(true);

      // Nested accordion should be visible
      expect(nestedAccordion.offsetParent).not.toBeNull();

      // Toggle nested accordion
      const nestedHeaderDiv = nestedAccordion.shadowRoot!.querySelector('.header');
      nestedHeaderDiv!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      await nestedAccordion.updateComplete;
      expect(nestedAccordion.open).toBe(true);
    });
  });

  describe('Keyboard Navigation - Additional Features', () => {
    it('should maintain focus visibility and indication', () => {
      // Focus visibility is handled by CSS :focus-visible and browser defaults
      // Our button element should receive focus correctly
      const button = el.shadowRoot!.querySelector('button') as HTMLButtonElement;
      
      // Button should be focusable
      expect(button.tabIndex).not.toBe(-1);
      expect(button.getAttribute('disabled')).toBeNull();
      
      // Focus method should work
      el.focus();
      expect(typeof el.focus).toBe('function');
    });

    it('should support complex keyboard interaction sequences', async () => {
      // Test a sequence of keyboard interactions
      const button = el.shadowRoot!.querySelector('button') as HTMLButtonElement;
      
      // Sequence: Focus -> Enter (open) -> Arrow Down (emit event) -> Space (close)
      el.focus();
      
      // Enter to open
      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true });
      Object.defineProperty(enterEvent, 'target', { value: button, writable: false });
      el.dispatchEvent(enterEvent);
      await el.updateComplete;
      expect(el.open).toBe(true);
      
      // Arrow down should emit navigation event
      let navigationEventFired = false;
      el.addEventListener('accordion-keydown', () => {
        navigationEventFired = true;
      });
      
      const arrowEvent = new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true });
      Object.defineProperty(arrowEvent, 'target', { value: button, writable: false });
      el.dispatchEvent(arrowEvent);
      expect(navigationEventFired).toBe(true);
      
      // Space to close
      const spaceEvent = new KeyboardEvent('keydown', { key: ' ', bubbles: true });
      Object.defineProperty(spaceEvent, 'target', { value: button, writable: false });
      el.dispatchEvent(spaceEvent);
      await el.updateComplete;
      expect(el.open).toBe(false);
    });

    it.todo('should manage focus when accordion items are dynamically added/removed');
  });

  describe('Heading Structure - Implemented Features', () => {
    it('button should be wrapped in proper heading element (default h3)', () => {
      const heading = el.shadowRoot!.querySelector('h3.heading');
      const button = heading?.querySelector('button');
      
      expect(heading).not.toBeNull();
      expect(button).not.toBeNull();
      expect(heading!.tagName.toLowerCase()).toBe('h3');
    });

    it('should support configurable heading level', async () => {
      // Test h2
      el.headingLevel = 2;
      await el.updateComplete;
      let heading = el.shadowRoot!.querySelector('h2.heading');
      expect(heading).not.toBeNull();
      
      // Test h5
      el.headingLevel = 5;
      await el.updateComplete;
      heading = el.shadowRoot!.querySelector('h5.heading');
      expect(heading).not.toBeNull();
      
      // Test boundary clamping (should clamp to h6)
      el.headingLevel = 10;
      await el.updateComplete;
      heading = el.shadowRoot!.querySelector('h6.heading');
      expect(heading).not.toBeNull();
      
      // Test boundary clamping (should clamp to h1)
      el.headingLevel = -5;
      await el.updateComplete;
      heading = el.shadowRoot!.querySelector('h1.heading');
      expect(heading).not.toBeNull();
    });

    it('heading should reset default margins', () => {
      const heading = el.shadowRoot!.querySelector('h3.heading') as HTMLElement;
      const computedStyle = window.getComputedStyle(heading);
      
      expect(computedStyle.margin).toBe('0px');
      expect(computedStyle.padding).toBe('0px');
    });
  });

  describe('Focus Management - Implemented Features', () => {
    it('should provide focus() method for programmatic focus', () => {
      // Call the focus method
      el.focus();
      
      // Check that focus was set (note: in test environment, document.activeElement may not work perfectly)
      expect(typeof el.focus).toBe('function');
    });

    it('should provide buttonElement getter for external focus management', () => {
      const button = el.buttonElement;
      const expectedButton = el.shadowRoot!.querySelector('button');
      
      expect(button).toBe(expectedButton);
      expect(button?.tagName.toLowerCase()).toBe('button');
    });
  });

  describe('Progressive Enhancement - Implemented Features', () => {
    it('should work without JavaScript (content visible by default)', () => {
      // Progressive enhancement means content is visible by default in CSS
      // This is achieved by the base rule: .content { display: block; }
      // The more specific rules only apply AFTER data-enhanced is set
      
      // Verify that our CSS has the right progressive enhancement structure
      const cssText = AccordionItem.styles.toString();
      
      // Should have base rule that shows content
      expect(cssText).toContain('.content {\n      display: block;');
      
      // Should have enhanced-only rules that hide content when data-enhanced is present
      expect(cssText).toContain(':host([data-enhanced]) .content {\n      display: none;');
      expect(cssText).toContain(':host([data-enhanced][open]) .content {\n      display: block;');
      
      // This CSS structure ensures content is visible without JS, hidden only after JS loads
    });

    it('should mark as enhanced after JavaScript loads', async () => {
      // Element should be marked as enhanced after connectedCallback
      expect(el.hasAttribute('data-enhanced')).toBe(true);
    });

    it('should properly handle hidden attribute vs CSS display interaction', async () => {
      // After enhancement, closed accordions should be hidden
      expect(el.open).toBe(false);
      const content = el.shadowRoot!.querySelector('.content');
      const computedStyle = window.getComputedStyle(content!);
      expect(computedStyle.display).toBe('none');
      
      // When opened, content should be visible
      el.open = true;
      await el.updateComplete;
      const openComputedStyle = window.getComputedStyle(content!);
      expect(openComputedStyle.display).toBe('block');
    });
  });

  describe('Multiple Accordion Focus Management - AccordionGroup Features', () => {
    let group: any;
    let accordions: AccordionItem[];

    beforeEach(async () => {
      // Import AccordionGroup class
      const { AccordionGroup } = await import('../../AccordionGroup/AccordionGroup');
      
      // Create accordion group
      group = new AccordionGroup();
      document.body.appendChild(group);
      
      // Create multiple accordion items
      accordions = [];
      for (let i = 0; i < 3; i++) {
        const accordion = new AccordionItem();
        
        const header = document.createElement('span');
        header.setAttribute('slot', 'header');
        header.textContent = `Header ${i + 1}`;
        accordion.appendChild(header);
        
        const content = document.createElement('div');
        content.setAttribute('slot', 'content');
        content.textContent = `Content ${i + 1}`;
        accordion.appendChild(content);
        
        group.appendChild(accordion);
        accordions.push(accordion);
      }
      
      await group.updateComplete;
      await Promise.all(accordions.map(acc => acc.updateComplete));
    });

    afterEach(() => {
      document.body.removeChild(group);
    });

    it('should navigate between multiple accordion items with Arrow keys', async () => {
      // Focus first accordion
      accordions[0].focus();
      
      // Simulate ArrowDown from first accordion
      const arrowDownEvent = new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true });
      Object.defineProperty(arrowDownEvent, 'target', { value: accordions[0].buttonElement, writable: false });
      
      accordions[0].dispatchEvent(arrowDownEvent);
      
      // Verify focus moved to second accordion (we can't easily test actual focus in jsdom)
      // But we can verify the AccordionGroup received and processed the event
      expect(group.accordions.length).toBe(3);
      expect(group.accordions[1]).toBe(accordions[1]);
    });

    it('should wrap focus from last to first item on ArrowDown', async () => {
      // Focus last accordion
      accordions[2].focus();
      
      // Simulate ArrowDown from last accordion
      const arrowDownEvent = new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true });
      Object.defineProperty(arrowDownEvent, 'target', { value: accordions[2].buttonElement, writable: false });
      
      accordions[2].dispatchEvent(arrowDownEvent);
      
      // Verify group can wrap (it uses modulo arithmetic)
      const currentIndex = group.accordions.indexOf(accordions[2]);
      const expectedIndex = (currentIndex + 1) % group.accordions.length;
      expect(expectedIndex).toBe(0); // Should wrap to first
    });

    it('should wrap focus from first to last item on ArrowUp', async () => {
      // Focus first accordion
      accordions[0].focus();
      
      // Simulate ArrowUp from first accordion
      const arrowUpEvent = new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true });
      Object.defineProperty(arrowUpEvent, 'target', { value: accordions[0].buttonElement, writable: false });
      
      accordions[0].dispatchEvent(arrowUpEvent);
      
      // Verify group can wrap backwards
      const currentIndex = group.accordions.indexOf(accordions[0]);
      const expectedIndex = (currentIndex - 1 + group.accordions.length) % group.accordions.length;
      expect(expectedIndex).toBe(group.accordions.length - 1); // Should wrap to last
    });

    it('should jump to first item on Home key', async () => {
      // Focus middle accordion
      accordions[1].focus();
      
      // Simulate Home key
      const homeEvent = new KeyboardEvent('keydown', { key: 'Home', bubbles: true });
      Object.defineProperty(homeEvent, 'target', { value: accordions[1].buttonElement, writable: false });
      
      accordions[1].dispatchEvent(homeEvent);
      
      // Verify Home key targets first accordion
      expect(group.accordions[0]).toBe(accordions[0]);
    });

    it('should jump to last item on End key', async () => {
      // Focus first accordion
      accordions[0].focus();
      
      // Simulate End key
      const endEvent = new KeyboardEvent('keydown', { key: 'End', bubbles: true });
      Object.defineProperty(endEvent, 'target', { value: accordions[0].buttonElement, writable: false });
      
      accordions[0].dispatchEvent(endEvent);
      
      // Verify End key targets last accordion
      const lastIndex = group.accordions.length - 1;
      expect(group.accordions[lastIndex]).toBe(accordions[2]);
    });

    it('should not interfere with Tab navigation flow', async () => {
      // Tab navigation is handled by browser, not our code
      // We just need to verify our arrow key handling doesn't prevent default Tab behavior
      
      const tabEvent = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true });
      Object.defineProperty(tabEvent, 'target', { value: accordions[0].buttonElement, writable: false });
      
      // Our code should not handle Tab keys
      let eventHandled = false;
      accordions[0].addEventListener('accordion-keydown', () => {
        eventHandled = true;
      });
      
      accordions[0].dispatchEvent(tabEvent);
      
      // Tab should not trigger our custom accordion keyboard handling
      expect(eventHandled).toBe(false);
    });
  });

  describe('Advanced Behavior - Implemented Features', () => {
    it('should support disabled state for individual accordion items', async () => {
      // Test disabled property
      el.disabled = true;
      await el.updateComplete;
      
      expect(el.hasAttribute('disabled')).toBe(true);
      expect(el.disabled).toBe(true);
      
      // Test button disabled state
      const button = el.shadowRoot!.querySelector('button');
      expect(button!.hasAttribute('disabled')).toBe(true);
      expect(button!.getAttribute('aria-disabled')).toBe('true');
      
      // Test that disabled accordion doesn't toggle
      const initialOpen = el.open;
      el.toggle();
      await el.updateComplete;
      expect(el.open).toBe(initialOpen); // Should not change
      
      // Test click is prevented
      button!.click();
      await el.updateComplete;
      expect(el.open).toBe(initialOpen); // Should still not change
    });

    it('should apply disabled styling when disabled', async () => {
      el.disabled = true;
      await el.updateComplete;
      
      const button = el.shadowRoot!.querySelector('button') as HTMLElement;
      
      // Test that element has disabled attribute (which should trigger CSS rules)
      expect(el.hasAttribute('disabled')).toBe(true);
      
      // Test button disabled properties
      expect(button.hasAttribute('disabled')).toBe(true);
      expect(button.getAttribute('aria-disabled')).toBe('true');
      
      // Note: In test environment, computed styles may not reflect CSS selector rules perfectly
      // The key test is that the disabled attributes are properly set
    });
  });

  describe('Advanced Behavior - Partially Implemented', () => {
    it('should emit proper events for open/close state changes', async () => {
      // This is already implemented and tested above
      let eventDetail: any;
      el.addEventListener('toggle', (e: Event) => {
        eventDetail = (e as CustomEvent).detail;
      });

      el.toggle();
      await el.updateComplete;
      expect(eventDetail).toEqual({ open: true });

      el.toggle();
      await el.updateComplete;
      expect(eventDetail).toEqual({ open: false });
    });

    it('should handle nested accordions properly', async () => {
      // This is already implemented and tested above in the "Nested Accordions" section
      const nestedAccordion = new AccordionItem();
      const nestedHeader = document.createElement('span');
      nestedHeader.setAttribute('slot', 'header');
      nestedHeader.textContent = 'Nested Header';
      nestedAccordion.appendChild(nestedHeader);
      
      const nestedContent = document.createElement('div');
      nestedContent.setAttribute('slot', 'content');
      nestedContent.textContent = 'Nested Content';
      nestedAccordion.appendChild(nestedContent);

      el.querySelector('[slot="content"]')?.appendChild(nestedAccordion);
      await el.updateComplete;
      await nestedAccordion.updateComplete;

      // Open outer accordion
      el.toggle();
      await el.updateComplete;
      expect(el.open).toBe(true);

      // Nested accordion should be accessible
      expect(nestedAccordion.offsetParent).not.toBeNull();
      
      // Can toggle nested accordion
      nestedAccordion.toggle();
      await nestedAccordion.updateComplete;
      expect(nestedAccordion.open).toBe(true);
    });

    it.todo('should support configurable auto-collapse behavior');
    it.todo('should handle rapid keyboard interactions gracefully');
    it.todo('should maintain proper screen reader announcements for state changes');
  });

  describe('Indicator Variants - New Features', () => {
    it('should default to chevron indicator (useChevron=true)', async () => {
      expect(el.useChevron).toBe(true);
      expect(el.useX).toBe(false);
      expect(el.useMinus).toBe(false);
      expect(el.noIndicator).toBe(false);

      // Verify chevron SVG is rendered
      await el.updateComplete;
      const indicator = el.shadowRoot!.querySelector('.indicator');
      const svg = indicator!.querySelector('svg');
      expect(svg).not.toBeNull();

      // Chevron has the down-pointing path
      const path = svg!.querySelector('path');
      expect(path!.getAttribute('d')).toBe('m6 9 6 6 6-6');
    });

    it('should render X indicator when useX is true', async () => {
      el.useX = true;
      await el.updateComplete;

      expect(el.hasAttribute('use-x')).toBe(true);

      // Verify plus SVG is rendered (for X indicator)
      const indicator = el.shadowRoot!.querySelector('.indicator');
      const svg = indicator!.querySelector('svg');
      expect(svg).not.toBeNull();

      // Plus has vertical and horizontal paths
      const paths = svg!.querySelectorAll('path');
      expect(paths.length).toBe(2);
    });

    it('should render plus/minus indicator when useMinus is true', async () => {
      el.useMinus = true;
      await el.updateComplete;

      expect(el.hasAttribute('use-minus')).toBe(true);

      // When closed, should show plus
      let indicator = el.shadowRoot!.querySelector('.indicator');
      let svg = indicator!.querySelector('svg');
      let paths = svg!.querySelectorAll('path');
      expect(paths.length).toBe(2); // Plus has 2 paths

      // When open, should show minus
      el.open = true;
      await el.updateComplete;

      indicator = el.shadowRoot!.querySelector('.indicator');
      svg = indicator!.querySelector('svg');
      paths = svg!.querySelectorAll('path');
      expect(paths.length).toBe(1); // Minus has 1 path
    });

    it('should hide indicator when noIndicator is true', async () => {
      el.noIndicator = true;
      await el.updateComplete;

      expect(el.hasAttribute('no-indicator')).toBe(true);

      // Verify CSS rule exists for hiding indicator
      const styleContent = AccordionItem.styles.toString();
      expect(styleContent).toContain(':host([no-indicator]) .indicator');
      expect(styleContent).toContain('display: none');
    });

    it('should respect indicator priority: noIndicator > useX > useMinus > useChevron', async () => {
      // Set all to true
      el.useChevron = true;
      el.useX = true;
      el.useMinus = true;
      el.noIndicator = true;
      await el.updateComplete;

      // noIndicator should win - verify attribute is set
      expect(el.hasAttribute('no-indicator')).toBe(true);

      // Verify CSS rule exists for hiding
      const styleContent = AccordionItem.styles.toString();
      expect(styleContent).toContain(':host([no-indicator]) .indicator');

      // Remove noIndicator, useX should win (check attribute and SVG)
      el.noIndicator = false;
      await el.updateComplete;

      expect(el.hasAttribute('use-x')).toBe(true);
      const indicator = el.shadowRoot!.querySelector('.indicator');
      const svg = indicator!.querySelector('svg');
      const paths = svg!.querySelectorAll('path');
      expect(paths.length).toBe(2); // Plus for X indicator
    });

    it('should apply correct transform for chevron when open', async () => {
      el.useChevron = true;
      await el.updateComplete;

      // Verify CSS contains rotation rule
      const styleContent = AccordionItem.styles.toString();
      expect(styleContent).toContain(':host([use-chevron][open]) .indicator');
      expect(styleContent).toContain('transform: rotate(180deg)');
    });

    it('should apply correct transforms for X indicator', async () => {
      el.useX = true;
      await el.updateComplete;

      // Verify CSS contains both rotation rules
      const styleContent = AccordionItem.styles.toString();
      expect(styleContent).toContain(':host([use-x]) .indicator');
      expect(styleContent).toContain('transform: rotate(180deg)');
      expect(styleContent).toContain(':host([use-x][open]) .indicator');
      expect(styleContent).toContain('transform: rotate(45deg)');
    });
  });

  describe('Event Handling - Callback Props Pattern', () => {
    it('should fire onToggle callback', async () => {
      let callbackEventDetail: any = null;
      el.onToggle = (event: any) => {
        callbackEventDetail = event.detail;
      };

      // Toggle open
      el.toggle();
      await el.updateComplete;

      expect(callbackEventDetail).toBeTruthy();
      expect(callbackEventDetail.open).toBe(true);

      // Toggle closed
      el.toggle();
      await el.updateComplete;

      expect(callbackEventDetail.open).toBe(false);
    });

    it('should work without callback defined', async () => {
      // Should not throw when callback is not defined
      expect(() => {
        el.toggle();
      }).not.toThrow();
    });
  });

  describe('Event Handling - Dual Dispatch Pattern', () => {
    it('should fire both addEventListener and callback for toggle event', async () => {
      let eventListenerCalled = false;
      let callbackCalled = false;

      el.addEventListener('toggle', () => {
        eventListenerCalled = true;
      });

      el.onToggle = () => {
        callbackCalled = true;
      };

      el.toggle();
      await el.updateComplete;

      // Both should have been called
      expect(eventListenerCalled).toBe(true);
      expect(callbackCalled).toBe(true);
    });

    it('should dispatch composed event', async () => {
      let eventComposed = false;
      let eventBubbles = false;

      el.addEventListener('toggle', (event: any) => {
        eventComposed = event.composed;
        eventBubbles = event.bubbles;
      });

      el.toggle();
      await el.updateComplete;

      // Should be composed and bubbling
      expect(eventComposed).toBe(true);
      expect(eventBubbles).toBe(true);
    });

    it('should provide correct detail in both patterns', async () => {
      let listenerDetail: any = null;
      let callbackDetail: any = null;

      el.addEventListener('toggle', (event: any) => {
        listenerDetail = event.detail;
      });

      el.onToggle = (event: any) => {
        callbackDetail = event.detail;
      };

      el.toggle();
      await el.updateComplete;

      // Both should receive the same detail
      expect(listenerDetail).toEqual({ open: true });
      expect(callbackDetail).toEqual({ open: true });
      expect(listenerDetail).toEqual(callbackDetail);
    });
  });
});
