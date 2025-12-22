# agnosticui-cli

CLI for AgnosticUI Local - The UI kit that lives in your codebase.

## Development Setup

### Using the Script

The process of creating a consumer test project is encapsulated in the `qa-verify.js` script for convenience which can be used as follows:

Move the last run if you want to preserve it:

```shell
mv v2/qa_workspace/lit-test v2/qa_workspace/lit-test-v1
```

Or, if you'd prefer to just completely obliterate the workspace you can "clean" it:

```shell
rm -rf v2/qa_workspace/ # Optionally cleanup last run
```

Create new consumer test project (for Lit in this case):

```shell
./v2/cli/scripts/qa-verify.js --framework lit
```

The following goes into step by step details on this…

### Build the CLI

```bash
npm install       # Install dependencies (required first!)
npm run build     # Build TypeScript to dist/
```

### Test Locally

The CLI is designed to work with a local tarball for development/dogfooding.

1. **Build the v2/lib library tarball first:**

   ```bash
   cd ../../  # Go to v2 root
   ./scripts/build-local-tarball.sh
   ```

   **Note:** The tarball name will be `agnosticui-local-v{VERSION}.tar.gz` where VERSION comes from `v2/lib/package.json`.

2. **Package the CLI for local testing:**

   **Using `npm pack`**

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
   npx ag init --framework vue --tarball /path/to/v2/dist/agnosticui-local-vVERSION.tar.gz
   # Note: if already initialized, we can also use `sync` to update the reference library
   # npx ag sync --tarball /path/to/v2/dist/agnosticui-local-vVERSION.tar.gz
   npx ag add button input
   npx ag list
   ```

   **T3. **Quick test workflow with pack:\*\*

   ```bash
   # PREREQUISITES: Build component v2/lib and cli tarball first. See above.

   # In test project
   npm install /path/to/agnosticui/v2/cli/agnosticui-cli-2.0.0-alpha.1.tgz --force
   # Note: Replace VERSION with the version from v2/lib/package.json
   npx ag init --framework vue --tarball /path/to/v2/dist/agnosticui-local-vVERSION.tar.gz
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

## How Package Resolution Works

The CLI uses a **two-tier resolution strategy** to find the AgnosticUI core library:

### 1. Local Development Mode (Priority)

When developing locally, the CLI first checks for a tarball at:

```
../../dist/agnosticui-local-v2.0.0-alpha.tar.gz
```

This allows testing changes without publishing to NPM.

### 2. Production Mode (NPM Registry)

If no local tarball is found, the CLI downloads from NPM:

```bash
npm pack agnosticui-core@${version}
```

**Package Names:**

- **Development tarball**: `agnosticui-local-v*.tar.gz` (built locally)
- **NPM package**: `agnosticui-core` (published to registry)

### Usage Examples

**Local Development:**

```bash
# Build local tarball first
cd v2
./scripts/build-local-tarball.sh

# Use in test project
npx ag init --framework react --tarball /path/to/v2/dist/agnosticui-local-v2.0.0-alpha.tar.gz
```

**Production (After Publishing):**

```bash
# Downloads agnosticui-core@alpha from NPM
npx ag init --framework react

# Or specify a version
npx ag init --framework react --version latest
npx ag init --framework react --version 2.0.0
```

## Testing After NPM Publication

**CRITICAL: Follow these steps to verify the published package works correctly**

### 1. Publish to NPM (Covered in Phase 4 below)

```bash
cd v2/cli
npm publish --tag alpha
```

### 2. Wait for NPM Propagation

Wait 1-2 minutes for NPM to propagate the package globally.

### 3. Verify in a Fresh Environment

