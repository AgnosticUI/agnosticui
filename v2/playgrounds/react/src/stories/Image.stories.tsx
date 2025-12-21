import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { ReactImage, type ReactImageProps } from "agnosticui-core/image/react";

const meta: Meta<ReactImageProps> = {
  title: "AgnosticUI React/Image",
  component: ReactImage,
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
};

export default meta;

type Story = StoryObj<ReactImageProps>;

// Default story with controls
export const Default: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&h=600",
    alt: "Beautiful landscape",
    width: 800,
    height: 600,
  },
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
};

// With Explicit Aspect Ratio
export const WithAspectRatio: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=800",
    alt: "Nature landscape",
    aspectRatio: "16/9",
    fit: "cover",
  },
  render: (args) => (
    <div style={{ width: "100%", maxWidth: "800px" }}>
      <ReactImage {...args} />
    </div>
  ),
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
  render: (args) => (
    <div
      style={{ background: "var(--ag-background-secondary)", padding: "20px" }}
    >
      <ReactImage {...args} />
    </div>
  ),
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
};

// With Fallback
export const WithFallback: Story = {
  args: {
    src: "https://invalid-url.example.com/image.jpg",
    alt: "Image with fallback",
    fallbackSrc:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600",
    width: 800,
    height: 600,
    fade: true,
  },
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
  render: (args) => (
    <ReactImage {...args}>
      <div
        slot="placeholder"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          background: "var(--ag-background-secondary)",
          color: "var(--ag-text-muted)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "48px", marginBottom: "8px" }}>📷</div>
          <div>Loading image...</div>
        </div>
      </div>
    </ReactImage>
  ),
};

// Custom Error
export const CustomError: Story = {
  args: {
    src: "https://invalid-url.example.com/image.jpg",
    alt: "Broken image",
    width: 800,
    height: 600,
  },
  render: (args) => (
    <ReactImage {...args}>
      <div
        slot="error"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "600px",
          background: "var(--ag-danger-background)",
          color: "var(--ag-danger-text)",
          padding: "20px",
        }}
      >
        <div style={{ fontSize: "48px", marginBottom: "8px" }}>⚠️</div>
        <div>Image failed to load</div>
        <div style={{ fontSize: "14px", marginTop: "4px", opacity: 0.8 }}>
          Please try again later
        </div>
      </div>
    </ReactImage>
  ),
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
};

// Responsive with Picture Sources
export const ResponsiveWithSources: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=300",
    alt: "Responsive landscape",
    aspectRatio: "16/9",
    fade: true,
    sources: [
      {
        srcset:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1200&h=675",
        media: "(min-width: 1024px)",
      },
      {
        srcset:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&h=450",
        media: "(min-width: 768px)",
      },
    ],
  },
  render: ({ src, alt, aspectRatio, fade, sources }) => (
    <ReactImage
      src={src}
      alt={alt}
      aspectRatio={aspectRatio}
      fade={fade}
      sources={sources}
      style={{
        width: "100%",
        maxWidth: "1200px",
      }}
    />
  ),
};

// All Object Fit Values
export const AllObjectFitValues: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
      }}
    >
      <div>
        <h4>Cover (default)</h4>
        <ReactImage
          src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=300"
          alt="Cover fit"
          width={400}
          height={300}
          fit="cover"
        />
      </div>
      <div>
        <h4>Contain</h4>
        <div style={{ background: "var(--ag-background-secondary)" }}>
          <ReactImage
            src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=300"
            alt="Contain fit"
            width={400}
            height={300}
            fit="contain"
          />
        </div>
      </div>
      <div>
        <h4>Fill</h4>
        <ReactImage
          src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=300"
          alt="Fill fit"
          width={400}
          height={300}
          fit="fill"
        />
      </div>
      <div>
        <h4>None</h4>
        <div style={{ background: "var(--ag-background-secondary)" }}>
          <ReactImage
            src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=300"
            alt="None fit"
            width={400}
            height={300}
            fit="none"
          />
        </div>
      </div>
      <div>
        <h4>Scale-down</h4>
        <div style={{ background: "var(--ag-background-secondary)" }}>
          <ReactImage
            src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=300"
            alt="Scale-down fit"
            width={400}
            height={300}
            fit="scale-down"
          />
        </div>
      </div>
    </div>
  ),
};
