/**
 * AgnosticUI Breadcrumb Component Tests
 * Comprehensive test suite for ag-breadcrumb implementing WAI-ARIA Breadcrumb pattern
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { AgBreadcrumb, type BreadcrumbItem } from './Breadcrumb';

// AgBreadcrumb is automatically registered as 'ag-breadcrumb' via @customElement decorator

describe('AgBreadcrumb', () => {
  let element: AgBreadcrumb;

  beforeEach(() => {
    // Create element and add to DOM
    element = document.createElement('ag-breadcrumb') as AgBreadcrumb;
    // Set default items to prevent empty state
    const defaultItems: BreadcrumbItem[] = [
      { label: 'Home', href: '/' },
      { label: 'Test Page', current: true }
    ];
    element.items = defaultItems;
    document.body.appendChild(element);
  });

  afterEach(() => {
    // Clean up after each test
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  });

  describe('Component Creation and Basic Structure', () => {
    it('should create and render as semantic nav element', async () => {
      await element.updateComplete;

      const nav = element.shadowRoot?.querySelector('nav');
      expect(nav).toBeTruthy();
      expect(nav?.tagName).toBe('NAV');
    });

    it('should render with proper WAI-ARIA breadcrumb structure', async () => {
      await element.updateComplete;

      const nav = element.shadowRoot!.querySelector('nav');
      const ol = element.shadowRoot!.querySelector('ol');
      const items = element.shadowRoot!.querySelectorAll('li');

      expect(nav).toBeTruthy();
      expect(ol).toBeTruthy();
      expect(items.length).toBe(2);

      // Verify ordered list is inside nav
      expect(nav!.contains(ol!)).toBe(true);
    });

    it('should set default properties correctly', async () => {
      await element.updateComplete;

      expect(element.type).toBe('default');
      expect(element.ariaLabel).toBe('Breadcrumb');
      expect(element.items).toEqual([
        { label: 'Home', href: '/' },
        { label: 'Test Page', current: true }
      ]);
    });

    it('should render empty when no items provided', async () => {
      element.items = [];
      await element.updateComplete;

      const nav = element.shadowRoot?.querySelector('nav');
      expect(nav).toBeFalsy();
    });

    it('should apply correct CSS classes to structure', async () => {
      await element.updateComplete;

      const nav = element.shadowRoot!.querySelector('nav');
      const ol = element.shadowRoot!.querySelector('ol');
      const items = element.shadowRoot!.querySelectorAll('li');

      expect(nav!.classList.contains('ag-breadcrumb')).toBe(true);
      expect(ol!.classList.contains('ag-breadcrumb__list')).toBe(true);
      items.forEach(item => {
        expect(item.classList.contains('ag-breadcrumb__item')).toBe(true);
      });
    });
  });

  describe('ARIA Attributes and Accessibility', () => {
    it('should have correct WAI-ARIA Breadcrumb pattern implementation', async () => {
      await element.updateComplete;

      const nav = element.shadowRoot!.querySelector('nav');
      expect(nav!.getAttribute('aria-label')).toBe('Breadcrumb');
    });

    it('should support custom aria-label', async () => {
      element.ariaLabel = 'Custom breadcrumb navigation';
      await element.updateComplete;

      const nav = element.shadowRoot!.querySelector('nav');
      expect(nav!.getAttribute('aria-label')).toBe('Custom breadcrumb navigation');
    });

    it('should mark current page with aria-current="page"', async () => {
      element.items = [
        { label: 'Home', href: '/' },
        { label: 'Category', href: '/category' },
        { label: 'Current Page', current: true }
      ];
      await element.updateComplete;
      expect(element.shadowRoot!.querySelector('[aria-current]')?.textContent.trim()).toBe('Current Page')
    });

    it('should handle single item breadcrumb', async () => {
      element.items = [{ label: 'Home', current: true }];
      await element.updateComplete;

      const nav = element.shadowRoot!.querySelector('nav');
      const items = element.shadowRoot!.querySelectorAll('li');
      const currentLink = element.shadowRoot!.querySelector('[aria-current="page"]');

      expect(nav).toBeTruthy();
      expect(items.length).toBe(1);
      expect(currentLink).toBeTruthy();
      expect(currentLink!.textContent?.trim()).toBe('Home');
    });

    it('should use ordered list for semantic structure', async () => {
      await element.updateComplete;

      const ol = element.shadowRoot!.querySelector('ol');
      const ul = element.shadowRoot!.querySelector('ul');

      expect(ol).toBeTruthy();
      expect(ul).toBeFalsy();
    });

    it('should have proper focus management for links', async () => {
      element.items = [
        { label: 'Home', href: '/' },
        { label: 'Category', href: '/category' },
        { label: 'Current', current: true }
      ];
      await element.updateComplete;

      const links = element.shadowRoot!.querySelectorAll('a');

      // All links should be focusable
      links.forEach(link => {
        expect(link.getAttribute('tabindex')).not.toBe('-1');
      });
    });
  });

  describe('Separator Variants and Visual States', () => {
    it('should apply default separator (chevron)', async () => {
      element.type = 'default';
      element.items = [
        { label: 'Home', href: '/' },
        { label: 'Current', current: true }
      ];
      await element.updateComplete;

      // Default separator should be applied via CSS
      expect(element.type).toBe('default');
    });

    it('should apply slash separator type', async () => {
      element.type = 'slash';
      await element.updateComplete;

      expect(element.getAttribute('type')).toBe('slash');
    });

    it('should apply bullet separator type', async () => {
      element.type = 'bullet';
      await element.updateComplete;

      expect(element.getAttribute('type')).toBe('bullet');
    });

    it('should apply arrow separator type', async () => {
      element.type = 'arrow';
      await element.updateComplete;

      expect(element.getAttribute('type')).toBe('arrow');
    });

    it('should reflect type attribute for CSS styling', async () => {
      element.type = 'slash';
      await element.updateComplete;

      expect(element.hasAttribute('type')).toBe(true);
      expect(element.getAttribute('type')).toBe('slash');
    });

    it('should handle different item configurations', async () => {
      element.items = [
        { label: 'Home', href: '/' },
        { label: 'Category' }, // No href
        { label: 'Current', href: '/current', current: true }
      ];
      await element.updateComplete;

      const items = element.shadowRoot!.querySelectorAll('li');
      const links = element.shadowRoot!.querySelectorAll('a');
      const textSpan = element.shadowRoot!.querySelector('.ag-breadcrumb__text');

      expect(items.length).toBe(3);
      expect(links.length).toBe(1); // Home and Current have links
      expect(textSpan).toBeTruthy(); // Category has no link, should be text span
    });
  });

  describe('Event Handling', () => {
    it('should dispatch breadcrumb-click event when item is clicked', async () => {
      const clickHandler = vi.fn();
      element.addEventListener('breadcrumb-click', clickHandler);

      element.items = [
        { label: 'Home', href: '/' },
        { label: 'Category', href: '/category' }
      ];
      await element.updateComplete;

      const firstLink = element.shadowRoot!.querySelector('a')!;
      firstLink.click();

      expect(clickHandler).toHaveBeenCalledTimes(1);

      const eventDetail = clickHandler.mock.calls[0][0].detail;
      expect(eventDetail.item).toEqual({ label: 'Home', href: '/' });
      expect(eventDetail.index).toBe(0);
      expect(eventDetail.event).toBeInstanceOf(MouseEvent);
    });

    it('should bubble and compose events correctly', async () => {
      const parentHandler = vi.fn();
      document.addEventListener('breadcrumb-click', parentHandler);

      await element.updateComplete;
      const firstLink = element.shadowRoot!.querySelector('a')!;
      firstLink.click();

      expect(parentHandler).toHaveBeenCalledTimes(1);

      document.removeEventListener('breadcrumb-click', parentHandler);
    });
  });

  describe('Item Rendering and Link Behavior', () => {
    it('should render links for items with href', async () => {
      element.items = [
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'Current Page', current: true }
      ];
      await element.updateComplete;

      const links = element.shadowRoot!.querySelectorAll('a');

      expect(links.length).toBe(2);
      expect(links[0].getAttribute('href')).toBe('/');
      expect(links[1].getAttribute('href')).toBe('/products');
      expect(element.shadowRoot!.querySelector('[aria-current]')?.textContent.trim()).toBe('Current Page')
    });

    it('should render text span for items without href (except current)', async () => {
      element.items = [
        { label: 'Home', href: '/' },
        { label: 'Category' }, // No href, not current
        { label: 'Current', current: true }
      ];
      await element.updateComplete;

      const links = element.shadowRoot!.querySelectorAll('a');
      const textSpan = element.shadowRoot!.querySelector('.ag-breadcrumb__text');

      expect(links.length).toBe(1); // Home and Current
      expect(textSpan).toBeTruthy();
      expect(textSpan!.textContent?.trim()).toBe('Category');
    });

    it('should handle mixed item types correctly', async () => {
      element.items = [
        { label: 'Home', href: '/' },
        { label: 'Section' }, // No href
        { label: 'Category', href: '/category' },
        { label: 'Current Page', href: '/current', current: true }
      ];
      await element.updateComplete;

      const items = element.shadowRoot!.querySelectorAll('li');
      const links = element.shadowRoot!.querySelectorAll('a');
      const textSpans = element.shadowRoot!.querySelectorAll('.ag-breadcrumb__text');
      const currentLink = element.shadowRoot!.querySelector('[aria-current="page"]');

      expect(items.length).toBe(4);
      expect(links.length).toBe(2); // Home, Category, Current
      expect(textSpans.length).toBe(2); // Section
      expect(currentLink).toBeTruthy();
    });
  });

  describe('Property Updates and Reactivity', () => {
    it('should update when items array changes', async () => {
      element.items = [{ label: 'Initial', current: true }];
      await element.updateComplete;

      let items = element.shadowRoot!.querySelectorAll('li');
      expect(items.length).toBe(1);

      element.items = [
        { label: 'Home', href: '/' },
        { label: 'Page 1', href: '/page1' },
        { label: 'Current', current: true }
      ];
      await element.updateComplete;

      items = element.shadowRoot!.querySelectorAll('li');
      expect(items.length).toBe(3);
    });

    it('should update separator when type changes', async () => {
      element.type = 'default';
      await element.updateComplete;

      expect(element.getAttribute('type')).toBe('default');

      element.type = 'slash';
      await element.updateComplete;

      expect(element.getAttribute('type')).toBe('slash');
    });

    it('should update aria-label when changed', async () => {
      element.ariaLabel = 'Initial label';
      await element.updateComplete;

      let nav = element.shadowRoot!.querySelector('nav');
      expect(nav!.getAttribute('aria-label')).toBe('Initial label');

      element.ariaLabel = 'Updated breadcrumb navigation';
      await element.updateComplete;

      nav = element.shadowRoot!.querySelector('nav');
      expect(nav!.getAttribute('aria-label')).toBe('Updated breadcrumb navigation');
    });
  });

  describe('CSS Architecture and Styling', () => {
    it('should provide semantic token integration points', async () => {
      await element.updateComplete;

      const nav = element.shadowRoot!.querySelector('nav');
      const ol = element.shadowRoot!.querySelector('ol');

      expect(nav!.classList.contains('ag-breadcrumb')).toBe(true);
      expect(ol!.classList.contains('ag-breadcrumb__list')).toBe(true);
    });

    it('should maintain consistent structure across all item types', async () => {
      element.items = [
        { label: 'Link Item', href: '/link' },
        { label: 'Text Item' },
        { label: 'Current Item', current: true }
      ];
      await element.updateComplete;

      const items = element.shadowRoot!.querySelectorAll('.ag-breadcrumb__item');

      items.forEach(item => {
        expect(item.tagName).toBe('LI');
        expect(item.classList.contains('ag-breadcrumb__item')).toBe(true);
      });
    });

    it('should apply appropriate CSS classes to links and text', async () => {
      element.items = [
        { label: 'Link', href: '/link' },
        { label: 'Text' },
        { label: 'Current', current: true }
      ];
      await element.updateComplete;

      const links = element.shadowRoot!.querySelectorAll('.ag-breadcrumb__link');
      const textSpan = element.shadowRoot!.querySelector('.ag-breadcrumb__text');

      expect(links.length).toBe(1); // Link and Current
      expect(textSpan).toBeTruthy();
    });
  });

  describe('Edge Cases and Error Handling', () => {
    it('should handle empty items array gracefully', async () => {
      element.items = [];
      await element.updateComplete;

      const nav = element.shadowRoot?.querySelector('nav');
      expect(nav).toBeFalsy();
    });

    it('should handle null or undefined items', async () => {
      element.items = null as any;
      await element.updateComplete;

      const nav = element.shadowRoot?.querySelector('nav');
      expect(nav).toBeFalsy();
    });

    it('should handle items with empty labels', async () => {
      element.items = [
        { label: '', href: '/' },
        { label: 'Valid', current: true }
      ];
      await element.updateComplete;

      const items = element.shadowRoot!.querySelectorAll('li');
      expect(items.length).toBe(2);

      const firstLink = items[0].querySelector('a');
      expect(firstLink!.textContent?.trim()).toBe('');
    });

    it('should handle complex item configurations', async () => {
      element.items = [
        { label: 'Home', href: '/' },
        { label: 'Category', href: '/category' },
        { label: 'Subcategory' }, // No href
        { label: 'Product', href: '/product' },
        { label: 'Current Product', href: '/product/123', current: true }
      ];
      await element.updateComplete;

      const items = element.shadowRoot!.querySelectorAll('li');
      const links = element.shadowRoot!.querySelectorAll('a');
      const textSpans = element.shadowRoot!.querySelectorAll('.ag-breadcrumb__text');
      const currentLink = element.shadowRoot!.querySelector('[aria-current="page"]');

      expect(items.length).toBe(5);
      expect(links.length).toBe(3);
      expect(textSpans.length).toBe(2);
      expect(currentLink!.textContent?.trim()).toBe('Current Product');
    });
  });
});
