import { LitElement, html, css } from 'lit';
import 'agnosticui-core/image';
import 'agnosticui-core/icon';

export class ImageLitExamples extends LitElement {
  static properties = {
    basicImageSrc: { type: String },
    responsiveImageSrc: { type: String },
    objectFitImageSrc: { type: String },
    responsiveSourcesImageSrc: { type: String },
    fallbackImageSrc: { type: String },
    placeholderImageSrc: { type: String },
    errorImageSrc: { type: String },
    styledImageSrc: { type: String },
  };

  static styles = css`
    .image-examples-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .image-examples-container hr {
      border: 0;
      height: 1px;
      background-color: var(--ag-border-color);
      margin-top: 1rem;
    }

    .reload-button {
      display: block;
      margin-top: 1rem;
      border: 1px solid var(--ag-border-color);
      background-color: var(--ag-background);
      color: var(--ag-text-color);
      padding: 0.5rem 1rem;
      border-radius: var(--ag-radius);
      cursor: pointer;
      width: fit-content;
    }
    .reload-button:hover {
      background-color: var(--ag-background-secondary);
    }

    .responsive-image-container {
      width: 100%;
      max-width: 800px;
    }

    .contain-fit-container {
      width: 100%;
      max-width: 800px;
      background-color: var(--ag-background-secondary);
      padding: 1rem;
      border-radius: var(--ag-radius);
    }

    .custom-placeholder,
    .custom-error {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100%;
      gap: 0.5rem;
      font-family: var(--ag-font-family-body);
    }

    .placeholder-icon,
    .error-icon {
      font-size: 2.5rem;
      line-height: 1;
    }

    .custom-error {
      background: var(--ag-danger-background);
      color: var(--ag-text-primary);
      padding: 2rem 1rem;
    }

    .custom-styled-image::part(ag-img) {
      border: 4px solid var(--ag-primary-light);
      border-radius: 16px;
      box-shadow: var(--ag-shadow-3);
    }
  `;

  constructor() {
    super();
    const basicImageUrl = 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=545&h=487&fit=crop&q=80';
    const responsiveImageUrl = 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=800&fit=crop&q=80';
    const objectFitImageUrl = 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=545&h=487&fit=crop&q=80';
    const responsiveSourcesImageUrl = 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=545&h=487&fit=crop&q=80';
    const fallbackImageUrl = 'https://thissourcedoesnotexist.com/image.jpg';
    const placeholderImageUrl = 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=545&h=487&fit=crop&q=80&auto=format&ps=50';
    const errorImageUrl = 'https://thissourcedoesnotexist.com/another-broken-image.jpg';
    const styledImageUrl = 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=545&h=487&fit=crop&q=80';

    this.basicImageSrc = basicImageUrl;
    this.responsiveImageSrc = responsiveImageUrl;
    this.objectFitImageSrc = objectFitImageUrl;
    this.responsiveSourcesImageSrc = responsiveSourcesImageUrl;
    this.fallbackImageSrc = fallbackImageUrl;
    this.placeholderImageSrc = placeholderImageUrl;
    this.errorImageSrc = errorImageUrl;
    this.styledImageSrc = styledImageUrl;

    this.basicImageUrl = basicImageUrl;
    this.responsiveImageUrl = responsiveImageUrl;
    this.objectFitImageUrl = objectFitImageUrl;
    this.responsiveSourcesImageUrl = responsiveSourcesImageUrl;
    this.placeholderImageUrl = placeholderImageUrl;
    this.styledImageUrl = styledImageUrl;
  }

  reloadBasicImage() {
    this.basicImageSrc = `${this.basicImageUrl}&t=${new Date().getTime()}`;
  }

  reloadResponsiveImage() {
    this.responsiveImageSrc = `${this.responsiveImageUrl}&t=${new Date().getTime()}`;
  }

  reloadObjectFitImage() {
    this.objectFitImageSrc = `${this.objectFitImageUrl}&t=${new Date().getTime()}`;
  }

  reloadResponsiveSourcesImage() {
    this.responsiveSourcesImageSrc = `${this.responsiveSourcesImageUrl}&t=${new Date().getTime()}`;
  }

  reloadFallbackImage() {
    this.fallbackImageSrc = `https://thissourcedoesnotexist.com/image.jpg?t=${new Date().getTime()}`;
  }

  reloadPlaceholderImage() {
    this.placeholderImageSrc = `${this.placeholderImageUrl}&t=${new Date().getTime()}`;
  }

  reloadErrorImage() {
    this.errorImageSrc = `https://thissourcedoesnotexist.com/another-broken-image.jpg?t=${new Date().getTime()}`;
  }

  reloadStyledImage() {
    this.styledImageSrc = `${this.styledImageUrl}&t=${new Date().getTime()}`;
  }

