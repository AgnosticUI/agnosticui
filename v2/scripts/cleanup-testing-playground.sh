#!/bin/bash

# AgnosticUI Consumption Test Cleanup Script
# Cleans up the /tmp test environment

set -e

TEST_DIR="/tmp/agnosticui-test"

echo "🧹 AgnosticUI Consumption Test Cleanup"
echo "   Test Dir: $TEST_DIR"
echo ""

# Check if test directory exists
if [ -d "$TEST_DIR" ]; then
    echo "📊 Found test directory"
    echo ""

    # Ask for confirmation
    read -p "🚨 This will remove $TEST_DIR. Continue? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Cleanup cancelled"
        exit 1
    fi

    echo "🧹 Removing test directory..."
    rm -rf "$TEST_DIR"
    echo "✅ Test directory removed"
else
    echo "ℹ️  Test directory does not exist - nothing to clean up"
fi

echo ""
echo "✅ Cleanup complete!"
echo ""
echo "🚀 Ready for fresh test! Run:"
echo "   ./scripts/setup-testing-playground.sh"
