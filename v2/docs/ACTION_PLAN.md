# AgnosticUI v2 – Simplified Action Plan

## ⚠️ SVELTE 5 MIGRATION COMPLETED (Dec 2024) ✅

**MAJOR UPDATE**: Successfully completed Svelte 5 + Astro integration with direct web component approach.

**Achievement**: Resolved critical TypeError "Cannot read properties of undefined (reading 'call')" that was blocking Svelte 5 usage.

**Final Architecture Decision**:
- **React**: Framework wrappers ✅ (ReactButton, ReactAccordion, ReactInput, ReactTooltip)
- **Vue**: Framework wrappers ✅ (VueButton, VueAccordion, VueInput, VueTooltip)
- **Svelte**: **Direct web component integration** ✅ (SimpleSvelteButtonDemo pattern)
- **Vanilla**: Pure web components ✅

**Why Svelte Uses Direct Web Components**:
- Svelte 5 + Astro + web component wrappers proved fundamentally incompatible
- Direct integration provides superior performance and reliability
- Zero maintenance overhead for Svelte-specific wrapper code
- Perfect Svelte 5 reactivity with `$state()`, `$props()`, `$derived()` patterns
- Simpler, cleaner architecture that works excellently

**Technical Resolution**:
- ✅ **Fixed Svelte 5 syntax**: Updated from `export let` to `$props()` pattern
- ✅ **Fixed Astro configuration**: Proper @sveltejs/vite-plugin-svelte setup
- ✅ **Version alignment**: Library and playground both use Svelte 5.39.3
- ✅ **Removed problematic patterns**: Eliminated conditional rendering and wrapper complexity
- ✅ **Enhanced demos**: Comprehensive SimpleSvelteButtonDemo with full feature coverage

All sections below mentioning "Svelte wrappers" are now **RESOLVED** - Svelte uses direct web components successfully.

---

## 🎯 Mission
Launch AgnosticUI v2 as an AI-ready, ejectable UI library with dead-simple component workflows and APG-driven accessibility.

**New Simplified Architecture:**
1. **Astro Playground** - Primary development/testing environment
2. **Lib (agnostic/lib)** - Core UI component library
3. **CLI** - ONLY for ejecting components (simple file copy)

---

## 🚨 IMMEDIATE NEXT TASK

### Multi-Framework Implementation ✅ **100% COMPLETED + SVELTE 5 MIGRATED**

**Status**: All framework integrations COMPLETE with optimal architecture for each + successful Svelte 5 migration!

**🎯 COMPLETED WORK**:
✅ **React Wrappers** - Complete (ReactButton, ReactAccordion, ReactTooltip, ReactInput)
✅ **Vue Wrappers** - Complete (VueButton, VueAccordion, VueTooltip, VueInput)
✅ **Svelte 5 Integration** - Complete via direct web component integration + full Svelte 5 migration
✅ **All Playground Integration** - React, Vue, and Svelte demos in all 4 component playgrounds (/button, /accordion, /input, /tooltip)
✅ **Package Exports** - All React/Vue wrappers exported, Svelte removed from package.json (uses direct web components)
✅ **Svelte 5 Migration** - Successfully resolved TypeError and migrated all Svelte code to Svelte 5 patterns
✅ **Library Scripts Verification** - All lint, typecheck, and build scripts passing
✅ **Playground Verification** - All 4 pages (button, accordion, input, tooltip) loading successfully

**Final Multi-Framework Progress**:
- ✅ **React**: Framework wrappers (excellent DX, working great)
- ✅ **Vue**: Framework wrappers (excellent DX, working great)
- ✅ **Svelte 5**: Direct web component integration (excellent DX, working great, fully migrated)
- ✅ **Vanilla**: Pure web components (working everywhere)

**🎯 NEXT PRIORITIES** (Focus areas):

1. **Complete Dialog Multi-Framework Support** ✅ **COMPLETED**
   - ✅ Dialog Core component complete (54 tests, focus trapping, backdrop click fixes)
   - ✅ ReactDialog wrapper with TypeScript support and proper web component loading
   - ✅ VueDialog wrapper with Vue 3 Composition API integration
   - ✅ Svelte Dialog playground integration (direct web component usage)
   - ✅ Complete Dialog Astro playground with all framework demos
   - ✅ Consistent Cancel Action button behavior across all frameworks

