import { AgnosticDialog as a } from "./_dialog.js";
import { d as o, b as t, a as s, i, g as d } from "../../../vi.bdSIJ99Y-kNDF-H_t.js";
o("AgnosticDialog", () => {
  let e;
  t(() => {
    e = new a(), document.body.appendChild(e);
  }), s(() => {
    document.body.removeChild(e);
  }), o("NOOP", () => {
    i("should pass", async () => {
      d(!0).toBeTruthy();
    });
  });
});
