import { useState, useRef } from 'react';
import { ReactHeader } from 'agnosticui-core/header/react';
import { ReactButton } from 'agnosticui-core/button/react';
import { LlmOutput } from './components/LlmOutput';
import { SkinSwitcher } from './SkinSwitcher';
import systemPromptContent from '../SYSTEM_PROMPT.md?raw';
import './App.css';

interface ActivePrompt {
  text: string;
  key: number;
}

const PLACEHOLDER = `Describe the UI you want — for example:

"A contact form with name, email, and a message textarea. Include a submit button."

"A simple login form with email, password, and a remember-me toggle."

"A 3-step account setup: choose plan (Personal or Team), fill in profile details, then a review screen."`;

export default function App() {
  const [input, setInput] = useState('');
  const [active, setActive] = useState<ActivePrompt | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleGenerate = () => {
    const text = input.trim();
    if (!text) return;
    setActive(prev => ({ text, key: (prev?.key ?? 0) + 1 }));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') handleGenerate();
  };

  return (
    <>
      <ReactHeader>
        <a href="/" slot="logo" className="demo-brand">AgnosticUI SDUI + LLM</a>
        <nav aria-label="Demo navigation">
          <span className="demo-nav-label">Local demo — bring your own API key</span>
        </nav>
      </ReactHeader>

      <div className="demo-layout">
        <section className="demo-prompt">
          <label className="demo-prompt-label" htmlFor="ui-prompt">
            Describe the UI
          </label>
          <textarea
            id="ui-prompt"
            ref={textareaRef}
            className="demo-prompt-textarea"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={PLACEHOLDER}
            rows={5}
          />
          <div className="demo-prompt-footer">
            <span className="demo-prompt-hint">⌘ Enter to generate</span>
            <ReactButton
              variant="primary"
              shape="rounded"
              onClick={handleGenerate}
              disabled={!input.trim()}
            >
              Generate
            </ReactButton>
          </div>
        </section>

        {active && (
          <section className="demo-output">
            <div className="demo-output-header">
              <span className="demo-output-label">Generated output</span>
            </div>
            <div className="demo-output-body">
              <LlmOutput
                key={active.key}
                prompt={active.text}
                systemPrompt={systemPromptContent}
              />
            </div>
          </section>
        )}
      </div>

      <SkinSwitcher />
    </>
  );
}
