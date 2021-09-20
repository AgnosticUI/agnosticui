<script>
  export let customClasses = null;
  export let reverse = false;
  export let start = null;
  export let center = null;
  export let end = null;
  export let top = null;
  export let middle = null;
  export let bottom = null;
  export let around = null;
  export let between = null;

  let klasses = [
    "row",
    customClasses ? customClasses : "",
    reverse ? `reverse-${reverse}` : "",
    start ? `start-${start}` : "",
    center ? `center-${center}` : "",
    end ? `end-${end}` : "",
    top ? `top-${top}` : "",
    middle ? `middle-${middle}` : "",
    bottom ? `bottom-${bottom}` : "",
    around ? `around-${around}` : "",
    between ? `between-${between}` : "",
  ];
  klasses = klasses.filter((klass) => klass.length);
  klasses = klasses.join(" ");
</script>

<style>
.row {
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin-inline-end: var(--gutter-compensation);
  margin-inline-start: var(--gutter-compensation);
}

.reverse {
  flex-direction: row-reverse;
}

.start-xs {
  justify-content: flex-start;
  text-align: start;
}

.center-xs {
  justify-content: center;
  text-align: center;
}

.end-xs {
  justify-content: flex-end;
  text-align: end;
}

.top-xs {
  align-items: flex-start;
}

.middle-xs {
  align-items: center;
}

.bottom-xs {
  align-items: flex-end;
}

.around-xs {
  justify-content: space-around;
}

.between-xs {
  justify-content: space-between;
}

@media only screen and (min-width: 576px) {
  .start-sm {
    justify-content: flex-start;
    text-align: start;
  }

  .center-sm {
    justify-content: center;
    text-align: center;
  }

  .end-sm {
    justify-content: flex-end;
    text-align: end;
  }

  .top-sm {
    align-items: flex-start;
  }

  .middle-sm {
    align-items: center;
  }

  .bottom-sm {
    align-items: flex-end;
  }

  .around-sm {
    justify-content: space-around;
  }

  .between-sm {
    justify-content: space-between;
  }
}

@media only screen and (min-width: 768px) {
  .start-md {
    justify-content: flex-start;
    text-align: start;
  }

  .center-md {
    justify-content: center;
    text-align: center;
  }

  .end-md {
    justify-content: flex-end;
    text-align: end;
  }

  .top-md {
    align-items: flex-start;
  }

  .middle-md {
    align-items: center;
  }

  .bottom-md {
    align-items: flex-end;
  }

  .around-md {
    justify-content: space-around;
  }

  .between-md {
    justify-content: space-between;
  }
}

@media only screen and (min-width: 992px) {
  .start-lg {
    justify-content: flex-start;
    text-align: start;
  }

  .center-lg {
    justify-content: center;
    text-align: center;
  }

  .end-lg {
    justify-content: flex-end;
    text-align: end;
  }

  .top-lg {
    align-items: flex-start;
  }

  .middle-lg {
    align-items: center;
  }

  .bottom-lg {
    align-items: flex-end;
  }

  .around-lg {
    justify-content: space-around;
  }

  .between-lg {
    justify-content: space-between;
  }
}

@media only screen and (min-width: 1200px) {
  .start-xl {
    justify-content: flex-start;
    text-align: start;
  }

  .center-xl {
    justify-content: center;
    text-align: center;
  }

  .end-xl {
    justify-content: flex-end;
    text-align: end;
  }

  .top-xl {
    align-items: flex-start;
  }

  .middle-xl {
    align-items: center;
  }

  .bottom-xl {
    align-items: flex-end;
  }

  .around-xl {
    justify-content: space-around;
  }

  .between-xl {
    justify-content: space-between;
  }
}

</style>

<div class="{klasses}">
  <slot />
</div>
