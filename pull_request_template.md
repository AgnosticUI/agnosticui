# Pull Request

## What does this change?

Brief description of the change and why it's needed.

Fixes #(issue number, if applicable)

## Type of Change

- [ ] Bug fix
- [ ] New feature / component
- [ ] Documentation / playbooks / site
- [ ] A2UI catalog / renderer / MCP server
- [ ] Tooling / CI / build

## Verification Checklist

See [CONTRIBUTING.md](CONTRIBUTING.md) for package-specific commands.

- [ ] Tests, typecheck, and lint pass in modified packages (`v2/lib`, `v2/cli`, `v2/mcp-server`, `v2/a2ui/*`)
- [ ] A2UI codegen is in sync (`(cd v2/a2ui/catalog && npm run check)` passes if `v2/lib` component interfaces changed)
- [ ] Verified in both light and dark modes (`data-theme="dark"`) if UI/styles changed
- [ ] Docs updated if public APIs or workflows changed (see [v2/site/docs](https://github.com/AgnosticUI/agnosticui/tree/master/v2/site/docs))

---

**Note:** If you're unsure about anything or need help, just @ mention in your PR or the related issue. We're here to help!