2. **Design Token System Implementation** ✅ **COMPLETED**
   - ✅ Replace ad-hoc CSS custom properties with systematic design tokens
   - ✅ Implement theme registry system with JSON tokens and Style Dictionary workflow
   - ✅ Create comprehensive 52-token foundation (spaces, colors, radii, motion, z-index)
   - ✅ Add light/dark mode support with --ag-* token naming convention
   - ✅ Integrate Style Dictionary for CSS/JS/JSON token generation and distribution
   - ✅ Migrate Button component to semantic tokens with theme switching integration
   - ✅ Update playground BaseLayout with semantic tokens and universal theme toggle
   - ✅ Create comprehensive theme test pages validating token system

3. **Component Token Migration** ✅ **COMPLETED**
   - ✅ Migrated existing components (Dialog, Input, Accordion, Tooltip) to semantic tokens
   - ✅ Replaced --agnostic-* variables in all playgrounds with --ag-* tokens
   - ✅ Maintained backward compatibility through CSS mapping layer
   - ✅ All 343 component tests passing after migration

4. **Component Library Expansion** 🎯 **NEW COMPONENTS**
   - Continue with Close, Switch, Breadcrumbs components
   - Follow established patterns: Core → React → Vue → Svelte direct integration
   - Apply semantic token system to all new components from start

5. **Production Readiness** ⏳ **POLISH & LAUNCH**
   - Final ejection workflow testing across all frameworks
   - Documentation completion and examples
   - Performance optimization and bundle analysis
   - User testing and feedback integration

**Current State**: Multi-framework foundation COMPLETE! Design token system COMPLETE! Ready for component token migration and expansion.

---

## 🎯 MULTI-FRAMEWORK WRAPPER ROADMAP

### Phase 1: Complete React Wrapper Tests ✅ **100% COMPLETE**
- ✅ ReactButton tests (comprehensive test suite passing)
- ✅ ReactAccordion tests (9 tests passing, fixed architecture)
- ✅ ReactTooltip tests (9 tests passing, imperative API)
- ✅ ReactInput tests (20 tests passing, comprehensive coverage)
- ✅ **Total: 38 React wrapper tests passing with zero linting errors**

### Phase 2: Vue Wrapper Implementation ✅ **100% COMPLETE**
**Goal**: Create Vue 3 wrappers following established React patterns

**Completed**:
1. ✅ **VueButton** - Complete with 9 tests passing
   - ✅ Vue 3 Composition API implementation (`src/components/Button/vue/VueButton.vue`)
   - ✅ Comprehensive test suite (`src/components/Button/vue/VueButton.spec.ts`)
   - ✅ Playground integration (VueButtonDemo component in Button playground)
   - ✅ Package export configured ("./button/vue")
   - ✅ Custom element configuration (resolved ag-button warnings)

2. ✅ **VueAccordion** - Complete multi-component Vue wrapper
   - ✅ Vue 3 Composition API implementation with VueAccordionItem, VueAccordionHeader, VueAccordionContent
   - ✅ Comprehensive test suite with 16 tests covering all accordion functionality
   - ✅ Playground integration (VueAccordionDemo component)
   - ✅ Package export configured ("./accordion/vue")

3. ✅ **VueTooltip** - Complete Floating UI integration
   - ✅ Vue 3 Composition API implementation with tooltip positioning
   - ✅ Comprehensive test suite with 9 tests covering all tooltip features
   - ✅ Playground integration (VueTooltipDemo component)
   - ✅ Package export configured ("./tooltip/vue")

4. ✅ **VueInput** - Complete complex form control
   - ✅ Vue 3 Composition API implementation with all input variants
   - ✅ Comprehensive test suite with 23 tests covering validation, events, accessibility
   - ✅ Playground integration (VueInputDemo component)
   - ✅ Package export configured ("./input/vue")
   - ✅ Fixed critical boolean attribute handling bug

**Vue Integration Requirements**:
- Import pattern: `import { VueButton } from "agnosticui-core/vue"`
- Event handling: Vue-style event emitters
- Props pass-through: Vue reactive props to Lit properties
- Playground integration: Vue sections in all component playgrounds
- Testing: Vue Test Utils following React Testing Library patterns

### Phase 3: Svelte Wrapper Implementation 🎯 **NEXT TARGET**
**Goal**: Create Svelte wrappers following established React + Vue patterns

