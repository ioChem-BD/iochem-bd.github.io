import{_ as a}from"./chunks/Total.C-Mp7DDF.js";import{_ as i}from"./chunks/None.CACNxHY-.js";import{_ as s,c as e,a2 as d,o as n}from"./chunks/framework.BQmytedh.js";const f=JSON.parse('{"title":"adf.computation","description":"","frontmatter":{},"headers":[],"relativePath":"data/codes/adf/adf.computation-d3e2526.md","filePath":"data/codes/adf/adf.computation-d3e2526.md"}'),l={name:"data/codes/adf/adf.computation-d3e2526.md"};function r(o,t,p,h,m,c){return n(),e("div",null,t[0]||(t[0]=[d('<h1 id="adf-computation" tabindex="-1">adf.computation <a class="header-anchor" href="#adf-computation" aria-label="Permalink to &quot;adf.computation&quot;">​</a></h1><h2 id="implementation-level" tabindex="-1">Implementation level <a class="header-anchor" href="#implementation-level" aria-label="Permalink to &quot;Implementation level&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Type</th><th>Status</th></tr></thead><tbody><tr><td>CML extraction template</td><td><img src="'+a+'" alt=""></td></tr><tr><td>HTML5 representation</td><td><img src="'+i+`" alt=""></td></tr></tbody></table><h2 id="template-attributes" tabindex="-1">Template attributes <a class="header-anchor" href="#template-attributes" aria-label="Permalink to &quot;Template attributes&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Attribute</th><th>Value</th></tr></thead><tbody><tr><td><em>source</em></td><td>ADF log</td></tr><tr><td>id</td><td>adf.computation</td></tr><tr><td>pattern</td><td>\\s+\\*\\s+C\\sO\\sM\\sP\\sU\\sT\\sA\\sT\\sI\\sO\\sN\\s+\\*.*</td></tr><tr><td>endPattern</td><td>\\s*\\d*\\s*$\\s\\*{20,}.*$(\\s*|\\s*LOGFILE.*)</td></tr><tr><td>offset</td><td>-1</td></tr><tr><td>endOffset</td><td>2</td></tr><tr><td>repeat</td><td>*</td></tr><tr><td>xml:base</td><td>adf/computation/computation.xml</td></tr></tbody></table><div class="formalpara"><div class="title"><p>Comment</p></div><pre><code>                                            ***************************
                                            *  C O M P U T A T I O N  *
                                            ***************************
 
 =====
 S C F
 ===== 
 ...
 
 Geometry CYCLE N
 ==============
 ...
 
 =============================
 G E O M E T R Y   U P D A T E  ***  1  ***
 =============================
 ...
    
 
 ***************************************************************************************************
</code></pre></div><div class="formalpara"><div class="title"><p>Template definition</p></div><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;computation/scf.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;computation/geometry.cycle.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></div>`,7)]))}const g=s(l,[["render",r]]);export{f as __pageData,g as default};
