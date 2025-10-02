# AgnosticUI v2 – Action Plan

## 🎯 Mission
AI-ready, minimalist & highly themeable UI library with APG-driven accessibility.

**Architecture:**
- **theme-registry/** - Single source of truth for design tokens (Style Dictionary builds → lib)
- **lib/** - Core component library (Lit web components, consumes tokens from theme-registry)
- **showcase/** - React-based development/testing environment (consumes lib via npm link)

**Token Flow:** `theme-registry` (build) → `lib/src/tokens/` → `showcase` (via agnosticui-core). Always update theme-registry first, never hardcode tokens in components.

---

## 📊 Current Status

### Pivot: Astro Playground → React Showcase
**Why?** Complex components (Tabs, Menu) required more robust framework integration. Astro playground deprecated in favor of full React showcase with multi-framework support.

### Component Status

**✅ Full Cycle Complete:**
- **Button** - Core refactored, showcase integrated, all framework demos working

**🔄 Core Complete (needs full cycle refactor):**
- Accordion, Input, Tooltip, Dialog, Toggle, IconButton, Tabs, Menu, Breadcrumb

---

## 🔁 Full Component Cycle (Button Pattern)

### Phase 1: Core Component Refactor ✅
1. Update `lib/src/components/Button/core/_Button.ts`
2. Ensure design token integration (`--ag-*` tokens)
3. Verify all tests passing
4. Update framework wrappers (React/Vue/Svelte)

### Phase 2: Showcase Integration ✅
1. Create showcase page in `showcase/src/pages/button/`
2. Implement multi-framework demos:
   - **ButtonReact.tsx** - Direct React wrapper usage
   - **ButtonVanilla.tsx** - Web component demos
   - **ButtonVue.tsx** - Vue syntax examples + CodeSandbox links
   - **ButtonSvelte.tsx** - Svelte syntax examples + CodeSandbox links
3. Add comprehensive code examples with copy-to-clipboard
4. Visual state demonstrations (disabled, variants, sizes, etc.)

### Phase 3: Consumption Verification ⏳ NEXT
1. Run `scripts/setup-testing-playground.sh`
2. Simulate `npm install agnosticui-core` consumption
3. Verify component works in fresh environment
4. Test all framework integrations

### Phase 4: Cleanup & Migration (Ongoing)
- Replace `@radix-ui/*` dependencies with AgnosticUI equivalents
- Remove loveable-generated dependencies
- Prune unused showcase dependencies

---

## 🎯 Immediate Next Steps

### 1. Complete Button Full Cycle ⚡ PRIORITY
- [ ] Run `scripts/setup-testing-playground.sh`
- [ ] Test Button in simulated consumer environment
- [ ] Verify all framework wrappers work correctly
- [ ] Document any issues/fixes needed

### 2. Apply Button Pattern to All Components
**Order of Priority:**
1. **Accordion** - High complexity, commonly used
2. **Input** - Foundation component, most tests
3. **Tooltip** - Simple, good next candidate
4. **Dialog** - Complex but high value
5. **Toggle** - Medium complexity
6. **IconButton** - Related to Button
7. **Tabs** - Complex (reason for showcase pivot)
8. **Menu** - Complex (reason for showcase pivot)
9. **Breadcrumb** - Simpler, lower priority

**For each component:**
- [ ] Core refactor (design tokens, minimalist & themeable)
- [ ] Showcase page with all framework demos
- [ ] Consumption verification via setup script
- [ ] Update package.json to remove equivalent @radix-ui dependency

### 3. Dependency Cleanup
- [ ] Identify all `@radix-ui/*` packages in `showcase/package.json`
- [ ] Map to AgnosticUI equivalents
- [ ] Remove after AgnosticUI version integrated
- [ ] Remove loveable-specific dependencies:
  - [ ] Review `@hookform/*` usage
  - [ ] Review `@tanstack/react-query` usage
  - [ ] Review `cmdk`, `vaul`, `sonner`, etc.

---

## 🛠️ Per-Component Workflow

### 1. Core Implementation
- Update `_Component.ts` with design token integration
- Ensure "minimalist & highly themeable" philosophy
- All tests passing
- Framework wrappers updated

### 2. Showcase Integration
- Create component showcase page
- Multi-framework demos (React/Vanilla/Vue/Svelte)
- Comprehensive code examples
- Visual state demonstrations

### 3. Consumption Verification
- Run setup-testing-playground.sh
- Test npm install simulation
- Verify framework integrations

### 4. Documentation
- Update component spec.md
- Add usage examples
- APG compliance checklist

### 5. Dependency Removal
- Remove equivalent @radix-ui package (if exists)
- Update imports in showcase
- Test all pages still work

---

## 📦 Success Criteria

**Component is "Done" when:**
- ✅ Core refactored with design tokens
- ✅ All tests passing
- ✅ Showcase page with 4 framework demos
- ✅ Consumption verification passed
- ✅ Equivalent @radix-ui dependency removed (if applicable)
- ✅ Documentation updated

---

## 🎮 Development Environment

**Primary:** `showcase/` (React + Vite)
- Multi-framework component demonstrations
- Live development environment
- Design token showcase
- Comprehensive code examples

**Testing:** `scripts/setup-testing-playground.sh`
- Simulates npm install consumption
- Verifies package exports work correctly
- Tests framework integrations in isolation
