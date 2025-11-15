#!/bin/bash

# AgnosticUI Local - Tarball Build Script
# Creates a distributable tarball containing the full reference library
# for use with the AgnosticUI CLI

set -e  # Exit on error

echo "🏗️  Building AgnosticUI Local tarball..."
echo ""

# Configuration
SKIP_CHECKS=${SKIP_CHECKS:-false}

# Read version from lib/package.json
VERSION=$(node -p "require('./lib/package.json').version")
DIST_DIR="$(pwd)/dist"
TARBALL_DIR="$DIST_DIR/agnosticui-local"
TARBALL_NAME="agnosticui-local-v${VERSION}.tar.gz"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Step 0: Sanity checks (optional, can be skipped with SKIP_CHECKS=true)
if [ "$SKIP_CHECKS" != "true" ]; then
  echo "🔍 Running sanity checks..."
  echo ""

  cd lib

  echo -e "${BLUE}   → Running typecheck...${NC}"
  npm run typecheck
  if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Typecheck failed. Aborting."
    echo ""
    echo "   To skip checks and build anyway:"
    echo -e "   ${BLUE}SKIP_CHECKS=true ./scripts/build-local-tarball.sh${NC}"
    exit 1
  fi
  echo -e "${GREEN}   ✓ Typecheck passed${NC}"

  cd ..
  echo ""
else
  echo "⚠️  Skipping sanity checks (SKIP_CHECKS=true)"
  echo ""
fi

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf "$DIST_DIR"
mkdir -p "$TARBALL_DIR"

# Step 1: Build the library
echo ""
echo "📦 Building component library..."
cd lib
npm run build
cd ..

# Step 2: Create tarball structure
echo ""
echo "📁 Creating tarball structure..."

# Copy built library
echo -e "${BLUE}   → Copying built library...${NC}"
mkdir -p "$TARBALL_DIR/lib/dist"
cp -r lib/dist/* "$TARBALL_DIR/lib/dist/"

# Copy source files (for reference and templates)
echo -e "${BLUE}   → Copying source files...${NC}"
mkdir -p "$TARBALL_DIR/lib/src"

# Copy components but exclude v1, specifications, and specification directories
echo -e "${BLUE}   → Copying components (excluding v1, specifications, specification)...${NC}"
rsync -av --exclude='v1' --exclude='specifications' --exclude='specification' lib/src/components/ "$TARBALL_DIR/lib/src/components/"

# Copy styles
cp -r lib/src/styles "$TARBALL_DIR/lib/src/" 2>/dev/null || echo "   No styles directory found"

# Copy design tokens
echo -e "${BLUE}   → Copying design tokens...${NC}"
mkdir -p "$TARBALL_DIR/tokens"
cp lib/src/styles/ag-tokens.css "$TARBALL_DIR/tokens/" 2>/dev/null || echo "Warning: ag-tokens.css not found"
cp lib/src/styles/ag-tokens-dark.css "$TARBALL_DIR/tokens/" 2>/dev/null || echo "Warning: ag-tokens-dark.css not found"

# Copy documentation (if it exists)
echo -e "${BLUE}   → Copying documentation...${NC}"
if [ -d "docs2" ]; then
  mkdir -p "$TARBALL_DIR/docs"
  cp -r docs2/* "$TARBALL_DIR/docs/"
fi

# Create metadata file
echo -e "${BLUE}   → Creating metadata...${NC}"
cat > "$TARBALL_DIR/version.json" <<EOF
{
  "version": "${VERSION}",
  "built": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")",
  "components": []
}
EOF

# Create component registry (list all available components)
echo -e "${BLUE}   → Building component registry...${NC}"
COMPONENTS=$(find lib/src/components -maxdepth 1 -type d ! -name components ! -name shared | xargs -n 1 basename | sort)
COMPONENT_JSON=$(echo "$COMPONENTS" | jq -R . | jq -s .)
cat > "$TARBALL_DIR/components.json" <<EOF
{
  "version": "${VERSION}",
  "components": $COMPONENT_JSON
}
EOF

# Create README for the tarball
cat > "$TARBALL_DIR/README.md" <<'EOF'
# AgnosticUI Local - Reference Library

This is the AgnosticUI Local reference library.

**Version:** ${VERSION}
**Built:** $(date -u +"%Y-%m-%d")

## Structure

```
agnosticui/
├── lib/
│   ├── dist/          # Built components
│   └── src/           # Source files (for reference)
├── tokens/            # Design system tokens
├── docs/              # Documentation
├── version.json       # Version metadata
├── components.json    # Component registry
└── README.md          # This file
```

## Usage

This library is designed to be used with the AgnosticUI CLI:

\`\`\`bash
npx ag init
npx ag add button
\`\`\`

The CLI will prompt you to install required dependencies (`lit` and `@lit/react` for React projects).

Visit https://agnosticui.com for full documentation.
EOF

# Step 3: Create tarball
echo ""
echo "📦 Creating tarball..."
cd "$DIST_DIR"
tar -czf "$TARBALL_NAME" agnosticui-local/
cd ..

# Calculate size
TARBALL_SIZE=$(du -h "$DIST_DIR/$TARBALL_NAME" | cut -f1)

# Success!
echo ""
echo -e "${GREEN}✅ Tarball created successfully!${NC}"
echo ""
echo "   📦 File: $DIST_DIR/$TARBALL_NAME"
echo "   📊 Size: $TARBALL_SIZE"
echo ""
echo "   Components included:"
echo "$COMPONENTS" | sed 's/^/      - /'
echo ""
echo "   To test locally:"
echo -e "   ${BLUE}tar -tzf $DIST_DIR/$TARBALL_NAME | head -20${NC}"
echo ""
