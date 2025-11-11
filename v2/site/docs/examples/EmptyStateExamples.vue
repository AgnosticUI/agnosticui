<template>
  <section>
    <div class="mbe4">
      <h3>Basic Empty State</h3>
      <p class="mbs2 mbe3">Simple empty state with title and subtitle</p>
    </div>
    <VueEmptyState
      title="No items found"
      subtitle="Get started by creating your first item"
      class="mbe6"
    />

    <div class="mbe4">
      <h3>With Action Button</h3>
      <p class="mbs2 mbe3">Include a primary action button using the buttonText prop</p>
    </div>
    <VueEmptyState
      title="No projects yet"
      subtitle="Create your first project to get started"
      buttonText="New Project"
      class="mbe6 empty-state-with-button"
    />

    <div class="mbe4">
      <h3>Size Variants</h3>
      <p class="mbs2 mbe3">Choose from small, medium, or large sizes to fit your layout</p>
    </div>
    <div class="mbe6">
      <VueEmptyState
        title="No notifications"
        subtitle="You're all caught up!"
        size="sm"
        class="mbe4"
      />
      <VueEmptyState
        title="No activity"
        subtitle="Recent activity will appear here"
        size="md"
        class="mbe4"
      />
      <VueEmptyState
        title="Welcome!"
        subtitle="Start your journey here"
        buttonText="Get Started"
        size="lg"
        class="empty-state-with-button"
      />
    </div>

    <div class="mbe4">
      <h3>Bordered & Rounded</h3>
      <p class="mbs2 mbe3">Add visual separation with borders and rounded corners</p>
    </div>
    <div class="mbe6">
      <VueEmptyState
        title="No data available"
        subtitle="Upload a file to see your data"
        buttonText="Upload File"
        :bordered="true"
        class="empty-state-with-button mbe4"
      />
      <VueEmptyState
        title="Empty folder"
        subtitle="This folder contains no files yet"
        buttonText="Add Files"
        :rounded="true"
        class="empty-state-with-button mbe4"
      />
      <VueEmptyState
        title="No messages"
        subtitle="Send your first message"
        buttonText="New Message"
        :bordered="true"
        :rounded="true"
        class="empty-state-with-button"
      />
    </div>

    <div class="mbe4">
      <h3>Custom Icons</h3>
      <p class="mbs2 mbe3">Provide custom icons that match your context using the icon slot</p>
    </div>
    <div class="mbe6">
      <VueEmptyState
        title="No search results"
        subtitle="Try different keywords or remove filters"
        :rounded="true"
        size="md"
        class="mbe4"
      >
        <template #icon>
          <SearchX
            :size="40"
            color="#999"
          />
        </template>
      </VueEmptyState>

      <VueEmptyState
        title="No files"
        subtitle="Drag and drop files here"
        size="md"
        :bordered="true"
        :rounded="true"
        class="mbe4"
      >
        <template #icon>
          <Folder
            :size="56"
            color="#999"
          />
        </template>
      </VueEmptyState>

      <VueEmptyState
        title="No favorites yet"
        subtitle="Mark items as favorites to see them here"
        :rounded="true"
        size="md"
      >
        <template #icon>
          <Heart
            :size="32"
            color="#ef4444"
          />
        </template>
      </VueEmptyState>
    </div>

    <div class="mbe4">
      <h3>Custom Actions</h3>
      <p class="mbs2 mbe3">Use the actions slot for complete control over buttons and interactions</p>
    </div>
    <div class="mbe6">
      <VueEmptyState
        title="No team members"
        subtitle="Invite people to collaborate"
        size="md"
        :bordered="true"
        :rounded="true"
        class="mbe4"
      >
        <template #actions>
          <div style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;">
            <VueButton
              variant="primary"
              size="sm"
              shape="rounded"
            >
              <Mail :size="16" />
              <span style="margin-inline-start: 4px;">Invite Members</span>
            </VueButton>
            <VueButton
              variant="secondary"
              size="sm"
              shape="rounded"
            >
              Learn More
            </VueButton>
          </div>
        </template>
      </VueEmptyState>

      <VueEmptyState
        title="Start your journey"
        subtitle="Choose how you want to begin"
        size="md"
        :bordered="true"
        :rounded="true"
      >
        <template #icon>
          <Folder
            :size="56"
            color="#999"
          />
        </template>
        <template #actions>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center;">
            <VueButton
              variant="primary"
              size="sm"
              shape="rounded"
              :isBordered="true"
            >
              <Plus :size="16" />
              <span style="margin-inline-start: 4px;">Create New</span>
            </VueButton>
            <VueButton
              variant="primary"
              size="sm"
              shape="rounded"
              :isBordered="true"
            >
              <Upload :size="16" />
              <span style="margin-inline-start: 4px;">Import Data</span>
            </VueButton>
            <VueButton
              variant="primary"
              size="sm"
              shape="rounded"
              :isBordered="true"
            >
              <FileText :size="16" />
              <span style="margin-inline-start: 4px;">Use Template</span>
            </VueButton>
          </div>
        </template>
      </VueEmptyState>
    </div>

    <div class="mbe4">
      <h3>Real-World Examples</h3>
      <p class="mbs2 mbe3">Common patterns for shopping cart, inbox, dashboard, and error states</p>
    </div>
    <div class="mbe6">
      <!-- Shopping Cart -->
      <VueEmptyState
        title="Your cart is empty"
        subtitle="Add items to see them here"
        size="md"
        :bordered="true"
        :rounded="true"
        class="mbe4"
      >
        <template #icon>
          <ShoppingCart
            :size="48"
            color="#999"
          />
        </template>
        <template #actions>
          <VueButton
            variant="primary"
            shape="rounded"
            size="md"
          >
            Continue Shopping
            <ArrowRight
              :size="16"
              style="margin-inline-start: 4px;"
            />
          </VueButton>
        </template>
      </VueEmptyState>

      <!-- Inbox Zero -->
      <VueEmptyState
        title="Inbox Zero! 🎉"
        subtitle="All caught up. No new messages."
        size="md"
        :rounded="true"
        class="mbe4"
      >
        <template #icon>
          <Inbox
            :size="40"
            color="#10b981"
          />
        </template>
      </VueEmptyState>

      <!-- Dashboard -->
      <VueEmptyState
        title="No analytics data yet"
        subtitle="Data will appear once you start tracking"
        :bordered="true"
        :rounded="true"
        class="mbe4"
      >
        <template #icon>
          <BarChart3
            :size="56"
            color="#6366f1"
          />
        </template>
        <template #actions>
          <VueButton
            variant="primary"
            :isGhost="true"
            size="md"
          >
            View Documentation
          </VueButton>
        </template>
      </VueEmptyState>

      <!-- Error State -->
      <VueEmptyState
        title="Something went wrong"
        subtitle="Please try again or contact support"
        size="md"
        :rounded="true"
        :bordered="true"
      >
        <template #icon>
          <AlertCircle
            :size="48"
            color="#ef4444"
          />
        </template>
        <template #actions>
          <div style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;">
            <VueButton
              variant="danger"
              shape="rounded"
              :isBordered="true"
              size="md"
            >
              Try Again
            </VueButton>
            <VueButton
              variant="secondary"
              shape="rounded"
              :isBordered="true"
              size="md"
            >
              <span style="margin-inline-end: 0.125rem;">Contact Support</span>
              <Send :size="16" />
            </VueButton>
          </div>
        </template>
      </VueEmptyState>
    </div>

    <div class="mbe4">
      <h3>State-Specific Variants</h3>
      <p class="mbs2 mbe3">Empty states for different scenarios with appropriate icons and actions</p>
    </div>
    <div class="mbe6">
      <!-- No Results -->
      <VueEmptyState
        title="No matches found"
        subtitle="Try adjusting your filters or search"
        size="md"
        :bordered="true"
        class="mbe4"
      >
        <template #icon>
          <SearchX
            :size="40"
            color="#999"
          />
        </template>
        <template #actions>
          <VueButton
            variant="secondary"
            shape="rounded"
            size="sm"
            @click="handleClearFilters"
          >
            Clear Filters
          </VueButton>
        </template>
      </VueEmptyState>

      <!-- Warning State -->
      <VueEmptyState
        title="Action Required"
        subtitle="This action cannot be undone"
        size="md"
        :bordered="true"
        :rounded="true"
        class="mbe4"
      >
        <template #icon>
          <AlertCircle
            :size="48"
            color="#f59e0b"
          />
        </template>
        <template #actions>
          <div style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;">
            <VueButton
              variant="warning"
              size="md"
            >
              Proceed Anyway
            </VueButton>
            <VueButton
              variant="secondary"
              size="md"
            >
              Cancel
            </VueButton>
          </div>
        </template>
      </VueEmptyState>

      <!-- Access Denied -->
      <VueEmptyState
        title="Access Required"
        subtitle="You don't have permission to view this"
        size="md"
        :bordered="true"
      >
        <template #icon>
          <Lock
            :size="48"
            color="#999"
          />
        </template>
        <template #actions>
          <VueButton
            variant="primary"
            shape="rounded"
            size="md"
          >
            Request Access
          </VueButton>
        </template>
      </VueEmptyState>
    </div>

    <div class="mbe4">
      <h3>Compact Size Showcase</h3>
      <p class="mbs2 mbe3">Small empty states work great in sidebars, cards, or dense layouts</p>
    </div>
    <div
      style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--ag-space-4);"
      class="mbe6"
    >
      <VueEmptyState
        title="No tasks"
        subtitle="Create a task to get started"
        buttonText="New Task"
        size="sm"
        :bordered="true"
        :rounded="true"
        class="empty-state-with-button"
      />
      <VueEmptyState
        title="No events"
        subtitle="Schedule your first event"
        buttonText="Add Event"
        size="sm"
        :bordered="true"
        :rounded="true"
        class="empty-state-with-button"
      />
      <VueEmptyState
        title="No contacts"
        subtitle="Add contacts to your list"
        buttonText="Add Contact"
        size="sm"
        :bordered="true"
        :rounded="true"
        class="empty-state-with-button"
      />
      <VueEmptyState
        title="No notes"
        subtitle="Jot down your first note"
        buttonText="Create Note"
        size="sm"
        :bordered="true"
        :rounded="true"
        class="empty-state-with-button"
      />
    </div>

    <div class="mbe4">
      <h3>CSS Shadow Parts Customization</h3>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize appearance:
        <code>::part(ag-empty-state)</code>,
        <code>::part(ag-icon)</code>,
        <code>::part(ag-title)</code>,
        <code>::part(ag-subtitle)</code>,
        <code>::part(ag-actions)</code>
      </p>
    </div>
    <div class="mbe6">
      <!-- Colorful Accent -->
      <VueEmptyState
        title="Colorful Accent"
        subtitle="Icon with background circle"
        buttonText="Start Now"
        :bordered="true"
        class="custom-empty-state-3"
      >
        <template #icon>
          <Rocket
            :size="48"
            color="#f59e0b"
          />
        </template>
      </VueEmptyState>
    </div>

    <div class="mbe4">
      <h3>Minimal Empty States</h3>
      <p class="mbs2 mbe3">Simple empty states without icons for clean, understated designs</p>
    </div>
    <div class="mbe6">
      <VueEmptyState
        title="Nothing here yet"
        size="sm"
        :rounded="true"
        class="mbe4"
      />
      <VueEmptyState
        title="No activity"
        subtitle="Recent activity will appear here"
        size="md"
        :rounded="true"
        class="mbe4"
      />
      <VueEmptyState
        title="Empty"
        :rounded="true"
        size="md"
      />
    </div>

    <div class="mbe4">
      <h3>Large Welcome States</h3>
      <p class="mbs2 mbe3">Spacious layouts perfect for onboarding and full-page empty states</p>
    </div>
    <VueEmptyState
      title="Welcome to Your Dashboard"
      subtitle="Start by adding some content to see it appear here. You'll be able to track analytics, manage projects, and collaborate with your team."
      buttonText="Get Started"
      size="lg"
      :bordered="true"
      :rounded="true"
      class="empty-state-with-button mbe6"
    >
      <template #icon>
        <Sparkles
          :size="72"
          color="#6366f1"
        />
      </template>
    </VueEmptyState>

    <div class="mbe4">
      <h3>Multiple Button Variants</h3>
      <p class="mbs2 mbe3">Showcase different button styles in custom actions</p>
    </div>
    <VueEmptyState
      title="Choose your action"
      subtitle="Different button styles for different purposes"
      size="md"
      :bordered="true"
      :rounded="true"
      class="mbe6"
    >
      <template #icon>
        <AlertCircle
          :size="40"
          color="#999"
        />
      </template>
      <template #actions>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center;">
          <VueButton
            variant="primary"
            size="sm"
            shape="rounded"
          >
            Primary Action
          </VueButton>
          <VueButton
            variant="secondary"
            size="sm"
            shape="rounded"
            :isBordered="true"
          >
            Secondary
          </VueButton>
          <VueButton
            size="sm"
            shape="rounded"
            :isBordered="true"
          >
            Default
          </VueButton>
        </div>
      </template>
    </VueEmptyState>

    <div class="mbe4">
      <h3>Button Size Variations</h3>
      <p class="mbs2 mbe3">Match button sizes to your empty state size for visual harmony</p>
    </div>
    <VueEmptyState
      title="Different Button Sizes"
      subtitle="Choose the right size for your layout"
      size="md"
      :bordered="true"
      :rounded="true"
      class="mbe6"
    >
      <template #icon>
        <Folder
          :size="48"
          color="#999"
        />
      </template>
      <template #actions>
        <div style="display: flex; gap: 0.5rem; align-items: center; justify-content: center; flex-wrap: wrap;">
          <VueButton
            variant="primary"
            size="sm"
            shape="rounded"
            :isBordered="true"
          >
            <Mic :size="14" />
            <span style="margin-inline-start: 4px;">Small</span>
          </VueButton>
          <VueButton
            variant="primary"
            size="md"
            shape="rounded"
            :isBordered="true"
          >
            <Mic :size="18" />
            <span style="margin-inline-start: 4px;">Medium</span>
          </VueButton>
          <VueButton
            variant="primary"
            size="lg"
            shape="rounded"
            :isBordered="true"
          >
            <Mic :size="24" />
            <span style="margin-inline-start: 4px;">Large</span>
          </VueButton>
        </div>
      </template>
    </VueEmptyState>
  </section>
</template>

<script>
import { VueEmptyState } from "agnosticui-core/empty-state/vue";
import VueButton from "agnosticui-core/button/vue";
import {
  SearchX,
  Folder,
  Heart,
  Mail,
  Plus,
  Upload,
  FileText,
  ShoppingCart,
  ArrowRight,
  Inbox,
  BarChart3,
  AlertCircle,
  Send,
  Lock,
  Sparkles,
  Zap,
  Rocket,
  Mic,
} from "lucide-vue-next";

export default {
  name: "EmptyStateExamples",
  components: {
    VueEmptyState,
    VueButton,
    SearchX,
    Folder,
    Heart,
    Mail,
    Plus,
    Upload,
    FileText,
    ShoppingCart,
    ArrowRight,
    Inbox,
    BarChart3,
    AlertCircle,
    Send,
    Lock,
    Sparkles,
    Zap,
    Rocket,
    Mic,
  },
  methods: {
    handleClearFilters() {
      console.log("Clearing filters...");
    },
  },
};
</script>

<style scoped>
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
  padding: 0.5rem 1rem;
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
  color: #f59e0b;
  font-weight: 700;
}

.custom-empty-state-3::part(ag-actions-button) {
  background: #f59e0b;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
}
</style>
