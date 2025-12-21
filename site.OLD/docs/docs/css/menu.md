# Menu

The `Menu` component contains a list of menu options that appears
when a user interacts with the trigger button via clicking or keyboard interactions.

::: warning
The agnostic-css package does not provide keyboard navigation functionality (so you will need to). See [this article](https://www.smashingmagazine.com/2017/11/building-accessible-menu-systems/) if you plan to implement this yourself.
:::

<div class="mbs24"></div>

## Usage

To use AgnosticUI as a CSS only framework, you can simply link to the `common.min.css` and `components.min.css` files. These can be served from a CDN (as you'll see in the following example), or relative to your project.

## Menu

<div class="menu">
  <button class="menu-trigger" aria-haspopup="true" aria-expanded="true">
    Players (default)
    <span class="menu-icon" aria-hidden="true">▾</span>
  </button>
  <div class="menu-items" id="players1" data-inclusive-menu-from="left" role="menu">
    <button class="menu-item" role="menuitem" tabindex="-1">Andre Agassi</button>
    <button class="menu-item" role="menuitem" tabindex="-1">Serena Williams</button>
    <button class="menu-item" role="menuitem" tabindex="-1">Rafael Nadal</button>
    <button class="menu-item" role="menuitem" tabindex="-1">Roger Federer</button>
    <button class="menu-item" role="menuitem" tabindex="-1">Althea Gibson</button>
    <button class="menu-item" role="menuitem" tabindex="-1">Bjorn Borg</button>
  </div>
</div>

<div style="margin-block-start: 16rem;"></div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<div class="menu">
  <button class="menu-trigger" aria-haspopup="true" aria-expanded="true">
    Players (default)
    <span class="menu-icon" aria-hidden="true">▾</span>
  </button>
  <div class="menu-items" id="players1" data-inclusive-menu-from="left" role="menu">
    <button class="menu-item" role="menuitem" tabindex="-1">Andre Agassi</button>
    <button class="menu-item" role="menuitem" tabindex="-1">Serena Williams</button>
    <button class="menu-item" role="menuitem" tabindex="-1">Rafael Nadal</button>
    <button class="menu-item" role="menuitem" tabindex="-1">Roger Federer</button>
    <button class="menu-item" role="menuitem" tabindex="-1">Althea Gibson</button>
    <button class="menu-item" role="menuitem" tabindex="-1">Bjorn Borg</button>
  </div>
</div>
```
</details>

<div class="menu">
  <button class="menu-trigger menu-trigger-rounded" aria-haspopup="true" aria-expanded="true">
    Players (rounded)
    <span class="menu-icon" aria-hidden="true">▾</span>
  </button>
  <div class="menu-items" id="players2" data-inclusive-menu-from="left" role="menu">
    <button class="menu-item menu-item-rounded menu-item-selected" role="menuitem" tabindex="-1">Andre Agassi</button>
    <button class="menu-item menu-item-rounded" role="menuitem" tabindex="-1">Serena Williams</button>
    <button class="menu-item menu-item-rounded" role="menuitem" tabindex="-1" disabled>Rafael Nadal</button>
    <button class="menu-item menu-item-rounded menu-item-selected" role="menuitem" tabindex="-1">Roger Federer</button>
    <button class="menu-item menu-item-rounded" role="menuitem" tabindex="-1">Althea Gibson</button>
    <button class="menu-item menu-item-rounded" role="menuitem" tabindex="-1">Bjorn Borg</button>
  </div>
</div>

<div style="margin-block-start: 16rem;"></div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<div class="menu">
  <button class="menu-trigger menu-trigger-rounded" aria-haspopup="true" aria-expanded="true">
    Players (rounded)
    <span class="menu-icon" aria-hidden="true">▾</span>
  </button>
  <div class="menu-items" id="players2" data-inclusive-menu-from="left" role="menu">
    <button class="menu-item menu-item-rounded menu-item-selected" role="menuitem" tabindex="-1">Andre Agassi</button>
    <button class="menu-item menu-item-rounded" role="menuitem" tabindex="-1">Serena Williams</button>
    <button class="menu-item menu-item-rounded" role="menuitem" tabindex="-1" disabled>Rafael Nadal</button>
    <button class="menu-item menu-item-rounded menu-item-selected" role="menuitem" tabindex="-1">Roger Federer</button>
    <button class="menu-item menu-item-rounded" role="menuitem" tabindex="-1">Althea Gibson</button>
    <button class="menu-item menu-item-rounded" role="menuitem" tabindex="-1">Bjorn Borg</button>
  </div>
</div>
```
</details>

<div class="menu">
  <button class="menu-trigger menu-trigger-bordered" aria-haspopup="true" aria-expanded="true">
    Players (bordered)
    <span class="menu-icon" aria-hidden="true">▾</span>
  </button>
  <div class="menu-items" id="players3" data-inclusive-menu-from="left" role="menu">
    <button class="menu-item" role="menuitem" tabindex="-1">Andre Agassi</button>
    <button class="menu-item" role="menuitem" tabindex="-1">Serena Williams</button>
    <button class="menu-item" role="menuitem" tabindex="-1">Rafael Nadal</button>
    <button class="menu-item" role="menuitem" tabindex="-1">Roger Federer</button>
    <button class="menu-item" role="menuitem" tabindex="-1">Althea Gibson</button>
    <button class="menu-item" role="menuitem" tabindex="-1">Bjorn Borg</button>
  </div>
</div>

<div style="margin-block-start: 16rem;"></div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<div class="menu">
  <button class="menu-trigger menu-trigger-bordered" aria-haspopup="true" aria-expanded="true">
    Players (bordered)
    <span class="menu-icon" aria-hidden="true">▾</span>
  </button>
  <div class="menu-items" id="players3" data-inclusive-menu-from="left" role="menu">
    <button class="menu-item" role="menuitem" tabindex="-1">Andre Agassi</button>
    <button class="menu-item" role="menuitem" tabindex="-1">Serena Williams</button>
    <button class="menu-item" role="menuitem" tabindex="-1">Rafael Nadal</button>
    <button class="menu-item" role="menuitem" tabindex="-1">Roger Federer</button>
    <button class="menu-item" role="menuitem" tabindex="-1">Althea Gibson</button>
    <button class="menu-item" role="menuitem" tabindex="-1">Bjorn Borg</button>
  </div>
</div>
```
</details>

<div class="menu menu-small">
  <button class="menu-trigger menu-trigger-small" aria-haspopup="true" aria-expanded="true">
    Players (small)
    <span class="menu-icon" aria-hidden="true">▾</span>
  </button>
  <div class="menu-items" id="players1" data-inclusive-menu-from="left" role="menu">
    <button class="menu-item menu-item-small" role="menuitem" tabindex="-1">Andre Agassi</button>
    <button class="menu-item menu-item-small" role="menuitem" tabindex="-1">Serena Williams</button>
    <button class="menu-item menu-item-small" role="menuitem" tabindex="-1">Rafael Nadal</button>
    <button class="menu-item menu-item-small" role="menuitem" tabindex="-1">Roger Federer</button>
    <button class="menu-item menu-item-small" role="menuitem" tabindex="-1">Althea Gibson</button>
    <button class="menu-item menu-item-small" role="menuitem" tabindex="-1">Bjorn Borg</button>
  </div>
</div>

<div style="margin-block-start: 15rem;"></div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<div class="menu menu-small">
  <button class="menu-trigger menu-trigger-small" aria-haspopup="true" aria-expanded="true">
    Players (small)
    <span class="menu-icon" aria-hidden="true">▾</span>
  </button>
  <div class="menu-items" id="players1" data-inclusive-menu-from="left" role="menu">
    <button class="menu-item menu-item-small" role="menuitem" tabindex="-1">Andre Agassi</button>
    <button class="menu-item menu-item-small" role="menuitem" tabindex="-1">Serena Williams</button>
    <button class="menu-item menu-item-small" role="menuitem" tabindex="-1">Rafael Nadal</button>
    <button class="menu-item menu-item-small" role="menuitem" tabindex="-1">Roger Federer</button>
    <button class="menu-item menu-item-small" role="menuitem" tabindex="-1">Althea Gibson</button>
    <button class="menu-item menu-item-small" role="menuitem" tabindex="-1">Bjorn Borg</button>
  </div>
</div>
```
</details>

<div class="menu menu-large">
  <button class="menu-trigger menu-trigger-large" aria-haspopup="true" aria-expanded="true">
    Players (menu-large)
    <span class="menu-icon" aria-hidden="true">▾</span>
  </button>
  <div class="menu-items" id="players2" data-inclusive-menu-from="left" role="menu">
    <button class="menu-item menu-item-large menu-item-selected" role="menuitem" tabindex="-1">Andre Agassi</button>
    <button class="menu-item menu-item-large" role="menuitem" tabindex="-1">Serena Williams</button>
    <button class="menu-item menu-item-large" role="menuitem" tabindex="-1" disabled>Rafael Nadal</button>
    <button class="menu-item menu-item-large menu-item-selected" role="menuitem" tabindex="-1">Roger Federer</button>
    <button class="menu-item menu-item-large" role="menuitem" tabindex="-1">Althea Gibson</button>
    <button class="menu-item menu-item-large" role="menuitem" tabindex="-1">Bjorn Borg</button>
  </div>
</div>

<div style="margin-block-start: 20rem;"></div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<div class="menu menu-large">
  <button class="menu-trigger menu-trigger-large" aria-haspopup="true" aria-expanded="true">
    Players (menu-large)
    <span class="menu-icon" aria-hidden="true">▾</span>
  </button>
  <div class="menu-items" id="players2" data-inclusive-menu-from="left" role="menu">
    <button class="menu-item menu-item-large menu-item-selected" role="menuitem" tabindex="-1">Andre Agassi</button>
    <button class="menu-item menu-item-large" role="menuitem" tabindex="-1">Serena Williams</button>
    <button class="menu-item menu-item-large" role="menuitem" tabindex="-1" disabled>Rafael Nadal</button>
    <button class="menu-item menu-item-large menu-item-selected" role="menuitem" tabindex="-1">Roger Federer</button>
    <button class="menu-item menu-item-large" role="menuitem" tabindex="-1">Althea Gibson</button>
    <button class="menu-item menu-item-large" role="menuitem" tabindex="-1">Bjorn Borg</button>
  </div>
</div>
```
</details>
