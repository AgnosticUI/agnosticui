/**
 * @file actions.ts
 * @description Centralized client-side event action dictionary mapping SDUI string aliases
 * straight to interactive behavioral executions, validation passes, and network posts.
 */

import { type AgNode } from '@agnosticui/schema';

/**
 * Standard client-edge event handler registry.
 * Decouples layout parsing from actionable javascript execution loops.
 */
export interface ClientActions extends Record<string, Function> {
  SUBMIT_REMEDIATION: () => void;
  [key: string]: Function;
}

/**
 * Factory constructing the complete client-edge actions matrix map.
 * @param canvasElement - The canonical HTML element representing your <ag-dynamic-renderer> canvas container.
 * @param statusLogElement - An HTML div element or selector tracking live browser telemetry logs on-screen.
 */
export function initializeClientActions(
  canvasElement: HTMLElement,
  statusLogElement: HTMLElement
): ClientActions {
  console.log('[ACTIONS_INIT] 🛠️ Assembling client-side full-duplex interactive event map...');

  const actions: ClientActions = {
    /**
     * Fired when the agent or user clicks our whitelisted AgButton trigger element.
     * Imperatively extracts the local FACE custom element values and submits updates.
     */
    SUBMIT_REMEDIATION: () => {
      console.log('\n--- INTERACTIVE ACTION EXECUTION CYCLE ---');
      console.log('[CLIENT_ACTION] 🚀 Intercepted active click token target: "SUBMIT_REMEDIATION"');
      statusLogElement.innerText = 'Status: Executing Remediation...';

      // Use the whitelisted FACE custom component selector to search for input elements in light DOM
      const cardInput = canvasElement.querySelector('ag-input') as HTMLInputElement & { value?: string };
      
      if (!cardInput) {
        console.error('[CLIENT_ACTION_ERROR] ❌ Unable to locate active ag-input payment instrument node on the canvas.');
        statusLogElement.innerText = 'Status: Error - Input Node Missing';
        return;
      }

      // Safe evaluation of input fields inside our component shadow/light DOM transitions
      const rawCardNumberValue = cardInput.value || '';
      console.log(`[CLIENT_ACTION] 🔍 Extracting context data from live input field -> Card Number: "${rawCardNumberValue}"`);

      if (rawCardNumberValue.replace(/\s/g, '').length < 16) {
        console.warn('[CLIENT_ACTION_WARN] ⚠️ Validation Failure: Card configuration string length is insufficient.');
        statusLogElement.innerText = 'Status: Invalid Card Length';
        
        // If the custom component exposes native HTML checkValidity elements, invoke it
        if (typeof cardInput.reportValidity === 'function') {
          cardInput.reportValidity();
        }
        return;
      }

      console.log('[CLIENT_ACTION] ✅ Security checks passed. Dispatching network update payload transaction block...');
      statusLogElement.innerText = 'Status: Remediation Transaction Authorized Successfully!';
      
      // Simulate real-time ledger updates
      console.log(`[CLIENT_ACTION] [LEDGER_POST] UPDATE mockBillingProfiles SET outstandingBalance = 0.00 WHERE userId = "usr_992" -> SUCCESS`);
      console.log('--- END INTERACTIVE ACTION EXECUTION CYCLE ---');
    }
  };

  return actions;
}
