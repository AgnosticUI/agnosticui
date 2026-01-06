import { useState } from "react";
import { ReactMessageBubble } from "agnosticui-core/message-bubble/react";
import { ReactAvatar } from "agnosticui-core/avatar/react";
import { ReactInput } from "agnosticui-core/input/react";
import { ReactButton } from "agnosticui-core/button/react";
import { ReactIcon } from "agnosticui-core/icon/react";

export default function MessageBubbleReactExamples() {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [messageIdCounter, setMessageIdCounter] = useState(1);

  const botResponses = [
    "That's interesting! Tell me more.",
    "I understand what you mean.",
    "Thanks for sharing that!",
    "Great point!",
    "I appreciate your message.",
    "That makes sense to me.",
    "Interesting perspective!",
  ];

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const now = new Date();
    const time = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    setMessages([
      ...messages,
      {
        id: messageIdCounter,
        from: "me",
        text: newMessage,
        author: "Me",
        time: time,
        avatarUrl: "https://i.pravatar.cc/150?img=8",
        footer: "Sent",
      },
    ]);

    setMessageIdCounter(messageIdCounter + 1);
    setNewMessage("");

    // Auto-scroll to bottom
    setTimeout(() => {
      const container = document.querySelector(".messages-container");
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }, 0);
  };

  const addBotResponse = () => {
    const now = new Date();
    const time = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    const randomResponse =
      botResponses[Math.floor(Math.random() * botResponses.length)];

    setMessages([
      ...messages,
      {
        id: messageIdCounter,
        from: "them",
        text: randomResponse,
        author: "AI Assistant",
        time: time,
        avatarUrl: "https://i.pravatar.cc/150?img=5",
        footer: "Read",
      },
    ]);

    setMessageIdCounter(messageIdCounter + 1);

    // Auto-scroll to bottom
    setTimeout(() => {
      const container = document.querySelector(".messages-container");
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }, 0);
  };

  const clearMessages = () => {
    if (window.confirm("Are you sure you want to clear all messages?")) {
      setMessages([]);
      setMessageIdCounter(1);
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <section>
      {/* Interactive Chat Demo */}
      <div className="mbe4">
        <h2>Interactive Chat Demo</h2>
        <p>
          Type a message and click Send to add it to the conversation. This
          demonstrates real-world integration with ReactInput and ReactButton.
        </p>
      </div>
      <div className="chat-demo-container mbe6">
        {/* Messages Container */}
        <div className="messages-container">
          {messages.map((message) => (
            <ReactMessageBubble
              key={message.id}
              from={message.from}
              message={message.text}
              author={message.author}
              time={message.time}
              avatarUrl={message.avatarUrl}
              footer={message.footer}
              className="message-item"
            />
          ))}

          {messages.length === 0 && (
            <div className="empty-state">
              No messages yet. Start the conversation!
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="input-area">
          <ReactInput
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyUp={handleKeyUp}
            placeholder="Type your message..."
            rounded
          >
            <ReactIcon slot="addon-left" size="18">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ag-primary)"
                strokeWidth="2"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </ReactIcon>
          </ReactInput>

          <ReactButton
            variant="primary"
            shape="rounded"
            onClick={sendMessage}
            disabled={!newMessage.trim()}
            className="send-button"
          >
            <ReactIcon size="18" noFill>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </ReactIcon>
            <span className="mis1">Send</span>
          </ReactButton>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <ReactButton
            size="sm"
            shape="rounded"
            bordered
            onClick={addBotResponse}
            className="mie2"
          >
            <ReactIcon size="16" noFill>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </ReactIcon>
            <span className="mis1">Add Bot Reply</span>
          </ReactButton>

          <ReactButton
            size="sm"
            shape="rounded"
            variant="danger"
            bordered
            onClick={clearMessages}
          >
            <ReactIcon size="16" noFill>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </ReactIcon>
            <span className="mis1">Clear All</span>
          </ReactButton>
        </div>
      </div>

      {/* Basic Example */}
      <div className="mbe4">
        <h2>Basic Message Bubbles</h2>
        <p>
          Messages can be sent from "me" or "them" with author, time, and
          optional footer.
        </p>
      </div>
      <div className="message-container mbe6">
        <ReactMessageBubble
          from="them"
          message="Hey, are we still on for lunch?"
          author="Sarah"
          time="11:30 AM"
        />
        <ReactMessageBubble
          from="me"
          message="Yes! Where should we go?"
          author="Me"
          time="11:32 AM"
        />
        <ReactMessageBubble
          from="them"
          message="How about that new Italian place?"
          author="Sarah"
          time="11:33 AM"
        />
        <ReactMessageBubble
          from="me"
          message="Sounds perfect. See you there at 12:30."
          author="Me"
          time="11:35 AM"
        />
      </div>

      {/* Delivery Status */}
      <div className="mbe4">
        <h2>Delivery Status</h2>
        <p>Use the footer prop to display delivery status indicators.</p>
      </div>
      <div className="message-container mbe6">
        <ReactMessageBubble
          from="me"
          message="Hey, did you get my last message?"
          author="Me"
          time="2:30 PM"
          footer="Delivered"
        />
        <ReactMessageBubble
          from="me"
          message="Just checking in!"
          author="Me"
          time="2:31 PM"
          footer="Seen"
        />
        <ReactMessageBubble
          from="them"
          message="Yes, I saw it! Thanks for sending."
          author="Sarah"
          time="2:32 PM"
          footer="Read"
        />
        <ReactMessageBubble
          from="me"
          message="Great! Let's catch up later."
          author="Me"
          time="2:33 PM"
          footer="Sending..."
        />
      </div>

      {/* Color Variants */}
      <div className="mbe4">
        <h2>Color Variants</h2>
        <p>Different semantic variants for various message types.</p>
      </div>
      <div className="message-container mbe6">
        <div className="variant-section">
          <h3>Success</h3>
          <ReactMessageBubble
            from="them"
            message="Payment completed successfully!"
            author="System"
            time="10:02 AM"
            variant="success"
          />
          <ReactMessageBubble
            from="me"
            message="Great, thanks for confirming"
            author="Me"
            time="10:03 AM"
            variant="success"
          />
        </div>

        <div className="variant-section">
          <h3>Warning</h3>
          <ReactMessageBubble
            from="them"
            message="Your session will expire in 5 minutes"
            author="System"
            time="10:04 AM"
            variant="warning"
          />
          <ReactMessageBubble
            from="me"
            message="I'll save my work now"
            author="Me"
            time="10:05 AM"
            variant="warning"
          />
        </div>

        <div className="variant-section">
          <h3>Danger</h3>
          <ReactMessageBubble
            from="them"
            message="Error: Unable to process your request"
            author="System"
            time="10:06 AM"
            variant="danger"
          />
          <ReactMessageBubble
            from="me"
            message="Let me try again"
            author="Me"
            time="10:07 AM"
            variant="danger"
          />
        </div>

        <div className="variant-section">
          <h3>Info</h3>
          <ReactMessageBubble
            from="them"
            message="New features available in version 2.0"
            author="System"
            time="10:08 AM"
            variant="info"
          />
          <ReactMessageBubble
            from="me"
            message="Sounds interesting!"
            author="Me"
            time="10:09 AM"
            variant="info"
          />
        </div>

        <div className="variant-section">
          <h3>Neutral</h3>
          <ReactMessageBubble
            from="them"
            message="This is a neutral informational message"
            author="System"
            time="10:10 AM"
            variant="neutral"
          />
        </div>

        <div className="variant-section">
          <h3>Monochrome</h3>
          <ReactMessageBubble
            from="them"
            message="Simple monochrome styling"
            author="System"
            time="10:12 AM"
            variant="monochrome"
          />
        </div>
      </div>

      {/* With Avatars */}
      <div className="mbe4">
        <h2>With Avatar URLs</h2>
        <p>Display user avatars using the avatarUrl prop.</p>
      </div>
      <div className="message-container mbe6">
        <ReactMessageBubble
          from="them"
          message="I have an avatar!"
          author="Jane Smith"
          time="10:05 AM"
          avatarUrl="https://i.pravatar.cc/150?img=1"
        />
        <ReactMessageBubble
          from="me"
          message="Me too!"
          author="Me"
          time="10:06 AM"
          avatarUrl="https://i.pravatar.cc/150?img=2"
        />
      </div>

      {/* Custom Avatar Slot */}
      <div className="mbe4">
        <h2>Custom Avatar Component</h2>
        <p>
          Use the avatar slot to provide custom avatar components with more
          control.
        </p>
      </div>
      <div className="message-container mbe6">
        <ReactMessageBubble
          from="them"
          message="I'm using a custom Avatar component with text initials!"
          author="Jane Smith"
          time="10:00 AM"
        >
          <ReactAvatar slot="avatar" text="JS" variant="info" size="sm" />
        </ReactMessageBubble>
        <ReactMessageBubble
          from="me"
          message="And I'm using an Avatar with an image and different styling!"
          author="Me"
          time="10:01 AM"
        >
          <ReactAvatar
            slot="avatar"
            imgSrc="https://i.pravatar.cc/150?img=10"
            imgAlt="User avatar"
            variant="success"
            size="sm"
          />
        </ReactMessageBubble>
        <ReactMessageBubble
          from="them"
          message="Avatar components give you more control over styling and variants!"
          author="Alex Chen"
          time="10:02 AM"
        >
          <ReactAvatar
            slot="avatar"
            text="AC"
            variant="warning"
            size="sm"
            shape="square"
          />
        </ReactMessageBubble>
      </div>

      {/* Long Content */}
      <div className="mbe4">
        <h2>Long Content</h2>
        <p>
          Message bubbles adapt to longer content with proper text wrapping.
        </p>
      </div>
      <div className="message-container mbe6">
        <ReactMessageBubble
          from="them"
          message="This is a much longer message that demonstrates how the message bubble handles extended content. It should wrap properly and maintain good readability across multiple lines of text."
          author="Alex"
          time="10:20 AM"
          avatarUrl="https://i.pravatar.cc/150?img=4"
        />
        <ReactMessageBubble
          from="me"
          message="I can write long messages too! Here's a detailed response that spans multiple lines and shows how the bubble adapts to different content lengths while maintaining its visual hierarchy."
          author="Me"
          time="10:21 AM"
          footer="Delivered"
          avatarUrl="https://i.pravatar.cc/150?img=8"
        />
      </div>
    </section>
  );
}
