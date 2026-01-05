import { LitElement, html } from "lit";
import "agnosticui-core/empty-state";
import "agnosticui-core/button";
import "agnosticui-core/icon";

class EmptyStateLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <style>
        /* Force empty state components to have proper height */
        ag-empty-state {
          display: block;
          min-height: 200px;
        }

        ag-empty-state::part(ag-empty-state) {
          min-height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: var(--ag-space-6, 2rem) var(--ag-space-4, 1rem);
        }

        /* Size-specific min heights */
        ag-empty-state[size="sm"]::part(ag-empty-state) {
          min-height: 180px;
          padding: var(--ag-space-5, 1.5rem) var(--ag-space-4, 1rem);
        }

        ag-empty-state[size="md"]::part(ag-empty-state) {
          min-height: 220px;
          padding: var(--ag-space-6, 2rem) var(--ag-space-4, 1rem);
        }

        ag-empty-state[size="lg"]::part(ag-empty-state) {
          min-height: 300px;
          padding: var(--ag-space-8, 3rem) var(--ag-space-4, 1rem);
        }

        /* Add spacing for icon */
        ag-empty-state::part(ag-icon) {
          margin-bottom: var(--ag-space-4, 1.5rem);
        }

        /* Shared action styles for buttonText prop */
        .empty-state-with-button::part(ag-actions) {
          display: flex;
          justify-content: center;
          margin-block-start: var(--ag-space-4);
        }

        .empty-state-with-button::part(ag-title) {
          margin-block-start: var(--ag-space-4);
        }

        .empty-state-with-button::part(ag-actions-button) {
          background: #09090b;
          color: white;
          border-radius: 0.25rem;
          padding: var(--ag-space-4) var(--ag-space-6);
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .empty-state-with-button::part(ag-actions-button):hover {
          background: #18181b;
          transform: translateY(-1px);
        }

        /* Custom Empty State 3 - Colorful Icon Accent */
        .custom-empty-state-3::part(ag-icon) {
          color: #f59e0b;
          background: rgba(245, 158, 11, 0.1);
          border-radius: 50%;
          padding: var(--ag-space-4);
        }

        .custom-empty-state-3::part(ag-title) {
          color: var(--ag-text-primary);
          font-weight: 700;
        }

        .custom-empty-state-3::part(ag-actions-button) {
          background: #f59e0b;
          color: var(--ag-neutral-900);
          border: none;
          border-radius: 8px;
          padding: 0.75rem 1.5rem;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
        }
      </style>
      <section>
        <div class="mbe4">
          <h2>Basic Empty State</h2>
          <p class="mbs2 mbe3">Simple empty state with title and subtitle</p>
        </div>
        <ag-empty-state
          title="No items found"
          subtitle="Get started by creating your first item"
          class="mbe6"
        ></ag-empty-state>

        <div class="mbe4">
          <h2>With Action Button</h2>
          <p class="mbs2 mbe3">
            Include a primary action button using the buttonText prop
          </p>
        </div>
        <ag-empty-state
          title="No projects yet"
          subtitle="Create your first project to get started"
          buttonText="New Project"
          class="mbe6 empty-state-with-button"
        ></ag-empty-state>

        <div class="mbe4">
          <h2>Size Variants</h2>
          <p class="mbs2 mbe3">
            Choose from small, medium, or large sizes to fit your layout
          </p>
        </div>
        <div class="mbe6">
          <ag-empty-state
            title="No notifications"
            subtitle="You're all caught up!"
            size="sm"
            class="mbe4"
          ></ag-empty-state>
          <ag-empty-state
            title="No activity"
            subtitle="Recent activity will appear here"
            size="md"
            class="mbe4"
          ></ag-empty-state>
          <ag-empty-state
            title="Welcome!"
            subtitle="Start your journey here"
            buttonText="Get Started"
            size="lg"
            class="empty-state-with-button"
          ></ag-empty-state>
        </div>

        <div class="mbe4">
          <h2>Bordered & Rounded</h2>
          <p class="mbs2 mbe3">
            Add visual separation with borders and rounded corners
          </p>
        </div>
        <div class="mbe6">
          <ag-empty-state
            title="No data available"
            subtitle="Upload a file to see your data"
            buttonText="Upload File"
            isBordered
            class="empty-state-with-button mbe4"
          ></ag-empty-state>
          <ag-empty-state
            title="Empty folder"
            subtitle="This folder contains no files yet"
            buttonText="Add Files"
            isRounded
            class="empty-state-with-button mbe4"
          ></ag-empty-state>
          <ag-empty-state
            title="No messages"
            subtitle="Send your first message"
            buttonText="New Message"
            isBordered
            isRounded
            class="empty-state-with-button"
          ></ag-empty-state>
        </div>

        <div class="mbe4">
          <h2>Custom Icons</h2>
          <p class="mbs2 mbe3">
            Provide custom icons that match your context using the icon slot
          </p>
        </div>
        <div class="mbe6">
          <ag-empty-state
            title="No search results"
            subtitle="Try different keywords or remove filters"
            isRounded
            size="md"
            class="mbe4"
          >
            <ag-icon slot="icon" size="40" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-x">
                <path d="m13.5 8.5-5 5"/><path d="m8.5 8.5 5 5"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
              </svg>
            </ag-icon>
          </ag-empty-state>

          <ag-empty-state
            title="No files"
            subtitle="Drag and drop files here"
            size="md"
            isBordered
            isRounded
            class="mbe4"
          >
            <ag-icon slot="icon" size="56" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="#999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder">
                <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
              </svg>
            </ag-icon>
          </ag-empty-state>

          <ag-empty-state
            title="No favorites yet"
            subtitle="Mark items as favorites to see them here"
            isRounded
            size="md"
          >
            <ag-icon slot="icon" size="32" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#ef4444" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
            </ag-icon>
          </ag-empty-state>
        </div>

        <div class="mbe4">
          <h2>Custom Actions</h2>
          <p class="mbs2 mbe3">
            Use the actions slot for complete control over buttons and
            interactions
          </p>
        </div>
        <div class="mbe6">
          <ag-empty-state
            title="No team members"
            subtitle="Invite people to collaborate"
            size="md"
            isBordered
            isRounded
            class="mbe4"
          >
            <div
              slot="actions"
              style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;"
            >
              <ag-button variant="primary" size="sm" shape="rounded">
                <ag-icon size="16" no-fill>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail">
                    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </ag-icon>
                <span style="margin-inline-start: 4px;">Invite Members</span>
              </ag-button>
              <ag-button variant="secondary" size="sm" shape="rounded">
                Learn More
              </ag-button>
            </div>
          </ag-empty-state>

          <ag-empty-state
            title="Start your journey"
            subtitle="Choose how you want to begin"
            size="md"
            isBordered
            isRounded
          >
            <ag-icon slot="icon" size="56" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="#999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder">
                <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
              </svg>
            </ag-icon>
            <div
              slot="actions"
              style="display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center;"
            >
              <ag-button variant="primary" size="sm" shape="rounded" isBordered>
                <ag-icon size="16" no-fill>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus">
                    <path d="M5 12h14"/><path d="M12 5v14"/>
                  </svg>
                </ag-icon>
                <span style="margin-inline-start: 4px;">Create New</span>
              </ag-button>
              <ag-button variant="primary" size="sm" shape="rounded" isBordered>
                <ag-icon size="16" no-fill>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>
                  </svg>
                </ag-icon>
                <span style="margin-inline-start: 4px;">Import Data</span>
              </ag-button>
              <ag-button variant="primary" size="sm" shape="rounded" isBordered>
                <ag-icon size="16" no-fill>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/>
                  </svg>
                </ag-icon>
                <span style="margin-inline-start: 4px;">Use Template</span>
              </ag-button>
            </div>
          </ag-empty-state>
        </div>

        <div class="mbe4">
          <h2>Real-World Examples</h2>
          <p class="mbs2 mbe3">
            Common patterns for shopping cart, inbox, dashboard, and error
            states
          </p>
        </div>
        <div class="mbe6">
          <!-- Shopping Cart -->
          <ag-empty-state
            title="Your cart is empty"
            subtitle="Add items to see them here"
            size="md"
            isBordered
            isRounded
            class="mbe4"
          >
            <ag-icon slot="icon" size="48" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart">
                <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.16"/>
              </svg>
            </ag-icon>
            <div slot="actions">
              <ag-button variant="primary" shape="rounded" size="md">
                Continue Shopping
                <ag-icon size="16" no-fill style="margin-inline-start: 4px;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </svg>
                </ag-icon>
              </ag-button>
            </div>
          </ag-empty-state>

          <!-- Inbox Zero -->
          <ag-empty-state
            title="Inbox Zero! 🎉"
            subtitle="All caught up. No new messages."
            size="md"
            isRounded
            class="mbe4"
          >
            <ag-icon slot="icon" size="40" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#10b981" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-inbox">
                <path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
              </svg>
            </ag-icon>
          </ag-empty-state>

          <!-- Dashboard -->
          <ag-empty-state
            title="No analytics data yet"
            subtitle="Data will appear once you start tracking"
            isBordered
            isRounded
            class="mbe4"
          >
            <ag-icon slot="icon" size="56" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="#6366f1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bar-chart-3">
                <path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>
              </svg>
            </ag-icon>
            <div slot="actions">
              <ag-button isGhost size="md"> View Documentation </ag-button>
            </div>
          </ag-empty-state>

          <!-- Error State -->
          <ag-empty-state
            title="Something went wrong"
            subtitle="Please try again or contact support"
            size="md"
            isRounded
            isBordered
          >
            <ag-icon slot="icon" size="48" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#ef4444" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-circle">
                <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>
              </svg>
            </ag-icon>
            <div
              slot="actions"
              style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;"
            >
              <ag-button
                variant="danger"
                shape="rounded"
                isBordered
                size="md"
              >
                Try Again
              </ag-button>
              <ag-button
                variant="secondary"
                shape="rounded"
                isBordered
                size="md"
              >
                <span style="margin-inline-end: 0.125rem;"
                  >Contact Support</span
                >
                <ag-icon size="16" no-fill>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send">
                    <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
                  </svg>
                </ag-icon>
              </ag-button>
            </div>
          </ag-empty-state>
        </div>

        <div class="mbe4">
          <h2>State-Specific Variants</h2>
          <p class="mbs2 mbe3">
            Empty states for different scenarios with appropriate icons and
            actions
          </p>
        </div>
        <div class="mbe6">
          <!-- No Results -->
          <ag-empty-state
            title="No matches found"
            subtitle="Try adjusting your filters or search"
            size="md"
            isBordered
            class="mbe4"
          >
            <ag-icon slot="icon" size="40" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-x">
                <path d="m13.5 8.5-5 5"/><path d="m8.5 8.5 5 5"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
              </svg>
            </ag-icon>
            <div slot="actions">
              <ag-button
                variant="secondary"
                shape="rounded"
                size="sm"
                @click=${() => console.log("clicked")}
              >
                Clear Filters
              </ag-button>
            </div>
          </ag-empty-state>

          <!-- Warning State -->
          <ag-empty-state
            title="Action Required"
            subtitle="This action cannot be undone"
            size="md"
            isBordered
            isRounded
            class="mbe4"
          >
            <ag-icon slot="icon" size="48" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#f59e0b" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-circle">
                <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>
              </svg>
            </ag-icon>
            <div
              slot="actions"
              style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;"
            >
              <ag-button variant="warning" size="md">
                Proceed Anyway
              </ag-button>
              <ag-button variant="secondary" size="md"> Cancel </ag-button>
            </div>
          </ag-empty-state>

          <!-- Access Denied -->
          <ag-empty-state
            title="Access Required"
            subtitle="You don't have permission to view this"
            size="md"
            isBordered
          >
            <ag-icon slot="icon" size="48" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </ag-icon>
            <div slot="actions">
              <ag-button variant="primary" shape="rounded" size="md">
                Request Access
              </ag-button>
            </div>
          </ag-empty-state>
        </div>

        <div class="mbe4">
          <h2>Compact Size Showcase</h2>
          <p class="mbs2 mbe3">
            Small empty states work great in sidebars, cards, or dense layouts
          </p>
        </div>
        <div
          style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--ag-space-4);"
          class="mbe6"
        >
          <ag-empty-state
            title="No tasks"
            subtitle="Create a task to get started"
            buttonText="New Task"
            size="sm"
            isBordered
            isRounded
            class="empty-state-with-button"
          ></ag-empty-state>
          <ag-empty-state
            title="No events"
            subtitle="Schedule your first event"
            buttonText="Add Event"
            size="sm"
            isBordered
            isRounded
            class="empty-state-with-button"
          ></ag-empty-state>
          <ag-empty-state
            title="No contacts"
            subtitle="Add contacts to your list"
            buttonText="Add Contact"
            size="sm"
            isBordered
            isRounded
            class="empty-state-with-button"
          ></ag-empty-state>
          <ag-empty-state
            title="No notes"
            subtitle="Jot down your first note"
            buttonText="Create Note"
            size="sm"
            isBordered
            isRounded
            class="empty-state-with-button"
          ></ag-empty-state>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize appearance:
            <code>::part(ag-empty-state)</code>,
            <code>::part(ag-icon)</code>, <code>::part(ag-title)</code>,
            <code>::part(ag-subtitle)</code>, <code>::part(ag-actions)</code>
          </p>
        </div>
        <div class="mbe6">
          <!-- Colorful Accent -->
          <ag-empty-state
            title="Colorful Accent"
            subtitle="Icon with background circle"
            buttonText="Start Now"
            isBordered
            class="custom-empty-state-3"
          >
            <ag-icon slot="icon" size="48" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#f59e0b" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.09-3.1a2.18 2.18 0 0 0-3.11-.1z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
              </svg>
            </ag-icon>
          </ag-empty-state>
        </div>

        <div class="mbe4">
          <h2>Minimal Empty States</h2>
          <p class="mbs2 mbe3">
            Simple empty states without icons for clean, understated designs
          </p>
        </div>
        <div class="mbe6">
          <ag-empty-state
            title="Nothing here yet"
            size="sm"
            isRounded
            class="mbe4"
          ></ag-empty-state>
          <ag-empty-state
            title="No activity"
            subtitle="Recent activity will appear here"
            size="md"
            isRounded
            class="mbe4"
          ></ag-empty-state>
          <ag-empty-state
            title="Empty"
            isRounded
            size="md"
          ></ag-empty-state>
        </div>

        <div class="mbe4">
          <h2>Large Welcome States</h2>
          <p class="mbs2 mbe3">
            Spacious layouts perfect for onboarding and full-page empty states
          </p>
        </div>
        <ag-empty-state
          title="Welcome to Your Dashboard"
          subtitle="Add some content and you'll see it appear here. You'll be able to manage projects and collaborate with your team."
          buttonText="Get Started"
          size="lg"
          isBordered
          isRounded
          class="empty-state-with-button mbe6"
        >
          <ag-icon slot="icon" size="48" no-fill>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#6366f1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles">
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
            </svg>
          </ag-icon>
        </ag-empty-state>

        <div class="mbe4">
          <h2>Multiple Button Variants</h2>
          <p class="mbs2 mbe3">
            Showcase different button styles in custom actions
          </p>
        </div>
        <ag-empty-state
          title="Choose your action"
          subtitle="Different button styles for different purposes"
          size="md"
          isBordered
          isRounded
          class="mbe6"
        >
          <ag-icon slot="icon" size="40" no-fill>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-circle">
              <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>
            </svg>
          </ag-icon>
          <div
            slot="actions"
            style="display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center;"
          >
            <ag-button variant="primary" size="sm" shape="rounded">
              Primary Action
            </ag-button>
            <ag-button
              variant="secondary"
              size="sm"
              shape="rounded"
              isBordered
            >
              Secondary
            </ag-button>
            <ag-button size="sm" shape="rounded" isBordered>
              Default
            </ag-button>
          </div>
        </ag-empty-state>

        <div class="mbe4">
          <h2>Button Size Variations</h2>
          <p class="mbs2 mbe3">
            Match button sizes to your empty state size for visual harmony
          </p>
        </div>
        <ag-empty-state
          title="Different Button Sizes"
          subtitle="Choose the right size for your layout"
          size="md"
          isBordered
          isRounded
          class="mbe6"
        >
          <ag-icon slot="icon" size="48" no-fill>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder">
              <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
            </svg>
          </ag-icon>
          <div
            slot="actions"
            style="display: flex; gap: 0.5rem; align-items: center; justify-content: center; flex-wrap: wrap;"
          >
            <ag-button variant="primary" size="sm" shape="rounded" isBordered>
              <ag-icon size="14" no-fill>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mic">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>
                </svg>
              </ag-icon>
              <span style="margin-inline-start: 4px;">Small</span>
            </ag-button>
            <ag-button variant="primary" size="md" shape="rounded" isBordered>
              <ag-icon size="18" no-fill>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mic">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>
                </svg>
              </ag-icon>
              <span style="margin-inline-start: 4px;">Medium</span>
            </ag-button>
            <ag-button variant="primary" size="lg" shape="rounded" isBordered>
              <ag-icon size="24" no-fill>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mic">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>
                </svg>
              </ag-icon>
              <span style="margin-inline-start: 4px;">Large</span>
            </ag-button>
          </div>
        </ag-empty-state>
      </section>
    `;
  }
}

customElements.define("empty-state-lit-examples", EmptyStateLitExamples);
