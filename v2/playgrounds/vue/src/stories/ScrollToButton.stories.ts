import type { Meta, StoryObj } from "@storybook/vue3";
import { VueScrollToButton } from "agnosticui-core/scroll-to-button/vue";
import type { VueScrollToButtonProps } from "agnosticui-core/scroll-to-button/vue";

const meta: Meta<VueScrollToButtonProps> = {
  title: "AgnosticUI Vue/ScrollToButton",
  component: VueScrollToButton,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Accessible label for the button",
    },
    showLabel: {
      control: "boolean",
      description: "Show the label text alongside the icon",
    },
    icon: {
      control: "boolean",
      description: "Show/hide the default icon",
    },
    scrollThreshold: {
      control: "number",
      description: "Scroll threshold in pixels before showing the button",
    },
    target: {
      control: "text",
      description: 'Scroll target: "top", "bottom", or element ID',
    },
    direction: {
      control: "select",
      options: ["auto", "up", "down"],
      description: "Arrow direction (auto-detects by default)",
    },
    smoothScroll: {
      control: "boolean",
      description: "Enable smooth scrolling animation",
    },
    size: {
      control: "select",
      options: ["x-sm", "sm", "md", "lg", "xl"],
      description: "Button size",
    },
    shape: {
      control: "select",
      options: ["", "capsule", "rounded", "circle", "square", "rounded-square"],
      description: "Button shape",
    },
  },
  args: {
    label: "Back to Top",
    showLabel: false,
    icon: true,
    scrollThreshold: 400,
    target: "top",
    direction: "auto",
    smoothScroll: true,
    size: "md",
    shape: "",
  },
};

export default meta;
type Story = StoryObj<VueScrollToButtonProps>;

// Use Case 1: Scroll to Top (Default)
export const BackToTop: Story = {
  render: (args: VueScrollToButtonProps) => ({
    components: { VueScrollToButton },
    setup() {
      return { args };
    },
    template: `
      <div style="min-height: 200vh; padding: 20px;">
        <h1>Scroll to Top (Default Use Case)</h1>
        <p>The button will appear after scrolling {{ args.scrollThreshold }}px down the page.</p>
        <p>Click it to smoothly scroll back to the top.</p>
        <div style="padding: 20px; background: var(--ag-primary-background, #f0f9ff); border-radius: 8px; margin: 20px 0;">
          <strong>Try it:</strong> Scroll down this long page, then click the floating button to return to the top.
        </div>
        <p v-for="i in 30" :key="i" style="margin-bottom: 40px; line-height: 1.6;">
          Paragraph {{ i }}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <VueScrollToButton v-bind="args" />
      </div>
    `,
  }),
  args: {
    label: "Back to Top",
    target: "top",
    direction: "auto",
    scrollThreshold: 400,
  },
};

// Use Case 2: Scroll to Bottom
export const ScrollToBottom: Story = {
  render: (args: VueScrollToButtonProps) => ({
    components: { VueScrollToButton },
    setup() {
      return { args };
    },
    template: `
      <div style="min-height: 200vh; padding: 20px;">
        <h1>Scroll to Bottom</h1>
        <p>This button scrolls to the <strong>bottom</strong> of the page instead of the top.</p>
        <p>Useful for chat interfaces, comment sections, or "jump to end" functionality.</p>
        <div style="padding: 20px; background: var(--ag-success-background, #f0fdf4); border-radius: 8px; margin: 20px 0;">
          <strong>Try it:</strong> Scroll down a bit, then click the button to jump to the very bottom.
        </div>
        <p v-for="i in 30" :key="i" style="margin-bottom: 40px; line-height: 1.6;">
          Content section {{ i }}: This is placeholder content to make the page scrollable.
          In a real application, this might be chat messages, comments, or article content.
        </p>
        <div id="bottom-marker" style="padding: 30px; background: var(--ag-success-background, #f0fdf4); border: 2px solid var(--ag-success, #22c55e); border-radius: 8px; text-align: center;">
          <h2>🎯 Bottom of Page</h2>
          <p>You made it to the end!</p>
        </div>
        <VueScrollToButton v-bind="args" />
      </div>
    `,
  }),
  args: {
    label: "Go to Bottom",
    target: "bottom",
    direction: "auto",
    scrollThreshold: 200,
  },
};

