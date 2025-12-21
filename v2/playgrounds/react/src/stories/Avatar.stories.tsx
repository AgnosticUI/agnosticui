import type { Meta, StoryObj } from '@storybook/react';
import { ReactAvatar, ReactAvatarGroup, type ReactAvatarProps } from 'agnosticui-core/avatar/react';

const meta: Meta<ReactAvatarProps> = {
  title: 'AgnosticUI React/Avatar',
  component: ReactAvatar,
  argTypes: {
    text: { control: 'text', description: 'Text content (initials)' },
    imgSrc: { control: 'text', description: 'Image source URL' },
    imgAlt: { control: 'text', description: 'Image alt text' },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Avatar size',
    },
    shape: {
      control: 'select',
      options: ['circle', 'square', 'rounded'],
      description: 'Avatar shape',
    },
    variant: {
      control: 'select',
      options: ['default', 'info', 'warning', 'success', 'error', 'transparent'],
      description: 'Color variant',
    },
    ariaLabel: { control: 'text', description: 'ARIA label' },
  },
  args: {
    text: '',
    imgSrc: '',
    imgAlt: '',
    size: 'md',
    shape: 'circle',
    variant: 'default',
    ariaLabel: '',
  },
} satisfies Meta<ReactAvatarProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'AB',
  },
  render: (args: ReactAvatarProps) => <ReactAvatar {...args} />,
};

export const TextInitials: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <ReactAvatar text="AB" />
      <ReactAvatar text="CD" />
      <ReactAvatar text="EF" />
      <ReactAvatar text="GH" />
    </div>
  ),
};

export const WithImage: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <ReactAvatar imgSrc="https://i.pravatar.cc/150?img=1" imgAlt="User 1" />
      <ReactAvatar imgSrc="https://i.pravatar.cc/150?img=2" imgAlt="User 2" />
      <ReactAvatar imgSrc="https://i.pravatar.cc/150?img=3" imgAlt="User 3" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <ReactAvatar text="XS" size="xs" />
      <ReactAvatar text="SM" size="sm" />
      <ReactAvatar text="MD" size="md" />
      <ReactAvatar text="LG" size="lg" />
      <ReactAvatar text="XL" size="xl" />
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <ReactAvatar text="AB" shape="circle" />
      <ReactAvatar text="CD" shape="square" />
      <ReactAvatar text="EF" shape="rounded" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <ReactAvatar text="DF" variant="default" />
      <ReactAvatar text="IN" variant="info" />
      <ReactAvatar text="WN" variant="warning" />
      <ReactAvatar text="SC" variant="success" />
      <ReactAvatar text="ER" variant="error" />
    </div>
  ),
};

export const TransparentVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', background: '#f0f0f0', padding: '2rem' }}>
      <ReactAvatar imgSrc="https://i.pravatar.cc/150?img=5" imgAlt="Transparent avatar" variant="transparent" />
      <ReactAvatar text="TR" variant="transparent" />
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <ReactAvatar>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
          />
        </svg>
      </ReactAvatar>
      <ReactAvatar size="lg">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
          />
        </svg>
      </ReactAvatar>
    </div>
  ),
};

const AvatarGroupStyles = `
  ag-avatar-group ag-avatar::part(ag-avatar) {
    border: 2px solid white;
  }
`;

