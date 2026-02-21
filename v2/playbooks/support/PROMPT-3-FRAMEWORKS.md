# Support Center Implementation Guide

> A comprehensive guide for building a Support Center application using AgnosticUI components across React, Vue, and Lit frameworks.

## Project Setup

This guide creates three separate Vite projects demonstrating AgnosticUI's multi-framework capabilities, each implementing the same Support Center with four tabbed sections.

### Prerequisites

- Ensure you're in the `v2/playbooks/support` directory (relative to AgnosticUI root)
- Design assets are located in `./design/`:
  - `logo.svg` (AgnosticUI logo - blue icon + dark navy wordmark for light mode)
  - `logo-dark-mode.svg` (AgnosticUI logo - blue icon + near-white `#F0F0F0` wordmark for dark mode)
- No Figma mockups are available — this specification serves as the design reference

### Create Three Vite Projects

_Note: The Vite projects MUST all be Typescript enabled because the agnosticui-cli only works properly in a properly setup Typescript project._

Run these commands from `v2/playbooks/support`:

```bash
# Create React project
npm create vite@latest react-example -- --template react-ts

# Create Vue project
npm create vite@latest vue-example -- --template vue-ts

# Create Lit project
npm create vite@latest lit-example -- --template lit-ts
```

### Install Dependencies

**React Example:**

```bash
cd react-example
npm install
npm install lucide-react
npm install lit  # Required before CLI init
cd ..
```

**Vue Example:**

```bash
cd vue-example
npm install
npm install lucide-vue-next
npm install lit  # Required before CLI init
cd ..
```

**Lit Example:**

```bash
cd lit-example
npm install
npm install lucide
npm install lit  # Required before CLI init
cd ..
```

### Initialize AgnosticUI

For each project, initialize AgnosticUI using the CLI and add required components:

**React Example:**

```bash
cd react-example
npx agnosticui-cli init --framework react --skip-prompts
npx agnosticui-cli add Button Tabs Dialog Drawer MessageBubble Combobox Toggle Radio Rating Select Pagination Tooltip Slider Popover Menu Kbd
cd ..
```

**Vue Example:**

```bash
cd vue-example
npx agnosticui-cli init --framework vue --skip-prompts
npx agnosticui-cli add Button Tabs Dialog Drawer MessageBubble Combobox Toggle Radio Rating Select Pagination Tooltip Slider Popover Menu Kbd
cd ..
```

**Lit Example:**

```bash
cd lit-example
npx agnosticui-cli init --framework lit --skip-prompts
npx agnosticui-cli add Button Tabs Dialog Drawer MessageBubble Combobox Toggle Radio Rating Select Pagination Tooltip Slider Popover Menu Kbd
cd ..
```

The CLI will:

- Set up the AgnosticUI configuration for your chosen framework
- Install required dependencies
- Add component files to your project
- Configure styling and imports

**Post-init verification:**

- Ensure `ag-tokens.css` and `ag-tokens-dark.css` are in `src/components/ag/styles/`
- Import these in your main entry file (e.g., `main.tsx`, `main.ts`)

### CRITICAL: Vue-Specific Configuration

**1. Update `vue-example/vite.config.ts` to recognize ag-* custom elements:**

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Treat ag-* tags as custom elements (web components)
          isCustomElement: (tag) => tag.startsWith('ag-'),
        },
      },
    }),
  ],
})
```

Without this, Vue will show warnings: `[Vue warn]: Failed to resolve component: ag-*`

**2. Import BOTH token files in `vue-example/src/main.ts`:**

```typescript
import { createApp } from 'vue'
import './components/ag/styles/ag-tokens.css'
import './components/ag/styles/ag-tokens-dark.css'  // DO NOT FORGET THIS!
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
```

### Font Setup

Add Inter font to each project's `index.html` in the `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

### Asset Setup

Copy both logos to each project's `public/` folder:

```bash
# React
cp design/logo.svg react-example/public/logo.svg
cp design/logo-dark-mode.svg react-example/public/logo-dark-mode.svg

# Vue
cp design/logo.svg vue-example/public/logo.svg
cp design/logo-dark-mode.svg vue-example/public/logo-dark-mode.svg

# Lit
cp design/logo.svg lit-example/public/logo.svg
cp design/logo-dark-mode.svg lit-example/public/logo-dark-mode.svg
```

### Icon Imports Reference

**React (lucide-react):**

```jsx
import {
  MessageCircle, Search, Ticket, Settings, Send, Phone, Star,
  ChevronRight, ChevronDown, User, ArrowRight, X, Menu,
  Home, HelpCircle, BookOpen, Filter, MoreVertical, Eye,
  RefreshCw, Bell, BellOff, Mail, Smartphone, Clock, Globe,
  Keyboard, Sun, Moon
} from "lucide-react";
```

**Vue (lucide-vue-next):**

```vue
<script setup>
import {
  MessageCircle, Search, Ticket, Settings, Send, Phone, Star,
  ChevronRight, ChevronDown, User, ArrowRight, X, Menu,
  Home, HelpCircle, BookOpen, Filter, MoreVertical, Eye,
  RefreshCw, Bell, BellOff, Mail, Smartphone, Clock, Globe,
  Keyboard, Sun, Moon
} from "lucide-vue-next";
</script>
```

**Lit (inline SVG):**

