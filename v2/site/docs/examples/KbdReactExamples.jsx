import { ReactKbd } from "agnosticui-core/kbd/react";

export default function KbdReactExamples() {
  return (
    <section>
      <div className="mbe4">
        <h2>Default</h2>
        <p className="mbs2 mbe3">Basic keyboard key representation with default styling.</p>
        <div className="stacked-mobile">
          <ReactKbd className="mie2">⌘</ReactKbd>
          <ReactKbd className="mie2">⌥</ReactKbd>
          <ReactKbd className="mie2">⇧</ReactKbd>
          <ReactKbd>⌃</ReactKbd>
        </div>
        <div className="mbs3">
          <ReactKbd className="mie5">cntrl + shift + del</ReactKbd>
          <ReactKbd>⌘ + v</ReactKbd>
        </div>
        <div className="mbs3">
          <ReactKbd size="sm" className="mie5">cntrl + shift + del</ReactKbd>
          <ReactKbd size="sm">⌘ + v</ReactKbd>
        </div>
      </div>

      <div className="mbe4">
        <h2>Variants</h2>
        <p className="mbs2 mbe3">Semantic color variants for different contexts and visual emphasis.</p>
        <div className="stacked mbe3">
          <div className="mbe2">
            <ReactKbd variant="default" className="mie2">⌘</ReactKbd>
            <ReactKbd variant="default" className="mie2">⌥</ReactKbd>
            <ReactKbd variant="default" className="mie2">⇧</ReactKbd>
            <ReactKbd variant="default">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <ReactKbd variant="primary" className="mie2">⌘</ReactKbd>
            <ReactKbd variant="primary" className="mie2">⌥</ReactKbd>
            <ReactKbd variant="primary" className="mie2">⇧</ReactKbd>
            <ReactKbd variant="primary">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <ReactKbd variant="secondary" className="mie2">⌘</ReactKbd>
            <ReactKbd variant="secondary" className="mie2">⌥</ReactKbd>
            <ReactKbd variant="secondary" className="mie2">⇧</ReactKbd>
            <ReactKbd variant="secondary">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <ReactKbd variant="info" className="mie2">⌘</ReactKbd>
            <ReactKbd variant="info" className="mie2">⌥</ReactKbd>
            <ReactKbd variant="info" className="mie2">⇧</ReactKbd>
            <ReactKbd variant="info">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <ReactKbd variant="warning" className="mie2">⌘</ReactKbd>
            <ReactKbd variant="warning" className="mie2">⌥</ReactKbd>
            <ReactKbd variant="warning" className="mie2">⇧</ReactKbd>
            <ReactKbd variant="warning">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <ReactKbd variant="success" className="mie2">⌘</ReactKbd>
            <ReactKbd variant="success" className="mie2">⌥</ReactKbd>
            <ReactKbd variant="success" className="mie2">⇧</ReactKbd>
            <ReactKbd variant="success">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <ReactKbd variant="danger" className="mie2">⌘</ReactKbd>
            <ReactKbd variant="danger" className="mie2">⌥</ReactKbd>
            <ReactKbd variant="danger" className="mie2">⇧</ReactKbd>
            <ReactKbd variant="danger">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <ReactKbd variant="error" className="mie2">⌘</ReactKbd>
            <ReactKbd variant="error" className="mie2">⌥</ReactKbd>
            <ReactKbd variant="error" className="mie2">⇧</ReactKbd>
            <ReactKbd variant="error">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <ReactKbd variant="monochrome" className="mie2">⌘</ReactKbd>
            <ReactKbd variant="monochrome" className="mie2">⌥</ReactKbd>
            <ReactKbd variant="monochrome" className="mie2">⇧</ReactKbd>
            <ReactKbd variant="monochrome">⌃</ReactKbd>
          </div>
        </div>
      </div>

      <div className="mbe4">
        <h2>Sizes</h2>
        <p className="mbs2 mbe3">Three size options to match different contexts and typography scales.</p>
        <div className="stacked">
          <div className="mbe2">
            <strong className="mie2">Small:</strong>
            <ReactKbd size="sm" className="mie2">⌘</ReactKbd>
            <ReactKbd size="sm" className="mie2">⌥</ReactKbd>
            <ReactKbd size="sm" className="mie2">⇧</ReactKbd>
            <ReactKbd size="sm">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <strong className="mie2">Medium:</strong>
            <ReactKbd size="md" className="mie2">⌘</ReactKbd>
            <ReactKbd size="md" className="mie2">⌥</ReactKbd>
            <ReactKbd size="md" className="mie2">⇧</ReactKbd>
            <ReactKbd size="md">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <strong className="mie2">Large:</strong>
            <ReactKbd size="lg" className="mie2">⌘</ReactKbd>
            <ReactKbd size="lg" className="mie2">⌥</ReactKbd>
            <ReactKbd size="lg" className="mie2">⇧</ReactKbd>
            <ReactKbd size="lg">⌃</ReactKbd>
          </div>
        </div>
      </div>

      <div className="mbe4">
        <h2>With Background</h2>
        <p className="mbs2 mbe3">Add background colors to variants for increased visual emphasis.</p>
        <div className="stacked mbe3">
          <div className="mbe2">
            <ReactKbd background={true} variant="primary" className="mie2">⌘</ReactKbd>
            <ReactKbd background={true} variant="primary" className="mie2">⌥</ReactKbd>
            <ReactKbd background={true} variant="primary" className="mie2">⇧</ReactKbd>
            <ReactKbd background={true} variant="primary">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <ReactKbd background={true} variant="secondary" className="mie2">⌘</ReactKbd>
            <ReactKbd background={true} variant="secondary" className="mie2">⌥</ReactKbd>
            <ReactKbd background={true} variant="secondary" className="mie2">⇧</ReactKbd>
            <ReactKbd background={true} variant="secondary">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <ReactKbd background={true} variant="info" className="mie2">⌘</ReactKbd>
            <ReactKbd background={true} variant="info" className="mie2">⌥</ReactKbd>
            <ReactKbd background={true} variant="info" className="mie2">⇧</ReactKbd>
            <ReactKbd background={true} variant="info">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <ReactKbd background={true} variant="warning" className="mie2">⌘</ReactKbd>
            <ReactKbd background={true} variant="warning" className="mie2">⌥</ReactKbd>
            <ReactKbd background={true} variant="warning" className="mie2">⇧</ReactKbd>
            <ReactKbd background={true} variant="warning">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <ReactKbd background={true} variant="success" className="mie2">⌘</ReactKbd>
            <ReactKbd background={true} variant="success" className="mie2">⌥</ReactKbd>
            <ReactKbd background={true} variant="success" className="mie2">⇧</ReactKbd>
            <ReactKbd background={true} variant="success">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <ReactKbd background={true} variant="danger" className="mie2">⌘</ReactKbd>
            <ReactKbd background={true} variant="danger" className="mie2">⌥</ReactKbd>
            <ReactKbd background={true} variant="danger" className="mie2">⇧</ReactKbd>
            <ReactKbd background={true} variant="danger">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <ReactKbd background={true} variant="error" className="mie2">⌘</ReactKbd>
            <ReactKbd background={true} variant="error" className="mie2">⌥</ReactKbd>
            <ReactKbd background={true} variant="error" className="mie2">⇧</ReactKbd>
            <ReactKbd background={true} variant="error">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <ReactKbd background={true} variant="monochrome" className="mie2">⌘</ReactKbd>
            <ReactKbd background={true} variant="monochrome" className="mie2">⌥</ReactKbd>
            <ReactKbd background={true} variant="monochrome" className="mie2">⇧</ReactKbd>
            <ReactKbd background={true} variant="monochrome">⌃</ReactKbd>
          </div>
        </div>
      </div>

      <div className="mbe4">
        <h2>Bordered</h2>
        <p className="mbs2 mbe3">Toggle border styling for different visual treatments.</p>
        <div className="stacked-mobile mbe3">
          <div className="mbe2">
            <strong className="mie2">With Border:</strong>
            <ReactKbd bordered={true} className="mie2">⌘</ReactKbd>
            <ReactKbd bordered={true} className="mie2">⌥</ReactKbd>
            <ReactKbd bordered={true} className="mie2">⇧</ReactKbd>
            <ReactKbd bordered={true}>⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <strong className="mie2">Without Border:</strong>
            <ReactKbd bordered={false} className="mie2">⌘</ReactKbd>
            <ReactKbd bordered={false} className="mie2">⌥</ReactKbd>
            <ReactKbd bordered={false} className="mie2">⇧</ReactKbd>
            <ReactKbd bordered={false}>⌃</ReactKbd>
          </div>
        </div>
      </div>

      <div className="mbe4">
        <h2>Combined Examples</h2>
        <p className="mbs2 mbe3">Combining multiple properties for rich presentations.</p>
        <div className="stacked">
          <div className="mbe2">
            <strong className="mie2">Medium + Primary + Background:</strong>
            <ReactKbd size="md" background={true} variant="primary" className="mie2">⌘</ReactKbd>
            <ReactKbd size="md" background={true} variant="primary" className="mie2">⌥</ReactKbd>
            <ReactKbd size="md" background={true} variant="primary" className="mie2">⇧</ReactKbd>
            <ReactKbd size="md" background={true} variant="primary">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <strong className="mie2">Large + Success + Background:</strong>
            <ReactKbd size="lg" background={true} variant="success" className="mie2">⌘</ReactKbd>
            <ReactKbd size="lg" background={true} variant="success" className="mie2">⌥</ReactKbd>
            <ReactKbd size="lg" background={true} variant="success" className="mie2">⇧</ReactKbd>
            <ReactKbd size="lg" background={true} variant="success">⌃</ReactKbd>
          </div>
          <div className="mbe2">
            <strong className="mie2">Large + Warning:</strong>
            <ReactKbd size="lg" variant="warning" className="mie2">⌘</ReactKbd>
            <ReactKbd size="lg" variant="warning" className="mie2">⌥</ReactKbd>
            <ReactKbd size="lg" variant="warning" className="mie2">⇧</ReactKbd>
            <ReactKbd size="lg" variant="warning">⌃</ReactKbd>
          </div>
        </div>
      </div>
    </section>
  );
}
