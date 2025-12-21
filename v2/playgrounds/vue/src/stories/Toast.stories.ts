import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { VueToast, type VueToastProps } from 'agnosticui-core/toast/vue';

const meta = {
  title: 'AgnosticUI Vue/Toast',
  component: VueToast,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls visibility of the toast',
    },
    type: {
      control: 'select',
      options: ['default', 'primary', 'success', 'info', 'danger', 'warning', 'error'],
      description: 'The toast variant type',
    },
    position: {
      control: 'select',
      options: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'start', 'end'],
      description: 'Viewport position',
    },
    duration: {
      control: 'number',
      description: 'Auto-dismiss duration in milliseconds',
    },
    autoDismiss: {
      control: 'boolean',
      description: 'Enable auto-dismiss',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Show close button',
    },
    pauseOnHover: {
      control: 'boolean',
      description: 'Pause auto-dismiss on hover',
    },
    bordered: {
      control: 'boolean',
      description: 'Adds a border',
    },
    rounded: {
      control: 'boolean',
      description: 'Applies rounded corners',
    },
    borderedLeft: {
      control: 'boolean',
      description: 'Adds a left border accent',
    },
  },
  args: {
    open: false,
    type: 'info',
    position: 'top-end',
    duration: 5000,
    autoDismiss: true,
    showCloseButton: true,
    pauseOnHover: true,
    bordered: false,
    rounded: true,
    borderedLeft: false,
  },
} satisfies Meta<typeof VueToast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
  },
  render: (args: VueToastProps) => ({
    components: { VueToast },
    setup() {
      return { args };
    },
    template: `<VueToast v-bind="args">This is a toast notification</VueToast>`,
  }),
};

export const Success: Story = {
  args: {
    open: true,
    type: 'success',
  },
  render: (args: VueToastProps) => ({
    components: { VueToast },
    setup() {
      return { args };
    },
    template: `<VueToast v-bind="args">Operation completed successfully!</VueToast>`,
  }),
};

export const Error: Story = {
  args: {
    open: true,
    type: 'error',
  },
  render: (args: VueToastProps) => ({
    components: { VueToast },
    setup() {
      return { args };
    },
    template: `
      <VueToast v-bind="args">
        <svg class="mie8" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path fill="currentColor" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
        </svg>
        An error occurred. Please try again.
      </VueToast>
    `,
  }),
};

export const Warning: Story = {
  args: {
    open: true,
    type: 'warning',
  },
  render: (args: VueToastProps) => ({
    components: { VueToast },
    setup() {
      return { args };
    },
    template: `
      <VueToast v-bind="args">
        <svg class="mie8" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path fill="currentColor" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
        </svg>
        Warning: This action cannot be undone.
      </VueToast>
    `,
  }),
};

export const Primary: Story = {
  args: {
    open: true,
    type: 'primary',
  },
  render: (args: VueToastProps) => ({
    components: { VueToast },
    setup() {
      return { args };
    },
    template: `<VueToast v-bind="args">New message received!</VueToast>`,
  }),
};

// Position Stories
export const TopStart: Story = {
  args: {
    open: true,
    position: 'top-start',
  },
  render: (args: VueToastProps) => ({
    components: { VueToast },
    setup() {
      return { args };
    },
    template: `<VueToast v-bind="args">Toast positioned at top-start</VueToast>`,
  }),
};

export const TopEnd: Story = {
  args: {
    open: true,
    position: 'top-end',
  },
  render: (args: VueToastProps) => ({
    components: { VueToast },
    setup() {
      return { args };
    },
    template: `<VueToast v-bind="args">Toast positioned at top-end (default)</VueToast>`,
  }),
};

export const BottomStart: Story = {
  args: {
    open: true,
    position: 'bottom-start',
  },
  render: (args: VueToastProps) => ({
    components: { VueToast },
    setup() {
      return { args };
    },
    template: `<VueToast v-bind="args">Toast positioned at bottom-start</VueToast>`,
  }),
};

export const BottomEnd: Story = {
  args: {
    open: true,
    position: 'bottom-end',
  },
  render: (args: VueToastProps) => ({
    components: { VueToast },
    setup() {
      return { args };
    },
    template: `<VueToast v-bind="args">Toast positioned at bottom-end</VueToast>`,
  }),
};

