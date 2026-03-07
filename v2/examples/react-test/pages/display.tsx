import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ReactAvatar } from '../src/components/ag/Avatar/react/ReactAvatar';
import { ReactImage } from '../src/components/ag/Image/react/ReactImage';
import { ReactIcon } from '../src/components/ag/Icon/react/ReactIcon';
import { ReactTag } from '../src/components/ag/Tag/react/ReactTag';
import { ReactMark } from '../src/components/ag/Mark/react/ReactMark';
import { ReactKbd } from '../src/components/ag/Kbd/react/ReactKbd';
import { ReactIntlFormatter } from '../src/components/ag/IntlFormatter/react/ReactIntlFormatter';
import {
  ReactTimeline,
  ReactTimelineItem,
} from '../src/components/ag/Timeline/react/ReactTimeline';
import { ReactMessageBubble } from '../src/components/ag/MessageBubble/react/ReactMessageBubble';
import { ReactEmptyState } from '../src/components/ag/EmptyState/react/ReactEmptyState';
import { ReactVisuallyHidden } from '../src/components/ag/VisuallyHidden/react/ReactVisuallyHidden';
import { ReactScrollProgress } from '../src/components/ag/ScrollProgress/react/ReactScrollProgress';
import { ReactScrollToButton } from '../src/components/ag/ScrollToButton/react/ReactScrollToButton';

function DisplayPage() {
  return (
    <main style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h1>Display</h1>

      <ReactAvatar text="AB" />

      <ReactImage
        src="https://placehold.co/200x100"
        alt="placeholder"
        width={200}
        height={100}
      />

      <ReactIcon size="md">
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <circle cx="12" cy="12" r="10" />
        </svg>
      </ReactIcon>

      <ReactTag variant="success">Tag</ReactTag>

      <ReactMark>Highlighted text</ReactMark>

      <ReactKbd bordered>Ctrl</ReactKbd>

      <ReactIntlFormatter type="number" value={1234567} />

      <ReactTimeline ariaLabel="Demo timeline">
        <ReactTimelineItem
          start={<span>Start</span>}
          marker={<span>•</span>}
          end={<span>End</span>}
        />
      </ReactTimeline>

      <ReactMessageBubble from="me" message="Hello!" time="12:00" author="Alice" />

      <ReactEmptyState />

      <ReactVisuallyHidden>Screen reader only</ReactVisuallyHidden>

      <ReactScrollProgress mode="bar" />

      <ReactScrollToButton label="Top" />
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DisplayPage />
  </StrictMode>
);
