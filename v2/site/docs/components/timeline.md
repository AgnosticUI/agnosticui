# Timeline

A semantic timeline component for displaying chronological events.

<div class="flex gap-2 mb-8">
  <a href="https://github.com/AgnosticUI/agnosticui/tree/master/v2/lib/src/components/Timeline" target="_blank">
    <span class="badge badge-neutral">Source</span>
  </a>
  <a href="https://www.w3.org/WAI/ARIA/apg/patterns/feed/" target="_blank">
    <span class="badge badge-neutral">WAI-ARIA</span>
  </a>
</div>

## Usage

### Horizontal (Default)

<div class="playground">
  <ag-timeline>
    <ag-timeline-item>
      <div slot="ag-start">2023-01-01</div>
      <div slot="ag-marker">
        <ag-icon type="success" size="18">check_circle</ag-icon>
      </div>
      <div slot="ag-end">Step 1 Completed</div>
    </ag-timeline-item>
    <ag-timeline-item>
      <div slot="ag-start">2023-02-01</div>
      <div slot="ag-marker">
        <ag-icon type="info" size="18">info</ag-icon>
      </div>
      <div slot="ag-end">Step 2 In Progress</div>
    </ag-timeline-item>
    <ag-timeline-item>
      <div slot="ag-start">2023-03-01</div>
      <div slot="ag-marker">
        <ag-icon type="warning" size="18">warning</ag-icon>
      </div>
      <div slot="ag-end">Step 3 Pending</div>
    </ag-timeline-item>
  </ag-timeline>
</div>

### Vertical

<div class="playground">
  <ag-timeline orientation="vertical" variant="primary">
    <ag-timeline-item>
      <div slot="ag-start">09:00 AM</div>
      <div slot="ag-marker">
        <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"></div>
      </div>
      <div slot="ag-end">
        <strong>Breakfast</strong>
        <p>Oatmeal and coffee</p>
      </div>
    </ag-timeline-item>
    <ag-timeline-item>
      <div slot="ag-start">10:00 AM</div>
      <div slot="ag-marker">
        <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"></div>
      </div>
      <div slot="ag-end">
        <strong>Meeting</strong>
        <p>Daily standup</p>
      </div>
    </ag-timeline-item>
  </ag-timeline>
</div>

## API

### AgTimeline

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Orientation of the timeline |
| `variant` | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'monochrome' \| ''` | `''` | Visual variant for styling connectors and markers |
| `compact` | `boolean` | `false` | Whether to use compact spacing |
| `responsive` | `boolean` | `false` | Enable responsive behavior - automatically switches to vertical on narrow containers |
| `ariaLabel` | `string` | `null` | ARIA label for the timeline |

### AgTimelineItem

| Slot | Description |
| :--- | :--- |
| `ag-start` | Content positioned at the start (e.g., date/label) |
| `ag-marker` | Content for the center marker (e.g., icon) |
| `ag-end` | Content positioned at the end (e.g., description) |

### CSS Custom Properties

| Property | Default | Description |
| :--- | :--- | :--- |
| `--ag-timeline-connector-color` | `var(--ag-border)` | Color of connector lines |
| `--ag-timeline-connector-width` | `2px` | Width of connector lines |
| `--ag-timeline-spacing` | `var(--ag-space-4)` | Spacing between timeline items |
| `--ag-responsive-mobile-breakpoint` | `640px` | Breakpoint for responsive behavior |