// Auto-Dismiss Stories
export const AutoDismiss: Story = {
  args: {
    open: true,
    type: 'info',
    duration: 3000,
    autoDismiss: true,
  },
  render: (args: VueToastProps) => ({
    components: { VueToast },
    setup() {
      return { args };
    },
    template: `<VueToast v-bind="args">This toast will auto-dismiss in 3 seconds</VueToast>`,
  }),
};

export const NoAutoDismiss: Story = {
  args: {
    open: true,
    type: 'info',
    autoDismiss: false,
    showCloseButton: true,
  },
  render: (args: VueToastProps) => ({
    components: { VueToast },
    setup() {
      return { args };
    },
    template: `<VueToast v-bind="args">This toast will not auto-dismiss. Click X to close.</VueToast>`,
  }),
};

export const WithBorder: Story = {
  args: {
    open: true,
    type: 'info',
    bordered: true,
  },
  render: (args: VueToastProps) => ({
    components: { VueToast },
    setup() {
      return { args };
    },
    template: `<VueToast v-bind="args">Toast with border</VueToast>`,
  }),
};

export const WithLeftBorder: Story = {
  args: {
    open: true,
    type: 'success',
    borderedLeft: true,
  },
  render: (args: VueToastProps) => ({
    components: { VueToast },
    setup() {
      return { args };
    },
    template: `<VueToast v-bind="args">Toast with left border accent</VueToast>`,
  }),
};

export const NoCloseButton: Story = {
  args: {
    open: true,
    type: 'info',
    showCloseButton: false,
  },
  render: (args: VueToastProps) => ({
    components: { VueToast },
    setup() {
      return { args };
    },
    template: `<VueToast v-bind="args">Toast without close button</VueToast>`,
  }),
};

// Event Handling Stories
export const WithEventHandlers: Story = {
  name: 'With Event Handlers (@toast-open, @toast-close, @toast-dismiss)',
  render: (args: VueToastProps) => ({
    components: { VueToast },
    setup() {
      const isOpen = ref(false);
      const events = ref<string[]>([]);

      const logEvent = (eventName: string) => {
        events.value.push(`${eventName} at ${new Date().toLocaleTimeString()}`);
      };

      const handleToastOpen = () => {
        logEvent('toast-open');
      };

      const handleToastClose = () => {
        logEvent('toast-close');
        isOpen.value = false;
      };

      const handleToastDismiss = () => {
        logEvent('toast-dismiss (auto)');
      };

      const showToast = () => {
        isOpen.value = true;
      };

      const clearEvents = () => {
        events.value = [];
      };

      return {
        isOpen,
        events,
        handleToastOpen,
        handleToastClose,
        handleToastDismiss,
        showToast,
        clearEvents,
      };
    },
    template: `
      <div style="padding: 20px;">
        <div style="margin-bottom: 16px;">
          <button
            @click="showToast"
            style="
              padding: 8px 16px;
              background: var(--ag-primary);
              color: white;
              border: none;
              border-radius: 4px;
              cursor: pointer;
            "
          >
            Show Toast
          </button>
          <button
            @click="clearEvents"
            style="
              margin-left: 8px;
              padding: 8px 16px;
              background: var(--ag-secondary);
              color: white;
              border: none;
              border-radius: 4px;
              cursor: pointer;
            "
          >
            Clear Events
          </button>
        </div>

        <VueToast
          :open="isOpen"
          type="success"
          position="top-end"
          :duration="3000"
          :autoDismiss="true"
          :showCloseButton="true"
          @toast-open="handleToastOpen"
          @toast-close="handleToastClose"
          @toast-dismiss="handleToastDismiss"
        >
          This toast will auto-dismiss in 3 seconds. Try closing it manually too!
        </VueToast>

        <div
          style="
            margin-top: 16px;
            padding: 12px;
            background: var(--ag-background-secondary);
            border-radius: 4px;
            font-family: monospace;
            font-size: 14px;
          "
        >
          <strong>Event Log:</strong>
          <div v-if="events.length === 0" style="color: var(--ag-text-secondary); margin-top: 8px;">
            No events yet. Click "Show Toast" to start.
          </div>
          <ul v-else style="margin: 8px 0 0 0; padding: 0 0 0 20px;">
            <li v-for="(event, index) in events" :key="index" style="margin-bottom: 4px;">
              {{ event }}
            </li>
          </ul>
        </div>

        <div
          style="
            margin-top: 16px;
            padding: 12px;
            background: var(--ag-info-light);
            border-radius: 4px;
            font-size: 14px;
          "
        >
          <strong>Try this:</strong>
          <ul style="margin: 8px 0 0 0; padding: 0 0 0 20px;">
            <li>Click "Show Toast" and let it auto-dismiss (3 seconds)</li>
            <li>Click "Show Toast" and manually close it with the X button</li>
            <li>Click "Show Toast" and press Escape to close</li>
            <li>Notice the different events logged for each action</li>
          </ul>
        </div>
      </div>
    `,
  }),
};

