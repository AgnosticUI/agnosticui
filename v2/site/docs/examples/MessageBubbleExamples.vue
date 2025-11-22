<template>
  <section>
    <!-- Interactive Chat Demo -->
    <div class="mbe4">
      <h3>Interactive Chat Demo</h3>
      <p>Type a message and click Send to add it to the conversation. This demonstrates real-world integration with VueInput and VueButton.</p>
    </div>
    <div class="chat-demo-container mbe6">
      <!-- Messages Container -->
      <div class="messages-container">
        <TransitionGroup name="message-fade">
          <VueMessageBubble
            v-for="message in messages"
            :key="message.id"
            :from="message.from"
            :message="message.text"
            :author="message.author"
            :time="message.time"
            :avatar-url="message.avatarUrl"
            :footer="message.footer"
            class="message-item"
          />
        </TransitionGroup>

        <div
          v-if="messages.length === 0"
          class="empty-state"
        >
          No messages yet. Start the conversation!
        </div>
      </div>

      <!-- Input Area -->
      <div class="input-area">
        <VueInput
          v-model:value="newMessage"
          placeholder="Type your message..."
          rounded
          @keyup.enter="sendMessage"
        >
          <template #addon-left>
            <MessageCircle
              :size="18"
              color="var(--ag-primary)"
            />
          </template>
        </VueInput>

        <VueButton
          variant="primary"
          shape="rounded"
          @click="sendMessage"
          :disabled="!newMessage.trim()"
          class="send-button"
        >
          <Send :size="18" />
          <span class="mis1">Send</span>
        </VueButton>
      </div>

      <!-- Quick Actions -->
      <div class="quick-actions">
        <VueButton
          size="sm"
          shape="rounded"
          :bordered="true"
          @click="addBotResponse"
          class="mie2"
        >
          <Bot :size="16" />
          <span class="mis1">Add Bot Reply</span>
        </VueButton>

        <VueButton
          size="sm"
          shape="rounded"
          variant="danger"
          :bordered="true"
          @click="clearMessages"
        >
          <Trash2 :size="16" />
          <span class="mis1">Clear All</span>
        </VueButton>
      </div>
    </div>

    <!-- Basic Example -->
    <div class="mbe4">
      <h3>Basic Message Bubbles</h3>
      <p>Messages can be sent from "me" or "them" with author, time, and optional footer.</p>
    </div>
    <div class="message-container mbe6">
      <VueMessageBubble
        from="them"
        message="Hey, are we still on for lunch?"
        author="Sarah"
        time="11:30 AM"
      />
      <VueMessageBubble
        from="me"
        message="Yes! Where should we go?"
        author="Me"
        time="11:32 AM"
      />
      <VueMessageBubble
        from="them"
        message="How about that new Italian place?"
        author="Sarah"
        time="11:33 AM"
      />
      <VueMessageBubble
        from="me"
        message="Sounds perfect. See you there at 12:30."
        author="Me"
        time="11:35 AM"
      />
    </div>

    <!-- Delivery Status -->
    <div class="mbe4">
      <h3>Delivery Status</h3>
      <p>Use the footer prop to display delivery status indicators.</p>
    </div>
    <div class="message-container mbe6">
      <VueMessageBubble
        from="me"
        message="Hey, did you get my last message?"
        author="Me"
        time="2:30 PM"
        footer="Delivered"
      />
      <VueMessageBubble
        from="me"
        message="Just checking in!"
        author="Me"
        time="2:31 PM"
        footer="Seen"
      />
      <VueMessageBubble
        from="them"
        message="Yes, I saw it! Thanks for sending."
        author="Sarah"
        time="2:32 PM"
        footer="Read"
      />
      <VueMessageBubble
        from="me"
        message="Great! Let's catch up later."
        author="Me"
        time="2:33 PM"
        footer="Sending..."
      />
    </div>

    <!-- Color Variants -->
    <div class="mbe4">
      <h3>Color Variants</h3>
      <p>Different semantic variants for various message types.</p>
    </div>
    <div class="message-container mbe6">
      <div class="variant-section">
        <h4>Success</h4>
        <VueMessageBubble
          from="them"
          message="Payment completed successfully!"
          author="System"
          time="10:02 AM"
          variant="success"
        />
        <VueMessageBubble
          from="me"
          message="Great, thanks for confirming"
          author="Me"
          time="10:03 AM"
          variant="success"
        />
      </div>

      <div class="variant-section">
        <h4>Warning</h4>
        <VueMessageBubble
          from="them"
          message="Your session will expire in 5 minutes"
          author="System"
          time="10:04 AM"
          variant="warning"
        />
        <VueMessageBubble
          from="me"
          message="I'll save my work now"
          author="Me"
          time="10:05 AM"
          variant="warning"
        />
      </div>

      <div class="variant-section">
        <h4>Danger</h4>
        <VueMessageBubble
          from="them"
          message="Error: Unable to process your request"
          author="System"
          time="10:06 AM"
          variant="danger"
        />
        <VueMessageBubble
          from="me"
          message="Let me try again"
          author="Me"
          time="10:07 AM"
          variant="danger"
        />
      </div>

      <div class="variant-section">
        <h4>Info</h4>
        <VueMessageBubble
          from="them"
          message="New features available in version 2.0"
          author="System"
          time="10:08 AM"
          variant="info"
        />
        <VueMessageBubble
          from="me"
          message="Sounds interesting!"
          author="Me"
          time="10:09 AM"
          variant="info"
        />
      </div>

      <div class="variant-section">
        <h4>Neutral</h4>
        <VueMessageBubble
          from="them"
          message="This is a neutral informational message"
          author="System"
          time="10:10 AM"
          variant="neutral"
        />
      </div>

      <div class="variant-section">
        <h4>Monochrome</h4>
        <VueMessageBubble
          from="them"
          message="Simple monochrome styling"
          author="System"
          time="10:12 AM"
          variant="monochrome"
        />
      </div>
    </div>

    <!-- With Avatars -->
    <div class="mbe4">
      <h3>With Avatar URLs</h3>
      <p>Display user avatars using the avatarUrl prop.</p>
    </div>
    <div class="message-container mbe6">
      <VueMessageBubble
        from="them"
        message="I have an avatar!"
        author="Jane Smith"
        time="10:05 AM"
        avatar-url="https://i.pravatar.cc/150?img=1"
      />
      <VueMessageBubble
        from="me"
        message="Me too!"
        author="Me"
        time="10:06 AM"
        avatar-url="https://i.pravatar.cc/150?img=2"
      />
    </div>

    <!-- Custom Avatar Slot -->
    <div class="mbe4">
      <h3>Custom Avatar Component</h3>
      <p>Use the avatar slot to provide custom avatar components with more control.</p>
    </div>
    <div class="message-container mbe6">
      <VueMessageBubble
        from="them"
        message="I'm using a custom Avatar component with text initials!"
        author="Jane Smith"
        time="10:00 AM"
      >
        <template #avatar>
          <VueAvatar
            text="JS"
            variant="info"
            size="sm"
          />
        </template>
      </VueMessageBubble>
      <VueMessageBubble
        from="me"
        message="And I'm using an Avatar with an image and different styling!"
        author="Me"
        time="10:01 AM"
      >
        <template #avatar>
          <VueAvatar
            img-src="https://i.pravatar.cc/150?img=10"
            img-alt="User avatar"
            variant="success"
            size="sm"
          />
        </template>
      </VueMessageBubble>
      <VueMessageBubble
        from="them"
        message="Avatar components give you more control over styling and variants!"
        author="Alex Chen"
        time="10:02 AM"
      >
        <template #avatar>
          <VueAvatar
            text="AC"
            variant="warning"
            size="sm"
            shape="square"
          />
        </template>
      </VueMessageBubble>
    </div>

    <!-- Long Content -->
    <div class="mbe4">
      <h3>Long Content</h3>
      <p>Message bubbles adapt to longer content with proper text wrapping.</p>
    </div>
    <div class="message-container mbe6">
      <VueMessageBubble
        from="them"
        message="This is a much longer message that demonstrates how the message bubble handles extended content. It should wrap properly and maintain good readability across multiple lines of text."
        author="Alex"
        time="10:20 AM"
        avatar-url="https://i.pravatar.cc/150?img=4"
      />
      <VueMessageBubble
        from="me"
        message="I can write long messages too! Here's a detailed response that spans multiple lines and shows how the bubble adapts to different content lengths while maintaining its visual hierarchy."
        author="Me"
        time="10:21 AM"
        footer="Delivered"
        avatar-url="https://i.pravatar.cc/150?img=8"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueMessageBubble } from "agnosticui-core/message-bubble/vue";
