import { useState } from 'react';
import { WorkflowPicker } from './components/WorkflowPicker';
import { StreamingOutput } from './components/StreamingOutput';
import './App.css';

export default function App() {
  const [{ workflow, seed }, setState] = useState({ workflow: 'contact-form', seed: 0 });

  const handleSelect = (next: string) => setState({ workflow: next, seed: 0 });
  const handleRegenerate = () => setState(s => ({ ...s, seed: s.seed + 1 }));

  return (
    <div className="demo-layout">
      <header className="demo-header">
        <h1 className="demo-title">AgnosticUI — Schema-Driven UI Demo</h1>
        <p className="demo-subtitle">
          Select a workflow below. The output renders from a validated{' '}
          <code>AgNode[]</code> graph with simulated streaming.
        </p>
      </header>

      <section className="demo-picker">
        <div className="demo-picker-section">
          <WorkflowPicker onSelect={handleSelect} />
        </div>
      </section>

      <section className="demo-output">
        <div className="demo-output-header">
          <span className="demo-output-label">Generated output</span>
          <button className="demo-regenerate" onClick={handleRegenerate}>
            Regenerate
          </button>
        </div>
        <div className="demo-output-body">
          <StreamingOutput workflow={workflow} seed={seed} />
        </div>
      </section>
    </div>
  );
}
