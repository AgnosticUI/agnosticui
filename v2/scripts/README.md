# 🚀 AgnosticUI v2 Simplified Testing Scripts

> **Dead-simple Astro Playground + Lib development environment**

## Simplified Architecture (2025)

AgnosticUI v2 has dramatically simplified to focus on what matters:

1. **🎨 Astro Playground** - Primary development and testing environment
2. **📦 Lib (agnostic/lib)** - Core component library (almost headless)
3. **⚡ CLI** - ONLY for simple component ejection (file copy)

**Gone:** Complex CLI generation, framework templates, npm link complications
**Focus:** Component quality, accessibility, simple ejection workflow

## 🎯 Quick Start

```bash
# Setup the development environment
./scripts/setup-testing-playground.sh

# Start development
cd playground
npm run dev

# Visit playground
open http://localhost:4321
```

## 📂 Available Scripts

| Script | Purpose | Usage |
|--------|---------|-------|
| **setup-testing-playground.sh** | Sets up Astro + Lib development | `./scripts/setup-testing-playground.sh` |
| **cleanup-testing-playground.sh** | Cleans up npm links for fresh start | `./scripts/cleanup-testing-playground.sh` |
| **README.md** | This documentation | 📖 |

## 🛠️ Development Workflow

### 1. Setup Development Environment
```bash
./scripts/setup-testing-playground.sh
```

**What it does:**
- ✅ Verifies lib package is built
- ✅ Sets up npm link from lib to playground
- ✅ Installs playground dependencies
- ✅ Ready for component development

### 2. Component Development Process
```bash
# Edit components in lib
vim agnostic/lib/src/components/NewComponent/core/_NewComponent.ts

# Test in playground (hot reload)
# Visit http://localhost:4321

# Test component ejection
agui eject new-component ./test-destination/
```

### 3. Clean Reset (When Needed)
```bash
./scripts/cleanup-testing-playground.sh
./scripts/setup-testing-playground.sh
```

## 🎨 Playground Structure

```
playground/
├── src/
│   ├── components/          # Component playgrounds
│   │   ├── Accordion/
│   │   └── Tooltip/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro      # Component overview
│   │   ├── accordion.astro  # Accordion demos
│   │   └── tooltip.astro    # Tooltip demos
│   └── styles/
│       └── agnostic-shared.css
├── astro.config.mjs
└── package.json
```

## 🧩 Component Development Pattern

### 1. **Almost Headless Philosophy**
Components provide **functionality and accessibility** only:

```css
/* ✅ FUNCTIONAL CSS (Required) */
:host { display: block; }
.content { display: none; }
:host([open]) .content { display: block; }

/* ❌ VISUAL CSS (Forbidden) */
/* color, background, padding, margin, fonts, etc. */
```

### 2. **Astro Playground Testing**
- Create playground pages for each component
- Test keyboard navigation and accessibility
- Verify component works with external styling
- Hot reload shows changes instantly

### 3. **Simple Ejection Testing**
```bash
# Test that components can be ejected cleanly
agui eject accordion ./test-project/
cd test-project/
# Files copied as-is, ready for user styling
```

## 📋 Testing Checklist

### Core Functionality ✅
- [ ] Component renders without errors
- [ ] Interactive features work (click, keyboard)
- [ ] ARIA attributes present and correct
- [ ] Keyboard navigation functions (Tab, Arrow keys, Space, Enter)
- [ ] Screen reader compatibility verified

### Ejection Testing ✅
- [ ] `agui eject <component>` copies files successfully
- [ ] Ejected files work independently
- [ ] No complex dependencies or transformations
- [ ] Users can style components however they want

### Playground Integration ✅
- [ ] Components work in Astro pages
- [ ] Hot reload functions correctly
- [ ] No console errors or TypeScript warnings
- [ ] Multiple components can coexist

## 🔄 Simplified Benefits

### For Development
- **⚡ Faster iteration** - No complex CLI to maintain
- **🎯 Clearer focus** - Astro playground + lib quality
- **💪 Less brittle** - No npm link complications
- **🧪 Easier testing** - Single environment setup

### For Users
- **📦 Simple installation** - `npm install agnosticui`
- **🔓 No lock-in** - Get source files, modify as needed
- **📋 Predictable ejection** - Just file copying
- **🌐 Framework agnostic** - Use source files anywhere

### For Maintenance
- **🎉 Dramatically simpler** - 90% less complexity
- **🐛 Fewer edge cases** - No framework-specific logic
- **🔍 Easier debugging** - Straightforward operations
- **⚡ Sustainable** - Focus energy on component quality

## 🎯 Component Sprint Workflow

### Phase 1: Development (Astro Playground)
1. **Spec-driven** - Start with component `spec.md`
2. **Build in Lib** - Create/modify in `agnostic/lib/src/components/`
3. **Test in Playground** - View/test in Astro at localhost:4321
4. **Accessibility** - Verify ALL WAI-ARIA APG requirements
5. **Hot reload** - Iterate rapidly with instant feedback

### Phase 2: Ejection Testing
1. **Test ejection** - `agui eject <component> ./test-dir/`
2. **Verify files** - Components copy cleanly without transformation
3. **User workflow** - Ensure ejected files work independently
4. **Documentation** - Update component documentation

### Phase 3: Production Ready
1. **Final accessibility audit** - Zero violations
2. **Cross-browser testing** - Verify compatibility
3. **Performance check** - Ensure optimal loading
4. **Component complete** - Ready for V1 parity

## 🚨 Troubleshooting

### Setup Script Issues
```bash
# Verify lib is built
ls -la agnostic/lib/dist/

# Rebuild if needed
cd agnostic/lib && npm run build

# Re-run setup
./scripts/setup-testing-playground.sh
```

### Link Problems
```bash
# Clean reset
./scripts/cleanup-testing-playground.sh
./scripts/setup-testing-playground.sh

# Verify links
ls -la playground/node_modules/agnosticui-core
```

### Playground Not Loading
```bash
cd playground
npm install  # Ensure dependencies installed
npm run dev  # Start development server
```

## 📊 Success Metrics

**✅ Setup Complete When:**
- Astro playground loads at localhost:4321
- Components hot reload on changes
- No console errors or TypeScript warnings
- `agui eject <component>` works correctly

**✅ Component Complete When:**
- Full WAI-ARIA APG compliance verified
- Keyboard navigation works perfectly
- Component ejects cleanly via CLI
- Almost headless (functional CSS only)
- Thoroughly tested in playground

## 🎯 End Goal

**V1 Parity** with superior accessibility, AI-first architecture, and dead-simple ejection workflow.

**Simple. Fast. Maintainable.**

---

Ready to start component development? Run the setup script and begin building! 🚀