// Use Case 3: Jump to Specific Section
export const JumpToSection: Story = {
  render: (args: VueScrollToButtonProps) => ({
    components: { VueScrollToButton },
    setup() {
      return { args };
    },
    template: `
      <div style="min-height: 200vh; padding: 20px;">
        <h1>Jump to Specific Section</h1>
        <p>Click the button to jump directly to <strong>Section 3</strong>.</p>
        <p>Useful for table of contents, "skip to main content", or section navigation.</p>
        
        <nav style="padding: 20px; background: var(--ag-info-background, #f3f4f6); border-radius: 8px; margin: 20px 0;">
          <strong>Page Sections:</strong>
          <ul style="margin: 10px 0; padding-left: 20px;">
            <li>Section 1 (you are here)</li>
            <li>Section 2 (scroll down)</li>
            <li><strong>Section 3 (button target)</strong></li>
            <li>Section 4 (further down)</li>
          </ul>
        </nav>

        <section id="section-1" style="margin: 60px 0; padding: 30px; background: white; border: 2px solid var(--ag-border, #e5e7eb); border-radius: 8px;">
          <h2>📄 Section 1</h2>
          <p>This is the first section of content.</p>
          <p v-for="i in 5" :key="i">Lorem ipsum dolor sit amet...</p>
        </section>

        <section id="section-2" style="margin: 60px 0; padding: 30px; background: white; border: 2px solid var(--ag-border, #e5e7eb); border-radius: 8px;">
          <h2>📄 Section 2</h2>
          <p>This is the second section of content.</p>
          <p v-for="i in 5" :key="i">Lorem ipsum dolor sit amet...</p>
        </section>

        <section id="section-3" style="margin: 60px 0; padding: 30px; background: var(--ag-warning-background, #fef3c7); border: 3px solid var(--ag-warning, #f59e0b); border-radius: 8px;">
          <h2>🎯 Section 3 - Target Section!</h2>
          <p><strong>The button scrolls here!</strong> This demonstrates jumping to a specific page section.</p>
          <p v-for="i in 5" :key="i">This is the target section content...</p>
        </section>

        <section id="section-4" style="margin: 60px 0; padding: 30px; background: white; border: 2px solid var(--ag-border, #e5e7eb); border-radius: 8px;">
          <h2>📄 Section 4</h2>
          <p>This is the fourth section of content.</p>
          <p v-for="i in 8" :key="i">Lorem ipsum dolor sit amet...</p>
        </section>

        <VueScrollToButton v-bind="args" />
      </div>
    `,
  }),
  args: {
    label: "Jump to Section 3",
    target: "section-3",
    direction: "auto",
    scrollThreshold: 300,
  },
};

// Custom Icon Example
export const CustomIcon: Story = {
  render: (args: VueScrollToButtonProps) => ({
    components: { VueScrollToButton },
    setup() {
      return { args };
    },
    template: `
      <div style="min-height: 200vh; padding: 20px;">
        <h1>Custom Icon Projection</h1>
        <p>This example shows how to provide your own custom icon via slot projection.</p>
        <p>The button uses a custom SVG icon instead of the default arrow.</p>
        <p v-for="i in 25" :key="i" style="margin-bottom: 40px; line-height: 1.6;">
          Paragraph {{ i }}: Scroll down to see the custom icon button appear.
        </p>
        <VueScrollToButton v-bind="args">
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="m16 12-4-4-4 4"/>
              <path d="M12 16V8"/>
            </svg>
          </template>
        </VueScrollToButton>
      </div>
    `,
  }),
  args: {
    label: "Back to Top",
    target: "top",
    scrollThreshold: 400,
  },
};

// Custom Icon - Emoji
export const CustomIconEmoji: Story = {
  render: (args: VueScrollToButtonProps) => ({
    components: { VueScrollToButton },
    setup() {
      return { args };
    },
    template: `
      <div style="min-height: 200vh; padding: 20px;">
        <h1>Custom Icon with Emoji</h1>
        <p>You can also use emojis or text as custom icons!</p>
        <p v-for="i in 25" :key="i" style="margin-bottom: 40px; line-height: 1.6;">
          Paragraph {{ i }}: Keep scrolling to see the emoji button.
        </p>
        <VueScrollToButton v-bind="args">
          <template #icon>
            <span style="font-size: 20px;">🚀</span>
          </template>
        </VueScrollToButton>
      </div>
    `,
  }),
  args: {
    label: "Blast Off to Top!",
    target: "top",
    scrollThreshold: 400,
  },
};