```bash
# Create a completely fresh test directory
mkdir /tmp/test-agui-npm-$(date +%s)
cd /tmp/test-agui-npm-$(date +%s)

# Initialize a basic project
npm init -y

# Test global installation
npm install -g agnosticui-cli@alpha

# Verify CLI is available
ag --version  # Should show: 2.0.0-alpha.1

# CRITICAL TEST: Initialize WITHOUT --tarball flag
# This forces NPM download of agnosticui-core
ag init --framework react

# Verify the package was downloaded
ls -la agnosticui/  # Should contain extracted library

# Add a component
ag add button

# Verify component files exist
ls -la src/components/ag/Button/
```

### 4. Test with npx (No Global Install)

```bash
# Create another fresh test directory
mkdir /tmp/test-npx-$(date +%s)
cd /tmp/test-npx-$(date +%s)
npm init -y

# CRITICAL: This should work without ANY prior installation
npx agnosticui-cli@alpha init --framework vue
npx agnosticui-cli@alpha add button input
```

### 5. Test Different Version Tags

```bash
# Test specific version
ag init --framework react --version 2.0.0-alpha.1

# Test 'latest' tag (after stable release)
ag init --framework react --version latest
```

### 6. Verification Checklist

After publishing, verify:

- [ ] `npm info agnosticui-cli` shows correct version
- [ ] `npm info agnosticui-core` shows correct version
- [ ] `ag init` downloads from NPM (without --tarball flag)
- [ ] Fresh install in `/tmp` directory works
- [ ] `npx agnosticui-cli@alpha init` works without global install
- [ ] Components are correctly copied to project
- [ ] Config file is created properly

### Troubleshooting Published Package

**Problem: "Failed to download agnosticui-core from NPM"**

```bash
# Check if package is published
npm info agnosticui-core@alpha

# Check if you can manually download it
npm pack agnosticui-core@alpha
tar -tzf agnosticui-core-*.tgz  # Should show package contents
```

**Problem: CLI not found after global install**

```bash
# Check install location
npm list -g agnosticui-cli

# Verify bin path
npm bin -g

# Reinstall
npm uninstall -g agnosticui-cli
npm install -g agnosticui-cli@alpha
```

## Development Notes

- All file operations preserve the structure: `core/` + `framework/`
- `npm pack` is more reliable than `npm link` for local testing
- Remember to rebuild (`npm run build`) and repack after making CLI changes
- The temp download directory `.tmp-ag-download` is automatically cleaned up after init

# AgnosticUI v2 - Publishing & Transition Guide

## Package Naming Decision

Since `@agnosticui` organization is unavailable on npm, we'll use non-scoped packages matching your v1 pattern:

- **v1 packages**: `agnostic-angular`, `agnostic-react`, `agnostic-vue`, `agnostic-svelte`
- **v2 packages**: `agnosticui-core`, `agnosticui-cli`

This maintains consistency and leverages your existing npm namespace.

---

## CORRECTED EXECUTION ORDER

### Phase 1: Repository Restructuring (DO THIS FIRST!)

**Why first?** Clean up the repo structure before publishing. Publishing is the final validation step.

#### 1.1 Create Safety Backups

```bash
# Ensure you're on the latest master
git checkout master
git pull origin master

# Create backup branch
git branch backup-before-v2-transition
git push origin backup-before-v2-transition

# Create v1-legacy branch for historical reference
git checkout -b v1-legacy
git push origin v1-legacy
```

#### 1.2 Protect v1-legacy Branch (GitHub Settings)

- Go to: Settings → Branches → Add branch protection rule
- Branch name: `v1-legacy`
- Enable: "Lock branch" (read-only)
- Save

#### 1.3 Clean Master Branch

```bash
# Return to master
git checkout master

# Document what's being removed
ls -la | grep -E "(agnostic-|site)" > v1-directories-removed.txt
git add v1-directories-removed.txt
git commit -m "docs: record v1 directories before removal"

# Remove v1 directories
git rm -rf agnostic-angular/
git rm -rf agnostic-react/
git rm -rf agnostic-vue/
git rm -rf agnostic-svelte/
git rm -rf site/
git rm -rf agnostic-astro/  # if exists
git rm -rf agnostic-preact/  # if exists
# Remove any other v1-specific directories

git commit -m "chore: remove v1 directories, preparing for v2 as primary"
```

