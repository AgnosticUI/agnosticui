import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { VueAvatar, VueAvatarGroup } from '../../../../lib/src/components/Avatar/vue';

const meta = {
  title: 'AgnosticUI Vue/Avatar',
  component: VueAvatar,
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
} satisfies Meta<typeof VueAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'AB',
  },
  render: (args) => ({
    components: { VueAvatar },
    setup() {
      return { args };
    },
    template: `<VueAvatar v-bind="args" />`,
  }),
};

export const TextInitials: Story = {
  render: () => ({
    components: { VueAvatar },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <VueAvatar text="AB" />
        <VueAvatar text="CD" />
        <VueAvatar text="EF" />
        <VueAvatar text="GH" />
      </div>
    `,
  }),
};

export const WithImage: Story = {
  render: () => ({
    components: { VueAvatar },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <VueAvatar img-src="https://i.pravatar.cc/150?img=1" img-alt="User 1" />
        <VueAvatar img-src="https://i.pravatar.cc/150?img=2" img-alt="User 2" />
        <VueAvatar img-src="https://i.pravatar.cc/150?img=3" img-alt="User 3" />
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { VueAvatar },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <VueAvatar text="XS" size="xs" />
        <VueAvatar text="SM" size="sm" />
        <VueAvatar text="MD" size="md" />
        <VueAvatar text="LG" size="lg" />
        <VueAvatar text="XL" size="xl" />
      </div>
    `,
  }),
};

export const Shapes: Story = {
  render: () => ({
    components: { VueAvatar },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <VueAvatar text="AB" shape="circle" />
        <VueAvatar text="CD" shape="square" />
        <VueAvatar text="EF" shape="rounded" />
      </div>
    `,
  }),
};

export const Variants: Story = {
  render: () => ({
    components: { VueAvatar },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <VueAvatar text="DF" variant="default" />
        <VueAvatar text="IN" variant="info" />
        <VueAvatar text="WN" variant="warning" />
        <VueAvatar text="SC" variant="success" />
        <VueAvatar text="ER" variant="error" />
      </div>
    `,
  }),
};

export const TransparentVariant: Story = {
  render: () => ({
    components: { VueAvatar },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center; background: #f0f0f0; padding: 2rem;">
        <VueAvatar img-src="https://i.pravatar.cc/150?img=5" img-alt="Transparent avatar" variant="transparent" />
        <VueAvatar text="TR" variant="transparent" />
      </div>
    `,
  }),
};

export const WithIcon: Story = {
  render: () => ({
    components: { VueAvatar },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <VueAvatar>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z" />
          </svg>
        </VueAvatar>
        <VueAvatar size="lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z" />
          </svg>
        </VueAvatar>
      </div>
    `,
  }),
};

