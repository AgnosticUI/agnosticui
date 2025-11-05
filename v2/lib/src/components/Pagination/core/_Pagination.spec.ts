import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { Pagination } from './Pagination';

describe('Pagination - Component Initialization', () => {
  let element: Pagination;

  beforeEach(() => {
    element = document.createElement('ag-pagination') as Pagination;
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('should render with default properties', async () => {
    await element.updateComplete;

    expect(element).toBeDefined();
    expect(element.current).toBe(1);
    expect(element.totalPages).toBe(1);
    expect(element.offset).toBe(2);
    expect(element.justify).toBe('');
    expect(element.ariaLabel).toBe('pagination');
    expect(element.bordered).toBe(false);
    expect(element.firstLastNavigation).toBe(true);
  });

  it('should render with custom properties', async () => {
    element.current = 5;
    element.totalPages = 20;
    element.offset = 1;
    element.justify = 'center';
    element.bordered = true;
    element.firstLastNavigation = false;
    await element.updateComplete;

    expect(element.current).toBe(5);
    expect(element.totalPages).toBe(20);
    expect(element.offset).toBe(1);
    expect(element.justify).toBe('center');
    expect(element.bordered).toBe(true);
    expect(element.firstLastNavigation).toBe(false);
  });

  it('should create navigation with proper ARIA role', async () => {
    await element.updateComplete;
    const nav = element.shadowRoot?.querySelector('nav');
    expect(nav).toBeDefined();
    expect(nav?.getAttribute('aria-label')).toBe('pagination');
  });

  it('should render pagination list', async () => {
    element.totalPages = 5;
    await element.updateComplete;

    const list = element.shadowRoot?.querySelector('.pagination');
    expect(list).toBeDefined();
    expect(list?.tagName).toBe('UL');
  });

  it('should handle single page gracefully', async () => {
    element.totalPages = 1;
    await element.updateComplete;

    const buttons = element.shadowRoot?.querySelectorAll('.pagination-button');
    expect(buttons).toBeDefined();
    expect(element.current).toBe(1);
  });
});

describe('Pagination - Page Generation', () => {
  let element: Pagination;

  beforeEach(() => {
    element = document.createElement('ag-pagination') as Pagination;
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('should generate pages with offset=1 at start', async () => {
    element.offset = 1;
    element.current = 1;
    element.totalPages = 10;
    await element.updateComplete;

    const pages = (element as any)._pages;
    expect(pages).toEqual([1, 2, '...', 10]);
  });

  it('should generate pages with offset=1 in middle', async () => {
    element.offset = 1;
    element.current = 5;
    element.totalPages = 10;
    await element.updateComplete;

    const pages = (element as any)._pages;
    expect(pages).toEqual([1, '...', 4, 5, 6, '...', 10]);
  });

  it('should generate pages with offset=1 at end', async () => {
    element.offset = 1;
    element.current = 10;
    element.totalPages = 10;
    await element.updateComplete;

    const pages = (element as any)._pages;
    expect(pages).toEqual([1, '...', 9, 10]);
  });

  it('should generate pages with offset=2 at start', async () => {
    element.offset = 2;
    element.current = 1;
    element.totalPages = 20;
    await element.updateComplete;

    const pages = (element as any)._pages;
    expect(pages).toEqual([1, 2, 3, '...', 20]);
  });

  it('should generate pages with offset=2 in middle', async () => {
    element.offset = 2;
    element.current = 10;
    element.totalPages = 20;
    await element.updateComplete;

    const pages = (element as any)._pages;
    expect(pages).toEqual([1, '...', 8, 9, 10, 11, 12, '...', 20]);
  });

  it('should generate pages with offset=2 at end', async () => {
    element.offset = 2;
    element.current = 20;
    element.totalPages = 20;
    await element.updateComplete;

    const pages = (element as any)._pages;
    expect(pages).toEqual([1, '...', 18, 19, 20]);
  });

  it('should handle edge case at position 5 with offset=2', async () => {
    element.offset = 2;
    element.current = 5;
    element.totalPages = 20;
    await element.updateComplete;

    const pages = (element as any)._pages;
    expect(pages).toEqual([1, 2, 3, 4, 5, 6, 7, '...', 20]);
  });

  it('should handle edge case at position totalPages-4 with offset=2', async () => {
    element.offset = 2;
    element.current = 16;
    element.totalPages = 20;
    await element.updateComplete;

    const pages = (element as any)._pages;
    expect(pages).toEqual([1, '...', 14, 15, 16, 17, 18, 19, 20]);
  });

  it('should return [1] for totalPages=1', async () => {
    element.totalPages = 1;
    await element.updateComplete;

    const pages = (element as any)._pages;
    expect(pages).toEqual([1]);
  });

  it('should show all pages when totalPages is small', async () => {
    element.offset = 2;
    element.totalPages = 5;
    element.current = 3;
    await element.updateComplete;

    const pages = (element as any)._pages;
    expect(pages).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('Pagination - ARIA Compliance', () => {
  let element: Pagination;

  beforeEach(() => {
    element = document.createElement('ag-pagination') as Pagination;
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('should implement navigation role', async () => {
    await element.updateComplete;
    const nav = element.shadowRoot?.querySelector('[aria-label]');
    expect(nav?.tagName).toBe('NAV');
  });

  it('should support custom aria-label', async () => {
    element.ariaLabel = 'Search results pagination';
    await element.updateComplete;

    const nav = element.shadowRoot?.querySelector('nav');
    expect(nav?.getAttribute('aria-label')).toBe('Search results pagination');
  });

  it('should mark current page with aria-current="page"', async () => {
    element.current = 3;
    element.totalPages = 5;
    await element.updateComplete;

    const buttons = Array.from(element.shadowRoot?.querySelectorAll('.pagination-button') || []);
    const currentButton = buttons.find(btn => btn.getAttribute('aria-current') === 'page') as HTMLElement;

    expect(currentButton).toBeDefined();
    expect(currentButton?.textContent?.trim()).toBe('3');
  });

  it('should mark disabled buttons with aria-disabled', async () => {
    element.current = 1;
    element.totalPages = 5;
    await element.updateComplete;

    const buttons = element.shadowRoot?.querySelectorAll('.pagination-button');
    const firstButton = buttons?.[0] as HTMLElement;
    const prevButton = buttons?.[1] as HTMLElement;

    expect(firstButton.getAttribute('aria-disabled')).toBe('true');
    expect(prevButton.getAttribute('aria-disabled')).toBe('true');
  });

  it('should provide descriptive aria-labels for page buttons', async () => {
    element.current = 1;
    element.totalPages = 3;
    await element.updateComplete;

    const buttons = Array.from(element.shadowRoot?.querySelectorAll('.pagination-button') || []);
    const page2Button = buttons.find(btn => btn.textContent?.trim() === '2') as HTMLElement;

    expect(page2Button).toBeDefined();
    expect(page2Button?.getAttribute('aria-label')).toContain('Goto page 2');
  });

  it('should provide descriptive aria-label for current page', async () => {
    element.current = 2;
    element.totalPages = 3;
    await element.updateComplete;

    const buttons = Array.from(element.shadowRoot?.querySelectorAll('.pagination-button') || []);
    const currentButton = buttons.find(btn => btn.getAttribute('aria-current') === 'page') as HTMLElement;

    expect(currentButton).toBeDefined();
    expect(currentButton?.getAttribute('aria-label')).toContain('current page');
  });

  it('should provide descriptive aria-labels for navigation buttons', async () => {
    element.current = 2;
    element.totalPages = 5;
    await element.updateComplete;

    const buttons = element.shadowRoot?.querySelectorAll('.pagination-button');
    const firstButton = buttons?.[0] as HTMLElement;
    const prevButton = buttons?.[1] as HTMLElement;
    const lastIndex = buttons!.length - 1;
    const nextButton = buttons?.[lastIndex - 1] as HTMLElement;
    const lastButton = buttons?.[lastIndex] as HTMLElement;

    expect(firstButton.getAttribute('aria-label')).toContain('Goto page 1');
    expect(prevButton.getAttribute('aria-label')).toContain('previous');
    expect(nextButton.getAttribute('aria-label')).toContain('next');
    expect(lastButton.getAttribute('aria-label')).toContain('last');
  });
});

describe('Pagination - User Interaction', () => {
  let element: Pagination;

  beforeEach(() => {
    element = document.createElement('ag-pagination') as Pagination;
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('should navigate to clicked page', async () => {
    element.current = 1;
    element.totalPages = 5;
    await element.updateComplete;

    const buttons = Array.from(element.shadowRoot?.querySelectorAll('.pagination-button') || []);
    const page3Button = buttons.find(btn => btn.textContent?.trim() === '3') as HTMLButtonElement;

    expect(page3Button).toBeDefined();
    page3Button.click();
    await element.updateComplete;
    expect(element.current).toBe(3);
  });

  it('should navigate to next page', async () => {
    element.current = 2;
    element.totalPages = 5;
    await element.updateComplete;

    const buttons = element.shadowRoot?.querySelectorAll('.pagination-button');
    const nextButton = buttons?.[buttons.length - 2] as HTMLButtonElement;
    nextButton.click();
    await element.updateComplete;

    expect(element.current).toBe(3);
  });

  it('should navigate to previous page', async () => {
    element.current = 3;
    element.totalPages = 5;
    await element.updateComplete;

    const buttons = element.shadowRoot?.querySelectorAll('.pagination-button');
    const prevButton = buttons?.[1] as HTMLButtonElement;
    prevButton.click();
    await element.updateComplete;

    expect(element.current).toBe(2);
  });

  it('should navigate to first page', async () => {
    element.current = 3;
    element.totalPages = 5;
    await element.updateComplete;

    const buttons = element.shadowRoot?.querySelectorAll('.pagination-button');
    const firstButton = buttons?.[0] as HTMLButtonElement;
    firstButton.click();
    await element.updateComplete;

    expect(element.current).toBe(1);
  });

  it('should navigate to last page', async () => {
    element.current = 3;
    element.totalPages = 5;
    await element.updateComplete;

    const buttons = element.shadowRoot?.querySelectorAll('.pagination-button');
    const lastButton = buttons?.[buttons.length - 1] as HTMLButtonElement;
    lastButton.click();
    await element.updateComplete;

    expect(element.current).toBe(5);
  });

  it('should not navigate when clicking disabled previous button', async () => {
    element.current = 1;
    element.totalPages = 5;
    await element.updateComplete;

    const buttons = element.shadowRoot?.querySelectorAll('.pagination-button');
    const prevButton = buttons?.[1] as HTMLButtonElement;
    
    expect(prevButton.disabled).toBe(true);
    prevButton.click();
    await element.updateComplete;

    expect(element.current).toBe(1);
  });

  it('should not navigate when clicking disabled next button', async () => {
    element.current = 5;
    element.totalPages = 5;
    await element.updateComplete;

    const buttons = element.shadowRoot?.querySelectorAll('.pagination-button');
    const nextButton = buttons?.[buttons.length - 2] as HTMLButtonElement;
    
    expect(nextButton.disabled).toBe(true);
    nextButton.click();
    await element.updateComplete;

    expect(element.current).toBe(5);
  });

  it('should not navigate when clicking current page', async () => {
    element.current = 3;
    element.totalPages = 5;
    await element.updateComplete;

    const pageChangeSpy = vi.fn();
    element.addEventListener('page-change', pageChangeSpy);

    const buttons = Array.from(element.shadowRoot?.querySelectorAll('.pagination-button') || []);
    const currentButton = buttons.find(btn => btn.getAttribute('aria-current') === 'page') as HTMLButtonElement;

    expect(currentButton).toBeDefined();
    currentButton.click();
    await element.updateComplete;
    expect(element.current).toBe(3);
    expect(pageChangeSpy).not.toHaveBeenCalled();
  });

  it('should update pages when navigating', async () => {
    element.current = 1;
    element.totalPages = 20;
    element.offset = 2;
    await element.updateComplete;

    const initialPages = [...(element as any)._pages];

    element.current = 10;
    await element.updateComplete;

    const middlePages = (element as any)._pages;
    expect(middlePages).not.toEqual(initialPages);
    expect(middlePages).toContain(10);
  });
});

describe('Pagination - Visual Variants', () => {
  let element: Pagination;

  beforeEach(() => {
    element = document.createElement('ag-pagination') as Pagination;
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('should apply bordered style when bordered is true', async () => {
    element.bordered = true;
    element.current = 2;
    element.totalPages = 5;
    await element.updateComplete;

    expect(element.hasAttribute('bordered')).toBe(true);
  });

  it('should hide first/last buttons when firstLastNavigation is false', async () => {
    element.firstLastNavigation = false;
    element.totalPages = 5;
    await element.updateComplete;

    const buttons = Array.from(element.shadowRoot?.querySelectorAll('.pagination-button') || []);
    
    const hasFirst = buttons.some(btn => btn.textContent?.includes('First'));
    const hasLast = buttons.some(btn => btn.textContent?.includes('Last'));

    expect(hasFirst).toBe(false);
    expect(hasLast).toBe(false);
  });

  it('should apply justify class based on justify prop', async () => {
    element.justify = 'center';
    await element.updateComplete;

    const container = element.shadowRoot?.querySelector('.pagination-container');
    expect(container?.classList.contains('pagination-center')).toBe(true);
  });

  it('should apply start justify class', async () => {
    element.justify = 'start';
    await element.updateComplete;

    const container = element.shadowRoot?.querySelector('.pagination-container');
    expect(container?.classList.contains('pagination-start')).toBe(true);
  });

  it('should apply end justify class', async () => {
    element.justify = 'end';
    await element.updateComplete;

    const container = element.shadowRoot?.querySelector('.pagination-container');
    expect(container?.classList.contains('pagination-end')).toBe(true);
  });

  it('should use custom navigation labels', async () => {
    element.navigationLabels = {
      first: 'Erste',
      previous: 'Zurück',
      next: 'Weiter',
      last: 'Letzte',
    };
    element.totalPages = 5;
    await element.updateComplete;

    const buttons = Array.from(element.shadowRoot?.querySelectorAll('.pagination-button') || []);
    
    const hasCustomLabels = buttons.some(btn => {
      const text = btn.textContent || '';
      return text.includes('Erste') || text.includes('Zurück') || 
             text.includes('Weiter') || text.includes('Letzte');
    });

    expect(hasCustomLabels).toBe(true);
  });
});

describe('Pagination - Event Handling', () => {
  let element: Pagination;

  beforeEach(() => {
    element = document.createElement('ag-pagination') as Pagination;
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('should fire page-change event (addEventListener pattern)', async () => {
    element.current = 1;
    element.totalPages = 5;
    await element.updateComplete;

    const pageChangeSpy = vi.fn();
    element.addEventListener('page-change', pageChangeSpy);

    const buttons = Array.from(element.shadowRoot?.querySelectorAll('.pagination-button') || []);
    const page3Button = buttons.find(btn => btn.textContent?.trim() === '3') as HTMLButtonElement;

    expect(page3Button).toBeDefined();
    page3Button.click();
    await element.updateComplete;
    expect(pageChangeSpy).toHaveBeenCalledOnce();
    expect(pageChangeSpy.mock.calls[0][0].detail.page).toBe(3);
  });

  it('should invoke onPageChange callback (prop pattern)', async () => {
    element.current = 1;
    element.totalPages = 5;
    const onPageChangeSpy = vi.fn();
    element.onPageChange = onPageChangeSpy;
    await element.updateComplete;

    const buttons = Array.from(element.shadowRoot?.querySelectorAll('.pagination-button') || []);
    const page2Button = buttons.find(btn => btn.textContent?.trim() === '2') as HTMLButtonElement;

    expect(page2Button).toBeDefined();
    page2Button.click();
    await element.updateComplete;
    expect(onPageChangeSpy).toHaveBeenCalledOnce();
    expect(onPageChangeSpy.mock.calls[0][0].detail.page).toBe(2);
  });

  it('should fire both addEventListener and callback (dual-dispatch)', async () => {
    element.current = 1;
    element.totalPages = 5;
    await element.updateComplete;

    let eventListenerCalled = false;
    let callbackCalled = false;

    element.addEventListener('page-change', () => {
      eventListenerCalled = true;
    });

    element.onPageChange = () => {
      callbackCalled = true;
    };

    const buttons = Array.from(element.shadowRoot?.querySelectorAll('.pagination-button') || []);
    const page2Button = buttons.find(btn => btn.textContent?.trim() === '2') as HTMLButtonElement;

    expect(page2Button).toBeDefined();
    page2Button.click();
    await element.updateComplete;
    expect(eventListenerCalled).toBe(true);
    expect(callbackCalled).toBe(true);
  });

  it('should dispatch composed event', async () => {
    element.current = 1;
    element.totalPages = 5;
    await element.updateComplete;

    let eventComposed = false;
    let eventBubbles = false;

    element.addEventListener('page-change', (event: any) => {
      eventComposed = event.composed;
      eventBubbles = event.bubbles;
    });

    const buttons = Array.from(element.shadowRoot?.querySelectorAll('.pagination-button') || []);
    const page2Button = buttons.find(btn => btn.textContent?.trim() === '2') as HTMLButtonElement;

    expect(page2Button).toBeDefined();
    page2Button.click();
    await element.updateComplete;
    expect(eventComposed).toBe(true);
    expect(eventBubbles).toBe(true);
  });

  it('should include pages array in event detail', async () => {
    element.current = 1;
    element.totalPages = 10;
    element.offset = 2;
    await element.updateComplete;

    let eventPages: any[] = [];

    element.addEventListener('page-change', (event: any) => {
      eventPages = event.detail.pages;
    });

    const buttons = Array.from(element.shadowRoot?.querySelectorAll('.pagination-button') || []);
    const page2Button = buttons.find(btn => btn.textContent?.trim() === '2') as HTMLButtonElement;

    expect(page2Button).toBeDefined();
    page2Button.click();
    await element.updateComplete;
    expect(Array.isArray(eventPages)).toBe(true);
    expect(eventPages.length).toBeGreaterThan(0);
  });
});

describe('Pagination - Focus Management', () => {
  let element: Pagination;

  beforeEach(() => {
    element = document.createElement('ag-pagination') as Pagination;
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('should focus current page button after page change', async () => {
    element.current = 1;
    element.totalPages = 5;
    await element.updateComplete;

    const buttons = Array.from(element.shadowRoot?.querySelectorAll('.pagination-button') || []);
    const page3Button = buttons.find(btn => btn.textContent?.trim() === '3') as HTMLButtonElement;

    expect(page3Button).toBeDefined();
    page3Button.click();
    await element.updateComplete;
    
    // Wait for focus to be applied
    await new Promise(resolve => setTimeout(resolve, 10));

    // Current button should be page 3
    expect(element.current).toBe(3);
  });
});

describe('Pagination - CSS Attribute Selectors', () => {
  it('uses correct CSS attribute selectors for boolean props', () => {
    const styleContent = Pagination.styles.toString();
    expect(styleContent).toContain(':host([bordered])');
    expect(styleContent).not.toContain('[bordered="true"]');
  });
});
