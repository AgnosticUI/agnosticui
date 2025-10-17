#!/usr/bin/env node
import { writeFileSync, mkdirSync, readFileSync, appendFileSync } from 'fs';
import { resolve, dirname } from 'path';

// Import templates
import { getCoreTemplate } from './scaffold-templates/core.js';
import { getRegistrationTemplate } from './scaffold-templates/registration.js';
import { getSpecTemplate } from './scaffold-templates/spec.js';
import { getSpecificationsTemplate } from './scaffold-templates/specifications.js';
import { getReactTemplate } from './scaffold-templates/react.js';
import { getVueTemplate } from './scaffold-templates/vue.js';
import { getVueIndexTemplate } from './scaffold-templates/vueIndex.js';
import { getLitStoryTemplate } from './scaffold-templates/litStory.js';
import { getReactStoryTemplate } from './scaffold-templates/reactStory.js';
import { getVueStoryTemplate } from './scaffold-templates/vueStory.js';
import { getSiteExamplesTemplate } from './scaffold-templates/siteExamples.js';
import { getSiteDocsTemplate } from './scaffold-templates/siteDocs.js';

// Helper Functions
const toPascalCase = (str) => str.replace(/(^|-)(\w)/g, (_, __, c) => c.toUpperCase());
const toKebabCase = (str) => str.replace(/([a-z0-9]|(?<=[a-z]))([A-Z])/g, '$1-$2').toLowerCase();

const componentName = process.argv[2];
if (!componentName) {
  console.error('❌ Please provide a component name in PascalCase. e.g., "MyComponent"');
  process.exit(1);
}

const pascalCaseName = toPascalCase(componentName);
const kebabCaseName = toKebabCase(pascalCaseName);
const names = { pascalCaseName, kebabCaseName };

const libRoot = resolve(process.cwd(), 'lib');
const siteRoot = resolve(process.cwd(), 'site');

console.log(`🚀 Scaffolding new component: ${pascalCaseName} (${kebabCaseName})`);

const templates = {
  core: {
    path: `${libRoot}/src/components/${pascalCaseName}/core/_${pascalCaseName}.ts`,
    content: getCoreTemplate(names)
  },
  registration: {
    path: `${libRoot}/src/components/${pascalCaseName}/core/${pascalCaseName}.ts`,
    content: getRegistrationTemplate(names)
  },
  spec: {
    path: `${libRoot}/src/components/${pascalCaseName}/core/_${pascalCaseName}.spec.ts`,
    content: getSpecTemplate(names)
  },
  specifications: {
    path: `${libRoot}/src/components/${pascalCaseName}/specifications/README.md`,
    content: getSpecificationsTemplate(names)
  },
  react: {
    path: `${libRoot}/src/components/${pascalCaseName}/react/React${pascalCaseName}.tsx`,
    content: getReactTemplate(names)
  },
  vue: {
    path: `${libRoot}/src/components/${pascalCaseName}/vue/Vue${pascalCaseName}.vue`,
    content: getVueTemplate(names)
  },
  vueIndex: {
    path: `${libRoot}/src/components/${pascalCaseName}/vue/index.ts`,
    content: getVueIndexTemplate(names)
  },
  litStory: {
    path: `${process.cwd()}/playgrounds/lit/src/stories/${pascalCaseName}.stories.ts`,
    content: getLitStoryTemplate(names)
  },
  reactStory: {
    path: `${process.cwd()}/playgrounds/react/src/stories/${pascalCaseName}.stories.tsx`,
    content: getReactStoryTemplate(names)
  },
  vueStory: {
    path: `${process.cwd()}/playgrounds/vue/src/stories/${pascalCaseName}.stories.ts`,
    content: getVueStoryTemplate(names)
  },
  siteExamples: {
    path: `${siteRoot}/docs/examples/${pascalCaseName}Examples.vue`,
    content: getSiteExamplesTemplate(names)
  },
  siteDocs: {
    path: `${siteRoot}/docs/components/${kebabCaseName}.md`,
    content: getSiteDocsTemplate(names)
  }
};

