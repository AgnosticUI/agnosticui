# PRODUCT REQUIREMENTS DOCUMENT (PRD)

**Document Version:** 1.2.0  
**Status:** Approved / Fully Synchronized Core Architecture Milestone  
**Location Target:** `v2/sdui/demo-support-center/docs/e2e-support-agent-prd.md`  

---

## 1. Executive Summary & Core Objective

### 1.1 Objective & Vision
The **AgnosticUI E2E Support Agent Demo** is a self-contained reference application housed within a dedicated directory at `v2/sdui/demo-support-center/`. This application demonstrates how a framework-agnostic component system can be driven dynamically by a local open-weight AI model (`qwen2.5-coder:1.5b`) using an interactive, full-duplex **Schema-Driven UI (SDUI)** architecture.

The application exposes an adaptive multi-turn support workflow. An AI agent processes natural language developer or customer service inquiries, calls local functions to inspect account data states, detects blockages (such as expired credit cards), and autonomously streams back **deterministically safe JSON layout graphs (`AgNode[]`)** verified on the fly by the local core library schemas. 

Rather than creating a fractured, ad-hoc renderer local to this demo, the platform dogfoods the unified monorepo primitives directly by importing `@agnosticui/schema` and `@agnosticui/render-lit` from locally bundled package archives.

### 1.2 System Topology Diagram
```text
┌────────────────────────────────────────────────────────────────────────┐
│ BROWSER PORTAL ENGINE (v2/sdui/demo-support-center/ Frontend Workspace)│
│                                                                        │
│ ┌──────────────────────────┐          ┌──────────────────────────────┐ │
│ │ Live Chat UI Panel       │          │ @agnosticui/render-lit       │ │
│ │ (ag-message-bubble logs) │◄────────►│ (Canonical Workspace Canvas) │ │
│ └───────────▲──────────────┘          └──────────────▲───────────────┘ │
└─────────────┼────────────────────────────────────────┼─────────────────┘
              │ (HTTP / Server-Sent Events Token Stream)
┌─────────────▼────────────────────────────────────────┴─────────────────┐
│ LOCAL API GATEWAY (v2/sdui/demo-support-center/src/server/gateway.ts)  │
│                                                                        │
│ ┌──────────────────────────┐          ┌──────────────────────────────┐ │
│ │ Local Streaming Loop     │◄────────►│ Mock In-Memory Accounts DB   │ │
│ │ (Orchestrates Agent Tools)│          │ (mockData.ts Store Engine)   │ │
│ └───────────▲──────────────┘          └──────────────────────────────┘ │
└─────────────┼──────────────────────────────────────────────────────────┘
              │ (JSON-RPC over Local Process Channels)
┌─────────────▼──────────────────────────────────────────────────────────┐
│ BACKGROUND AGNOSTICUI SCHEMA EDGE (v2/sdui/schema/ Package Scope)       │
│                                                                        │
│ ┌──────────────────────────────┐      ┌──────────────────────────────┐ │
│ │ @agnosticui/schema Validation│◄────►│ Compiled Zod Guard Shield    │ │
│ │ (Multi-Pass Graph Check)     │      │ (Validates agnosticui-schema)│ │
│ └──────────────────────────────┘      └──────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Target User Interaction & Account Failure Loop

1. **Context Initialization:** A customer support representative opens the custom support workspace to investigate a billing issue for user account **`usr_992`**.
2. **Natural Language Request:** The representative inputs a message: `"User usr_992 states they are receiving an error when trying to view their enterprise invoice data sheet."`.
3. **Agentic Tool Evaluation:** The local Hono gateway forwards the transaction to the backend loop. The engine extracts the scalar string parameter from the regex capture array (`RegExpMatchArray`) to prevent nominal type index mismatches.
4. **Data Condition Discovery:** The data function queries the mock database file and flags that the user's account state is currently `past_due` because their primary payment method is `expired`.
5. **Structural Graph Emission:** The AI model skips lengthy text explanations. Instead, it generates a precise JSON layout graph (`AgNode[]`) outlining an interactive `AgCard` containing a payment card `AgInput` field and an update trigger `AgButton` linked back to a secure action handler.
6. **Incremental Validation Check:** The raw streamed node array is intercepted by the server gateway and passed through `nodeGuard.ts`'s validation engine before reaching the client canvas. The guard executes defensive actions first, removing edge-level custom indicators before running strict whitelisted schema parsing.
7. **Frontend Canvas Streaming:** The validated JSON structures stream into the client browser layout, continuously appending to the active nodes array. The `@agnosticui/render-lit` web component canvas engine renders the elements incrementally in real-time with comprehensive shadow-DOM style encapsulation.
## 3. Data Tier Layouts & Schemas

### 3.1 Isolated Mock Database (`v2/sdui/demo-support-center/src/db/mockData.ts`)
To shield existing directories and core library manifests from contamination, all data structures are strictly isolated inside the new package boundary.

```typescript
export interface UserAccount {
  id: string;
  name: string;
  email: string;
  plan: 'free' | 'pro' | 'enterprise';
  accountStatus: 'active' | 'suspended' | 'past_due';
}

