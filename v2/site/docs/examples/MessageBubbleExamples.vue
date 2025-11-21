<template>
  <section>
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

export default defineComponent({
  name: "MessageBubbleExamples",
  components: {
    VueMessageBubble,
    VueAvatar,
  },
});
</script>

<style scoped>
.message-container {
  max-width: 600px;
  border: 1px solid var(--vp-c-divider);
  padding: 20px;
  border-radius: 8px;
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

.mbe4 {
  margin-bottom: 16px;
}

.mbe6 {
  margin-bottom: 32px;
}

.mbe4 p {
  margin: 8px 0 0 0;
  color: var(--vp-c-text-2);
  font-size: 14px;
}
</style>