```typescript
// Use inline SVG for Lit (lucide export format doesn't work directly)
const menuIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;
const sendIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>`;
const searchIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`;
const starIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
// ...add other icons as needed using the same inline SVG pattern
```

---

## Design Specification

**Design Reference:** No Figma mockups available. This specification document serves as the authoritative design reference.

**Visual Mockups:** None. Implementation is based on the ASCII diagrams and specifications below.

**IMPORTANT: Do NOT use emoji anywhere in this implementation.** All icons must be rendered using Lucide icon components (React/Vue) or inline SVG (Lit). The ASCII diagrams in this document use `[IconName]` notation to represent Lucide icons.

## Application Overview

A **Support Center** application that provides four major support workflows via a tabbed interface. This playbook is the natural continuation of the AgnosticUI playbook series: Login -> Onboarding -> Dashboard -> **Support** (when users need help).

The Support Center features:

1. **Header** — Brand logo, user info, theme toggle
2. **Tabs** — Four support sections
3. **Tab 1: Live Chat** — Real-time conversation with a support agent
4. **Tab 2: Knowledge Base** — Searchable FAQ / article library
5. **Tab 3: My Tickets** — Filterable list of support tickets with detail drawer
6. **Tab 4: Settings** — Notification and contact preferences

## Responsive Breakpoints

- **Mobile (< 768px):** Single column, tabs stack or scroll horizontally, drawer full-width
- **Tablet (768px - 1199px):** Two-column layouts where applicable, drawer 60% width
- **Desktop (>= 1200px):** Full-width tabs, drawer 40% width, chat sidebar layout

---

## Component Hierarchy

### Header

Use a simple header bar (not the full `ag-header` component — keep it lightweight for a support page):

**Header Content:**

- **Left:** Logo image (swap based on theme)
- **Center:** "Support Center" title text
- **Right:** Theme toggle (Sun/Moon icon) + User name text

```html
<header class="support-header">
  <div class="header-left">
    <img src="/logo.svg" alt="AgnosticUI" class="header-logo" />
  </div>
  <div class="header-center">
    <h1>Support Center</h1>
  </div>
  <div class="header-right">
    <button class="theme-toggle" aria-label="Toggle theme">
      <!-- Sun/Moon icon -->
    </button>
    <span class="user-name">Jane Doe</span>
  </div>
</header>
```

**Header CSS:**

```css
.support-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--ag-space-3) var(--ag-space-5);
  background: var(--ag-background-primary);
  border-bottom: 1px solid var(--ag-border-subtle);
}

.header-logo {
  height: 32px;
}

.header-center h1 {
  font-size: var(--ag-font-size-lg);
  font-weight: 600;
  margin: 0;
  color: var(--ag-text-primary);
}

.header-right {
  display: flex;
  align-items: center;
  gap: var(--ag-space-3);
}

.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--ag-text-secondary);
  padding: var(--ag-space-2);
  border-radius: var(--ag-radius-sm);
}

.theme-toggle:hover {
  background: var(--ag-background-secondary);
}
```

---

### Main Tabs

Use the AgnosticUI Tabs component to organize the four support sections. Wrap each tab label in a `.tab-label` span with a nested `.tab-text` span for the text — this enables mobile-responsive icon-only tabs:

```html
<ag-tabs aria-label="Support sections">
  <ag-tab slot="tab" panel="chat">
    <span class="tab-label">[MessageCircle]<span class="tab-text">Live Chat</span></span>
  </ag-tab>
  <ag-tab slot="tab" panel="kb">
    <span class="tab-label">[BookOpen]<span class="tab-text">Knowledge Base</span></span>
  </ag-tab>
  <ag-tab slot="tab" panel="tickets">
    <span class="tab-label">[Ticket]<span class="tab-text">My Tickets</span></span>
  </ag-tab>
  <ag-tab slot="tab" panel="settings">
    <span class="tab-label">[Settings]<span class="tab-text">Settings</span></span>
  </ag-tab>

  <ag-tab-panel slot="panel" name="chat"><!-- Tab 1 content --></ag-tab-panel>
  <ag-tab-panel slot="panel" name="kb"><!-- Tab 2 content --></ag-tab-panel>
  <ag-tab-panel slot="panel" name="tickets"><!-- Tab 3 content --></ag-tab-panel>
  <ag-tab-panel slot="panel" name="settings"><!-- Tab 4 content --></ag-tab-panel>
</ag-tabs>
```

Tab labels use two text spans: `.tab-text` (full label, desktop) and `.tab-text-short` (abbreviated, mobile). At `≤480px` the layout switches to stacked (icon above, short label below):

| Panel | Full label | Mobile label |
|-------|-----------|--------------|
| chat | Live Chat | Chat |
| kb | Knowledge Base | Docs |
| tickets | My Tickets | Tickets |
| settings | Settings | Settings |

**Required CSS** (add to global stylesheet for React/Vue; add to `static styles` for Lit):

```css
.tab-label {
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
}

.tab-text-short {
  display: none;
}

/*
 * On mobile (≤640px): stacked icon + short label, tabs spread full width.
 * ag-tabs exposes part="ag-tabs-tablist" and ag-tab exposes part="ag-tab",
 * allowing shadow DOM internals to be targeted via ::part() from outside.
 */
@media (max-width: 640px) {
  ag-tabs::part(ag-tabs-tablist) {
    justify-content: space-around;
  }

  ag-tab::part(ag-tab) {
    padding: var(--ag-space-1) var(--ag-space-2);
  }

  .tab-label {
    flex-direction: column;
    align-items: center;
    gap: 2px;
    white-space: nowrap;
  }

  .tab-text {
    display: none;
  }

  .tab-text-short {
    display: inline;
  }
}
```

