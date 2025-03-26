import{_ as a}from"./chunks/Total.C-Mp7DDF.js";import{_ as i}from"./chunks/None.CACNxHY-.js";import{_ as e,c as s,a2 as l,o as n}from"./chunks/framework.BQmytedh.js";const u=JSON.parse('{"title":"orbitalenergies","description":"","frontmatter":{},"headers":[],"relativePath":"data/codes/turbomole/orbitalenergies-d3e49837.md","filePath":"data/codes/turbomole/orbitalenergies-d3e49837.md"}'),r={name:"data/codes/turbomole/orbitalenergies-d3e49837.md"};function h(o,t,d,p,k,m){return n(),s("div",null,t[0]||(t[0]=[l('<h1 id="orbitalenergies" tabindex="-1">orbitalenergies <a class="header-anchor" href="#orbitalenergies" aria-label="Permalink to &quot;orbitalenergies&quot;">​</a></h1><h2 id="implementation-level" tabindex="-1">Implementation level <a class="header-anchor" href="#implementation-level" aria-label="Permalink to &quot;Implementation level&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Type</th><th>Status</th></tr></thead><tbody><tr><td>CML extraction template</td><td><img src="'+a+'" alt=""></td></tr><tr><td>HTML5 representation</td><td><img src="'+i+`" alt=""></td></tr></tbody></table><h2 id="template-attributes" tabindex="-1">Template attributes <a class="header-anchor" href="#template-attributes" aria-label="Permalink to &quot;Template attributes&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Attribute</th><th>Value</th></tr></thead><tbody><tr><td><em>source</em></td><td>Turbomole log</td></tr><tr><td>id</td><td>orbitalenergies</td></tr><tr><td>name</td><td>Molecular orbitals</td></tr><tr><td>pattern</td><td>\\s*orbitals.*will\\sbe\\swritten\\sto\\sfile.*</td></tr><tr><td>endPattern</td><td>\\s*IRREP.*|\\s*\\=+.*|\\s*\\WS\\*S\\W.*</td></tr><tr><td>endPattern2</td><td>\\s*$\\s*$\\s*</td></tr><tr><td>endOffset</td><td>0</td></tr><tr><td>xml:base</td><td>molecularorbitals/molecular.orbitals.xml</td></tr></tbody></table><h2 id="comment" tabindex="-1">Comment <a class="header-anchor" href="#comment" aria-label="Permalink to &quot;Comment&quot;">​</a></h2><pre><code> orbitals $scfmo  will be written to file mos

    irrep                 18ag        19ag        20ag        21ag        22ag  
 eigenvalues H         -0.59748    -0.57961    -0.54752    -0.54279    -0.45030
            eV         -16.2584    -15.7721    -14.8988    -14.7703    -12.2535
 occupation              2.0000      2.0000      2.0000      2.0000      2.0000 

    irrep                 23ag        24ag        25ag        26ag        27ag  
 eigenvalues H         -0.24507    -0.23232    -0.17908    -0.13662    -0.11917
            eV          -6.6687     -6.3217     -4.8729     -3.7178     -3.2427
...
</code></pre><h2 id="comment-1" tabindex="-1">Comment <a class="header-anchor" href="#comment-1" aria-label="Permalink to &quot;Comment&quot;">​</a></h2><pre><code> orbitals $uhfmo_beta  will be written to file beta

 orbitals $uhfmo_alpha  will be written to file alpha
 
 alpha: 

    irrep                 63a         64a         65a         66a         67a   
 eigenvalues H         -0.49206    -0.47710    -0.47522    -0.46259    -0.31546
            eV         -13.3897    -12.9827    -12.9315    -12.5879     -8.5841
 occupation              1.0000      1.0000      1.0000      1.0000      1.0000 

... 
 
 beta:  

    irrep                 62a         63a         64a         65a         66a   
 eigenvalues H         -0.51352    -0.49114    -0.46482    -0.45774    -0.45288
            eV         -13.9738    -13.3647    -12.6486    -12.4559    -12.3237
 occupation              1.0000      1.0000      1.0000      1.0000      1.0000 

...
</code></pre><h2 id="template-definition" tabindex="-1">Template definition <a class="header-anchor" href="#template-definition" aria-label="Permalink to &quot;Template definition&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;molecularorbitals/restricted.orbitals.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;molecularorbitals/unrestricted.orbitals.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">transform</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> process</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pullup&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./cml:module/cml:module&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">transform</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> process</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;delete&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.//cml:module[count(*)=0]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div>`,11)]))}const b=e(r,[["render",h]]);export{u as __pageData,b as default};
