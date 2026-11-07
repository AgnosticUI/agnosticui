/**
 * @file simulator.ts
 * @description Main client-edge entry driver orchestrating the live UI simulator panel.
 * Connects standard chat inputs to the SduiStreamClient and feeds extracted layout items
 * straight into the canonical <ag-dynamic-renderer> web component container.
 * Includes defensive event delegation fallback handlers to guarantee event action firing.
 */

import { SduiStreamClient } from './streamClient.js';
import { type AgNode } from '@agnosticui/schema';

export class LiveSimulatorController {
  private client: SduiStreamClient;
  private currentNodes: AgNode[] = [];

  constructor(gatewayUrl: string = '/api/chat') {
    this.client = new SduiStreamClient(gatewayUrl);
  }

  /**
   * Initializes the dashboard interface panel handlers.
   * @param formElement - The HTML form element capturing prompt text submissions.
   * @param inputElement - The HTML text input area containing the customer ticket string.
   * @param rendererElement - The canonical custom web component canvas instance (<ag-dynamic-renderer>).
   */
  public bindSimulatorInterface(
    formElement: HTMLFormElement,
    inputElement: HTMLInputElement,
    rendererElement: HTMLElement & { nodes?: AgNode[]; resetCanvas?: () => void; actions?: any }
  ): void {
    console.log('[SIMULATOR_INIT] 🛠️ Binding interactive event controls onto simulator dashboard shell...');

    // Event Delegation Layer: Guarantees button actions fire even if framework property cycles lag
    rendererElement.addEventListener('click', (event: Event) => {
      const composePath = event.composedPath();
      
      // Traverse the composed path array to find any AgButton components hidden behind shadow roots
      const targetButton = composePath.find(
        (node: any) => node.tagName && node.tagName.toLowerCase() === 'ag-button'
      ) as HTMLElement | undefined;

      if (targetButton) {
        console.log(`[SIMULATOR_DELEGATION] 🔔 Captured visual AgButton click target. ID reference: "${targetButton.id}"`);
        
        // Extract the explicit interactive handler dictionary mapped onto the renderer container
        const attachedActions = rendererElement.actions;
        if (attachedActions && typeof attachedActions.SUBMIT_REMEDIATION === 'function') {
          attachedActions.SUBMIT_REMEDIATION();
        }
      }
    });

    formElement.addEventListener('submit', async (event) => {
      event.preventDefault();
      
      const userPromptText = inputElement.value.trim();
      if (!userPromptText) {
        console.warn('[SIMULATOR_WARN] ⚠️ Execution aborted: Prompt submission string container is empty.');
        return;
      }

      console.log(`\n--- START LIVE SSE SIMULATION CYCLE ---`);
      console.log(`[SIMULATOR_EXEC] Ingesting prompt ticket transaction: "${userPromptText}"`);

      this.currentNodes = [];
      if (typeof rendererElement.resetCanvas === 'function') {
        rendererElement.resetCanvas();
      } else {
        rendererElement.nodes = [];
      }

      try {
        await this.client.fetchUiStream(
          userPromptText,
          (incomingNode: AgNode) => {
            console.log(`[SIMULATOR_RENDER] 📥 Appending extracted core element into active layout canvas [ID: ${incomingNode.id}]`);
            this.currentNodes.push(incomingNode);
            rendererElement.nodes = [...this.currentNodes];
          },
          (networkStatus) => {
            console.log(`[SIMULATOR_TELEMETRY] Pipeline connection status updated: ${networkStatus}`);
          }
        );
        console.log(`--- END LIVE SSE SIMULATION CYCLE (SUCCESSFUL) ---`);
      } catch (err) {
        console.error('[SIMULATOR_CRITICAL] Exception caught driving interactive ingestion handshake:', err);
      }
    });
  }

  /**
   * Diagnostic inspection hook returning a snapshot mirror of the locally accumulated layout graph nodes.
   */
  public getAccumulatedNodes(): AgNode[] {
    return this.currentNodes;
  }
}
