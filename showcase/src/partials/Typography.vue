<template>
  <section :class="$style.component">
    <h1 id="typography">Typography</h1>
    <h3>Typography and scale are the foundations your designs are built on.</h3>
    <div :class="$style.hotips">
      <p :class="$style.tip">
        <span class="quoted">Make it easy to read.</span>
        <a href="https://www.fastcompany.com/32656/web-sites-work" class="href">Roger Black</a>
      </p>
      <div :class="$style.tipcontent">
        Please consider heeding Black's 6 rules for web design:
        <ul>
          <li>Bigger is better</li>
          <li>Color your world — sparingly</li>
          <li>Faster beats fancier</li>
          <li>Content is king</li>
          <li>Small bytes go down easier</li>
          <li>If you don’t have something good to say, don’t say anything</li>
        </ul>
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
ul {
  margin-top: 16px;
}
li {
  list-style-type: circle;
  margin-left: 40px;
}
.tip {
  composes: tip from "./partials.module.css";
}
</style>