> **Note:** For React, use `className="tab-label"`, `className="tab-text"`, `className="tab-text-short"`. For Vue and Lit, use `class=`. In Lit's Shadow DOM, these styles must live in `static styles = css\`...\`` — the global stylesheet does not apply.

---

## Tab 1: Live Chat

A simulated real-time chat interface between a user and a support agent.

### Layout

```
+--------------------------------------------------+
|  Agent: Sarah K.  [Phone] [Popover: Agent info]  |
+--------------------------------------------------+
|                                                    |
|  [Agent bubble]  Hi! How can I help today?         |
|                                                    |
|        I'm having trouble with billing. [User]     |
|                                                    |
|  [Agent bubble]  I'd be happy to help with         |
|  that. Can you share your account number?          |
|                                                    |
|        Sure, it's AC-12345 [User]                  |
|                                                    |
|  [Agent bubble]  Got it, let me look that up.      |
|                                                    |
+--------------------------------------------------+
|  [Input: Type your message...]     [Send button]  |
+--------------------------------------------------+
|                                                    |
|  Was this helpful?  [Rating: 1-5 stars]           |
|  [Dialog: End Chat confirmation]                   |
+--------------------------------------------------+
```

### Components Used

| Component | Usage |
|-----------|-------|
| `ag-message-bubble` | Chat messages (agent = left/default, user = right/variant) |
| `ag-button` | Send button, End Chat button |
| `ag-dialog` | "End Chat" confirmation modal |
| `ag-popover` | Agent status/info popover triggered by agent name |
| `ag-rating` | "Was this helpful?" star rating at conversation end |

### Implementation Details

**Message Bubble pattern:**

```html
<!-- Agent message (left-aligned) -->
<ag-message-bubble>
  Hi! How can I help you today?
</ag-message-bubble>

<!-- User message (right-aligned) -->
<ag-message-bubble variant="primary" alignment="end">
  I'm having trouble with my billing.
</ag-message-bubble>
```

**Chat container CSS:**

```css
.chat-container {
  display: flex;
  flex-direction: column;
  height: 500px;
  max-height: 70vh;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: var(--ag-space-4);
  display: flex;
  flex-direction: column;
  gap: var(--ag-space-3);
}

.chat-input-bar {
  display: flex;
  gap: var(--ag-space-2);
  padding: var(--ag-space-3);
  border-top: 1px solid var(--ag-border-subtle);
}

.chat-input-bar input {
  flex: 1;
  padding: var(--ag-space-2) var(--ag-space-3);
  border: 1px solid var(--ag-border-subtle);
  border-radius: var(--ag-radius-md);
  font-size: var(--ag-font-size-base);
  background: var(--ag-background-primary);
  color: var(--ag-text-primary);
}
```

**Agent info Popover:**

```html
<ag-popover>
  <ag-button slot="trigger" variant="link">Sarah K.</ag-button>
  <div slot="content" class="agent-info">
    <p><strong>Sarah K.</strong></p>
    <p>Senior Support Agent</p>
    <p>Avg. response time: 2 min</p>
    <p>Rating: 4.8/5</p>
  </div>
</ag-popover>
```

**End Chat Dialog:**

```html
<ag-dialog id="end-chat-dialog">
  <div slot="header">End Chat Session</div>
  <div slot="body">
    <p>Are you sure you want to end this chat session?</p>
    <p>You can still view the chat history in "My Tickets".</p>
  </div>
  <div slot="footer">
    <ag-button variant="secondary" onclick="closeDialog()">Cancel</ag-button>
    <ag-button variant="danger" onclick="endChat()">End Chat</ag-button>
  </div>
</ag-dialog>
```

**Rating after chat:**

```html
<div class="chat-rating">
  <p>How was your experience?</p>
  <ag-rating value="0" max="5"></ag-rating>
</div>
```

### Chat State Management

Manage chat messages as an array of objects:

```typescript
interface ChatMessage {
  id: number;
  sender: 'agent' | 'user';
  text: string;
  timestamp: string;
}

// Pre-populate with demo conversation
const messages: ChatMessage[] = [
  { id: 1, sender: 'agent', text: 'Hi! How can I help you today?', timestamp: '10:30 AM' },
  { id: 2, sender: 'user', text: "I'm having trouble with my billing.", timestamp: '10:31 AM' },
  { id: 3, sender: 'agent', text: 'I\'d be happy to help with that. Can you share your account number?', timestamp: '10:31 AM' },
  { id: 4, sender: 'user', text: 'Sure, it\'s AC-12345.', timestamp: '10:32 AM' },
  { id: 5, sender: 'agent', text: 'Got it! Let me pull up your account. One moment please.', timestamp: '10:32 AM' },
];
```

When the user types a message and clicks Send (or presses Enter), append the message to the array and scroll to the bottom. Simulate an agent response after a 1-second delay.

---

## Tab 2: Knowledge Base / FAQ

A searchable FAQ library with article cards and pagination.

### Layout

