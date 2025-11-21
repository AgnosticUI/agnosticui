import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { MessageBubble } from './_MessageBubble.js';

expect.extend(toHaveNoViolations);

describe('MessageBubble', () => {
  let element: MessageBubble;
  let container: HTMLElement;

  beforeEach(() => {
    if (!customElements.get('ag-message-bubble-test')) {
      customElements.define('ag-message-bubble-test', MessageBubble);
    }
    
    container = document.createElement('div');
    document.body.appendChild(container);
    element = document.createElement('ag-message-bubble-test') as MessageBubble;
    container.appendChild(element);
  });

  afterEach(() => {
    container.remove();
  });

  describe('Initialization', () => {
    it('should create an instance', () => {
      expect(element).toBeInstanceOf(MessageBubble);
    });

    it('should have default property values', () => {
      expect(element.from).toBe('them');
      expect(element.message).toBe('');
      expect(element.time).toBe('');
      expect(element.author).toBe('');
      expect(element.avatarUrl).toBe('');
      expect(element.footer).toBe('');
    });

    it('should reflect the "from" attribute', async () => {
      element.from = 'me';
      await element.updateComplete;
      expect(element.getAttribute('from')).toBe('me');
    });
  });

  describe('Rendering', () => {
    it('should render a message bubble', async () => {
      element.message = 'Hello World';
      await element.updateComplete;

      const bubble = element.shadowRoot?.querySelector('.chat-bubble');
      expect(bubble).toBeTruthy();
      expect(bubble?.textContent?.trim()).toBe('Hello World');
    });

    it('should render message from slot when provided', async () => {
      element.innerHTML = 'Slotted content';
      await element.updateComplete;

      const bubble = element.shadowRoot?.querySelector('.chat-bubble');
      const slot = bubble?.querySelector('slot');
      expect(slot).toBeTruthy();
    });

    it('should prefer slotted content over message property', async () => {
      element.message = 'Property message';
      element.innerHTML = 'Slotted message';
      await element.updateComplete;

      const slot = element.shadowRoot?.querySelector('.chat-bubble slot') as HTMLSlotElement;
      const assignedNodes = slot?.assignedNodes();
      expect(assignedNodes?.length).toBeGreaterThan(0);
      expect(element.textContent).toContain('Slotted message');
    });

    it('should render author when provided', async () => {
      element.author = 'John Doe';
      await element.updateComplete;

      const header = element.shadowRoot?.querySelector('.chat-header');
      expect(header).toBeTruthy();
      expect(header?.textContent).toContain('John Doe');
    });

    it('should render time when provided', async () => {
      element.time = '12:45';
      await element.updateComplete;

      const time = element.shadowRoot?.querySelector('.chat-time');
      expect(time).toBeTruthy();
      expect(time?.textContent?.trim()).toBe('12:45');
    });

    it('should format ISO time strings', async () => {
      element.time = '2024-01-15T12:45:00Z';
      await element.updateComplete;

      const time = element.shadowRoot?.querySelector('.chat-time');
      expect(time).toBeTruthy();
      // Should be formatted, not raw ISO string
      expect(time?.textContent).not.toBe('2024-01-15T12:45:00Z');
    });

    it('should render footer when provided', async () => {
      element.footer = 'Delivered';
      await element.updateComplete;

      const footer = element.shadowRoot?.querySelector('.chat-footer');
      expect(footer).toBeTruthy();
      expect(footer?.textContent).toBe('Delivered');
    });

    it('should render avatar when avatarUrl is provided', async () => {
      element.avatarUrl = 'https://example.com/avatar.jpg';
      await element.updateComplete;

      const avatar = element.shadowRoot?.querySelector('.avatar-image') as HTMLImageElement;
      expect(avatar).toBeTruthy();
      expect(avatar?.src).toBe('https://example.com/avatar.jpg');
    });

    it('should not render avatar container when avatarUrl is empty', async () => {
      element.avatarUrl = '';
      await element.updateComplete;

      const avatarContainer = element.shadowRoot?.querySelector('.chat-avatar');
      expect(avatarContainer).toBeFalsy();
    });

    it('should not render header when author and time are empty', async () => {
      element.author = '';
      element.time = '';
      await element.updateComplete;

      const header = element.shadowRoot?.querySelector('.chat-header');
      expect(header).toBeFalsy();
    });

    it('should not render footer when empty', async () => {
      element.footer = '';
      await element.updateComplete;

      const footer = element.shadowRoot?.querySelector('.chat-footer');
      expect(footer).toBeFalsy();
    });
  });

  describe('Slots', () => {
    it('should support slotted header content', async () => {
      const headerContent = document.createElement('strong');
      headerContent.slot = 'header';
      headerContent.textContent = 'Custom Header';
      element.appendChild(headerContent);
      element.requestUpdate();
      await element.updateComplete;

      const header = element.shadowRoot?.querySelector('.chat-header');
      expect(header).toBeTruthy();
      const slot = header?.querySelector('slot[name="header"]');
      expect(slot).toBeTruthy();
    });

    it('should support slotted footer content', async () => {
      const footerContent = document.createElement('span');
      footerContent.slot = 'footer';
      footerContent.textContent = 'Custom Footer';
      element.appendChild(footerContent);
      element.requestUpdate();
      await element.updateComplete;

      const footer = element.shadowRoot?.querySelector('.chat-footer');
      expect(footer).toBeTruthy();
      const slot = footer?.querySelector('slot[name="footer"]');
      expect(slot).toBeTruthy();
    });

    it('should support slotted avatar content', async () => {
      const avatarContent = document.createElement('div');
      avatarContent.slot = 'avatar';
      avatarContent.textContent = 'A';
      element.appendChild(avatarContent);
      element.requestUpdate();
      await element.updateComplete;

      const avatar = element.shadowRoot?.querySelector('.chat-avatar');
      expect(avatar).toBeTruthy();
      const slot = avatar?.querySelector('slot[name="avatar"]');
      expect(slot).toBeTruthy();
    });
  });

  describe('Avatar Error Handling', () => {
    it('should show placeholder when avatar fails to load', async () => {
      element.avatarUrl = 'https://invalid-url.com/broken.jpg';
      element.author = 'John Doe';
      await element.updateComplete;

      const img = element.shadowRoot?.querySelector('.avatar-image') as HTMLImageElement;
      expect(img).toBeTruthy();

      // Trigger error
      img.dispatchEvent(new Event('error'));
      await element.updateComplete;

      const placeholder = element.shadowRoot?.querySelector('.avatar-placeholder');
      expect(placeholder).toBeTruthy();
      expect(placeholder?.textContent?.trim()).toBe('J');
    });

    it('should show question mark in placeholder when no author', async () => {
      element.avatarUrl = 'https://invalid-url.com/broken.jpg';
      await element.updateComplete;

      const img = element.shadowRoot?.querySelector('.avatar-image') as HTMLImageElement;
      img.dispatchEvent(new Event('error'));
      await element.updateComplete;

      const placeholder = element.shadowRoot?.querySelector('.avatar-placeholder');
      expect(placeholder?.textContent?.trim()).toBe('?');
    });
  });

  describe('Layout Positioning', () => {
    it('should apply correct layout for "them" position', async () => {
      element.from = 'them';
      await element.updateComplete;

      expect(element.getAttribute('from')).toBe('them');
      const bubble = element.shadowRoot?.querySelector('.chat-bubble');
      expect(bubble).toBeTruthy();
    });

    it('should apply correct layout for "me" position', async () => {
      element.from = 'me';
      await element.updateComplete;

      expect(element.getAttribute('from')).toBe('me');
    });

    it('should handle layout with missing header and footer', async () => {
      element.message = 'Test';
      element.from = 'me';
      await element.updateComplete;

      const bubble = element.shadowRoot?.querySelector('.chat-bubble');
      expect(bubble).toBeTruthy();
      // Grid should still work with only bubble visible
      const wrapper = element.shadowRoot?.querySelector('.chat-wrapper');
      expect(wrapper).toBeTruthy();
    });
  });

  describe('CSS Parts', () => {
    it('should expose ag-bubble part', async () => {
      element.message = 'Test';
      await element.updateComplete;

      const bubble = element.shadowRoot?.querySelector('[part="ag-bubble"]');
      expect(bubble).toBeTruthy();
    });

    it('should expose ag-header part when author or time exists', async () => {
      element.author = 'John';
      await element.updateComplete;

      const header = element.shadowRoot?.querySelector('[part="ag-header"]');
      expect(header).toBeTruthy();
    });

    it('should expose ag-footer part when footer exists', async () => {
      element.footer = 'Delivered';
      await element.updateComplete;

      const footer = element.shadowRoot?.querySelector('[part="ag-footer"]');
      expect(footer).toBeTruthy();
    });

    it('should expose ag-chat-avatar part when avatarUrl exists', async () => {
      element.avatarUrl = 'https://example.com/avatar.jpg';
      await element.updateComplete;

      const avatar = element.shadowRoot?.querySelector('[part="ag-chat-avatar"]');
      expect(avatar).toBeTruthy();
    });

    it('should expose ag-avatar-image part when avatarUrl exists', async () => {
      element.avatarUrl = 'https://example.com/avatar.jpg';
      await element.updateComplete;

      const avatarImage = element.shadowRoot?.querySelector('[part="ag-avatar-image"]');
      expect(avatarImage).toBeTruthy();
    });

    it('should expose ag-author part when author exists', async () => {
      element.author = 'John';
      await element.updateComplete;

      const authorPart = element.shadowRoot?.querySelector('[part="ag-author"]');
      expect(authorPart).toBeTruthy();
    });

    it('should expose ag-chat-time part when time exists', async () => {
      element.time = '12:45';
      await element.updateComplete;

      const timePart = element.shadowRoot?.querySelector('[part="ag-chat-time"]');
      expect(timePart).toBeTruthy();
    });

    it('should expose ag-avatar-placeholder part on error', async () => {
      element.avatarUrl = 'https://invalid.com/broken.jpg';
      await element.updateComplete;

      const img = element.shadowRoot?.querySelector('.avatar-image') as HTMLImageElement;
      img.dispatchEvent(new Event('error'));
      await element.updateComplete;

      const placeholder = element.shadowRoot?.querySelector('[part="ag-avatar-placeholder"]');
      expect(placeholder).toBeTruthy();
    });
  });

  describe('Properties and Attributes', () => {
    it('should update message property', async () => {
      element.message = 'New message';
      await element.updateComplete;

      expect(element.message).toBe('New message');
      const bubble = element.shadowRoot?.querySelector('.chat-bubble');
      expect(bubble?.textContent?.trim()).toBe('New message');
    });

    it('should update from property', async () => {
      element.from = 'me';
      await element.updateComplete;

      expect(element.from).toBe('me');
      expect(element.getAttribute('from')).toBe('me');
    });

    it('should update author property', async () => {
      element.author = 'Jane Smith';
      await element.updateComplete;

      expect(element.author).toBe('Jane Smith');
    });

    it('should update time property', async () => {
      element.time = '14:30';
      await element.updateComplete;

      expect(element.time).toBe('14:30');
    });

    it('should update footer property', async () => {
      element.footer = 'Read';
      await element.updateComplete;

      expect(element.footer).toBe('Read');
    });

    it('should update avatarUrl property', async () => {
      element.avatarUrl = 'https://example.com/new-avatar.jpg';
      await element.updateComplete;

      expect(element.avatarUrl).toBe('https://example.com/new-avatar.jpg');
    });
  });

  describe('Accessibility', () => {
    it('should have no accessibility violations with minimal content', async () => {
      element.message = 'Test message';
      await element.updateComplete;

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have no accessibility violations with full content', async () => {
      element.message = 'Test message';
      element.author = 'John Doe';
      element.time = '12:45';
      element.footer = 'Delivered';
      element.avatarUrl = 'https://example.com/avatar.jpg';
      element.from = 'me';
      await element.updateComplete;

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have role="article" on wrapper', async () => {
      element.message = 'Test';
      await element.updateComplete;

      const wrapper = element.shadowRoot?.querySelector('[role="article"]');
      expect(wrapper).toBeTruthy();
    });

    it('should have aria-label with author and time', async () => {
      element.author = 'Jane Doe';
      element.time = '12:45';
      await element.updateComplete;

      const wrapper = element.shadowRoot?.querySelector('[role="article"]');
      const ariaLabel = wrapper?.getAttribute('aria-label');
      expect(ariaLabel).toContain('Jane Doe');
      expect(ariaLabel).toContain('12:45');
    });

    it('should have aria-label without author', async () => {
      element.time = '12:45';
      await element.updateComplete;

      const wrapper = element.shadowRoot?.querySelector('[role="article"]');
      const ariaLabel = wrapper?.getAttribute('aria-label');
      expect(ariaLabel).toContain('Message');
      expect(ariaLabel).toContain('12:45');
    });

    it('should have proper alt text for avatar', async () => {
      element.avatarUrl = 'https://example.com/avatar.jpg';
      element.author = 'Jane Doe';
      await element.updateComplete;

      const img = element.shadowRoot?.querySelector('img') as HTMLImageElement;
      expect(img?.alt).toBe('Jane Doe');
    });

    it('should have default alt text when author is not provided', async () => {
      element.avatarUrl = 'https://example.com/avatar.jpg';
      await element.updateComplete;

      const img = element.shadowRoot?.querySelector('img') as HTMLImageElement;
      expect(img?.alt).toBe('Avatar');
    });

    it('should use semantic time element with datetime attribute for ISO times', async () => {
      element.time = '2024-01-15T12:45:00Z';
      await element.updateComplete;

      const time = element.shadowRoot?.querySelector('time') as HTMLTimeElement;
      expect(time).toBeTruthy();
      expect(time?.getAttribute('datetime')).toBe('2024-01-15T12:45:00Z');
    });

    it('should not have datetime attribute for non-ISO times', async () => {
      element.time = '12:45 PM';
      await element.updateComplete;

      const time = element.shadowRoot?.querySelector('time') as HTMLTimeElement;
      expect(time).toBeTruthy();
      expect(time?.hasAttribute('datetime')).toBe(false);
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty strings gracefully', async () => {
      element.message = '';
      element.author = '';
      element.time = '';
      element.footer = '';
      element.avatarUrl = '';
      await element.updateComplete;

      const bubble = element.shadowRoot?.querySelector('.chat-bubble');
      expect(bubble).toBeTruthy();
    });

    it('should handle very long messages', async () => {
      const longMessage = 'A'.repeat(1000);
      element.message = longMessage;
      await element.updateComplete;

      const bubble = element.shadowRoot?.querySelector('.chat-bubble');
      expect(bubble?.textContent?.trim()).toBe(longMessage);
    });

    it('should handle very long URLs without overflow', async () => {
      const longUrl = 'https://example.com/' + 'a'.repeat(200);
      element.message = longUrl;
      await element.updateComplete;

      const bubble = element.shadowRoot?.querySelector('.chat-bubble') as HTMLElement;
      expect(bubble).toBeTruthy();
      // Check that overflow-wrap is set in computed styles
      const styles = window.getComputedStyle(bubble);
      expect(styles.overflowWrap).toBe('anywhere');
    });

    it('should handle special characters in message', async () => {
      element.message = '<script>alert("xss")</script>';
      await element.updateComplete;

      const bubble = element.shadowRoot?.querySelector('.chat-bubble');
      // Lit automatically escapes HTML, so the script tag should be text
      expect(bubble?.querySelector('script')).toBeFalsy();
    });

    it('should handle rapid property changes', async () => {
      element.message = 'Message 1';
      element.message = 'Message 2';
      element.message = 'Message 3';
      await element.updateComplete;

      const bubble = element.shadowRoot?.querySelector('.chat-bubble');
      expect(bubble?.textContent?.trim()).toBe('Message 3');
    });

    it('should handle switching between me and them', async () => {
      element.from = 'me';
      await element.updateComplete;
      expect(element.getAttribute('from')).toBe('me');

      element.from = 'them';
      await element.updateComplete;
      expect(element.getAttribute('from')).toBe('them');
    });

    it('should reset avatar error state when avatarUrl changes', async () => {
      element.avatarUrl = 'https://invalid.com/broken.jpg';
      await element.updateComplete;

      const img1 = element.shadowRoot?.querySelector('.avatar-image') as HTMLImageElement;
      img1?.dispatchEvent(new Event('error'));
      await element.updateComplete;

      expect(element.shadowRoot?.querySelector('.avatar-placeholder')).toBeTruthy();

      // Change to valid URL
      element.avatarUrl = 'https://example.com/valid.jpg';
      await element.updateComplete;

      // Should show image again, not placeholder
      const img2 = element.shadowRoot?.querySelector('.avatar-image');
      expect(img2).toBeTruthy();
    });
  });
});
