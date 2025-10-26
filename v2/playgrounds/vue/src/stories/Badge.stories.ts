import type { Meta, StoryObj } from '@storybook/vue3';
import { VueBadge, type VueBadgeProps } from 'agnosticui-core/badge/vue';
import VueButton from "agnosticui-core/button/vue";
import { VueIcon } from 'agnosticui-core/icon/vue';

const meta = {
  title: 'AgnosticUI Vue/Badge',
  component: VueBadge,
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
} satisfies Meta<typeof VueBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { },
  render: (args: VueBadgeProps) => ({
    components: { VueBadge },
    setup() {
      return { args };
    },
    template: `
      <VueBadge v-bind="args">
        Default Badge
      </VueBadge>
    `,
  }),
};

export const CountBadge: Story = {
  render: () => ({
    components: { VueBadge },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <VueBadge variant="success">1</VueBadge>
        <VueBadge variant="danger">99+</VueBadge>
        <VueBadge variant="info">23</VueBadge>
      </div>
    `,
  }),
};

export const DotBadge: Story = {
  args: { dot: true },
  render: (args: VueBadgeProps) => ({
    components: { VueBadge },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <VueBadge :dot="args.dot"></VueBadge>
        <VueBadge :dot="args.dot" variant="info"></VueBadge>
        <VueBadge :dot="args.dot" variant="success"></VueBadge>
        <VueBadge :dot="args.dot" variant="warning"></VueBadge>
        <VueBadge :dot="args.dot" variant="danger"></VueBadge>
      </div>
    `,
  }),
};

export const StatusBadge: Story = {
  render: () => ({
    components: { VueBadge },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <VueBadge dot variant="success" />
          Online
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <VueBadge dot variant="warning" />
          Away
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <VueBadge dot variant="danger" />
          Busy
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <VueBadge dot variant="info" />
          Connecting
        </div>
      </div>
    `,
  }),
};

export const BadgeOnButton: Story = {
  render: () => ({
    components: { VueBadge, VueButton },
    template: `
      <VueButton>
        Notifications
        <VueBadge variant="danger" style="margin-left: 0.5rem;">99+</VueBadge>
      </VueButton>
    `,
  }),
};

export const BadgeOnIcon: Story = {
  render: () => {
    const bellSvg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
      </svg>
    `;
    const template = `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <div style="position: relative; display: inline-block;">
          <VueIcon size="16">
            ${bellSvg}
          </VueIcon>
          <VueBadge
            variant="danger"
            size="xs"
            style="position: absolute; top: -4px; right: -3px;"
          >
            3
          </VueBadge>
        </div>
        <div style="position: relative; display: inline-block;">
          <VueIcon size="20">
            ${bellSvg}
          </VueIcon>
          <VueBadge
            variant="danger"
            size="sm"
            style="position: absolute; top: -4px; right: -4px;"
          >
            3
          </VueBadge>
        </div>
        <div style="position: relative; display: inline-block;">
          <VueIcon size="24">
            ${bellSvg}
          </VueIcon>
          <VueBadge
            variant="danger"
            size="md"
            style="position: absolute; top: -5px; right: -6px;"
          >
            3
          </VueBadge>
        </div>
      </div>
    `;
    return {
      components: { VueBadge, VueIcon },
      template,
    };
  },
};

export const CSSPartsCustomization: Story = {
  render: () => ({
    components: { VueBadge },
    setup() {
      const styles = `
        <style>
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
        </style>
      `;
      return { styles };
    },
    template: `
      <div>
        <div v-html="styles"></div>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; padding: 1rem;">
          <VueBadge class="custom-gradient-badge">Gradient Badge</VueBadge>
          <VueBadge class="custom-outline-badge">Outline Badge</VueBadge>
          <VueBadge class="custom-minimal-badge">Minimal Badge</VueBadge>
        </div>
      </div>
    `,
  }),
};
