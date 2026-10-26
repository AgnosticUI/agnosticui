import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

// Usage:
// 
// Either of following should work:
// 
// cd v2/scripts
// node concat-lib-files.mjs Avatar
// 
// node v2/scripts/concat-lib-files.mjs Avatar
// 
// Will output to TMP_DIR which is set to <repo_root>/.tmp/<here>

// 1. Get the component name from arguments
const inputName = process.argv[2];
if (!inputName) {
  console.error("Usage: node concat-lib-files.mjs <ComponentName>");
  process.exit(1);
}

// 2. Safely resolve paths using the script's location as an anchor
const __dirname = import.meta.dirname;
const BASE_DIR = path.resolve(__dirname, '../lib/src/components');

if (!fs.existsSync(BASE_DIR)) {
  console.error(`Error: Base components directory does not exist at: ${BASE_DIR}`);
  process.exit(1);
}

// 3. Scan the components directory to find a case-insensitive match
const componentsDirs = fs.readdirSync(BASE_DIR).filter(item => {
  return fs.statSync(path.join(BASE_DIR, item)).isDirectory();
});

const matchedComponentName = componentsDirs.find(
  dir => dir.toLowerCase() === inputName.toLowerCase()
);

if (!matchedComponentName) {
  console.error(`Error: Could not find any component matching "${inputName}" (case-insensitive) in ${BASE_DIR}`);
  console.error("Available components:", componentsDirs.join(', '));
  process.exit(1);
}

// 4. Set up final paths inside a local git-ignored .tmp directory at the project root
const TARGET_DIR = path.join(BASE_DIR, matchedComponentName);
const TMP_DIR = path.resolve(__dirname, '../../.tmp');
const OUTPUT_FILE = path.join(TMP_DIR, `${matchedComponentName}_bundle.md`);
const ALLOWED_EXTENSIONS = new Set(['.ts', '.tsx', '.vue']);

// Ensure the local .tmp directory exists before writing
if (!fs.existsSync(TMP_DIR)) {
  fs.mkdirSync(TMP_DIR, { recursive: true });
}

// Initialize the output bundle string
let bundleContent = `# Component: ${matchedComponentName}\n\n`;

// Recursive function to walk the directory
function walkDirectory(currentPath) {
  const items = fs.readdirSync(currentPath, { withFileTypes: true });

  // Sort items alphabetically to maintain consistent output order
  items.sort((a, b) => a.name.localeCompare(b.name));

  for (const item of items) {
    const fullPath = path.join(currentPath, item.name);

    if (item.isDirectory()) {
      // Skip the specs directory entirely
      if (item.name === 'specs') continue;
      
      // Recursively descend into other folders
      walkDirectory(fullPath);
    } else if (item.isFile()) {
      const ext = path.extname(item.name);
      
      if (ALLOWED_EXTENSIONS.has(ext)) {
        // Calculate a cleaner relative path from the repository root for the markdown headers
        const repoRelativePath = path.relative(path.resolve(__dirname, '../..'), fullPath);
        
        // Map language hints for markdown blocks
        const lang = ext === '.vue' ? 'html' : ext.slice(1);
        
        console.log(` + Adding: ${repoRelativePath}`);
        
        // Read file and append to bundle
        const fileData = fs.readFileSync(fullPath, 'utf8');
        bundleContent += `## ${repoRelativePath}\n`;
        bundleContent += `\`\`\`${lang}\n`;
        bundleContent += fileData;
        if (!fileData.endsWith('\n')) bundleContent += '\n'; // Handle files missing a trailing newline
        bundleContent += `\`\`\`\n\n`;
      }
    }
  }
}

console.log(`Matched input "${inputName}" to component folder "${matchedComponentName}"`);
console.log(`Bundling ${matchedComponentName} from ${TARGET_DIR}...`);
walkDirectory(TARGET_DIR);

fs.writeFileSync(OUTPUT_FILE, bundleContent, 'utf8');
console.log(`Done! Bundle saved to: ${OUTPUT_FILE}`);

// Reveal the file automatically in macOS Finder
if (process.platform === 'darwin') {
  exec(`open -R "${OUTPUT_FILE}"`);
  console.log(`Finder opened and file highlighted! Just drag it into your LLM.`);
}
