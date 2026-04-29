/**
 * ag playbook command - Install a playbook into the local project
 */
import * as p from '@clack/prompts';
import path from 'node:path';
import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import type { PlaybookOptions } from '../types/index.js';
import { logger } from '../utils/logger.js';
import pc from 'picocolors';

const MANIFEST_URL =
  'https://raw.githubusercontent.com/AgnosticUI/agnosticui/master/v2/playbooks-manifest.json';

const DEFAULT_DEST = 'src/playbooks';

interface FrameworkEntry {
  dir: string;
  files: string[];
}

interface PlaybookEntry {
  title: string;
  basePath?: string;
  frameworkDirs?: Record<string, string>;
  frameworks: Record<string, FrameworkEntry>;
  externalFiles?: Record<string, string>;
  contentReplacements?: Record<string, string>;
}

function applyReplacements(text: string, replacements: Record<string, string> | undefined): string {
  if (!replacements) return text;
  for (const [from, to] of Object.entries(replacements)) {
    text = text.split(from).join(to);
  }
  return text;
}

interface Manifest {
  githubRawBase: string;
  playbooks: Record<string, PlaybookEntry>;
}

async function fetchManifest(): Promise<Manifest> {
  const res = await fetch(MANIFEST_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch playbooks manifest (HTTP ${res.status})`);
  }
  return res.json() as Promise<Manifest>;
}

async function fetchText(url: string): Promise<string | null> {
  const res = await fetch(url);
  if (!res.ok) return null;
  return res.text();
}

async function fetchBinary(url: string): Promise<Buffer | null> {
  const res = await fetch(url);
  if (!res.ok) return null;
  const ab = await res.arrayBuffer();
  return Buffer.from(ab);
}

function isBinary(filePath: string): boolean {
  return /\.(jpg|jpeg|png|gif|webp|ico|svg|woff|woff2|ttf|eot|pdf)$/i.test(filePath);
}

export async function playbook(slug: string | undefined, options: PlaybookOptions = {}): Promise<void> {
  console.log('');
  p.intro(pc.bold(pc.cyan('AgnosticUI Playbooks')));

  const spinner = p.spinner();
  spinner.start('Fetching playbooks manifest...');

  let manifest: Manifest;
  try {
    manifest = await fetchManifest();
    spinner.stop(pc.green('✓') + ' Manifest loaded');
  } catch (err) {
    spinner.stop(pc.red('✖') + ' Failed to load manifest');
    logger.error(`${err instanceof Error ? err.message : 'Unknown error'}`);
    logger.info('Check your internet connection and try again.');
    process.exit(1);
  }

  const { playbooks, githubRawBase } = manifest;

  // --list or no slug: show available playbooks
  if (options.list || !slug) {
    console.log('');
    logger.box('Available Playbooks:', [
      ...Object.entries(playbooks).map(([key, entry]) => {
        const frameworks = Object.keys(entry.frameworks).join(', ');
        return `  ${pc.cyan(key.padEnd(20))} ${pc.dim(entry.title)}  ${pc.dim('[' + frameworks + ']')}`;
      }),
      '',
      pc.dim('Install with: npx agnosticui-cli playbook <slug> --framework <react|vue|lit>'),
    ]);
    return;
  }

  // Validate slug
  const playbookEntry = playbooks[slug];
  if (!playbookEntry) {
    logger.error(`Unknown playbook: "${slug}"`);
    logger.info('Run ' + pc.cyan('npx agnosticui-cli playbook --list') + ' to see available playbooks.');
    process.exit(1);
  }

  // Resolve framework
  let framework = options.framework;
  const availableFrameworks = Object.keys(playbookEntry.frameworks);

  if (!framework) {
    const choice = await p.select({
      message: 'Which framework?',
      options: availableFrameworks.map(fw => ({ value: fw, label: fw })),
    });
    if (p.isCancel(choice)) {
      p.cancel('Operation cancelled.');
      process.exit(0);
    }
    framework = choice as string;
  }

  if (!availableFrameworks.includes(framework)) {
    logger.error(`Framework "${framework}" is not available for playbook "${slug}".`);
    logger.info(`Available: ${availableFrameworks.join(', ')}`);
    process.exit(1);
  }

  const fwEntry = playbookEntry.frameworks[framework];
  const basePath = playbookEntry.basePath || slug;
  const destRoot = path.resolve(process.cwd(), options.path || path.join(DEFAULT_DEST, slug));

  // Warn if destination exists
  if (existsSync(destRoot) && !options.force) {
    const overwrite = await p.confirm({
      message: `${pc.yellow(destRoot)} already exists. Overwrite?`,
      initialValue: false,
    });
    if (p.isCancel(overwrite) || !overwrite) {
      p.cancel('Operation cancelled.');
      process.exit(0);
    }
  }

  const fileBaseUrl = `${githubRawBase}/${basePath}/${fwEntry.dir}`;
  const totalFiles = fwEntry.files.length + Object.keys(playbookEntry.externalFiles || {}).length;

  spinner.start(`Installing ${pc.cyan(playbookEntry.title)} (${framework}) — ${totalFiles} file(s)...`);

  let written = 0;
  let failed = 0;

  // Fetch and write playbook files
  for (const file of fwEntry.files) {
    const url = `${fileBaseUrl}/${file}`;
    const dest = path.join(destRoot, file);

    try {
      await mkdir(path.dirname(dest), { recursive: true });
      if (isBinary(file)) {
        const data = await fetchBinary(url);
        if (data) {
          await writeFile(dest, data);
          written++;
        } else {
          failed++;
          logger.warn(`  Skipped (not found): ${file}`);
        }
      } else {
        let text = await fetchText(url);
        if (text !== null) {
          text = applyReplacements(text, playbookEntry.contentReplacements);
          await writeFile(dest, text, 'utf-8');
          written++;
        } else {
          failed++;
          logger.warn(`  Skipped (not found): ${file}`);
        }
      }
    } catch (err) {
      failed++;
      logger.warn(`  Failed: ${file} — ${err instanceof Error ? err.message : 'Unknown error'}`);
    }

    spinner.message(`Installing ${pc.cyan(playbookEntry.title)} (${framework}) — ${written}/${totalFiles} written...`);
  }

  // Fetch external files (e.g. skin-switcher helpers)
  for (const [destRelPath, srcUrl] of Object.entries(playbookEntry.externalFiles || {})) {
    const dest = path.join(destRoot, destRelPath);
    try {
      await mkdir(path.dirname(dest), { recursive: true });
      let text = await fetchText(srcUrl);
      if (text !== null) {
        text = applyReplacements(text, playbookEntry.contentReplacements);
        await writeFile(dest, text, 'utf-8');
        written++;
      } else {
        failed++;
        logger.warn(`  Skipped external (not found): ${destRelPath}`);
      }
    } catch (err) {
      failed++;
      logger.warn(`  Failed external: ${destRelPath} — ${err instanceof Error ? err.message : 'Unknown error'}`);
    }
    spinner.message(`Installing ${pc.cyan(playbookEntry.title)} (${framework}) — ${written}/${totalFiles} written...`);
  }

  // Fetch and write sdui.json so `ag context` can auto-detect this playbook
  const sduiUrl = `${githubRawBase}/${basePath}/sdui.json`;
  const sduiText = await fetchText(sduiUrl);
  if (sduiText !== null) {
    await writeFile(path.join(destRoot, 'sdui.json'), sduiText, 'utf-8');
  } else {
    logger.warn('sdui.json not found — ag context will not include intent recipes for this playbook');
  }

  spinner.stop(pc.green('✓') + ` Installed ${written} file(s)${failed > 0 ? pc.yellow(` (${failed} skipped)`) : ''}`);

  logger.newline();
  logger.box(`Playbook installed: ${playbookEntry.title} (${framework})`, [
    pc.dim('Location: ') + pc.cyan(path.relative(process.cwd(), destRoot)),
    '',
    pc.dim('The playbook is a self-contained Vite project. To run it:'),
    '  ' + logger.command(`cd ${path.relative(process.cwd(), destRoot)}`),
    '  ' + logger.command('npm install'),
    '  ' + logger.command('npm run dev'),
    '',
    pc.dim('Or use the files as a reference and copy what you need into your project.'),
  ]);
}
