# agnosticui-cli

CLI for AgnosticUI Local - The UI kit that lives in your codebase.

## Development Setup

### Using the QA Verification Script

The process of creating a consumer test project is encapsulated in the `qa-verify.js` script:

Move the last run if you want to preserve it:

```shell
mv v2/qa_workspace/lit-test v2/qa_workspace/lit-test-v1
```

Or completely obliterate the workspace:

```shell
rm -rf v2/qa_workspace/ # Optionally cleanup last run
```

Create new consumer test project (for Lit in this case):

```shell
./v2/cli/scripts/qa-verify.js --framework lit
```

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

   ```bash
   cd cli
   npm install        # Install dependencies (first time only)
   npm run build      # Build TypeScript to dist/
   npm pack           # Package it
   # This creates: agnosticui-cli-VERSION.tgz
   ```

   Then in your test project:

   ```bash
   cd /path/to/your/test/project
   npm install /path/to/agnosticui/v2/cli/agnosticui-cli-VERSION.tgz

   # Now you can use the CLI
   # Note: Replace VERSION with the version from v2/lib/package.json
   npx ag init --framework vue --tarball /path/to/v2/dist/agnosticui-local-vVERSION.tar.gz
   # Note: if already initialized, we can also use `sync` to update the reference library
   # npx ag sync --tarball /path/to/v2/dist/agnosticui-local-vVERSION.tar.gz
   npx ag add button input
   npx ag list
   ```

3. **Quick test workflow with pack:**

   ```bash
   # PREREQUISITES: Build component v2/lib and cli tarball first. See above.

   # In test project
   npm install /path/to/agnosticui/v2/cli/agnosticui-cli-VERSION.tgz --force
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

### Wait for NPM Propagation

Wait 1-2 minutes for NPM to propagate the package globally.

### Verify in a Fresh Environment

```bash
# Create a completely fresh test directory
mkdir /tmp/test-agui-npm-$(date +%s)
cd /tmp/test-agui-npm-$(date +%s)

# Initialize a basic project
npm init -y

# Test global installation
npm install -g agnosticui-cli@alpha

# Verify CLI is available
ag --version  # Should show current version

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

### Test with npx (No Global Install)

```bash
# Create another fresh test directory
mkdir /tmp/test-npx-$(date +%s)
cd /tmp/test-npx-$(date +%s)
npm init -y

# CRITICAL: This should work without ANY prior installation
npx agnosticui-cli@alpha init --framework vue
npx agnosticui-cli@alpha add button input
```

### Verification Checklist

After publishing, verify:

- [ ] `npm info agnosticui-cli` shows correct version
- [ ] `npm info agnosticui-core` shows correct version
- [ ] `ag init` downloads from NPM (without --tarball flag)
- [ ] Fresh install in `/tmp` directory works
- [ ] `npx agnosticui-cli@alpha init` works without global install
- [ ] Components are correctly copied to project
- [ ] Config file is created properly

## Publishing New Alpha Releases

### 1. Update Version in package.json

```bash
# Update v2/lib/package.json version to 2.0.0-alpha.X
# Update v2/cli/package.json version to 2.0.0-alpha.X
# Also update src/cli.ts with new version number
```

### 2. Build and Test Both Packages

```bash
# Build core library
cd v2/lib
rm -rf dist/
npm install
npm run build
ls -la dist/  # Verify output

# Build CLI
cd ../cli
rm -rf dist/
npm install
npm run build
ls -la dist/  # Verify output
node dist/cli.js --version  # Should show new version
```

### 3. Test with Local Tarballs

```bash
# Test core library
cd v2/lib
npm pack --dry-run  # Preview
npm pack  # Creates: agnosticui-core-VERSION.tgz
tar -tzf agnosticui-core-VERSION.tgz  # Inspect contents

# Test CLI
cd ../cli
npm pack --dry-run
npm pack  # Creates: agnosticui-cli-VERSION.tgz
tar -tzf agnosticui-cli-VERSION.tgz
```

### 4. Verify in Test Projects

Test in `v2/examples/{lit|react|vue}-test`:

```bash
cd v2/examples/react-test  # or lit-test, vue-test
npm uninstall agnosticui-cli
npm i ../../cli/agnosticui-cli-VERSION.tgz
npx ag sync --tarball ../../lib/agnosticui-core-VERSION.tgz
npx ag add button --force  # Test component addition
npm run dev  # Verify it works
```

### 5. Commit Changes

```bash
git add v2/lib/package.json v2/cli/package.json v2/cli/src/cli.ts
git commit -m "chore: bump version to 2.0.0-alpha.X"
git push origin master
```

### 6. Publish to npm

**Verify npm Login:**

```bash
npm whoami  # Should show: rlevin
```

**Publish Core Library:**

```bash
cd v2/lib

# Final dry-run check
npm publish --dry-run --tag alpha

# Publish!
npm publish --tag alpha

# Point 'latest' dist-tag to this alpha version
# (Required so users get this version with: npm install agnosticui-core)
npm dist-tag add agnosticui-core@VERSION latest

# Verify dist-tags
npm dist-tag ls agnosticui-core
```

**Publish CLI:**

```bash
cd v2/cli

# Dry-run
npm publish --dry-run --tag alpha

# Publish!
npm publish --tag alpha

# Point 'latest' dist-tag to this alpha version
npm dist-tag add agnosticui-cli@VERSION latest

# Verify dist-tags
npm dist-tag ls agnosticui-cli
```

### 7. Verify Publications

```bash
npm info agnosticui-core
npm info agnosticui-cli

# Visit on web
open https://www.npmjs.com/package/agnosticui-core
open https://www.npmjs.com/package/agnosticui-cli
```

### 8. Test Published Packages

Follow the "Testing After NPM Publication" section above.

### 9. Tag Git Release

```bash
git tag -a v2.0.0-alpha.X -m "Release v2.0.0-alpha.X"
git push origin v2.0.0-alpha.X
```

## Quick Reference

```bash
# Build and test locally
cd v2/lib && npm install && npm run build && npm pack
cd v2/cli && npm install && npm run build && npm pack

# Publish
cd v2/lib && npm publish --tag alpha
npm dist-tag add agnosticui-core@VERSION latest
cd v2/cli && npm publish --tag alpha
npm dist-tag add agnosticui-cli@VERSION latest

# Test in fresh environment
mkdir /tmp/test && cd /tmp/test && npm init -y
npm install -g agnosticui-cli@alpha
ag init --framework vue
ag add button

# Tag release
git tag -a vVERSION -m "Release vVERSION"
git push --tags
```

## Troubleshooting

### "Failed to download agnosticui-core from NPM"

```bash
# Check if package is published
npm info agnosticui-core@alpha

# Check if you can manually download it
npm pack agnosticui-core@alpha
tar -tzf agnosticui-core-*.tgz  # Should show package contents
```

### CLI not found after global install

```bash
# Check install location
npm list -g agnosticui-cli

# Verify bin path
npm bin -g

# Reinstall
npm uninstall -g agnosticui-cli
npm install -g agnosticui-cli@alpha
```

### dist-tag not updating

```bash
# Check current tags
npm dist-tag ls agnosticui-core

# Force update
npm dist-tag add agnosticui-core@VERSION latest

# Wait a minute and verify
npm info agnosticui-core
```

## Development Notes

- All file operations preserve the structure: `core/` + `framework/`
- `npm pack` is more reliable than `npm link` for local testing
- Remember to rebuild (`npm run build`) and repack after making CLI changes
- The temp download directory `.tmp-ag-download` is automatically cleaned up after init
- Always update `src/cli.ts` version when bumping package.json versions
