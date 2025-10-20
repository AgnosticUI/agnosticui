import type { Meta, StoryObj } from '@storybook/react';
import { ReactCard } from 'agnosticui-core/card/react';
import type { ReactCardProps } from 'agnosticui-core/card/react';

const meta: Meta<typeof ReactCard> = {
  title: 'AgnosticUI React/Card',
  component: ReactCard,
  argTypes: {
    isSkinned: {
      control: 'boolean',
      description: 'Applies background color and border',
      defaultValue: true,
    },
    isStacked: {
      control: 'boolean',
      description: 'Applies vertical stacking with margin between slotted children',
      defaultValue: false,
    },
    isShadow: {
      control: 'boolean',
      description: 'Applies box-shadow with hover enhancement',
      defaultValue: false,
    },
    isAnimated: {
      control: 'boolean',
      description: 'Enables smooth transitions on hover (translateY + box-shadow)',
      defaultValue: false,
    },
    isRounded: {
      control: 'boolean',
      description: 'Applies border-radius',
      defaultValue: false,
    },
    variant: {
      control: 'select',
      options: ['', 'success', 'info', 'error', 'warning'],
      description: 'Color variant for semantic meaning',
      defaultValue: '',
    },
  },
  args: {
    isSkinned: true,
    isStacked: false,
    isShadow: false,
    isAnimated: false,
    isRounded: false,
    variant: '',
  } as ReactCardProps,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <ReactCard {...args}>
      <h3>Card Title</h3>
      <p>This is a basic card with default styling.</p>
    </ReactCard>
  ),
};

export const Unskinned: Story = {
  args: {
    isSkinned: false,
  },
  render: (args) => (
    <ReactCard {...args}>
      <h3>Unskinned Card</h3>
      <p>No background or border applied.</p>
    </ReactCard>
  ),
};

export const Shadow: Story = {
  args: {
    isShadow: true,
  },
  render: (args) => (
    <ReactCard {...args}>
      <h3 slot="header" style={{ margin: 0 }}>Product Details</h3>
      <p>Hover over this card to see the enhanced shadow effect.</p>
    </ReactCard>
  ),
};

export const Animated: Story = {
  args: {
    isAnimated: true,
    isShadow: true,
  },
  render: (args) => (
    <ReactCard {...args}>
      <h3>Animated Card</h3>
      <p>Hover over this card to see the smooth animation (translateY with shadow enhancement).</p>
      <button slot="footer" style={{ padding: '0.5rem 1rem' }}>View Details</button>
    </ReactCard>
  ),
};

export const Rounded: Story = {
  args: {
    isRounded: true,
  },
  render: (args) => (
    <ReactCard {...args}>
      <h3>Rounded Card</h3>
      <p>This card has rounded corners.</p>
    </ReactCard>
  ),
};

export const Stacked: Story = {
  args: {
    isStacked: true,
  },
  render: (args) => (
    <ReactCard {...args}>
      <h3>Stacked Content</h3>
      <p>First paragraph with automatic margin.</p>
      <p>Second paragraph with automatic margin.</p>
      <p>Third paragraph with automatic margin.</p>
    </ReactCard>
  ),
};

export const SuccessVariant: Story = {
  args: {
    variant: 'success',
  },
  render: (args) => (
    <ReactCard {...args}>
      <h3>Success</h3>
      <p>Operation completed successfully!</p>
    </ReactCard>
  ),
};

export const InfoVariant: Story = {
  args: {
    variant: 'info',
  },
  render: (args) => (
    <ReactCard {...args}>
      <h3 slot="header" style={{ margin: 0 }}>Information</h3>
      <p>Here's some helpful information for you.</p>
    </ReactCard>
  ),
};

export const ErrorVariant: Story = {
  args: {
    variant: 'error',
  },
  render: (args) => (
    <ReactCard {...args}>
      <h3>Error</h3>
      <p>Something went wrong. Please try again.</p>
    </ReactCard>
  ),
};

export const WarningVariant: Story = {
  args: {
    variant: 'warning',
  },
  render: (args) => (
    <ReactCard {...args}>
      <h3>Warning</h3>
      <p>Please review this information carefully before proceeding.</p>
      <div slot="footer" style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
        <button style={{ padding: '0.5rem 1rem' }}>Dismiss</button>
        <button style={{ padding: '0.5rem 1rem' }}>Acknowledge</button>
      </div>
    </ReactCard>
  ),
};

