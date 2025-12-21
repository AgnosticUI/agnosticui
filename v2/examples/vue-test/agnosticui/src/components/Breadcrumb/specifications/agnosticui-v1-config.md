# Breadcrumb Component Configuration

## Overview
The breadcrumb configuration defines multiple variants with different styling modifiers.

## Configuration Details

### Base Configuration
```yaml
title: Breadcrumb
collated: true
context:
  link1: Tennis
  link2: Superstars
  link3: Serena Williams
```

### Variants
The component supports four distinct variants:

1. Default Variant
```yaml
- name: default
  context:
    modifiers: breadcrumb
```

2. Bullet Variant
```yaml
- name: bullet
  context:
    modifiers: breadcrumb breadcrumb-bullet
```

3. Arrow Variant
```yaml
- name: arrow
  context:
    modifiers: breadcrumb breadcrumb-arrow
```

4. Slash Variant
```yaml
- name: slash
  context:
    modifiers: breadcrumb breadcrumb-slash
```

## Key Observations
- Supports multiple visual styles through modifier classes
- Provides context with sample navigation links
- Designed to be flexible and customizable across different design requirements