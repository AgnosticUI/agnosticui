<template>
  <section>
    <div class="mbe4">
      <h3>Basic Popover</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VuePopover>
        <button slot="trigger">Open Popover</button>
        <span slot="title">Popover Title</span>
        <div slot="content">
          <p>This is the popover content. You can put any content here including text, links, buttons, and more.</p>
        </div>
      </VuePopover>
      <VuePopover>
        <VueButton
          slot="trigger"
          variant="primary"
        >
          Button Trigger
        </VueButton>
        <span slot="title">User Information</span>
        <div slot="content">
          <p>Popovers can contain rich content and interactive elements.</p>
        </div>
      </VuePopover>
      <VuePopover>
        <a
          href="#"
          slot="trigger"
          style="color: var(--ag-primary); text-decoration: underline; cursor: pointer;"
          @click.prevent
        >
          Link Trigger
        </a>
        <span slot="title">Link Popover</span>
        <div slot="content">
          <p>Popovers can be triggered from links too.</p>
        </div>
      </VuePopover>
      <VuePopover>
        <button
          slot="trigger"
          style="background: none; border: none; cursor: pointer; padding: 8px; display: flex; align-items: center; gap: 4px;"
          aria-label="More options"
        >
          <MoreVertical :size="20" />
        </button>
        <span slot="title">More Options</span>
        <div slot="content">
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <button style="text-align: left; padding: 8px; background: none; border: none; cursor: pointer; border-radius: var(--ag-radius-sm);">
              Edit
            </button>
            <button style="text-align: left; padding: 8px; background: none; border: none; cursor: pointer; border-radius: var(--ag-radius-sm);">
              Share
            </button>
            <button style="text-align: left; padding: 8px; background: none; border: none; cursor: pointer; color: var(--ag-error); border-radius: var(--ag-radius-sm);">
              Delete
            </button>
          </div>
        </div>
      </VuePopover>
      <VuePopover>
        <button
          slot="trigger"
          style="background: none; border: none; cursor: pointer; padding: 8px;"
          aria-label="Menu"
        >
          <Menu :size="24" />
        </button>
        <span slot="title">Navigation Menu</span>
        <div slot="content">
          <nav style="display: flex; flex-direction: column; gap: 4px;">
            <a
              href="#"
              style="padding: 8px; text-decoration: none; color: var(--ag-text-primary); border-radius: var(--ag-radius-sm);"
            >Home</a>
            <a
              href="#"
              style="padding: 8px; text-decoration: none; color: var(--ag-text-primary); border-radius: var(--ag-radius-sm);"
            >About</a>
            <a
              href="#"
              style="padding: 8px; text-decoration: none; color: var(--ag-text-primary); border-radius: var(--ag-radius-sm);"
            >Contact</a>
          </nav>
        </div>
      </VuePopover>
    </div>

    <div class="mbe4">
      <h3>Trigger Types</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VuePopover trigger-type="click">
        <VueButton slot="trigger">Click Trigger</VueButton>
        <span slot="title">Click Popover</span>
        <div slot="content">
          <p>This popover opens when you click the button.</p>
        </div>
      </VuePopover>
      <VuePopover trigger-type="hover">
        <VueButton
          slot="trigger"
          variant="secondary"
        >
          Hover Trigger
        </VueButton>
        <span slot="title">Hover Popover</span>
        <div slot="content">
          <p>This popover opens when you hover over the button.</p>
        </div>
      </VuePopover>
      <VuePopover trigger-type="focus">
        <VueButton
          slot="trigger"
          variant="success"
        >
          Focus Trigger
        </VueButton>
        <span slot="title">Focus Popover</span>
        <div slot="content">
          <p>This popover opens when the button receives focus (keyboard navigation).</p>
        </div>
      </VuePopover>
    </div>

    <div class="mbe4">
      <h3>Placement Options</h3>
    </div>
    <div
      class="mbe4"
      style="display: grid; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: auto auto auto; gap: 1rem; place-items: center; max-width: 275px; margin: 0 auto;"
    >
      <div style="grid-column: 2; grid-row: 1;">
        <VuePopover placement="top">
          <VueButton slot="trigger">Top</VueButton>
          <span slot="title">Top Placement</span>
          <div slot="content">
            <p>Popover positioned above</p>
          </div>
        </VuePopover>
      </div>
      <div style="grid-column: 3; grid-row: 2;">
        <VuePopover placement="right">
          <VueButton slot="trigger">Right</VueButton>
          <span slot="title">Right Placement</span>
          <div slot="content">
            <p>Popover positioned to the right</p>
          </div>
        </VuePopover>
      </div>
      <div style="grid-column: 2; grid-row: 3;">
        <VuePopover placement="bottom">
          <VueButton slot="trigger">Bottom</VueButton>
          <span slot="title">Bottom Placement</span>
          <div slot="content">
            <p>Popover positioned below</p>
          </div>
        </VuePopover>
      </div>
      <div style="grid-column: 1; grid-row: 2;">
        <VuePopover placement="left">
          <VueButton slot="trigger">Left</VueButton>
          <span slot="title">Left Placement</span>
          <div slot="content">
            <p>Popover positioned to the left</p>
          </div>
        </VuePopover>
      </div>
    </div>

    <div class="mbe4">
      <h3>Rich Content</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VuePopover>
        <VueButton
          slot="trigger"
          variant="primary"
        >
          User Profile
        </VueButton>
        <span slot="title">John Doe</span>
        <div slot="content">
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--ag-primary); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
                JD
              </div>
              <div>
                <div style="font-weight: 600;">John Doe</div>
                <div style="font-size: 14px; color: var(--ag-text-secondary);">john@example.com</div>
              </div>
            </div>
            <div style="padding-top: 8px; border-top: 1px solid var(--ag-border);">
              <VueButton
                variant="primary"
                style="width: 100%;"
              >
                View Profile
              </VueButton>
            </div>
          </div>
        </div>
      </VuePopover>
      <VuePopover>
        <VueButton
          slot="trigger"
          variant="secondary"
        >
          Add Comment
        </VueButton>
        <span slot="title">New Comment</span>
        <div slot="content">
          <form
            style="display: flex; flex-direction: column; gap: 12px; min-width: 250px;"
            @submit.prevent
          >
            <div>
              <label style="display: block; margin-bottom: 4px; font-size: 14px;">Name</label>
              <input
                type="text"
                placeholder="Your name"
                style="width: 100%; padding: 8px; border: 1px solid var(--ag-border); border-radius: var(--ag-radius-sm); box-sizing: border-box;"
              >
            </div>
            <div>
              <label style="display: block; margin-bottom: 4px; font-size: 14px;">Comment</label>
              <textarea
                placeholder="Your comment"
                rows="3"
                style="width: 100%; padding: 8px; border: 1px solid var(--ag-border); border-radius: var(--ag-radius-sm); resize: vertical; box-sizing: border-box;"
              />
            </div>
            <VueButton
              variant="primary"
              type="submit"
            >
              Submit
            </VueButton>
          </form>
        </div>
      </VuePopover>
    </div>

    <div class="mbe4">
      <h3>Without Close Button</h3>
    </div>
    <div class="stacked-mobile mbe4">
      <VuePopover :show-close-button="false">
        <VueButton slot="trigger">No Close Button</VueButton>
        <span slot="title">Title Only</span>
        <div slot="content">
          <p>This popover has no close button. Click outside to close.</p>
        </div>
      </VuePopover>
      <VuePopover :arrow="false">
        <VueButton
          slot="trigger"
          variant="secondary"
        >
          No Arrow
        </VueButton>
        <span slot="title">Popover Without Arrow</span>
        <div slot="content">
          <p>This popover doesn't have an arrow pointing to the trigger.</p>
        </div>
      </VuePopover>
    </div>

    <div class="mbe4">
      <h3>Event Handling</h3>
      <p class="mbs2 mbe3">
        Listen to show and hide events to track when the popover opens and closes.
      </p>
      <div style="margin-bottom: 16px; padding: 12px; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md); border: 1px solid var(--ag-border);">
        <p style="margin: 4px 0; font-size: 14px;">
          <strong>Show events:</strong> {{ showCount }}
        </p>
        <p style="margin: 4px 0; font-size: 14px;">
          <strong>Hide events:</strong> {{ hideCount }}
        </p>
      </div>
    </div>
    <div class="stacked-mobile mbe4">
      <VuePopover
        @show="handleShow"
        @hide="handleHide"
      >
        <VueButton
          slot="trigger"
          variant="primary"
        >
          Toggle Popover
        </VueButton>
        <span slot="title">Event Tracking</span>
        <div slot="content">
          <p>Open and close this popover to see the event counts above.</p>
        </div>
      </VuePopover>
    </div>

    <div class="mbe4">
      <h3>CSS Shadow Parts Customization</h3>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize the popover's appearance without affecting the component's internal styling. One drawback is that the arrow part can be tricky to style due to its border-based implementation so we hide it in these examples.
      </p>
    </div>
    <div class="stacked-mobile mbe4">
      <VuePopover class="custom-popover-gradient">
        <VueButton
          slot="trigger"
          variant="primary"
        >
          Gradient Popover
        </VueButton>
        <span
          slot="title"
          style="color: white;"
        >Customized Style</span>
        <div
          slot="content"
          style="color: white;"
        >
          <p style="color: white;">This popover has been customized with CSS Shadow Parts for a gradient background!</p>
        </div>
      </VuePopover>
      <VuePopover class="custom-popover-success">
        <VueButton
          slot="trigger"
          variant="success"
        >
          Success Popover
        </VueButton>
        <span
          slot="title"
          style="color: white;"
        >Success Theme</span>
        <div
          slot="content"
          style="color: white;"
        >
          <p style="color: white;">A success-themed popover with custom styling.</p>
        </div>
      </VuePopover>
    </div>
  </section>
