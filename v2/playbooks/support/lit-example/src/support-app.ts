import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

// AgnosticUI core components
import './components/ag/Tabs/core/Tabs';
import './components/ag/Button/core/Button';
import './components/ag/MessageBubble/core/MessageBubble';
import './components/ag/Dialog/core/Dialog';
import './components/ag/Drawer/core/Drawer';
import './components/ag/Rating/core/Rating';
import './components/ag/Popover/core/Popover';
import './components/ag/Combobox/core/Combobox';
import './components/ag/Pagination/core/Pagination';
import './components/ag/Select/core/Select';
import './components/ag/Menu/core/Menu';
import './components/ag/Tooltip/core/Tooltip';
import './components/ag/Toggle/core/Toggle';
import './components/ag/Radio/core/Radio';
import './components/ag/Slider/core/Slider';
import './components/ag/Kbd/core/Kbd';
import './skin-switcher';

// ── Inline SVG Icons ──────────────────────────────────────────────────────

const sendIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>`;
const phoneIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;
const msgCircleIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>`;
const bookOpenIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`;
const ticketIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/></svg>`;
const settingsIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`;
const chevronRightIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`;
const sunIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
const moonIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
const mailIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`;
const bellIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`;
const smartphoneIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`;
const moreVerticalIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg>`;

// ── Types ──────────────────────────────────────────────────────────────────

interface ChatMessage {
  id: number;
  sender: 'agent' | 'user';
  text: string;
  timestamp: string;
}

interface Article {
  id: number;
  title: string;
  summary: string;
  rating: number;
}

interface TicketItem {
  id: number;
  subject: string;
  status: 'open' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high';
  created: string;
  description: string;
  agentResponse?: string;
}

// ── Static Data ────────────────────────────────────────────────────────────

const INITIAL_MESSAGES: ChatMessage[] = [
  { id: 1, sender: 'agent', text: 'Hi! How can I help you today?', timestamp: '10:30 AM' },
  { id: 2, sender: 'user', text: "I'm having trouble with my billing.", timestamp: '10:31 AM' },
  { id: 3, sender: 'agent', text: "I'd be happy to help with that. Can you share your account number?", timestamp: '10:31 AM' },
  { id: 4, sender: 'user', text: "Sure, it's AC-12345.", timestamp: '10:32 AM' },
  { id: 5, sender: 'agent', text: 'Got it! Let me pull up your account. One moment please.', timestamp: '10:32 AM' },
];

const ARTICLES: Article[] = [
  { id: 1, title: 'Getting Started with Billing', summary: 'Learn how to manage your subscription, update payment methods, and understand your invoice.', rating: 4.5 },
  { id: 2, title: 'How to Reset Your Password', summary: 'Step-by-step guide to resetting your account password securely.', rating: 4.8 },
  { id: 3, title: 'Integrations Guide', summary: 'Connect your account with third-party services like Slack, Jira, and GitHub.', rating: 4.2 },
  { id: 4, title: 'Understanding Usage Limits', summary: 'Everything you need to know about API rate limits and usage quotas.', rating: 4.0 },
  { id: 5, title: 'Team Management', summary: 'Add team members, set roles and permissions, and manage access controls.', rating: 4.6 },
  { id: 6, title: 'Webhook Configuration', summary: 'Set up webhooks to receive real-time notifications about account events.', rating: 3.9 },
  { id: 7, title: 'Export Your Data', summary: 'How to export your data in CSV, JSON, or PDF formats for reporting.', rating: 4.3 },
  { id: 8, title: 'Single Sign-On Setup', summary: 'Configure SSO with SAML or OAuth for your organization.', rating: 4.7 },
  { id: 9, title: 'Custom Domain Configuration', summary: 'Use your own domain for branded customer experiences.', rating: 4.1 },
  { id: 10, title: 'Troubleshooting Email Delivery', summary: 'Diagnose and fix issues with transactional email delivery.', rating: 4.4 },
  { id: 11, title: 'API Authentication', summary: 'Learn about API keys, OAuth tokens, and authentication best practices.', rating: 4.6 },
  { id: 12, title: 'Upgrading Your Plan', summary: 'Compare plans and upgrade to unlock additional features.', rating: 4.3 },
];

