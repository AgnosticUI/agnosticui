
<template>
  <section :class="$style.component">
    <h1 id="grid">Grid</h1>
    <h3>
      Our flexbox-based grid is based on a 12-unit system. Each column unit counts for 1/12
      of the whole (3 units is a fourth, 4 units a third, 6 units a half, etc.)
    </h3>
    <div :class="$style.hotips">
      <p :class="$style.tip">
        <span class="quoted">The grid system is an aid, not a guarantee.</span>
        <a
          href="https://www.goodreads.com/quotes/9110726-the-grid-system-is-an-aid-not-a-guarantee-it"
        >Josef Müller-Brockmann</a>
      </p>
      <div :class="$style.tipcontent">
        <p>TBD 1234</p>
      </div>
    </div>
  </section>
</template>
<style module>
.component {
  composes: component from "./partials.module.css";
}
.hotips {
  composes: hotips from "./partials.module.css";
}
.tipcontent {
  composes: tipcontent from "./partials.module.css";
}
.tip {
  composes: tip from "./partials.module.css";
}
</style>