</template>

<script>
import { VuePopover } from "agnosticui-core/popover/vue";
import VueButton from "agnosticui-core/button/vue";
import { Menu, MoreVertical } from "lucide-vue-next";
import { ref } from "vue";

export default {
  name: "PopoverExamples",
  components: {
    VuePopover,
    VueButton,
    Menu,
    MoreVertical,
  },
  setup() {
    const showCount = ref(0);
    const hideCount = ref(0);

    const handleShow = () => {
      showCount.value++;
    };

    const handleHide = () => {
      hideCount.value++;
    };

    return {
      showCount,
      hideCount,
      handleShow,
      handleHide,
    };
  },
};
</script>

<style>
/* CSS Shadow Parts customization examples */
.custom-popover-gradient::part(ag-popover) {
  background: linear-gradient(135deg, #4338ca 0%, #6b21a8 100%);
  color: white;
  border: none;
  box-shadow: 0 20px 40px rgba(67, 56, 202, 0.5);
}

/* How to match a custom gradient? Just hide ¯\_(ツ)_/¯  */
.custom-popover-gradient::part(ag-popover-arrow) {
  display: none;
}

.custom-popover-success::part(ag-popover) {
  background: #059669;
  color: white;
  border: 2px solid #047857;
  box-shadow: 0 10px 25px rgba(5, 150, 105, 0.3);
}

/* The border-based arrow, floating-ui's flip, and other complexities makes
the ROI on having an arrow questionable. So, we just hide ¯\_(ツ)_/¯  */
.custom-popover-success::part(ag-popover-arrow) {
  display: none;
}
</style>
