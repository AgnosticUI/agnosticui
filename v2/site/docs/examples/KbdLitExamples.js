import { LitElement, html } from 'lit';
import 'agnosticui-core/kbd';

export class KbdLitExamples extends LitElement {
  render() {
    return html`
      <section>
        <div class="mbe4">
          <h2>Default</h2>
          <p class="mbs2 mbe3">Basic keyboard key representation with default styling.</p>
          <div class="stacked-mobile">
            <ag-kbd class="mie2">⌘</ag-kbd>
            <ag-kbd class="mie2">⌥</ag-kbd>
            <ag-kbd class="mie2">⇧</ag-kbd>
            <ag-kbd>⌃</ag-kbd>
          </div>
          <div class="mbs3">
            <ag-kbd class="mie5">cntrl + shift + del</ag-kbd>
            <ag-kbd>⌘ + v</ag-kbd>
          </div>
          <div class="mbs3">
            <ag-kbd size="sm" class="mie5">cntrl + shift + del</ag-kbd>
            <ag-kbd size="sm">⌘ + v</ag-kbd>
          </div>
        </div>

        <div class="mbe4">
          <h2>Variants</h2>
          <p class="mbs2 mbe3">Semantic color variants for different contexts and visual emphasis.</p>
          <div class="stacked mbe3">
            <div class="mbe2">
              <ag-kbd variant="default" class="mie2">⌘</ag-kbd>
              <ag-kbd variant="default" class="mie2">⌥</ag-kbd>
              <ag-kbd variant="default" class="mie2">⇧</ag-kbd>
              <ag-kbd variant="default">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd variant="primary" class="mie2">⌘</ag-kbd>
              <ag-kbd variant="primary" class="mie2">⌥</ag-kbd>
              <ag-kbd variant="primary" class="mie2">⇧</ag-kbd>
              <ag-kbd variant="primary">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd variant="secondary" class="mie2">⌘</ag-kbd>
              <ag-kbd variant="secondary" class="mie2">⌥</ag-kbd>
              <ag-kbd variant="secondary" class="mie2">⇧</ag-kbd>
              <ag-kbd variant="secondary">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd variant="info" class="mie2">⌘</ag-kbd>
              <ag-kbd variant="info" class="mie2">⌥</ag-kbd>
              <ag-kbd variant="info" class="mie2">⇧</ag-kbd>
              <ag-kbd variant="info">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd variant="warning" class="mie2">⌘</ag-kbd>
              <ag-kbd variant="warning" class="mie2">⌥</ag-kbd>
              <ag-kbd variant="warning" class="mie2">⇧</ag-kbd>
              <ag-kbd variant="warning">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd variant="success" class="mie2">⌘</ag-kbd>
              <ag-kbd variant="success" class="mie2">⌥</ag-kbd>
              <ag-kbd variant="success" class="mie2">⇧</ag-kbd>
              <ag-kbd variant="success">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd variant="danger" class="mie2">⌘</ag-kbd>
              <ag-kbd variant="danger" class="mie2">⌥</ag-kbd>
              <ag-kbd variant="danger" class="mie2">⇧</ag-kbd>
              <ag-kbd variant="danger">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd variant="error" class="mie2">⌘</ag-kbd>
              <ag-kbd variant="error" class="mie2">⌥</ag-kbd>
              <ag-kbd variant="error" class="mie2">⇧</ag-kbd>
              <ag-kbd variant="error">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd variant="monochrome" class="mie2">⌘</ag-kbd>
              <ag-kbd variant="monochrome" class="mie2">⌥</ag-kbd>
              <ag-kbd variant="monochrome" class="mie2">⇧</ag-kbd>
              <ag-kbd variant="monochrome">⌃</ag-kbd>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>Sizes</h2>
          <p class="mbs2 mbe3">Three size options to match different contexts and typography scales.</p>
          <div class="stacked">
            <div class="mbe2">
              <strong class="mie2">Small:</strong>
              <ag-kbd size="sm" class="mie2">⌘</ag-kbd>
              <ag-kbd size="sm" class="mie2">⌥</ag-kbd>
              <ag-kbd size="sm" class="mie2">⇧</ag-kbd>
              <ag-kbd size="sm">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <strong class="mie2">Medium:</strong>
              <ag-kbd size="md" class="mie2">⌘</ag-kbd>
              <ag-kbd size="md" class="mie2">⌥</ag-kbd>
              <ag-kbd size="md" class="mie2">⇧</ag-kbd>
              <ag-kbd size="md">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <strong class="mie2">Large:</strong>
              <ag-kbd size="lg" class="mie2">⌘</ag-kbd>
              <ag-kbd size="lg" class="mie2">⌥</ag-kbd>
              <ag-kbd size="lg" class="mie2">⇧</ag-kbd>
              <ag-kbd size="lg">⌃</ag-kbd>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>With Background</h2>
          <p class="mbs2 mbe3">Add background colors to variants for increased visual emphasis.</p>
          <div class="stacked mbe3">
            <div class="mbe2">
              <ag-kbd background variant="primary" class="mie2">⌘</ag-kbd>
              <ag-kbd background variant="primary" class="mie2">⌥</ag-kbd>
              <ag-kbd background variant="primary" class="mie2">⇧</ag-kbd>
              <ag-kbd background variant="primary">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd background variant="secondary" class="mie2">⌘</ag-kbd>
              <ag-kbd background variant="secondary" class="mie2">⌥</ag-kbd>
              <ag-kbd background variant="secondary" class="mie2">⇧</ag-kbd>
              <ag-kbd background variant="secondary">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd background variant="info" class="mie2">⌘</ag-kbd>
              <ag-kbd background variant="info" class="mie2">⌥</ag-kbd>
              <ag-kbd background variant="info" class="mie2">⇧</ag-kbd>
              <ag-kbd background variant="info">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd background variant="warning" class="mie2">⌘</ag-kbd>
              <ag-kbd background variant="warning" class="mie2">⌥</ag-kbd>
              <ag-kbd background variant="warning" class="mie2">⇧</ag-kbd>
              <ag-kbd background variant="warning">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd background variant="success" class="mie2">⌘</ag-kbd>
              <ag-kbd background variant="success" class="mie2">⌥</ag-kbd>
              <ag-kbd background variant="success" class="mie2">⇧</ag-kbd>
              <ag-kbd background variant="success">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd background variant="danger" class="mie2">⌘</ag-kbd>
              <ag-kbd background variant="danger" class="mie2">⌥</ag-kbd>
              <ag-kbd background variant="danger" class="mie2">⇧</ag-kbd>
              <ag-kbd background variant="danger">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd background variant="error" class="mie2">⌘</ag-kbd>
              <ag-kbd background variant="error" class="mie2">⌥</ag-kbd>
              <ag-kbd background variant="error" class="mie2">⇧</ag-kbd>
              <ag-kbd background variant="error">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <ag-kbd background variant="monochrome" class="mie2">⌘</ag-kbd>
              <ag-kbd background variant="monochrome" class="mie2">⌥</ag-kbd>
              <ag-kbd background variant="monochrome" class="mie2">⇧</ag-kbd>
              <ag-kbd background variant="monochrome">⌃</ag-kbd>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>Bordered</h2>
          <p class="mbs2 mbe3">Toggle border styling for different visual treatments.</p>
          <div class="stacked-mobile mbe3">
            <div class="mbe2">
              <strong class="mie2">With Border:</strong>
              <ag-kbd bordered class="mie2">⌘</ag-kbd>
              <ag-kbd bordered class="mie2">⌥</ag-kbd>
              <ag-kbd bordered class="mie2">⇧</ag-kbd>
              <ag-kbd bordered>⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <strong class="mie2">Without Border:</strong>
              <ag-kbd .bordered=${false} class="mie2">⌘</ag-kbd>
              <ag-kbd .bordered=${false} class="mie2">⌥</ag-kbd>
              <ag-kbd .bordered=${false} class="mie2">⇧</ag-kbd>
              <ag-kbd .bordered=${false}>⌃</ag-kbd>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>Combined Examples</h2>
          <p class="mbs2 mbe3">Combining multiple properties for rich presentations.</p>
          <div class="stacked">
            <div class="mbe2">
              <strong class="mie2">Medium + Primary + Background:</strong>
              <ag-kbd size="md" background variant="primary" class="mie2">⌘</ag-kbd>
              <ag-kbd size="md" background variant="primary" class="mie2">⌥</ag-kbd>
              <ag-kbd size="md" background variant="primary" class="mie2">⇧</ag-kbd>
              <ag-kbd size="md" background variant="primary">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <strong class="mie2">Large + Success + Background:</strong>
              <ag-kbd size="lg" background variant="success" class="mie2">⌘</ag-kbd>
              <ag-kbd size="lg" background variant="success" class="mie2">⌥</ag-kbd>
              <ag-kbd size="lg" background variant="success" class="mie2">⇧</ag-kbd>
              <ag-kbd size="lg" background variant="success">⌃</ag-kbd>
            </div>
            <div class="mbe2">
              <strong class="mie2">Large + Warning:</strong>
              <ag-kbd size="lg" variant="warning" class="mie2">⌘</ag-kbd>
              <ag-kbd size="lg" variant="warning" class="mie2">⌥</ag-kbd>
              <ag-kbd size="lg" variant="warning" class="mie2">⇧</ag-kbd>
              <ag-kbd size="lg" variant="warning">⌃</ag-kbd>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

// Register the custom element
customElements.define('kbd-lit-examples', KbdLitExamples);
