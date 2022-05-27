var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import { defineComponent, useCssModule, computed, openBlock, createElementBlock, normalizeClass, unref, renderSlot, createCommentVNode, createElementVNode, Fragment, renderList, toDisplayString, createBlock, resolveDynamicComponent, withCtx, ref, onMounted, onUnmounted, Teleport, nextTick, createTextVNode, createVNode, useSlots, mergeProps, withModifiers, watch, normalizeStyle } from "vue";
const alert = "_alert_250wc_2";
var style0$u = {
  "alert-base": "_alert-base_250wc_2",
  alert,
  "alert-end": "_alert-end_250wc_11",
  "alert-skin": "_alert-skin_250wc_15",
  "alert-icon": "_alert-icon_250wc_21",
  "alert-border-top": "_alert-border-top_250wc_29",
  "alert-border-left": "_alert-border-left_250wc_33",
  "alert-border-bottom": "_alert-border-bottom_250wc_37",
  "alert-border-right": "_alert-border-right_250wc_41",
  "alert-border-all": "_alert-border-all_250wc_45",
  "alert-rounded": "_alert-rounded_250wc_49",
  "alert-dark": "_alert-dark_250wc_53",
  "alert-warning": "_alert-warning_250wc_63",
  "alert-warning-icon": "_alert-warning-icon_250wc_68",
  "alert-info": "_alert-info_250wc_96",
  "alert-info-icon": "_alert-info-icon_250wc_101",
  "alert-error": "_alert-error_250wc_129",
  "alert-error-icon": "_alert-error-icon_250wc_134",
  "alert-success": "_alert-success_250wc_162",
  "alert-success-icon": "_alert-success-icon_250wc_167",
  "alert-toast-shadow": "_alert-toast-shadow_250wc_199",
  "fade-in": "_fade-in_250wc_203",
  "slide-up": "_slide-up_250wc_207",
  "slide-up-fade-in": "_slide-up-fade-in_250wc_215"
};
var _export_sfc$1 = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$k = ["aria-atomic", "aria-live"];
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  props: {
    type: { default: "" },
    isBorderAll: { type: Boolean },
    isBorderTop: { type: Boolean },
    isBorderBottom: { type: Boolean },
    isBorderLeft: { type: Boolean },
    isBorderRight: { type: Boolean },
    isRounded: { type: Boolean },
    isBlockEnd: { type: Boolean },
    isAnimationFadeIn: { type: Boolean },
    isAnimationSlideUp: { type: Boolean },
    isToast: { type: Boolean }
  },
  emits: ["input", "update:modelValue"],
  setup(__props) {
    const props = __props;
    const styles = useCssModule();
    const ariaAtomicValue = computed(() => {
      if (props.isToast) {
        return true;
      }
      return void 0;
    });
    const ariaLiveValue = computed(() => {
      let ariaLiveValue2;
      if (props.isToast && props.type === "error") {
        ariaLiveValue2 = "assertive";
      } else if (props.isToast) {
        ariaLiveValue2 = "polite";
      } else {
        ariaLiveValue2 = void 0;
      }
      return ariaLiveValue2;
    });
    computed(() => {
      return props.type ? [styles[`alert-${props.type}-icon`], styles["alert-icon"]].join(" ") : styles["alert-icon"];
    });
    const alertClasses = computed(() => {
      let typeClass;
      switch (props.type) {
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
        [styles["fade-in"]]: props.isAnimationFadeIn && !props.isAnimationSlideUp,
        [styles["slide-up"]]: props.isAnimationSlideUp && !props.isAnimationFadeIn,
        [styles["slide-up-fade-in"]]: props.isAnimationSlideUp && props.isAnimationFadeIn,
        [styles["alert"]]: true,
        [styles[typeClass]]: typeClass.length,
        [styles["alert-rounded"]]: props.isRounded,
        [styles["alert-border-all"]]: props.isBorderAll,
        [styles["alert-border-left"]]: props.isBorderLeft,
        [styles["alert-border-right"]]: props.isBorderRight,
        [styles["alert-border-top"]]: props.isBorderTop,
        [styles["alert-toast-shadow"]]: props.isToast,
        [styles["alert-border-bottom"]]: props.isBorderBottom,
        [styles["alert-end"]]: props.isBlockEnd
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(alertClasses)),
        role: "alert",
        "aria-atomic": unref(ariaAtomicValue),
        "aria-live": unref(ariaLiveValue)
      }, [
        renderSlot(_ctx.$slots, "icon"),
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1$k);
    };
  }
});
const cssModules$v = {
  "$style": style0$u
};
var AgAlert = /* @__PURE__ */ _export_sfc$1(_sfc_main$y, [["__cssModules", cssModules$v]]);
const avatar$1 = "_avatar_iey7j_2";
var style0$t = {
  avatar: avatar$1,
  "avatar-base": "_avatar-base_iey7j_3",
  "avatar-skin": "_avatar-skin_iey7j_12",
  "avatar-square": "_avatar-square_iey7j_20",
  "avatar-rounded": "_avatar-rounded_iey7j_24",
  "avatar-small": "_avatar-small_iey7j_28",
  "avatar-large": "_avatar-large_iey7j_34",
  "avatar-xlarge": "_avatar-xlarge_iey7j_39",
  "avatar-image": "_avatar-image_iey7j_49",
  "avatar-info": "_avatar-info_iey7j_55",
  "avatar-warning": "_avatar-warning_iey7j_60",
  "avatar-success": "_avatar-success_iey7j_65",
  "avatar-error": "_avatar-error_iey7j_70",
  "avatar-transparent": "_avatar-transparent_iey7j_76",
  "avatar-group": "_avatar-group_iey7j_80"
};
const _hoisted_1$j = ["data-text"];
const _hoisted_2$c = ["src"];
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  props: {
    isSkinned: { type: Boolean, default: true },
    isRounded: { type: Boolean },
    isSquare: { type: Boolean },
    isTransparent: { type: Boolean },
    imgUrl: null,
    text: null,
    size: { default: "" },
    type: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const styles = useCssModule();
    const avatarImage = computed(() => ({
      [styles["avatar-image"]]: true
    }));
    const avatarClasses = computed(() => ({
      [styles["avatar"]]: !!props.isSkinned,
      [styles["avatar-base"]]: !props.isSkinned,
      [styles["avatar-square"]]: !!props.isSquare,
      [styles["avatar-rounded"]]: !!props.isRounded,
      [styles["avatar-transparent"]]: !!props.isTransparent,
      [styles[`avatar-${props.type}`]]: !!props.type,
      [styles[`avatar-${props.size}`]]: !!props.size
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(avatarClasses)),
        "data-text": __props.text || null
      }, [
        __props.imgUrl ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: __props.imgUrl,
          class: normalizeClass(unref(avatarImage)),
          alt: ""
        }, null, 10, _hoisted_2$c)) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1$j);
    };
  }
});
const cssModules$u = {
  "$style": style0$t
};
var Avatar = /* @__PURE__ */ _export_sfc$1(_sfc_main$x, [["__cssModules", cssModules$u]]);
const avatar = "_avatar_iey7j_2";
var style0$s = {
  avatar,
  "avatar-base": "_avatar-base_iey7j_3",
  "avatar-skin": "_avatar-skin_iey7j_12",
  "avatar-square": "_avatar-square_iey7j_20",
  "avatar-rounded": "_avatar-rounded_iey7j_24",
  "avatar-small": "_avatar-small_iey7j_28",
  "avatar-large": "_avatar-large_iey7j_34",
  "avatar-xlarge": "_avatar-xlarge_iey7j_39",
  "avatar-image": "_avatar-image_iey7j_49",
  "avatar-info": "_avatar-info_iey7j_55",
  "avatar-warning": "_avatar-warning_iey7j_60",
  "avatar-success": "_avatar-success_iey7j_65",
  "avatar-error": "_avatar-error_iey7j_70",
  "avatar-transparent": "_avatar-transparent_iey7j_76",
  "avatar-group": "_avatar-group_iey7j_80"
};
const _sfc_main$w = {};
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.$style["avatar-group"])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
const cssModules$t = {
  "$style": style0$s
};
var AvatarGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$w, [["render", _sfc_render$1], ["__cssModules", cssModules$t]]);
const breadcrumb = "_breadcrumb_1iwh0_2";
var style0$r = {
  breadcrumb,
  "breadcrumb-item": "_breadcrumb-item_1iwh0_10",
  "breadcrumb-slash": "_breadcrumb-slash_1iwh0_20",
  "breadcrumb-arrow": "_breadcrumb-arrow_1iwh0_24",
  "breadcrumb-bullet": "_breadcrumb-bullet_1iwh0_28"
};
const _hoisted_1$i = { "aria-label": "breadcrumbs" };
const _hoisted_2$b = {
  key: 0,
  href: "{route.url}"
};
const _hoisted_3$8 = { key: 1 };
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  props: {
    routes: null,
    type: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const styles = useCssModule();
    const breadcrumbClasses = computed(() => ({
      [styles.breadcrumb]: true,
      [styles[`breadcrumb-${props.type}`]]: !!props.type
    }));
    const isLast = (crumbRoutes, idx) => {
      return idx === crumbRoutes.length - 1;
    };
    const crumbClasses = (index) => {
      const isLastCrumb = isLast(props.routes, index);
      return {
        [styles["breadcrumb-item"]]: true,
        [styles.active]: isLastCrumb
      };
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("nav", _hoisted_1$i, [
        createElementVNode("ol", {
          class: normalizeClass(unref(breadcrumbClasses))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.routes, (route, index) => {
            return openBlock(), createElementBlock("li", {
              key: index,
              class: normalizeClass(crumbClasses(index))
            }, [
              index !== __props.routes.length - 1 && route.url ? (openBlock(), createElementBlock("a", _hoisted_2$b, toDisplayString(route.label), 1)) : (openBlock(), createElementBlock("span", _hoisted_3$8, toDisplayString(route.label), 1))
            ], 2);
          }), 128))
        ], 2)
      ]);
    };
  }
});
const cssModules$s = {
  "$style": style0$r
};
var Breadcrumb = /* @__PURE__ */ _export_sfc$1(_sfc_main$v, [["__cssModules", cssModules$s]]);
const btn = "_btn_15lj7_2";
const disabled$2 = "_disabled_15lj7_86";
var style0$q = {
  "btn-base": "_btn-base_15lj7_2",
  btn,
  "btn-skin": "_btn-skin_15lj7_29",
  disabled: disabled$2,
  "btn-primary": "_btn-primary_15lj7_107",
  "btn-bordered": "_btn-bordered_15lj7_114",
  "btn-secondary": "_btn-secondary_15lj7_128",
  "btn-large": "_btn-large_15lj7_161",
  "btn-small": "_btn-small_15lj7_168",
  "btn-rounded": "_btn-rounded_15lj7_178",
  "btn-pill": "_btn-pill_15lj7_182",
  "btn-circle": "_btn-circle_15lj7_191",
  "btn-circle-large": "_btn-circle-large_15lj7_198",
  "btn-circle-small": "_btn-circle-small_15lj7_204",
  "btn-block": "_btn-block_15lj7_213",
  "btn-block-following": "_btn-block-following_15lj7_219",
  "btn-grouped": "_btn-grouped_15lj7_223",
  "btn-capsule": "_btn-capsule_15lj7_238",
  "btn-link": "_btn-link_15lj7_257",
  "btn-blank": "_btn-blank_15lj7_257"
};
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  props: {
    mode: null,
    isDisabled: { type: Boolean },
    isBlank: { type: Boolean },
    isLink: { type: Boolean },
    isBlock: { type: Boolean },
    isCapsule: { type: Boolean },
    isBordered: { type: Boolean },
    isGrouped: { type: Boolean },
    isCircle: { type: Boolean },
    isRounded: { type: Boolean },
    isSkinned: { type: Boolean, default: true },
    type: { default: "button" },
    size: { default: "" },
    css: { default: "" }
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const props = __props;
    const styles = useCssModule();
    const currentComponentType = computed(() => {
      return props.type === "faux" ? "div" : "button";
    });
    const isButtonDisabled = computed(() => {
      return props.isDisabled ? true : void 0;
    });
    const classes = computed(() => {
      return {
        [styles.btn]: props.isSkinned,
        [styles["btn-base"]]: !props.isSkinned,
        [styles["disabled"]]: props.isDisabled,
        [styles["btn-bordered"]]: props.isBordered,
        [styles["btn-capsule"]]: props.isCapsule,
        [styles["btn-grouped"]]: props.isGrouped,
        [styles["btn-blank"]]: props.isBlank,
        [styles["btn-link"]]: props.isLink,
        [styles["btn-block"]]: props.isBlock,
        [styles["btn-rounded"]]: props.isRounded,
        [styles["btn-circle"]]: props.isCircle,
        [styles["btn-primary"]]: props.mode === "primary",
        [styles["btn-secondary"]]: props.mode === "secondary",
        [`${props.css}`]: !!props.css,
        [styles[`btn-${props.size}`]]: props.size
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(unref(currentComponentType)), {
        type: __props.type === "faux" ? false : __props.type,
        class: normalizeClass(unref(classes)),
        disabled: unref(isButtonDisabled),
        onClick: _cache[0] || (_cache[0] = ($event) => emit("click", $event))
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "class", "disabled"]);
    };
  }
});
const cssModules$r = {
  "$style": style0$q
};
var Button = /* @__PURE__ */ _export_sfc$1(_sfc_main$u, [["__cssModules", cssModules$r]]);
var style0$p = {
  "btn-group": "_btn-group_qv83c_6"
};
const _hoisted_1$h = ["aria-label"];
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  props: {
    ariaLabel: null,
    css: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const styles = useCssModule();
    const classes = computed(() => {
      return {
        [styles["btn-group"]]: true,
        [`${props.css}`]: props.css
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(classes)),
        role: "group",
        "aria-label": __props.ariaLabel
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1$h);
    };
  }
});
const cssModules$q = {
  "$style": style0$p
};
var ButtonGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$t, [["__cssModules", cssModules$q]]);
const card = "_card_j09fi_8";
var style0$o = {
  card,
  "card-base": "_card-base_j09fi_9",
  "card-border": "_card-border_j09fi_18",
  "card-rounded": "_card-rounded_j09fi_22",
  "card-shadow": "_card-shadow_j09fi_26",
  "card-animated": "_card-animated_j09fi_53",
  "card-stacked": "_card-stacked_j09fi_85",
  "card-success": "_card-success_j09fi_89",
  "card-info": "_card-info_j09fi_94",
  "card-error": "_card-error_j09fi_99",
  "card-warning": "_card-warning_j09fi_104"
};
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  props: {
    css: { default: "" },
    type: { default: "" },
    isSkinned: { type: Boolean, default: true },
    isAnimated: { type: Boolean },
    isStacked: { type: Boolean },
    isShadow: { type: Boolean },
    isBorder: { type: Boolean },
    isRounded: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const styles = useCssModule();
    const classes = computed(() => ({
      [styles.card]: props.isSkinned,
      [styles["card-base"]]: !props.isSkinned,
      [styles["card-animated"]]: props.isAnimated,
      [styles["card-rounded"]]: props.isRounded,
      [styles["card-border"]]: props.isBorder,
      [styles["card-shadow"]]: props.isShadow,
      [styles["card-stacked"]]: props.isStacked,
      [styles[`card-${props.type}`]]: !!props.type,
      [`${props.css}`]: !!props.css
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(classes))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const cssModules$p = {
  "$style": style0$o
};
var Card = /* @__PURE__ */ _export_sfc$1(_sfc_main$s, [["__cssModules", cssModules$p]]);
const checkbox = "_checkbox_sruek_8";
const radio = "_radio_sruek_9";
var style0$n = {
  "checkbox-group": "_checkbox-group_sruek_8",
  "radio-group": "_radio-group_sruek_9",
  "checkbox-group-large": "_checkbox-group-large_sruek_18",
  "radio-group-large": "_radio-group-large_sruek_19",
  "checkbox-legend": "_checkbox-legend_sruek_24",
  "radio-legend": "_radio-legend_sruek_25",
  checkbox,
  radio,
  "checkbox-small": "_checkbox-small_sruek_40",
  "radio-small": "_radio-small_sruek_41",
  "checkbox-large": "_checkbox-large_sruek_46",
  "radio-large": "_radio-large_sruek_47",
  "checkbox-label-wrap": "_checkbox-label-wrap_sruek_52",
  "radio-label-wrap": "_radio-label-wrap_sruek_53",
  "checkbox-label-wrap-inline": "_checkbox-label-wrap-inline_sruek_60",
  "radio-label-wrap-inline": "_radio-label-wrap-inline_sruek_61",
  "checkbox-label-copy": "_checkbox-label-copy_sruek_71",
  "radio-label-copy": "_radio-label-copy_sruek_72",
  "checkbox-label": "_checkbox-label_sruek_52",
  "radio-label": "_radio-label_sruek_53",
  "checkbox-label-copy-small": "_checkbox-label-copy-small_sruek_81",
  "radio-label-copy-small": "_radio-label-copy-small_sruek_82",
  "checkbox-label-copy-large": "_checkbox-label-copy-large_sruek_86",
  "radio-label-copy-large": "_radio-label-copy-large_sruek_87",
  "checkbox-label-small": "_checkbox-label-small_sruek_143",
  "radio-label-small": "_radio-label-small_sruek_153",
  "checkbox-label-large": "_checkbox-label-large_sruek_158",
  "radio-label-large": "_radio-label-large_sruek_167",
  "checkbox-group-hidden": "_checkbox-group-hidden_sruek_204",
  "radio-group-hidden": "_radio-group-hidden_sruek_205",
  "choice-input-error": "_choice-input-error_sruek_233"
};
const _hoisted_1$g = ["id", "type", "name", "value", "disabled", "checked"];
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  props: {
    id: null,
    options: null,
    legendLabel: null,
    isDisabled: { type: Boolean },
    isFieldset: { type: Boolean, default: true },
    isInvalid: { type: Boolean },
    isInline: { type: Boolean },
    disabledOptions: null,
    checkedOptions: null,
    css: { default: "" },
    isSkinned: { type: Boolean, default: true },
    type: { default: "checkbox" },
    size: { default: "" }
  },
  emits: ["change"],
  setup(__props, { emit }) {
    var _a;
    const props = __props;
    const styles = useCssModule();
    let mutableCheckedOptions = Array.from((_a = props.checkedOptions) != null ? _a : []);
    const choiceType = computed(() => {
      return props.type;
    });
    const inputClasses = computed(() => {
      return {
        [styles[`${props.type}`]]: props.type,
        [styles[`${props.type}-${props.size}`]]: !!props.size
      };
    });
    const fieldsetClasses = computed(() => {
      const overrides = props.css;
      const skin = props.isSkinned ? styles[`${props.type}-group`] : "";
      const sizeSkin = props.isSkinned && props.size === "large" ? styles[`${props.type}-group-${props.size}`] : "";
      return {
        [skin]: true,
        [sizeSkin]: true,
        [overrides]: overrides,
        [styles[`${props.type}-group-hidden`]]: props.isFieldset === false
      };
    });
    const labelSpanCopyClasses = computed(() => {
      return {
        [styles[`${props.type}-label-copy`]]: props.type,
        [styles[`${props.type}-label-copy-${props.size}`]]: props.size,
        [styles["choice-input-error"]]: props.isInvalid
      };
    });
    const labelSpanClasses = computed(() => {
      return {
        [styles[`${props.type}-label`]]: props.type,
        [styles[`${props.type}-label-${props.size}`]]: !!props.size,
        [styles["choice-input-error"]]: props.isInvalid
      };
    });
    const legendClasses = computed(() => {
      let skin = props.isSkinned ? styles[`${props.type}-legend`] : "";
      return {
        [skin]: true,
        ["screenreader-only"]: props.isFieldset === false
      };
    });
    const getId = (index, option) => {
      return `${props.id}-${option.name}-${index}`;
    };
    const isChoiceInputPrechecked = (optionValue) => {
      if (mutableCheckedOptions.length) {
        if (mutableCheckedOptions.includes(optionValue)) {
          return true;
        }
      }
      return false;
    };
    const isChoiceInputDisabled = (optionValue) => {
      if (props.isDisabled) {
        return true;
      }
      if (props.disabledOptions && props.disabledOptions.includes(optionValue)) {
        return true;
      }
    };
    const labelClasses = (optionValue) => {
      return {
        [styles[`${props.type}-label-wrap`]]: props.type,
        [styles[`${props.type}-label-wrap-inline`]]: !!props.isInline,
        [styles["disabled"]]: isChoiceInputDisabled(optionValue)
      };
    };
    const triggerChange = (e) => {
      const checked = e.target.checked;
      const value = e.target.value;
      if (checked) {
        if (!mutableCheckedOptions.includes(value)) {
          if (props.type === "radio") {
            mutableCheckedOptions = [value];
          } else {
            mutableCheckedOptions.push(value);
          }
        }
      } else {
        const filtered = mutableCheckedOptions.filter((item) => item !== value);
        mutableCheckedOptions = filtered;
      }
      emit("change", mutableCheckedOptions);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("fieldset", {
        class: normalizeClass(unref(fieldsetClasses))
      }, [
        createElementVNode("legend", {
          class: normalizeClass(unref(legendClasses))
        }, toDisplayString(__props.legendLabel), 3),
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (option, index) => {
          return openBlock(), createElementBlock("label", {
            key: index,
            class: normalizeClass(labelClasses(option.value))
          }, [
            createElementVNode("input", {
              id: getId(index, option),
              class: normalizeClass(unref(inputClasses)),
              type: unref(choiceType),
              name: option.name,
              value: option.value,
              disabled: isChoiceInputDisabled(option.value),
              checked: isChoiceInputPrechecked(option.value),
              onChange: triggerChange
            }, null, 42, _hoisted_1$g),
            createElementVNode("span", {
              class: normalizeClass(unref(labelSpanClasses)),
              "aria-hidden": "true"
            }, null, 2),
            createElementVNode("span", {
              class: normalizeClass(unref(labelSpanCopyClasses))
            }, toDisplayString(option.label), 3)
          ], 2);
        }), 128))
      ], 2);
    };
  }
});
const cssModules$o = {
  "$style": style0$n
};
var ChoiceInput = /* @__PURE__ */ _export_sfc$1(_sfc_main$r, [["__cssModules", cssModules$o]]);
const close = "_close_1rynh_2";
var style0$m = {
  "close-button": "_close-button_1rynh_2",
  close,
  "close-button-small": "_close-button-small_1rynh_52",
  "close-button-large": "_close-button-large_1rynh_57",
  "close-button-xlarge": "_close-button-xlarge_1rynh_62"
};
const _hoisted_1$f = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M.439 21.44a1.5 1.5 0 0 0 2.122 2.121l9.262-9.261a.25.25 0 0 1 .354 0l9.262 9.263a1.5 1.5 0 1 0 2.122-2.121L14.3 12.177a.25.25 0 0 1 0-.354l9.263-9.262A1.5 1.5 0 0 0 21.439.44L12.177 9.7a.25.25 0 0 1-.354 0L2.561.44A1.5 1.5 0 0 0 .439 2.561L9.7 11.823a.25.25 0 0 1 0 .354Z"
}, null, -1);
const _hoisted_2$a = [
  _hoisted_1$f
];
const _hoisted_3$7 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M.439 21.44a1.5 1.5 0 0 0 2.122 2.121l9.262-9.261a.25.25 0 0 1 .354 0l9.262 9.263a1.5 1.5 0 1 0 2.122-2.121L14.3 12.177a.25.25 0 0 1 0-.354l9.263-9.262A1.5 1.5 0 0 0 21.439.44L12.177 9.7a.25.25 0 0 1-.354 0L2.561.44A1.5 1.5 0 0 0 .439 2.561L9.7 11.823a.25.25 0 0 1 0 .354Z"
}, null, -1);
const _hoisted_4$5 = [
  _hoisted_3$7
];
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  props: {
    size: null,
    isFaux: { type: Boolean }
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const props = __props;
    const styles = useCssModule();
    const closeClasses = computed(() => {
      return {
        [styles["close"]]: true
      };
    });
    const closeButtonClasses = computed(() => {
      return {
        [styles["close-button"]]: true,
        [styles[`close-button-${props.size}`]]: !!props.size
      };
    });
    return (_ctx, _cache) => {
      return __props.isFaux ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(unref(closeButtonClasses))
      }, [
        (openBlock(), createElementBlock("svg", {
          class: normalizeClass(unref(closeClasses)),
          viewBox: "0 0 24 24",
          "aria-hidden": "true"
        }, _hoisted_2$a, 2))
      ], 2)) : (openBlock(), createElementBlock("button", {
        key: 1,
        class: normalizeClass(unref(closeButtonClasses)),
        "aria-label": "Close",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
      }, [
        (openBlock(), createElementBlock("svg", {
          class: normalizeClass(unref(closeClasses)),
          viewBox: "0 0 24 24",
          "aria-hidden": "true"
        }, _hoisted_4$5, 2))
      ], 2));
    };
  }
});
const cssModules$n = {
  "$style": style0$m
};
var Close = /* @__PURE__ */ _export_sfc$1(_sfc_main$q, [["__cssModules", cssModules$n]]);
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
const _sfc_main$p = {
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
const _hoisted_1$e = ["id", "role", "aria-labelledby"];
const _hoisted_2$9 = ["data-a11y-dialog-hide"];
const _hoisted_3$6 = ["aria-label"];
const _hoisted_4$4 = /* @__PURE__ */ createTextVNode(/* @__PURE__ */ toDisplayString("\xD7"));
const _hoisted_5$3 = ["id"];
const _hoisted_6$2 = ["aria-label"];
const _hoisted_7$2 = /* @__PURE__ */ createTextVNode(/* @__PURE__ */ toDisplayString("\xD7"));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
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
        "data-a11y-dialog-hide": $props.role === "alertdialog" ? void 0 : true,
        tabIndex: "-1",
        class: normalizeClass($props.classNames.overlay),
        onClick: _cache[0] || (_cache[0] = ($event) => $props.role === "alertdialog" ? void 0 : $setup.close)
      }, null, 10, _hoisted_2$9),
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
            _hoisted_4$4
          ])
        ], 10, _hoisted_3$6)) : createCommentVNode("", true),
        createElementVNode("p", {
          id: $setup.fullTitleId,
          class: normalizeClass($props.classNames.title)
        }, [
          renderSlot(_ctx.$slots, "title")
        ], 10, _hoisted_5$3),
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
            _hoisted_7$2
          ])
        ], 10, _hoisted_6$2)) : createCommentVNode("", true)
      ], 2)
    ], 10, _hoisted_1$e)
  ], 8, ["to"]);
}
var A11yDialog = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render]]);
var Dialog_vue_vue_type_style_index_0_lang = "";
const dialog = "_dialog_hu244_2";
var style1 = {
  dialog,
  "dialog-overlay": "_dialog-overlay_hu244_3",
  "fade-in": "_fade-in_hu244_1",
  "dialog-content": "_dialog-content_hu244_25",
  "dialog-fade-in": "_dialog-fade-in_hu244_36",
  "dialog-slide-up": "_dialog-slide-up_hu244_40",
  "slide-up": "_slide-up_hu244_1",
  "dialog-slide-up-fade-in": "_dialog-slide-up-fade-in_hu244_48",
  "dialog-close": "_dialog-close_hu244_73",
  "drawer-start": "_drawer-start_hu244_102",
  "drawer-end": "_drawer-end_hu244_110",
  "drawer-top": "_drawer-top_hu244_118",
  "drawer-bottom": "_drawer-bottom_hu244_127",
  "drawer-content": "_drawer-content_hu244_136"
};
const _hoisted_1$d = /* @__PURE__ */ createTextVNode(" Close ");
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  props: {
    id: null,
    dialogRoot: null,
    classNames: null,
    role: { default: "dialog" },
    titleId: null,
    closeButtonLabel: { default: "Close this dialog window" },
    closeButtonPosition: { default: "first" },
    isAnimationFadeIn: { type: Boolean, default: false },
    isAnimationSlideUp: { type: Boolean, default: false },
    drawerPlacement: null
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
      const documentClasses = {
        [styles["dialog-content"]]: true,
        [styles["dialog-slide-up-fade-in"]]: isAnimationFadeIn && isAnimationSlideUp,
        [styles["dialog-slide-up"]]: !isAnimationFadeIn && isAnimationSlideUp,
        [styles["dialog-fade-in"]]: isAnimationFadeIn && !isAnimationSlideUp,
        [styles["drawer-content"]]: drawerPlacement == null ? void 0 : drawerPlacement.length
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
                _hoisted_1$d
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
const cssModules$m = {
  "$style": style1
};
var Dialog = /* @__PURE__ */ _export_sfc$1(_sfc_main$o, [["__cssModules", cssModules$m]]);
const disclose = "_disclose_10tok_2";
var style0$l = {
  disclose,
  "disclose-title": "_disclose-title_10tok_11",
  "disclose-panel": "_disclose-panel_10tok_23",
  "disclose-bordered": "_disclose-bordered_10tok_38",
  "disclose-bg": "_disclose-bg_10tok_42"
};
const _hoisted_1$c = ["open"];
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  props: {
    title: null,
    isOpen: { type: Boolean },
    isBackground: { type: Boolean },
    isBordered: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const styles = useCssModule();
    const discloseClasses = computed(() => {
      return {
        [styles["disclose"]]: true,
        [styles[`disclose-bg`]]: !!props.isBackground,
        [styles[`disclose-bordered`]]: !!props.isBordered
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("details", {
        class: normalizeClass(unref(discloseClasses)),
        open: __props.isOpen
      }, [
        createElementVNode("summary", {
          class: normalizeClass(unref(styles)["disclose-title"])
        }, toDisplayString(__props.title), 3),
        createElementVNode("div", {
          class: normalizeClass(unref(styles)["disclose-panel"])
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)
      ], 10, _hoisted_1$c);
    };
  }
});
const cssModules$l = {
  "$style": style0$l
};
var Disclose = /* @__PURE__ */ _export_sfc$1(_sfc_main$n, [["__cssModules", cssModules$l]]);
const divider = "_divider_1yopj_2";
var style0$k = {
  divider,
  "divider-small": "_divider-small_1yopj_18",
  "divider-large": "_divider-large_1yopj_23",
  "divider-xlarge": "_divider-xlarge_1yopj_28",
  "divider-justify-end": "_divider-justify-end_1yopj_33",
  "divider-justify-start": "_divider-justify-start_1yopj_34",
  "divider-content": "_divider-content_1yopj_39",
  "divider-vertical": "_divider-vertical_1yopj_44",
  "divider-warning": "_divider-warning_1yopj_81",
  "divider-error": "_divider-error_1yopj_90",
  "divider-success": "_divider-success_1yopj_99",
  "divider-info": "_divider-info_1yopj_108"
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  props: {
    isVertical: { type: Boolean },
    justify: { default: "" },
    size: { default: "" },
    type: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const styles = useCssModule();
    const slots = useSlots();
    const dividerClasses = computed(() => {
      return {
        [styles["divider"]]: true,
        [styles["divider-vertical"]]: !!props.isVertical,
        [styles[`divider-justify-${props.justify}`]]: !!props.justify,
        [styles[`divider-${props.size}`]]: !!props.size,
        [styles[`divider-${props.type}`]]: !!props.type
      };
    });
    const hasDividerContentSlot = () => {
      return !!slots.dividerContent;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        role: "separator",
        class: normalizeClass(unref(dividerClasses)),
        "aria-orientation": "horizontal"
      }, [
        hasDividerContentSlot() ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.$style["divider-content"])
        }, [
          renderSlot(_ctx.$slots, "dividerContent")
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const cssModules$k = {
  "$style": style0$k
};
var Divider = /* @__PURE__ */ _export_sfc$1(_sfc_main$m, [["__cssModules", cssModules$k]]);
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  props: {
    id: null,
    drawerRoot: null,
    placement: null,
    title: { default: "" },
    role: { default: "dialog" },
    isAnimationFadeIn: { type: Boolean, default: true }
  },
  emits: ["instance"],
  setup(__props, { emit }) {
    const assignDrawerRef = (instance) => {
      emit("instance", instance);
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Dialog, {
        id: __props.id,
        "dialog-root": __props.drawerRoot,
        "drawer-placement": __props.placement,
        "title-id": `${__props.title.replaceAll(" ", "-").toLowerCase()}-id`,
        role: __props.role,
        onInstance: assignDrawerRef,
        "close-button-label": "Close drawer",
        "is-animation-fade-in": __props.isAnimationFadeIn
      }, {
        title: withCtx(({ title }) => [
          createTextVNode(toDisplayString(title), 1)
        ]),
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "dialog-root", "drawer-placement", "title-id", "role", "is-animation-fade-in"]);
    };
  }
});
const empty = "_empty_aem89_2";
var style0$j = {
  "empty-base": "_empty-base_aem89_2",
  empty,
  "empty-bordered": "_empty-bordered_aem89_16",
  "empty-rounded": "_empty-rounded_aem89_21",
  "empty-actions": "_empty-actions_aem89_25"
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  props: {
    isBordered: { type: Boolean },
    isRounded: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const styles = useCssModule();
    const emptyActionsClasses = computed(() => ({
      [styles["empty-actions"]]: true
    }));
    const emptyClasses = computed(() => ({
      [styles["empty"]]: true,
      [styles["empty-rounded"]]: !!props.isRounded,
      [styles["empty-bordered"]]: !!props.isBordered
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(emptyClasses))
      }, [
        renderSlot(_ctx.$slots, "header"),
        renderSlot(_ctx.$slots, "body"),
        createElementVNode("div", {
          class: normalizeClass(unref(emptyActionsClasses))
        }, [
          renderSlot(_ctx.$slots, "footer")
        ], 2)
      ], 2);
    };
  }
});
const cssModules$j = {
  "$style": style0$j
};
var EmptyState = /* @__PURE__ */ _export_sfc$1(_sfc_main$k, [["__cssModules", cssModules$j]]);
const header = "_header_1k0hl_2";
var style0$i = {
  header,
  "header-base": "_header-base_1k0hl_3",
  "header-skin": "_header-skin_1k0hl_14",
  "header-content": "_header-content_1k0hl_28",
  "header-sticky": "_header-sticky_1k0hl_54",
  "header-content-start": "_header-content-start_1k0hl_70",
  "header-content-end": "_header-content-end_1k0hl_74"
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  props: {
    css: { default: "" },
    isSkinned: { type: Boolean, default: true },
    isSticky: { type: Boolean },
    isHeaderContentStart: { type: Boolean },
    isHeaderContentEnd: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const styles = useCssModule();
    const classes = computed(() => ({
      [styles.header]: props.isSkinned,
      [styles["header-base"]]: !props.isSkinned,
      [styles["header-sticky"]]: props.isSticky,
      [`${props.css}`]: !!props.css
    }));
    const headerContentClasses = computed(() => ({
      [styles["header-content"]]: true,
      [styles["header-content-start"]]: props.isHeaderContentStart,
      [styles["header-content-end"]]: props.isHeaderContentEnd
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("nav", {
        class: normalizeClass(unref(classes))
      }, [
        createElementVNode("div", {
          class: normalizeClass(unref(headerContentClasses))
        }, [
          renderSlot(_ctx.$slots, "logoleft"),
          renderSlot(_ctx.$slots, "headernav"),
          renderSlot(_ctx.$slots, "logoright")
        ], 2)
      ], 2);
    };
  }
});
const cssModules$i = {
  "$style": style0$i
};
var Header = /* @__PURE__ */ _export_sfc$1(_sfc_main$j, [["__cssModules", cssModules$i]]);
var style0$h = {
  "header-nav": "_header-nav_yf3gw_3"
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  props: {
    css: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const styles = useCssModule();
    const classes = computed(() => ({
      [styles["header-nav"]]: true,
      [`${props.css}`]: !!props.css
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("nav", {
        class: normalizeClass([__props.css ? __props.css : ""])
      }, [
        createElementVNode("ul", {
          class: normalizeClass(unref(classes))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)
      ], 2);
    };
  }
});
const cssModules$h = {
  "$style": style0$h
};
var HeaderNav = /* @__PURE__ */ _export_sfc$1(_sfc_main$i, [["__cssModules", cssModules$h]]);
var style0$g = {
  "header-nav-item": "_header-nav-item_1k5ky_2"
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  props: {
    css: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const styles = useCssModule();
    const classes = computed(() => ({
      [styles["header-nav-item"]]: true,
      [`${props.css}`]: !!props.css
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", {
        class: normalizeClass(unref(classes))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const cssModules$g = {
  "$style": style0$g
};
var HeaderNavItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$h, [["__cssModules", cssModules$g]]);
const icon = "_icon_11sbd_2";
var style0$f = {
  "icon-base": "_icon-base_11sbd_2",
  icon,
  "icon-skin": "_icon-skin_11sbd_16",
  "icon-14": "_icon-14_11sbd_21",
  "icon-16": "_icon-16_11sbd_26",
  "icon-18": "_icon-18_11sbd_31",
  "icon-20": "_icon-20_11sbd_36",
  "icon-24": "_icon-24_11sbd_41",
  "icon-svg-24": "_icon-svg-24_11sbd_42",
  "icon-32": "_icon-32_11sbd_47",
  "icon-36": "_icon-36_11sbd_52",
  "icon-40": "_icon-40_11sbd_57",
  "icon-48": "_icon-48_11sbd_62",
  "icon-56": "_icon-56_11sbd_67",
  "icon-64": "_icon-64_11sbd_72",
  "icon-svg": "_icon-svg_11sbd_14",
  "icon-svg-14": "_icon-svg-14_11sbd_83",
  "icon-svg-16": "_icon-svg-16_11sbd_88",
  "icon-svg-18": "_icon-svg-18_11sbd_93",
  "icon-svg-20": "_icon-svg-20_11sbd_98",
  "icon-svg-32": "_icon-svg-32_11sbd_108",
  "icon-svg-36": "_icon-svg-36_11sbd_113",
  "icon-svg-40": "_icon-svg-40_11sbd_118",
  "icon-svg-48": "_icon-svg-48_11sbd_123",
  "icon-svg-56": "_icon-svg-56_11sbd_128",
  "icon-svg-64": "_icon-svg-64_11sbd_133",
  "icon-svg-info": "_icon-svg-info_11sbd_138",
  "icon-svg-action": "_icon-svg-action_11sbd_142",
  "icon-svg-success": "_icon-svg-success_11sbd_143",
  "icon-svg-warning": "_icon-svg-warning_11sbd_147",
  "icon-svg-error": "_icon-svg-error_11sbd_151"
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  props: {
    isSkinned: { type: Boolean, default: true },
    size: { default: 18 },
    type: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const span = ref(null);
    const styles = useCssModule();
    const iconClasses = computed(() => {
      return {
        ["screenreader-only"]: true,
        [styles["icon-base"]]: !props.isSkinned,
        [styles["icon"]]: !!props.isSkinned,
        [styles[`icon-${props.type}`]]: !!props.type,
        [styles[`icon-${props.size}`]]: !!props.size
      };
    });
    onMounted(() => {
      var _a, _b;
      const svg = (_a = span == null ? void 0 : span.value) == null ? void 0 : _a.querySelector("svg");
      svg == null ? void 0 : svg.classList.add(styles["icon-svg"]);
      if (props.size)
        svg == null ? void 0 : svg.classList.add(styles[`icon-svg-${props.size}`]);
      if (props.type)
        svg == null ? void 0 : svg.classList.add(styles[`icon-svg-${props.type}`]);
      (_b = span == null ? void 0 : span.value) == null ? void 0 : _b.classList.remove("screenreader-only");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        ref_key: "span",
        ref: span,
        class: normalizeClass(unref(iconClasses))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const cssModules$f = {
  "$style": style0$f
};
var Icon = /* @__PURE__ */ _export_sfc$1(_sfc_main$g, [["__cssModules", cssModules$f]]);
const input = "_input_1b9hd_2";
const label = "_label_1b9hd_15";
const disabled$1 = "_disabled_1b9hd_246";
var style0$e = {
  "input-base": "_input-base_1b9hd_2",
  input,
  label,
  "label-base": "_label-base_1b9hd_16",
  "field-help": "_field-help_1b9hd_24",
  "field-help-large": "_field-help-large_1b9hd_25",
  "field-help-small": "_field-help-small_1b9hd_26",
  "field-error": "_field-error_1b9hd_27",
  "field-error-large": "_field-error-large_1b9hd_28",
  "field-error-small": "_field-error-small_1b9hd_29",
  "label-skin": "_label-skin_1b9hd_30",
  "input-addon-container": "_input-addon-container_1b9hd_32",
  "input-small": "_input-small_1b9hd_33",
  "input-large": "_input-large_1b9hd_34",
  "input-skin": "_input-skin_1b9hd_35",
  "input-underlined": "_input-underlined_1b9hd_36",
  "input-underlined-bg": "_input-underlined-bg_1b9hd_37",
  "label-inline": "_label-inline_1b9hd_88",
  "input-inline": "_input-inline_1b9hd_89",
  "input-rounded": "_input-rounded_1b9hd_151",
  "label-error": "_label-error_1b9hd_166",
  "input-error": "_input-error_1b9hd_170",
  "label-large": "_label-large_1b9hd_212",
  "label-small": "_label-small_1b9hd_223",
  disabled: disabled$1,
  "input-has-left-addon": "_input-has-left-addon_1b9hd_282",
  "input-has-right-addon": "_input-has-right-addon_1b9hd_286",
  "input-addon-left": "_input-addon-left_1b9hd_290",
  "input-addon-right": "_input-addon-right_1b9hd_294"
};
const _hoisted_1$b = { class: "w-100" };
const _hoisted_2$8 = ["for"];
const _hoisted_3$5 = ["id", "placeholder", "value", "disabled"];
const _hoisted_4$3 = ["id", "type", "disabled", "placeholder", "value"];
const _hoisted_5$2 = ["id", "type", "disabled", "value", "placeholder"];
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  props: {
    modelValue: null,
    label: null,
    id: null,
    placeholder: { default: "" },
    labelCss: null,
    css: null,
    helpText: null,
    invalidText: null,
    isInvalid: { type: Boolean },
    hasLeftAddon: { type: Boolean },
    hasRightAddon: { type: Boolean },
    isInline: { type: Boolean },
    isDisabled: { type: Boolean },
    isSkinned: { type: Boolean, default: true },
    isRounded: { type: Boolean },
    isUnderlined: { type: Boolean },
    isUnderlinedWithBackground: { type: Boolean },
    isLabelHidden: { type: Boolean },
    size: { default: "" },
    value: { default: "" },
    type: { default: "text" }
  },
  emits: ["input", "update:modelValue"],
  setup(__props) {
    const props = __props;
    const styles = useCssModule();
    const isInputDisabled = computed(() => {
      return props.isDisabled ? true : void 0;
    });
    const helpClasses = computed(() => {
      return {
        [styles["field-help"]]: !props.size,
        [styles[`field-help-${props.size}`]]: props.size
      };
    });
    computed(() => {
      return {
        [styles["loader"]]: true,
        [styles[`loader-${props.size}`]]: !!props.size
      };
    });
    const invalidClasses = computed(() => {
      return {
        [styles["field-error"]]: !props.size,
        [styles[`field-error-${props.size}`]]: props.size
      };
    });
    const addonContainerClasses = computed(() => {
      return {
        [styles["input-addon-container"]]: true
      };
    });
    const inputClasses = computed(() => {
      return {
        [styles["input"]]: props.isSkinned,
        [styles["input-base"]]: !props.isSkinned,
        [styles["input-rounded"]]: props.isRounded,
        [styles["input-underlined"]]: props.isUnderlined,
        [styles["input-has-left-addon"]]: props.hasLeftAddon,
        [styles["input-has-right-addon"]]: props.hasRightAddon,
        [styles["input-error"]]: props.isInvalid,
        [styles["input-inline"]]: props.isInline,
        [styles["input-underlined-bg"]]: props.isUnderlinedWithBackground,
        [`${props.css}`]: !!props.css,
        [styles[`input-${props.size}`]]: props.size
      };
    });
    const labelClasses = computed(() => {
      return {
        [styles["label"]]: true,
        [styles["label-error"]]: props.isInvalid,
        [styles["label-inline"]]: props.isInline,
        [styles[`label-${props.size}`]]: props.size,
        ["screenreader-only"]: props.isLabelHidden,
        [`${props.labelCss}`]: !!props.labelCss
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$b, [
        createElementVNode("label", {
          class: normalizeClass(unref(labelClasses)),
          for: __props.id
        }, toDisplayString(__props.label), 11, _hoisted_2$8),
        __props.type == "textarea" ? (openBlock(), createElementBlock("textarea", mergeProps({
          key: 0,
          id: __props.id,
          class: unref(inputClasses)
        }, _ctx.$attrs, {
          placeholder: __props.placeholder,
          value: __props.modelValue,
          onInput: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("update:modelValue", ($event == null ? void 0 : $event.target).value)),
          disabled: unref(isInputDisabled)
        }), null, 16, _hoisted_3$5)) : __props.hasLeftAddon || __props.hasRightAddon ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(unref(addonContainerClasses))
        }, [
          renderSlot(_ctx.$slots, "addonLeft"),
          createElementVNode("input", mergeProps({
            id: __props.id,
            class: unref(inputClasses)
          }, _ctx.$attrs, {
            type: __props.type,
            disabled: unref(isInputDisabled),
            placeholder: __props.placeholder,
            value: __props.modelValue,
            onInput: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("update:modelValue", ($event == null ? void 0 : $event.target).value))
          }), null, 16, _hoisted_4$3),
          renderSlot(_ctx.$slots, "addonRight")
        ], 2)) : (openBlock(), createElementBlock("input", mergeProps({
          key: 2,
          id: __props.id,
          class: unref(inputClasses)
        }, _ctx.$attrs, {
          type: __props.type,
          disabled: unref(isInputDisabled),
          value: __props.modelValue,
          placeholder: __props.placeholder,
          onInput: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("update:modelValue", ($event == null ? void 0 : $event.target).value))
        }), null, 16, _hoisted_5$2)),
        __props.isInvalid ? (openBlock(), createElementBlock("span", {
          key: 3,
          class: normalizeClass(unref(invalidClasses)),
          role: "status",
          "aria-live": "polite"
        }, toDisplayString(__props.invalidText), 3)) : __props.helpText ? (openBlock(), createElementBlock("span", {
          key: 4,
          class: normalizeClass(unref(helpClasses))
        }, toDisplayString(__props.helpText), 3)) : createCommentVNode("", true)
      ]);
    };
  }
});
const cssModules$e = {
  "$style": style0$e
};
var Input = /* @__PURE__ */ _export_sfc$1(_sfc_main$f, [["__cssModules", cssModules$e]]);
var style0$d = {
  "input-addon-right": "_input-addon-right_1ntnw_5",
  "input-addon-left": "_input-addon-left_1ntnw_6"
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  props: {
    css: null,
    addonLeft: { type: Boolean },
    addonRight: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const styles = useCssModule();
    const classes = computed(() => {
      return {
        [styles["input-addon-left"]]: !!props.addonLeft,
        [styles["input-addon-right"]]: !!props.addonRight,
        [`${props.css}`]: !!props.css
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(classes))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const cssModules$d = {
  "$style": style0$d
};
var InputAddonItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$e, [["__cssModules", cssModules$d]]);
const loader = "_loader_18div_2";
const blink = "_blink_18div_1";
var style0$c = {
  loader,
  blink,
  "loader-small": "_loader-small_18div_30",
  "loader-large": "_loader-large_18div_38"
};
const _hoisted_1$a = { class: "screenreader-only" };
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  props: {
    ariaLabel: { default: "Loading\u2026" },
    size: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const styles = useCssModule();
    const loaderClasses = computed(() => {
      return {
        [styles["loader"]]: true,
        [styles[`loader-${props.size}`]]: !!props.size
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(loaderClasses)),
        role: "status",
        "aria-live": "polite",
        "aria-busy": "true"
      }, [
        createElementVNode("span", _hoisted_1$a, toDisplayString(__props.ariaLabel), 1)
      ], 2);
    };
  }
});
const cssModules$c = {
  "$style": style0$c
};
var Loader = /* @__PURE__ */ _export_sfc$1(_sfc_main$d, [["__cssModules", cssModules$c]]);
const dot = "_dot_wnwsy_167";
const bar = "_bar_wnwsy_168";
var style0$b = {
  "btn-base": "_btn-base_wnwsy_1",
  "btn-link": "_btn-link_wnwsy_18",
  "btn-blank": "_btn-blank_wnwsy_18",
  "menu-trigger": "_menu-trigger_wnwsy_46",
  "menu-trigger-large": "_menu-trigger-large_wnwsy_91",
  "menu-trigger-small": "_menu-trigger-small_wnwsy_97",
  "menu-trigger-bordered": "_menu-trigger-bordered_wnwsy_103",
  "menu-trigger-rounded": "_menu-trigger-rounded_wnwsy_109",
  "menu-icon": "_menu-icon_wnwsy_114",
  "btn-kebab": "_btn-kebab_wnwsy_121",
  "btn-meatball": "_btn-meatball_wnwsy_121",
  "btn-hamburger": "_btn-hamburger_wnwsy_130",
  dot,
  bar
};
const _hoisted_1$9 = ["aria-expanded", "disabled"];
const _hoisted_2$7 = ["aria-expanded", "disabled"];
const _hoisted_3$4 = /* @__PURE__ */ createElementVNode("span", { class: "screenreader-only" }, "{menuTitle}", -1);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  props: {
    menuTitle: null,
    type: { default: "simple" },
    size: { default: "" },
    isExpanded: { type: Boolean },
    isDisabled: { type: Boolean },
    isBordered: { type: Boolean },
    isRounded: { type: Boolean }
  },
  emits: ["trigger-keydown", "trigger-click"],
  setup(__props, { expose, emit }) {
    const props = __props;
    const styles = useCssModule();
    let triggerRef = ref(null);
    expose({
      triggerRef
    });
    let triggerSizeClasses;
    switch (props.size) {
      case "small":
        triggerSizeClasses = styles["menu-trigger-small"];
        break;
      case "large":
        triggerSizeClasses = styles["menu-trigger-large"];
        break;
      default:
        triggerSizeClasses = "";
    }
    const triggerClasses = {
      [styles["menu-trigger"]]: true,
      [triggerSizeClasses]: true,
      [styles["menu-trigger-bordered"]]: props.isBordered,
      [styles["menu-trigger-rounded"]]: props.isRounded
    };
    const kebabMeatballBurgerClasses = {
      [styles["btn-base"]]: true,
      [styles["btn-blank"]]: true,
      [styles["btn-kebab"]]: props.type === "kebab",
      [styles["btn-meatball"]]: props.type === "meatball",
      [styles["btn-hamburger"]]: props.type === "hamburger",
      [triggerSizeClasses]: true,
      [styles["menu-trigger-bordered"]]: props.isBordered,
      [styles["menu-trigger-rounded"]]: props.isRounded
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        __props.type === "simple" ? (openBlock(), createElementBlock("button", {
          key: 0,
          ref_key: "triggerRef",
          ref: triggerRef,
          class: normalizeClass(triggerClasses),
          "aria-haspopup": "true",
          "aria-expanded": __props.isExpanded,
          disabled: __props.isDisabled,
          onKeydown: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("trigger-keydown", $event)),
          onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("trigger-click", $event))
        }, [
          createTextVNode(toDisplayString(__props.menuTitle) + " ", 1),
          createElementVNode("span", {
            class: normalizeClass(unref(styles)["menu-icon"]),
            "aria-hidden": "true"
          }, [
            renderSlot(_ctx.$slots, "icon")
          ], 2)
        ], 40, _hoisted_1$9)) : createCommentVNode("", true),
        __props.type === "kebab" || __props.type === "meatball" || __props.type === "hamburger" ? (openBlock(), createElementBlock("button", {
          key: 1,
          ref_key: "triggerRef",
          ref: triggerRef,
          class: normalizeClass(kebabMeatballBurgerClasses),
          "aria-haspopup": "true",
          "aria-expanded": __props.isExpanded,
          disabled: __props.isDisabled,
          onKeydown: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("trigger-keydown", $event)),
          onClick: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("trigger-click", $event))
        }, [
          _hoisted_3$4,
          createElementVNode("span", {
            class: normalizeClass(unref(styles)[`${__props.type == "hamburger" ? "bar" : "dot"}`])
          }, null, 2),
          createElementVNode("span", {
            class: normalizeClass(unref(styles)[`${__props.type == "hamburger" ? "bar" : "dot"}`])
          }, null, 2),
          createElementVNode("span", {
            class: normalizeClass(unref(styles)[`${__props.type == "hamburger" ? "bar" : "dot"}`])
          }, null, 2)
        ], 40, _hoisted_2$7)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const cssModules$b = {
  "$style": style0$b
};
var MenuTrigger = /* @__PURE__ */ _export_sfc$1(_sfc_main$c, [["__cssModules", cssModules$b]]);
const menu = "_menu_17rak_2";
var style0$a = {
  menu,
  "menu-items": "_menu-items_17rak_8",
  "menu-items-right": "_menu-items-right_17rak_8",
  "menu-item": "_menu-item_17rak_8",
  "menu-item-selected": "_menu-item-selected_17rak_74",
  "menu-item-large": "_menu-item-large_17rak_90",
  "menu-item-small": "_menu-item-small_17rak_96",
  "menu-item-rounded": "_menu-item-rounded_17rak_102"
};
const _hoisted_1$8 = ["id", "hidden"];
const _hoisted_2$6 = ["id", "isSelected", "disabled", "onClick", "onKeydown"];
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  props: {
    id: null,
    type: { default: "simple" },
    size: { default: "" },
    menuTitle: null,
    isDisabled: { type: Boolean },
    isItemsRight: { type: Boolean },
    disabledItems: { default: () => [] },
    isBordered: { type: Boolean },
    isRounded: { type: Boolean },
    closeOnSelect: { type: Boolean, default: true },
    closeOnClickOutside: { type: Boolean, default: true }
  },
  emits: ["open", "close"],
  setup(__props, { emit }) {
    const props = __props;
    const styles = useCssModule();
    let rootRef = ref(null);
    let childRef = ref(null);
    const menuItemRefs = ref([]);
    const setMenuItemRefs = (el) => {
      if (el) {
        menuItemRefs.value.push(el);
      }
    };
    let expanded = ref(false);
    const setExpanded = (b) => expanded.value = b;
    let selectedItem = ref(-1);
    const setSelectedItem = (n) => selectedItem.value = n;
    const setOpened = (open) => {
      if (open) {
        emit("open", selectedItem.value);
      } else {
        emit("close");
      }
      setExpanded(open);
    };
    const slots = useSlots();
    const menuItemSlotNames = Object.keys(slots).filter((name) => name.startsWith("menuitem-"));
    const focusItem = (index, direction) => {
      let i = index;
      if (direction === "asc") {
        i += 1;
      } else if (direction === "desc") {
        i -= 1;
      }
      if (i < 0) {
        i = menuItemSlotNames.length - 1;
      } else if (i >= menuItemSlotNames.length) {
        i = 0;
      }
      const nextMenuItem = menuItemRefs.value[i];
      if (nextMenuItem) {
        if (nextMenuItem.disabled && direction) {
          focusItem(i, direction);
        } else {
          nextMenuItem.focus();
        }
      }
    };
    const focusTriggerButton = () => {
      var _a, _b;
      (_b = (_a = childRef == null ? void 0 : childRef.value) == null ? void 0 : _a.triggerRef) == null ? void 0 : _b.focus();
    };
    const isInside = (el) => {
      var _a;
      if (rootRef) {
        const children = (_a = rootRef.value) == null ? void 0 : _a.querySelectorAll("*");
        if (children) {
          for (let i = 0; i < children.length; i += 1) {
            const child = children[i];
            if (child && el === child) {
              return true;
            }
          }
        }
      }
      return false;
    };
    const clickedOutside = (ev) => {
      if (expanded.value && props.closeOnClickOutside) {
        if (!isInside(ev.target)) {
          setExpanded(false);
          focusTriggerButton();
        }
      }
    };
    onMounted(() => {
      if (typeof window !== "undefined") {
        document.addEventListener("click", clickedOutside);
      }
    });
    onUnmounted(() => {
      if (typeof window !== "undefined") {
        document.removeEventListener("click", clickedOutside);
      }
    });
    let triggerSizeClasses;
    let itemSizeClasses;
    switch (props.size) {
      case "small":
        triggerSizeClasses = styles["menu-trigger-small"];
        itemSizeClasses = styles["menu-item-small"];
        break;
      case "large":
        triggerSizeClasses = styles["menu-trigger-large"];
        itemSizeClasses = styles["menu-item-large"];
        break;
      default:
        triggerSizeClasses = "";
        itemSizeClasses = "";
    }
    ({
      [styles["menu-trigger"]]: true,
      [triggerSizeClasses]: true,
      [styles["menu-trigger-bordered"]]: props.isBordered,
      [styles["menu-trigger-rounded"]]: props.isRounded
    });
    const menuItemsClasses = () => {
      return {
        [styles["menu-items"]]: !props.isItemsRight,
        [styles["menu-items-right"]]: !!props.isItemsRight
      };
    };
    const menuItemClasses = (isSelected) => {
      return {
        [styles["menu-item"]]: true,
        [styles["menu-item-selected"]]: isSelected,
        [itemSizeClasses]: true,
        [styles["menu-item-rounded"]]: props.isRounded
      };
    };
    const afterOpened = () => {
      requestAnimationFrame(() => {
        if (selectedItem.value < 1) {
          setSelectedItem(0);
          onMenuItemKeyDown("Home", 0);
        } else {
          focusItem(selectedItem.value);
          setSelectedItem(selectedItem.value);
        }
      });
    };
    const onMenuItemKeyDown = (evOrString, index) => {
      const key = typeof evOrString === "string" ? evOrString : evOrString.key;
      switch (key) {
        case "Up":
        case "ArrowUp":
          focusItem(index, "desc");
          break;
        case "Down":
        case "ArrowDown":
          focusItem(index, "asc");
          break;
        case "Home":
        case "ArrowHome":
          focusItem(0);
          break;
        case "End":
        case "ArrowEnd":
          focusItem(menuItemSlotNames.length - 1);
          break;
        case "Enter":
        case "Space":
          focusItem(index);
          setSelectedItem(index);
          if (props.closeOnSelect) {
            setOpened(false);
            focusTriggerButton();
          }
          break;
        case "Escape":
          setOpened(false);
          focusTriggerButton();
          break;
        case "Tab":
          if (typeof evOrString !== "string") {
            evOrString.preventDefault();
          }
          break;
        default:
          return;
      }
      if (typeof evOrString !== "string") {
        evOrString.preventDefault();
      }
    };
    const isItemDisabled = (menuItemSlotName) => {
      if (props.isDisabled) {
        return true;
      }
      if (props.disabledItems && props.disabledItems.includes(menuItemSlotName)) {
        return true;
      }
    };
    const onTriggerButtonKeyDown = (e) => {
      switch (e.key) {
        case "Down":
        case "ArrowDown":
          if (!expanded.value) {
            setOpened(true);
            afterOpened();
            e.preventDefault();
          }
          break;
        case "Escape":
          if (expanded.value) {
            setOpened(false);
            focusTriggerButton();
          }
          break;
      }
    };
    const onTriggerButtonClicked = () => {
      const toggled = !expanded.value;
      setOpened(toggled);
      setTimeout(() => {
        if (toggled) {
          afterOpened();
        } else if (props.closeOnSelect) {
          setOpened(false);
          focusTriggerButton();
        }
      }, 10);
    };
    const onMenuItemClicked = (index) => {
      setSelectedItem(index);
      if (props.closeOnSelect) {
        setOpened(false);
        focusTriggerButton();
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "rootRef",
        ref: rootRef,
        class: normalizeClass(unref(styles)["menu"])
      }, [
        createVNode(MenuTrigger, {
          ref_key: "childRef",
          ref: childRef,
          "menu-title": __props.menuTitle,
          type: __props.type,
          size: __props.size,
          "is-expanded": unref(expanded),
          "is-disabled": __props.isDisabled,
          "is-bordered": __props.isBordered,
          "is-rounded": __props.isRounded,
          onTriggerKeydown: _cache[0] || (_cache[0] = ($event) => onTriggerButtonKeyDown($event)),
          onTriggerClick: _cache[1] || (_cache[1] = ($event) => onTriggerButtonClicked())
        }, {
          icon: withCtx(() => [
            renderSlot(_ctx.$slots, "icon")
          ]),
          _: 3
        }, 8, ["menu-title", "type", "size", "is-expanded", "is-disabled", "is-bordered", "is-rounded"]),
        createElementVNode("div", {
          class: normalizeClass(menuItemsClasses()),
          id: __props.id,
          role: "menu",
          hidden: !unref(expanded)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(menuItemSlotNames), (item, index) => {
            return openBlock(), createElementBlock("button", {
              id: item,
              key: item,
              ref_for: true,
              ref: setMenuItemRefs,
              class: normalizeClass(menuItemClasses(unref(selectedItem) === index)),
              isSelected: unref(selectedItem) === index,
              disabled: isItemDisabled(item),
              onClick: ($event) => onMenuItemClicked(index),
              onKeydown: (ev) => onMenuItemKeyDown(ev, index)
            }, [
              renderSlot(_ctx.$slots, item)
            ], 42, _hoisted_2$6);
          }), 128))
        ], 10, _hoisted_1$8)
      ], 2);
    };
  }
});
const cssModules$a = {
  "$style": style0$a
};
var Menu = /* @__PURE__ */ _export_sfc$1(_sfc_main$b, [["__cssModules", cssModules$a]]);
const pagination = "_pagination_1n3nc_2";
var style0$9 = {
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
const _hoisted_1$7 = ["aria-label"];
const _hoisted_2$5 = ["disabled", "aria-disabled"];
const _hoisted_3$3 = ["disabled", "aria-disabled"];
const _hoisted_4$2 = ["onClick", "aria-label"];
const _hoisted_5$1 = { key: 1 };
const _hoisted_6$1 = ["onClick", "aria-label"];
const _hoisted_7$1 = ["disabled", "aria-disabled"];
const _hoisted_8$1 = ["disabled", "aria-disabled"];
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  props: {
    justify: null,
    ariaLabel: { default: "pagination" },
    current: null,
    pages: null,
    isBordered: { type: Boolean },
    isFirstLast: { type: Boolean, default: true },
    navigationLabels: { default: {
      first: "First",
      last: "Last",
      previous: "Previous",
      next: "Next"
    } }
  },
  emits: ["update-page"],
  setup(__props, { emit }) {
    const props = __props;
    const styles = useCssModule();
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
    const paginationItemClass = styles["pagination-item"];
    const paginationButtonClass = computed(() => styles["pagination-button"]);
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
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("nav", {
        class: normalizeClass(unref(paginationContainerClasses)),
        "aria-label": __props.ariaLabel
      }, [
        createElementVNode("ul", {
          class: normalizeClass(unref(paginationClasses))
        }, [
          __props.isFirstLast ? (openBlock(), createElementBlock("li", {
            key: 0,
            class: normalizeClass(unref(paginationItemFirstClasses))
          }, [
            createElementVNode("button", {
              class: normalizeClass(unref(paginationButtonClass)),
              onClick: _cache[0] || (_cache[0] = withModifiers(($event) => handleClick(1), ["prevent"])),
              disabled: isOnFirst(),
              "aria-disabled": isOnFirst(),
              "aria-label": "Goto page 1"
            }, toDisplayString(String.fromCharCode(171)) + " " + toDisplayString(__props.navigationLabels.first), 11, _hoisted_2$5)
          ], 2)) : createCommentVNode("", true),
          createElementVNode("li", {
            class: normalizeClass(unref(paginationItemFirstClasses))
          }, [
            createElementVNode("button", {
              class: normalizeClass(unref(paginationButtonClass)),
              onClick: _cache[1] || (_cache[1] = withModifiers(($event) => handleClick(__props.current - 1), ["prevent"])),
              disabled: isOnFirst(),
              "aria-disabled": isOnFirst(),
              "aria-label": "Goto previous page"
            }, toDisplayString(String.fromCharCode(8249)) + " " + toDisplayString(__props.navigationLabels.previous), 11, _hoisted_3$3)
          ], 2),
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.pages, (page) => {
            return openBlock(), createElementBlock("li", {
              key: `page-${page}`,
              class: normalizeClass(paginationItemClassesForPage(page))
            }, [
              page === __props.current ? (openBlock(), createElementBlock("button", {
                key: 0,
                onClick: withModifiers(($event) => handleClick(page), ["prevent"]),
                class: normalizeClass(unref(paginationButtonClass)),
                type: "button",
                "aria-current": "page",
                "aria-label": `Page ${page}, current page`
              }, toDisplayString(page), 11, _hoisted_4$2)) : page === "..." ? (openBlock(), createElementBlock("span", _hoisted_5$1, toDisplayString(page), 1)) : (openBlock(), createElementBlock("button", {
                key: 2,
                onClick: withModifiers(($event) => handleClick(page), ["prevent"]),
                class: normalizeClass(unref(paginationButtonClass)),
                type: "button",
                "aria-label": `Goto page ${page}`
              }, toDisplayString(page), 11, _hoisted_6$1))
            ], 2);
          }), 128)),
          createElementVNode("li", {
            class: normalizeClass(unref(paginationItemLastClasses))
          }, [
            createElementVNode("button", {
              class: normalizeClass(unref(paginationButtonClass)),
              onClick: _cache[2] || (_cache[2] = withModifiers(($event) => handleClick(__props.current + 1), ["prevent"])),
              disabled: isOnLast(),
              "aria-disabled": isOnLast(),
              "aria-label": "Goto next page"
            }, toDisplayString(__props.navigationLabels.next) + " " + toDisplayString(String.fromCharCode(8250)), 11, _hoisted_7$1)
          ], 2),
          __props.isFirstLast ? (openBlock(), createElementBlock("li", {
            key: 1,
            class: normalizeClass(unref(paginationItemLastClasses))
          }, [
            createElementVNode("button", {
              class: normalizeClass(unref(paginationButtonClass)),
              onClick: _cache[3] || (_cache[3] = withModifiers(($event) => handleClick(getLastPageNumber()), ["prevent"])),
              disabled: isOnLast(),
              "aria-disabled": isOnLast(),
              "aria-label": "Goto last page"
            }, toDisplayString(__props.navigationLabels.last) + " " + toDisplayString(String.fromCharCode(187)), 11, _hoisted_8$1)
          ], 2)) : createCommentVNode("", true)
        ], 2)
      ], 10, _hoisted_1$7);
    };
  }
});
const cssModules$9 = {
  "$style": style0$9
};
var Pagination = /* @__PURE__ */ _export_sfc$1(_sfc_main$a, [["__cssModules", cssModules$9]]);
const usePagination = ({ offset: offset2 = 2 }) => {
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
    if (offset2 === 1) {
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
function usePagingGenerator(initialPage, offset2, totalPages) {
  const paging = usePagination({ offset: offset2 || 1 });
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
var style0$8 = {
  progress
};
const _hoisted_1$6 = ["value", "max"];
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  props: {
    css: { default: "" },
    value: { default: 0 },
    max: null
  },
  setup(__props) {
    const props = __props;
    const styles = useCssModule();
    const classes = computed(() => {
      return {
        [styles.progress]: true,
        [`${props.css}`]: !!props.css
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("progress", {
        class: normalizeClass(unref(classes)),
        value: __props.value,
        max: __props.max
      }, null, 10, _hoisted_1$6);
    };
  }
});
const cssModules$8 = {
  "$style": style0$8
};
var Progress = /* @__PURE__ */ _export_sfc$1(_sfc_main$9, [["__cssModules", cssModules$8]]);
const select = "_select_13au7_2";
var style0$7 = {
  select,
  "select-base": "_select-base_13au7_3",
  "select-skin": "_select-skin_13au7_14",
  "select-small": "_select-small_13au7_67",
  "select-large": "_select-large_13au7_74"
};
const _hoisted_1$5 = ["for"];
const _hoisted_2$4 = ["id", "name", "value", "disabled", "multiple", "size"];
const _hoisted_3$2 = {
  key: 0,
  disabled: "",
  value: ""
};
const _hoisted_4$1 = ["value"];
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  props: {
    uniqueId: null,
    name: null,
    labelCopy: null,
    options: null,
    size: { default: "" },
    multipleSize: { default: 1 },
    isMultiple: { type: Boolean, default: false },
    defaultOptionLabel: { default: "Please select an option" },
    isDisabled: { type: Boolean }
  },
  emits: ["selected"],
  setup(__props, { emit }) {
    const props = __props;
    const modelValue = ref(props.isMultiple ? [] : "");
    const updateValue = (ev) => {
      modelValue.value = ev.target.value;
      if (props.isMultiple) {
        const selectedValues = Array.from(ev.target.selectedOptions).map((opt) => opt.value);
        emit("selected", selectedValues);
      } else {
        emit("selected", modelValue.value);
      }
    };
    const styles = useCssModule();
    const selectClasses = () => {
      return {
        [styles["select"]]: true,
        [styles[`select-${props.size}`]]: !!props.size
      };
    };
    const showDefaultOption = computed(() => {
      return !props.isMultiple;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("label", {
          class: normalizeClass([unref(styles)["select"], "screenreader-only"]),
          for: __props.uniqueId
        }, toDisplayString(__props.labelCopy), 11, _hoisted_1$5),
        createElementVNode("select", {
          id: __props.uniqueId,
          name: __props.name,
          value: modelValue.value,
          class: normalizeClass(selectClasses()),
          disabled: __props.isDisabled,
          multiple: __props.isMultiple,
          size: __props.isMultiple && __props.multipleSize ? __props.multipleSize : void 0,
          onInput: updateValue
        }, [
          unref(showDefaultOption) ? (openBlock(), createElementBlock("option", _hoisted_3$2, toDisplayString(__props.defaultOptionLabel), 1)) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (option, i) => {
            return openBlock(), createElementBlock("option", {
              key: i,
              value: option.value
            }, toDisplayString(option.label), 9, _hoisted_4$1);
          }), 128))
        ], 42, _hoisted_2$4)
      ], 64);
    };
  }
});
const cssModules$7 = {
  "$style": style0$7
};
var Select = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["__cssModules", cssModules$7]]);
const spinner = "_spinner_wbq61_2";
var style0$6 = {
  spinner,
  "spinner-small": "_spinner-small_wbq61_27",
  "spinner-large": "_spinner-large_wbq61_34",
  "spinner-xlarge": "_spinner-xlarge_wbq61_41",
  "loading-circle": "_loading-circle_wbq61_1"
};
const _hoisted_1$4 = { class: "screenreader-only" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  props: {
    ariaLabel: { default: "Loading\u2026" },
    size: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const styles = useCssModule();
    const spinnerClasses = computed(() => {
      return {
        [styles["spinner"]]: true,
        [styles[`spinner-${props.size}`]]: !!props.size
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(spinnerClasses)),
        role: "status",
        "aria-live": "polite",
        "aria-busy": "true"
      }, [
        createElementVNode("span", _hoisted_1$4, toDisplayString(__props.ariaLabel), 1)
      ], 2);
    };
  }
});
const cssModules$6 = {
  "$style": style0$6
};
var Spinner = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["__cssModules", cssModules$6]]);
const disabled = "_disabled_5iflo_183";
var style0$5 = {
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
const _hoisted_1$3 = ["for"];
const _hoisted_2$3 = ["id", "checked", "disabled"];
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  props: {
    modelValue: { type: Boolean },
    id: null,
    label: null,
    css: { default: "" },
    labelPosition: { default: "left" },
    size: { default: null },
    isChecked: { type: Boolean },
    isDisabled: { type: Boolean },
    isBordered: { type: Boolean },
    isAction: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const styles = useCssModule();
    const switchSpan = computed(() => {
      return {
        [styles[`switch`]]: true,
        [styles["switch-border"]]: !!props.isBordered,
        [styles["switch-action"]]: !!props.isAction,
        [styles[`switch-${props.size}`]]: !!props.size
      };
    });
    const switchInput = computed(() => {
      return [styles[`switch-input`]];
    });
    const switchLabel = computed(() => {
      return [styles[`switch-label`]];
    });
    const switchContainer = computed(() => {
      return {
        [styles[`switch-container`]]: true,
        [props.css]: !!props.css,
        [styles["switch-right"]]: props.labelPosition === "right",
        [styles["disabled"]]: !!props.isDisabled
      };
    });
    const handleClick = (evt) => {
      const el = evt.target;
      if (el.getAttribute("aria-checked") == "true") {
        el.setAttribute("aria-checked", "false");
      } else {
        el.setAttribute("aria-checked", "true");
      }
    };
    const handleKeypress = (evt) => {
      const keyCode = evt.keyCode || evt.which;
      switch (keyCode) {
        case 13:
          evt.preventDefault();
          evt.target.click();
          break;
      }
    };
    const triggerChange = (e) => {
      emit("update:modelValue", e.target.checked);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("label", {
        class: normalizeClass(unref(switchContainer)),
        for: __props.id
      }, [
        __props.labelPosition === "left" ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(unref(switchLabel))
        }, toDisplayString(__props.label), 3)) : createCommentVNode("", true),
        createElementVNode("input", {
          id: __props.id,
          type: "checkbox",
          class: normalizeClass(unref(switchInput)),
          checked: __props.modelValue,
          disabled: __props.isDisabled,
          role: "switch",
          onChange: _cache[0] || (_cache[0] = ($event) => triggerChange($event)),
          onClick: handleClick,
          onKeypress: handleKeypress
        }, null, 42, _hoisted_2$3),
        createElementVNode("span", {
          class: normalizeClass(unref(switchSpan)),
          "aria-hidden": "true"
        }, null, 2),
        __props.labelPosition === "right" ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(unref(switchLabel))
        }, toDisplayString(__props.label), 3)) : createCommentVNode("", true)
      ], 10, _hoisted_1$3);
    };
  }
});
const cssModules$5 = {
  "$style": style0$5
};
var Switch = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["__cssModules", cssModules$5]]);
const tabs = "_tabs_164nd_3";
const active = "_active_164nd_117";
var style0$4 = {
  tabs,
  "tabs-vertical": "_tabs-vertical_164nd_8",
  "tab-list": "_tab-list_164nd_12",
  "tab-list-base": "_tab-list-base_164nd_13",
  "tab-skinned": "_tab-skinned_164nd_20",
  "tab-base": "_tab-base_164nd_32",
  "tab-button": "_tab-button_164nd_37",
  "tab-button-base": "_tab-button-base_164nd_37",
  "tab-button-skin": "_tab-button-skin_164nd_63",
  "tab-borderless": "_tab-borderless_164nd_91",
  "tab-button-large": "_tab-button-large_164nd_95",
  "tab-button-xlarge": "_tab-button-xlarge_164nd_102",
  "tab-item": "_tab-item_164nd_109",
  active,
  "tab-panel": "_tab-panel_164nd_150"
};
const _hoisted_1$2 = ["aria-orientation"];
const _hoisted_2$2 = ["id", "aria-controls", "disabled", "tabindex", "aria-selected", "onClick", "onKeydown"];
const _hoisted_3$1 = ["id", "aria-labelledby", "hidden"];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  props: {
    activatedTab: { default: 0 },
    tabType: { default: "tab" },
    isVertical: { type: Boolean },
    isSkinned: { type: Boolean, default: true },
    isDisabled: { type: Boolean },
    isBorderless: { type: Boolean },
    disabledOptions: { default: () => [] },
    size: { default: "" }
  },
  emits: ["selected"],
  setup(__props, { emit }) {
    const props = __props;
    const slots = useSlots();
    const styles = useCssModule();
    const tabsList = Object.keys(slots).filter((name) => name.startsWith("tab-"));
    const panelsList = Object.keys(slots).filter((name) => name.startsWith("panel-"));
    let tabButtonRefs = ref([]);
    const setTabButtonRefs = (el) => {
      if (el) {
        tabButtonRefs.value.push(el);
      }
    };
    let activeTab = ref(tabsList[0]);
    const selectTab = (tabName) => {
      activeTab.value = tabName;
      emit("selected", tabName);
    };
    const tabsClasses = computed(() => {
      return {
        [styles["tabs"]]: true,
        [styles["tabs-vertical"]]: !!props.isVertical
      };
    });
    const tablistClasses = computed(() => {
      return {
        [styles["tab-list-base"]]: !props.isSkinned,
        [styles["tab-list"]]: !!props.isSkinned,
        [styles[`tab-borderless`]]: props.isBorderless
      };
    });
    const focusTab = (index, direction) => {
      let i = index;
      if (direction === "asc") {
        i += 1;
      } else if (direction === "desc") {
        i -= 1;
      }
      if (i < 0) {
        i = tabsList.length - 1;
      } else if (i >= tabsList.length) {
        i = 0;
      }
      const nextTab = tabButtonRefs.value[i];
      if (nextTab) {
        if (nextTab.disabled && direction) {
          focusTab(i, direction);
        } else {
          nextTab.focus();
        }
      }
    };
    const onKeyDown = (ev, index) => {
      switch (ev.key) {
        case "Up":
        case "ArrowUp":
          if (props.isVertical) {
            focusTab(index, "desc");
          }
          break;
        case "Down":
        case "ArrowDown":
          if (props.isVertical) {
            focusTab(index, "asc");
          }
          break;
        case "Left":
        case "ArrowLeft":
          if (!props.isVertical) {
            focusTab(index, "desc");
          }
          break;
        case "Right":
        case "ArrowRight":
          if (!props.isVertical) {
            focusTab(index, "asc");
          }
          break;
        case "Home":
        case "ArrowHome":
          focusTab(0);
          break;
        case "End":
        case "ArrowEnd":
          focusTab(tabsList.length - 1);
          break;
        case "Enter":
        case "Space":
          focusTab(index);
          selectTab(tabsList[index]);
          break;
        default:
          return;
      }
      ev.preventDefault();
    };
    const isTabDisabled = (tabTitle) => {
      if (props.isDisabled) {
        return true;
      }
      if (props.disabledOptions && props.disabledOptions.includes(tabTitle)) {
        return true;
      }
    };
    const tabButtonClasses = (tabName) => {
      return props.tabType === "tab" ? {
        [styles[`tab-item`]]: true,
        [styles[`tab-button`]]: true,
        [styles["active"]]: tabName === activeTab.value,
        [styles["tab-button-large"]]: props.size === "large",
        [styles["tab-button-xlarge"]]: props.size === "xlarge"
      } : {
        [styles[`tab-button-base`]]: true,
        [styles["active"]]: tabName === activeTab.value
      };
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(tabsClasses))
      }, [
        createElementVNode("div", {
          role: "tablist",
          class: normalizeClass(unref(tablistClasses)),
          "aria-orientation": __props.isVertical ? "vertical" : "horizontal"
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tabsList), (tab, index) => {
            return openBlock(), createElementBlock("button", {
              id: tab,
              key: tab,
              ref_for: true,
              ref: setTabButtonRefs,
              role: "tab",
              "aria-controls": `${tab.replace("tab", "panel")}`,
              disabled: isTabDisabled(tab),
              tabindex: tab === unref(activeTab) ? "0" : "-1",
              "aria-selected": tab === unref(activeTab),
              class: normalizeClass(tabButtonClasses(tab)),
              onClick: withModifiers(($event) => selectTab(tab), ["prevent"]),
              onKeydown: ($event) => onKeyDown($event, index)
            }, [
              renderSlot(_ctx.$slots, tab)
            ], 42, _hoisted_2$2);
          }), 128))
        ], 10, _hoisted_1$2),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(panelsList), (panel) => {
          return openBlock(), createElementBlock("div", {
            id: panel,
            key: panel,
            "aria-labelledby": `${panel.replace("panel", "tab")}`,
            hidden: unref(activeTab) !== panel.replace("panel", "tab"),
            class: normalizeClass(_ctx.$style["tab-panel"]),
            tabindex: "0",
            role: "tabpanel"
          }, [
            renderSlot(_ctx.$slots, unref(activeTab).replace("tab", "panel"))
          ], 10, _hoisted_3$1);
        }), 128))
      ], 2);
    };
  }
});
const cssModules$4 = {
  "$style": style0$4
};
var Tabs = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["__cssModules", cssModules$4]]);
const table = "_table_1endp_2";
var style0$3 = {
  table,
  "table-caps": "_table-caps_1endp_40",
  "caption-top": "_caption-top_1endp_54",
  "caption-bottom": "_caption-bottom_1endp_58",
  "caption-end": "_caption-end_1endp_72",
  "table-small": "_table-small_1endp_76",
  "table-large": "_table-large_1endp_80",
  "table-xlarge": "_table-xlarge_1endp_84",
  "table-bordered": "_table-bordered_1endp_88",
  "table-borderless": "_table-borderless_1endp_96",
  "table-striped": "_table-striped_1endp_104",
  "table-active": "_table-active_1endp_110",
  "table-hoverable": "_table-hoverable_1endp_116",
  "table-stacked": "_table-stacked_1endp_123",
  "table-responsive": "_table-responsive_1endp_178",
  "table-responsive-small": "_table-responsive-small_1endp_185",
  "table-responsive-medium": "_table-responsive-medium_1endp_192",
  "table-responsive-large": "_table-responsive-large_1endp_199",
  "table-responsive-xlarge": "_table-responsive-xlarge_1endp_206",
  "table-header-container": "_table-header-container_1endp_212",
  "table-sort-label": "_table-sort-label_1endp_217",
  "table-sort": "_table-sort_1endp_217",
  "icon-sort": "_icon-sort_1endp_235"
};
const _hoisted_1$1 = ["aria-sort"];
const _hoisted_2$1 = ["onClick"];
const _hoisted_3 = {
  class: /* @__PURE__ */ normalizeClass("screenreader-only")
};
const _hoisted_4 = /* @__PURE__ */ createElementVNode("path", {
  d: "m15 13-5 5-5-5M5 7l5-5 5 5",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, null, -1);
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = /* @__PURE__ */ createElementVNode("path", {
  d: "m10.778 13.635 4.964-5.86c.586-.693.11-1.775-.78-1.775H5.037a1.01 1.01 0 0 0-.561.17c-.168.111-.3.27-.382.457a1.102 1.102 0 0 0 .164 1.147l4.963 5.86a1.006 1.006 0 0 0 1.559 0v.001Z",
  fill: "currentColor"
}, null, -1);
const _hoisted_7 = [
  _hoisted_6
];
const _hoisted_8 = /* @__PURE__ */ createElementVNode("path", {
  d: "m9.221 6.365-4.963 5.86c-.586.693-.11 1.775.78 1.775h9.926c.2 0 .394-.059.561-.17.168-.111.3-.27.383-.457a1.102 1.102 0 0 0-.165-1.147l-4.963-5.86a1.04 1.04 0 0 0-.351-.27 1.007 1.007 0 0 0-1.208.27v-.001Z",
  fill: "currentColor"
}, null, -1);
const _hoisted_9 = [
  _hoisted_8
];
const _hoisted_10 = { key: 1 };
const _hoisted_11 = ["innerHTML"];
const _hoisted_12 = { key: 1 };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    headers: { default: () => [] },
    rows: { default: () => [] },
    caption: null,
    captionPosition: { default: "hidden" },
    tableSize: { default: "" },
    responsiveSize: { default: "" },
    isUppercasedHeaders: { type: Boolean },
    isBordered: { type: Boolean },
    isBorderless: { type: Boolean },
    isStriped: { type: Boolean },
    isHoverable: { type: Boolean },
    isStacked: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
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
    const captionClasses = computed(() => {
      return {
        ["screenreader-only"]: props.captionPosition === "hidden",
        [styles[`caption-${props.captionPosition}`]]: props.captionPosition !== "hidden"
      };
    });
    const tableResponsiveClasses = computed(() => {
      return {
        [styles["table-responsive"]]: !props.responsiveSize,
        [styles[`table-responsive-${props.responsiveSize}`]]: !!props.responsiveSize
      };
    });
    const tableClasses = computed(() => {
      return {
        [styles["table"]]: true,
        [styles[`table-${props.tableSize}`]]: props.tableSize,
        [styles[`table-caps`]]: props.isUppercasedHeaders,
        [styles[`table-bordered`]]: props.isBordered,
        [styles[`table-borderless`]]: props.isBorderless,
        [styles[`table-striped`]]: props.isStriped,
        [styles[`table-hoverable`]]: props.isHoverable,
        [styles[`table-stacked`]]: props.isStacked
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(tableResponsiveClasses))
      }, [
        createElementVNode("table", {
          class: normalizeClass(unref(tableClasses))
        }, [
          createElementVNode("caption", {
            class: normalizeClass(unref(captionClasses))
          }, toDisplayString(__props.caption), 3),
          createElementVNode("thead", null, [
            createElementVNode("tr", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.headers, (headerCol) => {
                return openBlock(), createElementBlock("th", {
                  key: headerCol.key,
                  "aria-sort": getSortDirectionFor(headerCol.key),
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
                      onClick: ($event) => handleSortClicked(headerCol.key)
                    }, [
                      createElementVNode("span", _hoisted_3, toDisplayString(headerCol.label), 1),
                      createElementVNode("span", {
                        class: normalizeClass(getSortingClassesFor(headerCol.key))
                      }, [
                        getSortDirectionFor(headerCol.key) === "none" ? (openBlock(), createElementBlock("svg", {
                          key: 0,
                          xmlns: "http://www.w3.org/2000/svg",
                          class: normalizeClass([_ctx.$style["icon-sort"]]),
                          fill: "none",
                          viewBox: "0 0 20 20",
                          width: "20",
                          height: "20"
                        }, _hoisted_5, 2)) : createCommentVNode("", true),
                        getSortDirectionFor(headerCol.key) === "descending" ? (openBlock(), createElementBlock("svg", {
                          key: 1,
                          xmlns: "http://www.w3.org/2000/svg",
                          class: normalizeClass([_ctx.$style["icon-sort"]]),
                          viewBox: "0 0 20 20",
                          width: "20",
                          height: "20"
                        }, _hoisted_7, 2)) : createCommentVNode("", true),
                        getSortDirectionFor(headerCol.key) === "ascending" ? (openBlock(), createElementBlock("svg", {
                          key: 2,
                          xmlns: "http://www.w3.org/2000/svg",
                          class: normalizeClass([_ctx.$style["icon-sort"]]),
                          viewBox: "0 0 20 20",
                          width: "20",
                          height: "20"
                        }, _hoisted_9, 2)) : createCommentVNode("", true)
                      ], 2)
                    ], 10, _hoisted_2$1)
                  ], 2)) : (openBlock(), createElementBlock("span", _hoisted_10, toDisplayString(headerCol.label), 1))
                ], 12, _hoisted_1$1);
              }), 128))
            ])
          ]),
          createElementVNode("tbody", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(sortableItems), (row, i) => {
              return openBlock(), createElementBlock("tr", { key: i }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(row), (key, cIndex) => {
                  return openBlock(), createElementBlock("td", { key: cIndex }, [
                    __props.headers[cIndex].renderFn ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      innerHTML: __props.headers[cIndex].renderFn(row[key])
                    }, null, 8, _hoisted_11)) : (openBlock(), createElementBlock("div", _hoisted_12, toDisplayString(row[key]), 1))
                  ]);
                }), 128))
              ]);
            }), 128))
          ])
        ], 2)
      ], 2);
    };
  }
});
const cssModules$3 = {
  "$style": style0$3
};
var Table = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["__cssModules", cssModules$3]]);
const tag = "_tag_tk8nu_2";
var style0$2 = {
  "tag-base": "_tag-base_tk8nu_2",
  tag,
  "tag-skin": "_tag-skin_tk8nu_9",
  "tag-info": "_tag-info_tk8nu_21",
  "tag-warning": "_tag-warning_tk8nu_26",
  "tag-error": "_tag-error_tk8nu_31",
  "tag-success": "_tag-success_tk8nu_36",
  "tag-upper": "_tag-upper_tk8nu_41",
  "tag-circle": "_tag-circle_tk8nu_46",
  "tag-round": "_tag-round_tk8nu_50",
  "tag-pill": "_tag-pill_tk8nu_54"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    isSkinned: { type: Boolean, default: true },
    isUppercase: { type: Boolean },
    type: { default: "" },
    shape: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const styles = useCssModule();
    const tagClasses = computed(() => {
      return {
        [styles["tag"]]: !!props.isSkinned,
        [styles["tag-base"]]: !props.isSkinned,
        [styles[`tag-${props.type}`]]: !!props.type,
        [styles[`tag-${props.shape}`]]: !!props.shape,
        [styles["tag-upper"]]: !!props.isUppercase
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(tagClasses))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const cssModules$2 = {
  "$style": style0$2
};
var Tag = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["__cssModules", cssModules$2]]);
var style0$1 = {
  "alert-toast": "_alert-toast_15wpu_2"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    portalRootSelector: { default: "body" },
    horizontalPosition: null,
    verticalPosition: null
  },
  setup(__props) {
    const props = __props;
    const styles = useCssModule();
    const toastClasses = computed(() => {
      return {
        [styles["alert-toast"]]: true,
        [props.horizontalPosition]: true,
        [props.verticalPosition]: true
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: __props.portalRootSelector }, [
        createElementVNode("div", {
          class: normalizeClass(unref(toastClasses))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)
      ], 8, ["to"]);
    };
  }
});
const cssModules$1 = {
  "$style": style0$1
};
var Toasts = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__cssModules", cssModules$1]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    isOpen: { type: Boolean, default: true }
  },
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
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "x" : "y";
}
function getLengthFromAxis(axis) {
  return axis === "y" ? "height" : "width";
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  const commonAlign = reference[length] / 2 - floating[length] / 2;
  const side = getSide(placement);
  const isVertical = mainAxis === "x";
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  for (let i = 0; i < middleware.length; i++) {
    const {
      name,
      fn
    } = middleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = __spreadProps(__spreadValues({}, middlewareData), {
      [name]: __spreadValues(__spreadValues({}, middlewareData[name]), data)
    });
    if (reset) {
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
      continue;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
function expandPaddingObject(padding) {
  return __spreadValues({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, padding);
}
function getSideObjectFromPadding(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return __spreadProps(__spreadValues({}, rect), {
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
async function detectOverflow(middlewareArguments, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = middlewareArguments;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = options;
  const paddingObject = getSideObjectFromPadding(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: elementContext === "floating" ? __spreadProps(__spreadValues({}, rects.floating), {
      x,
      y
    }) : rects.reference,
    offsetParent: await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating)),
    strategy
  }) : rects[elementContext]);
  return {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
}
const min$1 = Math.min;
const max$1 = Math.max;
function within(min$1$1, value, max$1$1) {
  return max$1(min$1$1, min$1(value, max$1$1));
}
const arrow = (options) => ({
  name: "arrow",
  options,
  async fn(middlewareArguments) {
    const {
      element,
      padding = 0
    } = options != null ? options : {};
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2
    } = middlewareArguments;
    if (element == null) {
      return {};
    }
    const paddingObject = getSideObjectFromPadding(padding);
    const coords = {
      x,
      y
    };
    const axis = getMainAxisFromPlacement(placement);
    const alignment = getAlignment(placement);
    const length = getLengthFromAxis(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const minProp = axis === "y" ? "top" : "left";
    const maxProp = axis === "y" ? "bottom" : "right";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    if (clientSize === 0) {
      clientSize = rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const min2 = paddingObject[minProp];
    const max2 = clientSize - arrowDimensions[length] - paddingObject[maxProp];
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = within(min2, center, max2);
    const alignmentPadding = alignment === "start" ? paddingObject[minProp] : paddingObject[maxProp];
    const shouldAddOffset = alignmentPadding > 0 && center !== offset2 && rects.reference[length] <= rects.floating[length];
    const alignmentOffset = shouldAddOffset ? center < min2 ? min2 - center : max2 - center : 0;
    return {
      [axis]: coords[axis] - alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2
      }
    };
  }
});
const hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (matched) => hash$1[matched]);
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  let mainAlignmentSide = mainAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}
const hash = {
  start: "end",
  end: "start"
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (matched) => hash[matched]);
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
const flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(middlewareArguments) {
      var _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = middlewareArguments;
      const _a = options, {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        flipAlignment = true
      } = _a, detectOverflowOptions = __objRest(_a, [
        "mainAxis",
        "crossAxis",
        "fallbackPlacements",
        "fallbackStrategy",
        "flipAlignment"
      ]);
      const side = getSide(placement);
      const isBasePlacement = side === initialPlacement;
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const {
          main,
          cross
        } = getAlignmentSides(placement, rects, await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)));
        overflows.push(overflow[main], overflow[cross]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip$, _middlewareData$flip2;
        const nextIndex = ((_middlewareData$flip$ = (_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) != null ? _middlewareData$flip$ : 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = "bottom";
        switch (fallbackStrategy) {
          case "bestFit": {
            var _overflowsData$map$so;
            const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0].placement;
            if (placement2) {
              resetPlacement = placement2;
            }
            break;
          }
          case "initialPlacement":
            resetPlacement = initialPlacement;
            break;
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
async function convertValueToCoords(middlewareArguments, value) {
  const {
    placement,
    platform: platform2,
    elements
  } = middlewareArguments;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getMainAxisFromPlacement(placement) === "x";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = typeof value === "function" ? value(middlewareArguments) : value;
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : __spreadValues({
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null
  }, rawValue);
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
const offset = function(value) {
  if (value === void 0) {
    value = 0;
  }
  return {
    name: "offset",
    options: value,
    async fn(middlewareArguments) {
      const {
        x,
        y
      } = middlewareArguments;
      const diffCoords = await convertValueToCoords(middlewareArguments, value);
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: diffCoords
      };
    }
  };
};
function getCrossAxis(axis) {
  return axis === "x" ? "y" : "x";
}
const shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(middlewareArguments) {
      const {
        x,
        y,
        placement
      } = middlewareArguments;
      const _a = options, {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        }
      } = _a, detectOverflowOptions = __objRest(_a, [
        "mainAxis",
        "crossAxis",
        "limiter"
      ]);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const mainAxis = getMainAxisFromPlacement(getSide(placement));
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = within(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = within(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn(__spreadProps(__spreadValues({}, middlewareArguments), {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      }));
      return __spreadProps(__spreadValues({}, limitedCoords), {
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      });
    }
  };
};
function isWindow(value) {
  return value && value.document && value.location && value.alert && value.setInterval;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (!isWindow(node)) {
    const ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeName(node) {
  return isWindow(node) ? "" : node ? (node.nodeName || "").toLowerCase() : "";
}
function getUAString() {
  const uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands) {
    return uaData.brands.map((item) => item.brand + "/" + item.version).join(" ");
  }
  return navigator.userAgent;
}
function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}
function isElement(value) {
  return value instanceof getWindow(value).Element;
}
function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  const OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const isFirefox = /firefox/i.test(getUAString());
  const css = getComputedStyle$1(element);
  return css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].includes(css.willChange) || isFirefox && css.willChange === "filter" || isFirefox && (css.filter ? css.filter !== "none" : false);
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
const min = Math.min;
const max = Math.max;
const round = Math.round;
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  var _win$visualViewport$o, _win$visualViewport, _win$visualViewport$o2, _win$visualViewport2;
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  let scaleX = 1;
  let scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  const win = isElement(element) ? getWindow(element) : window;
  const addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  const x = (clientRect.left + (addVisualOffsets ? (_win$visualViewport$o = (_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) != null ? _win$visualViewport$o : 0 : 0)) / scaleX;
  const y = (clientRect.top + (addVisualOffsets ? (_win$visualViewport$o2 = (_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) != null ? _win$visualViewport$o2 : 0 : 0)) / scaleY;
  const width = clientRect.width / scaleX;
  const height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}
function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function isScaled(element) {
  const rect = getBoundingClientRect(element);
  return round(rect.width) !== element.offsetWidth || round(rect.height) !== element.offsetHeight;
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const rect = getBoundingClientRect(element, isOffsetParentAnElement && isScaled(offsetParent), strategy === "fixed");
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  return node.assignedSlot || node.parentNode || (isShadowRoot(node) ? node.host : null) || getDocumentElement(node);
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && !["html", "body"].includes(getNodeName(currentNode))) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  const window2 = getWindow(element);
  let offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getDimensions(element) {
  if (isHTMLElement(element)) {
    return {
      width: element.offsetWidth,
      height: element.offsetHeight
    };
  }
  const rect = getBoundingClientRect(element);
  return {
    width: rect.width,
    height: rect.height
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return __spreadProps(__spreadValues({}, rect), {
    x: rect.x - scroll.scrollLeft + offsets.x,
    y: rect.y - scroll.scrollTop + offsets.y
  });
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  const width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  const height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (["html", "body", "#document"].includes(getNodeName(parentNode))) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list) {
  var _node$ownerDocument;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollableAncestor);
  const target = isBody ? [win].concat(win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []) : scrollableAncestor;
  const updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(getOverflowAncestors(target));
}
function contains(parent, child) {
  const rootNode = child == null ? void 0 : child.getRootNode == null ? void 0 : child.getRootNode();
  if (parent != null && parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    let next = child;
    do {
      if (next && parent === next) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, false, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  return {
    top,
    left,
    x: left,
    y: top,
    right: left + element.clientWidth,
    bottom: top + element.clientHeight,
    width: element.clientWidth,
    height: element.clientHeight
  };
}
function getClientRectFromClippingAncestor(element, clippingParent, strategy) {
  if (clippingParent === "viewport") {
    return rectToClientRect(getViewportRect(element, strategy));
  }
  if (isElement(clippingParent)) {
    return getInnerBoundingClientRect(clippingParent, strategy);
  }
  return rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingAncestors(element) {
  const clippingAncestors = getOverflowAncestors(element);
  const canEscapeClipping = ["absolute", "fixed"].includes(getComputedStyle$1(element).position);
  const clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingAncestors.filter((clippingAncestors2) => isElement(clippingAncestors2) && contains(clippingAncestors2, clipperElement) && getNodeName(clippingAncestors2) !== "body");
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const mainClippingAncestors = boundary === "clippingAncestors" ? getClippingAncestors(element) : [].concat(boundary);
  const clippingAncestors = [...mainClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
const platform = {
  getClippingRect,
  convertOffsetParentRelativeRectToViewportRelativeRect,
  isElement,
  getDimensions,
  getOffsetParent,
  getDocumentElement,
  getElementRects: (_ref) => {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    return {
      reference: getRectRelativeToOffsetParent(reference, getOffsetParent(floating), strategy),
      floating: __spreadProps(__spreadValues({}, getDimensions(floating)), {
        x: 0,
        y: 0
      })
    };
  },
  getClientRects: (element) => Array.from(element.getClientRects()),
  isRTL: (element) => getComputedStyle$1(element).direction === "rtl"
};
const computePosition = (reference, floating, options) => computePosition$1(reference, floating, __spreadValues({
  platform
}, options));
const tooltip = "_tooltip_rt7hl_2";
var style0 = {
  tooltip,
  "tooltip-arrow": "_tooltip-arrow_rt7hl_12"
};
const _hoisted_1 = ["aria-describedby"];
const _hoisted_2 = ["id"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    placement: { default: "top" },
    offset: { default: 6 }
  },
  setup(__props) {
    const props = __props;
    const uid = () => `tip-${Date.now().toString(32)}-${Math.random().toString(16).replace(/\./g, "").toString()}`;
    const id = uid();
    const tooltipTargetRef = ref(null);
    const tooltipRef = ref(null);
    const tooltipArrowRef = ref(null);
    const update = () => {
      const tip = tooltipRef == null ? void 0 : tooltipRef.value;
      const target = tooltipTargetRef == null ? void 0 : tooltipTargetRef.value;
      const arrowEl = tooltipArrowRef == null ? void 0 : tooltipArrowRef.value;
      if (tip && target && arrowEl) {
        computePosition(target, tip, {
          placement: props.placement,
          middleware: [
            offset(props.offset),
            flip(),
            shift({ padding: 4 }),
            arrow({
              element: arrowEl,
              padding: 10
            })
          ]
        }).then(({ x, y, placement, middlewareData }) => {
          const arrowX = middlewareData.arrow.x;
          const arrowY = middlewareData.arrow.y;
          const staticSide = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right"
          }[placement.split("-")[0]];
          Object.assign(tip.style, {
            left: `${x}px`,
            top: `${y}px`
          });
          Object.assign(arrowEl.style, {
            left: typeof arrowX === "number" ? `${arrowX}px` : "",
            top: typeof arrowY === "number" ? `${arrowY}px` : "",
            right: "",
            bottom: "",
            [staticSide]: "-4px"
          });
        });
      }
    };
    const showTooltip = () => {
      if (tooltipRef == null ? void 0 : tooltipRef.value) {
        tooltipRef.value.style.display = "block";
      }
      update();
    };
    const hideTooltip = () => {
      if (tooltipRef == null ? void 0 : tooltipRef.value) {
        tooltipRef.value.style.display = "";
      }
    };
    const styles = useCssModule();
    const tooltipTargetClasses = computed(() => {
      return {
        [styles["tooltip-target"]]: true
      };
    });
    const tooltipClasses = computed(() => {
      return {
        [styles["tooltip"]]: true
      };
    });
    const tooltipArrowClasses = computed(() => {
      return {
        [styles["tooltip-arrow"]]: true
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("div", {
          ref_key: "tooltipTargetRef",
          ref: tooltipTargetRef,
          "aria-describedby": unref(id),
          class: normalizeClass(unref(tooltipTargetClasses)),
          onFocus: showTooltip,
          onBlur: hideTooltip,
          onMouseenter: showTooltip,
          onMouseleave: hideTooltip
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 42, _hoisted_1),
        createElementVNode("div", {
          id: unref(id),
          ref_key: "tooltipRef",
          ref: tooltipRef,
          role: "tooltip",
          class: normalizeClass(unref(tooltipClasses))
        }, [
          renderSlot(_ctx.$slots, "content"),
          createElementVNode("div", {
            id: "arrow",
            ref_key: "tooltipArrowRef",
            ref: tooltipArrowRef,
            class: normalizeClass(unref(tooltipArrowClasses))
          }, null, 2)
        ], 10, _hoisted_2)
      ], 64);
    };
  }
});
const cssModules = {
  "$style": style0
};
var Tooltip = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__cssModules", cssModules]]);
export { AgAlert as Alert, Avatar, AvatarGroup, Breadcrumb, Button, ButtonGroup, Card, ChoiceInput, Close, Dialog, Disclose, Divider, _sfc_main$l as Drawer, EmptyState, Header, HeaderNav, HeaderNavItem, Icon, Input, InputAddonItem, Loader, Menu, Pagination, Progress, Select, Spinner, Switch, Table, Tabs, Tag, _sfc_main$1 as Toast, Toasts, Tooltip, usePagingGenerator };