#### 1.4 Merge v2 into Master

```bash
# Merge v2 feature branch
git merge feature/agnosticui-v2-integration --no-ff -m "feat: merge AgnosticUI v2

- Complete rewrite with CLI-first approach
- Web Components architecture
- Support for React, Vue, Lit, Svelte
- Local component management
- Zero runtime dependencies"

# Push to master
git push origin master
```

#### 1.5 Update Root Files

**Root README.md:**

````markdown
# AgnosticUI v2

> The UI component kit that lives in your codebase

AgnosticUI v2 is a CLI-based UI component library that copies components directly into your project. You own the code, customize it freely, and avoid dependency lock-in.

## Installation

```bash
# Install CLI globally
npm install -g agnosticui-cli@alpha

# Or use with npx
npx agnosticui-cli@alpha init
```
````

## Quick Start

```bash
# Initialize in your project
ag init --framework react

# Add components
ag add button input card

# The components are now in your src/ - customize freely!
```

## Features

- 🎯 **CLI-First**: Copy components directly to your project
- 🔧 **You Own It**: Full control, no black boxes
- 🌐 **Framework Agnostic**: React, Vue, Lit, Svelte support
- 🎨 **Design Token System**: Consistent theming
- 📦 **Zero Runtime Deps**: Components work standalone
- ♿ **Accessible**: WCAG 2.1 AA compliant

## Documentation

Visit [your-docs-url] for full documentation.

## Looking for v1?

AgnosticUI v1 packages are available on the `v1-legacy` branch and still published on npm:

- `agnostic-angular`
- `agnostic-react`
- `agnostic-vue`
- `agnostic-svelte`

[View v1 Documentation](link-to-v1-docs)

## License

MIT

````

**Root package.json:**

```json
{
  "name": "agnosticui-monorepo",
  "version": "2.0.0-alpha.1",
  "private": true,
  "description": "AgnosticUI v2 - The UI kit that lives in your codebase",
  "workspaces": [
    "v2/lib",
    "v2/cli",
    "v2/docs"
  ],
  "scripts": {
    "build": "npm run build --workspaces",
    "test": "npm run test --workspaces",
    "docs:dev": "npm run dev --workspace=v2/docs",
    "docs:build": "npm run build --workspace=v2/docs"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/agnosticui.git"
  },
  "keywords": ["ui", "components", "cli", "design-system", "web-components"],
  "author": "Your Name",
  "license": "MIT"
}
````

#### 1.6 Delete Feature Branch (After Verification)

```bash
# Verify everything looks good on master
git log --oneline -10
git status

# Delete local feature branch
git branch -d feature/agnosticui-v2-integration

