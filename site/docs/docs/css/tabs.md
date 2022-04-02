# Tabs

The `Tab` component provides a means to switch between different but contextually related panels. 

<div class="mbs24"></div>

## Usage

To use AgnosticUI as a CSS only framework, you can simply link to the `common.min.css` and `components.min.css` files. These can be served from a CDN (as you'll see in the following example), or relative to your project.

<h2>Default</h2>

<section class="tabs default mbe24">
  <div class="tab-list" role="tablist">
    <button class="tab-item tab-button active" role="tab" aria-controls="panel-1" aria-selected="true">Tab 1</button>
    <button class="tab-item tab-button" role="tab" aria-controls="panel-2" aria-selected="false">Tab 2</button>
    <button class="tab-item tab-button" role="tab" aria-controls="panel-3" aria-selected="false">Tab 3</button>
  </div>
  <div id="panel-1" class="tab-panel" role="tabpanel" tab-title="Tab 1">
    <div>Tab panel 1</div>
  </div>
  <div id="panel-2" class="tab-panel" role="tabpanel" tab-title="Tab 2">
    <div>Tab panel 2</div>
  </div>
  <div id="panel-3" class="tab-panel" role="tabpanel" tab-title="Tab 3">
    <p>
        You should be able to tab into the entire panel, and then proceed to tab into some of these meaningless anchor tags
        aka random <a href="www.yahoo.com">yahoo
            links</a>. Here's one more for good measure; random <a href="www.yahoo.com">yahoo link</a>.
    </p>
    <p>Did you try tabbing in? Try also shift-tab to go backwards. Remember, once you get up into those tab buttons you
        have to use the arrow keys :)</p>
    <p>You can also try <i>Home</i> and <i>End</i> which should take you to leftmost and rightmost tabs respectively.</p>
  </div>
</section>

<div class="mbe24"></div>
<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<section class="tabs default mbe24">
  <div class="tab-list" role="tablist">
    <button class="tab-item tab-button active" role="tab" aria-controls="panel-1" aria-selected="true">Tab 1</button>
    <button class="tab-item tab-button" role="tab" aria-controls="panel-2" aria-selected="false">Tab 2</button>
    <button class="tab-item tab-button" role="tab" aria-controls="panel-3" aria-selected="false">Tab 3</button>
  </div>
  <div id="panel-1" class="tab-panel" role="tabpanel" tab-title="Tab 1">
    <div>Tab panel 1</div>
  </div>
  <div id="panel-2" class="tab-panel" role="tabpanel" tab-title="Tab 2">
    <div>Tab panel 2</div>
  </div>
  <div id="panel-3" class="tab-panel" role="tabpanel" tab-title="Tab 3">
    <p>
        You should be able to tab into the entire panel, and then proceed to tab into some of these meaningless anchor tags
        aka random <a href="www.yahoo.com">yahoo
            links</a>. Here's one more for good measure; random <a href="www.yahoo.com">yahoo link</a>.
    </p>
    <p>Did you try tabbing in? Try also shift-tab to go backwards. Remember, once you get up into those tab buttons you
        have to use the arrow keys :)</p>
    <p>You can also try <i>Home</i> and <i>End</i> which should take you to leftmost and rightmost tabs respectively.</p>
  </div>
