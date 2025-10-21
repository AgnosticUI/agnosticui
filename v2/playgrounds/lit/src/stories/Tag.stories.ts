import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import 'agnosticui-core/tag';
import type { TagVariant, TagShape } from 'agnosticui-core/tag';

type TagStoryArgs = {
  variant: TagVariant;
  shape: TagShape;
  isUppercase: boolean;
};

const meta: Meta<TagStoryArgs> = {
  title: 'AgnosticUI Lit/Tag',
  component: 'ag-tag',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: "select",
      options: ["", "info", "warning", "error", "success"],
      description: "The visual variant of the tag",
    },
    shape: {
      control: "select",
      options: ["", "pill", "round", "circle"],
      description: "The shape of the tag",
    },
    isUppercase: {
      control: "boolean",
      description: "Whether to render the text in uppercase",
    },
  },
  args: {
    variant: "",
    shape: "",
    isUppercase: false,
  },
};

export default meta;
type Story = StoryObj<TagStoryArgs>;

export const Default: Story = {
  render: ({ variant, shape, isUppercase }) => html`
    <ag-tag .variant=${variant} .shape=${shape} .isUppercase=${isUppercase}>
      Default Tag
    </ag-tag>
  `,
};

export const Info: Story = {
  args: { variant: "info" },
  render: ({ variant }) => html`<ag-tag .variant=${variant}>Info Tag</ag-tag>`,
};

export const Success: Story = {
  args: { variant: "success" },
  render: ({ variant }) =>
    html`<ag-tag .variant=${variant}>Success Tag</ag-tag>`,
};

export const Warning: Story = {
  args: { variant: "warning" },
  render: ({ variant }) =>
    html`<ag-tag .variant=${variant}>Warning Tag</ag-tag>`,
};

export const Error: Story = {
  args: { variant: "error" },
  render: ({ variant }) => html`<ag-tag .variant=${variant}>Error Tag</ag-tag>`,
};

export const PillShape: Story = {
  args: { shape: "pill", variant: "primary" },
  render: ({ shape, variant }) =>
    html`<ag-tag .shape=${shape} .variant=${variant}>Pill Tag</ag-tag>`,
};

export const CircleShape: Story = {
  args: { shape: "circle", variant: "success" },
  render: ({ shape, variant }) =>
    html`<ag-tag .shape=${shape} .variant=${variant}>C</ag-tag>`,
};

export const Uppercase: Story = {
  args: { isUppercase: true, variant: "warning" },
  render: ({ isUppercase, variant }) =>
    html`<ag-tag .isUppercase=${isUppercase} .variant=${variant}>
      Uppercase Tag
    </ag-tag>`,
};

export const WithCloseSlotError: Story = {
  render: () => html`
    <ag-tag variant="error">
      Deletable
      <button slot="close" aria-label="close">✕</button>
    </ag-tag>
  `,
};
export const WithCloseSlotPrimary: Story = {
  render: () => html`
    <ag-tag variant="primary">
      Primary
      <button slot="close" aria-label="close">✕</button>
    </ag-tag>
  `,
};
export const WithCloseSlotSuccess: Story = {
  render: () => html`
    <ag-tag variant="success">
      Success
      <button slot="close" aria-label="close">✕</button>
    </ag-tag>
  `,
};
export const WithCloseSlotWarning: Story = {
  render: () => html`
    <ag-tag variant="warning">
      Warning
      <button slot="close" aria-label="close">✕</button>
    </ag-tag>
  `,
};

export const WithCloseSlotPrimaryPill: Story = {
  render: () => html`
    <ag-tag variant="primary" shape="pill">
      Primary Pill Tag
      <button slot="close" aria-label="close">✕</button>
    </ag-tag>
  `,
};

export const CSSPartsCustomization: Story = {
  render: () => html`
    <style>
      .custom-gradient-tag::part(ag-tag-wrapper) {
        background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
        color: white;
        font-weight: 600;
        padding: 0.5rem 1rem;
      }

      .custom-outline-tag::part(ag-tag-wrapper) {
        background: transparent;
        color: #764ba2;
        border: 2px solid #764ba2;
      }

      .custom-minimal-tag::part(ag-tag-wrapper) {
        background: var(--ag-background-subtle);
        color: var(--ag-text-secondary);
        border-radius: 6px;
        font-size: 0.85rem;
        padding: 0.25rem 0.75rem;
      }
    </style>

    <div style="display: flex; gap: 1rem; flex-wrap: wrap; padding: 1rem;">
      <ag-tag class="custom-gradient-tag">Gradient Tag</ag-tag>
      <ag-tag class="custom-outline-tag">Outline Tag</ag-tag>
      <ag-tag class="custom-minimal-tag">Minimal Tag</ag-tag>
    </div>
  `,
};