# Delete remote feature branch
git push origin --delete feature/agnosticui-v2-integration
```

---

### Phase 2: Update Package Names for Non-Scoped Publishing

#### 2.1 Update Core Library package.json

**File: `v2/lib/package.json`**

```json
{
  "name": "agnosticui-core",
  "version": "2.0.0-alpha.1",
  "description": "AgnosticUI v2 Core - Web Components and framework adapters",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "files": ["dist", "src", "README.md", "LICENSE"],
  "publishConfig": {
    "access": "public"
  },
  "keywords": [
    "agnosticui",
    "ui-components",
    "web-components",
    "design-system",
    "react",
    "vue",
    "svelte",
    "lit"
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/agnosticui.git",
    "directory": "v2/lib"
  },
  "author": "Rob Levin <rlevin@example.com>",
  "license": "MIT",
  "scripts": {
    "build": "tsc",
    "prepublishOnly": "npm run build"
  }
}
```

#### 2.2 Update CLI package.json

**File: `v2/cli/package.json`**

```json
{
  "name": "agnosticui-cli",
  "version": "2.0.0-alpha.1",
  "description": "AgnosticUI v2 CLI - Copy components directly to your project",
  "bin": {
    "ag": "./dist/cli.js"
  },
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "files": ["dist", "README.md", "LICENSE"],
  "publishConfig": {
    "access": "public"
  },
  "keywords": [
    "agnosticui",
    "cli",
    "ui-components",
    "code-generator",
    "component-library"
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/agnosticui.git",
    "directory": "v2/cli"
  },
  "author": "Rob Levin <rlevin@example.com>",
  "license": "MIT",
  "dependencies": {
    "commander": "^12.0.0",
    "ora": "^8.0.0",
    "chalk": "^5.3.0",
    "prompts": "^2.4.2",
    "tar": "^7.0.0"
  },
  "scripts": {
    "build": "tsc",
    "prepublishOnly": "npm run build"
  }
}
```

#### 2.3 Update CLI to Reference New Package Name

**File: `v2/cli/src/commands/init.ts`**

Find and replace all references:

- `@agnosticui/core` → `agnosticui-core`
- `@agnosticui/cli` → `agnosticui-cli`

```typescript
// Example: Update determineTarballPath() function
async function determineTarballPath(
  version: string = "alpha"
): Promise<string | null> {
  try {
    const { execSync } = await import("child_process");
    const tmpDir = path.join(process.cwd(), ".tmp-ag-download");
    await ensureDir(tmpDir);

    // Download package - UPDATED PACKAGE NAME
    execSync(`npm pack agnosticui-core@${version}`, {
      cwd: tmpDir,
      stdio: "pipe",
    });

    const files = await readdir(tmpDir);
    const tarball = files.find(
      (f) => f.startsWith("agnosticui-core-") && f.endsWith(".tgz")
    );

    if (tarball) {
      return path.join(tmpDir, tarball);
    }
  } catch (error) {
    logger.error("Failed to download agnosticui-core from npm");
  }

  return null;
}
```

#### 2.4 Update Documentation References

Search and replace in all documentation files:

- `@agnosticui/core` → `agnosticui-core`
- `@agnosticui/cli` → `agnosticui-cli`

---

### Phase 3: Pre-Publishing Preparation

#### 3.1 Build and Verify Both Packages

```bash
# Build core library
cd v2/lib
rm -rf dist/
npm install
npm run build
ls -la dist/  # Verify output

# Build CLI
cd v2/cli
rm -rf dist/
npm install
npm run build
ls -la dist/  # Verify output
node dist/cli.js --version  # Should show 2.0.0-alpha.1
```

#### 3.2 Test Locally with Pack

```bash
# Test core library
cd v2/lib
npm pack --dry-run  # Preview
npm pack  # Creates: agnosticui-core-2.0.0-alpha.1.tgz
tar -tzf agnosticui-core-2.0.0-alpha.1.tgz  # Inspect contents

# Test CLI
cd v2/cli
npm pack --dry-run
npm pack  # Creates: agnosticui-cli-2.0.0-alpha.1.tgz
tar -tzf agnosticui-cli-2.0.0-alpha.1.tgz
```

#### 3.3 Commit All Changes

```bash
# From repo root
git status
git add .
git commit -m "chore: prepare v2.0.0-alpha.1 for npm publication

- Update package names to agnosticui-core and agnosticui-cli
- Configure publishConfig for public access
- Update CLI to reference new package names
- Update all documentation"

git push origin master
```

#### 3.4 Verify v2/examples/{lit|react|vue}-test

Uninstall then reintall the CLI via local tarball then sync the core tarball:

```shell
npm uninstall @agnosticui/cli
npm i ../../cli/agnosticui-cli-VERSION.tgz
npx ag sync --tarball ../lib/agnosticui-core-VERSION.tgz
# Test npx ag add COMPONENT(s) --force
npm run dev
```

---

### Phase 4: Publish to npm

#### 4.1 Verify npm Login

```bash
npm whoami  # Should show: rlevin
```

#### 4.2 Publish Core Library First

```bash
cd v2/lib

