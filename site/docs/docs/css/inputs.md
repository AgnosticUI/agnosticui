# Input

The `Input` component is text field that abstracts HTML5 native `<input>`'s and `<textarea>` elements.

<div class="mbs24"></div>

## Usage

To use AgnosticUI as a CSS only framework, you can simply link to the `common.min.css` and `components.min.css` files. These can be served from a CDN (as you'll see in the following example), or relative to your project.
## Inputs

<form>
  <div class="mbe8">
    <label class="label" for="input-text">Input label</label>
    <input class="input" id="input-text" name="input-text" type="text" />
  </div>
  <div class="mbe8">
    <label class="label" for="input-text-rounded">Input rounded label</label>
    <input class="input input-rounded" id="input-text-rounded" name="input-text-rounded" type="text" />
  </div>
  <div class="mbe8">
    <label class="label" for="input-readonly">Input readonly</label>
    <input readonly class="input" id="input-readonly" name="input-readonly" type="text" value="This value is readonly" />
  </div>
  <div class="mbe8">
    <label class="label" for="input-disabled">Input disabled</label>
    <input class="input" id="input-disabled" name="input-disabled" type="text" disabled />
  </div>
  <div class="mbe8">
    <label class="label label-small" for="input-text-small">Input small label</label>
    <input class="input input-small" id="input-text-small" name="input-text-small" type="text" />
  </div>
  <div class="mbe8">
    <label class="label label-" for="input-text-large">Input large label</label>
    <input class="input input-large" id="input-text-large" name="input-text-large" type="text" />
  </div>
  <div class="mbe8">
    <label class="label" for="input-text-underlined">Underlined inputs</label>
    <input class="input input-underlined" id="input-text-underlined" name="input-text-underlined" type="text" />
  </div>
  <div class="mbe8">
    <label class="label" for="input-text-underlined-bg">Underlined inputs with background</label>
    <input class="input input-underlined input-underlined-bg" id="input-text-underlined-bg" name="input-text-underlined-bg" type="text" />
  </div>
  <div class="mbe8">
    <label class="label" for="input-text-underlined-bg-large">Underlined input combined with size large</label>
    <input class="input input-underlined input-underlined-bg input-large" id="input-text-underlined-bg-large" name="input-text-underlined-bg-large" type="text" />
  </div>
  <div class="mbs32 mbe8 flex justify-start">
    <label class="label label-inline" for="input-text-inlined">Input label (inline)</label>
    <input class="input input-inline" id="input-text-inlined" name="input-text-inlined" type="text" />
  </div>
  <div class="mbs32 mbe8">
    <label class="label label-inline" for="input-text-underlined-inline">Input label (inline underlined)</label>
    <input class="input input-inline input-underlined" id="input-text-underlined-inline" name="input-text-underlined-inline" type="text" />
  </div>
</form> 

<div class="mbs24"></div>

```html
<!-- ...codes omitted for brevity -->
<div class="mbe8">
  <label class="label" for="input-text">Input label</label>
  <input class="input" id="input-text" name="input-text" type="text" />
</div>
<div class="mbe8">
  <label class="label" for="input-text-rounded">Input rounded label</label>
  <input class="input input-rounded" id="input-text-rounded" name="input-text-rounded" type="text" />
</div>
<div class="mbe8">
  <label class="label" for="input-readonly">Input readonly</label>
  <input readonly class="input" id="input-readonly" name="input-readonly" type="text" value="This value is readonly" />
</div>
<div class="mbe8">
  <label class="label" for="input-disabled">Input disabled</label>
  <input class="input" id="input-disabled" name="input-disabled" type="text" disabled />
</div>
<div class="mbe8">
  <label class="label label-small" for="input-text-small">Input small label</label>
  <input class="input input-small" id="input-text-small" name="input-text-small" type="text" />
</div>
<div class="mbe8">
  <label class="label label-" for="input-text-large">Input large label</label>
  <input class="input input-large" id="input-text-large" name="input-text-large" type="text" />
</div>
<div class="mbe8">
  <label class="label" for="input-text-underlined">Underlined inputs</label>
  <input class="input input-underlined" id="input-text-underlined" name="input-text-underlined" type="text" />
</div>
<div class="mbe8">
  <label class="label" for="input-text-underlined-bg">Underlined inputs with background</label>
  <input class="input input-underlined input-underlined-bg" id="input-text-underlined-bg" name="input-text-underlined-bg" type="text" />
</div>
<div class="mbe8">
  <label class="label" for="input-text-underlined-bg-large">Underlined input combined with size large</label>
  <input class="input input-underlined input-underlined-bg input-large" id="input-text-underlined-bg-large" name="input-text-underlined-bg-large" type="text" />
</div>
<div class="mbs32 mbe8 flex justify-start">
  <label class="label label-inline" for="input-text-inlined">Input label (inline)</label>
  <input class="input input-inline" id="input-text-inlined" name="input-text-inlined" type="text" />
</div>
<div class="mbs32 mbe8">
  <label class="label label-inline" for="input-text-underlined-inline">Input label (inline underlined)</label>
  <input class="input input-inline input-underlined" id="input-text-underlined-inline" name="input-text-underlined-inline" type="text" />
</div>
<!-- ...codes omitted for brevity -->
```

## Errors & Help Text

Apply help text by applying the <code>field-help</code> class.
<div class="w-100 mbe24">
  <label class="label" for="input-text-help-block">Block field help</label>
  <input class="input" id="input-text-help-block" name="input-text-help-block" type="text" />
  <span class="field-help">Please fill out this field.</span>
</div>
<p><i>field-help-small</i> and <i>field-help-large</i></p>
<div class="w-100 mbe24">
  <label class="label" for="input-text-help-small">Smaller field help</label>
  <input class="input" id="input-text-help-small" name="input-text-help-small" type="text" />
  <span class="field-help-small">I'm smaller help text.</span>
</div>
<div class="w-100 mbe24">
  <label class="label" for="input-text-help-large">Larger field help</label>
  <input class="input" id="input-text-help-large" name="input-text-help-large" type="text" />
  <span class="field-help-large">I'm larger help text.</span>
</div>
<p>
  Block level errors can be achieved declaritively by adding appropriate
  <i>TYPE-error</i> classes.
</p>
<div class="w-100 mbe24">
  <label class="label label-error" for="input-text-error-block">Block label error</label>
  <input class="input input-error" id="input-text-error-block" name="input-text-error-block" type="text" />
  <span class="field-error" aria-live="polite">There's an error on this field.</span>
</div>
<p class="mbe24">
  Inline errors will require you to do some positional styling of your own but you can use our utilitiy classes for
  that.
</p>
<div class="mbe24 flex-row justify-start items-start">
  <label class="label label-inline label-error flex-grow-1" for="input-text-inlined-error">Inline label error</label>
  <div class="flex-inline items-center flex-grow-1 mbe0">
    <input class="input input-error input-inline" id="input-text-inlined-error" name="input-text-inlined" type="text" />
    <span class="field-error mis12" aria-live="polite">There's an error on this field.</span>
  </div>
</div>

<div class="mbe24" />

```html
<!-- ...codes omitted for brevity -->
<div class="w-100 mbe24">
  <label class="label" for="input-text-help-block">Block field help</label>
  <input class="input" id="input-text-help-block" name="input-text-help-block" type="text" />
  <span class="field-help">Please fill out this field.</span>
</div>
<div class="w-100 mbe24">
  <label class="label" for="input-text-help-small">Smaller field help</label>
  <input class="input" id="input-text-help-small" name="input-text-help-small" type="text" />
  <span class="field-help-small">I'm smaller help text.</span>
</div>
<div class="w-100 mbe24">
  <label class="label" for="input-text-help-large">Larger field help</label>
  <input class="input" id="input-text-help-large" name="input-text-help-large" type="text" />
  <span class="field-help-large">I'm larger help text.</span>
</div>
<div class="w-100 mbe24">
  <label class="label label-error" for="input-text-error-block">Block label error</label>
  <input class="input input-error" id="input-text-error-block" name="input-text-error-block" type="text" />
  <span class="field-error" aria-live="polite">There's an error on this field.</span>
</div>
<div class="mbe24 flex-row justify-start items-start">
  <label class="label label-inline label-error flex-grow-1" for="input-text-inlined-error">Inline label error</label>
  <div class="flex-inline items-center flex-grow-1 mbe0">
    <input class="input input-error input-inline" id="input-text-inlined-error" name="input-text-inlined" type="text" />
    <span class="field-error mis12" aria-live="polite">There's an error on this field.</span>
  </div>
</div>
```

## Textarea

<div>
  <label class="label" for="input-textarea-small">Textarea small</label>
  <textarea cols="50" rows="4" id="input-textarea-small" class="input input-small">Using the input and input-small CSS classes here mainly help keep the font sizes and line heights consistent.</textarea>
  <label class="label" for="input-textarea">Textarea</label>
  <textarea cols="50" rows="4" id="input-textarea" class="input">The general input CSS class is quite helpful in keeping the textarea element cohesive with your other form inputs. Otherwise, just declaratively use it like you normally would.</textarea>
  <label class="label" for="input-textarea-large">Textarea large</label>
  <textarea cols="50" rows="4" id="input-textarea-large" class="input input-large">Using the input and input-large CSS classes here mainly help keep the font sizes and line heights consistent.</textarea>
</div>

```html
<div>
  <label class="label" for="input-textarea-small">Textarea small</label>
  <textarea cols="50" rows="4" id="input-textarea-small" class="input input-small">Using the input and input-small CSS classes here mainly help keep the font sizes and line heights consistent.</textarea>
  <label class="label" for="input-textarea">Textarea</label>
  <textarea cols="50" rows="4" id="input-textarea" class="input">The general input CSS class is quite helpful in keeping the textarea element cohesive with your other form inputs. Otherwise, just declaratively use it like you normally would.</textarea>
  <label class="label" for="input-textarea-large">Textarea large</label>
  <textarea cols="50" rows="4" id="input-textarea-large" class="input input-large">Using the input and input-large CSS classes here mainly help keep the font sizes and line heights consistent.</textarea>
</div>
```

## Sizes

<label class="label" for="input-email-small">Email small rounded</label>
<input class="input input-rounded input-small" id="input-email-small" name="input-email-small" type="email" />
<label class="label mbs24" for="input-email-rounded">Email rounded (default size)</label>
<input class="input input-rounded" id="input-email-rounded" name="input-email-rounded" type="email" />
<label class="label mbs24" for="input-email-large">Email large rounded</label>
<input class="input input-rounded input-large" id="input-email-large" name="input-email-large" type="email" />

```html
<label class="label" for="input-email-small">Email small rounded</label>
<input class="input input-rounded input-small" id="input-email-small" name="input-email-small" type="email" />
<label class="label" for="input-email-rounded">Email rounded (default size)</label>
<input class="input input-rounded" id="input-email-rounded" name="input-email-rounded" type="email" />
<label class="label" for="input-email-large">Email large rounded</label>
<input class="input input-rounded input-large" id="input-email-large" name="input-email-large" type="email" />
```

## HTML5 Types

<label class="label" for="input-email">Email</label>
<input class="input" id="input-email" name="input-email" type="email" />
<label class="label" for="input-password">Password</label>
<input class="input" id="input-password" name="input-password" type="password" />
<label class="label" for="input-search">Search</label>
<input class="input" id="input-search" name="input-search" type="search" />
<label class="label" for="input-tel">Telephone</label>
<input class="input" id="input-tel" name="input-tel" type="tel" />
<label class="label" for="input-number">Number</label>
<input class="input" id="input-number" name="input-number" type="number" min="10" max="30" step="5" />

```html
<label class="label" for="input-email">Email</label>
<input class="input" id="input-email" name="input-email" type="email" />
<label class="label" for="input-password">Password</label>
<input class="input" id="input-password" name="input-password" type="password" />
<label class="label" for="input-search">Search</label>
<input class="input" id="input-search" name="input-search" type="search" />
<label class="label" for="input-tel">Telephone</label>
<input class="input" id="input-tel" name="input-tel" type="tel" />
<label class="label" for="input-number">Number</label>
<input class="input" id="input-number" name="input-number" type="number" min="10" max="30" step="5" />
```
