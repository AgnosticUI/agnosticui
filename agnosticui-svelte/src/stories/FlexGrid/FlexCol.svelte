<script>
  export let customClasses = null;
  export let first = null;
  export let last = null;
  export let initial = null;
  export let xs = null;
  export let sm = null;
  export let md = null;
  export let lg = null;
  export let xl = null;
  export let hidden = null;
  export let xsOffset = null;
  export let smOffset = null;
  export let mdOffset = null;
  export let lgOffset = null;
  export let xlOffset = null;

  const isInteger = (value) => {
    return (
      typeof value === "number" &&
      isFinite(value) &&
      Math.floor(value) === value
    );
  };

  const getSize = (k, v) => {
    if (!v) {
      return "";
    }
    if (isInteger(v)) {
      // .col-xs-1, .col-sm-1, etc.
      return `col-${k}-${v}`;
    } else {
      // .col-xs, .col-sm, etc.
      return `col-${k}`;
    }
  };

  let klasses = [
    customClasses ? customClasses : "",
    first ? `first-${first}` : "",
    last ? `last-${last}` : "",
    initial ? `initial-${initial}` : "",
    getSize("xs", xs),
    xs ? `col-xs-${xs}` : "",
    sm ? `col-sm-${sm}` : "",
    md ? `col-md-${md}` : "",
    lg ? `col-lg-${lg}` : "",
    xl ? `col-xl-${xl}` : "",
    hidden ? `hidden-${hidden}` : "",
    xsOffset ? `col-xs-offset-${xsOffset}` : "",
    smOffset ? `col-sm-offset-${smOffset}` : "",
    mdOffset ? `col-md-offset-${mdOffset}` : "",
    lgOffset ? `col-lg-offset-${lgOffset}` : "",
    xlOffset ? `col-xl-offset-${xlOffset}` : "",
  ];
  klasses = klasses.filter((klass) => klass.length);
  klasses = klasses.join(" ");
</script>

