/**
 * @file actions.ts
 * @description Core Action Sanitization Layer & Single Source of Truth Registry.
 * Enforces a strict XSS boundary by matching string tokens against pre-approved keys.
 */

/**
 * Defines the contract for an immutable dictionary map of safe operational keys.
 */
export interface ActionRegistry {
  readonly [key: string]: () => void;
}

// ============================================================================
// 1. Action Token Dictionary (Single Source of Truth)
// ============================================================================

/**
 * Global application-wide registry for authorized SDUI event mappings.
 * All interactive keys emitted by the AI engine must be registered here.
 */
export const ACTION_DICTIONARY: ActionRegistry = {
  "SUBMIT_BILLING_DELTA": () => {
    console.log(`[ACTION_EXECUTION] 🔒 Secure Action Invoked: Processing billing update sequence.`);
  },
  "CANCEL_BILLING_FLOW": () => {
    console.log(`[ACTION_EXECUTION] 🔒 Secure Action Invoked: Safely aborting current billing workflow view.`);
  }
};

// ============================================================================
// 2. Functional Dispatch Core Engine
// ============================================================================

/**
 * Validates and executes an untrusted action token string against a safe local registry.
 * This is our primary light-DOM security barrier against injected script strings.
 * 
 * @param token - The unverified identifier string incoming from the client interface event.
 * @param registry - The authorized internal map of compiled javascript callback keys.
 * @returns boolean - True if the action matched a key and executed; false otherwise.
 */
export function safeDispatchAction(token: string, registry: ActionRegistry): boolean {
  console.log(`[SECURITY_AUDIT] 🔍 Inspecting incoming untrusted event token: "${token}"`);
  
  // Enforce strict key mapping check against the trusted registry object parameters
  if (token && Object.prototype.hasOwnProperty.call(registry, token)) {
    console.log(`[SECURITY_AUDIT] ✅ Token verified in dictionary. Invoking internal safe callback.`);
    registry[token]();
    return true;
  }
  
  console.error(`[SECURITY_AUDIT] ❌ SECURITY PERIMETER BREACH ATTEMPT: Blocked unmapped token: "${token}"`);
  return false;
}
