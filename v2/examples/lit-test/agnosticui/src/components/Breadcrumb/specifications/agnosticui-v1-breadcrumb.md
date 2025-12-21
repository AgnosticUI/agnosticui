# AgnosticUI Breadcrumbs Component Documentation

## Overview
The Breadcrumb component is a "wayfinding element that helps make users aware of their current location within an application or website."

## Features
- Supports multiple frameworks: React, Vue 3, Svelte, and Angular (experimental)
- Multiple display types:
  - Default
  - Slash-separated
  - Bullet-separated
  - Arrow-separated

## Usage Examples

### Basic Implementation
```javascript
const routes = [
  { label: "Tennis", url: "#tennis" },
  { label: "Superstars", url: "#tennis-superstars" },
  { label: "Serena Williams", url: "#tennis-superstars-serena" }
];

<Breadcrumb routes={routes} />
```

### Variations
```javascript
// Slash-separated
<Breadcrumb type="slash" routes={routes} />

// Bullet-separated
<Breadcrumb type="bullet" routes={routes} />

// Arrow-separated
<Breadcrumb type="arrow" routes={routes} />
```

### Special Cases
- Single route becomes "link-less"
- Can mix linked and unlinked routes

## Framework-Specific Imports

### React
```javascript
import "agnostic-react/dist/common.min.css";
import { Breadcrumb } from "agnostic-react";
```

### Vue 3
```javascript
import "agnostic-vue/dist/common.min.css";
import { Breadcrumb } from "agnostic-vue";
```

### Svelte
```javascript
import 'agnostic-svelte/css/common.min.css';
import { Breadcrumb } from "agnostic-svelte";
```

### Angular
Requires adding AgnosticUI module and including common styles in `angular.json`

## Development & Testing
- Storybook available for live examples
- Component sources and tests available on GitHub

## Installation
Install via npm for your specific framework (e.g., `agnostic-react`, `agnostic-vue`)