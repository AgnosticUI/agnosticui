import React, { useState, useEffect } from 'react';
import { ReactDialog, DialogHeader, DialogFooter } from 'agnosticui-core/dialog/react';

// Import web components to ensure they're registered
import 'agnosticui-core';

const ReactDialogDemo: React.FC = () => {
  const [isReady, setIsReady] = useState(false);
  const [isMainDialogOpen, setIsMainDialogOpen] = useState(false);
  const [isSimpleDialogOpen, setIsSimpleDialogOpen] = useState(false);
  const [isCustomDialogOpen, setIsCustomDialogOpen] = useState(false);

  useEffect(() => {
    const waitForComponents = async () => {
      try {
        await customElements.whenDefined('ag-dialog');
        setIsReady(true);
      } catch (error) {
        console.error('Error waiting for ag-dialog component:', error);
        setIsReady(true);
      }
    };

    waitForComponents();
  }, []);

  if (!isReady) {
    return <div>Loading Dialog components...</div>;
  }

  const handleDialogOpen = () => {
    console.log('🗨️ React Dialog opened');
  };

  const handleDialogClose = () => {
    console.log('🗨️ React Dialog closed');
  };

  const handleDialogCancel = () => {
    console.log('🗨️ React Dialog cancelled (ESC/backdrop)');
  };

  const handleButtonClick = (buttonName: string) => {
    console.log(`🔘 React Dialog Button clicked: "${buttonName}"`);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h3>React + AgnosticUI Dialog Integration</h3>

      <p style={{
        fontSize: '0.875rem',
        color: 'var(--c-text-light)',
        margin: '0 0 1rem 0',
        padding: '0.5rem',
        background: 'var(--c-bg-secondary)',
        borderRadius: '4px',
        border: '1px solid var(--c-border)'
      }}>
        💡 <strong>Console Logging:</strong> Open your browser console (<kbd>F12</kbd> → Console tab) to see dialog events from all React examples below.
        <button
          onClick={() => console.log('🎯 TIP: React wrapper provides proper TypeScript types and React-style event handling!')}
          style={{
            color: 'var(--ag-primary)',
            textDecoration: 'underline',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0',
            font: 'inherit'
          }}
        >
          Click here
        </button> for React integration tips!
      </p>

      {/* Dialog Trigger Buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', margin: '1rem 0' }}>
        <button
          onClick={() => setIsMainDialogOpen(true)}
          style={{
            padding: '0.5rem 1rem',
            background: 'var(--ag-primary)',
            color: 'white',
            border: 'none',
            borderRadius: '0.375rem',
            cursor: 'pointer'
          }}
        >
          Open Main Dialog
        </button>

        <button
          onClick={() => setIsSimpleDialogOpen(true)}
          style={{
            padding: '0.5rem 1rem',
            background: 'transparent',
            color: 'var(--ag-primary)',
            border: '1px solid var(--ag-primary)',
            borderRadius: '0.375rem',
            cursor: 'pointer'
          }}
        >
          Open Simple Dialog
        </button>

        <button
          onClick={() => setIsCustomDialogOpen(true)}
          style={{
            padding: '0.5rem 1rem',
            background: 'transparent',
            color: 'var(--c-text)',
            border: '1px solid var(--c-border)',
            borderRadius: '0.375rem',
            cursor: 'pointer'
          }}
        >
          Open Custom Dialog
        </button>
      </div>

      {/* Main Dialog with Rich Content */}
      <ReactDialog
        open={isMainDialogOpen}
        heading="React Dialog Demo"
        description="This dialog demonstrates the ReactDialog wrapper component with TypeScript support."
        showCloseButton={true}
        onDialogOpen={handleDialogOpen}
        onDialogClose={handleDialogClose}
        onDialogCancel={handleDialogCancel}
      >
        <div style={{ margin: '1rem 0' }}>
          <h4>React + AgnosticUI Integration</h4>
          <p>This dialog showcases the ReactDialog wrapper with:</p>
          <ul>
            <li>Full TypeScript support with proper types</li>
            <li>React-style event handlers (onDialogOpen, onDialogClose, etc.)</li>
            <li>Familiar React props interface</li>
            <li>Perfect React state integration</li>
            <li>All accessibility features maintained</li>
          </ul>

          <p><strong>Features demonstrated:</strong></p>
          <ul>
            <li>Controlled open state with React useState</li>
            <li>TypeScript event handlers</li>
            <li>Close button functionality</li>
            <li>Interactive content within dialog</li>
          </ul>
        </div>

        <DialogFooter>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
            <button
              onClick={() => {
                handleButtonClick('Cancel Action');
                setIsMainDialogOpen(false);
              }}
              style={{
                padding: '0.5rem 1rem',
                background: 'transparent',
                color: 'var(--ag-primary)',
                border: '1px solid var(--ag-primary)',
                borderRadius: '0.375rem',
                cursor: 'pointer'
              }}
            >
              Cancel Action
            </button>

            <button
              onClick={() => setIsMainDialogOpen(false)}
              style={{
                padding: '0.5rem 1rem',
                background: 'var(--ag-primary)',
                color: 'white',
                border: 'none',
                borderRadius: '0.375rem',
                cursor: 'pointer'
              }}
            >
              Confirm & Close
            </button>
          </div>
        </DialogFooter>
      </ReactDialog>

      {/* Simple Dialog */}
      <ReactDialog
        open={isSimpleDialogOpen}
        heading="Simple React Confirmation"
        closeOnEscape={true}
        closeOnBackdrop={true}
        onDialogOpen={handleDialogOpen}
        onDialogClose={handleDialogClose}
        onDialogCancel={handleDialogCancel}
      >
        <p>This is a simple confirmation dialog using the ReactDialog wrapper.</p>
        <p><strong>Try:</strong> Press ESC key or click outside to close.</p>

        <DialogFooter>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '1rem' }}>
            <button
              onClick={() => setIsSimpleDialogOpen(false)}
              style={{
                padding: '0.5rem 1rem',
                background: 'transparent',
                color: 'var(--ag-primary)',
                border: '1px solid var(--ag-primary)',
                borderRadius: '0.375rem',
                cursor: 'pointer'
              }}
            >
              Cancel
            </button>

            <button
              onClick={() => setIsSimpleDialogOpen(false)}
              style={{
                padding: '0.5rem 1rem',
                background: 'var(--ag-primary)',
                color: 'white',
                border: 'none',
                borderRadius: '0.375rem',
                cursor: 'pointer'
              }}
            >
              OK
            </button>
          </div>
        </DialogFooter>
      </ReactDialog>

      {/* Custom Dialog with Slots */}
      <ReactDialog
        open={isCustomDialogOpen}
        closeOnEscape={false}
        closeOnBackdrop={false}
        onDialogOpen={handleDialogOpen}
        onDialogClose={handleDialogClose}
        onDialogCancel={handleDialogCancel}
      >
        <DialogHeader>
          <h2 style={{ margin: '0', color: 'var(--ag-primary)' }}>
            ⚛️ Custom React Header
          </h2>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.875rem', color: 'var(--c-text-light)' }}>
            This uses the DialogHeader component for custom header content
          </p>
        </DialogHeader>

        <div style={{ margin: '1rem 0' }}>
          <p>This dialog demonstrates:</p>
          <ul>
            <li><strong>Custom header component</strong> - using DialogHeader</li>
            <li><strong>Disabled ESC/backdrop</strong> - must use buttons to close</li>
            <li><strong>TypeScript support</strong> - full type safety</li>
            <li><strong>React patterns</strong> - familiar component composition</li>
          </ul>

          <div style={{
            background: 'var(--c-bg-secondary)',
            padding: '1rem',
            borderRadius: '4px',
            border: '1px solid var(--c-border)',
            margin: '1rem 0'
          }}>
            <p style={{ margin: '0', fontSize: '0.875rem' }}>
              <strong>Note:</strong> ESC key and backdrop clicks are disabled for this dialog.
              You must use the action buttons below to close it.
            </p>
          </div>
        </div>

        <DialogFooter>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <button
                onClick={() => handleButtonClick('Help')}
                style={{
                  padding: '0.5rem 1rem',
                  background: 'transparent',
                  color: 'var(--c-text)',
                  border: '1px solid var(--c-border)',
                  borderRadius: '0.375rem',
                  cursor: 'pointer'
                }}
              >
                Help
              </button>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={() => setIsCustomDialogOpen(false)}
                style={{
                  padding: '0.5rem 1rem',
                  background: 'transparent',
                  color: 'var(--ag-primary)',
                  border: '1px solid var(--ag-primary)',
                  borderRadius: '0.375rem',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>

              <button
                onClick={() => setIsCustomDialogOpen(false)}
                style={{
                  padding: '0.5rem 1rem',
                  background: 'var(--ag-danger)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.375rem',
                  cursor: 'pointer'
                }}
              >
                Delete
              </button>

              <button
                onClick={() => setIsCustomDialogOpen(false)}
                style={{
                  padding: '0.5rem 1rem',
                  background: 'var(--ag-primary)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.375rem',
                  cursor: 'pointer'
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </DialogFooter>
      </ReactDialog>

      {/* Implementation Notes */}
      <div style={{
        margin: '2rem 0',
        padding: '1rem',
        background: 'var(--c-bg-secondary)',
        borderRadius: '4px',
        border: '1px solid var(--c-border)'
      }}>
        <h4 style={{ marginTop: '0' }}>React Implementation Notes</h4>
        <p>This React dialog integration demonstrates:</p>
        <ul>
          <li><strong>ReactDialog wrapper</strong> - provides React-friendly API</li>
          <li><strong>TypeScript support</strong> - full type safety and IntelliSense</li>
          <li><strong>React state integration</strong> - works with useState, useReducer, etc.</li>
          <li><strong>Component composition</strong> - DialogHeader and DialogFooter components</li>
          <li><strong>Event handling</strong> - React-style event handlers</li>
          <li><strong>Accessibility preserved</strong> - all web component features maintained</li>
        </ul>

        <p>
          <strong>Why use the wrapper?</strong> The ReactDialog wrapper provides a familiar React API
          with TypeScript support while maintaining all the accessibility and performance benefits
          of the underlying web component.
        </p>
      </div>
    </div>
  );
};

export default ReactDialogDemo;