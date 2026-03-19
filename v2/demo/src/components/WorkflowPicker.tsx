import { useState, useMemo } from 'react';
import { AgDynamicRenderer } from '@agnosticui/render-react';
import { pickerFixture } from '../fixtures/picker';
import type { AgNode } from '@agnosticui/schema';

interface WorkflowPickerProps {
  onSelect: (workflow: string) => void;
}

export function WorkflowPicker({ onSelect }: WorkflowPickerProps) {
  const [selected, setSelected] = useState('contact-form');

  const nodes = useMemo<AgNode[]>(
    () => pickerFixture.map(node =>
      node.id === 'picker-group' ? { ...node, value: selected } as AgNode : node
    ),
    [selected]
  );

  return (
    <AgDynamicRenderer
      nodes={nodes}
      actions={{
        'workflow-select': (payload) => {
          setSelected(payload as string);
          onSelect(payload as string);
        },
      }}
    />
  );
}
