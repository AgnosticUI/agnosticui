# @agnosticui/cli

CLI for AgnosticUI Local - The UI kit that lives in your codebase.

## Development Setup

### Build the CLI

```bash
npm install       # Install dependencies (required first!)
npm run build     # Build TypeScript to dist/
```

### Test Locally

The CLI is designed to work with a local tarball for development/dogfooding.

1. **Build the tarball first:**
   ```bash
   cd ../../  # Go to v2 root
   ./scripts/build-local-tarball.sh
   ```

   **Note:** The tarball name will be `agnosticui-local-v{VERSION}.tar.gz` where VERSION comes from `v2/lib/package.json`.

2. **Package the CLI for local testing:**

   **Option A: Using `npm pack` (Recommended - More Reliable)**
   ```bash
   cd cli
   npm install        # Install dependencies (first time only)
   npm run build      # Build TypeScript to dist/
   npm pack           # Package it
   # This creates: agnosticui-cli-2.0.0-alpha.1.tgz
   ```

   Then in your test project:
   ```bash
   cd /path/to/your/test/project
   npm install /path/to/agnosticui/v2/cli/agnosticui-cli-2.0.0-alpha.1.tgz

   # Now you can use the CLI
   # Note: Replace VERSION with the version from v2/lib/package.json (e.g., 0.0.1)
   npx ag init --framework react --tarball /path/to/v2/dist/agnosticui-local-vVERSION.tar.gz
   npx ag add button input
   npx ag list
   ```

   **Option B: Using `npm link` (Alternative)**
   ```bash
   cd cli
   npm install        # Install dependencies (first time only)
   npm run build      # Build TypeScript to dist/
   npm link           # Link globally
   ```

   Then in your test project:
   ```bash
   cd /path/to/your/test/project
   npm link @agnosticui/cli

   # Now you can use the CLI
   # Note: Replace VERSION with the version from v2/lib/package.json (e.g., 0.0.1)
   ag init --framework react --tarball /path/to/v2/dist/agnosticui-local-vVERSION.tar.gz
   ag add button input
   ag list
   ```

   **To unlink:**
   ```bash
   npm unlink @agnosticui/cli -g
   ```

3. **Quick test workflow with pack:**
   ```bash
   # PREREQUISITES: Build the component library tarball first
   # From v2/lib directory:
   cd ../../lib
   npm run build
   # This creates: dist/agnosticui-local-v{VERSION}.tar.gz

   # Then build and pack the CLI
   cd ../cli
   npm install       # Install CLI dependencies (first time only)
   npm run build && npm pack

   # In test project
   npm install /path/to/agnosticui/v2/cli/agnosticui-cli-2.0.0-alpha.1.tgz --force
   # Note: Replace VERSION with the version from v2/lib/package.json
   npx ag init --framework react --tarball /path/to/v2/dist/agnosticui-local-vVERSION.tar.gz
   ```

## Commands

### `ag init`

Initialize AgnosticUI Local in your project.

**Options:**
- `-f, --framework <framework>` - Framework to use (react, vue, lit, svelte)
- `-p, --components-path <path>` - Path where components will be generated (default: `./src/components/ag`)
- `-t, --tarball <path>` - Path to local tarball (for development)

**Example:**
```bash
ag init --framework react --components-path ./src/components/ag
```

### `ag add <components...>`

Add one or more components to your project.

**Options:**
- `--force` - Overwrite existing components

**Examples:**
```bash
# Add a single component
ag add button

# Add multiple components
ag add button input checkbox

# Overwrite existing
ag add button --force
```

### `ag list`

List all available components and show which ones are already added to your project.

**Example:**
```bash
ag list
```

### `ag sync`

Update the reference library from a tarball (useful during local development).

**Options:**
- `-t, --tarball <path>` - Path to tarball (overrides path from config)

**Examples:**
```bash
# Use tarball path from config
ag sync

# Override with specific tarball
ag sync --tarball /path/to/new/agnosticui-local-v0.0.2.tar.gz
```

**What it does:**
1. Reads tarball path from `agnosticui.config.json` (or uses `--tarball` flag)
2. Shows confirmation with tarball path and version
3. Extracts tarball to `./agnosticui/` (overwrites reference library)
4. Updates CSS tokens in `{componentsPath}/styles/`
5. Updates config with new tarball info and timestamp

**Your components are never touched** - only the reference library is updated.

**Typical workflow:**
```bash
# Rebuild the library
cd v2
./scripts/build-local-tarball.sh

# Sync in your project
cd ../your-project
npx ag sync
```

## How It Works

1. **`ag init`** extracts the AgnosticUI reference library to `./agnosticui/` and creates a config file (saves tarball path for sync)
2. **`ag add`** copies both the `core/` and framework-specific directories (e.g., `react/`) from the reference library to your project
3. **`ag sync`** updates the reference library by re-extracting from the tarball (your components remain untouched)
4. Components are fully yours to customize - they're copied, not linked

## Project Structure After Init

```
your-project/
├── agnosticui/                    # Reference library
│   ├── lib/
│   │   ├── dist/                  # Built components
│   │   └── src/                   # Source files
│   ├── tokens/                    # Design tokens
│   ├── docs/                      # Documentation
│   └── components.json            # Component registry
├── src/
│   └── components/
│       └── ag/                    # Your components (customizable)
│           ├── Button/
│           │   ├── core/          # Core Web Component
│           │   └── react/         # React wrapper
│           └── Input/
│               ├── core/
│               └── react/
└── agnosticui.config.json         # CLI configuration
```

## Development Notes

- The CLI looks for tarballs in `../../dist/` relative to the CLI package for local development
- In production, it will download from GitHub releases or CDN (TODO)
- All file operations preserve the structure: `core/` + `framework/`
- `npm pack` is more reliable than `npm link` for local testing
- Remember to rebuild (`npm run build`) and repack after making CLI changes

# Status on 11/15/25

  ✅ Completed (MVP for local dogfooding)

  - ag init - Fully functional with interactive prompts, tarball extraction, config creation
  - ag add - Component copying with --force flag support
  - ag list - Display available components
  - Build tooling - build-local-tarball.sh creates distributable tarballs
  - Dependency management - Auto-detects package manager, installs required deps (lit, @lit/react)
  - CSS tokens - Automatically copies to components/styles directory
  - TypeScript warnings - Reminds about experimentalDecorators config

  📝 Outstanding TODOs

  1. Production Tarball Download (init.ts:158-160)
  Currently hardcoded to look for local tarball in ../../dist/. Needs:
  - Download from GitHub releases or CDN
  - Version resolution (latest vs specific version)
  - Progress indicator during download
  - Caching mechanism

  2. Dynamic Version Reading (components.ts:69)
  Currently hardcoded to '2.0.0-alpha'. Should read from version.json in the extracted tarball.

  📊 Current State

  The CLI is production-ready for local development but not yet ready for npm publish because users can't download the component library - they'd need
  the tarball manually.

  For npm publication, you need:
  1. Implement tarball downloading from GitHub releases
  2. Publish both @agnosticui/cli and host tarball on GitHub releases
  3. Optional: Add version flags (--version, specific version support)
