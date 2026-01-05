import { useState } from "react";
import { ReactImage } from "agnosticui-core/image/react";
import { ReactIcon } from "agnosticui-core/icon/react";

export default function ImageReactExamples() {
  // Basic Image
  const basicImageUrl =
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=545&h=487&fit=crop&q=80";
  const [basicImageSrc, setBasicImageSrc] = useState(basicImageUrl);
  const reloadBasicImage = () => {
    setBasicImageSrc(`${basicImageUrl}&t=${new Date().getTime()}`);
  };

  // Responsive Image
  const responsiveImageUrl =
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=800&fit=crop&q=80";
  const [responsiveImageSrc, setResponsiveImageSrc] =
    useState(responsiveImageUrl);
  const reloadResponsiveImage = () => {
    setResponsiveImageSrc(`${responsiveImageUrl}&t=${new Date().getTime()}`);
  };

  // Object Fit Image
  const objectFitImageUrl =
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=545&h=487&fit=crop&q=80";
  const [objectFitImageSrc, setObjectFitImageSrc] = useState(objectFitImageUrl);
  const reloadObjectFitImage = () => {
    setObjectFitImageSrc(`${objectFitImageUrl}&t=${new Date().getTime()}`);
  };

  // Responsive Sources Image
  const responsiveSourcesImageUrl =
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=545&h=487&fit=crop&q=80";
  const [responsiveSourcesImageSrc, setResponsiveSourcesImageSrc] = useState(
    responsiveSourcesImageUrl
  );
  const reloadResponsiveSourcesImage = () => {
    setResponsiveSourcesImageSrc(
      `${responsiveSourcesImageUrl}&t=${new Date().getTime()}`
    );
  };
  const responsiveSources = [
    {
      srcset:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1400&h=787&fit=crop&q=80",
      media: "(min-width: 1024px)",
    },
    {
      srcset:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1000&h=562&fit=crop&q=80",
      media: "(min-width: 768px)",
    },
  ];

  // Fallback Image
  const fallbackImageUrl = "https://thissourcedoesnotexist.com/image.jpg";
  const [fallbackImageSrc, setFallbackImageSrc] = useState(fallbackImageUrl);
  const reloadFallbackImage = () => {
    setFallbackImageSrc(`${fallbackImageUrl}?t=${new Date().getTime()}`);
  };

  // Placeholder Image
  const placeholderImageUrl =
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=545&h=487&fit=crop&q=80&auto=format&ps=50";
  const [placeholderImageSrc, setPlaceholderImageSrc] =
    useState(placeholderImageUrl);
  const reloadPlaceholderImage = () => {
    setPlaceholderImageSrc(`${placeholderImageUrl}&t=${new Date().getTime()}`);
  };

  // Error Image
  const errorImageUrl =
    "https://thissourcedoesnotexist.com/another-broken-image.jpg";
  const [errorImageSrc, setErrorImageSrc] = useState(errorImageUrl);
  const reloadErrorImage = () => {
    setErrorImageSrc(`${errorImageUrl}?t=${new Date().getTime()}`);
  };

  // Styled Image
  const styledImageUrl =
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=545&h=487&fit=crop&q=80";
  const [styledImageSrc, setStyledImageSrc] = useState(styledImageUrl);
  const reloadStyledImage = () => {
    setStyledImageSrc(`${styledImageUrl}&t=${new Date().getTime()}`);
  };

  return (
    <div className="image-examples-container">
      <style>{`
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
      `}</style>

      <h2>Basic Image</h2>
      <p>
        A standard image with a <code>src</code> and <code>alt</code> tag. This
        example also has the <code>fade</code> prop enabled. Click the button to
        reload the image and see the effect.
      </p>
      <ReactImage
        src={basicImageSrc}
        alt="A beautiful landscape with a river and mountains."
        width={545}
        height={487}
        fade={true}
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <button onClick={reloadBasicImage} className="reload-button">
        Reload Image
      </button>
      <hr />

      <h2>Responsive Image (No Layout Shift)</h2>
      <p>
        By omitting <code>width</code> and <code>height</code> props and
        providing <code>aspectRatio</code>, the image becomes responsive while
        preventing content layout shift. Fade is also enabled here.
      </p>
      <div className="responsive-image-container">
        <ReactImage
          src={responsiveImageSrc}
          alt="A forest path leading to a mountain."
          aspectRatio="16/9"
          fade={true}
        />
      </div>
      <button onClick={reloadResponsiveImage} className="reload-button">
        Reload Image
      </button>
      <hr />

      <h2>Object Fit: Contain</h2>
      <p>
        Use <code>fit="contain"</code> to ensure the entire image is visible
        within its container without being cropped.
      </p>
      <div className="contain-fit-container">
        <ReactImage
          src={objectFitImageSrc}
          alt="A dense forest with sunlight filtering through."
          aspectRatio="4/3"
          fit="contain"
          fade={true}
        />
      </div>
      <button onClick={reloadObjectFitImage} className="reload-button">
        Reload Image
      </button>
      <hr />

      <h2>Responsive Sources with &lt;picture&gt;</h2>
      <p>
        Provide different images for different screen sizes using the{" "}
        <code>sources</code> prop. Resize your browser to see the image change.
      </p>
      <div className="responsive-image-container">
        <ReactImage
          src={responsiveSourcesImageSrc}
          alt="A responsive landscape that changes with screen size."
          aspectRatio="16/9"
          sources={responsiveSources}
          fade={true}
        />
      </div>
      <button onClick={reloadResponsiveSourcesImage} className="reload-button">
        Reload Image
      </button>
      <hr />

      <h2>Fallback Source</h2>
      <p>
        If the primary <code>src</code> is broken, the <code>fallbackSrc</code>{" "}
        will be loaded instead. The fallback will also fade in.
      </p>
      <ReactImage
        src={fallbackImageSrc}
        fallbackSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=545&h=487&fit=crop&q=80"
        alt="An image with a fallback source."
        width={545}
        height={487}
        fade={true}
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <button onClick={reloadFallbackImage} className="reload-button">
        Reload Image
      </button>
      <hr />

      <h2>Custom Placeholder Slot</h2>
      <p>Provide custom content to be displayed while the image is loading.</p>
      <ReactImage
        src={placeholderImageSrc}
        alt="A nature scene with a custom placeholder."
        width={545}
        height={487}
        style={{ maxWidth: "100%", height: "auto" }}
      >
        <div slot="placeholder" className="custom-placeholder">
          <div className="placeholder-icon">📷</div>
          <div>Loading beautiful scenery...</div>
        </div>
      </ReactImage>
      <button onClick={reloadPlaceholderImage} className="reload-button">
        Reload Image
      </button>
      <hr />

      <h2>Custom Error Slot</h2>
      <p>Display a custom message or UI when an image fails to load.</p>
      <div className="responsive-image-container">
        <ReactImage
          src={errorImageSrc}
          alt="An image with a custom error message."
          aspectRatio="4/3"
          style={{ width: "100%" }}
        >
          <div slot="error" className="custom-error">
            <div className="error-icon">
              <ReactIcon size="64" type="error" noFill>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </ReactIcon>
            </div>
            <h2 style={{ marginTop: 0 }}>
              Oops! The image could not be loaded.
            </h2>
          </div>
        </ReactImage>
      </div>
      <button onClick={reloadErrorImage} className="reload-button">
        Reload Image
      </button>
      <hr />

      <h2>Styled with CSS Class and Parts</h2>
      <p>
        Use a CSS class to apply custom styles to the component, including its
        internal parts like <code>::part(ag-img)</code>.
      </p>
      <div className="responsive-image-container">
        <ReactImage
          className="custom-styled-image"
          src={styledImageSrc}
          alt="A landscape with a custom border style."
          aspectRatio="4/3"
          fade={true}
        />
      </div>
      <button onClick={reloadStyledImage} className="reload-button">
        Reload Image
      </button>
    </div>
  );
}
