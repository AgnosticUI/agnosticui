import http from 'http';
import url, { URL } from 'url';
import fs from 'fs';
import path from 'path';
import { createServer as createViteServer } from 'vite';

/**
 * ============================================================================
 * UNIFIED COMPARATIVE DASHBOARD ROUTING ENGINE
 * ============================================================================
 * The preview server utilizes a single layout template containing two isolated
 * runtime zones to let human operators and automated metrics cross-examine
 * layout behaviors simultaneously.
 * ============================================================================
 */

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const COMPONENT_LIB_ROOT = path.resolve(__dirname, '..');
const COMPONENTS_ROOT = path.resolve(COMPONENT_LIB_ROOT, 'src/components');

const STYLES_DIST_ROOT = path.join(COMPONENT_LIB_ROOT, 'dist/styles');
const TOKENS_PATH = path.join(STYLES_DIST_ROOT, 'ag-tokens.css');
const FRAMEWORK_CSS_PATH = path.join(STYLES_DIST_ROOT, 'framework-components.css');

// eslint-disable-next-line no-undef
console.log(`[INIT] Component Library Root: ${COMPONENT_LIB_ROOT}`);

const tsExtensionRewritePlugin = () => ({
  name: 'ts-extension-rewrite',
  resolveId(source, importer) {
    if (source.endsWith('.js') && importer && importer.includes('/src/components/')) {
      const baseDir = path.dirname(importer);
      const targetTsFile = source.replace(/\.js$/, '.ts');
      const resolvedPath = path.resolve(baseDir, targetTsFile);
      if (fs.existsSync(resolvedPath)) return resolvedPath;
    }
    return null;
  }
});

const vite = await createViteServer({
  root: COMPONENT_LIB_ROOT,
  server: { middlewareMode: true },
  appType: 'custom',
  plugins: [tsExtensionRewritePlugin()],
  resolve: { extensions: ['.ts', '.js', '.json', '.css'] }
});

const server = http.createServer(async (req, res) => {
  const reqUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const componentName = reqUrl.searchParams.get('component');

  if (reqUrl.pathname === '/health') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('OK');
  }

  if (reqUrl.pathname !== '/') return vite.middlewares(req, res);
  if (!componentName) return res.writeHead(400).end('Missing component parameter');

  try {
    const componentDir = path.join(COMPONENTS_ROOT, componentName, 'core');
    const fallbackPath = path.join(componentDir, `_${componentName}Fallback.ts`);
    const cssPath = path.join(componentDir, `${componentName.toLowerCase()}-structure.module.css`);

    const module = await vite.ssrLoadModule(fallbackPath);
    const fallbackFn = module[`_${componentName}Fallback`];

    const props = {};
    reqUrl.searchParams.forEach((value, key) => {
      if (key === 'component') return;
      props[key] = value === 'true' ? true : value === 'false' ? false : value;
    });

    if (!props.slotContent && !props.slotDefault) {
      props.slotContent = props.slotDefault = 'Preview Content';
    }

    const renderedMarkup = fallbackFn(props);
    let globalTokens = fs.existsSync(TOKENS_PATH) ? fs.readFileSync(TOKENS_PATH, 'utf8') : '';
    let frameworkStyles = fs.existsSync(FRAMEWORK_CSS_PATH) ? fs.readFileSync(FRAMEWORK_CSS_PATH, 'utf8') : '';
    let componentStructure = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, 'utf8') : '';

    const customTagName = 'ag-' + componentName.toLowerCase();
    const clientScriptSrc = '/src/components/' + componentName + '/core/' + componentName + '.ts';

    // Renders the twin panel testing template setup with clean visual boundaries
    const responseHtml = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><style>' + 
      globalTokens + frameworkStyles + componentStructure + 
      ' .ag-split-dashboard { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; padding: 2rem; font-family: monospace; }' +
      ' .ag-panel { border: 1px dashed #ccc; padding: 1.5rem; border-radius: 6px; background: #fafafa; }' +
      ' .ag-metrics-box { margin-top: 1.5rem; padding: 0.75rem; background: #eee; border-radius: 4px; font-size: 0.85rem; }' +
      ' ' + customTagName + ' { display: inline-block; vertical-align: top; }' +
      ' *, *::before, *::after { transition: none !important; animation: none !important; caret-color: transparent !important; }</style>' +
      '</head><body><div class="ag-split-dashboard">' +
      
      ' <div class="ag-panel" id="panel-ssr"><h2>1. Prehydrated Fallback</h2>' +
      '   <div class="ag-render-envelope"><div class="ag-static-wrapper">' + renderedMarkup + '</div></div>' +
      '   <div class="ag-metrics-box" id="stats-ssr"><p>Calculating...</p></div>' +
      ' </div>' +

      ' <div class="ag-panel" id="panel-hydrated"><h2>2. Client Hydrated</h2>' +
      '   <div class="ag-render-envelope"><' + customTagName + ' id="hydrated-target">' + renderedMarkup + '</' + customTagName + '></div>' +
      '   <div class="ag-metrics-box" id="stats-hydrated"><p>Calculating...</p></div>' +
      ' </div>' +

      '</div>' +
      '<script type="module" src="' + clientScriptSrc + '"></script>' +
      '</body></html>';

    const transformedHtml = await vite.transformIndexHtml(req.url, responseHtml);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(transformedHtml);
  } catch (error) {
    res.writeHead(500).end(error.message);
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  // eslint-disable-next-line no-undef
  console.log(`SSR Preview Server listening on http://localhost:${PORT}`);
});
