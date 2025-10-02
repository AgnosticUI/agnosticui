# 🚀 AgnosticUI v2 Development Scripts

## Available Scripts

### setup-testing-playground.sh
Sets up the development environment by linking the lib package to the playground.

```bash
./scripts/setup-testing-playground.sh
```

**What it does:**
- Verifies lib package is built
- Sets up npm link from lib to playground
- Installs playground dependencies

### cleanup-testing-playground.sh
Cleans up npm links for a fresh start.

```bash
./scripts/cleanup-testing-playground.sh
```

## Development Workflow

1. **Setup**: Run `./scripts/setup-testing-playground.sh`
2. **Develop**: Edit components in `lib/src/components/`
3. **Test**: View changes in playground at `localhost:4321`
4. **Build**: Run `npm run build` in lib directory when ready