export const WithSlots: Story = {
  args: {
    isShadow: true,
  },
  render: (args) => (
    <ReactCard {...args}>
      <h3 slot="header" style={{ margin: 0 }}>Card Header</h3>

      <div>
        <h4>Main Content</h4>
        <p>This card demonstrates the header, default, and footer slots.</p>
      </div>

      <div slot="footer" style={{ display: 'flex', gap: '0.5rem' }}>
        <button style={{ padding: '0.5rem 1rem' }}>Cancel</button>
        <button style={{ padding: '0.5rem 1rem', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
          Confirm
        </button>
      </div>
    </ReactCard>
  ),
};

export const ClickableCard: Story = {
  args: {
    isShadow: true,
    isAnimated: true,
  },
  render: (args) => (
    <ReactCard {...args}>
      <h3 slot="header" style={{ margin: 0 }}>
        <a href="#" className="card-primary-action" style={{ textDecoration: 'none', color: 'inherit' }}>
          Clickable Card
        </a>
      </h3>
      <p>The entire card is clickable via the primary action link.</p>
      <p>You can still select this text without triggering navigation.</p>
    </ReactCard>
  ),
};

export const WithSecondaryActions: Story = {
  args: {
    isShadow: true,
    isAnimated: true,
  },
  render: (args) => (
    <ReactCard {...args}>
      <h3 slot="header" style={{ margin: 0 }}>
        <a href="#" className="card-primary-action" style={{ textDecoration: 'none', color: 'inherit' }}>
          Product Title
        </a>
      </h3>
      <p>This card has both a primary action (entire card) and secondary actions (buttons in footer).</p>
      <div slot="footer" style={{ display: 'flex', gap: '0.5rem' }}>
        <button
          className="card-secondary-action"
          style={{ padding: '0.5rem 1rem', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer' }}
          onClick={(e) => {
            e.preventDefault();
            alert('Details clicked');
          }}
        >
          Details
        </button>
        <button
          className="card-secondary-action"
          style={{ padding: '0.5rem 1rem', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          onClick={(e) => {
            e.preventDefault();
            alert('Add to Cart clicked');
          }}
        >
          Add to Cart
        </button>
      </div>
    </ReactCard>
  ),
};

export const CombinedFeatures: Story = {
  args: {
    isShadow: true,
    isAnimated: true,
    isRounded: true,
    variant: 'success',
  },
  render: (args) => (
    <ReactCard {...args}>
      <h3>Premium Card</h3>
      <p>This card combines multiple features: shadow, animation, rounded corners, and success variant.</p>
      <p>Hover to see the smooth animation effect!</p>
    </ReactCard>
  ),
};

export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
      <ReactCard isShadow isAnimated>
        <h4 slot="header" style={{ margin: 0 }}>Card 1</h4>
        <p>Standard card with header, shadow and animation.</p>
      </ReactCard>

      <ReactCard isShadow isAnimated variant="success">
        <h4>Card 2</h4>
        <p>Success variant with shadow and animation.</p>
      </ReactCard>

      <ReactCard isShadow isAnimated variant="info">
        <h4 slot="header" style={{ margin: 0 }}>Card 3</h4>
        <p>Info variant with header, shadow and animation.</p>
        <button slot="footer" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}>Learn More</button>
      </ReactCard>

      <ReactCard isShadow isAnimated variant="error">
        <h4>Card 4</h4>
        <p>Error variant with shadow and animation.</p>
      </ReactCard>

      <ReactCard isShadow isAnimated variant="warning">
        <h4 slot="header" style={{ margin: 0 }}>Card 5</h4>
        <p>Warning variant with header.</p>
      </ReactCard>

      <ReactCard isShadow isAnimated isRounded>
        <h4>Card 6</h4>
        <p>Rounded corners with shadow and animation.</p>
        <button slot="footer" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}>Action</button>
      </ReactCard>
    </div>
  ),
};

export const Customization: Story = {
  args: {
    isShadow: true,
  },
  render: (args) => (
    <>
      <style>{`
        .custom-card::part(ag-card-wrapper) {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 2rem;
        }
        .custom-card::part(ag-card-header) {
          border-bottom: 2px solid rgba(255, 255, 255, 0.3);
          padding-bottom: 1rem;
          margin-bottom: 1rem;
        }
        .custom-card::part(ag-card-content) {
          color: white;
          font-size: 1.1rem;
        }
        .custom-card::part(ag-card-footer) {
          border-top: 2px solid rgba(255, 255, 255, 0.3);
          padding-top: 1rem;
          margin-top: 1rem;
        }
      `}</style>
      <ReactCard {...args} className="custom-card">
        <div slot="header">
          <h3 style={{ margin: 0, color: 'white' }}>Customized with CSS Parts</h3>
        </div>

        <p>This card demonstrates CSS Shadow Parts customization.</p>
        <p>The wrapper, header, content, and footer are all styled using ::part() selectors.</p>

        <div slot="footer">
          <button style={{ padding: '0.5rem 1rem', background: 'white', color: '#667eea', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Learn More
          </button>
        </div>
      </ReactCard>
    </>
  ),
};
