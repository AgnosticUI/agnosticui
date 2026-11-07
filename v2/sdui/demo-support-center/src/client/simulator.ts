/**
 * @file simulator.ts
 * @description Main client-edge entry driver orchestrating the live UI simulator panel.
 * Connects standard chat inputs to the SduiStreamClient and feeds extracted layout items
 * straight into the canonical <ag-dynamic-renderer> web component container.
 */

import { SduiStreamClient } from './streamClient.js';
import { type AgNode } from '@agnosticui/schema';

export interface ClientActions extends Record<string, Function> {
  SUBMIT_REMEDIATION: () => void;
}

export class LiveSimulatorController {
  private client: SduiStreamClient;
  private currentNodes: AgNode[] = [];
  private activeRunId: number = 0;

  constructor(gatewayUrl: string = '/api/chat') {
    this.client = new SduiStreamClient(gatewayUrl);
  }

  public bindSimulatorInterface(
    formElement: HTMLFormElement,
    inputElement: HTMLInputElement,
    rendererElement: HTMLElement & { nodes?: AgNode[]; resetCanvas?: () => void; actions?: ClientActions }
  ): void {
    console.log('[SIMULATOR_INIT] 🛠️ Binding interactive event controls onto simulator dashboard shell...');

    // Event Delegation Layer: Intercepts bubbling clicks crossing shadow boundaries securely
    rendererElement.addEventListener('click', (event: Event) => {
      const composePath = event.composedPath();
      
      const targetButton = composePath.find(
        (node: any) => node.tagName && node.tagName.toLowerCase() === 'ag-button'
      ) as HTMLElement | undefined;

      // Unlocked Gate: Intercept any valid ag-button configuration across the path
      if (targetButton) {
        console.log(`[SIMULATOR_DELEGATION] 🔔 Captured visual AgButton click target component match.`);
        
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

      this.activeRunId++;
      const currentRunId = this.activeRunId;

      console.log(`\n--- START LIVE SSE SIMULATION CYCLE [Run ID: ${currentRunId}] ---`);
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
            if (currentRunId !== this.activeRunId) return;
            this.currentNodes.push(incomingNode);
            rendererElement.nodes = [...this.currentNodes];
          },
          () => {}
        );
      } catch (err) {
        console.error('[SIMULATOR_CRITICAL] Exception caught driving interactive ingestion handshake:', err);
      }
    });
  }

  public getAccumulatedNodes(): AgNode[] {
    return this.currentNodes;
  }
}
