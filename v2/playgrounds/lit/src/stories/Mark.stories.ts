import type { Meta, StoryObj } from '@storybook/web-components';
import { html, render } from 'lit';
import 'agnosticui-core/mark';
import type { MarkProps } from 'agnosticui-core/mark';

const meta: Meta<MarkProps> = {
  title: 'AgnosticUI Lit/Mark',
  component: 'ag-mark',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['warning', 'info', 'success', 'error', 'primary', 'secondary', 'monochrome'],
    },
    search: {
      control: 'text',
    },
    caseSensitive: {
      control: 'boolean',
    },
    matchAll: {
      control: 'boolean',
    }
  },
};

export default meta;
type Story = StoryObj<MarkProps>;

export const Static: Story = {
  args: {
    variant: 'warning',
  },
  render: (args) => html`
    <p>
      This is some text with a <ag-mark .variant="${args.variant}">statically highlighted part</ag-mark> inside it.
    </p>
  `,
};

export const ReactiveHighlighting: Story = {
  render: () => {
    const container = document.createElement('div');
    
    let search = 'fox';
    let caseSensitive = false;
    let matchAll = true;
    const textContent = 'The quick brown fox jumps over the lazy dog. The lazy fox was not the same as the other fox.';

    const handleInput = (e: InputEvent) => {
      search = (e.target as HTMLInputElement).value;
      update();
    };
    
    const handleCaseSensitive = (e: InputEvent) => {
      caseSensitive = (e.target as HTMLInputElement).checked;
      update();
    }
    
    const handleMatchAll = (e: InputEvent) => {
      matchAll = (e.target as HTMLInputElement).checked;
      update();
    }

    function update() {
      render(html`
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div>
            <label>
              Search for:
              <input type="text" .value=${search} @input=${handleInput} />
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" .checked=${caseSensitive} @change=${handleCaseSensitive} />
              Case Sensitive
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" .checked=${matchAll} @change=${handleMatchAll} />
              Match All
            </label>
          </div>
          <p>
            <ag-mark
              search=${search}
              .caseSensitive=${caseSensitive}
              .matchAll=${matchAll}
              variant="warning"
            >
              ${textContent}
            </ag-mark>
          </p>
        </div>
      `, container);
    }
    
    update();
    return container;
  },
};
