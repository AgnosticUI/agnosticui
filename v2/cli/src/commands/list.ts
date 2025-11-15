/**
 * ag list command - List available components
 */
import path from 'node:path';
import { logger } from '../utils/logger.js';
import { loadConfig } from '../utils/config.js';
import { getAvailableComponents } from '../utils/components.js';
import { pathExists } from '../utils/files.js';
import pc from 'picocolors';

export async function list(): Promise<void> {
  // Load config
  const config = await loadConfig();

  if (!config) {
    logger.error('AgnosticUI is not initialized in this project.');
    logger.info('Run ' + pc.cyan('ag init') + ' to get started.');
    process.exit(1);
  }

  const referencePath = path.resolve(config.paths.reference);

  // Validate reference library exists
  if (!pathExists(referencePath)) {
    logger.error(`Reference library not found at: ${referencePath}`);
    logger.info('Please run ' + pc.cyan('ag init') + ' again.');
    process.exit(1);
  }

  try {
    const availableComponents = await getAvailableComponents(referencePath);
    const addedComponents = Object.keys(config.components);

    logger.newline();
    logger.box('AgnosticUI Local Components', [
      pc.dim(`Framework: ${config.framework}`),
      pc.dim(`Total available: ${availableComponents.length}`),
      pc.dim(`Added to project: ${addedComponents.length}`),
    ]);

    logger.newline();
    console.log(pc.bold('Available Components:'));
    console.log('');

    // Display components in columns
    const columns = 3;
    const rows = Math.ceil(availableComponents.length / columns);

    for (let row = 0; row < rows; row++) {
      const rowComponents: string[] = [];

      for (let col = 0; col < columns; col++) {
        const index = row + col * rows;
        if (index < availableComponents.length) {
          const name = availableComponents[index];
          const isAdded = addedComponents.includes(name);
          const displayName = isAdded
            ? pc.green('✓ ' + name)
            : pc.dim('  ' + name);

          rowComponents.push(displayName.padEnd(25));
        }
      }

      console.log('  ' + rowComponents.join(''));
    }

    logger.newline();
    logger.info(pc.green('✓') + ' = Already added to your project');
    logger.newline();

    // Show usage hint
    logger.box('Add Components:', [
      pc.dim('Add a single component:'),
      '  ' + logger.command('ag add button'),
      '',
      pc.dim('Add multiple components:'),
      '  ' + logger.command('ag add button input checkbox'),
    ]);
  } catch (error) {
    logger.error(`Failed to list components: ${error instanceof Error ? error.message : 'Unknown error'}`);
    process.exit(1);
  }
}
