import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { fn } from "storybook/test";
import "agnosticui-core/rating";
import type { AgRating, RatingChangeEvent, RatingHoverEvent } from "agnosticui-core/rating";

// Extend AgRating with event handler props for Storybook
interface RatingProps extends AgRating {
  onRatingChange?: (event: RatingChangeEvent) => void;
  onRatingHover?: (event: RatingHoverEvent) => void;
}

const meta: Meta<RatingProps> = {
  title: "AgnosticUI Lit/Rating",
  component: "ag-rating",
  tags: ["autodocs"],
  argTypes: {
    value: { control: "number", description: "Current rating value" },
    max: { control: "number", description: "Total number of stars" },
    precision: {
      control: "select",
      options: ["whole", "half"],
      description: "Precision mode: whole or half stars",
    },
    readonly: { control: "boolean", description: "Disables interaction" },
    allowClear: { control: "boolean", description: "Allows clearing rating" },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the rating component",
    },
    variant: {
      control: "select",
      options: ["", "primary", "secondary", "success", "warning", "danger"],
      description: "Visual variant that applies a color scheme.",
    },
  },
  args: {
    value: 3,
    max: 5,
    precision: "whole",
    readonly: false,
    allowClear: false,
    size: "md",
    variant: "",
    onRatingChange: fn(),
    onRatingHover: fn(),
  },
  parameters: {
    actions: {
      handles: ["rating-change", "rating-hover"],
    },
  },
};

export default meta;

type Story = StoryObj<RatingProps>;

export const Default: Story = {
  render: (args) => html`
    <ag-rating
      .value=${args.value}
      .max=${args.max}
      .precision=${args.precision}
      .readonly=${args.readonly}
      .allowClear=${args.allowClear}
      .size=${args.size}
      .variant=${args.variant}
      @rating-change=${args.onRatingChange}
      @rating-hover=${args.onRatingHover}
    ></ag-rating>
  `,
};

export const HalfPrecision: Story = {
  args: {
    value: 2.5,
    precision: "half",
  },
  render: (args) => html`
    <ag-rating
      .value=${args.value}
      .max=${args.max}
      .precision=${args.precision}
      .readonly=${args.readonly}
      .allowClear=${args.allowClear}
      .size=${args.size}
      .variant=${args.variant}
      @rating-change=${args.onRatingChange}
      @rating-hover=${args.onRatingHover}
    ></ag-rating>
  `,
};

export const Readonly: Story = {
  args: {
    value: 4,
    readonly: true,
  },
  render: (args) => html`
    <ag-rating
      .value=${args.value}
      .max=${args.max}
      .precision=${args.precision}
      .readonly=${args.readonly}
      .allowClear=${args.allowClear}
      .size=${args.size}
      .variant=${args.variant}
      @rating-change=${args.onRatingChange}
      @rating-hover=${args.onRatingHover}
    ></ag-rating>
  `,
};

export const AllowClear: Story = {
  args: {
    value: 3,
    allowClear: true,
  },
  render: (args) => html`
    <ag-rating
      .value=${args.value}
      .max=${args.max}
      .precision=${args.precision}
      .readonly=${args.readonly}
      .allowClear=${args.allowClear}
      .size=${args.size}
      .variant=${args.variant}
      @rating-change=${args.onRatingChange}
      @rating-hover=${args.onRatingHover}
    ></ag-rating>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
      <ag-rating size="sm" .value=${3}></ag-rating>
      <ag-rating size="md" .value=${3}></ag-rating>
      <ag-rating size="lg" .value=${3}></ag-rating>
    </div>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
      <ag-rating variant="primary" .value=${3}></ag-rating>
      <ag-rating variant="secondary" .value=${3}></ag-rating>
      <ag-rating variant="success" .value=${3}></ag-rating>
      <ag-rating variant="warning" .value=${3}></ag-rating>
      <ag-rating variant="danger" .value=${3}></ag-rating>
    </div>
  `,
};

export const EventHandling: Story = {
  render: (args) => {
    let currentValue = args.value;
    let currentHoverValue = 0;
    let lastEventMessage = '';

    const updateDisplay = () => {
      const displayDiv = document.getElementById('event-display');
      if (displayDiv) {
        displayDiv.innerHTML = `
          <p>Current Value: ${currentValue}</p>
          <p>Hover Value: ${currentHoverValue}</p>
          <p>Last Event: ${lastEventMessage}</p>
        `;
      }
    };

    return html`
      <div>
        <ag-rating
          .value=${currentValue}
          .max=${args.max}
          .precision=${args.precision}
          .readonly=${args.readonly}
          .allowClear=${args.allowClear}
          .size=${args.size}
          .variant=${args.variant}
          @rating-change=${(e: RatingChangeEvent) => {
            currentValue = e.detail.newValue;
            lastEventMessage = `rating-change: oldValue=${e.detail.oldValue}, newValue=${e.detail.newValue}`;
            args.onRatingChange?.(e); // Call Storybook action
            updateDisplay();
          }}
          @rating-hover=${(e: RatingHoverEvent) => {
            currentHoverValue = e.detail.value;
            lastEventMessage = `rating-hover: phase=${e.detail.phase}, value=${e.detail.value}`;
            args.onRatingHover?.(e); // Call Storybook action
            updateDisplay();
          }}
        ></ag-rating>
        <div id="event-display" style="margin-top: 1rem;">
          <p>Current Value: ${currentValue}</p>
          <p>Hover Value: ${currentHoverValue}</p>
          <p>Last Event: ${lastEventMessage}</p>
        </div>
      </div>
    `;
  },
};
