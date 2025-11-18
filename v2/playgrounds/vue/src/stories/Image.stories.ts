import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { action } from 'storybook/actions';
import VueImage from 'agnosticui-core/image/vue';
import type { VueImageProps } from 'agnosticui-core/image/vue';

const meta = {
  title: 'AgnosticUI Vue/Image',
  component: VueImage,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source URL',
    },
    alt: {
      control: 'text',
      description: 'Alternative text for accessibility (required)',
    },
    width: {
      control: 'number',
      description: 'Intrinsic width in pixels',
    },
    height: {
      control: 'number',
      description: 'Intrinsic height in pixels',
    },
    aspectRatio: {
      control: 'text',
      description: "Aspect ratio (e.g., '16/9')",
    },
    fit: {
      control: 'select',
      options: ['cover', 'contain', 'fill', 'none', 'scale-down'],
      description: 'CSS object-fit value',
    },
    position: {
      control: 'text',
      description: 'CSS object-position value',
    },
    loading: {
      control: 'select',
      options: ['lazy', 'eager'],
      description: 'Native browser lazy loading',
    },
    fade: {
      control: 'boolean',
      description: 'Enable fade transition on load',
    },
    duration: {
      control: 'number',
      description: 'Fade transition duration in milliseconds',
    },
    fallbackSrc: {
      control: 'text',
      description: 'Backup image source if primary fails',
    },
  },
  args: {
    src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&h=600',
    alt: 'Beautiful landscape',
    width: 800,
    height: 600,
    fit: 'cover',
    position: 'center',
    loading: 'lazy',
    fade: false,
    duration: 200,
  },
} satisfies Meta<typeof VueImage>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story with controls
export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&h=600',
    alt: 'Beautiful landscape',
    width: 800,
    height: 600,
  },
  render: (args: VueImageProps) => ({
    components: { VueImage },
    setup() {
      return { args };
    },
    template: `
      <VueImage v-bind="args" />
    `,
  }),
};

// With Fade Transition
export const WithFade: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600',
    alt: 'Mountain landscape',
    width: 800,
    height: 600,
    fade: true,
    duration: 500,
  },
  render: (args: VueImageProps) => ({
    components: { VueImage },
    setup() {
      return { args };
    },
    template: `
      <VueImage v-bind="args" />
    `,
  }),
};

// With Explicit Aspect Ratio
export const WithAspectRatio: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=800',
    alt: 'Nature landscape',
    aspectRatio: '16/9',
    fit: 'cover',
  },
  render: (args: VueImageProps) => ({
    components: { VueImage },
    setup() {
      return { args };
    },
    template: `
      <div style="width: 100%; max-width: 800px;">
        <VueImage v-bind="args" />
      </div>
    `,
  }),
};

// Object Fit: Contain
export const FitContain: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600',
    alt: 'Forest landscape',
    width: 800,
    height: 600,
    fit: 'contain',
  },
  render: (args: VueImageProps) => ({
    components: { VueImage },
    setup() {
      return { args };
    },
    template: `
      <div style="background: var(--ag-background-secondary); padding: 20px;">
        <VueImage v-bind="args" />
      </div>
    `,
  }),
};

// Object Position
export const CustomPosition: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600',
    alt: 'Coastal landscape',
    width: 800,
    height: 400,
    fit: 'cover',
    position: 'top',
  },
  render: (args: VueImageProps) => ({
    components: { VueImage },
    setup() {
      return { args };
    },
    template: `
      <VueImage v-bind="args" />
    `,
  }),
};

// With Fallback
export const WithFallback: Story = {
  args: {
    src: 'https://invalid-url.example.com/image.jpg',
    alt: 'Image with fallback',
    fallbackSrc: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600',
    width: 800,
    height: 600,
    fade: true,
  },
  render: (args: VueImageProps) => ({
    components: { VueImage },
    setup() {
      return { args };
    },
    template: `
      <VueImage v-bind="args" />
    `,
  }),
};

// Custom Placeholder
export const CustomPlaceholder: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600',
    alt: 'Nature scene',
    width: 800,
    height: 600,
    fade: true,
  },
  render: (args: VueImageProps) => ({
    components: { VueImage },
    setup() {
      return { args };
    },
    template: `
      <VueImage v-bind="args">
        <template #placeholder>
          <div style="display: flex; align-items: center; justify-content: center; height: 100%; background: var(--ag-background-secondary); color: var(--ag-text-muted);">
            <div style="text-align: center;">
              <div style="font-size: 48px; margin-bottom: 8px;">📷</div>
              <div>Loading image...</div>
            </div>
          </div>
        </template>
      </VueImage>
    `,
  }),
};