export interface BillingProfile {
  userId: string;
  cardBrand: string;
  cardLast4: string;
  expiryStatus: 'valid' | 'expired';
  outstandingBalance: number;
}

export const mockUsersAccounts: Record<string, UserAccount> = {
  "usr_992": {
    id: "usr_992",
    name: "Sam Troublesome",
    email: "sam@error-logs.com",
    plan: "enterprise",
    accountStatus: "past_due"
  }
};

export const mockBillingProfiles: Record<string, BillingProfile> = {
  "usr_992": {
    userId: "usr_992",
    cardBrand: "MasterCard",
    cardLast4: "9981",
    expiryStatus: "expired",
    outstandingBalance: 150.00
  }
};
```

---

## 4. Technical Constraints & Security Infrastructure

* **Strict Code Isolation:** The workspace codebase must remain fully self-contained inside `v2/sdui/demo-support-center/` and can never alter or mutate code records in sibling folders.
* **Dogfooding Package Boundaries:** The frontend workspace must strictly consume core rendering layouts and schema rules through compiled workspace tarballs (`agnosticui-schema-2.0.0-alpha.1.tgz`) installed locally via `npm pack`. Direct deep-linking to source directories outside the demo workspace boundary is strictly prohibited.
* **Malformed Component Dropping:** Any streaming node layout payload failing the schema validation check is discarded immediately at the gateway layer before hitting the client browser canvas.
* **Strict Vocabulary Conformity (Anti-Hallucination Guard):** The background validation layer rejects data graphs containing standard HTML tags (e.g., `<button>`, `<div>`) or external UI frameworks that do not explicitly target an authorized AgnosticUI component schema variant definition.
* **Decoupled Quality Evaluation (Non-Deterministic Boundary):** The background validation server explicitly isolates structural safety from response quality. UI aesthetic synthesis and utility remain entirely non-deterministic, moving with the inherent intelligence and capabilities of the downstream LLM engine.

### 4.1 Structural Schema Atomicity
The core schemas enforce strict object whitelisting parameters combined with an `additionalProperties: false` layout rule. Layout components reject arbitrary, custom, or unmapped text-binding properties at the root level:
* **`AgMessageBubble` text binding:** The message string must be passed explicitly through the whitelisted **`message`** root key descriptor, *not* `text` or `content`.
* **`AgButton` slot text propagation:** Container elements (such as `AgButton`) do not accept inline label variables natively. Instead, they use a child array mapping model or a hardcoded **`'label-child'`** `rendererSlotConfig` parameter that expects **`node.label`** to populate default text slots.

### 4.1b The Flat Graph Component Relationship Tree
Unlike traditional component frameworks that render deeply nested object configurations, AgnosticUI flushes a completely flat array of sibling nodes. Nested layouts are derived recursively at runtime by mapping component properties to string ID references:

```mermaid
graph TD
    subgraph FlatArray["Flat Array Layout Array Input Envelope (AgNode[])"]
        direction LR
        N1["Node 1:<br/>AgMessageBubble<br/>(ID: msg_alert_usr_992)"]
        N2["Node 2:<br/>AgCard<br/>(ID: card_form_usr_992)"]
        N3["Node 3:<br/>AgInput<br/>(ID: input_cc_usr_992)"]
        N4["Node 4:<br/>AgButton<br/>(ID: btn_submit_usr_992)"]
    end

    subgraph HydratedTree["Hydrated Viewport Composition (Shadow DOM Painting)"]
        Root1["Root 1: AgMessageBubble"]
        Root2["Root 2: AgCard"]
        Child1["Child Slot: AgInput"]
        Child2["Child Slot: AgButton"]
        
        Root2 -->|children: ['input_cc_...', 'btn_submit_...']| Child1
        Root2 -->|children| Child2
    end

    N2 -.->|References Sibling IDs| HydratedTree
