/**
 * ag view command - Launch a lightweight component viewer for ejected components
 */
import path from 'node:path';
import { existsSync } from 'node:fs';
import { rm } from 'node:fs/promises';
import { execSync, spawn } from 'node:child_process';
import * as p from '@clack/prompts';
import pc from 'picocolors';
import { loadConfig } from '../utils/config.js';
import { logger } from '../utils/logger.js';
import { ensureDir } from '../utils/files.js';
import { generateViewerApp } from '../utils/viewer.js';
import type { ViewOptions } from '../types/index.js';

const VIEWER_DIR = '.agnosticui-viewer';
const DEFAULT_PORT = 7173;

export async function view(options: ViewOptions = {}): Promise<void> {
  const port = options.port ?? DEFAULT_PORT;
  const clean = options.clean ?? false;
  const autoOpen = options.open ?? true;

  p.intro(pc.bold(pc.cyan('AgnosticUI Component Viewer')));

  // Require initialized project
  const config = await loadConfig();
  if (!config) {
    logger.error('AgnosticUI is not initialized in this project.');
    logger.info('Run ' + pc.cyan('npx agnosticui-cli init') + ' to get started.');
    process.exit(1);
  }

  const installedComponents = Object.keys(config.components);
  if (installedComponents.length === 0) {
    logger.warn('No components installed yet.');
    logger.info('Run ' + pc.cyan('npx agnosticui-cli add button') + ' to add components first.');
    process.exit(0);
  }

  const cwd = process.cwd();
  const viewerPath = path.join(cwd, VIEWER_DIR);
  const nodeModulesPath = path.join(viewerPath, 'node_modules');

  // --clean: nuke viewer directory and start fresh
  if (clean && existsSync(viewerPath)) {
    const spinner = p.spinner();
    spinner.start('Cleaning viewer directory...');
    await rm(viewerPath, { recursive: true, force: true });
    spinner.stop(pc.green('✓') + ' Cleaned viewer directory');
  }

  await ensureDir(viewerPath);
  await ensureDir(path.join(viewerPath, 'src'));

  // Always regenerate app files (cheap — keeps component list current)
  const genSpinner = p.spinner();
  genSpinner.start('Generating viewer app...');
  await generateViewerApp(config, viewerPath, cwd);
  genSpinner.stop(pc.green('✓') + ' Viewer app ready');

  // Install dependencies only when node_modules is absent (fast path on re-runs)
  if (!existsSync(nodeModulesPath)) {
    const installSpinner = p.spinner();
    installSpinner.start(
      'Installing viewer dependencies (first run only — subsequent runs skip this step)...'
    );
    try {
      execSync('npm install', { cwd: viewerPath, stdio: 'pipe' });
      installSpinner.stop(pc.green('✓') + ' Dependencies installed');
    } catch (err) {
      installSpinner.stop(pc.red('✖') + ' Failed to install dependencies');
      logger.error(`npm install failed: ${err instanceof Error ? err.message : String(err)}`);
      logger.info(
        'Try running ' + pc.cyan('ag view --clean') + ' to rebuild the viewer from scratch.'
      );
      process.exit(1);
    }
  } else {
    logger.info(
      'Using cached dependencies. Run ' +
        pc.cyan('ag view --clean') +
        ' to rebuild from scratch.'
    );
  }

  logger.newline();
  logger.box('Component Viewer', [
    pc.dim(`Framework:  ${config.framework}`),
    pc.dim(`Components: ${installedComponents.length}`),
    '',
    pc.green(`→  http://localhost:${port}`),
    '',
    pc.dim('Press Ctrl+C to stop'),
  ]);

  // Spawn Vite dev server inside the viewer directory
  const viteProcess = spawn('npx', ['vite', '--port', String(port)], {
    cwd: viewerPath,
    stdio: 'inherit',
    shell: true,
  });

  // Auto-open browser after a short startup delay
  if (autoOpen) {
    setTimeout(() => {
      const url = `http://localhost:${port}`;
      const openCmd =
        process.platform === 'darwin'
          ? 'open'
          : process.platform === 'win32'
          ? 'start'
          : 'xdg-open';
      spawn(openCmd, [url], { shell: true, detached: true });
    }, 1500);
  }

  // Clean exit on Ctrl+C / SIGTERM
  const handleExit = () => {
    viteProcess.kill();
    process.exit(0);
  };
  process.on('SIGINT', handleExit);
  process.on('SIGTERM', handleExit);

  viteProcess.on('close', (code) => {
    process.exit(code ?? 0);
  });
}
