export interface WorkspaceConfig {
  framework: 'react' | 'vue' | 'lit';
  paths: {
    components: string;
  };
  ai?: {
    contextPath?: string;
  };
}

export interface AgNode {
  id: string;
  component: string;
  children?: string[];
  [key: string]: unknown;
}

export interface A2uiWireMessage {
  version?: string;
  createSurface?: {
    surfaceId: string;
    catalogId: string;
  };
  updateComponents?: {
    surfaceId: string;
    components: AgNode[];
  };
  updateDataModel?: {
    surfaceId: string;
    path?: string;
    value?: unknown;
  };
  deleteSurface?: {
    surfaceId: string;
  };
  [key: string]: unknown;
}

export interface StreamedLayoutRequest {
  /** Canonical A2UI v1.0 wire message stream (createSurface, updateComponents, updateDataModel). */
  messages?: A2uiWireMessage[];
  /** Flat A2UI v1.0 component adjacency-list array (shorthand when validating components directly). */
  nodes?: AgNode[];
}

export interface ComponentSchemaRequest {
  component_name: string;
}

export interface DesignTokensRequest {
  category: 'colors' | 'sizes' | 'radii' | 'motion' | 'shadow' | 'focus' | 'z-index';
}

export interface SkinPropertiesRequest {
  skin_name: string;
  theme_mode: 'light' | 'dark';
}
