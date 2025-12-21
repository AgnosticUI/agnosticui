#!/bin/bash

# AgnosticUI npm install Consumption Test
# Creates minimal test environment to verify package consumption

set -e

WORKSPACE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TEST_DIR="/tmp/agnosticui-test"

echo "🚀 Setting up AgnosticUI consumption test environment..."
echo "   Workspace: $WORKSPACE_DIR"
echo "   Test Dir: $TEST_DIR"

# Clean up previous test directory if it exists
if [ -d "$TEST_DIR" ]; then
    echo "🧹 Cleaning up previous test directory..."
    rm -rf "$TEST_DIR"
fi

# Verify lib package exists and is built
echo "🔍 Verifying lib package..."
if [ ! -d "$WORKSPACE_DIR/lib/dist" ]; then
    echo "❌ AgnosticUI lib package not built. Building now..."
    cd "$WORKSPACE_DIR/lib"
    npm run build
    echo "✅ Lib package built"
fi

echo "✅ Lib package verified"

# Create test directory
echo "📁 Creating test directory..."
mkdir -p "$TEST_DIR"
cd "$TEST_DIR"

# Initialize minimal package.json
echo "📦 Initializing test package..."
cat > package.json <<EOF
{
  "name": "agnosticui-consumption-test",
  "version": "1.0.0",
  "type": "module",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "dependencies": {
    "agnosticui-core": "file:$WORKSPACE_DIR/lib"
  },
  "devDependencies": {
    "vite": "^5.0.0"
  }
}
EOF

# Create Vite config for vanilla HTML (no React/PWA)
echo "⚙️  Creating Vite config..."
cat > vite.config.js <<'EOF'
import { defineConfig } from 'vite';

export default defineConfig({
  // Simple vanilla HTML setup - no React, no PWA
  root: '.',
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
});
EOF

