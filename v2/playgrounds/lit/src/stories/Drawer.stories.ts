import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { fn } from 'storybook/test';
import 'agnosticui-core/dialog';
import 'agnosticui-core/button';

// Props interface for Drawer (uses Dialog with drawerPosition)
interface DrawerProps {
  open?: boolean;
  heading?: string;
  description?: string;
  position?: 'start' | 'end' | 'top' | 'bottom';
  noCloseOnEscape?: boolean;
  noCloseOnBackdrop?: boolean;
  showCloseButton?: boolean;
  onDialogOpen?: (e: Event) => void;
  onDialogClose?: (e: Event) => void;
  onDialogCancel?: (e: Event) => void;
}

const meta: Meta<DrawerProps> = {
  title: 'AgnosticUI/Drawer',
  component: 'ag-dialog',
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
    onDialogOpen: fn(),
    onDialogClose: fn(),
    onDialogCancel: fn(),
  },
  parameters: {
    actions: {
      handles: ['dialog-open', 'dialog-close', 'dialog-cancel'],
    },
  },
};

export default meta;
type Story = StoryObj<DrawerProps>;

// Helper function to create a controlled drawer story
const createDrawerStory = (args: Partial<DrawerProps>, content: any) => {
  return html`
    <div>
      <ag-button
        @click=${(e: Event) => {
          const button = e.target as HTMLElement;
          const drawer = button.parentElement?.querySelector('ag-dialog') as any;
          if (drawer) {
            drawer.open = true;
          }
        }}
      >
        Open Drawer
      </ag-button>
      <ag-dialog
        .open=${args.open}
        .heading=${args.heading}
        .description=${args.description}
        .drawerPosition=${args.position}
        .noCloseOnEscape=${args.noCloseOnEscape}
        .noCloseOnBackdrop=${args.noCloseOnBackdrop}
        .showCloseButton=${args.showCloseButton}
        @dialog-open=${args.onDialogOpen || fn()}
        @dialog-close=${(e: Event) => {
          const drawer = e.target as any;
          drawer.open = false;
          if (args.onDialogClose) args.onDialogClose(e);
        }}
        @dialog-cancel=${(e: Event) => {
          const drawer = e.target as any;
          drawer.open = false;
          if (args.onDialogCancel) args.onDialogCancel(e);
        }}
      >
        ${content}
      </ag-dialog>
    </div>
  `;
};

// Bottom drawer
export const Bottom: Story = {
  args: {
    position: 'bottom',
    heading: 'Bottom Drawer',
    description: 'This drawer slides from the bottom',
  },
  render: (args) => createDrawerStory(args, html`
    <p>Content of the bottom drawer.</p>
  `),
};

// Start drawer (left side)
export const Start: Story = {
  args: {
    position: 'start',
    heading: 'Start Drawer',
    showCloseButton: true,
  },
  render: (args) => createDrawerStory(args, html`
    <p>This drawer slides in from the left (start) side.</p>
    <p>Commonly used for navigation menus.</p>
  `),
};

// End drawer (right side)
export const End: Story = {
  args: {
    position: 'end',
    heading: 'End Drawer',
    showCloseButton: true,
  },
  render: (args) => createDrawerStory(args, html`
    <p>This drawer slides in from the right (end) side.</p>
    <p>Commonly used for settings or filters.</p>
  `),
};

// Top drawer
export const Top: Story = {
  args: {
    position: 'top',
    heading: 'Top Drawer',
    showCloseButton: true,
  },
  render: (args) => createDrawerStory(args, html`
    <p>This drawer slides down from the top.</p>
    <p>Useful for notifications or alerts.</p>
  `),
};

// Navigation menu drawer
export const NavigationMenu: Story = {
  args: {
    position: 'start',
    heading: 'Navigation',
  },
  render: (args) => html`
    <div>
      <ag-button
        @click=${(e: Event) => {
          const button = e.target as HTMLElement;
          const drawer = button.parentElement?.querySelector('ag-dialog') as any;
          if (drawer) {
            drawer.open = true;
          }
        }}
      >
        ☰ Menu
      </ag-button>
      <ag-dialog
        .drawerPosition=${args.position}
        .heading=${args.heading}
        @dialog-close=${(e: Event) => {
          const drawer = e.target as any;
          drawer.open = false;
        }}
      >
        <nav>
          <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 1rem;">
              <a href="#home" @click=${(e: Event) => {
                e.preventDefault();
                const link = e.target as HTMLElement;
                const drawer = link.closest('ag-dialog') as any;
                if (drawer) drawer.open = false;
              }}>Home</a>
            </li>
            <li style="margin-bottom: 1rem;">
              <a href="#products" @click=${(e: Event) => {
                e.preventDefault();
                const link = e.target as HTMLElement;
                const drawer = link.closest('ag-dialog') as any;
                if (drawer) drawer.open = false;
              }}>Products</a>
            </li>
            <li style="margin-bottom: 1rem;">
              <a href="#about" @click=${(e: Event) => {
                e.preventDefault();
                const link = e.target as HTMLElement;
                const drawer = link.closest('ag-dialog') as any;
                if (drawer) drawer.open = false;
              }}>About</a>
            </li>
            <li style="margin-bottom: 1rem;">
              <a href="#contact" @click=${(e: Event) => {
                e.preventDefault();
                const link = e.target as HTMLElement;
                const drawer = link.closest('ag-dialog') as any;
                if (drawer) drawer.open = false;
              }}>Contact</a>
            </li>
          </ul>
        </nav>
      </ag-dialog>
    </div>
  `,
};

