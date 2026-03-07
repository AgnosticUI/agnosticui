import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ReactDialog } from '../src/components/ag/Dialog/react/ReactDialog';
import { ReactDrawer } from '../src/components/ag/Drawer/react/ReactDrawer';
import {
  ReactPopover,
  PopoverTrigger,
  PopoverContent,
} from '../src/components/ag/Popover/react/ReactPopover';
import { ReactTooltip } from '../src/components/ag/Tooltip/react/ReactTooltip';
import {
  ReactAccordion,
  AccordionItem,
  ItemHeader,
  ItemContent,
} from '../src/components/ag/Accordion/react/ReactAccordion';
import { ReactCollapsible } from '../src/components/ag/Collapsible/react/ReactCollapsible';

function OverlaysPage() {
  return (
    <main style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <h1>Overlays</h1>

      <ReactDialog heading="Demo Dialog" open={false} />

      <ReactDrawer heading="Demo Drawer" open={false} />

      <ReactPopover>
        <PopoverTrigger><button>Open Popover</button></PopoverTrigger>
        <PopoverContent>Popover content</PopoverContent>
      </ReactPopover>

      <ReactTooltip content="Tooltip text">
        <button>Hover me</button>
      </ReactTooltip>

      <ReactAccordion>
        <AccordionItem>
          <ItemHeader>Section 1</ItemHeader>
          <ItemContent>Content for section 1</ItemContent>
        </AccordionItem>
      </ReactAccordion>

      <ReactCollapsible open={false}>
        <span slot="summary">Collapsible</span>
        <div>Collapsed content</div>
      </ReactCollapsible>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OverlaysPage />
  </StrictMode>
);
