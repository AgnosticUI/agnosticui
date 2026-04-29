/**
 * ag context command - Generate an AI context file from installed components
 */
import * as p from '@clack/prompts';
import path from 'node:path';
import { existsSync } from 'node:fs';
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import type { ContextOptions } from '../types/index.js';
import { loadConfig, saveConfig } from '../utils/config.js';
import { logger } from '../utils/logger.js';
import pc from 'picocolors';

const SECTION_START = '<!-- agnosticui:context:start -->';
const SECTION_END = '<!-- agnosticui:context:end -->';

// Known AI tool formats and their default output paths.
// Detection signals are files/dirs that indicate the tool is configured in this project.
const AI_TOOLS = {
  claude:   { label: 'Claude Code',      file: 'CLAUDE.md',                          detect: ['.claude', 'CLAUDE.md'] },
  cursor:   { label: 'Cursor',           file: '.cursor/rules/agnosticui.mdc',        detect: ['.cursor', '.cursorrules'] },
  copilot:  { label: 'GitHub Copilot',   file: '.github/copilot-instructions.md',     detect: ['.github/copilot-instructions.md'] },
  windsurf: { label: 'Windsurf',         file: '.windsurfrules',                      detect: ['.windsurfrules', '.windsurf'] },
  openai:   { label: 'OpenAI / Codex',   file: 'AGENTS.md',                          detect: ['AGENTS.md'] },
  gemini:   { label: 'Gemini CLI',       file: 'GEMINI.md',                          detect: ['GEMINI.md'] },
  generic:  { label: 'Generic (llms.txt)', file: 'llms.txt',                         detect: [] },
} as const;

type AiTool = keyof typeof AI_TOOLS;

const EXPECTED_SDUI_VERSION = 1;

interface PlaybookRecipeComponent {
  component: string;
  role: string;
}

interface PlaybookSduiFile {
  version: number;
  slug: string;
  displayName: string;
  intent?: { triggers: string[]; summary: string };
  recipe?: { layout: string; components: PlaybookRecipeComponent[]; notes?: string };
}

interface ScannedPlaybook {
  slug: string;
  displayName: string;
  data: PlaybookSduiFile;
  stale: boolean;
}

/** Detect which AI tools appear to be configured in the project */
function detectTools(cwd: string): AiTool[] {
  return (Object.keys(AI_TOOLS) as AiTool[]).filter(tool =>
    AI_TOOLS[tool].detect.some(signal => existsSync(path.join(cwd, signal)))
  );
}

/** Wrap section content with Cursor MDC frontmatter when needed */
function wrapForTool(tool: AiTool, content: string): string {
  if (tool === 'cursor') {
    return `---\napplyTo: '**'\n---\n\n${content}`;
  }
  return content;
}

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

/** Scan for installed playbooks by looking for sdui.json files */
async function scanPlaybooks(cwd: string, playbooksDir: string): Promise<ScannedPlaybook[]> {
  const fullPath = path.resolve(cwd, playbooksDir);
  if (!existsSync(fullPath)) return [];

  let entries;
  try {
    entries = await readdir(fullPath, { withFileTypes: true });
  } catch {
    return [];
  }

  const results: ScannedPlaybook[] = [];
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const sduiPath = path.join(fullPath, entry.name, 'sdui.json');
    if (!existsSync(sduiPath)) continue;
    try {
      const raw = await readFile(sduiPath, 'utf-8');
      const data = JSON.parse(raw) as PlaybookSduiFile;
      results.push({
        slug: data.slug ?? entry.name,
        displayName: data.displayName ?? entry.name,
        data,
        stale: data.version < EXPECTED_SDUI_VERSION,
      });
    } catch {
      // Skip unparseable files silently
    }
  }
  return results;
}

/** Build the playbook intent section lines */
function buildPlaybooksSection(playbooks: ScannedPlaybook[]): string[] {
  const lines: string[] = [
    '## AgnosticUI Agentic Intent — Playbook Recipes',
    '',
    "The following playbooks are installed in this project. When a user's request matches",
    'a trigger phrase, use the corresponding recipe as your structural scaffold.',
    '',
  ];

  for (const pb of playbooks) {
    const { displayName, data } = pb;
    const { intent, recipe } = data;

    lines.push(`### ${displayName}`, '');

    if (intent?.triggers?.length) {
      lines.push(`> Triggers: ${intent.triggers.join(', ')}`, '');
    }

    if (recipe?.layout) {
      lines.push(`Layout: ${recipe.layout}`, '');
    }

    if (recipe?.components?.length) {
      lines.push('**Component recipe:**');
      for (const comp of recipe.components) {
        const tag = toAgTag(comp.component.replace(/^Ag/, ''));
        lines.push(`- \`${tag}\` — ${comp.role}`);
      }
      lines.push('');
    }

    if (recipe?.notes) {
      lines.push(`**Notes:** ${recipe.notes}`, '');
    }

    lines.push('---', '');
  }

  return lines;
}