export const WithVModelOpen: Story = {
  name: 'With v-model:open',
  render: (args: VueToastProps) => ({
    components: { VueToast },
    setup() {
      const isOpen = ref(false);

      const showToast = () => {
        isOpen.value = true;
      };

      return { isOpen, showToast };
    },
    template: `
      <div style="padding: 20px;">
        <div style="margin-bottom: 16px;">
          <button
            @click="showToast"
            style="
              padding: 8px 16px;
              background: var(--ag-primary);
              color: white;
              border: none;
              border-radius: 4px;
              cursor: pointer;
            "
          >
            Show Toast
          </button>
        </div>

        <VueToast
          v-model:open="isOpen"
          type="info"
          position="top-end"
          :duration="3000"
        >
          Using v-model:open for two-way binding!
        </VueToast>

        <div
          style="
            margin-top: 16px;
            padding: 12px;
            background: var(--ag-background-secondary);
            border-radius: 4px;
          "
        >
          <strong>Current state:</strong> {{ isOpen ? 'Open' : 'Closed' }}
        </div>

        <div
          style="
            margin-top: 16px;
            padding: 12px;
            background: var(--ag-info-light);
            border-radius: 4px;
            font-size: 14px;
          "
        >
          <strong>Note:</strong> The <code>v-model:open</code> directive provides two-way binding.
          When the toast closes (manually or auto-dismiss), the <code>isOpen</code> variable is
          automatically updated.
        </div>
      </div>
    `,
  }),
};

export const EventPropagation: Story = {
  name: 'Event Propagation Demo',
  render: (args: VueToastProps) => ({
    components: { VueToast },
    setup() {
      const isOpen = ref(false);
      const lastEvent = ref('None');

      const handleToastOpen = (event: Event) => {
        lastEvent.value = '@toast-open emitted';
        console.log('Toast opened:', event);
      };

      const handleToastClose = (event: Event) => {
        lastEvent.value = '@toast-close emitted';
        isOpen.value = false;
        console.log('Toast closed:', event);
      };

      const handleToastDismiss = (event: Event) => {
        lastEvent.value = '@toast-dismiss emitted';
        console.log('Toast dismissed:', event);
      };

      const openToast = () => {
        isOpen.value = true;
      };

      return {
        isOpen,
        lastEvent,
        handleToastOpen,
        handleToastClose,
        handleToastDismiss,
        openToast,
      };
    },
    template: `
      <div style="padding: 20px;">
        <button
          @click="openToast"
          style="
            padding: 8px 16px;
            background: var(--ag-primary);
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-bottom: 16px;
          "
        >
          Open Toast
        </button>

        <VueToast
          :open="isOpen"
          type="info"
          position="top-end"
          :duration="5000"
          :showCloseButton="true"
          @toast-open="handleToastOpen"
          @toast-close="handleToastClose"
          @toast-dismiss="handleToastDismiss"
        >
          Watch the event propagation in the console and below!
        </VueToast>

        <div
          style="
            padding: 12px;
            background: var(--ag-background-secondary);
            border-radius: 4px;
            margin-top: 16px;
          "
        >
          <strong>Last Event:</strong> {{ lastEvent }}
        </div>

        <div
          style="
            margin-top: 16px;
            padding: 12px;
            background: var(--ag-info-light);
            border-radius: 4px;
            font-size: 14px;
          "
        >
          <strong>Note:</strong> Events are dispatched with <code>bubbles: true</code> and
          <code>composed: true</code>, allowing them to cross shadow DOM boundaries. Check the
          browser console to see the full event objects.
        </div>
      </div>
    `,
  }),
};