# Create minimal HTML test file
echo "📝 Creating test HTML file..."
cat > index.html <<'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AgnosticUI Consumption Test</title>
  <style>
    /* Import design tokens - CRITICAL for component styling */
    @import url('./node_modules/agnosticui-core/dist/styles/ag-tokens.css');
    @import url('./node_modules/agnosticui-core/dist/styles/ag-tokens-dark.css');

    body {
      font-family: system-ui, -apple-system, sans-serif;
      max-width: 1000px;
      margin: 40px auto;
      padding: 20px;
      background: var(--ag-background-primary, #fff);
      color: var(--ag-text-primary, #111827);
      transition: background 0.2s ease, color 0.2s ease;
    }

    h1 {
      color: var(--ag-text-primary, #333);
      margin-bottom: 20px;
    }

    .controls {
      margin: 20px 0;
      padding: 15px;
      background: var(--ag-background-secondary, #f9fafb);
      border-radius: 8px;
      display: flex;
      gap: 10px;
      align-items: center;
    }

    .test-section {
      margin: 30px 0;
      padding: 20px;
      border: 1px solid var(--ag-border, #ddd);
      border-radius: 8px;
      background: var(--ag-background-primary, #fff);
    }

    .test-section h2 {
      margin-top: 0;
      color: var(--ag-text-primary, #111827);
    }

    .button-grid {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin: 10px 0;
    }

    #status {
      margin: 0;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <h1>🧪 AgnosticUI Consumption Test</h1>

  <div class="controls">
    <label for="theme-toggle">Theme:</label>
    <ag-button id="theme-toggle" variant="secondary" size="sm">Toggle Dark Mode</ag-button>
    <span id="current-theme">Light Mode</span>
  </div>

  <div class="test-section">
    <h2>Import Status</h2>
    <p id="status">Loading components...</p>
  </div>

  <div class="test-section">
    <h2>Button Component - Variants</h2>
    <div class="button-grid">
      <ag-button variant="primary">Primary</ag-button>
      <ag-button variant="secondary">Secondary</ag-button>
      <ag-button variant="warning">Warning</ag-button>
      <ag-button variant="danger">Danger</ag-button>
      <ag-button disabled>Disabled</ag-button>
    </div>
  </div>

  <div class="test-section">
    <h2>Button Component - Special Styles</h2>
    <div class="button-grid">
      <ag-button variant="primary" bordered>Bordered Primary</ag-button>
      <ag-button variant="danger" bordered>Bordered Danger</ag-button>
      <ag-button variant="primary" ghost>Ghost Primary</ag-button>
      <ag-button link>Link Style</ag-button>
    </div>
  </div>

  <div class="test-section">
    <h2>Button Component - Shapes</h2>
    <div class="button-grid">
      <ag-button variant="primary" shape="rounded">Rounded</ag-button>
      <ag-button variant="primary" shape="capsule">Capsule</ag-button>
      <ag-button variant="primary" shape="circle">+</ag-button>
      <ag-button variant="primary" shape="square">X</ag-button>
    </div>
  </div>

  <div class="test-section">
    <h2>Accordion Component</h2>
    <ag-accordion>
      <ag-accordion-item heading-level="3" indicator bordered background>
        <span slot="header">First Accordion Item</span>
        <div slot="content">
          <p>This is the content of the first accordion item. It demonstrates:</p>
          <ul>
            <li>Border styling with --ag-border token</li>
            <li>Background color with --ag-background-secondary token</li>
            <li>Focus states with --ag-focus token</li>
          </ul>
        </div>
      </ag-accordion-item>

      <ag-accordion-item heading-level="3" indicator bordered background>
        <span slot="header">Second Accordion Item</span>
        <div slot="content">
          <p>Content works in both light and dark mode automatically!</p>
        </div>
      </ag-accordion-item>

      <ag-accordion-item heading-level="3" indicator bordered background>
        <span slot="header">Third Accordion Item</span>
        <div slot="content">
          <p>Design tokens ensure consistent theming across all components.</p>
        </div>
      </ag-accordion-item>
    </ag-accordion>
  </div>

  <script type="module">
    // Test component imports
    try {
      // Button is exported from main index
      await import('agnosticui-core');
      // Accordion has its own export
      await import('agnosticui-core/accordion');

      document.getElementById('status').textContent = '✅ All components loaded successfully!';
      document.getElementById('status').style.color = 'var(--ag-primary, green)';

      // Theme toggle functionality
      const toggleBtn = document.getElementById('theme-toggle');
      const themeLabel = document.getElementById('current-theme');
      const html = document.documentElement;

      toggleBtn.addEventListener('click', () => {
        const isDark = html.getAttribute('data-theme') === 'dark';
        if (isDark) {
          html.removeAttribute('data-theme');
          themeLabel.textContent = 'Light Mode';
        } else {
          html.setAttribute('data-theme', 'dark');
          themeLabel.textContent = 'Dark Mode';
        }
      });

      console.log('✅ AgnosticUI components initialized successfully');
    } catch (error) {
      document.getElementById('status').textContent = '❌ Failed to load components';
      document.getElementById('status').style.color = 'red';
      console.error('Component loading error:', error);
    }
  </script>
</body>
</html>
EOF

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo ""
echo "✅ Setup complete!"
echo ""
echo "🚀 Quick Start:"
echo "   cd $TEST_DIR"
echo "   npm run dev"
echo ""
echo "📍 Test workflow:"
echo "   1. Open browser to Vite dev server URL (usually http://localhost:5173)"
echo "   2. Verify 'Import Status' shows ✅ All components loaded successfully"
echo "   3. Test Button variants in both light and dark mode"
echo "   4. Toggle dark mode and verify:"
echo "      - Background colors switch appropriately"
echo "      - Button colors maintain contrast"
echo "      - Accordion borders and backgrounds adapt"
echo "      - Focus states remain visible (blue outline)"
echo "   5. Test Accordion expand/collapse functionality"
echo "   6. Check browser console for errors"
echo "   7. Use browser DevTools to inspect --ag-* CSS custom properties"
echo ""
echo "🎨 What This Tests:"
echo "   - Design token CSS loading from agnosticui-core"
echo "   - Component rendering with token-based styling"
echo "   - Light/dark mode token switching"
echo "   - Button variant colors and hover states"
echo "   - Accordion background-secondary and border tokens"
echo "   - Focus state accessibility (--ag-focus)"
echo ""
echo "🎯 Purpose: Simulate 'npm install agnosticui-core' consumption"
echo ""
echo "🧹 Cleanup when done:"
echo "   rm -rf $TEST_DIR"
