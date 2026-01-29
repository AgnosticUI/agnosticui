---
name: fix-github-issue
description: Fix a GitHub issue by number. Use when asked to fix GitHub issues.
disable-model-invocation: true
allowed-tools: Read, Grep, Glob, Bash(gh issue view *), Bash(gh pr view *), Bash(git status), Bash(git diff *), Bash(git log *), Bash(git branch *), Bash(git checkout *)
---

**Usage:** `/fix-github-issue ISSUE_NUMBER`

**Example:** `/fix-github-issue 276`

Fix GitHub issue $ARGUMENTS following best practices.

**Setup:**
1. Read `.claude/PROJECT_CONTEXT.md` for AgnosticUI structure, conventions, and workflows

**Steps:**

2. **Verify we're starting from a clean state:**
   - Check `git status` to ensure working directory is clean
   - Confirm we're on `master` branch
   - If not clean or on wrong branch, STOP and ask user to resolve

3. **Create a feature branch:**
   - Follow convention from PROJECT_CONTEXT: `issue-$ARGUMENTS/descriptive-name`
   - Example: `issue-276/fix-button-variant` 
   - Use `git checkout -b issue-$ARGUMENTS/[short-description]`
   - **WAIT FOR USER APPROVAL of branch name**

4. **Analyze the issue:**
   - Use `gh issue view $ARGUMENTS` to fetch full issue details
   - Understand the problem, reproduction steps, and expected behavior

5. **Investigate the codebase:**
   - Use PROJECT_CONTEXT to identify relevant locations:
     - Core components in `v2/lib/src/components/`
     - Framework implementations in playgrounds
     - Related tests and examples
   - Use Read, Grep, and Glob to find relevant files
   - Review current implementation and identify root cause

6. **Propose the fix:**
   - Explain what needs to change and why
   - Consider impact across Lit, React, and Vue if applicable
   - Follow AgnosticUI's CSS-first, accessibility-focused principles
   - Show the user your proposed changes
   - **WAIT FOR USER APPROVAL before making any changes**

7. **Implement only after approval:**
   - Make the necessary code changes
   - Update related files (tests, docs, examples) if needed
   - Run tests if applicable (check PROJECT_CONTEXT for test commands)
   - Verify the fix addresses the issue

8. **Prepare commit:**
   - Stage changes with `git add`
   - Create descriptive commit message: "Fix #$ARGUMENTS: [description]"
   - Show the user what will be committed
   - **WAIT FOR USER APPROVAL before committing**

9. **Inform user about next steps:**
   - Remind user they're on branch `issue-$ARGUMENTS/...`
   - Explain they should review changes with `git diff master`
   - When ready, they can: `git push -u origin issue-$ARGUMENTS/...`
   - Then create PR with: `gh pr create --base master --head issue-$ARGUMENTS/...`

**Important Rules:**
- **ALWAYS create a feature branch - NEVER work directly on master**
- **NEVER push to remote without explicit user permission**
- **ALWAYS show proposed changes before implementing**
- **STOP and ask for approval at each major step**
- Use clear, descriptive commit messages that reference the issue
- Follow AgnosticUI conventions from PROJECT_CONTEXT