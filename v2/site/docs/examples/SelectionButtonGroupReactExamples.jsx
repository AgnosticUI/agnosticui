import { useState } from 'react';
import { ReactSelectionButtonGroup } from 'agnosticui-core/selection-button-group/react';
import { ReactSelectionButton } from 'agnosticui-core/selection-button/react';

export default function SelectionButtonGroupReactExamples() {
  const [radioSelection, setRadioSelection] = useState('');
  const [checkboxSelection, setCheckboxSelection] = useState([]);

  const handleRadioChange = (e) => {
    setRadioSelection(e.detail.selectedValues[0] || '');
  };

  const handleCheckboxChange = (e) => {
    setCheckboxSelection(e.detail.selectedValues);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Radio Group */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>
          Radio Group (Single Selection)
        </h3>
        <ReactSelectionButtonGroup
          type="radio"
          name="payment-method"
          legend="Select payment method"
          shape="rounded"
          onSelectionChange={handleRadioChange}
        >
          <ReactSelectionButton value="card" label="Credit Card">
            Credit Card
          </ReactSelectionButton>
          <ReactSelectionButton value="paypal" label="PayPal">
            PayPal
          </ReactSelectionButton>
          <ReactSelectionButton value="bank" label="Bank Transfer">
            Bank Transfer
          </ReactSelectionButton>
        </ReactSelectionButtonGroup>
        <p style={{ margin: 0, fontSize: '0.875rem', color: '#666' }}>
          Selected: {radioSelection || 'None'}
        </p>
      </section>

      {/* Checkbox Group */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>
          Checkbox Group (Multiple Selection)
        </h3>
        <ReactSelectionButtonGroup
          type="checkbox"
          name="toppings"
          legend="Select toppings"
          shape="rounded"
          onSelectionChange={handleCheckboxChange}
        >
          <ReactSelectionButton value="cheese" label="Extra Cheese">
            Extra Cheese
          </ReactSelectionButton>
          <ReactSelectionButton value="pepperoni" label="Pepperoni">
            Pepperoni
          </ReactSelectionButton>
          <ReactSelectionButton value="mushrooms" label="Mushrooms">
            Mushrooms
          </ReactSelectionButton>
          <ReactSelectionButton value="olives" label="Olives">
            Olives
          </ReactSelectionButton>
        </ReactSelectionButtonGroup>
        <p style={{ margin: 0, fontSize: '0.875rem', color: '#666' }}>
          Selected: {checkboxSelection.join(', ') || 'None'}
        </p>
      </section>

      {/* Theme Variants */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Theme Variants</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Default (Primary)</p>
            <ReactSelectionButtonGroup
              type="radio"
              name="theme-default"
              legend="Default theme"
              legendHidden
              shape="rounded"
            >
              <ReactSelectionButton value="a" label="Option A">A</ReactSelectionButton>
              <ReactSelectionButton value="b" label="Option B">B</ReactSelectionButton>
            </ReactSelectionButtonGroup>
          </div>
          <div>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Success</p>
            <ReactSelectionButtonGroup
              type="radio"
              name="theme-success"
              legend="Success theme"
              legendHidden
              theme="success"
              shape="rounded"
            >
              <ReactSelectionButton value="a" label="Option A">A</ReactSelectionButton>
              <ReactSelectionButton value="b" label="Option B">B</ReactSelectionButton>
            </ReactSelectionButtonGroup>
          </div>
          <div>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Info</p>
            <ReactSelectionButtonGroup
              type="radio"
              name="theme-info"
              legend="Info theme"
              legendHidden
              theme="info"
              shape="rounded"
            >
              <ReactSelectionButton value="a" label="Option A">A</ReactSelectionButton>
              <ReactSelectionButton value="b" label="Option B">B</ReactSelectionButton>
            </ReactSelectionButtonGroup>
          </div>
          <div>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Warning</p>
            <ReactSelectionButtonGroup
              type="radio"
              name="theme-warning"
              legend="Warning theme"
              legendHidden
              theme="warning"
              shape="rounded"
            >
              <ReactSelectionButton value="a" label="Option A">A</ReactSelectionButton>
              <ReactSelectionButton value="b" label="Option B">B</ReactSelectionButton>
            </ReactSelectionButtonGroup>
          </div>
          <div>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Error</p>
            <ReactSelectionButtonGroup
              type="radio"
              name="theme-error"
              legend="Error theme"
              legendHidden
              theme="error"
              shape="rounded"
            >
              <ReactSelectionButton value="a" label="Option A">A</ReactSelectionButton>
              <ReactSelectionButton value="b" label="Option B">B</ReactSelectionButton>
            </ReactSelectionButtonGroup>
          </div>
          <div>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Monochrome</p>
            <ReactSelectionButtonGroup
              type="radio"
              name="theme-monochrome"
              legend="Monochrome theme"
              legendHidden
              theme="monochrome"
              shape="rounded"
            >
              <ReactSelectionButton value="a" label="Option A">A</ReactSelectionButton>
              <ReactSelectionButton value="b" label="Option B">B</ReactSelectionButton>
            </ReactSelectionButtonGroup>
          </div>
        </div>
      </section>

      {/* Size Variants */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Size Variants</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Small (sm)</p>
            <ReactSelectionButtonGroup
              type="radio"
              name="size-sm"
              legend="Small size"
              legendHidden
              size="sm"
              shape="rounded"
            >
              <ReactSelectionButton value="a" label="Option A">Option A</ReactSelectionButton>
              <ReactSelectionButton value="b" label="Option B">Option B</ReactSelectionButton>
            </ReactSelectionButtonGroup>
          </div>
          <div>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Medium (md) - Default</p>
            <ReactSelectionButtonGroup
              type="radio"
              name="size-md"
              legend="Medium size"
              legendHidden
              size="md"
              shape="rounded"
            >
              <ReactSelectionButton value="a" label="Option A">Option A</ReactSelectionButton>
              <ReactSelectionButton value="b" label="Option B">Option B</ReactSelectionButton>
            </ReactSelectionButtonGroup>
          </div>
          <div>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Large (lg)</p>
            <ReactSelectionButtonGroup
              type="radio"
              name="size-lg"
              legend="Large size"
              legendHidden
              size="lg"
              shape="rounded"
            >
              <ReactSelectionButton value="a" label="Option A">Option A</ReactSelectionButton>
              <ReactSelectionButton value="b" label="Option B">Option B</ReactSelectionButton>
            </ReactSelectionButtonGroup>
          </div>
        </div>
      </section>

      {/* Shape Variants */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Shape Variants</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Default (rectangular)</p>
            <ReactSelectionButtonGroup
              type="radio"
              name="shape-default"
              legend="Default shape"
              legendHidden
            >
              <ReactSelectionButton value="a" label="Option A">Option A</ReactSelectionButton>
              <ReactSelectionButton value="b" label="Option B">Option B</ReactSelectionButton>
            </ReactSelectionButtonGroup>
          </div>
          <div>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Rounded</p>
            <ReactSelectionButtonGroup
              type="radio"
              name="shape-rounded"
              legend="Rounded shape"
              legendHidden
              shape="rounded"
            >
              <ReactSelectionButton value="a" label="Option A">Option A</ReactSelectionButton>
              <ReactSelectionButton value="b" label="Option B">Option B</ReactSelectionButton>
            </ReactSelectionButtonGroup>
          </div>
          <div>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Capsule (pill)</p>
            <ReactSelectionButtonGroup
              type="radio"
              name="shape-capsule"
              legend="Capsule shape"
              legendHidden
              shape="capsule"
            >
              <ReactSelectionButton value="a" label="Option A">Option A</ReactSelectionButton>
              <ReactSelectionButton value="b" label="Option B">Option B</ReactSelectionButton>
            </ReactSelectionButtonGroup>
          </div>
        </div>
      </section>

      {/* Disabled State */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Disabled Group State</h3>
        <ReactSelectionButtonGroup
          type="radio"
          name="disabled-example"
          legend="Disabled group"
          shape="rounded"
          disabled
        >
          <ReactSelectionButton value="a" label="Option A">Option A</ReactSelectionButton>
          <ReactSelectionButton value="b" label="Option B">Option B</ReactSelectionButton>
          <ReactSelectionButton value="c" label="Option C">Option C</ReactSelectionButton>
        </ReactSelectionButtonGroup>
      </section>
      {/* Disabled State */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Disabled Individual Button State</h3>
        <ReactSelectionButtonGroup
          type="radio"
          name="disabled-buttons-example"
          legend="Disabled buttons"
          shape="rounded"
        >
          <ReactSelectionButton value="a" label="Option A">Option A</ReactSelectionButton>
          <ReactSelectionButton disabled value="b" label="Option B">Option B</ReactSelectionButton>
          <ReactSelectionButton value="c" label="Option C">Option C</ReactSelectionButton>
          <ReactSelectionButton disabled value="c" label="Option D">Option D</ReactSelectionButton>
          <ReactSelectionButton value="c" label="Option E">Option E</ReactSelectionButton>
        </ReactSelectionButtonGroup>
      </section>
    </div>
  );
}
