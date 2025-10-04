# Showcase Component Template

> Use this template when creating showcase pages for components across all frameworks (React, Vue, Svelte, Vanilla)

## PHASE 1 - PATTERN ANALYSIS (no code)

### Read and compare ALL framework files:

#### Button Reference Files (read completely)
- `showcase/src/pages/button/ButtonReact.tsx`
- `showcase/src/pages/button/ButtonVue.tsx`
- `showcase/src/pages/button/ButtonSvelte.tsx`
- `showcase/src/pages/button/ButtonVanilla.tsx`

#### Accordion Reference Files (read completely)
- `showcase/src/pages/accordion/AccordionReact.tsx`
- `showcase/src/pages/accordion/AccordionVue.tsx`
- `showcase/src/pages/accordion/AccordionSvelte.tsx`
- `showcase/src/pages/accordion/AccordionVanilla.tsx`

### Create a framework comparison table:

| Framework | Required Imports | Helper Components | Preview Rendering | Code Syntax |
|-----------|-----------------|-------------------|-------------------|-------------|
| React     | ReactComponent from agnosticui-core/react | None | Direct React component | JSX |
| Vue       | 'agnosticui-core' | Wrapper with useEffect | <ag-component> via ref | Vue template |
| Svelte    | 'agnosticui-core' | Wrapper with useEffect | <ag-component> via ref | Svelte bind:this |
| Vanilla   | 'agnosticui-core' | Wrapper with useEffect | <ag-component> via ref | HTML + JS |

### Document these patterns for each framework:

#### 1. Required imports
- List exact import statements for each framework
- Note: Vue/Svelte/Vanilla use web component import, React uses wrapper

#### 2. Helper components (if any)
- Vue: `[Component]Wrapper` with `useEffect` to set items/props
- Svelte: `[Component]Wrapper` with `useEffect` to set items/props
- Vanilla: `[Component]Wrapper` with `useEffect` to set items/props
- React: None needed (uses React wrapper directly)

#### 3. Preview rendering approach
- React: `<ReactComponent>` direct use
- Vue/Svelte/Vanilla: `<ag-component ref={ref}>` via wrapper

#### 4. Code example syntax differences
- React: Standard JSX with event handlers
- Vue: Template syntax with `@events` and `:props`
- Svelte: HTML with `on:events` and `bind:this`
- Vanilla: Plain HTML + JavaScript event listeners

#### 5. Note card pattern (IMPORTANT)
- **Single blue note card** at top after Import section
- Explains wrapper vs web component approach
- Includes CodeSandbox link with button
- NO placeholder text - must render actual components in previews

**⛔ STOP - wait for my verification before Phase 2.**

---

## PHASE 2 - REACT IMPLEMENTATION

Create `[Component]React.tsx` following exact `ButtonReact.tsx` pattern:

### Structure:
1. Import `ReactComponent` from `agnosticui-core/react`
2. Import icons/assets needed
3. Installation section
4. Import section
5. Code examples with:
   - Real component previews (not placeholders)
   - Proper `CodeExample` component usage
   - Language hints for syntax highlighting

### Verification:
- [ ] Actual components render in preview sections
- [ ] Syntax highlighting works (language prop set correctly)
- [ ] All props demonstrated with examples
- [ ] Event handlers shown with state management

**⛔ STOP - wait for my review before Phase 3.**

---

## PHASE 3 - VUE IMPLEMENTATION

Create `[Component]Vue.tsx` following exact `ButtonVue.tsx` pattern:

### Critical Requirements:
1. **Import:** `import "agnosticui-core";` (loads web component)
2. **Helper Component:** Create `[Component]Wrapper` with:
   ```typescript
   const ref = useRef<HTMLElement>(null);
   useEffect(() => {
     const element = ref.current;
     if (!element) return;

     // Set items/props on element
     (element as any).items = items;

     // Set attributes
     Object.entries(props).forEach(([key, value]) => {
       // Handle boolean/string attributes
     });
   }, [items, props]);

   return <ag-[component] ref={ref}></ag-[component]>;
   ```
3. **Blue Note Card:** Single card after imports with:
   - Explanation of Vue wrapper around web component
   - CodeSandbox button (blue, with SVG icon)
4. **Previews:** Use `<[Component]Wrapper>` to render actual components
5. **Code Examples:** Show Vue template syntax with proper language hints

**⛔ STOP - wait for my review before Phase 4.**

---

## PHASE 4 - SVELTE IMPLEMENTATION

Create `[Component]Svelte.tsx` following exact `ButtonSvelte.tsx` pattern:

