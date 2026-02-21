<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
import {
  MessageCircle, BookOpen, Ticket, Settings, Send, Phone,
  ChevronRight, Sun, Moon, Mail, Bell, Smartphone, MoreVertical,
} from 'lucide-vue-next';
import VueTabs from './components/ag/Tabs/vue/VueTabs.vue';
import VueTab from './components/ag/Tabs/vue/VueTab.vue';
import VueTabPanel from './components/ag/Tabs/vue/VueTabPanel.vue';
import VueMessageBubble from './components/ag/MessageBubble/vue/VueMessageBubble.vue';
import VueButton from './components/ag/Button/vue/VueButton.vue';
import VueDialog from './components/ag/Dialog/vue/VueDialog.vue';
import VueDrawer from './components/ag/Drawer/vue/VueDrawer.vue';
import VueRating from './components/ag/Rating/vue/VueRating.vue';
import VuePopover from './components/ag/Popover/vue/VuePopover.vue';
import VueCombobox from './components/ag/Combobox/vue/VueCombobox.vue';
import VuePagination from './components/ag/Pagination/vue/VuePagination.vue';
import VueSelect from './components/ag/Select/vue/VueSelect.vue';
import VueMenu from './components/ag/Menu/vue/VueMenu.vue';
import VueMenuItem from './components/ag/Menu/vue/VueMenuItem.vue';
import VueTooltip from './components/ag/Tooltip/vue/VueTooltip.vue';
import VueToggle from './components/ag/Toggle/vue/VueToggle.vue';
import VueRadio from './components/ag/Radio/vue/VueRadio.vue';
import VueSlider from './components/ag/Slider/vue/VueSlider.vue';
import VueKbd from './components/ag/Kbd/vue/VueKbd.vue';
import SkinSwitcher from './SkinSwitcher.vue';

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
  category: string;
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
  { id: 1, title: 'Getting Started with Billing', summary: 'Learn how to manage your subscription, update payment methods, and understand your invoice.', category: 'Billing', rating: 4.5 },
  { id: 2, title: 'How to Reset Your Password', summary: 'Step-by-step guide to resetting your account password securely.', category: 'Account', rating: 4.8 },
  { id: 3, title: 'Integrations Guide', summary: 'Connect your account with third-party services like Slack, Jira, and GitHub.', category: 'Integrations', rating: 4.2 },
  { id: 4, title: 'Understanding Usage Limits', summary: 'Everything you need to know about API rate limits and usage quotas.', category: 'API', rating: 4.0 },
  { id: 5, title: 'Team Management', summary: 'Add team members, set roles and permissions, and manage access controls.', category: 'Account', rating: 4.6 },
  { id: 6, title: 'Webhook Configuration', summary: 'Set up webhooks to receive real-time notifications about account events.', category: 'API', rating: 3.9 },
  { id: 7, title: 'Export Your Data', summary: 'How to export your data in CSV, JSON, or PDF formats for reporting.', category: 'Data', rating: 4.3 },
  { id: 8, title: 'Single Sign-On Setup', summary: 'Configure SSO with SAML or OAuth for your organization.', category: 'Security', rating: 4.7 },
  { id: 9, title: 'Custom Domain Configuration', summary: 'Use your own domain for branded customer experiences.', category: 'Customization', rating: 4.1 },
  { id: 10, title: 'Troubleshooting Email Delivery', summary: 'Diagnose and fix issues with transactional email delivery.', category: 'Email', rating: 4.4 },
  { id: 11, title: 'API Authentication', summary: 'Learn about API keys, OAuth tokens, and authentication best practices.', category: 'API', rating: 4.6 },
  { id: 12, title: 'Upgrading Your Plan', summary: 'Compare plans and upgrade to unlock additional features.', category: 'Billing', rating: 4.3 },
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

// ── State ──────────────────────────────────────────────────────────────────

const isDark = ref(document.documentElement.getAttribute('data-theme') === 'dark');

// Chat
const messages = ref<ChatMessage[]>([...INITIAL_MESSAGES]);
const chatInput = ref('');
const chatRating = ref(0);
const endChatOpen = ref(false);
const chatBottomRef = ref<HTMLElement | null>(null);
let nextMsgId = 6;