```

### 4.2 Upstream Schema Pipeline Blindspots & Remediation
Because the library's automated schema generator compiles rules directly from the core design system components' TypeScript code declarations (`*Props`), any element assigned to the `'label-child'` pipeline that relies on native child slots instead of a `label` property causes a validation trap—the validator rejects `label` as an unknown key while the rendering engine requires it to paint visible text.
* **Remediation Invariant:** This discrepancy is handled cleanly by patching the core schema compiler rules via **`typeOverrides`** inside `v2/sdui/schema/scripts/codegen.config.ts`:
```typescript
export const typeOverrides = {
  AgButton: {
    label: {
      tsType: "string",
      zodExpr: "z.string().optional()"
    }
  }
};
```
* Executing `npm run codegen -- --emit-schema-json` synthesizes the corrected whitelisted properties natively without temporary key-swapping hacks inside the application layer.

### 4.3 Shadow DOM Event Delegation Boundaries
The canvas uses fully encapsulated Shadow DOM templates generated dynamically by Lit. Standard global event hooks (such as `document.querySelector` or raw click listeners mapped to parent containers) fail to intercept interactive elements inside the shadow root boundaries.
* **Remediation Invariant:** The client-edge controller interface uses an explicit event delegation model tracking **`event.composedPath()`** loops on the root canvas element. This reliably bridges the asynchronous shadow template registration boundaries and intercepts custom action tokens (`SUBMIT_REMEDIATION`) smoothly in the Chrome console layout.

## 5. Automation Testing Metric Profiles

To systematically benchmark model outputs against our architectural constraints, an automated evaluation test harness is integrated directly into the workspace root.

* **Configuration Vector Path:** `v2/sdui/demo-support-center/promptfoo.yaml`
* **Core Philosophy:** Tests do not grade aesthetic quality; they treat the LLM as a data synthesizer, programmatically verifying that its output complies with structural schemas, contains zero forbidden native elements, and terminates correctly during failure loops.

### 5.1 Programmatic Assertions Matrix
To bypass local `ajv` and strict-mode compilation keyword collisions on nested assertion objects, all prompt metrics utilize flat string-containment matches:

```yaml
description: "AgnosticUI SDUI Support Center Local Ollama Layout Schema Assertion Suite"

prompts:
  - "System: You are an expert SDUI layout generation model. Return ONLY a valid, plain, flat JSON array matching the whitelisted component schemas with no surrounding conversational text or markdown blocks.\nUser: {{userPrompt}}"

providers:
  - id: "ollama:chat:qwen2.5-coder:1.5b"
    config:
      host: "http://localhost:11434"
      temperature: 0.0

tests:
  - description: "Verify past_due account anomalies for usr_992 synthesize complete form elements"
    vars:
      userPrompt: "User usr_992 states they are receiving an error when trying to view their enterprise invoice data sheet."
    assert:
      - type: contains
        value: '"component": "AgMessageBubble"'
      - type: contains
        value: '"component": "AgCard"'
      - type: contains
        value: '"component": "AgInput"'
      - type: contains
        value: '"component": "AgButton"'
