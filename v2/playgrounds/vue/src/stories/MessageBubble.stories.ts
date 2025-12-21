import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { VueMessageBubble } from 'agnosticui-core/message-bubble/vue';
import { VueAvatar } from 'agnosticui-core/avatar/vue';

const meta = {
  title: 'AgnosticUI Vue/MessageBubble',
  component: VueMessageBubble,
  tags: ['autodocs'],
  argTypes: {
    from: {
      control: 'radio',
      options: ['me', 'them'],
      description: 'Sender of the message',
    },
    message: {
      control: 'text',
      description: 'Content of the message',
    },
    author: {
      control: 'text',
      description: 'Name of the author',
    },
    time: {
      control: 'text',
      description: 'Timestamp of the message',
    },
  },
  args: {
    from: 'them',
    message: 'Hello, how are you?',
    author: 'John Doe',
    time: '10:00 AM',
  },
} satisfies Meta<typeof VueMessageBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { VueMessageBubble },
    setup() {
      return { args };
    },
    template: `<VueMessageBubble v-bind="args" />`,
  }),
};

export const FromMe: Story = {
  args: {
    from: 'me',
    message: 'I am doing great, thanks!',
    author: 'Me',
    time: '10:01 AM',
  },
  render: (args) => ({
    components: { VueMessageBubble },
    setup() {
      return { args };
    },
    template: `<VueMessageBubble v-bind="args" />`,
  }),
};

export const Conversation: Story = {
  render: () => ({
    components: { VueMessageBubble },
    template: `
      <div style="max-width: 400px; border: 1px solid #ccc; padding: 20px; border-radius: 8px;">
        <VueMessageBubble from="them" message="Hey, are we still on for lunch?" author="Sarah" time="11:30 AM" />
        <VueMessageBubble from="me" message="Yes! Where should we go?" author="Me" time="11:32 AM" />
        <VueMessageBubble from="them" message="How about that new Italian place?" author="Sarah" time="11:33 AM" />
        <VueMessageBubble from="me" message="Sounds perfect. See you there at 12:30." author="Me" time="11:35 AM" />
      </div>
    `,
  }),
};

export const CSSPartsCustomization: Story = {
  render: (args) => ({
    components: { VueMessageBubble },
    setup() {
      const styles = `
        <style>
          .custom-bubble::part(ag-message-bubble) {
            background-color: var(--ag-electric-blue);
            color: var(--ag-white);
            border-radius: var(--ag-radius-rounded);
            font-family: 'Comic Sans MS', cursive, sans-serif;
            padding: var(--ag-space-24);
          }
        </style>
      `;
      return { args, styles };
    },
    template: `
      <div>
        <div v-html="styles"></div>
        <div style="max-width: 400px; border: 1px solid #ccc; padding: 20px; border-radius: 8px;">
          <VueMessageBubble
            class="custom-bubble"
            v-bind="args"
          />
          <VueMessageBubble from="me" message="This is a normal message bubble from me." author="Me" time="10:05 AM" />
        </div>
      </div>
    `,
  }),
  args: {
    from: 'them',
    message: 'This message bubble is custom styled using CSS Shadow Parts!',
    author: 'CSS Wizard',
    time: '10:00 AM',
  },
};

export const DeliveryStatus: Story = {
  render: () => ({
    components: { VueMessageBubble },
    template: `
      <div style="max-width: 400px; border: 1px solid #ccc; padding: 20px; border-radius: 8px;">
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
    `,
  }),
};