/** Generate the AgnosticUI markdown body (shared across all tool formats) */
async function generateBody(
  config: Awaited<ReturnType<typeof loadConfig>> & object,
  cwd: string,
  playbooks: ScannedPlaybook[] = []
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

  if (playbooks.length > 0) {
    lines.push(...buildPlaybooksSection(playbooks));
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

  const cwd = process.cwd();

  // Scan for installed playbooks (src/playbooks/*/sdui.json)
  const scannedPlaybooks = await scanPlaybooks(cwd, 'src/playbooks');

  if (scannedPlaybooks.length > 0) {
    const slugList = scannedPlaybooks.map(pb => pb.slug).join(', ');
    const noun = scannedPlaybooks.length === 1 ? 'playbook' : 'playbooks';
    console.log(pc.dim(`  Detected ${scannedPlaybooks.length} installed ${noun} (${slugList}) — including intent recipes.`));
  }

  for (const pb of scannedPlaybooks) {
    if (pb.stale) {
      logger.warn(
        `sdui.json for '${pb.slug}' uses schema version ${pb.data.version}, expected ${EXPECTED_SDUI_VERSION} — recipe may be stale. Re-install: npx agnosticui-cli playbook ${pb.slug} --force`
      );
    }
  }

  // Resolve the output path in priority order:
  // 1. --output flag (explicit user override)
  // 2. --format flag (use that tool's default file)
  // 3. Previously persisted contextPath (set by a prior ag context run — identified by file extension)
  // 4. Auto-detect configured AI tools in the project
  // 5. Fall back to CLAUDE.md
  let outputPath: string;

  if (options.output) {
    outputPath = options.output;
  } else if (options.format) {
    const tool = options.format as AiTool;
    if (!AI_TOOLS[tool]) {
      logger.error(`Unknown format "${options.format}". Valid formats: ${Object.keys(AI_TOOLS).join(', ')}`);
      process.exit(1);
    }
    outputPath = AI_TOOLS[tool].file;
  } else {
    const storedPath = config.ai?.contextPath;
    const storedIsFile = storedPath ? path.extname(storedPath) !== '' : false;

    if (storedIsFile) {
      outputPath = storedPath!;
    } else {
      const detected = detectTools(cwd);
      if (detected.length === 1) {
        outputPath = AI_TOOLS[detected[0]].file;
        console.log(pc.dim(`  Detected ${AI_TOOLS[detected[0]].label} — writing to ${outputPath}`));
      } else if (detected.length > 1) {
        const choice = await p.select({
          message: 'Multiple AI tools detected. Which should receive the context file?',
          options: detected.map(tool => ({
            value: tool,
            label: `${AI_TOOLS[tool].label}  ${pc.dim(AI_TOOLS[tool].file)}`,
          })),
        });
        if (p.isCancel(choice)) {
          p.cancel('Operation cancelled.');
          process.exit(0);
        }
        outputPath = AI_TOOLS[choice as AiTool].file;
      } else {
        // No tool detected — default to CLAUDE.md
        outputPath = AI_TOOLS.claude.file;
        console.log(pc.dim(`  No AI tool detected — defaulting to ${outputPath}`));
      }
    }
  }

  const absOutputPath = path.resolve(cwd, outputPath);
  const relOutputPath = path.relative(cwd, absOutputPath);

  // Determine which tool this output file belongs to (for format-specific wrapping)
  const matchedTool = (Object.keys(AI_TOOLS) as AiTool[]).find(
    t => AI_TOOLS[t].file === outputPath || AI_TOOLS[t].file === relOutputPath
  ) ?? 'claude';

  const spinner = p.spinner();
  spinner.start(`Generating context for ${componentCount} component(s)...`);

  try {
    const body = await generateBody(config, cwd, scannedPlaybooks);

    // Ensure parent directory exists (e.g. .cursor/rules/)
    await mkdir(path.dirname(absOutputPath), { recursive: true });

    let finalContent: string;
    if (existsSync(absOutputPath)) {
      const existing = await readFile(absOutputPath, 'utf-8');
      finalContent = spliceSection(existing, body);
    } else {
      finalContent = wrapForTool(matchedTool, body) + '\n';
    }

    await writeFile(absOutputPath, finalContent, 'utf-8');
    spinner.stop(pc.green('✓') + ` Context written to ${pc.cyan(relOutputPath)}`);
  } catch (err) {
    spinner.stop(pc.red('✖') + ' Failed to generate context');
    logger.error(err instanceof Error ? err.message : 'Unknown error');
    process.exit(1);
  }

  // Persist the output path so subsequent runs use the same file automatically
  const persistPath = `./${relOutputPath}`;
  if (config.ai?.contextPath !== persistPath) {
    config.ai = { ...config.ai, contextPath: persistPath };
    await saveConfig(config);
  }

  logger.newline();
  const playbookSummary = scannedPlaybooks.length > 0
    ? [`${pc.dim('Playbooks:  ')}${pc.white(`${scannedPlaybooks.length} (${scannedPlaybooks.map(pb => pb.slug).join(', ')})`)}`, '']
    : [];

  logger.box('Context generated!', [
    pc.dim('File:       ') + pc.cyan(relOutputPath),
    pc.dim('Components: ') + pc.white(String(componentCount)),
    pc.dim('Framework:  ') + pc.white(config.framework),
    ...playbookSummary,
    '',
    pc.dim('AI coding tools (Claude Code, Cursor, Windsurf) will now'),
    pc.dim('automatically know about your installed components.'),
    '',
    pc.dim('Re-run after adding components: ') + pc.cyan('npx agnosticui-cli context'),
  ]);
}
