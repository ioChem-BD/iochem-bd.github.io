import{_ as i}from"./chunks/Total.C-Mp7DDF.js";import{_ as s}from"./chunks/None.CACNxHY-.js";import{_ as a,c as e,a2 as l,o as n}from"./chunks/framework.BQmytedh.js";const m=JSON.parse('{"title":"l701","description":"","frontmatter":{},"headers":[],"relativePath":"data/codes/gaussian/l701-d3e20592.md","filePath":"data/codes/gaussian/l701-d3e20592.md"}'),h={name:"data/codes/gaussian/l701-d3e20592.md"};function p(d,t,r,k,o,E){return n(),e("div",null,t[0]||(t[0]=[l('<h1 id="l701" tabindex="-1">l701 <a class="header-anchor" href="#l701" aria-label="Permalink to &quot;l701&quot;">​</a></h1><h2 id="implementation-level" tabindex="-1">Implementation level <a class="header-anchor" href="#implementation-level" aria-label="Permalink to &quot;Implementation level&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Type</th><th>Status</th></tr></thead><tbody><tr><td>CML extraction template</td><td><img src="'+i+'" alt=""></td></tr><tr><td>HTML5 representation</td><td><img src="'+s+`" alt=""></td></tr></tbody></table><h2 id="template-attributes" tabindex="-1">Template attributes <a class="header-anchor" href="#template-attributes" aria-label="Permalink to &quot;Template attributes&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Attribute</th><th>Value</th></tr></thead><tbody><tr><td><em>source</em></td><td>Gaussian log</td></tr><tr><td>id</td><td>l701</td></tr><tr><td>name</td><td>Compute integral first derivatives</td></tr><tr><td>repeat</td><td>1</td></tr><tr><td>newline</td><td>$</td></tr><tr><td>pattern</td><td>\\s*Compute integral first derivatives.*</td></tr><tr><td>endPattern</td><td>.*</td></tr><tr><td>xml:base</td><td>l701.xml</td></tr></tbody></table><h2 id="input" tabindex="-1">Input <a class="header-anchor" href="#input" aria-label="Permalink to &quot;Input&quot;">​</a></h2><pre><code> (Enter /usr/local/Gaussian/g03/l701.exe)
 Compute integral first derivatives.
 ... and contract with generalized density number  0.
 Leave Link  701 at Thu Aug 31 00:05:33 2006, MaxMem=    6291456 cpu:       1.1
</code></pre><h2 id="output-text" tabindex="-1">Output text <a class="header-anchor" href="#output-text" aria-label="Permalink to &quot;Output text&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">comment</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example.output&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l701.firstderiv&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">module</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cmlx:templateRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l701&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">comment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="template-definition" tabindex="-1">Template definition <a class="header-anchor" href="#template-definition" aria-label="Permalink to &quot;Template definition&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">record</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;*&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;701&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">transform</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> process</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;delete&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.//cml:list[count(*)=0]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">transform</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> process</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;delete&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.//cml:list[count(*)=0]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div>`,11)]))}const y=a(h,[["render",p]]);export{m as __pageData,y as default};
