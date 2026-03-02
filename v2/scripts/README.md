# 🚀 AgnosticUI v2 Testing Scripts

## Available Scripts

### setup-testing-playground.sh
Creates a minimal consumption test environment in `/tmp/agnosticui-test` to verify package installation.

```bash
./scripts/setup-testing-playground.sh
```

**What it does:**
- Verifies lib package is built
- Creates minimal Vite project in `/tmp/agnosticui-test`
- Installs `agnosticui-core` from local lib (simulates `npm install`)
- Sets up test HTML page with component demos

**After running:**
```bash
cd /tmp/agnosticui-test
npm run dev
```

### cleanup-testing-playground.sh
Removes the `/tmp/agnosticui-test` directory for a fresh start.

```bash
./scripts/cleanup-testing-playground.sh
```

### verify-playbooks.mjs

Audits every playbook example in `v2/playbooks/` for health issues that would break `npm i && npm run dev` on a fresh clone. New playbooks are picked up automatically -- the script discovers examples by finding any directory containing `agnosticui.config.json`, so no registration step is needed.

```bash
# From the v2/ directory:
node scripts/verify-playbooks.mjs          # audit all playbooks
node scripts/verify-playbooks.mjs --fix    # auto-fix what can be fixed safely
```

**Checks performed:**

| Check | Severity | Notes |
|-------|----------|-------|
| `agnosticui-core` in `package.json` deps | Error | CLI-first projects must not depend on it directly |
| `src/components/ag/` directory exists | Error | Missing means `init` was never run |
| `scripts.dev` entry in `package.json` | Warning | Expected in all playbook examples |
| VueInput.vue has `:name="name"` binding | Error | Required for FACE form values to appear in FormData |
| Config version matches current lib | Warning | Suggests a `sync` is needed, but won't break the app |

Exits non-zero when errors are found, suitable for CI. Run it after creating or modifying any playbook.

## Consumption Verification Workflow

1. **Setup**: Run `./scripts/setup-testing-playground.sh`
2. **Test**: Navigate to `/tmp/agnosticui-test` and run `npm run dev`
3. **Verify**: Check that components render correctly in browser
4. **Cleanup**: Run `./scripts/cleanup-testing-playground.sh` when done

**Purpose:** Simulates the end-user experience of `npm install agnosticui-core` to ensure package exports and component imports work correctly.
