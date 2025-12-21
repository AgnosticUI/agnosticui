## AgnosticUI Breadcrumb Component Template

The Handlebars template defines three breadcrumb variations with progressive complexity:

### Single Level Breadcrumb
```handlebars
<nav aria-label="breadcrumbs">
  <ol class="{{modifiers}}">
    <li class="breadcrumb-item active" aria-current="page">{{link1}}</li>
  </ol>
</nav>
```

### Two Level Breadcrumb
```handlebars
<nav aria-label="breadcrumbs">
  <ol class="{{modifiers}}">
    <li class="breadcrumb-item"><a href="#">{{link1}}</a></li>
    <li class="breadcrumb-item active" aria-current="page">{{link2}}</li>
  </ol>
</nav>
```

### Three Level Breadcrumb
```handlebars
<nav aria-label="breadcrumbs">
  <ol class="{{modifiers}}">
    <li class="breadcrumb-item"><a href="#">{{link1}}</a></li>
    <li class="breadcrumb-item"><a href="#">{{link2}}</a></li>
    <li class="breadcrumb-item active" aria-current="page">{{link3}}</li>
  </ol>
</nav>
```

Key features:
- Uses semantic `<nav>` and `<ol>` elements
- Supports dynamic modifiers via `{{modifiers}}`
- Configurable link text via `{{link1}}`, `{{link2}}`, `{{link3}}`
- Accessibility attributes like `aria-label` and `aria-current`
- Last item marked as active with special class