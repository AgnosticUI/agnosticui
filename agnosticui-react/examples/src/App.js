import './App.css';
// Global AgnosticUI CSS
import 'agnosticui-react/dist/common.min.css';
// Component-level CSS Modules
import 'agnosticui-react/dist/esm/index.css';
// Component
import { Button } from 'agnosticui-react';

function App() {
  return (
    <div className="App">
      <h1>AgnosticUI React (Beta) — Kitchen Sink</h1>
      <h3>Default Buttons</h3>
      <section>
        <Button isBlank onClick={() => console.log('click works')}>
          Go
        </Button>
        <Button isBlock>Go</Button>
        <Button isRounded>Go</Button>
        <Button isRaised isRounded>
          Go
        </Button>
        <Button isBordered isRounded>
          Go
        </Button>
      </section>
      <h3>Primary</h3>
      <section>
        <Button mode="primary">Go</Button>
        <Button mode="primary" isBlank>
          Go
        </Button>
        <Button mode="primary" isBlock>
          Go
        </Button>
        <Button mode="primary" isRounded>
          Go
        </Button>
        <Button mode="primary" isRaised isRounded>
          Go
        </Button>
        <Button mode="primary" isBordered isRounded>
          Go
        </Button>
      </section>
      <h3>Secondary</h3>
      <section>
        <Button mode="secondary">Go</Button>
        <Button mode="secondary" isBordered>
          Go
        </Button>
        <Button mode="secondary" isBlank>
          Go
        </Button>
        <Button mode="secondary" isBlock>
          Go
        </Button>
        <Button mode="secondary" isRounded>
          Go
        </Button>
        <Button mode="secondary" isRaised isRounded>
          Go
        </Button>
        <Button mode="secondary" isBordered isRounded>
          Go
        </Button>
      </section>
      <h3>Misc</h3>
      <section>
        <Button isDisabled>Go</Button>
        <Button mode="primary" isDisabled>
          Go
        </Button>
        <Button mode="secondary" isDisabled>
          Go
        </Button>
        <Button size="small">Go</Button>
        <Button size="large">Go</Button>
        <Button isSkinned="false">No Skin</Button>
      </section>
    </div>
  );
}

export default App;
