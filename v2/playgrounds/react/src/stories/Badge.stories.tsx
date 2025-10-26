import type { Meta, StoryObj } from '@storybook/react';
import { ReactBadge, type ReactBadgeProps } from 'agnosticui-core/badge/react';
import { ReactButton } from 'agnosticui-core/button/react';
import { ReactIcon } from 'agnosticui-core/icon/react';

const meta: Meta<ReactBadgeProps> = {
  title: 'AgnosticUI React/Badge',
  component: ReactBadge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "info", "warning", "danger", "success", "neutral"],
      description: "The visual variant of the badge",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md"],
      description: "The size of the badge",
    },
    dot: {
      control: "boolean",
      description: "Render as a dot",
    }
  },
  args: {
    variant: "default",
    size: "md",
    dot: false,
  },
} satisfies Meta<ReactBadgeProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args: ReactBadgeProps) => (
    <ReactBadge {...args}>
      Default Badge
    </ReactBadge>
  ),
};

export const CountBadge: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <ReactBadge variant="success">1</ReactBadge>
      <ReactBadge variant="danger">99+</ReactBadge>
      <ReactBadge variant="info">23</ReactBadge>
    </div>
  ),
};

export const DotBadge: Story = {
  args: { dot: true },
  render: (args: ReactBadgeProps) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <ReactBadge {...args} />
      <ReactBadge {...args} variant="info" />
      <ReactBadge {...args} variant="success" />
      <ReactBadge {...args} variant="warning" />
      <ReactBadge {...args} variant="danger" />
    </div>
  ),
};

export const StatusBadge: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <ReactBadge dot variant="success" />
        Online
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <ReactBadge dot variant="warning" />
        Away
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <ReactBadge dot variant="danger" />
        Busy
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <ReactBadge dot variant="info" />
        Connecting
      </div>
    </div>
  ),
};

export const BadgeOnButton: Story = {
  render: () => (
    <>
      <div style={{ marginBlockEnd: 'var(--ag-space-4'}}>Inside Button</div>
      <ReactButton bordered variant='primary' shape='capsule' style={{ position: 'relative' }}>
        Inbox
        <ReactBadge variant="danger" size="sm">99+</ReactBadge>
      </ReactButton>
      <div style={{ marginBlockStart: 'var(--ag-space-6',  marginBlockEnd: 'var(--ag-space-4'}}>Absolutely Positioned</div>
      <ReactButton bordered variant='primary' shape='capsule' style={{ position: 'relative' }}>
        Inbox
        <ReactBadge variant="danger" size="sm" style={{ position: 'absolute', top: '-10px', right: '-13px' }}>99+</ReactBadge>
      </ReactButton>
    </>
  ),
};

export const BadgeOnIcon: Story = {
  render: () => {
    const bellSvg = (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
        <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
      </svg>
    );
    return (
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <ReactIcon size="16">{bellSvg}</ReactIcon>
          <ReactBadge
            variant="danger"
            size="xs"
            style={{ position: 'absolute', top: '-6px', right: '-7px' }}
          >
            3
          </ReactBadge>
        </div>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <ReactIcon size="20">{bellSvg}</ReactIcon>
          <ReactBadge
            variant="danger"
            size="sm"
            style={{ position: 'absolute', top: '-7px', right: '-9px' }}
          >
            3
          </ReactBadge>
        </div>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <ReactIcon size="24">{bellSvg}</ReactIcon>
          <ReactBadge
            variant="danger"
            size="md"
            style={{ position: 'absolute', top: '-7px', right: '-10px' }}
          >
            3
          </ReactBadge>
        </div>
      </div>
    );
  },
};

export const CSSPartsCustomization: Story = {
  render: () => (
    <>
      <style>{`
        .custom-gradient-badge::part(ag-badge) {
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
          color: white;
          font-weight: 600;
          padding: 0.5rem 1rem;
        }

        .custom-outline-badge::part(ag-badge) {
          background: transparent;
          color: #764ba2;
          border: 2px solid #764ba2;
        }

        .custom-minimal-badge::part(ag-badge) {
          background: var(--ag-background-subtle);
          color: var(--ag-text-secondary);
          border-radius: 6px;
          font-size: 0.85rem;
          padding: 0.25rem 0.75rem;
        }
      `}</style>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', padding: '1rem' }}>
        <ReactBadge className="custom-gradient-badge">Gradient Badge</ReactBadge>
        <ReactBadge className="custom-outline-badge">Outline Badge</ReactBadge>
        <ReactBadge className="custom-minimal-badge">Minimal Badge</ReactBadge>
      </div>
    </>
  ),
};
