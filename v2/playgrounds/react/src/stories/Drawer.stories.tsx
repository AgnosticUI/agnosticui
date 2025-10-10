import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { fn } from 'storybook/test';
import { ReactDrawer, DrawerHeader, DrawerFooter, type ReactDrawerProps } from 'agnosticui-core/drawer/react';

const meta: Meta<ReactDrawerProps> = {
  title: 'AgnosticUI/Drawer',
  component: ReactDrawer,
  tags: ['autodocs'],
  argTypes: {
    // Component props
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

    // Event handlers
    onClose: {
      action: 'close',
      description: 'Emitted when drawer closes',
    },
  },
  args: {
    open: false,
    position: 'bottom',
    noCloseOnEscape: false,
    noCloseOnBackdrop: false,
    showCloseButton: false,
    onClose: fn(),
  },
} satisfies Meta<ReactDrawerProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bottom: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Open Bottom Drawer</button>
        <ReactDrawer
          open={isOpen}
          position="bottom"
          heading="Bottom Drawer"
          description="This drawer slides from the bottom"
          onClose={() => setIsOpen(false)}
        >
          <p>Content of the bottom drawer.</p>
        </ReactDrawer>
      </div>
    );
  },
};

export const Start: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Open Start Drawer</button>
        <ReactDrawer
          open={isOpen}
          position="start"
          heading="Start Drawer"
          showCloseButton={true}
          onClose={() => setIsOpen(false)}
        >
          <p>This drawer slides in from the left (start) side.</p>
          <p>Commonly used for navigation menus.</p>
        </ReactDrawer>
      </div>
    );
  },
};

export const End: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Open End Drawer</button>
        <ReactDrawer
          open={isOpen}
          position="end"
          heading="End Drawer"
          showCloseButton={true}
          onClose={() => setIsOpen(false)}
        >
          <p>This drawer slides in from the right (end) side.</p>
          <p>Commonly used for settings or filters.</p>
        </ReactDrawer>
      </div>
    );
  },
};

export const Top: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Open Top Drawer</button>
        <ReactDrawer
          open={isOpen}
          position="top"
          heading="Top Drawer"
          showCloseButton={true}
          onClose={() => setIsOpen(false)}
        >
          <p>This drawer slides down from the top.</p>
          <p>Useful for notifications or alerts.</p>
        </ReactDrawer>
      </div>
    );
  },
};

export const WithCustomSlots: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Open Drawer with Custom Content</button>
        <ReactDrawer
          open={isOpen}
          position="end"
          onClose={() => setIsOpen(false)}
        >
          <DrawerHeader>
            <h2 style={{ margin: 0 }}>Settings</h2>
          </DrawerHeader>
          <div style={{ padding: '1rem 0' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>
              <input type="checkbox" /> Enable notifications
            </label>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>
              <input type="checkbox" /> Dark mode
            </label>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>
              <input type="checkbox" /> Auto-save
            </label>
          </div>
          <DrawerFooter>
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
              <button onClick={() => setIsOpen(false)}>Cancel</button>
              <button onClick={() => setIsOpen(false)} style={{ fontWeight: 'bold' }}>
                Save
              </button>
            </div>
          </DrawerFooter>
        </ReactDrawer>
      </div>
    );
  },
};

export const NavigationMenu: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button onClick={() => setIsOpen(true)}>☰ Menu</button>
        <ReactDrawer
          open={isOpen}
          position="start"
          heading="Navigation"
          onClose={() => setIsOpen(false)}
        >
          <nav>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem' }}>
                <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <a href="#products" onClick={() => setIsOpen(false)}>Products</a>
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <a href="#about" onClick={() => setIsOpen(false)}>About</a>
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
              </li>
            </ul>
          </nav>
        </ReactDrawer>
      </div>
    );
  },
};

export const FilterPanel: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button onClick={() => setIsOpen(true)}>🔍 Filters</button>
        <ReactDrawer
          open={isOpen}
          position="end"
          heading="Filter Results"
          showCloseButton={true}
          onClose={() => setIsOpen(false)}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <h3 style={{ margin: '0 0 0.5rem 0' }}>Price Range</h3>
              <input type="range" min="0" max="1000" style={{ width: '100%' }} />
            </div>
            <div>
              <h3 style={{ margin: '0 0 0.5rem 0' }}>Category</h3>
              <select style={{ width: '100%' }}>
                <option>All Categories</option>
                <option>Electronics</option>
                <option>Clothing</option>
                <option>Books</option>
              </select>
            </div>
            <div>
              <h3 style={{ margin: '0 0 0.5rem 0' }}>Rating</h3>
              <label style={{ display: 'block' }}>
                <input type="checkbox" /> 5 stars
              </label>
              <label style={{ display: 'block' }}>
                <input type="checkbox" /> 4 stars & up
              </label>
              <label style={{ display: 'block' }}>
                <input type="checkbox" /> 3 stars & up
              </label>
            </div>
          </div>
          <DrawerFooter>
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
              <button onClick={() => setIsOpen(false)}>Clear</button>
              <button onClick={() => setIsOpen(false)} style={{ fontWeight: 'bold' }}>
                Apply Filters
              </button>
            </div>
          </DrawerFooter>
        </ReactDrawer>
      </div>
    );
  },
};

export const EventTesting: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [closeCount, setCloseCount] = useState(0);

    const handleClose = (event: any) => {
      setCloseCount(c => c + 1);
      setIsOpen(false);
    };

    return (
      <div style={{ padding: '20px' }}>
        <div style={{ marginBottom: '1rem' }}>
          <p>Close events: {closeCount}</p>
        </div>
        <button onClick={() => setIsOpen(true)}>Open Drawer</button>
        <ReactDrawer
          open={isOpen}
          position="end"
          heading="Event Testing Drawer"
          showCloseButton={true}
          onClose={handleClose}
        >
          <p>Try different ways to close the drawer:</p>
          <ul>
            <li>Close button</li>
            <li>ESC key</li>
            <li>Backdrop click</li>
          </ul>
        </ReactDrawer>
        <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '1rem' }}>
          Open the drawer and try different closing methods to see event counts
        </p>
      </div>
    );
  },
};
