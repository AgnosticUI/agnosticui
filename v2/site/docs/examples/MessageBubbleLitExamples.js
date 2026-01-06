import { LitElement, html } from 'lit';
import 'agnosticui-core/message-bubble';
import 'agnosticui-core/avatar';
import 'agnosticui-core/input';
import 'agnosticui-core/button';
import 'agnosticui-core/icon';

export class MessageBubbleLitExamples extends LitElement {
  static properties = {
    newMessage: { type: String },
    messages: { type: Array },
    messageIdCounter: { type: Number }
  };

  constructor() {
    super();
    this.newMessage = '';
    this.messages = [];
    this.messageIdCounter = 1;
    this.botResponses = [
      "That's interesting! Tell me more.",
      "I understand what you mean.",
      "Thanks for sharing that!",
      "Great point!",
      "I appreciate your message.",
      "That makes sense to me.",
      "Interesting perspective!",
    ];
  }

  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  sendMessage() {
    if (!this.newMessage.trim()) return;

    const now = new Date();
    const time = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    this.messages = [...this.messages, {
      id: this.messageIdCounter++,
      from: "me",
      text: this.newMessage,
      author: "Me",
      time: time,
      avatarUrl: "https://i.pravatar.cc/150?img=8",
      footer: "Sent",
    }];

    this.newMessage = '';

    // Auto-scroll to bottom
    setTimeout(() => {
      const container = this.querySelector('.messages-container');
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }, 0);
  }

  addBotResponse() {
    const now = new Date();
    const time = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    const randomResponse =
      this.botResponses[Math.floor(Math.random() * this.botResponses.length)];

    this.messages = [...this.messages, {
      id: this.messageIdCounter++,
      from: "them",
      text: randomResponse,
      author: "AI Assistant",
      time: time,
      avatarUrl: "https://i.pravatar.cc/150?img=5",
      footer: "Read",
    }];

    // Auto-scroll to bottom
    setTimeout(() => {
      const container = this.querySelector('.messages-container');
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }, 0);
  }

  clearMessages() {
    if (confirm("Are you sure you want to clear all messages?")) {
      this.messages = [];
      this.messageIdCounter = 1;
    }
  }

  handleKeyUp(e) {
    if (e.key === 'Enter') {
      this.sendMessage();
    }
  }

  handleInput(e) {
    this.newMessage = e.target.value;
  }

