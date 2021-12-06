import{_ as s,c as n,o as a,t as e}from"./app.308e4403.js";const k=`{"title":"Theming AgnosticUI","description":"Use AgnosticUI's CSS custom properties to craft your own flexible design systems","frontmatter":{"title":"Theming AgnosticUI","description":"Use AgnosticUI's CSS custom properties to craft your own flexible design systems","editLink":true,"navbar":true,"sidebar":true,"head":[["meta",{"name":"description","content":"hello"}],["meta",{"name":"keywords","content":"super duper SEO"}]]},"headers":[{"level":2,"title":"Example of Theming with CSS Custom Properties","slug":"example-of-theming-with-css-custom-properties"},{"level":2,"title":"CSS Custom Properties","slug":"css-custom-properties"},{"level":3,"title":"Colors","slug":"colors"},{"level":3,"title":"Sizes","slug":"sizes"},{"level":3,"title":"Typography","slug":"typography"},{"level":3,"title":"Focus","slug":"focus"},{"level":3,"title":"Reset","slug":"reset"},{"level":3,"title":"Other Tokens","slug":"other-tokens"},{"level":2,"title":"Overriding AgnosticUI","slug":"overriding-agnosticui"},{"level":2,"title":"Design Tokens","slug":"design-tokens"}],"relativePath":"docs/theming.md","lastUpdated":1638806350448}`,t={},o=e(`__VP_STATIC_START__<h1 id="theming-agnosticui" tabindex="-1">Theming AgnosticUI <a class="header-anchor" href="#theming-agnosticui" aria-hidden="true">#</a></h1><p>AgnosticUI uses <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" target="_blank" rel="noopener noreferrer">CSS custom properties</a> to allow for a customized look and feel. These custom properties are prefixed with <code>--agnostic-</code> which helps to prevent any potential naming collisions with other stylesheets.</p><h2 id="example-of-theming-with-css-custom-properties" tabindex="-1">Example of Theming with CSS Custom Properties <a class="header-anchor" href="#example-of-theming-with-css-custom-properties" aria-hidden="true">#</a></h2><p>Here&#39;s an example of how you might override AgnosticUI&#39;s default CSS custom properties to reflect your brand&#39;s <code>primary</code>, <code>secondary</code>, and <code>error</code> colors while also using a Google font:</p><div class="language-css"><pre><code><span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;https://fonts.googleapis.com/css2?family=Roboto:wght@100&amp;display=swap&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
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
</code></pre></div><h2 id="css-custom-properties" tabindex="-1">CSS Custom Properties <a class="header-anchor" href="#css-custom-properties" aria-hidden="true">#</a></h2><h3 id="colors" tabindex="-1">Colors <a class="header-anchor" href="#colors" aria-hidden="true">#</a></h3><p>Here is a full list of the available color tokens at time of writing:</p><div class="language-css"><pre><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
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
</code></pre></div><p><em>The GitHub-hosted <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-css/public/css-src/colors.css" target="_blank" rel="noopener noreferrer">colors.css</a> on <code>master</code> is the most up-to-date source of truth. AgnosticUI derives these CSS custom properties colors from its <a href="https://github.com/AgnosticUI/agnosticui/tree/master/agnostic-css/tokens/colors" target="_blank" rel="noopener noreferrer">colors design tokens</a>.</em></p><h3 id="sizes" tabindex="-1">Sizes <a class="header-anchor" href="#sizes" aria-hidden="true">#</a></h3><p>AgnosticUI uses the naming convention of: <code>--fluid-N</code> for <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-css/public/css-src/sizes.css" target="_blank" rel="noopener noreferrer">rem-based sizes</a>. AgnosticUI represents <code>-N</code> with pixel-size equivalent (if the root font is defined at <code>16px</code> which is normally the case); so <code>--fluid-16</code> is literally <code>1rem</code>, <code>--fluid-40</code> is literally <code>2.5rem</code> and so on. These are derived from the <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-css/tokens/sizes/sizes.json" target="_blank" rel="noopener noreferrer">size design tokens</a>.</p><p>You can see these in use in the <a href="https://agnosticui.github.io/agnosticui/docs/utilities.html#margins-and-padding" target="_blank" rel="noopener noreferrer">layout docs margins and padding section</a> <em>logical properties</em>.</p><h3 id="typography" tabindex="-1">Typography <a class="header-anchor" href="#typography" aria-hidden="true">#</a></h3><p>The <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-css/tokens/typography/typography.json" target="_blank" rel="noopener noreferrer">typography design tokens</a> are used to generate typography <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-css/public/css-src/typography.css#L6" target="_blank" rel="noopener noreferrer">CSS custom properties</a> which define a light-weight set of type definitions such as: header sizes, the main body font&#39;s color, families, etc., and a few other things.</p><h3 id="focus" tabindex="-1">Focus <a class="header-anchor" href="#focus" aria-hidden="true">#</a></h3><p>AgnosticUI uses a particular <em>focus ring</em> which is defined in <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-css/tokens/focus/focus.json" target="_blank" rel="noopener noreferrer">focus design tokens</a>. As many folks have varying aesthetic preferences for focus rings, you can either override these, or, more drastically redefine the design token values and regenerate.</p><h3 id="reset" tabindex="-1">Reset <a class="header-anchor" href="#reset" aria-hidden="true">#</a></h3><p>AgnosticUI&#39;s <code>common.min.css</code> contains a small <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-css/public/css-src/reset.css#L1" target="_blank" rel="noopener noreferrer">reset</a>.</p><h3 id="other-tokens" tabindex="-1">Other Tokens <a class="header-anchor" href="#other-tokens" aria-hidden="true">#</a></h3><p>The generated CSS custom properties are located in <code>agnostic-css</code> package&#39;s <a href="https://github.com/AgnosticUI/agnosticui/tree/master/agnostic-css/public/css-src" target="_blank" rel="noopener noreferrer">public/css-src</a> directory. These source files are, in fact, what gets concatenated and minified into the <code>dist/common.min.css</code> global CSS file we ask you to <code>import</code>.</p><div class="mbe24"></div><p>The <code>common</code> CSS custom properties are themselves derived from standards-based JSON <a href="https://www.w3.org/community/design-tokens/" target="_blank" rel="noopener noreferrer">Design Tokens</a> in a build process that utilizes <a href="https://github.com/amzn/style-dictionary" target="_blank" rel="noopener noreferrer">Style Dictionary</a>. Read more about the <a href="https://design-tokens.github.io/community-group/format/" target="_blank" rel="noopener noreferrer">design tokens spec here</a>.</p><div class="mbe24"></div><h2 id="overriding-agnosticui" tabindex="-1">Overriding AgnosticUI <a class="header-anchor" href="#overriding-agnosticui" aria-hidden="true">#</a></h2><p>First ensure that you&#39;ve imported the common CSS (e.g. <code>agnostic-PACKAGE/dist/common.min.css&#39;</code>), and any component-based CSS if applicable.</p><div class="mbe24"></div><p>Then, override any variables you care about (similar to how we did in the <a href="https://agnosticui.github.io/agnosticui/docs/theming.html#example-of-theming-with-css-custom-properties" target="_blank" rel="noopener noreferrer">earlier example</a>).</p><div class="mbe24"></div><p><em>See also the <a href="./utilities.html">Utilities page</a> which goes over available CSS utilities for layout.</em></p><div class="mbe24"></div><h2 id="design-tokens" tabindex="-1">Design Tokens <a class="header-anchor" href="#design-tokens" aria-hidden="true">#</a></h2><p><em>Please note that at time of writing we&#39;ve only recently adopted design tokens. Consider this area a bit of a moving target until we stabilize.</em></p><div class="mbe24"></div><p>As previously mentioned, many of the CSS custom properties in <code>common.min.css</code> are derived from <a href="https://design-tokens.github.io/community-group/format/" target="_blank" rel="noopener noreferrer">design tokens</a> using <a href="https://github.com/amzn/style-dictionary" target="_blank" rel="noopener noreferrer">Style Dictionary</a>. Likely, you&#39;ll simply want to override these custom properties from within your own scripts as described above. However, it is possible to more aggressively redefine some of the values to your liking and rebuild the properties via the command-line. This might make sense if you&#39;re taking an agressive forking strategy where you use AgnosticUI as a launching point of departure for your own completely customized codebase. Here are the places to look for how we build from design tokens: first look at the <a href="https://github.com/AgnosticUI/agnosticui/tree/master/agnostic-css/tokens" target="_blank" rel="noopener noreferrer">design tokens themselves</a>, and then have a look at the <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-css/package.json#L29" target="_blank" rel="noopener noreferrer">build script</a> which simply lets Style Dictionary convert the tokens into CSS custom properties <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-css/public/css-dist/common.concat.css#L116" target="_blank" rel="noopener noreferrer">used here</a>.</p><div class="mbe24"></div><p><em>Be forwarned that this sort of approach is probably not \u201Cupgrade-safe\u201D and you should not change the actual variable names used (just the values), as these variable names are referenced from within the AgnosticUI component codebase.</em></p>__VP_STATIC_END__`,37),p=[o];function r(c,i,l,u,d,g){return a(),n("div",null,p)}var m=s(t,[["render",r]]);export{k as __pageData,m as default};
