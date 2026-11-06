// v2/sdui/demo-support-center/src/client/index.ts

/**
 * Structural definition matching the synchronized server-side AgNode format layout.
 * Acts as the absolute shared type definition for both our network clients and rendering factories.
 */
export interface AgNode {
  id: string;
  component: string;
  props?: {
    actionToken?: string;
    label?: string;
    title?: string;
    text?: string;
    placeholder?: string;
    content?: string;
    [key: string]: any;
  };
  children?: string[];
}

/**
 * Functional callback mapping signature tracking an individual parsed node event.
 */
export type NodeCallback = (node: AgNode) => void;

/**
 * Functional callback mapping signature tracking network cycle completions or drops.
 */
export type StatusCallback = (status: 'CONNECTED' | 'COMPLETED' | 'FAILED') => void;