// No Icon (Text Only)
export const NoIcon: Story = {
  render: (args: VueScrollToButtonProps) => ({
    components: { VueScrollToButton },
    setup() {
      return { args };
    },
    template: `
      <div style="min-height: 200vh; padding: 20px;">
        <h1>No Icon (Disabled)</h1>
        <p>The button can be rendered without any icon by setting <code>:icon="false"</code>. In this case, the label will be rendered regardless to prevent an empty box from being displayed.</p>
        <p v-for="i in 25" :key="i" style="margin-bottom: 40px; line-height: 1.6;">
          Paragraph {{ i }}: The button will appear without an icon.
        </p>
        <VueScrollToButton v-bind="args" />
      </div>
    `,
  }),
  args: {
    label: "Top",
    icon: false,
    target: "top",
    scrollThreshold: 400,
  },
};

// Show Label with Icon
export const WithLabel: Story = {
  render: (args: VueScrollToButtonProps) => ({
    components: { VueScrollToButton },
    setup() {
      return { args };
    },
    template: `
      <div style="min-height: 200vh; padding: 20px;">
        <h1>Label Visible with Icon</h1>
        <p>The button can show both an icon and label text by setting <code>:showLabel="true"</code>.</p>
        <p>This creates a more descriptive button that's helpful for users who prefer explicit text labels.</p>
        <div style="padding: 20px; background: var(--ag-primary-background, #f0f9ff); border-radius: 8px; margin: 20px 0;">
          <strong>Try it:</strong> Scroll down to see the button with both icon and text label.
        </div>
        <p v-for="i in 25" :key="i" style="margin-bottom: 40px; line-height: 1.6;">
          Paragraph {{ i }}: Keep scrolling to see the labeled button appear.
        </p>
        <VueScrollToButton v-bind="args" />
      </div>
    `,
  }),
  args: {
    label: "Back to Top",
    showLabel: true,
    icon: true,
    target: "top",
    scrollThreshold: 400,
  },
};

