
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ag-example-icon',
  template: `
  <style>
    svg {
      color: "getColor";
      display: flex;
    }
  </style>
  <svg
    [class] = "utilityClasses"
    xmlns = "http://www.w3.org/2000/svg"
    height = "24"
    viewBox = "0 0 24 24"
    width = "24"
  >
  <path
    d="M0 0h24v24H0z"
    fill = "none"
  />
  <path
    fill="currentColor"
    d = "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
  />
  </svg>`
})
export class IconExampleComponent {
  @Input() utilityClasses = '';
  @Input() iconType = '';
  public get getColor() {
    switch (this.iconType) {
      case "warning":
        return "var(--agnostic-warning-border-accent)";
      case "info":
        return "var(--agnostic-primary-dark)";
      case "success":
        return "var(--agnostic-action-dark)";
      case "error":
        return "var(--agnostic-error-dark)";
      default:
        return "var(--agnostic-gray-mid-dark)";
    }
  }
}
