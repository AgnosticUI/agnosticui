import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ReactButton } from '../src/components/ag/Button/react/ReactButton';
import { ReactButtonFx } from '../src/components/ag/ButtonFx/react/ReactButtonFx';
import { ReactIconButton } from '../src/components/ag/IconButton/react/ReactIconButton';
import { ReactIconButtonFx } from '../src/components/ag/IconButtonFx/react/ReactIconButtonFx';
import { ReactCopyButton } from '../src/components/ag/CopyButton/react/ReactCopyButton';
import { ReactLink } from '../src/components/ag/Link/react/ReactLink';

function ActionsPage() {
  return (
    <main style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <h1>Actions</h1>
      <ReactButton variant="primary">Primary Button</ReactButton>
      <ReactButtonFx variant="secondary">ButtonFx</ReactButtonFx>
      <ReactIconButton label="Star" icon="★" variant="primary" />
      <ReactIconButtonFx label="Heart" icon="♥" variant="secondary" />
      <ReactCopyButton text="copy me" label="Copy" />
      <ReactLink href="#">Link</ReactLink>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ActionsPage />
  </StrictMode>
);
