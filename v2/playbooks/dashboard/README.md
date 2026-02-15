# Playbook 3: Discovery Dashboard (Activation Phase)

> The Discovery Dashboard is the "Aha! moment" of the user journey. It consumes `INTERESTS` and `PATH` data captured in the Onboarding Wizard to present a personalized environment using AgnosticUI components.

## User Journey

1. **Login Form** (Auth) - Playbook 1
2. **Onboarding Wizard** (Profiling) - Playbook 2
3. **Discovery Dashboard** (Personalized Value) - Playbook 3

## Application Overview

A responsive dashboard that surfaces personalized content based on the user's onboarding selections:

- **PATH** (Personal / Team / Enterprise) determines the sidebar navigation, suggested workflows, and path-specific alerts
- **INTERESTS** (e.g., "React", "Design Systems", "Accessibility") power the content feed with curated resource cards

The dashboard demonstrates a wide range of AgnosticUI components working together in a realistic application shell.

## Feature Specifications & Component Mapping

### 1. Shell & Navigation

| Feature | Component | Description |
|---------|-----------|-------------|
| **Top Bar** | `Header` | Brand logo (left), search placeholder (center), Avatar + name (right) |
| **Side Navigation** | `Sidebar` | Collapsible nav with Badge counts on "Notifications" and "Updates" |
| **Breadcrumb Trail** | `Breadcrumb` | `Home / Dashboard / {Path Name}` |
| **User Identity** | `Avatar` | Circular avatar in header with initials or image |
| **Notification Count** | `Badge` | Numeric badge on sidebar nav items |

### 2. Personalized Hero & State Management

| Feature | Component | Description |
|---------|-----------|-------------|
| **Welcome Section** | `Flex` | Responsive top section with greeting and setup progress |
| **Setup Progress** | `Progress` | "Setup Completion" bar for the user's PATH |
| **Empty State** | `EmptyState` | Shown when user has no INTERESTS; CTA redirects to Wizard |
| **Loading State** | `SkeletonLoader` | Placeholder while fetching interest-based content |
| **Actions** | `Button` | Primary and secondary action buttons throughout |

### 3. Content Feed

| Feature | Component | Description |
|---------|-----------|-------------|
| **Feed Tabs** | `Tabs` | "Curated for You" (interest-based) vs. "All Resources" |
| **Resource Cards** | `Card` | Each interest-based item wrapped in a stacked card |
| **Category Labels** | `Tag` | Labels like "React", "Design Systems" on each card |
| **Card Actions** | `IconButton` | "Bookmark" and "Share" actions per card |
| **Section Separator** | `Divider` | Separates primary feed from secondary insights |

### 4. Path-Specific Utilities

| Feature | Component | Description |
|---------|-----------|-------------|
| **Suggested Workflows** | `Accordion` | Collapsible workflows based on Personal/Team/Enterprise |
| **Path Alerts** | `Alert` | High-priority updates (e.g., "Team Invitation Pending") |
| **Notifications** | `Toast` | Transient feedback for user actions |

## Components Required (CLI Install)

```
Header Sidebar Breadcrumb Avatar Badge Flex EmptyState SkeletonLoader Button Tabs Card Tag IconButton Divider Progress Accordion Alert Toast
```

## Design Assets

- `design/logo.svg` - AgnosticUI brand logo (shared with login playbook)
- No Figma mockups available - implementation is based on this specification

## Technical Notes

- The dashboard consumes onboarding state (PATH + INTERESTS) from localStorage or a shared state store
- Conditional rendering based on user selections drives the personalized experience
- Empty state handling is critical for users who skip onboarding
