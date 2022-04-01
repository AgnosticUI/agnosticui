# Table

The `Table` component is used to display tabular formatted data appropriately.

<div class="mbs24"></div>

## Usage

To use AgnosticUI as a CSS only framework, you can simply link to the `common.min.css` and `components.min.css` files. These can be served from a CDN (as you'll see in the following example), or relative to your project.


## Table

### Default Table

<div class="table-responsive mbe24">
  <table class="table">
    <caption class="caption-top">
      Tennis Superstars
    </caption>
    <thead>
      <tr>
        <th aria-sort="ascending" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Id</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Id</span>
              <span class="icon-sort icon-sort-ascending"></span>
            </button>
          </div>
        </th>
        <th aria-sort="none" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Name</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Name</span>
              <span class="icon-sort"></span>
            </button>
          </div>
        </th>
        <th scope="col">Weapon</th>
        <th aria-sort="descending" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Grand Slams</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Grand Slams</span>
              <span class="icon-sort icon-sort-descending"></span>
            </button>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Serena Williams</td>
        <td>Biggest serve in women's tennis all-time</td>
        <td>23</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Roger Federer</td>
        <td>Forehand and Serve</td>
        <td>20</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Novak Djokovic</td>
        <td>Backhand and speed</td>
        <td>20</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Martina Navratilova</td>
        <td>Serve and volley</td>
        <td>18</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Andre Agassi (* honorable mention)</td>
        <td>Return of serve. Groundstrokes</td>
        <td>8</td>
      </tr>
    </tbody>
  </table>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<div class="table-responsive mbe24">
  <table class="table">
    <caption class="caption-top">
      Tennis Superstars
    </caption>
    <thead>
      <tr>
        <th aria-sort="ascending" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Id</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Id</span>
              <span class="icon-sort icon-sort-ascending"></span>
            </button>
          </div>
        </th>
        <th aria-sort="none" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Name</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Name</span>
              <span class="icon-sort"></span>
            </button>
          </div>
        </th>
        <th scope="col">Weapon</th>
        <th aria-sort="descending" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Grand Slams</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Grand Slams</span>
              <span class="icon-sort icon-sort-descending"></span>
            </button>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Serena Williams</td>
        <td>Biggest serve in women's tennis all-time</td>
        <td>23</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Roger Federer</td>
        <td>Forehand and Serve</td>
        <td>20</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Novak Djokovic</td>
        <td>Backhand and speed</td>
        <td>20</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Martina Navratilova</td>
        <td>Serve and volley</td>
        <td>18</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Andre Agassi (* honorable mention)</td>
        <td>Return of serve. Groundstrokes</td>
        <td>8</td>
      </tr>
    </tbody>
  </table>
</div>
```
</details>

### Striped

<div class="table-responsive mbe24">
  <table class="table table-striped">
    <caption class="caption-top">
      Tennis Superstars
    </caption>
    <thead>
      <tr>
        <th aria-sort="ascending" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Id</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Id</span>
              <span class="icon-sort icon-sort-ascending"></span>
            </button>
          </div>
        </th>
        <th aria-sort="none" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Name</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Name</span>
              <span class="icon-sort"></span>
            </button>
          </div>
        </th>
        <th scope="col">Weapon</th>
        <th aria-sort="descending" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Grand Slams</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Grand Slams</span>
              <span class="icon-sort icon-sort-descending"></span>
            </button>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Serena Williams</td>
        <td>Biggest serve in women's tennis all-time</td>
        <td>23</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Roger Federer</td>
        <td>Forehand and Serve</td>
        <td>20</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Novak Djokovic</td>
        <td>Backhand and speed</td>
        <td>20</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Martina Navratilova</td>
        <td>Serve and volley</td>
        <td>18</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Andre Agassi (* honorable mention)</td>
        <td>Return of serve. Groundstrokes</td>
        <td>8</td>
      </tr>
    </tbody>
  </table>
</div>


<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<div class="table-responsive mbe24">
  <table class="table table-striped">
    <caption class="caption-top">
      Tennis Superstars
    </caption>
    <thead>
      <tr>
        <th aria-sort="ascending" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Id</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Id</span>
              <span class="icon-sort icon-sort-ascending"></span>
            </button>
          </div>
        </th>
        <th aria-sort="none" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Name</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Name</span>
              <span class="icon-sort"></span>
            </button>
          </div>
        </th>
        <th scope="col">Weapon</th>
        <th aria-sort="descending" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Grand Slams</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Grand Slams</span>
              <span class="icon-sort icon-sort-descending"></span>
            </button>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Serena Williams</td>
        <td>Biggest serve in women's tennis all-time</td>
        <td>23</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Roger Federer</td>
        <td>Forehand and Serve</td>
        <td>20</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Novak Djokovic</td>
        <td>Backhand and speed</td>
        <td>20</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Martina Navratilova</td>
        <td>Serve and volley</td>
        <td>18</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Andre Agassi (* honorable mention)</td>
        <td>Return of serve. Groundstrokes</td>
        <td>8</td>
      </tr>
    </tbody>
  </table>
</div>
```
</details>

### Borderless

<div class="table-responsive mbe24">
  <table class="table table-borderless">
    <caption class="caption-top">
      Tennis Superstars
    </caption>
    <thead>
      <tr>
        <th aria-sort="ascending" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Id</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Id</span>
              <span class="icon-sort icon-sort-ascending"></span>
            </button>
          </div>
        </th>
        <th aria-sort="none" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Name</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Name</span>
              <span class="icon-sort"></span>
            </button>
          </div>
        </th>
        <th scope="col">Weapon</th>
        <th aria-sort="descending" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Grand Slams</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Grand Slams</span>
              <span class="icon-sort icon-sort-descending"></span>
            </button>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Serena Williams</td>
        <td>Biggest serve in women's tennis all-time</td>
        <td>23</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Roger Federer</td>
        <td>Forehand and Serve</td>
        <td>20</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Novak Djokovic</td>
        <td>Backhand and speed</td>
        <td>20</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Martina Navratilova</td>
        <td>Serve and volley</td>
        <td>18</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Andre Agassi (* honorable mention)</td>
        <td>Return of serve. Groundstrokes</td>
        <td>8</td>
      </tr>
    </tbody>
  </table>
</div>


<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<div class="table-responsive mbe24">
  <table class="table table-borderless">
    <caption class="caption-top">
      Tennis Superstars
    </caption>
    <thead>
      <tr>
        <th aria-sort="ascending" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Id</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Id</span>
              <span class="icon-sort icon-sort-ascending"></span>
            </button>
          </div>
        </th>
        <th aria-sort="none" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Name</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Name</span>
              <span class="icon-sort"></span>
            </button>
          </div>
        </th>
        <th scope="col">Weapon</th>

        <th aria-sort="descending" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Grand Slams</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Grand Slams</span>
              <span class="icon-sort icon-sort-descending"></span>
            </button>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Serena Williams</td>
        <td>Biggest serve in women's tennis all-time</td>
        <td>23</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Roger Federer</td>
        <td>Forehand and Serve</td>
        <td>20</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Novak Djokovic</td>
        <td>Backhand and speed</td>
        <td>20</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Martina Navratilova</td>
        <td>Serve and volley</td>
        <td>18</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Andre Agassi (* honorable mention)</td>
        <td>Return of serve. Groundstrokes</td>
        <td>8</td>
      </tr>
    </tbody>
  </table>
</div>
```
</details>

### Hoverable

<div class="table-responsive mbe24">
  <table class="table table-hoverable">
    <caption class="caption-top">
      Tennis Superstars
    </caption>
    <thead>
      <tr>
        <th aria-sort="ascending" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Id</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Id</span>
              <span class="icon-sort icon-sort-ascending"></span>
            </button>
          </div>
        </th>
        <th aria-sort="none" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Name</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Name</span>
              <span class="icon-sort"></span>
            </button>
          </div>
        </th>
        <th scope="col">Weapon</th>
        <th aria-sort="descending" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Grand Slams</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Grand Slams</span>
              <span class="icon-sort icon-sort-descending"></span>
            </button>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Serena Williams</td>
        <td>Biggest serve in women's tennis all-time</td>
        <td>23</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Roger Federer</td>
        <td>Forehand and Serve</td>
        <td>20</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Novak Djokovic</td>
        <td>Backhand and speed</td>
        <td>20</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Martina Navratilova</td>
        <td>Serve and volley</td>
        <td>18</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Andre Agassi (* honorable mention)</td>
        <td>Return of serve. Groundstrokes</td>
        <td>8</td>
      </tr>
    </tbody>
  </table>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<div class="table-responsive mbe24">
  <table class="table table-hoverable">
    <caption class="caption-top">
      Tennis Superstars
    </caption>
    <thead>
      <tr>
        <th aria-sort="ascending" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Id</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Id</span>
              <span class="icon-sort icon-sort-ascending"></span>
            </button>
          </div>
        </th>
        <th aria-sort="none" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Name</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Name</span>
              <span class="icon-sort"></span>
            </button>
          </div>
        </th>
        <th scope="col">Weapon</th>
        <th aria-sort="descending" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Grand Slams</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Grand Slams</span>
              <span class="icon-sort icon-sort-descending"></span>
            </button>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Serena Williams</td>
        <td>Biggest serve in women's tennis all-time</td>
        <td>23</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Roger Federer</td>
        <td>Forehand and Serve</td>
        <td>20</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Novak Djokovic</td>
        <td>Backhand and speed</td>
        <td>20</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Martina Navratilova</td>
        <td>Serve and volley</td>
        <td>18</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Andre Agassi (* honorable mention)</td>
        <td>Return of serve. Groundstrokes</td>
        <td>8</td>
      </tr>
    </tbody>
  </table>
</div>
```
</details>

## Sizes

### Small

<div class="table-responsive mbe24">
  <table class="table table-small">
    <caption class="caption-top">
      Tennis Superstars
    </caption>
    <thead>
      <tr>
        <th aria-sort="ascending" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Id</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Id</span>
              <span class="icon-sort icon-sort-ascending"></span>
            </button>
          </div>
        </th>
        <th aria-sort="none" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Name</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Name</span>
              <span class="icon-sort"></span>
            </button>
          </div>
        </th>
        <th scope="col">Weapon</th>
        <th aria-sort="descending" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Grand Slams</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Grand Slams</span>
              <span class="icon-sort icon-sort-descending"></span>
            </button>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Serena Williams</td>
        <td>Biggest serve in women's tennis all-time</td>
        <td>23</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Roger Federer</td>
        <td>Forehand and Serve</td>
        <td>20</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Novak Djokovic</td>
        <td>Backhand and speed</td>
        <td>20</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Martina Navratilova</td>
        <td>Serve and volley</td>
        <td>18</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Andre Agassi (* honorable mention)</td>
        <td>Return of serve. Groundstrokes</td>
        <td>8</td>
      </tr>
    </tbody>
  </table>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<div class="table-responsive mbe24">
  <table class="table table-small">
    <caption class="caption-top">
      Tennis Superstars
    </caption>
    <thead>
      <tr>
        <th aria-sort="ascending" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Id</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Id</span>
              <span class="icon-sort icon-sort-ascending"></span>
            </button>
          </div>
        </th>
        <th aria-sort="none" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Name</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Name</span>
              <span class="icon-sort"></span>
            </button>
          </div>
        </th>
        <th scope="col">Weapon</th>
        <th aria-sort="descending" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Grand Slams</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Grand Slams</span>
              <span class="icon-sort icon-sort-descending"></span>
            </button>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Serena Williams</td>
        <td>Biggest serve in women's tennis all-time</td>
        <td>23</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Roger Federer</td>
        <td>Forehand and Serve</td>
        <td>20</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Novak Djokovic</td>
        <td>Backhand and speed</td>
        <td>20</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Martina Navratilova</td>
        <td>Serve and volley</td>
        <td>18</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Andre Agassi (* honorable mention)</td>
        <td>Return of serve. Groundstrokes</td>
        <td>8</td>
      </tr>
    </tbody>
  </table>
</div>
```
</details>

### Large

<div class="table-responsive mbe24">
  <table class="table table-large">
    <caption class="caption-top">
      Tennis Superstars
    </caption>
    <thead>
      <tr>
        <th aria-sort="ascending" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Id</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Id</span>
              <span class="icon-sort icon-sort-ascending"></span>
            </button>
          </div>
        </th>
        <th aria-sort="none" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Name</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Name</span>
              <span class="icon-sort"></span>
            </button>
          </div>
        </th>
        <th scope="col">Weapon</th>
        <th aria-sort="descending" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Grand Slams</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Grand Slams</span>
              <span class="icon-sort icon-sort-descending"></span>
            </button>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Serena Williams</td>
        <td>Biggest serve in women's tennis all-time</td>
        <td>23</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Roger Federer</td>
        <td>Forehand and Serve</td>
        <td>20</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Novak Djokovic</td>
        <td>Backhand and speed</td>
        <td>20</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Martina Navratilova</td>
        <td>Serve and volley</td>
        <td>18</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Andre Agassi (* honorable mention)</td>
        <td>Return of serve. Groundstrokes</td>
        <td>8</td>
      </tr>
    </tbody>
  </table>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<div class="table-responsive mbe24">
  <table class="table table-large">
    <caption class="caption-top">
      Tennis Superstars
    </caption>
    <thead>
      <tr>
        <th aria-sort="ascending" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Id</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Id</span>
              <span class="icon-sort icon-sort-ascending"></span>
            </button>
          </div>
        </th>
        <th aria-sort="none" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Name</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Name</span>
              <span class="icon-sort"></span>
            </button>
          </div>
        </th>
        <th scope="col">Weapon</th>
        <th aria-sort="descending" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Grand Slams</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Grand Slams</span>
              <span class="icon-sort icon-sort-descending"></span>
            </button>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Serena Williams</td>
        <td>Biggest serve in women's tennis all-time</td>
        <td>23</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Roger Federer</td>
        <td>Forehand and Serve</td>
        <td>20</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Novak Djokovic</td>
        <td>Backhand and speed</td>
        <td>20</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Martina Navratilova</td>
        <td>Serve and volley</td>
        <td>18</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Andre Agassi (* honorable mention)</td>
        <td>Return of serve. Groundstrokes</td>
        <td>8</td>
      </tr>
    </tbody>
  </table>
</div>
```
</details>

### X-Large

<div class="table-responsive mbe24">
  <table class="table table-xlarge">
    <caption class="caption-top">
      Tennis Superstars
    </caption>
    <thead>
      <tr>
        <th aria-sort="ascending" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Id</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Id</span>
              <span class="icon-sort icon-sort-ascending"></span>
            </button>
          </div>
        </th>
        <th aria-sort="none" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Name</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Name</span>
              <span class="icon-sort"></span>
            </button>
          </div>
        </th>
        <th scope="col">Weapon</th>
        <th aria-sort="descending" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Grand Slams</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Grand Slams</span>
              <span class="icon-sort icon-sort-descending"></span>
            </button>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Serena Williams</td>
        <td>Biggest serve in women's tennis all-time</td>
        <td>23</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Roger Federer</td>
        <td>Forehand and Serve</td>
        <td>20</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Novak Djokovic</td>
        <td>Backhand and speed</td>
        <td>20</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Martina Navratilova</td>
        <td>Serve and volley</td>
        <td>18</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Andre Agassi (* honorable mention)</td>
        <td>Return of serve. Groundstrokes</td>
        <td>8</td>
      </tr>
    </tbody>
  </table>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<div class="table-responsive mbe24">
  <table class="table table-xlarge">
    <caption class="caption-top">
      Tennis Superstars
    </caption>
    <thead>
      <tr>
        <th aria-sort="ascending" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Id</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Id</span>
              <span class="icon-sort icon-sort-ascending"></span>
            </button>
          </div>
        </th>
        <th aria-sort="none" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Name</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Name</span>
              <span class="icon-sort"></span>
            </button>
          </div>
        </th>
        <th scope="col">Weapon</th>
        <th aria-sort="descending" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Grand Slams</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Grand Slams</span>
              <span class="icon-sort icon-sort-descending"></span>
            </button>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Serena Williams</td>
        <td>Biggest serve in women's tennis all-time</td>
        <td>23</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Roger Federer</td>
        <td>Forehand and Serve</td>
        <td>20</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Novak Djokovic</td>
        <td>Backhand and speed</td>
        <td>20</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Martina Navratilova</td>
        <td>Serve and volley</td>
        <td>18</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Andre Agassi (* honorable mention)</td>
        <td>Return of serve. Groundstrokes</td>
        <td>8</td>
      </tr>
    </tbody>
  </table>
</div>
```
</details>

### Uppercased Header Labels

<div class="table-responsive mbe24">
  <table class="table table-caps">
    <caption class="caption-top">
      Tennis Superstars
    </caption>
    <thead>
      <tr>
        <th aria-sort="ascending" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Id</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Id</span>
              <span class="icon-sort icon-sort-ascending"></span>
            </button>
          </div>
        </th>
        <th aria-sort="none" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Name</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Name</span>
              <span class="icon-sort"></span>
            </button>
          </div>
        </th>
        <th scope="col">Weapon</th>
        <th aria-sort="descending" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Grand Slams</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Grand Slams</span>
              <span class="icon-sort icon-sort-descending"></span>
            </button>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Serena Williams</td>
        <td>Biggest serve in women's tennis all-time</td>
        <td>23</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Roger Federer</td>
        <td>Forehand and Serve</td>
        <td>20</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Novak Djokovic</td>
        <td>Backhand and speed</td>
        <td>20</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Martina Navratilova</td>
        <td>Serve and volley</td>
        <td>18</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Andre Agassi (* honorable mention)</td>
        <td>Return of serve. Groundstrokes</td>
        <td>8</td>
      </tr>
    </tbody>
  </table>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<div class="table-responsive mbe24">
  <table class="table table-caps">
    <caption class="caption-top">
      Tennis Superstars
    </caption>
    <thead>
      <tr>
        <th aria-sort="ascending" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Id</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Id</span>
              <span class="icon-sort icon-sort-ascending"></span>
            </button>
          </div>
        </th>
        <th aria-sort="none" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Name</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Name</span>
              <span class="icon-sort"></span>
            </button>
          </div>
        </th>
        <th scope="col">Weapon</th>
        <th aria-sort="descending" scope="col">
          <div class="table-header-container">
            <span class="table-sort-label">Grand Slams</span>
            <button type="button" class="table-sort">
              <span class="screenreader-only">Grand Slams</span>
              <span class="icon-sort icon-sort-descending"></span>
            </button>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Serena Williams</td>
        <td>Biggest serve in women's tennis all-time</td>
        <td>23</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Roger Federer</td>
        <td>Forehand and Serve</td>
        <td>20</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Novak Djokovic</td>
        <td>Backhand and speed</td>
        <td>20</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Martina Navratilova</td>
        <td>Serve and volley</td>
        <td>18</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Andre Agassi (* honorable mention)</td>
        <td>Return of serve. Groundstrokes</td>
        <td>8</td>
      </tr>
    </tbody>
  </table>
</div>
```
</details>

### Active Cells

<div class="table-responsive mbe24">
  <table class="table">
    <caption class="caption-top">
      Tennis Superstars
    </caption>
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Weapon</th>
        <th scope="col">Majors</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" class="table-active">Serena Williams</th>
        <td>Biggest serve in women's tennis all-time</td>
        <td>23</td>
      </tr>
      <tr>
        <th scope="row">Martina Navratilova/th></th>
        <td>Serve and volley</td>
        <td>18</td>
      </tr>
      <tr>
        <th scope="row">Roger Federer/th></th>
        <td class="table-active">Forehand and Serve</td>
        <td>20</td>
      </tr>
      <tr>
        <th scope="row">Novak Djokovic</th>
        <td>Backhand and speed</td>
        <td>20</td>
      </tr>
      <tr>
        <th scope="row">Andre Agassi (* honorable mention)</th>
        <td>Return of serve. Groundstrokes</td>
        <td>8</td>
      </tr>
    </tbody>
  </table>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<div class="table-responsive mbe24">
  <table class="table">
    <caption class="caption-top">
      Tennis Superstars
    </caption>
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Weapon</th>
        <th scope="col">Majors</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" class="table-active">Serena Williams</th>
        <td>Biggest serve in women's tennis all-time</td>
        <td>23</td>
      </tr>
      <tr>
        <th scope="row">Martina Navratilova/th></th>
        <td>Serve and volley</td>
        <td>18</td>
      </tr>
      <tr>
        <th scope="row">Roger Federer/th></th>
        <td class="table-active">Forehand and Serve</td>
        <td>20</td>
      </tr>
      <tr>
        <th scope="row">Novak Djokovic</th>
        <td>Backhand and speed</td>
        <td>20</td>
      </tr>
      <tr>
        <th scope="row">Andre Agassi (* honorable mention)</th>
        <td>Return of serve. Groundstrokes</td>
        <td>8</td>
      </tr>
    </tbody>
  </table>
</div>
```
</details>
