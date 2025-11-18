import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { fn } from "storybook/test";
import "agnosticui-core/image";

// Define props interface for Image
interface ImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
  fit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  position?: string;
  loading?: "lazy" | "eager";
  fade?: boolean;
  duration?: number;
  fallbackSrc?: string;
  onAgLoad?: (e: Event) => void;
  onAgError?: (e: Event) => void;
}

const meta: Meta<ImageProps> = {
  title: "AgnosticUI Lit/Image",
  component: "ag-image",
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: "text",
      description: "Image source URL",
    },
    alt: {
      control: "text",
      description: "Alternative text for accessibility (required)",
    },
    width: {
      control: "number",
      description: "Intrinsic width in pixels",
    },
    height: {
      control: "number",
      description: "Intrinsic height in pixels",
    },
    aspectRatio: {
      control: "text",
      description: "Aspect ratio (e.g., '16/9')",
    },
    fit: {
      control: "select",
      options: ["cover", "contain", "fill", "none", "scale-down"],
      description: "CSS object-fit value",
    },
    position: {
      control: "text",
      description: "CSS object-position value",
    },
    loading: {
      control: "select",
      options: ["lazy", "eager"],
      description: "Native browser lazy loading",
    },
    fade: {
      control: "boolean",
      description: "Enable fade transition on load",
    },
    duration: {
      control: "number",
      description: "Fade transition duration in milliseconds",
    },
    fallbackSrc: {
      control: "text",
      description: "Backup image source if primary fails",
    },
  },
  args: {
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&h=600",
    alt: "Beautiful landscape",
    width: 800,
    height: 600,
    fit: "cover",
    position: "center",
    loading: "lazy",
    fade: false,
    duration: 200,
    onAgLoad: fn(),
    onAgError: fn(),
  },
  parameters: {
    actions: {
      handles: ["ag-load", "ag-error"],
    },
  },
};

export default meta;

type Story = StoryObj<ImageProps>;

// Default story with controls
export const Default: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&h=600",
    alt: "Beautiful landscape",
    width: 800,
    height: 600,
  },
  render: ({
    src,
    alt,
    width,
    height,
    aspectRatio,
    fit,
    position,
    loading,
    fade,
    duration,
    fallbackSrc,
    onAgLoad,
    onAgError,
  }) => html`
    <ag-image
      .src=${src}
      .alt=${alt}
      .width=${width}
      .height=${height}
      .aspectRatio=${aspectRatio}
      .fit=${fit}
      .position=${position}
      .loading=${loading}
      .fade=${fade}
      .duration=${duration}
      .fallbackSrc=${fallbackSrc}
      @ag-load=${onAgLoad}
      @ag-error=${onAgError}
    ></ag-image>
  `,
};

// With Fade Transition
export const WithFade: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600",
    alt: "Mountain landscape",
    width: 800,
    height: 600,
    fade: true,
    duration: 500,
  },
  render: ({ src, alt, width, height, fade, duration }) => html`
    <ag-image
      .src=${src}
      .alt=${alt}
      .width=${width}
      .height=${height}
      .fade=${fade}
      .duration=${duration}
    ></ag-image>
  `,
};

// With Explicit Aspect Ratio
export const WithAspectRatio: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=800",
    alt: "Nature landscape",
    aspectRatio: "16/9",
    fit: "cover",
  },
  render: ({ src, alt, aspectRatio, fit }) => html`
    <ag-image
      .src=${src}
      .alt=${alt}
      .aspectRatio=${aspectRatio}
      .fit=${fit}
      style="width: 100%; max-width: 800px;"
    ></ag-image>
  `,
};

// Object Fit: Contain
export const FitContain: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600",
    alt: "Forest landscape",
    width: 800,
    height: 600,
    fit: "contain",
  },
  render: ({ src, alt, width, height, fit }) => html`
    <div style="background: var(--ag-background-secondary); padding: 20px;">
      <ag-image
        .src=${src}
        .alt=${alt}
        .width=${width}
        .height=${height}
        .fit=${fit}
      ></ag-image>
    </div>
  `,
};

// Object Position
export const CustomPosition: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600",
    alt: "Coastal landscape",
    width: 800,
    height: 400,
    fit: "cover",
    position: "top",
  },
  render: ({ src, alt, width, height, fit, position }) => html`
    <ag-image
      .src=${src}
      .alt=${alt}
      .width=${width}
      .height=${height}
      .fit=${fit}
      .position=${position}
    ></ag-image>
  `,
};

