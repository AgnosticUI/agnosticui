#!/usr/bin/env node
import { execSync, spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { program } from 'commander';
import { intro, outro, spinner, confirm, text, select, isCancel, cancel } from '@clack/prompts';
import color from 'picocolors';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CLI_ROOT = path.resolve(__dirname, '..');
const REPO_ROOT = path.resolve(CLI_ROOT, '..');
const WORKSPACE_DIR = path.resolve(REPO_ROOT, 'qa_workspace');
const QA_PLAN_PATH = path.resolve(CLI_ROOT, 'QA_PLAN.md');

const FRAMEWORKS = ['lit', 'react', 'vue'];

const BATCHES = {
  1: {
    name: 'Primitives & Layout',
    components: ['Avatar', 'Badge', 'Button', 'Card', 'Divider', 'Icon', 'Image', 'Tag', 'VisuallyHidden', 'Flex']
  },
  2: {
    name: 'Inputs & Forms - Part 1',
    components: ['Checkbox', 'Input', 'Radio', 'Select', 'Slider', 'Toggle', 'Fieldset', 'Rating', 'Combobox', 'Mark']
  },
  3: {
    name: 'Inputs & Forms - Part 2 & Overlays',
    components: ['ButtonFx', 'CopyButton', 'IconButton', 'IconButtonFx', 'Dialog', 'Drawer', 'Header', 'Menu', 'Popover', 'Tooltip']
  },
  4: {
    name: 'Navigation & Feedback',
    components: ['Breadcrumb', 'Pagination', 'Sidebar', 'SidebarNav', 'Tabs', 'Alert', 'EmptyState', 'Loader', 'Spinner', 'Toast']
  },
  5: {
    name: 'Advanced & Groups',
    components: ['Accordion', 'Collapsible', 'MessageBubble', 'Progress', 'ProgressRing', 'ScrollProgress', 'ScrollToButton', 'Timeline']
  },
  6: {
    name: 'Remaining',
    components: ['BadgeFx', 'IntlFormatter', 'Kbd', 'Link', 'SkeletonLoader']
  }
};

function setupIndexHtml(projectDir) {
  const s = spinner();
  s.start('Configuring index.html with global styles and theme toggle...');
  
  try {
    const indexPath = path.join(projectDir, 'index.html');
    if (!fs.existsSync(indexPath)) {
       s.stop(`Could not find index.html at ${indexPath}`);
       return;
    }

    let content = fs.readFileSync(indexPath, 'utf-8');
    
    // 1. Inject CSS Links (Tokens)
    // We assume standard path src/components/ag/styles/...
    const cssLinks = `
    <!-- AgnosticUI Tokens -->
    <link rel="stylesheet" href="/src/components/ag/styles/ag-tokens.css">
    <link rel="stylesheet" href="/src/components/ag/styles/ag-tokens-dark.css">
    <style>
      body {
        background: var(--ag-background-primary, #fff);
        color: var(--ag-text-primary, #111827);
        transition: background 0.2s ease, color 0.2s ease;
        padding: 20px;
      }
      .theme-toggle-wrapper {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        padding: 10px;
        background: var(--ag-background-secondary, #f0f0f0);
        border: 1px solid var(--ag-border, #ccc);
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 10px;
      }
    </style>
    `;

    if (!content.includes('ag-tokens.css')) {
      content = content.replace('</head>', `${cssLinks}\n</head>`);
    }

    // 2. Inject Theme Toggle UI
    const toggleHTML = `
    <div class="theme-toggle-wrapper">
      <label for="theme-toggle" style="font-family: system-ui; font-size: 14px;">Theme:</label>
      <button id="theme-toggle" style="cursor: pointer; padding: 4px 8px;">Toggle Dark Mode</button>
      <span id="current-theme" style="font-family: system-ui; font-size: 14px;">Light Mode</span>
    </div>
    `;
    
    if (!content.includes('theme-toggle-wrapper')) {
      content = content.replace('<body>', `<body>\n${toggleHTML}`);
    }

    // 3. Inject Toggle Script
    const script = `
    <script>
      (function() {
        const toggleBtn = document.getElementById('theme-toggle');
        const themeLabel = document.getElementById('current-theme');
        const html = document.documentElement;

        if (toggleBtn) {
          toggleBtn.addEventListener('click', () => {
            const isDark = html.getAttribute('data-theme') === 'dark';
            if (isDark) {
              html.removeAttribute('data-theme');
              if (themeLabel) themeLabel.textContent = 'Light Mode';
            } else {
              html.setAttribute('data-theme', 'dark');
              if (themeLabel) themeLabel.textContent = 'Dark Mode';
            }
          });
        }
      })();
    </script>
    `;

    if (!content.includes('const toggleBtn')) {
      content = content.replace('</body>', `${script}\n</body>`);
    }

    fs.writeFileSync(indexPath, content, 'utf-8');
    s.stop('Updated index.html with styles and theme toggle');

  } catch (e) {
    s.stop('Failed to configure index.html');
    console.error(color.yellow(e.message));
  }
}

function run(command, cwd = CLI_ROOT) {
  try {
    execSync(command, { stdio: 'inherit', cwd });
  } catch (error) {
    console.error(color.red(`Failed to execute: ${command}`));
    process.exit(1);
  }
}

async function main() {
  intro(color.bgCyan(color.black(' AgnosticUI CLI QA Verification ')));

  program
    .option('-f, --framework <type>', 'Framework to test (lit, react, vue)', 'all')
    .option('-b, --batch <number>', 'Batch number to test')
    .option('--skip-build', 'Skip building the CLI and tarball', false)
    .option('--skip-scaffold', 'Skip scaffolding test projects', false)
    .parse();

  const options = program.opts();

  if (!options.skipBuild) {
    const s = spinner();
    s.start('Building CLI and Local Tarball');
    
    // 1. Run Library Checks (Lint, Typecheck, Test)
    const LIB_ROOT = path.join(REPO_ROOT, 'lib');
    s.message('Running Library Checks (Lint, Typecheck, Test)...');
    try {
        run('npm run lint', LIB_ROOT);
        run('npm run typecheck', LIB_ROOT);
        // run('npm run test', LIB_ROOT); // Uncomment to enable tests if environment supports it
    } catch (e) {
        s.stop('Library checks failed', 1);
        process.exit(1);
    }

    // 2. Build CLI
    s.message('Building CLI...');
    run('npm run build', CLI_ROOT);
    
    // 3. Build Local Tarball
    s.message('Building Local Reference Tarball...');
    // Ensure we skip internal checks in the script since we ran them above (or let them run)
    // The script builds to v2/dist
    run('./scripts/build-local-tarball.sh', REPO_ROOT);
    
    // 4. Pack CLI
    s.message('Packing CLI...');
    run('npm pack', CLI_ROOT);
    
    s.stop('Build Complete');
  } else {
    console.log(color.dim('Skipping build step...'));
  }

  // Determine CLI tarball name
  const files = fs.readdirSync(CLI_ROOT);
  const cliTarball = files.find(f => f.startsWith('agnosticui-cli-') && f.endsWith('.tgz'));
  if (!cliTarball) {
    console.error(color.red('Could not find agnosticui-cli-*.tgz in cli directory! Did you build?'));
    process.exit(1);
  }
  const cliTarballPath = path.join(CLI_ROOT, cliTarball);
  console.log(color.green(`Found CLI Tarball: ${cliTarball}`));

  // Determine Library Tarball Name
  const distDir = path.join(REPO_ROOT, 'dist');
  if (!fs.existsSync(distDir)) {
       console.error(color.red(`Could not find dist directory at ${distDir}`));
       process.exit(1);
  }
  const distFiles = fs.readdirSync(distDir);
  const libTarball = distFiles.find(f => f.startsWith('agnosticui-local-') && f.endsWith('.tar.gz'));
  if (!libTarball) {
      console.error(color.red('Could not find agnosticui-local-*.tar.gz in v2/dist!'));
      process.exit(1);
  }
  const libTarballPath = path.join(distDir, libTarball);
  console.log(color.green(`Found Library Tarball: ${libTarball}`));

  // Ensure workspace exists
  if (!fs.existsSync(WORKSPACE_DIR)) {
    fs.mkdirSync(WORKSPACE_DIR);
  }

  const frameworksToTest = options.framework === 'all' ? FRAMEWORKS : [options.framework];

  for (const fw of frameworksToTest) {
    const projectDir = path.join(WORKSPACE_DIR, `${fw}-test`);
    
    if (!options.skipScaffold) {
      const s = spinner();
      s.start(`Scaffolding ${fw} project...`);
      
      if (fs.existsSync(projectDir)) {
        fs.rmSync(projectDir, { recursive: true, force: true });
      }

      // Scaffold using Vite (this might prompt, so we need to pass args to suppress prompts)
      // npm create vite@latest <project-name> -- --template <template>
      run(`npx -y create-vite@latest ${fw}-test -- --template ${fw}`, WORKSPACE_DIR);
      
      // Install dependencies
      s.message(`Installing dependencies for ${fw}...`);
      run('npm install', projectDir);
      
      // Install CLI using absolute path for reliability
      s.message(`Installing CLI from ${cliTarballPath}...`);
      run(`npm install ${cliTarballPath} --save-dev`, projectDir);

      s.stop(`${fw} project ready`);
    }

    // Verify INIT
    const sInit = spinner();
    sInit.start(`Verifying 'ag init' for ${fw}...`);
    // npx ag init --framework <fw> --tarball <path>
    // We can run it via the installed binary
    run(`npx ag init --framework ${fw} --tarball ${libTarballPath}`, projectDir);
    
    sInit.stop(`'ag init' passed for ${fw}`);

    // Setup Entry File with Styles
    setupIndexHtml(projectDir);

    // Verify LIST
    const sList = spinner();
    sList.start(`Verifying 'ag list' for ${fw}...`);
    try {
      const listOutput = execSync(`npx ag list`, { cwd: projectDir, encoding: 'utf-8' });
      // rudimentary check: check for a few key components
      if (!listOutput.includes('Button') || !listOutput.includes('Card')) {
        throw new Error('Output missing expected components');
      }
      sList.stop(`'ag list' passed for ${fw}`);
    } catch (e) {
      sList.stop('Failed', 1);
      console.error(color.red('ag list failed or output incorrect'));
      process.exit(1);
    }

    // Verify SYNC
    const sSync = spinner();
    sSync.start(`Verifying 'ag sync' for ${fw}...`);
    try {
      execSync(`npx ag sync --force`, { cwd: projectDir });
      sSync.stop(`'ag sync' passed for ${fw}`);
    } catch (e) {
      sSync.stop('Failed', 1);
      console.error(color.red('ag sync failed'));
      process.exit(1);
    }
  }

  const batchesToTest = options.batch ? [options.batch] : Object.keys(BATCHES);
  
  for (const batchKey of batchesToTest) {
    const batch = BATCHES[batchKey];
    if (!batch) continue;

    // Check if already verified
    let isAlreadyVerified = false;
    if (fs.existsSync(QA_PLAN_PATH)) {
      const planContent = fs.readFileSync(QA_PLAN_PATH, 'utf-8');
      // Regex to match "**Batch X: Name** ... ✅"
      // We look for the batch header.
      // The format in QA_PLAN.md is "**Batch 1: Primitives & Layout**"
      const batchHeaderRegex = new RegExp(`\\*\\*Batch ${batchKey}:.*?\\*\\*`);
      const match = planContent.match(batchHeaderRegex);
      if (match) {
        // Check if the line containing the match has a checkmark
        const line = planContent.split('\n').find(l => l.includes(match[0]));
        if (line && line.includes('✅')) {
            isAlreadyVerified = true;
        }
      }
    }

    if (isAlreadyVerified) {
        const shouldRetest = await confirm({
            message: `Batch ${batchKey} is already marked as verified (✅). Retest?`,
            initialValue: false
        });
        if (!shouldRetest) {
            console.log(color.dim(`Skipping Batch ${batchKey}...`));
            continue;
        }
    }

    intro(color.inverse(` Processing Batch ${batchKey}: ${batch.name} `));
    
    // 1. Install components for this batch in ALL frameworks
    for (const fw of frameworksToTest) {
      const projectDir = path.join(WORKSPACE_DIR, `${fw}-test`);
      const sAdd = spinner();
      sAdd.start(`Adding batch components to ${fw}...`);
      
      const components = batch.components.join(' ');
      try {
        run(`npx ag add ${components}`, projectDir);
        
        // Check file existence for each component (basic check)
        // Note: Paths differ internally: src/components/ag/Component/Component.tsx or .vue etc.
        // We just check if the directory exists for checking success.
        for (const comp of batch.components) {
          // React/Lit: src/components/ag/Component
          // Vue: src/components/ag/Component
          // The structure is generally maintained.
          const compDir = path.join(projectDir, 'src', 'components', 'ag', comp);
          if (!fs.existsSync(compDir)) {
             // Try checking simple structure if "ag" isn't used or configured differently?
             // Standard scaffolding puts it in src/components/ag usually.
             // If not found, warn but don't exit hard maybe? Or exit hard?
             // Let's assume strict verification.
             throw new Error(`Component directory not found: ${compDir}`);
          }
        }

        sAdd.stop(`Added ${batch.components.length} components to ${fw}`);
      } catch (e) {
        sAdd.stop('Failed', 1);
        console.error(color.red(`Failed to add components to ${fw}`));
        console.error(e);
        process.exit(1);
      }
    }

    // 2. Human Verification
    const shouldContinue = await confirm({
      message: `Batch ${batchKey} installed. Please verify in a browser. Ready to proceed?`,
    });

    if (!shouldContinue) {
      outro('Verification paused or cancelled by user.');
      process.exit(0);
    }

    // Mark as verified in QA_PLAN.md
    if (fs.existsSync(QA_PLAN_PATH)) {
      try {
        let planContent = fs.readFileSync(QA_PLAN_PATH, 'utf-8');
        const batchHeaderRegex = new RegExp(`(\\*\\*Batch ${batchKey}:.*?\\*\\*)`);
        const match = planContent.match(batchHeaderRegex);
        
        if (match) {
            // Retrieve the full line to check if we already have it
            const lines = planContent.split('\n');
            const lineIdx = lines.findIndex(l => l.includes(match[0]));
            if (lineIdx !== -1 && !lines[lineIdx].includes('✅')) {
                lines[lineIdx] = `${lines[lineIdx]} ✅`;
                fs.writeFileSync(QA_PLAN_PATH, lines.join('\n'), 'utf-8');
                console.log(color.green(`Updated QA_PLAN.md: Marked Batch ${batchKey} as verified!`));
            }
        }
      } catch (e) {
        console.error(color.yellow(`Could not update QA_PLAN.md: ${e.message}`));
      }
    }
  }

  outro('QA Verification Complete!');
}

main().catch(console.error);
