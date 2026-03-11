/**
 * ag storybook command - Set up Storybook for installed components
 */
import path from 'node:path';
import { existsSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import { execSync } from 'node:child_process';
import * as p from '@clack/prompts';
import pc from 'picocolors';
import { loadConfig, saveConfig } from '../utils/config.js';
import { logger } from '../utils/logger.js';
import { ensureDir } from '../utils/files.js';
import { generateStorybookMain, generateStorybookPreview, generateStorybookManager, generateReactStory, generateVueStory, generateLitStory } from '../utils/stories.js';
import type { StorybookOptions } from '../types/index.js';

export async function storybook(options: StorybookOptions = {}): Promise<void> {
  const skipInstall = options.skipInstall ?? false;
  const force = options.force ?? false;

  p.intro(pc.bold(pc.cyan('AgnosticUI Storybook Setup')));

  // Require initialized project
  const config = await loadConfig();
  if (!config) {
    logger.error('AgnosticUI is not initialized in this project.');
    logger.info('Run ' + pc.cyan('npx agnosticui-cli init') + ' to get started.');
    process.exit(1);
  }

  const cwd = process.cwd();
  const storybookConfigDir = path.join(cwd, '.storybook');
  const mainTsPath = path.join(storybookConfigDir, 'main.ts');
  const previewTsPath = path.join(storybookConfigDir, 'preview.ts');
  const managerTsPath = path.join(storybookConfigDir, 'manager.ts');
  const componentsAbsPath = path.resolve(cwd, config.paths.components);

  const alreadyConfigured = existsSync(mainTsPath);

  if (alreadyConfigured && !force) {
    logger.info('Storybook already configured (.storybook/main.ts exists). Skipping install and config steps.');
    logger.info(pc.dim('Run ') + pc.cyan('ag storybook --force') + pc.dim(' to overwrite .storybook config and regenerate all stories.'));
  } else {
    // Install packages
    if (skipInstall) {
      logger.info('Skipping npm install (--skip-install flag set).');
    } else {
      let installCmd: string;
      if (config.framework === 'react') {
        installCmd = 'npm install --save-dev storybook@^10 @storybook/react-vite@^10 @storybook/addon-docs@^10 @storybook/addon-a11y@^10';
      } else if (config.framework === 'vue') {
        installCmd = 'npm install --save-dev storybook@^10 @storybook/vue3-vite@^10 @storybook/addon-docs@^10 @storybook/addon-a11y@^10';
      } else {
        installCmd = 'npm install --save-dev storybook@^10 @storybook/web-components-vite@^10 @storybook/addon-docs@^10 @storybook/addon-a11y@^10';
      }

      const installSpinner = p.spinner();
      installSpinner.start(alreadyConfigured ? 'Re-installing Storybook packages...' : 'Installing Storybook packages...');
      try {
        execSync(installCmd, { cwd, stdio: 'pipe' });
        installSpinner.stop(pc.green('✓') + ' Storybook packages installed');
      } catch (err) {
        installSpinner.stop(pc.red('✖') + ' Failed to install Storybook packages');
        logger.error(`npm install failed: ${err instanceof Error ? err.message : String(err)}`);
        logger.info('Try running with ' + pc.cyan('--skip-install') + ' if packages are already installed.');
        process.exit(1);
      }
    }

    // Write .storybook/main.ts
    await ensureDir(storybookConfigDir);
    const mainContent = generateStorybookMain(config.framework);
    await writeFile(mainTsPath, mainContent, 'utf-8');
    logger.info(pc.green('✓') + (alreadyConfigured ? ' Overwrote' : ' Written') + ' .storybook/main.ts');

    // Write .storybook/preview.ts
    // Compute relative path from .storybook/ to the components styles directory
    // e.g. components at src/components/ag -> ../src/components/ag
    const componentsRelFromStorybook = path.relative(storybookConfigDir, componentsAbsPath);
    // Normalize to forward slashes for use in import strings
    const componentsRelForImport = componentsRelFromStorybook.split(path.sep).join('/');
    const previewContent = generateStorybookPreview(config.framework, componentsRelForImport);
    await writeFile(previewTsPath, previewContent, 'utf-8');
    logger.info(pc.green('✓') + (alreadyConfigured ? ' Overwrote' : ' Written') + ' .storybook/preview.ts');

    // Write .storybook/manager.ts — sets brandTitle so the auto-generated nature is visible in Storybook UI
    const managerContent = generateStorybookManager();
    await writeFile(managerTsPath, managerContent, 'utf-8');
    logger.info(pc.green('✓') + (alreadyConfigured ? ' Overwrote' : ' Written') + ' .storybook/manager.ts');

    // Add storybook script to package.json (never overwrite a user-customised script)
    const pkgJsonPath = path.join(cwd, 'package.json');
    if (existsSync(pkgJsonPath)) {
      try {
        const pkgRaw = await readFile(pkgJsonPath, 'utf-8');
        const pkg = JSON.parse(pkgRaw);
        if (!pkg.scripts) {
          pkg.scripts = {};
        }
        if (!pkg.scripts.storybook) {
          pkg.scripts.storybook = 'storybook dev -p 6006';
          await writeFile(pkgJsonPath, JSON.stringify(pkg, null, 2) + '\n', 'utf-8');
          logger.info(pc.green('✓') + ' Added "storybook" script to package.json');
        } else {
          logger.info('package.json already has a "storybook" script. Leaving it unchanged.');
        }
      } catch (err) {
        logger.warn(`Could not update package.json: ${err instanceof Error ? err.message : String(err)}`);
      }
    }

    // Record storybook setup metadata in agnosticui.config.json
    const updatedConfig = { ...config, storybook: { version: 10, setupAt: new Date().toISOString() } };
    await saveConfig(updatedConfig);
    logger.info(pc.green('✓') + ' Updated agnosticui.config.json with storybook metadata');
  }

  // Generate per-component story files
  const installedComponentNames = Object.keys(config.components);

  if (installedComponentNames.length === 0) {
    logger.warn('No components installed yet.');
    logger.info('Run ' + pc.cyan('npx agnosticui-cli add button') + ' to add components first.');
    return;
  }

  const genSpinner = p.spinner();
  genSpinner.start(`${force ? 'Regenerating' : 'Generating'} story files for ${installedComponentNames.length} component(s)...`);

  let generated = 0;
  const skippedPaths: string[] = [];

  for (const name of installedComponentNames) {
    let storyPath: string;
    let content: string;

    if (config.framework === 'react') {
      storyPath = path.join(componentsAbsPath, name, 'react', `${name}.stories.tsx`);
      content = generateReactStory(name);
    } else if (config.framework === 'vue') {
      storyPath = path.join(componentsAbsPath, name, 'vue', `${name}.stories.ts`);
      content = generateVueStory(name);
    } else {
      // lit
      storyPath = path.join(componentsAbsPath, name, 'core', `${name}.stories.ts`);
      content = generateLitStory(name);
    }

    if (existsSync(storyPath) && !force) {
      skippedPaths.push(storyPath);
      continue;
    }
    await writeFile(storyPath, content, 'utf-8');
    generated++;
  }

  genSpinner.stop(
    pc.green('✓') +
    ` Stories: ${generated} ${force ? 'regenerated' : 'written'}, ${skippedPaths.length} skipped`
  );

  // Log each skipped story so users know exactly which ones were left unchanged
  if (skippedPaths.length > 0) {
    logger.newline();
    for (const sp of skippedPaths) {
      logger.info(pc.dim(`  skipped: ${path.relative(cwd, sp)}`));
    }
    logger.info(pc.dim('  Tip: Run ') + pc.cyan('ag storybook --force') + pc.dim(' to regenerate all stories.'));
  }

  logger.newline();
  logger.box('Storybook ready', [
    pc.dim(`Framework:  ${config.framework}`),
    pc.dim(`Components: ${installedComponentNames.length}`),
    pc.dim(`Stories:    ${generated} ${force ? 'regenerated' : 'generated'}, ${skippedPaths.length} skipped`),
    '',
    pc.green('Run: npm run storybook'),
    '',
    pc.dim('Storybook will start on http://localhost:6006'),
  ]);
}