### Critical Requirements:
1. **Import:** `import "agnosticui-core";` (loads web component)
2. **Helper Component:** Create `[Component]Wrapper` (same as Vue pattern)
3. **Blue Note Card:** Single card after imports with:
   - Explanation of Svelte working directly with web component
   - NO CodeSandbox link (Svelte uses vanilla web component)
4. **Previews:** Use `<[Component]Wrapper>` to render actual components
5. **Code Examples:** Show Svelte `bind:this` syntax with proper language hints

**⛔ STOP - wait for my review before Phase 5.**

---

## PHASE 5 - VANILLA IMPLEMENTATION

Create `[Component]Vanilla.tsx` following exact `ButtonVanilla.tsx` pattern:

### Critical Requirements:
1. **Import:** `import "agnosticui-core";` (loads web component)
2. **Helper Component:** Create `[Component]Wrapper` (same as Vue/Svelte pattern)
3. **Blue Note Card:** Single card after imports (no CodeSandbox link)
4. **Previews:** Use `<[Component]Wrapper>` to render actual components
5. **Code Examples:** Show vanilla JavaScript with DOM manipulation

---

## PHASE 6 - ROUTING & INTEGRATION

### 1. Update Index.tsx
Add component to the components list (alphabetically):
```typescript
{
  name: "[Component]",
  path: "[component]",
  description: "[Brief description]"
}
```

### 2. Update App.tsx
Add routes for all frameworks:
```typescript
import [Component]React from "./pages/[component]/[Component]React";
import [Component]Vue from "./pages/[component]/[Component]Vue";
import [Component]Svelte from "./pages/[component]/[Component]Svelte";
import [Component]Vanilla from "./pages/[component]/[Component]Vanilla";

// In routes:
<Route path="/[component]/react" element={<[Component]React />} />
<Route path="/[component]/vue" element={<[Component]Vue />} />
<Route path="/[component]/svelte" element={<[Component]Svelte />} />
<Route path="/[component]/vanilla" element={<[Component]Vanilla />} />
```

### 3. Test build
```bash
cd showcase && npm run build
```

**⛔ STOP - verify build succeeds before Phase 7.**

---

## PHASE 7 - COMMIT

Create commit with all showcase files:
```bash
git add showcase/src/pages/[component] showcase/src/pages/Index.tsx showcase/src/App.tsx
git commit -m "feat(showcase): add [Component] component showcase pages"
```

---

## VERIFICATION CHECKLIST

Before marking complete, verify:

### All Frameworks
- [ ] Actual components render in ALL preview sections (no placeholder text)
- [ ] Syntax highlighting works (language prop set correctly)
- [ ] Blue note cards appear correctly (1 per page, after imports)
- [ ] CodeSandbox links work (Vue only)

### Framework-Specific
- [ ] React: Uses `ReactComponent` wrapper directly
- [ ] Vue: Has `[Component]Wrapper`, imports 'agnosticui-core', shows Vue syntax
- [ ] Svelte: Has `[Component]Wrapper`, imports 'agnosticui-core', shows bind:this syntax
- [ ] Vanilla: Has `[Component]Wrapper`, imports 'agnosticui-core', shows DOM manipulation

### Integration
- [ ] Component listed in Index.tsx (alphabetically)
- [ ] All 4 routes added to App.tsx
- [ ] Build succeeds (`npm run build`)
- [ ] All pages accessible via routing

---

## Common Pitfalls to Avoid

❌ **DON'T:**
- Create Vue/Svelte pages without reading their reference implementations
- Use placeholder text instead of actual component renders
- Forget to import 'agnosticui-core' for Vue/Svelte/Vanilla
- Create wrapper components for React (uses React wrapper directly)
- Add multiple note cards or CodeSandbox sections

✅ **DO:**
- Read ALL 8 reference files completely before coding
- Create helper wrappers for Vue/Svelte/Vanilla (not React)
- Import 'agnosticui-core' to load web components
- Render actual components in all preview sections
- Use single blue note card after imports

---

## Usage Example

```markdown
Create showcase pages for the Card component following:
/Users/roblevin/workspace/opensource/agnosticui/v2/docs/SHOWCASE_TEMPLATE.md

Component-specific notes:
- Card has elevation variants to demonstrate
- Show both clickable and non-clickable card examples
- CodeSandbox: https://codesandbox.io/s/agnosticui-vue-card-demo
```

---

## Template Variables

Replace these placeholders when using:

- `[Component]` → Actual component name (PascalCase) - e.g., `Card`
- `[component]` → Actual component name (kebab-case) - e.g., `card`
- `[Brief description]` → Short component description for Index.tsx
