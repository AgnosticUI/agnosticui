import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const isStaged = process.argv.includes('--staged');
const CANONICAL_URL = 'https://agnosticui.com/a2ui/v1/catalog.json';

const grepArgs = ['grep', '-l', ...(isStaged ? ['--cached'] : []), 'agnosticui.com', '--', 'v2/'];
let files = [];
try {
  const out = execFileSync('git', grepArgs, { encoding: 'utf8' });
  files = out.split('\n').filter(Boolean);
} catch (err) {
  if (err.status !== 1) throw err;
}

const PATTERN =
  /(?:catalogId|Catalog ID|AGNOSTICUI_CATALOG_ID|EXPECTED_CATALOG_ID|agnosticui-catalog\.json)[\s"'`:=()-]{1,40}(https?:\/\/agnosticui\.com[^\s"'`),;>\]]*)/g;

const violations = [];

for (const file of files) {
  const content = isStaged
    ? execFileSync('git', ['show', ':' + file], { encoding: 'utf8' })
    : readFileSync(file, 'utf8');

  for (const match of content.matchAll(PATTERN)) {
    const foundUrl = match.at(1);
    if (foundUrl !== CANONICAL_URL) {
      const line = content.slice(0, match.index).split('\n').length;
      violations.push({ file, line, foundUrl });
    }
  }
}

if (violations.length > 0) {
  console.error(
    'ERROR: Truncated or invalid catalogId URL detected. All references must use ' + CANONICAL_URL + ':'
  );
  for (const v of violations) {
    console.error('  ' + v.file + ':' + v.line + ' -> ' + v.foundUrl);
  }
  process.exit(1);
}

console.log('✅ All catalogId references use ' + CANONICAL_URL);