# Final dry-run check
npm publish --dry-run --tag alpha

# Publish!
npm publish --tag alpha
```

**Expected output:**

```
+ agnosticui-core@2.0.0-alpha.1
```

#### 4.2b

I noticed the README.md had junk in it so I unfortunately did: npm unpublish, then fixed that and then went to publish but NPM will not let you republish within 24 hours, and, according to AI will require version bump.

TLDR:
1) I learned my lesson about dangers of `unpublish`
2) I'll just wait 24 hours
3) Use `2.0.0-alpha.2` and continue to bump versions from there.

#### 4.3 Verify Core Publication

```bash
npm info agnosticui-core
npm view agnosticui-core@alpha

agnosticui-core@2.0.0-alpha.1 | Proprietary | deps: 3 | versions: 1
AgnosticUI Core Library - Framework-agnostic, upgrade-safe web components built with Lit.

dependencies:
@floating-ui/dom: ^1.7.4 @lit/react: ^1.0.8       focus-trap: ^7.6.5       

maintainers:
- rlevin <roblevinillustration@gmail.com>

dist-tags:
alpha: 2.0.0-alpha.1   latest: 2.0.0-alpha.1  

published 48 seconds ago by rlevin <roblevinillustration@gmail.com>
npm view agnosticui-core dist-tags

# Visit on web
open https://www.npmjs.com/package/agnosticui-core
```

#### 4.4 Publish CLI

```bash
cd v2/cli

# Dry-run
npm publish --dry-run --tag alpha

# Publish!
npm publish --tag alpha
```

**Expected output:**

```
+ agnosticui-cli@2.0.0-alpha.1
```

#### 4.5 Verify CLI Publication

```bash
npm info agnosticui-cli
npm view agnosticui-cli@alpha

open https://www.npmjs.com/package/agnosticui-cli
```

---

### Phase 5: End-to-End Testing

#### 5.1 Test Installation Flow

```bash
# Create fresh test directory
mkdir /tmp/test-agui-v2 && cd /tmp/test-agui-v2
npm init -y

# Install CLI globally
npm install -g agnosticui-cli@alpha

# Verify installation
ag --version
which ag

# Initialize project
ag init --framework vue

# Verify core was downloaded
ls -la agnosticui/

# Add components
ag add button
ag add input

# Verify components copied
ls -la src/components/ag/Button/
ls -la src/components/ag/Input/
```

#### 5.2 Test with npx (No Installation)

```bash
mkdir /tmp/test-npx && cd /tmp/test-npx
npm init -y

# Should work without global install
npx agnosticui-cli@alpha init --framework react
npx agnosticui-cli@alpha add button
```

#### 5.3 Test with Different Package Managers

```bash
# pnpm
pnpm add -g agnosticui-cli@alpha
ag init --framework svelte

# yarn
yarn global add agnosticui-cli@alpha
ag init --framework lit

# bun
bun add -g agnosticui-cli@alpha
ag init --framework react
```

---

### Phase 6: Create Git Release

#### 6.1 Tag the Release

```bash
# Create annotated tag
git tag -a v2.0.0-alpha.1 -m "AgnosticUI v2.0.0-alpha.1

First alpha release of AgnosticUI v2

Breaking Changes:
- Complete rewrite with CLI-first approach
- Web Components architecture instead of framework-specific packages

New Features:
- CLI for local component management
- Support for React, Vue, Lit, Svelte
- Design token system
- Zero runtime dependencies
- You own the code - customize freely

Published packages:
- agnosticui-core@2.0.0-alpha.1
- agnosticui-cli@2.0.0-alpha.1"

# Push tag
git push origin v2.0.0-alpha.1
```

#### 6.2 Create GitHub Release

Go to: `https://github.com/yourusername/agnosticui/releases/new`

