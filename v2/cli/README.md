# @agnosticui/cli

CLI for AgnosticUI Local - The UI kit that lives in your codebase.

## Development Setup

### Build the CLI

```bash
npm install
npm run build
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

## How It Works

1. **`ag init`** extracts the AgnosticUI reference library to `./agnosticui/` and creates a config file
2. **`ag add`** copies both the `core/` and framework-specific directories (e.g., `react/`) from the reference library to your project
3. Components are fully yours to customize - they're copied, not linked

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
