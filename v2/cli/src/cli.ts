#!/usr/bin/env node

/**
 * AgnosticUI CLI - Main entry point
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
  .version('2.0.0-alpha.1');

// ag init command
program
  .command('init')
  .description('Initialize AgnosticUI Local in your project')
  .option('-f, --framework <framework>', 'Framework to use (react, vue, lit, svelte)')
  .option('-p, --components-path <path>', 'Path where components will be generated')
  .option('-t, --tarball <path>', 'Path to local tarball (for development)')
  .action(async (options) => {
    await init({
      framework: options.framework as Framework | undefined,
      componentsPath: options.componentsPath,
      tarball: options.tarball,
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
