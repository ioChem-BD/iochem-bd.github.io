import{_ as i}from"./chunks/Total.C-Mp7DDF.js";import{_ as a}from"./chunks/Partial.CcMLgI3m.js";import{_ as t,c as h,a2 as n,o as k}from"./chunks/framework.BQmytedh.js";const c=JSON.parse('{"title":"cchc","description":"","frontmatter":{},"headers":[],"relativePath":"data/codes/molcas/cchc-d3e36756.md","filePath":"data/codes/molcas/cchc-d3e36756.md"}'),l={name:"data/codes/molcas/cchc-d3e36756.md"};function e(p,s,E,r,d,g){return k(),h("div",null,s[0]||(s[0]=[n('<h1 id="cchc" tabindex="-1">cchc <a class="header-anchor" href="#cchc" aria-label="Permalink to &quot;cchc&quot;">​</a></h1><h2 id="implementation-level" tabindex="-1">Implementation level <a class="header-anchor" href="#implementation-level" aria-label="Permalink to &quot;Implementation level&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Type</th><th>Status</th></tr></thead><tbody><tr><td>CML extraction template</td><td><img src="'+i+'" alt=""></td></tr><tr><td>HTML5 representation</td><td><img src="'+a+`" alt=""></td></tr></tbody></table><h2 id="template-attributes" tabindex="-1">Template attributes <a class="header-anchor" href="#template-attributes" aria-label="Permalink to &quot;Template attributes&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Attribute</th><th>Value</th></tr></thead><tbody><tr><td><em>source</em></td><td>MOLCAS log</td></tr><tr><td>id</td><td>cchc</td></tr><tr><td>name</td><td>chcc module</td></tr><tr><td>pattern</td><td>\\s*Cholesky\\sBased\\sClosed-Shell\\sCCSD\\scode.*</td></tr><tr><td>endPattern</td><td>~</td></tr><tr><td>xml:base</td><td>modules/chcc/chcc.xml</td></tr></tbody></table><h2 id="input" tabindex="-1">Input <a class="header-anchor" href="#input" aria-label="Permalink to &quot;Input&quot;">​</a></h2><pre><code>     Cholesky Based Closed-Shell CCSD code
 
 ---------------------------------------------------
 Frozen Orbitals                   :         0
 Occupied Orbitals                 :        16
 Virtual Orbitals                  :       160
 Total number of Cholesky Vectors  :      1357
 ---------------------------------------------------
 Large Virtual Segmentation        :      auto
 Small Vectors Segmentation        :      auto
 Cholesky Vectors Segmentation     :       200
 ---------------------------------------------------
 Generate Scratch Files?                :  Yes
 Precalculate (1) / On-the-Fly (0) Alg. :    1
 3 and 4-ext. MO integrals distribute?  :    1
 Parallel Join of varios MO integrals   :    2
 ---------------------------------------------------
 Convergence Threshold             :  0.10E-05
 Maximum number of Iterations      :        40
 ---------------------------------------------------
 Lun Number for Aux. Matrixes      :        13
 BLAS/FTN Matrix Handling          :         1
 Start from RstFil ?               :        No 
 Print level                       :         1
 ---------------------------------------------------
 
 
 ===============================
 Autogenerating segmentation
 Nprocs:        1
 
 
 
 Final segmentation (Large/Small/Cholesky):    2   1     200
 ===============================
 
 Real Allocated Memory :     152714161 in r*8 Words,   1165.1 Mb,  1.1 Gb
 
 E2 MP2    : -0.850108626454
 E2 ss     : -0.212512792120
 E2 os     : -0.637595834334
 
  V4 ints compressing factor:    5.75256660533966     
  Generation of integrals (Reord) done
 
 
 ------------------------
 Starting CCSD iterations
 ------------------------
 
                   CCSD Energy      Difference
 
 Iteration :   1 -0.838206611293
 Iteration :   2 -0.863743766400  0.025537155107
 Iteration :   3 -0.861571648135 -0.002172118265
 Iteration :   4 -0.864647450361  0.003075802226
 Iteration :   5 -0.864238124718 -0.000409325644
 Iteration :   6 -0.864824405182  0.000586280465
 Iteration :   7 -0.864740719950 -0.000083685232
 Iteration :   8 -0.864872347210  0.000131627260
 Iteration :   9 -0.864856318569 -0.000016028641
 Iteration :  10 -0.864888363719  0.000032045150
 Iteration :  11 -0.864885844879 -0.000002518841
 Iteration :  12 -0.864894123883  0.000008279004
 Iteration :  13 -0.864893966889 -0.000000156994
 
  Final CCSD energy decomposition
 E1 CCSD energy :  0.000000000000
 E2 CCSD energy : -0.864893966889
 E2 CCSD ss     : -0.189760791604
 E2 CCSD os     : -0.675133175284
</code></pre><h2 id="output-text" tabindex="-1">Output text <a class="header-anchor" href="#output-text" aria-label="Permalink to &quot;Output text&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">comment</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example.output&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;e2section&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">module</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cmlx:templateRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cchc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;m:e2mp2energy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;-0.850108626454&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;m:e2ssenergy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;-0.212512792120&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;m:e2osenergy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;-0.637595834334&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;m:e1ccsdenergy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;0.000000000000&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;m:e2ccsdenergy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;-0.864893966889&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;m:e2ccsdss&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;-0.189760791604&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;m:e2ccsdos&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;-0.675133175284&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">comment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="template-definition" tabindex="-1">Template definition <a class="header-anchor" href="#template-definition" aria-label="Permalink to &quot;Template definition&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;e2section&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> pattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;\\s*E2\\sMP2.*&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> endPattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;\\s*&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;\\s*E2\\sMP2\\s*:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#123;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">F,m:e2mp2energy</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#125;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;\\s*E2\\sss\\s*:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#123;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">F,m:e2ssenergy</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#125;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;\\s*E2\\sos\\s*:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#123;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">F,m:e2osenergy</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#125;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ccsd&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> pattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;\\s*Final\\sCCSD\\senergy\\sdecomposition.*&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> endPattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;\\s*&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> endPattern2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;~&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;\\s*E1\\sCCSD\\senergy\\s*:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#123;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">F,m:e1ccsdenergy</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#125;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;\\s*E2\\sCCSD\\senergy\\s*:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#123;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">F,m:e2ccsdenergy</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#125;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;\\s*E2\\sCCSD\\sss\\s*:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#123;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">F,m:e2ccsdss</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#125;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;\\s*E2\\sCCSD\\sos\\s*:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#123;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">F,m:e2ccsdos</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#125;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;       </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">transform</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> process</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;move&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.//cml:scalar&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> to</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">transform</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> process</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;delete&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.//cml:list[count(*) = 0]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">transform</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> process</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;delete&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.//cml:list[count(*) = 0]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">transform</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> process</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;delete&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.//cml:module[count(*) = 0]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div>`,11)]))}const u=t(l,[["render",e]]);export{c as __pageData,u as default};
