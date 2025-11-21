import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { VueMessageBubble } from 'agnosticui-core/message-bubble/vue';

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