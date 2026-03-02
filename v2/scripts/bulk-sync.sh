#!/usr/bin/env bash
# bulk-sync.sh
#
# Syncs all playbook examples to the latest agnosticui-core NPM release.
# Downloads the tarball once then re-uses it for every example, which is
# much faster than letting each sync download its own copy.
#
# Usage:
#   ./scripts/bulk-sync.sh              # sync to latest alpha
#   ./scripts/bulk-sync.sh 2.0.0-alpha.21   # sync to a specific version
#   ./scripts/bulk-sync.sh latest       # sync to stable latest

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT="$SCRIPT_DIR/.."
PLAYBOOKS_DIR="$ROOT/playbooks"
TAG="${1:-alpha}"

RESET='\033[0m'
RED='\033[31m'
GREEN='\033[32m'
YELLOW='\033[33m'
CYAN='\033[36m'
BOLD='\033[1m'

echo -e "${BOLD}AgnosticUI Bulk Sync${RESET}"
echo -e "Tag / version: ${CYAN}${TAG}${RESET}"

# --- Download tarball once ---
TMPDIR="$(mktemp -d)"
echo "Downloading agnosticui-core@${TAG}..."
(cd "$TMPDIR" && npm pack "agnosticui-core@${TAG}" --quiet)
TARBALL="$(ls "$TMPDIR"/*.tgz)"
echo -e "  ${GREEN}✓${RESET} Downloaded: $(basename "$TARBALL")"
echo ""

# --- Collect all example directories ---
EXAMPLES=()
while IFS= read -r -d '' config; do
  EXAMPLES+=("$(dirname "$config")")
done < <(find "$PLAYBOOKS_DIR" -name "agnosticui.config.json" -not -path "*/node_modules/*" -print0 | sort -z)

TOTAL="${#EXAMPLES[@]}"
COUNT=0
FAILED=0

for dir in "${EXAMPLES[@]}"; do
  COUNT=$((COUNT + 1))
  REL="${dir#"$ROOT/"}"
  echo -e "[${COUNT}/${TOTAL}] ${BOLD}${REL}${RESET}"
  if (cd "$dir" && npx agnosticui-cli sync --tarball "$TARBALL" --force 2>&1 | grep -E "✓|Sync complete|version|completed" | head -3); then
    :
  else
    echo -e "  ${RED}WARNING: sync failed${RESET}"
    FAILED=$((FAILED + 1))
  fi
done

# --- Cleanup ---
rm -rf "$TMPDIR"

echo ""
if [ "$FAILED" -eq 0 ]; then
  echo -e "${BOLD}Summary:${RESET} ${GREEN}All ${TOTAL} examples synced to ${TAG}${RESET}"
else
  echo -e "${BOLD}Summary:${RESET} ${RED}${FAILED} failed${RESET}, $((TOTAL - FAILED))/${TOTAL} succeeded"
  exit 1
fi
