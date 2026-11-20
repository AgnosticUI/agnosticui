/**
 * @file index.ts
 * @description Vue 3 renderer and composable bindings (@agnosticui/a2ui-vue)
 * for AgnosticUI's A2UI v1.0 catalog and Light-DOM <a2ui-surface>.
 */

import {
  defineComponent,
  h,
  onMounted,
  onUnmounted,
  ref,
  shallowRef,
  watch,
  type DefineComponent,
  type PropType,
  type Ref,
  type ShallowRef,
} from 'vue';
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
} from '@agnosticui/a2ui-lit';

let catalogRegistered = false;

/**
 * Idempotently registers all 35 AgnosticUI A2UI v1.0 custom elements.
 * Safe to call multiple times across Vue 3 components or tests.
 */
export function ensureAgnosticUICatalog(): void {
  if (catalogRegistered) return;
  registerAgnosticUICatalog();
  catalogRegistered = true;
}

export type A2uiActionEvent = CustomEvent<Record<string, unknown>>;

export interface AgA2uiSurfaceProps {
  surface?: SurfaceModel<LitComponentApi>;
}

/**
 * Vue 3 component wrapper around Light-DOM <a2ui-surface>.
 * Assigns the reactive SurfaceModel JS property directly onto the custom element
 * and forwards validated 'a2uiaction' events.
 */
export const AgA2uiSurface: DefineComponent<AgA2uiSurfaceProps> =
  defineComponent({
    name: 'AgA2uiSurface',
    props: {
      surface: {
        type: Object as PropType<SurfaceModel<LitComponentApi> | undefined>,
        default: undefined,
      },
    },
    emits: {
      a2uiaction: (_detail: Record<string, unknown>) => true,
    },
    setup(props, { attrs, emit, expose }) {
      ensureAgnosticUICatalog();
      const elementRef = ref<A2uiSurface | null>(null);

      const syncSurface = (nextSurface?: SurfaceModel<LitComponentApi>) => {
        if (elementRef.value && elementRef.value.surface !== nextSurface) {
          elementRef.value.surface = nextSurface;
        }
      };

      const handleDomAction = (evt: Event) => {
        const detail = (evt as A2uiActionEvent).detail ?? {};
        emit('a2uiaction', detail);
      };

      onMounted(() => {
        syncSurface(props.surface);
        elementRef.value?.addEventListener('a2uiaction', handleDomAction);
      });

      onUnmounted(() => {
        elementRef.value?.removeEventListener('a2uiaction', handleDomAction);
      });

      watch(
        () => props.surface,
        (nextSurface) => {
          syncSurface(nextSurface);
        },
        { immediate: true },
      );

      expose({ elementRef });

      return () =>
        h('a2ui-surface', {
          ...attrs,
          ref: elementRef,
        });
    },
  }) as DefineComponent<AgA2uiSurfaceProps>;

export interface UseA2uiSurfaceOptions {
  /** Surface ID matching createSurface.surfaceId (default: 'support_surface'). */
  surfaceId?: string;
  /** Optional callback invoked when a validated A2UI action fires on the surface. */
  onAction?: (detail: Record<string, unknown>) => void;
  /** Automatically run FACE reportValidity() before invoking onAction (default: true). */
  validateOnAction?: boolean;
}

export interface UseA2uiSurfaceResult {
  surface: ShallowRef<SurfaceModel<LitComponentApi> | undefined>;
  surfaceRef: Ref<A2uiSurface | null>;
  processMessages: (messages: A2uiWireMessage[]) => void;
  streamMessages: (messages: A2uiWireMessage[], delayMs?: number) => Promise<void>;
  resetSurface: () => void;
  validate: (report?: boolean) => boolean;
  getDataModel: () => unknown;
}

/**
 * Vue 3 composable managing an A2UI v1.0 MessageProcessor bound to AgnosticUICatalog,
 * exposing reactive SurfaceModel state, FACE validation, and action handling.
 */
export function useA2uiSurface(
  options: UseA2uiSurfaceOptions = {},
): UseA2uiSurfaceResult {
  const {
    surfaceId = 'support_surface',
    onAction,
    validateOnAction = true,
  } = options;

  ensureAgnosticUICatalog();

  const surface = shallowRef<SurfaceModel<LitComponentApi> | undefined>(
    undefined,
  );
  const surfaceRef = ref<A2uiSurface | null>(null);

  let processor = new MessageProcessor<LitComponentApi>([AgnosticUICatalog]);
  let unsubscribeAction: (() => void) | null = null;

  const resolveSurfaceElement = (): A2uiSurface | null => {
    const raw = surfaceRef.value as

      | (A2uiSurface & { elementRef?: A2uiSurface | null })
      | null;
    if (!raw) return null;
    if (typeof (raw as HTMLElement).querySelectorAll === 'function') {
      return raw;
    }
    return raw.elementRef ?? null;
  };

  const handleResolvedAction = (detail: Record<string, unknown>) => {
    const el = resolveSurfaceElement();
    if (el && validateOnAction && !runSurfaceValidation(el, true)) {
      return;
    }
    onAction?.(detail);
  };

  const bindProcessor = (nextProcessor: MessageProcessor<LitComponentApi>) => {
    unsubscribeAction?.();
    processor = nextProcessor;
    const sub = processor.model.onAction.subscribe((action) => {
      const detail = action as unknown as Record<string, unknown>;
      handleResolvedAction(detail);
    });
    unsubscribeAction = () => sub.unsubscribe();
  };

  bindProcessor(processor);

  const resetSurface = () => {
    bindProcessor(new MessageProcessor<LitComponentApi>([AgnosticUICatalog]));
    surface.value = undefined;
  };

  const processMessages = (messages: A2uiWireMessage[]) => {
    for (const msg of messages) {
      const envelope = msg as unknown as {
        createSurface?: { surfaceId?: string };
      };
      const targetId = envelope.createSurface?.surfaceId;
      if (targetId && processor.model.getSurface(targetId)) {
        processor.processMessages([
          { version: '1.0', deleteSurface: { surfaceId: targetId } } as never,
        ]);
      }
      processor.processMessages([msg as never]);
    }

    const nextModel = processor.model.getSurface(surfaceId);
    surface.value = nextModel;
    const el = resolveSurfaceElement();
    if (el) {
      el.surface = nextModel;
      el.requestUpdate();
    }
  };

  const streamMessages = async (
    messages: A2uiWireMessage[],
    delayMs = 0,
  ): Promise<void> => {
    for await (const msg of createMockA2uiStream(messages, delayMs)) {
      processMessages([msg]);
    }
  };

  const validate = (report = true): boolean => {
    const el = resolveSurfaceElement();
    if (!el) return true;
    return runSurfaceValidation(el, report);
  };

  const getDataModel = (): unknown => {
    const current = processor.model.getSurface(surfaceId);
    if (!current) return {};
    return current.dataModel.get('') ?? current.dataModel.get('/') ?? {};
  };

  onUnmounted(() => {
    unsubscribeAction?.();
  });

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
