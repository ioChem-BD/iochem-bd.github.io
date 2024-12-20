import{_ as a}from"./chunks/Total.C-Mp7DDF.js";import{_ as e,c as s,a2 as i,o as n}from"./chunks/framework.BQmytedh.js";const y=JSON.parse('{"title":"adf.frequencyanalysis","description":"","frontmatter":{},"headers":[],"relativePath":"data/codes/adf/adf.frequencyanalysis-d3e4545.md","filePath":"data/codes/adf/adf.frequencyanalysis-d3e4545.md"}'),l={name:"data/codes/adf/adf.frequencyanalysis-d3e4545.md"};function r(d,t,h,o,p,k){return n(),s("div",null,t[0]||(t[0]=[i('<h1 id="adf-frequencyanalysis" tabindex="-1">adf.frequencyanalysis <a class="header-anchor" href="#adf-frequencyanalysis" aria-label="Permalink to &quot;adf.frequencyanalysis&quot;">​</a></h1><h2 id="implementation-level" tabindex="-1">Implementation level <a class="header-anchor" href="#implementation-level" aria-label="Permalink to &quot;Implementation level&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Type</th><th>Status</th></tr></thead><tbody><tr><td>CML extraction template</td><td><img src="'+a+'" alt=""></td></tr><tr><td>HTML5 representation</td><td><img src="'+a+`" alt=""></td></tr></tbody></table><h2 id="template-attributes" tabindex="-1">Template attributes <a class="header-anchor" href="#template-attributes" aria-label="Permalink to &quot;Template attributes&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Attribute</th><th>Value</th></tr></thead><tbody><tr><td><em>source</em></td><td>ADF log</td></tr><tr><td>id</td><td>adf.frequencyanalysis</td></tr><tr><td>name</td><td>Frequency analysis</td></tr><tr><td>pattern</td><td>\\s+\\*\\s+F\\sR\\sE\\sQ\\sU\\sE\\sN\\sC.*</td></tr><tr><td>endPattern</td><td>\\s*\\d*\\s*$\\s\\*{20,}.*$(\\s*|\\s*LOGFILE.*)</td></tr><tr><td>offset</td><td>-1</td></tr><tr><td>endOffset</td><td>2</td></tr><tr><td>repeat</td><td>*</td></tr><tr><td>xml:base</td><td>adf/frequencyanalysis/frequencyanalysis.xml</td></tr></tbody></table><h2 id="comment" tabindex="-1">Comment <a class="header-anchor" href="#comment" aria-label="Permalink to &quot;Comment&quot;">​</a></h2><pre><code>                                     ******************************************
                                     *  F R E Q U E N C Y    A N A L Y S I S  *
                                     ******************************************
...


 Zero-Point Energy :      0.500175 a.u.
 ===================     13.610451 eV
 (imaginary frequencies were excluded from the summation) 
 ...
 
 ===========================
 Vibrations and Normal Modes  ***  (cartesian coordinates, NOT mass-weighted)  ***
 ===========================
  
 The headers on the normal mode eigenvectors below give the Frequency in cm-1
 (a negative value means an imaginary frequency, no output for (almost-)zero frequencies)


                       -28.256                        45.406                        54.750
              ------------------------      ------------------------      ------------------------
    1.C         -0.012   0.007  -0.020         0.041  -0.105  -0.038        -0.005  -0.030   0.101
    2.C         -0.004   0.034  -0.019         0.035  -0.097  -0.044         0.022  -0.037   0.100
    3.C         -0.019   0.001  -0.004         0.012  -0.113  -0.038        -0.023  -0.039   0.094
    4.C          0.010   0.043   0.000         0.012  -0.104  -0.038         0.022  -0.031   0.099
    5.C          0.009   0.029   0.012        -0.054  -0.129  -0.034        -0.011  -0.035   0.098
    6.C          0.013  -0.016  -0.022         0.029  -0.099  -0.038        -0.025  -0.028   0.091
    7.C         -0.014   0.051  -0.027         0.008  -0.086  -0.036         0.024  -0.034   0.095
    8.C         -0.026  -0.035  -0.003         0.039  -0.084  -0.047        -0.048  -0.056   0.074
    9.C          0.006   0.066   0.001         0.021  -0.076  -0.020         0.043  -0.007   0.095

...
    
 List of All Frequencies:


 Intensities
 ===========

               Frequency       Dipole Strength        Absorption Intensity (degeneracy not counted)
                 cm-1           1e-40 esu2 cm2          km/mole
              ----------          ----------          ----------
              -28.256192           39.676107           -0.281009
               45.405798           70.141843            0.798301
               54.750200          154.864558            2.125278
 ...
        
 ============================
 Statistical Thermal Analysis  ***  ideal gas assumed  ***
 ============================
  
 Pressure:                  1.000000 atm.
 Temperature:             300.000000 K



 Moments of Inertia (and direction vectors)
 ==========================================

       41342.8675      42584.1405      47497.7524
 ...
                          
 ***************************************************************************************************
</code></pre><h2 id="template-definition" tabindex="-1">Template definition <a class="header-anchor" href="#template-definition" aria-label="Permalink to &quot;Template definition&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;frequencyanalysis/masses.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;frequencyanalysis/zeropoint.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;frequencyanalysis/vibrations.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;frequencyanalysis/intensities.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;frequencyanalysis/thermochemistry.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,9)]))}const u=e(l,[["render",r]]);export{y as __pageData,u as default};
