/**
 * Logger utility with colored output
 */
import pc from 'picocolors';

export const logger = {
  info: (message: string) => {
    console.log(pc.blue('ℹ'), message);
  },

  success: (message: string) => {
    console.log(pc.green('✓'), message);
  },

  error: (message: string) => {
    console.log(pc.red('✖'), message);
  },

  warn: (message: string) => {
    console.log(pc.yellow('⚠'), message);
  },

  step: (message: string) => {
    console.log(pc.cyan('→'), message);
  },

  box: (title: string, content: string[]) => {
    console.log('');
    console.log(pc.bold(pc.cyan(title)));
    content.forEach(line => console.log('  ' + line));
    console.log('');
  },

  command: (cmd: string) => {
    return pc.dim('  $ ' + cmd);
  },

  newline: () => {
    console.log('');
  }
};
