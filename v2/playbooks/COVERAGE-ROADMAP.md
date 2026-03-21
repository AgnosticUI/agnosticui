# AgnosticUI Playbooks — Coverage Roadmap

## Current State

**7 canonical playbooks + 3 variants across 10+ prompt files.**

| Playbook           | Type      | Components                                                                                                                                                           |
| ------------------ | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Login V1           | Canonical | Button, Card, Checkbox, Divider, Icon, Image, Input, Link                                                                                                            |
| Login V2           | Variant   | Button, Card, Checkbox, Divider, Icon, Input, Link                                                                                                                   |
| Onboarding V1      | Canonical | Alert, Button, Icon, SelectionButtonGroup, SelectionCardGroup, Timeline                                                                                              |
| Onboarding V2      | Variant   | Alert, Button, Icon, Progress, SelectionCardGroup                                                                                                                    |
| Dashboard          | Canonical | Accordion, Alert, Avatar, Badge, Breadcrumb, Button, Card, Divider, EmptyState, Flex, Header, IconButton, Input, Progress, Sidebar, SkeletonLoader, Tabs, Tag, Toast |
| Data Grid V1       | Canonical | Alert, Avatar, Breadcrumb, Button, Checkbox, Dialog, EmptyState, Header, IconButton, Input, Menu, Pagination, Select, SelectionButtonGroup, Tag, Toast               |
| Data Grid V2       | Variant   | (V1 components) + IntlFormatter, ProgressRing, Spinner                                                                                                              |
| Support            | Canonical | Button, Combobox, Dialog, Drawer, Kbd, Menu, MessageBubble, Pagination, Popover, Radio, Rating, Select, Slider, Tabs, Toggle, Tooltip                                |
| Blog/Article Reader | Canonical | AspectRatio, Avatar, Badge, Button, Divider, Input, Loader, Mark, ScrollProgress, ScrollToButton, Tabs, Tag                                                         |
| Landing/Marketing  | Canonical | Accordion, Avatar, Badge, BadgeFx, Button, ButtonFx, Card, Divider, Header, IconButtonFx, Tabs, Tag                                                                 |

**Coverage: ~54 of 56+ components (~96%)**

---

## Intentionally Deferred Components

Two components have no organic playbook context and are permanently deferred:

| Component      | Reason                                                                                  |
| -------------- | --------------------------------------------------------------------------------------- |
| VisuallyHidden | A11y utility used _inside_ AgnosticUI components; standalone demo would feel forced     |
| Collapsible    | Overlaps heavily with Accordion + Drawer; no organic context adds it without redundancy |

---

## Current Coverage

| Metric              | State           |
| ------------------- | --------------- |
| Components covered  | ~54 / 56+       |
| Coverage %          | **~96%**        |
| Canonical playbooks | 7               |
| Variants            | 3               |

---

## Completed Roadmap

All three coverage actions were completed:

### ✅ Action 1 — Data Grid V2 Variant
New components: Spinner, ProgressRing, IntlFormatter — added via `grid/PROMPT-3-FRAMEWORKS-V2.md`.
Docs: `v2/site/docs/playbooks/grid.md` (Variant II section).

### ✅ Action 2 — Blog / Article Reader Playbook
New components: ScrollProgress, ScrollToButton, Mark, AspectRatio, Loader — added via `blog/PROMPT-3-FRAMEWORKS.md`.
Docs: `v2/site/docs/playbooks/blog.md`.

### ✅ Action 3 — Landing / Marketing Page Playbook
New components: BadgeFx, ButtonFx, IconButtonFx — added via `landing/PROMPT-3-FRAMEWORKS.md`.
Docs: `v2/site/docs/playbooks/landing.md`.

StackBlitz config entries for `blog`, `landing`, and `grid-v2` added to `playbooks-config.ts`.

### Remaining: Screenshots

Blog and landing docs pages don't have screenshots yet (no `design/` folder exists for those playbooks).
Take screenshots of the three breakpoints (mobile, tablet, desktop) for each playbook and place in:
- `v2/site/docs/public/playbooks/blog/` — mobile, tablet, desktop (light + dark each)
- `v2/site/docs/public/playbooks/landing/` — mobile, tablet, desktop (light + dark each)

Then add the screenshot grid HTML to `blog.md` and `landing.md` following the pattern in `grid.md`.
