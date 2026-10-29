import http from 'http';
import url, { URL } from 'url';
import fs from 'fs';
import path from 'path';
import { createServer as createViteServer } from 'vite';

// Usage: npx tsx v2/lib/scripts/serve-ssr-previews.mjs

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const COMPONENT_LIB_ROOT = path.resolve(__dirname, '..');
const COMPONENTS_ROOT = path.resolve(COMPONENT_LIB_ROOT, 'src/components');

// eslint-disable-next-line no-undef
console.log(`[INIT] Component Library Root: ${COMPONENT_LIB_ROOT}`);

const tsExtensionRewritePlugin = () => ({
  name: 'ts-extension-rewrite',
  resolveId(source, importer) {
    if (source.endsWith('.js') && importer && importer.includes('/src/components/')) {
      const baseDir = path.dirname(importer);
      const targetTsFile = source.replace(/\.js$/, '.ts');
      const resolvedPath = path.resolve(baseDir, targetTsFile);
      
      if (fs.existsSync(resolvedPath)) {
        return resolvedPath;
      }
    }
    return null;
  }
});

const vite = await createViteServer({
  root: COMPONENT_LIB_ROOT,
  server: { middlewareMode: true },
  appType: 'custom',
  plugins: [tsExtensionRewritePlugin()],
  resolve: {
    extensions: ['.ts', '.js', '.json', '.css']
  }
});

const server = http.createServer(async (req, res) => {
  const reqUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const componentName = reqUrl.searchParams.get('component');

  // eslint-disable-next-line no-undef
  console.log(`[SERVER REQ] Path: ${reqUrl.pathname} ${reqUrl.search}`);

  if (reqUrl.pathname === '/health') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('OK');
  }

  if (reqUrl.pathname !== '/') {
    return vite.middlewares(req, res);
  }

  if (!componentName) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    return res.end('Missing component parameter (?component=Name)');
  }

  try {
    const componentDir = path.join(COMPONENTS_ROOT, componentName, 'core');
    const fallbackPath = path.join(componentDir, `_${componentName}Fallback.ts`);
    const cssPath = path.join(componentDir, `${componentName.toLowerCase()}-structure.module.css`);

    if (!fs.existsSync(fallbackPath)) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end(`Fallback engine not found for component: ${componentName}`);
    }

    const module = await vite.ssrLoadModule(fallbackPath);
    const fallbackFn = module[`_${componentName}Fallback`];

    if (typeof fallbackFn !== 'function') {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      return res.end(`Export _${componentName}Fallback function not found.`);
    }

    // ─── DYNAMIC PROP PARSING MATRIX ───
    // Build properties payload directly out of active URL query arguments
    const props = {};
    reqUrl.searchParams.forEach((value, key) => {
      if (key === 'component') return;
      // Parse boolean strings safely
      if (value === 'true') props[key] = true;
      else if (value === 'false') props[key] = false;
      else props[key] = value;
    });

    // Provide generic default slots if none are passed in the URL parameters
    if (componentName === 'Alert' && !props.slotDefault) {
      props.slotDefault = 'Alert Notice: System status nominal.';
    } else if (componentName === 'Button' && !props.slotContent) {
      props.slotContent = 'Click Me';
    }

    const renderedMarkup = fallbackFn(props);

    let inlineStyles = '';
    if (fs.existsSync(cssPath)) {
      inlineStyles = fs.readFileSync(cssPath, 'utf8');
    }

    const customTagName = `ag-${componentName.toLowerCase()}`;
    const clientScriptSrc = `/src/components/${componentName}/core/${componentName}.ts`;

    const responseHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Drift Preview - ${componentName}</title>
        <style>
          ${inlineStyles}
          
          /* Clean, neutral agnostic testing layout shell */
          .ag-preview-shell {
            display: block;
            margin: 0;
            padding: 1rem;
            box-sizing: border-box;
          }

          *, *::before, *::after {
            transition: none !important;
            animation: none !important;
            caret-color: transparent !important;
          }
        </style>
        <script type="module" src="${clientScriptSrc}"></script>
      </head>
      <body>
        <div class="ag-preview-shell">
          <${customTagName}>
            ${renderedMarkup}
          </${customTagName}>
        </div>
      </body>
      </html>
    `;

    const transformedHtml = await vite.transformIndexHtml(req.url, responseHtml);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(transformedHtml);

  } catch (error) {
    // eslint-disable-next-line no-undef
    console.error(`[SERVER ERROR]:`, error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end(`Server Error: ${error.message}`);
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  // eslint-disable-next-line no-undef
  console.log(`SSR Preview Server listening on http://localhost:${PORT}`);
});