**Implementation Order**:
1. 🎯 **SvelteButton** - Establish Svelte patterns and tooling setup (NEXT TARGET)
2. **SvelteAccordion** - Multi-component pattern
3. **SvelteTooltip** - Floating UI integration
4. **SvelteInput** - Complex form control

**Svelte Integration Requirements**:
- Import pattern: `import { SvelteButton } from "agnosticui-core/svelte"`
- Event handling: Svelte custom events and dispatch
- Props pass-through: Svelte reactive props to Lit properties
- Playground integration: Svelte sections in all component playgrounds
- Testing: Svelte Testing Library following established patterns

### Phase 4: Full Multi-Framework Testing ⏳ **FINAL VALIDATION**
- All 4 components × 3 frameworks = 12 wrapper implementations
- Playground demonstrations for React, Vue, Svelte on all components
- Astro documentation for direct Lit component usage
- Ejection testing: `agui eject button`, `agui eject accordion`, etc.

**Success Criteria**:
- All wrapper tests passing (React, Vue, Svelte)
- Consistent event logging across all frameworks
- Playground demonstrations complete
- Multi-framework ejection workflow verified

**Timeline Estimate**:
- React tests: 1 day (75% complete)
- Vue wrappers: 2-3 days
- Svelte wrappers: 2-3 days
- Integration & polish: 1 day

**Total: ~1 week to complete multi-framework foundation**

---

## 🏗️ Simplified Architecture

### 1. Astro Playground (Primary)
- Fast development and visual testing
- Live component demos with accessibility showcases
- Hot reload for rapid iteration
- Primary environment for adding new components

### 2. Lib (Core Library)
- Lit-based web components
- Almost headless (functional CSS only)
- APG-driven accessibility compliance
- Source files distributed for ejection

### 3. CLI (Ejection Only)
**ONE COMMAND**: `agui eject <component> [destination]`

```bash
# Simple file copy - no generation, no templates
agui eject accordion ./src/components/ui/accordion
# Copies: agnostic/lib/src/components/Accordion/* → ./src/components/ui/accordion/
```

**What's GONE:**
- ❌ Framework generators (React/Vue/Svelte templates)
- ❌ Complex dependency management
- ❌ Framework detection
- ❌ Template systems
- ❌ npm link complications

**What STAYS:**
- ✅ Simple recursive file copy
- ✅ Basic path resolution
- ✅ Source files distributed as-is

---

## 🚀 Development Workflow

### Setup Testing Playground
```bash
./scripts/setup-testing-playground.sh
# - Links lib to playground for development
# - Starts Astro dev server
# - Ready for component development
```

### Component Development
1. **Build in Lib** - Create/modify in `agnostic/lib/src/components/`
2. **Test in Playground** - View/test in Astro playground
3. **Eject for Users** - `agui eject component` copies source files

### User Workflow
```bash
npm install agnosticui
# Gets distributables + source files

agui eject accordion ./src/components/ui/
# Simple copy operation, no transformation
```

---

## 📅 V1 Parity Component Sprint

### ✅ Infrastructure Complete (Done)
- [x] Simplified CLI with ejection-only functionality
- [x] Astro Playground development environment
- [x] Setup script for rapid development
- [x] Documentation updated for new approach

### 🎯 Component Development (Current Focus)

**Goal**: Achieve V1 parity with improved accessibility and almost-headless architecture

#### 📊 Component Status

**Complete Components (Core + Multi-Framework):**
- ✅ **Button** - Production ready (34 tests, APG compliant, React + Vue wrappers, Svelte integration)
- ✅ **Accordion** - Production ready (29 tests, APG compliant, React + Vue wrappers, Svelte integration)
- ✅ **Input** - Production ready (56 tests, APG compliant, React + Vue wrappers, Svelte integration)
- ✅ **Tooltip** - Production ready (16 tests, APG compliant, React + Vue wrappers, Svelte integration)
- ✅ **Dialog** - Production ready (54 tests, APG compliant, React + Vue wrappers, Svelte integration)

**Multi-Framework Status:**
- ✅ **Button, Accordion, Input, Tooltip, Dialog** - Full multi-framework parity complete

**Next Priority Components:**
- 🎯 **Close** - Simple utility component for next implementation
- 🎯 **Switch** - Toggle control component