import { VueAvatar } from "agnosticui-core/avatar/vue";
import VueInput from "agnosticui-core/input/vue";
import VueButton from "agnosticui-core/button/vue";
import { MessageCircle, Send, Bot, Trash2 } from "lucide-vue-next";

export default defineComponent({
  name: "MessageBubbleExamples",
  components: {
    VueMessageBubble,
    VueAvatar,
    VueInput,
    VueButton,
    MessageCircle,
    Send,
    Bot,
    Trash2,
  },
  data() {
    return {
      newMessage: "",
      messages: [] as Array<{
        id: number;
        from: "me" | "them";
        text: string;
        author: string;
        time: string;
        avatarUrl: string;
        footer: string;
      }>,
      messageIdCounter: 1,
      botResponses: [
        "That's interesting! Tell me more.",
        "I understand what you mean.",
        "Thanks for sharing that!",
        "Great point!",
        "I appreciate your message.",
        "That makes sense to me.",
        "Interesting perspective!",
      ],
    };
  },
  methods: {
    sendMessage() {
      if (!this.newMessage.trim()) return;

      const now = new Date();
      const time = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      this.messages.push({
        id: this.messageIdCounter++,
        from: "me",
        text: this.newMessage,
        author: "Me",
        time: time,
        avatarUrl: "https://i.pravatar.cc/150?img=8",
        footer: "Sent",
      });

      // Clear input
      this.newMessage = "";

      // Auto-scroll to bottom
      this.$nextTick(() => {
        const container = this.$el.querySelector(".messages-container");
        if (container) {
          container.scrollTop = container.scrollHeight;
        }
      });
    },

    addBotResponse() {
      const now = new Date();
      const time = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      const randomResponse =
        this.botResponses[Math.floor(Math.random() * this.botResponses.length)];

      this.messages.push({
        id: this.messageIdCounter++,
        from: "them",
        text: randomResponse,
        author: "AI Assistant",
        time: time,
        avatarUrl: "https://i.pravatar.cc/150?img=5",
        footer: "Read",
      });

      // Auto-scroll to bottom
      this.$nextTick(() => {
        const container = this.$el.querySelector(".messages-container");
        if (container) {
          container.scrollTop = container.scrollHeight;
        }
      });
    },

    clearMessages() {
      if (confirm("Are you sure you want to clear all messages?")) {
        this.messages = [];
        this.messageIdCounter = 1;
      }
    },
  },
});
</script>

<style scoped>
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

.message-fade-enter-active {
  animation: message-fade-in var(--ag-motion-medium, 0.2s) ease-out;
}

.message-fade-leave-active {
  animation: message-fade-out var(--ag-motion-fast, 0.15s) ease-in;
}

.message-fade-move {
  transition: transform var(--ag-motion-medium, 0.2s) ease;
}

@keyframes message-fade-in {
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes message-fade-out {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
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
