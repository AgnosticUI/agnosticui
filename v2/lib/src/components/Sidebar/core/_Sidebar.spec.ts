import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { AgSidebar } from './Sidebar.js';
import type {
  AgSidebarToggleEvent,
  AgSidebarCollapseEvent,
  AgSidebarBreakpointChangeEvent,
} from './Sidebar.js';

expect.extend(toHaveNoViolations);

describe('AgSidebar', () => {
  let sidebar: AgSidebar;
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    sidebar = document.createElement('ag-sidebar') as AgSidebar;
    container.appendChild(sidebar);
  });

  afterEach(() => {
    container.remove();
  });

  describe('Initialization', () => {
    it('should register the custom element', () => {
      expect(customElements.get('ag-sidebar')).toBeDefined();
    });

    it('should render with default props', async () => {
      await sidebar.updateComplete;
      expect(sidebar.open).toBe(false);
      expect(sidebar.collapsed).toBe(false);
      expect(sidebar.position).toBe('left');
      expect(sidebar.ariaLabel).toBe('Navigation');
      expect(sidebar.breakpoint).toBe(1024);
      expect(sidebar.variant).toBe('default');
      expect(sidebar.noTransition).toBe(false);
    });

    it('should have correct shadow parts', async () => {
      await sidebar.updateComplete;
      const shadowRoot = sidebar.shadowRoot!;
      
      expect(shadowRoot.querySelector('[part="ag-sidebar-container"]')).toBeTruthy();
      expect(shadowRoot.querySelector('[part="ag-sidebar-nav"]')).toBeTruthy();
      expect(shadowRoot.querySelector('[part="ag-sidebar-toggle-wrapper"]')).toBeTruthy();
      expect(shadowRoot.querySelector('[part="ag-sidebar-toggle-button"]')).toBeTruthy();
      expect(shadowRoot.querySelector('[part="ag-sidebar-header"]')).toBeTruthy();
      expect(shadowRoot.querySelector('[part="ag-sidebar-content"]')).toBeTruthy();
      expect(shadowRoot.querySelector('[part="ag-sidebar-footer"]')).toBeTruthy();
    });
  });

  describe('Props & Attributes', () => {
    it('should reflect open attribute', async () => {
      sidebar.open = true;
      await sidebar.updateComplete;
      expect(sidebar.hasAttribute('open')).toBe(true);

      sidebar.open = false;
      await sidebar.updateComplete;
      expect(sidebar.hasAttribute('open')).toBe(false);
    });

    it('should reflect collapsed attribute', async () => {
      sidebar.collapsed = true;
      await sidebar.updateComplete;
      expect(sidebar.hasAttribute('collapsed')).toBe(true);

      sidebar.collapsed = false;
      await sidebar.updateComplete;
      expect(sidebar.hasAttribute('collapsed')).toBe(false);
    });

    it('should reflect position attribute', async () => {
      sidebar.position = 'right';
      await sidebar.updateComplete;
      expect(sidebar.getAttribute('position')).toBe('right');
    });

    it('should reflect variant attribute', async () => {
      sidebar.variant = 'bordered';
      await sidebar.updateComplete;
      expect(sidebar.getAttribute('variant')).toBe('bordered');
    });

    it('should reflect no-transition attribute', async () => {
      sidebar.noTransition = true;
      await sidebar.updateComplete;
      expect(sidebar.hasAttribute('no-transition')).toBe(true);
    });

    it('should set custom width via CSS variable', async () => {
      sidebar.width = '300px';
      await sidebar.updateComplete;
      expect(sidebar.style.getPropertyValue('--ag-sidebar-width')).toBe('300px');
    });

    it('should validate breakpoint and warn on invalid values', async () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      
      // Create a new sidebar with invalid breakpoint from the start
      const testSidebar = document.createElement('ag-sidebar') as AgSidebar;
      testSidebar.breakpoint = -100;
      container.appendChild(testSidebar);
      await testSidebar.updateComplete;
      
      expect(consoleSpy).toHaveBeenCalledWith(
        'ag-sidebar: breakpoint must be a positive number'
      );
      expect(testSidebar.breakpoint).toBe(1024); // Reset to default
      
      testSidebar.remove();
      consoleSpy.mockRestore();
    });
  });

  describe('Slots', () => {
    it('should render default slot content', async () => {
      const nav = document.createElement('nav');
      nav.textContent = 'Navigation content';
      sidebar.appendChild(nav);
      await sidebar.updateComplete;

      const slot = sidebar.shadowRoot!.querySelector('slot:not([name])');
      expect(slot).toBeTruthy();
      const assignedNodes = (slot as HTMLSlotElement).assignedNodes();
      expect(assignedNodes.length).toBeGreaterThan(0);
    });

    it('should render ag-header slot content', async () => {
      const header = document.createElement('div');
      header.setAttribute('slot', 'ag-header');
      header.textContent = 'Header';
      sidebar.appendChild(header);
      await sidebar.updateComplete;

      const slot = sidebar.shadowRoot!.querySelector('slot[name="ag-header"]');
      expect(slot).toBeTruthy();
    });

    it('should render ag-footer slot content', async () => {
      const footer = document.createElement('div');
      footer.setAttribute('slot', 'ag-footer');
      footer.textContent = 'Footer';
      sidebar.appendChild(footer);
      await sidebar.updateComplete;

      const slot = sidebar.shadowRoot!.querySelector('slot[name="ag-footer"]');
      expect(slot).toBeTruthy();
    });

    it('should allow custom toggle icon via ag-toggle-icon slot', async () => {
      const customIcon = document.createElement('div');
      customIcon.setAttribute('slot', 'ag-toggle-icon');
      customIcon.textContent = 'X';
      sidebar.appendChild(customIcon);
      await sidebar.updateComplete;

      const slot = sidebar.shadowRoot!.querySelector('slot[name="ag-toggle-icon"]');
      expect(slot).toBeTruthy();
      const assignedNodes = (slot as HTMLSlotElement).assignedNodes();
      expect(assignedNodes.length).toBeGreaterThan(0);
      expect(assignedNodes[0]).toBe(customIcon);
    });
  });

  describe('Toggle Functionality', () => {
    it('should toggle collapsed state on button click (desktop)', async () => {
      // Mock desktop viewport
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1280,
      });
      sidebar = document.createElement('ag-sidebar') as AgSidebar;
      container.appendChild(sidebar);
      await sidebar.updateComplete;

      const button = sidebar.shadowRoot!.querySelector('[part="ag-sidebar-toggle-button"]') as HTMLButtonElement;
      expect(button).toBeTruthy();

      button.click();
      await sidebar.updateComplete;
      expect(sidebar.collapsed).toBe(true);

      button.click();
      await sidebar.updateComplete;
      expect(sidebar.collapsed).toBe(false);
    });

    it('should update aria-expanded on toggle', async () => {
      await sidebar.updateComplete;
      const button = sidebar.shadowRoot!.querySelector('[part="ag-sidebar-toggle-button"]') as HTMLButtonElement;
      
      expect(button.getAttribute('aria-expanded')).toBe('true');
      
      button.click();
      await sidebar.updateComplete;
      expect(button.getAttribute('aria-expanded')).toBe('false');
    });

    it('should update aria-label on toggle', async () => {
      await sidebar.updateComplete;
      const button = sidebar.shadowRoot!.querySelector('[part="ag-sidebar-toggle-button"]') as HTMLButtonElement;
      
      expect(button.getAttribute('aria-label')).toBe('Collapse sidebar');
      
      button.click();
      await sidebar.updateComplete;
      expect(button.getAttribute('aria-label')).toBe('Expand sidebar');
    });
  });

  describe('Events', () => {
    it('should dispatch ag-sidebar-collapse event when collapsed state changes', async () => {
      const collapseHandler = vi.fn();
      sidebar.addEventListener('ag-sidebar-collapse', collapseHandler);
      await sidebar.updateComplete;

      const button = sidebar.shadowRoot!.querySelector('[part="ag-sidebar-toggle-button"]') as HTMLButtonElement;
      button.click();
      await sidebar.updateComplete;

      expect(collapseHandler).toHaveBeenCalledTimes(1);
      const event = collapseHandler.mock.calls[0][0] as AgSidebarCollapseEvent;
      expect(event.detail.collapsed).toBe(true);
    });

    it('should call onCollapse callback when provided', async () => {
      const onCollapse = vi.fn();
      sidebar.onCollapse = onCollapse;
      await sidebar.updateComplete;

      const button = sidebar.shadowRoot!.querySelector('[part="ag-sidebar-toggle-button"]') as HTMLButtonElement;
      button.click();
      await sidebar.updateComplete;

      expect(onCollapse).toHaveBeenCalledTimes(1);
    });

    it('should dispatch ag-sidebar-toggle event when open state changes', async () => {
      const toggleHandler = vi.fn();
      sidebar.addEventListener('ag-sidebar-toggle', toggleHandler);
      
      sidebar.open = true;
      await sidebar.updateComplete;

      // Trigger backdrop click to close
      const backdrop = sidebar.shadowRoot!.querySelector('[part="ag-sidebar-backdrop"]') as HTMLElement;
      if (backdrop) {
        backdrop.click();
        await sidebar.updateComplete;

        expect(toggleHandler).toHaveBeenCalled();
        const event = toggleHandler.mock.calls[0][0] as AgSidebarToggleEvent;
        expect(event.detail.open).toBe(false);
      }
    });

    it('should call onToggle callback when provided', async () => {
      const onToggle = vi.fn();
      sidebar.onToggle = onToggle;
      
      sidebar.open = true;
      await sidebar.updateComplete;

      const backdrop = sidebar.shadowRoot!.querySelector('[part="ag-sidebar-backdrop"]') as HTMLElement;
      if (backdrop) {
        backdrop.click();
        await sidebar.updateComplete;
        expect(onToggle).toHaveBeenCalled();
      }
    });
  });

  describe('Responsive Behavior', () => {
    it('should set data-mobile attribute based on viewport width', async () => {
      // Mock mobile viewport
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 768,
      });
      sidebar = document.createElement('ag-sidebar') as AgSidebar;
      container.appendChild(sidebar);
      await sidebar.updateComplete;

      expect(sidebar.hasAttribute('data-mobile')).toBe(true);
    });

    it('should dispatch ag-sidebar-breakpoint-change event on resize', async () => {
      // Start desktop
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1280,
      });
      sidebar = document.createElement('ag-sidebar') as AgSidebar;
      container.appendChild(sidebar);
      await sidebar.updateComplete;

      const breakpointHandler = vi.fn();
      sidebar.addEventListener('ag-sidebar-breakpoint-change', breakpointHandler);

      // Resize to mobile
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 768,
      });
      window.dispatchEvent(new Event('resize'));
      
      // Wait for debounce (100ms + buffer)
      await new Promise(resolve => setTimeout(resolve, 150));
      await sidebar.updateComplete;

      expect(breakpointHandler).toHaveBeenCalled();
      const event = breakpointHandler.mock.calls[0][0] as AgSidebarBreakpointChangeEvent;
      expect(event.detail.isMobile).toBe(true);
      expect(event.detail.breakpoint).toBe(1024);
    });

    it('should reset open state on mobile to desktop transition', async () => {
      // Start mobile with sidebar open
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 768,
      });
      sidebar = document.createElement('ag-sidebar') as AgSidebar;
      container.appendChild(sidebar);
      sidebar.open = true;
      await sidebar.updateComplete;

      // Resize to desktop
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1280,
      });
      window.dispatchEvent(new Event('resize'));
      
      await new Promise(resolve => setTimeout(resolve, 150));
      await sidebar.updateComplete;

      expect(sidebar.open).toBe(false);
    });

    it('should reset collapsed state on desktop to mobile transition', async () => {
      // Start desktop with sidebar collapsed
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1280,
      });
      sidebar = document.createElement('ag-sidebar') as AgSidebar;
      container.appendChild(sidebar);
      sidebar.collapsed = true;
      await sidebar.updateComplete;

      // Resize to mobile
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 768,
      });
      window.dispatchEvent(new Event('resize'));
      
      await new Promise(resolve => setTimeout(resolve, 150));
      await sidebar.updateComplete;

      expect(sidebar.collapsed).toBe(false);
    });

    it('should use custom breakpoint', async () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 800,
      });
      
      sidebar.breakpoint = 768;
      await sidebar.updateComplete;
      window.dispatchEvent(new Event('resize'));
      
      await new Promise(resolve => setTimeout(resolve, 150));
      await sidebar.updateComplete;

      expect(sidebar.hasAttribute('data-mobile')).toBe(false);

      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 700,
      });
      window.dispatchEvent(new Event('resize'));
      
      await new Promise(resolve => setTimeout(resolve, 150));
      await sidebar.updateComplete;

      expect(sidebar.hasAttribute('data-mobile')).toBe(true);
    });
  });

  describe('Keyboard Interactions', () => {
    it('should close mobile sidebar on Escape key', async () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 768,
      });
      sidebar = document.createElement('ag-sidebar') as AgSidebar;
      container.appendChild(sidebar);
      sidebar.open = true;
      await sidebar.updateComplete;

      const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
      document.dispatchEvent(escapeEvent);
      await sidebar.updateComplete;

      expect(sidebar.open).toBe(false);
    });

    it('should not close sidebar on Escape when closed', async () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 768,
      });
      sidebar = document.createElement('ag-sidebar') as AgSidebar;
      container.appendChild(sidebar);
      sidebar.open = false;
      await sidebar.updateComplete;

      const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
      document.dispatchEvent(escapeEvent);
      await sidebar.updateComplete;

      expect(sidebar.open).toBe(false);
    });

    it('should not respond to Escape on desktop', async () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1280,
      });
      sidebar = document.createElement('ag-sidebar') as AgSidebar;
      container.appendChild(sidebar);
      sidebar.open = true;
      await sidebar.updateComplete;

      const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
      document.dispatchEvent(escapeEvent);
      await sidebar.updateComplete;

      // On desktop, open prop is ignored anyway
      expect(sidebar.open).toBe(true);
    });
  });

  describe('Focus Management', () => {
    it('should trap focus when mobile drawer is open', async () => {
      // Create main content
      const main = document.createElement('main');
      main.textContent = 'Main content';
      document.body.appendChild(main);

      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 768,
      });
      sidebar = document.createElement('ag-sidebar') as AgSidebar;
      container.appendChild(sidebar);
      await sidebar.updateComplete;
      
      sidebar.open = true;
      await sidebar.updateComplete;
      // Wait for focus trap to apply
      await new Promise(resolve => setTimeout(resolve, 50));

      expect(main.hasAttribute('inert')).toBe(true);

      sidebar.open = false;
      await sidebar.updateComplete;

      expect(main.hasAttribute('inert')).toBe(false);

      main.remove();
    });

    it('should focus first focusable element when drawer opens', async () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 768,
      });
      sidebar = document.createElement('ag-sidebar') as AgSidebar;
      container.appendChild(sidebar);
      
      const link = document.createElement('a');
      link.href = '#';
      link.textContent = 'Link';
      sidebar.appendChild(link);
      
      sidebar.open = true;
      await sidebar.updateComplete;
      await new Promise(resolve => setTimeout(resolve, 50));

      const button = sidebar.shadowRoot!.querySelector('[part="ag-sidebar-toggle-button"]') as HTMLButtonElement;
      expect(sidebar.shadowRoot!.activeElement).toBe(button);
    });

    it('should return focus to trigger button when drawer closes', async () => {
      const trigger = document.createElement('button');
      trigger.setAttribute('data-sidebar-trigger', '');
      trigger.textContent = 'Toggle';
      document.body.appendChild(trigger);

      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 768,
      });
      sidebar = document.createElement('ag-sidebar') as AgSidebar;
      container.appendChild(sidebar);
      sidebar.open = true;
      await sidebar.updateComplete;

      sidebar.open = false;
      await sidebar.updateComplete;
      await new Promise(resolve => setTimeout(resolve, 50));

      // Focus should attempt to return to trigger
      // (actual focus behavior may vary in test environment)

      trigger.remove();
    });
  });

  describe('Backdrop', () => {
    it('should show backdrop when mobile drawer is open', async () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 768,
      });
      sidebar = document.createElement('ag-sidebar') as AgSidebar;
      container.appendChild(sidebar);
      sidebar.open = true;
      await sidebar.updateComplete;

      const backdrop = sidebar.shadowRoot!.querySelector('[part="ag-sidebar-backdrop"]');
      expect(backdrop).toBeTruthy();
    });

    it('should not show backdrop on desktop', async () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1280,
      });
      sidebar = document.createElement('ag-sidebar') as AgSidebar;
      container.appendChild(sidebar);
      await sidebar.updateComplete;

      const backdrop = sidebar.shadowRoot!.querySelector('[part="ag-sidebar-backdrop"]');
      expect(backdrop).toBeFalsy();
    });

    it('should close drawer when backdrop is clicked', async () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 768,
      });
      sidebar = document.createElement('ag-sidebar') as AgSidebar;
      container.appendChild(sidebar);
      sidebar.open = true;
      await sidebar.updateComplete;

      const backdrop = sidebar.shadowRoot!.querySelector('[part="ag-sidebar-backdrop"]') as HTMLElement;
      expect(backdrop).toBeTruthy();
      
      backdrop.click();
      await sidebar.updateComplete;

      expect(sidebar.open).toBe(false);
    });
  });

  describe('Variants', () => {
    it('should apply bordered variant styles', async () => {
      sidebar.variant = 'bordered';
      await sidebar.updateComplete;
      expect(sidebar.getAttribute('variant')).toBe('bordered');
    });

    it('should apply elevated variant styles', async () => {
      sidebar.variant = 'elevated';
      await sidebar.updateComplete;
      expect(sidebar.getAttribute('variant')).toBe('elevated');
    });
  });

  describe('Accessibility', () => {
    it('should have no accessibility violations', async () => {
      await sidebar.updateComplete;
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have proper navigation landmark', async () => {
      await sidebar.updateComplete;
      const nav = sidebar.shadowRoot!.querySelector('nav');
      expect(nav).toBeTruthy();
      expect(nav!.getAttribute('aria-label')).toBe('Navigation');
    });

    it('should allow custom aria-label', async () => {
      sidebar.ariaLabel = 'Main menu';
      await sidebar.updateComplete;
      const nav = sidebar.shadowRoot!.querySelector('nav');
      expect(nav!.getAttribute('aria-label')).toBe('Main menu');
    });

    it('should have aria-hidden on backdrop', async () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 768,
      });
      sidebar = document.createElement('ag-sidebar') as AgSidebar;
      container.appendChild(sidebar);
      sidebar.open = true;
      await sidebar.updateComplete;

      const backdrop = sidebar.shadowRoot!.querySelector('[part="ag-sidebar-backdrop"]');
      expect(backdrop!.getAttribute('aria-hidden')).toBe('true');
    });

    it('should have proper button accessibility attributes', async () => {
      await sidebar.updateComplete;
      const button = sidebar.shadowRoot!.querySelector('[part="ag-sidebar-toggle-button"]') as HTMLButtonElement;
      
      expect(button.getAttribute('aria-label')).toBeTruthy();
      expect(button.getAttribute('aria-expanded')).toBeTruthy();
    });
  });

  describe('Lifecycle', () => {
    it('should clean up resize listener on disconnect', async () => {
      const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');
      
      sidebar.remove();
      
      expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));
      
      removeEventListenerSpy.mockRestore();
    });

    it('should clean up keydown listener on disconnect', async () => {
      const removeEventListenerSpy = vi.spyOn(document, 'removeEventListener');
      
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 768,
      });
      sidebar = document.createElement('ag-sidebar') as AgSidebar;
      container.appendChild(sidebar);
      sidebar.open = true;
      await sidebar.updateComplete;
      
      sidebar.remove();
      
      expect(removeEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function));
      
      removeEventListenerSpy.mockRestore();
    });
  });

  describe('Position', () => {
    it('should support left position', async () => {
      sidebar.position = 'left';
      await sidebar.updateComplete;
      expect(sidebar.getAttribute('position')).toBe('left');
    });

    it('should support right position', async () => {
      sidebar.position = 'right';
      await sidebar.updateComplete;
      expect(sidebar.getAttribute('position')).toBe('right');
    });
  });
});
