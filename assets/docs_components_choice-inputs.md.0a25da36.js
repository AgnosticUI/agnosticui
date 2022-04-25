import{_ as k}from"./astro-logo-light.674c0d24.js";import{_ as r,a as g}from"./stackblitz.559c39e8.js";import{_ as d,a as m,b as q,c as h}from"./Angular-icon.86c96dc8.js";import"./common.min.821ee339.js";import{e as o,c as b}from"./agnostic-vue.esm.97d2fefd.js";import{r as y,o as c,c as l,l as a,u as n,f as s,B as v,b as t,Y as u}from"./framework.3f76b01e.js";import"./framework.79deab6d.js";const f={class:"mbs24 mbe24"},C=s("p",{class:"mbe16"},[t("Pass "),s("code",null,"false"),t(" to "),s("code",null,":is-fieldset"),t(" (Vue) or "),s("code",null,"isFieldset"),t(" (React, Svelte) to hide the fieldset from sighted users. Also, we can use a reactive boolean ref to toggle button's "),s("code",null,"isDisabled"),t(": ")],-1),w=t("Submit"),x={setup(i){let p=y(!1);const e=()=>{p.value=!p.value};return(j,S)=>(c(),l("section",null,[a(n(o),{type:"radio","legend-label":"Radio",options:[{name:"solo",value:"stevie",label:"Stevie Wonder"},{name:"solo",value:"whitney",label:"Whitney Houston"},{name:"solo",value:"charlie",label:"Charlie Wilson"}]}),a(n(o),{type:"checkbox",options:[{name:"bands",value:"bonjovi",label:"Bon Jovi"},{name:"bands",value:"stones",label:"Rolling Stones"},{name:"bands",value:"isleybros",label:"Isley Brothers"}],"legend-label":"Large",size:"large","is-inline":""}),a(n(o),{type:"checkbox","legend-label":"Checkbox with specific options disabled",disabledOptions:["stones","isleybros"],options:[{name:"bands",value:"bonjovi",label:"Bon Jovi"},{name:"bands",value:"stones",label:"Rolling Stones"},{name:"bands",value:"isleybros",label:"Isley Brothers"},{name:"bands",value:"parliament",label:"Parliament-Funkadelic"}]}),s("div",f,[C,a(n(o),{type:"checkbox",options:[{name:"tos",value:"agrees",label:"I have read and agree to the Terms of Service"}],"legend-label":"Large",size:"large","is-fieldset":!1,onChange:e})]),a(n(b),{mode:"primary","is-disabled":!n(p)},{default:v(()=>[w]),_:1},8,["is-disabled"])]))}},I=u('<h1 id="choice-inputs" tabindex="-1">Choice Inputs <a class="header-anchor" href="#choice-inputs" aria-hidden="true">#</a></h1><p><code>ChoiceInput</code> component allows you to make choices via the <code>checkbox</code> and <code>radio</code> elements.</p><div class="mbs24"></div><h2 id="navigation" tabindex="-1">Navigation <a class="header-anchor" href="#navigation" aria-hidden="true">#</a></h2><p>As a baseline, let&#39;s have a look at some examples from the <a href="https://www.w3.org/WAI/" target="_blank" rel="noopener noreferrer">Web Accessibility Initiative</a>\u2026</p><h3 id="checkboxes" tabindex="-1">Checkboxes <a class="header-anchor" href="#checkboxes" aria-hidden="true">#</a></h3><p>Looking at the <a href="https://www.w3.org/WAI/tutorials/forms/grouping/#checkboxes" target="_blank" rel="noopener noreferrer">wai-aria practices checkbox example</a> we see that the <code>TAB</code> key is used to tab into the group of checkbox elements, but, is also used to navigate <span class="quoted">within</span> those checkbox elements.</p><h3 id="radios" tabindex="-1">Radios <a class="header-anchor" href="#radios" aria-hidden="true">#</a></h3><p>Looking at the <a href="https://www.w3.org/WAI/tutorials/forms/grouping/#radio-buttons" target="_blank" rel="noopener noreferrer">wai-aria-practices radio example</a> we see that the <code>TAB</code> key is used to tab into the group of radio elements; but then, the <code>Arrow</code> keys are used to navigate <span class="quoted">within</span> those radio elements.</p><div class="mbs24"></div><p>AgnosticUI&#39;s <code>ChoiceInput</code> uses the same keyboard navigation strategy as above.</p><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h2><div class="mbe24"></div>',13),_=u('<div class="mbe32"></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="flex items-center mbs40 mbe24"><a href="https://astro.build/" class="astro-logo-usage-wrap" target="_blank"><img class="astro-logo-usage" src="'+k+'" alt="astro logo"></a><p class="mis16">React, Vue, and Svelte examples on a single playground page \u{1F680} \u{1F4A5}</p></div><div class="playgrounds flex mbe32"><a class="btn btn-rounded" style="background-color:var(--agnostic-dark);color:var(--agnostic-light);" href="https://codesandbox.io/s/github/AgnosticUI/agnosticui/tree/master/playgrounds/Choices?file=/README.md" target="_blank"><img src="'+r+'" alt="codesandbox logo" class="mie8"> View in CodeSandbox </a><a class="btn btn-rounded" style="background-color:var(--agnostic-primary);color:var(--agnostic-light);" href="https://stackblitz.com/github/AgnosticUI/agnosticui/tree/master/playgrounds/Choices?file=/README.md" target="_blank"><img src="'+g+'" alt="Stackblitz logo" class="mie4"> View in Stackblitz </a></div><div class="flex"><h3 id="react" tabindex="-1"><img src="'+d+`" alt="react logo">React </h3></div><details class="disclose disclose-bordered"><summary class="disclose-title">View source</summary><div class="language-jsx"><pre><code><span class="token keyword">import</span> <span class="token string">&quot;agnostic-react/dist/common.min.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;agnostic-react/dist/esm/index.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ChoiceInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;agnostic-react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> opts <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;daily&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;Daily&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;weekly&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;Weekly&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;monthly&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;Monthly&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> optionNames <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;frequency&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;schedule&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;howoften&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;when&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;letmeknow&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;whenz&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;often&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;freq&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;frekuency&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;whattimes&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> optionNames<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> optionName <span class="token operator">=</span> optionNames<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> optionsWithNames <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  opts<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">o</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> copy <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> o<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> optionName <span class="token punctuation">}</span><span class="token punctuation">)</span>
    optionsWithNames<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>copy<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  options<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>optionsWithNames<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> disabledOptions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;weekly&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;monthly&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">YourComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token parameter">checkedItems</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>checkedItems<span class="token punctuation">)</span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ChoiceInput</span></span>
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">legendLabel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Checkbox legend<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span> handleChange <span class="token punctuation">}</span></span>
    <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ChoiceInput</span></span>
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">isDisabled</span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">legendLabel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Checkbox disabled<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span> handleChange <span class="token punctuation">}</span></span>
    <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ChoiceInput</span></span>
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">disabledOptions</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>disabledOptions<span class="token punctuation">}</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">legendLabel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Checkbox specific options disabled<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span> handleChange <span class="token punctuation">}</span></span>
    <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ChoiceInput</span></span>
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">isFieldset</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">legendLabel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Checkbox fieldset hidden<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span> handleChange <span class="token punctuation">}</span></span>
    <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ChoiceInput</span></span>
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">isInline</span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">legendLabel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Checkbox inline<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span> handleChange <span class="token punctuation">}</span></span>
    <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ChoiceInput</span></span>
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>6<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">isInline</span>
      <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">legendLabel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Checkbox small<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span> handleChange <span class="token punctuation">}</span></span>
    <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ChoiceInput</span></span>
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>7<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">isInline</span>
      <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>large<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">legendLabel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Checkbox large<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span> handleChange <span class="token punctuation">}</span></span>
    <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ChoiceInput</span></span>
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">isInline</span>
      <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>large<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">checkedOptions</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">&quot;daily&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;weekly&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">legendLabel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Checkbox prechecked options<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span> handleChange <span class="token punctuation">}</span></span>
    <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ChoiceInput</span></span>
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">legendLabel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Radio legend<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span> handleChange <span class="token punctuation">}</span></span>
    <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ChoiceInput</span></span>
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>11<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">isDisabled</span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">legendLabel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Radio disabled<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span> handleChange <span class="token punctuation">}</span></span>
    <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ChoiceInput</span></span>
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>12<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">disabledOptions</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">&#39;two&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;numbers&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;one&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;one&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;numbers&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;two&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;two&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;numbers&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;three&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;three&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">legendLabel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Radio specific options disabled<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span> handleChange <span class="token punctuation">}</span></span>
    <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ChoiceInput</span></span>
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>14<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">isInline</span>
      <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;shape&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;square&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Square&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;shape&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Circle&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">legendLabel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Radio small<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span> handleChange <span class="token punctuation">}</span></span>
    <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ChoiceInput</span></span>
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>15<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">isInline</span>
      <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>large<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;bands&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;bonjovi&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Bon Jovi&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;bands&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;stones&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Rolling Stones&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;bands&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;isleybros&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Isley Brothers&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">legendLabel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Radio large<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span> handleChange <span class="token punctuation">}</span></span>
    <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><p>React: <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/ChoiceInput.tsx" target="_blank" rel="noopener noreferrer">component source</a>, <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/ChoiceInput.stories.tsx" target="_blank" rel="noopener noreferrer">storybook tests</a></p><div class="mbe32"></div><div class="flex"><h3 id="vue-3" tabindex="-1"><img src="`+m+`" alt="Vue 3 logo">Vue 3 </h3></div><details class="disclose disclose-bordered"><summary class="disclose-title">View source</summary><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// Import AgnosticUI global common &amp; component CSS</span>
<span class="token keyword">import</span> <span class="token string">&quot;agnostic-vue/dist/common.min.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;agnostic-vue/dist/index.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ChoiceInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;agnostic-vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">log</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">message<span class="token punctuation">,</span> extra</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> extra<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChoiceInput</span>
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>r1<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">legend-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Radio<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(checkedOptions) =&gt; log(<span class="token punctuation">&#39;</span>ChoiceInput (radio) checkedOptions:<span class="token punctuation">&#39;</span>, checkedOptions)<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[
        { name: <span class="token punctuation">&#39;</span>solo<span class="token punctuation">&#39;</span>, value: <span class="token punctuation">&#39;</span>stevie<span class="token punctuation">&#39;</span>, label: <span class="token punctuation">&#39;</span>Stevie Wonder<span class="token punctuation">&#39;</span> },
        { name: <span class="token punctuation">&#39;</span>solo<span class="token punctuation">&#39;</span>, value: <span class="token punctuation">&#39;</span>whitney<span class="token punctuation">&#39;</span>, label: <span class="token punctuation">&#39;</span>Whitney Houston<span class="token punctuation">&#39;</span> },
        { name: <span class="token punctuation">&#39;</span>solo<span class="token punctuation">&#39;</span>, value: <span class="token punctuation">&#39;</span>charlie<span class="token punctuation">&#39;</span>, label: <span class="token punctuation">&#39;</span>Charlie Wilson<span class="token punctuation">&#39;</span> },
      ]<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChoiceInput</span>
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>c1<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[
        { name: <span class="token punctuation">&#39;</span>bands<span class="token punctuation">&#39;</span>, value: <span class="token punctuation">&#39;</span>bonjovi<span class="token punctuation">&#39;</span>, label: <span class="token punctuation">&#39;</span>Bon Jovi<span class="token punctuation">&#39;</span> },
        { name: <span class="token punctuation">&#39;</span>bands<span class="token punctuation">&#39;</span>, value: <span class="token punctuation">&#39;</span>stones<span class="token punctuation">&#39;</span>, label: <span class="token punctuation">&#39;</span>Rolling Stones<span class="token punctuation">&#39;</span> },
        { name: <span class="token punctuation">&#39;</span>bands<span class="token punctuation">&#39;</span>, value: <span class="token punctuation">&#39;</span>isleybros<span class="token punctuation">&#39;</span>, label: <span class="token punctuation">&#39;</span>Isley Brothers<span class="token punctuation">&#39;</span> },
      ]<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">legend-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Large<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>large<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">is-inline</span>
    <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChoiceInput</span>
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>c2<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">legend-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Checkbox with disabled options<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:disabledOptions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>stones<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>isleybros<span class="token punctuation">&#39;</span>]<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(checkedOptions) =&gt; log(<span class="token punctuation">&#39;</span>ChoiceInput (checkbox) checkedOptions:<span class="token punctuation">&#39;</span>, checkedOptions)<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[
        { name: <span class="token punctuation">&#39;</span>bands<span class="token punctuation">&#39;</span>, value: <span class="token punctuation">&#39;</span>bonjovi<span class="token punctuation">&#39;</span>, label: <span class="token punctuation">&#39;</span>Bon Jovi<span class="token punctuation">&#39;</span>},
        { name: <span class="token punctuation">&#39;</span>bands<span class="token punctuation">&#39;</span>, value: <span class="token punctuation">&#39;</span>stones<span class="token punctuation">&#39;</span>, label: <span class="token punctuation">&#39;</span>Rolling Stones<span class="token punctuation">&#39;</span> },
        { name: <span class="token punctuation">&#39;</span>bands<span class="token punctuation">&#39;</span>, value: <span class="token punctuation">&#39;</span>isleybros<span class="token punctuation">&#39;</span>, label: <span class="token punctuation">&#39;</span>Isley Brothers<span class="token punctuation">&#39;</span> }
        { name: <span class="token punctuation">&#39;</span>bands<span class="token punctuation">&#39;</span>, value: <span class="token punctuation">&#39;</span>parliament<span class="token punctuation">&#39;</span>, label: <span class="token punctuation">&#39;</span>Parliament-Funkadelic<span class="token punctuation">&#39;</span> }
      ]<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></details><p>Vue 3: <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/ChoiceInput.vue" target="_blank" rel="noopener noreferrer">component source</a>, <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/ChoiceInput.stories.js" target="_blank" rel="noopener noreferrer">storybook tests</a></p><div class="mbe24"></div><div class="flex"><h3 id="svelte" tabindex="-1"><img src="`+q+`" alt="Svelte logo">Svelte </h3></div><details class="disclose disclose-bordered"><summary class="disclose-title">View source</summary><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token string">&quot;agnostic-svelte/css/common.min.css&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ChoiceInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;agnostic-svelte&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> disabledOptions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;monthly&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;weekly&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> opts <span class="token operator">=</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;daily&quot;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;Daily&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			<span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;weekly&quot;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;Weekly&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			<span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;monthly&quot;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;Monthly&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> optionNames <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;frequency&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;schedule&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;howoften&#39;</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> optionNames<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> optionName <span class="token operator">=</span> optionNames<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> optionsWithNames <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    opts<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">o</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> copy <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> o<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> optionName <span class="token punctuation">}</span><span class="token punctuation">)</span>
      optionsWithNames<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>copy<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    options<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>optionsWithNames<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChoiceInput</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name">isInline</span> <span class="token attr-name">options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{options[0]}</span> <span class="token punctuation">/&gt;</span></span>
  &lt;ChoiceInput type=&quot;checkbox&quot; options={options[1]}
    disabledOptions=[&quot;daily&quot;] legendLabel=&quot;Checkbox with specific options disabled&quot; /&gt;
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChoiceInput</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">isInline</span> <span class="token attr-name">options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{options[2]}</span> <span class="token punctuation">/&gt;</span></span>
  &lt;ChoiceInput type=&quot;radio&quot; size=&quot;large&quot; legendLabel=&quot;Radio large&quot;
    options={options[3]} checkedOptions=[&quot;weekly&quot;] disabledOptions=[&quot;daily&quot;, &quot;monthly&quot;] /&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></details><p>Svelte: <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/ChoiceInput/ChoiceInput.svelte" target="_blank" rel="noopener noreferrer">component source</a>, <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/ChoiceInput/ChoiceInput.stories.js" target="_blank" rel="noopener noreferrer">storybook tests</a></p><div class="mbe24"></div><div class="flex"><h3 id="angular" tabindex="-1"><img src="`+h+`" alt="Angular logo">Angular (Experimental) </h3></div><details class="disclose disclose-bordered"><summary class="disclose-title">View source</summary><p>In your Angular configuration (likely <code>angular.json</code>) ensure you&#39;re including the common AgnosticUI styles:</p><div class="mbe16"></div><p><code> &quot;styles&quot;: [&quot;agnostic-angular/common.min.css&quot;],</code></p><div class="mbe24"></div><p>Add AgnosticUI&#39;s <code>AgModule</code> module:</p><div class="language-js"><div class="highlight-lines"><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br></div><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NgModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>
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
</code></pre></div><p>Now you can use in your components:</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>

@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">&#39;your-component&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;section&gt;
    &lt;ag-choice-input
      type=&quot;checkbox&quot;
      [options]=&quot;testOptions&quot;
      legendLabel=&quot;Legend&quot;
      (selected)=&quot;handleChange&quot;
    &gt;&lt;/ag-choice-input&gt;
    &lt;ag-choice-input
      type=&quot;checkbox&quot;
      [isDisabled]=&quot;true&quot;
      [options]=&quot;testOptions&quot;
      legendLabel=&quot;Disabled&quot;
      (selected)=&quot;handleChange&quot;
    &gt;&lt;/ag-choice-input&gt;
    &lt;ag-choice-input
      type=&quot;checkbox&quot;
      [options]=&quot;testOptions&quot;
      [disabledOptions]=&quot;disabledOptions&quot;
      legendLabel=&quot;Specific options disabled&quot;
      (selected)=&quot;handleChange&quot;
    &gt;&lt;/ag-choice-input&gt;
    &lt;ag-choice-input
      type=&quot;checkbox&quot;
      [options]=&quot;testOptions&quot;
      [disabledOptions]=&quot;disabledOptions&quot;
      [isFieldset]=&quot;false&quot;
      legendLabel=&quot;Fieldset hidden&quot;
      (selected)=&quot;handleChange&quot;
    &gt;&lt;/ag-choice-input&gt;
    &lt;ag-choice-input
      type=&quot;checkbox&quot;
      [options]=&quot;testOptions&quot;
      [isInline]=&quot;true&quot;
      legendLabel=&quot;Inline&quot;
      (selected)=&quot;handleChange&quot;
    &gt;&lt;/ag-choice-input&gt;
    &lt;ag-choice-input
      type=&quot;checkbox&quot;
      [options]=&quot;testOptions&quot;
      [isInline]=&quot;true&quot;
      size=&quot;small&quot;
      legendLabel=&quot;Small&quot;
      (selected)=&quot;handleChange&quot;
    &gt;&lt;/ag-choice-input&gt;
    &lt;ag-choice-input
      type=&quot;checkbox&quot;
      [options]=&quot;testOptions&quot;
      [isInline]=&quot;true&quot;
      size=&quot;large&quot;
      legendLabel=&quot;Large&quot;
      (selected)=&quot;handleChange&quot;
    &gt;&lt;/ag-choice-input&gt;
    &lt;ag-choice-input
      type=&quot;checkbox&quot;
      [options]=&quot;testOptions&quot;
      checkedOptions=&quot;[&#39;daily&#39;, &#39;weekly&#39;]&quot;
      [isInline]=&quot;true&quot;
      size=&quot;large&quot;
      legendLabel=&quot;Prechecked options&quot;
      (selected)=&quot;handleChange&quot;
    &gt;&lt;/ag-choice-input&gt;
    &lt;ag-choice-input
      [options]=&quot;testOptions&quot;
      [isSkinned]=&quot;false&quot;
      [isInline]=&quot;true&quot;
      legendLabel=&quot;Checkbox unskinned (fieldset and legend unstyled)&quot;
      (selected)=&quot;handleChange&quot;
    &gt;&lt;/ag-choice-input&gt;
    &lt;h1 style=&quot;margin: 1rem 0;&quot;&gt;Radios&lt;/h1&gt;
    &lt;ag-choice-input
      type=&quot;radio&quot;
      [options]=&quot;testOptions&quot;
      legendLabel=&quot;Radio legend&quot;
      (selected)=&quot;handleChange&quot;
    &gt;&lt;/ag-choice-input&gt;
    &lt;ag-choice-input
      type=&quot;radio&quot;
      [options]=&quot;testOptions&quot;
      [isDisabled]=&quot;true&quot;
      legendLabel=&quot;Disabled&quot;
      (selected)=&quot;handleChange&quot;
    &gt;&lt;/ag-choice-input&gt;
    &lt;ag-choice-input
      type=&quot;radio&quot;
      [options]=&quot;[{ name: &#39;numbers&#39;, value: &#39;one&#39;, label: &#39;one&#39;}, { name: &#39;numbers&#39;, value: &#39;two&#39;, label: &#39;two&#39; }, { name: &#39;numbers&#39;, value: &#39;three&#39;, label: &#39;three&#39; }]&quot;
      [disabledOptions]=&quot;[&#39;two&#39;]&quot;
      legendLabel=&quot;Specific options disabled&quot;
      (selected)=&quot;handleChange&quot;
    &gt;&lt;/ag-choice-input&gt;
    &lt;ag-choice-input
      type=&quot;radio&quot;
      [options]=&quot;[{ name: &#39;es&#39;, value: &#39;uno&#39;, label: &#39;uno&#39;}, { name: &#39;es&#39;, value: &#39;dos&#39;, label: &#39;dos&#39; }, { name: &#39;es&#39;, value: &#39;tres&#39;, label: &#39;tres&#39; }]&quot;
      legendLabel=&quot;Fieldset hidden&quot;
      [isFieldset]=&quot;false&quot;
      (selected)=&quot;handleChange&quot;
    &gt;&lt;/ag-choice-input&gt;
    &lt;ag-choice-input
      type=&quot;radio&quot;
      [options]=&quot;[{ name: &#39;colors&#39;, value: &#39;blue&#39;, label: &#39;Blue&#39;}, { name: &#39;colors&#39;, value: &#39;red&#39;, label: &#39;Red&#39; }, { name: &#39;colors&#39;, value: &#39;silver&#39;, label: &#39;Silver&#39; }]&quot;
      legendLabel=&quot;Inline&quot;
      [isInline]=&quot;true&quot;
      (selected)=&quot;handleChange&quot;
    &gt;&lt;/ag-choice-input&gt;
    &lt;ag-choice-input
      type=&quot;radio&quot;
      [options]=&quot;[{ name: &#39;bands&#39;, value: &#39;bonjovi&#39;, label: &#39;Bon Jovi&#39;}, { name: &#39;bands&#39;, value: &#39;stones&#39;, label: &#39;Rolling Stones&#39; }, { name: &#39;bands&#39;, value: &#39;isleybros&#39;, label: &#39;Isley Brothers&#39; }]&quot;
      legendLabel=&quot;Large&quot;
      size=&quot;large&quot;
      [isInline]=&quot;true&quot;
      (selected)=&quot;handleChange&quot;
    &gt;&lt;/ag-choice-input&gt;
    &lt;ag-choice-input
      type=&quot;radio&quot;
      [options]=&quot;[{ name: &#39;solo&#39;, value: &#39;stevie&#39;, label: &#39;Stevie Wonder&#39;}, { name: &#39;solo&#39;, value: &#39;whitney&#39;, label: &#39;Whitney Houston&#39; }, { name: &#39;solo&#39;, value: &#39;charlie&#39;, label: &#39;Charlie Wilson&#39; }]&quot;
      [checkedOptions]=&quot;[&#39;charlie&#39;]&quot;
      legendLabel=&quot;Prechecked option&quot;
      size=&quot;large&quot;
      [isInline]=&quot;true&quot;
      (selected)=&quot;handleChange&quot;
    &gt;&lt;/ag-choice-input&gt;
  &lt;/section&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">YourComponent</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token literal-property property">disabledOptions</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;weekly&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;monthly&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token literal-property property">testOptions</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;frequency&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;daily&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Daily&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;frequency&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;weekly&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Weekly&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;frequency&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;monthly&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Monthly&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">changedItems</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></details><p>Angular: <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/choice-input.component.ts" target="_blank" rel="noopener noreferrer">component source</a>, <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/choice-input.component.stories.ts" target="_blank" rel="noopener noreferrer">storybook tests</a></p><div class="mbe32"></div><h2 id="storybook" tabindex="-1">Storybook <a class="header-anchor" href="#storybook" aria-hidden="true">#</a></h2><p>You can run the framework Storybooks and see live examples for React, Vue 3, Svelte, and Angular (experimental). The following will set up Storybook and run locally:</p><details class="mbs24 mbe24 disclose disclose-bordered"><summary class="disclose-title">How to run Storybook</summary><div class="language-shell"><pre><code><span class="token function">git</span> clone git@github.com:AgnosticUI/agnosticui.git
<span class="token builtin class-name">cd</span> agnosticui/<span class="token operator">&lt;</span>PACKAGE_NAME<span class="token operator">&gt;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> i <span class="token comment"># e.g. cd agnosticui/agnostic-react &amp;&amp; npm i</span>
<span class="token function">npm</span> run storybook
</code></pre></div></details><p>See <a href="https://github.com/AgnosticUI/agnosticui/blob/master/CONTRIBUTING.md#usage" target="_blank" rel="noopener noreferrer">Running Storybook</a>.</p>`,24),U='{"title":"Choice Inputs","description":"","frontmatter":{},"headers":[{"level":2,"title":"Navigation","slug":"navigation"},{"level":3,"title":"Checkboxes","slug":"checkboxes"},{"level":3,"title":"Radios","slug":"radios"},{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Storybook","slug":"storybook"}],"relativePath":"docs/components/choice-inputs.md","lastUpdated":1650893947614}',A={},V=Object.assign(A,{setup(i){return(p,e)=>(c(),l("div",null,[I,a(x),_]))}});export{U as __pageData,V as default};
