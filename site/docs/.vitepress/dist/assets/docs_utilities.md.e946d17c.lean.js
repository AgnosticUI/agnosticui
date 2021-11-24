import{_ as n,c as s,o as a,m as t}from"./app.dec57e8f.js";const f='{"title":"Utility classes","description":"","frontmatter":{},"headers":[{"level":2,"title":"Layout","slug":"layout"},{"level":3,"title":"Flexbox","slug":"flexbox"},{"level":3,"title":"Margins and Padding","slug":"margins-and-padding"}],"relativePath":"docs/utilities.md","lastUpdated":1637522250478}',p={},o=t(`__VP_STATIC_START__<h1 id="utility-classes" tabindex="-1">Utility classes <a class="header-anchor" href="#utility-classes" aria-hidden="true">#</a></h1><h2 id="layout" tabindex="-1">Layout <a class="header-anchor" href="#layout" aria-hidden="true">#</a></h2><h3 id="flexbox" tabindex="-1">Flexbox <a class="header-anchor" href="#flexbox" aria-hidden="true">#</a></h3><p>For now, we only support Flexbox for layout. You&#39;re encouraged to prefer the platform for things like <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid" target="_blank" rel="noopener noreferrer">CSS Grid</a>.</p><p>The names used are hopefully self-evident enough to be memorable (you will need to understand the basics of <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox" target="_blank" rel="noopener noreferrer">Flexbox</a> itself to use these utitilies effectively).</p><div class="language-css"><pre><code><span class="token selector">.flex</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.flex-inline</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-flex <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.flex-fill</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 1 1 auto <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.flex-row</span> <span class="token punctuation">{</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> row <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.flex-column</span> <span class="token punctuation">{</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.flex-grow-0</span> <span class="token punctuation">{</span>
  <span class="token property">flex-grow</span><span class="token punctuation">:</span> 0 <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.flex-grow-1</span> <span class="token punctuation">{</span>
  <span class="token property">flex-grow</span><span class="token punctuation">:</span> 1 <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.flex-shrink-0</span> <span class="token punctuation">{</span>
  <span class="token property">flex-shrink</span><span class="token punctuation">:</span> 0 <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.flex-shrink-1</span> <span class="token punctuation">{</span>
  <span class="token property">flex-shrink</span><span class="token punctuation">:</span> 1 <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.flex-wrap</span> <span class="token punctuation">{</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.flex-nowrap</span> <span class="token punctuation">{</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> nowrap <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.items-start</span> <span class="token punctuation">{</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> flex-start <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.items-end</span> <span class="token punctuation">{</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> flex-end <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.items-center</span> <span class="token punctuation">{</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.items-baseline</span> <span class="token punctuation">{</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> baseline <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.items-stretch</span> <span class="token punctuation">{</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> stretch <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.self-start</span> <span class="token punctuation">{</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span> flex-start <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.self-end</span> <span class="token punctuation">{</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span> flex-end <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.self-center</span> <span class="token punctuation">{</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span> center <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.self-baseline</span> <span class="token punctuation">{</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span> baseline <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.self-stretch</span> <span class="token punctuation">{</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span> stretch <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.justify-start</span> <span class="token punctuation">{</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-start <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.justify-end</span> <span class="token punctuation">{</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-end <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.justify-center</span> <span class="token punctuation">{</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.justify-between</span> <span class="token punctuation">{</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.justify-around</span> <span class="token punctuation">{</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-around <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.content-start</span> <span class="token punctuation">{</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> flex-start <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.content-end</span> <span class="token punctuation">{</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> flex-end <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.content-center</span> <span class="token punctuation">{</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> center <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.content-between</span> <span class="token punctuation">{</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> space-between <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.content-around</span> <span class="token punctuation">{</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> space-around <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.content-stretch</span> <span class="token punctuation">{</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> stretch <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="margins-and-padding" tabindex="-1">Margins and Padding <a class="header-anchor" href="#margins-and-padding" aria-hidden="true">#</a></h3><p>AgnosticUI is thrilled to leverage <a href="https://css-tricks.com/css-logical-properties-and-values/" target="_blank" rel="noopener noreferrer">CSS Logical Properties</a> in place of <code>margin</code> and <code>padding</code>. This approach supports left-to-right, right-to-left, top-to-bottom, etc., \u201Cout-the-box\u201D.</p><div class="mbe24"></div><p><em>For shorthand usage where we&#39;re giving the same value in each direction (e.g. <code>margin: 0;</code> or <code>margin: var(--fluid 8);</code>) we use legacy <code>margin</code> and <code>padding</code> respectively.</em></p><p>While you&#39;re getting comfortable with how <em>logical properties</em> work, you can get started by mentally mapping as follows:</p><table><thead><tr><th>Old way</th><th style="text-align:right;">New way</th></tr></thead><tbody><tr><td><code>margin-left</code></td><td style="text-align:right;"><code>margin-inline-start</code></td></tr><tr><td><code>margin-right</code></td><td style="text-align:right;"><code>margin-inline-end</code></td></tr><tr><td><code>margin-top</code></td><td style="text-align:right;"><code>margin-block-start</code></td></tr><tr><td><code>margin-bottom</code></td><td style="text-align:right;"><code>margin-block-end</code></td></tr></tbody></table><div class="mbe24"></div><p>Here&#39;s a cheatsheet for our naming conventions. Note we abbreviate <code>var(--fluid-8)</code> (which results in <code>.5rem</code> or, essentially, <code>8px</code> fluid) with just <code>8</code> for brevity below:</p><table><thead><tr><th>Letter</th><th style="text-align:center;">Stands for</th><th style="text-align:right;">Example</th></tr></thead><tbody><tr><td>m is</td><td style="text-align:center;">margin</td><td style="text-align:right;"><code>m8</code>=<code>margin: 8</code></td></tr><tr><td>p is</td><td style="text-align:center;">padding</td><td style="text-align:right;"><code>p8</code>=<code>padding: 8</code></td></tr><tr><td>b is</td><td style="text-align:center;">block</td><td style="text-align:right;"><code>block</code></td></tr><tr><td>i is</td><td style="text-align:center;">inline</td><td style="text-align:right;"><code>inline</code></td></tr><tr><td>s is</td><td style="text-align:center;">start</td><td style="text-align:right;"><code>start</code></td></tr><tr><td>e is</td><td style="text-align:center;">end</td><td style="text-align:right;"><code>start</code></td></tr></tbody></table><p>Pulling from the following utilities you could, for example, add <code>.5rem</code> or <code>8px</code> of margin to the end of a <code>&lt;section&gt;</code> block with:</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbe8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ... --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-css"><pre><code><span class="token selector">.m0</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.m2</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-2<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.m4</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-4<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.m6</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-6<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.m8</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-8<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.m10</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-10<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.m12</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-12<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.m14</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-14<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.m16</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-16<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.m18</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-18<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.m20</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-20<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.m24</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-24<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.m32</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-32<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.m36</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-36<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.m40</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-40<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.m48</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-48<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.m56</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-56<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.m64</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-64<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* While you&#39;re getting used to this think &quot;margin-left: 0&quot; here */</span>
<span class="token selector">.mis0</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-start</span><span class="token punctuation">:</span> 0 <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mis2</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-2<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mis4</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-4<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mis6</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-6<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mis8</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-8<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mis10</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-10<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mis12</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-12<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mis14</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-14<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mis16</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-16<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mis18</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-18<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mis20</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-20<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mis24</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-24<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mis32</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-32<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mis36</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-36<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mis40</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-40<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mis48</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-48<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mis56</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-56<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mis64</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-64<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* While you&#39;re getting used to this think &quot;margin-right: 0&quot; here */</span>
<span class="token selector">.mie0</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-end</span><span class="token punctuation">:</span> 0 <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mie2</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-2<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mie4</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-4<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mie6</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-6<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mie8</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-8<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mie10</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-10<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mie12</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-12<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mie14</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-14<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mie16</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-16<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mie18</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-18<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mie20</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-20<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mie24</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-24<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mie32</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-32<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mie36</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-36<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mie40</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-40<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mie48</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-48<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mie56</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-56<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mie64</span> <span class="token punctuation">{</span>
  <span class="token property">margin-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-64<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* While you&#39;re getting used to this think &quot;margin-top: 0&quot; here */</span>
<span class="token selector">.mbs0</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-start</span><span class="token punctuation">:</span> 0 <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbs2</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-2<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbs4</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-4<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbs6</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-6<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbs8</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-8<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbs10</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-10<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbs12</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-12<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbs14</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-14<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbs16</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-16<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbs18</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-18<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbs20</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-20<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbs24</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-24<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbs32</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-32<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbs36</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-36<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbs40</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-40<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbs48</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-48<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbs56</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-56<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbs64</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-64<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* While you&#39;re getting used to this think &quot;margin-bottom: 0&quot; here */</span>
<span class="token selector">.mbe0</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-end</span><span class="token punctuation">:</span> 0 <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbe2</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-2<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbe4</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-4<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbe6</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-6<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbe8</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-8<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbe10</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-10<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbe12</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-12<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbe14</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-14<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbe16</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-16<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbe18</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-18<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbe20</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-20<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbe24</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-24<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbe32</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-32<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbe36</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-36<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbe40</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-40<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbe48</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-48<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbe56</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-56<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mbe64</span> <span class="token punctuation">{</span>
  <span class="token property">margin-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-64<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.p0</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0 <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.p2</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-2<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.p4</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-4<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.p6</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-6<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.p8</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-8<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.p10</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-10<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.p12</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-12<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.p14</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-14<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.p16</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-16<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.p18</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-18<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.p20</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-20<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.p24</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-24<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.p32</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-32<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.p36</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-36<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.p40</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-40<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.p48</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-48<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.p56</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-56<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.p64</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-64<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pis0</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-start</span><span class="token punctuation">:</span> 0 <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pis2</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-2<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pis4</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-4<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pis6</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-6<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pis8</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-8<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pis10</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-10<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pis12</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-12<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pis14</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-14<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pis16</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-16<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pis18</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-18<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pis20</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-20<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pis24</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-24<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pis32</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-32<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pis36</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-36<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pis40</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-40<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pis48</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-48<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pis56</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-56<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pis64</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-64<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pie0</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-end</span><span class="token punctuation">:</span> 0 <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pie2</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-2<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pie4</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-4<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pie6</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-6<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pie8</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-8<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pie10</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-10<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pie12</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-12<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pie14</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-14<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pie16</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-16<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pie18</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-18<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pie20</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-20<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pie24</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-24<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pie32</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-32<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pie36</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-36<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pie40</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-40<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pie48</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-48<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pie56</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-56<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pie64</span> <span class="token punctuation">{</span>
  <span class="token property">padding-inline-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-64<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbs0</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-start</span><span class="token punctuation">:</span> 0 <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbs2</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-2<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbs4</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-4<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbs6</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-6<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbs8</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-8<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbs10</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-10<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbs12</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-12<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbs14</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-14<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbs16</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-16<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbs18</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-18<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbs20</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-20<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbs24</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-24<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbs32</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-32<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbs36</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-36<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbs40</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-40<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbs48</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-48<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbs56</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-56<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbs64</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-start</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-64<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbe0</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-end</span><span class="token punctuation">:</span> 0 <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbe2</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-2<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbe4</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-4<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbe6</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-6<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbe8</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-8<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbe10</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-10<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbe12</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-12<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbe14</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-14<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbe16</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-16<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbe18</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-18<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbe20</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-20<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbe24</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-24<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbe32</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-32<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbe36</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-36<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbe40</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-40<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbe48</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-48<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbe56</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-56<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pbe64</span> <span class="token punctuation">{</span>
  <span class="token property">padding-block-end</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fluid-64<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>__VP_STATIC_END__`,18),c=[o];function e(u,l,i,k,r,m){return a(),s("div",null,c)}var g=n(p,[["render",e]]);export{f as __pageData,g as default};
