# Empty States

The `EmptyState` component (also known as: zero state, first-time-user-experience, or blank state) is used when a table, list, search result, etc., has no data to be displayed. This often occurs during the first use of a product or feature, and provides an opportunity to communicate its benefits and guidance on what to do next. 

<div class="mbs24"></div>

<div class="empty empty-rounded empty-bordered">
    <svg xmlns="http://www.w3.org/2000/svg" fill="#999" width="40" height="40" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z" />
    </svg>
    <div class="h4">No connections yet</div>
    <p class="mbe16" style="color: var(--agnostic-gray-dark);">
        Click below to add some friends</p>
    <div class="empty-actions">
        <button class="btn btn-primary">Invite friends</button>
    </div>
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
<div class="empty empty-rounded empty-bordered">
  <svg xmlns="http://www.w3.org/2000/svg" fill="#999" width="40" height="40" viewBox="0 0 24 24">
      <path fill-rule="evenodd" d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z" />
  </svg>
  <div class="h4">No connections yet</div>
  <p class="mbe16" style="color: var(--agnostic-gray-dark);">
    Click below to add some friends</p>
  <div class="empty-actions">
    <button class="btn btn-primary">Invite friends</button>
  </div>
</div>
```
</details>