</section>
```
</details>

<h2>Large</h2>
<section class="tabs large-demo mbe24">
  <div class="tab-list" role="tablist">
    <button class="tab-item tab-button tab-button-large active" role="tab" aria-controls="panel-b1" aria-selected="true">Tab 1</button>
    <button class="tab-item tab-button tab-button-large" role="tab" aria-controls="panel-b2" aria-selected="false">Tab 2</button>
    <button class="tab-item tab-button tab-button-large" role="tab" aria-controls="panel-b3" aria-selected="false">Tab 3</button>
  </div>
  <div id="panel-b1" class="tab-panel" role="tabpanel" tab-title="Tab 1">
    <div>Tab panel 1</div>
  </div>
  <div id="panel-b2" class="tab-panel" role="tabpanel" tab-title="Tab 2">
    <div>Tab panel 2</div>
  </div>
  <div id="panel-b3" class="tab-panel" role="tabpanel" tab-title="Tab 3">
    <p>
        You should be able to tab into the entire panel, and then proceed to tab into some of these meaningless anchor tags
        aka random <a href="www.yahoo.com">yahoo
            links</a>. Here's one more for good measure; random <a href="www.yahoo.com">yahoo link</a>.
    </p>
    <p>Did you try tabbing in? Try also shift-tab to go backwards. Remember, once you get up into those tab buttons you
        have to use the arrow keys :)</p>
    <p>You can also try <i>Home</i> and <i>End</i> which should take you to leftmost and rightmost tabs respectively.</p>
  </div>
</section>

<div class="mbe24"></div>
<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<section class="tabs large-demo mbe24">
  <div class="tab-list" role="tablist">
    <button class="tab-item tab-button tab-button-large active" role="tab" aria-controls="panel-b1" aria-selected="true">Tab 1</button>
    <button class="tab-item tab-button tab-button-large" role="tab" aria-controls="panel-b2" aria-selected="false">Tab 2</button>
    <button class="tab-item tab-button tab-button-large" role="tab" aria-controls="panel-b3" aria-selected="false">Tab 3</button>
  </div>
  <div id="panel-b1" class="tab-panel" role="tabpanel" tab-title="Tab 1">
    <div>Tab panel 1</div>
  </div>
  <div id="panel-b2" class="tab-panel" role="tabpanel" tab-title="Tab 2">
    <div>Tab panel 2</div>
  </div>
  <div id="panel-b3" class="tab-panel" role="tabpanel" tab-title="Tab 3">
    <p>
        You should be able to tab into the entire panel, and then proceed to tab into some of these meaningless anchor tags
        aka random <a href="www.yahoo.com">yahoo
            links</a>. Here's one more for good measure; random <a href="www.yahoo.com">yahoo link</a>.
    </p>
    <p>Did you try tabbing in? Try also shift-tab to go backwards. Remember, once you get up into those tab buttons you
        have to use the arrow keys :)</p>
    <p>You can also try <i>Home</i> and <i>End</i> which should take you to leftmost and rightmost tabs respectively.</p>
  </div>
</section>
```
</details>

<h2>xlarge</h2>

<section class="tabs xlarge-demo mbe24">
    <div class="tab-list" role="tablist">
        <button class="tab-item tab-button tab-button-xlarge active" role="tab" aria-controls="panel-d1" aria-selected="true">Tab 1</button>
        <button class="tab-item tab-button tab-button-xlarge" role="tab" aria-controls="panel-d2" aria-selected="false">Tab 2</button>
        <button class="tab-item tab-button tab-button-xlarge" role="tab" aria-controls="panel-c3" aria-selected="false">Tab 3</button>
    </div>
    <div id="panel-c1" class="tab-panel" role="tabpanel" tab-title="Tab 1">
        <div>Tab panel 1</div>
    </div>
    <div id="panel-c2" class="tab-panel" role="tabpanel" tab-title="Tab 2">
        <div>Tab panel 2</div>
    </div>
    <div id="panel-c3" class="tab-panel" role="tabpanel" tab-title="Tab 3">
        <p>
            You should be able to tab into the entire panel, and then proceed to tab into some of these meaningless anchor tags
            aka random <a href="www.yahoo.com">yahoo
                links</a>. Here's one more for good measure; random <a href="www.yahoo.com">yahoo link</a>.
        </p>
        <p>Did you try tabbing in? Try also shift-tab to go backwards. Remember, once you get up into those tab buttons you
            have to use the arrow keys :)</p>
        <p>You can also try <i>Home</i> and <i>End</i> which should take you to leftmost and rightmost tabs respectively.</p>
    </div>
