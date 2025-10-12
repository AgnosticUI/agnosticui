import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import { VueDrawer } from 'agnosticui-core/drawer/vue';
import type { VueDrawerProps } from 'agnosticui-core/drawer/vue';
import { ref } from 'vue';

const meta = {
  title: 'AgnosticUI Vue/Drawer',
  component: VueDrawer,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the drawer is open',
    },
    heading: {
      control: 'text',
      description: 'Drawer heading text',
    },
    description: {
      control: 'text',
      description: 'Drawer description text',
    },
    position: {
      control: 'select',
      options: ['start', 'end', 'top', 'bottom'],
      description: 'Position of the drawer',
    },
    noCloseOnEscape: {
      control: 'boolean',
      description: 'Prevent closing on Escape key',
    },
    noCloseOnBackdrop: {
      control: 'boolean',
      description: 'Prevent closing on backdrop click',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Show close button in drawer',
    },
  },
  args: {
    open: false,
    position: 'bottom',
    noCloseOnEscape: false,
    noCloseOnBackdrop: false,
    showCloseButton: false,
  },
} satisfies Meta<typeof VueDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bottom: Story = {
  render: (args: VueDrawerProps) => ({
    components: { VueDrawer },
    setup() {
      const isOpen = ref(false);

      const openDrawer = () => {
        isOpen.value = true;
      };

      const closeDrawer = () => {
        isOpen.value = false;
      };

      return { args, isOpen, openDrawer, closeDrawer };
    },
    template: `
      <div>
        <button @click="openDrawer">Open Bottom Drawer</button>
        <VueDrawer
          :open="isOpen"
          position="bottom"
          heading="Bottom Drawer"
          description="This drawer slides from the bottom"
          @close="closeDrawer"
        >
          <p>Content of the bottom drawer.</p>
        </VueDrawer>
      </div>
    `,
  }),
};

export const Start: Story = {
  render: (args: VueDrawerProps) => ({
    components: { VueDrawer },
    setup() {
      const isOpen = ref(false);

      const openDrawer = () => {
        isOpen.value = true;
      };

      const closeDrawer = () => {
        isOpen.value = false;
      };

      return { args, isOpen, openDrawer, closeDrawer };
    },
    template: `
      <div>
        <button @click="openDrawer">Open Start Drawer</button>
        <VueDrawer
          :open="isOpen"
          position="start"
          heading="Start Drawer"
          :show-close-button="true"
          @close="closeDrawer"
        >
          <p>This drawer slides in from the left (start) side.</p>
          <p>Commonly used for navigation menus.</p>
        </VueDrawer>
      </div>
    `,
  }),
};

export const End: Story = {
  render: (args: VueDrawerProps) => ({
    components: { VueDrawer },
    setup() {
      const isOpen = ref(false);

      const openDrawer = () => {
        isOpen.value = true;
      };

      const closeDrawer = () => {
        isOpen.value = false;
      };

      return { args, isOpen, openDrawer, closeDrawer };
    },
    template: `
      <div>
        <button @click="openDrawer">Open End Drawer</button>
        <VueDrawer
          :open="isOpen"
          position="end"
          heading="End Drawer"
          :show-close-button="true"
          @close="closeDrawer"
        >
          <p>This drawer slides in from the right (end) side.</p>
          <p>Commonly used for settings or filters.</p>
        </VueDrawer>
      </div>
    `,
  }),
};

export const Top: Story = {
  render: (args: VueDrawerProps) => ({
    components: { VueDrawer },
    setup() {
      const isOpen = ref(false);

      const openDrawer = () => {
        isOpen.value = true;
      };

      const closeDrawer = () => {
        isOpen.value = false;
      };

      return { args, isOpen, openDrawer, closeDrawer };
    },
    template: `
      <div>
        <button @click="openDrawer">Open Top Drawer</button>
        <VueDrawer
          :open="isOpen"
          position="top"
          heading="Top Drawer"
          :show-close-button="true"
          @close="closeDrawer"
        >
          <p>This drawer slides down from the top.</p>
          <p>Useful for notifications or alerts.</p>
        </VueDrawer>
      </div>
    `,
  }),
};

export const NavigationMenu: Story = {
  render: (args: VueDrawerProps) => ({
    components: { VueDrawer },
    setup() {
      const isOpen = ref(false);

      const openDrawer = () => {
        isOpen.value = true;
      };

      const closeDrawer = () => {
        isOpen.value = false;
      };

      return { args, isOpen, openDrawer, closeDrawer };
    },
    template: `
      <div>
        <button @click="openDrawer">☰ Menu</button>
        <VueDrawer
          :open="isOpen"
          position="start"
          heading="Navigation"
          @close="closeDrawer"
        >
          <nav>
            <ul style="list-style: none; padding: 0;">
              <li style="margin-bottom: 1rem;">
                <a href="#home" @click.prevent="closeDrawer">Home</a>
              </li>
              <li style="margin-bottom: 1rem;">
                <a href="#products" @click.prevent="closeDrawer">Products</a>
              </li>
              <li style="margin-bottom: 1rem;">
                <a href="#about" @click.prevent="closeDrawer">About</a>
              </li>
              <li style="margin-bottom: 1rem;">
                <a href="#contact" @click.prevent="closeDrawer">Contact</a>
              </li>
            </ul>
          </nav>
        </VueDrawer>
      </div>
    `,
  }),
};