```
+---------------------------------------------------+
|  [Combobox: Search articles...]   [Kbd: /]         |
+---------------------------------------------------+
|                                                     |
|  +-----------------------------------------------+ |
|  | Getting Started with Billing                   | |
|  | Learn how to manage your subscription...       | |
|  | [Rating: 4.5]  [Read more ->]                  | |
|  +-----------------------------------------------+ |
|  | How to Reset Your Password                     | |
|  | Step-by-step guide to resetting...             | |
|  | [Rating: 4.8]  [Read more ->]                  | |
|  +-----------------------------------------------+ |
|  | Integrations Guide                             | |
|  | Connect your account with third-party...       | |
|  | [Rating: 4.2]  [Read more ->]                  | |
|  +-----------------------------------------------+ |
|                                                     |
|  [Pagination: < 1 2 3 4 ... 8 >]                  |
+---------------------------------------------------+
```

### Components Used

| Component | Usage |
|-----------|-------|
| `ag-combobox` | Search/filter articles with autocomplete suggestions |
| `ag-pagination` | Navigate through article pages |
| `ag-rating` | Show article helpfulness rating (read-only) |
| `ag-kbd` | Keyboard shortcut hint for focusing search (`/`) |
| `ag-button` | "Read more" links |

### Implementation Details

**Article data model:**

```typescript
interface Article {
  id: number;
  title: string;
  summary: string;
  category: string;
  rating: number;
  views: number;
}

const articles: Article[] = [
  { id: 1, title: 'Getting Started with Billing', summary: 'Learn how to manage your subscription, update payment methods, and understand your invoice.', category: 'Billing', rating: 4.5, views: 1234 },
  { id: 2, title: 'How to Reset Your Password', summary: 'Step-by-step guide to resetting your account password securely.', category: 'Account', rating: 4.8, views: 2567 },
  { id: 3, title: 'Integrations Guide', summary: 'Connect your account with third-party services like Slack, Jira, and GitHub.', category: 'Integrations', rating: 4.2, views: 892 },
  { id: 4, title: 'Understanding Usage Limits', summary: 'Everything you need to know about API rate limits and usage quotas.', category: 'API', rating: 4.0, views: 756 },
  { id: 5, title: 'Team Management', summary: 'Add team members, set roles and permissions, and manage access controls.', category: 'Account', rating: 4.6, views: 1100 },
  { id: 6, title: 'Webhook Configuration', summary: 'Set up webhooks to receive real-time notifications about account events.', category: 'API', rating: 3.9, views: 445 },
  { id: 7, title: 'Export Your Data', summary: 'How to export your data in CSV, JSON, or PDF formats for reporting.', category: 'Data', rating: 4.3, views: 678 },
  { id: 8, title: 'Single Sign-On Setup', summary: 'Configure SSO with SAML or OAuth for your organization.', category: 'Security', rating: 4.7, views: 534 },
  { id: 9, title: 'Custom Domain Configuration', summary: 'Use your own domain for branded customer experiences.', category: 'Customization', rating: 4.1, views: 321 },
  { id: 10, title: 'Troubleshooting Email Delivery', summary: 'Diagnose and fix issues with transactional email delivery.', category: 'Email', rating: 4.4, views: 987 },
  { id: 11, title: 'API Authentication', summary: 'Learn about API keys, OAuth tokens, and authentication best practices.', category: 'API', rating: 4.6, views: 1456 },
  { id: 12, title: 'Upgrading Your Plan', summary: 'Compare plans and upgrade to unlock additional features.', category: 'Billing', rating: 4.3, views: 890 },
];
```

**Combobox for search:**

```html
<div class="kb-search-bar">
  <ag-combobox
    placeholder="Search articles..."
    .options=${articleTitles}
  ></ag-combobox>
  <ag-kbd>/ </ag-kbd>
</div>
```

The Kbd component shows a keyboard shortcut hint. Add an event listener on the document for the `/` key to focus the combobox search input.

```typescript
document.addEventListener('keydown', (e) => {
  if (e.key === '/' && document.activeElement?.tagName !== 'INPUT') {
    e.preventDefault();
    // Focus the combobox input
  }
});
```

**Article card:**

```html
<div class="article-card">
  <h3 class="article-title">{article.title}</h3>
  <p class="article-summary">{article.summary}</p>
  <div class="article-footer">
    <ag-rating value="{article.rating}" max="5" readonly></ag-rating>
    <ag-button variant="link" size="sm">
      Read more <ChevronRight size={14} />
    </ag-button>
  </div>
</div>
```

**Article card CSS:**

```css
.article-card {
  padding: var(--ag-space-4);
  border: 1px solid var(--ag-border-subtle);
  border-radius: var(--ag-radius-md);
  margin-bottom: var(--ag-space-3);
  background: var(--ag-background-primary);
}

.article-card:hover {
  border-color: var(--ag-primary);
}

.article-title {
  font-size: var(--ag-font-size-md);
  font-weight: 600;
  margin: 0 0 var(--ag-space-2);
  color: var(--ag-text-primary);
}

.article-summary {
  font-size: var(--ag-font-size-sm);
  color: var(--ag-text-secondary);
  margin: 0 0 var(--ag-space-3);
}

.article-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

**Pagination:**

Display 4 articles per page. Use the Pagination component:

```html
<ag-pagination
  total="{totalArticles}"
  per-page="4"
  current="{currentPage}"
