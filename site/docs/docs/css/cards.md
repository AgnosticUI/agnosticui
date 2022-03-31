# Cards

`Cards` are essentialy flexbox-based boxes that take up their container's width.
These cards are set up as [media query-less responsive cards](https://css-tricks.com/how-to-make-a-media-query-less-card-component/#a-recipe-for-zero-media-queries) that leverage the behavior of `flex-wrap`. As such, it's up to you to set an the `flex-basis` properties so that your content will stack (aka wrap) when the viewport cannot accomodate your content otherwise.

<div class="mbs24"></div>

## Usage

To use AgnosticUI as a CSS only framework, you can simply link to the `common.min.css` and `components.min.css` files. These can be served from a CDN (as you'll see in the following example), or relative to your project.
## Cards

<!-- Card -->
<article class="card  items-stretch mbs24 mbe32">
  <div class="card-demo-image-wrap">
    <img src="https://via.placeholder.com/1000x400?text=Really+Big+Image" alt="Image placeholder image for testing responsiveness" />
  </div>
  <div class="card-demo-content pbs32 pbe32 pis32 pie32">
    <h1 class="card-demo-title"><a href="#">Card: Card</a></h1>
    <p class="card-demo-metadata">
      <span class="card-demo-rating">★★★★<span>☆</span></span>
      <span class="card-demo-votes">(1234 votes)</span>
    </p>
    <p class="card-demo-desc mbe24">Note that the AgnosticUI Card component is a very thin layer and only supplies the card as a shell for you to project your own content (and thus HTML and CSS) onto. For example, this card is essentially a row-based horizontal layout as the image is on the left and the body of the card (where you&#x27;re reading now!) is on the right. But that aspect of this layout is demo code. Some things are offered by the card component though — if the viewport narrows enough, for example, it becomes a stacked card. If you want the card always be stacked, see the example below which applies the appropriate stacked card class.</p>
    <button class="btn btn-primary" type="submit">Do Something</button>
  </div>
</article>
<!-- Card Border -->
<article class="card card-border items-stretch mbe32">
  <div class="card-demo-image-wrap">
    <img src="https://via.placeholder.com/1000x400?text=Really+Big+Image" alt="Image placeholder image for testing responsiveness" />
  </div>
  <div class="card-demo-content pbs32 pbe32 pis32 pie32">
    <h1 class="card-demo-title"><a href="#">Card: Card Border</a></h1>
    <p class="card-demo-metadata">
      <span class="card-demo-rating">★★★★<span>☆</span></span>
      <span class="card-demo-votes">(1234 votes)</span>
    </p>
    <p class="card-demo-desc mbe24">Note that the AgnosticUI Card component is a very thin layer and only supplies the card as a shell for you to project your own content (and thus HTML and CSS) onto. For example, this card is essentially a row-based horizontal layout as the image is on the left and the body of the card (where you&#x27;re reading now!) is on the right. But that aspect of this layout is demo code. Some things are offered by the card component though — if the viewport narrows enough, for example, it becomes a stacked card. If you want the card always be stacked, see the example below which applies the appropriate stacked card class.</p>
    <button class="btn btn-primary" type="submit">Do Something</button>
  </div>
</article>
<!-- Card Rounded -->
<article class="card card-border card-rounded items-stretch mbe32">
  <div class="card-demo-image-wrap">
    <img src="https://via.placeholder.com/1000x400?text=Really+Big+Image" alt="Image placeholder image for testing responsiveness" />
  </div>
  <div class="card-demo-content pbs32 pbe32 pis32 pie32">
    <h1 class="card-demo-title"><a href="#">Card: Card Rounded</a></h1>
    <p class="card-demo-metadata">
      <span class="card-demo-rating">★★★★<span>☆</span></span>
      <span class="card-demo-votes">(1234 votes)</span>
    </p>
    <p class="card-demo-desc mbe24">Note that the AgnosticUI Card component is a very thin layer and only supplies the card as a shell for you to project your own content (and thus HTML and CSS) onto. For example, this card is essentially a row-based horizontal layout as the image is on the left and the body of the card (where you&#x27;re reading now!) is on the right. But that aspect of this layout is demo code. Some things are offered by the card component though — if the viewport narrows enough, for example, it becomes a stacked card. If you want the card always be stacked, see the example below which applies the appropriate stacked card class.</p>
    <button class="btn btn-primary" type="submit">Do Something</button>
  </div>
</article>
<!-- Card Shadow -->
<article class="card card-shadow items-stretch mbe32">
  <div class="card-demo-image-wrap">
    <img src="https://via.placeholder.com/1000x400?text=Really+Big+Image" alt="Image placeholder image for testing responsiveness" />
  </div>
  <div class="card-demo-content pbs32 pbe32 pis32 pie32">
    <h1 class="card-demo-title"><a href="#">Card: Card Shadow</a></h1>
    <p class="card-demo-metadata">
      <span class="card-demo-rating">★★★★<span>☆</span></span>
      <span class="card-demo-votes">(1234 votes)</span>
    </p>
    <p class="card-demo-desc mbe24">Note that the AgnosticUI Card component is a very thin layer and only supplies the card as a shell for you to project your own content (and thus HTML and CSS) onto. For example, this card is essentially a row-based horizontal layout as the image is on the left and the body of the card (where you&#x27;re reading now!) is on the right. But that aspect of this layout is demo code. Some things are offered by the card component though — if the viewport narrows enough, for example, it becomes a stacked card. If you want the card always be stacked, see the example below which applies the appropriate stacked card class.</p>
    <button class="btn btn-primary" type="submit">Do Something</button>
  </div>
</article>
<!-- Card Animated -->
<article class="card card-animated card-shadow items-stretch mbe32">
  <div class="card-demo-image-wrap">
    <img src="https://via.placeholder.com/1000x400?text=Really+Big+Image" alt="Image placeholder image for testing responsiveness" />
  </div>
  <div class="card-demo-content pbs32 pbe32 pis32 pie32">
    <h1 class="card-demo-title"><a href="#">Card: Card Animated</a></h1>
    <p class="card-demo-metadata">
      <span class="card-demo-rating">★★★★<span>☆</span></span>
      <span class="card-demo-votes">(1234 votes)</span>
    </p>
    <p class="card-demo-desc mbe24">Note that the AgnosticUI Card component is a very thin layer and only supplies the card as a shell for you to project your own content (and thus HTML and CSS) onto. For example, this card is essentially a row-based horizontal layout as the image is on the left and the body of the card (where you&#x27;re reading now!) is on the right. But that aspect of this layout is demo code. Some things are offered by the card component though — if the viewport narrows enough, for example, it becomes a stacked card. If you want the card always be stacked, see the example below which applies the appropriate stacked card class.</p>
    <button class="btn btn-primary" type="submit">Do Something</button>
  </div>
</article>
<!-- Stacked -->
<article class="card card-border card-stacked  mbe16">
  <div class="card-demo-image-wrap">
    <img src="https://via.placeholder.com/2000x1000?text=Really+Big+Image" alt="Image placeholder image for testing responsiveness" />
  </div>
  <div class="card-demo-content pbs32 pbe32 pis32 pie32">
    <h1 class="card-demo-title"><a href="#">Stacked Card Title</a></h1>
    <p class="card-demo-metadata mbe16">
      <span class="card-demo-rating">★★★★<span>☆</span></span>
      <span class="card-demo-votes">(1234 votes)</span>
    </p>
    <p class="card-demo-desc mbe24">
      This card has the stacked card class which produces a single-column or stacked layout.
      This is a popular choice for cards, but make sure you've applied the
      <i>card-stacked</i> class or else you want get this behavior
      <span class="quoted">out-the-box</span>. This particular example has an image whereas
      the one below does not.
    </p>
    <p class="mbe24">Lorem ipsum yoyoyo dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
    <button class="btn btn-primary" type="submit">Click me</button>
  </div>
</article>
<article class="card card-border card-stacked  mbe16">
  <div class="card-demo-content pbs32 pbe32 pis32 pie32">
    <h1 class="card-demo-title"><a href="#">Stacked Card Title</a></h1>
    <p class="card-demo-metadata">
      <span class="card-demo-rating">★★★★<span>☆</span></span>
      <span class="card-demo-votes">(1234 votes)</span>
    </p>
    <p class="card-demo-desc mbe24">
      This card also has the stacked card class which produces a single-column or stacked
      layout.
    </p>
    <p class="mbe24">Lorem ipsum yoyoyo dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
    <button class="btn btn-primary" type="submit">Click me</button>
  </div>
</article>

<!-- Card Success -->
<article class="card card-success items-stretch mbe32">
  <div class="card-demo-content pbs32 pbe32 pis32 pie32">
    <h1 class="card-demo-title"><a href="#">Card: Card Success</a></h1>
    <p class="card-demo-metadata">
      <span class="card-demo-rating">★★★★<span>☆</span></span>
      <span class="card-demo-votes">(1234 votes)</span>
    </p>
    <p class="card-demo-desc mbe24">Note that the AgnosticUI Card component is a very thin layer and only supplies the card as a shell for you to project your own content (and thus HTML and CSS) onto. For example, this card is essentially a row-based horizontal layout as the image is on the left and the body of the card (where you&#x27;re reading now!) is on the right. But that aspect of this layout is demo code. Some things are offered by the card component though — if the viewport narrows enough, for example, it becomes a stacked card. If you want the card always be stacked, see the example below which applies the appropriate stacked card class.</p>
    <button class="btn btn-primary" type="submit">Do Something</button>
  </div>
</article>

<!-- Card Info -->
<article class="card card-info items-stretch mbe32">
  <div class="card-demo-content pbs32 pbe32 pis32 pie32">
    <h1 class="card-demo-title"><a href="#">Card: Card Info</a></h1>
    <p class="card-demo-metadata">
      <span class="card-demo-rating">★★★★<span>☆</span></span>
      <span class="card-demo-votes">(1234 votes)</span>
    </p>
    <p class="card-demo-desc mbe24">Note that the AgnosticUI Card component is a very thin layer and only supplies the card as a shell for you to project your own content (and thus HTML and CSS) onto. For example, this card is essentially a row-based horizontal layout as the image is on the left and the body of the card (where you&#x27;re reading now!) is on the right. But that aspect of this layout is demo code. Some things are offered by the card component though — if the viewport narrows enough, for example, it becomes a stacked card. If you want the card always be stacked, see the example below which applies the appropriate stacked card class.</p>
    <button class="btn btn-primary" type="submit">Do Something</button>
  </div>
</article>
<!-- Card Warning -->
<article class="card card-warning items-stretch mbe32">
  <div class="card-demo-content pbs32 pbe32 pis32 pie32">
    <h1 class="card-demo-title"><a href="#">Card: Card Warning</a></h1>
    <p class="card-demo-metadata">
      <span class="card-demo-rating">★★★★<span>☆</span></span>
      <span class="card-demo-votes">(1234 votes)</span>
    </p>
    <p class="card-demo-desc mbe24">Note that the AgnosticUI Card component is a very thin layer and only supplies the card as a shell for you to project your own content (and thus HTML and CSS) onto. For example, this card is essentially a row-based horizontal layout as the image is on the left and the body of the card (where you&#x27;re reading now!) is on the right. But that aspect of this layout is demo code. Some things are offered by the card component though — if the viewport narrows enough, for example, it becomes a stacked card. If you want the card always be stacked, see the example below which applies the appropriate stacked card class.</p>
    <button class="btn btn-primary" type="submit">Do Something</button>
  </div>
</article>
<!-- Card Error -->
<article class="card card-error items-stretch mbe32">
  <div class="card-demo-content pbs32 pbe32 pis32 pie32">
    <h1 class="card-demo-title"><a href="#">Card: Card Error</a></h1>
    <p class="card-demo-metadata">
      <span class="card-demo-rating">★★★★<span>☆</span></span>
      <span class="card-demo-votes">(1234 votes)</span>
    </p>
    <p class="card-demo-desc mbe24">Note that the AgnosticUI Card component is a very thin layer and only supplies the card as a shell for you to project your own content (and thus HTML and CSS) onto. For example, this card is essentially a row-based horizontal layout as the image is on the left and the body of the card (where you&#x27;re reading now!) is on the right. But that aspect of this layout is demo code. Some things are offered by the card component though — if the viewport narrows enough, for example, it becomes a stacked card. If you want the card always be stacked, see the example below which applies the appropriate stacked card class.</p>
    <button class="btn btn-primary" type="submit">Do Something</button>
  </div>
</article>

```html
<article class="card  items-stretch mbs24 mbe32">
  <div class="card-demo-image-wrap">
    <img src="https://via.placeholder.com/1000x400?text=Really+Big+Image" alt="Image placeholder image for testing responsiveness" />
  </div>
  <div class="card-demo-content pbs32 pbe32 pis32 pie32">
    <h1 class="card-demo-title"><a href="#">Card: Card</a></h1>
    <p class="card-demo-metadata">
      <span class="card-demo-rating">★★★★<span>☆</span></span>
      <span class="card-demo-votes">(1234 votes)</span>
    </p>
    <p class="card-demo-desc mbe24">Note that the AgnosticUI Card component is a very thin layer and only supplies the card as a shell for you to project your own content (and thus HTML and CSS) onto. For example, this card is essentially a row-based horizontal layout as the image is on the left and the body of the card (where you&#x27;re reading now!) is on the right. But that aspect of this layout is demo code. Some things are offered by the card component though — if the viewport narrows enough, for example, it becomes a stacked card. If you want the card always be stacked, see the example below which applies the appropriate stacked card class.</p>
    <button class="btn btn-primary" type="submit">Do Something</button>
  </div>
</article>
<!-- Card Border -->
<article class="card card-border items-stretch mbe32">
  <div class="card-demo-image-wrap">
    <img src="https://via.placeholder.com/1000x400?text=Really+Big+Image" alt="Image placeholder image for testing responsiveness" />
  </div>
  <div class="card-demo-content pbs32 pbe32 pis32 pie32">
    <h1 class="card-demo-title"><a href="#">Card: Card Border</a></h1>
    <p class="card-demo-metadata">
      <span class="card-demo-rating">★★★★<span>☆</span></span>
      <span class="card-demo-votes">(1234 votes)</span>
    </p>
    <p class="card-demo-desc mbe24">Note that the AgnosticUI Card component is a very thin layer and only supplies the card as a shell for you to project your own content (and thus HTML and CSS) onto. For example, this card is essentially a row-based horizontal layout as the image is on the left and the body of the card (where you&#x27;re reading now!) is on the right. But that aspect of this layout is demo code. Some things are offered by the card component though — if the viewport narrows enough, for example, it becomes a stacked card. If you want the card always be stacked, see the example below which applies the appropriate stacked card class.</p>
    <button class="btn btn-primary" type="submit">Do Something</button>
  </div>
</article>
<!-- Card Rounded -->
<article class="card card-border card-rounded items-stretch mbe32">
  <div class="card-demo-image-wrap">
    <img src="https://via.placeholder.com/1000x400?text=Really+Big+Image" alt="Image placeholder image for testing responsiveness" />
  </div>
  <div class="card-demo-content pbs32 pbe32 pis32 pie32">
    <h1 class="card-demo-title"><a href="#">Card: Card Rounded</a></h1>
    <p class="card-demo-metadata">
      <span class="card-demo-rating">★★★★<span>☆</span></span>
      <span class="card-demo-votes">(1234 votes)</span>
    </p>
    <p class="card-demo-desc mbe24">Note that the AgnosticUI Card component is a very thin layer and only supplies the card as a shell for you to project your own content (and thus HTML and CSS) onto. For example, this card is essentially a row-based horizontal layout as the image is on the left and the body of the card (where you&#x27;re reading now!) is on the right. But that aspect of this layout is demo code. Some things are offered by the card component though — if the viewport narrows enough, for example, it becomes a stacked card. If you want the card always be stacked, see the example below which applies the appropriate stacked card class.</p>
    <button class="btn btn-primary" type="submit">Do Something</button>
  </div>
</article>
<!-- Card Shadow -->
<article class="card card-shadow items-stretch mbe32">
  <div class="card-demo-image-wrap">
    <img src="https://via.placeholder.com/1000x400?text=Really+Big+Image" alt="Image placeholder image for testing responsiveness" />
  </div>
  <div class="card-demo-content pbs32 pbe32 pis32 pie32">
    <h1 class="card-demo-title"><a href="#">Card: Card Shadow</a></h1>
    <p class="card-demo-metadata">
      <span class="card-demo-rating">★★★★<span>☆</span></span>
      <span class="card-demo-votes">(1234 votes)</span>
    </p>
    <p class="card-demo-desc mbe24">Note that the AgnosticUI Card component is a very thin layer and only supplies the card as a shell for you to project your own content (and thus HTML and CSS) onto. For example, this card is essentially a row-based horizontal layout as the image is on the left and the body of the card (where you&#x27;re reading now!) is on the right. But that aspect of this layout is demo code. Some things are offered by the card component though — if the viewport narrows enough, for example, it becomes a stacked card. If you want the card always be stacked, see the example below which applies the appropriate stacked card class.</p>
    <button class="btn btn-primary" type="submit">Do Something</button>
  </div>
</article>
<!-- Card Animated -->
<article class="card card-animated card-shadow items-stretch mbe32">
  <div class="card-demo-image-wrap">
    <img src="https://via.placeholder.com/1000x400?text=Really+Big+Image" alt="Image placeholder image for testing responsiveness" />
  </div>
  <div class="card-demo-content pbs32 pbe32 pis32 pie32">
    <h1 class="card-demo-title"><a href="#">Card: Card Animated</a></h1>
    <p class="card-demo-metadata">
      <span class="card-demo-rating">★★★★<span>☆</span></span>
      <span class="card-demo-votes">(1234 votes)</span>
    </p>
    <p class="card-demo-desc mbe24">Note that the AgnosticUI Card component is a very thin layer and only supplies the card as a shell for you to project your own content (and thus HTML and CSS) onto. For example, this card is essentially a row-based horizontal layout as the image is on the left and the body of the card (where you&#x27;re reading now!) is on the right. But that aspect of this layout is demo code. Some things are offered by the card component though — if the viewport narrows enough, for example, it becomes a stacked card. If you want the card always be stacked, see the example below which applies the appropriate stacked card class.</p>
    <button class="btn btn-primary" type="submit">Do Something</button>
  </div>
</article>
<!-- Stacked -->
<article class="card card-border card-stacked  mbe16">
  <div class="card-demo-image-wrap">
    <img src="https://via.placeholder.com/2000x1000?text=Really+Big+Image" alt="Image placeholder image for testing responsiveness" />
  </div>
  <div class="card-demo-content pbs32 pbe32 pis32 pie32">
    <h1 class="card-demo-title"><a href="#">Stacked Card Title</a></h1>
    <p class="card-demo-metadata mbe16">
      <span class="card-demo-rating">★★★★<span>☆</span></span>
      <span class="card-demo-votes">(1234 votes)</span>
    </p>
    <p class="card-demo-desc mbe24">
      This card has the stacked card class which produces a single-column or stacked layout.
      This is a popular choice for cards, but make sure you've applied the
      <i>card-stacked</i> class or else you want get this behavior
      <span class="quoted">out-the-box</span>. This particular example has an image whereas
      the one below does not.
    </p>
    <p class="mbe24">Lorem ipsum yoyoyo dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
    <button class="btn btn-primary" type="submit">Click me</button>
  </div>
</article>
<article class="card card-border card-stacked  mbe16">
  <div class="card-demo-content pbs32 pbe32 pis32 pie32">
    <h1 class="card-demo-title"><a href="#">Stacked Card Title</a></h1>
    <p class="card-demo-metadata">
      <span class="card-demo-rating">★★★★<span>☆</span></span>
      <span class="card-demo-votes">(1234 votes)</span>
    </p>
    <p class="card-demo-desc mbe24">
      This card also has the stacked card class which produces a single-column or stacked
      layout.
    </p>
    <p class="mbe24">Lorem ipsum yoyoyo dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
    <button class="btn btn-primary" type="submit">Click me</button>
  </div>
</article>
<!-- Card Success -->
<article class="card card-success items-stretch mbe32">
  <div class="card-demo-content pbs32 pbe32 pis32 pie32">
    <h1 class="card-demo-title"><a href="#">Card: Card Success</a></h1>
    <p class="card-demo-metadata">
      <span class="card-demo-rating">★★★★<span>☆</span></span>
      <span class="card-demo-votes">(1234 votes)</span>
    </p>
    <p class="card-demo-desc mbe24">Note that the AgnosticUI Card component is a very thin layer and only supplies the card as a shell for you to project your own content (and thus HTML and CSS) onto. For example, this card is essentially a row-based horizontal layout as the image is on the left and the body of the card (where you&#x27;re reading now!) is on the right. But that aspect of this layout is demo code. Some things are offered by the card component though — if the viewport narrows enough, for example, it becomes a stacked card. If you want the card always be stacked, see the example below which applies the appropriate stacked card class.</p>
    <button class="btn btn-primary" type="submit">Do Something</button>
  </div>
</article>
<!-- Card Info -->
<article class="card card-info items-stretch mbe32">
  <div class="card-demo-content pbs32 pbe32 pis32 pie32">
    <h1 class="card-demo-title"><a href="#">Card: Card Info</a></h1>
    <p class="card-demo-metadata">
      <span class="card-demo-rating">★★★★<span>☆</span></span>
      <span class="card-demo-votes">(1234 votes)</span>
    </p>
    <p class="card-demo-desc mbe24">Note that the AgnosticUI Card component is a very thin layer and only supplies the card as a shell for you to project your own content (and thus HTML and CSS) onto. For example, this card is essentially a row-based horizontal layout as the image is on the left and the body of the card (where you&#x27;re reading now!) is on the right. But that aspect of this layout is demo code. Some things are offered by the card component though — if the viewport narrows enough, for example, it becomes a stacked card. If you want the card always be stacked, see the example below which applies the appropriate stacked card class.</p>
    <button class="btn btn-primary" type="submit">Do Something</button>
  </div>
</article>
<!-- Card Warning -->
<article class="card card-warning items-stretch mbe32">
  <div class="card-demo-content pbs32 pbe32 pis32 pie32">
    <h1 class="card-demo-title"><a href="#">Card: Card Warning</a></h1>
    <p class="card-demo-metadata">
      <span class="card-demo-rating">★★★★<span>☆</span></span>
      <span class="card-demo-votes">(1234 votes)</span>
    </p>
    <p class="card-demo-desc mbe24">Note that the AgnosticUI Card component is a very thin layer and only supplies the card as a shell for you to project your own content (and thus HTML and CSS) onto. For example, this card is essentially a row-based horizontal layout as the image is on the left and the body of the card (where you&#x27;re reading now!) is on the right. But that aspect of this layout is demo code. Some things are offered by the card component though — if the viewport narrows enough, for example, it becomes a stacked card. If you want the card always be stacked, see the example below which applies the appropriate stacked card class.</p>
    <button class="btn btn-primary" type="submit">Do Something</button>
  </div>
</article>
<!-- Card Error -->
<article class="card card-error items-stretch mbe32">
  <div class="card-demo-content pbs32 pbe32 pis32 pie32">
    <h1 class="card-demo-title"><a href="#">Card: Card Error</a></h1>
    <p class="card-demo-metadata">
      <span class="card-demo-rating">★★★★<span>☆</span></span>
      <span class="card-demo-votes">(1234 votes)</span>
    </p>
    <p class="card-demo-desc mbe24">Note that the AgnosticUI Card component is a very thin layer and only supplies the card as a shell for you to project your own content (and thus HTML and CSS) onto. For example, this card is essentially a row-based horizontal layout as the image is on the left and the body of the card (where you&#x27;re reading now!) is on the right. But that aspect of this layout is demo code. Some things are offered by the card component though — if the viewport narrows enough, for example, it becomes a stacked card. If you want the card always be stacked, see the example below which applies the appropriate stacked card class.</p>
    <button class="btn btn-primary" type="submit">Do Something</button>
  </div>
</article>
```
