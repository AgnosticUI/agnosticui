#!/usr/bin/env node

/**
 * AgnosticUI CLI - Main entry point
 *
 * Package Resolution Strategy:
 * ============================
 *
 * The CLI uses a two-tier approach to locate the AgnosticUI core library:
 *
 * 1. Local Development (Priority):
 *    - Checks for: ../../dist/agnosticui-local-v2.0.0-alpha.tar.gz
 *    - Built via: ./scripts/build-local-tarball.sh
 *    - Used for: Testing changes before publishing
 *
 * 2. Production (NPM Registry):
 *    - Downloads: agnosticui-core@{version} from NPM
 *    - Command: npm pack agnosticui-core@alpha (or latest, or specific version)
 *    - Used for: Production installations after publishing
 *
 * Package Naming:
 * - Local tarball:  agnosticui-local-v*.tar.gz
 * - NPM package:    agnosticui-core
 * - This CLI:       agnosticui-cli
 *
 * Note: The different naming prevents confusion between local dev builds
 * and published NPM packages.
 *
 * See: v2/cli/README.md "Testing After NPM Publication" for verification steps.
 */
import { Command } from 'commander';
import { init } from './commands/init.js';
import { add } from './commands/add.js';
import { remove } from './commands/remove.js';
import { list } from './commands/list.js';
import { sync } from './commands/sync.js';
import type { Framework } from './types/index.js';

const program = new Command();

program
  .name('ag')
  .description('AgnosticUI Local - The UI kit that lives in your codebase')
  .version('2.0.0-alpha.5');

// ag init command
program
  .command('init')
  .description('Initialize AgnosticUI Local in your project')
  .option('-f, --framework <framework>', 'Framework to use (react, vue, lit, svelte)')
  .option('-p, --components-path <path>', 'Path where components will be generated')
  .option('-t, --tarball <path>', 'Path to local tarball (for development)')
  .option('-v, --version <version>', 'NPM version to download (e.g., alpha, latest, 2.0.0)', 'alpha')
  .action(async (options) => {
    await init({
      framework: options.framework as Framework | undefined,
      componentsPath: options.componentsPath,
      tarball: options.tarball,
      version: options.version,
    });
  });

// ag add command
program
  .command('add <components...>')
  .description('Add component(s) to your project')
  .option('--force', 'Overwrite existing components')
  .action(async (components: string[], options) => {
    await add(components, {
      force: options.force,
    });
  });

// ag remove command
program
  .command('remove <components...>')
  .description('Remove component(s) from your project')
  .option('--force', 'Skip confirmation prompt')
  .action(async (components: string[], options) => {
    await remove(components, {
      force: options.force,
    });
  });

// ag list command
program
  .command('list')
  .description('List available components')
  .action(async () => {
    await list();
  });

// ag sync command
program
  .command('sync')
  .description('Update reference library from tarball')
  .option('-t, --tarball <path>', 'Path to tarball (overrides config)')
  .option('--force', 'Bypass confirmation prompt')
  .action(async (options) => {
    await sync({
      tarball: options.tarball,
      force: options.force,
    });
  });

// Parse arguments
program.parse();
