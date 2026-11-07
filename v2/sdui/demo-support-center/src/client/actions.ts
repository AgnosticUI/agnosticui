/**
 * @file actions.ts
 * @description Centralized client-side event action dictionary mapping SDUI string aliases
 * straight to interactive behavioral executions, validation passes, and network posts.
 */

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
    SUBMIT_REMEDIATION: () => {
      console.log('\n--- INTERACTIVE ACTION EXECUTION CYCLE ---');
      console.log('[CLIENT_ACTION] 🚀 Intercepted active click token target: "SUBMIT_REMEDIATION"');
      statusLogElement.innerText = 'Status: Executing Remediation...';

      const cardInput = canvasElement.querySelector('ag-input') as HTMLInputElement & { value?: string; reportValidity?: () => boolean };
      
      if (!cardInput) {
        console.error('[CLIENT_ACTION_ERROR] ❌ Unable to locate active ag-input payment instrument node on the canvas.');
        statusLogElement.innerText = 'Status: Error - Input Node Missing';
        return;
      }

      const rawCardNumberValue = cardInput.value || '';
      
      // Fixed: Mask the card digits completely to prevent telemetry leakage
      const maskedCardRepresentation = rawCardNumberValue.length > 4 
        ? '*'.repeat(rawCardNumberValue.length - 4) + rawCardNumberValue.slice(-4)
        : '*'.repeat(rawCardNumberValue.length);

      console.log(`[CLIENT_ACTION] 🔍 Extracting context data from live input field -> Card Number: "${maskedCardRepresentation}"`);

      if (rawCardNumberValue.replace(/\s/g, '').length < 16) {
        console.warn('[CLIENT_ACTION_WARN] ⚠️ Validation Failure: Card configuration string length is insufficient.');
        statusLogElement.innerText = 'Status: Invalid Card Length';
        if (typeof cardInput.reportValidity === 'function') {
          cardInput.reportValidity();
        }
        return;
      }

      console.log('[CLIENT_ACTION] ✅ Security checks passed. Dispatching network update payload transaction block...');
      statusLogElement.innerText = 'Status: Remediation Transaction Authorized Successfully!';
      console.log(`[CLIENT_ACTION] [LEDGER_POST] UPDATE mockBillingProfiles SET outstandingBalance = 0.00 WHERE userId = "usr_992" -> SUCCESS`);
      console.log('--- END INTERACTIVE ACTION EXECUTION CYCLE ---');
    }
  };

  return actions;
}
