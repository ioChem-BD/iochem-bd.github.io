import{_ as a}from"./chunks/Total.C-Mp7DDF.js";import{_ as e,c as n,a2 as i,o as s}from"./chunks/framework.BQmytedh.js";const c=JSON.parse('{"title":"mayer","description":"","frontmatter":{},"headers":[],"relativePath":"data/codes/orca/mayer-d3e41460.md","filePath":"data/codes/orca/mayer-d3e41460.md"}'),r={name:"data/codes/orca/mayer-d3e41460.md"};function l(d,t,h,o,p,m){return s(),n("div",null,t[0]||(t[0]=[i('<h1 id="mayer" tabindex="-1">mayer <a class="header-anchor" href="#mayer" aria-label="Permalink to &quot;mayer&quot;">​</a></h1><h2 id="implementation-level" tabindex="-1">Implementation level <a class="header-anchor" href="#implementation-level" aria-label="Permalink to &quot;Implementation level&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Type</th><th>Status</th></tr></thead><tbody><tr><td>CML extraction template</td><td><img src="'+a+'" alt=""></td></tr><tr><td>HTML5 representation</td><td><img src="'+a+`" alt=""></td></tr></tbody></table><h2 id="template-attributes" tabindex="-1">Template attributes <a class="header-anchor" href="#template-attributes" aria-label="Permalink to &quot;Template attributes&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Attribute</th><th>Value</th></tr></thead><tbody><tr><td><em>source</em></td><td>Orca log</td></tr><tr><td>id</td><td>mayer</td></tr><tr><td>name</td><td>Mayer Population Analysis</td></tr><tr><td>pattern</td><td>\\s*\\*{10,}\\s*$\\s*\\*\\s*MAYER\\sPOPULATION\\sANALYSIS\\s*\\*\\s*</td></tr><tr><td>endPattern</td><td>\\s*B\\(.*$\\s*</td></tr><tr><td>endOffset</td><td>1</td></tr><tr><td>repeat</td><td>*</td></tr><tr><td>xml:base</td><td>job/mayer/mayertop.xml</td></tr></tbody></table><h2 id="comment" tabindex="-1">Comment <a class="header-anchor" href="#comment" aria-label="Permalink to &quot;Comment&quot;">​</a></h2><pre><code>                      *****************************
                      * MAYER POPULATION ANALYSIS *
                      *****************************

  NA   - Mulliken gross atomic population
  ZA   - Total nuclear charge
  QA   - Mulliken gross atomic charge
  VA   - Mayer&#39;s total valence
  BVA  - Mayer&#39;s bonded valence
  FA   - Mayer&#39;s free valence

  ATOM       NA         ZA         QA         VA         BVA        FA
  0 O      8.3525     8.0000    -0.3525     2.0614     2.0614    -0.0000
  1 O      8.3382     8.0000    -0.3382     2.0818     2.0818    -0.0000
  2 H      0.8188     1.0000     0.1812     1.0053     1.0053    -0.0000
  3 H      0.8463     1.0000     0.1537     1.0862     1.0862    -0.0000
  4 H      0.8436     1.0000     0.1564     1.0818     1.0818    -0.0000
  5 H      0.8262     1.0000     0.1738     1.0092     1.0092    -0.0000
  6 O      8.4386     8.0000    -0.4386     2.0887     2.0887    -0.0000
  7 C      5.9033     6.0000     0.0967     4.1112     4.1112    -0.0000
  8 C      6.0073     6.0000    -0.0073     4.0178     4.0178    -0.0000
  9 C      6.0494     6.0000    -0.0494     4.0104     4.0104    -0.0000
 10 H      0.9928     1.0000     0.0072     0.9727     0.9727    -0.0000
 11 H      0.9876     1.0000     0.0124     0.9993     0.9993    -0.0000
 12 H      0.9849     1.0000     0.0151     1.0076     1.0076    -0.0000
 13 H      0.9719     1.0000     0.0281     0.9921     0.9921    -0.0000
 14 H      0.9655     1.0000     0.0345     0.9834     0.9834     0.0000
 15 H      1.0016     1.0000    -0.0016     1.0579     1.0579    -0.0000
 16 O      8.2811     8.0000    -0.2811     2.2519     2.2519    -0.0000
 17 N      7.2199     7.0000    -0.2199     3.4766     3.4766    -0.0000
 18 N      7.0383     7.0000    -0.0383     3.3061     3.3061    -0.0000
 19 C      5.9823     6.0000     0.0177     3.9570     3.9570    -0.0000
 20 C      6.1486     6.0000    -0.1486     3.9691     3.9691    -0.0000
 21 C      5.9098     6.0000     0.0902     3.9375     3.9375    -0.0000
 22 C      5.8671     6.0000     0.1329     3.8708     3.8708    -0.0000
 23 C      6.0418     6.0000    -0.0418     4.1091     4.1091    -0.0000
 24 C      5.9888     6.0000     0.0112     4.0715     4.0715    -0.0000
 25 C      5.9943     6.0000     0.0057     3.8344     3.8344    -0.0000
 26 C      5.9954     6.0000     0.0046     4.4228     4.4228    -0.0000
 27 H      0.9569     1.0000     0.0431     0.9976     0.9976    -0.0000
 28 H      0.9524     1.0000     0.0476     0.9843     0.9843    -0.0000
 29 H      0.9694     1.0000     0.0306     0.9981     0.9981     0.0000
 30 H      0.9683     1.0000     0.0317     1.0205     1.0205    -0.0000
 31 H      0.9333     1.0000     0.0667     1.0034     1.0034    -0.0000
 32 H      0.9410     1.0000     0.0590     0.9841     0.9841    -0.0000
 33 H      0.9883     1.0000     0.0117     1.1294     1.1294    -0.0000
 34 H      0.9605     1.0000     0.0395     0.9849     0.9849    -0.0000
 35 H      0.9491     1.0000     0.0509     0.9814     0.9814    -0.0000
 36 H      0.9546     1.0000     0.0454     0.9771     0.9771    -0.0000
 37 H      0.9590     1.0000     0.0410     1.0101     1.0101    -0.0000
 38 H      0.9250     1.0000     0.0750     0.9930     0.9930    -0.0000
 39 H      0.8629     1.0000     0.1371     1.0500     1.0500    -0.0000
 40 H      0.8835     1.0000     0.1165     1.1064     1.1064    -0.0000

  Mayer bond orders larger than 0.1
B(  0-O ,  2-H ) :   0.9898 B(  0-O ,  3-H ) :   0.9071 B(  1-O ,  4-H ) :   0.8801 
B(  1-O ,  5-H ) :   0.9839 B(  1-O , 33-H ) :   0.1848 B(  3-H ,  6-O ) :   0.1409 
B(  4-H ,  6-O ) :   0.1800 B(  6-O ,  7-C ) :   1.3907 B(  6-O , 40-H ) :   0.1566 
B(  7-C ,  8-C ) :   1.0247 B(  7-C , 10-H ) :   0.8911 B(  7-C , 20-C ) :   0.5980 
B(  8-C ,  9-C ) :   1.1090 B(  8-C , 11-H ) :   0.9202 B(  8-C , 12-H ) :   0.9273 
B(  9-C , 13-H ) :   0.9649 B(  9-C , 14-H ) :   0.9589 B(  9-C , 15-H ) :   0.9474 
B( 16-O , 18-N ) :   0.1147 B( 16-O , 26-C ) :   2.0236 B( 17-N , 21-C ) :   1.4568 
B( 17-N , 22-C ) :   0.9096 B( 17-N , 25-C ) :   0.9178 B( 18-N , 26-C ) :   1.3955 
B( 18-N , 39-H ) :   0.9143 B( 18-N , 40-H ) :   0.8496 B( 19-C , 20-C ) :   1.0614 
B( 19-C , 27-H ) :   0.9549 B( 19-C , 28-H ) :   0.9496 B( 19-C , 29-H ) :   0.9517 
B( 20-C , 21-C ) :   1.2532 B( 20-C , 30-H ) :   0.9059 B( 21-C , 31-H ) :   0.9486 
B( 22-C , 23-C ) :   1.0878 B( 22-C , 32-H ) :   0.9320 B( 22-C , 33-H ) :   0.8878 
B( 23-C , 24-C ) :   1.0882 B( 23-C , 34-H ) :   0.9322 B( 23-C , 35-H ) :   0.9356 
B( 24-C , 25-C ) :   1.0522 B( 24-C , 36-H ) :   0.9353 B( 24-C , 37-H ) :   0.9328 
B( 25-C , 26-C ) :   0.8818 B( 25-C , 38-H ) :   0.8971 

-------
</code></pre><h2 id="template-definition" tabindex="-1">Template definition <a class="header-anchor" href="#template-definition" aria-label="Permalink to &quot;Template definition&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mayer/mayer.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mayer/bonds.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,9)]))}const B=e(r,[["render",l]]);export{c as __pageData,B as default};
