import { useState, useEffect, useRef, useCallback } from "react";
import {
  MessageCircle,
  BookOpen,
  Ticket,
  Settings,
  Send,
  Phone,
  ChevronRight,
  Sun,
  Moon,
  Mail,
  Bell,
  Smartphone,
  MoreVertical,
} from "lucide-react";
import {
  ReactTabs,
  ReactTab,
  ReactTabPanel,
} from "./components/ag/Tabs/react/ReactTabs";
import { ReactMessageBubble } from "./components/ag/MessageBubble/react/ReactMessageBubble";
import { ReactButton } from "./components/ag/Button/react/ReactButton";
import {
  ReactDialog,
  DialogHeader,
  DialogFooter,
} from "./components/ag/Dialog/react/ReactDialog";
import {
  ReactDrawer,
  DrawerHeader,
  DrawerFooter,
} from "./components/ag/Drawer/react/ReactDrawer";
import { ReactRating } from "./components/ag/Rating/react/ReactRating";
import {
  ReactPopover,
  PopoverTrigger,
  PopoverContent,
} from "./components/ag/Popover/react/ReactPopover";
import {
  ReactCombobox,
  type ComboboxOption,
} from "./components/ag/Combobox/react/ReactCombobox";
import { ReactPagination } from "./components/ag/Pagination/react/ReactPagination";
import { ReactSelect } from "./components/ag/Select/react/ReactSelect";
import {
  ReactMenuButton,
  ReactMenu,
  ReactMenuItem,
} from "./components/ag/Menu/react/ReactMenu";
import { ReactTooltip } from "./components/ag/Tooltip/react/ReactTooltip";
import { ReactToggle } from "./components/ag/Toggle/react/ReactToggle";
import { ReactRadio } from "./components/ag/Radio/react/ReactRadio";
import { ReactSlider } from "./components/ag/Slider/react/ReactSlider";
import { ReactKbd } from "./components/ag/Kbd/react/ReactKbd";
import { SkinSwitcher } from "./SkinSwitcher";

// ── Types ──────────────────────────────────────────────────────────────────

interface ChatMessage {
  id: number;
  sender: "agent" | "user";
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
  status: "open" | "resolved" | "closed";
  priority: "low" | "medium" | "high";
  created: string;
  description: string;
  agentResponse?: string;
}

// ── Static Data ────────────────────────────────────────────────────────────

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 1,
    sender: "agent",
    text: "Hi! How can I help you today?",
    timestamp: "10:30 AM",
  },
  {
    id: 2,
    sender: "user",
    text: "I'm having trouble with my billing.",
    timestamp: "10:31 AM",
  },
  {
    id: 3,
    sender: "agent",
    text: "I'd be happy to help with that. Can you share your account number?",
    timestamp: "10:31 AM",
  },
  {
    id: 4,
    sender: "user",
    text: "Sure, it's AC-12345.",
    timestamp: "10:32 AM",
  },
  {
    id: 5,
    sender: "agent",
    text: "Got it! Let me pull up your account. One moment please.",
    timestamp: "10:32 AM",
  },
];

const ARTICLES: Article[] = [
  {
    id: 1,
    title: "Getting Started with Billing",
    summary:
      "Learn how to manage your subscription, update payment methods, and understand your invoice.",
    category: "Billing",
    rating: 4.5,
  },
  {
    id: 2,
    title: "How to Reset Your Password",
    summary: "Step-by-step guide to resetting your account password securely.",
    category: "Account",
    rating: 4.8,
  },
  {
    id: 3,
    title: "Integrations Guide",
    summary:
      "Connect your account with third-party services like Slack, Jira, and GitHub.",
    category: "Integrations",
    rating: 4.2,
  },
  {
    id: 4,
    title: "Understanding Usage Limits",
    summary:
      "Everything you need to know about API rate limits and usage quotas.",
    category: "API",
    rating: 4.0,
  },
  {
    id: 5,
    title: "Team Management",
    summary:
      "Add team members, set roles and permissions, and manage access controls.",
    category: "Account",
    rating: 4.6,
  },
  {
    id: 6,
    title: "Webhook Configuration",
    summary:
      "Set up webhooks to receive real-time notifications about account events.",
    category: "API",
    rating: 3.9,
  },
  {
    id: 7,
    title: "Export Your Data",
    summary:
      "How to export your data in CSV, JSON, or PDF formats for reporting.",
    category: "Data",
    rating: 4.3,
  },
  {
    id: 8,
    title: "Single Sign-On Setup",
    summary: "Configure SSO with SAML or OAuth for your organization.",
    category: "Security",
    rating: 4.7,
  },
  {
    id: 9,
    title: "Custom Domain Configuration",
    summary: "Use your own domain for branded customer experiences.",
    category: "Customization",
    rating: 4.1,
  },
  {
    id: 10,
    title: "Troubleshooting Email Delivery",
    summary: "Diagnose and fix issues with transactional email delivery.",
    category: "Email",
    rating: 4.4,
  },
  {
    id: 11,
    title: "API Authentication",
    summary:
      "Learn about API keys, OAuth tokens, and authentication best practices.",
    category: "API",
    rating: 4.6,
  },
  {
    id: 12,
    title: "Upgrading Your Plan",
    summary: "Compare plans and upgrade to unlock additional features.",
    category: "Billing",
    rating: 4.3,
  },
];

