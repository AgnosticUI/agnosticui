# AgnosticUI Playbooks — Coverage Roadmap

## Current State

**5 canonical playbooks + 2 variants across 7 prompt files.**

| Playbook      | Type      | Components                                                                                                                                                           |
| ------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Login V1      | Canonical | Button, Card, Checkbox, Divider, Icon, Image, Input, Link                                                                                                            |
| Login V2      | Variant   | Button, Card, Checkbox, Divider, Icon, Input, Link                                                                                                                   |
| Onboarding V1 | Canonical | Alert, Button, Icon, SelectionButtonGroup, SelectionCardGroup, Timeline                                                                                              |
| Onboarding V2 | Variant   | Alert, Button, Icon, Progress, SelectionCardGroup                                                                                                                    |
| Dashboard     | Canonical | Accordion, Alert, Avatar, Badge, Breadcrumb, Button, Card, Divider, EmptyState, Flex, Header, IconButton, Input, Progress, Sidebar, SkeletonLoader, Tabs, Tag, Toast |
| Data Grid     | Canonical | Alert, Avatar, Breadcrumb, Button, Checkbox, Dialog, EmptyState, Header, IconButton, Input, Menu, Pagination, Select, SelectionButtonGroup, Tag, Toast               |
| Support       | Canonical | Button, Combobox, Dialog, Drawer, Kbd, Menu, MessageBubble, Pagination, Popover, Radio, Rating, Select, Slider, Tabs, Toggle, Tooltip                                |

**Coverage: 44 of 56 components (79%)**

---

## Target: 90%+ Coverage

**Realistic ceiling: 54/56 (96%)** — two components intentionally deferred:

| Component      | Reason for deferral                                                                     |
| -------------- | --------------------------------------------------------------------------------------- |
| VisuallyHidden | A11y utility used _inside_ AgnosticUI components; standalone demo would feel forced     |
| Collapsible    | Overlaps heavily with Accordion + Drawer; no organic context adds it without redundancy |

---

## The 12 Uncovered Components

| Component          | Cluster           | Plan                              |
| ------------------ | ----------------- | --------------------------------- |
| Spinner            | Loading states    | Data Grid V2 variant              |
| ProgressRing       | Loading states    | Data Grid V2 variant              |
| IntlFormatter      | Data utility      | Data Grid V2 variant              |
| ScrollProgress     | Scroll utilities  | Blog / Article Reader playbook    |
| ScrollToButton     | Scroll utilities  | Blog / Article Reader playbook    |
| Mark               | Content utilities | Blog / Article Reader playbook    |
| AspectRatio        | Content utilities | Blog / Article Reader playbook    |
| Loader             | Loading states    | Blog / Article Reader playbook    |
| BadgeFx (Lab)      | Animated Lab trio | Landing / Marketing Page playbook |
| ButtonFx (Lab)     | Animated Lab trio | Landing / Marketing Page playbook |
| IconButtonFx (Lab) | Animated Lab trio | Landing / Marketing Page playbook |
| VisuallyHidden     | A11y utility      | _(deferred — see above)_          |
| Collapsible        | Disclosure        | _(deferred — see above)_          |

---

## Roadmap to 96%

### Action 1 — Data Grid V2 Variant

**New components: Spinner, ProgressRing, IntlFormatter**
**Effort: Low** — variant prompt, no new project scaffold

The Data Grid already has async panel switching, numeric data, and progress-heavy
operations — all three components fit without any narrative stretch:

- **Spinner** — replaces or supplements SkeletonLoader during panel mount/switch
- **ProgressRing** — shows bulk operation progress (e.g. "Deleting 12 rows…") in the TanStack panel
- **IntlFormatter** — formats price columns (USD) and date columns in all three panels

See: v2/playbooks/CREATING-VARIANTS.md for how to create a new variant.

---

### Action 2 — Blog / Article Reader Playbook _(new canonical)_

**New components: ScrollProgress, ScrollToButton, Mark, AspectRatio, Loader**
**Effort: Medium** — new playbook with full project scaffold

**Design brief:** Clean, typography-first reading experience.
Inspiration: **Medium, Dropbox Paper, Svbtle**

Key aesthetic principles drawn from those references:

- **Medium:** Generous white space, large serif body type, floating clap/reaction bar,
  author card at article end, reading time estimate in header
- **Dropbox Paper:** Minimal chrome, the content IS the interface, subtle
  inline toolbar that appears on text selection
- **Svbtle:** Single-column, nothing competes with the words, bold typographic
  hierarchy, dot-based "kudos" interaction

**Target aesthetic for AgnosticUI implementation:**
Single-column editorial layout. A refined serif or slab-serif for body copy.
Strong typographic scale. Restrained UI chrome that disappears when reading.
The AgnosticUI components should feel like they belong — not bolted on.

**Component placement:**

| Component      | Placement                | Notes                                                |
| -------------- | ------------------------ | ---------------------------------------------------- |
| ScrollProgress | Fixed top bar            | Thin line showing read progress as user scrolls      |
| ScrollToButton | Fixed bottom-right       | Appears after scrolling past ~30% of article         |
| Mark           | Search/highlight         | "Find in article" feature highlights matching terms  |
| AspectRatio    | Hero image wrapper       | Enforces consistent 16:9 or 3:2 hero image ratio     |
| Loader         | Article fetch simulation | Shown on initial load before article content appears |

**Supporting components already covered (reuse):**
Avatar (author), Button, Divider, Tag (article category), Tabs (article / comments),
Badge (reading time), Input (search/find)

**Suggested article structure:**

```
[ScrollProgress — fixed top]
[Header: Logo + Search + Nav]
[Hero: AspectRatio wrapper → cover image]
[Article meta: Author Avatar, Date, Read time Badge, Category Tag]
[Body: long-form article text with Mark highlighting]
[Divider]
[Author card]
[Related articles]
[ScrollToButton — fixed bottom-right, appears on scroll]
```

**Responsive breakpoints:**

- Mobile (< 768px): Full-width, no sidebar, hero image full-bleed
- Tablet (768–1199px): Centered column ~680px, hero image full-width
- Desktop (≥ 1200px): Centered reading column ~720px max, generous side margins

---

### Action 3 — Landing / Marketing Page Playbook _(new canonical)_

**New components: BadgeFx, ButtonFx, IconButtonFx**
**Effort: Medium** — new playbook; the three Lab animated variants need a
context where animation is expected and adds value, not noise

**Component placement:**

| Component    | Placement         | Notes                                                          |
| ------------ | ----------------- | -------------------------------------------------------------- |
| ButtonFx     | Hero CTA          | Primary "Get Started" button with animated press/ripple effect |
| BadgeFx      | "What's New" pill | Animated badge in hero announcing latest feature/release       |
| IconButtonFx | Feature grid      | Icon buttons in the features section with hover animation      |

**Supporting components already covered (reuse):**
Header, Button, Card, Badge, Tag, Avatar (testimonials), Divider,
Accordion (FAQ section), Tabs (pricing tiers)

---

## Final Coverage Projection

| Metric              | Current | After roadmap |
| ------------------- | ------- | ------------- |
| Components covered  | 44 / 56 | 54 / 56       |
| Coverage %          | 79%     | **96%**       |
| Canonical playbooks | 5       | 7             |
| Variants            | 2       | 3             |
| Total prompt files  | 7       | 10            |

---

## Recommended Build Order

1. **Data Grid V2** — lowest effort, closes 3 gaps, builds on existing learnings
2. **Blog / Article Reader** — highest design value, closes 5 gaps, new context type
3. **Landing / Marketing Page** — closes the Lab trio, completes the coverage story
