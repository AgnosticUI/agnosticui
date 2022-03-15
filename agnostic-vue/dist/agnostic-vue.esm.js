var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { openBlock, createElementBlock, normalizeClass, renderSlot, createCommentVNode, createElementVNode, Fragment, renderList, toDisplayString, createBlock, resolveDynamicComponent, withCtx, ref, computed, onMounted, onUnmounted, Teleport, nextTick, createTextVNode, useCssModule, unref, createVNode, mergeProps, toHandlers, withModifiers, watch, normalizeStyle } from "vue";
const alert = "_alert_1ntgb_2";
var style0$q = {
  "alert-base": "_alert-base_1ntgb_2",
  alert,
  "alert-end": "_alert-end_1ntgb_11",
  "alert-skin": "_alert-skin_1ntgb_15",
  "alert-icon": "_alert-icon_1ntgb_21",
  "alert-border-top": "_alert-border-top_1ntgb_29",
  "alert-border-left": "_alert-border-left_1ntgb_33",
  "alert-border-bottom": "_alert-border-bottom_1ntgb_37",
  "alert-border-right": "_alert-border-right_1ntgb_41",
  "alert-border-all": "_alert-border-all_1ntgb_45",
  "alert-rounded": "_alert-rounded_1ntgb_49",
  "alert-dark": "_alert-dark_1ntgb_53",
  "alert-warning": "_alert-warning_1ntgb_58",
  "alert-warning-icon": "_alert-warning-icon_1ntgb_63",
  "alert-info": "_alert-info_1ntgb_91",
  "alert-info-icon": "_alert-info-icon_1ntgb_96",
  "alert-error": "_alert-error_1ntgb_124",
  "alert-error-icon": "_alert-error-icon_1ntgb_129",
  "alert-success": "_alert-success_1ntgb_157",
  "alert-success-icon": "_alert-success-icon_1ntgb_162",
  "alert-toast-shadow": "_alert-toast-shadow_1ntgb_194",
  "fade-in": "_fade-in_1ntgb_198",
  "slide-up": "_slide-up_1ntgb_202",
  "slide-up-fade-in": "_slide-up-fade-in_1ntgb_210"
};
var _export_sfc$1 = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$v = {
  name: "AgAlert",
  props: {
    type: {
      type: String,
      required: false,
      default: "",
      validator: (value) => ["warning", "error", "info", "success", "dark", ""].includes(value)
    },
    isBorderAll: {
      type: Boolean,
      required: false,
      default: false
    },
    isBorderTop: {
      type: Boolean,
      required: false,
      default: false
    },
    isBorderBottom: {
      type: Boolean,
      required: false,
      default: false
    },
    isBorderLeft: {
      type: Boolean,
      required: false,
      default: false
    },
    isBorderRight: {
      type: Boolean,
      required: false,
      default: false
    },
    isRounded: {
      type: Boolean,
      required: false,
      default: false
    },
    isBlockEnd: {
      type: Boolean,
      required: false,
      default: false
    },
    isAnimationFadeIn: {
      type: Boolean,
      required: false,
      default: true
    },
    isAnimationSlideUp: {
      type: Boolean,
      required: false,
      default: false
    },
    isToast: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    ariaAtomicValue() {
      if (this.isToast) {
        return true;
      }
      return void 0;
    },
    ariaLiveValue() {
      let ariaLiveValue;
      if (this.isToast && this.type === "error") {
        ariaLiveValue = "assertive";
      } else if (this.isToast) {
        ariaLiveValue = "polite";
      } else {
        ariaLiveValue = void 0;
      }
      return ariaLiveValue;
    },
    svgClasses() {
      return this.type ? [
        this.$style[`alert-${this.type}-icon`],
        this.$style["alert-icon"]
      ].join(" ") : this.$style["alert-icon"];
    },
    alertClasses() {
      let typeClass;
      switch (this.type) {
        case "warning":
          typeClass = "alert-warning";
          break;
        case "dark":
          typeClass = "alert-dark";
          break;
        case "error":
          typeClass = "alert-error";
          break;
        case "info":
          typeClass = "alert-info";
          break;
        case "success":
          typeClass = "alert-success";
          break;
        default:
          typeClass = "";
      }
      return {
        [this.$style["fade-in"]]: this.isAnimationFadeIn && !this.isAnimationSlideUp,
        [this.$style["slide-up"]]: this.isAnimationSlideUp && !this.isAnimationFadeIn,
        [this.$style["slide-up-fade-in"]]: this.isAnimationSlideUp && this.isAnimationFadeIn,
        [this.$style["alert"]]: true,
        [this.$style[typeClass]]: typeClass.length,
        [this.$style["alert-rounded"]]: this.isRounded,
        [this.$style["alert-border-all"]]: this.isBorderAll,
        [this.$style["alert-border-left"]]: this.isBorderLeft,
        [this.$style["alert-border-right"]]: this.isBorderRight,
        [this.$style["alert-border-top"]]: this.isBorderTop,
        [this.$style["alert-border-bottom"]]: this.isBorderBottom,
        [this.$style["alert-end"]]: this.isBlockEnd
      };
    }
  }
};
const _hoisted_1$i = ["aria-atomic", "aria-live"];
function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.alertClasses),
    role: "alert",
    "aria-atomic": $options.ariaAtomicValue,
    "aria-live": $options.ariaLiveValue
  }, [
    renderSlot(_ctx.$slots, "icon"),
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1$i);
}
const cssModules$r = {};
cssModules$r["$style"] = style0$q;
var AgAlert = /* @__PURE__ */ _export_sfc$1(_sfc_main$v, [["render", _sfc_render$s], ["__cssModules", cssModules$r]]);
const avatar$1 = "_avatar_1bk0m_2";
var style0$p = {
  avatar: avatar$1,
  "avatar-base": "_avatar-base_1bk0m_3",
  "avatar-skin": "_avatar-skin_1bk0m_12",
  "avatar-square": "_avatar-square_1bk0m_20",
  "avatar-rounded": "_avatar-rounded_1bk0m_24",
  "avatar-small": "_avatar-small_1bk0m_28",
  "avatar-large": "_avatar-large_1bk0m_34",
  "avatar-xlarge": "_avatar-xlarge_1bk0m_39",
  "avatar-image": "_avatar-image_1bk0m_49",
  "avatar-info": "_avatar-info_1bk0m_55",
  "avatar-warning": "_avatar-warning_1bk0m_60",
  "avatar-success": "_avatar-success_1bk0m_65",
  "avatar-error": "_avatar-error_1bk0m_70",
  "avatar-transparent": "_avatar-transparent_1bk0m_76",
  "avatar-group": "_avatar-group_1bk0m_80"
};
const _sfc_main$u = {
  name: "AgAvatar",
  props: {
    isSkinned: {
      type: Boolean,
      default: true,
      required: false
    },
    isRounded: {
      type: Boolean,
      default: false,
      required: false
    },
    isSquare: {
      type: Boolean,
      default: false,
      required: false
    },
    isTransparent: {
      type: Boolean,
      default: false,
      required: false
    },
    imgUrl: {
      type: String,
      required: false,
      default: ""
    },
    text: {
      type: String,
      required: false,
      default: ""
    },
    size: {
      type: String,
      required: false,
      default: "",
      validator: (value) => ["small", "large", "xlarge", ""].includes(value)
    },
    type: {
      type: String,
      required: false,
      default: "",
      validator: (value) => {
        const valid = ["warning", "error", "info", "success", ""].includes(value);
        return valid;
      }
    }
  },
  computed: {
    avatarImage() {
      return {
        [this.$style["avatar-image"]]: true
      };
    },
    avatarClasses() {
      return {
        [this.$style["avatar"]]: !!this.isSkinned,
        [this.$style["avatar-base"]]: !this.isSkinned,
        [this.$style["avatar-square"]]: !!this.isSquare,
        [this.$style["avatar-rounded"]]: !!this.isRounded,
        [this.$style["avatar-transparent"]]: !!this.isTransparent,
        [this.$style[`avatar-${this.type}`]]: !!this.type,
        [this.$style[`avatar-${this.size}`]]: !!this.size
      };
    }
  }
};
const _hoisted_1$h = ["data-text"];
const _hoisted_2$a = ["src"];
function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", {
    class: normalizeClass($options.avatarClasses),
    "data-text": $props.text || null
  }, [
    $props.imgUrl ? (openBlock(), createElementBlock("img", {
      key: 0,
      src: $props.imgUrl,
      class: normalizeClass($options.avatarImage),
      alt: ""
    }, null, 10, _hoisted_2$a)) : createCommentVNode("", true),
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1$h);
}
const cssModules$q = {};
cssModules$q["$style"] = style0$p;
var Avatar = /* @__PURE__ */ _export_sfc$1(_sfc_main$u, [["render", _sfc_render$r], ["__cssModules", cssModules$q]]);
const avatar = "_avatar_1bk0m_2";
var style0$o = {
  avatar,
  "avatar-base": "_avatar-base_1bk0m_3",
  "avatar-skin": "_avatar-skin_1bk0m_12",
  "avatar-square": "_avatar-square_1bk0m_20",
  "avatar-rounded": "_avatar-rounded_1bk0m_24",
  "avatar-small": "_avatar-small_1bk0m_28",
  "avatar-large": "_avatar-large_1bk0m_34",
  "avatar-xlarge": "_avatar-xlarge_1bk0m_39",
  "avatar-image": "_avatar-image_1bk0m_49",
  "avatar-info": "_avatar-info_1bk0m_55",
  "avatar-warning": "_avatar-warning_1bk0m_60",
  "avatar-success": "_avatar-success_1bk0m_65",
  "avatar-error": "_avatar-error_1bk0m_70",
  "avatar-transparent": "_avatar-transparent_1bk0m_76",
  "avatar-group": "_avatar-group_1bk0m_80"
};
const _sfc_main$t = {
  name: "AgAvatarGroup"
};
function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.$style["avatar-group"])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
const cssModules$p = {};
cssModules$p["$style"] = style0$o;
var AvatarGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$t, [["render", _sfc_render$q], ["__cssModules", cssModules$p]]);
const breadcrumb = "_breadcrumb_dor2y_2";
const active$2 = "_active_dor2y_20";
var style0$n = {
  breadcrumb,
  "breadcrumb-item": "_breadcrumb-item_dor2y_10",
  active: active$2,
  "breadcrumb-slash": "_breadcrumb-slash_dor2y_24",
  "breadcrumb-arrow": "_breadcrumb-arrow_dor2y_28",
  "breadcrumb-bullet": "_breadcrumb-bullet_dor2y_32"
};
const _sfc_main$s = {
  name: "AgBreadcrumb",
  props: {
    routes: {
      type: Array,
      required: true,
      validator: (value) => {
        let isValid = true;
        value.forEach((obj) => isValid = Object.keys(obj).every((key) => ["label", "url"].includes(key)));
        if (!isValid) {
          console.warn("routes argument must be an array of objects with shape: {label:..., url:...}");
        }
        return isValid;
      }
    },
    type: {
      type: String,
      default: "",
      required: false,
      validator: (value) => ["arrow", "slash", "bullet", ""].includes(value)
    }
  },
  computed: {
    breadcrumbClasses() {
      return {
        [this.$style.breadcrumb]: true,
        [this.$style[`breadcrumb-${this.type}`]]: !!this.type
      };
    }
  },
  methods: {
    isLast(crumbRoutes, idx) {
      return idx === crumbRoutes.length - 1;
    },
    crumbClasses(index) {
      const isLastCrumb = this.isLast(this.routes, index);
      return {
        [this.$style["breadcrumb-item"]]: true,
        [this.$style.active]: isLastCrumb
      };
    }
  }
};
const _hoisted_1$g = { "aria-label": "breadcrumbs" };
const _hoisted_2$9 = {
  key: 0,
  href: "{route.url}"
};
const _hoisted_3$8 = { key: 1 };
function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("nav", _hoisted_1$g, [
    createElementVNode("ol", {
      class: normalizeClass($options.breadcrumbClasses)
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.routes, (route, index) => {
        return openBlock(), createElementBlock("li", {
          key: index,
          class: normalizeClass($options.crumbClasses(index))
        }, [
          index !== $props.routes.length - 1 && route.url ? (openBlock(), createElementBlock("a", _hoisted_2$9, toDisplayString(route.label), 1)) : (openBlock(), createElementBlock("span", _hoisted_3$8, toDisplayString(route.label), 1))
        ], 2);
      }), 128))
    ], 2)
  ]);
}
const cssModules$o = {};
cssModules$o["$style"] = style0$n;
var Breadcrumb = /* @__PURE__ */ _export_sfc$1(_sfc_main$s, [["render", _sfc_render$p], ["__cssModules", cssModules$o]]);
const btn = "_btn_qgtrb_6";
const disabled$2 = "_disabled_qgtrb_81";
const active$1 = "_active_qgtrb_171";
var style0$m = {
  "btn-base": "_btn-base_qgtrb_7",
  btn,
  "btn-skin": "_btn-skin_qgtrb_28",
  disabled: disabled$2,
  "btn-primary": "_btn-primary_qgtrb_102",
  "btn-bordered": "_btn-bordered_qgtrb_109",
  "btn-secondary": "_btn-secondary_qgtrb_123",
  "btn-raised": "_btn-raised_qgtrb_150",
  active: active$1,
  "btn-large": "_btn-large_qgtrb_286",
  "btn-small": "_btn-small_qgtrb_293",
  "btn-rounded": "_btn-rounded_qgtrb_303",
  "btn-pill": "_btn-pill_qgtrb_307",
  "btn-circle": "_btn-circle_qgtrb_316",
  "btn-circle-large": "_btn-circle-large_qgtrb_323",
  "btn-circle-small": "_btn-circle-small_qgtrb_329",
  "btn-block": "_btn-block_qgtrb_338",
  "btn-block-following": "_btn-block-following_qgtrb_344",
  "btn-link": "_btn-link_qgtrb_352",
  "btn-blank": "_btn-blank_qgtrb_353"
};
const _sfc_main$r = {
  name: "AgButton",
  props: {
    mode: {
      type: String,
      default: ""
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    isBlank: {
      type: Boolean,
      default: false
    },
    isLink: {
      type: Boolean,
      default: false
    },
    isBlock: {
      type: Boolean,
      default: false
    },
    isBordered: {
      type: Boolean,
      default: false
    },
    isRaised: {
      type: Boolean,
      default: false
    },
    isCircle: {
      type: Boolean,
      default: false
    },
    isRounded: {
      type: Boolean,
      default: false
    },
    isSkinned: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: "button",
      validator: (value) => ["button", "submit", "reset", "faux"].includes(value)
    },
    size: {
      type: String,
      default: ""
    },
    css: {
      type: String,
      default: ""
    }
  },
  emits: ["click"],
  computed: {
    currentComponentType() {
      return this.type === "faux" ? "div" : "button";
    },
    isButtonDisabled() {
      return this.isDisabled ? true : void 0;
    },
    classes() {
      return {
        [this.$style.btn]: this.isSkinned,
        [this.$style["btn-base"]]: !this.isSkinned,
        [this.$style["disabled"]]: this.isDisabled,
        [this.$style["btn-bordered"]]: this.isBordered,
        [this.$style["btn-blank"]]: this.isBlank,
        [this.$style["btn-link"]]: this.isLink,
        [this.$style["btn-block"]]: this.isBlock,
        [this.$style["btn-rounded"]]: this.isRounded,
        [this.$style["btn-circle"]]: this.isCircle,
        [this.$style["btn-raised"]]: this.isRaised,
        [this.$style["btn-primary"]]: this.mode === "primary",
        [this.$style["btn-secondary"]]: this.mode === "secondary",
        [`${this.css}`]: !!this.css,
        [this.$style[`btn-${this.size}`]]: this.size
      };
    }
  }
};
function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($options.currentComponentType), {
    type: $props.type === "faux" ? false : $props.type,
    class: normalizeClass($options.classes),
    disabled: $options.isButtonDisabled,
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["type", "class", "disabled"]);
}
const cssModules$n = {};
cssModules$n["$style"] = style0$m;
var Button = /* @__PURE__ */ _export_sfc$1(_sfc_main$r, [["render", _sfc_render$o], ["__cssModules", cssModules$n]]);
var style0$l = {
  "btn-group": "_btn-group_nuvva_5"
};
const _sfc_main$q = {
  name: "AgButtonGroup",
  props: {
    ariaLabel: {
      type: String,
      default: "",
      required: true
    },
    css: {
      type: String,
      default: ""
    }
  },
  computed: {
    classes() {
      return {
        [this.$style["btn-group"]]: true,
        [`${this.css}`]: this.css
      };
    }
  }
};
const _hoisted_1$f = ["aria-label"];
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.classes),
    role: "group",
    "aria-label": $props.ariaLabel
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1$f);
}
const cssModules$m = {};
cssModules$m["$style"] = style0$l;
var ButtonGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$q, [["render", _sfc_render$n], ["__cssModules", cssModules$m]]);
const card = "_card_1v11v_8";
var style0$k = {
  card,
  "card-base": "_card-base_1v11v_9",
  "card-border": "_card-border_1v11v_18",
  "card-rounded": "_card-rounded_1v11v_22",
  "card-shadow": "_card-shadow_1v11v_26",
  "card-animated": "_card-animated_1v11v_53",
  "card-stacked": "_card-stacked_1v11v_85",
  "card-success": "_card-success_1v11v_89",
  "card-info": "_card-info_1v11v_94",
  "card-error": "_card-error_1v11v_99",
  "card-warning": "_card-warning_1v11v_104"
};
const _sfc_main$p = {
  name: "AgCard",
  props: {
    css: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "",
      validator: (value) => ["success", "info", "warning", "error", ""].includes(value)
    },
    isAnimated: {
      type: Boolean,
      default: false
    },
    isSkinned: {
      type: Boolean,
      default: true
    },
    isStacked: {
      type: Boolean,
      default: false
    },
    isShadow: {
      type: Boolean,
      default: false
    },
    isBorder: {
      type: Boolean,
      default: false
    },
    isRounded: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        [this.$style.card]: this.isSkinned,
        [this.$style["card-base"]]: !this.isSkinned,
        [this.$style["card-animated"]]: this.isAnimated,
        [this.$style["card-rounded"]]: this.isRounded,
        [this.$style["card-border"]]: this.isBorder,
        [this.$style["card-shadow"]]: this.isShadow,
        [this.$style["card-stacked"]]: this.isStacked,
        [this.$style[`card-${this.type}`]]: !!this.type,
        [`${this.css}`]: !!this.css
      };
    }
  }
};
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.classes)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
const cssModules$l = {};
cssModules$l["$style"] = style0$k;
var Card = /* @__PURE__ */ _export_sfc$1(_sfc_main$p, [["render", _sfc_render$m], ["__cssModules", cssModules$l]]);
const checkbox = "_checkbox_1m634_8";
const radio = "_radio_1m634_9";
var style0$j = {
  "checkbox-group": "_checkbox-group_1m634_8",
  "radio-group": "_radio-group_1m634_9",
  "checkbox-group-large": "_checkbox-group-large_1m634_18",
  "radio-group-large": "_radio-group-large_1m634_19",
  "checkbox-legend": "_checkbox-legend_1m634_24",
  "radio-legend": "_radio-legend_1m634_25",
  checkbox,
  radio,
  "checkbox-small": "_checkbox-small_1m634_40",
  "radio-small": "_radio-small_1m634_41",
  "checkbox-large": "_checkbox-large_1m634_46",
  "radio-large": "_radio-large_1m634_47",
  "checkbox-label-wrap": "_checkbox-label-wrap_1m634_52",
  "radio-label-wrap": "_radio-label-wrap_1m634_53",
  "checkbox-label-wrap-inline": "_checkbox-label-wrap-inline_1m634_60",
  "radio-label-wrap-inline": "_radio-label-wrap-inline_1m634_61",
  "checkbox-label-copy": "_checkbox-label-copy_1m634_71",
  "radio-label-copy": "_radio-label-copy_1m634_72",
  "checkbox-label": "_checkbox-label_1m634_52",
  "radio-label": "_radio-label_1m634_53",
  "checkbox-label-copy-small": "_checkbox-label-copy-small_1m634_81",
  "radio-label-copy-small": "_radio-label-copy-small_1m634_82",
  "checkbox-label-copy-large": "_checkbox-label-copy-large_1m634_86",
  "radio-label-copy-large": "_radio-label-copy-large_1m634_87",
  "checkbox-label-small": "_checkbox-label-small_1m634_143",
  "radio-label-small": "_radio-label-small_1m634_153",
  "checkbox-label-large": "_checkbox-label-large_1m634_158",
  "radio-label-large": "_radio-label-large_1m634_167",
  "checkbox-group-hidden": "_checkbox-group-hidden_1m634_204",
  "radio-group-hidden": "_radio-group-hidden_1m634_205",
  "choice-input-error": "_choice-input-error_1m634_233"
};
const TYPES$1 = ["checkbox", "radio"];
const _sfc_main$o = {
  name: "AgChoiceInput",
  props: {
    isFieldset: {
      type: Boolean,
      default: true
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    isInvalid: {
      type: Boolean,
      default: false
    },
    isInline: {
      type: Boolean,
      default: false
    },
    disabledOptions: {
      type: Array,
      required: false,
      default() {
        return [];
      }
    },
    checkedOptions: {
      type: Array,
      default() {
        return [];
      },
      required: false
    },
    options: {
      type: Array,
      required: true
    },
    css: {
      type: String,
      required: false,
      default: ""
    },
    legendLabel: {
      type: String,
      required: true
    },
    isSkinned: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: "checkbox",
      validator: (value) => {
        const isValid = TYPES$1.includes(value);
        if (!isValid) {
          console.warn(`Allowed types for ChoiceInput are: ${TYPES$1}`);
        }
        return isValid;
      }
    },
    size: {
      type: String,
      default: null,
      validator: (value) => ["large", "small"].includes(value)
    }
  },
  emits: ["change"],
  data: function() {
    return {
      mutableCheckedOptions: Array.from(this.checkedOptions)
    };
  },
  computed: {
    choiceType() {
      return this.type;
    },
    inputClasses() {
      return {
        [this.$style[`${this.type}`]]: this.type,
        [this.$style[`${this.type}-${this.size}`]]: !!this.size
      };
    },
    fieldsetClasses() {
      const overrides = this.css;
      const skin = this.isSkinned ? this.$style[`${this.type}-group`] : "";
      const sizeSkin = this.isSkinned && this.size === "large" ? this.$style[`${this.type}-group-${this.size}`] : "";
      return {
        [skin]: true,
        [sizeSkin]: true,
        [overrides]: overrides,
        [this.$style[`${this.type}-group-hidden`]]: this.isFieldset === false
      };
    },
    labelSpanCopyClasses() {
      return {
        [this.$style[`${this.type}-label-copy`]]: this.type,
        [this.$style[`${this.type}-label-copy-${this.size}`]]: this.size,
        [this.$style["choice-input-error"]]: this.isInvalid
      };
    },
    labelSpanClasses() {
      return {
        [this.$style[`${this.type}-label`]]: this.type,
        [this.$style[`${this.type}-label-${this.size}`]]: !!this.size,
        [this.$style["choice-input-error"]]: this.isInvalid
      };
    },
    legendClasses() {
      let skin = this.isSkinned ? this.$style[`${this.type}-legend`] : "";
      return {
        [skin]: true,
        ["screenreader-only"]: this.isFieldset === false
      };
    }
  },
  methods: {
    isChoiceInputPrechecked(optionValue) {
      if (this.mutableCheckedOptions.length) {
        if (this.mutableCheckedOptions.includes(optionValue)) {
          return true;
        }
      }
      return false;
    },
    labelClasses(optionValue) {
      return {
        [this.$style[`${this.type}-label-wrap`]]: this.type,
        [this.$style[`${this.type}-label-wrap-inline`]]: !!this.isInline,
        [this.$style["disabled"]]: this.isChoiceInputDisabled(optionValue)
      };
    },
    isChoiceInputDisabled(optionValue) {
      if (this.isDisabled) {
        return true;
      }
      if (this.disabledOptions && this.disabledOptions.includes(optionValue)) {
        return true;
      }
    },
    triggerChange(e) {
      const checked = e.target.checked;
      const value = e.target.value;
      if (checked) {
        if (!this.mutableCheckedOptions.includes(value)) {
          this.mutableCheckedOptions.push(value);
        }
      } else {
        const filtered = this.mutableCheckedOptions.filter((item) => item !== value);
        this.mutableCheckedOptions = filtered;
      }
      this.$emit("change", this.mutableCheckedOptions);
    }
  }
};
const _hoisted_1$e = ["id", "type", "name", "value", "disabled", "checked"];
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("fieldset", {
    class: normalizeClass($options.fieldsetClasses)
  }, [
    createElementVNode("legend", {
      class: normalizeClass($options.legendClasses)
    }, toDisplayString($props.legendLabel), 3),
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.options, (option, index) => {
      return openBlock(), createElementBlock("label", {
        key: index,
        class: normalizeClass($options.labelClasses(option.value))
      }, [
        createElementVNode("input", {
          id: `${option.name}-${index}`,
          class: normalizeClass($options.inputClasses),
          type: $options.choiceType,
          name: option.name,
          value: option.value,
          disabled: $options.isChoiceInputDisabled(option.value),
          checked: $options.isChoiceInputPrechecked(option.value),
          onChange: _cache[0] || (_cache[0] = (...args) => $options.triggerChange && $options.triggerChange(...args))
        }, null, 42, _hoisted_1$e),
        createElementVNode("span", {
          class: normalizeClass($options.labelSpanClasses)
        }, null, 2),
        createElementVNode("span", {
          class: normalizeClass($options.labelSpanCopyClasses)
        }, toDisplayString(option.label), 3)
      ], 2);
    }), 128))
  ], 2);
}
const cssModules$k = {};
cssModules$k["$style"] = style0$j;
var ChoiceInput = /* @__PURE__ */ _export_sfc$1(_sfc_main$o, [["render", _sfc_render$l], ["__cssModules", cssModules$k]]);
const close = "_close_1rynh_2";
var style0$i = {
  "close-button": "_close-button_1rynh_2",
  close,
  "close-button-small": "_close-button-small_1rynh_52",
  "close-button-large": "_close-button-large_1rynh_57",
  "close-button-xlarge": "_close-button-xlarge_1rynh_62"
};
const _sfc_main$n = {
  name: "AgClose",
  props: {
    size: {
      type: String,
      required: false,
      default: "",
      validator: (value) => ["small", "large", "xlarge", ""].includes(value)
    },
    isFaux: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["click"],
  computed: {
    closeClasses() {
      return {
        [this.$style["close"]]: true
      };
    },
    closeButtonClasses() {
      return {
        [this.$style["close-button"]]: true,
        [this.$style[`close-button-${this.size}`]]: !!this.size
      };
    }
  }
};
const _hoisted_1$d = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M.439 21.44a1.5 1.5 0 0 0 2.122 2.121l9.262-9.261a.25.25 0 0 1 .354 0l9.262 9.263a1.5 1.5 0 1 0 2.122-2.121L14.3 12.177a.25.25 0 0 1 0-.354l9.263-9.262A1.5 1.5 0 0 0 21.439.44L12.177 9.7a.25.25 0 0 1-.354 0L2.561.44A1.5 1.5 0 0 0 .439 2.561L9.7 11.823a.25.25 0 0 1 0 .354Z"
}, null, -1);
const _hoisted_2$8 = [
  _hoisted_1$d
];
const _hoisted_3$7 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M.439 21.44a1.5 1.5 0 0 0 2.122 2.121l9.262-9.261a.25.25 0 0 1 .354 0l9.262 9.263a1.5 1.5 0 1 0 2.122-2.121L14.3 12.177a.25.25 0 0 1 0-.354l9.263-9.262A1.5 1.5 0 0 0 21.439.44L12.177 9.7a.25.25 0 0 1-.354 0L2.561.44A1.5 1.5 0 0 0 .439 2.561L9.7 11.823a.25.25 0 0 1 0 .354Z"
}, null, -1);
const _hoisted_4$6 = [
  _hoisted_3$7
];
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.isFaux ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass($options.closeButtonClasses)
  }, [
    (openBlock(), createElementBlock("svg", {
      class: normalizeClass($options.closeClasses),
      viewBox: "0 0 24 24",
      "aria-hidden": "true"
    }, _hoisted_2$8, 2))
  ], 2)) : (openBlock(), createElementBlock("button", {
    key: 1,
    class: normalizeClass($options.closeButtonClasses),
    "aria-label": "Close",
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
  }, [
    (openBlock(), createElementBlock("svg", {
      class: normalizeClass($options.closeClasses),
      viewBox: "0 0 24 24",
      "aria-hidden": "true"
    }, _hoisted_4$6, 2))
  ], 2));
}
const cssModules$j = {};
cssModules$j["$style"] = style0$i;
var Close = /* @__PURE__ */ _export_sfc$1(_sfc_main$n, [["render", _sfc_render$k], ["__cssModules", cssModules$j]]);
var focusableSelectors = [
  'a[href]:not([tabindex^="-"])',
  'area[href]:not([tabindex^="-"])',
  'input:not([type="hidden"]):not([type="radio"]):not([disabled]):not([tabindex^="-"])',
  'input[type="radio"]:not([disabled]):not([tabindex^="-"])',
  'select:not([disabled]):not([tabindex^="-"])',
  'textarea:not([disabled]):not([tabindex^="-"])',
  'button:not([disabled]):not([tabindex^="-"])',
  'iframe:not([tabindex^="-"])',
  'audio[controls]:not([tabindex^="-"])',
  'video[controls]:not([tabindex^="-"])',
  '[contenteditable]:not([tabindex^="-"])',
  '[tabindex]:not([tabindex^="-"])'
];
var TAB_KEY = 9;
var ESCAPE_KEY = 27;
function A11yDialog$1(element) {
  this._show = this.show.bind(this);
  this._hide = this.hide.bind(this);
  this._maintainFocus = this._maintainFocus.bind(this);
  this._bindKeypress = this._bindKeypress.bind(this);
  this.$el = element;
  this.shown = false;
  this._id = this.$el.getAttribute("data-a11y-dialog") || this.$el.id;
  this._previouslyFocused = null;
  this._listeners = {};
  this.create();
}
A11yDialog$1.prototype.create = function() {
  this.$el.setAttribute("aria-hidden", true);
  this.$el.setAttribute("aria-modal", true);
  this.$el.setAttribute("tabindex", -1);
  if (!this.$el.hasAttribute("role")) {
    this.$el.setAttribute("role", "dialog");
  }
  this._openers = $$('[data-a11y-dialog-show="' + this._id + '"]');
  this._openers.forEach(function(opener) {
    opener.addEventListener("click", this._show);
  }.bind(this));
  this._closers = $$("[data-a11y-dialog-hide]", this.$el).concat($$('[data-a11y-dialog-hide="' + this._id + '"]'));
  this._closers.forEach(function(closer) {
    closer.addEventListener("click", this._hide);
  }.bind(this));
  this._fire("create");
  return this;
};
A11yDialog$1.prototype.show = function(event) {
  if (this.shown) {
    return this;
  }
  this._previouslyFocused = document.activeElement;
  this.$el.removeAttribute("aria-hidden");
  this.shown = true;
  moveFocusToDialog(this.$el);
  document.body.addEventListener("focus", this._maintainFocus, true);
  document.addEventListener("keydown", this._bindKeypress);
  this._fire("show", event);
  return this;
};
A11yDialog$1.prototype.hide = function(event) {
  if (!this.shown) {
    return this;
  }
  this.shown = false;
  this.$el.setAttribute("aria-hidden", "true");
  if (this._previouslyFocused && this._previouslyFocused.focus) {
    this._previouslyFocused.focus();
  }
  document.body.removeEventListener("focus", this._maintainFocus, true);
  document.removeEventListener("keydown", this._bindKeypress);
  this._fire("hide", event);
  return this;
};
A11yDialog$1.prototype.destroy = function() {
  this.hide();
  this._openers.forEach(function(opener) {
    opener.removeEventListener("click", this._show);
  }.bind(this));
  this._closers.forEach(function(closer) {
    closer.removeEventListener("click", this._hide);
  }.bind(this));
  this._fire("destroy");
  this._listeners = {};
  return this;
};
A11yDialog$1.prototype.on = function(type, handler) {
  if (typeof this._listeners[type] === "undefined") {
    this._listeners[type] = [];
  }
  this._listeners[type].push(handler);
  return this;
};
A11yDialog$1.prototype.off = function(type, handler) {
  var index2 = (this._listeners[type] || []).indexOf(handler);
  if (index2 > -1) {
    this._listeners[type].splice(index2, 1);
  }
  return this;
};
A11yDialog$1.prototype._fire = function(type, event) {
  var listeners = this._listeners[type] || [];
  var domEvent = new CustomEvent(type, { detail: event });
  this.$el.dispatchEvent(domEvent);
  listeners.forEach(function(listener) {
    listener(this.$el, event);
  }.bind(this));
};
A11yDialog$1.prototype._bindKeypress = function(event) {
  if (!this.$el.contains(document.activeElement))
    return;
  if (this.shown && event.which === ESCAPE_KEY && this.$el.getAttribute("role") !== "alertdialog") {
    event.preventDefault();
    this.hide(event);
  }
  if (this.shown && event.which === TAB_KEY) {
    trapTabKey(this.$el, event);
  }
};
A11yDialog$1.prototype._maintainFocus = function(event) {
  if (this.shown && !event.target.closest('[aria-modal="true"]') && !event.target.closest("[data-a11y-dialog-ignore-focus-trap]")) {
    moveFocusToDialog(this.$el);
  }
};
function toArray(collection) {
  return Array.prototype.slice.call(collection);
}
function $$(selector, context) {
  return toArray((context || document).querySelectorAll(selector));
}
function moveFocusToDialog(node) {
  var focused = node.querySelector("[autofocus]") || node;
  focused.focus();
}
function getFocusableChildren(node) {
  return $$(focusableSelectors.join(","), node).filter(function(child) {
    return !!(child.offsetWidth || child.offsetHeight || child.getClientRects().length);
  });
}
function trapTabKey(node, event) {
  var focusableChildren = getFocusableChildren(node);
  var focusedItemIndex = focusableChildren.indexOf(document.activeElement);
  if (event.shiftKey && focusedItemIndex === 0) {
    focusableChildren[focusableChildren.length - 1].focus();
    event.preventDefault();
  } else if (!event.shiftKey && focusedItemIndex === focusableChildren.length - 1) {
    focusableChildren[0].focus();
    event.preventDefault();
  }
}
function instantiateDialogs() {
  $$("[data-a11y-dialog]").forEach(function(node) {
    new A11yDialog$1(node);
  });
}
if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", instantiateDialogs);
  } else {
    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(instantiateDialogs);
    } else {
      window.setTimeout(instantiateDialogs, 16);
    }
  }
}
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$m = {
  name: "A11yDialog",
  props: {
    id: {
      type: String,
      required: true
    },
    dialogRoot: {
      type: String,
      default: "body",
      required: false
    },
    classNames: {
      type: Object,
      default() {
        return {
          container: "dialog-container",
          document: "dialog-content",
          overlay: "dialog-overlay",
          title: "dialog-title",
          closeButton: "dialog-close"
        };
      }
    },
    role: {
      type: String,
      required: false,
      default: "dialog",
      validator(value) {
        return ["dialog", "alertdialog"].includes(value);
      }
    },
    titleId: {
      type: String,
      default: ""
    },
    closeButtonLabel: {
      type: String,
      default: "Close this dialog window"
    },
    closeButtonPosition: {
      type: String,
      required: false,
      default: "first",
      validator(value) {
        return ["first", "last", "none"].includes(value);
      }
    }
  },
  emits: ["dialog-ref"],
  setup(props, { emit }) {
    let dialog2;
    const rootElement = ref(null);
    const portalTarget = computed(() => {
      return props.dialogRoot || "body";
    });
    const fullTitleId = computed(() => {
      return props.titleId || `${props.id}-title`;
    });
    const roleAttribute = computed(() => {
      return ["dialog", "alertdialog"].includes(props.role) ? props.role : "dialog";
    });
    const instantiateDialog = async () => {
      await nextTick();
      dialog2 = new A11yDialog$1(rootElement.value);
      emit("dialog-ref", dialog2);
    };
    onMounted(() => {
      instantiateDialog();
    });
    const close2 = () => {
      dialog2.hide();
    };
    onUnmounted(() => {
      if (dialog2) {
        dialog2.destroy();
      }
      emit("dialog-ref");
    });
    return {
      dialog: dialog2,
      close: close2,
      portalTarget,
      fullTitleId,
      roleAttribute,
      rootElement
    };
  }
};
const _hoisted_1$c = ["id", "role", "aria-labelledby"];
const _hoisted_2$7 = ["aria-label"];
const _hoisted_3$6 = /* @__PURE__ */ createTextVNode(/* @__PURE__ */ toDisplayString("\xD7"));
const _hoisted_4$5 = ["id"];
const _hoisted_5$3 = ["aria-label"];
const _hoisted_6$2 = /* @__PURE__ */ createTextVNode(/* @__PURE__ */ toDisplayString("\xD7"));
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Teleport, { to: $setup.portalTarget }, [
    createElementVNode("div", {
      ref: "rootElement",
      id: $props.id,
      class: normalizeClass($props.classNames.container),
      role: $setup.roleAttribute,
      "aria-hidden": "true",
      "aria-labelledby": $setup.fullTitleId
    }, [
      createElementVNode("div", {
        "data-a11y-dialog-hide": "",
        tabIndex: "-1",
        class: normalizeClass($props.classNames.overlay),
        onClick: _cache[0] || (_cache[0] = ($event) => $props.role === "alertdialog" ? void 0 : $setup.close)
      }, null, 2),
      createElementVNode("div", {
        role: "document",
        class: normalizeClass($props.classNames.document)
      }, [
        $props.closeButtonPosition == "first" ? (openBlock(), createElementBlock("button", {
          key: 0,
          "data-a11y-dialog-hide": "",
          type: "button",
          "aria-label": $props.closeButtonLabel,
          class: normalizeClass($props.classNames.closeButton),
          onClick: _cache[1] || (_cache[1] = (...args) => $setup.close && $setup.close(...args))
        }, [
          renderSlot(_ctx.$slots, "closeButtonContent", {}, () => [
            _hoisted_3$6
          ])
        ], 10, _hoisted_2$7)) : createCommentVNode("", true),
        createElementVNode("p", {
          id: $setup.fullTitleId,
          class: normalizeClass($props.classNames.title)
        }, [
          renderSlot(_ctx.$slots, "title")
        ], 10, _hoisted_4$5),
        renderSlot(_ctx.$slots, "default"),
        $props.closeButtonPosition == "last" ? (openBlock(), createElementBlock("button", {
          key: 1,
          "data-a11y-dialog-hide": "",
          type: "button",
          "aria-label": $props.closeButtonLabel,
          class: normalizeClass($props.classNames.closeButton),
          onClick: _cache[2] || (_cache[2] = (...args) => $setup.close && $setup.close(...args))
        }, [
          renderSlot(_ctx.$slots, "closeButtonContent", {}, () => [
            _hoisted_6$2
          ])
        ], 10, _hoisted_5$3)) : createCommentVNode("", true)
      ], 2)
    ], 10, _hoisted_1$c)
  ], 8, ["to"]);
}
var A11yDialog = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$j]]);
var Dialog_vue_vue_type_style_index_0_lang = "";
const dialog = "_dialog_c9jkj_2";
var style1 = {
  dialog,
  "dialog-overlay": "_dialog-overlay_c9jkj_3",
  "fade-in": "_fade-in_c9jkj_1",
  "dialog-content": "_dialog-content_c9jkj_25",
  "dialog-fade-in": "_dialog-fade-in_c9jkj_36",
  "dialog-slide-up": "_dialog-slide-up_c9jkj_40",
  "slide-up": "_slide-up_c9jkj_1",
  "dialog-slide-up-fade-in": "_dialog-slide-up-fade-in_c9jkj_48",
  "dialog-close": "_dialog-close_c9jkj_73",
  "drawer-start": "_drawer-start_c9jkj_102",
  "drawer-end": "_drawer-end_c9jkj_110",
  "drawer-top": "_drawer-top_c9jkj_118",
  "drawer-up": "_drawer-up_c9jkj_123",
  "drawer-bottom": "_drawer-bottom_c9jkj_127",
  "drawer-content": "_drawer-content_c9jkj_136"
};
const _hoisted_1$b = /* @__PURE__ */ createTextVNode(" Close ");
const __default__$2 = {
  name: "AgDialog"
};
const _sfc_main$l = /* @__PURE__ */ Object.assign(__default__$2, {
  props: {
    id: {
      type: String,
      required: true
    },
    dialogRoot: {
      type: String,
      required: true
    },
    classNames: {
      type: Object,
      default() {
      }
    },
    role: {
      type: String,
      required: false,
      default: "dialog",
      validator(value) {
        return ["dialog", "alertdialog"].includes(value);
      }
    },
    titleId: {
      type: String,
      default: ""
    },
    closeButtonLabel: {
      type: String,
      default: "Close this dialog window"
    },
    closeButtonPosition: {
      type: String,
      required: false,
      default: "first",
      validator(value) {
        return ["first", "last", "none"].includes(value);
      }
    },
    isAnimationFadeIn: {
      type: Boolean,
      required: false,
      default: false
    },
    isAnimationSlideUp: {
      type: Boolean,
      required: false,
      default: false
    },
    drawerPlacement: {
      type: String,
      required: false,
      default: ""
    }
  },
  emits: ["instance"],
  setup(__props, { emit }) {
    const props = __props;
    const styles = useCssModule();
    const assignDialogRef = (instance) => {
      emit("instance", instance);
    };
    const getClassNames = () => {
      const { classNames, drawerPlacement, isAnimationFadeIn, isAnimationSlideUp } = props;
      console.log("PROPS: ", props);
      const documentClasses = {
        [styles["dialog-content"]]: true,
        [styles["dialog-slide-up-fade-in"]]: isAnimationFadeIn && isAnimationSlideUp,
        [styles["dialog-slide-up"]]: !isAnimationFadeIn && isAnimationSlideUp,
        [styles["dialog-fade-in"]]: isAnimationFadeIn && !isAnimationSlideUp,
        [styles["drawer-content"]]: drawerPlacement.length
      };
      const containerClasses = {
        [styles.dialog]: true,
        [styles[`drawer-${drawerPlacement}`]]: drawerPlacement
      };
      const defaultClassNames = {
        container: containerClasses,
        overlay: styles["dialog-overlay"],
        document: documentClasses,
        title: "h4 mbe16",
        closeButton: `${styles["dialog-close"]} dialog-close-button`
      };
      return __spreadValues(__spreadValues({}, defaultClassNames), classNames);
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(A11yDialog), {
        id: __props.id,
        "dialog-root": __props.dialogRoot,
        "close-button-label": __props.closeButtonLabel,
        "close-button-position": __props.closeButtonPosition,
        "title-id": __props.titleId,
        "class-names": getClassNames(),
        role: __props.role,
        onDialogRef: assignDialogRef
      }, {
        closeButtonContent: withCtx(() => [
          renderSlot(_ctx.$slots, "closeButtonContent", {}, () => [
            createVNode(Close, {
              "is-faux": "",
              size: "large"
            }, {
              default: withCtx(() => [
                _hoisted_1$b
              ]),
              _: 1
            })
          ])
        ]),
        title: withCtx(() => [
          renderSlot(_ctx.$slots, "title")
        ]),
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "dialog-root", "close-button-label", "close-button-position", "title-id", "class-names", "role"]);
    };
  }
});
const cssModules$i = {};
cssModules$i["$style"] = style1;
var Dialog = /* @__PURE__ */ _export_sfc$1(_sfc_main$l, [["__cssModules", cssModules$i]]);
const disclose = "_disclose_uqv1m_2";
var style0$h = {
  disclose,
  "disclose-title": "_disclose-title_uqv1m_11",
  "disclose-panel": "_disclose-panel_uqv1m_23",
  "disclose-bg": "_disclose-bg_uqv1m_38"
};
const _sfc_main$k = {
  name: "AgDisclose",
  props: {
    title: {
      type: String,
      required: true,
      default: ""
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false
    },
    isBackground: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    discloseClasses() {
      return {
        [this.$style["disclose"]]: true,
        [this.$style[`disclose-bg`]]: !!this.isBackground
      };
    }
  }
};
const _hoisted_1$a = ["open"];
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("details", {
    class: normalizeClass($options.discloseClasses),
    open: $props.isOpen
  }, [
    createElementVNode("summary", {
      class: normalizeClass(_ctx.$style["disclose-title"])
    }, toDisplayString($props.title), 3),
    createElementVNode("div", {
      class: normalizeClass(_ctx.$style["disclose-panel"])
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2)
  ], 10, _hoisted_1$a);
}
const cssModules$h = {};
cssModules$h["$style"] = style0$h;
var Disclose = /* @__PURE__ */ _export_sfc$1(_sfc_main$k, [["render", _sfc_render$i], ["__cssModules", cssModules$h]]);
const divider = "_divider_adtti_2";
var style0$g = {
  divider,
  "divider-small": "_divider-small_adtti_18",
  "divider-large": "_divider-large_adtti_23",
  "divider-xlarge": "_divider-xlarge_adtti_28",
  "divider-justify-end": "_divider-justify-end_adtti_33",
  "divider-justify-start": "_divider-justify-start_adtti_34",
  "divider-content": "_divider-content_adtti_39",
  "divider-vertical": "_divider-vertical_adtti_44",
  "divider-warning": "_divider-warning_adtti_81",
  "divider-error": "_divider-error_adtti_90",
  "divider-success": "_divider-success_adtti_99",
  "divider-info": "_divider-info_adtti_108"
};
const _sfc_main$j = {
  name: "AgDivider",
  props: {
    isVertical: {
      type: Boolean,
      required: false,
      default: false
    },
    justify: {
      type: String,
      required: false,
      default: "",
      validator: (value) => ["start", "end", ""].includes(value)
    },
    size: {
      type: String,
      required: false,
      default: "",
      validator: (value) => ["small", "large", "xlarge", ""].includes(value)
    },
    type: {
      type: String,
      required: false,
      default: "",
      validator: (value) => ["info", "success", "warning", "error", ""].includes(value)
    }
  },
  computed: {
    dividerClasses() {
      return {
        [this.$style["divider"]]: true,
        [this.$style["divider-vertical"]]: !!this.isVertical,
        [this.$style[`divider-justify-${this.justify}`]]: !!this.justify,
        [this.$style[`divider-${this.size}`]]: !!this.size,
        [this.$style[`divider-${this.type}`]]: !!this.type
      };
    },
    hasDividerContentSlot() {
      return !!this.$slots.dividerContent;
    }
  }
};
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    role: "separator",
    class: normalizeClass($options.dividerClasses),
    "aria-orientation": "horizontal"
  }, [
    $options.hasDividerContentSlot ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(_ctx.$style["divider-content"])
    }, [
      renderSlot(_ctx.$slots, "dividerContent")
    ], 2)) : createCommentVNode("", true)
  ], 2);
}
const cssModules$g = {};
cssModules$g["$style"] = style0$g;
var Divider = /* @__PURE__ */ _export_sfc$1(_sfc_main$j, [["render", _sfc_render$h], ["__cssModules", cssModules$g]]);
const _hoisted_1$9 = /* @__PURE__ */ createElementVNode("button", {
  type: "button",
  "data-a11y-dialog-show": "drawerid123"
}, " Open the drawer via data attribute (this has to go away) ", -1);
const _hoisted_2$6 = /* @__PURE__ */ createTextVNode(" My Drawer ");
const _hoisted_3$5 = /* @__PURE__ */ createElementVNode("p", { class: "mbs16 mbe16" }, " Default slot content... ", -1);
const _hoisted_4$4 = /* @__PURE__ */ createElementVNode("button", null, "Dismiss", -1);
const __default__$1 = {
  name: "AgDrawer",
  props: {
    id: {
      type: String,
      required: true
    },
    drawerRoot: {
      type: String,
      required: true
    },
    placement: {
      type: String,
      required: true
    },
    titleId: {
      type: String,
      default: ""
    },
    isAnimationFadeIn: {
      type: Boolean,
      required: false,
      default: false
    },
    isAnimationSlideUp: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
const _sfc_main$i = /* @__PURE__ */ Object.assign(__default__$1, {
  setup(__props) {
    let drawer = null;
    const assignDrawerRef = (instance) => {
      drawer = instance;
      console.log("drawer instance: ", drawer);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1$9,
        createVNode(Dialog, mergeProps({
          id: __props.id,
          "drawer-placement": __props.placement,
          "dialog-root": __props.drawerRoot,
          onInstance: assignDrawerRef
        }, _ctx.$attrs), {
          title: withCtx(() => [
            _hoisted_2$6
          ]),
          closeButtonContent: withCtx(() => [
            _hoisted_4$4
          ]),
          default: withCtx(() => [
            _hoisted_3$5
          ]),
          _: 1
        }, 16, ["id", "drawer-placement", "dialog-root"])
      ], 64);
    };
  }
});
const empty = "_empty_aem89_2";
var style0$f = {
  "empty-base": "_empty-base_aem89_2",
  empty,
  "empty-bordered": "_empty-bordered_aem89_16",
  "empty-rounded": "_empty-rounded_aem89_21",
  "empty-actions": "_empty-actions_aem89_25"
};
const _sfc_main$h = {
  name: "AgEmptyState",
  props: {
    isBordered: {
      type: Boolean,
      default: false,
      required: false
    },
    isRounded: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  setup(props) {
    const styles = useCssModule();
    const emptyActionsClasses = computed(() => {
      return {
        [styles["empty-actions"]]: true
      };
    });
    const emptyClasses = computed(() => {
      return {
        [styles["empty"]]: true,
        [styles["empty-rounded"]]: !!props.isRounded,
        [styles["empty-bordered"]]: !!props.isBordered
      };
    });
    return {
      emptyClasses,
      emptyActionsClasses
    };
  }
};
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($setup.emptyClasses)
  }, [
    renderSlot(_ctx.$slots, "header"),
    renderSlot(_ctx.$slots, "body"),
    createElementVNode("div", {
      class: normalizeClass($setup.emptyActionsClasses)
    }, [
      renderSlot(_ctx.$slots, "footer")
    ], 2)
  ], 2);
}
const cssModules$f = {};
cssModules$f["$style"] = style0$f;
var EmptyState = /* @__PURE__ */ _export_sfc$1(_sfc_main$h, [["render", _sfc_render$g], ["__cssModules", cssModules$f]]);
const header = "_header_1k0hl_2";
var style0$e = {
  header,
  "header-base": "_header-base_1k0hl_3",
  "header-skin": "_header-skin_1k0hl_14",
  "header-content": "_header-content_1k0hl_28",
  "header-sticky": "_header-sticky_1k0hl_54",
  "header-content-start": "_header-content-start_1k0hl_70",
  "header-content-end": "_header-content-end_1k0hl_74"
};
const _sfc_main$g = {
  name: "AgHeader",
  props: {
    css: {
      type: String,
      default: ""
    },
    isSticky: {
      type: Boolean,
      default: false
    },
    isSkinned: {
      type: Boolean,
      default: true
    },
    isHeaderContentStart: {
      type: Boolean,
      default: false
    },
    isHeaderContentEnd: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        [this.$style.header]: this.isSkinned,
        [this.$style["header-base"]]: !this.isSkinned,
        [this.$style["header-sticky"]]: this.isSticky,
        [`${this.css}`]: !!this.css
      };
    },
    headerContentClasses() {
      return {
        [this.$style["header-content"]]: true,
        [this.$style["header-content-start"]]: this.isHeaderContentStart,
        [this.$style["header-content-end"]]: this.isHeaderContentEnd
      };
    }
  }
};
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("nav", {
    class: normalizeClass($options.classes)
  }, [
    createElementVNode("div", {
      class: normalizeClass($options.headerContentClasses)
    }, [
      renderSlot(_ctx.$slots, "logoleft"),
      renderSlot(_ctx.$slots, "headernav"),
      renderSlot(_ctx.$slots, "logoright")
    ], 2)
  ], 2);
}
const cssModules$e = {};
cssModules$e["$style"] = style0$e;
var Header = /* @__PURE__ */ _export_sfc$1(_sfc_main$g, [["render", _sfc_render$f], ["__cssModules", cssModules$e]]);
var style0$d = {
  "header-nav": "_header-nav_yf3gw_3"
};
const _sfc_main$f = {
  name: "AgHeaderNav",
  props: {
    css: {
      type: String,
      default: ""
    }
  },
  computed: {
    classes() {
      return {
        [this.$style["header-nav"]]: true,
        [`${this.css}`]: !!this.css
      };
    }
  }
};
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("nav", {
    class: normalizeClass([$props.css ? $props.css : ""])
  }, [
    createElementVNode("ul", {
      class: normalizeClass($options.classes)
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2)
  ], 2);
}
const cssModules$d = {};
cssModules$d["$style"] = style0$d;
var HeaderNav = /* @__PURE__ */ _export_sfc$1(_sfc_main$f, [["render", _sfc_render$e], ["__cssModules", cssModules$d]]);
var style0$c = {
  "header-nav-item": "_header-nav-item_1k5ky_2"
};
const _sfc_main$e = {
  name: "AgHeaderNavItem",
  props: {
    css: {
      type: String,
      default: ""
    }
  },
  computed: {
    classes() {
      return {
        [this.$style["header-nav-item"]]: true,
        [`${this.css}`]: !!this.css
      };
    }
  }
};
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("li", {
    class: normalizeClass($options.classes)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
const cssModules$c = {};
cssModules$c["$style"] = style0$c;
var HeaderNavItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$e, [["render", _sfc_render$d], ["__cssModules", cssModules$c]]);
var Icon_vue_vue_type_style_index_0_lang = "";
const _sfc_main$d = {
  name: "AgIcon",
  props: {
    isSkinned: {
      type: Boolean,
      required: false,
      default: true
    },
    size: {
      type: Number,
      required: false,
      default: 18,
      validator: (value) => [14, 16, 18, 20, 24, 32, 36, 40, 48, 56, 64].includes(value)
    },
    type: {
      type: String,
      required: false,
      default: "",
      validator: (value) => {
        const valid = ["warning", "error", "info", "success", ""].includes(value);
        return valid;
      }
    }
  },
  computed: {
    iconClasses() {
      return {
        ["icon-base"]: !this.isSkinned,
        ["icon"]: !!this.isSkinned,
        [`icon-${this.type}`]: !!this.type,
        [`icon-${this.size}`]: !!this.size
      };
    }
  }
};
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", {
    class: normalizeClass($options.iconClasses)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var Icon = /* @__PURE__ */ _export_sfc$1(_sfc_main$d, [["render", _sfc_render$c]]);
const input = "_input_13rx8_2";
const label = "_label_13rx8_15";
const disabled$1 = "_disabled_13rx8_246";
var style0$b = {
  "input-base": "_input-base_13rx8_2",
  input,
  label,
  "label-base": "_label-base_13rx8_16",
  "field-help": "_field-help_13rx8_24",
  "field-help-large": "_field-help-large_13rx8_25",
  "field-help-small": "_field-help-small_13rx8_26",
  "field-error": "_field-error_13rx8_27",
  "field-error-large": "_field-error-large_13rx8_28",
  "field-error-small": "_field-error-small_13rx8_29",
  "label-skin": "_label-skin_13rx8_30",
  "input-addon-container": "_input-addon-container_13rx8_32",
  "input-small": "_input-small_13rx8_33",
  "input-large": "_input-large_13rx8_34",
  "input-skin": "_input-skin_13rx8_35",
  "input-underlined": "_input-underlined_13rx8_36",
  "input-underlined-bg": "_input-underlined-bg_13rx8_37",
  "label-inline": "_label-inline_13rx8_88",
  "input-inline": "_input-inline_13rx8_89",
  "input-rounded": "_input-rounded_13rx8_151",
  "label-error": "_label-error_13rx8_166",
  "input-error": "_input-error_13rx8_170",
  "label-large": "_label-large_13rx8_212",
  "label-small": "_label-small_13rx8_223",
  disabled: disabled$1,
  "input-has-left-addon": "_input-has-left-addon_13rx8_281",
  "input-has-right-addon": "_input-has-right-addon_13rx8_285",
  "input-addon-left": "_input-addon-left_13rx8_289",
  "input-addon-right": "_input-addon-right_13rx8_293"
};
const TYPES = [
  "text",
  "password",
  "email",
  "number",
  "url",
  "tel",
  "search",
  "textarea"
];
const _sfc_main$c = {
  name: "AgInput",
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: "",
      required: true
    },
    id: {
      type: String,
      required: true
    },
    labelCss: {
      type: String,
      default: ""
    },
    css: {
      type: String,
      default: ""
    },
    helpText: {
      type: String,
      default: ""
    },
    invalidText: {
      type: String,
      default: ""
    },
    hasLeftAddon: {
      type: Boolean,
      default: false
    },
    hasRightAddon: {
      type: Boolean,
      default: false
    },
    isInline: {
      type: Boolean,
      default: false
    },
    isInvalid: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    isSkinned: {
      type: Boolean,
      default: true
    },
    isRounded: {
      type: Boolean,
      default: false
    },
    isUnderlinedWithBackground: {
      type: Boolean,
      default: false
    },
    isUnderlined: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ""
    },
    value: {
      type: [String, Number],
      default: ""
    },
    type: {
      type: String,
      default: "text",
      validator: (value) => {
        const isValid = TYPES.includes(value);
        if (!isValid) {
          console.warn(`Allowed types for Input: are ${TYPES}`);
        }
        return isValid;
      }
    }
  },
  emits: ["input"],
  computed: {
    isInputDisabled() {
      return this.isDisabled ? true : void 0;
    },
    helpClasses() {
      return {
        [this.$style["field-help"]]: !this.size,
        [this.$style[`field-help-${this.size}`]]: this.size
      };
    },
    invalidClasses() {
      return {
        [this.$style["field-error"]]: !this.size,
        [this.$style[`field-error-${this.size}`]]: this.size
      };
    },
    addonContainerClasses() {
      return {
        [this.$style["input-addon-container"]]: true
      };
    },
    inputClasses() {
      return {
        [this.$style["input"]]: this.isSkinned,
        [this.$style["input-base"]]: !this.isSkinned,
        [this.$style["input-rounded"]]: this.isRounded,
        [this.$style["input-underlined"]]: this.isUnderlined,
        [this.$style["input-has-left-addon"]]: this.hasLeftAddon,
        [this.$style["input-has-right-addon"]]: this.hasRightAddon,
        [this.$style["input-error"]]: this.isInvalid,
        [this.$style["input-inline"]]: this.isInline,
        [this.$style["input-underlined-bg"]]: this.isUnderlinedWithBackground,
        [`${this.css}`]: !!this.css,
        [this.$style[`input-${this.size}`]]: this.size
      };
    },
    labelClasses() {
      return {
        [this.$style["label"]]: true,
        [this.$style["label-error"]]: this.isInvalid,
        [this.$style["label-inline"]]: this.isInline,
        [this.$style[`label-${this.size}`]]: this.size,
        [`${this.labelCss}`]: !!this.labelCss
      };
    }
  }
};
const _hoisted_1$8 = { class: "w-100" };
const _hoisted_2$5 = ["for"];
const _hoisted_3$4 = ["id", "value", "disabled"];
const _hoisted_4$3 = ["id", "type", "value", "disabled"];
const _hoisted_5$2 = ["id", "type", "value", "disabled"];
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$8, [
    createElementVNode("label", {
      class: normalizeClass($options.labelClasses),
      for: $props.id
    }, toDisplayString($props.label), 11, _hoisted_2$5),
    $props.type == "textarea" ? (openBlock(), createElementBlock("textarea", mergeProps({
      key: 0,
      id: $props.id,
      class: $options.inputClasses
    }, _ctx.$attrs, {
      value: $props.value,
      disabled: $options.isInputDisabled
    }, toHandlers({
      input: (event) => _ctx.$emit("input", event.target.value)
    })), null, 16, _hoisted_3$4)) : $props.hasLeftAddon || $props.hasRightAddon ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass($options.addonContainerClasses)
    }, [
      renderSlot(_ctx.$slots, "addonLeft"),
      createElementVNode("input", mergeProps({
        id: $props.id,
        class: $options.inputClasses
      }, _ctx.$attrs, {
        type: $props.type,
        value: $props.value,
        disabled: $options.isInputDisabled
      }, toHandlers({
        input: (event) => _ctx.$emit("input", event.target.value)
      })), null, 16, _hoisted_4$3),
      renderSlot(_ctx.$slots, "addonRight")
    ], 2)) : (openBlock(), createElementBlock("input", mergeProps({
      key: 2,
      id: $props.id,
      class: $options.inputClasses
    }, _ctx.$attrs, {
      type: $props.type,
      value: $props.value,
      disabled: $options.isInputDisabled
    }, toHandlers({
      input: (event) => _ctx.$emit("input", event.target.value)
    })), null, 16, _hoisted_5$2)),
    $props.isInvalid ? (openBlock(), createElementBlock("span", {
      key: 3,
      class: normalizeClass($options.invalidClasses),
      role: "status",
      "aria-live": "polite"
    }, toDisplayString($props.invalidText), 3)) : $props.helpText ? (openBlock(), createElementBlock("span", {
      key: 4,
      class: normalizeClass($options.helpClasses)
    }, toDisplayString($props.helpText), 3)) : createCommentVNode("", true)
  ]);
}
const cssModules$b = {};
cssModules$b["$style"] = style0$b;
var Input = /* @__PURE__ */ _export_sfc$1(_sfc_main$c, [["render", _sfc_render$b], ["__cssModules", cssModules$b]]);
var style0$a = {
  "input-addon-right": "_input-addon-right_11wqw_5",
  "input-addon-left": "_input-addon-left_11wqw_6"
};
const _sfc_main$b = {
  name: "AgInputAddonItem",
  props: {
    css: {
      type: String,
      default: ""
    },
    addonLeft: {
      type: Boolean,
      default: false
    },
    addonRight: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        [this.$style["input-addon-left"]]: !!this.addonLeft,
        [this.$style["input-addon-right"]]: !!this.addonRight,
        [`${this.css}`]: !!this.css
      };
    }
  }
};
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.classes)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
const cssModules$a = {};
cssModules$a["$style"] = style0$a;
var InputAddonItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$b, [["render", _sfc_render$a], ["__cssModules", cssModules$a]]);
const loader = "_loader_18div_2";
const blink = "_blink_18div_1";
var style0$9 = {
  loader,
  blink,
  "loader-small": "_loader-small_18div_30",
  "loader-large": "_loader-large_18div_38"
};
const _sfc_main$a = {
  name: "AgLoader",
  props: {
    ariaLabel: {
      type: String,
      required: false,
      default: "Loading\u2026"
    },
    size: {
      type: String,
      required: false,
      default: "",
      validator: (val) => ["small", "large", ""].includes(val)
    }
  },
  setup(props) {
    const styles = useCssModule();
    const loaderClasses = computed(() => {
      return {
        [styles["loader"]]: true,
        [styles[`loader-${props.size}`]]: !!props.size
      };
    });
    return {
      loaderClasses
    };
  }
};
const _hoisted_1$7 = { class: "screenreader-only" };
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($setup.loaderClasses),
    role: "status",
    "aria-live": "polite",
    "aria-busy": "true"
  }, [
    createElementVNode("span", _hoisted_1$7, toDisplayString($props.ariaLabel), 1)
  ], 2);
}
const cssModules$9 = {};
cssModules$9["$style"] = style0$9;
var Loader = /* @__PURE__ */ _export_sfc$1(_sfc_main$a, [["render", _sfc_render$9], ["__cssModules", cssModules$9]]);
const pagination = "_pagination_1n3nc_2";
var style0$8 = {
  "pagination-container": "_pagination-container_1n3nc_2",
  pagination,
  "pagination-item": "_pagination-item_1n3nc_11",
  "pagination-button": "_pagination-button_1n3nc_16",
  "pagination-item-disabled": "_pagination-item-disabled_1n3nc_49",
  "pagination-item-active": "_pagination-item-active_1n3nc_60",
  "pagination-bordered": "_pagination-bordered_1n3nc_65",
  "pagination-item-gap": "_pagination-item-gap_1n3nc_80",
  "pagination-center": "_pagination-center_1n3nc_84",
  "pagination-start": "_pagination-start_1n3nc_88",
  "pagination-end": "_pagination-end_1n3nc_92"
};
const defaultLabels = {
  first: "First",
  last: "Last",
  previous: "Previous",
  next: "Next"
};
const _sfc_main$9 = {
  name: "AgPagination",
  props: {
    justify: {
      type: String,
      required: false,
      default: "",
      validator: (value) => ["start", "center", "end", ""].includes(value)
    },
    ariaLabel: {
      type: String,
      required: false,
      default: "pagination"
    },
    current: {
      type: Number,
      required: true
    },
    pages: {
      type: Array,
      required: true
    },
    isBordered: {
      type: Boolean,
      required: false,
      default: false
    },
    isFirstLast: {
      type: Boolean,
      required: false,
      default: true
    },
    navigationLabels: {
      type: Object,
      default: () => defaultLabels
    }
  },
  emits: ["update-page"],
  setup(props, { emit }) {
    const isOnFirst = () => {
      return props.current === 1;
    };
    const getLastPageNumber = () => {
      return props.pages[props.pages.length - 1];
    };
    const isOnLast = () => {
      return props.current === getLastPageNumber();
    };
    const handleClick = (pageNumber) => {
      emit("update-page", pageNumber);
    };
    const styles = useCssModule();
    const paginationButtonClass = computed(() => styles["pagination-button"]);
    const paginationItemClass = computed(() => styles["pagination-item"]);
    const paginationContainerClasses = computed(() => {
      return {
        [styles["pagination-container"]]: true,
        [styles[`pagination-${props.justify}`]]: !!props.justify
      };
    });
    const paginationClasses = computed(() => {
      return {
        [styles["pagination"]]: true,
        [styles["pagination-bordered"]]: !!props.isBordered
      };
    });
    const paginationItemFirstClasses = computed(() => {
      return {
        [paginationItemClass]: true,
        [styles["pagination-item-disabled"]]: isOnFirst()
      };
    });
    const paginationItemLastClasses = computed(() => {
      return {
        [paginationItemClass]: true,
        [styles["pagination-item-disabled"]]: isOnLast()
      };
    });
    const paginationItemClassesForPage = (page) => {
      return {
        [paginationItemClass]: true,
        [styles["pagination-item-active"]]: page === props.current,
        [styles["pagination-item-gap"]]: page === "..."
      };
    };
    return {
      handleClick,
      getLastPageNumber,
      isOnFirst,
      isOnLast,
      paginationButtonClass,
      paginationContainerClasses,
      paginationClasses,
      paginationItemFirstClasses,
      paginationItemLastClasses,
      paginationItemClassesForPage
    };
  }
};
const _hoisted_1$6 = ["aria-label"];
const _hoisted_2$4 = ["disabled", "aria-disabled"];
const _hoisted_3$3 = ["disabled", "aria-disabled"];
const _hoisted_4$2 = ["onClick", "aria-label"];
const _hoisted_5$1 = { key: 1 };
const _hoisted_6$1 = ["onClick", "aria-label"];
const _hoisted_7 = ["disabled", "aria-disabled"];
const _hoisted_8 = ["disabled", "aria-disabled"];
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("nav", {
    class: normalizeClass($setup.paginationContainerClasses),
    "aria-label": $props.ariaLabel
  }, [
    createElementVNode("ul", {
      class: normalizeClass($setup.paginationClasses)
    }, [
      $props.isFirstLast ? (openBlock(), createElementBlock("li", {
        key: 0,
        class: normalizeClass($setup.paginationItemFirstClasses)
      }, [
        createElementVNode("button", {
          class: normalizeClass($setup.paginationButtonClass),
          onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $setup.handleClick(1), ["prevent"])),
          disabled: $setup.isOnFirst(),
          "aria-disabled": $setup.isOnFirst(),
          "aria-label": "Goto page 1"
        }, toDisplayString(String.fromCharCode(171)) + " " + toDisplayString($props.navigationLabels.first), 11, _hoisted_2$4)
      ], 2)) : createCommentVNode("", true),
      createElementVNode("li", {
        class: normalizeClass($setup.paginationItemFirstClasses)
      }, [
        createElementVNode("button", {
          class: normalizeClass($setup.paginationButtonClass),
          onClick: _cache[1] || (_cache[1] = withModifiers(($event) => $setup.handleClick($props.current - 1), ["prevent"])),
          disabled: $setup.isOnFirst(),
          "aria-disabled": $setup.isOnFirst(),
          "aria-label": "Goto previous page"
        }, toDisplayString(String.fromCharCode(8249)) + " " + toDisplayString($props.navigationLabels.previous), 11, _hoisted_3$3)
      ], 2),
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.pages, (page) => {
        return openBlock(), createElementBlock("li", {
          key: `page-${page}`,
          class: normalizeClass($setup.paginationItemClassesForPage(page))
        }, [
          page === $props.current ? (openBlock(), createElementBlock("button", {
            key: 0,
            onClick: withModifiers(($event) => $setup.handleClick(page), ["prevent"]),
            class: normalizeClass($setup.paginationButtonClass),
            type: "button",
            "aria-current": "page",
            "aria-label": `Page ${page}, current page`
          }, toDisplayString(page), 11, _hoisted_4$2)) : page === "..." ? (openBlock(), createElementBlock("span", _hoisted_5$1, toDisplayString(page), 1)) : (openBlock(), createElementBlock("button", {
            key: 2,
            onClick: withModifiers(($event) => $setup.handleClick(page), ["prevent"]),
            class: normalizeClass($setup.paginationButtonClass),
            type: "button",
            "aria-label": `Goto page ${page}`
          }, toDisplayString(page), 11, _hoisted_6$1))
        ], 2);
      }), 128)),
      createElementVNode("li", {
        class: normalizeClass($setup.paginationItemLastClasses)
      }, [
        createElementVNode("button", {
          class: normalizeClass($setup.paginationButtonClass),
          onClick: _cache[2] || (_cache[2] = withModifiers(($event) => $setup.handleClick($props.current + 1), ["prevent"])),
          disabled: $setup.isOnLast(),
          "aria-disabled": $setup.isOnLast(),
          "aria-label": "Goto next page"
        }, toDisplayString($props.navigationLabels.next) + " " + toDisplayString(String.fromCharCode(8250)), 11, _hoisted_7)
      ], 2),
      $props.isFirstLast ? (openBlock(), createElementBlock("li", {
        key: 1,
        class: normalizeClass($setup.paginationItemLastClasses)
      }, [
        createElementVNode("button", {
          class: normalizeClass($setup.paginationButtonClass),
          onClick: _cache[3] || (_cache[3] = withModifiers(($event) => $setup.handleClick($setup.getLastPageNumber()), ["prevent"])),
          disabled: $setup.isOnLast(),
          "aria-disabled": $setup.isOnLast(),
          "aria-label": "Goto last page"
        }, toDisplayString($props.navigationLabels.last) + " " + toDisplayString(String.fromCharCode(187)), 11, _hoisted_8)
      ], 2)) : createCommentVNode("", true)
    ], 2)
  ], 10, _hoisted_1$6);
}
const cssModules$8 = {};
cssModules$8["$style"] = style0$8;
var Pagination = /* @__PURE__ */ _export_sfc$1(_sfc_main$9, [["render", _sfc_render$8], ["__cssModules", cssModules$8]]);
const usePagination = ({ offset = 2 }) => {
  const getPaddedArray = (filtered, shouldIncludeLeftDots, shouldIncludeRightDots, totalCount) => {
    if (shouldIncludeLeftDots) {
      filtered.unshift("...");
    }
    if (shouldIncludeRightDots) {
      filtered.push("...");
    }
    if (totalCount <= 1) {
      return [1];
    }
    return [1, ...filtered, totalCount];
  };
  const generatePagingPaddedByOne = (current, totalPageCount) => {
    const center = [current - 1, current, current + 1];
    const filteredCenter = center.filter((p) => p > 1 && p < totalPageCount);
    const includeLeftDots = current > 3;
    const includeRightDots = current < totalPageCount - 2;
    return getPaddedArray(filteredCenter, includeLeftDots, includeRightDots, totalPageCount);
  };
  const generatePagingPaddedByTwo = (current, totalPageCount) => {
    const center = [current - 2, current - 1, current, current + 1, current + 2];
    const filteredCenter = center.filter((p) => p > 1 && p < totalPageCount);
    const includeThreeLeft = current === 5;
    const includeThreeRight = current === totalPageCount - 4;
    const includeLeftDots = current > 5;
    const includeRightDots = current < totalPageCount - 4;
    if (includeThreeLeft) {
      filteredCenter.unshift(2);
    }
    if (includeThreeRight) {
      filteredCenter.push(totalPageCount - 1);
    }
    return getPaddedArray(filteredCenter, includeLeftDots, includeRightDots, totalPageCount);
  };
  const generate = (current, totalPageCount) => {
    if (offset === 1) {
      const generatedPages2 = generatePagingPaddedByOne(current, totalPageCount);
      return generatedPages2;
    }
    const generatedPages = generatePagingPaddedByTwo(current, totalPageCount);
    return generatedPages;
  };
  return {
    generate
  };
};
function usePagingGenerator(initialPage, offset, totalPages) {
  const paging = usePagination({ offset: offset || 1 });
  let currentPaginationPage = ref(initialPage || 1);
  let paginationPages = ref([]);
  const updatePages = () => {
    paginationPages.value = paging.generate(currentPaginationPage.value, totalPages);
  };
  onMounted(updatePages);
  watch(currentPaginationPage, updatePages);
  const handlePaginationUpdate = (pageNumber) => {
    currentPaginationPage.value = pageNumber;
  };
  return {
    currentPaginationPage,
    paginationPages,
    handlePaginationUpdate
  };
}
const progress = "_progress_f0u9q_8";
var style0$7 = {
  progress
};
const _sfc_main$8 = {
  name: "AgProgress",
  props: {
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      required: true
    },
    css: {
      type: String,
      default: ""
    }
  },
  computed: {
    classes() {
      return {
        [this.$style.progress]: true,
        [`${this.css}`]: !!this.css
      };
    }
  }
};
const _hoisted_1$5 = ["value", "max"];
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("progress", {
    class: normalizeClass($options.classes),
    value: $props.value,
    max: $props.max
  }, null, 10, _hoisted_1$5);
}
const cssModules$7 = {};
cssModules$7["$style"] = style0$7;
var Progress = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["render", _sfc_render$7], ["__cssModules", cssModules$7]]);
const select = "_select_19fej_2";
var style0$6 = {
  select,
  "select-base": "_select-base_19fej_3",
  "select-skin": "_select-skin_19fej_14",
  "select-small": "_select-small_19fej_63",
  "select-large": "_select-large_19fej_70"
};
const _sfc_main$7 = {
  name: "AgSelect",
  props: {
    uniqueId: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    labelCopy: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    size: {
      type: String,
      required: false,
      default: "",
      validator: (value) => ["small", "large", ""].includes(value)
    },
    multipleSize: {
      type: Number,
      required: false,
      default: 1
    },
    isMultiple: {
      type: Boolean,
      required: false,
      default: false
    },
    defaultOptionLabel: {
      type: String,
      required: false,
      default: "Please select an option"
    },
    isDisabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["input"],
  data() {
    return {
      value: ""
    };
  },
  computed: {
    showDefaultOption() {
      return !this.isMultiple;
    },
    selectClasses() {
      return {
        [this.$style["select"]]: true,
        [this.$style[`select-${this.size}`]]: !!this.size
      };
    }
  }
};
const _hoisted_1$4 = ["for"];
const _hoisted_2$3 = ["id", "name", "value", "disabled", "multiple", "size"];
const _hoisted_3$2 = {
  key: 0,
  disabled: "",
  value: ""
};
const _hoisted_4$1 = ["value"];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createElementVNode("label", {
      class: normalizeClass([_ctx.$style["select"], "screenreader-only"]),
      for: $props.uniqueId
    }, toDisplayString($props.labelCopy), 11, _hoisted_1$4),
    createElementVNode("select", {
      id: $props.uniqueId,
      name: $props.name,
      value: $data.value,
      class: normalizeClass($options.selectClasses),
      disabled: $props.isDisabled,
      multiple: $props.isMultiple,
      size: $props.isMultiple && $props.multipleSize,
      onInput: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("input", $event.target.value))
    }, [
      $options.showDefaultOption ? (openBlock(), createElementBlock("option", _hoisted_3$2, toDisplayString($props.defaultOptionLabel), 1)) : createCommentVNode("", true),
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.options, (option, i) => {
        return openBlock(), createElementBlock("option", {
          key: i,
          value: option.value
        }, toDisplayString(option.label), 9, _hoisted_4$1);
      }), 128))
    ], 42, _hoisted_2$3)
  ], 64);
}
const cssModules$6 = {};
cssModules$6["$style"] = style0$6;
var Select = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["render", _sfc_render$6], ["__cssModules", cssModules$6]]);
const spinner = "_spinner_wbq61_2";
var style0$5 = {
  spinner,
  "spinner-small": "_spinner-small_wbq61_27",
  "spinner-large": "_spinner-large_wbq61_34",
  "spinner-xlarge": "_spinner-xlarge_wbq61_41",
  "loading-circle": "_loading-circle_wbq61_1"
};
const _sfc_main$6 = {
  name: "AgSpinner",
  props: {
    ariaLabel: {
      type: String,
      required: false,
      default: "Loading\u2026"
    },
    size: {
      type: String,
      required: false,
      default: "",
      validator: (val) => ["small", "large", "xlarge", ""].includes(val)
    }
  },
  setup(props) {
    const styles = useCssModule();
    const spinnerClasses = computed(() => {
      return {
        [styles["spinner"]]: true,
        [styles[`spinner-${props.size}`]]: !!props.size
      };
    });
    return {
      spinnerClasses
    };
  }
};
const _hoisted_1$3 = { class: "screenreader-only" };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($setup.spinnerClasses),
    role: "status",
    "aria-live": "polite",
    "aria-busy": "true"
  }, [
    createElementVNode("span", _hoisted_1$3, toDisplayString($props.ariaLabel), 1)
  ], 2);
}
const cssModules$5 = {};
cssModules$5["$style"] = style0$5;
var Spinner = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["render", _sfc_render$5], ["__cssModules", cssModules$5]]);
const disabled = "_disabled_5iflo_183";
var style0$4 = {
  "switch-container": "_switch-container_5iflo_8",
  "switch": "_switch_5iflo_8",
  "switch-small": "_switch-small_5iflo_54",
  "switch-large": "_switch-large_5iflo_65",
  "switch-border": "_switch-border_5iflo_76",
  "switch-action": "_switch-action_5iflo_80",
  "switch-right": "_switch-right_5iflo_87",
  "switch-input": "_switch-input_5iflo_111",
  "switch-label": "_switch-label_5iflo_119",
  disabled
};
const _sfc_main$5 = {
  name: "AgSwitch",
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    css: {
      type: String,
      required: false,
      default: ""
    },
    labelPosition: {
      type: String,
      default: "left",
      validator: (value) => ["left", "right"].includes(value)
    },
    size: {
      type: String,
      default: null,
      validator: (value) => ["large", "small"].includes(value)
    },
    isChecked: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    isBordered: {
      type: Boolean,
      default: false
    },
    isAction: {
      type: Boolean,
      default: false
    }
  },
  emits: ["change"],
  computed: {
    switchSpan() {
      return {
        [this.$style[`switch`]]: true,
        [this.$style["switch-border"]]: !!this.isBordered,
        [this.$style["switch-action"]]: !!this.isAction,
        [this.$style[`switch-${this.size}`]]: !!this.size
      };
    },
    switchInput() {
      return [this.$style[`switch-input`]];
    },
    switchLabel() {
      return [this.$style[`switch-label`]];
    },
    switchContainer() {
      return {
        [this.$style[`switch-container`]]: true,
        [this.css]: !!this.css,
        [this.$style["switch-right"]]: this.labelPosition === "right",
        [this.$style["disabled"]]: !!this.isDisabled
      };
    }
  },
  methods: {
    handleClick(evt) {
      const el = evt.target;
      if (el.getAttribute("aria-checked") == "true") {
        el.setAttribute("aria-checked", "false");
      } else {
        el.setAttribute("aria-checked", "true");
      }
    },
    handleKeypress(evt) {
      const keyCode = evt.keyCode || evt.which;
      switch (keyCode) {
        case 13:
          evt.preventDefault();
          evt.target.click();
          break;
      }
    },
    triggerChange(e) {
      this.$emit("change", e.target.checked);
    }
  }
};
const _hoisted_1$2 = ["for"];
const _hoisted_2$2 = ["id", "checked", "disabled"];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("label", {
    class: normalizeClass($options.switchContainer),
    for: $props.id
  }, [
    $props.labelPosition === "left" ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass($options.switchLabel)
    }, toDisplayString($props.label), 3)) : createCommentVNode("", true),
    createElementVNode("input", {
      id: $props.id,
      type: "checkbox",
      class: normalizeClass($options.switchInput),
      checked: $props.isChecked,
      disabled: $props.isDisabled,
      role: "switch",
      onChange: _cache[0] || (_cache[0] = (...args) => $options.triggerChange && $options.triggerChange(...args)),
      onClick: _cache[1] || (_cache[1] = (...args) => $options.handleClick && $options.handleClick(...args)),
      onKeypress: _cache[2] || (_cache[2] = (...args) => $options.handleKeypress && $options.handleKeypress(...args))
    }, null, 42, _hoisted_2$2),
    createElementVNode("span", {
      class: normalizeClass($options.switchSpan),
      "aria-hidden": "true"
    }, null, 2),
    $props.labelPosition === "right" ? (openBlock(), createElementBlock("span", {
      key: 1,
      class: normalizeClass($options.switchLabel)
    }, toDisplayString($props.label), 3)) : createCommentVNode("", true)
  ], 10, _hoisted_1$2);
}
const cssModules$4 = {};
cssModules$4["$style"] = style0$4;
var Switch = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["render", _sfc_render$4], ["__cssModules", cssModules$4]]);
const tabs = "_tabs_ralmj_3";
const active = "_active_ralmj_117";
var style0$3 = {
  tabs,
  "tabs-vertical": "_tabs-vertical_ralmj_8",
  "tab-list": "_tab-list_ralmj_12",
  "tab-list-base": "_tab-list-base_ralmj_13",
  "tab-skinned": "_tab-skinned_ralmj_20",
  "tab-base": "_tab-base_ralmj_32",
  "tab-button": "_tab-button_ralmj_37",
  "tab-button-base": "_tab-button-base_ralmj_37",
  "tab-button-skin": "_tab-button-skin_ralmj_63",
  "tab-borderless": "_tab-borderless_ralmj_91",
  "tab-button-large": "_tab-button-large_ralmj_95",
  "tab-button-xlarge": "_tab-button-xlarge_ralmj_102",
  "tab-item": "_tab-item_ralmj_109",
  active,
  "tab-panel": "_tab-panel_ralmj_151"
};
const _sfc_main$4 = {
  name: "AgTabs",
  props: {
    activatedTab: {
      type: Number,
      default: 0
    },
    tabType: {
      type: String,
      required: false,
      default: "tab",
      validator: (value) => ["tab", "custom"].includes(value)
    },
    isVertical: {
      type: Boolean,
      requiredd: false,
      default: false
    },
    isSkinned: {
      type: Boolean,
      required: false,
      default: true
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    disabledOptions: {
      type: Array,
      requiredd: false,
      default: () => []
    },
    isBorderless: {
      type: Boolean,
      required: false,
      default: false
    },
    size: {
      type: String,
      required: false,
      default: ""
    }
  },
  emits: ["selected"],
  setup(props, { emit, slots }) {
    const tabsList = Object.keys(slots).filter((name) => name.startsWith("tab-"));
    const panelsList = Object.keys(slots).filter((name) => name.startsWith("panel-"));
    let tabButtonRefs = [];
    const setTabButtonRefs = (el) => {
      if (el) {
        tabButtonRefs.push(el);
      }
    };
    let activeTab = ref(tabsList[0]);
    const selectTab = (tabName) => {
      activeTab.value = tabName;
      emit("selected", tabName);
    };
    return {
      activeTab,
      selectTab,
      setTabButtonRefs,
      tabButtonRefs,
      tabsList,
      panelsList
    };
  },
  computed: {
    tabsClasses() {
      return {
        [this.$style["tabs"]]: true,
        [this.$style["tabs-vertical"]]: !!this.isVertical
      };
    },
    tablistClasses() {
      return {
        [this.$style["tab-list-base"]]: !this.isSkinned,
        [this.$style["tab-list"]]: !!this.isSkinned,
        [this.$style[`tab-borderless`]]: this.isBorderless
      };
    }
  },
  methods: {
    focusTab(index, direction) {
      let i = index;
      if (direction === "asc") {
        i += 1;
      } else if (direction === "desc") {
        i -= 1;
      }
      if (i < 0) {
        i = this.tabsList.length - 1;
      } else if (i >= this.tabsList.length) {
        i = 0;
      }
      const nextTab = this.tabButtonRefs[i];
      if (nextTab) {
        if (nextTab.disabled && direction) {
          this.focusTab(i, direction);
        } else {
          nextTab.focus();
        }
      }
    },
    onKeyDown(ev, index) {
      switch (ev.key) {
        case "Up":
        case "ArrowUp":
          if (this.isVertical) {
            this.focusTab(index, "desc");
          }
          break;
        case "Down":
        case "ArrowDown":
          if (this.isVertical) {
            this.focusTab(index, "asc");
          }
          break;
        case "Left":
        case "ArrowLeft":
          if (!this.isVertical) {
            this.focusTab(index, "desc");
          }
          break;
        case "Right":
        case "ArrowRight":
          if (!this.isVertical) {
            this.focusTab(index, "asc");
          }
          break;
        case "Home":
        case "ArrowHome":
          this.focusTab(0);
          break;
        case "End":
        case "ArrowEnd":
          this.focusTab(this.tabsList.length - 1);
          break;
        case "Enter":
        case "Space":
          this.focusTab(index);
          this.selectTab(this.tabsList[index]);
          break;
        default:
          return;
      }
      ev.preventDefault();
    },
    isTabDisabled(tabTitle) {
      if (this.isDisabled) {
        return true;
      }
      if (this.disabledOptions && this.disabledOptions.includes(tabTitle)) {
        return true;
      }
    },
    tabButtonClasses(tabName) {
      return this.tabType === "tab" ? {
        [this.$style[`tab-item`]]: true,
        [this.$style[`tab-button`]]: true,
        [this.$style["active"]]: tabName === this.activeTab,
        [this.$style["tab-button-large"]]: this.size === "large",
        [this.$style["tab-button-xlarge"]]: this.size === "xlarge"
      } : {
        [this.$style[`tab-button-base`]]: true,
        [this.$style["active"]]: tabName === this.activeTab
      };
    }
  }
};
const _hoisted_1$1 = ["aria-orientation"];
const _hoisted_2$1 = ["id", "aria-controls", "disabled", "tabindex", "aria-selected", "onClick", "onKeydown"];
const _hoisted_3$1 = ["id", "aria-labelledby", "hidden"];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.tabsClasses)
  }, [
    createElementVNode("div", {
      role: "tablist",
      class: normalizeClass($options.tablistClasses),
      "aria-orientation": $props.isVertical ? "vertical" : "horizontal"
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.tabsList, (tab, index) => {
        return openBlock(), createElementBlock("button", {
          id: tab,
          key: tab,
          ref_for: true,
          ref: $setup.setTabButtonRefs,
          role: "tab",
          "aria-controls": `${tab.replace("tab", "panel")}`,
          disabled: $options.isTabDisabled(tab),
          tabindex: tab === $setup.activeTab ? "0" : "-1",
          "aria-selected": tab === $setup.activeTab,
          class: normalizeClass($options.tabButtonClasses(tab)),
          onClick: withModifiers(($event) => $setup.selectTab(tab), ["prevent"]),
          onKeydown: ($event) => $options.onKeyDown($event, index)
        }, [
          renderSlot(_ctx.$slots, tab)
        ], 42, _hoisted_2$1);
      }), 128))
    ], 10, _hoisted_1$1),
    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.panelsList, (panel) => {
      return openBlock(), createElementBlock("div", {
        id: panel,
        key: panel,
        "aria-labelledby": `${panel.replace("panel", "tab")}`,
        hidden: $setup.activeTab !== panel.replace("panel", "tab"),
        class: normalizeClass(_ctx.$style["tab-panel"]),
        tabindex: "0",
        role: "tabpanel"
      }, [
        renderSlot(_ctx.$slots, $setup.activeTab.replace("tab", "panel"))
      ], 10, _hoisted_3$1);
    }), 128))
  ], 2);
}
const cssModules$3 = {};
cssModules$3["$style"] = style0$3;
var Tabs = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["render", _sfc_render$3], ["__cssModules", cssModules$3]]);
const table = "_table_cmss1_2";
var style0$2 = {
  table,
  "table-caps": "_table-caps_cmss1_40",
  "caption-top": "_caption-top_cmss1_54",
  "caption-bottom": "_caption-bottom_cmss1_58",
  "caption-end": "_caption-end_cmss1_72",
  "table-small": "_table-small_cmss1_76",
  "table-large": "_table-large_cmss1_80",
  "table-xlarge": "_table-xlarge_cmss1_84",
  "table-bordered": "_table-bordered_cmss1_88",
  "table-borderless": "_table-borderless_cmss1_96",
  "table-striped": "_table-striped_cmss1_104",
  "table-active": "_table-active_cmss1_110",
  "table-hoverable": "_table-hoverable_cmss1_116",
  "table-stacked": "_table-stacked_cmss1_123",
  "table-responsive": "_table-responsive_cmss1_178",
  "table-responsive-small": "_table-responsive-small_cmss1_185",
  "table-responsive-medium": "_table-responsive-medium_cmss1_192",
  "table-responsive-large": "_table-responsive-large_cmss1_199",
  "table-responsive-xlarge": "_table-responsive-xlarge_cmss1_206",
  "table-header-container": "_table-header-container_cmss1_212",
  "table-sort-label": "_table-sort-label_cmss1_217",
  "table-sort": "_table-sort_cmss1_217",
  "icon-sort": "_icon-sort_cmss1_235",
  "icon-sort-ascending": "_icon-sort-ascending_cmss1_241",
  "icon-sort-descending": "_icon-sort-descending_cmss1_245"
};
const _sfc_main$3 = {
  name: "AgTable",
  props: {
    headers: {
      type: Array,
      default: () => {
        return [];
      }
    },
    rows: {
      type: Array,
      default: () => {
        return [];
      }
    },
    caption: {
      type: String,
      required: true
    },
    captionPosition: {
      type: String,
      required: false,
      default: "hidden",
      validator: (value) => ["top", "bottom", "end", "hidden"].includes(value)
    },
    tableSize: {
      type: String,
      required: false,
      default: "",
      validator: (value) => ["", "small", "large", "xlarge"].includes(value)
    },
    responsiveSize: {
      type: String,
      required: false,
      default: "",
      validator: (value) => ["", "small", "medium", "large", "xlarge"].includes(value)
    },
    isUppercasedHeaders: {
      type: Boolean,
      default: false
    },
    isBordered: {
      type: Boolean,
      default: false
    },
    isBorderless: {
      type: Boolean,
      default: false
    },
    isStriped: {
      type: Boolean,
      default: false
    },
    isHoverable: {
      type: Boolean,
      default: false
    },
    isStacked: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const styles = useCssModule();
    let direction = ref("none");
    let sortingKey = ref("");
    const originalRows = [...props.rows];
    let sortableItems = ref([...originalRows]);
    const pluckColumnToSort = (rowLeft, rowRight) => {
      const colLeft = rowLeft[sortingKey.value] === null || rowLeft[sortingKey.value] === void 0 ? -Infinity : rowLeft[sortingKey.value];
      const colRight = rowRight[sortingKey.value] === null || rowRight[sortingKey.value] === void 0 ? -Infinity : rowRight[sortingKey.value];
      return {
        colLeft,
        colRight
      };
    };
    const internalSort = (rowLeft, rowRight) => {
      let { colLeft, colRight } = pluckColumnToSort(rowLeft, rowRight);
      const headerWithCustomSortFunction = props.headers.find((h) => h.key === sortingKey.value && !!h.sortFn);
      if (headerWithCustomSortFunction && headerWithCustomSortFunction.sortFn) {
        return headerWithCustomSortFunction.sortFn(colLeft, colRight);
      }
      colLeft = typeof colLeft === "string" ? colLeft.toLowerCase().replace(/(^\$|,)/g, "") : colLeft;
      colRight = typeof colRight === "string" ? colRight.toLowerCase().replace(/(^\$|,)/g, "") : colRight;
      colLeft = !Number.isNaN(Number(colLeft)) ? Number(colLeft) : colLeft;
      colRight = !Number.isNaN(Number(colRight)) ? Number(colRight) : colRight;
      if (colLeft > colRight) {
        return 1;
      }
      if (colLeft < colRight) {
        return -1;
      }
      return 0;
    };
    const descendingSort = (row1, row2) => internalSort(row1, row2) * -1;
    watch([direction, sortingKey], (currentValue) => {
      const newDirection = currentValue[0];
      let rows = props.rows;
      if (newDirection === "ascending") {
        rows.sort(internalSort);
      } else if (newDirection === "descending") {
        rows.sort(descendingSort);
      } else {
        rows = [...originalRows];
      }
      sortableItems.value = rows;
    });
    const getSortDirectionFor = (headerKey) => {
      if (sortingKey.value !== headerKey) {
        return "none";
      } else {
        return direction.value;
      }
    };
    const getSortingClassesFor = (headerKey) => {
      if (sortingKey.value === headerKey) {
        return {
          [styles[`icon-sort-${direction.value}`]]: direction && direction.value !== "none",
          [styles["icon-sort"]]: true
        };
      }
      return {
        [styles["icon-sort"]]: true
      };
    };
    const handleSortClicked = (headerKey) => {
      if (sortingKey.value !== headerKey) {
        direction.value = "none";
        sortingKey.value = headerKey;
      }
      switch (direction.value) {
        case "ascending":
          direction.value = "descending";
          break;
        case "descending":
          direction.value = "none";
          break;
        case "none":
          direction.value = "ascending";
          break;
        default:
          console.warn("Table sorting only supports directions: ascending | descending | none");
      }
    };
    return {
      direction,
      getSortDirectionFor,
      getSortingClassesFor,
      handleSortClicked,
      sortingKey,
      sortableItems
    };
  },
  computed: {
    captionClasses() {
      return {
        ["screenreader-only"]: this.captionPosition === "hidden",
        [this.$style[`caption-${this.captionPosition}`]]: this.captionPosition !== "hidden"
      };
    },
    tableResponsiveClasses() {
      return {
        [this.$style["table-responsive"]]: !this.responsiveSize,
        [this.$style[`table-responsive-${this.responsiveSize}`]]: !!this.responsiveSize
      };
    },
    tableClasses() {
      return {
        [this.$style["table"]]: true,
        [this.$style[`table-${this.tableSize}`]]: this.tableSize,
        [this.$style[`table-caps`]]: this.isUppercasedHeaders,
        [this.$style[`table-bordered`]]: this.isBordered,
        [this.$style[`table-borderless`]]: this.isBorderless,
        [this.$style[`table-striped`]]: this.isStriped,
        [this.$style[`table-hoverable`]]: this.isHoverable,
        [this.$style[`table-stacked`]]: this.isStacked
      };
    }
  }
};
const _hoisted_1 = ["aria-sort"];
const _hoisted_2 = ["onClick"];
const _hoisted_3 = {
  class: /* @__PURE__ */ normalizeClass("screenreader-only")
};
const _hoisted_4 = { key: 1 };
const _hoisted_5 = ["innerHTML"];
const _hoisted_6 = { key: 1 };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.tableResponsiveClasses)
  }, [
    createElementVNode("table", {
      class: normalizeClass($options.tableClasses)
    }, [
      createElementVNode("caption", {
        class: normalizeClass($options.captionClasses)
      }, toDisplayString($props.caption), 3),
      createElementVNode("thead", null, [
        createElementVNode("tr", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($props.headers, (headerCol) => {
            return openBlock(), createElementBlock("th", {
              key: headerCol.key,
              "aria-sort": $setup.getSortDirectionFor(headerCol.key),
              scope: "col",
              style: normalizeStyle({ width: headerCol.width ? headerCol.width : "auto" })
            }, [
              headerCol.sortable ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass([_ctx.$style["table-header-container"]])
              }, [
                createElementVNode("span", {
                  class: normalizeClass([_ctx.$style["table-sort-label"]])
                }, toDisplayString(headerCol.label), 3),
                createElementVNode("button", {
                  type: "button",
                  class: normalizeClass([_ctx.$style["table-sort"]]),
                  onClick: ($event) => $setup.handleSortClicked(headerCol.key)
                }, [
                  createElementVNode("span", _hoisted_3, toDisplayString(headerCol.label), 1),
                  createElementVNode("span", {
                    class: normalizeClass($setup.getSortingClassesFor(headerCol.key))
                  }, null, 2)
                ], 10, _hoisted_2)
              ], 2)) : (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(headerCol.label), 1))
            ], 12, _hoisted_1);
          }), 128))
        ])
      ]),
      createElementVNode("tbody", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.sortableItems, (row, i) => {
          return openBlock(), createElementBlock("tr", { key: i }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(row), (key, cIndex) => {
              return openBlock(), createElementBlock("td", { key: cIndex }, [
                $props.headers[cIndex].renderFn ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  innerHTML: $props.headers[cIndex].renderFn(row[key])
                }, null, 8, _hoisted_5)) : (openBlock(), createElementBlock("div", _hoisted_6, toDisplayString(row[key]), 1))
              ]);
            }), 128))
          ]);
        }), 128))
      ])
    ], 2)
  ], 2);
}
const cssModules$2 = {};
cssModules$2["$style"] = style0$2;
var Table = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["render", _sfc_render$2], ["__cssModules", cssModules$2]]);
const tag = "_tag_2luww_2";
var style0$1 = {
  "tag-base": "_tag-base_2luww_2",
  tag,
  "tag-skin": "_tag-skin_2luww_9",
  "tag-info": "_tag-info_2luww_21",
  "tag-warning": "_tag-warning_2luww_26",
  "tag-error": "_tag-error_2luww_31",
  "tag-success": "_tag-success_2luww_36",
  "tag-upper": "_tag-upper_2luww_41",
  "tag-circle": "_tag-circle_2luww_46",
  "tag-round": "_tag-round_2luww_50",
  "tag-pill": "_tag-pill_2luww_54"
};
const _sfc_main$2 = {
  name: "AgTag",
  props: {
    isSkinned: {
      type: Boolean,
      required: false,
      default: true
    },
    isUppercase: {
      type: Boolean,
      required: false,
      default: false
    },
    type: {
      type: String,
      required: false,
      default: "",
      validator: (value) => {
        const valid = ["warning", "error", "info", "success", ""].includes(value);
        return valid;
      }
    },
    shape: {
      type: String,
      required: false,
      default: "",
      validator: (value) => {
        const valid = ["pill", "circle", "round", "square", ""].includes(value);
        return valid;
      }
    }
  },
  computed: {
    tagClasses() {
      return {
        [this.$style["tag"]]: !!this.isSkinned,
        [this.$style["tag-base"]]: !this.isSkinned,
        [this.$style[`tag-${this.type}`]]: !!this.type,
        [this.$style[`tag-${this.shape}`]]: !!this.shape,
        [this.$style["tag-upper"]]: !!this.isUppercase
      };
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", {
    class: normalizeClass($options.tagClasses)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
const cssModules$1 = {};
cssModules$1["$style"] = style0$1;
var Tag = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["render", _sfc_render$1], ["__cssModules", cssModules$1]]);
var style0 = {
  "alert-toast": "_alert-toast_15wpu_2"
};
const _sfc_main$1 = {
  name: "AgAlert",
  props: {
    portalRootSelector: {
      type: String,
      default: "body"
    },
    horizontalPosition: {
      type: String,
      required: true,
      validator: (value) => ["start", "center", "end"].includes(value)
    },
    verticalPosition: {
      type: String,
      required: true,
      validator: (value) => ["top", "bottom"].includes(value)
    }
  },
  computed: {
    toastClasses() {
      return [
        this.$style["alert-toast"],
        this.horizontalPosition,
        this.verticalPosition
      ].join(" ");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Teleport, { to: $props.portalRootSelector }, [
    createElementVNode("div", {
      class: normalizeClass($options.toastClasses)
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2)
  ], 8, ["to"]);
}
const cssModules = {};
cssModules["$style"] = style0;
var Toasts = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["render", _sfc_render], ["__cssModules", cssModules]]);
const __default__ = {
  name: "AgToast",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
      default: true
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.isOpen ? (openBlock(), createBlock(AgAlert, mergeProps({
        key: 0,
        "is-toast": true
      }, _ctx.$attrs), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16)) : createCommentVNode("", true);
    };
  }
});
export { AgAlert as Alert, Avatar, AvatarGroup, Breadcrumb, Button, ButtonGroup, Card, ChoiceInput, Close, Dialog, Disclose, Divider, _sfc_main$i as Drawer, EmptyState, Header, HeaderNav, HeaderNavItem, Icon, Input, InputAddonItem, Loader, Pagination, Progress, Select, Spinner, Switch, Table, Tabs, Tag, _sfc_main as Toast, Toasts, usePagingGenerator };
