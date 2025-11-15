/**
 * Configuration file management
 */
import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import type { AgnosticUIConfig, Framework, ComponentEntry } from '../types/index.js';

const CONFIG_FILE_NAME = 'agnosticui.config.json';

export async function loadConfig(cwd: string = process.cwd()): Promise<AgnosticUIConfig | null> {
  const configPath = path.join(cwd, CONFIG_FILE_NAME);

  if (!existsSync(configPath)) {
    return null;
  }

  try {
    const content = await readFile(configPath, 'utf-8');
    return JSON.parse(content) as AgnosticUIConfig;
  } catch (error) {
    throw new Error(`Failed to read config file: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

export async function saveConfig(config: AgnosticUIConfig, cwd: string = process.cwd()): Promise<void> {
  const configPath = path.join(cwd, CONFIG_FILE_NAME);

  try {
    await writeFile(configPath, JSON.stringify(config, null, 2) + '\n', 'utf-8');
  } catch (error) {
    throw new Error(`Failed to write config file: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

export function createDefaultConfig(framework: Framework, componentsPath: string, version: string): AgnosticUIConfig {
  return {
    $schema: 'https://agnosticui.com/schema.json',
    version,
    framework,
    paths: {
      reference: './agnosticui',
      components: componentsPath,
    },
    components: {},
    ai: {
      includeReference: true,
      includeContext: true,
      contextPath: './agnosticui/docs',
    },
    git: {
      commitReference: true,
    },
  };
}

export function addComponentToConfig(
  config: AgnosticUIConfig,
  componentName: string,
  version: string,
  files: string[]
): AgnosticUIConfig {
  const entry: ComponentEntry = {
    added: new Date().toISOString(),
    version,
    framework: config.framework,
    files,
  };

  return {
    ...config,
    components: {
      ...config.components,
      [componentName]: entry,
    },
  };
}

export function hasComponent(config: AgnosticUIConfig, componentName: string): boolean {
  return componentName in config.components;
}

export function getComponentEntry(config: AgnosticUIConfig, componentName: string): ComponentEntry | null {
  return config.components[componentName] || null;
}
