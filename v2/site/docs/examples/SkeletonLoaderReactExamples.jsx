import { ReactSkeletonLoader } from "agnosticui-core/skeleton/react";

export default function SkeletonLoaderReactExamples() {
  return (
    <section>
      <div className="mbe4">
        <h2>Text Skeleton</h2>
        <p className="mbs2 mbe3">
          Default text skeleton with subtle border radius, perfect for text placeholders.
        </p>
        <div style={{ width: '300px' }}>
          <ReactSkeletonLoader />
          <ReactSkeletonLoader style={{ marginTop: '8px' }} />
          <ReactSkeletonLoader style={{ marginTop: '8px', width: '60%' }} />
        </div>
      </div>

      <div className="mbe4">
        <h2>Circular Skeleton</h2>
        <p className="mbs2 mbe3">
          Circular variant, ideal for avatar placeholders.
        </p>
        <div
          className="flex items-center"
          style={{ gap: '16px' }}
        >
          <ReactSkeletonLoader
            variant="circular"
            width="40px"
            height="40px"
          />
          <ReactSkeletonLoader
            variant="circular"
            width="60px"
            height="60px"
          />
          <ReactSkeletonLoader
            variant="circular"
            width="80px"
            height="80px"
          />
        </div>
      </div>

      <div className="mbe4">
        <h2>Rectangular Skeleton</h2>
        <p className="mbs2 mbe3">
          Rectangular variant with no border radius, perfect for images.
        </p>
        <ReactSkeletonLoader
          variant="rectangular"
          width="300px"
          height="200px"
        />
      </div>

      <div className="mbe4">
        <h2>Rounded Skeleton</h2>
        <p className="mbs2 mbe3">
          Rounded variant with medium border radius, ideal for cards.
        </p>
        <ReactSkeletonLoader
          variant="rounded"
          width="300px"
          height="200px"
        />
      </div>

      <div className="mbe4">
        <h2>Effects</h2>
        <p className="mbs2 mbe3">
          Different animation effects: pulse (default), sheen, and none.
        </p>
        <div
          className="flex"
          style={{ gap: '24px', flexWrap: 'wrap' }}
        >
          <div>
            <h3 className="mbe2">Pulse</h3>
            <ReactSkeletonLoader
              effect="pulse"
              width="200px"
              height="100px"
              variant="rounded"
            />
          </div>
          <div>
            <h3 className="mbe2">Sheen</h3>
            <ReactSkeletonLoader
              effect="sheen"
              width="200px"
              height="100px"
              variant="rounded"
            />
          </div>
          <div>
            <h3 className="mbe2">None</h3>
            <ReactSkeletonLoader
              effect="none"
              width="200px"
              height="100px"
              variant="rounded"
            />
          </div>
        </div>
      </div>

      <div className="mbe4">
        <h2>Intensity</h2>
        <p className="mbs2 mbe3">
          Light (default) uses --ag-background-secondary, medium uses --ag-background-tertiary.
        </p>
        <div
          className="flex"
          style={{ gap: '24px', flexWrap: 'wrap' }}
        >
          <div>
            <h3 className="mbe2">Light</h3>
            <ReactSkeletonLoader
              intensity="light"
              width="200px"
              height="100px"
              variant="rounded"
            />
          </div>
          <div>
            <h3 className="mbe2">Medium</h3>
            <ReactSkeletonLoader
              intensity="medium"
              width="200px"
              height="100px"
              variant="rounded"
            />
          </div>
        </div>
      </div>

      <div className="mbe4">
        <h2>User Profile Card Loading</h2>
        <p className="mbs2 mbe3">
          Real-world example showing a loading profile card.
        </p>
        <div
          className="flex"
          style={{ gap: '16px', padding: '20px', border: '1px solid var(--ag-border)', borderRadius: 'var(--ag-radius-md)', maxWidth: '400px' }}
        >
          <ReactSkeletonLoader
            variant="circular"
            width="60px"
            height="60px"
          />
          <div style={{ flex: 1 }}>
            <ReactSkeletonLoader
              width="40%"
              height="16px"
            />
            <ReactSkeletonLoader
              width="60%"
              height="14px"
              style={{ marginTop: '8px' }}
            />
            <ReactSkeletonLoader
              width="80%"
              height="14px"
              style={{ marginTop: '8px' }}
            />
          </div>
        </div>
      </div>

      <div className="mbe4">
        <h2>Article Card Loading</h2>
        <p className="mbs2 mbe3">
          Real-world example showing a loading article card.
        </p>
        <div style={{ border: '1px solid var(--ag-border)', borderRadius: 'var(--ag-radius-md)', overflow: 'hidden', maxWidth: '350px' }}>
          <ReactSkeletonLoader
            variant="rectangular"
            width="100%"
            height="200px"
          />
          <div style={{ padding: '16px' }}>
            <ReactSkeletonLoader
              width="60%"
              height="20px"
            />
            <ReactSkeletonLoader
              width="100%"
              height="14px"
              style={{ marginTop: '12px' }}
            />
            <ReactSkeletonLoader
              width="100%"
              height="14px"
              style={{ marginTop: '8px' }}
            />
            <ReactSkeletonLoader
              width="40%"
              height="14px"
              style={{ marginTop: '8px' }}
            />
          </div>
        </div>
      </div>

      <div className="mbe4">
        <h2>List Loading</h2>
        <p className="mbs2 mbe3">
          Real-world example showing a loading list.
        </p>
        <div style={{ maxWidth: '500px' }}>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center"
              style={{ gap: '12px', marginBottom: '16px' }}
            >
              <ReactSkeletonLoader
                variant="circular"
                width="40px"
                height="40px"
              />
              <div style={{ flex: 1 }}>
                <ReactSkeletonLoader
                  width="60%"
                  height="16px"
                />
                <ReactSkeletonLoader
                  width="40%"
                  height="14px"
                  style={{ marginTop: '8px' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">
          Use CSS Shadow Parts to customize the skeleton's appearance.
        </p>
        <ReactSkeletonLoader
          className="custom-skeleton"
          width="300px"
          height="100px"
          variant="rounded"
        />
      </div>
    </section>
  );
}
