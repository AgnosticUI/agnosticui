<template>
  <section>
    <!-- Horizontal Timeline -->
    <div class="mbe4">
      <h3>Horizontal Timeline</h3>
    </div>
    <div class="mbe4">
      <AgTimeline
        orientation="horizontal"
        :responsive="false"
      >
        <AgTimelineItem>
          <template #ag-start>2023-01-01</template>
          <template #ag-marker>
            <AgIcon
              type="success"
              size="18"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                viewBox="0 0 24 24"
                width="18"
              ><path
                d="M0 0h24v24H0z"
                fill="none"
              /><path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
              /></svg>
            </AgIcon>
          </template>
          <template #ag-end>Step 1 Completed</template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>2023-02-01</template>
          <template #ag-marker>
            <AgIcon
              type="info"
              size="18"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                viewBox="0 0 24 24"
                width="18"
              ><path
                d="M0 0h24v24H0z"
                fill="none"
              /><path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
              /></svg>
            </AgIcon>
          </template>
          <template #ag-end>Step 2 In Progress</template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>2023-03-01</template>
          <template #ag-marker>
            <AgIcon
              type="warning"
              size="18"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                viewBox="0 0 24 24"
                width="18"
              ><path
                d="M0 0h24v24H0z"
                fill="none"
              /><path
                fill="currentColor"
                d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
              /></svg>
            </AgIcon>
          </template>
          <template #ag-end>Step 3 Pending</template>
        </AgTimelineItem>
      </AgTimeline>
    </div>

    <!-- Vertical Timeline -->
    <div class="mbe4">
      <h3>Vertical Timeline</h3>
    </div>
    <div class="mbe4">
      <AgTimeline
        orientation="vertical"
        variant="primary"
      >
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
        <AgTimelineItem>
          <template #ag-start>11:00 AM</template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"></div>
          </template>
          <template #ag-end>
            <strong>Work</strong>
            <p>Focus time</p>
          </template>
        </AgTimelineItem>
      </AgTimeline>
    </div>

    <!-- Vertical with Card at End -->
    <div class="mbe4">
      <h3>Vertical with Card at End</h3>
    </div>
    <div class="mbe4">
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
            <div :style="cardStyle">
              <strong>Breakfast</strong>
              <p style="margin: 0">Oatmeal and coffee</p>
            </div>
          </template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>10:00 AM</template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
          </template>
          <template #ag-end>
            <div :style="cardStyle">
              <strong>Meeting</strong>
              <p style="margin: 0">Daily standup</p>
            </div>
          </template>
        </AgTimelineItem>
      </AgTimeline>
    </div>

    <!-- Vertical with Card at Start -->
    <div class="mbe4">
      <h3>Vertical with Card at Start</h3>
    </div>
    <div class="mbe4">
      <AgTimeline
        orientation="vertical"
        variant="primary"
        style="--ag-timeline-start-align: center"
      >
        <AgTimelineItem>
          <template #ag-start>
            <div :style="cardStyle">
              <strong>Breakfast</strong>
              <p style="margin: 0">Oatmeal and coffee</p>
            </div>
          </template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
          </template>
          <template #ag-end>09:00 AM</template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>
            <div :style="cardStyle">
              <strong>Meeting</strong>
              <p style="margin: 0">Daily standup</p>
            </div>
          </template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
          </template>
          <template #ag-end>10:00 AM</template>
        </AgTimelineItem>
      </AgTimeline>
    </div>

    <!-- Vertical Alternating -->
    <div class="mbe4">
      <h3>Vertical Alternating</h3>
    </div>
    <div class="mbe4">
      <AgTimeline
        orientation="vertical"
        variant="primary"
        style="--ag-timeline-start-align: center; --ag-timeline-end-align: center"
      >
        <AgTimelineItem>
          <template #ag-start>
            <div :style="cardStyle">
              <strong>Step 1</strong>
              <p style="margin: 0">Start with a card</p>
            </div>
          </template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
          </template>
          <template #ag-end>09:00 AM</template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>10:00 AM</template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
          </template>
          <template #ag-end>
            <div :style="cardStyle">
              <strong>Step 2</strong>
              <p style="margin: 0">End has the card</p>
            </div>
          </template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>
            <div :style="cardStyle">
              <strong>Step 3</strong>
              <p style="margin: 0">Back to start card</p>
            </div>
          </template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
          </template>
          <template #ag-end>11:00 AM</template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>12:00 PM</template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
          </template>
          <template #ag-end>
            <div :style="cardStyle">
              <strong>Step 4</strong>
              <p style="margin: 0">End has the card</p>
            </div>
          </template>
        </AgTimelineItem>
      </AgTimeline>
    </div>

    <!-- Vertical Rich -->
    <div class="mbe4">
      <h3>Vertical Rich</h3>
    </div>
    <div class="mbe4">
      <AgTimeline
        orientation="vertical"
        variant="primary"
        style="--ag-timeline-end-align: center; --ag-timeline-start-align: center"
      >
        <AgTimelineItem>
          <template #ag-start>09:00 AM</template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
          </template>
          <template #ag-end>
            <AgCard
              animated
              rounded="md"
            >
              <div style="display: flex; justify-content: space-between; align-items: center; margin-block-end: var(--ag-space-2);">
                <strong>Project Kickoff</strong>
                <AgBadge variant="success">New</AgBadge>
              </div>
              <p style="margin: 0 0 var(--ag-space-2) 0;">Initial meeting with the stakeholders to define the project scope.</p>
              <VueButton
                variant="primary"
                shape="rounded"
                size="sm"
              >View Details</VueButton>
            </AgCard>
          </template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>
            <AgCard
              animated
              rounded="md"
            >
              <div style="display: flex; justify-content: space-between; align-items: center; margin-block-end: var(--ag-space-2);">
                <strong>Design Review</strong>
                <AgBadge variant="info">In Progress</AgBadge>
              </div>
              <p style="margin: 0 0 var(--ag-space-2) 0;">Reviewing the initial mockups with the design team.</p>
              <div style="display: flex; gap: var(--ag-space-1);">
                <VueButton
                  variant="primary"
                  shape="rounded"
                  size="sm"
                >Approve</VueButton>
                <VueButton
                  variant="primary"
                  shape="rounded"
                  size="sm"
                  bordered
                >Reject</VueButton>
              </div>
            </AgCard>
          </template>
          <template #ag-marker>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary)"></div>
          </template>
          <template #ag-end>11:00 AM</template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>02:00 PM</template>
          <template #ag-marker>
            <AgIcon
              type="warning"
              size="24"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              ><path
                d="M0 0h24v24H0z"
                fill="none"
              /><path
                d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
              /></svg>
            </AgIcon>
          </template>
          <template #ag-end>
            <AgCard
              animated
              rounded="md"
            >
              <div style="display: flex; align-items: center; gap: var(--ag-space-2); margin-block-end: var(--ag-space-2);">
                <strong>Client Call</strong>
                <AgIconButton
                  size="sm"
                  label="Call Client"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                  ><path
                    d="M0 0h24v24H0z"
                    fill="none"
                  /><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.26-.26.36-.65.25-1.01A11.36 11.36 0 019.64 4.44c.09-.5-.3-1.04-.8-1.04H4.4c-.56 0-1.06.48-1.07 1.05-.03 9.3 7.5 16.83 16.8 16.8.57-.01 1.05-.51 1.05-1.07v-4.4c0-.5-.54-.89-1.04-.8z" /></svg>
                </AgIconButton>
              </div>
              <p style="margin: 0;">Discuss feedback on the latest release.</p>
            </AgCard>
          </template>
        </AgTimelineItem>
      </AgTimeline>
    </div>

    <!-- Order Tracking Timeline -->
    <div class="mbe4">
      <h3>Order Tracking Timeline</h3>
      <p style="color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-start: 0.5rem;">
        A real-world e-commerce order tracking timeline with custom bordered markers and integrated components.
      </p>
    </div>
    <div class="mbe4">
      <AgTimeline
        orientation="vertical"
        variant="monochrome"
      >
        <AgTimelineItem>
          <template #ag-start>
            <div style="text-align: right; color: var(--ag-background-primary-inverted); font-weight: 500;">
              Order Placed
            </div>
            <div style="text-align: right; color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-start: 0.25rem;">
              Mar 15, 2024 10:32 AM
            </div>
          </template>
          <template #ag-marker>
            <div style="width: 24px; height: 24px; border-radius: 50%; background: var(--ag-background-primary); border: 2px solid var(--ag-background-primary-inverted); display: flex; align-items: center; justify-content: center;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor" style="color: var(--ag-background-primary-inverted);"/>
              </svg>
            </div>
          </template>
          <template #ag-end>
            <AgCard style="background: var(--ag-background-primary); border-color: var(--ag-background-primary-inverted); margin-bottom: var(--ag-space-4);">
              <div style="display: flex; justify-content: space-between; align-items: start; margin-block-end: 0.75rem;">
                <div>
                  <div style="color: var(--ag-background-primary-inverted); font-weight: 600; margin-block-end: 0.25rem;">Order #AG-2024-7821</div>
                  <div style="color: var(--ag-text-secondary); font-size: 0.875rem;">Thank you for your purchase!</div>
                </div>
                <AgBadge
                  type="success"
                  style="--ag-badge-font-size: 0.75rem;"
                >
                  Confirmed
                </AgBadge>
              </div>
              <div style="color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-end: 0.5rem;">
                Items: 3 • Total: $127.98
              </div>
              <AgButton
                mode="secondary"
                size="small"
                style="width: 100%; --ag-button-bgcolor: transparent; --ag-button-border-color: var(--ag-background-primary-inverted); --ag-button-color: var(--ag-background-primary-inverted);"
              >
                View Order Details
              </AgButton>
            </AgCard>
          </template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>
            <div style="text-align: right; color: var(--ag-background-primary-inverted); font-weight: 500;">
              Payment Verified
            </div>
            <div style="text-align: right; color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-start: 0.25rem; margin-block-end: var(--ag-space-4);">
              Mar 15, 2024 10:33 AM
            </div>
          </template>
          <template #ag-marker>
            <div style="width: 24px; height: 24px; border-radius: 50%; background: var(--ag-background-primary); border: 2px solid var(--ag-background-primary-inverted); display: flex; align-items: center; justify-content: center;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor" style="color: var(--ag-background-primary-inverted);"/>
              </svg>
            </div>
          </template>
          <template #ag-end>
            <div style="color: var(--ag-text-secondary); font-size: 0.9rem; padding-inline-start: 0.5rem;">
              Payment of $127.98 confirmed via ****-4242
            </div>
          </template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>
            <div style="text-align: right; color: var(--ag-background-primary-inverted); font-weight: 500;">
              Processing
            </div>
            <div style="text-align: right; color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-start: 0.25rem;">
              Mar 15, 2024 2:15 PM
            </div>
          </template>
          <template #ag-marker>
            <div style="width: 24px; height: 24px; border-radius: 50%; background: var(--ag-background-primary); border: 2px solid var(--ag-background-primary-inverted); display: flex; align-items: center; justify-content: center;">
              <AgSpinner size="small" style="--ag-spinner-color: var(--ag-background-primary-inverted); width: 14px; height: 14px;"></AgSpinner>
            </div>
          </template>
          <template #ag-end>
            <AgCard style="background: var(--ag-background-primary); border-color: var(--ag-background-primary-inverted); margin-bottom: var(--ag-space-4);">
              <div style="color: var(--ag-background-primary-inverted); font-weight: 500; margin-block-end: 0.5rem;">Your order is being prepared</div>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <AgBadge type="info" style="--ag-badge-font-size: 0.75rem;">Wireless Headphones</AgBadge>
                <AgBadge type="info" style="--ag-badge-font-size: 0.75rem;">USB-C Cable</AgBadge>
                <AgBadge type="info" style="--ag-badge-font-size: 0.75rem;">Phone Case</AgBadge>
              </div>
            </AgCard>
          </template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>
            <div style="text-align: right; color: var(--ag-text-secondary); font-weight: 500;">
              Shipped
            </div>
            <div style="text-align: right; color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-start: 0.25rem; margin-block-end: var(--ag-space-4);">
              Estimated: Mar 16
            </div>
          </template>
          <template #ag-marker>
            <div style="width: 24px; height: 24px; border-radius: 50%; background: var(--ag-background-primary); border: 2px solid var(--ag-border);"></div>
          </template>
          <template #ag-end>
            <div style="color: var(--ag-text-secondary); font-size: 0.9rem; padding-inline-start: 0.5rem; font-style: italic;">
              Awaiting shipment pickup...
            </div>
          </template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>
            <div style="text-align: right; color: var(--ag-text-secondary); font-weight: 500;">
              Out for Delivery
            </div>
            <div style="text-align: right; color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-start: 0.25rem; margin-block-end: var(--ag-space-4);">
              Estimated: Mar 18
            </div>
          </template>
          <template #ag-marker>
            <div style="width: 24px; height: 24px; border-radius: 50%; background: var(--ag-background-primary); border: 2px solid var(--ag-border);"></div>
          </template>
          <template #ag-end>
            <div style="color: var(--ag-text-secondary); font-size: 0.9rem; padding-inline-start: 0.5rem;">
              Your package is on the way
            </div>
          </template>
        </AgTimelineItem>
        <AgTimelineItem>
          <template #ag-start>
            <div style="text-align: right; color: var(--ag-text-secondary); font-weight: 500;">
              Delivered
            </div>
            <div style="text-align: right; color: var(--ag-text-secondary); font-size: 0.875rem; margin-block-start: 0.25rem;">
              Estimated: Mar 19
            </div>
          </template>
          <template #ag-marker>
            <div style="width: 24px; height: 24px; border-radius: 50%; background: var(--ag-background-primary); border: 2px solid var(--ag-border);"></div>
          </template>
          <template #ag-end>
            <AgCard style="background: var(--ag-background-subtle); border-color: var(--ag-border); margin-bottom: var(--ag-space-4);">
              <div style="color: var(--ag-text-secondary); margin-block-end: 0.5rem;">Package will be delivered to your address</div>
              <div style="display: flex; gap: 0.5rem;">
                <AgButton
                  mode="secondary"
                  size="small"
                  isDisabled
                  style="flex: 1;"
                >
                  Track Package
                </AgButton>
                <AgButton
                  mode="secondary"
                  size="small"
                  isDisabled
                  style="flex: 1;"
                >
                  Get Help
                </AgButton>
              </div>
            </AgCard>
          </template>
        </AgTimelineItem>
      </AgTimeline>
    </div>

  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueTimeline as AgTimeline, VueTimelineItem as AgTimelineItem } from "agnosticui-core/timeline/vue";
import { VueIcon as AgIcon } from "agnosticui-core/icon/vue";
import { VueCard as AgCard } from "agnosticui-core/card/vue";
import VueButton from "agnosticui-core/button/vue";
import { VueBadge as AgBadge } from "agnosticui-core/badge/vue";
import { VueIconButton as AgIconButton } from "agnosticui-core/icon-button/vue";

const cardStyle = 'border: 1px solid var(--ag-border); padding: var(--ag-space-2); border-radius: var(--ag-radius); background-color: var(--ag-background); margin-block-end: var(--ag-space-4);';

export default defineComponent({
  name: "TimelineExamples",
  components: {
    AgTimeline,
    AgTimelineItem,
    AgIcon,
    AgCard,
    VueButton,
    AgBadge,
    AgIconButton,
  },
  setup() {
    return {
      cardStyle,
    };
  },
});
</script>