// --- File and Directory Creation ---
console.log('📂 Creating files and directories...');
Object.values(templates).forEach(template => {
  if (!template.content) return;
  const dir = dirname(template.path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(template.path, template.content);
  console.log(`  ✅ Created ${template.path.replace(process.cwd(), '')}`);
});

// --- Modify Existing Files ---

// 1. Add exports to v2/lib/package.json
console.log('📦 Updating v2/lib/package.json...');
const libPackageJsonPath = resolve(libRoot, 'package.json');
const libPackageJson = JSON.parse(readFileSync(libPackageJsonPath, 'utf-8'));
libPackageJson.exports[`./${kebabCaseName}`] = {
  types: `./dist/components/${pascalCaseName}/core/_${pascalCaseName}.d.ts`,
  import: `./dist/components/${pascalCaseName}/core/_${pascalCaseName}.js`
};
libPackageJson.exports[`./${kebabCaseName}/react`] = {
  types: `./dist/components/${pascalCaseName}/react/React${pascalCaseName}.d.ts`,
  import: `./dist/components/${pascalCaseName}/react/React${pascalCaseName}.js`
};
libPackageJson.exports[`./${kebabCaseName}/vue`] = {
  types: `./dist/components/${pascalCaseName}/vue/index.d.ts`,
  import: `./dist/components/${pascalCaseName}/vue/index.js`
};
writeFileSync(libPackageJsonPath, JSON.stringify(libPackageJson, null, 2) + '
');
console.log('  ✅ Added exports to v2/lib/package.json');

// 2. Add export to v2/lib/src/index.ts
console.log('📦 Updating v2/lib/src/index.ts...');
const libIndexPath = resolve(libRoot, 'src/index.ts');
appendFileSync(libIndexPath, `export * from './components/${pascalCaseName}/core/_${pascalCaseName}';
`);
console.log('  ✅ Added export to v2/lib/src/index.ts');

// 3. Add export to v2/lib/src/components/react/index.ts
console.log('📦 Updating v2/lib/src/components/react/index.ts...');
const reactIndexPath = resolve(libRoot, 'src/components/react/index.ts');
appendFileSync(reactIndexPath, `export * from '../${pascalCaseName}/react/React${pascalCaseName}';
`);
console.log('  ✅ Added export to v2/lib/src/components/react/index.ts');

// 4. Add to sidebar in v2/site/docs/.vitepress/config.mts
console.log('🌐 Updating Vitepress sidebar...');
const vitepressConfigPath = resolve(siteRoot, 'docs/.vitepress/config.mts');
let configContent = readFileSync(vitepressConfigPath, 'utf-8');
const newLink = `      { text: '${pascalCaseName}', link: '/components/${kebabCaseName}' },`;
const componentsRegex = /(function getComponents\(\s*\) {\s*return {\s*text: 'Components',\s*items: \[)([\s\S]*?)(\s*\]\s*})\s*})/m;
configContent = configContent.replace(componentsRegex, (match, prefix, items, suffix) => {
    const existingLinks = items.trim().split('\n');
    existingLinks.push(newLink);
    existingLinks.sort((a, b) => a.localeCompare(b)); // Keep it sorted
    return `${prefix}
${existingLinks.join('\n')}
${suffix}`
});
writeFileSync(vitepressConfigPath, configContent);
console.log('  ✅ Added component to Vitepress sidebar');

console.log('
🎉 Scaffolding complete! Next steps:');
console.log(`  1. Add a11y docs to v2/lib/src/components/${pascalCaseName}/specifications/`);
console.log('  2. Ask the agent to synthesize SpecSheet.md and implement the component.');
console.log('  3. Run `npm install` in `v2/lib` and `v2/site` if needed.');
console.log('  4. Run `npm run build` in `v2/lib` to make new exports available.');