  render() {
    const responsiveSources = [
      {
        srcset: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1400&h=787&fit=crop&q=80',
        media: '(min-width: 1024px)',
      },
      {
        srcset: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1000&h=562&fit=crop&q=80',
        media: '(min-width: 768px)',
      },
    ];

    return html`
      <div class="image-examples-container">
        <h2>Basic Image</h2>
        <p>A standard image with a <code>src</code> and <code>alt</code> tag. This example also has the <code>fade</code> attribute enabled. Click the button to reload the image and see the effect.</p>
        <ag-image
          .src=${this.basicImageSrc}
          alt="A beautiful landscape with a river and mountains."
          .width=${545}
          .height=${487}
          fade
          style="max-width: 100%; height: auto;"
        ></ag-image>
        <button @click=${this.reloadBasicImage} class="reload-button">Reload Image</button>
        <hr />

        <h2>Responsive Image (No Layout Shift)</h2>
        <p>
          By omitting <code>width</code> and <code>height</code> attributes and providing <code>aspectRatio</code>, the image becomes responsive while preventing content layout shift. Fade is also enabled here.
        </p>
        <div class="responsive-image-container">
          <ag-image
            .src=${this.responsiveImageSrc}
            alt="A forest path leading to a mountain."
            aspectRatio="16/9"
            fade
          ></ag-image>
        </div>
        <button @click=${this.reloadResponsiveImage} class="reload-button">Reload Image</button>
        <hr />

        <h2>Object Fit: Contain</h2>
        <p>Use <code>fit="contain"</code> to ensure the entire image is visible within its container without being cropped.</p>
        <div class="contain-fit-container">
          <ag-image
            .src=${this.objectFitImageSrc}
            alt="A dense forest with sunlight filtering through."
            aspectRatio="4/3"
            fit="contain"
            fade
          ></ag-image>
        </div>
        <button @click=${this.reloadObjectFitImage} class="reload-button">Reload Image</button>
        <hr />

        <h2>Responsive Sources with &lt;picture&gt;</h2>
        <p>Provide different images for different screen sizes using the <code>sources</code> property. Resize your browser to see the image change.</p>
        <div class="responsive-image-container">
          <ag-image
            .src=${this.responsiveSourcesImageSrc}
            alt="A responsive landscape that changes with screen size."
            aspectRatio="16/9"
            .sources=${responsiveSources}
            fade
          ></ag-image>
        </div>
        <button @click=${this.reloadResponsiveSourcesImage} class="reload-button">Reload Image</button>
        <hr />

        <h2>Fallback Source</h2>
        <p>If the primary <code>src</code> is broken, the <code>fallbackSrc</code> will be loaded instead. The fallback will also fade in.</p>
        <ag-image
          .src=${this.fallbackImageSrc}
          fallbackSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=545&h=487&fit=crop&q=80"
          alt="An image with a fallback source."
          .width=${545}
          .height=${487}
          fade
          style="max-width: 100%; height: auto;"
        ></ag-image>
        <button @click=${this.reloadFallbackImage} class="reload-button">Reload Image</button>
        <hr />

        <h2>Custom Placeholder Slot</h2>
        <p>Provide custom content to be displayed while the image is loading.</p>
        <ag-image
          .src=${this.placeholderImageSrc}
          alt="A nature scene with a custom placeholder."
          .width=${545}
          .height=${487}
          style="max-width: 100%; height: auto;"
        >
          <div slot="placeholder" class="custom-placeholder">
            <div class="placeholder-icon">📷</div>
            <div>Loading beautiful scenery...</div>
          </div>
        </ag-image>
        <button @click=${this.reloadPlaceholderImage} class="reload-button">Reload Image</button>
        <hr />

        <h2>Custom Error Slot</h2>
        <p>Display a custom message or UI when an image fails to load.</p>
        <div class="responsive-image-container">
          <ag-image
            .src=${this.errorImageSrc}
            alt="An image with a custom error message."
            aspectRatio="4/3"
            style="width: 100%;"
          >
            <div slot="error" class="custom-error">
              <div class="error-icon">
                <ag-icon size="64" type="error" no-fill>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </ag-icon>
              </div>
              <h2 style="margin-top: 0;">Oops! The image could not be loaded.</h2>
            </div>
          </ag-image>
        </div>
        <button @click=${this.reloadErrorImage} class="reload-button">Reload Image</button>
        <hr />

        <h2>Styled with CSS Class and Parts</h2>
        <p>Use a CSS class to apply custom styles to the component, including its internal parts like <code>::part(ag-img)</code>.</p>
        <div class="responsive-image-container">
          <ag-image
            class="custom-styled-image"
            .src=${this.styledImageSrc}
            alt="A landscape with a custom border style."
            aspectRatio="4/3"
            fade
          ></ag-image>
        </div>
        <button @click=${this.reloadStyledImage} class="reload-button">Reload Image</button>
      </div>
    `;
  }
}

// Register the custom element
customElements.define('image-lit-examples', ImageLitExamples);
