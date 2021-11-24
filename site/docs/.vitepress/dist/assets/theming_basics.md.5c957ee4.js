import{u as p,o,c as i,a,b as l,t as n,p as c,m as s}from"./app.dec57e8f.js";const r=s('<p><div class="table-of-contents"><ul><li><a href="#theming">Theming</a></li><li><a href="#ag-primary">--ag-primary</a></li><li><a href="#debugging">Debugging</a></li><li><a href="#lang">lang</a></li><li><a href="#title">title</a></li><li><a href="#description">description</a></li></ul></div></p><h1 id="theming-basics" tabindex="-1">Theming: Basics <a class="header-anchor" href="#theming-basics" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The theming reference is still incomplete.</p></div>',3),d={id:"frontmatter-title",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),g=s(`<p>Lot&#39;s of good <a href="https://vitepress.vuejs.org/guide/markdown.html#markdown-extensions" target="_blank" rel="noopener noreferrer">vitepress markdown examples here</a>.</p><h2 id="theming" tabindex="-1">Theming <a class="header-anchor" href="#theming" aria-hidden="true">#</a></h2><p>Vite&#39;s <a href="https://vitepress.vuejs.org/guide/theming.html#theming" target="_blank" rel="noopener noreferrer">theming guide</a></p><h2 id="ag-primary" tabindex="-1">--ag-primary <a class="header-anchor" href="#ag-primary" aria-hidden="true">#</a></h2><ul><li>Type: <code>string</code></li><li>Default: <code>/</code></li></ul><p>The <code>--ag-primary</code> CSS property represents your design system&#39;s \u201Cprimary\u201D color.</p><table><thead><tr><th>Tables</th><th style="text-align:center;">Are</th><th style="text-align:right;">Cool</th></tr></thead><tbody><tr><td>col 3 is</td><td style="text-align:center;">right-aligned</td><td style="text-align:right;">$1600</td></tr><tr><td>col 2 is</td><td style="text-align:center;">centered</td><td style="text-align:right;">$12</td></tr><tr><td>zebra stripes</td><td style="text-align:center;">are neat</td><td style="text-align:right;">$1</td></tr></tbody></table><p>\u{1F389} \u{1F4AF}</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip</p></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is an info box</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning</p></div><div class="danger custom-block"><p class="custom-block-title">WARNING</p><p>This is a dangerous warning</p></div><div class="danger custom-block"><p class="custom-block-title">STOP</p><p>Danger zone, do not proceed</p></div><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;MyComponent&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  base<span class="token operator">:</span> <span class="token string">&#39;/base/&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><div class="highlight-lines"><br><br><br><div class="highlighted">\xA0</div><br><br><br><br></div><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      msg<span class="token operator">:</span> <span class="token string">&#39;Highlighted!&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><div class="highlight-lines"><div class="highlighted">\xA0</div><br><br><div class="highlighted">\xA0</div><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br><br></div><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> <span class="token comment">// Highlighted</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      msg<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Highlighted!
      This line isn&#39;t highlighted,
      but this and the next 2 are.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      motd<span class="token operator">:</span> <span class="token string">&#39;VitePress is awesome&#39;</span><span class="token punctuation">,</span>
      lorem<span class="token operator">:</span> <span class="token string">&#39;ipsum&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo in todos<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ todo.text }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><hr><h2 id="debugging" tabindex="-1">Debugging <a class="header-anchor" href="#debugging" aria-hidden="true">#</a></h2><p>You can use the <code>useData</code> helper to debug a particular page&#39;s configuration.</p>`,21),h=s(`<hr><h2 id="lang" tabindex="-1">lang <a class="header-anchor" href="#lang" aria-hidden="true">#</a></h2><ul><li>Type: <code>string</code></li><li>Default: <code>en-US</code></li></ul><p>The <code>lang</code> attribute for the site. This will render as a <code>&lt;html lang=&quot;en-US&quot;&gt;</code> tag in the page HTML.</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  lang<span class="token operator">:</span> <span class="token string">&#39;en-US&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="title" tabindex="-1">title <a class="header-anchor" href="#title" aria-hidden="true">#</a></h2><ul><li>Type: <code>string</code></li><li>Default: <code>VitePress</code></li></ul><p>Title for the site. This will be the suffix for all page titles, and displayed in the navbar.</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">&#39;VitePress&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="description" tabindex="-1">description <a class="header-anchor" href="#description" aria-hidden="true">#</a></h2><ul><li>Type: <code>string</code></li><li>Default: <code>A VitePress site</code></li></ul><p>Description for the site. This will render as a <code>&lt;meta&gt;</code> tag in the page HTML.</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  description<span class="token operator">:</span> <span class="token string">&#39;A VitePress site&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,13),f='{"title":"AgnosticUI Docs Frontmatter Heading Title Test","description":"hello","frontmatter":{"title":"AgnosticUI Docs Frontmatter Heading Title Test","editLink":true,"navbar":false,"sidebar":false,"head":[["meta",{"name":"description","content":"hello"}],["meta",{"name":"keywords","content":"super duper SEO"}]]},"headers":[{"level":2,"title":"Theming","slug":"theming"},{"level":2,"title":"--ag-primary","slug":"ag-primary"},{"level":2,"title":"Debugging","slug":"debugging"},{"level":2,"title":"lang","slug":"lang"},{"level":2,"title":"title","slug":"title"},{"level":2,"title":"description","slug":"description"}],"relativePath":"theming/basics.md","lastUpdated":1637522250481}',k={};function m(b){const{page:t}=p();return(e,v)=>(o(),i("div",null,[r,a("h1",d,[l(n(e.$frontmatter.title)+" ",1),u]),g,a("pre",null,n(c(t)),1),h]))}const T=Object.assign(k,{setup:m});export{f as __pageData,T as default};