></ag-pagination>
```

Listen for the `change` event to update the current page and re-slice the articles array.

**Keyboard shortcut CSS:**

```css
.kb-search-bar {
  display: flex;
  align-items: center;
  gap: var(--ag-space-3);
  margin-bottom: var(--ag-space-4);
}

.kb-search-bar ag-combobox {
  flex: 1;
}
```

---

## Tab 3: My Tickets

A filterable, paginated list of support tickets with a slide-in detail drawer.

### Layout

```
+---------------------------------------------------+
|  Filter: [Select: All / Open / Resolved]           |
+---------------------------------------------------+
|                                                     |
|  +-----------------------------------------------+ |
|  | #1042  Billing discrepancy                     | |
|  | [Tooltip: "Open since Jan 15"]                 | |
|  | Status: Open   Priority: High                  | |
|  | [...Menu: View | Close | Reopen]               | |
|  +-----------------------------------------------+ |
|  | #1039  Password reset not working              | |
|  | Status: Resolved   Priority: Medium            | |
|  | [...Menu: View | Reopen]                        | |
|  +-----------------------------------------------+ |
|  | ...                                             | |
|  +-----------------------------------------------+ |
|                                                     |
|  [Pagination: < 1 2 3 >]                          |
+---------------------------------------------------+

+------- Drawer (slides from right) ----------------+
|  Ticket #1042                            [X Close] |
|  ------------------------------------------------  |
|  Subject: Billing discrepancy                      |
|  Status: Open                                      |
|  Priority: High                                    |
|  Created: Jan 15, 2025                             |
|  ------------------------------------------------  |
|  Description:                                      |
|  I was charged twice for my January subscription.  |
|  The amounts are $29.99 each, total $59.98.        |
|  My expected charge was $29.99.                    |
|  ------------------------------------------------  |
|  Agent response:                                   |
|  We're looking into this. A refund has been        |
|  initiated for the duplicate charge.               |
+---------------------------------------------------+
```

### Components Used

| Component | Usage |
|-----------|-------|
| `ag-select` | Filter tickets by status (All, Open, Resolved) |
| `ag-pagination` | Navigate through ticket pages |
| `ag-menu` | Context actions on each ticket row (View, Close, Reopen) |
| `ag-drawer` | Slide-in panel showing ticket detail |
| `ag-tooltip` | Status indicator tooltips on ticket rows |
| `ag-button` | Actions within drawer |

### Implementation Details

**Ticket data model:**

```typescript
interface Ticket {
  id: number;
  subject: string;
  status: 'open' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high';
  created: string;
  description: string;
  agentResponse?: string;
}

const tickets: Ticket[] = [
  { id: 1042, subject: 'Billing discrepancy', status: 'open', priority: 'high', created: 'Jan 15, 2025', description: 'I was charged twice for my January subscription. The amounts are $29.99 each, total $59.98. My expected charge was $29.99.', agentResponse: "We're looking into this. A refund has been initiated for the duplicate charge." },
  { id: 1039, subject: 'Password reset not working', status: 'resolved', priority: 'medium', created: 'Jan 12, 2025', description: 'The password reset email never arrives. I have checked spam folders.', agentResponse: 'This was caused by a temporary email delivery issue which has been resolved. Please try again.' },
  { id: 1035, subject: 'API rate limit too low', status: 'open', priority: 'medium', created: 'Jan 10, 2025', description: 'Our application is hitting the rate limit frequently during peak hours. We need a higher quota.', agentResponse: 'We can increase your rate limit. Please confirm your current plan so we can provide options.' },
  { id: 1031, subject: 'Cannot export data to CSV', status: 'resolved', priority: 'low', created: 'Jan 8, 2025', description: 'The CSV export button returns a 500 error for datasets larger than 10,000 rows.', agentResponse: 'This has been fixed in our latest release. Large exports now process in the background and you will receive an email link.' },
  { id: 1028, subject: 'SSO configuration error', status: 'open', priority: 'high', created: 'Jan 5, 2025', description: 'SAML SSO is returning an invalid assertion error. Our IdP is Okta.', agentResponse: 'Please share your SAML metadata XML and we will review the assertion consumer URL configuration.' },
  { id: 1024, subject: 'Webhook delivery failures', status: 'closed', priority: 'medium', created: 'Jan 3, 2025', description: 'Webhooks to our endpoint at api.example.com are failing with timeouts.', agentResponse: 'The issue was on our side due to DNS resolution delays. This has been resolved.' },
  { id: 1020, subject: 'Feature request: dark mode for emails', status: 'open', priority: 'low', created: 'Dec 28, 2024', description: 'It would be great if transactional emails supported dark mode styling.', agentResponse: undefined },
  { id: 1015, subject: 'Invoice formatting issue', status: 'resolved', priority: 'low', created: 'Dec 22, 2024', description: 'The PDF invoice has overlapping text in the line items section when there are more than 20 items.', agentResponse: 'Fixed in the latest billing update. Please regenerate your invoice.' },
];
```

**Status filter with Select:**

```html
<div class="ticket-filter">
  <ag-select
    label="Filter by status"
    .options=${[
      { value: 'all', label: 'All Tickets' },
      { value: 'open', label: 'Open' },
      { value: 'resolved', label: 'Resolved' },
      { value: 'closed', label: 'Closed' },
    ]}
  ></ag-select>
