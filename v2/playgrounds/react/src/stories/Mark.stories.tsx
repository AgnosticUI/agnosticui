import type { Meta, StoryObj } from '@storybook/react';
import { ReactMark } from 'agnosticui-core/mark/react';
import React, { useState } from 'react';

const meta: Meta<typeof ReactMark> = {
  title: 'AgnosticUI React/Mark',
  component: ReactMark,
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
type Story = StoryObj<typeof meta>;

export const Static: Story = {
  args: {
    variant: 'warning',
    children: 'Statically highlighted part',
  },
  render: (args) => (
    <p>
      This is some text with a <ReactMark {...args} /> inside it.
    </p>
  ),
};

export const ReactiveHighlighting: Story = {
  render: () => {
    const [search, setSearch] = useState('fox');
    const [caseSensitive, setCaseSensitive] = useState(false);
    const [matchAll, setMatchAll] = useState(true);
    const textContent = 'The quick brown fox jumps over the lazy dog. The lazy fox was not the same as the other fox.';

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label>
            Search for:
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" checked={caseSensitive} onChange={(e) => setCaseSensitive(e.target.checked)} />
            Case Sensitive
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" checked={matchAll} onChange={(e) => setMatchAll(e.target.checked)} />
            Match All
          </label>
        </div>
        <p>
          <ReactMark
            search={search}
            caseSensitive={caseSensitive}
            matchAll={matchAll}
            variant="warning"
          >
            {textContent}
          </ReactMark>
        </p>
      </div>
    );
  },
};
