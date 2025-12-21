# Switch

The `Switch` component is best used to immediately toggle a single application item's state on or off. See [these guidelines](https://uxmovement.com/mobile/stop-misusing-toggle-switches/) on when to use a switch vs. checkbox.

<div class="mbs24"></div>

## Usage

To use AgnosticUI as a CSS only framework, you can simply link to the `common.min.css` and `components.min.css` files. These can be served from a CDN (as you'll see in the following example), or relative to your project.

<label class="switch-container" for="switch1">
  Switch small
  <input class="switch-input" type="checkbox" id="switch1" role="switch" aria-checked="false" data-agnostic-switch />
  <span class="switch switch-small" aria-hidden="true"></span>
</label>

<div class="mbe24"></div>
<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<label class="switch-container" for="switch1">
  Switch small
  <input class="switch-input" type="checkbox" id="switch1" role="switch" aria-checked="false" data-agnostic-switch />
  <span class="switch switch-small" aria-hidden="true"></span>
</label>
```
</details>

<label class="switch-container" for="switch0">
  Switch
  <input class="switch-input" type="checkbox" id="switch0" role="switch" aria-checked="false" data-agnostic-switch />
  <span class="switch" aria-hidden="true"></span>
</label>

<div class="mbe24"></div>
<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<label class="switch-container" for="switch0">
  Switch
  <input class="switch-input" type="checkbox" id="switch0" role="switch" aria-checked="false" data-agnostic-switch />
  <span class="switch" aria-hidden="true"></span>
</label>
```
</details>

<label class="switch-container" for="switch4">
  Switch border
  <input class="switch-input" type="checkbox" id="switch4" role="switch" aria-checked="false" data-agnostic-switch />
  <span class="switch switch-border" aria-hidden="true"></span>
</label>


<div class="mbe24"></div>
<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<label class="switch-container" for="switch4">
  Switch border
  <input class="switch-input" type="checkbox" id="switch4" role="switch" aria-checked="false" data-agnostic-switch />
  <span class="switch switch-border" aria-hidden="true"></span>
</label>
```
</details>

<label class="switch-container" for="switch3">
  Switch large
  <input class="switch-input" type="checkbox" id="switch3" role="switch" aria-checked="false" data-agnostic-switch />
  <span class="switch switch-large" aria-hidden="true"></span>
</label>


<div class="mbe24"></div>
<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<label class="switch-container" for="switch3">
  Switch large
  <input class="switch-input" type="checkbox" id="switch3" role="switch" aria-checked="false" data-agnostic-switch />
  <span class="switch switch-large" aria-hidden="true"></span>
</label>
```
</details>

<label class="switch-container" for="switch5">
  Switch action
  <input class="switch-input" type="checkbox" id="switch5" role="switch" aria-checked="false" data-agnostic-switch />
  <span class="switch switch-action" aria-hidden="true"></span>
</label>

<div class="mbe24"></div>
<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<label class="switch-container" for="switch5">
  Switch action
  <input class="switch-input" type="checkbox" id="switch5" role="switch" aria-checked="false" data-agnostic-switch />
  <span class="switch switch-action" aria-hidden="true"></span>
</label>
```
</details>

<label class="switch-container switch-right" for="switchr2">
  <input class="switch-input" type="checkbox" id="switchr2" role="switch" aria-checked="false" data-agnostic-switch />
  <span class="switch" aria-hidden="true"></span>
  <span class="switch-label">Switch (label on right at default size)</span>
</label>

<div class="mbe24"></div>
<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<label class="switch-container switch-right" for="switchr2">
  <input class="switch-input" type="checkbox" id="switchr2" role="switch" aria-checked="false" data-agnostic-switch />
  <span class="switch" aria-hidden="true"></span>
  <span class="switch-label">Switch (label on right at default size)</span>
</label>
```
</details>

<label class="switch-container disabled" for="switchr1">
  <input class="switch-input" type="checkbox" id="switchr1" role="switch" aria-checked="false" disabled data-agnostic-switch />
  <span class="switch switch-small" aria-hidden="true"></span>
  <span class="switch-label">Switch disabled</span>
</label>

<div class="mbe24"></div>
<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<label class="switch-container disabled" for="switchr1">
  <input class="switch-input" type="checkbox" id="switchr1" role="switch" aria-checked="false" disabled data-agnostic-switch />
  <span class="switch switch-small" aria-hidden="true"></span>
  <span class="switch-label">Switch disabled</span>
</label>
```
</details>
