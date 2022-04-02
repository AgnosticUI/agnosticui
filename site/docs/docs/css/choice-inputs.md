# Choice Inputs

`ChoiceInput` component allows you to make choices via the `checkbox` and `radio` elements.

<div class="mbs24"></div>

## Usage

To use AgnosticUI as a CSS only framework, you can simply link to the `common.min.css` and `components.min.css` files. These can be served from a CDN (as you'll see in the following example), or relative to your project.

## Choice Inputs

<!-- Default -->
<fieldset class="checkbox-group mbe24">
  <legend class="checkbox-legend">How often to email me</legend>
  <label class="checkbox-label-wrap">
  <input class="checkbox" type="checkbox" name="daily" aria-hidden="true" focusable="false" />
  <span class="checkbox-label"></span>
  <span class="checkbox-label-copy">Send me daily emails</span>
  </label>
  <label class="checkbox-label-wrap">
  <input class="checkbox" type="checkbox" name="monthly" aria-hidden="true" focusable="false" />
  <span class="checkbox-label"></span>
  <span class="checkbox-label-copy">Mail me a montly statements</span>
  </label>
  <label class="checkbox-label-wrap">
  <input class="checkbox" type="checkbox" name="weekly" aria-hidden="true" focusable="false" />
  <span class="checkbox-label"></span>
  <span class="checkbox-label-copy">Send weekly solicitations</span>
  </label>
</fieldset>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<fieldset class="checkbox-group mbe24">
  <legend class="checkbox-legend">How often to email me</legend>
  <label class="checkbox-label-wrap">
  <input class="checkbox" type="checkbox" name="daily" aria-hidden="true" focusable="false" />
  <span class="checkbox-label"></span>
  <span class="checkbox-label-copy">Send me daily emails</span>
  </label>
  <label class="checkbox-label-wrap">
  <input class="checkbox" type="checkbox" name="monthly" aria-hidden="true" focusable="false" />
  <span class="checkbox-label"></span>
  <span class="checkbox-label-copy">Mail me a montly statements</span>
  </label>
  <label class="checkbox-label-wrap">
  <input class="checkbox" type="checkbox" name="weekly" aria-hidden="true" focusable="false" />
  <span class="checkbox-label"></span>
  <span class="checkbox-label-copy">Send weekly solicitations</span>
  </label>
</fieldset>
```
</details>


<!-- Inline -->
<fieldset class="checkbox-group mbe24">
  <legend class="checkbox-legend">How often to email me</legend>
  <label class="checkbox-label-wrap checkbox-label-wrap-inline ">
  <input class="checkbox" type="checkbox" name="daily" aria-hidden="true" focusable="false" />
  <span class="checkbox-label"></span>
  <span class="checkbox-label-copy">Send me daily emails</span>
  </label>
  <label class="checkbox-label-wrap checkbox-label-wrap-inline ">
  <input class="checkbox" type="checkbox" name="monthly" aria-hidden="true" focusable="false" />
  <span class="checkbox-label"></span>
  <span class="checkbox-label-copy">Mail me a montly statements</span>
  </label>
  <label class="checkbox-label-wrap checkbox-label-wrap-inline ">
  <input class="checkbox" type="checkbox" name="weekly" aria-hidden="true" focusable="false" />
  <span class="checkbox-label"></span>
  <span class="checkbox-label-copy">Send weekly solicitations</span>
  </label>
</fieldset>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<!-- Inline -->
<fieldset class="checkbox-group mbe24">
  <legend class="checkbox-legend">How often to email me</legend>
  <label class="checkbox-label-wrap checkbox-label-wrap-inline ">
  <input class="checkbox" type="checkbox" name="daily" aria-hidden="true" focusable="false" />
  <span class="checkbox-label"></span>
  <span class="checkbox-label-copy">Send me daily emails</span>
  </label>
  <label class="checkbox-label-wrap checkbox-label-wrap-inline ">
  <input class="checkbox" type="checkbox" name="monthly" aria-hidden="true" focusable="false" />
  <span class="checkbox-label"></span>
  <span class="checkbox-label-copy">Mail me a montly statements</span>
  </label>
  <label class="checkbox-label-wrap checkbox-label-wrap-inline ">
  <input class="checkbox" type="checkbox" name="weekly" aria-hidden="true" focusable="false" />
  <span class="checkbox-label"></span>
  <span class="checkbox-label-copy">Send weekly solicitations</span>
  </label>
</fieldset>
```
</details>

<!-- Small -->
<fieldset class="checkbox-group checkbox-group-small mbe24">
  <legend class="checkbox-legend">How often to email me</legend>
  <label class="checkbox-label-wrap">
  <input class="checkbox checkbox-small " type="checkbox" name="daily" aria-hidden="true" focusable="false" />
  <span class="checkbox-label checkbox-label-small"></span>
  <span class="checkbox-label-copy checkbox-label-copy-small">Send me daily emails</span>
  </label>
  <label class="checkbox-label-wrap">
  <input class="checkbox checkbox-small " type="checkbox" name="monthly" aria-hidden="true" focusable="false" />
  <span class="checkbox-label checkbox-label-small"></span>
  <span class="checkbox-label-copy checkbox-label-copy-small">Mail me a montly statements</span>
  </label>
  <label class="checkbox-label-wrap">
  <input class="checkbox checkbox-small " type="checkbox" name="weekly" aria-hidden="true" focusable="false" />
  <span class="checkbox-label checkbox-label-small"></span>
  <span class="checkbox-label-copy checkbox-label-copy-small">Send weekly solicitations</span>
  </label>
</fieldset>


<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<!-- Small -->
<fieldset class="checkbox-group checkbox-group-small mbe24">
  <legend class="checkbox-legend">How often to email me (small)</legend>
  <label class="checkbox-label-wrap">
  <input class="checkbox checkbox-small " type="checkbox" name="daily" aria-hidden="true" focusable="false" />
  <span class="checkbox-label checkbox-label-small"></span>
  <span class="checkbox-label-copy checkbox-label-copy-small">Send me daily emails</span>
  </label>
  <label class="checkbox-label-wrap">
  <input class="checkbox checkbox-small " type="checkbox" name="monthly" aria-hidden="true" focusable="false" />
  <span class="checkbox-label checkbox-label-small"></span>
  <span class="checkbox-label-copy checkbox-label-copy-small">Mail me a montly statements</span>
  </label>
  <label class="checkbox-label-wrap">
  <input class="checkbox checkbox-small " type="checkbox" name="weekly" aria-hidden="true" focusable="false" />
  <span class="checkbox-label checkbox-label-small"></span>
  <span class="checkbox-label-copy checkbox-label-copy-small">Send weekly solicitations</span>
  </label>
</fieldset>
```
</details>

<!-- Large -->
<fieldset class="checkbox-group checkbox-group-large mbe24">
  <legend class="checkbox-legend">How often to email me (large)</legend>
  <label class="checkbox-label-wrap">
  <input class="checkbox checkbox-large " type="checkbox" name="daily" aria-hidden="true" focusable="false" />
  <span class="checkbox-label checkbox-label-large"></span>
  <span class="checkbox-label-copy checkbox-label-copy-large">Send me daily emails</span>
  </label>
  <label class="checkbox-label-wrap">
  <input class="checkbox checkbox-large " type="checkbox" name="monthly" aria-hidden="true" focusable="false" />
  <span class="checkbox-label checkbox-label-large"></span>
  <span class="checkbox-label-copy checkbox-label-copy-large">Mail me a montly statements</span>
  </label>
  <label class="checkbox-label-wrap">
  <input class="checkbox checkbox-large " type="checkbox" name="weekly" aria-hidden="true" focusable="false" />
  <span class="checkbox-label checkbox-label-large"></span>
  <span class="checkbox-label-copy checkbox-label-copy-large">Send weekly solicitations</span>
  </label>
</fieldset>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<!-- Large -->
<fieldset class="checkbox-group checkbox-group-large mbe24">
  <legend class="checkbox-legend">How often to email me (large)</legend>
  <label class="checkbox-label-wrap">
  <input class="checkbox checkbox-large " type="checkbox" name="daily" aria-hidden="true" focusable="false" />
  <span class="checkbox-label checkbox-label-large"></span>
  <span class="checkbox-label-copy checkbox-label-copy-large">Send me daily emails</span>
  </label>
  <label class="checkbox-label-wrap">
  <input class="checkbox checkbox-large " type="checkbox" name="monthly" aria-hidden="true" focusable="false" />
  <span class="checkbox-label checkbox-label-large"></span>
  <span class="checkbox-label-copy checkbox-label-copy-large">Mail me a montly statements</span>
  </label>
  <label class="checkbox-label-wrap">
  <input class="checkbox checkbox-large " type="checkbox" name="weekly" aria-hidden="true" focusable="false" />
  <span class="checkbox-label checkbox-label-large"></span>
  <span class="checkbox-label-copy checkbox-label-copy-large">Send weekly solicitations</span>
  </label>
</fieldset>
```
</details>


<!-- Fieldset Hidden -->
<fieldset class="checkbox-group checkbox-group-hidden mbe24">
  <legend class="checkbox-legend">How often to email me</legend>
  <label class="checkbox-label-wrap">
  <input class="checkbox" type="checkbox" name="daily" aria-hidden="true" focusable="false" />
  <span class="checkbox-label"></span>
  <span class="checkbox-label-copy">Send me daily emails</span>
  </label>
  <label class="checkbox-label-wrap">
  <input class="checkbox" type="checkbox" name="monthly" aria-hidden="true" focusable="false" />
  <span class="checkbox-label"></span>
  <span class="checkbox-label-copy">Mail me a montly statements</span>
  </label>
  <label class="checkbox-label-wrap">
  <input class="checkbox" type="checkbox" name="weekly" aria-hidden="true" focusable="false" />
  <span class="checkbox-label"></span>
  <span class="checkbox-label-copy">Send weekly solicitations</span>
  </label>
</fieldset>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<!-- Fieldset Hidden -->
<fieldset class="checkbox-group checkbox-group-hidden mbe24">
  <legend class="checkbox-legend">How often to email me (fieldset hidden)</legend>
  <label class="checkbox-label-wrap">
  <input class="checkbox" type="checkbox" name="daily" aria-hidden="true" focusable="false" />
  <span class="checkbox-label"></span>
  <span class="checkbox-label-copy">Send me daily emails</span>
  </label>
  <label class="checkbox-label-wrap">
  <input class="checkbox" type="checkbox" name="monthly" aria-hidden="true" focusable="false" />
  <span class="checkbox-label"></span>
  <span class="checkbox-label-copy">Mail me a montly statements</span>
  </label>
  <label class="checkbox-label-wrap">
  <input class="checkbox" type="checkbox" name="weekly" aria-hidden="true" focusable="false" />
  <span class="checkbox-label"></span>
  <span class="checkbox-label-copy">Send weekly solicitations</span>
  </label>
</fieldset>
```
</details>

<!-- Disabled -->
<p>Disabled choices</p>
<label class="checkbox-label-wrap disabled mbe24">
<input class="checkbox checkbox-small" type="checkbox" name="weekdays" aria-hidden="true" focusable="false" disabled />
<span class="checkbox-label-small checkbox-label"></span>
<span class="checkbox-label-copy-small checkbox-label-copy">Weekdays</span>
</label>
<label class="radio-label-wrap disabled" for="disabledradio">
<input type="radio" class="radio radio-small" value="small3" name="small" id="disabledradio" checked disabled />
<span class="radio-label radio-label-small"></span>
<span class="radio-label-copy radio-label-copy-small">Small 3</span>
</label>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<!-- Disabled -->
<p>Disabled choices</p>
<label class="checkbox-label-wrap disabled mbe24">
<input class="checkbox checkbox-small" type="checkbox" name="weekdays" aria-hidden="true" focusable="false" disabled />
<span class="checkbox-label-small checkbox-label"></span>
<span class="checkbox-label-copy-small checkbox-label-copy">Weekdays</span>
</label>
<label class="radio-label-wrap disabled" for="disabledradio">
<input type="radio" class="radio radio-small" value="small3" name="small" id="disabledradio" checked disabled />
<span class="radio-label radio-label-small"></span>
<span class="radio-label-copy radio-label-copy-small">Small 3</span>
</label>
```
</details>

<fieldset class="radio-group mbe24">
  <legend class="radio-legend">CSS conventions</legend>
  <label class="radio-label-wrap" for="bem">
  <input type="radio" class="radio" value="bem" name="conventions" id="bem" />
  <span class="radio-label"></span>
  <span class="radio-label-copy">BEM</span>
  </label>
  <label class="radio-label-wrap" for="oocss">
  <input type="radio" class="radio" value="OOCSS" name="conventions" id="oocss" />
  <span class="radio-label"></span>
  <span class="radio-label-copy">Object-Oriented CSS</span>
  </label>
  <label class="radio-label-wrap" for="smacss">
  <input type="radio" class="radio" value="smacss" name="conventions" id="smacss" checked />
  <span class="radio-label"></span>
  <span class="radio-label-copy">SMACSS</span>
  </label>
</fieldset>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<fieldset class="radio-group mbe24">
  <legend class="radio-legend">CSS conventions</legend>
  <label class="radio-label-wrap" for="bem">
  <input type="radio" class="radio" value="bem" name="conventions" id="bem" />
  <span class="radio-label"></span>
  <span class="radio-label-copy">BEM</span>
  </label>
  <label class="radio-label-wrap" for="oocss">
  <input type="radio" class="radio" value="OOCSS" name="conventions" id="oocss" />
  <span class="radio-label"></span>
  <span class="radio-label-copy">Object-Oriented CSS</span>
  </label>
  <label class="radio-label-wrap" for="smacss">
  <input type="radio" class="radio" value="smacss" name="conventions" id="smacss" checked />
  <span class="radio-label"></span>
  <span class="radio-label-copy">SMACSS</span>
  </label>
</fieldset>
```
</details>

<fieldset class="radio-group radio-group-hidden mbe24">
  <legend class="screenreader-only">Radio control quality</legend>
  <label class="radio-label-wrap" for="one">
  <input type="radio" class="radio" value="one" name="numbers" id="one" />
  <span class="radio-label"></span>
  <span class="radio-label-copy">one</span>
  </label>
  <label class="radio-label-wrap" for="two">
  <input type="radio" class="radio" value="two" name="numbers" id="two" />
  <span class="radio-label"></span>
  <span class="radio-label-copy">two</span>
  </label>
  <label class="radio-label-wrap" for="three">
  <input type="radio" class="radio" value="three" name="numbers" id="three" checked />
  <span class="radio-label"></span>
  <span class="radio-label-copy">three</span>
  </label>
</fieldset>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<fieldset class="radio-group radio-group-hidden mbe24">
  <legend class="screenreader-only">Radio control quality</legend>
  <label class="radio-label-wrap" for="one">
  <input type="radio" class="radio" value="one" name="numbers" id="one" />
  <span class="radio-label"></span>
  <span class="radio-label-copy">one</span>
  </label>
  <label class="radio-label-wrap" for="two">
  <input type="radio" class="radio" value="two" name="numbers" id="two" />
  <span class="radio-label"></span>
  <span class="radio-label-copy">two</span>
  </label>
  <label class="radio-label-wrap" for="three">
  <input type="radio" class="radio" value="three" name="numbers" id="three" checked />
  <span class="radio-label"></span>
  <span class="radio-label-copy">three</span>
  </label>
</fieldset>
```
</details>

<p class="mbe24">
  To create <i>large</i> and <i>small</i> radio groups you use the add another class with the
  size suffix for the group: <i>radio-group radio-group-large</i>, the radio
  <i>radio radio-large</i>, and the following element that contains the label text
  <i>radio-label radio-label-large</i>. The next example creates a <span class="quoted">large</span> radio
  group:
</p>
<fieldset class="radio-group radio-group-large mbe24">
  <legend class="radio-legend">Large</legend>
  <label class="radio-label-wrap" for="large1">
  <input type="radio" class="radio radio-large" value="large1" name="large" id="large1" />
  <span class="radio-label radio-label-large"></span>
  <span class="radio-label-copy radio-label-copy-large">Large 1</span>
  </label>
  <label class="radio-label-wrap" for="large2">
  <input type="radio" class="radio radio-large" value="large2" name="large" id="large2" />
  <span class="radio-label radio-label-large"></span>
  <span class="radio-label-copy radio-label-copy-large">Large 2</span>
  </label>
  <label class="radio-label-wrap" for="large3">
  <input type="radio" class="radio radio-large" value="large3" name="large" id="large3" checked />
  <span class="radio-label radio-label-large"></span>
  <span class="radio-label-copy radio-label-copy-large">Large 3</span>
  </label>
</fieldset>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<fieldset class="radio-group radio-group-large mbe24">
  <legend class="radio-legend">Large</legend>
  <label class="radio-label-wrap" for="large1">
  <input type="radio" class="radio radio-large" value="large1" name="large" id="large1" />
  <span class="radio-label radio-label-large"></span>
  <span class="radio-label-copy radio-label-copy-large">Large 1</span>
  </label>
  <label class="radio-label-wrap" for="large2">
  <input type="radio" class="radio radio-large" value="large2" name="large" id="large2" />
  <span class="radio-label radio-label-large"></span>
  <span class="radio-label-copy radio-label-copy-large">Large 2</span>
  </label>
  <label class="radio-label-wrap" for="large3">
  <input type="radio" class="radio radio-large" value="large3" name="large" id="large3" checked />
  <span class="radio-label radio-label-large"></span>
  <span class="radio-label-copy radio-label-copy-large">Large 3</span>
  </label>
</fieldset>
```
</details>

<p class="mbe24">The next example creates a <span class="quoted">small</span> radio group:</p>
<fieldset class="radio-group mbe24">
  <legend class="radio-legend">Small</legend>
  <label class="radio-label-wrap" for="small1">
  <input type="radio" class="radio radio-small" value="small1" name="small" id="small1" />
  <span class="radio-label radio-label-small"></span>
  <span class="radio-label-copy radio-label-copy-small">Small 1</span>
  </label>
  <label class="radio-label-wrap" for="small2">
  <input type="radio" class="radio radio-small" value="small2" name="small" id="small2" />
  <span class="radio-label radio-label-small"></span>
  <span class="radio-label-copy radio-label-copy-small">Small 2</span>
  </label>
  <label class="radio-label-wrap" for="small3">
  <input type="radio" class="radio radio-small" value="small3" name="small" id="small3" checked />
  <span class="radio-label radio-label-small"></span>
  <span class="radio-label-copy radio-label-copy-small">Small 3</span>
  </label>
</fieldset>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<fieldset class="radio-group mbe24">
  <legend class="radio-legend">Small</legend>
  <label class="radio-label-wrap" for="small1">
  <input type="radio" class="radio radio-small" value="small1" name="small" id="small1" />
  <span class="radio-label radio-label-small"></span>
  <span class="radio-label-copy radio-label-copy-small">Small 1</span>
  </label>
  <label class="radio-label-wrap" for="small2">
  <input type="radio" class="radio radio-small" value="small2" name="small" id="small2" />
  <span class="radio-label radio-label-small"></span>
  <span class="radio-label-copy radio-label-copy-small">Small 2</span>
  </label>
  <label class="radio-label-wrap" for="small3">
  <input type="radio" class="radio radio-small" value="small3" name="small" id="small3" checked />
  <span class="radio-label radio-label-small"></span>
  <span class="radio-label-copy radio-label-copy-small">Small 3</span>
  </label>
</fieldset>
```
</details>

