import { LitElement, html } from 'lit';
import 'agnosticui-core/aspect-ratio';

export class AspectRatioLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div>
        <h2>Constrained max-width</h2>
        <ag-aspect-ratio
          class="mbs4"
          .width=${4}
          .height=${3}
          .maxWidth=${400}
        >
          <div style="background:var(--ag-background-tertiary);color:var(--vp-c-text-1);width:100%;height:100%;display:flex;align-items:center;justify-content:center">
            4:3 box
          </div>
        </ag-aspect-ratio>

        <h2>Square (1:1)</h2>
        <div class="full-width">
          <ag-aspect-ratio
            class="mbs4"
            .width=${1}
            .height=${1}
            style="width:200px; margin: 0 auto;"
          >
            <div style="background:var(--ag-background-tertiary);color:var(--vp-c-text-1);width:100%;height:100%;display:flex;align-items:center;justify-content:center">
              1:1 box
            </div>
          </ag-aspect-ratio>
        </div>

        <div class="mbe32"></div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
        </div>
        <p class="mbe16">
          The aspect ratio component exposes the <code>::part(ag-aspect-ratio)</code> selector, allowing you to style the internal container with custom CSS:
        </p>

        <div class="custom-example">
          <ag-aspect-ratio
            class="mbs4"
            .width=${16}
            .height=${9}
            style="max-width: 600px;"
            aria-label="Styled aspect ratio"
          >
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
              alt="Mountain landscape"
              style="width: 100%; height: 100%; object-fit: cover;"
            />
          </ag-aspect-ratio>
        </div>

        <h2>Responsive 16:9 iframe</h2>
        <ag-aspect-ratio
          class="mbs4"
          .width=${16}
          .height=${9}
          style="max-width: 600px;"
          aria-label="16:9 iframe"
        >
          <iframe
            title="16:9 iframe"
            aria-label="16:9 iframe"
            style="width:100%;height:100%;border:0;"
            srcdoc="<!doctype html><html><head><meta charset='utf-8'><style>html,body{height:100%;margin:0}</style></head><body><div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:sans-serif;'>16:9 iframe</div></body></html>"
            frameborder="0"
          ></iframe>
        </ag-aspect-ratio>

        <style>
          .custom-example ag-aspect-ratio::part(ag-aspect-ratio) {
            border: 3px solid var(--agnostic-primary);
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            overflow: hidden;
          }
        </style>
      </div>
    `;
  }
}

customElements.define('aspect-ratio-lit-examples', AspectRatioLitExamples);
