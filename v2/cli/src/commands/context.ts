/**
 * ag context command - Generate an AI context file from installed components
 */
import * as p from '@clack/prompts';
import path from 'node:path';
import { existsSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import type { ContextOptions } from '../types/index.js';
import { loadConfig, saveConfig } from '../utils/config.js';
import { logger } from '../utils/logger.js';
import pc from 'picocolors';

const SECTION_START = '<!-- agnosticui:context:start -->';
const SECTION_END = '<!-- agnosticui:context:end -->';

const DEFAULT_OUTPUT = 'CLAUDE.md';

/** Convert PascalCase component name to ag-kebab-case web component tag */
function toAgTag(name: string): string {
  return 'ag-' + name.replace(/([A-Z])/g, (m, l, i) => (i === 0 ? '' : '-') + l.toLowerCase());
}

/** Build the framework-specific import statement */
function buildImport(componentName: string, framework: string, componentsPath: string): string {
  const base = componentsPath.replace(/^\.\//, '').replace(/\/$/, '');
  switch (framework) {
    case 'react':
      return `import { React${componentName} } from './${base}/${componentName}/react/React${componentName}';`;
    case 'vue':
      return `import Vue${componentName} from './${base}/${componentName}/vue/Vue${componentName}.vue';`;
    default:
      // Lit, Svelte, other — import the core web component
      return `import './${base}/${componentName}/core/${componentName}';`;
  }
}

/**
 * Extract the Props interface block from a TypeScript source file.
 * Returns the raw property lines (trimmed, comments stripped) or null if not found.
 */
async function extractProps(filePath: string): Promise<string | null> {
  try {
    const content = await readFile(filePath, 'utf-8');
    const match = content.match(/export interface \w+Props \{([\s\S]*?)\n\}/);
    if (!match) return null;
    return match[1]
      .split('\n')
      .filter(line => line.trim() && !line.trim().startsWith('//') && !line.trim().startsWith('*'))
      .map(line => line.trim())
      .join('\n');
  } catch {
    return null;
  }
}

/**
 * Find the canonical _Component.ts props file in the component's core directory.
 * Tries PascalCase first (_Button.ts), then lowercase (_dialog.ts).
 */
function findPropsFile(cwd: string, componentsPath: string, componentName: string): string | null {
  const coreDir = path.join(cwd, componentsPath, componentName, 'core');
  const pascal = path.join(coreDir, `_${componentName}.ts`);
  if (existsSync(pascal)) return pascal;
  const lower = path.join(coreDir, `_${componentName.toLowerCase()}.ts`);
  if (existsSync(lower)) return lower;
  return null;
}

/** Generate the full AgnosticUI markdown section */
async function generateSection(
  config: Awaited<ReturnType<typeof loadConfig>> & object,
  cwd: string
): Promise<string> {
  const { framework, version, paths, components } = config;
  const componentNames = Object.keys(components).sort();
  const usesWebComponentTag = framework === 'lit' || framework === 'svelte' || framework === 'other';

  const lines: string[] = [
    SECTION_START,
    '## AgnosticUI Components',
    '',
    `This project uses AgnosticUI Local (v${version}, ${framework} framework).`,
    `Components are installed at \`${paths.components}\`.`,
    '',
    `> Re-run \`npx agnosticui-cli context\` after adding or updating components.`,
    '',
  ];

  for (const name of componentNames) {
    const importLine = buildImport(name, framework, paths.components);
    const propsFile = findPropsFile(cwd, paths.components, name);
    const propsBlock = propsFile ? await extractProps(propsFile) : null;

    lines.push(`### ${name}`, '');
    lines.push(`**Import:** \`${importLine}\``);

    if (usesWebComponentTag) {
      lines.push(`**Tag:** \`<${toAgTag(name)}>\``);
    }

    lines.push('');

    if (propsBlock) {
      lines.push('**Props:**');
      lines.push('```typescript');
      lines.push(propsBlock);
      lines.push('```');
      lines.push('');
    }
  }

  lines.push(SECTION_END);
  return lines.join('\n');
}

/** Insert or replace the AgnosticUI section in an existing file using sentinel markers */
function spliceSection(existing: string, newSection: string): string {
  const startIdx = existing.indexOf(SECTION_START);
  const endIdx = existing.indexOf(SECTION_END);
  if (startIdx !== -1 && endIdx !== -1) {
    return (
      existing.slice(0, startIdx) +
      newSection +
      existing.slice(endIdx + SECTION_END.length)
    );
  }
  // Section not found — append
  return existing.trimEnd() + '\n\n' + newSection + '\n';
}

export async function context(options: ContextOptions = {}): Promise<void> {
  console.log('');
  p.intro(pc.bold(pc.cyan('AgnosticUI Context Generator')));

  const config = await loadConfig();
  if (!config) {
    logger.error('No agnosticui.config.json found. Run npx agnosticui-cli init first.');
    process.exit(1);
  }

  const componentCount = Object.keys(config.components).length;
  if (componentCount === 0) {
    logger.warn('No components installed yet. Run npx agnosticui-cli add <component> first.');
    process.exit(0);
  }

  // Only use config.ai.contextPath if it looks like a file (has an extension).
  // The default config sets contextPath to './agnosticui/docs' (a directory reference)
  // which is not a valid output target for this command.
  const storedPath = config.ai?.contextPath;
  const storedIsFile = storedPath ? path.extname(storedPath) !== '' : false;
  const outputPath = options.output ?? (storedIsFile ? storedPath! : DEFAULT_OUTPUT);
  const absOutputPath = path.resolve(process.cwd(), outputPath);
  const relOutputPath = path.relative(process.cwd(), absOutputPath);

  const spinner = p.spinner();
  spinner.start(`Generating context for ${componentCount} component(s)...`);

  try {
    const section = await generateSection(config, process.cwd());

    let finalContent: string;
    if (existsSync(absOutputPath)) {
      const existing = await readFile(absOutputPath, 'utf-8');
      finalContent = spliceSection(existing, section);
    } else {
      finalContent = section + '\n';
    }

    await writeFile(absOutputPath, finalContent, 'utf-8');
    spinner.stop(pc.green('✓') + ` Context written to ${pc.cyan(relOutputPath)}`);
  } catch (err) {
    spinner.stop(pc.red('✖') + ' Failed to generate context');
    logger.error(err instanceof Error ? err.message : 'Unknown error');
    process.exit(1);
  }

  // Persist the output path to agnosticui.config.json so re-runs use the same file
  const persistPath = `./${relOutputPath}`;
  if (config.ai?.contextPath !== persistPath) {
    config.ai = { ...config.ai, contextPath: persistPath };
    await saveConfig(config);
  }

  logger.newline();
  logger.box('Context generated!', [
    pc.dim('File:       ') + pc.cyan(relOutputPath),
    pc.dim('Components: ') + pc.white(String(componentCount)),
    pc.dim('Framework:  ') + pc.white(config.framework),
    '',
    pc.dim('AI coding tools (Claude Code, Cursor, Windsurf) will now'),
    pc.dim('automatically know about your installed components.'),
    '',
    pc.dim('Re-run after adding components: ') + pc.cyan('npx agnosticui-cli context'),
  ]);
}
