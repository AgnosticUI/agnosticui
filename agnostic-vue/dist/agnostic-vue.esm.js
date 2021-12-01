import { openBlock, createElementBlock, normalizeClass, renderSlot, createElementVNode, createCommentVNode, Fragment, renderList, toDisplayString, createBlock, resolveDynamicComponent, withCtx, mergeProps, toHandlers, ref, withModifiers } from "vue";
const alert = "_alert_tv9xk_2";
var style0$j = {
  "alert-base": "_alert-base_tv9xk_2",
  alert,
  "alert-end": "_alert-end_tv9xk_10",
  "alert-skin": "_alert-skin_tv9xk_14",
  "alert-icon": "_alert-icon_tv9xk_20",
  "alert-border-top": "_alert-border-top_tv9xk_28",
  "alert-border-left": "_alert-border-left_tv9xk_32",
  "alert-border-bottom": "_alert-border-bottom_tv9xk_36",
  "alert-border-right": "_alert-border-right_tv9xk_40",
  "alert-border-all": "_alert-border-all_tv9xk_44",
  "alert-rounded": "_alert-rounded_tv9xk_48",
  "alert-warning": "_alert-warning_tv9xk_52",
  "alert-warning-icon": "_alert-warning-icon_tv9xk_57",
  "alert-info": "_alert-info_tv9xk_85",
  "alert-info-icon": "_alert-info-icon_tv9xk_90",
  "alert-error": "_alert-error_tv9xk_118",
  "alert-error-icon": "_alert-error-icon_tv9xk_123",
  "alert-success": "_alert-success_tv9xk_151",
  "alert-success-icon": "_alert-success-icon_tv9xk_156"
};
var _export_sfc = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _sfc_main$k = {
  name: "AgAlert",
  props: {
    type: {
      type: String,
      require: false,
      default: "",
      validator: (value) => ["warning", "error", "info", "success", ""].includes(value)
    },
    isBorderAll: {
      type: Boolean,
      require: false,
      default: false
    },
    isBorderTop: {
      type: Boolean,
      require: false,
      default: false
    },
    isBorderBottom: {
      type: Boolean,
      require: false,
      default: false
    },
    isBorderLeft: {
      type: Boolean,
      require: false,
      default: false
    },
    isBorderRight: {
      type: Boolean,
      require: false,
      default: false
    },
    isRounded: {
      type: Boolean,
      require: false,
      default: false
    },
    isBlockEnd: {
      type: Boolean,
      require: false,
      default: false
    }
  },
  computed: {
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
const _hoisted_1$b = /* @__PURE__ */ createElementVNode("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}, null, -1);
const _hoisted_2$7 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
}, null, -1);
const _hoisted_3$4 = [
  _hoisted_1$b,
  _hoisted_2$7
];
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.alertClasses),
    role: "alert"
  }, [
    (openBlock(), createElementBlock("svg", {
      class: normalizeClass($options.svgClasses),
      xmlns: "http://www.w3.org/2000/svg",
      height: "24",
      viewBox: "0 0 24 24",
      width: "24"
    }, _hoisted_3$4, 2)),
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
const cssModules$j = {};
cssModules$j["$style"] = style0$j;
var Alert = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$k], ["__cssModules", cssModules$j]]);
const avatar$1 = "_avatar_1bk0m_2";
var style0$i = {
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
const _sfc_main$j = {
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
      require: false,
      default: ""
    },
    text: {
      type: String,
      require: false,
      default: ""
    },
    size: {
      type: String,
      require: false,
      default: "",
      validator: (value) => ["small", "large", "xlarge", ""].includes(value)
    },
    type: {
      type: String,
      require: false,
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
const _hoisted_1$a = ["data-text"];
const _hoisted_2$6 = ["src"];
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", {
    class: normalizeClass($options.avatarClasses),
    "data-text": $props.text || null
  }, [
    $props.imgUrl ? (openBlock(), createElementBlock("img", {
      key: 0,
      src: $props.imgUrl,
      class: normalizeClass($options.avatarImage),
      alt: ""
    }, null, 10, _hoisted_2$6)) : createCommentVNode("", true),
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1$a);
}
const cssModules$i = {};
cssModules$i["$style"] = style0$i;
var Avatar = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$j], ["__cssModules", cssModules$i]]);
const avatar = "_avatar_1bk0m_2";
var style0$h = {
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
const _sfc_main$i = {
  name: "AgAvatarGroup"
};
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.$style["avatar-group"])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
const cssModules$h = {};
cssModules$h["$style"] = style0$h;
var AvatarGroup = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$i], ["__cssModules", cssModules$h]]);
const breadcrumb = "_breadcrumb_dor2y_2";
const active$2 = "_active_dor2y_20";
var style0$g = {
  breadcrumb,
  "breadcrumb-item": "_breadcrumb-item_dor2y_10",
  active: active$2,
  "breadcrumb-slash": "_breadcrumb-slash_dor2y_24",
  "breadcrumb-arrow": "_breadcrumb-arrow_dor2y_28",
  "breadcrumb-bullet": "_breadcrumb-bullet_dor2y_32"
};
const _sfc_main$h = {
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
const _hoisted_1$9 = { "aria-label": "breadcrumbs" };
const _hoisted_2$5 = {
  key: 0,
  href: "{route.url}"
};
const _hoisted_3$3 = { key: 1 };
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("nav", _hoisted_1$9, [
    createElementVNode("ol", {
      class: normalizeClass($options.breadcrumbClasses)
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.routes, (route, index) => {
        return openBlock(), createElementBlock("li", {
          key: index,
          class: normalizeClass($options.crumbClasses(index))
        }, [
          index !== $props.routes.length - 1 && route.url ? (openBlock(), createElementBlock("a", _hoisted_2$5, toDisplayString(route.label), 1)) : (openBlock(), createElementBlock("span", _hoisted_3$3, toDisplayString(route.label), 1))
        ], 2);
      }), 128))
    ], 2)
  ]);
}
const cssModules$g = {};
cssModules$g["$style"] = style0$g;
var Breadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$h], ["__cssModules", cssModules$g]]);
const btn = "_btn_1nn3z_6";
const disabled$3 = "_disabled_1nn3z_81";
const active$1 = "_active_1nn3z_171";
var style0$f = {
  "btn-base": "_btn-base_1nn3z_7",
  btn,
  "btn-skin": "_btn-skin_1nn3z_28",
  disabled: disabled$3,
  "btn-primary": "_btn-primary_1nn3z_102",
  "btn-bordered": "_btn-bordered_1nn3z_109",
  "btn-secondary": "_btn-secondary_1nn3z_123",
  "btn-raised": "_btn-raised_1nn3z_150",
  active: active$1,
  "btn-large": "_btn-large_1nn3z_286",
  "btn-small": "_btn-small_1nn3z_293",
  "btn-rounded": "_btn-rounded_1nn3z_303",
  "btn-pill": "_btn-pill_1nn3z_307",
  "btn-circle": "_btn-circle_1nn3z_316",
  "btn-circle-large": "_btn-circle-large_1nn3z_323",
  "btn-circle-small": "_btn-circle-small_1nn3z_329",
  "btn-block": "_btn-block_1nn3z_338",
  "btn-block-following": "_btn-block-following_1nn3z_344",
  "btn-link": "_btn-link_1nn3z_352",
  "btn-blank": "_btn-blank_1nn3z_353"
};
const _sfc_main$g = {
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
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
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
const cssModules$f = {};
cssModules$f["$style"] = style0$f;
var Button = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g], ["__cssModules", cssModules$f]]);
var style0$e = {
  "btn-group": "_btn-group_nuvva_5"
};
const _sfc_main$f = {
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
const _hoisted_1$8 = ["aria-label"];
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.classes),
    role: "group",
    "aria-label": $props.ariaLabel
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1$8);
}
const cssModules$e = {};
cssModules$e["$style"] = style0$e;
var ButtonGroup = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f], ["__cssModules", cssModules$e]]);
const card = "_card_aihsb_8";
var style0$d = {
  card,
  "card-base": "_card-base_aihsb_9",
  "card-skin": "_card-skin_aihsb_19",
  "card-animated": "_card-animated_aihsb_47",
  "card-stacked": "_card-stacked_aihsb_79"
};
const _sfc_main$e = {
  name: "AgCard",
  props: {
    css: {
      type: String,
      default: ""
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
    }
  },
  computed: {
    classes() {
      return {
        [this.$style.card]: this.isSkinned,
        [this.$style["card-base"]]: !this.isSkinned,
        [this.$style["card-animated"]]: this.isAnimated,
        [this.$style["card-stacked"]]: this.isStacked,
        [`${this.css}`]: !!this.css
      };
    }
  }
};
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.classes)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
const cssModules$d = {};
cssModules$d["$style"] = style0$d;
var Card = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e], ["__cssModules", cssModules$d]]);
const checkbox = "_checkbox_1myko_9";
const radio = "_radio_1myko_10";
const disabled$2 = "_disabled_1myko_213";
var style0$c = {
  "checkbox-group": "_checkbox-group_1myko_9",
  "radio-group": "_radio-group_1myko_10",
  "checkbox-group-large": "_checkbox-group-large_1myko_19",
  "radio-group-large": "_radio-group-large_1myko_20",
  "checkbox-legend": "_checkbox-legend_1myko_25",
  "radio-legend": "_radio-legend_1myko_26",
  checkbox,
  radio,
  "checkbox-small": "_checkbox-small_1myko_41",
  "radio-small": "_radio-small_1myko_42",
  "checkbox-large": "_checkbox-large_1myko_47",
  "radio-large": "_radio-large_1myko_48",
  "checkbox-label-wrap": "_checkbox-label-wrap_1myko_53",
  "radio-label-wrap": "_radio-label-wrap_1myko_54",
  "checkbox-label-wrap-inline": "_checkbox-label-wrap-inline_1myko_62",
  "radio-label-wrap-inline": "_radio-label-wrap-inline_1myko_63",
  "checkbox-label": "_checkbox-label_1myko_53",
  "radio-label": "_radio-label_1myko_54",
  "checkbox-label-small": "_checkbox-label-small_1myko_132",
  "radio-label-small": "_radio-label-small_1myko_141",
  "checkbox-label-large": "_checkbox-label-large_1myko_146",
  "radio-label-large": "_radio-label-large_1myko_155",
  "checkbox-group-hidden": "_checkbox-group-hidden_1myko_195",
  "radio-group-hidden": "_radio-group-hidden_1myko_196",
  disabled: disabled$2
};
const TYPES$1 = ["checkbox", "radio"];
const _sfc_main$d = {
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
    labelSpanClasses() {
      return {
        [this.$style[`${this.type}-label`]]: this.type,
        [this.$style[`${this.type}-label-${this.size}`]]: !!this.size
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
const _hoisted_1$7 = ["id", "type", "name", "value", "disabled", "checked"];
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
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
        }, null, 42, _hoisted_1$7),
        createElementVNode("span", {
          class: normalizeClass($options.labelSpanClasses)
        }, toDisplayString(option.label), 3)
      ], 2);
    }), 128))
  ], 2);
}
const cssModules$c = {};
cssModules$c["$style"] = style0$c;
var ChoiceInput = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d], ["__cssModules", cssModules$c]]);
const close = "_close_survv_2";
var style0$b = {
  "close-button": "_close-button_survv_2",
  close,
  "close-button-small": "_close-button-small_survv_49",
  "close-button-large": "_close-button-large_survv_54",
  "close-button-xlarge": "_close-button-xlarge_survv_59"
};
const _sfc_main$c = {
  name: "AgClose",
  props: {
    size: {
      type: String,
      require: false,
      default: "",
      validator: (value) => ["small", "large", "xlarge", ""].includes(value)
    }
  },
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
const _hoisted_1$6 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M.439 21.44a1.5 1.5 0 0 0 2.122 2.121l9.262-9.261a.25.25 0 0 1 .354 0l9.262 9.263a1.5 1.5 0 1 0 2.122-2.121L14.3 12.177a.25.25 0 0 1 0-.354l9.263-9.262A1.5 1.5 0 0 0 21.439.44L12.177 9.7a.25.25 0 0 1-.354 0L2.561.44A1.5 1.5 0 0 0 .439 2.561L9.7 11.823a.25.25 0 0 1 0 .354Z"
}, null, -1);
const _hoisted_2$4 = [
  _hoisted_1$6
];
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass($options.closeButtonClasses),
    "aria-label": "Close"
  }, [
    (openBlock(), createElementBlock("svg", {
      class: normalizeClass($options.closeClasses),
      viewBox: "0 0 24 24",
      "aria-hidden": "true"
    }, _hoisted_2$4, 2))
  ], 2);
}
const cssModules$b = {};
cssModules$b["$style"] = style0$b;
var Close = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c], ["__cssModules", cssModules$b]]);
const disclose = "_disclose_1uc8k_2";
var style0$a = {
  disclose,
  "disclose-title": "_disclose-title_1uc8k_6",
  "disclose-panel": "_disclose-panel_1uc8k_18",
  "disclose-bg": "_disclose-bg_1uc8k_33"
};
const _sfc_main$b = {
  name: "AgDisclose",
  props: {
    title: {
      type: String,
      require: true,
      default: ""
    },
    isOpen: {
      type: Boolean,
      require: false,
      default: false
    },
    isBackground: {
      type: Boolean,
      require: false,
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
const _hoisted_1$5 = ["open"];
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
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
  ], 10, _hoisted_1$5);
}
const cssModules$a = {};
cssModules$a["$style"] = style0$a;
var Disclose = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b], ["__cssModules", cssModules$a]]);
const header = "_header_1jtcs_2";
var style0$9 = {
  header,
  "header-base": "_header-base_1jtcs_3",
  "header-skin": "_header-skin_1jtcs_14",
  "header-content": "_header-content_1jtcs_28",
  "header-sticky": "_header-sticky_1jtcs_54",
  "header-content-start": "_header-content-start_1jtcs_70",
  "header-content-end": "_header-content-end_1jtcs_74"
};
const _sfc_main$a = {
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
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
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
const cssModules$9 = {};
cssModules$9["$style"] = style0$9;
var Header = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["__cssModules", cssModules$9]]);
var style0$8 = {
  "header-nav": "_header-nav_yf3gw_3"
};
const _sfc_main$9 = {
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
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
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
const cssModules$8 = {};
cssModules$8["$style"] = style0$8;
var HeaderNav = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__cssModules", cssModules$8]]);
var style0$7 = {
  "header-nav-item": "_header-nav-item_1k5ky_2"
};
const _sfc_main$8 = {
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
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("li", {
    class: normalizeClass($options.classes)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
const cssModules$7 = {};
cssModules$7["$style"] = style0$7;
var HeaderNavItem = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__cssModules", cssModules$7]]);
var Icon_vue_vue_type_style_index_0_lang = "";
const _sfc_main$7 = {
  name: "AgIcon",
  props: {
    isSkinned: {
      type: Boolean,
      require: false,
      default: true
    },
    size: {
      type: Number,
      require: false,
      default: 18,
      validator: (value) => [14, 16, 18, 20, 24, 32, 36, 40, 48, 56, 64].includes(value)
    },
    type: {
      type: String,
      require: false,
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
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", {
    class: normalizeClass($options.iconClasses)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var Icon = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
const input = "_input_kts3n_2";
const label = "_label_kts3n_15";
const disabled$1 = "_disabled_kts3n_245";
var style0$6 = {
  "input-base": "_input-base_kts3n_2",
  input,
  label,
  "label-base": "_label-base_kts3n_16",
  "field-help": "_field-help_kts3n_24",
  "field-help-large": "_field-help-large_kts3n_25",
  "field-help-small": "_field-help-small_kts3n_26",
  "field-error": "_field-error_kts3n_27",
  "field-error-large": "_field-error-large_kts3n_28",
  "field-error-small": "_field-error-small_kts3n_29",
  "label-skin": "_label-skin_kts3n_30",
  "input-addon-container": "_input-addon-container_kts3n_32",
  "input-small": "_input-small_kts3n_33",
  "input-large": "_input-large_kts3n_34",
  "input-skin": "_input-skin_kts3n_35",
  "input-underlined": "_input-underlined_kts3n_36",
  "input-underlined-bg": "_input-underlined-bg_kts3n_37",
  "label-inline": "_label-inline_kts3n_90",
  "input-inline": "_input-inline_kts3n_91",
  "input-rounded": "_input-rounded_kts3n_153",
  "label-error": "_label-error_kts3n_168",
  "input-error": "_input-error_kts3n_172",
  "label-large": "_label-large_kts3n_210",
  "label-small": "_label-small_kts3n_222",
  disabled: disabled$1,
  "input-has-left-addon": "_input-has-left-addon_kts3n_284",
  "input-has-right-addon": "_input-has-right-addon_kts3n_285"
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
const _sfc_main$6 = {
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
const _hoisted_1$4 = { class: "w-100" };
const _hoisted_2$3 = ["for"];
const _hoisted_3$2 = ["id", "value", "disabled"];
const _hoisted_4$1 = ["id", "type", "value", "disabled"];
const _hoisted_5 = ["id", "type", "value", "disabled"];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    createElementVNode("label", {
      class: normalizeClass($options.labelClasses),
      for: $props.id
    }, toDisplayString($props.label), 11, _hoisted_2$3),
    $props.type == "textarea" ? (openBlock(), createElementBlock("textarea", mergeProps({
      key: 0,
      id: $props.id,
      class: $options.inputClasses
    }, _ctx.$attrs, {
      value: $props.value,
      disabled: $options.isInputDisabled
    }, toHandlers({
      input: (event) => _ctx.$emit("input", event.target.value)
    })), null, 16, _hoisted_3$2)) : $props.hasLeftAddon || $props.hasRightAddon ? (openBlock(), createElementBlock("div", {
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
      })), null, 16, _hoisted_4$1),
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
    })), null, 16, _hoisted_5)),
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
const cssModules$6 = {};
cssModules$6["$style"] = style0$6;
var Input = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__cssModules", cssModules$6]]);
var style0$5 = {
  "input-addon-right": "_input-addon-right_1b61h_5",
  "input-addon-left": "_input-addon-left_1b61h_6"
};
const _sfc_main$5 = {
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
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.classes)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
const cssModules$5 = {};
cssModules$5["$style"] = style0$5;
var InputAddonItem = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__cssModules", cssModules$5]]);
const progress = "_progress_f0u9q_8";
var style0$4 = {
  progress
};
const _sfc_main$4 = {
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
const _hoisted_1$3 = ["value", "max"];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("progress", {
    class: normalizeClass($options.classes),
    value: $props.value,
    max: $props.max
  }, null, 10, _hoisted_1$3);
}
const cssModules$4 = {};
cssModules$4["$style"] = style0$4;
var Progress = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__cssModules", cssModules$4]]);
const select = "_select_1y5sy_2";
var style0$3 = {
  select,
  "select-base": "_select-base_1y5sy_3",
  "select-skin": "_select-skin_1y5sy_10",
  "select-small": "_select-small_1y5sy_60",
  "select-large": "_select-large_1y5sy_67"
};
const _sfc_main$3 = {
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
      require: false,
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
    selectClasses() {
      return {
        [this.$style["select"]]: true,
        [this.$style[`select-${this.size}`]]: !!this.size
      };
    }
  }
};
const _hoisted_1$2 = ["for"];
const _hoisted_2$2 = ["id", "name", "value", "disabled", "multiple", "size"];
const _hoisted_3$1 = {
  key: 0,
  disabled: "",
  value: ""
};
const _hoisted_4 = ["value"];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createElementVNode("label", {
      class: normalizeClass([_ctx.$style["select"], "screenreader-only"]),
      for: $props.uniqueId
    }, toDisplayString($props.labelCopy), 11, _hoisted_1$2),
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
      !$props.isMultiple ? (openBlock(), createElementBlock("option", _hoisted_3$1, " Select option ")) : createCommentVNode("", true),
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.options, (option, i) => {
        return openBlock(), createElementBlock("option", {
          key: i,
          value: option.value
        }, toDisplayString(option.label), 9, _hoisted_4);
      }), 128))
    ], 42, _hoisted_2$2)
  ], 64);
}
const cssModules$3 = {};
cssModules$3["$style"] = style0$3;
var Select = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__cssModules", cssModules$3]]);
const disabled = "_disabled_97d1o_183";
var style0$2 = {
  "switch-container": "_switch-container_97d1o_8",
  "switch": "_switch_97d1o_8",
  "switch-small": "_switch-small_97d1o_54",
  "switch-large": "_switch-large_97d1o_65",
  "switch-border": "_switch-border_97d1o_76",
  "switch-action": "_switch-action_97d1o_80",
  "switch-right": "_switch-right_97d1o_87",
  "switch-input": "_switch-input_97d1o_111",
  "switch-label": "_switch-label_97d1o_119",
  disabled
};
const _sfc_main$2 = {
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
const _hoisted_1$1 = ["for"];
const _hoisted_2$1 = ["id", "checked", "disabled"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
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
    }, null, 42, _hoisted_2$1),
    createElementVNode("span", {
      class: normalizeClass($options.switchSpan),
      "aria-hidden": "true"
    }, null, 2),
    $props.labelPosition === "right" ? (openBlock(), createElementBlock("span", {
      key: 1,
      class: normalizeClass($options.switchLabel)
    }, toDisplayString($props.label), 3)) : createCommentVNode("", true)
  ], 10, _hoisted_1$1);
}
const cssModules$2 = {};
cssModules$2["$style"] = style0$2;
var Switch = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__cssModules", cssModules$2]]);
const tabs = "_tabs_jb818_3";
const active = "_active_jb818_117";
var style0$1 = {
  tabs,
  "tabs-vertical": "_tabs-vertical_jb818_8",
  "tab-list": "_tab-list_jb818_12",
  "tab-list-base": "_tab-list-base_jb818_13",
  "tab-skinned": "_tab-skinned_jb818_20",
  "tab-base": "_tab-base_jb818_32",
  "tab-button": "_tab-button_jb818_37",
  "tab-button-base": "_tab-button-base_jb818_37",
  "tab-button-skin": "_tab-button-skin_jb818_63",
  "tab-borderless": "_tab-borderless_jb818_91",
  "tab-button-large": "_tab-button-large_jb818_95",
  "tab-button-xlarge": "_tab-button-xlarge_jb818_102",
  "tab-item": "_tab-item_jb818_109",
  active,
  "tab-panel": "_tab-panel_jb818_151"
};
const _sfc_main$1 = {
  name: "AgTabs",
  props: {
    activatedTab: {
      type: Number,
      default: 0
    },
    tabType: {
      type: String,
      require: false,
      default: "tab",
      validator: (value) => ["tab", "custom"].includes(value)
    },
    isVertical: {
      type: Boolean,
      required: false,
      default: false
    },
    isSkinned: {
      type: Boolean,
      require: false,
      default: true
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    disabledOptions: {
      type: Array,
      required: false,
      default: () => []
    },
    isBorderless: {
      type: Boolean,
      require: false,
      default: false
    },
    size: {
      type: String,
      require: false,
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
const _hoisted_1 = ["aria-orientation"];
const _hoisted_2 = ["id", "aria-controls", "disabled", "tabindex", "aria-selected", "onClick", "onKeydown"];
const _hoisted_3 = ["id", "aria-labelledby", "hidden"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
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
        ], 42, _hoisted_2);
      }), 128))
    ], 10, _hoisted_1),
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
      ], 10, _hoisted_3);
    }), 128))
  ], 2);
}
const cssModules$1 = {};
cssModules$1["$style"] = style0$1;
var Tabs = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__cssModules", cssModules$1]]);
const tag = "_tag_2luww_2";
var style0 = {
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
const _sfc_main = {
  name: "AgTag",
  props: {
    isSkinned: {
      type: Boolean,
      require: false,
      default: true
    },
    isUppercase: {
      type: Boolean,
      require: false,
      default: false
    },
    type: {
      type: String,
      require: false,
      default: "",
      validator: (value) => {
        const valid = ["warning", "error", "info", "success", ""].includes(value);
        return valid;
      }
    },
    shape: {
      type: String,
      require: false,
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", {
    class: normalizeClass($options.tagClasses)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
const cssModules = {};
cssModules["$style"] = style0;
var Tag = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__cssModules", cssModules]]);
export { Alert, Avatar, AvatarGroup, Breadcrumb, Button, ButtonGroup, Card, ChoiceInput, Close, Disclose, Header, HeaderNav, HeaderNavItem, Icon, Input, InputAddonItem, Progress, Select, Switch, Tabs, Tag };
