#!/bin/bash

# AgnosticUI Simplified Testing Playground Setup Script
# Sets up Astro + Lib development environment (NO CLI complexity)

set -e

WORKSPACE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PLAYGROUND_DIR="$WORKSPACE_DIR/playground"

echo "🚀 Setting up AgnosticUI Simplified Testing Playground..."
echo "   Workspace: $WORKSPACE_DIR"
echo "   Playground: $PLAYGROUND_DIR"

# Verify lib package exists and is built
echo "🔍 Verifying lib package..."
if [ ! -d "$WORKSPACE_DIR/agnostic/lib/dist" ]; then
    echo "❌ AgnosticUI lib package not built. Building now..."
    cd "$WORKSPACE_DIR/agnostic/lib"
    npm run build
    echo "✅ Lib package built"
fi

echo "✅ Lib package verified"

# Go to playground directory (should already exist)
cd "$PLAYGROUND_DIR"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing playground dependencies..."
    npm install
    echo "✅ Dependencies installed"
fi

# Set up npm link from lib to playground
echo "🔗 Setting up lib link..."
cd "$WORKSPACE_DIR/agnostic/lib"
npm link

cd "$PLAYGROUND_DIR"
npm link agnosticui-core

echo "✅ Setup complete!"
echo ""
echo "🚀 Quick Start:"
echo "   cd $PLAYGROUND_DIR"
echo "   npm run dev"
echo "   Open http://localhost:4321"
echo ""
echo "📍 Development workflow:"
echo "   1. Edit components in: agnostic/lib/src/components/"
echo "   2. Test in playground at: localhost:4321"
echo "   3. Hot reload shows changes instantly"
echo ""
echo "🎯 Focus: Astro Playground + Lib development (no CLI complexity)"