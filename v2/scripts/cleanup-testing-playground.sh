#!/bin/bash

# AgnosticUI Simplified Testing Playground Cleanup Script
# Cleans up the simplified Astro Playground + Lib development environment

set -e

WORKSPACE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PLAYGROUND_DIR="$WORKSPACE_DIR/playground"

echo "🧹 AgnosticUI Simplified Testing Playground Cleanup"
echo "   Workspace: $WORKSPACE_DIR"
echo "   Playground: $PLAYGROUND_DIR"
echo ""

# Show current state
echo "📊 Current State:"
echo "   Playground: $([ -d "$PLAYGROUND_DIR" ] && echo "EXISTS" || echo "NOT FOUND")"

# Check for lib link in playground
if [ -d "$PLAYGROUND_DIR/node_modules" ]; then
    CORE_LINK=$(ls -la "$PLAYGROUND_DIR/node_modules/" 2>/dev/null | grep "agnosticui-core" || echo "")
    if [ -n "$CORE_LINK" ]; then
        echo "   Core Link: ✅ FOUND"
    else
        echo "   Core Link: ❌ NOT FOUND"
    fi
else
    echo "   Playground node_modules: ❌ NOT FOUND"
fi

echo ""

# Ask for confirmation
read -p "🚨 This will clean up npm links and node_modules. Continue? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Cleanup cancelled"
    exit 1
fi

echo "🧹 Starting cleanup..."

# Remove npm links from playground
if [ -d "$PLAYGROUND_DIR" ]; then
    cd "$PLAYGROUND_DIR"

    # Remove agnosticui-core link
    if [ -L "node_modules/agnosticui-core" ]; then
        echo "   🔗 Unlinking agnosticui-core from playground..."
        npm unlink agnosticui-core 2>/dev/null && echo "   ✅ agnosticui-core unlinked from playground" || echo "   ⚠️  agnosticui-core unlink failed"
    else
        echo "   ℹ️  No agnosticui-core link found in playground"
    fi

    # Remove node_modules for clean state
    if [ -d "node_modules" ]; then
        echo "   🗑️  Removing playground node_modules..."
        rm -rf node_modules
        echo "   ✅ Playground node_modules removed"
    fi
else
    echo "   ⚠️  Playground directory not found"
fi

# Remove global lib link
cd "$WORKSPACE_DIR/agnostic/lib"
echo "   🔗 Removing global agnosticui-core link..."
npm unlink 2>/dev/null && echo "   ✅ Global agnosticui-core link removed" || echo "   ℹ️  agnosticui-core was not globally linked"

# Show final state
echo ""
echo "✅ Cleanup Complete!"
echo ""
echo "📊 Final State:"
echo "   Playground node_modules: $([ -d "$PLAYGROUND_DIR/node_modules" ] && echo "EXISTS" || echo "REMOVED")"

# Check if global link still exists
FINAL_CORE=$(npm list -g --link 2>/dev/null | grep "agnosticui-core" || echo "")
if [ -n "$FINAL_CORE" ]; then
    echo "   Global Core Link: ⚠️  STILL EXISTS (may need manual removal)"
else
    echo "   Global Core Link: ✅ REMOVED"
fi

echo ""
echo "🚀 Ready for fresh setup! Run:"
echo "   ./scripts/setup-testing-playground.sh"