export const AvatarGroup: Story = {
  render: () => ({
    components: { VueAvatar, VueAvatarGroup },
    setup() {
      const styles = `
        <style>
          ag-avatar-group ag-avatar::part(ag-avatar) {
            border: 2px solid white;
          }
        </style>
      `;
      return { styles };
    },
    template: `
      <div>
        <div v-html="styles"></div>
        <div style="display: flex; flex-direction: column; gap: 2rem;">
          <div>
            <h4 style="margin-bottom: 1rem;">Text Avatars</h4>
            <VueAvatarGroup>
              <VueAvatar text="AB" variant="info" size="lg" />
              <VueAvatar text="CD" variant="info" size="lg" />
              <VueAvatar text="EF" variant="info" size="lg" />
              <VueAvatar text="GH" variant="info" size="lg" />
            </VueAvatarGroup>
          </div>

          <div>
            <h4 style="margin-bottom: 1rem;">Mixed Content</h4>
            <VueAvatarGroup>
              <VueAvatar text="AB" variant="info" size="lg" />
              <VueAvatar text="RL" variant="info" size="lg" />
              <VueAvatar size="lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z" />
                </svg>
              </VueAvatar>
              <VueAvatar img-src="https://i.pravatar.cc/150?img=10" img-alt="User 1" size="lg" />
              <VueAvatar img-src="https://i.pravatar.cc/150?img=11" img-alt="User 2" size="lg" />
            </VueAvatarGroup>
          </div>

          <div>
            <h4 style="margin-bottom: 1rem;">Images</h4>
            <VueAvatarGroup>
              <VueAvatar img-src="https://i.pravatar.cc/150?img=1" img-alt="User 1" size="lg" />
              <VueAvatar img-src="https://i.pravatar.cc/150?img=2" img-alt="User 2" size="lg" />
              <VueAvatar img-src="https://i.pravatar.cc/150?img=3" img-alt="User 3" size="lg" />
              <VueAvatar img-src="https://i.pravatar.cc/150?img=4" img-alt="User 4" size="lg" />
              <VueAvatar img-src="https://i.pravatar.cc/150?img=5" img-alt="User 5" size="lg" />
            </VueAvatarGroup>
          </div>

          <div>
            <h4 style="margin-bottom: 1rem;">Different Sizes</h4>
            <VueAvatarGroup>
              <VueAvatar text="SM" size="sm" />
              <VueAvatar text="SM" size="sm" />
              <VueAvatar text="SM" size="sm" />
            </VueAvatarGroup>
            <br />
            <VueAvatarGroup>
              <VueAvatar text="MD" size="md" />
              <VueAvatar text="MD" size="md" />
              <VueAvatar text="MD" size="md" />
            </VueAvatarGroup>
            <br />
            <VueAvatarGroup>
              <VueAvatar text="XL" size="xl" />
              <VueAvatar text="XL" size="xl" />
              <VueAvatar text="XL" size="xl" />
            </VueAvatarGroup>
          </div>

          <div>
            <h4 style="margin-bottom: 1rem;">With Variants</h4>
            <VueAvatarGroup>
              <VueAvatar text="DF" variant="default" size="lg" />
              <VueAvatar text="IN" variant="info" size="lg" />
              <VueAvatar text="WN" variant="warning" size="lg" />
              <VueAvatar text="SC" variant="success" size="lg" />
              <VueAvatar text="ER" variant="error" size="lg" />
            </VueAvatarGroup>
          </div>
        </div>
      </div>
    `,
  }),
};

export const AvatarGroupCustomStyling: Story = {
  render: () => ({
    components: { VueAvatar, VueAvatarGroup },
    setup() {
      const styles = `
        <style>
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
        </style>
      `;
      return { styles };
    },
    template: `
      <div>
        <div v-html="styles"></div>
        <div style="display: flex; flex-direction: column; gap: 2rem; padding: 2rem;">
          <div>
            <h4 style="margin-bottom: 1rem;">Custom Spacing (No Overlap)</h4>
            <VueAvatarGroup class="custom-avatar-group">
              <VueAvatar img-src="https://i.pravatar.cc/150?img=20" img-alt="User 1" size="lg" />
              <VueAvatar img-src="https://i.pravatar.cc/150?img=21" img-alt="User 2" size="lg" />
              <VueAvatar img-src="https://i.pravatar.cc/150?img=22" img-alt="User 3" size="lg" />
              <VueAvatar img-src="https://i.pravatar.cc/150?img=23" img-alt="User 4" size="lg" />
            </VueAvatarGroup>
          </div>

          <div>
            <h4 style="margin-bottom: 1rem;">Enhanced Hover Effects</h4>
            <VueAvatarGroup class="stacked-group">
              <VueAvatar text="AB" variant="info" size="lg" />
              <VueAvatar text="CD" variant="success" size="lg" />
              <VueAvatar text="EF" variant="warning" size="lg" />
              <VueAvatar text="GH" variant="error" size="lg" />
            </VueAvatarGroup>
          </div>
        </div>
      </div>
    `,
  }),
};

export const CustomizedWithCSSParts: Story = {
  args: {
    text: 'CP',
  },
  render: (args) => ({
    components: { VueAvatar },
    setup() {
      const styles = `
        <style>
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
        </style>
      `;
      return { args, styles };
    },
    template: `
      <div>
        <div v-html="styles"></div>
        <div style="display: flex; gap: 2rem; align-items: center; padding: 2rem;">
          <VueAvatar class="custom-avatar" :text="args.text" />
          <VueAvatar
            class="custom-avatar-image"
            img-src="https://i.pravatar.cc/150?img=8"
            img-alt="Custom styled"
          />
          <VueAvatar class="custom-avatar custom-avatar-text" text="TX" size="lg" />
        </div>
      </div>
    `,
  }),
};