</div>
```

**Ticket row with Menu and Tooltip:**

Use `ag-menu-button` (not `ag-menu`) for the context menu. The component only has two slots:
- **Default slot** — becomes the button label (put your icon here)
- **`slot="menu"`** — the `ag-menu` dropdown

> **Critical:** There is NO `slot="trigger"` in `ag-menu-button`. Do not wrap the icon in `slot="trigger"` — it will not render. The icon must be direct default-slot content.

```html
<!-- Lit -->
<div class="ticket-row">
  <div class="ticket-info">
    <span class="ticket-id">#{ticket.id}</span>
    <span class="ticket-subject">{ticket.subject}</span>
    <ag-tooltip content="Open since {ticket.created}">
      <span class="status-badge status-{ticket.status}">{ticket.status}</span>
    </ag-tooltip>
    <span class="priority-badge priority-{ticket.priority}">{ticket.priority}</span>
  </div>
  <ag-menu-button ghost aria-label="Ticket actions">
    [MoreVertical icon]                <!-- default slot → button label -->
    <ag-menu slot="menu">              <!-- named slot → dropdown -->
      <ag-menu-item value="view">View Details</ag-menu-item>
      <ag-menu-item value="close">Close Ticket</ag-menu-item>
      <ag-menu-item value="reopen">Reopen</ag-menu-item>
    </ag-menu>
  </ag-menu-button>
</div>
```

**React:** `<ReactMenuButton ghost>` — pass `<MoreVertical>` as a direct child (default slot), `<ReactMenu slot="menu">` for items.

**Vue:** `<VueMenu ghost>` — pass `<MoreVertical>` as direct default slot content, menu items in `<template #menu>`.

**Ticket row CSS:**

```css
.ticket-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--ag-space-3) var(--ag-space-4);
  border: 1px solid var(--ag-border-subtle);
  border-radius: var(--ag-radius-md);
  margin-bottom: var(--ag-space-2);
  background: var(--ag-background-primary);
}

.ticket-row:hover {
  background: var(--ag-background-secondary);
}

/* flex: 1 + min-width: 0 allows ticket-info to fill available space and shrink
   without overflowing; flex-shrink: 0 on ag-menu-button anchors it to the right */
.ticket-info {
  display: flex;
  align-items: center;
  gap: var(--ag-space-3);
  flex-wrap: wrap;
  flex: 1;
  min-width: 0;
}

.ticket-row ag-menu-button {
  flex-shrink: 0;
}

.ticket-id {
  font-weight: 600;
  color: var(--ag-text-secondary);
  font-size: var(--ag-font-size-sm);
}

.ticket-subject {
  font-weight: 500;
  color: var(--ag-text-primary);
}

.status-badge {
  font-size: var(--ag-font-size-xs);
  padding: var(--ag-space-1) var(--ag-space-2);
  border-radius: var(--ag-radius-sm);
  font-weight: 500;
  text-transform: capitalize;
}

.status-open { background: #dbeafe; color: #1d4ed8; }
.status-resolved { background: #dcfce7; color: #15803d; }
.status-closed { background: #f3f4f6; color: #6b7280; }

.priority-badge {
  font-size: var(--ag-font-size-xs);
  padding: var(--ag-space-1) var(--ag-space-2);
  border-radius: var(--ag-radius-sm);
  font-weight: 500;
  text-transform: capitalize;
}

.priority-high { background: #fee2e2; color: #dc2626; }
.priority-medium { background: #fef3c7; color: #d97706; }
.priority-low { background: #f3f4f6; color: #6b7280; }
```

**Drawer for ticket detail:**

```html
<ag-drawer
  .open=${drawerOpen}
  placement="end"
  aria-label="Ticket details"
>
  <div slot="header">
    <h2>Ticket #{selectedTicket.id}</h2>
  </div>
  <div slot="body" class="drawer-body">
    <dl class="ticket-details">
      <dt>Subject</dt>
      <dd>{selectedTicket.subject}</dd>
      <dt>Status</dt>
      <dd>{selectedTicket.status}</dd>
      <dt>Priority</dt>
      <dd>{selectedTicket.priority}</dd>
      <dt>Created</dt>
      <dd>{selectedTicket.created}</dd>
    </dl>
    <h3>Description</h3>
    <p>{selectedTicket.description}</p>
    {selectedTicket.agentResponse && (
      <>
        <h3>Agent Response</h3>
        <p>{selectedTicket.agentResponse}</p>
      </>
    )}
  </div>
  <div slot="footer">
    <ag-button variant="secondary" onclick="closeDrawer()">Close</ag-button>
  </div>
</ag-drawer>
```

**Drawer CSS:**

```css
.drawer-body {
  padding: var(--ag-space-4);
}

.ticket-details {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: var(--ag-space-2);
  margin-bottom: var(--ag-space-4);
}

.ticket-details dt {
  font-weight: 600;
  color: var(--ag-text-secondary);
  font-size: var(--ag-font-size-sm);
}

.ticket-details dd {
  margin: 0;
  color: var(--ag-text-primary);
}
```

**Pagination for tickets:**

Display 5 tickets per page:

```html
<ag-pagination
  total="{filteredTickets.length}"
  per-page="5"
  current="{currentPage}"
></ag-pagination>
```

---

## Tab 4: Settings & Preferences

Notification and contact preferences for the support experience.

### Layout

