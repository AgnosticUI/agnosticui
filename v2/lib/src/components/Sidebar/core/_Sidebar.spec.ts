import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { AgSidebar } from './Sidebar.js';

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
      expect(sidebar.variant).toBe('default');
      expect(sidebar.noTransition).toBe(false);
    });

    it('should have correct shadow parts', async () => {
      await sidebar.updateComplete;
      const shadowRoot = sidebar.shadowRoot!;

      expect(shadowRoot.querySelector('[part="ag-sidebar-container"]')).toBeTruthy();
      expect(shadowRoot.querySelector('[part="ag-sidebar-header"]')).toBeTruthy();
      expect(shadowRoot.querySelector('[part="ag-sidebar-content"]')).toBeTruthy();
      expect(shadowRoot.querySelector('[part="ag-sidebar-footer"]')).toBeTruthy();
    });

    it('should reflect properties to attributes', async () => {
      sidebar.variant = 'bordered';
      sidebar.noTransition = true;
      await sidebar.updateComplete;

      expect(sidebar.getAttribute('variant')).toBe('bordered');
      expect(sidebar.hasAttribute('no-transition')).toBe(true);
    });
  });

  describe('Slots', () => {
    it('should render default slot content', async () => {
      const nav = document.createElement('nav');
      nav.innerHTML = '<p>Navigation content</p>';
      sidebar.appendChild(nav);
      await sidebar.updateComplete;

      const slot = sidebar.shadowRoot!.querySelector('slot:not([name])');
      expect(slot).toBeTruthy();
      const assignedNodes = (slot as HTMLSlotElement).assignedNodes();
      expect(assignedNodes.length).toBeGreaterThan(0);
    });

    it('should render header slot content', async () => {
      const header = document.createElement('div');
      header.setAttribute('slot', 'header');
      header.textContent = 'Header';
      sidebar.appendChild(header);
      await sidebar.updateComplete;

      const slot = sidebar.shadowRoot!.querySelector('slot[name="header"]');
      expect(slot).toBeTruthy();
    });

    it('should render footer slot content', async () => {
      const footer = document.createElement('div');
      footer.setAttribute('slot', 'footer');
      footer.textContent = 'Footer';
      sidebar.appendChild(footer);
      await sidebar.updateComplete;

      const slot = sidebar.shadowRoot!.querySelector('slot[name="footer"]');
      expect(slot).toBeTruthy();
    });
  });

  describe('Navigation Button Functionality', () => {
    it('should toggle aria-expanded attribute on navigation button click', async () => {
      const navMenu = document.createElement('ul');
      navMenu.className = 'nav-menu';
      navMenu.innerHTML = `
        <li class="nav-item">
          <button class="nav-button" aria-expanded="false">
            <span>Toggle Me</span>
          </button>
        </li>
      `;
      sidebar.appendChild(navMenu);
      await sidebar.updateComplete;

      const button = sidebar.querySelector('.nav-button') as HTMLButtonElement;

      expect(button.getAttribute('aria-expanded')).toBe('false');

      // Create a mock event with composedPath
      const mockEvent = {
        composedPath: () => [button],
        target: button,
      } as unknown as Event;

      // Directly call _handleSlotClick since happy-dom event bubbling from slots can be flaky
      // @ts-ignore: Access private method for testing
      sidebar._handleSlotClick(mockEvent);
      await sidebar.updateComplete;

      expect(button.getAttribute('aria-expanded')).toBe('true');

      // @ts-ignore: Access private method for testing
      sidebar._handleSlotClick(mockEvent);
      await sidebar.updateComplete;

      expect(button.getAttribute('aria-expanded')).toBe('false');
    });

    it('should handle toggleResponsive correctly based on viewport', async () => {
      // Mock window.innerWidth
      const originalInnerWidth = window.innerWidth;

      // Case 1: Desktop (>= 1024) - should toggle collapsed
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1200 });
      sidebar.collapsed = false;
      sidebar.toggleResponsive();
      expect(sidebar.collapsed).toBe(true);

      sidebar.toggleResponsive();
      expect(sidebar.collapsed).toBe(false);

      // Case 2: Mobile (< 1024) + Open - should close overlay
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 800 });
      sidebar.open = true;
      sidebar.toggleResponsive();
      expect(sidebar.open).toBe(false);

      // Case 3: Mobile (< 1024) + Closed - should toggle collapsed (rail mode)
      sidebar.open = false;
      sidebar.collapsed = false;
      sidebar.toggleResponsive();
      expect(sidebar.collapsed).toBe(true);

      // Restore original innerWidth
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: originalInnerWidth });
    });
  });

  describe('Accessibility', () => {
    it('should have no accessibility violations', async () => {
      const navMenu = document.createElement('ul');
      navMenu.className = 'nav-menu';
      navMenu.innerHTML = `
        <li class="nav-item">
          <a href="#" class="nav-button active" aria-current="page">Dashboard</a>
        </li>
        <li class="nav-item">
          <button class="nav-button" aria-expanded="false">Projects</button>
          <ul class="ag-sidebar-nav-submenu">
            <li><a href="#" class="nav-sublink">Project Alpha</a></li>
          </ul>
        </li>
      `;
      sidebar.appendChild(navMenu);
      await sidebar.updateComplete;
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