</section>

<div class="mbe24"></div>
<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<section class="tabs xlarge-demo mbe24">
  <div class="tab-list" role="tablist">
    <button class="tab-item tab-button tab-button-xlarge active" role="tab" aria-controls="panel-d1" aria-selected="true">Tab 1</button>
    <button class="tab-item tab-button tab-button-xlarge" role="tab" aria-controls="panel-d2" aria-selected="false">Tab 2</button>
    <button class="tab-item tab-button tab-button-xlarge" role="tab" aria-controls="panel-c3" aria-selected="false">Tab 3</button>
  </div>
  <div id="panel-c1" class="tab-panel" role="tabpanel" tab-title="Tab 1">
    <div>Tab panel 1</div>
  </div>
  <div id="panel-c2" class="tab-panel" role="tabpanel" tab-title="Tab 2">
    <div>Tab panel 2</div>
  </div>
  <div id="panel-c3" class="tab-panel" role="tabpanel" tab-title="Tab 3">
    <p>
        You should be able to tab into the entire panel, and then proceed to tab into some of these meaningless anchor tags
        aka random <a href="www.yahoo.com">yahoo
            links</a>. Here's one more for good measure; random <a href="www.yahoo.com">yahoo link</a>.
    </p>
    <p>Did you try tabbing in? Try also shift-tab to go backwards. Remember, once you get up into those tab buttons you
        have to use the arrow keys :)</p>
    <p>You can also try <i>Home</i> and <i>End</i> which should take you to leftmost and rightmost tabs respectively.</p>
  </div>
</section>
```
</details>

<h2>Borderless</h2>
<section class="tabs tabs-borderless borderless-demo mbe24">
    <div class="tab-list" role="tablist">
        <button class="tab-item tab-button tab-button-xlarge active" role="tab" aria-controls="panel-e1" aria-selected="true">Tab 1</button>
        <button class="tab-item tab-button tab-button-xlarge" role="tab" aria-controls="panel-e2" aria-selected="false">Tab 2</button>
        <button class="tab-item tab-button tab-button-xlarge" role="tab" aria-controls="panel-e3" aria-selected="false">Tab 3</button>
    </div>
    <div id="panel-e1" class="tab-panel" role="tabpanel" tab-title="Tab 1">
        <div>Tab panel 1</div>
    </div>
    <div id="panel-e2" class="tab-panel" role="tabpanel" tab-title="Tab 2">
        <div>Tab panel 2</div>
    </div>
    <div id="panel-e3" class="tab-panel" role="tabpanel" tab-title="Tab 3">
        <p>
            You should be able to tab into the entire panel, and then proceed to tab into some of these meaningless anchor tags
            aka random <a href="www.yahoo.com">yahoo
                links</a>. Here's one more for good measure; random <a href="www.yahoo.com">yahoo link</a>.
        </p>
        <p>Did you try tabbing in? Try also shift-tab to go backwards. Remember, once you get up into those tab buttons you
            have to use the arrow keys :)</p>
        <p>You can also try <i>Home</i> and <i>End</i> which should take you to leftmost and rightmost tabs respectively.</p>
    </div>
</section>

<div class="mbe24"></div>
<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<section class="tabs tabs-borderless borderless-demo mbe24">
  <div class="tab-list" role="tablist">
    <button class="tab-item tab-button tab-button-xlarge active" role="tab" aria-controls="panel-e1" aria-selected="true">Tab 1</button>
    <button class="tab-item tab-button tab-button-xlarge" role="tab" aria-controls="panel-e2" aria-selected="false">Tab 2</button>
    <button class="tab-item tab-button tab-button-xlarge" role="tab" aria-controls="panel-e3" aria-selected="false">Tab 3</button>
  </div>
  <div id="panel-e1" class="tab-panel" role="tabpanel" tab-title="Tab 1">
    <div>Tab panel 1</div>
  </div>
  <div id="panel-e2" class="tab-panel" role="tabpanel" tab-title="Tab 2">
    <div>Tab panel 2</div>
  </div>
  <div id="panel-e3" class="tab-panel" role="tabpanel" tab-title="Tab 3">
    <p>
        You should be able to tab into the entire panel, and then proceed to tab into some of these meaningless anchor tags
        aka random <a href="www.yahoo.com">yahoo
            links</a>. Here's one more for good measure; random <a href="www.yahoo.com">yahoo link</a>.
    </p>
    <p>Did you try tabbing in? Try also shift-tab to go backwards. Remember, once you get up into those tab buttons you
        have to use the arrow keys :)</p>
    <p>You can also try <i>Home</i> and <i>End</i> which should take you to leftmost and rightmost tabs respectively.</p>
  </div>
</section>
```
</details>

