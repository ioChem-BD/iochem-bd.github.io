import{_ as e}from"./chunks/Total.C-Mp7DDF.js";import{_ as a}from"./chunks/Partial.CcMLgI3m.js";import{_ as s,c as i,a2 as r,o as n}from"./chunks/framework.BQmytedh.js";const y=JSON.parse('{"title":"thermochemistry","description":"","frontmatter":{},"headers":[],"relativePath":"data/codes/molcas/thermochemistry-d3e37412.md","filePath":"data/codes/molcas/thermochemistry-d3e37412.md"}'),d={name:"data/codes/molcas/thermochemistry-d3e37412.md"};function o(l,t,h,m,p,c){return n(),i("div",null,t[0]||(t[0]=[r('<h1 id="thermochemistry" tabindex="-1">thermochemistry <a class="header-anchor" href="#thermochemistry" aria-label="Permalink to &quot;thermochemistry&quot;">​</a></h1><h2 id="implementation-level" tabindex="-1">Implementation level <a class="header-anchor" href="#implementation-level" aria-label="Permalink to &quot;Implementation level&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Type</th><th>Status</th></tr></thead><tbody><tr><td>CML extraction template</td><td><img src="'+e+'" alt=""></td></tr><tr><td>HTML5 representation</td><td><img src="'+a+`" alt=""></td></tr></tbody></table><h2 id="template-attributes" tabindex="-1">Template attributes <a class="header-anchor" href="#template-attributes" aria-label="Permalink to &quot;Template attributes&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Attribute</th><th>Value</th></tr></thead><tbody><tr><td><em>source</em></td><td>MOLCAS log</td></tr><tr><td>id</td><td>thermochemistry</td></tr><tr><td>name</td><td>Thermochemistry section</td></tr><tr><td>pattern</td><td>\\s*\\*\\s*THERMOCHEMISTRY.*</td></tr><tr><td>endPattern</td><td>\\s*$\\s*</td></tr><tr><td>endPattern2</td><td>~</td></tr><tr><td>offset</td><td>-2</td></tr><tr><td>xml:base</td><td>modules/thermochemistry/thermochemistry.xml</td></tr></tbody></table><h2 id="comment" tabindex="-1">Comment <a class="header-anchor" href="#comment" aria-label="Permalink to &quot;Comment&quot;">​</a></h2><pre><code> *********************
 *                   *
 *  THERMOCHEMISTRY  *
 *                   *
 *********************

 Mass-centered Coordinates (Angstrom):
 ***********************************************************
 Label   N         X           Y           Z          Mass  
 -----------------------------------------------------------
 C1      6     0.000000   -0.398668    0.633261     12.00000
 C2      6     0.000000    0.398705   -0.633364     12.00000
 O3      8     0.000000    0.138237    1.710248     15.99492
 H4      1     0.000001   -1.485792    0.502175      1.00782
 O5      8     0.000000   -0.138274   -1.710170     15.99492
 H6      1     0.000001    1.485936   -0.502183      1.00782
 -----------------------------------------------------------
 Molecular mass:   58.005480
 Rotational Constants (cm-1):    0.1497    0.1626    1.8991
 Rotational Constants (GHz) :    4.4893    4.8735   56.9350
 Rotational temperatures (K):    0.2155    0.2339    2.7324
 Rotational Symmetry factor:  1
 Vibrational temperature (K): 
    195.01   499.45   823.12  1210.63  1559.82
   1583.17  1978.92  2029.89  2563.24  2574.91
   4366.71  4374.91
 Number of trans. and rot. degrees of freedom:  6
 ZPVE                23.608 kcal/mol      0.037621 au.

...
 -----------------------------------------------------
</code></pre><h2 id="template-definition" tabindex="-1">Template definition <a class="header-anchor" href="#template-definition" aria-label="Permalink to &quot;Template definition&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;modules/thermochemistry/zpve.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,9)]))}const E=s(d,[["render",o]]);export{y as __pageData,E as default};