- **Tag**: `v2.0.0-alpha.1`
- **Title**: `AgnosticUI v2.0.0-alpha.1 - First Alpha Release 🎉`
- **Description**:

````markdown
# AgnosticUI v2.0.0-alpha.1 🎉

This is the first alpha release of AgnosticUI v2 - a complete rewrite with a CLI-first approach.

## Installation

```bash
npm install -g agnosticui-cli@alpha
ag init --framework react
ag add button input card
```
````

## What's New in v2

- **CLI-First Approach**: Components are copied directly to your project
- **You Own the Code**: Full control, no black boxes
- **Web Components Core**: Framework-agnostic architecture
- **Multi-Framework Support**: React, Vue, Lit, Svelte
- **Design Token System**: Consistent theming across components
- **Zero Runtime Dependencies**: Components work standalone

## Breaking Changes from v1

AgnosticUI v2 is a complete rewrite and is not compatible with v1. If you need v1, it remains available:

- Packages: `agnostic-angular`, `agnostic-react`, `agnostic-vue`, `agnostic-svelte`
- Branch: `v1-legacy`

## Alpha Status

This is an **alpha release** for early testing and feedback. APIs may change before stable release.

## Published Packages

- [agnosticui-core@2.0.0-alpha.1](https://www.npmjs.com/package/agnosticui-core)
- [agnosticui-cli@2.0.0-alpha.1](https://www.npmjs.com/package/agnosticui-cli)

## Documentation

[Link to your docs]

## Feedback

Please report issues or provide feedback in [GitHub Discussions](link) or [Issues](link).

````

- **Check**: "This is a pre-release"
- Click "Publish release"

---

### Phase 7: Update Documentation

#### 7.1 Update Installation Guide

**File: `v2/docs/installation.md`**

```markdown
# Installation

## Install the CLI

AgnosticUI v2 uses a CLI to copy components directly into your project.

### Global Installation (Recommended)

```bash
npm install -g agnosticui-cli@alpha
````

### Using npx (No Installation)

```bash
npx agnosticui-cli@alpha init
```

### Other Package Managers

```bash
# pnpm
pnpm add -g agnosticui-cli@alpha

# yarn
yarn global add agnosticui-cli@alpha

# bun
bun add -g agnosticui-cli@alpha
```

## Initialize Your Project

```bash
# Interactive mode
ag init

# Specify framework
ag init --framework react
ag init --framework vue
ag init --framework svelte
ag init --framework lit
```

This downloads `agnosticui-core` and sets up the reference library in `./agnosticui/`.

## Add Components

```bash
# Add individual components
ag add button
ag add input card

# Add multiple at once
ag add button input card dialog
```

Components are copied to `src/components/ag/` by default.

## What Gets Installed?

- **Reference Library**: `./agnosticui/` contains the source components
- **Your Components**: `src/components/ag/` contains copies you can modify
- **No Dependencies**: Components work standalone, no runtime deps

## Next Steps

- [Quick Start Guide](./quick-start.md)
- [Component Customization](./customization.md)
- [Design Tokens](./design-tokens.md)

````

#### 7.2 Create Migration Guide

**File: `v2/docs/migration-v1-to-v2.md`**

```markdown
# Migrating from AgnosticUI v1 to v2

AgnosticUI v2 is a complete rewrite with a fundamentally different approach.

## Key Differences

| Aspect | v1 | v2 |
|--------|----|----|
| **Installation** | `npm install agnostic-react` | `npm install -g agnosticui-cli` |
| **Usage** | Import from package | Copy components to your project |
| **Updates** | `npm update` | `ag sync` (opt-in) |
| **Customization** | Limited | Full control - you own the code |
| **Dependencies** | Runtime dependencies | Zero runtime deps |
| **Architecture** | Framework-specific | Web Components + adapters |

## Should You Migrate?

**Stick with v1 if:**
- You have a production app working fine
- You prefer traditional npm packages
- You don't need heavy customization

**Consider v2 if:**
- You want full control over components
- You need extensive customization
- You want to avoid dependency lock-in
- You're starting a new project

## Migration Steps

There's no automatic migration path. You'll need to:

1. Install v2 CLI: `npm install -g agnosticui-cli@alpha`
2. Initialize in new directory: `ag init --framework [your-framework]`
3. Add components: `ag add button input card`
4. Port your customizations from v1 components
5. Update imports in your application

## v1 Support

v1 packages remain available and supported:
- Packages: `agnostic-angular`, `agnostic-react`, `agnostic-vue`, `agnostic-svelte`
- Documentation: [v1 docs link]
- Branch: `v1-legacy`
````

---

### Phase 8: Announce and Monitor

#### 8.1 Create GitHub Discussion

Go to your repo's Discussions → Create new

**Title**: "AgnosticUI v2.0.0-alpha.1 Released! 🎉"

````markdown
Hi everyone! 👋

I'm excited to announce the first alpha release of AgnosticUI v2!

## What is AgnosticUI v2?

A CLI-based UI component library that copies components directly into your project. You own the code, customize it freely, and avoid dependency lock-in.

## Try it out

```bash
npm install -g agnosticui-cli@alpha
ag init --framework react
ag add button input
```
````

## This is Alpha

This is an early alpha for testing and feedback. APIs may change. Please:

- Report bugs in [Issues](link)
- Share feedback here in Discussions
- Test with your favorite framework

## Links

- [Documentation](link)
- [npm: agnosticui-cli](https://www.npmjs.com/package/agnosticui-cli)
- [npm: agnosticui-core](https://www.npmjs.com/package/agnosticui-core)

Thanks for your interest! Looking forward to your feedback. 🙏

````

#### 8.2 Monitor

- Watch GitHub Issues for bugs
- Check npm download stats: `npm info agnosticui-cli`
- Respond to feedback promptly
- Take notes for alpha.2 improvements

---

## Quick Reference: Commands

```bash
# Phase 1: Restructure repo
git checkout master && git pull
git branch backup-before-v2-transition
git branch v1-legacy && git push origin v1-legacy
git rm -rf agnostic-*/ site/
git merge feature/agnosticui-v2-integration
git push origin master

# Phase 2 & 3: Update and build
# (Edit package.json files manually)
cd v2/lib && npm install && npm run build && npm pack
cd v2/cli && npm install && npm run build && npm pack

# Phase 4: Publish
cd v2/lib && npm publish --tag alpha
cd v2/cli && npm publish --tag alpha

# Phase 5: Test
mkdir /tmp/test && cd /tmp/test
npm install -g agnosticui-cli@alpha
ag init --framework vue
ag add button

# Phase 6: Release
git tag -a v2.0.0-alpha.1 -m "Release v2.0.0-alpha.1"
git push origin v2.0.0-alpha.1
````

---

## Future Alpha Releases

When ready for alpha.2:

```bash
# Increment versions
cd v2/lib
npm version prerelease --preid=alpha  # 2.0.0-alpha.1 → alpha.2

cd v2/cli
npm version prerelease --preid=alpha

# Publish
cd v2/lib && npm publish --tag alpha
cd v2/cli && npm publish --tag alpha

# Tag git
git tag -a v2.0.0-alpha.2 -m "Release v2.0.0-alpha.2"
git push --tags
```

---

## Troubleshooting

### "Package name already taken"

Non-scoped packages (`agnosticui-core`, `agnosticui-cli`) should be available since you already use the `agnostic-*` namespace. If someone squatted them:

1. Check: `npm info agnosticui-core` and `npm info agnosticui-cli`
2. If truly taken, consider: `agnostic-ui-core`, `agnostic-ui-cli`
3. Or use scoped: `@rlevin/agnosticui-core`, `@rlevin/agnosticui-cli`

### CLI can't download core package

```bash
# Test manually
npm pack agnosticui-core@alpha

# If that works, check CLI code in init.ts
```
