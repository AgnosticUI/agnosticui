// v2/lib/src/components/Timeline/react/ReactTimeline.tsx
import React from 'react';
import { createComponent } from '@lit/react';
import { AgTimeline as AgTimelineWC, AgTimelineItem as AgTimelineItemWC } from '../core/Timeline';

// Extend React JSX IntrinsicElements to include custom timeline elements
declare module 'react/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      'ag-timeline-item': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

// Define the props for the Timeline component
export interface ReactTimelineProps {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'monochrome' | '';
  compact?: boolean;
  ariaLabel?: string;
  responsive?: boolean;
  children?: React.ReactNode;
}

// Create React wrapper for Timeline
export const ReactTimeline = createComponent({
  tagName: 'ag-timeline',
  elementClass: AgTimelineWC,
  react: React,
});

// Define the props for the TimelineItem component
export interface ReactTimelineItemProps {
  start?: React.ReactNode;
  marker?: React.ReactNode;
  end?: React.ReactNode;
  children?: React.ReactNode;
}

// Custom TimelineItem to handle slots as props
export const ReactTimelineItem: React.FC<ReactTimelineItemProps> = ({ start, marker, end, children }) => {
  return (
    <ag-timeline-item>
      {start && <div slot="ag-start">{start}</div>}
      {marker && <div slot="ag-marker">{marker}</div>}
      {end && <div slot="ag-end">{end}</div>}
      {children}
    </ag-timeline-item>
  );
};

// Original TimelineItem wrapper (if needed for other purposes)
export const ReactTimelineItemWC = createComponent({
  tagName: 'ag-timeline-item',
  elementClass: AgTimelineItemWC,
  react: React,
});