export const FilterPanel: Story = {
  render: (args: VueDrawerProps) => ({
    components: { VueDrawer },
    setup() {
      const isOpen = ref(false);

      const openDrawer = () => {
        isOpen.value = true;
      };

      const closeDrawer = () => {
        isOpen.value = false;
      };

      return { args, isOpen, openDrawer, closeDrawer };
    },
    template: `
      <div>
        <button @click="openDrawer">🔍 Filters</button>
        <VueDrawer
          :open="isOpen"
          position="end"
          heading="Filter Results"
          :show-close-button="true"
          @close="closeDrawer"
        >
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div>
              <h3 style="margin: 0 0 0.5rem 0;">Price Range</h3>
              <input type="range" min="0" max="1000" style="width: 100%;" />
            </div>
            <div>
              <h3 style="margin: 0 0 0.5rem 0;">Category</h3>
              <select style="width: 100%;">
                <option>All Categories</option>
                <option>Electronics</option>
                <option>Clothing</option>
                <option>Books</option>
              </select>
            </div>
            <div>
              <h3 style="margin: 0 0 0.5rem 0;">Rating</h3>
              <label style="display: block;">
                <input type="checkbox" /> 5 stars
              </label>
              <label style="display: block;">
                <input type="checkbox" /> 4 stars & up
              </label>
              <label style="display: block;">
                <input type="checkbox" /> 3 stars & up
              </label>
            </div>
            <div style="display: flex; gap: 0.5rem; justify-content: flex-end; margin-top: 1rem;">
              <button @click="closeDrawer">Clear</button>
              <button @click="closeDrawer" style="font-weight: bold;">
                Apply Filters
              </button>
            </div>
          </div>
        </VueDrawer>
      </div>
    `,
  }),
};

export const EventTesting: Story = {
  render: (args: VueDrawerProps) => ({
    components: { VueDrawer },
    setup() {
      const isOpen = ref(false);
      const closeCount = ref(0);

      const openDrawer = () => {
        isOpen.value = true;
      };

      const handleClose = () => {
        closeCount.value++;
        isOpen.value = false;
      };

      return { args, isOpen, closeCount, openDrawer, handleClose };
    },
    template: `
      <div style="padding: 20px;">
        <div style="margin-bottom: 1rem;">
          <p>Close events: {{ closeCount }}</p>
        </div>
        <button @click="openDrawer">Open Drawer</button>
        <VueDrawer
          :open="isOpen"
          position="end"
          heading="Event Testing Drawer"
          :show-close-button="true"
          @close="handleClose"
        >
          <p>Try different ways to close the drawer:</p>
          <ul>
            <li>Close button</li>
            <li>ESC key</li>
            <li>Backdrop click</li>
          </ul>
        </VueDrawer>
        <p style="font-size: 0.875rem; color: #6b7280; margin-top: 1rem;">
          Open the drawer and try different closing methods to see event counts
        </p>
      </div>
    `,
  }),
};

export const WithRadioButtons: Story = {
  render: (args: VueDrawerProps) => ({
    components: { VueDrawer },
    setup() {
      const isOpen = ref(false);

      const openDrawer = () => {
        isOpen.value = true;
      };

      const closeDrawer = () => {
        isOpen.value = false;
      };

      return { args, isOpen, openDrawer, closeDrawer };
    },
    template: `
      <div>
        <button @click="openDrawer">Open Drawer with Radio Buttons</button>
        <VueDrawer
          :open="isOpen"
          position="end"
          heading="Radio Button Demo"
          :show-close-button="true"
          @close="closeDrawer"
        >
          <div style="padding: 1rem 0;">
            <fieldset>
              <legend>Choose your favorite flavor</legend>
              <label style="display: block; margin-bottom: 0.5rem;">
                <input type="radio" name="flavor" value="grape" /> Grape
              </label>
              <label style="display: block; margin-bottom: 0.5rem;">
                <input type="radio" name="flavor" value="cherry" /> Cherry
              </label>
              <label style="display: block; margin-bottom: 0.5rem;">
                <input type="radio" name="flavor" value="orange" checked /> Orange
              </label>
            </fieldset>
          </div>
        </VueDrawer>
      </div>
    `,
  }),
};

export const FocusTrapping: Story = {
  render: (args: VueDrawerProps) => ({
    components: { VueDrawer },
    setup() {
      const isOpen = ref(false);

      const openDrawer = () => {
        isOpen.value = true;
      };

      const closeDrawer = () => {
        isOpen.value = false;
      };

      return { args, isOpen, openDrawer, closeDrawer };
    },
    template: `
      <div>
        <button @click="openDrawer">Open Focus Trapping Drawer</button>
        <VueDrawer
          :open="isOpen"
          position="end"
          heading="Focus Trapping Demo"
          :show-close-button="true"
          @close="closeDrawer"
        >
          <div style="padding: 1rem 0;">
            <p>Press Tab to move focus to the next element. Press Shift+Tab to move to the previous element.</p>
            <button>Button 1</button>
            <a href="#">Link 1</a>
            <input type="text" placeholder="Input 1" />
            <button>Button 2</button>
          </div>
        </VueDrawer>
      </div>
    `,
  }),
};
