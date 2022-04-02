import{_ as a,c as s,o as n,d as t}from"./app.9daab52c.js";const d='{"title":"Tags","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"}],"relativePath":"docs/css/tags.md","lastUpdated":1648872579794}',p={},e=t(`<h1 id="tags" tabindex="-1">Tags <a class="header-anchor" href="#tags" aria-hidden="true">#</a></h1><p><code>Tag</code> components can be used as badges or pills that provide categorical information to users. Avoid overuse of tags as users of screen readers and other assistive technologies may find them to be \u201Cnoisy\u201D.</p><div class="mbs24"></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><p>To use AgnosticUI as a CSS only framework, you can simply link to the <code>common.min.css</code> and <code>components.min.css</code> files. These can be served from a CDN (as you&#39;ll see in the following example), or relative to your project.</p><p><span class="tag mie6">new</span></p><p><span class="tag tag-success mie6">success</span></p><p><span class="tag tag-info mie6">info</span></p><p><span class="tag tag-warning mie6">warning</span></p><p><span class="tag tag-error mie6">danger</span></p><div class="mbe24"></div><details class="disclose disclose-bordered"><summary class="disclose-title">View source</summary><div class="language-html"><pre><code><span class="token comment">&lt;!-- Default --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tag  mie6<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>new<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- Success --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tag tag-success mie6<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- Info --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tag tag-info mie6<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- Warning --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tag tag-warning mie6<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- Error --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tag tag-error mie6<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></details><div class="mbs24"></div><p><span class="tag tag-success tag-upper mie6">success</span><span class="tag tag-info tag-upper mie6">info</span><span class="tag tag-warning tag-upper mie6">warning</span><span class="tag tag-error tag-upper mie6">danger</span></p><div class="mbe24"></div><details class="disclose disclose-bordered"><summary class="disclose-title">View source</summary><div class="language-html"><pre><code><span class="token comment">&lt;!-- Success Upper --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tag tag-success tag-upper mie6<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- Info Upper --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tag tag-info tag-upper mie6<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- Warning Upper --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tag tag-warning tag-upper mie6<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- Error Upper --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tag tag-error tag-upper mie6<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></details><div class="mbs24"></div><p><span class="tag tag-pill tag-upper mie6">pill tag</span><span class="tag tag-pill tag-upper tag-success mie6">you did it!</span><span class="tag tag-round tag-upper tag-success mie6">rounded</span><span class="tag tag-circle tag-upper tag-success mie6">5</span></p><div class="mbe24"></div><details class="disclose disclose-bordered"><summary class="disclose-title">View source</summary><div class="language-html"><pre><code><span class="token comment">&lt;!-- Pill --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tag tag-pill tag-upper mie6<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>pill tag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- Pill Success --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tag tag-pill tag-upper tag-success mie6<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>you did it!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- Round --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tag tag-round tag-upper tag-success mie6<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>rounded<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- Circle --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tag tag-circle tag-upper tag-success mie6<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></details>`,20),c=[e];function o(l,u,i,g,k,r){return n(),s("div",null,c)}var v=a(p,[["render",o]]);export{d as __pageData,v as default};
