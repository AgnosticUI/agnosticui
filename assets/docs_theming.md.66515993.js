import{_ as n,c as s,o as a,m as t}from"./app.e7f9f7fe.js";const h=`{"title":"Theming AgnosticUI","description":"Use AgnosticUI's CSS custom properties to craft your own flexible design systems","frontmatter":{"title":"Theming AgnosticUI","description":"Use AgnosticUI's CSS custom properties to craft your own flexible design systems","editLink":true,"navbar":true,"sidebar":true,"head":[["meta",{"name":"description","content":"hello"}],["meta",{"name":"keywords","content":"super duper SEO"}]]},"headers":[{"level":2,"title":"Example of Theming with CSS Custom Properties","slug":"example-of-theming-with-css-custom-properties"},{"level":2,"title":"Color tokens","slug":"color-tokens"},{"level":2,"title":"Other Tokens","slug":"other-tokens"}],"relativePath":"docs/theming.md","lastUpdated":1637546437322}`,o={},p=t(`<h1 id="theming-agnosticui" tabindex="-1">Theming AgnosticUI <a class="header-anchor" href="#theming-agnosticui" aria-hidden="true">#</a></h1><p>AgnosticUI uses <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" target="_blank" rel="noopener noreferrer">CSS custom properties</a> to allow for a customized look and feel. These custom properties are prefixed with <code>--agnostic-</code> which helps to prevent any potential naming collisions with other stylesheets.</p><h2 id="example-of-theming-with-css-custom-properties" tabindex="-1">Example of Theming with CSS Custom Properties <a class="header-anchor" href="#example-of-theming-with-css-custom-properties" aria-hidden="true">#</a></h2><p>Here&#39;s an example of how you might override AgnosticUI&#39;s default CSS custom properties to reflect your brand&#39;s <code>primary</code>, <code>secondary</code>, and <code>error</code> colors while also using a particular Google font:</p><div class="language-css"><pre><code><span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;https://fonts.googleapis.com/css2?family=Roboto:wght@100&amp;display=swap&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--agnostic-font-family</span><span class="token punctuation">:</span> <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;Roboto&#39;</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
  <span class="token property">--agnostic-primary</span><span class="token punctuation">:</span> #12adba<span class="token punctuation">;</span>
  <span class="token comment">/* from / to are used for gradients and things like raised buttons */</span>
  <span class="token property">--agnostic-primary-from</span><span class="token punctuation">:</span> #88d6dc<span class="token punctuation">;</span>
  <span class="token property">--agnostic-primary-to</span><span class="token punctuation">:</span> #109ba7<span class="token punctuation">;</span>
  <span class="token property">--agnostic-primary-hover</span><span class="token punctuation">:</span> #41bdc7<span class="token punctuation">;</span>
  <span class="token property">--agnostic-secondary</span><span class="token punctuation">:</span> #1259ba<span class="token punctuation">;</span>
  <span class="token property">--agnostic-secondary-from</span><span class="token punctuation">:</span> #417ac7<span class="token punctuation">;</span>
  <span class="token property">--agnostic-secondary-to</span><span class="token punctuation">:</span> #1050a7<span class="token punctuation">;</span>
  <span class="token property">--agnostic-secondary-hover</span><span class="token punctuation">:</span> #598ace<span class="token punctuation">;</span>
  <span class="token property">--agnostic-error</span><span class="token punctuation">:</span> #a31818<span class="token punctuation">;</span>
  <span class="token property">--agnostic-error-dark</span><span class="token punctuation">:</span> #5f0e0e<span class="token punctuation">;</span>
  <span class="token property">--agnostic-error-light</span><span class="token punctuation">:</span> #f8cdcd<span class="token punctuation">;</span>
  <span class="token property">--agnostic-error-border</span><span class="token punctuation">:</span> #e6c4c4<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="color-tokens" tabindex="-1">Color tokens <a class="header-anchor" href="#color-tokens" aria-hidden="true">#</a></h2><p>Here is a full list of the available color tokens at time of writing:</p><div class="language-css"><pre><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--agnostic-primary</span><span class="token punctuation">:</span> #077acb<span class="token punctuation">;</span>

  <span class="token comment">/* from / to are used for gradients and things like raised buttons */</span>
  <span class="token property">--agnostic-primary-from</span><span class="token punctuation">:</span> #0662a2<span class="token punctuation">;</span>
  <span class="token property">--agnostic-primary-to</span><span class="token punctuation">:</span> #2087d0<span class="token punctuation">;</span>
  <span class="token property">--agnostic-primary-hover</span><span class="token punctuation">:</span> #2087d0<span class="token punctuation">;</span>

  <span class="token comment">/* Used on Alert background */</span>
  <span class="token property">--agnostic-primary-light</span><span class="token punctuation">:</span> #dcf1ff<span class="token punctuation">;</span>
  <span class="token property">--agnostic-primary-border</span><span class="token punctuation">:</span> #c1d9e9<span class="token punctuation">;</span>
  <span class="token property">--agnostic-primary-dark</span><span class="token punctuation">:</span> #063f69<span class="token punctuation">;</span>
  <span class="token property">--agnostic-secondary</span><span class="token punctuation">:</span> #c94d2b<span class="token punctuation">;</span>
  <span class="token property">--agnostic-secondary-from</span><span class="token punctuation">:</span> #a33e23<span class="token punctuation">;</span>
  <span class="token property">--agnostic-secondary-to</span><span class="token punctuation">:</span> #bc583d<span class="token punctuation">;</span>
  <span class="token property">--agnostic-secondary-hover</span><span class="token punctuation">:</span> #bc583d<span class="token punctuation">;</span>
  <span class="token property">--agnostic-action</span><span class="token punctuation">:</span> #2fb751<span class="token punctuation">;</span>
  <span class="token property">--agnostic-action-light</span><span class="token punctuation">:</span> #e2ffe9<span class="token punctuation">;</span>
  <span class="token property">--agnostic-action-border</span><span class="token punctuation">:</span> #c7f0d1<span class="token punctuation">;</span>
  <span class="token property">--agnostic-action-from</span><span class="token punctuation">:</span> #198333<span class="token punctuation">;</span>
  <span class="token property">--agnostic-action-to</span><span class="token punctuation">:</span> #41d466<span class="token punctuation">;</span>
  <span class="token property">--agnostic-action-hover</span><span class="token punctuation">:</span> #3dd262<span class="token punctuation">;</span>
  <span class="token property">--agnostic-warning-light</span><span class="token punctuation">:</span> #fff5d4<span class="token punctuation">;</span>
  <span class="token property">--agnostic-warning-border-accent</span><span class="token punctuation">:</span> #ecd386<span class="token punctuation">;</span>
  <span class="token property">--agnostic-warning-border</span><span class="token punctuation">:</span> #f0e3b9<span class="token punctuation">;</span>
  <span class="token property">--agnostic-warning-dark</span><span class="token punctuation">:</span> #634902<span class="token punctuation">;</span>
  <span class="token property">--agnostic-error</span><span class="token punctuation">:</span> #e02e2e<span class="token punctuation">;</span>
  <span class="token property">--agnostic-error-dark</span><span class="token punctuation">:</span> #771414<span class="token punctuation">;</span>
  <span class="token property">--agnostic-error-light</span><span class="token punctuation">:</span> #ffe0e0<span class="token punctuation">;</span>
  <span class="token property">--agnostic-error-border</span><span class="token punctuation">:</span> #eec8c8<span class="token punctuation">;</span>
  <span class="token property">--agnostic-gray-extra-light</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>
  <span class="token property">--agnostic-gray-light</span><span class="token punctuation">:</span> #e9e9e9<span class="token punctuation">;</span>
  <span class="token property">--agnostic-gray-mid</span><span class="token punctuation">:</span> #d8d8d8<span class="token punctuation">;</span>
  <span class="token property">--agnostic-gray-mid-dark</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
  <span class="token property">--agnostic-gray-dark</span><span class="token punctuation">:</span> #757575<span class="token punctuation">;</span>
  <span class="token property">--agnostic-dark</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">--agnostic-light</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">--agnostic-disabled-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--agnostic-gray-light<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--agnostic-disabled-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--agnostic-gray-dark<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><em>See latest colors off <code>master</code> branch on GitHub \u2014 <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-css/public/css-src/colors.css" target="_blank" rel="noopener noreferrer">colors.css</a>.</em></p><h2 id="other-tokens" tabindex="-1">Other Tokens <a class="header-anchor" href="#other-tokens" aria-hidden="true">#</a></h2><p>Of course colors aren&#39;t the only things in AgnosticUI that are themable! The <code>:root</code> defined CSS tokens used by AgnosticUI are located in <code>agnostic-css</code> package&#39;s <a href="https://github.com/AgnosticUI/agnosticui/tree/master/agnostic-css/public/css-src" target="_blank" rel="noopener noreferrer">public/css-src</a> directory. These source files are, in fact, what gets concatenated and minified into the <code>dist/common.min.css</code> global CSS file we ask you to <code>import</code>. Simply override variables you care about (same as described above) after importing the <code>dist/common.min.css&#39;</code> file, and AgnosticUI components will render according to those customizations.</p><div class="mbe24"></div><p><em>See also the <a href="./utilities.html">Utilities page</a> which goes over available CSS utilities for layout.</em></p>`,13),e=[p];function c(r,i,l,u,k,d){return a(),s("div",null,e)}var m=n(o,[["render",c]]);export{h as __pageData,m as default};