export const ColorVariants: Story = {
  render: () => ({
    components: { VueMessageBubble },
    setup() {
      const styles = `
        <style>
          .color-variants-container {
            max-width: 600px;
            border: 1px solid #ccc;
            padding: 20px;
            border-radius: 8px;
          }
          .color-variants-section {
            margin-bottom: 30px;
          }
          .color-variants-section h3 {
            margin: 0 0 15px 0;
            font-size: 14px;
            font-weight: 600;
            color: #666;
          }
        </style>
      `;
      return { styles };
    },
    template: `
      <div>
        <div v-html="styles"></div>
        <div class="color-variants-container">
          <div class="color-variants-section">
            <h3>Default</h3>
            <VueMessageBubble
              from="them"
              message="This is a default message"
              author="System"
              time="10:00 AM"
              variant="default"
            />
            <VueMessageBubble
              from="me"
              message="Replying with default style"
              author="Me"
              time="10:01 AM"
              variant="default"
            />
          </div>

          <div class="color-variants-section">
            <h3>Success</h3>
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

          <div class="color-variants-section">
            <h3>Warning</h3>
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

          <div class="color-variants-section">
            <h3>Danger</h3>
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

          <div class="color-variants-section">
            <h3>Info</h3>
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

          <div class="color-variants-section">
            <h3>Neutral</h3>
            <VueMessageBubble
              from="them"
              message="This is a neutral informational message"
              author="System"
              time="10:10 AM"
              variant="neutral"
            />
            <VueMessageBubble
              from="me"
              message="Acknowledged"
              author="Me"
              time="10:11 AM"
              variant="neutral"
            />
          </div>

          <div class="color-variants-section">
            <h3>Monochrome</h3>
            <VueMessageBubble
              from="them"
              message="Simple monochrome styling"
              author="System"
              time="10:12 AM"
              variant="monochrome"
            />
            <VueMessageBubble
              from="me"
              message="Clean and minimal"
              author="Me"
              time="10:13 AM"
              variant="monochrome"
            />
          </div>
        </div>
      </div>
    `,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    components: { VueMessageBubble },
    setup() {
      const styles = `
        <style>
          .variants-container {
            max-width: 600px;
            border: 1px solid #ccc;
            padding: 20px;
            border-radius: 8px;
          }
          .variants-section {
            margin-bottom: 30px;
          }
          .variants-section h3 {
            margin: 0 0 15px 0;
            font-size: 14px;
            font-weight: 600;
            color: #666;
          }
        </style>
      `;
      return { styles };
    },
    template: `
      <div>
        <div v-html="styles"></div>
        <div class="variants-container">
          <div class="variants-section">
            <h3>Basic Messages (Me vs Them)</h3>
            <VueMessageBubble
              from="them"
              message="Hello from them!"
              author="John Doe"
              time="10:00 AM"
              avatar-url="https://i.pravatar.cc/150?img=5"
            />
            <VueMessageBubble
              from="me"
              message="Hello from me!"
              author="Me"
              time="10:01 AM"
              avatar-url="https://i.pravatar.cc/150?img=8"
            />
          </div>

          <div class="variants-section">
            <h3>With Avatar</h3>
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

          <div class="variants-section">
            <h3>With Footer Status</h3>
            <VueMessageBubble
              from="me"
              message="This message has a delivery status"
              author="Me"
              time="10:10 AM"
              footer="Delivered ✓"
            />
            <VueMessageBubble
              from="me"
              message="This one was seen"
              author="Me"
              time="10:11 AM"
              footer="Seen ✓✓"
            />
          </div>

          <div class="variants-section">
            <h3>Without Author or Time</h3>
            <VueMessageBubble
              from="them"
              message="Simple message without metadata"
            />
            <VueMessageBubble
              from="me"
              message="Another simple one"
            />
          </div>

          <div class="variants-section">
            <h3>Long Content</h3>
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

          <div class="variants-section">
            <h3>Complete Example (All Features)</h3>
            <VueMessageBubble
              from="them"
              message="This message has everything: avatar, author, time, and footer!"
              author="Chris Johnson"
              time="10:30 AM"
              avatar-url="https://i.pravatar.cc/150?img=3"
              footer="Read"
            />
          </div>
        </div>
      </div>
    `,
  }),
};

export const CustomAvatarSlot: Story = {
  render: () => ({
    components: { VueMessageBubble, VueAvatar },
    setup() {
      const styles = `
        <style>
          .custom-avatar-container {
            max-width: 600px;
            border: 1px solid #ccc;
            padding: 20px;
            border-radius: 8px;
          }
          .custom-avatar-container h3 {
            margin-top: 0;
            font-size: 14px;
            font-weight: 600;
            color: #666;
          }
        </style>
      `;
      return { styles };
    },
    template: `
      <div>
        <div v-html="styles"></div>
        <div class="custom-avatar-container">
          <h3>Using Custom Avatar Component in Slot</h3>
          <VueMessageBubble
            from="them"
            message="I'm using a custom Avatar component with text initials!"
            author="Jane Smith"
            time="10:00 AM"
          >
            <template #avatar>
              <VueAvatar text="JS" variant="info" size="sm" />
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
              <VueAvatar text="AC" variant="warning" size="sm" shape="square" />
            </template>
          </VueMessageBubble>
        </div>
      </div>
    `,
  }),
};