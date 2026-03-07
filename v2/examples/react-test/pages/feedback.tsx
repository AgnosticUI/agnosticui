import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ReactAlert } from '../src/components/ag/Alert/react/ReactAlert';
import { ReactToast } from '../src/components/ag/Toast/react/ReactToast';
import { ReactBadge } from '../src/components/ag/Badge/react/ReactBadge';
import { ReactBadgeFx } from '../src/components/ag/BadgeFx/react/ReactBadgeFx';
import { ReactProgress } from '../src/components/ag/Progress/react/ReactProgress';
import { ReactProgressRing } from '../src/components/ag/ProgressRing/react/ReactProgressRing';
import { ReactSpinner } from '../src/components/ag/Spinner/react/ReactSpinner';
import { ReactLoader } from '../src/components/ag/Loader/react/ReactLoader';
import { ReactSkeletonLoader } from '../src/components/ag/SkeletonLoader/react/ReactSkeletonLoader';

function FeedbackPage() {
  return (
    <main style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h1>Feedback</h1>
      <ReactAlert variant="success">Success alert</ReactAlert>
      <ReactToast open type="success">Toast message</ReactToast>
      <ReactBadge value={5} />
      <ReactBadgeFx value={3} />
      <ReactProgress value={60} label="Progress" />
      <ReactProgressRing value={75} label="75%" />
      <ReactSpinner ariaLabel="Loading" />
      <ReactLoader ariaLabel="Loading content" />
      <ReactSkeletonLoader variant="text" width="200px" height="16px" />
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FeedbackPage />
  </StrictMode>
);
