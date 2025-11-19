# Timeline

Timeline is a semantic component for displaying chronological events, processes, or activities in either horizontal or vertical orientation. It provides flexible slots for dates, markers, and descriptions with support for rich content including cards, badges, and interactive elements.

## Examples

<TimelineExamples />

<script setup>
import TimelineExamples from '../examples/TimelineExamples.vue'
</script>

## Usage

::: details Vue

```vue
<template>
  <section>
    <!-- Basic Horizontal Timeline -->
    <AgTimeline orientation="horizontal">
      <AgTimelineItem>
        <template #ag-start>2023-01-01</template>
        <template #ag-marker>
          <AgIcon type="success" size="18">
            <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </AgIcon>
        </template>
        <template #ag-end>Step 1 Completed</template>
      </AgTimelineItem>
      <AgTimelineItem>
        <template #ag-start>2023-02-01</template>
        <template #ag-marker>
          <AgIcon type="info" size="18">
            <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
          </AgIcon>
        </template>
        <template #ag-end>Step 2 In Progress</template>
      </AgTimelineItem>
    </AgTimeline>

    <!-- Vertical Timeline -->
    <AgTimeline orientation="vertical" variant="primary">
      <AgTimelineItem>
        <template #ag-start>09:00 AM</template>
        <template #ag-marker>
          <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"></div>
        </template>
        <template #ag-end>
          <strong>Breakfast</strong>
          <p>Oatmeal and coffee</p>
        </template>
      </AgTimelineItem>
      <AgTimelineItem>
        <template #ag-start>10:00 AM</template>
        <template #ag-marker>
          <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"></div>
        </template>
        <template #ag-end>
          <strong>Meeting</strong>
          <p>Daily standup</p>
        </template>
      </AgTimelineItem>
    </AgTimeline>

      <AgTimelineItem>
        <template #ag-start>Q1 2024</template>
        <template #ag-marker>
          <AgIcon type="success" size="18">
            <svg><!-- icon svg --></svg>
          </AgIcon>
        </template>
        <template #ag-end>Planning Phase</template>
      </AgTimelineItem>
      <!-- More items... -->
    </AgTimeline>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueTimeline as AgTimeline, VueTimelineItem as AgTimelineItem } from "agnosticui-core/timeline/vue";
import { VueIcon as AgIcon } from "agnosticui-core/icon/vue";

export default defineComponent({
  components: { AgTimeline, AgTimelineItem, AgIcon },
});
</script>
```

:::

::: details React

```tsx
import { ReactTimeline, ReactTimelineItem } from "agnosticui-core/timeline/react";
import { ReactIcon } from "agnosticui-core/icon/react";

export default function TimelineExamples() {
  return (
    <section>
      {/* Basic Horizontal Timeline */}
      <ReactTimeline orientation="horizontal">
        <ReactTimelineItem>
          <div slot="ag-start">2023-01-01</div>
          <div slot="ag-marker">
            <ReactIcon type="success" size="18">
              <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18">
                <path d="M0 0h24v24H0z" fill="none" />
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </ReactIcon>
          </div>
          <div slot="ag-end">Step 1 Completed</div>
        </ReactTimelineItem>
        <ReactTimelineItem>
          <div slot="ag-start">2023-02-01</div>
          <div slot="ag-marker">
            <ReactIcon type="info" size="18">
              <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18">
                <path d="M0 0h24v24H0z" fill="none" />
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
              </svg>
            </ReactIcon>
          </div>
          <div slot="ag-end">Step 2 In Progress</div>
        </ReactTimelineItem>
      </ReactTimeline>

      {/* Vertical Timeline */}
      <ReactTimeline orientation="vertical" variant="primary">
        <ReactTimelineItem>
          <div slot="ag-start">09:00 AM</div>
          <div slot="ag-marker">
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--ag-primary)' }}></div>
          </div>
          <div slot="ag-end">
            <strong>Breakfast</strong>
            <p>Oatmeal and coffee</p>
          </div>
        </ReactTimelineItem>
        <ReactTimelineItem>
          <div slot="ag-start">10:00 AM</div>
          <div slot="ag-marker">
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--ag-primary)' }}></div>
          </div>
          <div slot="ag-end">
            <strong>Meeting</strong>
            <p>Daily standup</p>
          </div>
        </ReactTimelineItem>
      </ReactTimeline>

        <ReactTimelineItem>
          <div slot="ag-start">Q1 2024</div>
          <div slot="ag-marker">
            <ReactIcon type="success" size="18">
              <svg>{/* icon svg */}</svg>
            </ReactIcon>
          </div>
          <div slot="ag-end">Planning Phase</div>
        </ReactTimelineItem>
        {/* More items... */}
      </ReactTimeline>
    </section>
  );
}
```

:::

::: details Lit (Web Components)

```html
<script type="module">
  import "agnosticui-core/timeline";
  import "agnosticui-core/icon";
</script>

<!-- Basic Horizontal Timeline -->
<ag-timeline orientation="horizontal">
  <ag-timeline-item>
    <div slot="ag-start">2023-01-01</div>
    <div slot="ag-marker">
      <ag-icon type="success" size="18">
        <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </ag-icon>
    </div>
    <div slot="ag-end">Step 1 Completed</div>
  </ag-timeline-item>
  <ag-timeline-item>
    <div slot="ag-start">2023-02-01</div>
    <div slot="ag-marker">
      <ag-icon type="info" size="18">
        <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
        </svg>
      </ag-icon>
    </div>
    <div slot="ag-end">Step 2 In Progress</div>
  </ag-timeline-item>
</ag-timeline>

<!-- Vertical Timeline -->
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

  <ag-timeline-item>
    <div slot="ag-start">Q1 2024</div>
    <div slot="ag-marker">
      <ag-icon type="success" size="18">
        <svg><!-- icon svg --></svg>
      </ag-icon>
    </div>
    <div slot="ag-end">Planning Phase</div>
  </ag-timeline-item>
  <!-- More items... -->
</ag-timeline>
```