const TICKETS: TicketItem[] = [
  { id: 1042, subject: 'Billing discrepancy', status: 'open', priority: 'high', created: 'Jan 15, 2025', description: 'I was charged twice for my January subscription. The amounts are $29.99 each, total $59.98. My expected charge was $29.99.', agentResponse: "We're looking into this. A refund has been initiated for the duplicate charge." },
  { id: 1039, subject: 'Password reset not working', status: 'resolved', priority: 'medium', created: 'Jan 12, 2025', description: 'The password reset email never arrives. I have checked spam folders.', agentResponse: 'This was caused by a temporary email delivery issue which has been resolved. Please try again.' },
  { id: 1035, subject: 'API rate limit too low', status: 'open', priority: 'medium', created: 'Jan 10, 2025', description: 'Our application is hitting the rate limit frequently during peak hours. We need a higher quota.', agentResponse: 'We can increase your rate limit. Please confirm your current plan so we can provide options.' },
  { id: 1031, subject: 'Cannot export data to CSV', status: 'resolved', priority: 'low', created: 'Jan 8, 2025', description: 'The CSV export button returns a 500 error for datasets larger than 10,000 rows.', agentResponse: 'This has been fixed in our latest release. Large exports now process in the background.' },
  { id: 1028, subject: 'SSO configuration error', status: 'open', priority: 'high', created: 'Jan 5, 2025', description: 'SAML SSO is returning an invalid assertion error. Our IdP is Okta.', agentResponse: 'Please share your SAML metadata XML and we will review the assertion consumer URL configuration.' },
  { id: 1024, subject: 'Webhook delivery failures', status: 'closed', priority: 'medium', created: 'Jan 3, 2025', description: 'Webhooks to our endpoint at api.example.com are failing with timeouts.', agentResponse: 'The issue was on our side due to DNS resolution delays. This has been resolved.' },
  { id: 1020, subject: 'Feature request: dark mode for emails', status: 'open', priority: 'low', created: 'Dec 28, 2024', description: 'It would be great if transactional emails supported dark mode styling.' },
  { id: 1015, subject: 'Invoice formatting issue', status: 'resolved', priority: 'low', created: 'Dec 22, 2024', description: 'The PDF invoice has overlapping text in the line items section when there are more than 20 items.', agentResponse: 'Fixed in the latest billing update. Please regenerate your invoice.' },
];

const ARTICLES_PER_PAGE = 4;
const TICKETS_PER_PAGE = 5;

// ── Component ──────────────────────────────────────────────────────────────

@customElement('support-app')
export class SupportApp extends LitElement {
  @state() private _isDark = document.documentElement.getAttribute('data-theme') === 'dark';

  // Chat
  @state() private _messages: ChatMessage[] = [...INITIAL_MESSAGES];
  @state() private _chatInput = '';
  @state() private _chatRating = 0;
  @state() private _endChatOpen = false;
  private _nextMsgId = 6;

  // KB
  @state() private _kbSearch = '';
  @state() private _kbPage = 1;

  // Tickets
  @state() private _ticketFilter = 'all';
  @state() private _ticketPage = 1;
  @state() private _drawerOpen = false;
  @state() private _selectedTicket: TicketItem | null = null;

  // Settings
  @state() private _emailNotif = true;
  @state() private _pushNotif = false;
  @state() private _smsNotif = false;
  @state() private _contactPref = 'email';
  @state() private _notifFreq = 2;
  @state() private _saveDialogOpen = false;