**Component Completion Criteria (Updated for Multi-Framework Strategy):**
1. ✅ Core Lit component with comprehensive tests
2. ✅ APG compliance verified
3. ✅ Astro playground integration
4. ✅ React wrapper component **with consistent integration patterns** (COMPLETED for all 4 components)
5. ✅ Vue wrapper component **with consistent integration patterns** (COMPLETED for all 4 components)
6. 🎯 Svelte wrapper component **with consistent integration patterns** (NEXT TARGET)
7. ⏳ Ejection workflow tested for all frameworks

**React Integration Consistency Requirements - REPLICATE EXACTLY:**
- **CRITICAL: Use `client:only="react"` hydration directive** (prevents SSR entirely)
- **CRITICAL: Always copy the exact pattern from working ReactAccordionDemo.tsx**
- Import React components from package imports: `import { ReactComponent } from "agnosticui-core/react"`
- **TOP-level import required:** `import "agnosticui-core";`
- **Working SSR-Safe Pattern:**
  ```tsx
  // Import web components to ensure they're registered
  import "agnosticui-core";

  useEffect(() => {
    // Wait for web components to be defined before rendering
    const waitForComponents = async () => {
      try {
        await Promise.all([
          customElements.whenDefined("ag-component"),
        ]);
        console.log("Web components are ready for React wrappers!");
        setIsReady(true);
      } catch (error) {
        console.error("Error waiting for web components:", error);
        setTimeout(() => setIsReady(true), 1000);
      }
    };
    waitForComponents();
  }, []);
  ```
- **Astro template:** `<ReactComponentDemo client:only="react" />`
- Include comprehensive demo with event logging for testing

**Multi-Framework Strategy (Revised Architecture Decision):**

**✅ Framework Wrappers Required:**
- **React** - Complete (established patterns working)
- **Vue 3** - In development (significant v1 user base)
- **Svelte** - In development (significant v1 user base)

**✅ Direct Usage (No Wrapper Needed):**
- **Astro** - Use Lit components directly with client directives
  ```astro
  ---
  import "agnosticui-core";
  ---
  <ag-button client:load>Click me</ag-button>
  <ag-tooltip content="Help text" client:idle>
    <button>Hover me</button>
  </ag-tooltip>
  ```

**❌ Frameworks Not Supported:**
- **Angular** - Phased out from v1, minimal user base

**Rationale:** Maintain AgnosticUI's core value proposition ("One branded theme…all the frameworks!") while focusing on frameworks with demonstrated user demand. Astro gets first-class web component support without wrapper overhead.

**Vue/Svelte Integration Consistency Requirements:**
- **CRITICAL: Replicate React event logging patterns** (comprehensive console output)
- **CRITICAL: Use same almost-headless + ejection philosophy**
- **CRITICAL: Consistent playground integration** (Vue/Svelte sections in all component playgrounds)
- **Import patterns:** `import { VueComponent } from "agnosticui-core/vue"` and `import { SvelteComponent } from "agnosticui-core/svelte"`
- **Event handling:** Maintain same detailed logging with timestamps and meaningful data

- ⏳ **22 Components** - V1 parity remaining (27 total V1 components - 4 complete, 1 in progress)

#### 🚀 Sprint Order (Priority-Based)

**Phase 1: Core Interaction Components (Week 1-2)**
1. ✅ **Button** - Complete (34 tests, APG compliant, React wrapper)
2. ✅ **Input** - Complete (56 tests, APG compliant, React wrapper)
3. ✅ **Dialog** - Complete (54 tests, APG compliant, focus trapping, Astro playground)
4. 🎯 **Close** - Simple utility component (NEXT TARGET)
5. **Switch** - Toggle control

**Phase 2: Navigation & Layout (Week 3-4)**
6. **Breadcrumbs** - Navigation component
7. **Header** - Layout component
8. **Tabs** - Complex interaction pattern
9. **Menu** - Dropdown/navigation pattern
10. **Divider** - Simple layout utility

**Phase 3: Data Display (Week 5-6)**
11. **Cards** - Container component
12. **Table** - Complex data display
13. **Tags** - Data labeling
14. **Progress** - Status indicator
15. **Loader/Spinner** - Loading states