export const AvatarGroup: Story = {
  render: () => {
    return (
      <>
        <style>{AvatarGroupStyles}</style>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Text Avatars</h4>
            <ReactAvatarGroup>
              <ReactAvatar text="AB" variant="info" size="lg" />
              <ReactAvatar text="CD" variant="info" size="lg" />
              <ReactAvatar text="EF" variant="info" size="lg" />
              <ReactAvatar text="GH" variant="info" size="lg" />
            </ReactAvatarGroup>
          </div>

          <div>
            <h4 style={{ marginBottom: '1rem' }}>Mixed Content</h4>
            <ReactAvatarGroup>
              <ReactAvatar text="AB" variant="info" size="lg" />
              <ReactAvatar text="RL" variant="info" size="lg" />
              <ReactAvatar size="lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
                  />
                </svg>
              </ReactAvatar>
              <ReactAvatar imgSrc="https://i.pravatar.cc/150?img=10" imgAlt="User 1" size="lg" />
              <ReactAvatar imgSrc="https://i.pravatar.cc/150?img=11" imgAlt="User 2" size="lg" />
            </ReactAvatarGroup>
          </div>

          <div>
            <h4 style={{ marginBottom: '1rem' }}>Images</h4>
            <ReactAvatarGroup>
              <ReactAvatar imgSrc="https://i.pravatar.cc/150?img=1" imgAlt="User 1" size="lg" />
              <ReactAvatar imgSrc="https://i.pravatar.cc/150?img=2" imgAlt="User 2" size="lg" />
              <ReactAvatar imgSrc="https://i.pravatar.cc/150?img=3" imgAlt="User 3" size="lg" />
              <ReactAvatar imgSrc="https://i.pravatar.cc/150?img=4" imgAlt="User 4" size="lg" />
              <ReactAvatar imgSrc="https://i.pravatar.cc/150?img=5" imgAlt="User 5" size="lg" />
            </ReactAvatarGroup>
          </div>

          <div>
            <h4 style={{ marginBottom: '1rem' }}>Different Sizes</h4>
            <ReactAvatarGroup>
              <ReactAvatar text="SM" size="sm" />
              <ReactAvatar text="SM" size="sm" />
              <ReactAvatar text="SM" size="sm" />
            </ReactAvatarGroup>
            <br />
            <ReactAvatarGroup>
              <ReactAvatar text="MD" size="md" />
              <ReactAvatar text="MD" size="md" />
              <ReactAvatar text="MD" size="md" />
            </ReactAvatarGroup>
            <br />
            <ReactAvatarGroup>
              <ReactAvatar text="XL" size="xl" />
              <ReactAvatar text="XL" size="xl" />
              <ReactAvatar text="XL" size="xl" />
            </ReactAvatarGroup>
          </div>

          <div>
            <h4 style={{ marginBottom: '1rem' }}>With Variants</h4>
            <ReactAvatarGroup>
              <ReactAvatar text="DF" variant="default" size="lg" />
              <ReactAvatar text="IN" variant="info" size="lg" />
              <ReactAvatar text="WN" variant="warning" size="lg" />
              <ReactAvatar text="SC" variant="success" size="lg" />
              <ReactAvatar text="ER" variant="error" size="lg" />
            </ReactAvatarGroup>
          </div>
        </div>
      </>
    );
  },
};

const CustomGroupStyles = `
  ag-avatar-group ag-avatar::part(ag-avatar) {
    border: 2px solid white;
  }

  .custom-avatar-group::part(ag-avatar-group) {
    gap: 0.5rem;
  }

  .custom-avatar-group ag-avatar::part(ag-avatar) {
    border: 3px solid #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .custom-avatar-group ag-avatar:not(:first-child) {
    margin-inline-start: 0;
  }

  .stacked-group ag-avatar::part(ag-avatar) {
    border: 3px solid #10b981;
  }

  .stacked-group ag-avatar {
    transition: all 0.3s ease;
  }

  .stacked-group ag-avatar:hover {
    transform: translateY(-8px) scale(1.1);
    z-index: 100 !important;
  }
`;

export const AvatarGroupCustomStyling: Story = {
  render: () => {
    return (
      <>
        <style>{CustomGroupStyles}</style>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Custom Spacing (No Overlap)</h4>
            <ReactAvatarGroup className="custom-avatar-group">
              <ReactAvatar imgSrc="https://i.pravatar.cc/150?img=20" imgAlt="User 1" size="lg" />
              <ReactAvatar imgSrc="https://i.pravatar.cc/150?img=21" imgAlt="User 2" size="lg" />
              <ReactAvatar imgSrc="https://i.pravatar.cc/150?img=22" imgAlt="User 3" size="lg" />
              <ReactAvatar imgSrc="https://i.pravatar.cc/150?img=23" imgAlt="User 4" size="lg" />
            </ReactAvatarGroup>
          </div>

          <div>
            <h4 style={{ marginBottom: '1rem' }}>Enhanced Hover Effects</h4>
            <ReactAvatarGroup className="stacked-group">
              <ReactAvatar text="AB" variant="info" size="lg" />
              <ReactAvatar text="CD" variant="success" size="lg" />
              <ReactAvatar text="EF" variant="warning" size="lg" />
              <ReactAvatar text="GH" variant="error" size="lg" />
            </ReactAvatarGroup>
          </div>
        </div>
      </>
    );
  },
};

export const CustomizedWithCSSParts: Story = {
  args: {
    text: 'CP',
  },
  render: (args: ReactAvatarProps) => (
    <>
      <style>{`
        .custom-avatar::part(ag-avatar) {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: 3px solid #fff;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
          font-weight: 700;
        }

        .custom-avatar-image::part(ag-avatar) {
          border: 4px solid #10b981;
          box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.2);
        }

        .custom-avatar-text::part(ag-avatar-text) {
          font-family: 'Courier New', monospace;
          letter-spacing: 2px;
        }
      `}</style>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', padding: '2rem' }}>
        <ReactAvatar className="custom-avatar" text={args.text} />
        <ReactAvatar
          className="custom-avatar-image"
          imgSrc="https://i.pravatar.cc/150?img=8"
          imgAlt="Custom styled"
        />
        <ReactAvatar className="custom-avatar custom-avatar-text" text="TX" size="lg" />
      </div>
    </>
  ),
};
