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

# NEXT SESSION

## REFERENCE BASELINE FILES

When you open a fresh chat upload these:

```text
File: src/client/index.ts
[Paste complete index.ts here]

File: tsconfig.json
[Paste complete tsconfig.json here]

File: vitest.config.ts
[Paste complete vitest.config.ts here]

File: src/client/canvasRenderer.ts
[Paste complete canvasRenderer.ts here]
```

## CONTEXT HANDOFF: AGNOSTICUI SDUI SUPPORT AGENT APPLICATION LOOPS
We are working on a framework-agnostic coding project inside the `v2/sdui/demo-support-center/` workspace using a highly iterative, pedantic, hyper-focused instructional workflow. Absolute comprehension and rigorous verification override execution speed.

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
│   │   │   ├── canvasRenderer.test.ts # Runs global jsdom sandbox elements tests
│   │   │   ├── sanity.test.ts
│   │   │   ├── streamClient.test.ts
│   │   │   └── vocabularyGuard.test.ts
│   │   ├── canvasRenderer.ts        # Pure semantic vanilla CSS layout factory
│   │   ├── index.ts                 # Canonical shared type & model manifest
│   │   ├── streamClient.ts          # Async iterator fetch stream client
│   │   └── vocabularyGuard.ts       # Anti-hallucination validation filter
│   ├── db
│   │   └── mockData.ts              # Isolated mock database engine
│   ├── mcp
│   │   └── schema
│   │       └── agnosticui-schema.json
│   └── server
│       ├── __tests__
│       │   ├── actions.test.ts
│       │   ├── gateway.test.ts
│       │   └── streamUtils.test.ts
│       ├── actions.ts               # Secure execution registry & sanitation core
│       ├── gateway.ts               # Hono API Gateway with progressive parser
│       └── streamUtils.ts           # Sentinel-conditioned text buffer parser
├── tsconfig.json                    # Isolated compiler configurations
└── vitest.config.ts                 # Global automated jsdom testing configuration
```

### PROJECT IMPLEMENTATION LIFECYCLE LEDGER

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

Phase 3: Client-Edge Hydration & UI Manifest Binding (🚀 Active Phase)
• Step 4.5: Modern Async Iterator Client Setup
	• Action: Implemented SduiStreamClient using the modern for await...of asynchronous iterator idiom on response.body. Streamlined both client and server layers to use native web streams.
• Step 4.6: Centralizing Shared Layout Models & Base Renderer
	• Action: Extracted core domain models out of concrete utility loops and established a unified structural entry manifest in `src/client/index.ts`. Built out the base `canvasRenderer.ts` using clean, semantic vanilla CSS designators (purged of utility frameworks) and safe `Element.textContent` primitives. Engineered an immutable verification filter `vocabularyGuard.ts` to block hallucinated inputs.

Phase 4: Verification, Polish & E2E Validation (Upcoming)
• Step 4.8: Live Simulator Integration
• Step 4.9: Production Asset Optimization

---

### PRODUCTION SAFETY & RATE RESILIENCE CONSIDERATIONS
Although this is an open-source reference example, it must not expose the operator to runaway API token costs or cascading network failures. The following constraints must be layered into our remaining client/gateway work:
1. Budget Containment Shield: The client request schema must pass an explicit `max_tokens` layout bound parameter to guarantee strict budget encapsulation.
2. Resilience Architecture (429 Handling): The stream client must gracefully intercept HTTP `429 Too Many Requests` status breaks, parsing edge `Retry-After` headers and falling back to a full Exponential Backoff with Decorrelated Jitter loop to eliminate server stampedes.
3. Transaction Tracing Keys: The instant an SSE cycle initializes, the pipeline must generate a unique tracking identifier token string (e.g. `X-Session-ID`) to pair logs, streamline debug profiles, and trace state transitions across asynchronous boundaries.

---

### STRICT WORKFLOW RULES FOR THE NEXT SESSION
1. SLOW DOWN & WORK ITERATIVELY: Work in small logical increments. Never build entire features or files at once. Break tasks across separate prompt exchanges.
2. SEPARATIVE SPECS: Every logical routine, loop step, or condition block MUST come with a companion unit spec test in the same response file block to observe and print flow changes.
3. MOTIVE BEFORE SYNTAX: Always explain the architectural "WHY" and defensive engineering motivation in approachable language before showing code syntax.
4. NO PLACEHOLDERS: Provide 100% complete, copy-pasteable files for the specific section being updated. Never use "// ... rest of code".
5. OVER-COMMENTING & EXPLANATORY LOGS: Add rich inline explanations and visual terminal console tracing markers to both production and spec files so execution flows can be audited dynamically.

### RESUMPTION TASK: PHASE 3 - STEP 4.6i THE INTERACTIVE AGBUTTON HANDSHAKE
We are ready to pick up exactly where we left off. Our goal is to extend `canvasRenderer.ts` and its companion test suite to support the `AgButton` component layout mapping, and bind interactive click action token properties to prepare our client-to-gateway event handshake pipeline.

Please respond acknowledging these constraints, summarize where the architecture stands based on the ledger, and ask for my signal to deliver the first micro-chunk of code for the AgButton factory layout.