// Custom Error
export const CustomError: Story = {
  args: {
    src: 'https://invalid-url.example.com/image.jpg',
    alt: 'Broken image',
    width: 800,
    height: 600,
  },
  render: (args: VueImageProps) => ({
    components: { VueImage },
    setup() {
      return { args };
    },
    template: `
      <VueImage v-bind="args">
        <template #error>
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 600px; background: var(--ag-danger-background); color: var(--ag-danger-text); padding: 20px;">
            <div style="font-size: 48px; margin-bottom: 8px;">⚠️</div>
            <div>Image failed to load</div>
            <div style="font-size: 14px; margin-top: 4px; opacity: 0.8;">Please try again later</div>
          </div>
        </template>
      </VueImage>
    `,
  }),
};

// Eager Loading
export const EagerLoading: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600',
    alt: 'Hero image',
    width: 800,
    height: 600,
    loading: 'eager',
    fade: true,
  },
  render: (args: VueImageProps) => ({
    components: { VueImage },
    setup() {
      return { args };
    },
    template: `
      <VueImage v-bind="args" />
    `,
  }),
};

// Responsive with Picture Sources
export const ResponsiveWithSources: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=300',
    alt: 'Responsive landscape',
    aspectRatio: '16/9',
    fade: true,
    sources: [
      {
        srcset: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1200&h=675',
        media: '(min-width: 1024px)',
      },
      {
        srcset: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&h=450',
        media: '(min-width: 768px)',
      },
    ],
  },
  render: (args: VueImageProps) => ({
    components: { VueImage },
    setup() {
      const { src, alt, aspectRatio, fade, sources } = args;
      return { src, alt, aspectRatio, fade, sources };
    },
    template: `
      <VueImage
        :src="src"
        :alt="alt"
        :aspect-ratio="aspectRatio"
        :fade="fade"
        :sources="sources"
        style="width: 100%; max-width: 1200px; --ag-image-fit: cover; --ag-image-position: center; aspect-ratio: 16 / 9;"
      />
    `,
  }),
};

// All Object Fit Values
export const AllObjectFitValues: Story = {
  render: () => ({
    components: { VueImage },
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
        <div>
          <h4>Cover (default)</h4>
          <VueImage
            src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=300"
            alt="Cover fit"
            :width="400"
            :height="300"
            fit="cover"
          />
        </div>
        <div>
          <h4>Contain</h4>
          <div style="background: var(--ag-background-secondary);">
            <VueImage
              src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=300"
              alt="Contain fit"
              :width="400"
              :height="300"
              fit="contain"
            />
          </div>
        </div>
        <div>
          <h4>Fill</h4>
          <VueImage
            src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=300"
            alt="Fill fit"
            :width="400"
            :height="300"
            fit="fill"
          />
        </div>
        <div>
          <h4>None</h4>
          <div style="background: var(--ag-background-secondary);">
            <VueImage
              src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=300"
              alt="None fit"
              :width="400"
              :height="300"
              fit="none"
            />
          </div>
        </div>
        <div>
          <h4>Scale-down</h4>
          <div style="background: var(--ag-background-secondary);">
            <VueImage
              src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=300"
              alt="Scale-down fit"
              :width="400"
              :height="300"
              fit="scale-down"
            />
          </div>
        </div>
      </div>
    `,
  }),
};

// Vue Event Handlers
export const VueEventHandlers: Story = {
  render: (args: VueImageProps) => ({
    components: { VueImage },
    setup() {
      return {
        args,
        onAgLoad: action('ag-load'),
        onAgError: action('ag-error'),
      };
    },
    template: `
      <div style="padding: 50px;">
        <p style="margin-bottom: 1rem;">
          <strong>Vue Event Handlers:</strong>
          <br />
          This demonstrates Vue event handlers using the @event syntax.
          <br />
          Image component emits: @ag-load, @ag-error
          <br />
          Events are logged to the Actions panel below.
        </p>
        <VueImage
          v-bind="args"
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&h=600"
          alt="Interactive image"
          :width="800"
          :height="600"
          :fade="true"
          @ag-load="onAgLoad"
          @ag-error="onAgError"
        />
      </div>
    `,
  }),
};

// CSS Parts Customization
export const CSSPartsCustomization: Story = {
  render: (args: VueImageProps) => ({
    components: { VueImage },
    setup() {
      const styles = `
        <style>
          .custom-image::part(ag-img) {
            border: 4px solid #0550ae;
            border-radius: 16px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          }
          .custom-image::part(ag-placeholder) {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }
          .custom-image::part(ag-error) {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            color: white;
            font-weight: bold;
          }
        </style>
      `;
      return { args, styles };
    },
    template: `
      <div>
        <div v-html="styles"></div>
        <p style="margin-bottom: 1rem;">
          This example demonstrates CSS Parts customization using ::part() selectors.
          The image has custom borders and shadows applied.
        </p>
        <VueImage
          v-bind="args"
          class="custom-image"
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&h=600"
          alt="Custom styled image"
          :width="800"
          :height="600"
          :fade="true"
        />
      </div>
    `,
  }),
};