:::

## Props

### AgTimeline

| Prop | Type | Default | Description |
| ------------ | --------------------------------------------------- | -------------- | --------------------------------------------------------- |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | The orientation of the timeline |
| `variant` | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'monochrome' \| ''` | `''` | Color variant for the timeline connectors and markers |
| `compact` | `boolean` | `false` | Uses compact spacing between timeline items |
| `ariaLabel` | `string` | `null` | Accessible label for the timeline |

### AgTimelineItem

| Slot | Description |
| --------- | ----------------------------------------------------------- |
| `ag-start` | Content positioned at the start (e.g., date, time, label) |
| `ag-marker` | Content for the center marker (e.g., icon, badge, dot) |
| `ag-end` | Content positioned at the end (e.g., description, details) |

## CSS Custom Properties

Timeline supports extensive customization through CSS custom properties:

| Property | Default | Description |
| ----------------- | ---------------------- | ------------------------------------- |
| `--ag-timeline-connector-color` | `var(--ag-border)` | Color of the connecting lines |
| `--ag-timeline-connector-width` | `2px` | Width of the connecting lines |
| `--ag-timeline-spacing` | `var(--ag-space-4)` | Spacing between timeline items |
| `--ag-timeline-start-align` | `flex-start` | Vertical alignment for ag-start content |
| `--ag-timeline-end-align` | `flex-start` | Vertical alignment for ag-end content |

### Customization Example

```css
/* Customize timeline appearance */
ag-timeline {
  --ag-timeline-connector-color: #667eea;
  --ag-timeline-connector-width: 3px;
  --ag-timeline-spacing: var(--ag-space-6);
}

/* Center-align content against markers */
ag-timeline {
  --ag-timeline-start-align: center;
  --ag-timeline-end-align: center;
}
```

## Design Patterns

### Simple Process Timeline

Use for displaying sequential steps or phases:

```vue
<AgTimeline orientation="horizontal" variant="primary">
  <AgTimelineItem>
    <template #ag-start>Step 1</template>
    <template #ag-marker>
      <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
    </template>
    <template #ag-end>Research</template>
  </AgTimelineItem>
  <AgTimelineItem>
    <template #ag-start>Step 2</template>
    <template #ag-marker>
      <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
    </template>
    <template #ag-end>Design</template>
  </AgTimelineItem>
  <AgTimelineItem>
    <template #ag-start>Step 3</template>
    <template #ag-marker>
      <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
    </template>
    <template #ag-end>Launch</template>
  </AgTimelineItem>
</AgTimeline>
```

### Daily Schedule Timeline

Use vertical orientation for time-based events:

```vue
<AgTimeline orientation="vertical" variant="primary">
  <AgTimelineItem>
    <template #ag-start>09:00 AM</template>
    <template #ag-marker>
      <AgIcon type="info" size="18">
        <svg><!-- icon --></svg>
      </AgIcon>
    </template>
    <template #ag-end>
      <strong>Team Standup</strong>
      <p>Daily sync meeting</p>
    </template>
  </AgTimelineItem>
  <AgTimelineItem>
    <template #ag-start>11:00 AM</template>
    <template #ag-marker>
      <AgIcon type="success" size="18">
        <svg><!-- icon --></svg>
      </AgIcon>
    </template>
    <template #ag-end>
      <strong>Code Review</strong>
      <p>Review pending PRs</p>
    </template>
  </AgTimelineItem>
</AgTimeline>
```

### Rich Content Timeline with Cards

Combine timelines with other components for rich presentations:

```vue
<AgTimeline
  orientation="vertical"
  variant="primary"
  style="--ag-timeline-end-align: center"
>
  <AgTimelineItem>
    <template #ag-start>09:00 AM</template>
    <template #ag-marker>
      <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
    </template>
    <template #ag-end>
      <AgCard animated rounded="md">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <strong>Project Kickoff</strong>
          <AgBadge variant="success">New</AgBadge>
        </div>
        <p>Initial meeting with stakeholders.</p>
        <AgButton variant="primary" size="sm">View Details</AgButton>
      </AgCard>
    </template>
  </AgTimelineItem>
</AgTimeline>
```


## Accessibility

- Timeline uses semantic HTML and proper ARIA attributes for screen reader support
- Use the `ariaLabel` prop to provide context about the timeline's purpose
- Ensure sufficient color contrast for timeline connectors and content
- Icons used as markers should have appropriate labels or descriptions
- The component respects `prefers-reduced-motion` for any animations

## Notes

- **Flexible Content**: Slots accept any HTML content including icons, badges, cards, and custom components
- **Custom Alignment**: Use CSS custom properties `--ag-timeline-start-align` and `--ag-timeline-end-align` to control content positioning
- **Variant Colors**: Variants affect both connectors and can be used to color-code different types of events
- **Rich Markers**: The marker slot supports any content - simple dots, icons, badges, or custom elements
- All three framework implementations (Vue, React, Lit) share the same underlying styles and behavior
