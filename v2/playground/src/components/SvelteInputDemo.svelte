<script>
  import { onMount } from 'svelte';

  // Direct import of web components without wrapper - client side only
  onMount(async () => {
    if (typeof window !== 'undefined') {
      await import('agnosticui-core');
    }
  });

  let textValue = $state('');
  let emailValue = $state('user@example.com');
  let passwordValue = $state('');
  let numberValue = $state('42');
  let textareaValue = $state('This is a sample textarea content with multiple lines.');

  const handleInput = (event) => {
    const target = event.target;
    const inputElement = target.shadowRoot?.querySelector('input, textarea') || target;
    const currentValue = inputElement.value || '';
    const labelText = target.getAttribute('label') || 'Unknown Field';

    console.log(`📝 Svelte Input changed: "${labelText}" = "${currentValue}"`, {
      inputId: target.id || 'no-id',
      type: target.getAttribute('type') || 'text',
      label: labelText,
      value: currentValue,
      timestamp: new Date().toLocaleTimeString(),
      eventType: 'svelte-input-change'
    });
  };

  const handleFocus = (event) => {
    const target = event.target;
    const labelText = target.getAttribute('label') || 'Unknown Field';
    console.log(`🎯 Svelte Input focused: "${labelText}"`, {
      inputId: target.id || 'no-id',
      label: labelText,
      timestamp: new Date().toLocaleTimeString(),
      eventType: 'svelte-input-focus'
    });
  };

  const handleBlur = (event) => {
    const target = event.target;
    const inputElement = target.shadowRoot?.querySelector('input, textarea') || target;
    const currentValue = inputElement.value || '';
    const labelText = target.getAttribute('label') || 'Unknown Field';
    console.log(`👋 Svelte Input blurred: "${labelText}" final value = "${currentValue}"`, {
      inputId: target.id || 'no-id',
      label: labelText,
      value: currentValue,
      timestamp: new Date().toLocaleTimeString(),
      eventType: 'svelte-input-blur'
    });
  };
</script>

<div style="padding: 1rem;">
  <h3>Svelte + AgnosticUI Input Components</h3>

  <p style="font-size: 0.875rem; color: var(--c-text-light); margin: 0 0 1rem 0; padding: 0.5rem; background: var(--c-bg-secondary); border-radius: 4px; border: 1px solid var(--c-border);">
    💡 <strong>Console Logging:</strong> Open your browser console (<kbd>F12</kbd> → Console tab) to see input, focus, and blur events from all Svelte input examples below.
    <button onclick={() => console.log('🎯 TIP: Expand the logged objects to see how we extract input values from shadow DOM, access element attributes, and handle different input types in Svelte event handlers!')} style="color: var(--ag-primary); text-decoration: underline; background: none; border: none; cursor: pointer; padding: 0; font: inherit;">Click here</button> for event debugging tips!
  </p>

  <!-- Basic Input Types -->
  <div style="margin: 1rem 0; max-width: 600px;">
    <h4>Basic Input Types</h4>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <ag-input
      id="svelte-text-input"
      label="Text Input"
      type="text"
      value={textValue}
      placeholder="Enter some text..."
      oninput={handleInput}
      onfocus={handleFocus}
      onblur={handleBlur}
      style="margin-bottom: 1rem;">
    </ag-input>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <ag-input
      id="svelte-email-input"
      label="Email Input"
      type="email"
      value={emailValue}
      placeholder="your.email@domain.com"
      oninput={handleInput}
      onfocus={handleFocus}
      onblur={handleBlur}
      help-text="We'll never share your email"
      style="margin-bottom: 1rem;">
    </ag-input>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <ag-input
      id="svelte-password-input"
      label="Password Input"
      type="password"
      value={passwordValue}
      placeholder="Enter secure password..."
      oninput={handleInput}
      onfocus={handleFocus}
      onblur={handleBlur}
      help-text="Must be at least 8 characters"
      style="margin-bottom: 1rem;">
    </ag-input>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <ag-input
      id="svelte-number-input"
      label="Number Input"
      type="number"
      value={numberValue}
      placeholder="Enter a number..."
      oninput={handleInput}
      onfocus={handleFocus}
      onblur={handleBlur}
      style="margin-bottom: 1rem;">
    </ag-input>
  </div>

  <!-- Textarea -->
  <div style="margin: 2rem 0; max-width: 600px;">
    <h4>Textarea Example</h4>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <ag-input
      id="svelte-textarea"
      label="Textarea Input"
      type="textarea"
      rows="4"
      value={textareaValue}
      placeholder="Enter multiple lines of text..."
      oninput={handleInput}
      onfocus={handleFocus}
      onblur={handleBlur}
      help-text="This is a textarea for longer content"
      style="margin-bottom: 1rem;">
    </ag-input>
  </div>

  <!-- Input States -->
  <div style="margin: 2rem 0; max-width: 600px;">
    <h4>Input States</h4>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <ag-input
      id="svelte-required-input"
      label="Required Field"
      type="text"
      required
      placeholder="This field is required..."
      oninput={handleInput}
      onfocus={handleFocus}
      onblur={handleBlur}
      help-text="This field is required"
      style="margin-bottom: 1rem;">
    </ag-input>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <ag-input
      id="svelte-invalid-input"
      label="Invalid Input"
      type="email"
      invalid
      value="invalid-email"
      oninput={handleInput}
      onfocus={handleFocus}
      onblur={handleBlur}
      error-message="Please enter a valid email address"
      style="margin-bottom: 1rem;">
    </ag-input>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <ag-input
      id="svelte-disabled-input"
      label="Disabled Input"
      type="text"
      disabled
      value="This input is disabled"
      style="margin-bottom: 1rem;">
    </ag-input>
  </div>

  <!-- Size Variants -->
  <div style="margin: 2rem 0; max-width: 600px;">
    <h4>Size Variants</h4>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <ag-input
      id="svelte-small-input"
      label="Small Input"
      type="text"
      size="small"
      value="Small size"
      oninput={handleInput}
      style="margin-bottom: 1rem;">
    </ag-input>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <ag-input
      id="svelte-default-input"
      label="Default Input"
      type="text"
      value="Default size"
      oninput={handleInput}
      style="margin-bottom: 1rem;">
    </ag-input>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <ag-input
      id="svelte-large-input"
      label="Large Input"
      type="text"
      size="large"
      value="Large size"
      oninput={handleInput}
      style="margin-bottom: 1rem;">
    </ag-input>
  </div>

  <!-- Reactive State Demo -->
  <div style="margin: 2rem 0; max-width: 600px; padding: 1rem; border: 1px solid var(--c-border); border-radius: 4px; background: var(--c-bg-secondary);">
    <h4>Svelte 5 Reactivity Demo</h4>
    <p>Current values (reactive with Svelte 5 <code>$state()</code>):</p>
    <ul style="font-family: monospace; font-size: 0.9rem;">
      <li><strong>Text:</strong> "{textValue}"</li>
      <li><strong>Email:</strong> "{emailValue}"</li>
      <li><strong>Password:</strong> {"*".repeat(passwordValue.length)}</li>
      <li><strong>Number:</strong> {numberValue}</li>
      <li><strong>Textarea:</strong> "{textareaValue.substring(0, 50)}{textareaValue.length > 50 ? '...' : ''}"</li>
    </ul>
    <p style="font-size: 0.875rem; color: var(--c-text-light);">
      Type in the inputs above to see Svelte 5 reactivity in action! The values update automatically using <code>$state()</code> runes.
    </p>
  </div>
</div>