<style module>
.header,
.header-base {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.header-base img,
.header img {
  max-width: 100%;
  height: auto;
}

.header,
.header-skin {
  --agnostic-default-header-font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Open Sans", "Ubuntu", "Fira Sans", Helvetica, "Droid Sans",
  "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
  "Segoe UI Symbol";
  --agnostic-default-header-box-shadow-hor: 0px;
  --agnostic-default-header-box-shadow-ver: 1px;
  --agnostic-default-header-box-shadow-blur: 5px;
  --agnostic-default-header-box-shadow-spread: 2px;
  --agnostic-default-header-box-shadow-color: rgba(0, 0, 0, 0.1);
  --agnostic-default-header-mobile-height: 96px;
  --agnostic-default-header-height: 64px;
  --agnostic-default-header-content-width: 960px;
  --agnostic-default-header-border-color: #e9e9e9;
  --agnostic-default-header-background-color: #ffffff;

  background-color: var(
    --agnostic-header-background-color,
    var(--agnostic-default-header-background-color)
  );
  box-shadow: var(
      --agnostic-header-box-shadow-hor,
      var(--agnostic-default-header-box-shadow-hor)
    )
    var(
      --agnostic-header-box-shadow-ver,
      var(--agnostic-default-header-box-shadow-ver)
    )
    var(
      --agnostic-header-box-shadow-blur,
      var(--agnostic-default-header-box-shadow-blur)
    )
    var(
      --agnostic-header-box-shadow-spread,
      var(--agnostic-default-header-box-shadow-spread)
    )
    var(
      --agnostic-header-box-shadow-color,
      var(--agnostic-default-header-box-shadow-color)
    );
  height: var(
    --agnostic-header-mobile-height,
    var(--agnostic-default-header-mobile-height)
  );
  font-family: var(
    --agnostic-header-font-family,
    var(--agnostic-default-header-font-family)
  );
  border-bottom: 1px solid
    var(
      --agnostic-header-border-color,
      var(--agnostic-default-header-border-color)
    );
}

.header-content {
  width: var(
    --agnostic-header-content-width,
    var(--agnostic-default-header-content-width)
  );
  max-width: 100%;
  margin: 0 auto;
}

.header .header-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

@media (min-width: 599px) {
  .header {
    height: var(
      --agnostic-header-height,
      var(--agnostic-default-header-height)
    );
  }
}

@media (min-width: 960px) {
  .header .header-content {
    justify-content: space-between;
  }
}
</style>
<template>
  <div :class="classes">
    <div :class="$style['header-content']">
      <slot name="logoleft"></slot>
      <slot name="headernav"></slot>
      <slot name="logoright"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "agnosticui-header",
  props: {
    css: {
      type: String,
      default: "",
    },
    isSkinned: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    classes() {
      return {
        // If skinned we use .card which includes .card-base and .card-skin
        [this.$style.header]: this.isSkinned,
        // Otherwise only the .card-base
        [this.$style["header-base"]]: !this.isSkinned,
        [`${this.css}`]: !!this.css,
      };
    },
  },
};
</script>