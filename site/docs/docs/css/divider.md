# Divider

The `Divider` component is used to visually separate content blocks into clear groups.

<div class="mbs24"></div>

<div role="separator" class="divider mbe16" aria-orientation="horizontal"></div>
<div role="separator" class="divider mbe16" aria-orientation="horizontal">
  <span class="divider-content">centered by default</span>
</div>
<div role="separator" class="divider divider-justify-start mbe16" aria-orientation="horizontal">
  <span class="divider-content">justify left</span>
</div>
<div role="separator" class="divider divider-justify-end mbe16" aria-orientation="horizontal">
  <span class="divider-content">justify right</span>
</div>

<div class="mbe24"></div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<div role="separator" class="divider mbe16" aria-orientation="horizontal"></div>
<div role="separator" class="divider mbe16" aria-orientation="horizontal">
  <span class="divider-content">centered by default</span>
</div>
<div role="separator" class="divider divider-justify-start mbe16" aria-orientation="horizontal">
  <span class="divider-content">justify left</span>
</div>
<div role="separator" class="divider divider-justify-end mbe16" aria-orientation="horizontal">
  <span class="divider-content">justify right</span>
</div>
```
</details>

<div class="flex mbs24 mbe48">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <div class="divider divider-vertical" role="separator">
    <span class="divider-content">yes</span>
  </div>
  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
  <div class="divider divider-vertical" role="separator">
    <span class="divider-content">sir!</span>
  </div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
<div class="flex mbe48">
  <p>If you do not want any text content inside of your divider simply omit the <code>.divider-content</code> element.</p>
  <div class="divider divider-vertical" role="separator"></div>
  <p>If you do not want any text content inside of your divider simply omit the <code>.divider-content</code> element.</p>
</div>

<div class="mbe24"></div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<div class="flex mbe48">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <div class="divider divider-vertical" role="separator">
    <span class="divider-content">yes</span>
  </div>
  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
  <div class="divider divider-vertical" role="separator">
    <span class="divider-content">sir!</span>
  </div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
<div class="flex mbe48">
  <p>If you do not want any text content inside of your divider simply omit the <code>.divider-content</code> element.</p>
  <div class="divider divider-vertical" role="separator"></div>
  <p>If you do not want any text content inside of your divider simply omit the <code>.divider-content</code> element.</p>
</div>
```
</details>

<h3>Sizes horizontal</h3>
<div role="separator" class="divider divider-small">
  <span class="divider-content">Small</span>
</div>
<div role="separator" class="divider divider-large">
  <span class="divider-content">Large</span>
</div>
<div role="separator" class="divider divider-xlarge">
  <span class="divider-content">XLarge</span>
</div>

<div class="mbe24"></div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<div role="separator" class="divider divider-small">
  <span class="divider-content">Small</span>
</div>
<div role="separator" class="divider divider-large">
  <span class="divider-content">Large</span>
</div>
<div role="separator" class="divider divider-xlarge">
  <span class="divider-content">XLarge</span>
</div>
```
</details>

<h3>Sizes vertical</h3>
<div class="flex mbe48">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <div role="separator" class="divider divider-vertical divider-small">
    <span class="divider-content">Sm</span>
  </div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
<div class="flex mbe48">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <div role="separator" class="divider divider-vertical divider-large">
    <span class="divider-content">Lg</span>
  </div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
<div class="flex mbe48">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <div role="separator" class="divider divider-vertical divider-xlarge">
    <span class="divider-content">XL</span>
  </div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <div role="separator" class="divider divider-vertical divider-xlarge"></div>
  <p>Just to test it out we have placed no text in vertical divider I'm sitting besides. This is an extra large divider and it is quite thick indeed! Ok, I need to go write some more code and then take a nap. See you all later on!</p>
</div>

<div class="mbe24"></div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<div class="flex mbe48">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <div role="separator" class="divider divider-vertical divider-small">
    <span class="divider-content">Sm</span>
  </div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
<div class="flex mbe48">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <div role="separator" class="divider divider-vertical divider-large">
    <span class="divider-content">Lg</span>
  </div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
<div class="flex mbe48">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <div role="separator" class="divider divider-vertical divider-xlarge">
    <span class="divider-content">XL</span>
  </div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <div role="separator" class="divider divider-vertical divider-xlarge"></div>
  <p>Just to test it out we have placed no text in vertical divider I'm sitting besides. This is an extra large divider and it is quite thick indeed! Ok, I need to go write some more code and then take a nap. See you all later on!</p>
</div>
```
</details>

<h3>Colors</h3>
<div role="separator" class="divider divider-success mbe16" aria-orientation="horizontal">
  <span class="divider-content">Success</span>
</div>
<div role="separator" class="divider divider-info mbe16" aria-orientation="horizontal">
  <span class="divider-content">Info</span>
</div>
<div role="separator" class="divider divider-warning mbe16" aria-orientation="horizontal">
  <span class="divider-content">Warn</span>
</div>
<div role="separator" class="divider divider-error mbe16" aria-orientation="horizontal">
  <span class="divider-content">Error</span>
</div>

<div class="mbe24"></div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<div role="separator" class="divider divider-success mbe16" aria-orientation="horizontal">
  <span class="divider-content">Success</span>
</div>
<div role="separator" class="divider divider-info mbe16" aria-orientation="horizontal">
  <span class="divider-content">Info</span>
</div>
<div role="separator" class="divider divider-warning mbe16" aria-orientation="horizontal">
  <span class="divider-content">Warn</span>
</div>
<div role="separator" class="divider divider-error mbe16" aria-orientation="horizontal">
  <span class="divider-content">Error</span>
</div>
```
</details>