  render() {
    return html`
      <section>
        <!-- Interactive Chat Demo -->
        <div class="mbe4">
          <h2>Interactive Chat Demo</h2>
          <p>Type a message and click Send to add it to the conversation. This demonstrates real-world integration with ag-input and ag-button.</p>
        </div>
        <div class="chat-demo-container mbe6">
          <!-- Messages Container -->
          <div class="messages-container">
            ${this.messages.map(message => html`
              <ag-message-bubble
                from=${message.from}
                message=${message.text}
                author=${message.author}
                time=${message.time}
                avatar-url=${message.avatarUrl}
                footer=${message.footer}
                class="message-item"
              ></ag-message-bubble>
            `)}

            ${this.messages.length === 0 ? html`
              <div class="empty-state">
                No messages yet. Start the conversation!
              </div>
            ` : ''}
          </div>

          <!-- Input Area -->
          <div class="input-area">
            <ag-input
              .value=${this.newMessage}
              @input=${this.handleInput}
              @keyup=${this.handleKeyUp}
              placeholder="Type your message..."
              rounded
            >
              <ag-icon slot="addon-left" size="18">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--ag-primary)" stroke-width="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </ag-icon>
            </ag-input>

            <ag-button
              variant="primary"
              shape="rounded"
              @click=${this.sendMessage}
              ?disabled=${!this.newMessage.trim()}
              class="send-button"
            >
              <ag-icon size="18" no-fill>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </ag-icon>
              <span class="mis1">Send</span>
            </ag-button>
          </div>

          <!-- Quick Actions -->
          <div class="quick-actions">
            <ag-button
              size="sm"
              shape="rounded"
              bordered
              @click=${this.addBotResponse}
              class="mie2"
            >
              <ag-icon size="16" no-fill>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </ag-icon>
              <span class="mis1">Add Bot Reply</span>
            </ag-button>

            <ag-button
              size="sm"
              shape="rounded"
              variant="danger"
              bordered
              @click=${this.clearMessages}
            >
              <ag-icon size="16" no-fill>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </ag-icon>
              <span class="mis1">Clear All</span>
            </ag-button>
          </div>
        </div>

        <!-- Basic Example -->
        <div class="mbe4">
          <h2>Basic Message Bubbles</h2>
          <p>Messages can be sent from "me" or "them" with author, time, and optional footer.</p>
        </div>
        <div class="message-container mbe6">
          <ag-message-bubble
            from="them"
            message="Hey, are we still on for lunch?"
            author="Sarah"
            time="11:30 AM"
          ></ag-message-bubble>
          <ag-message-bubble
            from="me"
            message="Yes! Where should we go?"
            author="Me"
            time="11:32 AM"
          ></ag-message-bubble>
          <ag-message-bubble
            from="them"
            message="How about that new Italian place?"
            author="Sarah"
            time="11:33 AM"
          ></ag-message-bubble>
          <ag-message-bubble
            from="me"
            message="Sounds perfect. See you there at 12:30."
            author="Me"
            time="11:35 AM"
          ></ag-message-bubble>
        </div>

        <!-- Delivery Status -->
        <div class="mbe4">
          <h2>Delivery Status</h2>
          <p>Use the footer prop to display delivery status indicators.</p>
        </div>
        <div class="message-container mbe6">
          <ag-message-bubble
            from="me"
            message="Hey, did you get my last message?"
            author="Me"
            time="2:30 PM"
            footer="Delivered"
          ></ag-message-bubble>
          <ag-message-bubble
            from="me"
            message="Just checking in!"
            author="Me"
            time="2:31 PM"
            footer="Seen"
          ></ag-message-bubble>
          <ag-message-bubble
            from="them"
            message="Yes, I saw it! Thanks for sending."
            author="Sarah"
            time="2:32 PM"
            footer="Read"
          ></ag-message-bubble>
          <ag-message-bubble
            from="me"
            message="Great! Let's catch up later."
            author="Me"
            time="2:33 PM"
            footer="Sending..."
          ></ag-message-bubble>
        </div>

        <!-- Color Variants -->
        <div class="mbe4">
          <h2>Color Variants</h2>
          <p>Different semantic variants for various message types.</p>
        </div>
        <div class="message-container mbe6">
          <div class="variant-section">
            <h3>Success</h3>
            <ag-message-bubble
              from="them"
              message="Payment completed successfully!"
              author="System"
              time="10:02 AM"
              variant="success"
            ></ag-message-bubble>
            <ag-message-bubble
              from="me"
              message="Great, thanks for confirming"
              author="Me"
              time="10:03 AM"
              variant="success"
            ></ag-message-bubble>
          </div>

          <div class="variant-section">
            <h3>Warning</h3>
            <ag-message-bubble
              from="them"
              message="Your session will expire in 5 minutes"
              author="System"
              time="10:04 AM"
              variant="warning"
            ></ag-message-bubble>
            <ag-message-bubble
              from="me"
              message="I'll save my work now"
              author="Me"
              time="10:05 AM"
              variant="warning"
            ></ag-message-bubble>
          </div>

          <div class="variant-section">
            <h3>Danger</h3>
            <ag-message-bubble
              from="them"
              message="Error: Unable to process your request"
              author="System"
              time="10:06 AM"
              variant="danger"
            ></ag-message-bubble>
            <ag-message-bubble
              from="me"
              message="Let me try again"
              author="Me"
              time="10:07 AM"
              variant="danger"
            ></ag-message-bubble>
          </div>

          <div class="variant-section">
            <h3>Info</h3>
            <ag-message-bubble
              from="them"
              message="New features available in version 2.0"
              author="System"
              time="10:08 AM"
              variant="info"
            ></ag-message-bubble>
            <ag-message-bubble
              from="me"
              message="Sounds interesting!"
              author="Me"
              time="10:09 AM"
              variant="info"
            ></ag-message-bubble>
          </div>

          <div class="variant-section">
            <h3>Neutral</h3>
            <ag-message-bubble
              from="them"
              message="This is a neutral informational message"
              author="System"
              time="10:10 AM"
              variant="neutral"
            ></ag-message-bubble>
          </div>

          <div class="variant-section">
            <h3>Monochrome</h3>
            <ag-message-bubble
              from="them"
              message="Simple monochrome styling"
              author="System"
              time="10:12 AM"
              variant="monochrome"
            ></ag-message-bubble>
          </div>
        </div>

        <!-- With Avatars -->
        <div class="mbe4">
          <h2>With Avatar URLs</h2>
          <p>Display user avatars using the avatarUrl prop.</p>
        </div>
        <div class="message-container mbe6">
          <ag-message-bubble
            from="them"
            message="I have an avatar!"
            author="Jane Smith"
            time="10:05 AM"
            avatar-url="https://i.pravatar.cc/150?img=1"
          ></ag-message-bubble>
          <ag-message-bubble
            from="me"
            message="Me too!"
            author="Me"
            time="10:06 AM"
            avatar-url="https://i.pravatar.cc/150?img=2"
          ></ag-message-bubble>
        </div>

        <!-- Custom Avatar Slot -->
        <div class="mbe4">
          <h2>Custom Avatar Component</h2>
          <p>Use the avatar slot to provide custom avatar components with more control.</p>
        </div>
        <div class="message-container mbe6">
          <ag-message-bubble
            from="them"
            message="I'm using a custom Avatar component with text initials!"
            author="Jane Smith"
            time="10:00 AM"
          >
            <ag-avatar slot="avatar" text="JS" variant="info" size="sm"></ag-avatar>
          </ag-message-bubble>
          <ag-message-bubble
            from="me"
            message="And I'm using an Avatar with an image and different styling!"
            author="Me"
            time="10:01 AM"
          >
            <ag-avatar
              slot="avatar"
              img-src="https://i.pravatar.cc/150?img=10"
              img-alt="User avatar"
              variant="success"
              size="sm"
            ></ag-avatar>
          </ag-message-bubble>
          <ag-message-bubble
            from="them"
            message="Avatar components give you more control over styling and variants!"
            author="Alex Chen"
            time="10:02 AM"
          >
            <ag-avatar
              slot="avatar"
              text="AC"
              variant="warning"
              size="sm"
              shape="square"
            ></ag-avatar>
          </ag-message-bubble>
        </div>

        <!-- Long Content -->
        <div class="mbe4">
          <h2>Long Content</h2>
          <p>Message bubbles adapt to longer content with proper text wrapping.</p>
        </div>
        <div class="message-container mbe6">
          <ag-message-bubble
            from="them"
            message="This is a much longer message that demonstrates how the message bubble handles extended content. It should wrap properly and maintain good readability across multiple lines of text."
            author="Alex"
            time="10:20 AM"
            avatar-url="https://i.pravatar.cc/150?img=4"
          ></ag-message-bubble>
          <ag-message-bubble
            from="me"
            message="I can write long messages too! Here's a detailed response that spans multiple lines and shows how the bubble adapts to different content lengths while maintaining its visual hierarchy."
            author="Me"
            time="10:21 AM"
            footer="Delivered"
            avatar-url="https://i.pravatar.cc/150?img=8"
          ></ag-message-bubble>
        </div>
      </section>

      <style>
        /* Chat Demo Styles */
        .chat-demo-container {
          max-width: 700px;
          border: 1px solid var(--vp-c-divider);
          border-radius: 12px;
          padding: 20px;
          background-color: var(--vp-c-bg);
        }

        .messages-container {
          min-height: 400px;
          max-height: 500px;
          overflow-y: auto;
          padding: 20px;
          background: var(--vp-c-bg-soft);
          border: 1px solid var(--vp-c-divider);
          border-radius: 12px;
          margin-bottom: 16px;
        }

        .empty-state {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          min-height: 360px;
          color: var(--vp-c-text-3);
          font-style: italic;
        }

        .input-area {
          display: flex;
          gap: 12px;
          margin-bottom: 16px;
          align-items: flex-end;
        }

        .input-area > :first-child {
          flex: 1;
        }

        .send-button {
          flex-shrink: 0;
        }

        .quick-actions {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        /* Scrollbar styling */
        .messages-container::-webkit-scrollbar {
          width: 8px;
        }

        .messages-container::-webkit-scrollbar-track {
          background: var(--vp-c-bg);
          border-radius: 4px;
        }

        .messages-container::-webkit-scrollbar-thumb {
          background: var(--vp-c-divider);
          border-radius: 4px;
        }

        .messages-container::-webkit-scrollbar-thumb:hover {
          background: var(--vp-c-text-3);
        }

        /* Standard Example Styles */
        .message-container {
          max-width: 600px;
          border: 1px solid var(--vp-c-divider);
          padding: 20px;
          border-radius: 8px;
          background-color: var(--vp-c-bg-soft);
        }

        .variant-section {
          margin-bottom: 24px;
        }

        .variant-section:last-child {
          margin-bottom: 0;
        }

        .variant-section h4 {
          margin: 0 0 12px 0;
          font-size: 13px;
          font-weight: 600;
          color: var(--vp-c-text-2);
        }
      </style>
    `;
  }
}

// Register the custom element
customElements.define('message-bubble-lit-examples', MessageBubbleLitExamples);
