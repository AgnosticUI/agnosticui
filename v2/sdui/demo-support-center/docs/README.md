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
