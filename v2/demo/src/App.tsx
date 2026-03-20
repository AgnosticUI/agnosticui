import { useState } from 'react';
import { ReactButton } from 'agnosticui-core/button/react';
import { ReactHeader } from 'agnosticui-core/header/react';
import { WorkflowPicker } from './components/WorkflowPicker';
import { StreamingOutput } from './components/StreamingOutput';
import './App.css';

export default function App() {
  const [{ workflow, seed }, setState] = useState({ workflow: 'contact-form', seed: 0 });

  const handleSelect = (next: string) => setState({ workflow: next, seed: 0 });
  const handleRegenerate = () => setState(s => ({ ...s, seed: s.seed + 1 }));

  return (
    <>
      <ReactHeader>
        <a href="/" slot="logo" className="demo-brand">AgnosticUI SDUI</a>
        <nav aria-label="Demo navigation">
          <span className="demo-nav-label">Schema-Driven UI Demo</span>
        </nav>
      </ReactHeader>
      <div className="demo-layout">

      <section className="demo-picker">
        <div className="demo-picker-section">
          <WorkflowPicker onSelect={handleSelect} />
        </div>
      </section>

      <section className="demo-output">
        <div className="demo-output-header">
          <span className="demo-output-label">Generated output</span>
          <ReactButton shape="rounded" onClick={handleRegenerate}>
            Regenerate
          </ReactButton>
        </div>
        <div className="demo-output-body">
          <StreamingOutput workflow={workflow} seed={seed} />
        </div>
      </section>
    </div>
    </>
  );
}
