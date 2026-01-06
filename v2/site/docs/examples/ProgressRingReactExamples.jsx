import { useState, useEffect, useRef } from "react";
import { ReactProgressRing } from "agnosticui-core/progress-ring/react";
import { ReactButton } from "agnosticui-core/button/react";

export default function ProgressRingReactExamples() {
  const [animatedValue, setAnimatedValue] = useState(0);
  const animationIntervalRef = useRef(null);

  useEffect(() => {
    return () => {
      if (animationIntervalRef.current) {
        clearInterval(animationIntervalRef.current);
      }
    };
  }, []);

  const startAnimation = () => {
    if (animationIntervalRef.current) {
      clearInterval(animationIntervalRef.current);
    }

    setAnimatedValue(0);
    animationIntervalRef.current = setInterval(() => {
      setAnimatedValue((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          if (animationIntervalRef.current) {
            clearInterval(animationIntervalRef.current);
            animationIntervalRef.current = null;
          }
          return prev;
        }
      });
    }, 30);
  };

  const resetAnimation = () => {
    if (animationIntervalRef.current) {
      clearInterval(animationIntervalRef.current);
      animationIntervalRef.current = null;
    }
    setAnimatedValue(0);
  };

  return (
    <section>
      <div className="mbe4">
        <h2>Default Progress Ring</h2>
        <p className="mbs2 mbe3">A basic progress ring component.</p>
        <ReactProgressRing value={75} />
      </div>

      <div className="mbe4">
        <h2>Different Progress Values</h2>
        <p className="mbs2 mbe3">Progress rings showing various completion levels.</p>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
          <ReactProgressRing value={0} />
          <ReactProgressRing value={25} />
          <ReactProgressRing value={50} />
          <ReactProgressRing value={75} />
          <ReactProgressRing value={100} />
        </div>
      </div>

      <div className="mbe4">
        <h2>Sizes</h2>
        <p className="mbs2 mbe3">Three size options: small, medium (default), and large.</p>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
          <ReactProgressRing size="small" value={60} />
          <ReactProgressRing size="medium" value={60} />
          <ReactProgressRing size="large" value={60} />
        </div>
      </div>

      <div className="mbe4">
        <h2>Variants</h2>
        <p className="mbs2 mbe3">Color variants for different contexts.</p>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }}>
            <ReactProgressRing variant="primary" value={70} />
            <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>Primary</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <ReactProgressRing variant="success" value={70} />
            <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>Success</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <ReactProgressRing variant="warning" value={70} />
            <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>Warning</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <ReactProgressRing variant="danger" value={70} />
            <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>Danger</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <ReactProgressRing variant="info" value={70} />
            <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>Info</p>
          </div>
        </div>
      </div>

      <div className="mbe4">
        <h2>Custom Labels</h2>
        <p className="mbs2 mbe3">Override the default slot to display custom content.</p>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
          <ReactProgressRing value={45}>
            <span style={{ fontSize: "0.875rem", fontWeight: "bold" }}>45/100</span>
          </ReactProgressRing>
          <ReactProgressRing value={80} variant="success">
            <span style={{ fontSize: "1.25rem" }}>✓</span>
          </ReactProgressRing>
          <ReactProgressRing value={30} variant="warning">
            <span style={{ fontSize: "0.75rem", textAlign: "center" }}>
              Low<br />Storage
            </span>
          </ReactProgressRing>
        </div>
      </div>

      <div className="mbe4">
        <h2>No Animation</h2>
        <p className="mbs2 mbe3">
          Disable the fill animation with the <code>noAnimation</code> prop.
        </p>
        <ReactProgressRing value={65} noAnimation={true} />
      </div>

      <div className="mbe4">
        <h2>Animated Progress</h2>
        <p className="mbs2 mbe3">Progress ring with dynamic value updates.</p>
        <div>
          <ReactProgressRing value={animatedValue} variant="info" />
          <div className="mbs6">
            <ReactButton
              onClick={startAnimation}
              variant="primary"
              bordered
              grouped
            >
              Start
            </ReactButton>
            <ReactButton
              onClick={resetAnimation}
              variant="primary"
              bordered
              grouped
            >
              Reset
            </ReactButton>
          </div>
        </div>
      </div>

      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">
          Use CSS Shadow Parts to customize the component's appearance.
        </p>
        <ReactProgressRing value={85} className="custom-ring" />
      </div>

      <div className="mbe4">
        <h2>Real-world Example</h2>
        <p className="mbs2 mbe3">Progress rings in a dashboard-style layout.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1.5rem" }}>
          <div style={{ padding: "1rem", border: "1px solid #e0e0e0", borderRadius: "8px", textAlign: "center" }}>
            <h3 style={{ margin: "0 0 1rem 0", fontSize: "0.875rem" }}>Tasks Complete</h3>
            <ReactProgressRing value={85} variant="success">
              <strong>17/20</strong>
            </ReactProgressRing>
          </div>
          <div style={{ padding: "1rem", border: "1px solid #e0e0e0", borderRadius: "8px", textAlign: "center" }}>
            <h3 style={{ margin: "0 0 1rem 0", fontSize: "0.875rem" }}>Storage Used</h3>
            <ReactProgressRing value={68} variant="warning">
              <strong>68GB</strong>
            </ReactProgressRing>
          </div>
          <div style={{ padding: "1rem", border: "1px solid #e0e0e0", borderRadius: "8px", textAlign: "center" }}>
            <h3 style={{ margin: "0 0 1rem 0", fontSize: "0.875rem" }}>CPU Usage</h3>
            <ReactProgressRing value={42} variant="info">
              <strong>42%</strong>
            </ReactProgressRing>
          </div>
        </div>
      </div>
    </section>
  );
}
