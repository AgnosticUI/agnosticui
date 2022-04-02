# Select

The `Select` component is a wrapper around the native `<select>` element with refinements made to its initial appearance. `Select` is best to use if when there are 4 or more options.

<div class="mbs24"></div>

## Usage

To use AgnosticUI as a CSS only framework, you can simply link to the `common.min.css` and `components.min.css` files. These can be served from a CDN (as you'll see in the following example), or relative to your project.

## Select

<!-- Default -->
<div class="mbe24">
  <label class="select-label screenreader-only" for="options">Who is the greatest tennis player of all-time? Select from below.</label>
  <select class="select select" name="options" id="options">
    <option value>- Select the best tennis player of all time -</option>
    <option value="andre">Andre Agassi</option>
    <option value="serena">Serena Williams</option>
    <option value="roger">Roger Federer</option>
    <option value="mac">John McEnroe</option>
    <option value="martina">Martina Navratilova</option>
    <option value="rafa">Rafael Nadal</option>
    <option value="borg">Bjorn Borg</option>
    <option value="althea">Althea Gibson</option>
  </select>
</div>

<div class="mbe24"></div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<div class="mbe24">
  <label class="select-label screenreader-only" for="options">Who is the greatest tennis player of all-time? Select from below.</label>
  <select class="select select" name="options" id="options">
    <option value>- Select the best tennis player of all time -</option>
    <option value="andre">Andre Agassi</option>
    <option value="serena">Serena Williams</option>
    <option value="roger">Roger Federer</option>
    <option value="mac">John McEnroe</option>
    <option value="martina">Martina Navratilova</option>
    <option value="rafa">Rafael Nadal</option>
    <option value="borg">Bjorn Borg</option>
    <option value="althea">Althea Gibson</option>
  </select>
</div>
```
</details>

<!-- Large -->
<div class="mbe24">
  <label class="select-label screenreader-only" for="options">Who is the greatest tennis player of all-time? Select from below.</label>
  <select class="select select select-large" name="options" id="options">
    <option value>- Select the best tennis player of all time -</option>
    <option value="andre">Andre Agassi</option>
    <option value="serena">Serena Williams</option>
    <option value="roger">Roger Federer</option>
    <option value="mac">John McEnroe</option>
    <option value="martina">Martina Navratilova</option>
    <option value="rafa">Rafael Nadal</option>
    <option value="borg">Bjorn Borg</option>
    <option value="althea">Althea Gibson</option>
  </select>
</div>

<div class="mbe24"></div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<div class="mbe24">
  <label class="select-label screenreader-only" for="options">Who is the greatest tennis player of all-time? Select from below.</label>
  <select class="select select select-large" name="options" id="options">
    <option value>- Select the best tennis player of all time -</option>
    <option value="andre">Andre Agassi</option>
    <option value="serena">Serena Williams</option>
    <option value="roger">Roger Federer</option>
    <option value="mac">John McEnroe</option>
    <option value="martina">Martina Navratilova</option>
    <option value="rafa">Rafael Nadal</option>
    <option value="borg">Bjorn Borg</option>
    <option value="althea">Althea Gibson</option>
  </select>
</div>
```
</details>

<!-- Small -->
<div class="mbe24">
  <label class="select-label screenreader-only" for="options">Who is the greatest tennis player of all-time? Select from below.</label>
  <select class="select select select-small" name="options" id="options">
    <option value>- Select the best tennis player of all time -</option>
    <option value="andre">Andre Agassi</option>
    <option value="serena">Serena Williams</option>
    <option value="roger">Roger Federer</option>
    <option value="mac">John McEnroe</option>
    <option value="martina">Martina Navratilova</option>
    <option value="rafa">Rafael Nadal</option>
    <option value="borg">Bjorn Borg</option>
    <option value="althea">Althea Gibson</option>
  </select>
</div>

<div class="mbe24"></div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<div class="mbe24">
  <label class="select-label screenreader-only" for="options">Who is the greatest tennis player of all-time? Select from below.</label>
  <select class="select select select-small" name="options" id="options">
    <option value>- Select the best tennis player of all time -</option>
    <option value="andre">Andre Agassi</option>
    <option value="serena">Serena Williams</option>
    <option value="roger">Roger Federer</option>
    <option value="mac">John McEnroe</option>
    <option value="martina">Martina Navratilova</option>
    <option value="rafa">Rafael Nadal</option>
    <option value="borg">Bjorn Borg</option>
    <option value="althea">Althea Gibson</option>
  </select>
</div>
```
</details>

<!-- Disabled -->
<div class="mbe24">
  <label class="select-label screenreader-only" for="options">Who is the greatest tennis player of all-time? Select from below.</label>
  <select id="options" name="options" class="select" aria-label="Disabled select example" disabled>
    <option value>- Select the best tennis player of all time -</option>
    <option value="andre">Andre Agassi</option>
    <option value="serena">Serena Williams</option>
    <option value="roger">Roger Federer</option>
    <option value="mac">John McEnroe</option>
    <option value="martina">Martina Navratilova</option>
    <option value="rafa">Rafael Nadal</option>
    <option value="borg">Bjorn Borg</option>
    <option value="althea">Althea Gibson</option>
  </select>
</div>

<div class="mbe24"></div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<div class="mbe24">
  <label class="select-label screenreader-only" for="options">Who is the greatest tennis player of all-time? Select from below.</label>
  <select id="options" name="options" class="select" aria-label="Disabled select example" disabled>
    <option value>- Select the best tennis player of all time -</option>
    <option value="andre">Andre Agassi</option>
    <option value="serena">Serena Williams</option>
    <option value="roger">Roger Federer</option>
    <option value="mac">John McEnroe</option>
    <option value="martina">Martina Navratilova</option>
    <option value="rafa">Rafael Nadal</option>
    <option value="borg">Bjorn Borg</option>
    <option value="althea">Althea Gibson</option>
  </select>
</div>
```
</details>

<!-- Multi -->
<div class="mbe24">
  <label class="select-label screenreader-only" for="options">Who is the greatest tennis player of all-time? Select from below.</label>
  <select id="options" name="options" class="select" size="4" multiple aria-label="size 4 multiple select example">
    <option value>- Select the best tennis player of all time -</option>
    <option value="andre">Andre Agassi</option>
    <option value="serena">Serena Williams</option>
    <option value="roger">Roger Federer</option>
    <option value="mac">John McEnroe</option>
    <option value="martina">Martina Navratilova</option>
    <option value="rafa">Rafael Nadal</option>
    <option value="borg">Bjorn Borg</option>
    <option value="althea">Althea Gibson</option>
  </select>
</div>


<div class="mbe24"></div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<div class="mbe24">
  <label class="select-label screenreader-only" for="options">Who is the greatest tennis player of all-time? Select from below.</label>
  <select id="options" name="options" class="select" size="4" multiple aria-label="size 4 multiple select example">
    <option value>- Select the best tennis player of all time -</option>
    <option value="andre">Andre Agassi</option>
    <option value="serena">Serena Williams</option>
    <option value="roger">Roger Federer</option>
    <option value="mac">John McEnroe</option>
    <option value="martina">Martina Navratilova</option>
    <option value="rafa">Rafael Nadal</option>
    <option value="borg">Bjorn Borg</option>
    <option value="althea">Althea Gibson</option>
  </select>
</div>
```
</details>