**Phase 4: Advanced Components (Week 7-8)**
16. **Select** - Complex form control
17. **Switch** - Toggle control
18. **Choices** - Multi-option control
19. **Pagination** - Navigation utility
20. **Alerts** - Notification system

**Phase 5: Specialized Components (Week 9-10)**
21. **Avatars** - User representation
22. **Icons** - Visual utilities
23. **EmptyState** - State management
24. **Toasts** - Notification system
25. **Drawer** - Specialized Dialog variant

**Phase 6: Final Components (Week 11)**
26. **Disclose** - Collapsible content (simpler than Accordion)
27. **Spinner** - Loading indicator variant

---

## 🎯 Benefits of Simplified Approach

### For Development
- **Faster iteration** - No complex CLI to maintain
- **Clearer focus** - Astro playground + lib quality
- **Less brittle** - No npm link dependencies
- **Easier testing** - Single environment setup

### For Users
- **Simple installation** - `npm install agnosticui`
- **No lock-in** - Get source files, modify as needed
- **Predictable ejection** - Just file copying
- **Framework agnostic** - Use source files anywhere

### For Maintenance
- **Dramatically simpler** - 90% less CLI code
- **Fewer edge cases** - No framework-specific logic
- **Easier debugging** - Straightforward file operations
- **Sustainable** - Focus energy on component quality

---

## 🧪 Testing & Development Workflow

### Quick Development Loop
```bash
./scripts/setup-testing-playground.sh    # Setup linked environment
# Edit in agnostic/lib/src/components/ → View at localhost:4321
```

### Component Development Pattern (1-2 days each)
1. **Research** - APG specs, create `SpecSheet.md`
2. **Core Implementation** - TDD with comprehensive tests
3. **Multi-Framework Integration** - React/Vue wrappers, Svelte playground
4. **Polish** - Accessibility audit, ejection testing

### Success Metrics
- **APG Compliance**: 100% for all components
- **Test Coverage**: Comprehensive suites (25-55 tests per component)
- **Almost Headless**: Functional CSS only
- **Multi-Framework**: React + Vue wrappers + Svelte integration

---

## 🎨 Design Token System Architecture

### Overview
Replace ad-hoc CSS custom properties with a systematic design token approach that enables white-labeling and consistent theming across all components.

### Core Token Categories

#### Semantic Tokens (Minimal Viable Set)
```css
/* Core semantic colors */
--ag-primary: #2563eb;
--ag-primary-hover: #1d4ed8;
--ag-primary-border: #3b82f6;
--ag-primary-active: #1e40af;

--ag-secondary: #6b7280;
--ag-secondary-hover: #4b5563;

--ag-error: #dc2626;
--ag-error-hover: #b91c1c;

--ag-warning: #d97706;
--ag-warning-hover: #b45309;

--ag-focus: #f59e0b;  /* High contrast orange for accessibility */

/* Neutral colors */
--ag-neutral-50: #f9fafb;
--ag-neutral-100: #f3f4f6;
--ag-neutral-500: #6b7280;
--ag-neutral-900: #111827;
```

#### Functional Tokens
```css
/* Component-specific tokens */
--ag-border-radius: 0.375rem;
--ag-border-width: 1px;
--ag-focus-ring-width: 2px;
--ag-focus-ring-offset: 2px;
```

### Theme Registry System

#### Registry Configuration
AI-first approach supporting both local and GitHub-based public registries:

```json
{
  "registries": {
    "@agnostic": "https://raw.githubusercontent.com/AgnosticUI/agnosticui/main/v2/themes/{name}.json",
    "@community": "https://raw.githubusercontent.com/AgnosticUI/community-themes/main/{name}.json",
    "@local": "./tokens/{name}.json"
  },
  "themes": {
    "default": "@agnostic/default",
    "dark": "@agnostic/dark",
    "accessible": "@agnostic/high-contrast",
    "material": "@community/material-design",
    "custom": "@local/my-brand"
  },
  "currentTheme": "default"
}
```

#### Benefits of GitHub-Based Registry System
- **Simple & Free**: Public GitHub repos as theme registries
- **Version Control**: Themes get proper git history
- **Community Driven**: Easy PRs for new themes in community repo
- **MCP Integration**: AI can generate themes and create PRs
- **Predictable URLs**: Standard GitHub raw file serving
- **No Authentication**: Public registries keep it simple

