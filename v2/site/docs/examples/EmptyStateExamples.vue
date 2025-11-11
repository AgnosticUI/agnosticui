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
    <div
      style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--ag-space-4);"
      class="mbe6"
    >
      <VueEmptyState
        title="No notifications"
        subtitle="You're all caught up!"
        size="sm"
      />
      <VueEmptyState
        title="No activity"
        subtitle="Recent activity will appear here"
        size="md"
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
    <div
      style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--ag-space-4);"
      class="mbe6"
    >
      <VueEmptyState
        title="No data available"
        subtitle="Upload a file to see your data"
        buttonText="Upload File"
        :bordered="true"
        class="empty-state-with-button"
      />
      <VueEmptyState
        title="Empty folder"
        subtitle="This folder contains no files yet"
        buttonText="Add Files"
        :rounded="true"
        class="empty-state-with-button"
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
    <div
      style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--ag-space-4);"
      class="mbe6"
    >
      <VueEmptyState
        title="No search results"
        subtitle="Try different keywords or remove filters"
        size="md"
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
    <div
      style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--ag-space-4);"
      class="mbe6"
    >
      <VueEmptyState
        title="No team members"
        subtitle="Invite people to collaborate"
        size="md"
        :bordered="true"
      >
        <template #actions>
          <div style="display: flex; gap: 0.5rem; justify-content: center;">
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
    <div
      style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--ag-space-4);"
      class="mbe6"
    >
      <!-- Shopping Cart -->
      <VueEmptyState
        title="Your cart is empty"
        subtitle="Add items to see them here"
        size="md"
        :bordered="true"
        :rounded="true"
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
        :bordered="true"
      >
        <template #icon>
          <AlertCircle
            :size="48"
            color="#ef4444"
          />
        </template>
        <template #actions>
          <div style="display: flex; gap: 0.5rem; justify-content: center;">
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
              <span style="margin-inline-end: 4px;">Contact Support</span>
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
    <div
      style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--ag-space-4);"
      class="mbe6"
    >
      <!-- No Results -->
      <VueEmptyState
        title="No matches found"
        subtitle="Try adjusting your filters or search"
        size="md"
        :bordered="true"
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
      >
        <template #icon>
          <AlertCircle
            :size="48"
            color="#f59e0b"
          />
        </template>
        <template #actions>
          <div style="display: flex; gap: 0.5rem; justify-content: center;">
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
      style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--ag-space-3);"
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
        <code>::part(icon)</code>,
        <code>::part(title)</code>,
        <code>::part(subtitle)</code>,
        <code>::part(actions)</code>
      </p>
    </div>
    <div
      style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--ag-space-4);"
      class="mbe6"
    >
      <!-- Gradient Border -->
      <VueEmptyState
        title="Gradient Border Style"
        subtitle="Custom styled with CSS parts"
        buttonText="Get Started"
        :bordered="true"
        :rounded="true"
        class="custom-empty-state-1"
      >
        <template #icon>
          <Sparkles
            :size="48"
            color="#667eea"
          />
        </template>
      </VueEmptyState>

      <!-- Dark Theme with Glow -->
      <VueEmptyState
        title="Dark Theme"
        subtitle="With glowing icon effect"
        buttonText="Explore"
        :bordered="true"
        :rounded="true"
        class="custom-empty-state-2"
      >
        <template #icon>
          <Zap
            :size="48"
            color="#60a5fa"
          />
        </template>
      </VueEmptyState>

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
    <div
      style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--ag-space-4);"
      class="mbe6"
    >
      <VueEmptyState
        title="Nothing here yet"
        size="sm"
      />
      <VueEmptyState
        title="No activity"
        subtitle="Recent activity will appear here"
        size="md"
      />
      <VueEmptyState
        title="Empty"
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
          :size="32"
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
      class="mbe6"
    >
      <template #icon>
        <Folder
          :size="48"
          color="#999"
        />
      </template>
      <template #actions>
        <div style="display: flex; gap: 0.5rem; align-items: center; justify-content: center;">
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
/* Shared action styles for buttonText prop */
.empty-state-with-button::part(actions) {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.empty-state-with-button::part(actions-button) {
  background: #09090b;
  color: white;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.empty-state-with-button::part(actions-button):hover {
  background: #18181b;
  transform: translateY(-1px);
}

/* Custom Empty State 1 - Gradient Border */
.custom-empty-state-1::part(ag-empty-state) {
  border: 2px solid transparent;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
  border-radius: 16px;
  padding: 2rem;
}

.custom-empty-state-1::part(title) {
  color: #667eea;
  font-weight: 700;
}

.custom-empty-state-1::part(actions-button) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

/* Custom Empty State 2 - Dark Theme with Glow */
.custom-empty-state-2::part(ag-empty-state) {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  border: 2px solid #475569;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  padding: 2rem;
}

.custom-empty-state-2::part(icon) {
  color: #60a5fa;
  filter: drop-shadow(0 0 8px rgba(96, 165, 250, 0.5));
}

.custom-empty-state-2::part(title) {
  color: #f1f5f9;
  font-weight: 700;
}

.custom-empty-state-2::part(subtitle) {
  color: #cbd5e1;
}

.custom-empty-state-2::part(actions-button) {
  background: #60a5fa;
  color: #1e293b;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
}

/* Custom Empty State 3 - Colorful Icon Accent */
.custom-empty-state-3::part(icon) {
  color: #f59e0b;
  background: rgba(245, 158, 11, 0.1);
  border-radius: 50%;
  padding: 1rem;
}

.custom-empty-state-3::part(title) {
  color: #f59e0b;
  font-weight: 700;
}

.custom-empty-state-3::part(actions-button) {
  background: #f59e0b;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
}
</style>
