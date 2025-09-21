# 🔒 Accordion Core - Immutable Canonical Implementation

⚠️ **WARNING: DO NOT MODIFY FILES IN THIS DIRECTORY** ⚠️

This directory contains the **immutable canonical implementation** of the Accordion component. These files serve as the stable, upgrade-safe foundation for all Accordion functionality.

## Directory Contents

- **`_Accordion.ts`** - The canonical Accordion component implementation
- **`_Accordion.spec.ts`** - Canonical test suite ensuring API stability
- **`README.md`** - This documentation file

## Why These Files Are Immutable

### 🛡️ Upgrade Safety
- **Guaranteed compatibility** across AgnosticUI version updates
- **No breaking changes** to existing functionality
- **Automatic migration** of new features without user intervention

### 🔧 AI-Safe Architecture
- AI assistants should **never modify** these files
- Extensions should be created in `/extensions/` directory
- Customizations should use `/Accordion.ts` (mutable override version)

### 📦 Version Stability
- All files include version metadata for upgrade tracking
- API compatibility is maintained within major versions
- Behavioral consistency across patch and minor updates

## How to Extend or Customize

### ✅ **Safe Extension Methods:**

1. **Use the mutable override**: Edit `/Accordion.ts` in the parent directory
2. **Create extensions**: Add files to `/extensions/` directory  
3. **Add custom styles**: Use `/styles/` for production or `/experiments/` for experiments
4. **Framework integration**: Use `/react/`, `/vue/`, etc.

### ❌ **Dangerous Actions (DO NOT DO):**

- ❌ Editing `_Accordion.ts` directly
- ❌ Modifying `_Accordion.spec.ts` 
- ❌ Deleting or renaming files in this directory
- ❌ Changing import paths for canonical files

## Architecture Diagram

```
📁 Accordion/
├── 🔒 core/              ← You are here - IMMUTABLE
│   ├── _Accordion.ts     ← Canonical implementation  
│   └── _Accordion.spec.ts← Canonical tests
├── ✏️  Accordion.ts      ← Mutable override version
├── 🔧 helpers/           ← Utility functions (safe to modify)
├── 🎨 extensions/        ← AI-safe extensions
├── 💅 styles/            ← Production styling
└── 🧪 experiments/       ← Experimental styling
```

## Getting Started with Safe Customization

If you need to customize the Accordion behavior:

1. **Start with the mutable version**: `/Accordion.ts`
2. **Import from core**: `import { AccordionItem } from './core/_Accordion'`
3. **Extend safely**: Create your own class that extends the canonical one
4. **Use composition**: Layer your customizations over the canonical implementation

## Version Information

- **Canonical Version**: 2.0.0-stable
- **API Compatibility**: 2.x
- **Last Updated**: 2025-09-08

## Questions or Issues?

If you need to modify core behavior:
1. Consider if your changes can be made in the mutable override layer
2. Create an extension in `/extensions/` directory
3. Request a new canonical feature through the proper channels

**Remember**: The core is designed to be extended, not modified! 🚀