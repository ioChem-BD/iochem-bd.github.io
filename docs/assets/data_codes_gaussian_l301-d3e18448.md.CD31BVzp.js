import{_ as i}from"./chunks/Total.C-Mp7DDF.js";import{_ as s}from"./chunks/None.CACNxHY-.js";import{_ as a,c as e,a2 as l,o as n}from"./chunks/framework.BQmytedh.js";const u=JSON.parse('{"title":"l301","description":"","frontmatter":{},"headers":[],"relativePath":"data/codes/gaussian/l301-d3e18448.md","filePath":"data/codes/gaussian/l301-d3e18448.md"}'),r={name:"data/codes/gaussian/l301-d3e18448.md"};function h(d,t,p,k,o,E){return n(),e("div",null,t[0]||(t[0]=[l('<h1 id="l301" tabindex="-1">l301 <a class="header-anchor" href="#l301" aria-label="Permalink to &quot;l301&quot;">​</a></h1><h2 id="implementation-level" tabindex="-1">Implementation level <a class="header-anchor" href="#implementation-level" aria-label="Permalink to &quot;Implementation level&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Type</th><th>Status</th></tr></thead><tbody><tr><td>CML extraction template</td><td><img src="'+i+'" alt=""></td></tr><tr><td>HTML5 representation</td><td><img src="'+s+`" alt=""></td></tr></tbody></table><h2 id="template-attributes" tabindex="-1">Template attributes <a class="header-anchor" href="#template-attributes" aria-label="Permalink to &quot;Template attributes&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Attribute</th><th>Value</th></tr></thead><tbody><tr><td><em>source</em></td><td>Gaussian log</td></tr><tr><td>id</td><td>l301</td></tr><tr><td>name</td><td>Generates basis set information</td></tr><tr><td>repeat</td><td>*</td></tr><tr><td>endOffset</td><td>1</td></tr><tr><td>pattern</td><td>\\s*\\(Enter.*l301\\..*</td></tr><tr><td>endPattern</td><td>\\s*Leave\\sLink\\s+301\\s.*</td></tr><tr><td>xml:base</td><td>l301.xml</td></tr></tbody></table><h2 id="comment" tabindex="-1">Comment <a class="header-anchor" href="#comment" aria-label="Permalink to &quot;Comment&quot;">​</a></h2><pre><code> (Enter /opt/G09/g09/l301.exe)
 Basis read from rwf:  (5D, 7F)
 Pseudo-potential data read from rwf file.
 There are   750 symmetry adapted basis functions of A   symmetry.
 Integral buffers will be    131072 words long.
 Raffenetti 2 integral format.
 Two-electron integral symmetry is turned on.
   750 basis functions,  1534 primitive gaussians,   782 cartesian basis functions
   198 alpha electrons      198 beta electrons
       nuclear repulsion energy      7769.0840580950 Hartrees.
 IExCor=  402 DFT=T Ex+Corr=B3LYP ExCW=0 ScaHFX=  0.200000
 ScaDFX=  0.800000  0.720000  1.000000  0.810000 ScalE2=  1.000000  1.000000
 IRadAn=      0 IRanWt=     -1 IRanGd=            0 ICorTp=0
 NAtoms=   73 NActive=   73 NUniq=   73 SFac= 7.50D-01 NAtFMM=   80 NAOKFM=F Big=T
 No density basis found on file   724.

...
Leave Link  301 at Tue Dec 20 22:17:53 2011, MaxMem= 2516582400 cpu:       1.0
</code></pre><h2 id="template-definition" tabindex="-1">Template definition <a class="header-anchor" href="#template-definition" aria-label="Permalink to &quot;Template definition&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l301/l301.basis.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l301/l301.basis2.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l301/l301.dispersion.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l301/l301.pcm.nonstandard.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l301/l301.pcm.standard.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">transform</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> process</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;delete&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;//cml:module[@cmlx:templateRef=&#39;job&#39;][exists(.//cml:module[@cmlx:templateRef=&#39;l103&#39;])]//cml:module[@cmlx:templateRef=&#39;l301&#39; ][position() != 1]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div>`,9)]))}const y=a(r,[["render",h]]);export{u as __pageData,y as default};