// KB
const kbSearch = ref('');
const kbPage = ref(1);
const comboboxWrapRef = ref<HTMLElement | null>(null);

// Tickets
const ticketFilter = ref('all');
const ticketPage = ref(1);
const drawerOpen = ref(false);
const selectedTicket = ref<TicketItem | null>(null);

// Settings
const emailNotif = ref(true);
const pushNotif = ref(false);
const smsNotif = ref(false);
const contactPref = ref('email');
const notifFreq = ref(2);
const timezone = ref('America/New_York');
const language = ref('en');
const saveDialogOpen = ref(false);

// ── Computed ───────────────────────────────────────────────────────────────

const filteredArticles = computed(() =>
  ARTICLES.filter(a => !kbSearch.value || a.title.toLowerCase().includes(kbSearch.value.toLowerCase()))
);

const kbArticles = computed(() => {
  const start = (kbPage.value - 1) * ARTICLES_PER_PAGE;
  return filteredArticles.value.slice(start, start + ARTICLES_PER_PAGE);
});

const kbTotalPages = computed(() => Math.max(1, Math.ceil(filteredArticles.value.length / ARTICLES_PER_PAGE)));

const filteredTickets = computed(() =>
  TICKETS.filter(t => ticketFilter.value === 'all' || t.status === ticketFilter.value)
);

const pageTickets = computed(() => {
  const start = (ticketPage.value - 1) * TICKETS_PER_PAGE;
  return filteredTickets.value.slice(start, start + TICKETS_PER_PAGE);
});

const tkTotalPages = computed(() => Math.max(1, Math.ceil(filteredTickets.value.length / TICKETS_PER_PAGE)));

const articleOptions = computed(() => ARTICLES.map(a => ({ value: a.title, label: a.title })));

// ── Methods ────────────────────────────────────────────────────────────────

function toggleTheme() {
  const html = document.documentElement;
  const dark = html.getAttribute('data-theme') === 'dark';
  if (dark) {
    html.removeAttribute('data-theme');
    isDark.value = false;
  } else {
    html.setAttribute('data-theme', 'dark');
    isDark.value = true;
  }
}

function scrollChatToBottom() {
  nextTick(() => {
    chatBottomRef.value?.scrollIntoView({ behavior: 'smooth' });
  });
}

function sendMessage() {
  const text = chatInput.value.trim();
  if (!text) return;
  const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  messages.value.push({ id: nextMsgId++, sender: 'user', text, timestamp: now });
  chatInput.value = '';
  scrollChatToBottom();
  setTimeout(() => {
    messages.value.push({
      id: nextMsgId++,
      sender: 'agent',
      text: 'Thank you for reaching out! Let me look into that for you.',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    });
    scrollChatToBottom();
  }, 1000);
}

function onKbSearch(detail: { value: string }) {
  kbSearch.value = detail.value ?? '';
  kbPage.value = 1;
}

function onTicketFilterChange(detail: { value: string }) {
  ticketFilter.value = detail.value ?? 'all';
  ticketPage.value = 1;
}

function viewTicket(ticket: TicketItem) {
  selectedTicket.value = ticket;
  drawerOpen.value = true;
}

function endChat() {
  endChatOpen.value = false;
  messages.value = [...INITIAL_MESSAGES];
}

function onKeydown(e: KeyboardEvent) {
  const tag = (document.activeElement as HTMLElement)?.tagName;
  if (e.key === '/' && tag !== 'INPUT' && tag !== 'TEXTAREA') {
    e.preventDefault();
    const input = comboboxWrapRef.value?.querySelector('input');
    input?.focus();
  }
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown);
});
</script>

