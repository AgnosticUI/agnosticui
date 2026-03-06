/**
 * AgnosticUI CLI Types
 */

export type Framework = 'react' | 'vue' | 'lit' | 'svelte' | 'other';

export interface AgnosticUIConfig {
  $schema?: string;
  version: string;
  framework: Framework;
  paths: {
    reference: string;
    components: string;
    styles?: string;
  };
  tarball?: {
    source: string;      // Path to tarball used during init
    version: string;     // Version extracted from tarball
    installed: string;   // ISO timestamp of when it was installed
  };
  components: Record<string, ComponentEntry>;
  ai?: {
    includeReference?: boolean;
    includeContext?: boolean;
    contextPath?: string;
  };
  git?: {
    commitReference?: boolean;
  };
}

export interface ComponentEntry {
  added: string; // ISO timestamp
  version: string;
  framework: Framework;
  files: string[];
}

export interface ComponentMetadata {
  name: string;
  version: string;
  frameworks: Framework[];
  hasCore: boolean;
  hasReact: boolean;
  hasVue: boolean;
  hasLit: boolean;
}

export interface TarballMetadata {
  version: string;
  built: string;
  components: string[];
}

export interface InitOptions {
  framework?: Framework;
  componentsPath?: string;
  tarball?: string;
  tag?: string;          // NPM dist-tag or version (e.g., 'alpha', 'latest', '2.0.0-alpha.21')
  skipPrompts?: boolean; // Skip all interactive prompts (non-interactive mode)
  force?: boolean;       // Re-initialize even if already initialized
}

export interface SyncOptions {
  tarball?: string;
  force?: boolean;  // Bypass confirmation prompt
  tag?: string;     // NPM dist-tag or version (e.g., 'alpha', 'latest', '2.0.0-alpha.21')
}

export interface AddOptions {
  force?: boolean;
}

export interface RemoveOptions {
  force?: boolean;
}

export interface PlaybookOptions {
  framework?: string;
  path?: string;
  list?: boolean;
  force?: boolean;
}
