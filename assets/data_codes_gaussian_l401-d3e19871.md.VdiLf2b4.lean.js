import{_ as A}from"./chunks/Total.C-Mp7DDF.js";import{_ as a}from"./chunks/None.CACNxHY-.js";import{_ as e,c as i,a2 as s,o as n}from"./chunks/framework.BQmytedh.js";const E=JSON.parse('{"title":"l401","description":"","frontmatter":{},"headers":[],"relativePath":"data/codes/gaussian/l401-d3e19871.md","filePath":"data/codes/gaussian/l401-d3e19871.md"}'),l={name:"data/codes/gaussian/l401-d3e19871.md"};function r(d,t,h,o,p,m){return n(),i("div",null,t[0]||(t[0]=[s('<h1 id="l401" tabindex="-1">l401 <a class="header-anchor" href="#l401" aria-label="Permalink to &quot;l401&quot;">​</a></h1><h2 id="implementation-level" tabindex="-1">Implementation level <a class="header-anchor" href="#implementation-level" aria-label="Permalink to &quot;Implementation level&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Type</th><th>Status</th></tr></thead><tbody><tr><td>CML extraction template</td><td><img src="'+A+'" alt=""></td></tr><tr><td>HTML5 representation</td><td><img src="'+a+`" alt=""></td></tr></tbody></table><h2 id="template-attributes" tabindex="-1">Template attributes <a class="header-anchor" href="#template-attributes" aria-label="Permalink to &quot;Template attributes&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Attribute</th><th>Value</th></tr></thead><tbody><tr><td><em>source</em></td><td>Gaussian log</td></tr><tr><td>id</td><td>l401</td></tr><tr><td>name</td><td>Generates basis set information</td></tr><tr><td>repeat</td><td>1</td></tr><tr><td>endOffset</td><td>1</td></tr><tr><td>pattern</td><td>\\s*\\(Enter.*l401\\..*</td></tr><tr><td>endPattern</td><td>\\s*Leave\\sLink\\s+401\\s.*</td></tr><tr><td>xml:base</td><td>l401.xml</td></tr></tbody></table><h2 id="comment" tabindex="-1">Comment <a class="header-anchor" href="#comment" aria-label="Permalink to &quot;Comment&quot;">​</a></h2><pre><code> (Enter /opt/G09/g09/l401.exe)
 Initial guess read from the read-write file.
 B after Tr=     0.000000    0.000000    0.000000
         Rot=    1.000000    0.000000    0.000000    0.000000 Ang=   0.00 deg.
 Guess basis will be translated and rotated to current coordinates.
 Initial guess orbital symmetries:
       Occupied  (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A)
                 (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A)
                 (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A)
                 (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A)
                 (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A)
                 (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A)
                 (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A)
                 (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A)
                 (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A)
                 (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A)
                 (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A)
                 (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A)
                 (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A)
                 (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A)
                 (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A)
                 (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A)
                 (A) (A) (A) (A) (A) (A)
       Virtual   (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A)
                 (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A)
                 (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A)
                 (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A)
...
Leave Link  401 at Tue Dec 20 22:59:23 2011, MaxMem= 2516582400 cpu:     119.3
</code></pre><h2 id="template-definition" tabindex="-1">Template definition <a class="header-anchor" href="#template-definition" aria-label="Permalink to &quot;Template definition&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l401/l401.orbsym.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l401/l401.alphabeta.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,9)]))}const g=e(l,[["render",r]]);export{E as __pageData,g as default};
