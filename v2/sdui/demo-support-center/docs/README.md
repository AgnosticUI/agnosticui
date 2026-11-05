# Cheat Sheet

# SSE Resources

Server-Sent Events (SSE): Build a Real-Time Stock Dashboard in Go
https://www.youtube.com/watch?v=_s9LkfybCFQ

Designing APIs for AI Services: The Interview Guide (REST, gRPC, SSE)
https://www.youtube.com/watch?v=QwcPQCWydhk

The Ultimate Next.js Dashboard Stack (Shadcn, WebSocket / SSE, OLTP / OLAP Database)
https://www.youtube.com/watch?v=M4glLwqDEBw

## Simplest SSE E2E
```javascript
// === SERVER (Koa.js Backend) ===
const Koa = require('koa'); const app = new Koa();
app.use(async ctx => {
  // Validate path and the negotiated client-side query flag 'stream=true'
  if (ctx.path === '/events' && ctx.query.stream === 'true') {
    ctx.set({
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    });
    ctx.body = new (require('stream').PassThrough)();
    setInterval(() => { console.log('Server sending stream chunk'); ctx.body.write('data: Hello World\n\n'); }, 2000);
  } else ctx.body = `
<!DOCTYPE html><html><body>
<!-- === CLIENT (Vanilla HTML/JS using Fetch + Streams API) === -->
<script>
  (async () => {
    console.log('Client negotiating stream:true via query param...');
    // EventSource lacks custom payloads/methods; native fetch handles the stream lifecycle manually
    const response = await fetch('/events?stream=true'); 
    const reader = response.body.pipeThrough(new TextDecoderStream()).getReader(); // Transforms raw binary chunks directly into text strings
    while (true) {
      const { value, done } = await reader.read(); // Continuous loop awaiting incoming data stream packets
      if (done) break;
      console.log('Raw chunk received:', JSON.stringify(value)); // Note: Value contains raw wire protocol including 'data:' and '\\n\\n'
      // Pedantic regex split to match the SSE protocol logic and extract pure payloads
      value.split('\\n\\n').filter(line => line.startsWith('data:')).forEach(msg => {
        console.log('Parsed stream event:', msg.replace('data: ', ''));
      });
    }
  })();
</script></body></html>`;
}); app.listen(3000, () => console.log('Server running on http://localhost:3000'));

```

## Structure

```shell
v2/sdui/demo-support-center/
├── docs
│   ├── e2e-support-agent-prd.md     # Approved project PRD
│   └── README.md
├── package-lock.json
├── package.json                     # Workspace dependency tree
├── src
│   ├── client
│   │   ├── __tests__
│   │   │   └── streamClient.test.ts # Verifies async iterator streaming mechanics
│   │   └── streamClient.ts          # Fetch stream client with for-await...of loops
│   ├── db
│   │   └── mockData.ts              # Isolated mock database engine
│   ├── mcp
│   │   └── schema
│   │       └── agnosticui-schema.json # Authorized JSON schema layout constraints
│   └── server
│       ├── __tests__
│       │   ├── actions.test.ts      # Verifies XSS and perimeter threat defenses
│       │   ├── gateway.test.ts      # Verifies SSE streams and payload fragmentation
│       │   └── streamUtils.test.ts  # Verifies progressive bracket-balancing bounds
│       ├── actions.ts               # Secure execution registry & sanitation core
│       ├── gateway.ts               # Hono API Gateway with progressive parser
│       └── streamUtils.ts           # Sentinel-conditioned text buffer parser
└── tsconfig.json                    # Isolated compiler configurations
```

# NEXT SESSION

NOTE: We should consider addressing the following considerations for the project (not mentioned in the PRD spec:)
• Quotas, tokens-per-minute limits (something reasonable considering this is a toy OSS example not generating any moneys it MUST not result in API costs!), and the token bucket, and...
  • Perhaps `max_tokens` in clients request schema?
  • Handling 429 Too Many Requests with Retry-After, exponential backoff and jitter
• When server starts streaming SSE do we provide a generated ID for tracking?

To make sure your next session boots up with zero friction and perfect factual grounding, here is your exact context bootstrapping checklist and your updated project ledger.

🧳 Context Window Bootstrapping Checklist (For your next session)

When you open a fresh chat, upload or paste these files in your very first prompt to anchor the AI's path definitions, type parameters, and code style:
1. v2/sdui/demo-support-center/docs/e2e-support-agent-prd.md — Crucial to restore the high-level product vision, business rules, and mock user scenarios.
2. v2/sdui/demo-support-center/src/client/streamClient.ts — Anchors the front-end SduiStreamClient API design and the concrete AgNode layout type shape.
3. v2/sdui/demo-support-center/src/server/gateway.ts — Establishes the real-time Hono POST /api/chat router orchestration.
4. tree Output Command — Yes, definitely provide a fresh tree output. It prevents path hallucinations by showing exactly how the workspace is structured (especially now that client/ safely lives inside src/).
And provide above Structure `tree` output.

🗺️ Complete Project Implementation Lifecycle Ledger

Copy and paste this exact status ledger into your next opening prompt so the next agent knows precisely where the baton is being passed:

Phase 1: Core Environment & Sandbox Architecture

• Step 4.1: Workspace Blueprint & Schema Setups
	• Action: Initialized project workspace, ESM configurations, and strict TypeScript rules.
• Step 4.2: Isolated Mock Database Infrastructure
	• Action: Structured user accounts and billing exception states (mockData.ts).
• Step 4.3: Action Security Compilers & Token Accumulators
	• Action: Engineered the baseline token chunk parsing utilities (streamUtils.ts) and edge-level sanitization matrices (actions.ts).

Phase 2: Gateway Pipeline Reactivation

• Step 4.4: Real-Time SSE Route Orchestration
	• Action: Bound chunk aggregation into Hono POST /api/chat with testing parameters covering fragmentation and script injection defenses.

Phase 3: Client-Edge Hydration & UI Manifest Binding (🚀 Last Completed & Next Up)

• Step 4.5: Modern Async Iterator Client Setup (**LAST COMPLETED**)
	• Action: Implemented SduiStreamClient using the modern for await...of asynchronous iterator idiom on response.body. Streamlined both client and server layers to use native web streams, clearing 10/10 tests at 100% green compliance.

---
RESUMPTION CONSTRAINT: PHASE 3 - STEP 4.6 REALIGNMENT
The upstream SDUI codegen schema and renderers have been fully synchronized and rebuilt. 
We are resuming Step 4.6: AgNode Layout Assembly & State Binding. 
We will now use the official, updated framework-agnostic @agnosticui/render-lit package 
integrated natively inside our `v2/sdui/demo-support-center/` workspace workspace, ensuring 
strict vocabulary conformity without altering the auto-generated code records directly.
---
• Step 4.6: AgNode Layout Assembly & State Binding (UPCOMING / NEXT UP)
	• Action: Construct the browser mount engine to dynamically transform incoming serialized node metadata into live HTML DOM element renderings without layout stutter.
• Step 4.7: Interactive Action Dispatch & Cycle Handshake
	• Action: Intercept client clicks and form entries to dispatch authorized action tokens back to the gateway.

Phase 4: Verification, Polish & E2E Validation

• Step 4.8: Live Simulator Integration
• Step 4.9: Production Asset Optimization

## Prompt
Ready to pick up at Step 4.6 with the async stream client locked in.