```
+---------------------------------------------------+
|  Notification Preferences                          |
|  ------------------------------------------------  |
|  Email notifications     [Toggle: ON]              |
|  Push notifications      [Toggle: OFF]             |
|  SMS notifications       [Toggle: OFF]             |
|  ------------------------------------------------  |
|                                                     |
|  Contact Preference                                |
|  ------------------------------------------------  |
|  [Radio]  Email (preferred)                        |
|  [Radio]  Phone                                    |
|  [Radio]  Chat                                     |
|  ------------------------------------------------  |
|                                                     |
|  Notification Frequency                            |
|  ------------------------------------------------  |
|  [Slider: |----|----*----|----| ]                  |
|  Immediate  Hourly  Daily  Weekly                  |
|  ------------------------------------------------  |
|                                                     |
|  Timezone                                          |
|  [Select: America/New_York v]                      |
|                                                     |
|  Language                                          |
|  [Select: English v]                               |
|  ------------------------------------------------  |
|                                                     |
|  [Tooltip: "Saves all notification preferences"]   |
|  [Button: Save Preferences]                        |
|  [Dialog: Save confirmation]                       |
+---------------------------------------------------+
```

### Components Used

| Component | Usage |
|-----------|-------|
| `ag-toggle` | Email, Push, SMS notification toggles |
| `ag-radio` | Contact preference (Email / Phone / Chat) |
| `ag-slider` | Notification frequency slider |
| `ag-select` | Timezone and language pickers |
| `ag-tooltip` | Hint on Save button |
| `ag-dialog` | "Preferences saved" confirmation |
| `ag-button` | Save button |

### Implementation Details

**Settings state:**

```typescript
interface SupportSettings {
  emailNotifications: boolean;
  pushNotifications: boolean;
  smsNotifications: boolean;
  contactPreference: 'email' | 'phone' | 'chat';
  notificationFrequency: number; // 0=immediate, 1=hourly, 2=daily, 3=weekly
  timezone: string;
  language: string;
}

const settings: SupportSettings = {
  emailNotifications: true,
  pushNotifications: false,
  smsNotifications: false,
  contactPreference: 'email',
  notificationFrequency: 2,
  timezone: 'America/New_York',
  language: 'en',
};
```

**Notification toggles:**

```html
<section class="settings-section">
  <h2>Notification Preferences</h2>
  <div class="setting-row">
    <div class="setting-label">
      <Mail size={18} />
      <span>Email notifications</span>
    </div>
    <ag-toggle
      checked="{settings.emailNotifications}"
      label="Email notifications"
    ></ag-toggle>
  </div>
  <div class="setting-row">
    <div class="setting-label">
      <Bell size={18} />
      <span>Push notifications</span>
    </div>
    <ag-toggle
      checked="{settings.pushNotifications}"
      label="Push notifications"
    ></ag-toggle>
  </div>
  <div class="setting-row">
    <div class="setting-label">
      <Smartphone size={18} />
      <span>SMS notifications</span>
    </div>
    <ag-toggle
      checked="{settings.smsNotifications}"
      label="SMS notifications"
    ></ag-toggle>
  </div>
</section>
```

**Contact preference radios:**

```html
<section class="settings-section">
  <h2>Contact Preference</h2>
  <ag-radio
    name="contact-pref"
    value="email"
    checked="{settings.contactPreference === 'email'}"
    label="Email (preferred)"
  ></ag-radio>
  <ag-radio
    name="contact-pref"
    value="phone"
    checked="{settings.contactPreference === 'phone'}"
    label="Phone"
  ></ag-radio>
  <ag-radio
    name="contact-pref"
    value="chat"
    checked="{settings.contactPreference === 'chat'}"
    label="Chat"
  ></ag-radio>
</section>
```

**Notification frequency slider:**

```html
<section class="settings-section">
  <h2>Notification Frequency</h2>
  <ag-slider
    min="0"
    max="3"
    step="1"
    value="{settings.notificationFrequency}"
    label="Notification frequency"
  ></ag-slider>
  <div class="slider-labels">
    <span>Immediate</span>
    <span>Hourly</span>
    <span>Daily</span>
    <span>Weekly</span>
  </div>
</section>
```

**Timezone and language selects:**

```html
<section class="settings-section">
  <h2>Region</h2>
  <div class="settings-grid">
    <ag-select
      label="Timezone"
      .options=${[
        { value: 'America/New_York', label: 'Eastern (ET)' },
        { value: 'America/Chicago', label: 'Central (CT)' },
        { value: 'America/Denver', label: 'Mountain (MT)' },
        { value: 'America/Los_Angeles', label: 'Pacific (PT)' },
        { value: 'Europe/London', label: 'GMT' },
        { value: 'Europe/Berlin', label: 'CET' },
        { value: 'Asia/Tokyo', label: 'JST' },
      ]}
    ></ag-select>
    <ag-select
      label="Language"
      .options=${[
        { value: 'en', label: 'English' },
        { value: 'es', label: 'Spanish' },
        { value: 'fr', label: 'French' },
        { value: 'de', label: 'German' },
        { value: 'ja', label: 'Japanese' },
      ]}
    ></ag-select>
  </div>
</section>
```

**Save button with Tooltip and confirmation Dialog:**

