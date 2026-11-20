/**
 * @file index.tsx
 * @description React 18/19 renderer and hook bindings (@agnosticui/a2ui-react)
 * for AgnosticUI's A2UI v1.0 catalog and Light-DOM <a2ui-surface>.
 */

import * as React from "react";
import { createComponent, type EventName } from "@lit/react";
import {
  A2uiSurface,
  MessageProcessor,
  AGNOSTICUI_CATALOG_ID,
  AgnosticUICatalog,
  registerAgnosticUICatalog,
  runSurfaceValidation,
  createMockA2uiStream,
  type LitComponentApi,
  type SurfaceModel,
  type A2uiWireMessage,
} from "@agnosticui/a2ui-lit";

let catalogRegistered = false;

/**
 * Idempotently registers all 35 AgnosticUI A2UI v1.0 custom elements.
 * Safe to call multiple times under React 18/19 StrictMode.
 */
export function ensureAgnosticUICatalog(): void {
  if (catalogRegistered) return;
  registerAgnosticUICatalog();
  catalogRegistered = true;
}

export type A2uiActionEvent = CustomEvent<Record<string, unknown>>;

/**
 * React wrapper around Light-DOM <a2ui-surface> generated via @lit/react.
 * Renders any A2UI v1.0 SurfaceModel backed by AgnosticUICatalog.
 */
const BaseA2uiSurface = createComponent({
  tagName: "a2ui-surface",
  elementClass: A2uiSurface,
  react: React,
  events: {
    onA2uiAction: "a2uiaction" as EventName<A2uiActionEvent>,
  },
});

export interface AgA2uiSurfaceProps extends React.ComponentPropsWithoutRef<
  typeof BaseA2uiSurface
> {
  surface?: SurfaceModel<LitComponentApi>;
}

/**
 * React 18/19 wrapper around Light-DOM <a2ui-surface>.
 * Explicitly assigns the complex SurfaceModel JS property onto the custom element
 * so React 19 never serializes it as an HTML attribute.
 */
export const AgA2uiSurface = React.forwardRef<A2uiSurface, AgA2uiSurfaceProps>(
  function AgA2uiSurface({ surface, ...rest }, forwardedRef) {
    const innerRef = React.useRef<A2uiSurface | null>(null);

    React.useLayoutEffect(() => {
      if (innerRef.current && innerRef.current.surface !== surface) {
        innerRef.current.surface = surface;
      }
    }, [surface]);

    const setRefs = React.useCallback(
      (node: A2uiSurface | null) => {
        innerRef.current = node;
        if (node && surface !== undefined) {
          node.surface = surface;
        }
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      },
      [forwardedRef, surface],
    );

    return <BaseA2uiSurface ref={setRefs} {...rest} />;
  },
);

export interface UseA2uiSurfaceOptions {
  /** Surface ID matching createSurface.surfaceId (default: 'support_surface'). */
  surfaceId?: string;
  /** Optional callback invoked when an A2UI action fires on the surface. */
  onAction?: (detail: Record<string, unknown>) => void;
  /** Automatically run FACE reportValidity() before invoking onAction (default: true). */
  validateOnAction?: boolean;
}

export interface UseA2uiSurfaceResult {
  surface: SurfaceModel<LitComponentApi> | undefined;
  surfaceRef: React.RefObject<A2uiSurface | null>;
  processMessages: (messages: A2uiWireMessage[]) => void;
  streamMessages: (
    messages: A2uiWireMessage[],
    delayMs?: number,
  ) => Promise<void>;
  resetSurface: () => void;
  validate: (report?: boolean) => boolean;
  getDataModel: () => unknown;
}
/**
 * Manages an A2UI v1.0 MessageProcessor bound to AgnosticUICatalog,
 * exposing reactive SurfaceModel state, FACE validation, and action handling.
 */
export function useA2uiSurface(
  options: UseA2uiSurfaceOptions = {},
): UseA2uiSurfaceResult {
  const {
    surfaceId = "support_surface",
    onAction,
    validateOnAction = true,
  } = options;

  ensureAgnosticUICatalog();

  const [processorEpoch, setProcessorEpoch] = React.useState(0);
  const processorRef = React.useRef<MessageProcessor<LitComponentApi> | null>(
    null,
  );
  if (!processorRef.current) {
    processorRef.current = new MessageProcessor<LitComponentApi>([
      AgnosticUICatalog,
    ]);
  }

  const surfaceRef = React.useRef<A2uiSurface | null>(null);
  const [, forceRender] = React.useReducer((c: number) => c + 1, 0);

  const onActionRef = React.useRef(onAction);
  onActionRef.current = onAction;

  const resetSurface = React.useCallback(() => {
    processorRef.current = new MessageProcessor<LitComponentApi>([
      AgnosticUICatalog,
    ]);
    setProcessorEpoch((e) => e + 1);
    forceRender();
  }, []);

  const processMessages = React.useCallback((messages: A2uiWireMessage[]) => {
    const processor = processorRef.current;
    if (!processor) return;

    for (const msg of messages) {
      const envelope = msg as unknown as {
        createSurface?: { surfaceId?: string };
      };
      const targetId = envelope.createSurface?.surfaceId;
      if (targetId && processor.model.getSurface(targetId)) {
        processor.processMessages([
          { version: "1.0", deleteSurface: { surfaceId: targetId } } as never,
        ]);
      }
      processor.processMessages([msg as never]);
    }

    if (surfaceRef.current) {
      surfaceRef.current.requestUpdate();
    }
    forceRender();
  }, []);

  const streamMessages = React.useCallback(
    async (messages: A2uiWireMessage[], delayMs = 0) => {
      for await (const msg of createMockA2uiStream(messages, delayMs)) {
        processMessages([msg]);
      }
    },
    [processMessages],
  );

  const validate = React.useCallback((report = true): boolean => {
    if (!surfaceRef.current) return true;
    return runSurfaceValidation(surfaceRef.current, report);
  }, []);

  const getDataModel = React.useCallback((): unknown => {
    const current = processorRef.current?.model.getSurface(surfaceId);
    if (!current) return {};
    return current.dataModel.get("") ?? current.dataModel.get("/") ?? {};
  }, [surfaceId]);

  const surface = processorRef.current.model.getSurface(surfaceId);

  React.useEffect(() => {
    const processor = processorRef.current;
    if (!processor) return;

    const handleResolvedAction = (detail: Record<string, unknown>) => {
      const el = surfaceRef.current;
      if (el && validateOnAction && !runSurfaceValidation(el, true)) {
        return;
      }
      onActionRef.current?.(detail);
    };

    const sub = processor.model.onAction.subscribe((action) => {
      const detail = action as unknown as Record<string, unknown>;
      handleResolvedAction(detail);
    });

    const el = surfaceRef.current;
    const domListener = (evt: Event) => {
      const detail = (evt as A2uiActionEvent).detail ?? {};
      handleResolvedAction(detail);
    };
    el?.addEventListener("a2uiaction", domListener);

    return () => {
      sub.unsubscribe();
      el?.removeEventListener("a2uiaction", domListener);
    };
  }, [processorEpoch, validateOnAction, surface]);

  return {
    surface,
    surfaceRef,
    processMessages,
    streamMessages,
    resetSurface,
    validate,
    getDataModel,
  };
}

export {
  AGNOSTICUI_CATALOG_ID,
  AgnosticUICatalog,
  registerAgnosticUICatalog,
  runSurfaceValidation,
  createMockA2uiStream,
  type A2uiWireMessage,
};