  private _onKeydown = (e: KeyboardEvent) => {
    const tag = (document.activeElement as HTMLElement)?.tagName;
    if (e.key === '/' && tag !== 'INPUT' && tag !== 'TEXTAREA') {
      e.preventDefault();
      const combobox = this.shadowRoot?.querySelector('ag-combobox');
      const input = combobox?.shadowRoot?.querySelector('input');
      input?.focus();
    }
  };

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('keydown', this._onKeydown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this._onKeydown);
  }

  private _toggleTheme() {
    const html = document.documentElement;
    const dark = html.getAttribute('data-theme') === 'dark';
    if (dark) {
      html.removeAttribute('data-theme');
      this._isDark = false;
    } else {
      html.setAttribute('data-theme', 'dark');
      this._isDark = true;
    }
  }

  private _sendMessage() {
    const text = this._chatInput.trim();
    if (!text) return;
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    this._messages = [...this._messages, { id: this._nextMsgId++, sender: 'user', text, timestamp: now }];
    this._chatInput = '';
    setTimeout(() => {
      this._messages = [...this._messages, {
        id: this._nextMsgId++,
        sender: 'agent',
        text: 'Thank you for reaching out! Let me look into that for you.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }];
    }, 1000);
  }

  private get _filteredArticles() {
    return ARTICLES.filter(a =>
      !this._kbSearch || a.title.toLowerCase().includes(this._kbSearch.toLowerCase())
    );
  }

  private get _kbArticles() {
    const start = (this._kbPage - 1) * ARTICLES_PER_PAGE;
    return this._filteredArticles.slice(start, start + ARTICLES_PER_PAGE);
  }

  private get _kbTotalPages() {
    return Math.max(1, Math.ceil(this._filteredArticles.length / ARTICLES_PER_PAGE));
  }

  private get _filteredTickets() {
    return TICKETS.filter(t => this._ticketFilter === 'all' || t.status === this._ticketFilter);
  }

  private get _pageTickets() {
    const start = (this._ticketPage - 1) * TICKETS_PER_PAGE;
    return this._filteredTickets.slice(start, start + TICKETS_PER_PAGE);
  }

  private get _tkTotalPages() {
    return Math.max(1, Math.ceil(this._filteredTickets.length / TICKETS_PER_PAGE));
  }

  render() {
    const articleOptions = ARTICLES.map(a => ({ value: a.title, label: a.title }));

    return html`
      <!-- Header -->
      <header class="support-header">
        <div>
          <img
            src="${this._isDark ? '/logo-dark-mode.svg' : '/logo.svg'}"
            alt="AgnosticUI"
            class="header-logo"
          />
        </div>
        <div class="header-center">
          <h1>Support Center</h1>
        </div>
        <div class="header-right">
          <button class="theme-toggle" aria-label="Toggle theme" @click=${() => this._toggleTheme()}>
            ${this._isDark ? sunIcon : moonIcon}
          </button>
          <span class="user-name">Jane Doe</span>
        </div>
      </header>

      <div class="support-app">
        <ag-tabs aria-label="Support sections">
          <!-- Tab buttons -->
          <ag-tab slot="tab" panel="chat">
            <span class="tab-label">
              ${msgCircleIcon}
              <span class="tab-text">Live Chat</span>
              <span class="tab-text-short">Chat</span>
            </span>
          </ag-tab>
          <ag-tab slot="tab" panel="kb">
            <span class="tab-label">
              ${bookOpenIcon}
              <span class="tab-text">Knowledge Base</span>
              <span class="tab-text-short">Docs</span>
            </span>
          </ag-tab>
          <ag-tab slot="tab" panel="tickets">
            <span class="tab-label">
              ${ticketIcon}
              <span class="tab-text">My Tickets</span>
              <span class="tab-text-short">Tickets</span>
            </span>
          </ag-tab>
          <ag-tab slot="tab" panel="settings">
            <span class="tab-label">
              ${settingsIcon}
              <span class="tab-text">Settings</span>
              <span class="tab-text-short">Settings</span>
            </span>
          </ag-tab>

          <!-- Panel 1: Live Chat -->
          <ag-tab-panel slot="panel">
            <div class="tab-content">
              <div class="chat-container">
                <div class="chat-agent-bar">
                  ${phoneIcon}
                  <ag-popover placement="bottom">
                    <span slot="trigger" class="agent-name">Sarah K.</span>
                    <div slot="content" class="agent-info">
                      <p><strong>Sarah K.</strong></p>
                      <p>Senior Support Agent</p>
                      <p>Avg. response time: 2 min</p>
                      <p>Rating: 4.8/5</p>
                    </div>
                  </ag-popover>
                  <span class="online-badge">Online</span>
                </div>
                <div class="chat-messages">
                  ${this._messages.map(msg => html`
                    <ag-message-bubble
                      from="${msg.sender === 'user' ? 'me' : 'them'}"
                      variant="${msg.sender === 'user' ? 'info' : 'default'}"
                    >
                      ${msg.text}
                    </ag-message-bubble>
                  `)}
                </div>
                <div class="chat-input-bar">
                  <input
                    type="text"
                    class="chat-input"
                    placeholder="Type your message..."
                    .value=${this._chatInput}
                    @input=${(e: Event) => this._chatInput = (e.target as HTMLInputElement).value}
                    @keydown=${(e: KeyboardEvent) => e.key === 'Enter' && this._sendMessage()}
                    aria-label="Chat message"
                  />
                  <ag-button variant="primary" shape="rounded" @click=${() => this._sendMessage()}>
                    ${sendIcon}
                  </ag-button>
                </div>
                <div class="chat-footer">
                  <div class="chat-rating">
                    <span>How was your experience?</span>
                    <ag-rating
                      .value=${this._chatRating}
                      .max=${5}
                      @rating-change=${(e: CustomEvent) => this._chatRating = e.detail.newValue}
                    ></ag-rating>
                  </div>
                  <ag-button variant="secondary" shape="rounded" size="sm" @click=${() => this._endChatOpen = true}>
                    End Chat
                  </ag-button>
                </div>
              </div>

              <ag-dialog
                .open=${this._endChatOpen}
                @dialog-cancel=${() => this._endChatOpen = false}
                @dialog-close=${() => this._endChatOpen = false}
              >
                <div slot="header">End Chat Session</div>
                <div slot="body">
                  <p>Are you sure you want to end this chat session?</p>
                  <p style="margin-top:8px">You can still view the chat history in "My Tickets".</p>
                </div>
                <div slot="footer" class="dialog-footer">
                  <ag-button variant="secondary" @click=${() => this._endChatOpen = false}>Cancel</ag-button>
                  <ag-button variant="danger" @click=${() => { this._endChatOpen = false; this._messages = [...INITIAL_MESSAGES]; }}>End Chat</ag-button>
                </div>
              </ag-dialog>
            </div>
          </ag-tab-panel>

          <!-- Panel 2: Knowledge Base -->
          <ag-tab-panel slot="panel">
            <div class="tab-content">
              <div class="kb-search-bar">
                <ag-combobox
                  class="kb-combobox"
                  placeholder="Search articles..."
                  .options=${articleOptions}
                  @change=${(e: CustomEvent) => { this._kbSearch = e.detail?.value ?? ''; this._kbPage = 1; }}
                ></ag-combobox>
                <ag-kbd>/</ag-kbd>
              </div>

              ${this._kbArticles.map(article => html`
                <div class="article-card">
                  <h3 class="article-title">${article.title}</h3>
                  <p class="article-summary">${article.summary}</p>
                  <div class="article-footer">
                    <ag-rating .value=${article.rating} .max=${5} readonly></ag-rating>
                    <button class="article-read-more">
                      Read more ${chevronRightIcon}
                    </button>
                  </div>
                </div>
              `)}

              <div class="kb-pagination">
                <ag-pagination
                  .current=${this._kbPage}
                  .totalPages=${this._kbTotalPages}
                  @page-change=${(e: CustomEvent) => this._kbPage = e.detail.page}
                ></ag-pagination>
              </div>
            </div>
          </ag-tab-panel>

          <!-- Panel 3: My Tickets -->
          <ag-tab-panel slot="panel">
            <div class="tab-content">
              <div class="ticket-filter">
                <label class="filter-label">Filter by status</label>
                <ag-select @change=${(e: CustomEvent) => { this._ticketFilter = e.detail?.value ?? (e.target as HTMLSelectElement).value ?? 'all'; this._ticketPage = 1; }}>
                  <option value="all">All Tickets</option>
                  <option value="open">Open</option>
                  <option value="resolved">Resolved</option>
                  <option value="closed">Closed</option>
                </ag-select>
              </div>

              ${this._pageTickets.map(ticket => html`
                <div class="ticket-row">
                  <div class="ticket-info">
                    <span class="ticket-id">#${ticket.id}</span>
                    <span class="ticket-subject">${ticket.subject}</span>
                    <ag-tooltip content="${ticket.status === 'open' ? 'Open' : ticket.status === 'resolved' ? 'Resolved' : 'Closed'} since ${ticket.created}">
                      <span class="status-badge status-${ticket.status}">${ticket.status}</span>
                    </ag-tooltip>
                    <span class="priority-badge priority-${ticket.priority}">${ticket.priority}</span>
                  </div>
                  <ag-menu-button ?ghost=${true} aria-label="Ticket actions">
                    ${moreVerticalIcon}
                    <ag-menu slot="menu" aria-label="Ticket actions">
                      <ag-menu-item value="view" @menu-select=${() => { this._selectedTicket = ticket; this._drawerOpen = true; }}>View Details</ag-menu-item>
                      <ag-menu-item value="close">Close Ticket</ag-menu-item>
                      <ag-menu-item value="reopen">Reopen</ag-menu-item>
                    </ag-menu>
                  </ag-menu-button>
                </div>
              `)}

              <div class="tk-pagination">
                <ag-pagination
                  .current=${this._ticketPage}
                  .totalPages=${this._tkTotalPages}
                  @page-change=${(e: CustomEvent) => this._ticketPage = e.detail.page}
                ></ag-pagination>
              </div>

              <ag-drawer
                .open=${this._drawerOpen}
                position="end"
                @drawer-cancel=${() => this._drawerOpen = false}
                @drawer-close=${() => this._drawerOpen = false}
              >
                ${this._selectedTicket ? html`
                  <div slot="header">Ticket #${this._selectedTicket.id}</div>
                  <div slot="body" class="drawer-body">
                    <dl class="ticket-details">
                      <dt>Subject</dt><dd>${this._selectedTicket.subject}</dd>
                      <dt>Status</dt><dd><span class="status-badge status-${this._selectedTicket.status}">${this._selectedTicket.status}</span></dd>
                      <dt>Priority</dt><dd><span class="priority-badge priority-${this._selectedTicket.priority}">${this._selectedTicket.priority}</span></dd>
                      <dt>Created</dt><dd>${this._selectedTicket.created}</dd>
                    </dl>
                    <h3>Description</h3>
                    <p>${this._selectedTicket.description}</p>
                    ${this._selectedTicket.agentResponse ? html`
                      <h3>Agent Response</h3>
                      <p>${this._selectedTicket.agentResponse}</p>
                    ` : ''}
                  </div>
                  <div slot="footer">
                    <ag-button variant="secondary" @click=${() => this._drawerOpen = false}>Close</ag-button>
                  </div>
                ` : ''}
              </ag-drawer>
            </div>
          </ag-tab-panel>

          <!-- Panel 4: Settings -->
          <ag-tab-panel slot="panel">
            <div class="tab-content">
              <section class="settings-section">
                <h2>Notification Preferences</h2>
                <div class="setting-row">
                  <div class="setting-label">${mailIcon}<span>Email notifications</span></div>
                  <ag-toggle
                    .checked=${this._emailNotif}
                    label="Email notifications"
                    @toggle-change=${(e: CustomEvent) => this._emailNotif = e.detail.checked}
                  ></ag-toggle>
                </div>
                <div class="setting-row">
                  <div class="setting-label">${bellIcon}<span>Push notifications</span></div>
                  <ag-toggle
                    .checked=${this._pushNotif}
                    label="Push notifications"
                    @toggle-change=${(e: CustomEvent) => this._pushNotif = e.detail.checked}
                  ></ag-toggle>
                </div>
                <div class="setting-row">
                  <div class="setting-label">${smartphoneIcon}<span>SMS notifications</span></div>
                  <ag-toggle
                    .checked=${this._smsNotif}
                    label="SMS notifications"
                    @toggle-change=${(e: CustomEvent) => this._smsNotif = e.detail.checked}
                  ></ag-toggle>
                </div>
              </section>

              <section class="settings-section">
                <h2>Contact Preference</h2>
                <div class="radio-group">
                  <ag-radio name="contact-pref" value="email" .checked=${this._contactPref === 'email'} label="Email (preferred)" @change=${() => this._contactPref = 'email'}></ag-radio>
                  <ag-radio name="contact-pref" value="phone" .checked=${this._contactPref === 'phone'} label="Phone" @change=${() => this._contactPref = 'phone'}></ag-radio>
                  <ag-radio name="contact-pref" value="chat" .checked=${this._contactPref === 'chat'} label="Chat" @change=${() => this._contactPref = 'chat'}></ag-radio>
                </div>
              </section>

              <section class="settings-section">
                <h2>Notification Frequency</h2>
                <ag-slider
                  .min=${0}
                  .max=${3}
                  .step=${1}
                  .value=${this._notifFreq}
                  label="Notification frequency"
                  @change=${(e: CustomEvent) => this._notifFreq = e.detail?.value ?? this._notifFreq}
                ></ag-slider>
                <div class="slider-labels">
                  <span>Immediate</span><span>Hourly</span><span>Daily</span><span>Weekly</span>
                </div>
              </section>

              <section class="settings-section">
                <h2>Region</h2>
                <div class="settings-grid">
                  <div>
                    <label class="filter-label">Timezone</label>
                    <ag-select>
                      <option value="America/New_York">Eastern (ET)</option>
                      <option value="America/Chicago">Central (CT)</option>
                      <option value="America/Denver">Mountain (MT)</option>
                      <option value="America/Los_Angeles">Pacific (PT)</option>
                      <option value="Europe/London">GMT</option>
                      <option value="Europe/Berlin">CET</option>
                      <option value="Asia/Tokyo">JST</option>
                    </ag-select>
                  </div>
                  <div>
                    <label class="filter-label">Language</label>
                    <ag-select>
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                      <option value="ja">Japanese</option>
                    </ag-select>
                  </div>
                </div>
              </section>

              <div class="settings-actions">
                <ag-tooltip content="Saves all notification and contact preferences">
                  <ag-button variant="primary" @click=${() => this._saveDialogOpen = true}>
                    Save Preferences
                  </ag-button>
                </ag-tooltip>
              </div>

              <ag-dialog
                .open=${this._saveDialogOpen}
                @dialog-cancel=${() => this._saveDialogOpen = false}
                @dialog-close=${() => this._saveDialogOpen = false}
              >
                <div slot="header">Preferences Saved</div>
                <div slot="body">
                  <p>Your notification and contact preferences have been updated successfully.</p>
                </div>
                <div slot="footer">
                  <ag-button variant="primary" @click=${() => this._saveDialogOpen = false}>OK</ag-button>
                </div>
              </ag-dialog>
            </div>
          </ag-tab-panel>
        </ag-tabs>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
    }

    /* Header */
    .support-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--ag-space-3) var(--ag-space-5);
      background: var(--ag-background-primary);
      border-bottom: 1px solid var(--ag-border-subtle);
      margin-bottom: var(--ag-space-4);
    }

    .header-logo {
      height: var(--ag-space-5);
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
      display: flex;
      align-items: center;
    }

    .theme-toggle:hover {
      background: var(--ag-background-secondary);
    }

    .user-name {
      font-size: var(--ag-font-size-sm);
      color: var(--ag-text-secondary);
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

    /* Tab labels */
    .tab-label {
      display: flex;
      align-items: center;
      gap: 6px;
      white-space: nowrap;
    }

    .tab-text-short {
      display: none;
    }

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

    /* Chat */
    .chat-container {
      display: flex;
      flex-direction: column;
      height: 500px;
      max-height: 70vh;
      border: 1px solid var(--ag-border-subtle);
      border-radius: var(--ag-radius-md);
    }

    .chat-agent-bar {
      display: flex;
      align-items: center;
      gap: var(--ag-space-2);
      padding: var(--ag-space-3) var(--ag-space-4);
      border-bottom: 1px solid var(--ag-border-subtle);
      background: var(--ag-background-secondary);
    }

    .agent-name {
      cursor: pointer;
      font-weight: 500;
      color: var(--ag-text-primary);
    }

    .online-badge {
      font-size: var(--ag-font-size-xs);
      color: var(--ag-text-secondary);
    }

    .agent-info p {
      margin: 0;
      font-size: var(--ag-font-size-sm);
      line-height: 1.6;
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
      padding: var(--ag-space-3) var(--ag-space-4);
      border-top: 1px solid var(--ag-border-subtle);
    }

    .chat-input {
      flex: 1;
      padding: var(--ag-space-2) var(--ag-space-3);
      border: 1px solid var(--ag-border-subtle);
      border-radius: var(--ag-radius-md);
      font-size: var(--ag-font-size-base);
      background: var(--ag-background-primary);
      color: var(--ag-text-primary);
      font-family: inherit;
    }

    .chat-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--ag-space-3);
      padding: var(--ag-space-3) var(--ag-space-4);
      border-top: 1px solid var(--ag-border-subtle);
    }

    .chat-rating {
      display: flex;
      align-items: center;
      gap: var(--ag-space-2);
      font-size: var(--ag-font-size-sm);
      color: var(--ag-text-secondary);
    }

    .dialog-footer {
      display: flex;
      gap: 8px;
    }

    /* Knowledge Base */
    .kb-search-bar {
      display: flex;
      align-items: center;
      gap: var(--ag-space-3);
      margin-bottom: var(--ag-space-4);
    }

    .kb-combobox {
      flex: 1;
    }

    .article-card {
      padding: var(--ag-space-4);
      border: 1px solid var(--ag-border-subtle);
      border-radius: var(--ag-radius-md);
      margin-bottom: var(--ag-space-3);
      background: var(--ag-background-primary);
      cursor: pointer;
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

    .article-read-more {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: var(--ag-font-size-sm);
      color: var(--ag-primary);
      background: none;
      border: none;
      cursor: pointer;
      font-family: inherit;
    }

    .kb-pagination, .tk-pagination {
      margin-top: var(--ag-space-4);
    }

    /* Tickets */
    .ticket-filter {
      margin-bottom: var(--ag-space-4);
    }

    .filter-label {
      display: block;
      margin-bottom: 4px;
      font-size: var(--ag-font-size-sm);
      font-weight: 500;
      color: var(--ag-text-primary);
    }

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
      padding: 2px 8px;
      border-radius: var(--ag-radius-sm);
      font-weight: 500;
      text-transform: capitalize;
    }

    .status-open { background: #dbeafe; color: #1d4ed8; }
    .status-resolved { background: #dcfce7; color: #15803d; }
    .status-closed { background: #f3f4f6; color: #6b7280; }

    .priority-badge {
      font-size: var(--ag-font-size-xs);
      padding: 2px 8px;
      border-radius: var(--ag-radius-sm);
      font-weight: 500;
      text-transform: capitalize;
    }

    .priority-high { background: #fee2e2; color: #dc2626; }
    .priority-medium { background: #fef3c7; color: #d97706; }
    .priority-low { background: #f3f4f6; color: #6b7280; }

    .menu-trigger-btn {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--ag-text-secondary);
      padding: var(--ag-space-1);
      display: flex;
      align-items: center;
    }

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

    .drawer-body h3 {
      font-size: var(--ag-font-size-sm);
      font-weight: 600;
      margin-bottom: var(--ag-space-2);
      color: var(--ag-text-primary);
    }

    .drawer-body p {
      font-size: var(--ag-font-size-sm);
      color: var(--ag-text-secondary);
      margin-bottom: var(--ag-space-3);
    }

    /* Settings */
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

    .radio-group {
      display: flex;
      flex-direction: column;
      gap: var(--ag-space-2);
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

    .settings-actions {
      padding-top: var(--ag-space-4);
      border-top: 1px solid var(--ag-border-subtle);
    }

    @media (max-width: 767px) {
      .header-center {
        display: none;
      }

      .settings-grid {
        grid-template-columns: 1fr;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'support-app': SupportApp;
  }
}