<template>
  <div>
    <!-- Header -->
    <header class="support-header">
      <div>
        <img
          :src="isDark ? '/logo-dark-mode.svg' : '/logo.svg'"
          alt="AgnosticUI"
          class="header-logo"
        />
      </div>
      <div class="header-center">
        <h1>Support Center</h1>
      </div>
      <div class="header-right">
        <button class="theme-toggle" aria-label="Toggle theme" @click="toggleTheme">
          <Sun v-if="isDark" :size="18" />
          <Moon v-else :size="18" />
        </button>
        <span class="user-name">Jane Doe</span>
      </div>
    </header>

    <div class="support-app">
      <VueTabs aria-label="Support sections">
        <!-- Tab buttons -->
        <VueTab slot="tab" panel="chat">
          <span class="tab-label">
            <MessageCircle :size="16" />
            <span class="tab-text">Live Chat</span>
            <span class="tab-text-short">Chat</span>
          </span>
        </VueTab>
        <VueTab slot="tab" panel="kb">
          <span class="tab-label">
            <BookOpen :size="16" />
            <span class="tab-text">Knowledge Base</span>
            <span class="tab-text-short">Docs</span>
          </span>
        </VueTab>
        <VueTab slot="tab" panel="tickets">
          <span class="tab-label">
            <Ticket :size="16" />
            <span class="tab-text">My Tickets</span>
            <span class="tab-text-short">Tickets</span>
          </span>
        </VueTab>
        <VueTab slot="tab" panel="settings">
          <span class="tab-label">
            <Settings :size="16" />
            <span class="tab-text">Settings</span>
            <span class="tab-text-short">Settings</span>
          </span>
        </VueTab>

        <!-- Panel 1: Live Chat -->
        <VueTabPanel slot="panel" id="panel-chat">
          <div class="tab-content">
            <div class="chat-container">
              <div class="chat-agent-bar">
                <Phone :size="16" />
                <VuePopover placement="bottom">
                  <template #trigger>
                    <span style="cursor:pointer;font-weight:500">Sarah K.</span>
                  </template>
                  <template #content>
                    <div class="agent-info">
                      <p><strong>Sarah K.</strong></p>
                      <p>Senior Support Agent</p>
                      <p>Avg. response time: 2 min</p>
                      <p>Rating: 4.8/5</p>
                    </div>
                  </template>
                </VuePopover>
                <span style="font-size:var(--ag-font-size-xs);color:var(--ag-text-secondary)">Online</span>
              </div>

              <div class="chat-messages">
                <VueMessageBubble
                  v-for="msg in messages"
                  :key="msg.id"
                  :from="msg.sender === 'user' ? 'me' : 'them'"
                  :variant="msg.sender === 'user' ? 'info' : undefined"
                >
                  {{ msg.text }}
                </VueMessageBubble>
                <div ref="chatBottomRef" />
              </div>

              <div class="chat-input-bar">
                <input
                  v-model="chatInput"
                  type="text"
                  placeholder="Type your message..."
                  aria-label="Chat message"
                  @keydown.enter="sendMessage"
                />
                <VueButton variant="primary" shape="rounded" @click="sendMessage">
                  <Send :size="16" />
                </VueButton>
              </div>

              <div class="chat-footer">
                <div class="chat-rating">
                  <span>How was your experience?</span>
                  <VueRating
                    :value="chatRating"
                    :max="5"
                    @change="(detail: { newValue: number }) => chatRating = detail.newValue"
                  />
                </div>
                <VueButton variant="secondary" shape="rounded" size="sm" @click="endChatOpen = true">
                  End Chat
                </VueButton>
              </div>
            </div>

            <VueDialog
              :open="endChatOpen"
              @dialog-cancel="endChatOpen = false"
              @dialog-close="endChatOpen = false"
            >
              <div slot="header">End Chat Session</div>
              <div slot="body">
                <p>Are you sure you want to end this chat session?</p>
                <p style="margin-top:8px">You can still view the chat history in "My Tickets".</p>
              </div>
              <div slot="footer" style="display:flex;gap:8px">
                <VueButton variant="secondary" @click="endChatOpen = false">Cancel</VueButton>
                <VueButton variant="danger" @click="endChat">End Chat</VueButton>
              </div>
            </VueDialog>
          </div>
        </VueTabPanel>

        <!-- Panel 2: Knowledge Base -->
        <VueTabPanel slot="panel" id="panel-kb">
          <div class="tab-content">
            <div class="kb-search-bar">
              <div ref="comboboxWrapRef" class="kb-search-bar-combobox">
                <VueCombobox
                  placeholder="Search articles..."
                  :options="articleOptions"
                  @change="onKbSearch"
                />
              </div>
              <VueKbd>/</VueKbd>
            </div>

            <div v-for="article in kbArticles" :key="article.id" class="article-card">
              <h3 class="article-title">{{ article.title }}</h3>
              <p class="article-summary">{{ article.summary }}</p>
              <div class="article-footer">
                <VueRating :value="article.rating" :max="5" :readonly="true" />
                <button class="article-read-more">
                  Read more <ChevronRight :size="14" />
                </button>
              </div>
            </div>

            <div class="kb-pagination">
              <VuePagination
                :current="kbPage"
                :total-pages="kbTotalPages"
                @page-change="(detail: { page: number }) => kbPage = detail.page"
              />
            </div>
          </div>
        </VueTabPanel>

        <!-- Panel 3: My Tickets -->
        <VueTabPanel slot="panel" id="panel-tickets">
          <div class="tab-content">
            <div class="ticket-filter">
              <label for="ticket-status" style="display:block;margin-bottom:4px;font-size:var(--ag-font-size-sm);font-weight:500">Filter by status</label>
              <VueSelect id="ticket-status" @change="onTicketFilterChange">
                <option value="all">All Tickets</option>
                <option value="open">Open</option>
                <option value="resolved">Resolved</option>
                <option value="closed">Closed</option>
              </VueSelect>
            </div>

            <div v-for="ticket in pageTickets" :key="ticket.id" class="ticket-row">
              <div class="ticket-info">
                <span class="ticket-id">#{{ ticket.id }}</span>
                <span class="ticket-subject">{{ ticket.subject }}</span>
                <VueTooltip :content="`${ticket.status === 'open' ? 'Open' : ticket.status === 'resolved' ? 'Resolved' : 'Closed'} since ${ticket.created}`">
                  <span :class="`status-badge status-${ticket.status}`">{{ ticket.status }}</span>
                </VueTooltip>
                <span :class="`priority-badge priority-${ticket.priority}`">{{ ticket.priority }}</span>
              </div>
              <VueMenu ghost aria-label="Ticket actions">
                <MoreVertical :size="16" />
                <template #menu>
                  <VueMenuItem value="view" @menu-select="viewTicket(ticket)">View Details</VueMenuItem>
                  <VueMenuItem value="close" @menu-select="() => {}">Close Ticket</VueMenuItem>
                  <VueMenuItem value="reopen" @menu-select="() => {}">Reopen</VueMenuItem>
                </template>
              </VueMenu>
            </div>

            <div style="margin-top:var(--ag-space-4)">
              <VuePagination
                :current="ticketPage"
                :total-pages="tkTotalPages"
                @page-change="(detail: { page: number }) => ticketPage = detail.page"
              />
            </div>

            <VueDrawer
              :open="drawerOpen"
              position="end"
              @drawer-cancel="drawerOpen = false"
              @drawer-close="drawerOpen = false"
            >
              <template v-if="selectedTicket">
                <div slot="header">Ticket #{{ selectedTicket.id }}</div>
                <div slot="body" class="drawer-body">
                  <dl class="ticket-details">
                    <dt>Subject</dt><dd>{{ selectedTicket.subject }}</dd>
                    <dt>Status</dt><dd><span :class="`status-badge status-${selectedTicket.status}`">{{ selectedTicket.status }}</span></dd>
                    <dt>Priority</dt><dd><span :class="`priority-badge priority-${selectedTicket.priority}`">{{ selectedTicket.priority }}</span></dd>
                    <dt>Created</dt><dd>{{ selectedTicket.created }}</dd>
                  </dl>
                  <h3>Description</h3>
                  <p>{{ selectedTicket.description }}</p>
                  <template v-if="selectedTicket.agentResponse">
                    <h3>Agent Response</h3>
                    <p>{{ selectedTicket.agentResponse }}</p>
                  </template>
                </div>
                <div slot="footer">
                  <VueButton variant="secondary" @click="drawerOpen = false">Close</VueButton>
                </div>
              </template>
            </VueDrawer>
          </div>
        </VueTabPanel>

        <!-- Panel 4: Settings -->
        <VueTabPanel slot="panel" id="panel-settings">
          <div class="tab-content">
            <!-- Notification Preferences -->
            <section class="settings-section">
              <h2>Notification Preferences</h2>
              <div class="setting-row">
                <div class="setting-label">
                  <Mail :size="18" /><span>Email notifications</span>
                </div>
                <VueToggle
                  :checked="emailNotif"
                  label="Email notifications"
                  @toggle-change="(detail: { checked: boolean }) => emailNotif = detail.checked"
                />
              </div>
              <div class="setting-row">
                <div class="setting-label">
                  <Bell :size="18" /><span>Push notifications</span>
                </div>
                <VueToggle
                  :checked="pushNotif"
                  label="Push notifications"
                  @toggle-change="(detail: { checked: boolean }) => pushNotif = detail.checked"
                />
              </div>
              <div class="setting-row">
                <div class="setting-label">
                  <Smartphone :size="18" /><span>SMS notifications</span>
                </div>
                <VueToggle
                  :checked="smsNotif"
                  label="SMS notifications"
                  @toggle-change="(detail: { checked: boolean }) => smsNotif = detail.checked"
                />
              </div>
            </section>

            <!-- Contact Preference -->
            <section class="settings-section">
              <h2>Contact Preference</h2>
              <div class="radio-group">
                <VueRadio name="contact-pref" value="email" :checked="contactPref === 'email'" label="Email (preferred)" @change="() => contactPref = 'email'" />
                <VueRadio name="contact-pref" value="phone" :checked="contactPref === 'phone'" label="Phone" @change="() => contactPref = 'phone'" />
                <VueRadio name="contact-pref" value="chat" :checked="contactPref === 'chat'" label="Chat" @change="() => contactPref = 'chat'" />
              </div>
            </section>

            <!-- Notification Frequency -->
            <section class="settings-section">
              <h2>Notification Frequency</h2>
              <VueSlider
                :min="0"
                :max="3"
                :step="1"
                :value="notifFreq"
                label="Notification frequency"
                @change="(detail: { value: number }) => notifFreq = detail.value"
              />
              <div class="slider-labels">
                <span>Immediate</span><span>Hourly</span><span>Daily</span><span>Weekly</span>
              </div>
            </section>

            <!-- Region -->
            <section class="settings-section">
              <h2>Region</h2>
              <div class="settings-grid">
                <div>
                  <label for="tz-select" style="display:block;margin-bottom:4px;font-size:var(--ag-font-size-sm);font-weight:500">Timezone</label>
                  <VueSelect id="tz-select" @change="(detail: { value: string }) => timezone = detail.value">
                    <option value="America/New_York">Eastern (ET)</option>
                    <option value="America/Chicago">Central (CT)</option>
                    <option value="America/Denver">Mountain (MT)</option>
                    <option value="America/Los_Angeles">Pacific (PT)</option>
                    <option value="Europe/London">GMT</option>
                    <option value="Europe/Berlin">CET</option>
                    <option value="Asia/Tokyo">JST</option>
                  </VueSelect>
                </div>
                <div>
                  <label for="lang-select" style="display:block;margin-bottom:4px;font-size:var(--ag-font-size-sm);font-weight:500">Language</label>
                  <VueSelect id="lang-select" @change="(detail: { value: string }) => language = detail.value">
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="ja">Japanese</option>
                  </VueSelect>
                </div>
              </div>
            </section>

            <!-- Save -->
            <div class="settings-actions">
              <VueTooltip content="Saves all notification and contact preferences">
                <VueButton variant="primary" @click="saveDialogOpen = true">
                  Save Preferences
                </VueButton>
              </VueTooltip>
            </div>

            <VueDialog
              :open="saveDialogOpen"
              @dialog-cancel="saveDialogOpen = false"
              @dialog-close="saveDialogOpen = false"
            >
              <div slot="header">Preferences Saved</div>
              <div slot="body">
                <p>Your notification and contact preferences have been updated successfully.</p>
              </div>
              <div slot="footer">
                <VueButton variant="primary" @click="saveDialogOpen = false">OK</VueButton>
              </div>
            </VueDialog>
          </div>
        </VueTabPanel>
      </VueTabs>
    </div>

    <SkinSwitcher />
  </div>
</template>