// Filter panel drawer
export const FilterPanel: Story = {
  args: {
    position: 'end',
    heading: 'Filter Results',
    showCloseButton: true,
  },
  render: (args) => html`
    <div>
      <ag-button
        @click=${(e: Event) => {
          const button = e.target as HTMLElement;
          const drawer = button.parentElement?.querySelector('ag-dialog') as any;
          if (drawer) {
            drawer.open = true;
          }
        }}
      >
        🔍 Filters
      </ag-button>
      <ag-dialog
        .drawerPosition=${args.position}
        .heading=${args.heading}
        .showCloseButton=${args.showCloseButton}
        @dialog-close=${(e: Event) => {
          const drawer = e.target as any;
          drawer.open = false;
        }}
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
            <button @click=${(e: Event) => {
              const button = e.target as HTMLElement;
              const drawer = button.closest('ag-dialog') as any;
              if (drawer) drawer.open = false;
            }}>Clear</button>
            <button @click=${(e: Event) => {
              const button = e.target as HTMLElement;
              const drawer = button.closest('ag-dialog') as any;
              if (drawer) drawer.open = false;
            }} style="font-weight: bold;">
              Apply Filters
            </button>
          </div>
        </div>
      </ag-dialog>
    </div>
  `,
};

// Event testing
export const EventTesting: Story = {
  args: {
    position: 'end',
    heading: 'Event Testing Drawer',
    showCloseButton: true,
  },
  render: () => html`
    <div style="padding: 20px;">
      <div style="margin-bottom: 1rem;">
        <p>Close events will be logged to the Actions panel</p>
      </div>
      <ag-button
        @click=${(e: Event) => {
          const button = e.target as HTMLElement;
          const drawer = button.parentElement?.querySelector('ag-dialog') as any;
          if (drawer) {
            drawer.open = true;
          }
        }}
      >
        Open Drawer
      </ag-button>
      <ag-dialog
        .drawerPosition=${'end'}
        .heading=${'Event Testing Drawer'}
        .showCloseButton=${true}
        @dialog-open=${() => console.log('Drawer opened')}
        @dialog-close=${(e: Event) => {
          const drawer = e.target as any;
          drawer.open = false;
          console.log('Drawer closed');
        }}
        @dialog-cancel=${(e: Event) => {
          const drawer = e.target as any;
          drawer.open = false;
          console.log('Drawer canceled');
        }}
      >
        <p>Try different ways to close the drawer:</p>
        <ul>
          <li>Close button</li>
          <li>ESC key</li>
          <li>Backdrop click</li>
        </ul>
      </ag-dialog>
      <p style="font-size: 0.875rem; color: #6b7280; margin-top: 1rem;">
        Check the Actions panel below for event logs
      </p>
    </div>
  `,
};

// With radio buttons (tests arrow key navigation in focus trap)
export const WithRadioButtons: Story = {
  args: {
    position: 'end',
    heading: 'Radio Button Demo',
    showCloseButton: true,
  },
  render: (args) => createDrawerStory(args, html`
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
  `),
};

// Focus trapping
export const FocusTrapping: Story = {
  args: {
    position: 'end',
    heading: 'Focus Trapping Demo',
    showCloseButton: true,
  },
  render: (args) => createDrawerStory(args, html`
    <div style="padding: 1rem 0;">
      <p>Press Tab to move focus to the next element. Press Shift+Tab to move to the previous element.</p>
      <p>Focus should be trapped within the drawer and cycle through all focusable elements.</p>
      <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 1rem;">
        <button>Button 1</button>
        <a href="#test" @click=${(e: Event) => e.preventDefault()}>Link 1</a>
        <input type="text" placeholder="Input 1" />
        <button>Button 2</button>
        <input type="text" placeholder="Input 2" />
        <button>Button 3</button>
      </div>
    </div>
  `),
};

// No close on escape
export const NoCloseOnEscape: Story = {
  args: {
    position: 'bottom',
    heading: 'No Close on Escape',
    description: 'This drawer cannot be closed with the Escape key.',
    noCloseOnEscape: true,
    showCloseButton: true,
  },
  render: (args) => createDrawerStory(args, html`
    <p>Press Escape to try closing the drawer. It won't work. Use the close button instead.</p>
  `),
};

