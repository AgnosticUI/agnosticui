# Dialog

AgnosticUI's [Dialog](https://www.w3.org/TR/wai-aria-practices/#dialog_modal) component leverages Kitty Giraudel's [a11y-dialog](https://github.com/KittyGiraudel/a11y-dialog) — an accessible and inclusive dialog component that has been battle tested over several versions to date.

<div class="mbs24"></div>

## Usage

To use AgnosticUI as a CSS only framework, you can simply link to the `common.min.css` and `components.min.css` files. These can be served from a CDN (as you'll see in the following example), or relative to your project.

::: warning
<code>agnostic-css</code> will take care of styling while `a11y-dialog` provides dialog functionality.
:::

## Dialog


<div class="mbs16"></div>

<div class="dialog" id="dialog-css-example" aria-hidden="true" aria-labelledby="dialog-example-title" aria-describedby="dialog-example-description">
  <div class="dialog-overlay" data-a11y-dialog-hide></div>
  <div class="dialog-content" role="document">
    <div class="mbs16 mbe24 mis16 mie16">
      <button data-a11y-dialog-hide class="close-button close-button-large dialog-close" aria-label="Close this dialog window">
        <svg class="close" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M.439 21.44a1.5 1.5 0 0 0 2.122 2.121l9.262-9.261a.25.25 0 0 1 .354 0l9.262 9.263a1.5 1.5 0 1 0 2.122-2.121L14.3 12.177a.25.25 0 0 1 0-.354l9.263-9.262A1.5 1.5 0 0 0 21.439.44L12.177 9.7a.25.25 0 0 1-.354 0L2.561.44A1.5 1.5 0 0 0 .439 2.561L9.7 11.823a.25.25 0 0 1 0 .354Z" />
        </svg>
      </button>
      <h1 id="dialog-example-title">Subscribe to our newsletter</h1>
      <p id="dialog-example-description">
        Fill in the form below to receive our newsletter!
      </p>
      <form class="dialog-form-demo">
        <label class="label" for="email">Email (required)</label>
        <input class="input input-rounded" type="email" name="EMAIL" id="email" placeholder="john.doe@gmail.com" required />
        <button class="btn btn-primary btn-rounded btn-block" type="submit" name="button">Sign up</button>
      </form>
    </div>
  </div>
</div>

<button type="button" class="btn btn-primary btn-bordered" data-a11y-dialog-show="dialog-css-example">
  Open the dialog
</button>

<div class="mbs24"></div>

_Note: You may have to hard reload this page to reinitialize <code>a11y-dialog</code> as Vitepress doesn't appear to rehydrate each component page on each visit._ <pre>¯\\_(ツ)_/¯</pre>

<script>
  // Unfortunately, this won't get reran if user navigates to another Vitepress docs page and comes
  // back. I've let note above that hard-reload may be required ¯\_(ツ)_/¯
  import A11yDialog from 'a11y-dialog'
  if (!import.meta.env.SSR) {
    document.addEventListener('readystatechange', event => {
      if (event.target.readyState === 'complete') {
        setTimeout(() => {
          const container = document.querySelector('#dialog-css-example')
          const dialog = new A11yDialog(container)
        }, 20);
      }
    });
  }
</script>
```html

<head>
  <!-- ...codes omitted for brevity -->
  <link rel="stylesheet" type="text/css" href="https://unpkg.com/agnostic-css@1.0.12/public/css-dist/common.min.css">
  <link rel="stylesheet" type="text/css" href="https://unpkg.com/agnostic-css@1.0.12/public/css-dist/components.min.css">
</head>
<body>
  <!-- ...codes omitted for brevity -->
  <div class="dialog" id="dialog-css-example" aria-hidden="true" aria-labelledby="dialog-example-title" aria-describedby="dialog-example-description">
    <div class="dialog-overlay" data-a11y-dialog-hide></div>
    <div class="dialog-content" role="document">
      <div class="mbs16 mbe24 mis16 mie16">
        <button data-a11y-dialog-hide class="close-button close-button-large dialog-close" aria-label="Close this dialog window">
          <svg class="close" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" d="M.439 21.44a1.5 1.5 0 0 0 2.122 2.121l9.262-9.261a.25.25 0 0 1 .354 0l9.262 9.263a1.5 1.5 0 1 0 2.122-2.121L14.3 12.177a.25.25 0 0 1 0-.354l9.263-9.262A1.5 1.5 0 0 0 21.439.44L12.177 9.7a.25.25 0 0 1-.354 0L2.561.44A1.5 1.5 0 0 0 .439 2.561L9.7 11.823a.25.25 0 0 1 0 .354Z" />
          </svg>
        </button>
        <h1 id="dialog-example-title">Subscribe to our newsletter</h1>
        <p id="dialog-example-description">
          Fill in the form below to receive our newsletter!
        </p>
        <form class="dialog-form-demo">
          <label class="label" for="email">Email (required)</label>
          <input class="input input-rounded" type="email" name="EMAIL" id="email" placeholder="john.doe@gmail.com" required />
          <button class="btn btn-primary btn-rounded btn-block" type="submit" name="button">Sign up</button>
        </form>
      </div>
    </div>
  </div>

  <button type="button" class="btn btn-primary btn-bordered" data-a11y-dialog-show="dialog-css-example">
    Open the dialog
  </button>

  <script>
    import A11yDialog from 'a11y-dialog'
    document.addEventListener('readystatechange', event => {
      if (event.target.readyState === 'complete') {
        const container = document.querySelector('#dialog-css-example')
        const dialog = new A11yDialog(container)
      }
    });
  </script>
  <!-- ...codes omitted for brevity -->
```