<h2>vertical</h2>
<section class="tabs tabs-vertical vertical-demo mbe24">
    <div class="tab-list" role="tablist">
        <button class="tab-item tab-button active" role="tab" aria-controls="panel-d1" aria-selected="true">Tab 1</button>
        <button class="tab-item tab-button" role="tab" aria-controls="panel-d2" aria-selected="false">Tab 2</button>
        <button class="tab-item tab-button" role="tab" aria-controls="panel-d3" aria-selected="false">Tab 3</button>
    </div>
    <div id="panel-d1" class="tab-panel" role="tabpanel" tab-title="Tab 1">
        <div>Tab panel 1</div>
    </div>
    <div id="panel-d2" class="tab-panel" role="tabpanel" tab-title="Tab 2">
        <div>Tab panel 2</div>
    </div>
    <div id="panel-d3" class="tab-panel" role="tabpanel" tab-title="Tab 3">
        <p>
            You should be able to tab into the entire panel, and then proceed to tab into some of these meaningless anchor tags
            aka random <a href="www.yahoo.com">yahoo
                links</a>. Here's one more for good measure; random <a href="www.yahoo.com">yahoo link</a>.
        </p>
        <p>Did you try tabbing in? Try also shift-tab to go backwards. Remember, once you get up into those tab buttons you
            have to use the arrow keys :)</p>
        <p>You can also try <i>Home</i> and <i>End</i> which should take you to leftmost and rightmost tabs respectively.</p>
    </div>
</section>

<div class="mbe24"></div>
<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<section class="tabs tabs-vertical vertical-demo mbe24">
    <div class="tab-list" role="tablist">
        <button class="tab-item tab-button active" role="tab" aria-controls="panel-d1" aria-selected="true">Tab 1</button>
        <button class="tab-item tab-button" role="tab" aria-controls="panel-d2" aria-selected="false">Tab 2</button>
        <button class="tab-item tab-button" role="tab" aria-controls="panel-d3" aria-selected="false">Tab 3</button>
    </div>
    <div id="panel-d1" class="tab-panel" role="tabpanel" tab-title="Tab 1">
        <div>Tab panel 1</div>
    </div>
    <div id="panel-d2" class="tab-panel" role="tabpanel" tab-title="Tab 2">
        <div>Tab panel 2</div>
    </div>
    <div id="panel-d3" class="tab-panel" role="tabpanel" tab-title="Tab 3">
        <p>
            You should be able to tab into the entire panel, and then proceed to tab into some of these meaningless anchor tags
            aka random <a href="www.yahoo.com">yahoo
                links</a>. Here's one more for good measure; random <a href="www.yahoo.com">yahoo link</a>.
        </p>
        <p>Did you try tabbing in? Try also shift-tab to go backwards. Remember, once you get up into those tab buttons you
            have to use the arrow keys :)</p>
        <p>You can also try <i>Home</i> and <i>End</i> which should take you to leftmost and rightmost tabs respectively.</p>
    </div>
</section>
```
</details>