#### Theme Structure
```json
// tokens/default-theme.json
{
  "semantic": {
    "primary": {
      "base": "#2563eb",
      "hover": "#1d4ed8",
      "border": "#3b82f6",
      "active": "#1e40af"
    },
    "error": {
      "base": "#dc2626",
      "hover": "#b91c1c"
    }
  },
  "neutral": {
    "50": "#f9fafb",
    "500": "#6b7280",
    "900": "#111827"
  }
}
```

### Light/Dark Mode Implementation
```css
:root {
  --ag-primary: #2563eb;
  --ag-bg: #ffffff;
  --ag-text: #111827;
}

[data-theme="dark"] {
  --ag-primary: #3b82f6;  /* Lighter for dark backgrounds */
  --ag-bg: #111827;
  --ag-text: #f9fafb;
}
```

### Style Dictionary Integration

#### Build Pipeline
```javascript
// style-dictionary.config.js
module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      buildPath: 'dist/tokens/',
      files: [{
        destination: 'ag-tokens.css',
        format: 'css/variables'
      }]
    },
    js: {
      buildPath: 'dist/tokens/',
      files: [{
        destination: 'tokens.js',
        format: 'javascript/es6'
      }]
    }
  }
};
```

#### Generated Output
```css
/* dist/tokens/ag-tokens.css */
:root {
  --ag-primary: #2563eb;
  --ag-primary-hover: #1d4ed8;
  /* ... all tokens */
}
```

### Migration Strategy

#### Phase 1: Token Definition
1. Create `tokens/` directory with base themes
2. Setup Style Dictionary build process
3. Generate initial CSS custom property sets

#### Phase 2: Component Refactoring
1. Replace hardcoded colors with `--ag-*` tokens
2. Update existing components (Button, Input, Dialog, etc.)
3. Ensure backward compatibility during transition

#### Phase 3: Theme System
1. Implement theme switching utilities
2. Add theme validation and fallbacks
3. Create documentation and examples

### Benefits
- **Consistency**: Systematic color usage across all components
- **White-labeling**: Easy theme customization for enterprises
- **Accessibility**: Built-in contrast validation and high-contrast themes
- **Maintainability**: Single source of truth for design decisions
- **Scalability**: New components automatically inherit token system

### Implementation Priority
After Dialog multi-framework completion, the design token system becomes the **highest priority** to prevent further accumulation of ad-hoc CSS properties and enable systematic theming.

---

## 🎮 Quick Start Commands

```bash
# Developer workflow
./scripts/setup-testing-playground.sh    # Start development
# Edit components in agnostic/lib/src/components/
# Test in playground at localhost:4321

# User workflow
npm install agnosticui                   # Install library
agui eject accordion ./components/ui/    # Eject for customization
```

Simple. Fast. Maintainable.

---

## 🎯 CURRENT SESSION CONTEXT

### Recently Completed: Design Token System Implementation ✅

**What Was Just Completed**:
- ✅ **Theme Registry System**: Complete JSON-based design token architecture with Style Dictionary build pipeline
- ✅ **Comprehensive Token Foundation**: 52 semantic tokens covering spaces, colors, typography, motion, borders, z-index
- ✅ **Light/Dark Theme Support**: Semantic token approach with clean [data-theme="dark"] overrides
- ✅ **Button Component Migration**: Complete semantic token integration with theme switching validation
- ✅ **Universal Theme Toggle**: BaseLayout integration with theme switching across all playground pages
- ✅ **Legacy Compatibility**: Backward compatibility maintained with --agnostic-* to --ag-* token mappings
- ✅ **Theme Test Pages**: Comprehensive validation of token system and theme switching functionality

### Immediate Next Actions

**1. Component Token Migration** ✅ **COMPLETED**
- ✅ Migrated existing components (Dialog, Input, Accordion, Tooltip) to semantic tokens
- ✅ Replaced all --agnostic-* variables in playgrounds with --ag-* tokens
- ✅ Comprehensive token migration across 59+ files
- ✅ Consistent theming experience across entire component library

**2. Component Library Expansion** 🎯 **AFTER MIGRATION**
- Continue with Close, Switch, Breadcrumbs components
- Apply semantic token system to all new components from the start
- Follow established patterns: Core → React → Vue → Svelte direct integration

**Ready for**: Component token migration is now the highest priority to complete the systematic theming foundation across all existing components before expanding the library.
