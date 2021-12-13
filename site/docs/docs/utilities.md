# Utility Classes &amp; CSS Custom Properties

AgnosticUI's `common.min.css` contains the CSS utilities but you can alternatively import the utilities as an individual module from [agnostic-css/public/css-dist/common.utilities.min.css](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-css/public/css-dist/common.utilities.min.csss). It should also be mentioned that you can omit these CSS utilities if you follow the [Modular CSS Imports](http://www.agnosticui.com/docs/advanced/advanced-usage.html#modular-css-imports) guide.

## Layout

### Flexbox

For now, we only support Flexbox for layout. You're encouraged to prefer the platform for things like [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/grid).

The names used are hopefully self-evident enough to be memorable (you will need to understand the basics of [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) itself to use these utitilies effectively).

```css
.flex {
  display: flex !important;
}

.flex-inline {
  display: inline-flex !important;
}

.flex-fill {
  flex: 1 1 auto !important;
}

.flex-row {
  flex-direction: row !important;
}

.flex-column {
  flex-direction: column !important;
}

.flex-grow-0 {
  flex-grow: 0 !important;
}

.flex-grow-1 {
  flex-grow: 1 !important;
}

.flex-shrink-0 {
  flex-shrink: 0 !important;
}

.flex-shrink-1 {
  flex-shrink: 1 !important;
}

.flex-wrap {
  flex-wrap: wrap !important;
}

.flex-nowrap {
  flex-wrap: nowrap !important;
}

.items-start {
  align-items: flex-start !important;
}

.items-end {
  align-items: flex-end !important;
}

.items-center {
  align-items: center !important;
}

.items-baseline {
  align-items: baseline !important;
}

.items-stretch {
  align-items: stretch !important;
}

.self-start {
  align-self: flex-start !important;
}

.self-end {
  align-self: flex-end !important;
}

.self-center {
  align-self: center !important;
}

.self-baseline {
  align-self: baseline !important;
}

.self-stretch {
  align-self: stretch !important;
}

.justify-start {
  justify-content: flex-start !important;
}

.justify-end {
  justify-content: flex-end !important;
}

.justify-center {
  justify-content: center !important;
}

.justify-between {
  justify-content: space-between !important;
}

.justify-around {
  justify-content: space-around !important;
}

.content-start {
  align-content: flex-start !important;
}

.content-end {
  align-content: flex-end !important;
}

.content-center {
  align-content: center !important;
}

.content-between {
  align-content: space-between !important;
}

.content-around {
  align-content: space-around !important;
}

.content-stretch {
  align-content: stretch !important;
}
```

### Margins and Padding

