# Pagination

The `Pagination` component is typically used to _paginate_ large sets of data divided into smaller parts called _pages_.

<div class="mbs24"></div>

## Usage

To use AgnosticUI as a CSS only framework, you can simply link to the `common.min.css` and `components.min.css` files. These can be served from a CDN (as you'll see in the following example), or relative to your project.

::: warning
The <code>agnostic-css</code> will take care of styling while you will need to write your own JavaScript for full pagination functionality.
:::


## Pagination

<nav class="pagination-container" aria-label="pagination">
  <ul class="pagination">
    <li class="pagination-item pagination-item-disabled">
      <a class="pagination-button" href="#someurl" aria-disabled="true" tabindex="-1">&lsaquo; Previous</a>
    </li>
    <li class="pagination-item pagination-item-active">
      <a class="pagination-button" href="#someurl" aria-current="page"><span class="screenreader-only">page </span>1</a>
    </li>
    <li class="pagination-item">
      <a class="pagination-button" href="#someurl"><span class="screenreader-only">page </span>2</a>
    </li>
    <li class="pagination-item">
      <a class="pagination-button" href="#someurl"><span class="screenreader-only">page </span>3</a>
    </li>
    <li class="pagination-item">
      <span>...</span>
    </li>
    <li class="pagination-item">
      <a class="pagination-button" href="#someurl"><span class="screenreader-only">page </span>99</a>
    </li>
    <li class="pagination-item">
      <a class="pagination-button" href="#someurl">Next &rsaquo;</a>
    </li>
  </ul>
</nav>

<div class="mbe24"></div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<nav class="pagination-container" aria-label="pagination">
  <ul class="pagination">
    <li class="pagination-item pagination-item-disabled">
      <a class="pagination-button" href="#someurl" aria-disabled="true" tabindex="-1">&lsaquo; Previous</a>
    </li>
    <li class="pagination-item pagination-item-active">
      <a class="pagination-button" href="#someurl" aria-current="page"><span class="screenreader-only">page </span>1</a>
    </li>
    <li class="pagination-item">
      <a class="pagination-button" href="#someurl"><span class="screenreader-only">page </span>2</a>
    </li>
    <li class="pagination-item">
      <a class="pagination-button" href="#someurl"><span class="screenreader-only">page </span>3</a>
    </li>
    <li class="pagination-item">
      <span>...</span>
    </li>
    <li class="pagination-item">
      <a class="pagination-button" href="#someurl"><span class="screenreader-only">page </span>99</a>
    </li>
    <li class="pagination-item">
      <a class="pagination-button" href="#someurl">Next &rsaquo;</a>
    </li>
  </ul>
</nav>
```
</details>

<p class="mbs48 mbe16">Bordered — applies border around the current active page as opposed to primary background.</p>

<nav class="pagination-container" aria-label="pagination">
  <ul class="pagination pagination-bordered">
    <li class="pagination-item pagination-item-disabled">
      <a class="pagination-button" href="#someurl" aria-disabled="true" tabindex="-1">&lsaquo; Previous</a>
    </li>
    <li class="pagination-item pagination-item-active">
      <a class="pagination-button" href="#someurl" aria-current="page"><span class="screenreader-only">page </span>1</a>
    </li>
    <li class="pagination-item">
      <a class="pagination-button" href="#someurl"><span class="screenreader-only">page </span>2</a>
    </li>
    <li class="pagination-item">
      <span>...</span>
    </li>
    <li class="pagination-item">
      <a class="pagination-button" href="#someurl"><span class="screenreader-only">page </span>99</a>
    </li>
    <li class="pagination-item">
      <a class="pagination-button" href="#someurl">Next &rsaquo;</a>
    </li>
  </ul>
</nav>

<div class="mbe24"></div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<nav class="pagination-container" aria-label="pagination">
  <ul class="pagination pagination-bordered">
    <li class="pagination-item pagination-item-disabled">
      <a class="pagination-button" href="#someurl" aria-disabled="true" tabindex="-1">&lsaquo; Previous</a>
    </li>
    <li class="pagination-item pagination-item-active">
      <a class="pagination-button" href="#someurl" aria-current="page"><span class="screenreader-only">page </span>1</a>
    </li>
    <li class="pagination-item">
      <a class="pagination-button" href="#someurl"><span class="screenreader-only">page </span>2</a>
    </li>
    <li class="pagination-item">
      <span>...</span>
    </li>
    <li class="pagination-item">
      <a class="pagination-button" href="#someurl"><span class="screenreader-only">page </span>99</a>
    </li>
    <li class="pagination-item">
      <a class="pagination-button" href="#someurl">Next &rsaquo;</a>
    </li>
  </ul>
</nav>
```
</details>

<p class="mbs48 mbe16">Put whatever page links you'd like</p>

<nav class="pagination-container" aria-label="pagination">
  <ul class="pagination pagination-bordered">
    <li class="pagination-item pagination-item-disabled">
      <a class="pagination-button" href="#someurl" aria-disabled="true" tabindex="-1">&laquo; First</a>
    </li>
    <li class="pagination-item pagination-item-disabled">
      <a class="pagination-button" href="#someurl" aria-disabled="true" tabindex="-1">&lsaquo; Previous</a>
    </li>
    <li class="pagination-item pagination-item-active">
      <a class="pagination-button" href="#someurl" aria-current="page"><span class="screenreader-only">page </span>1</a>
    </li>
    <li class="pagination-item">
      <a class="pagination-button" href="#someurl"><span class="screenreader-only">page </span>2</a>
    </li>
    <li class="pagination-item">
      <span>...</span>
    </li>
    <li class="pagination-item">
      <a class="pagination-button" href="#someurl"><span class="screenreader-only">page </span>99</a>
    </li>
    <li class="pagination-item">
      <a class="pagination-button" href="#someurl">Next &rsaquo;</a>
    </li>
    <li class="pagination-item">
      <a class="pagination-button" href="#someurl">Last &raquo;</a>
    </li>
  </ul>
</nav>

<div class="mbe24"></div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<nav class="pagination-container" aria-label="pagination">
  <ul class="pagination pagination-bordered">
    <li class="pagination-item pagination-item-disabled">
      <a class="pagination-button" href="#someurl" aria-disabled="true" tabindex="-1">&laquo; First</a>
    </li>
    <li class="pagination-item pagination-item-disabled">
      <a class="pagination-button" href="#someurl" aria-disabled="true" tabindex="-1">&lsaquo; Previous</a>
    </li>
    <li class="pagination-item pagination-item-active">
      <a class="pagination-button" href="#someurl" aria-current="page"><span class="screenreader-only">page </span>1</a>
    </li>
    <li class="pagination-item">
      <a class="pagination-button" href="#someurl"><span class="screenreader-only">page </span>2</a>
    </li>
    <li class="pagination-item">
      <span>...</span>
    </li>
    <li class="pagination-item">
      <a class="pagination-button" href="#someurl"><span class="screenreader-only">page </span>99</a>
    </li>
    <li class="pagination-item">
      <a class="pagination-button" href="#someurl">Next &rsaquo;</a>
    </li>
    <li class="pagination-item">
      <a class="pagination-button" href="#someurl">Last &raquo;</a>
    </li>
  </ul>
</nav>
```
</details>