const TICKETS: TicketItem[] = [
  {
    id: 1042,
    subject: "Billing discrepancy",
    status: "open",
    priority: "high",
    created: "Jan 15, 2025",
    description:
      "I was charged twice for my January subscription. The amounts are $29.99 each, total $59.98. My expected charge was $29.99.",
    agentResponse:
      "We're looking into this. A refund has been initiated for the duplicate charge.",
  },
  {
    id: 1039,
    subject: "Password reset not working",
    status: "resolved",
    priority: "medium",
    created: "Jan 12, 2025",
    description:
      "The password reset email never arrives. I have checked spam folders.",
    agentResponse:
      "This was caused by a temporary email delivery issue which has been resolved. Please try again.",
  },
  {
    id: 1035,
    subject: "API rate limit too low",
    status: "open",
    priority: "medium",
    created: "Jan 10, 2025",
    description:
      "Our application is hitting the rate limit frequently during peak hours. We need a higher quota.",
    agentResponse:
      "We can increase your rate limit. Please confirm your current plan so we can provide options.",
  },
  {
    id: 1031,
    subject: "Cannot export data to CSV",
    status: "resolved",
    priority: "low",
    created: "Jan 8, 2025",
    description:
      "The CSV export button returns a 500 error for datasets larger than 10,000 rows.",
    agentResponse:
      "This has been fixed in our latest release. Large exports now process in the background.",
  },
  {
    id: 1028,
    subject: "SSO configuration error",
    status: "open",
    priority: "high",
    created: "Jan 5, 2025",
    description:
      "SAML SSO is returning an invalid assertion error. Our IdP is Okta.",
    agentResponse:
      "Please share your SAML metadata XML and we will review the assertion consumer URL configuration.",
  },
  {
    id: 1024,
    subject: "Webhook delivery failures",
    status: "closed",
    priority: "medium",
    created: "Jan 3, 2025",
    description:
      "Webhooks to our endpoint at api.example.com are failing with timeouts.",
    agentResponse:
      "The issue was on our side due to DNS resolution delays. This has been resolved.",
  },
  {
    id: 1020,
    subject: "Feature request: dark mode for emails",
    status: "open",
    priority: "low",
    created: "Dec 28, 2024",
    description:
      "It would be great if transactional emails supported dark mode styling.",
  },
  {
    id: 1015,
    subject: "Invoice formatting issue",
    status: "resolved",
    priority: "low",
    created: "Dec 22, 2024",
    description:
      "The PDF invoice has overlapping text in the line items section when there are more than 20 items.",
    agentResponse:
      "Fixed in the latest billing update. Please regenerate your invoice.",
  },
];

const ARTICLES_PER_PAGE = 4;
const TICKETS_PER_PAGE = 5;

// ── Main App ───────────────────────────────────────────────────────────────