```html
<div class="settings-actions">
  <ag-tooltip content="Saves all notification and contact preferences">
    <ag-button variant="primary" onclick="openSaveDialog()">
      Save Preferences
    </ag-button>
  </ag-tooltip>
</div>

<ag-dialog id="save-dialog">
  <div slot="header">Preferences Saved</div>
  <div slot="body">
    <p>Your notification and contact preferences have been updated successfully.</p>
  </div>
  <div slot="footer">
    <ag-button variant="primary" onclick="closeSaveDialog()">OK</ag-button>
  </div>
</ag-dialog>
```

**Settings CSS:**

```css
.settings-section {
  margin-bottom: var(--ag-space-6);
}

.settings-section h2 {
  font-size: var(--ag-font-size-md);
  font-weight: 600;
  margin-bottom: var(--ag-space-3);
  color: var(--ag-text-primary);
}

.setting-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--ag-space-3) 0;
  border-bottom: 1px solid var(--ag-border-subtle);
}

.setting-label {
  display: flex;
  align-items: center;
  gap: var(--ag-space-2);
  color: var(--ag-text-primary);
}

.slider-labels {
  display: flex;
  justify-content: space-between;
  font-size: var(--ag-font-size-xs);
  color: var(--ag-text-secondary);
  margin-top: var(--ag-space-1);
}

.settings-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--ag-space-4);
}

@media (max-width: 767px) {
  .settings-grid {
    grid-template-columns: 1fr;
  }
}

.settings-actions {
  padding-top: var(--ag-space-4);
  border-top: 1px solid var(--ag-border-subtle);
}
```

---

## Global CSS

Add to each project's main CSS file:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  background: var(--ag-background-primary);
  color: var(--ag-text-primary);
  min-height: 100vh;
}

.support-app {
  max-width: 960px;
  margin: 0 auto;
  padding: var(--ag-space-4);
}

.tab-content {
  padding: var(--ag-space-4) 0;
}

h1, h2, h3 {
  color: var(--ag-text-primary);
}
```

---

## Theme Toggle Implementation

Each framework should implement a theme toggle in the header:

```typescript
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  if (isDark) {
    html.removeAttribute('data-theme');
  } else {
    html.setAttribute('data-theme', 'dark');
  }
}
```

Swap the logo based on theme state:

```html
<img
  src="{isDark ? '/logo-dark-mode.svg' : '/logo.svg'}"
  alt="AgnosticUI"
  class="header-logo"
/>
```

---

## SkinSwitcher Integration

Each example should include the SkinSwitcher component for theme/skin switching. Follow the same pattern used in the dashboard playbook:

**React:** Create `src/SkinSwitcher.tsx` importing from `../../../../skins/skin-switcher-core.js`
**Vue:** Create `src/SkinSwitcher.vue` importing from `../../../../skins/skin-switcher-core.js`
**Lit:** Create `src/skin-switcher.ts` importing from `../../../../skins/skin-switcher-core.js`

Reference the dashboard examples for the exact SkinSwitcher implementation pattern.

---

## Framework-Specific Notes

### React Example

**Status:** To be generated

**Key patterns:**

- Use `useState` for all state management (messages, current tab, drawer open, settings)
- Use `useEffect` for keyboard listener registration (`/` to focus search)
- Use `useRef` for chat scroll-to-bottom and combobox focus
- Import Lucide icons as React components
- Use `onClick`, `onChange` React-style event handlers on ag-* components

### Vue Example

**Status:** To be generated

**Key patterns:**

- Use `ref()` and `reactive()` for state management
- Use `onMounted()` for keyboard listener registration
- Use template refs for scroll-to-bottom and focus management
- Import Lucide icons as Vue components from `lucide-vue-next`
- Use `@change`, `@click` Vue-style event listeners

### Lit Example

**Status:** To be generated

**Issues to watch for:**

1. **No framework wrappers:** Lit uses the core `ag-*` web components directly
2. **Inline SVG icons:** All icons must be defined as `html` tagged template literals
3. **Property binding:** Use dot-prefix `.property=${value}` for passing objects/arrays
4. **Event listening:** Use `@event=${handler}` syntax in Lit templates
5. **CSS in static styles:** All layout CSS goes inside the Lit component's `static styles`
6. **Shadow DOM:** Global styles don't apply — everything must be in the component's styles

---

## Summary of Components Exercised

| Component | Tab | Purpose |
|-----------|-----|---------|
| **Button** | All | Actions, triggers |
| **Tabs** | Shell | Four-section navigation |
| **MessageBubble** | Live Chat | Chat conversation bubbles |
| **Dialog** | Live Chat, Settings | End Chat confirmation, Save confirmation |
| **Popover** | Live Chat | Agent status info |
| **Rating** | Live Chat, KB | Chat satisfaction, Article rating |
| **Combobox** | Knowledge Base | Article search with autocomplete |
| **Pagination** | Knowledge Base, Tickets | Page through results |
| **Kbd** | Knowledge Base | Keyboard shortcut hint |
| **Select** | Tickets, Settings | Status filter, Timezone, Language |
| **Menu** | Tickets | Context actions per ticket |
| **Drawer** | Tickets | Ticket detail slide-in panel |
| **Tooltip** | Tickets, Settings | Status hints, Save button hint |
| **Toggle** | Settings | Notification on/off switches |
| **Radio** | Settings | Contact preference selection |
| **Slider** | Settings | Notification frequency control |

**Total: 16 components (15 unique + Tabs reused from Dashboard playbook, 14 new to playbooks)**
