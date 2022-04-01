# Breadcrumbs

The `Breadcrumb` component is a &ldquo;wayfinding&rdquo; element that helps make users aware of their current location within an application or website.

<div class="mbs24"></div>

## Usage

To use AgnosticUI as a CSS only framework, you can simply link to the `common.min.css` and `components.min.css` files. These can be served from a CDN (as you'll see in the following example), or relative to your project.

## Breadcrumbs

<!-- Default -->
<nav aria-label="breadcrumbs">
    <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">Tennis</li>
    </ol>
</nav>

<nav aria-label="breadcrumbs">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Tennis</a></li>
        <li class="breadcrumb-item active" aria-current="page">Superstars</li>
    </ol>
</nav>

<nav aria-label="breadcrumbs">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Tennis</a></li>
        <li class="breadcrumb-item"><a href="#">Superstars</a></li>
        <li class="breadcrumb-item active" aria-current="page">Serena Williams</li>
    </ol>
</nav>

<!-- Bullet -->
<nav aria-label="breadcrumbs">
    <ol class="breadcrumb breadcrumb-bullet">
        <li class="breadcrumb-item active" aria-current="page">Tennis</li>
    </ol>
</nav>

<nav aria-label="breadcrumbs">
    <ol class="breadcrumb breadcrumb-bullet">
        <li class="breadcrumb-item"><a href="#">Tennis</a></li>
        <li class="breadcrumb-item active" aria-current="page">Superstars</li>
    </ol>
</nav>

<nav aria-label="breadcrumbs">
    <ol class="breadcrumb breadcrumb-bullet">
        <li class="breadcrumb-item"><a href="#">Tennis</a></li>
        <li class="breadcrumb-item"><a href="#">Superstars</a></li>
        <li class="breadcrumb-item active" aria-current="page">Serena Williams</li>
    </ol>
</nav>

<!-- Arrow -->
<nav aria-label="breadcrumbs">
    <ol class="breadcrumb breadcrumb-arrow">
        <li class="breadcrumb-item active" aria-current="page">Tennis</li>
    </ol>
</nav>

<nav aria-label="breadcrumbs">
    <ol class="breadcrumb breadcrumb-arrow">
        <li class="breadcrumb-item"><a href="#">Tennis</a></li>
        <li class="breadcrumb-item active" aria-current="page">Superstars</li>
    </ol>
</nav>

<nav aria-label="breadcrumbs">
    <ol class="breadcrumb breadcrumb-arrow">
        <li class="breadcrumb-item"><a href="#">Tennis</a></li>
        <li class="breadcrumb-item"><a href="#">Superstars</a></li>
        <li class="breadcrumb-item active" aria-current="page">Serena Williams</li>
    </ol>
</nav>

<!-- Slash -->
<nav aria-label="breadcrumbs">
    <ol class="breadcrumb breadcrumb-slash">
        <li class="breadcrumb-item active" aria-current="page">Tennis</li>
    </ol>
</nav>

<nav aria-label="breadcrumbs">
    <ol class="breadcrumb breadcrumb-slash">
        <li class="breadcrumb-item"><a href="#">Tennis</a></li>
        <li class="breadcrumb-item active" aria-current="page">Superstars</li>
    </ol>
</nav>

<nav aria-label="breadcrumbs">
    <ol class="breadcrumb breadcrumb-slash">
        <li class="breadcrumb-item"><a href="#">Tennis</a></li>
        <li class="breadcrumb-item"><a href="#">Superstars</a></li>
        <li class="breadcrumb-item active" aria-current="page">Serena Williams</li>
    </ol>
</nav>

<div class="mbe24"></div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<head>
  <!-- ...codes omitted for brevity -->
  <link rel="stylesheet" type="text/css" href="https://unpkg.com/agnostic-css@1.0.12/public/css-dist/common.min.css">
  <link rel="stylesheet" type="text/css" href="https://unpkg.com/agnostic-css@1.0.12/public/css-dist/components.min.css">
</head>
<body>
  <!-- Default -->
  <nav aria-label="breadcrumbs">
      <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Tennis</a></li>
          <li class="breadcrumb-item"><a href="#">Superstars</a></li>
          <li class="breadcrumb-item active" aria-current="page">Serena Williams</li>
      </ol>
  </nav>
  <!-- Bullet -->
  <nav aria-label="breadcrumbs">
      <ol class="breadcrumb breadcrumb-bullet">
          <li class="breadcrumb-item"><a href="#">Tennis</a></li>
          <li class="breadcrumb-item"><a href="#">Superstars</a></li>
          <li class="breadcrumb-item active" aria-current="page">Serena Williams</li>
      </ol>
  </nav>
  <!-- Arrow -->
  <nav aria-label="breadcrumbs">
      <ol class="breadcrumb breadcrumb-arrow">
          <li class="breadcrumb-item"><a href="#">Tennis</a></li>
          <li class="breadcrumb-item"><a href="#">Superstars</a></li>
          <li class="breadcrumb-item active" aria-current="page">Serena Williams</li>
      </ol>
  </nav>
  <!-- Slash -->
  <nav aria-label="breadcrumbs">
      <ol class="breadcrumb breadcrumb-slash">
          <li class="breadcrumb-item"><a href="#">Tennis</a></li>
          <li class="breadcrumb-item"><a href="#">Superstars</a></li>
          <li class="breadcrumb-item active" aria-current="page">Serena Williams</li>
      </ol>
  </nav> 
  <!-- ...codes omitted for brevity -->
```
</details>