// No close on backdrop
export const NoCloseOnBackdrop: Story = {
  args: {
    position: 'bottom',
    heading: 'No Close on Backdrop',
    description: 'This drawer cannot be closed by clicking the backdrop.',
    noCloseOnBackdrop: true,
    showCloseButton: true,
  },
  render: (args) => createDrawerStory(args, html`
    <p>Click the backdrop. The drawer won't close. Use the close button instead.</p>
  `),
};

// All positions comparison
export const AllPositions: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; padding: 50px; flex-wrap: wrap;">
      <div>
        <ag-button
          @click=${(e: Event) => {
            const button = e.target as HTMLElement;
            const container = button.parentElement;
            const drawer = container?.querySelector('#drawer-start') as any;
            if (drawer) drawer.open = true;
          }}
        >
          Open Start
        </ag-button>
        <ag-dialog
          id="drawer-start"
          .drawerPosition=${'start'}
          .heading=${'Start Drawer'}
          .showCloseButton=${true}
          @dialog-close=${(e: Event) => {
            const drawer = e.target as any;
            drawer.open = false;
          }}
        >
          <p>Slides from left</p>
        </ag-dialog>
      </div>

      <div>
        <ag-button
          @click=${(e: Event) => {
            const button = e.target as HTMLElement;
            const container = button.parentElement;
            const drawer = container?.querySelector('#drawer-end') as any;
            if (drawer) drawer.open = true;
          }}
        >
          Open End
        </ag-button>
        <ag-dialog
          id="drawer-end"
          .drawerPosition=${'end'}
          .heading=${'End Drawer'}
          .showCloseButton=${true}
          @dialog-close=${(e: Event) => {
            const drawer = e.target as any;
            drawer.open = false;
          }}
        >
          <p>Slides from right</p>
        </ag-dialog>
      </div>

      <div>
        <ag-button
          @click=${(e: Event) => {
            const button = e.target as HTMLElement;
            const container = button.parentElement;
            const drawer = container?.querySelector('#drawer-top') as any;
            if (drawer) drawer.open = true;
          }}
        >
          Open Top
        </ag-button>
        <ag-dialog
          id="drawer-top"
          .drawerPosition=${'top'}
          .heading=${'Top Drawer'}
          .showCloseButton=${true}
          @dialog-close=${(e: Event) => {
            const drawer = e.target as any;
            drawer.open = false;
          }}
        >
          <p>Slides from top</p>
        </ag-dialog>
      </div>

      <div>
        <ag-button
          @click=${(e: Event) => {
            const button = e.target as HTMLElement;
            const container = button.parentElement;
            const drawer = container?.querySelector('#drawer-bottom') as any;
            if (drawer) drawer.open = true;
          }}
        >
          Open Bottom
        </ag-button>
        <ag-dialog
          id="drawer-bottom"
          .drawerPosition=${'bottom'}
          .heading=${'Bottom Drawer'}
          .showCloseButton=${true}
          @dialog-close=${(e: Event) => {
            const drawer = e.target as any;
            drawer.open = false;
          }}
        >
          <p>Slides from bottom</p>
        </ag-dialog>
      </div>
    </div>
  `,
};

// Shopping cart drawer
export const ShoppingCart: Story = {
  args: {
    position: 'end',
    heading: 'Shopping Cart',
    showCloseButton: true,
  },
  render: (args) => html`
    <div>
      <ag-button
        @click=${(e: Event) => {
          const button = e.target as HTMLElement;
          const drawer = button.parentElement?.querySelector('ag-dialog') as any;
          if (drawer) {
            drawer.open = true;
          }
        }}
      >
        🛒 Cart (2)
      </ag-button>
      <ag-dialog
        .drawerPosition=${args.position}
        .heading=${args.heading}
        .showCloseButton=${args.showCloseButton}
        @dialog-close=${(e: Event) => {
          const drawer = e.target as any;
          drawer.open = false;
        }}
      >
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="border-bottom: 1px solid #e5e7eb; padding-bottom: 1rem;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
              <span>Product 1</span>
              <span>$29.99</span>
            </div>
            <div style="font-size: 0.875rem; color: #6b7280;">Quantity: 1</div>
          </div>
          <div style="border-bottom: 1px solid #e5e7eb; padding-bottom: 1rem;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
              <span>Product 2</span>
              <span>$49.99</span>
            </div>
            <div style="font-size: 0.875rem; color: #6b7280;">Quantity: 1</div>
          </div>
          <div style="display: flex; justify-content: space-between; font-weight: bold; margin-top: 1rem;">
            <span>Total:</span>
            <span>$79.98</span>
          </div>
          <ag-button
            @click=${(e: Event) => {
              const button = e.target as HTMLElement;
              const drawer = button.closest('ag-dialog') as any;
              if (drawer) drawer.open = false;
              alert('Proceeding to checkout...');
            }}
            style="margin-top: 1rem;"
          >
            Checkout
          </ag-button>
        </div>
      </ag-dialog>
    </div>
  `,
};
