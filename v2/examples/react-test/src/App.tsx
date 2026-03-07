import './App.css'
import { ReactButton } from './components/ag/Button/react/ReactButton';
import { ReactAlert } from './components/ag/Alert/react/ReactAlert';

function App() {
  return (
    <main style={{ padding: '20px' }}>
      <h1>AgnosticUI React Smoke Test</h1>
      <ReactButton variant="primary" shape="rounded">Hello Button</ReactButton>
      <ReactAlert variant="success">Hello Alert</ReactAlert>
    </main>
  );
}

export default App;