```

### 5.2 Local LLM Few-Shot Echoing Invariants
Small, local, open-weight models (such as `qwen2.5-coder:1.5b`) suffer from context window echoing anomalies where single coding examples are repeated as static outputs for all inputs, completely breaking adaptive flows.
* **Remediation Invariant:** The prompt configuration profile enforces a strict **Dual-Path System Context Template**. It injects contrasting few-shot data mappings—proving that an obstructed user must trigger a multi-node payment card (`AgCard`) while an active user must return *only* a standalone alert bubble (`AgMessageBubble`). This trains the local weights model to follow the decision trees accurately, achieving a consistent **100% PASS** metrics baseline.

---

## 6. Deployment & Infrastructure Typologies

To balance zero-cost local prototyping with enterprise resume highlights, the infrastructure targets a strict dual-topology blueprint.

### 6.1 Local Development (Localhost Architecture)
* **The Stack:** Hono Node.js Entry Server (`@hono/node-server`), Native Ollama Engine, and embedded archive processing.
* **Execution Boundary:** The API gateway runs as a standard Node process on `localhost:3000`. It feeds data segments through the compiled schema library directly in memory, querying the local `qwen2.5-coder:1.5b` instance with zero external web overhead. The toolchain incorporates **Vite 6+ (`^6.0.0`)** and a reverse proxy configuration to eliminate `RequestInit` duplex stream path collisions smoothly across `localhost:5173`.

### 6.2 Cloud Production (Target Cloudflare Edge Architecture)
* **The Stack:** Cloudflare Workers (Hono Gateway Edge), Cloudflare Durable Objects (Stateful WebSocket Router), Cloudflare Workers Turnstile (Bot Shield), and a persistent Node/VPS cluster (Schema Validation Host).
* **Execution Boundary:** 
  * The frontend static pages are delivered globally via **Cloudflare Pages** at the edge. 
  * API endpoints are intercepted immediately by a serverless **Cloudflare Worker running Hono**. Turnstile injects non-intrusive CAPTCHA checks to mitigate resource exhaustion attacks against downstream infrastructure.
  * Because standard Cloudflare Worker edge runtimes are stateless and short-lived, they cannot maintain long-running WebSocket channels natively. In production environments, the Worker routes communication through a **Cloudflare Durable Object** instance. This stateful coordinator establishes and maintains an isolated, long-lived, high-stability WebSocket connection down to your background validator hosted on a cloud VPS cluster, completely neutralizing serverless timeout limitations.

---

## Appendix A: Local vs. Cloud Architecture Symmetry Matrix

| Architectural Role | Localhost Prototyping (`6.1`) | Production Cloud Environment (`6.2`) | Cloudflare Cost Tier |
| :--- | :--- | :--- | :--- |
| **The User Interface Canvas** | `@agnosticui/render-lit` (Vite Sandbox on Port `5173`) | **Cloudflare Pages** (Globally Distributed Edge CDN Assets) | **$0.00 Free Tier** (Unlimited Bandwidth) |
| **The Intelligent Orchestrator** | `Hono Node Server` (Local Host on Port `3000`) | **Cloudflare Workers** (Serverless Hono Edge Pipeline) | **$0.00 Free Tier** (Up to 100k requests/day) |
| **The Stateful Connection Broker** | *Not Required* (Direct runtime processing) | **Cloudflare Durable Objects** (Stateful Connection Coordinator) | **Low Cost** (Included in Workers Paid tier or micro-cents allocation) |
| **The Compliance Guard Shield** | `@agnosticui/schema` (Embedded inside application thread) | **Persistent Server Instance** (Interacted via Durable Object WebSocket Pipe) | **Self-Hosted** (Or zero-tier cloud compute micro-node) |
| **The Dynamic Core LLM Brain** | `Native Ollama` (Running local `qwen2.5-coder:1.5b`) | **Hosted Inference API** (Secured Cloud Engine Endpoint) | **Pay-As-You-Go Token Tier** |

---

## Appendix B: Edge Security Perimeter & Cost Protection Controls

### B.1 Automated Rate Limiting Rule (WAF Perimeter)
This rule tracks incoming request spikes per unique IP address and applies a temporary structural ban if traffic thresholds are breached.
* **Dashboard Target:** `Security > WAF > Rate limiting rules`
* **Rule Expression Configuration Variant:** `(http.request.uri.path contains "/api/")`
* **Trigger Conditions:** When rate exceeds **30 requests** within a **10-second** window.
* **Mitigation Action:** **Block** traffic from that specific IP address for a duration of **1 hour** (Serving an immediate HTTP `429 Too Many Requests` at the edge).

### B.2 Turnstile Cryptographic Bot Shielding
Prevents headless automated scripts, curl loops, and scrapers from connecting directly to the orchestration engine backend.
* **Dashboard Target:** `Security > WAF > Custom rules`
* **Rule Expression Configuration Variant:** `(http.request.uri.path eq "/api/chat" and not http.request.headers["x-turnstile-token"])`
* **Mitigation Action:** **Managed Challenge** (Forces a background browser verification check. Non-browser clients and automated scripts fail automatically and are dropped).

### B.3 Emergency Maintenance Kill-Switch (Application Circuit Breaker)
In the event of an active, highly targeted attack vector or unexpected cost spike, engineers can deploy a fallback script update directly from the terminal or dashboard environment. This acts as an immediate circuit breaker, protecting downstream token budgets from exposure.

```typescript
// v2/sdui/demo-support-center/src/server/cloud-kill-switch.ts
export default {
  async fetch(request: Request): Promise<Response> {
    return new Response(
      JSON.stringify({ error: "Demo infrastructure temporarily offline for scheduled maintenance." }), 
      { status: 503, headers: { "Content-Type": "application/json" } }
    );
  }
};
```

### B.4 Secrets & Network Isolation Boundary
* **Zero Secret Leakage:** Production variables (such as Cloudflare API tokens, private VPS connection strings, and hosted LLM keys) are injected exclusively through encrypted environment secrets managed via the Cloudflare dashboard or wrangler secrets vaults.
* **Network Isolation:** The persistent VPS cluster is configured behind strict firewall rules, rejecting all direct public HTTP/S traffic and *only* accepting authenticated incoming WebSocket tunnels brokered by the Cloudflare Durable Object edge network.
