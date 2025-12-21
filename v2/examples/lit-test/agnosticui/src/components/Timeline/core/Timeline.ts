import { AgTimeline, AgTimelineItem } from './_Timeline.js';

// Register custom elements
if (!customElements.get('ag-timeline')) {
  customElements.define('ag-timeline', AgTimeline);
}

if (!customElements.get('ag-timeline-item')) {
  customElements.define('ag-timeline-item', AgTimelineItem);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-timeline': AgTimeline;
    'ag-timeline-item': AgTimelineItem;
  }
}

export * from './_Timeline.js';