// With Fallback
export const WithFallback: Story = {
  args: {
    src: "https://invalid-url.example.com/image.jpg",
    alt: "Image with fallback",
    fallbackSrc: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600",
    width: 800,
    height: 600,
    fade: true,
  },
  render: ({ src, alt, fallbackSrc, width, height, fade }) => html`
    <ag-image
      .src=${src}
      .alt=${alt}
      .fallbackSrc=${fallbackSrc}
      .width=${width}
      .height=${height}
      .fade=${fade}
    ></ag-image>
  `,
};

// Custom Placeholder
export const CustomPlaceholder: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600",
    alt: "Nature scene",
    width: 800,
    height: 600,
    fade: true,
  },
  render: ({ src, alt, width, height, fade }) => html`
    <ag-image
      .src=${src}
      .alt=${alt}
      .width=${width}
      .height=${height}
      .fade=${fade}
    >
      <div slot="placeholder" style="display: flex; align-items: center; justify-content: center; height: 100%; background: var(--ag-background-secondary); color: var(--ag-text-muted);">
        <div style="text-align: center;">
          <div style="font-size: 48px; margin-bottom: 8px;">📷</div>
          <div>Loading image...</div>
        </div>
      </div>
    </ag-image>
  `,
};

// Custom Error
// Custom Error
export const CustomError: Story = {
  args: {
    src: "https://invalid-url.example.com/image.jpg",
    alt: "Broken image",
    width: 800,
    height: 600,
  },
  render: ({ src, alt, width, height }) => html`
    <ag-image
      .src=${src}
      .alt=${alt}
      .width=${width}
      .height=${height}
    >
      <div slot="error" style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 600px; background: var(--ag-danger-background); color: var(--ag-danger-text); padding: 20px;">
        <div style="font-size: 48px; margin-bottom: 8px;">⚠️</div>
        <div>Image failed to load</div>
        <div style="font-size: 14px; margin-top: 4px; opacity: 0.8;">Please try again later</div>
      </div>
    </ag-image>
  `,
};

// Eager Loading
export const EagerLoading: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600",
    alt: "Hero image",
    width: 800,
    height: 600,
    loading: "eager",
    fade: true,
  },
  render: ({ src, alt, width, height, loading, fade }) => html`
    <ag-image
      .src=${src}
      .alt=${alt}
      .width=${width}
      .height=${height}
      .loading=${loading}
      .fade=${fade}
    ></ag-image>
  `,
};

// Responsive with Picture Sources
export const ResponsiveWithSources: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=300",
    alt: "Responsive landscape",
    aspectRatio: "16/9",
    fade: true,
  },
  render: ({ src, alt, aspectRatio, fade }) => html`
    <ag-image
      .src=${src}
      .alt=${alt}
      .aspectRatio=${aspectRatio}
      .fade=${fade}
      .sources=${[
        {
          srcset: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1200&h=675",
          media: "(min-width: 1024px)",
        },
        {
          srcset: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&h=450",
          media: "(min-width: 768px)",
        },
      ]}
      style="width: 100%; max-width: 1200px;"
    ></ag-image>
  `,
};

// All Object Fit Values
export const AllObjectFitValues: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
      <div>
        <h4>Cover (default)</h4>
        <ag-image
          .src=${"https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=300"}
          .alt=${"Cover fit"}
          .width=${400}
          .height=${300}
          .fit=${"cover"}
        ></ag-image>
      </div>
      <div>
        <h4>Contain</h4>
        <div style="background: var(--ag-background-secondary);">
          <ag-image
            .src=${"https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=300"}
            .alt=${"Contain fit"}
            .width=${400}
            .height=${300}
            .fit=${"contain"}
          ></ag-image>
        </div>
      </div>
      <div>
        <h4>Fill</h4>
        <ag-image
          .src=${"https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=300"}
          .alt=${"Fill fit"}
          .width=${400}
          .height=${300}
          .fit=${"fill"}
        ></ag-image>
      </div>
      <div>
        <h4>None</h4>
        <div style="background: var(--ag-background-secondary);">
          <ag-image
            .src=${"https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=300"}
            .alt=${"None fit"}
            .width=${400}
            .height=${300}
            .fit=${"none"}
          ></ag-image>
        </div>
      </div>
      <div>
        <h4>Scale-down</h4>
        <div style="background: var(--ag-background-secondary);">
          <ag-image
            .src=${"https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=300"}
            .alt=${"Scale-down fit"}
            .width=${400}
            .height=${300}
            .fit=${"scale-down"}
          ></ag-image>
        </div>
      </div>
    </div>
  `,
};
