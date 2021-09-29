import logo from './logo.svg';
import './App.css';
import 'agnosticui-react/dist/common.min.css';
import { Button } from 'agnosticui-react';

function App() {
  return (
    <div className="App">
      <section>
        <Button isBlank>Go</Button>
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
    </div>
  );
}

export default App;
