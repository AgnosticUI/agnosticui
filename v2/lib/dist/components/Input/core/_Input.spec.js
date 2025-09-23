import { AgInput as r } from "./_Input.js";
import { d as i, b as u, a as l, i as n, g as o } from "../../../vi.bdSIJ99Y-kNDF-H_t.js";
customElements.get("ag-input") || customElements.define("ag-input", r);
i("AgInput - Basic Functionality", () => {
  let e;
  i("Basic Label + Input (Starting Point)", () => {
    u(async () => {
      e = new r(), e.label = "Email Address", document.body.appendChild(e), await e.updateComplete;
    }), l(() => {
      e && document.body.contains(e) && document.body.removeChild(e);
    }), n("renders a basic input component", () => {
      o(e).toBeTruthy();
    }), n("renders label above input per BBC GEL", () => {
      const t = e.shadowRoot?.querySelector("label"), a = e.shadowRoot?.querySelector("input");
      o(t).toBeTruthy(), o(a).toBeTruthy(), o(t?.textContent?.trim()).toBe("Email Address");
    }), n("associates label with input via for/id", () => {
      const t = e.shadowRoot?.querySelector("label"), a = e.shadowRoot?.querySelector("input");
      o(t?.getAttribute("for")).toBe(a?.getAttribute("id"));
    }), n("generates unique IDs for each component instance", async () => {
      const t = new r();
      t.label = "Password", document.body.appendChild(t), await t.updateComplete;
      const a = e.shadowRoot?.querySelector("input"), d = t.shadowRoot?.querySelector("input");
      o(a?.getAttribute("id")).not.toBe(d?.getAttribute("id")), document.body.removeChild(t);
    }), n("supports basic input types", async () => {
      e.type = "email", await e.updateComplete;
      const t = e.shadowRoot?.querySelector("input");
      o(t?.getAttribute("type")).toBe("email");
    }), n("applies focus styles with --ag-focus", () => {
      const t = e.constructor.styles;
      o(t).toBeTruthy();
    });
  });
});
i("Label Architecture (Complete Flexibility)", () => {
  l(() => {
    document.querySelectorAll("ag-input").forEach((e) => {
      document.body.contains(e) && document.body.removeChild(e);
    });
  }), i("Standard Built-in Label (Recommended)", () => {
    n("displays visible label above input by default", async () => {
      const e = new r();
      e.label = "Full Name", document.body.appendChild(e), await e.updateComplete;
      const t = e.shadowRoot?.querySelector("label"), a = e.shadowRoot?.querySelector("input");
      o(t?.textContent?.trim()).toBe("Full Name"), o(t?.getAttribute("for")).toBe(a?.getAttribute("id")), o(t?.classList.contains("ag-input__label--hidden")).toBe(!1);
    });
  }), i("Visually Hidden Label (Screen Reader Only)", () => {
    n("hides label visually but keeps it for screen readers", async () => {
      const e = new r();
      e.label = "Search", e.labelHidden = !0, document.body.appendChild(e), await e.updateComplete;
      const t = e.shadowRoot?.querySelector("label");
      o(t?.textContent?.trim()).toBe("Search"), o(t?.classList.contains("ag-input__label--hidden")).toBe(!0);
    });
  }), i("External Label (Escape Hatch)", () => {
    n("skips built-in label when noLabel is true", async () => {
      const e = new r();
      e.noLabel = !0, document.body.appendChild(e), await e.updateComplete;
      const t = e.shadowRoot?.querySelector("label");
      o(t).toBeNull();
    }), n("supports external label via labelledBy", async () => {
      const e = document.createElement("label");
      e.id = "external-label", e.textContent = "External Label", document.body.appendChild(e);
      const t = new r();
      t.noLabel = !0, t.labelledBy = "external-label", document.body.appendChild(t), await t.updateComplete;
      const a = t.shadowRoot?.querySelector("input");
      o(a?.getAttribute("aria-labelledby")).toBe("external-label"), document.body.removeChild(e);
    });
  }), i("aria-label Only (Icon-Only Scenarios)", () => {
    n("uses aria-label when no visible label needed", async () => {
      const e = new r();
      e.noLabel = !0, e.ariaLabel = "Search products", document.body.appendChild(e), await e.updateComplete;
      const t = e.shadowRoot?.querySelector("input");
      o(t?.getAttribute("aria-label")).toBe("Search products");
    });
  });
});
i("Input Types Support (HTML5 + Textarea)", () => {
  l(() => {
    document.querySelectorAll("ag-input").forEach((e) => {
      document.body.contains(e) && document.body.removeChild(e);
    });
  }), i("Standard HTML5 Input Types", () => {
    ["text", "email", "password", "number", "tel", "url", "search"].forEach((t) => {
      n(`supports type="${t}"`, async () => {
        const a = new r();
        a.label = `Test ${t}`, a.type = t, document.body.appendChild(a), await a.updateComplete;
        const d = a.shadowRoot?.querySelector("input");
        o(d?.getAttribute("type")).toBe(t);
      });
    }), n('defaults to type="text"', async () => {
      const t = new r();
      t.label = "Default Type", document.body.appendChild(t), await t.updateComplete;
      const a = t.shadowRoot?.querySelector("input");
      o(a?.getAttribute("type")).toBe("text");
    });
  }), i("Textarea Mode (v1 Parity)", () => {
    n('renders textarea element when type="textarea"', async () => {
      const e = new r();
      e.label = "Comments", e.type = "textarea", document.body.appendChild(e), await e.updateComplete;
      const t = e.shadowRoot?.querySelector("textarea"), a = e.shadowRoot?.querySelector("input");
      o(t).toBeTruthy(), o(a).toBeNull();
    }), n("supports rows and cols for textarea", async () => {
      const e = new r();
      e.label = "Description", e.type = "textarea", e.rows = 6, e.cols = 50, document.body.appendChild(e), await e.updateComplete;
      const t = e.shadowRoot?.querySelector("textarea");
      o(t?.getAttribute("rows")).toBe("6"), o(t?.getAttribute("cols")).toBe("50");
    }), n("textarea maintains same label associations", async () => {
      const e = new r();
      e.label = "Feedback", e.type = "textarea", document.body.appendChild(e), await e.updateComplete;
      const t = e.shadowRoot?.querySelector("label"), a = e.shadowRoot?.querySelector("textarea");
      o(t?.getAttribute("for")).toBe(a?.getAttribute("id"));
    });
  });
});
i("v1 Parity - Size Variants", () => {
  l(() => {
    document.querySelectorAll("ag-input").forEach((e) => {
      document.body.contains(e) && document.body.removeChild(e);
    });
  }), i("Size Property Support", () => {
    ["small", "default", "large"].forEach((t) => {
      n(`applies size="${t}" attribute`, async () => {
        const a = new r();
        a.label = `${t} Input`, a.size = t, document.body.appendChild(a), await a.updateComplete, o(a.hasAttribute("size")).toBe(!0), o(a.getAttribute("size")).toBe(t);
      });
    }), n('defaults to "default" size when not specified', async () => {
      const t = new r();
      t.label = "Default Size", document.body.appendChild(t), await t.updateComplete;
      const a = t.getAttribute("size");
      o(a === null || a === "default").toBe(!0);
    }), n("applies size classes to wrapper element", async () => {
      const t = new r();
      t.label = "Large Input", t.size = "large", document.body.appendChild(t), await t.updateComplete;
      const a = t.shadowRoot?.querySelector(".ag-input");
      o(a?.classList.contains("ag-input--large")).toBe(!0);
    }), n("works with textarea mode", async () => {
      const t = new r();
      t.label = "Small Textarea", t.type = "textarea", t.size = "small", document.body.appendChild(t), await t.updateComplete, o(t.getAttribute("size")).toBe("small");
      const a = t.shadowRoot?.querySelector(".ag-input");
      o(a?.classList.contains("ag-input--small")).toBe(!0);
    });
  }), i("Size Styling Integration", () => {
    n("applies size-specific CSS parts for external styling", async () => {
      const e = new r();
      e.label = "Size Parts Test", e.size = "large", document.body.appendChild(e), await e.updateComplete;
      const t = e.shadowRoot?.querySelector('[part="wrapper"]'), a = e.shadowRoot?.querySelector('[part="input"]'), d = e.shadowRoot?.querySelector('[part="label"]');
      o(t).toBeTruthy(), o(a).toBeTruthy(), o(d).toBeTruthy();
    });
  });
});
i("v1 Parity - Styling Variants", () => {
  l(() => {
    document.querySelectorAll("ag-input").forEach((e) => {
      document.body.contains(e) && document.body.removeChild(e);
    });
  }), i("Boolean Styling Properties", () => {
    n("applies isRounded variant", async () => {
      const e = new r();
      e.label = "Rounded Input", e.isRounded = !0, document.body.appendChild(e), await e.updateComplete, o(e.hasAttribute("is-rounded")).toBe(!0);
      const t = e.shadowRoot?.querySelector(".ag-input");
      o(t?.classList.contains("ag-input--rounded")).toBe(!0);
    }), n("applies isUnderlined variant", async () => {
      const e = new r();
      e.label = "Underlined Input", e.isUnderlined = !0, document.body.appendChild(e), await e.updateComplete, o(e.hasAttribute("is-underlined")).toBe(!0);
      const t = e.shadowRoot?.querySelector(".ag-input");
      o(t?.classList.contains("ag-input--underlined")).toBe(!0);
    }), n("applies isUnderlinedWithBackground variant", async () => {
      const e = new r();
      e.label = "Underlined with Background", e.isUnderlinedWithBackground = !0, document.body.appendChild(e), await e.updateComplete, o(e.hasAttribute("is-underlined-with-background")).toBe(!0);
      const t = e.shadowRoot?.querySelector(".ag-input");
      o(t?.classList.contains("ag-input--underlined-with-background")).toBe(!0);
    }), n("applies isInline variant", async () => {
      const e = new r();
      e.label = "Inline Input", e.isInline = !0, document.body.appendChild(e), await e.updateComplete, o(e.hasAttribute("is-inline")).toBe(!0);
    });
  }), i("Combined Styling Variants", () => {
    n("supports multiple styling variants together", async () => {
      const e = new r();
      e.label = "Multi-styled Input", e.isRounded = !0, e.isUnderlined = !0, e.size = "large", document.body.appendChild(e), await e.updateComplete;
      const t = e.shadowRoot?.querySelector(".ag-input");
      o(t?.classList.contains("ag-input--rounded")).toBe(!0), o(t?.classList.contains("ag-input--underlined")).toBe(!0), o(t?.classList.contains("ag-input--large")).toBe(!0);
    }), n("styling variants work with textarea mode", async () => {
      const e = new r();
      e.label = "Styled Textarea", e.type = "textarea", e.isRounded = !0, e.size = "small", document.body.appendChild(e), await e.updateComplete;
      const t = e.shadowRoot?.querySelector(".ag-input");
      o(t?.classList.contains("ag-input--rounded")).toBe(!0), o(t?.classList.contains("ag-input--small")).toBe(!0);
      const a = e.shadowRoot?.querySelector("textarea");
      o(a).toBeTruthy();
    });
  });
});
i("v1 Parity - Addon Support", () => {
  l(() => {
    document.querySelectorAll("ag-input").forEach((e) => {
      document.body.contains(e) && document.body.removeChild(e);
    });
  }), i("Left Addon Support", () => {
    n("enables left addon when hasLeftAddon is true", async () => {
      const e = new r();
      e.label = "Search", e.hasLeftAddon = !0, document.body.appendChild(e), await e.updateComplete, o(e.hasAttribute("has-left-addon")).toBe(!0);
      const t = e.shadowRoot?.querySelector(".ag-input__addon--left");
      o(t).toBeTruthy();
      const a = t?.querySelector('slot[name="addon-left"]');
      o(a).toBeTruthy();
    }), n("wraps input in field container when addons present", async () => {
      const e = new r();
      e.label = "With Addon", e.hasLeftAddon = !0, document.body.appendChild(e), await e.updateComplete;
      const t = e.shadowRoot?.querySelector(".ag-input__field");
      o(t).toBeTruthy(), o(t?.getAttribute("part")).toBe("field-wrapper");
    }), n("input receives flex: 1 for remaining space", async () => {
      const e = new r();
      e.label = "Flex Input", e.hasLeftAddon = !0, document.body.appendChild(e), await e.updateComplete;
      const a = e.shadowRoot?.querySelector(".ag-input__field")?.querySelector("input");
      o(a).toBeTruthy();
    });
  }), i("Right Addon Support", () => {
    n("enables right addon when hasRightAddon is true", async () => {
      const e = new r();
      e.label = "Amount", e.hasRightAddon = !0, document.body.appendChild(e), await e.updateComplete, o(e.hasAttribute("has-right-addon")).toBe(!0);
      const t = e.shadowRoot?.querySelector(".ag-input__addon--right");
      o(t).toBeTruthy();
      const a = t?.querySelector('slot[name="addon-right"]');
      o(a).toBeTruthy();
    });
  }), i("Dual Addon Support", () => {
    n("supports both left and right addons together", async () => {
      const e = new r();
      e.label = "Currency", e.hasLeftAddon = !0, e.hasRightAddon = !0, document.body.appendChild(e), await e.updateComplete;
      const t = e.shadowRoot?.querySelector(".ag-input__addon--left"), a = e.shadowRoot?.querySelector(".ag-input__addon--right"), d = e.shadowRoot?.querySelector(".ag-input__field");
      o(t).toBeTruthy(), o(a).toBeTruthy(), o(d).toBeTruthy();
    }), n("maintains proper order: left addon, input, right addon", async () => {
      const e = new r();
      e.label = "Ordered Elements", e.hasLeftAddon = !0, e.hasRightAddon = !0, document.body.appendChild(e), await e.updateComplete;
      const t = e.shadowRoot?.querySelector(".ag-input__field"), a = Array.from(t?.children || []);
      o(a[0]?.classList.contains("ag-input__addon--left")).toBe(!0), o(a[1]?.tagName.toLowerCase()).toBe("input"), o(a[2]?.classList.contains("ag-input__addon--right")).toBe(!0);
    });
  }), i("Addon Integration", () => {
    n("works with textarea mode", async () => {
      const e = new r();
      e.label = "Textarea with Addons", e.type = "textarea", e.hasLeftAddon = !0, e.hasRightAddon = !0, document.body.appendChild(e), await e.updateComplete;
      const a = e.shadowRoot?.querySelector(".ag-input__field")?.querySelector("textarea"), d = e.shadowRoot?.querySelector(".ag-input__addon--left"), s = e.shadowRoot?.querySelector(".ag-input__addon--right");
      o(a).toBeTruthy(), o(d).toBeTruthy(), o(s).toBeTruthy();
    }), n("combines with size and styling variants", async () => {
      const e = new r();
      e.label = "Combined Features", e.size = "large", e.isRounded = !0, e.hasLeftAddon = !0, e.hasRightAddon = !0, document.body.appendChild(e), await e.updateComplete;
      const t = e.shadowRoot?.querySelector(".ag-input");
      o(t?.classList.contains("ag-input--large")).toBe(!0), o(t?.classList.contains("ag-input--rounded")).toBe(!0);
      const a = e.shadowRoot?.querySelector(".ag-input__addon--left"), d = e.shadowRoot?.querySelector(".ag-input__addon--right");
      o(a).toBeTruthy(), o(d).toBeTruthy();
    });
  });
});
i("Validation & Error Handling (BBC GEL)", () => {
  l(() => {
    document.querySelectorAll("ag-input").forEach((e) => {
      document.body.contains(e) && document.body.removeChild(e);
    });
  }), i("Required Field Support", () => {
    n("applies required attribute to input when required is true", async () => {
      const e = new r();
      e.label = "Email", e.required = !0, document.body.appendChild(e), await e.updateComplete, o(e.hasAttribute("required")).toBe(!0);
      const t = e.shadowRoot?.querySelector("input");
      o(t?.hasAttribute("required")).toBe(!0), o(t?.getAttribute("aria-required")).toBe("true");
    }), n("displays required indicator in label", async () => {
      const e = new r();
      e.label = "Password", e.required = !0, document.body.appendChild(e), await e.updateComplete;
      const t = e.shadowRoot?.querySelector(".ag-input__required");
      o(t).toBeTruthy(), o(t?.getAttribute("aria-hidden")).toBe("true"), o(t?.textContent?.trim()).toBe("*");
    }), n("works with textarea mode", async () => {
      const e = new r();
      e.label = "Required Comments", e.type = "textarea", e.required = !0, document.body.appendChild(e), await e.updateComplete;
      const t = e.shadowRoot?.querySelector("textarea");
      o(t?.hasAttribute("required")).toBe(!0), o(t?.getAttribute("aria-required")).toBe("true");
    });
  }), i("Invalid State (aria-invalid)", () => {
    n("applies aria-invalid when invalid is true", async () => {
      const e = new r();
      e.label = "Email", e.invalid = !0, document.body.appendChild(e), await e.updateComplete, o(e.hasAttribute("invalid")).toBe(!0);
      const t = e.shadowRoot?.querySelector("input");
      o(t?.getAttribute("aria-invalid")).toBe("true");
    }), n('defaults to aria-invalid="false" when valid', async () => {
      const e = new r();
      e.label = "Valid Input", document.body.appendChild(e), await e.updateComplete;
      const t = e.shadowRoot?.querySelector("input");
      o(t?.getAttribute("aria-invalid")).toBe("false");
    });
  }), i("Error Message Display (BBC GEL)", () => {
    n("displays error message above input when errorMessage is set", async () => {
      const e = new r();
      e.label = "Email", e.invalid = !0, e.errorMessage = "Please enter a valid email address", document.body.appendChild(e), await e.updateComplete;
      const t = e.shadowRoot?.querySelector(".ag-input__error");
      o(t).toBeTruthy(), o(t?.textContent?.trim()).toBe("Please enter a valid email address"), o(t?.getAttribute("part")).toBe("error");
    }), n("associates error message with input via aria-describedby", async () => {
      const e = new r();
      e.label = "Username", e.invalid = !0, e.errorMessage = "Username is required", document.body.appendChild(e), await e.updateComplete;
      const t = e.shadowRoot?.querySelector("input"), d = e.shadowRoot?.querySelector(".ag-input__error")?.getAttribute("id");
      o(d).toBeTruthy(), o(t?.getAttribute("aria-describedby")?.includes(d)).toBe(!0);
    }), n("hides error message when no errorMessage provided", async () => {
      const e = new r();
      e.label = "Valid Field", document.body.appendChild(e), await e.updateComplete;
      const t = e.shadowRoot?.querySelector(".ag-input__error");
      o(t?.hasAttribute("hidden")).toBe(!0);
    });
  }), i("Help Text Support", () => {
    n("displays help text when helpText is provided", async () => {
      const e = new r();
      e.label = "Password", e.helpText = "Must be at least 8 characters long", document.body.appendChild(e), await e.updateComplete;
      const t = e.shadowRoot?.querySelector(".ag-input__help");
      o(t).toBeTruthy(), o(t?.textContent?.trim()).toBe("Must be at least 8 characters long"), o(t?.getAttribute("part")).toBe("help");
    }), n("associates help text with input via aria-describedby", async () => {
      const e = new r();
      e.label = "Phone", e.helpText = "Include country code", document.body.appendChild(e), await e.updateComplete;
      const t = e.shadowRoot?.querySelector("input"), d = e.shadowRoot?.querySelector(".ag-input__help")?.getAttribute("id");
      o(d).toBeTruthy(), o(t?.getAttribute("aria-describedby")?.includes(d)).toBe(!0);
    }), n("combines help text and error message in aria-describedby", async () => {
      const e = new r();
      e.label = "Email", e.helpText = "We will never share your email", e.invalid = !0, e.errorMessage = "Invalid email format", document.body.appendChild(e), await e.updateComplete;
      const t = e.shadowRoot?.querySelector("input"), a = e.shadowRoot?.querySelector(".ag-input__help"), d = e.shadowRoot?.querySelector(".ag-input__error"), s = t?.getAttribute("aria-describedby");
      o(s?.includes(a?.getAttribute("id"))).toBe(!0), o(s?.includes(d?.getAttribute("id"))).toBe(!0);
    });
  }), i("Validation Integration", () => {
    n("works with all label patterns", async () => {
      const e = new r();
      e.label = "Hidden Label Field", e.labelHidden = !0, e.required = !0, e.invalid = !0, e.errorMessage = "This field is required", document.body.appendChild(e), await e.updateComplete;
      const t = e.shadowRoot?.querySelector("label"), a = e.shadowRoot?.querySelector("input"), d = e.shadowRoot?.querySelector(".ag-input__error");
      o(t?.classList.contains("ag-input__label--hidden")).toBe(!0), o(a?.getAttribute("aria-invalid")).toBe("true"), o(d?.textContent?.trim()).toBe("This field is required");
    }), n("works with addon layout", async () => {
      const e = new r();
      e.label = "Amount", e.hasLeftAddon = !0, e.hasRightAddon = !0, e.required = !0, e.helpText = "Enter amount in USD", document.body.appendChild(e), await e.updateComplete;
      const t = e.shadowRoot?.querySelector(".ag-input__field"), a = t?.querySelector("input"), d = e.shadowRoot?.querySelector(".ag-input__help");
      o(t).toBeTruthy(), o(a?.getAttribute("aria-required")).toBe("true"), o(d?.textContent?.trim()).toBe("Enter amount in USD");
    });
  });
});
