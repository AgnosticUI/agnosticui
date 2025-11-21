import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { MessageBubble } from './_MessageBubble';

// Ensure the custom element is defined
if (!customElements.get('ag-message-bubble')) {
  customElements.define('ag-message-bubble', MessageBubble);
}

describe('MessageBubble', () => {
  let element: MessageBubble;

  beforeEach(() => {
    element = document.createElement('ag-message-bubble') as MessageBubble;
    document.body.appendChild(element);
  });

  afterEach(() => {
    element.remove();
  });

  it('renders correctly with default properties', async () => {
    expect(element).toBeDefined();
    expect(element.tagName.toLowerCase()).toBe('ag-message-bubble');
    await element.updateComplete;

    const messageBubbleDiv = element.shadowRoot?.querySelector('.message-bubble');
    expect(messageBubbleDiv).toBeDefined();
    expect(messageBubbleDiv?.classList.contains('from-them')).toBe(true);
    expect(messageBubbleDiv?.classList.contains('from-me')).toBe(false);

    const slot = element.shadowRoot?.querySelector('slot');
    expect(slot?.assignedNodes({ flatten: true }).length).toBe(0);

    const messageMetaDiv = element.shadowRoot?.querySelector('.message-meta');
    expect(messageMetaDiv).toBeNull();
  });

  it('applies "from-me" class when from="me"', async () => {
    element.from = 'me';
    await element.updateComplete;

    const messageBubbleDiv = element.shadowRoot?.querySelector('.message-bubble');
    expect(messageBubbleDiv?.classList.contains('from-me')).toBe(true);
    expect(messageBubbleDiv?.classList.contains('from-them')).toBe(false);
  });

  it('renders message prop content', async () => {
    element.message = 'Hello world!';
    await element.updateComplete;

    const slot = element.shadowRoot?.querySelector('slot');
    expect(slot?.textContent?.trim()).toBe('Hello world!');
  });

  it('renders custom slot content preferentially', async () => {
    const elWithContent = document.createElement('ag-message-bubble') as MessageBubble;
    elWithContent.message = 'Prop message';
    elWithContent.innerHTML = '<span>Slotted message</span>';
    document.body.appendChild(elWithContent);
    await elWithContent.updateComplete;

    const slot = elWithContent.shadowRoot?.querySelector('slot');
    expect(slot?.assignedNodes({ flatten: true })[0].textContent).toBe('Slotted message');
    elWithContent.remove();
  });

  it('renders author when provided', async () => {
    element.author = 'John Doe';
    element.time = '10:00 AM';
    await element.updateComplete;

    const messageMetaDiv = element.shadowRoot?.querySelector('.message-meta');
    expect(messageMetaDiv).toBeDefined();
    expect(messageMetaDiv?.textContent?.trim()).toContain('John Doe');
  });

  it('renders time when provided', async () => {
    element.time = '10:00 AM';
    element.author = 'John Doe';
    await element.updateComplete;

    const messageMetaDiv = element.shadowRoot?.querySelector('.message-meta');
    expect(messageMetaDiv).toBeDefined();
    expect(messageMetaDiv?.textContent?.trim()).toContain('10:00 AM');
  });

  it('renders author and time with separator', async () => {
    element.author = 'John Doe';
    element.time = '10:00 AM';
    await element.updateComplete;

    const messageMetaDiv = element.shadowRoot?.querySelector('.message-meta');
    expect(messageMetaDiv).toBeDefined();
    expect(messageMetaDiv?.textContent?.replace(/\s+/g, ' ').trim()).toBe('John Doe • 10:00 AM');
  });

  it('does not render meta div if only message is present', async () => {
    element.message = 'Test message';
    await element.updateComplete;
    const messageMetaDiv = element.shadowRoot?.querySelector('.message-meta');
    expect(messageMetaDiv).toBeNull();
  });

  it('has the correct part attribute', async () => {
    const messageBubbleDiv = element.shadowRoot?.querySelector('[part="ag-message-bubble"]');
    expect(messageBubbleDiv).toBeDefined();
  });
});