export default function App() {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.getAttribute("data-theme") === "dark",
  );

  // Chat state
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [chatInput, setChatInput] = useState("");
  const [chatRating, setChatRating] = useState(0);
  const [endChatOpen, setEndChatOpen] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);
  const nextMsgId = useRef(6);

  // KB state
  const [kbSearch, setKbSearch] = useState("");
  const [kbPage, setKbPage] = useState(1);
  const comboboxWrapRef = useRef<HTMLDivElement>(null);

  // Tickets state
  const [ticketFilter, setTicketFilter] = useState("all");
  const [ticketPage, setTicketPage] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<TicketItem | null>(null);

  // Settings state
  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(false);
  const [smsNotif, setSmsNotif] = useState(false);
  const [contactPref, setContactPref] = useState("email");
  const [notifFreq, setNotifFreq] = useState(2);
  const [timezone, setTimezone] = useState("America/New_York");
  const [language, setLanguage] = useState("en");
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);

  function toggleTheme() {
    const html = document.documentElement;
    const dark = html.getAttribute("data-theme") === "dark";
    if (dark) {
      html.removeAttribute("data-theme");
      setIsDark(false);
    } else {
      html.setAttribute("data-theme", "dark");
      setIsDark(true);
    }
  }

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const tag = (document.activeElement as HTMLElement)?.tagName;
      if (e.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA") {
        e.preventDefault();
        const input = comboboxWrapRef.current?.querySelector("input");
        input?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const sendMessage = useCallback(() => {
    const text = chatInput.trim();
    if (!text) return;
    const now = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const userMsg: ChatMessage = {
      id: nextMsgId.current++,
      sender: "user",
      text,
      timestamp: now,
    };
    setMessages((prev) => [...prev, userMsg]);
    setChatInput("");
    setTimeout(() => {
      const agentMsg: ChatMessage = {
        id: nextMsgId.current++,
        sender: "agent",
        text: "Thank you for reaching out! Let me look into that for you.",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, agentMsg]);
    }, 1000);
  }, [chatInput]);

  // KB filtering + pagination
  const filteredArticles = ARTICLES.filter(
    (a) => !kbSearch || a.title.toLowerCase().includes(kbSearch.toLowerCase()),
  );
  const kbStart = (kbPage - 1) * ARTICLES_PER_PAGE;
  const kbArticles = filteredArticles.slice(
    kbStart,
    kbStart + ARTICLES_PER_PAGE,
  );
  const kbTotalPages = Math.max(
    1,
    Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE),
  );

  // Ticket filtering + pagination
  const filteredTickets = TICKETS.filter(
    (t) => ticketFilter === "all" || t.status === ticketFilter,
  );
  const tkStart = (ticketPage - 1) * TICKETS_PER_PAGE;
  const pageTickets = filteredTickets.slice(
    tkStart,
    tkStart + TICKETS_PER_PAGE,
  );
  const tkTotalPages = Math.max(
    1,
    Math.ceil(filteredTickets.length / TICKETS_PER_PAGE),
  );

  function viewTicket(ticket: TicketItem) {
    setSelectedTicket(ticket);
    setDrawerOpen(true);
  }

  const articleComboOptions: ComboboxOption[] = ARTICLES.map((a) => ({
    value: a.title,
    label: a.title,
  }));

  return (
    <div>
      <header className="support-header">
        <div>
          <img
            src={isDark ? "/logo-dark-mode.svg" : "/logo.svg"}
            alt="AgnosticUI"
            className="header-logo"
          />
        </div>
        <div className="header-center">
          <h1>Support Center</h1>
        </div>
        <div className="header-right">
          <button
            className="theme-toggle"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <span className="user-name">Jane Doe</span>
        </div>
      </header>

      <div className="support-app">
        <ReactTabs aria-label="Support sections">
          {/* Tab 1: Live Chat */}
          <ReactTab slot="tab" panel="chat">
            <span className="tab-label">
              <MessageCircle size={16} />
              <span className="tab-text">Live Chat</span>
              <span className="tab-text-short">Chat</span>
            </span>
          </ReactTab>

          {/* Tab 2: Knowledge Base */}
          <ReactTab slot="tab" panel="kb">
            <span className="tab-label">
              <BookOpen size={16} />
              <span className="tab-text">Knowledge Base</span>
              <span className="tab-text-short">Docs</span>
            </span>
          </ReactTab>

          {/* Tab 3: My Tickets */}
          <ReactTab slot="tab" panel="tickets">
            <span className="tab-label">
              <Ticket size={16} />
              <span className="tab-text">My Tickets</span>
              <span className="tab-text-short">Tickets</span>
            </span>
          </ReactTab>

          {/* Tab 4: Settings */}
          <ReactTab slot="tab" panel="settings">
            <span className="tab-label">
              <Settings size={16} />
              <span className="tab-text">Settings</span>
              <span className="tab-text-short">Settings</span>
            </span>
          </ReactTab>

          {/* Panel 1: Live Chat */}
          <ReactTabPanel slot="panel">
            <div className="tab-content">
              <div className="chat-container">
                <div className="chat-agent-bar">
                  <Phone size={16} />
                  <ReactPopover placement="bottom">
                    <PopoverTrigger>
                      <span style={{ cursor: "pointer", fontWeight: 500 }}>
                        Sarah K.
                      </span>
                    </PopoverTrigger>
                    <PopoverContent>
                      <div className="agent-info">
                        <p>
                          <strong>Sarah K.</strong>
                        </p>
                        <p>Senior Support Agent</p>
                        <p>Avg. response time: 2 min</p>
                        <p>Rating: 4.8/5</p>
                      </div>
                    </PopoverContent>
                  </ReactPopover>
                  <span
                    style={{
                      fontSize: "var(--ag-font-size-xs)",
                      color: "var(--ag-text-secondary)",
                    }}
                  >
                    Online
                  </span>
                </div>
                <div className="chat-messages">
                  {messages.map((msg) => (
                    <ReactMessageBubble
                      key={msg.id}
                      variant={msg.sender === "user" ? "info" : undefined}
                      from={msg.sender === "user" ? "me" : "them"}
                    >
                      {msg.text}
                    </ReactMessageBubble>
                  ))}
                  <div ref={chatBottomRef} />
                </div>
                <div className="chat-input-bar">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    aria-label="Chat message"
                  />
                  <ReactButton variant="primary" shape="rounded" onClick={sendMessage}>
                    <Send size={16} />
                  </ReactButton>
                </div>
                <div className="chat-footer">
                  <div className="chat-rating">
                    <span>How was your experience?</span>
                    <ReactRating
                      value={chatRating}
                      max={5}
                      onRatingChange={(e) => setChatRating(e.detail.newValue)}
                    />
                  </div>
                  <ReactButton
                    variant="secondary"
                    shape="rounded"
                    size="sm"
                    onClick={() => setEndChatOpen(true)}
                  >
                    End Chat
                  </ReactButton>
                </div>
              </div>

              <ReactDialog
                open={endChatOpen}
                onDialogCancel={() => setEndChatOpen(false)}
                onDialogClose={() => setEndChatOpen(false)}
              >
                <DialogHeader>End Chat Session</DialogHeader>
                <div slot="body">
                  <p>Are you sure you want to end this chat session?</p>
                  <p style={{ marginTop: 8 }}>
                    You can still view the chat history in "My Tickets".
                  </p>
                </div>
                <DialogFooter>
                  <div style={{ display: "flex", gap: 8 }}>
                    <ReactButton
                      variant="secondary"
                      onClick={() => setEndChatOpen(false)}
                    >
                      Cancel
                    </ReactButton>
                    <ReactButton
                      variant="danger"
                      onClick={() => {
                        setEndChatOpen(false);
                        setMessages(INITIAL_MESSAGES);
                      }}
                    >
                      End Chat
                    </ReactButton>
                  </div>
                </DialogFooter>
              </ReactDialog>
            </div>
          </ReactTabPanel>

          {/* Panel 2: Knowledge Base */}
          <ReactTabPanel slot="panel">
            <div className="tab-content">
              <div className="kb-search-bar">
                <div ref={comboboxWrapRef} style={{ flex: 1 }}>
                  <ReactCombobox
                    placeholder="Search articles..."
                    options={articleComboOptions}
                    onChange={(e) => {
                      const val =
                        (e as CustomEvent<{ value: string }>).detail?.value ??
                        "";
                      setKbSearch(val);
                      setKbPage(1);
                    }}
                  />
                </div>
                <ReactKbd>/</ReactKbd>
              </div>
              {kbArticles.map((article) => (
                <div key={article.id} className="article-card">
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-summary">{article.summary}</p>
                  <div className="article-footer">
                    <ReactRating value={article.rating} max={5} readonly />
                    <button className="article-read-more">
                      Read more <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
              <div className="kb-pagination">
                <ReactPagination
                  current={kbPage}
                  totalPages={kbTotalPages}
                  onPageChange={(e) =>
                    setKbPage((e as CustomEvent<{ page: number }>).detail.page)
                  }
                />
              </div>
            </div>
          </ReactTabPanel>

          {/* Panel 3: My Tickets */}
          <ReactTabPanel slot="panel">
            <div className="tab-content">
              <div className="ticket-filter">
                <label
                  htmlFor="ticket-status-filter"
                  style={{
                    display: "block",
                    marginBottom: 4,
                    fontSize: "var(--ag-font-size-sm)",
                    fontWeight: 500,
                  }}
                >
                  Filter by status
                </label>
                <ReactSelect
                  id="ticket-status-filter"
                  onChange={(e) => {
                    setTicketFilter(
                      (e as CustomEvent<{ value: string }>).detail?.value ??
                        (e.target as HTMLSelectElement).value,
                    );
                    setTicketPage(1);
                  }}
                >
                  <option value="all">All Tickets</option>
                  <option value="open">Open</option>
                  <option value="resolved">Resolved</option>
                  <option value="closed">Closed</option>
                </ReactSelect>
              </div>

              {pageTickets.map((ticket) => (
                <div key={ticket.id} className="ticket-row">
                  <div className="ticket-info">
                    <span className="ticket-id">#{ticket.id}</span>
                    <span className="ticket-subject">{ticket.subject}</span>
                    <ReactTooltip
                      content={`${ticket.status === "open" ? "Open" : ticket.status === "resolved" ? "Resolved" : "Closed"} since ${ticket.created}`}
                    >
                      <span className={`status-badge status-${ticket.status}`}>
                        {ticket.status}
                      </span>
                    </ReactTooltip>
                    <span
                      className={`priority-badge priority-${ticket.priority}`}
                    >
                      {ticket.priority}
                    </span>
                  </div>
                  <ReactMenuButton ghost aria-label="Ticket actions">
                    <MoreVertical size={16} />
                    <ReactMenu slot="menu" ariaLabel="Ticket actions">
                      <ReactMenuItem
                        value="view"
                        onMenuSelect={() => viewTicket(ticket)}
                      >
                        View Details
                      </ReactMenuItem>
                      <ReactMenuItem value="close" onMenuSelect={() => {}}>
                        Close Ticket
                      </ReactMenuItem>
                      <ReactMenuItem value="reopen" onMenuSelect={() => {}}>
                        Reopen
                      </ReactMenuItem>
                    </ReactMenu>
                  </ReactMenuButton>
                </div>
              ))}

              <div style={{ marginTop: "var(--ag-space-4)" }}>
                <ReactPagination
                  current={ticketPage}
                  totalPages={tkTotalPages}
                  onPageChange={(e) =>
                    setTicketPage(
                      (e as CustomEvent<{ page: number }>).detail.page,
                    )
                  }
                />
              </div>

              <ReactDrawer
                open={drawerOpen}
                position="end"
                onDrawerCancel={() => setDrawerOpen(false)}
                onDrawerClose={() => setDrawerOpen(false)}
              >
                {selectedTicket && (
                  <>
                    <DrawerHeader>Ticket #{selectedTicket.id}</DrawerHeader>
                    <div slot="body" className="drawer-body">
                      <dl className="ticket-details">
                        <dt>Subject</dt>
                        <dd>{selectedTicket.subject}</dd>
                        <dt>Status</dt>
                        <dd>
                          <span
                            className={`status-badge status-${selectedTicket.status}`}
                          >
                            {selectedTicket.status}
                          </span>
                        </dd>
                        <dt>Priority</dt>
                        <dd>
                          <span
                            className={`priority-badge priority-${selectedTicket.priority}`}
                          >
                            {selectedTicket.priority}
                          </span>
                        </dd>
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
                    <DrawerFooter>
                      <ReactButton
                        variant="secondary"
                        onClick={() => setDrawerOpen(false)}
                      >
                        Close
                      </ReactButton>
                    </DrawerFooter>
                  </>
                )}
              </ReactDrawer>
            </div>
          </ReactTabPanel>

          {/* Panel 4: Settings */}
          <ReactTabPanel slot="panel">
            <div className="tab-content">
              <section className="settings-section">
                <h2>Notification Preferences</h2>
                <div className="setting-row">
                  <div className="setting-label">
                    <Mail size={18} />
                    <span>Email notifications</span>
                  </div>
                  <ReactToggle
                    checked={emailNotif}
                    label="Email notifications"
                    onToggleChange={() => setEmailNotif((v) => !v)}
                  />
                </div>
                <div className="setting-row">
                  <div className="setting-label">
                    <Bell size={18} />
                    <span>Push notifications</span>
                  </div>
                  <ReactToggle
                    checked={pushNotif}
                    label="Push notifications"
                    onToggleChange={() => setPushNotif((v) => !v)}
                  />
                </div>
                <div className="setting-row">
                  <div className="setting-label">
                    <Smartphone size={18} />
                    <span>SMS notifications</span>
                  </div>
                  <ReactToggle
                    checked={smsNotif}
                    label="SMS notifications"
                    onToggleChange={() => setSmsNotif((v) => !v)}
                  />
                </div>
              </section>

              <section className="settings-section">
                <h2>Contact Preference</h2>
                <div className="radio-group">
                  <ReactRadio
                    name="contact-pref"
                    value="email"
                    checked={contactPref === "email"}
                    label="Email (preferred)"
                    onChange={() => setContactPref("email")}
                  />
                  <ReactRadio
                    name="contact-pref"
                    value="phone"
                    checked={contactPref === "phone"}
                    label="Phone"
                    onChange={() => setContactPref("phone")}
                  />
                  <ReactRadio
                    name="contact-pref"
                    value="chat"
                    checked={contactPref === "chat"}
                    label="Chat"
                    onChange={() => setContactPref("chat")}
                  />
                </div>
              </section>

              <section className="settings-section">
                <h2>Notification Frequency</h2>
                <ReactSlider
                  min={0}
                  max={3}
                  step={1}
                  value={notifFreq}
                  label="Notification frequency"
                  onChange={(e) =>
                    setNotifFreq(
                      (e as CustomEvent<{ value: number }>).detail?.value ??
                        notifFreq,
                    )
                  }
                />
                <div className="slider-labels">
                  <span>Immediate</span>
                  <span>Hourly</span>
                  <span>Daily</span>
                  <span>Weekly</span>
                </div>
              </section>

              <section className="settings-section">
                <h2>Region</h2>
                <div className="settings-grid">
                  <div>
                    <label
                      htmlFor="tz-select"
                      style={{
                        display: "block",
                        marginBottom: 4,
                        fontSize: "var(--ag-font-size-sm)",
                        fontWeight: 500,
                      }}
                    >
                      Timezone
                    </label>
                    <ReactSelect
                      id="tz-select"
                      onChange={(e) =>
                        setTimezone(
                          (e as CustomEvent<{ value: string }>).detail?.value ??
                            (e.target as HTMLSelectElement).value,
                        )
                      }
                    >
                      <option value="America/New_York">Eastern (ET)</option>
                      <option value="America/Chicago">Central (CT)</option>
                      <option value="America/Denver">Mountain (MT)</option>
                      <option value="America/Los_Angeles">Pacific (PT)</option>
                      <option value="Europe/London">GMT</option>
                      <option value="Europe/Berlin">CET</option>
                      <option value="Asia/Tokyo">JST</option>
                    </ReactSelect>
                  </div>
                  <div>
                    <label
                      htmlFor="lang-select"
                      style={{
                        display: "block",
                        marginBottom: 4,
                        fontSize: "var(--ag-font-size-sm)",
                        fontWeight: 500,
                      }}
                    >
                      Language
                    </label>
                    <ReactSelect
                      id="lang-select"
                      onChange={(e) =>
                        setLanguage(
                          (e as CustomEvent<{ value: string }>).detail?.value ??
                            (e.target as HTMLSelectElement).value,
                        )
                      }
                    >
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                      <option value="ja">Japanese</option>
                    </ReactSelect>
                  </div>
                </div>
                <div style={{ display: "none" }}>
                  {timezone}
                  {language}
                </div>
              </section>

              <div className="settings-actions">
                <ReactTooltip content="Saves all notification and contact preferences">
                  <ReactButton
                    variant="primary"
                    onClick={() => setSaveDialogOpen(true)}
                  >
                    Save Preferences
                  </ReactButton>
                </ReactTooltip>
              </div>

              <ReactDialog
                open={saveDialogOpen}
                onDialogCancel={() => setSaveDialogOpen(false)}
                onDialogClose={() => setSaveDialogOpen(false)}
              >
                <DialogHeader>Preferences Saved</DialogHeader>
                <div slot="body">
                  <p>
                    Your notification and contact preferences have been updated
                    successfully.
                  </p>
                </div>
                <DialogFooter>
                  <ReactButton
                    variant="primary"
                    onClick={() => setSaveDialogOpen(false)}
                  >
                    OK
                  </ReactButton>
                </DialogFooter>
              </ReactDialog>
            </div>
          </ReactTabPanel>
        </ReactTabs>
      </div>

      <SkinSwitcher />
    </div>
  );
}
