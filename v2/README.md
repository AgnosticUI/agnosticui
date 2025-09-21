# AgnosticUI v2 - AI-Ready Component Library

🚀 **Want to play with the Accordion component right now?** 👇

## ▶️ INSTANT PLAYGROUND

```bash
npm install
npm run dev
```

Visit: **http://localhost:4321/accordion** 

That's it! Start playing with live Accordion components.

---

## 🎯 What Is This?

AgnosticUI v2 is an **almost headless** component library built for AI-ready development. Components provide functionality with minimal styling, so you can eject and customize them however you want.

### 🏗️ Core Philosophy

- **🔒 Immutable Core** - Upgrade-safe canonical implementations
- **✏️ AI-Ready** - Safe for AI assistants to modify and extend  
- **🎨 Almost Headless** - Functional CSS only, bring your own styles
- **⚛️ Framework Agnostic** - Works with React, Vue, vanilla JS, etc.

## 🧩 Current Components

### Accordion Component
**Location**: `src/components/Accordion/`

**Quick example**:
```html
<ag-accordion>
  <ag-accordion-item>
    <span slot="header">Click me!</span>
    <div slot="content">I expand and collapse!</div>
  </ag-accordion-item>
</ag-accordion>
```

**Architecture**:
- `core/` - Immutable implementation (never modify)
- `helpers/` - Utilities you can modify freely
- `Accordion.ts` - AI-extensible override version
- `extensions/` - Add-on enhancements
- `styles/` - Production styling tiers
- `experiments/` - Experimental AI styling

## 🛠️ Development Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start dev server → http://localhost:4321 |
| `npm run build` | Build for production |
| `npm test` | Run all tests |
| `npm run lint` | Check code quality |
| `npm run lint:fix` | Fix auto-fixable issues |

## 🎮 How to Play

### 1. **Modify Existing Components**
Edit `src/components/Accordion/Accordion.ts` - this is the AI-safe extensible version.

### 2. **Add New Styles** 
Create files in `src/components/Accordion/experiments/` for experimental styling.

### 3. **Create Extensions**
Add new features in `src/components/Accordion/extensions/`.

### 4. **Test Your Changes**
Visit `/accordion` page to see your changes live.

## 📁 Project Structure

```
src/
├── components/
│   └── Accordion/           ← Main component
│       ├── core/            ← 🔒 Never modify (upgrade-safe)
│       ├── helpers/         ← 🔧 Safe to modify
│       ├── extensions/      ← 🎨 Add new features here
│       ├── styles/          ← 💅 Production styling
│       └── experiments/     ← 🧪 Experimental styling
├── pages/
│   ├── index.astro         ← Homepage  
│   └── accordion.astro     ← 🎮 Accordion playground
└── utils/                  ← Shared utilities
```

## ⚠️ Important Rules

### ✅ **Safe to Modify:**
- `Accordion.ts` (mutable override)
- `helpers/` directory (utilities)
- `extensions/` directory (add-ons)
- `styles/` and `experiments/` (styling)
- Your own new files

### 🔒 **Never Modify:**
- `core/` directory (canonical implementations)
- Files starting with `_` (like `_Accordion.ts`)

## 🤖 AI Assistant Friendly

This codebase is designed to work great with AI assistants:
- Clear boundaries between mutable/immutable code
- Extensive documentation and examples
- Safe extension patterns
- Comprehensive test coverage

Ready to build something awesome? **Start with `npm run dev`** 🚀