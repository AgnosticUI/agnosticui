# Cheat Sheet

## Structure

```shell
v2/sdui/demo-support-center/
├── docs/
│   └── e2e-support-agent-prd.md     # The approved PRD you provided
├── src/
│   ├── db/
│   │   └── mockData.ts              # Isolated mock database engine
│   ├── server/
│   │   ├── gateway.ts               # Hono API Gateway with progressive parser
│   │   └── cloud-kill-switch.ts     # Edge circuit breaker safety script
│   └── mcp/
│       ├── schema/
│       │   └── agnosticui-schema.json # Authorized UI component definitions
│       └── server.ts                # Background MCP Server with AJV Guard Shield
├── promptfoo.yaml                   # LLM automated assertion testing suite
├── package.json                     # Workspace dependency tree
└── tsconfig.json                    # Isolated compiler configurations
```

# NEXT SESSION

To make sure your next session boots up with zero friction and perfect factual grounding, here is your exact context bootstrapping checklist and your updated project ledger.

🧳 Context Window Bootstrapping Checklist (For your next session)

When you open a fresh chat, upload or paste these files in your very first prompt to anchor the AI's path definitions, type parameters, and code style:
1. v2/sdui/demo-support-center/docs/e2e-support-agent-prd.md — Crucial to restore the high-level product vision, business rules, and mock user scenarios.
2. v2/sdui/demo-support-center/src/client/streamClient.ts — Anchors the front-end SduiStreamClient API design and the concrete AgNode layout type shape.
3. v2/sdui/demo-support-center/src/server/gateway.ts — Establishes the real-time Hono POST /api/chat router orchestration.
4. tree Output Command — Yes, definitely provide a fresh tree output. It prevents path hallucinations by showing exactly how the workspace is structured (especially now that client/ safely lives inside src/).
	• Run this before starting: tree -L 4 -I node_modules v2/sdui/demo-support-center/

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
• Step 4.6: AgNode Layout Assembly & State Binding (UPCOMING / NEXT UP)
	• Action: Construct the browser mount engine to dynamically transform incoming serialized node metadata into live HTML DOM element renderings without layout stutter.
• Step 4.7: Interactive Action Dispatch & Cycle Handshake
	• Action: Intercept client clicks and form entries to dispatch authorized action tokens back to the gateway.

Phase 4: Verification, Polish & E2E Validation

• Step 4.8: Live Simulator Integration
• Step 4.9: Production Asset Optimization

## Prompt
Ready to pick up at Step 4.6 with the async stream client locked in.