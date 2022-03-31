# Loaders

The `Loader` component is used to assure a user that content is being loaded — typically, when wait times are unknown due to an asynchronous data fetch or render cycle.

<div class="mbs24"></div>

## Usage

To use AgnosticUI as a CSS only framework, you can simply link to the `common.min.css` and `components.min.css` files. These can be served from a CDN (as you'll see in the following example), or relative to your project.

### Loading indicators

<p>When <code>aria-busy</code> is set to false, these will have zero opacity.
    We can use JavaScript to toggle the attribute to aria-busy="true" which will
    kick in CSS to set the corresponding opacity to 100%. For findability I have
    artificially set these to true but try using devtools and setting to false.</p>

<p class="mbs24 mbe24">Loading indicator (small)</p>
<div class="loader loader-small" role="status" aria-live="polite" aria-busy="true">
    <span class="screenreader-only">Loading...</span>
</div>

<div class="mbs24 mbe24"></div>

<p class="mbs24 mbe24">Loading indicator (default)</p>
<div class="loader" role="status" aria-live="polite" aria-busy="true">
    <span class="screenreader-only">Loading...</span>
</div>

<div class="mbs24 mbe24"></div>

<p class="mbs24 mbe24">Loading indicator (large)</p>
<div class="loader loader-large" role="status" aria-live="polite" aria-busy="true">
    <span class="screenreader-only">Loading...</span>
</div>

<p class="mbs16 mbe24">You can override the spinner color by setting the <code>--agnostic-loading-color</code>
    I've inlined it here for brevity but you can define it in your root definitions as well.</p>
<div style="--agnostic-loading-color: steelblue;" class="loader" role="status" aria-live="polite" aria-busy="true">
    <span class="screenreader-only">Loading...</span>
</div>

### Spinners

<p class="mbs16 mbe24">For manual testing, go ahead and devtools find one of the visually
    hidden spinners below, and change the aria-busy of the spinner to true to see it appear
    (there are 3 hidden spinners below; small, default, and large. Can you find 'em?)</p>

<div class="spinner spinner-small" role="status" aria-live="polite" aria-busy="false">
    <span class="screenreader-only">Loading...</span>
</div>

<div class="spinner" role="status" aria-live="polite" aria-busy="false">
    <span class="screenreader-only">Loading...</span>
</div>

<div class="spinner spinner-large" role="status" aria-live="polite" aria-busy="false">
    <span class="screenreader-only">Loading...</span>
</div>

<p class="mbs16 mbe24">I've set the next couple of spinners to <code>aria-busy="true"</code> for discoverability's sake :-)</p>
<div class="spinner spinner-xlarge" role="status" aria-live="polite" aria-busy="true">
    <span class="screenreader-only">Loading...</span>
</div>

<p class="mbs16 mbe24">You can override the spinner color by setting the <code>--agnostic-spinner-color</code>
    I've inlined it here for brevity but you can define it in your root definitions as well.</p>
<div style="--agnostic-spinner-color: salmon;" class="spinner spinner-xlarge" role="status" aria-live="polite" aria-busy="true">
    <span class="screenreader-only">Loading...</span>
</div>

```html
<p class="mbs24 mbe24">Loading indicators</p>
<div class="loader" role="status" aria-live="polite" aria-busy="true">
    <span class="screenreader-only">Loading...</span>
</div>
<div class="mbs24 mbe24"></div>
<p class="mbs24 mbe24">Loading indicator (large)</p>
<div class="loader loader-large" role="status" aria-live="polite" aria-busy="true">
    <span class="screenreader-only">Loading...</span>
</div>

<p class="mbs24 mbe24">Spinners</p>
<div class="spinner spinner-xlarge" role="status" aria-live="polite" aria-busy="true">
    <span class="screenreader-only">Loading...</span>
</div>
<p class="mbs16 mbe24">You can override the spinner color by setting the <code>--agnostic-spinner-color</code> I've inlined it here for brevity but you can define it in your root definitions as well.</p>
<div style="--agnostic-spinner-color: salmon;" class="spinner spinner-xlarge" role="status" aria-live="polite" aria-busy="true">
    <span class="screenreader-only">Loading...</span>
</div>
```
