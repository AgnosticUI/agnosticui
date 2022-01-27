import{_ as i,P as d,u as m,r as e,o as u,c as r,e as c,a as y,A as h,w as b,d as l,b as f}from"./app.4197772d.js";import"./index.56618267.js";import{_ as v,a as P,b as w,c as _}from"./Svelte-icon.d67041f2.js";const q={name:"PaginationExamples",components:{Pagination:d},setup(){const{currentPaginationPage:s,paginationPages:t,handlePaginationUpdate:p}=m(1,1,20);return{currentPaginationPage:s,paginationPages:t,interceptPageUpdate:a=>{console.log("interceptPageUpdate--page: ",a),p(a)}}}},x=y("h2",null,"Pagination",-1);function A(s,t,p,n,a,k){const o=e("Pagination");return u(),r("section",null,[x,c(o,{onUpdatePage:n.interceptPageUpdate,current:n.currentPaginationPage,pages:n.paginationPages},null,8,["onUpdatePage","current","pages"])])}var U=i(q,[["render",A]]);const T={components:{Alert:h,PaginationExamples:U}},L='{"title":"Pagination","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Storybook","slug":"storybook"}],"relativePath":"docs/components/pagination.md","lastUpdated":1643253130218}',C=l('<h1 id="pagination" tabindex="-1">Pagination <a class="header-anchor" href="#pagination" aria-hidden="true">#</a></h1><p>The <code>Pagination</code> component is typically used to <em>paginate</em> large sets of data divided into smaller parts called <em>pages</em>.</p><div class="mbs24"></div><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h2><div class="mbe24"></div>',5),I=l('<div class="mbe32"></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="flex"><h3 id="react" tabindex="-1"><img src="'+v+`" alt="react logo">React </h3></div><div class="language-jsx"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;agnostic-react/dist/common.min.css&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;agnostic-react/dist/esm/index.css&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;agnostic-react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> usePagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;agnostic-helpers/dist/index.esm&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">YourComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>page<span class="token punctuation">,</span> setPage<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> paging <span class="token operator">=</span> <span class="token function">usePagination</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// usePagination will generate your paging controls</span>
  <span class="token keyword">const</span> pages <span class="token operator">=</span> paging<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1. \`onPageChange\` fires when a user clicks on a new page</span>
    <span class="token comment">// 2. That calls \`setPage\` which \`onPageChange\` is pointed to</span>
    <span class="token comment">// 3. \`useEffect\` here fires as we have the \`page\` dependency</span>
    <span class="token comment">// listed in our dependencies array below</span>
    <span class="token comment">// 4. We feed the new page into \`paging.generate\` and rerender</span>
    paging<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>page<span class="token punctuation">,</span> pages<span class="token punctuation">,</span> paging<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbe24<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Pagination</span></span> <span class="token attr-name">onPageChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setPage<span class="token punctuation">}</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>page<span class="token punctuation">}</span></span> <span class="token attr-name">pages</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>pages<span class="token punctuation">}</span></span> <span class="token attr-name">ariaLabel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Pagination to help navigate table<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>React: <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Pagination.tsx" target="_blank" rel="noopener noreferrer">component source</a>, <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Pagination.stories.tsx" target="_blank" rel="noopener noreferrer">storybook tests</a></p><div class="mbe32"></div><div class="flex"><h3 id="vue-3" tabindex="-1"><img src="`+P+`" alt="Vue 3 logo">Vue 3 </h3></div><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token string">&quot;agnostic-vue/dist/common.min.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;agnostic-vue/dist/index.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> usePagingGenerator<span class="token punctuation">,</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;agnostic-vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;PaginationExamples&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    Pagination<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> currentPaginationPage<span class="token punctuation">,</span> paginationPages<span class="token punctuation">,</span> handlePaginationUpdate <span class="token punctuation">}</span> <span class="token operator">=</span>
      <span class="token function">usePagingGenerator</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">interceptPageUpdate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">newPage</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// Typcically we&#39;d fetch or update the data set here</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;interceptPageUpdate--page: &quot;</span><span class="token punctuation">,</span> newPage<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// This takes care of updating the paging controls appropriately</span>
      <span class="token function">handlePaginationUpdate</span><span class="token punctuation">(</span>newPage<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      currentPaginationPage<span class="token punctuation">,</span>
      paginationPages<span class="token punctuation">,</span>
      interceptPageUpdate<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Pagination<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span>
      <span class="token attr-name">@update-page</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>interceptPageUpdate<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentPaginationPage<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:pages</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>paginationPages<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Vue 3: <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Table.vue" target="_blank" rel="noopener noreferrer">component source</a>, <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Table.stories.js" target="_blank" rel="noopener noreferrer">storybook tests</a></p><div class="mbe24"></div>`,10),S=f("Note: Vue 2 is not supported"),N=l('<div class="mbe32"></div><div class="flex"><h3 id="angular" tabindex="-1"><img src="'+w+`" alt="Angular logo">Angular </h3></div><p>In your Angular configuration (likely <code>angular.json</code>) ensure you&#39;re including the common AgnosticUI styles:</p><div class="mbe16"></div><p><code> &quot;styles&quot;: [&quot;agnostic/dist/common.min.css&quot;],</code></p><div class="mbe24"></div><p>Add AgnosticUI&#39;s <code>AgModule</code> module:</p><div class="language-js"><div class="highlight-lines"><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br></div><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NgModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/platform-browser&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AgModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;agnostic-angular&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> AppComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./app.component&#39;</span><span class="token punctuation">;</span>

@<span class="token function">NgModule</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">declarations</span><span class="token operator">:</span> <span class="token punctuation">[</span>AppComponent<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span>BrowserModule<span class="token punctuation">,</span> AgModule<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">providers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bootstrap</span><span class="token operator">:</span> <span class="token punctuation">[</span>AppComponent<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppModule</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><p>Now you can use in your components:</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> OnInit <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> usePagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;agnostic-helpers/dist/index.esm&#39;</span><span class="token punctuation">;</span>
@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">&#39;your-component&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;
  &lt;ag-pagination (onPageChange)=&quot;onPageChange($event)&quot;
                   [current]=&quot;page&quot;
                   [navigationLabels]=&quot;customNavigationLabels&quot;
                   [pages]=&quot;pages&quot;
                   attr.aria-label=&quot;pagination&quot;&gt;
    &gt;&lt;/ag-pagination&gt;
  &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">YourComponent</span>  <span class="token keyword">implements</span> <span class="token class-name">OnInit</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * usePagination generates the paging control numbers and
   * &quot;gap&quot; e.g. &#39;...&#39;
   */</span>
  paging <span class="token operator">=</span> <span class="token function">usePagination</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token literal-property property">page</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token comment">/**
   * Typically you&#39;d derive this by dividing the total number of items
   * in your data set, by the number of items per page you&#39;d like displayed:
   *   totalPage = Math.ceil(this.items.length / this.displayedPerPage);
   */</span>
  <span class="token literal-property property">totalPages</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>
  <span class="token literal-property property">pages</span><span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">/**
   * Default looks like:
   * First | Previous | 1 | 2 | 3 ... | 50 | Next | Last
   */</span>
  customLabels <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">previous</span><span class="token operator">:</span> <span class="token string">&#39;Previa&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token string">&#39;Siguiente&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">first</span><span class="token operator">:</span> <span class="token string">&#39;Primera&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">last</span><span class="token operator">:</span> <span class="token string">&#39;\xDAltima&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token keyword">get</span> <span class="token function">customNavigationLabels</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>customLabels<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">ngOnInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>pages <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>paging<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>page<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>totalPages<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token function">onPageChange</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">pageNumber</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1. \`onPageChange\` fires when a user clicks on a new page</span>
    <span class="token comment">// 2. We simply feed new page into \`paging.generate\` below</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>page <span class="token operator">=</span> pageNumber<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>pages <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>paging<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>page<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>totalPages<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Angular: <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/pagination.component.ts" target="_blank" rel="noopener noreferrer">component source</a>, <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/pagination.component.stories.ts" target="_blank" rel="noopener noreferrer">storybook tests</a></p><div class="mbe32"></div><div class="flex mbe16"><h3 id="svelte" tabindex="-1"><img src="`+_+`" alt="Svelte logo">Svelte </h3></div><div class="mbe12"></div><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token string">&#39;agnostic-svelte/dist/common.min.css&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> usePagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;agnostic-helpers/dist/index.esm&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;agnostic-svelte&quot;</span><span class="token punctuation">;</span>

  <span class="token comment">// Offset describes how many siblings besides current (must be 1 | 2)</span>
  <span class="token comment">// Example of offset of 1: [1][2(current)][3]...[50]</span>
  <span class="token comment">// Example of offset of 2: [1][2][3(current)][4][5]...[50]</span>
  <span class="token keyword">const</span> paging <span class="token operator">=</span> <span class="token function">usePagination</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// currentPage is the &quot;dependency&quot; that triggers reactive \`paginationPages\`</span>
  <span class="token keyword">let</span> currentPage <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token literal-property property">$</span><span class="token operator">:</span> paginationPages <span class="token operator">=</span> paging<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span>currentPage<span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onPageUpdated</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">pageNumber</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;onPageUpdated called with page: &quot;</span><span class="token punctuation">,</span> pageNumber<span class="token punctuation">)</span>
    <span class="token comment">// This will trigger paginationPages to update itself above</span>
    currentPage <span class="token operator">=</span> pageNumber<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  
  <span class="token keyword">const</span> paginationArgs <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">totalPages</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    <span class="token literal-property property">onPageChange</span><span class="token operator">:</span> onPageUpdated<span class="token punctuation">,</span>
    <span class="token literal-property property">navigationLabels</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">previous</span><span class="token operator">:</span> <span class="token string">&quot;Previa&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token string">&quot;Siguiente&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">first</span><span class="token operator">:</span> <span class="token string">&quot;Primera&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">last</span><span class="token operator">:</span> <span class="token string">&quot;\xDAltima&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ariaLabel</span><span class="token operator">:</span> <span class="token string">&quot;Pagination&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">justify</span><span class="token operator">:</span> <span class="token string">&quot;center&quot;</span>
  <span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">{...paginationArgs}</span> <span class="token attr-name">current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{currentPage}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">pages</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{paginationPages}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>Svelte: <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Pagination/Pagination.svelte" target="_blank" rel="noopener noreferrer">component source</a>, <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Pagination/Pagination.stories.js" target="_blank" rel="noopener noreferrer">storybook tests</a></p><h2 id="storybook" tabindex="-1">Storybook <a class="header-anchor" href="#storybook" aria-hidden="true">#</a></h2><p>You can run the framework Storybooks and see live examples for React, Vue 3, Angular, and Svelte. The following will set this up locally:</p><div class="language-shell"><pre><code><span class="token function">git</span> clone git@github.com:AgnosticUI/agnosticui.git
<span class="token builtin class-name">cd</span> agnosticui <span class="token operator">&amp;&amp;</span> <span class="token function">yarn</span>
<span class="token comment"># You can then run any of the top-level scripts:</span>
<span class="token function">yarn</span> start:react <span class="token comment"># or</span>
<span class="token function">yarn</span> start:vue <span class="token comment"># or</span>
<span class="token function">yarn</span> start:angular <span class="token comment"># or</span>
<span class="token function">yarn</span> start:svelte
</code></pre></div><p>See <a href="https://github.com/AgnosticUI/agnosticui/blob/master/CONTRIBUTING.md#running-monorepo" target="_blank" rel="noopener noreferrer">Running monorepo</a>.</p>`,20);function E(s,t,p,n,a,k){const o=e("PaginationExamples"),g=e("Alert");return u(),r("div",null,[C,c(o),I,c(g,{type:"warning"},{default:b(()=>[S]),_:1}),N])}var M=i(T,[["render",E]]);export{L as __pageData,M as default};
