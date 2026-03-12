/**
 * SMOKE TEST APP — keep this minimal.
 *
 * This app exists solely to support Playwright smoke tests in CI. Rendering
 * too many Lit custom elements simultaneously causes Playwright's isolated
 * context to hang indefinitely. Only add components here if you also update
 * the smoke tests. Do NOT repurpose this app as a component showcase.
 */
import { ReactButton } from './components/ag/Button/react/ReactButton';
import { ReactAlert } from './components/ag/Alert/react/ReactAlert';

function App() {
  return (
    <>
      <ReactButton>Button</ReactButton>
      <ReactAlert>Alert</ReactAlert>
    </>
  );
}

export default App;