// CSS Parts Customization
export const CSSPartsCustomization: Story = {
  render: (args: VueScrollToButtonProps) => ({
    components: { VueScrollToButton },
    setup() {
      return { args };
    },
    template: `
      <div>
        <style>
          /* Target the ag-button part that's exported from ag-scroll-to-button */
          ag-scroll-to-button.custom-gradient::part(ag-button) {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border: none;
            color: white;
            font-weight: bold;
            box-shadow: 0 8px 16px rgba(102, 126, 234, 0.4);
            transition: all 0.3s ease;
          }

          ag-scroll-to-button.custom-gradient::part(ag-button):hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 24px rgba(102, 126, 234, 0.6);
          }

          ag-scroll-to-button.custom-success::part(ag-button) {
            background-color: var(--ag-success, #22c55e);
            border: 2px solid var(--ag-success-dark, #16a34a);
            color: white;
            padding: var(--ag-space-4, 1rem);
            border-radius: var(--ag-radius-lg, 1rem);
          }

          ag-scroll-to-button.custom-danger::part(ag-button) {
            background-color: var(--ag-danger, #ef4444);
            border: 2px solid var(--ag-danger-dark, #dc2626);
            color: white;
            border-radius: var(--ag-radius-full, 9999px);
            min-width: 60px;
            min-height: 60px;
            box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);
          }
        </style>
        <div style="min-height: 300vh; padding: 20px;">
          <h1>CSS Shadow Parts Customization</h1>
          <p>Customize the button using CSS Shadow Parts without breaking encapsulation.</p>
          <p>Three different buttons are shown below with different custom styles.</p>

          <div style="padding: 20px; background: var(--ag-info-background, #f3f4f6); border-radius: 8px; margin: 20px 0;">
            <h3>Available CSS Parts:</h3>
            <ul style="margin: 10px 0; padding-left: 20px;">
              <li><code>::part(ag-scrollto-button)</code> - The scroll-to-button wrapper element</li>
              <li><code>::part(ag-button)</code> - The inner ag-button element (exported part)</li>
              <li><code>::part(ag-button-content)</code> - The flex container for icon and label</li>
              <li><code>::part(ag-icon-wrapper)</code> - The icon wrapper (control icon placement via flex order)</li>
              <li><code>::part(ag-label)</code> - The label text element</li>
            </ul>
            <p style="margin-top: 10px; font-size: 0.875rem; color: var(--ag-text-secondary);">
              The <code>ag-button</code> part is exported from the nested component, allowing full customization.
              Use <code>flex-direction</code> on <code>ag-button-content</code> to control icon/label layout (row, row-reverse, column, column-reverse).
            </p>
          </div>

          <section style="margin: 60px 0; padding: 30px; background: white; border: 2px solid var(--ag-border, #e5e7eb); border-radius: 8px;">
            <h2>🎨 Gradient Style (Purple)</h2>
            <p>A beautiful gradient button with hover effects. Scroll down to see it appear!</p>
            <p v-for="i in 10" :key="i">Content...</p>
          </section>

          <section style="margin: 60px 0; padding: 30px; background: white; border: 2px solid var(--ag-border, #e5e7eb); border-radius: 8px;">
            <h2>✅ Success Style (Green)</h2>
            <p>Using semantic color tokens for a success-themed button.</p>
            <p v-for="i in 10" :key="'success-' + i">Content...</p>
          </section>

          <section style="margin: 60px 0; padding: 30px; background: white; border: 2px solid var(--ag-border, #e5e7eb); border-radius: 8px;">
            <h2>⚠️ Danger Style (Red)</h2>
            <p>A larger, red-themed button with shadow effects.</p>
            <p v-for="i in 10" :key="'danger-' + i">Content...</p>
          </section>

          <section style="margin: 60px 0; padding: 30px; background: white; border: 2px solid var(--ag-border, #e5e7eb); border-radius: 8px;">
            <h2>🔄 Icon Positioning Examples</h2>
            <p>The buttons demonstrate flexible icon placement using CSS parts.</p>
            <ul style="margin: 10px 0; padding-left: 20px;">
              <li><strong>Icon on Right:</strong> Uses <code>flex-direction: row-reverse</code></li>
              <li><strong>Icon Above:</strong> Uses <code>flex-direction: column</code></li>
            </ul>
            <p v-for="i in 10" :key="'position-' + i">Content...</p>
          </section>

          <!-- Three buttons with different custom styles -->
          <VueScrollToButton
            class="custom-gradient"
            label="Gradient Back to Top"
            :scrollThreshold="300"
            target="top"
            style="bottom: 160px;"
          />

          <VueScrollToButton
            class="custom-success"
            label="Success Back to Top"
            :scrollThreshold="300"
            target="top"
            style="bottom: 100px;"
          />

          <VueScrollToButton
            class="custom-danger"
            label="Danger Back to Top"
            :scrollThreshold="300"
            target="top"
          />
        </div>
      </div>
    `,
  }),
};