<style>
  .col-xs,
  .col-xs-1,
  .col-xs-2,
  .col-xs-3,
  .col-xs-4,
  .col-xs-5,
  .col-xs-6,
  .col-xs-7,
  .col-xs-8,
  .col-xs-9,
  .col-xs-10,
  .col-xs-11,
  .col-xs-12,
  .col-xs-offset-0,
  .col-xs-offset-1,
  .col-xs-offset-2,
  .col-xs-offset-3,
  .col-xs-offset-4,
  .col-xs-offset-5,
  .col-xs-offset-6,
  .col-xs-offset-7,
  .col-xs-offset-8,
  .col-xs-offset-9,
  .col-xs-offset-10,
  .col-xs-offset-11,
  .col-xs-offset-12,
  .col-sm,
  .col-sm-1,
  .col-sm-2,
  .col-sm-3,
  .col-sm-4,
  .col-sm-5,
  .col-sm-6,
  .col-sm-7,
  .col-sm-8,
  .col-sm-9,
  .col-sm-10,
  .col-sm-11,
  .col-sm-12,
  .col-sm-offset-0,
  .col-sm-offset-1,
  .col-sm-offset-2,
  .col-sm-offset-3,
  .col-sm-offset-4,
  .col-sm-offset-5,
  .col-sm-offset-6,
  .col-sm-offset-7,
  .col-sm-offset-8,
  .col-sm-offset-9,
  .col-sm-offset-10,
  .col-sm-offset-11,
  .col-sm-offset-12,
  .col-md,
  .col-md-1,
  .col-md-2,
  .col-md-3,
  .col-md-4,
  .col-md-5,
  .col-md-6,
  .col-md-7,
  .col-md-8,
  .col-md-9,
  .col-md-10,
  .col-md-11,
  .col-md-12,
  .col-md-offset-0,
  .col-md-offset-1,
  .col-md-offset-2,
  .col-md-offset-3,
  .col-md-offset-4,
  .col-md-offset-5,
  .col-md-offset-6,
  .col-md-offset-7,
  .col-md-offset-8,
  .col-md-offset-9,
  .col-md-offset-10,
  .col-md-offset-11,
  .col-md-offset-12,
  .col-lg,
  .col-lg-1,
  .col-lg-2,
  .col-lg-3,
  .col-lg-4,
  .col-lg-5,
  .col-lg-6,
  .col-lg-7,
  .col-lg-8,
  .col-lg-9,
  .col-lg-10,
  .col-lg-11,
  .col-lg-12,
  .col-lg-offset-0,
  .col-lg-offset-1,
  .col-lg-offset-2,
  .col-lg-offset-3,
  .col-lg-offset-4,
  .col-lg-offset-5,
  .col-lg-offset-6,
  .col-lg-offset-7,
  .col-lg-offset-8,
  .col-lg-offset-9,
  .col-lg-offset-10,
  .col-lg-offset-11,
  .col-lg-offset-12,
  .col-xl,
  .col-xl-1,
  .col-xl-2,
  .col-xl-3,
  .col-xl-4,
  .col-xl-5,
  .col-xl-6,
  .col-xl-7,
  .col-xl-8,
  .col-xl-9,
  .col-xl-10,
  .col-xl-11,
  .col-xl-12,
  .col-xl-offset-0,
  .col-xl-offset-1,
  .col-xl-offset-2,
  .col-xl-offset-3,
  .col-xl-offset-4,
  .col-xl-offset-5,
  .col-xl-offset-6,
  .col-xl-offset-7,
  .col-xl-offset-8,
  .col-xl-offset-9,
  .col-xl-offset-10,
  .col-xl-offset-11,
  .col-xl-offset-12 {
    box-sizing: border-box;
    flex: 0 0 auto;
    flex-basis: 100%;
    padding-inline-end: var(--half-gutter-width);
    padding-inline-start: var(--half-gutter-width);
    max-width: 100%;
  }

  .col-xs {
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
  }

  .col-xs-1 {
    flex-basis: 8.33333333%;
    max-width: 8.33333333%;
  }

  .col-xs-2 {
    flex-basis: 16.66666667%;
    max-width: 16.66666667%;
  }

  .col-xs-3 {
    flex-basis: 25%;
    max-width: 25%;
  }

  .col-xs-4 {
    flex-basis: 33.33333333%;
    max-width: 33.33333333%;
  }

  .col-xs-5 {
    flex-basis: 41.66666667%;
    max-width: 41.66666667%;
  }

  .col-xs-6 {
    flex-basis: 50%;
    max-width: 50%;
  }

  .col-xs-7 {
    flex-basis: 58.33333333%;
    max-width: 58.33333333%;
  }

  .col-xs-8 {
    flex-basis: 66.66666667%;
    max-width: 66.66666667%;
  }

  .col-xs-9 {
    flex-basis: 75%;
    max-width: 75%;
  }

  .col-xs-10 {
    flex-basis: 83.33333333%;
    max-width: 83.33333333%;
  }

  .col-xs-11 {
    flex-basis: 91.66666667%;
    max-width: 91.66666667%;
  }

  .col-xs-12 {
    flex-basis: 100%;
    max-width: 100%;
    /* Mobile first stacked get a gutter between blocks */
    margin-block-end: var(--gutter-width);
  }

  .col-xs-offset-0 {
    margin-inline-start: 0;
  }

  .col-xs-offset-1 {
    margin-inline-start: 8.33333333%;
  }

  .col-xs-offset-2 {
    margin-inline-start: 16.66666667%;
  }

  .col-xs-offset-3 {
    margin-inline-start: 25%;
  }

  .col-xs-offset-4 {
    margin-inline-start: 33.33333333%;
  }

  .col-xs-offset-5 {
    margin-inline-start: 41.66666667%;
  }

  .col-xs-offset-6 {
    margin-inline-start: 50%;
  }

  .col-xs-offset-7 {
    margin-inline-start: 58.33333333%;
  }

  .col-xs-offset-8 {
    margin-inline-start: 66.66666667%;
  }

  .col-xs-offset-9 {
    margin-inline-start: 75%;
  }

  .col-xs-offset-10 {
    margin-inline-start: 83.33333333%;
  }

  .col-xs-offset-11 {
    margin-inline-start: 91.66666667%;
  }

  .first-xs {
    order: -1;
  }

  .last-xs {
    order: 1;
  }

  .initial-order-xs {
    order: initial;
  }
  @media only screen and (min-width: 576px) {
    .col-sm {
      flex-grow: 1;
      flex-basis: 0;
      max-width: 100%;
    }

    .col-sm-1 {
      flex-basis: 8.33333333%;
      max-width: 8.33333333%;
    }

    .col-sm-2 {
      flex-basis: 16.66666667%;
      max-width: 16.66666667%;
    }

    .col-sm-3 {
      flex-basis: 25%;
      max-width: 25%;
    }

    .col-sm-4 {
      flex-basis: 33.33333333%;
      max-width: 33.33333333%;
    }

    .col-sm-5 {
      flex-basis: 41.66666667%;
      max-width: 41.66666667%;
    }

    .col-sm-6 {
      flex-basis: 50%;
      max-width: 50%;
    }

    .col-sm-7 {
      flex-basis: 58.33333333%;
      max-width: 58.33333333%;
    }

    .col-sm-8 {
      flex-basis: 66.66666667%;
      max-width: 66.66666667%;
    }

    .col-sm-9 {
      flex-basis: 75%;
      max-width: 75%;
    }

    .col-sm-10 {
      flex-basis: 83.33333333%;
      max-width: 83.33333333%;
    }

    .col-sm-11 {
      flex-basis: 91.66666667%;
      max-width: 91.66666667%;
    }

    .col-sm-12 {
      flex-basis: 100%;
      max-width: 100%;
      /* Phablet first stacked get a gutter between blocks */
      margin-block-end: var(--gutter-width);
    }

    .col-sm-offset-0 {
      margin-inline-start: 0;
    }

    .col-sm-offset-1 {
      margin-inline-start: 8.33333333%;
    }

    .col-sm-offset-2 {
      margin-inline-start: 16.66666667%;
    }

    .col-sm-offset-3 {
      margin-inline-start: 25%;
    }

    .col-sm-offset-4 {
      margin-inline-start: 33.33333333%;
    }

    .col-sm-offset-5 {
      margin-inline-start: 41.66666667%;
    }

    .col-sm-offset-6 {
      margin-inline-start: 50%;
    }

    .col-sm-offset-7 {
      margin-inline-start: 58.33333333%;
    }

    .col-sm-offset-8 {
      margin-inline-start: 66.66666667%;
    }

    .col-sm-offset-9 {
      margin-inline-start: 75%;
    }

    .col-sm-offset-10 {
      margin-inline-start: 83.33333333%;
    }

    .col-sm-offset-11 {
      margin-inline-start: 91.66666667%;
    }

    .first-sm {
      order: -1;
    }

    .last-sm {
      order: 1;
    }

    .initial-order-sm {
      order: initial;
    }
  }

  @media only screen and (min-width: 768px) {
    .col-md,
    .col-md-1,
    .col-md-2,
    .col-md-3,
    .col-md-4,
    .col-md-5,
    .col-md-6,
    .col-md-7,
    .col-md-8,
    .col-md-9,
    .col-md-10,
    .col-md-11,
    .col-md-12,
    .col-md-offset-0,
    .col-md-offset-1,
    .col-md-offset-2,
    .col-md-offset-3,
    .col-md-offset-4,
    .col-md-offset-5,
    .col-md-offset-6,
    .col-md-offset-7,
    .col-md-offset-8,
    .col-md-offset-9,
    .col-md-offset-10,
    .col-md-offset-11,
    .col-md-offset-12 {
      box-sizing: border-box;
      flex: 0 0 auto;
      padding-inline-end: var(--half-gutter-width);
      padding-inline-start: var(--half-gutter-width);
    }

    .col-md {
      flex-grow: 1;
      flex-basis: 0;
      max-width: 100%;
    }

    .col-md-1 {
      flex-basis: 8.33333333%;
      max-width: 8.33333333%;
    }

    .col-md-2 {
      flex-basis: 16.66666667%;
      max-width: 16.66666667%;
    }

    .col-md-3 {
      flex-basis: 25%;
      max-width: 25%;
    }

    .col-md-4 {
      flex-basis: 33.33333333%;
      max-width: 33.33333333%;
    }

    .col-md-5 {
      flex-basis: 41.66666667%;
      max-width: 41.66666667%;
    }

    .col-md-6 {
      flex-basis: 50%;
      max-width: 50%;
    }

    .col-md-7 {
      flex-basis: 58.33333333%;
      max-width: 58.33333333%;
    }

    .col-md-8 {
      flex-basis: 66.66666667%;
      max-width: 66.66666667%;
    }

    .col-md-9 {
      flex-basis: 75%;
      max-width: 75%;
    }

    .col-md-10 {
      flex-basis: 83.33333333%;
      max-width: 83.33333333%;
    }

    .col-md-11 {
      flex-basis: 91.66666667%;
      max-width: 91.66666667%;
    }

    .col-md-12 {
      flex-basis: 100%;
      max-width: 100%;
      /* Note at 768px breakpoint we stop adding gutters between stacked blocks */
    }

    .col-md-offset-0 {
      margin-inline-start: 0;
    }

    .col-md-offset-1 {
      margin-inline-start: 8.33333333%;
    }

    .col-md-offset-2 {
      margin-inline-start: 16.66666667%;
    }

    .col-md-offset-3 {
      margin-inline-start: 25%;
    }

    .col-md-offset-4 {
      margin-inline-start: 33.33333333%;
    }

    .col-md-offset-5 {
      margin-inline-start: 41.66666667%;
    }

    .col-md-offset-6 {
      margin-inline-start: 50%;
    }

    .col-md-offset-7 {
      margin-inline-start: 58.33333333%;
    }

    .col-md-offset-8 {
      margin-inline-start: 66.66666667%;
    }

    .col-md-offset-9 {
      margin-inline-start: 75%;
    }

    .col-md-offset-10 {
      margin-inline-start: 83.33333333%;
    }

    .col-md-offset-11 {
      margin-inline-start: 91.66666667%;
    }

    .first-md {
      order: -1;
    }

    .last-md {
      order: 1;
    }

    .initial-order-md {
      order: initial;
    }
  }

  @media only screen and (min-width: 992px) {
    .col-lg,
    .col-lg-1,
    .col-lg-2,
    .col-lg-3,
    .col-lg-4,
    .col-lg-5,
    .col-lg-6,
    .col-lg-7,
    .col-lg-8,
    .col-lg-9,
    .col-lg-10,
    .col-lg-11,
    .col-lg-12,
    .col-lg-offset-0,
    .col-lg-offset-1,
    .col-lg-offset-2,
    .col-lg-offset-3,
    .col-lg-offset-4,
    .col-lg-offset-5,
    .col-lg-offset-6,
    .col-lg-offset-7,
    .col-lg-offset-8,
    .col-lg-offset-9,
    .col-lg-offset-10,
    .col-lg-offset-11,
    .col-lg-offset-12 {
      box-sizing: border-box;
      flex: 0 0 auto;
      padding-inline-end: var(--half-gutter-width);
      padding-inline-start: var(--half-gutter-width);
    }

    .col-lg {
      flex-grow: 1;
      flex-basis: 0;
      max-width: 100%;
    }

    .col-lg-1 {
      flex-basis: 8.33333333%;
      max-width: 8.33333333%;
    }

    .col-lg-2 {
      flex-basis: 16.66666667%;
      max-width: 16.66666667%;
    }

    .col-lg-3 {
      flex-basis: 25%;
      max-width: 25%;
    }

    .col-lg-4 {
      flex-basis: 33.33333333%;
      max-width: 33.33333333%;
    }

    .col-lg-5 {
      flex-basis: 41.66666667%;
      max-width: 41.66666667%;
    }

    .col-lg-6 {
      flex-basis: 50%;
      max-width: 50%;
    }

    .col-lg-7 {
      flex-basis: 58.33333333%;
      max-width: 58.33333333%;
    }

    .col-lg-8 {
      flex-basis: 66.66666667%;
      max-width: 66.66666667%;
    }

    .col-lg-9 {
      flex-basis: 75%;
      max-width: 75%;
    }

    .col-lg-10 {
      flex-basis: 83.33333333%;
      max-width: 83.33333333%;
    }

    .col-lg-11 {
      flex-basis: 91.66666667%;
      max-width: 91.66666667%;
    }

    .col-lg-12 {
      flex-basis: 100%;
      max-width: 100%;
    }

    .col-lg-offset-0 {
      margin-inline-start: 0;
    }

    .col-lg-offset-1 {
      margin-inline-start: 8.33333333%;
    }

    .col-lg-offset-2 {
      margin-inline-start: 16.66666667%;
    }

    .col-lg-offset-3 {
      margin-inline-start: 25%;
    }

    .col-lg-offset-4 {
      margin-inline-start: 33.33333333%;
    }

    .col-lg-offset-5 {
      margin-inline-start: 41.66666667%;
    }

    .col-lg-offset-6 {
      margin-inline-start: 50%;
    }

    .col-lg-offset-7 {
      margin-inline-start: 58.33333333%;
    }

    .col-lg-offset-8 {
      margin-inline-start: 66.66666667%;
    }

    .col-lg-offset-9 {
      margin-inline-start: 75%;
    }

    .col-lg-offset-10 {
      margin-inline-start: 83.33333333%;
    }

    .col-lg-offset-11 {
      margin-inline-start: 91.66666667%;
    }

    .first-lg {
      order: -1;
    }

    .last-lg {
      order: 1;
    }

    .initial-order-lg {
      order: initial;
    }
  }

  @media only screen and (min-width: 1200px) {
    .col-xl,
    .col-xl-1,
    .col-xl-2,
    .col-xl-3,
    .col-xl-4,
    .col-xl-5,
    .col-xl-6,
    .col-xl-7,
    .col-xl-8,
    .col-xl-9,
    .col-xl-10,
    .col-xl-11,
    .col-xl-12,
    .col-xl-offset-0,
    .col-xl-offset-1,
    .col-xl-offset-2,
    .col-xl-offset-3,
    .col-xl-offset-4,
    .col-xl-offset-5,
    .col-xl-offset-6,
    .col-xl-offset-7,
    .col-xl-offset-8,
    .col-xl-offset-9,
    .col-xl-offset-10,
    .col-xl-offset-11,
    .col-xl-offset-12 {
      box-sizing: border-box;
      flex: 0 0 auto;
      padding-inline-end: var(--half-gutter-width);
      padding-inline-start: var(--half-gutter-width);
    }

    .col-xl {
      flex-grow: 1;
      flex-basis: 0;
      max-width: 100%;
    }

    .col-xl-1 {
      flex-basis: 8.33333333%;
      max-width: 8.33333333%;
    }

    .col-xl-2 {
      flex-basis: 16.66666667%;
      max-width: 16.66666667%;
    }

    .col-xl-3 {
      flex-basis: 25%;
      max-width: 25%;
    }

    .col-xl-4 {
      flex-basis: 33.33333333%;
      max-width: 33.33333333%;
    }

    .col-xl-5 {
      flex-basis: 41.66666667%;
      max-width: 41.66666667%;
    }

    .col-xl-6 {
      flex-basis: 50%;
      max-width: 50%;
    }

    .col-xl-7 {
      flex-basis: 58.33333333%;
      max-width: 58.33333333%;
    }

    .col-xl-8 {
      flex-basis: 66.66666667%;
      max-width: 66.66666667%;
    }

    .col-xl-9 {
      flex-basis: 75%;
      max-width: 75%;
    }

    .col-xl-10 {
      flex-basis: 83.33333333%;
      max-width: 83.33333333%;
    }

    .col-xl-11 {
      flex-basis: 91.66666667%;
      max-width: 91.66666667%;
    }

    .col-xl-12 {
      flex-basis: 100%;
      max-width: 100%;
    }

    .col-xl-offset-0 {
      margin-inline-start: 0;
    }

    .col-xl-offset-1 {
      margin-inline-start: 8.33333333%;
    }

    .col-xl-offset-2 {
      margin-inline-start: 16.66666667%;
    }

    .col-xl-offset-3 {
      margin-inline-start: 25%;
    }

    .col-xl-offset-4 {
      margin-inline-start: 33.33333333%;
    }

    .col-xl-offset-5 {
      margin-inline-start: 41.66666667%;
    }

    .col-xl-offset-6 {
      margin-inline-start: 50%;
    }

    .col-xl-offset-7 {
      margin-inline-start: 58.33333333%;
    }

    .col-xl-offset-8 {
      margin-inline-start: 66.66666667%;
    }

    .col-xl-offset-9 {
      margin-inline-start: 75%;
    }

    .col-xl-offset-10 {
      margin-inline-start: 83.33333333%;
    }

    .col-xl-offset-11 {
      margin-inline-start: 91.66666667%;
    }

    .first-xl {
      order: -1;
    }

    .last-xl {
      order: 1;
    }

    .initial-order-xl {
      order: initial;
    }
  }

  @media only screen and (max-width: 576px) {
    .hidden-xs {
      display: none;
    }
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    .hidden-sm {
      display: none;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    .hidden-md {
      display: none;
    }
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    .hidden-lg {
      display: none;
    }
  }

  @media only screen and (min-width: 1200px) {
    .hidden-xl {
      display: none;
    }
  }
</style>

<div class="{klasses}">
  <slot />
</div>
