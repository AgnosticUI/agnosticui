# Alerts

Alerts provide contextual notifications or messages with [timely information](https://www.w3.org/TR/wai-aria-practices/#alert).

<div class="mbe24"></div>

## Usage

To use AgnosticUI as a CSS only framework, you can simply link to the `common.min.css` and `components.min.css` files. These can be served from a CDN (as you'll see in the following example), or relative to your project.

## Alert
<div class="alert" role="alert">
  <p>Alert message with no icon</p>
</div>
<div class="mbe16"></div>
<div class="alert" role="alert">
  <svg class="alert-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24">
    <path d="M0 0h24v24H0z"
          fill="none" />
    <path fill="currentColor"
          d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
  </svg>
  <p>Alert messages should be timely and concise.</p>
</div>
<div class="mbe16"></div>
<div class="alert alert-border-left" role="alert">
  <svg class="alert-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24">
    <path d="M0 0h24v24H0z"
          fill="none" />
    <path fill="currentColor"
          d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
  </svg>
  <p>Alert with border on the left</p>
</div>
<div class="mbe16"></div>
<div class="alert alert-dark" role="alert">
  <svg class="alert-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24">
    <path d="M0 0h24v24H0z"
          fill="none" />
    <path fill="currentColor"
          d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
  </svg>
  <p>Alert with dark background</p>
</div>
<div class="mbe16"></div>
<div class="alert alert-info" role="alert">
  <svg class="alert-icon alert-info-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24">
    <path d="M0 0h24v24H0z"
          fill="none" />
    <path fill="currentColor"
          d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
  </svg>
  <p>Alert info</p>
</div>
<div class="mbe16"></div>
<div class="alert alert-success" role="alert">
  <svg class="alert-icon alert-success-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24">
    <path d="M0 0h24v24H0z"
          fill="none" />
    <path fill="currentColor"
          d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
  </svg>
  <p>Alert success</p>
</div>
<div class="mbe16"></div>
<div class="alert alert-warning" role="alert">
  <svg class="alert-icon alert-warning-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24">
    <path d="M0 0h24v24H0z"
          fill="none" />
    <path fill="currentColor"
          d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
  </svg>
  <p>Alert warning</p>
</div>
<div class="mbe16"></div>
<div class="alert alert-error" role="alert">
  <svg class="alert-icon alert-error-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24">
    <path d="M0 0h24v24H0z"
          fill="none" />
    <path fill="currentColor"
          d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
  </svg>
  <p>Alert error</p>
</div>

```html
<head>
  <!-- ...codes omitted for brevity -->
  <link rel="stylesheet" type="text/css" href="https://unpkg.com/agnostic-css@1.0.12/public/css-dist/common.min.css">
  <link rel="stylesheet" type="text/css" href="https://unpkg.com/agnostic-css@1.0.12/public/css-dist/components.min.css">
</head>
<body>
<body>
  <div class="container">
    <div class="alert" role="alert">
      <p>Alert message with no icon</p>
    </div>
    <div class="mbe16"></div>
    <div class="alert" role="alert">
      <svg class="alert-icon"
           xmlns="http://www.w3.org/2000/svg"
           height="24"
           viewBox="0 0 24 24"
           width="24">
        <path d="M0 0h24v24H0z"
              fill="none" />
        <path fill="currentColor"
              d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
      </svg>
      <p>Alert messages should be timely and concise.</p>
    </div>
    <div class="mbe16"></div>
    <div class="alert alert-border-left" role="alert">
      <svg class="alert-icon"
           xmlns="http://www.w3.org/2000/svg"
           height="24"
           viewBox="0 0 24 24"
           width="24">
        <path d="M0 0h24v24H0z"
              fill="none" />
        <path fill="currentColor"
              d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
      </svg>
      <p>Alert with border on the left</p>
    </div>
    <div class="mbe16"></div>
    <div class="alert alert-dark" role="alert">
      <svg class="alert-icon"
           xmlns="http://www.w3.org/2000/svg"
           height="24"
           viewBox="0 0 24 24"
           width="24">
        <path d="M0 0h24v24H0z"
              fill="none" />
        <path fill="currentColor"
              d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
      </svg>
      <p>Alert with dark background</p>
    </div>
    <div class="mbe16"></div>
    <div class="alert alert-info" role="alert">
      <svg class="alert-icon alert-info-icon"
           xmlns="http://www.w3.org/2000/svg"
           height="24"
           viewBox="0 0 24 24"
           width="24">
        <path d="M0 0h24v24H0z"
              fill="none" />
        <path fill="currentColor"
              d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
      </svg>
      <p>Alert info</p>
    </div>
    <div class="mbe16"></div>
    <div class="alert alert-success" role="alert">
      <svg class="alert-icon alert-success-icon"
           xmlns="http://www.w3.org/2000/svg"
           height="24"
           viewBox="0 0 24 24"
           width="24">
        <path d="M0 0h24v24H0z"
              fill="none" />
        <path fill="currentColor"
              d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
      </svg>
      <p>Alert success</p>
    </div>
    <div class="mbe16"></div>
    <div class="alert alert-warning" role="alert">
      <svg class="alert-icon alert-warning-icon"
           xmlns="http://www.w3.org/2000/svg"
           height="24"
           viewBox="0 0 24 24"
           width="24">
        <path d="M0 0h24v24H0z"
              fill="none" />
        <path fill="currentColor"
              d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
      </svg>
      <p>Alert warning</p>
    </div>
    <div class="mbe16"></div>
    <div class="alert alert-error" role="alert">
      <svg class="alert-icon alert-error-icon"
           xmlns="http://www.w3.org/2000/svg"
           height="24"
           viewBox="0 0 24 24"
           width="24">
        <path d="M0 0h24v24H0z"
              fill="none" />
        <path fill="currentColor"
              d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
      </svg>
      <p>Alert error</p>
    </div>
  </div>
  <!-- ...codes omitted for brevity -->
```
