---
name: implement-github-feature
description: Design and implement a new feature or component from a GitHub issue. Use for net-new functionality, not bug fixes.
disable-model-invocation: true
allowed-tools:
  - Read
  - Grep
  - Glob
  - Bash(gh issue view *)
  - Bash(gh pr view *)
  - Bash(git status)
  - Bash(git diff *)
  - Bash(git log *)
  - Bash(git branch *)
  - Bash(git checkout *)
---

**Usage:** `/implement-github-feature ISSUE_NUMBER`

**Example:** `/implement-github-feature 281`

Implement GitHub feature request $ARGUMENTS following AgnosticUI conventions, accessibility standards, and CSS-first principles.

---

## Setup

1. **Read project context**
   - Read `.claude/PROJECT_CONTEXT.md`
   - Understand:
     - Repository structure
     - Design principles
     - Accessibility requirements
     - Branch conventions
     - Component workflows

---

## Phase 0: Safety Checks (Required)

2. **Verify clean starting state**
   - Run `git status`
   - Confirm:
     - Working directory is clean
     - Current branch is `master`
   - If either condition fails:
     - **STOP**
     - Ask the user to resolve before continuing

---

## Phase 1: Branching

3. **Propose feature branch**
   - Follow convention: `issue-$ARGUMENTS/short-descriptive-name`
   - Example: `issue-281/selection-card-group`
   - Run:
     ```
     git checkout -b issue-$ARGUMENTS/short-description
     ```
   - **WAIT FOR USER APPROVAL of branch name before proceeding**

---

## Phase 2: Issue Analysis & Intent Extraction (No Code)

4. **Analyze the GitHub issue**
   - Fetch full details:
     ```
     gh issue view $ARGUMENTS
     ```
   - Extract and summarize:
     - Feature goals
     - Non-goals / constraints
     - API expectations
     - Accessibility requirements
     - Styling and theming expectations
     - Framework implications (Lit / React / Vue)

5. **Confirm feature classification**
   - This is a:
     - Net-new component OR
     - Major enhancement (not a bug fix)
   - If scope appears ambiguous:
     - Ask the user before proceeding

---

## Phase 3: Design Proposal (Hard Stop Before Code)

6. **Propose high-level design**
   - Identify:
     - New components to be created
     - Public vs internal APIs
     - Required props vs optional props
     - Slot usage and responsibilities
     - Accessibility model (labels, roles, keyboard behavior)
     - Shadow DOM strategy (`::part`, `::slotted`)
   - Explicitly call out:
     - Web Component constraints
     - CSS-first decisions
     - What is intentionally *not* supported

7. **Propose file & directory layout**
   - Core components:
     - `v2/lib/src/components/...`
   - Documentation:
     - `v2/site/docs/components/...`
   - Storybook playgrounds:
     - Lit
     - React
     - Vue
   - Examples:
     - Lit / React / Vue test examples

8. **WAIT FOR USER APPROVAL**
   - Do **not** create files
   - Do **not** write code
   - Proceed only after explicit approval of:
     - API shape
     - Accessibility approach
     - Styling strategy

---

## Phase 4: Scaffolding (Minimal, Intentional)

9. **Create initial scaffolding**
   - Create component directories
   - Add placeholder files where appropriate
   - Add minimal README or doc stubs if needed
   - No implementation logic yet

10. **Show scaffolding diff**
    - Use `git diff`
    - Explain what was created and why
    - **WAIT FOR USER APPROVAL**

---

## Phase 5: Core Implementation (Lit Web Components First)

11. **Implement core component(s)**
    - Work only in:
      - `v2/lib/src/components/`
    - Follow:
      - CSS-first approach
      - Design token usage
      - Accessibility requirements
    - Ensure:
      - Keyboard interaction works
      - Labels and semantics are correct
      - Shadow DOM parts are intentional and minimal

12. **Pause for review**
    - Explain:
      - DOM structure
      - Slot behavior
      - `::part` surface
      - Accessibility decisions
    - **WAIT FOR USER APPROVAL before proceeding**

---

## Phase 6: Framework Integrations

13. **Integrate with frameworks**
    - React playground
    - Vue playground
    - Lit playground
    - APIs should feel idiomatic but map 1:1 conceptually

14. **Add Storybook stories**
    - Demonstrate:
      - Core use cases
      - Variants
      - Accessibility states
    - Ensure consistency across frameworks

---

## Phase 7: Documentation & Examples

15. **Write documentation**
    - Add VitePress docs:
      - API
      - Slots vs props
      - Styling guidance
      - Accessibility notes
    - Update or add playbooks if applicable

16. **Update examples**
    - Verify examples compile and behave correctly
    - Keep examples minimal and educational

---

## Phase 8: Final Review & Commit

17. **Final verification**
    - Review:
      - `git diff`
      - Accessibility behavior
      - Styling hooks
      - API consistency
    - Ensure no accidental breaking changes

18. **Prepare commit**
    - Stage changes:
      ```
      git add .
      ```
    - Commit message format:
      ```
      Add #$ARGUMENTS: [concise feature description]
      ```
    - Show commit contents
    - **WAIT FOR USER APPROVAL before committing**

---

## Phase 9: Handoff

19. **Explain next steps**
    - User is on branch: `issue-$ARGUMENTS/...`
    - Review with:
      ```
      git diff master
      ```
    - Push when ready:
      ```
      git push -u origin issue-$ARGUMENTS/...
      ```
    - Create PR:
      ```
      gh pr create --base master --head issue-$ARGUMENTS/...
      ```

---

## Important Rules

- **NEVER work directly on `master`**
- **NEVER push without explicit user permission**
- **ALWAYS stop at design gates**
- **ALWAYS prioritize accessibility over convenience**
- **Prefer slots for layout, props for semantics**
- **CSS custom properties > ::part > ::slotted**
- Do not assume intent — if unclear, ask

---