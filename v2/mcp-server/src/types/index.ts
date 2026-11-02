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

export interface ComponentSchemaRequest {
  component_name: string;
}

export interface StreamedLayoutRequest {
  nodes: AgNode[];
}

export interface DesignTokensRequest {
  category: 'colors' | 'sizes' | 'radii' | 'motion' | 'shadow' | 'focus' | 'z-index';
}

export interface SkinPropertiesRequest {
  skin_name: string;
  theme_mode: 'light' | 'dark';
}