// Icon Positioning Variations
export const IconPositioning: Story = {
  render: (args: VueScrollToButtonProps) => ({
    components: { VueScrollToButton },
    setup() {
      return { args };
    },
    template: `
      <div>
        <style>
          /* Icon on right */
          ag-scroll-to-button.pos-right::part(ag-button-content) {
            flex-direction: row-reverse;
          }

          /* Icon above label */
          ag-scroll-to-button.pos-above::part(ag-button-content) {
            flex-direction: column;
            padding: 0.75rem 1rem;
            min-width: auto;
          }

          ag-scroll-to-button.pos-above::part(ag-label) {
            font-size: 0.75rem;
            margin-top: 0.25rem;
          }

          /* Icon below label */
          ag-scroll-to-button.pos-below::part(ag-button-content) {
            flex-direction: column-reverse;
            padding: 0.75rem 1rem;
          }

          ag-scroll-to-button.pos-below::part(ag-label) {
            font-size: 0.75rem;
            margin-bottom: 0.25rem;
          }

          /* Icon in circle above label */
          ag-scroll-to-button.pos-circle::part(ag-button-content) {
            flex-direction: column;
            padding: 0.75rem 1rem;
            gap: 0.5rem;
          }

          ag-scroll-to-button.pos-circle::part(ag-icon-wrapper) {
            background: white;
            border-radius: 50%;
            padding: 0.5rem;
            width: 40px;
            height: 40px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          }

          ag-scroll-to-button.pos-circle::part(ag-label) {
            font-size: 0.75rem;
            font-weight: 600;
          }
        </style>
        <div style="min-height: 200vh; padding: 20px;">
          <h1>Icon & Label Positioning</h1>
          <p>This story demonstrates various icon and label layout options using CSS parts.</p>
          <p>All customization is done purely with CSS - no component modifications needed!</p>

          <div style="padding: 20px; background: var(--ag-info-background, #f3f4f6); border-radius: 8px; margin: 20px 0;">
            <h3>How it works:</h3>
            <p style="margin: 10px 0;">The button content uses CSS Flexbox internally. By targeting the <code>::part(ag-button-content)</code> selector, you can control:</p>
            <ul style="margin: 10px 0; padding-left: 20px; line-height: 1.8;">
              <li><code>flex-direction</code> - Controls icon/label order and orientation</li>
              <li><code>gap</code> - Spacing between icon and label</li>
              <li><code>padding</code> - Button internal spacing</li>
            </ul>
            <p style="margin-top: 10px;">You can also target <code>::part(ag-icon-wrapper)</code> and <code>::part(ag-label)</code> independently for granular styling.</p>
          </div>

          <section style="margin: 60px 0; padding: 30px; background: white; border: 2px solid var(--ag-border, #e5e7eb); border-radius: 8px;">
            <h2>📍 Examples Below</h2>
            <p>Scroll down to see 5 different button layouts:</p>
            <ol style="margin: 10px 0; padding-left: 20px; line-height: 1.8;">
              <li><strong>Default (Icon Left):</strong> Standard left-aligned icon with label</li>
              <li><strong>Icon Right:</strong> Label on left, icon on right</li>
              <li><strong>Icon Above:</strong> Icon stacked above label (vertical)</li>
              <li><strong>Icon Below:</strong> Label above icon (inverted vertical)</li>
              <li><strong>Icon in Circle Above:</strong> Circular icon container above label</li>
            </ol>
            <p v-for="i in 20" :key="i" style="margin-bottom: 40px; line-height: 1.6;">
              Paragraph {{ i }}: Scroll down to see all the button positioning variations.
            </p>
          </section>

          <!-- Default: Icon left -->
          <VueScrollToButton
            label="Default Layout"
            :showLabel="true"
            shape="rounded"
            :scrollThreshold="300"
            target="top"
            style="right: 20px; bottom: 215px;"
          />

          <!-- Icon right -->
          <VueScrollToButton
            class="pos-right"
            label="Icon Right"
            :showLabel="true"
            shape="rounded"
            :scrollThreshold="300"
            target="top"
            style="right: 20px; bottom: 155px;"
          />

          <!-- Icon above -->
          <VueScrollToButton
            class="pos-above"
            label="Icon Above"
            shape="rounded"
            :showLabel="true"
            :scrollThreshold="300"
            target="top"
            style="right: 280px; bottom: 20px;"
          />

          <!-- Icon below -->
          <VueScrollToButton
            class="pos-below"
            label="Icon Below"
            :showLabel="true"
            shape="rounded"
            :scrollThreshold="300"
            target="top"
            style="right: 150px; bottom: 20px;"
          />

          <!-- Icon in circle above -->
          <VueScrollToButton
            class="pos-circle"
            label="Circled"
            :showLabel="true"
            shape="rounded"
            :scrollThreshold="300"
            target="top"
            style="right: 20px; bottom: 20px;"
          />
        </div>
      </div>
    `,
  }),
  args: {
    showLabel: true,
  },
};

// Button Shapes
export const ButtonShapes: Story = {
  render: (args: VueScrollToButtonProps) => ({
    components: { VueScrollToButton },
    setup() {
      return { args };
    },
    template: `
      <div style="min-height: 200vh; padding: 20px;">
        <h1>Button Shapes</h1>
        <p>This story showcases different button shapes available via the <code>shape</code> prop.</p>
        <p>Scroll down to try out the various shapes: square, rounded, capsule, circle, and rounded-square on the lower right.</p>
        
        <VueScrollToButton 
          shape="square"
          style="bottom: 170px;"
        />
        
        <VueScrollToButton 
          size="sm" 
          shape="rounded-square" 
          style="bottom: 125px;"
        />
        
        <VueScrollToButton 
          size="sm" 
          shape="rounded" 
          style="bottom: 80px;"
        />
        
        <VueScrollToButton 
          size="lg" 
          shape="capsule" 
          :showLabel="true"
          label="Scroll to Top"
        />
      </div>
    `,
  }),
};
