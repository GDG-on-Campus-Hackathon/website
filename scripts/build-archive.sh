#!/usr/bin/env bash
# Build the 2025 archive site from the `2025` branch and stage it under
# public/2025/ so the main deployment serves it as static files. Output
# is generated at deploy time and never committed to git.
set -euo pipefail

ARCHIVE_BRANCH="2025"
WORKTREE=".archive-2025"
TARGET="public/2025"

# Tidy up any leftover from a failed previous run.
git worktree remove --force "$WORKTREE" 2>/dev/null || true
rm -rf "$WORKTREE"

git fetch origin "$ARCHIVE_BRANCH" --depth 1
git worktree add --detach "$WORKTREE" "origin/$ARCHIVE_BRANCH"

pnpm -C "$WORKTREE" install --frozen-lockfile
pnpm -C "$WORKTREE" build

rm -rf "$TARGET"
mkdir -p "$TARGET"
cp -R "$WORKTREE/out/2025/." "$TARGET/"

git worktree remove --force "$WORKTREE"
