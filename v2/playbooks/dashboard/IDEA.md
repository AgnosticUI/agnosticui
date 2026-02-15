# Playbook 3: Discovery Dashboard (Activation Phase)

## Overview

The **Discovery Dashboard** is the "Aha! moment" of the user journey. It utilizes the `INTERESTS` and `PATHS` data captured in the [Onboarding Wizard](https://www.agnosticui.com) to present a fully personalized environment using **AgnosticUI** components.

## User Journey

1. **Login Form** (Auth)
2. **Onboarding Wizard** (Profiling)
3. **Discovery Dashboard** (Personalized Value)

## Feature Specifications & Component Mapping

### 1. Shell & Navigation

- **[Header](https://www.agnosticui.com):** Features the brand logo and a [User Avatar](https://www.agnosticui.com) for profile management.
- **[Sidebar](https://www.agnosticui.com):** Provides global navigation. Includes a [Badge](https://www.agnosticui.com) next to "Notifications" or "New Updates."
- **[Breadcrumb](https://www.agnosticui.com):** Displays `Home / Dashboard / {Path Name}`.

### 2. Personalized Hero & State Management

- **[Flex](https://www.agnosticui.com):** Used for a responsive top section.
- **[Empty State](https://www.agnosticui.com):** Triggered if the user skips onboarding or has no `INTERESTS` selected, with a [Button](https://www.agnosticui.com) redirecting back to the Wizard.
- **[Skeleton Loader](https://www.agnosticui.com):** Displays while fetching interest-based content to prevent layout shift.

### 3. Content Strategy (The "Feed")

- **[Tabs](https://www.agnosticui.com):** Toggles between "Curated for You" (Interest-based) and "All Resources."
- **[Card](https://www.agnosticui.com):** Each interest-based item is wrapped in a card.
  - Uses [Tag](https://www.agnosticui.com) components to label the category (e.g., "React", "Design Systems").
  - Uses [Icon Button](https://www.agnosticui.com) for "Save for Later" or "Share" actions.
- **[Divider](https://www.agnosticui.com):** Separates the primary feed from the "Secondary Path Insights" section.

### 4. Path-Specific Utilities

- **[Progress](https://www.agnosticui.com):** A "Setup Completion" bar specifically for the user's `PATH`.
- **[Accordion](https://www.agnosticui.com):** Collapsible "Suggested Workflows" based on whether they chose _Personal_, _Team_, or _Enterprise_.
- **[Alert](https://www.agnosticui.com):** High-priority path updates (e.g., "Team Invitation Pending" for the _Team_ path).

## Technical Implementation Snippet

The dashboard consumes the onboarding state to render components conditionally:

```typescript
// Render logic for the "Suggested for you" section
renderInterests(userInterests: string[]) {
  if (userInterests.length === 0) {
    return html`<ag-empty-state header="No Interests Found" ...></ag-empty-state>`;
  }

  return html`
    <ag-flex gutter="24">
      ${userInterests.map(interest => html`
        <ag-card isStacked>
          <div class="p16">
            <ag-tag isUppercase>${interest}</ag-tag>
            <h4 class="mt16">Latest in ${interest}</h4>
            <p>Custom content based on your onboarding selection.</p>
            <ag-divider></ag-divider>
            <ag-button isPrimary isBlank>View Resources</ag-button>
          </div>
        </ag-card>
      `)}
    </ag-flex>
  `;
}
```

## Dashboard Components Selection Summary

| Feature               | AgnosticUI Component                                                                                                                                                                                                                               |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Main Layout**       | [Header](https://www.agnosticui.com/docs/components/header), [Sidebar](https://www.agnosticui.com/docs/components/sidebar), [Flex](https://www.agnosticui.com/docs/components/flex), [Divider](https://www.agnosticui.com/docs/components/divider) |
| **User Identity**     | [Avatar](https://www.agnosticui.com/docs/components/avatar), [Breadcrumb](https://www.agnosticui.com/docs/components/breadcrumb)                                                                                                                   |
| **Content Discovery** | [Tabs](https://www.agnosticui.com/docs/components/tabs), [Card](https://www.agnosticui.com/docs/components/card), [Tag](https://www.agnosticui.com/docs/components/tag), [Badge](https://www.agnosticui.com/docs/components/badge)                 |
| **State Handling**    | [Empty State](https://www.agnosticui.com/docs/components/empty-state), [Skeleton Loader](https://www.agnosticui.com/docs/components/skeleton), [Progress](https://www.agnosticui.com/docs/components/progress)                                     |
| **User Actions**      | [Button](https://www.agnosticui.com/docs/components/button), [Icon Button](https://www.agnosticui.com/docs/components/icon-button), [CopyButton](https://www.agnosticui.com/docs/components/copy-button)                                           |
| **Path Guidance**     | [Accordion](https://www.agnosticui.com/docs/components/accordion), [Alerts](https://www.agnosticui.com/docs/components/alert), [Toasts](https://www.agnosticui.com/docs/components/toast)                                                          |

## Dashboard Components – Local Source Paths (v2)

| Feature               | Local Component Path                                                                                                           |
| :-------------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| **Main Layout**       | `v2/lib/src/components/header`, `v2/lib/src/components/sidebar`, `v2/lib/src/components/flex`, `v2/lib/src/components/divider` |
| **User Identity**     | `v2/lib/src/components/avatar`, `v2/lib/src/components/breadcrumb`                                                             |
| **Content Discovery** | `v2/lib/src/components/tabs`, `v2/lib/src/components/card`, `v2/lib/src/components/tag`, `v2/lib/src/components/badge`         |
| **State Handling**    | `v2/lib/src/components/empty-state`, `v2/lib/src/components/skeleton`, `v2/lib/src/components/progress`                        |
| **User Actions**      | `v2/lib/src/components/button`, `v2/lib/src/components/icon-button`, `v2/lib/src/components/copy-button`                       |
| **Path Guidance**     | `v2/lib/src/components/accordion`, `v2/lib/src/components/alert`, `v2/lib/src/components/toast`                                |