AgnosticUI is thrilled to leverage [CSS Logical Properties](https://css-tricks.com/css-logical-properties-and-values/) in place of `margin` and `padding`. This approach supports left-to-right, right-to-left, top-to-bottom, etc., &ldquo;out-the-box&rdquo;.

<div class="mbe24"></div>

_For shorthand usage where we're giving the same value in each direction (e.g. `margin: 0;` or `margin: var(--fluid 8);`) we use legacy `margin` and `padding` respectively._

While you're getting comfortable with how _logical properties_ work, you can get started by mentally mapping as follows:

| Old way         | New way |
| --------------- | -------------:|
| `margin-left`   |    `margin-inline-start` |
| `margin-right`  |    `margin-inline-end` |
| `margin-top`    |    `margin-block-start` |
| `margin-bottom` |    `margin-block-end` |

<div class="mbe24"></div>

Here's a cheatsheet for our naming conventions. Note we abbreviate `var(--fluid-8)` (which results in `.5rem` or, essentially, `8px` fluid) with just `8` for brevity below:

| Letter        | Stands for    | Example |
| ------------- |:-------------:| -----:|
| m is          | margin        | `m8`=`margin: 8` |
| p is          | padding       | `p8`=`padding: 8` |
| b is          | block         |    `block` |
| i is          | inline        |    `inline` |
| s is          | start         |    `start` |
| e is          | end           |    `start` |


Pulling from the following utilities you could, for example, add `.5rem` or `8px` of margin to the end of a `<section>` block with:

```html
<section class="mbe8">
  <!-- ... -->
</section>
```

```css
.m0 {
  margin: 0 !important;
}

.m2 {
  margin: var(--fluid-2) !important;
}

.m4 {
  margin: var(--fluid-4) !important;
}

.m6 {
  margin: var(--fluid-6) !important;
}

.m8 {
  margin: var(--fluid-8) !important;
}

.m10 {
  margin: var(--fluid-10) !important;
}

.m12 {
  margin: var(--fluid-12) !important;
}

.m14 {
  margin: var(--fluid-14) !important;
}

.m16 {
  margin: var(--fluid-16) !important;
}

.m18 {
  margin: var(--fluid-18) !important;
}

.m20 {
  margin: var(--fluid-20) !important;
}

.m24 {
  margin: var(--fluid-24) !important;
}

.m32 {
  margin: var(--fluid-32) !important;
}

.m36 {
  margin: var(--fluid-36) !important;
}

.m40 {
  margin: var(--fluid-40) !important;
}

.m48 {
  margin: var(--fluid-48) !important;
}

.m56 {
  margin: var(--fluid-56) !important;
}

.m64 {
  margin: var(--fluid-64) !important;
}

/* While you're getting used to this think "margin-left: 0" here */
.mis0 {
  margin-inline-start: 0 !important;
}

.mis2 {
  margin-inline-start: var(--fluid-2) !important;
}

.mis4 {
  margin-inline-start: var(--fluid-4) !important;
}

.mis6 {
  margin-inline-start: var(--fluid-6) !important;
}

.mis8 {
  margin-inline-start: var(--fluid-8) !important;
}

.mis10 {
  margin-inline-start: var(--fluid-10) !important;
}

.mis12 {
  margin-inline-start: var(--fluid-12) !important;
}

.mis14 {
  margin-inline-start: var(--fluid-14) !important;
}

.mis16 {
  margin-inline-start: var(--fluid-16) !important;
}

.mis18 {
  margin-inline-start: var(--fluid-18) !important;
}

.mis20 {
  margin-inline-start: var(--fluid-20) !important;
}

.mis24 {
  margin-inline-start: var(--fluid-24) !important;
}

.mis32 {
  margin-inline-start: var(--fluid-32) !important;
}

.mis36 {
  margin-inline-start: var(--fluid-36) !important;
}

.mis40 {
  margin-inline-start: var(--fluid-40) !important;
}

.mis48 {
  margin-inline-start: var(--fluid-48) !important;
}

.mis56 {
  margin-inline-start: var(--fluid-56) !important;
}

.mis64 {
  margin-inline-start: var(--fluid-64) !important;
}

/* While you're getting used to this think "margin-right: 0" here */
.mie0 {
  margin-inline-end: 0 !important;
}

.mie2 {
  margin-inline-end: var(--fluid-2) !important;
}

.mie4 {
  margin-inline-end: var(--fluid-4) !important;
}

.mie6 {
  margin-inline-end: var(--fluid-6) !important;
}

.mie8 {
  margin-inline-end: var(--fluid-8) !important;
}

.mie10 {
  margin-inline-end: var(--fluid-10) !important;
}

.mie12 {
  margin-inline-end: var(--fluid-12) !important;
}

.mie14 {
  margin-inline-end: var(--fluid-14) !important;
}

.mie16 {
  margin-inline-end: var(--fluid-16) !important;
}

.mie18 {
  margin-inline-end: var(--fluid-18) !important;
}

.mie20 {
  margin-inline-end: var(--fluid-20) !important;
}

.mie24 {
  margin-inline-end: var(--fluid-24) !important;
}

.mie32 {
  margin-inline-end: var(--fluid-32) !important;
}

.mie36 {
  margin-inline-end: var(--fluid-36) !important;
}

.mie40 {
  margin-inline-end: var(--fluid-40) !important;
}

.mie48 {
  margin-inline-end: var(--fluid-48) !important;
}

.mie56 {
  margin-inline-end: var(--fluid-56) !important;
}

.mie64 {
  margin-inline-end: var(--fluid-64) !important;
}

/* While you're getting used to this think "margin-top: 0" here */
.mbs0 {
  margin-block-start: 0 !important;
}

.mbs2 {
  margin-block-start: var(--fluid-2) !important;
}

.mbs4 {
  margin-block-start: var(--fluid-4) !important;
}

.mbs6 {
  margin-block-start: var(--fluid-6) !important;
}

.mbs8 {
  margin-block-start: var(--fluid-8) !important;
}

.mbs10 {
  margin-block-start: var(--fluid-10) !important;
}

.mbs12 {
  margin-block-start: var(--fluid-12) !important;
}

.mbs14 {
  margin-block-start: var(--fluid-14) !important;
}

.mbs16 {
  margin-block-start: var(--fluid-16) !important;
}

.mbs18 {
  margin-block-start: var(--fluid-18) !important;
}

.mbs20 {
  margin-block-start: var(--fluid-20) !important;
}

.mbs24 {
  margin-block-start: var(--fluid-24) !important;
}

.mbs32 {
  margin-block-start: var(--fluid-32) !important;
}

.mbs36 {
  margin-block-start: var(--fluid-36) !important;
}

.mbs40 {
  margin-block-start: var(--fluid-40) !important;
}

.mbs48 {
  margin-block-start: var(--fluid-48) !important;
}

.mbs56 {
  margin-block-start: var(--fluid-56) !important;
}

.mbs64 {
  margin-block-start: var(--fluid-64) !important;
}

/* While you're getting used to this think "margin-bottom: 0" here */
.mbe0 {
  margin-block-end: 0 !important;
}

.mbe2 {
  margin-block-end: var(--fluid-2) !important;
}

.mbe4 {
  margin-block-end: var(--fluid-4) !important;
}

.mbe6 {
  margin-block-end: var(--fluid-6) !important;
}

.mbe8 {
  margin-block-end: var(--fluid-8) !important;
}

.mbe10 {
  margin-block-end: var(--fluid-10) !important;
}

.mbe12 {
  margin-block-end: var(--fluid-12) !important;
}

.mbe14 {
  margin-block-end: var(--fluid-14) !important;
}

.mbe16 {
  margin-block-end: var(--fluid-16) !important;
}

.mbe18 {
  margin-block-end: var(--fluid-18) !important;
}

.mbe20 {
  margin-block-end: var(--fluid-20) !important;
}

.mbe24 {
  margin-block-end: var(--fluid-24) !important;
}

.mbe32 {
  margin-block-end: var(--fluid-32) !important;
}

.mbe36 {
  margin-block-end: var(--fluid-36) !important;
}

.mbe40 {
  margin-block-end: var(--fluid-40) !important;
}

.mbe48 {
  margin-block-end: var(--fluid-48) !important;
}

.mbe56 {
  margin-block-end: var(--fluid-56) !important;
}

.mbe64 {
  margin-block-end: var(--fluid-64) !important;
}

.p0 {
  padding: 0 !important;
}

.p2 {
  padding: var(--fluid-2) !important;
}

.p4 {
  padding: var(--fluid-4) !important;
}

.p6 {
  padding: var(--fluid-6) !important;
}

.p8 {
  padding: var(--fluid-8) !important;
}

.p10 {
  padding: var(--fluid-10) !important;
}

.p12 {
  padding: var(--fluid-12) !important;
}

.p14 {
  padding: var(--fluid-14) !important;
}

.p16 {
  padding: var(--fluid-16) !important;
}

.p18 {
  padding: var(--fluid-18) !important;
}

.p20 {
  padding: var(--fluid-20) !important;
}

.p24 {
  padding: var(--fluid-24) !important;
}

.p32 {
  padding: var(--fluid-32) !important;
}

.p36 {
  padding: var(--fluid-36) !important;
}

.p40 {
  padding: var(--fluid-40) !important;
}

.p48 {
  padding: var(--fluid-48) !important;
}

.p56 {
  padding: var(--fluid-56) !important;
}

.p64 {
  padding: var(--fluid-64) !important;
}

.pis0 {
  padding-inline-start: 0 !important;
}

.pis2 {
  padding-inline-start: var(--fluid-2) !important;
}

.pis4 {
  padding-inline-start: var(--fluid-4) !important;
}

.pis6 {
  padding-inline-start: var(--fluid-6) !important;
}

.pis8 {
  padding-inline-start: var(--fluid-8) !important;
}

.pis10 {
  padding-inline-start: var(--fluid-10) !important;
}

.pis12 {
  padding-inline-start: var(--fluid-12) !important;
}

.pis14 {
  padding-inline-start: var(--fluid-14) !important;
}

.pis16 {
  padding-inline-start: var(--fluid-16) !important;
}

.pis18 {
  padding-inline-start: var(--fluid-18) !important;
}

.pis20 {
  padding-inline-start: var(--fluid-20) !important;
}

.pis24 {
  padding-inline-start: var(--fluid-24) !important;
}

.pis32 {
  padding-inline-start: var(--fluid-32) !important;
}

.pis36 {
  padding-inline-start: var(--fluid-36) !important;
}

.pis40 {
  padding-inline-start: var(--fluid-40) !important;
}

.pis48 {
  padding-inline-start: var(--fluid-48) !important;
}

.pis56 {
  padding-inline-start: var(--fluid-56) !important;
}

.pis64 {
  padding-inline-start: var(--fluid-64) !important;
}

.pie0 {
  padding-inline-end: 0 !important;
}

.pie2 {
  padding-inline-end: var(--fluid-2) !important;
}

.pie4 {
  padding-inline-end: var(--fluid-4) !important;
}

.pie6 {
  padding-inline-end: var(--fluid-6) !important;
}

.pie8 {
  padding-inline-end: var(--fluid-8) !important;
}

.pie10 {
  padding-inline-end: var(--fluid-10) !important;
}

.pie12 {
  padding-inline-end: var(--fluid-12) !important;
}

.pie14 {
  padding-inline-end: var(--fluid-14) !important;
}

.pie16 {
  padding-inline-end: var(--fluid-16) !important;
}

.pie18 {
  padding-inline-end: var(--fluid-18) !important;
}

.pie20 {
  padding-inline-end: var(--fluid-20) !important;
}

.pie24 {
  padding-inline-end: var(--fluid-24) !important;
}

.pie32 {
  padding-inline-end: var(--fluid-32) !important;
}

.pie36 {
  padding-inline-end: var(--fluid-36) !important;
}

.pie40 {
  padding-inline-end: var(--fluid-40) !important;
}

.pie48 {
  padding-inline-end: var(--fluid-48) !important;
}

.pie56 {
  padding-inline-end: var(--fluid-56) !important;
}

.pie64 {
  padding-inline-end: var(--fluid-64) !important;
}

.pbs0 {
  padding-block-start: 0 !important;
}

.pbs2 {
  padding-block-start: var(--fluid-2) !important;
}

.pbs4 {
  padding-block-start: var(--fluid-4) !important;
}

.pbs6 {
  padding-block-start: var(--fluid-6) !important;
}

.pbs8 {
  padding-block-start: var(--fluid-8) !important;
}

.pbs10 {
  padding-block-start: var(--fluid-10) !important;
}

.pbs12 {
  padding-block-start: var(--fluid-12) !important;
}

.pbs14 {
  padding-block-start: var(--fluid-14) !important;
}

.pbs16 {
  padding-block-start: var(--fluid-16) !important;
}

.pbs18 {
  padding-block-start: var(--fluid-18) !important;
}

.pbs20 {
  padding-block-start: var(--fluid-20) !important;
}

.pbs24 {
  padding-block-start: var(--fluid-24) !important;
}

.pbs32 {
  padding-block-start: var(--fluid-32) !important;
}

.pbs36 {
  padding-block-start: var(--fluid-36) !important;
}

.pbs40 {
  padding-block-start: var(--fluid-40) !important;
}

.pbs48 {
  padding-block-start: var(--fluid-48) !important;
}

.pbs56 {
  padding-block-start: var(--fluid-56) !important;
}

.pbs64 {
  padding-block-start: var(--fluid-64) !important;
}

.pbe0 {
  padding-block-end: 0 !important;
}

.pbe2 {
  padding-block-end: var(--fluid-2) !important;
}

.pbe4 {
  padding-block-end: var(--fluid-4) !important;
}

.pbe6 {
  padding-block-end: var(--fluid-6) !important;
}

.pbe8 {
  padding-block-end: var(--fluid-8) !important;
}

.pbe10 {
  padding-block-end: var(--fluid-10) !important;
}

.pbe12 {
  padding-block-end: var(--fluid-12) !important;
}

.pbe14 {
  padding-block-end: var(--fluid-14) !important;
}

.pbe16 {
  padding-block-end: var(--fluid-16) !important;
}

.pbe18 {
  padding-block-end: var(--fluid-18) !important;
}

.pbe20 {
  padding-block-end: var(--fluid-20) !important;
}

.pbe24 {
  padding-block-end: var(--fluid-24) !important;
}

.pbe32 {
  padding-block-end: var(--fluid-32) !important;
}

.pbe36 {
  padding-block-end: var(--fluid-36) !important;
}

.pbe40 {
  padding-block-end: var(--fluid-40) !important;
}

.pbe48 {
  padding-block-end: var(--fluid-48) !important;
}

.pbe56 {
  padding-block-end: var(--fluid-56) !important;
}

.pbe64 {
  padding-block-end: var(--fluid-64) !important;
}
```
