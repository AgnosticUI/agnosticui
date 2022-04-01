# Buttons

Everyone knows buttons are the life of the party :man_dancing:

<div class="mbe24"></div>

## Usage

To use AgnosticUI as a CSS only framework, you can simply link to the `common.min.css` and `components.min.css` files. These can be served from a CDN (as you'll see in the following example), or relative to your project.

## Buttons

<div class="flex flex-wrap mbs24 mbe24">
  <button class="btn">Go</button>
  <span class="mie16"></span>
  <button class="btn btn-primary">Primary</button>
  <span class="mie16"></span>
  <button class="btn btn-primary btn-bordered">Bordered</button>
</div>
<div class="flex flex-wrap mbe24">
  <button class="btn btn-primary btn-rounded">Rounded</button>
  <span class="mie16"></span>
  <button class="btn btn-raised">Raised</button>
</div>
<div class="flex flex-wrap mbe24">
  <button class="btn btn-blank">Blank</button>
  <span class="mie16"></span>
  <button class="btn btn-link">Button Link</button>
</div>
<div class="flex flex-wrap">
  <button class="btn btn-small">Small</button>
  <span class="mie16"></span>
  <button class="btn btn-large">Large</button>
</div>

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
  <button class="btn">Go</button>
  <span class="mie16"></span>
  <button class="btn btn-primary">Primary</button>
  <span class="mie16"></span>
  <button class="btn btn-primary btn-bordered">Bordered</button>
  <span class="mie16"></span>
  <button class="btn btn-primary btn-rounded">Rounded</button>
  <span class="mie16"></span>
  <button class="btn btn-raised">Raised</button>
  <span class="mie16"></span>
  <button class="btn btn-link">Button Links</button>
  <span class="mie16"></span>
  <button class="btn btn-blank">Button Blank</button>
  <span class="mie16"></span>
  <!-- ...codes omitted for brevity -->
```
</details>
