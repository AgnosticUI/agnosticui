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

## Consumption Verification Workflow

1. **Setup**: Run `./scripts/setup-testing-playground.sh`
2. **Test**: Navigate to `/tmp/agnosticui-test` and run `npm run dev`
3. **Verify**: Check that components render correctly in browser
4. **Cleanup**: Run `./scripts/cleanup-testing-playground.sh` when done

**Purpose:** Simulates the end-user experience of `npm install agnosticui-core` to ensure package exports and component imports work correctly.
