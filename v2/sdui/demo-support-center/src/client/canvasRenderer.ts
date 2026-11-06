// v2/sdui/demo-support-center/src/client/canvasRenderer.ts

import { type AgNode } from './index.js';
import { isNodeVocabularyValid } from './vocabularyGuard.js';

export class AgDynamicRenderer {
  private targetContainer: HTMLElement;

  /**
   * Initializes our stateless real-time SDUI rendering canvas.
   * @param containerElement - The parent target wrapper container within the active DOM document tree.
   */
  constructor(containerElement: HTMLElement) {
    this.targetContainer = containerElement;
  }

  /**
   * Safe-wipes all currently painted sub-elements inside the layout canvas container.
   */
  public resetCanvas(): void {
    console.log('[RENDER_LOG] 🧹 Resetting active DOM canvas layout tree...');
    this.targetContainer.innerHTML = '';
  }

  /**
   * Validates and mounts a single incoming streaming component node directly onto the canvas.
   * @param node - An unverified parsed schema object arriving from the network loop.
   */
  public appendNodeToCanvas(node: unknown): void {
    console.log('\n--- START RENDER PROCESS FLOW ---');
    
    if (!isNodeVocabularyValid(node)) {
      console.warn('[RENDER_WARN] 🛡️ Render operation aborted: Input layout object failed verification check.');
      return;
    }

    const verifiedNode = node as AgNode;
    console.log(`[RENDER_EXEC] Compiling safe element for verified component tag: "${verifiedNode.component}"`);

    const elementWrapper = document.createElement('div');
    elementWrapper.setAttribute('data-agnode-id', verifiedNode.id);
    // Bind modern semantic BEM architectural target classes instead of Tailwind classes
    elementWrapper.className = `ag-sdui-node ag-component-${verifiedNode.component.toLowerCase()}`;

    switch (verifiedNode.component) {
      case 'AgCard': {
        elementWrapper.className += ' ag-card';
        if (verifiedNode.props?.title) {
          const heading = document.createElement('h3');
          heading.className = 'ag-card-title';
          heading.textContent = String(verifiedNode.props.title);
          elementWrapper.appendChild(heading);
        }
        break;
      }

      case 'AgInput': {
        elementWrapper.className += ' ag-input-group';

        if (verifiedNode.props?.label) {
          const labelElement = document.createElement('label');
          labelElement.className = 'ag-input-label';
          labelElement.textContent = String(verifiedNode.props.label);
          labelElement.setAttribute('for', `ag-input-${verifiedNode.id}`);
          elementWrapper.appendChild(labelElement);
        }

        const nativeInput = document.createElement('input');
        nativeInput.type = 'text';
        nativeInput.className = 'ag-input-field';
        nativeInput.id = `ag-input-${verifiedNode.id}`;

        if (verifiedNode.props?.placeholder) {
          nativeInput.placeholder = String(verifiedNode.props.placeholder);
        }

        elementWrapper.appendChild(nativeInput);
        break;
      }

      case 'AgMessageBubble': {
        elementWrapper.className += ' ag-message-bubble';
        if (verifiedNode.props?.text) {
          const contentParagraph = document.createElement('p');
          contentParagraph.className = 'ag-message-text';
          contentParagraph.textContent = String(verifiedNode.props.text);
          elementWrapper.appendChild(contentParagraph);
        }
        break;
      }

      case 'AgText': {
        elementWrapper.className += ' ag-text-element';
        if (verifiedNode.props?.content) {
          elementWrapper.textContent = String(verifiedNode.props.content);
        }
        break;
      }

      default:
        console.warn(`[RENDER_WARN] Structural factory logic for "${verifiedNode.component}" will be established next.`);
        break;
    }

    this.targetContainer.appendChild(elementWrapper);
    console.log(`[RENDER_SUCCESS] ✅ Successfully mounted layout element [ID: ${verifiedNode.id}] to active window container.`);
    console.log('--- END RENDER PROCESS FLOW ---');
  }
}
