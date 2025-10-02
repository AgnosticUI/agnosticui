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
    body {
      font-family: system-ui, -apple-system, sans-serif;
      max-width: 800px;
      margin: 40px auto;
      padding: 20px;
    }
    h1 { color: #333; }
    .test-section {
      margin: 30px 0;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <h1>🧪 AgnosticUI Consumption Test</h1>

  <div class="test-section">
    <h2>Button Component</h2>
    <ag-button variant="primary">Primary Button</ag-button>
    <ag-button variant="secondary">Secondary Button</ag-button>
    <ag-button disabled>Disabled Button</ag-button>
  </div>

  <div class="test-section">
    <h2>Import Status</h2>
    <p id="status">Loading...</p>
  </div>

  <script type="module">
    // Test component import
    import 'agnosticui-core/button';

    document.getElementById('status').textContent = '✅ Components loaded successfully!';
    document.getElementById('status').style.color = 'green';
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
echo "   1. Open browser to Vite dev server URL"
echo "   2. Verify components render correctly"
echo "   3. Check browser console for errors"
echo "   4. Test that ag-button works as expected"
echo ""
echo "🎯 Purpose: Simulate 'npm install agnosticui-core' consumption"
echo ""
echo "🧹 Cleanup when done:"
echo "   rm -rf $TEST_DIR"
