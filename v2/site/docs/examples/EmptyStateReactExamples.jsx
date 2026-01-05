
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
} from "lucide-react";
import { ReactEmptyState } from "agnosticui-core/empty-state/react";
import { ReactButton } from "agnosticui-core/button/react";

const EmptyStateExamples = () => {
  const handleClearFilters = () => {
    console.log("Clearing filters...");
  };

  return (
    <section>
    <div className="mbe4">
      <h2>Basic Empty State</h2>
      <p className="mbs2 mbe3">Simple empty state with title and subtitle</p>
    </div>
    <ReactEmptyState
      title="No items found"
      subtitle="Get started by creating your first item"
      className="mbe6"
    />

    <div className="mbe4">
      <h2>With Action Button</h2>
      <p className="mbs2 mbe3">Include a primary action button using the buttonText prop</p>
    </div>
    <ReactEmptyState
      title="No projects yet"
      subtitle="Create your first project to get started"
      buttonText="New Project"
      className="mbe6 empty-state-with-button"
    />

    <div className="mbe4">
      <h2>Size Variants</h2>
      <p className="mbs2 mbe3">Choose from small, medium, or large sizes to fit your layout</p>
    </div>
    <div className="mbe6">
      <ReactEmptyState
        title="No notifications"
        subtitle="You're all caught up!"
        size="sm"
        className="mbe4"
      />
      <ReactEmptyState
        title="No activity"
        subtitle="Recent activity will appear here"
        size="md"
        className="mbe4"
      />
      <ReactEmptyState
        title="Welcome!"
        subtitle="Start your journey here"
        buttonText="Get Started"
        size="lg"
        className="empty-state-with-button"
      />
    </div>

    <div className="mbe4">
      <h2>Bordered & Rounded</h2>
      <p className="mbs2 mbe3">Add visual separation with borders and rounded corners</p>
    </div>
    <div className="mbe6">
      <ReactEmptyState
        title="No data available"
        subtitle="Upload a file to see your data"
        buttonText="Upload File"
        isBordered={true}
        className="empty-state-with-button mbe4"
      />
      <ReactEmptyState
        title="Empty folder"
        subtitle="This folder contains no files yet"
        buttonText="Add Files"
        isRounded={true}
        className="empty-state-with-button mbe4"
      />
      <ReactEmptyState
        title="No messages"
        subtitle="Send your first message"
        buttonText="New Message"
        isBordered={true}
        isRounded={true}
        className="empty-state-with-button"
      />
    </div>

    <div className="mbe4">
      <h2>Custom Icons</h2>
      <p className="mbs2 mbe3">Provide custom icons that match your context using the icon slot</p>
    </div>
    <div className="mbe6">
      <ReactEmptyState
        title="No search results"
        subtitle="Try different keywords or remove filters"
        isRounded={true}
        size="md"
        className="mbe4"
        icon={
          <SearchX
            size={40}
            color="#999"
          />
        }
      />

      <ReactEmptyState
        title="No files"
        subtitle="Drag and drop files here"
        size="md"
        isBordered={true}
        isRounded={true}
        className="mbe4"
        icon={
          <Folder
            size={56}
            color="#999"
          />
        }
      />

      <ReactEmptyState
        title="No favorites yet"
        subtitle="Mark items as favorites to see them here"
        isRounded={true}
        size="md"
        icon={
          <Heart
            size={32}
            color="#ef4444"
          />
        }
      />
    </div>

    <div className="mbe4">
      <h2>Custom Actions</h2>
      <p className="mbs2 mbe3">Use the actions slot for complete control over buttons and interactions</p>
    </div>
    <div className="mbe6">
      <ReactEmptyState
        title="No team members"
        subtitle="Invite people to collaborate"
        size="md"
        isBordered={true}
        isRounded={true}
        className="mbe4"
        actions={
          <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <ReactButton
              variant="primary"
              size="sm"
              shape="rounded"
            >
              <Mail size={16} />
              <span style={{ marginInlineStart: "4px" }}>Invite Members</span>
            </ReactButton>
            <ReactButton
              variant="secondary"
              size="sm"
              shape="rounded"
            >
              Learn More
            </ReactButton>
          </div>
        }
      />

      <ReactEmptyState
        title="Start your journey"
        subtitle="Choose how you want to begin"
        size="md"
        isBordered={true}
        isRounded={true}
        icon={
          <Folder
            size={56}
            color="#999"
          />
        }
        actions={
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center" }}>
            <ReactButton
              variant="primary"
              size="sm"
              shape="rounded"
              isBordered={true}
            >
              <Plus size={16} />
              <span style={{ marginInlineStart: "4px" }}>Create New</span>
            </ReactButton>
            <ReactButton
              variant="primary"
              size="sm"
              shape="rounded"
              isBordered={true}
            >
              <Upload size={16} />
              <span style={{ marginInlineStart: "4px" }}>Import Data</span>
            </ReactButton>
            <ReactButton
              variant="primary"
              size="sm"
              shape="rounded"
              isBordered={true}
            >
              <FileText size={16} />
              <span style={{ marginInlineStart: "4px" }}>Use Template</span>
            </ReactButton>
          </div>
        }
      />
    </div>

    <div className="mbe4">
      <h2>Real-World Examples</h2>
      <p className="mbs2 mbe3">Common patterns for shopping cart, inbox, dashboard, and error states</p>
    </div>
    <div className="mbe6">
      {/* Shopping Cart */}
      <ReactEmptyState
        title="Your cart is empty"
        subtitle="Add items to see them here"
        size="md"
        isBordered={true}
        isRounded={true}
        className="mbe4"
        icon={
          <ShoppingCart
            size={48}
            color="#999"
          />
        }
        actions={
          <ReactButton
            variant="primary"
            shape="rounded"
            size="md"
          >
            Continue Shopping
            <ArrowRight
              size={16}
              style={{ marginInlineStart: "4px" }}
            />
          </ReactButton>
        }
      />

      {/* Inbox Zero */}
      <ReactEmptyState
        title="Inbox Zero! 🎉"
        subtitle="All caught up. No new messages."
        size="md"
        isRounded={true}
        className="mbe4"
        icon={
          <Inbox
            size={40}
            color="#10b981"
          />
        }
      />

      {/* Dashboard */}
      <ReactEmptyState
        title="No analytics data yet"
        subtitle="Data will appear once you start tracking"
        isBordered={true}
        isRounded={true}
        className="mbe4"
        icon={
          <BarChart3
            size={56}
            color="#6366f1"
          />
        }
        actions={
          <ReactButton
            isGhost={true}
            size="md"
          >
            View Documentation
          </ReactButton>
        }
      />

      {/* Error State */}
      <ReactEmptyState
        title="Something went wrong"
        subtitle="Please try again or contact support"
        size="md"
        isRounded={true}
        isBordered={true}
        icon={
          <AlertCircle
            size={48}
            color="#ef4444"
          />
        }
        actions={
          <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <ReactButton
              variant="danger"
              shape="rounded"
              isBordered={true}
              size="md"
            >
              Try Again
            </ReactButton>
            <ReactButton
              variant="secondary"
              shape="rounded"
              isBordered={true}
              size="md"
            >
              <span style={{ marginInlineEnd: "0.125rem" }}>Contact Support</span>
              <Send size={16} />
            </ReactButton>
          </div>
        }
      />
    </div>

    <div className="mbe4">
      <h2>State-Specific Variants</h2>
      <p className="mbs2 mbe3">Empty states for different scenarios with appropriate icons and actions</p>
    </div>
    <div className="mbe6">
      {/* No Results */}
      <ReactEmptyState
        title="No matches found"
        subtitle="Try adjusting your filters or search"
        size="md"
        isBordered={true}
        className="mbe4"
        icon={
          <SearchX
            size={40}
            color="#999"
          />
        }
        actions={
          <ReactButton
            variant="secondary"
            shape="rounded"
            size="sm"
            onClick={handleClearFilters}
          >
            Clear Filters
          </ReactButton>
        }
      />

      {/* Warning State */}
      <ReactEmptyState
        title="Action Required"
        subtitle="This action cannot be undone"
        size="md"
        isBordered={true}
        isRounded={true}
        className="mbe4"
        icon={
          <AlertCircle
            size={48}
            color="#f59e0b"
          />
        }
        actions={
          <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <ReactButton
              variant="warning"
              size="md"
            >
              Proceed Anyway
            </ReactButton>
            <ReactButton
              variant="secondary"
              size="md"
            >
              Cancel
            </ReactButton>
          </div>
        }
      />

      {/* Access Denied */}
      <ReactEmptyState
        title="Access Required"
        subtitle="You don't have permission to view this"
        size="md"
        isBordered={true}
        icon={
          <Lock
            size={48}
            color="#999"
          />
        }
        actions={
          <ReactButton
            variant="primary"
            shape="rounded"
            size="md"
          >
            Request Access
          </ReactButton>
        }
      />
    </div>

    <div className="mbe4">
      <h2>Compact Size Showcase</h2>
      <p className="mbs2 mbe3">Small empty states work great in sidebars, cards, or dense layouts</p>
    </div>
    <div
      style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--ag-space-4)" }}
      className="mbe6"
    >
      <ReactEmptyState
        title="No tasks"
        subtitle="Create a task to get started"
        buttonText="New Task"
        size="sm"
        isBordered={true}
        isRounded={true}
        className="empty-state-with-button"
      />
      <ReactEmptyState
        title="No events"
        subtitle="Schedule your first event"
        buttonText="Add Event"
        size="sm"
        isBordered={true}
        isRounded={true}
        className="empty-state-with-button"
      />
      <ReactEmptyState
        title="No contacts"
        subtitle="Add contacts to your list"
        buttonText="Add Contact"
        size="sm"
        isBordered={true}
        isRounded={true}
        className="empty-state-with-button"
      />
      <ReactEmptyState
        title="No notes"
        subtitle="Jot down your first note"
        buttonText="Create Note"
        size="sm"
        isBordered={true}
        isRounded={true}
        className="empty-state-with-button"
      />
    </div>

    <div className="mbe4">
      <h2>CSS Shadow Parts Customization</h2>
      <p className="mbs2 mbe3">
        Use CSS Shadow Parts to customize appearance:
        <code>::part(ag-empty-state)</code>,
        <code>::part(ag-icon)</code>,
        <code>::part(ag-title)</code>,
        <code>::part(ag-subtitle)</code>,
        <code>::part(ag-actions)</code>
      </p>
    </div>
    <div className="mbe6">
      {/* Colorful Accent */}
      <ReactEmptyState
        title="Colorful Accent"
        subtitle="Icon with background circle"
        buttonText="Start Now"
        isBordered={true}
        className="custom-empty-state-3"
        icon={
          <Rocket
            size={48}
            color="#f59e0b"
          />
        }
      />
    </div>

    <div className="mbe4">
      <h2>Minimal Empty States</h2>
      <p className="mbs2 mbe3">Simple empty states without icons for clean, understated designs</p>
    </div>
    <div className="mbe6">
      <ReactEmptyState
        title="Nothing here yet"
        size="sm"
        isRounded={true}
        className="mbe4"
      />
      <ReactEmptyState
        title="No activity"
        subtitle="Recent activity will appear here"
        size="md"
        isRounded={true}
        className="mbe4"
      />
      <ReactEmptyState
        title="Empty"
        isRounded={true}
        size="md"
      />
    </div>

    <div className="mbe4">
      <h2>Large Welcome States</h2>
      <p className="mbs2 mbe3">Spacious layouts perfect for onboarding and full-page empty states</p>
    </div>
    <ReactEmptyState
      title="Welcome to Your Dashboard"
      subtitle="Add some content and you'll see it appear here. You'll be able to manage projects and collaborate with your team."
      buttonText="Get Started"
      size="lg"
      isBordered={true}
      isRounded={true}
      className="empty-state-with-button mbe6"
      icon={
        <Sparkles
          size={48}
          color="#6366f1"
        />
      }
    />

    <div className="mbe4">
      <h2>Multiple Button Variants</h2>
      <p className="mbs2 mbe3">Showcase different button styles in custom actions</p>
    </div>
    <ReactEmptyState
      title="Choose your action"
      subtitle="Different button styles for different purposes"
      size="md"
      isBordered={true}
      isRounded={true}
      className="mbe6"
      icon={
        <AlertCircle
          size={40}
          color="#999"
        />
      }
      actions={
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center" }}>
          <ReactButton
            variant="primary"
            size="sm"
            shape="rounded"
          >
            Primary Action
          </ReactButton>
          <ReactButton
            variant="secondary"
            size="sm"
            shape="rounded"
            isBordered={true}
          >
            Secondary
          </ReactButton>
          <ReactButton
            size="sm"
            shape="rounded"
            isBordered={true}
          >
            Default
          </ReactButton>
        </div>
      }
    />

    <div className="mbe4">
      <h2>Button Size Variations</h2>
      <p className="mbs2 mbe3">Match button sizes to your empty state size for visual harmony</p>
    </div>
    <ReactEmptyState
      title="Different Button Sizes"
      subtitle="Choose the right size for your layout"
      size="md"
      isBordered={true}
      isRounded={true}
      className="mbe6"
      icon={
        <Folder
          size={48}
          color="#999"
        />
      }
      actions={
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
          <ReactButton
            variant="primary"
            size="sm"
            shape="rounded"
            isBordered={true}
          >
            <Mic size={14} />
            <span style={{ marginInlineStart: "4px" }}>Small</span>
          </ReactButton>
          <ReactButton
            variant="primary"
            size="md"
            shape="rounded"
            isBordered={true}
          >
            <Mic size={18} />
            <span style={{ marginInlineStart: "4px" }}>Medium</span>
          </ReactButton>
          <ReactButton
            variant="primary"
            size="lg"
            shape="rounded"
            isBordered={true}
          >
            <Mic size={24} />
            <span style={{ marginInlineStart: "4px" }}>Large</span>
          </ReactButton>
        </div>
      }
    />
  </section>
  );
};

export default EmptyStateExamples;
