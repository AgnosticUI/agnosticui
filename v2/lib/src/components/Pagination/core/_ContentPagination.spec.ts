import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { ContentPagination, type NavigateEvent } from './ContentPagination';

describe('ContentPagination - Component Initialization', () => {
  let element: ContentPagination;

  beforeEach(() => {
    element = document.createElement('ag-content-pagination') as ContentPagination;
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('should render with default properties', async () => {
    await element.updateComplete;

    expect(element).toBeDefined();
    expect(element.previous).toBeUndefined();
    expect(element.next).toBeUndefined();
    expect(element.parent).toBeUndefined();
    expect(element.ariaLabel).toBe('content navigation');
  });

  it('should render with custom properties', async () => {
    element.previous = { title: 'Introduction', href: '/intro' };
    element.next = { title: 'Getting Started', href: '/start' };
    element.parent = { title: 'Documentation', href: '/docs' };
    element.ariaLabel = 'Guide navigation';
    await element.updateComplete;

    expect(element.previous).toEqual({ title: 'Introduction', href: '/intro' });
    expect(element.next).toEqual({ title: 'Getting Started', href: '/start' });
    expect(element.parent).toEqual({ title: 'Documentation', href: '/docs' });
    expect(element.ariaLabel).toBe('Guide navigation');
  });

  it('should create navigation with proper ARIA role', async () => {
    await element.updateComplete;
    const nav = element.shadowRoot?.querySelector('nav');
    expect(nav).toBeDefined();
    expect(nav?.getAttribute('aria-label')).toBe('content navigation');
  });

  it('should render navigation container', async () => {
    element.previous = { title: 'Previous Page' };
    element.next = { title: 'Next Page' };
    await element.updateComplete;

    const nav = element.shadowRoot?.querySelector('.content-pagination-nav');
    expect(nav).toBeDefined();
  });

  it('should handle missing navigation items gracefully', async () => {
    await element.updateComplete;

    const nav = element.shadowRoot?.querySelector('.content-pagination-nav');
    expect(nav).toBeDefined();
    
    const links = element.shadowRoot?.querySelectorAll('.content-pagination-link');
    expect(links?.length).toBe(0);
  });
});

describe('ContentPagination - Navigation Items', () => {
  let element: ContentPagination;

  beforeEach(() => {
    element = document.createElement('ag-content-pagination') as ContentPagination;
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('should render previous link when provided', async () => {
    element.previous = { title: 'Introduction', href: '/intro' };
    await element.updateComplete;
    const prevLink = element.shadowRoot?.querySelector('[aria-label="Previous: Introduction"]') as HTMLAnchorElement;

    expect(prevLink).toBeDefined();
    expect(prevLink?.getAttribute('href')).toBe('/intro');
    expect(prevLink?.getAttribute('aria-label')).toBe('Previous: Introduction');
  });

  it('should render next link when provided', async () => {
    element.next = { title: 'Getting Started', href: '/start' };
    await element.updateComplete;
    const nextLink = element.shadowRoot?.querySelector('[aria-label="Next: Getting Started"]');

    expect(nextLink).toBeDefined();
    expect(nextLink?.getAttribute('href')).toBe('/start');
    expect(nextLink?.getAttribute('aria-label')).toBe('Next: Getting Started');
  });

  it('should render parent link when provided', async () => {
    element.parent = { title: 'Documentation', href: '/docs' };
    await element.updateComplete;

    const parentLink = element.shadowRoot?.querySelector('[aria-label="Up to: Documentation"]') as HTMLAnchorElement;
    expect(parentLink).toBeDefined();
    expect(parentLink?.getAttribute('href')).toBe('/docs');
    expect(parentLink?.getAttribute('aria-label')).toBe('Up to: Documentation');
  });

  it('should render button instead of link when href is not provided', async () => {
    element.previous = { title: 'Introduction' };
    await element.updateComplete;
    const prevButton = element.shadowRoot?.querySelector('[aria-label="Previous: Introduction"]') as HTMLButtonElement;

    expect(prevButton).toBeDefined();
    expect(prevButton?.tagName).toBe('BUTTON');
    expect(prevButton?.getAttribute('type')).toBe('button');
  });

  it('should render all three navigation items', async () => {
    element.previous = { title: 'Previous', href: '/prev' };
    element.next = { title: 'Next', href: '/next' };
    element.parent = { title: 'Parent', href: '/parent' };
    await element.updateComplete;

    const prevLink = element.shadowRoot?.querySelector('[aria-label="Previous: Previous"]');
    const nextLink = element.shadowRoot?.querySelector('[aria-label="Next: Next"]');
    const parentLink = element.shadowRoot?.querySelector('[aria-label="Up to: Parent"]');
    expect(prevLink).toBeDefined();
    expect(nextLink).toBeDefined();
    expect(parentLink).toBeDefined();
  });
});

describe('ContentPagination - Icon Slots', () => {
  let element: ContentPagination;

  beforeEach(() => {
    element = document.createElement('ag-content-pagination') as ContentPagination;
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('should render default previous icon', async () => {
    element.previous = { title: 'Previous Page' };
    await element.updateComplete;
    const prevLink = element.shadowRoot?.querySelector('[aria-label="Previous: Previous Page"]');
    const iconContainer = prevLink?.querySelector('.content-pagination-icon');
    const svg = iconContainer?.querySelector('svg');
    expect(svg).toBeDefined();
    expect(svg?.tagName.toLowerCase()).toBe('svg');
  });

  it('should render default next icon', async () => {
    element.next = { title: 'Next Page' };
    await element.updateComplete;
    const nextLink = element.shadowRoot?.querySelector('[aria-label="Next: Next Page"]');
    const iconContainer = nextLink?.querySelector('.content-pagination-icon');
    const svg = iconContainer?.querySelector('svg');
    expect(svg).toBeDefined();
    expect(svg?.tagName.toLowerCase()).toBe('svg');
  });

  it('should render default parent icon', async () => {
    element.parent = { title: 'Parent Page' };
    await element.updateComplete;

    const icon = element.shadowRoot?.querySelector('slot[name="parent-icon"]');
    expect(icon).toBeDefined();
    expect(icon?.textContent).toBe(String.fromCharCode(8593)); // ↑
  });
});

describe('ContentPagination - User Interaction', () => {
  let element: ContentPagination;

  beforeEach(() => {
    element = document.createElement('ag-content-pagination') as ContentPagination;
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('should navigate to previous page with href', async () => {
    element.previous = { title: 'Introduction', href: '/intro' };
    await element.updateComplete;

    const prevLink = element.shadowRoot?.querySelector('[aria-label="Previous: Introduction"]') as HTMLAnchorElement;

    expect(prevLink).toBeDefined();
    expect(prevLink.href).toContain('/intro');
  });

  it('should navigate to next page with href', async () => {
    element.next = { title: 'Getting Started', href: '/start' };
    await element.updateComplete;

    const nextLink = element.shadowRoot?.querySelector('[aria-label="Next: Getting Started"]') as HTMLAnchorElement;

    expect(nextLink).toBeDefined();
    expect(nextLink.href).toContain('/start');
  });

  it('should navigate to parent page with href', async () => {
    element.parent = { title: 'Documentation', href: '/docs' };
    await element.updateComplete;

    const parentLink = element.shadowRoot?.querySelector('[aria-label="Up to: Documentation"]') as HTMLAnchorElement;

    expect(parentLink).toBeDefined();
    expect(parentLink.href).toContain('/docs');
  });

  it('should fire navigate event when clicking previous button without href', async () => {
    element.previous = { title: 'Introduction' };
    await element.updateComplete;

    const navigateSpy = vi.fn();
    element.addEventListener('navigate', navigateSpy);

    const prevButton = element.shadowRoot?.querySelector('[aria-label="Previous: Introduction"]') as HTMLButtonElement;

    expect(prevButton).toBeDefined();
    prevButton.click();
    await element.updateComplete;

    expect(navigateSpy).toHaveBeenCalledOnce();
    const event = navigateSpy.mock.calls[0][0] as NavigateEvent;
    expect(event.detail.direction).toBe('previous');
    expect(event.detail.title).toBe('Introduction');
  });

  it('should fire navigate event when clicking next button without href', async () => {
    element.next = { title: 'Getting Started' };
    await element.updateComplete;

    const navigateSpy = vi.fn();
    element.addEventListener('navigate', navigateSpy);

    const nextButton = element.shadowRoot?.querySelector('[aria-label="Next: Getting Started"]') as HTMLButtonElement;

    expect(nextButton).toBeDefined();
    nextButton.click();
    await element.updateComplete;

    expect(navigateSpy).toHaveBeenCalledOnce();
    const event = navigateSpy.mock.calls[0][0] as NavigateEvent;
    expect(event.detail.direction).toBe('next');
    expect(event.detail.title).toBe('Getting Started');
  });

  it('should fire navigate event when clicking parent button without href', async () => {
    element.parent = { title: 'Documentation' };
    await element.updateComplete;

    const navigateSpy = vi.fn();
    element.addEventListener('navigate', navigateSpy);

    const parentButton = element.shadowRoot?.querySelector('[aria-label="Up to: Documentation"]') as HTMLButtonElement;

    expect(parentButton).toBeDefined();
    parentButton.click();
    await element.updateComplete;

    expect(navigateSpy).toHaveBeenCalledOnce();
    const event = navigateSpy.mock.calls[0][0] as NavigateEvent;
    expect(event.detail.direction).toBe('parent');
    expect(event.detail.title).toBe('Documentation');
  });

  it('should prevent default when onNavigate callback is provided with href', async () => {
    element.previous = { title: 'Introduction', href: '/intro' };
    element.onNavigate = vi.fn();
    await element.updateComplete;
    const prevLink = element.shadowRoot?.querySelector('[aria-label="Previous: Introduction"]') as HTMLAnchorElement;

    expect(prevLink).toBeDefined();

    const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true });
    const preventDefaultSpy = vi.spyOn(clickEvent, 'preventDefault');
    
    prevLink.dispatchEvent(clickEvent);
    await element.updateComplete;

    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(element.onNavigate).toHaveBeenCalled();
  });

  it('should not prevent default when no onNavigate callback with href', async () => {
    element.previous = { title: 'Introduction', href: '/intro' };
    await element.updateComplete;

    const prevLink = element.shadowRoot?.querySelector('[aria-label="Previous: Introduction"]') as HTMLAnchorElement;

    expect(prevLink).toBeDefined();

    const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true });
    const preventDefaultSpy = vi.spyOn(clickEvent, 'preventDefault');
    
    prevLink.dispatchEvent(clickEvent);
    await element.updateComplete;

    expect(preventDefaultSpy).not.toHaveBeenCalled();
  });
});

describe('ContentPagination - Event Handling', () => {
  let element: ContentPagination;

  beforeEach(() => {
    element = document.createElement('ag-content-pagination') as ContentPagination;
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('should invoke onNavigate callback (prop pattern)', async () => {
    element.previous = { title: 'Introduction' };
    const onNavigateSpy = vi.fn();
    element.onNavigate = onNavigateSpy;
    await element.updateComplete;

    const prevButton = element.shadowRoot?.querySelector('[aria-label="Previous: Introduction"]') as HTMLButtonElement;

    expect(prevButton).toBeDefined();
    prevButton.click();
    await element.updateComplete;

    expect(onNavigateSpy).toHaveBeenCalledOnce();
    const event = onNavigateSpy.mock.calls[0][0] as NavigateEvent;
    expect(event.detail.direction).toBe('previous');
    expect(event.detail.title).toBe('Introduction');
  });

  it('should fire both addEventListener and callback (dual-dispatch)', async () => {
    element.next = { title: 'Getting Started' };
    await element.updateComplete;

    let eventListenerCalled = false;
    let callbackCalled = false;

    element.addEventListener('navigate', () => {
      eventListenerCalled = true;
    });

    element.onNavigate = () => {
      callbackCalled = true;
    };

    const nextButton = element.shadowRoot?.querySelector('[aria-label="Next: Getting Started"]') as HTMLButtonElement;

    expect(nextButton).toBeDefined();
    nextButton.click();
    await element.updateComplete;

    expect(eventListenerCalled).toBe(true);
    expect(callbackCalled).toBe(true);
  });

  it('should dispatch composed event', async () => {
    element.previous = { title: 'Introduction' };
    await element.updateComplete;

    let eventComposed = false;
    let eventBubbles = false;


    element.addEventListener('navigate', (event: Event) => {
      const navigateEvent = event as NavigateEvent;
      eventComposed = navigateEvent.composed;
      eventBubbles = navigateEvent.bubbles;
    });

    const prevButton = element.shadowRoot?.querySelector('[aria-label="Previous: Introduction"]') as HTMLButtonElement;

    expect(prevButton).toBeDefined();
    prevButton.click();
    await element.updateComplete;

    expect(eventComposed).toBe(true);
    expect(eventBubbles).toBe(true);
  });

  it('should include href in event detail when provided', async () => {
    element.next = { title: 'Getting Started', href: '/start' };
    element.onNavigate = vi.fn();
    await element.updateComplete;

    const nextLink = element.shadowRoot?.querySelector('[aria-label="Next: Getting Started"]') as HTMLAnchorElement;

    expect(nextLink).toBeDefined();
    nextLink.click();
    await element.updateComplete;

    expect(element.onNavigate).toHaveBeenCalledOnce();
    const event = (element.onNavigate as ReturnType<typeof vi.fn>).mock.calls[0][0] as NavigateEvent;
    expect(event.detail.href).toBe('/start');
  });
});

describe('ContentPagination - ARIA Compliance', () => {
  let element: ContentPagination;

  beforeEach(() => {
    element = document.createElement('ag-content-pagination') as ContentPagination;
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
    element.ariaLabel = 'Tutorial navigation';
    await element.updateComplete;

    const nav = element.shadowRoot?.querySelector('nav');
    expect(nav?.getAttribute('aria-label')).toBe('Tutorial navigation');
  });

  it('should provide descriptive aria-labels for navigation links', async () => {
    element.previous = { title: 'Introduction', href: '/intro' };
    element.next = { title: 'Getting Started', href: '/start' };
    element.parent = { title: 'Documentation', href: '/docs' };
    await element.updateComplete;

    const prevLink = element.shadowRoot?.querySelector('[aria-label="Previous: Introduction"]');
    const nextLink = element.shadowRoot?.querySelector('[aria-label="Next: Getting Started"]');
    const parentLink = element.shadowRoot?.querySelector('[aria-label="Up to: Documentation"]');

    expect(prevLink?.getAttribute('aria-label')).toBe('Previous: Introduction');
    expect(nextLink?.getAttribute('aria-label')).toBe('Next: Getting Started');
    expect(parentLink?.getAttribute('aria-label')).toBe('Up to: Documentation');
  });
});

describe('ContentPagination - Layout and Styling', () => {
  let element: ContentPagination;

  beforeEach(() => {
    element = document.createElement('ag-content-pagination') as ContentPagination;
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('should apply proper layout classes', async () => {
    element.previous = { title: 'Previous' };
    element.next = { title: 'Next' };
    await element.updateComplete;

    const prevItem = element.shadowRoot?.querySelector('.content-pagination-item-previous');
    const nextItem = element.shadowRoot?.querySelector('.content-pagination-item-next');

    expect(prevItem).toBeDefined();
    expect(nextItem).toBeDefined();
  });

  it('should render empty divs when navigation items are missing', async () => {
    await element.updateComplete;

    const items = element.shadowRoot?.querySelectorAll('.content-pagination-item');
    expect(items?.length).toBe(2);
  });

  it('should render parent container only when parent is provided', async () => {
    await element.updateComplete;

    let parentContainer = element.shadowRoot?.querySelector('.content-pagination-parent');
    expect(parentContainer).toBeNull();

    element.parent = { title: 'Documentation' };
    await element.updateComplete;

    parentContainer = element.shadowRoot?.querySelector('.content-pagination-parent');
    expect(parentContainer).toBeDefined();
  });
});

describe('ContentPagination - Conditional Styling', () => {
  let element: ContentPagination;

  beforeEach(() => {
    element = document.createElement('ag-content-pagination') as ContentPagination;
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('should not have the with-parent class by default', async () => {
    await element.updateComplete;
    const nav = element.shadowRoot?.querySelector('.content-pagination-nav');
    expect(nav?.classList.contains('content-pagination-nav-with-parent')).toBe(false);
  });

  it('should not have the with-parent class when only parent is provided', async () => {
    element.parent = { title: 'Parent' };
    await element.updateComplete;
    const nav = element.shadowRoot?.querySelector('.content-pagination-nav');
    expect(nav?.classList.contains('content-pagination-nav-with-parent')).toBe(false);
  });

  it('should not have the with-parent class when only children are provided', async () => {
    element.previous = { title: 'Previous' };
    await element.updateComplete;
    const nav = element.shadowRoot?.querySelector('.content-pagination-nav');
    expect(nav?.classList.contains('content-pagination-nav-with-parent')).toBe(false);
  });

  it('should have the with-parent class when parent and previous child are provided', async () => {
    element.parent = { title: 'Parent' };
    element.previous = { title: 'Previous' };
    await element.updateComplete;
    const nav = element.shadowRoot?.querySelector('.content-pagination-nav');
    expect(nav?.classList.contains('content-pagination-nav-with-parent')).toBe(true);
  });

  it('should have the with-parent class when parent and next child are provided', async () => {
    element.parent = { title: 'Parent' };
    element.next = { title: 'Next' };
    await element.updateComplete;
    const nav = element.shadowRoot?.querySelector('.content-pagination-nav');
    expect(nav?.classList.contains('content-pagination-nav-with-parent')).toBe(true);
  });

  it('should have the with-parent class when parent and both children are provided', async () => {
    element.parent = { title: 'Parent' };
    element.previous = { title: 'Previous' };
    element.next = { title: 'Next' };
    await element.updateComplete;
    const nav = element.shadowRoot?.querySelector('.content-pagination-nav');
    expect(nav?.classList.contains('content-pagination-nav-with-parent')).toBe(true);
  });

  it('should reflect has-parent attribute when parent and child are provided', async () => {
    element.parent = { title: 'Parent' };
    element.previous = { title: 'Previous' };
    await element.updateComplete;
    expect(element.hasAttribute('has-parent')).toBe(true);
  });

  it('should not reflect has-parent attribute when no parent is provided', async () => {
    element.previous = { title: 'Previous' };
    element.next = { title: 'Next' };
    await element.updateComplete;
    expect(element.hasAttribute('has-parent')).toBe(false);
  });

  it('should not reflect has-parent attribute when parent exists but no children', async () => {
    element.parent = { title: 'Parent' };
    await element.updateComplete;
    expect(element.hasAttribute('has-parent')).toBe(false);
  });
});
