import{_ as i}from"./chunks/Total.C-Mp7DDF.js";import{_ as a,c as t,a2 as h,o as k}from"./chunks/framework.BQmytedh.js";const F=JSON.parse('{"title":"steps","description":"","frontmatter":{},"headers":[],"relativePath":"data/codes/lammps/steps-d3e31812.md","filePath":"data/codes/lammps/steps-d3e31812.md"}'),l={name:"data/codes/lammps/steps-d3e31812.md"};function n(p,s,E,e,d,r){return k(),t("div",null,s[0]||(s[0]=[h('<h1 id="steps" tabindex="-1">steps <a class="header-anchor" href="#steps" aria-label="Permalink to &quot;steps&quot;">​</a></h1><h2 id="implementation-level" tabindex="-1">Implementation level <a class="header-anchor" href="#implementation-level" aria-label="Permalink to &quot;Implementation level&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Type</th><th>Status</th></tr></thead><tbody><tr><td>CML extraction template</td><td><img src="'+i+'" alt=""></td></tr><tr><td>HTML5 representation</td><td><img src="'+i+`" alt=""></td></tr></tbody></table><h2 id="template-attributes" tabindex="-1">Template attributes <a class="header-anchor" href="#template-attributes" aria-label="Permalink to &quot;Template attributes&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Attribute</th><th>Value</th></tr></thead><tbody><tr><td><em>source</em></td><td>LAMMPS log</td></tr><tr><td>id</td><td>steps</td></tr><tr><td>pattern</td><td>\\s*Step\\s+Time\\s+CPU\\s+PotEng\\s+KinEng.*</td></tr><tr><td>endPattern</td><td>\\s*Loop\\stime\\sof.*</td></tr><tr><td>endPattern2</td><td>~</td></tr><tr><td>endOffset</td><td>1</td></tr><tr><td>xml:base</td><td>job/steps.xml</td></tr></tbody></table><h2 id="input" tabindex="-1">Input <a class="header-anchor" href="#input" aria-label="Permalink to &quot;Input&quot;">​</a></h2><pre><code>Step Time CPU PotEng KinEng TotEng Enthalpy Temp Press Volume Density Cella Cellb Cellc CellAlpha CellBeta CellGamma 
       0            0            0   -251712.73            0   -251712.73   -249625.61            0    41011.594    81536.298     11.26254    43.362768    43.362768    43.362768           90           90           90 
     100         0.05    10.095992   -251781.03    252.98733   -251528.04   -250233.15    318.60575    24605.457     84316.37    10.891192    43.865149    43.843403    43.841909    90.083248    89.926643    89.904346 
     200          0.1    20.191317    -251712.1      292.144   -251419.96   -251705.83    367.91867   -5323.8838    86029.812    10.674274    44.159056     44.12428    44.153099    90.295318    89.924338    89.771092 
     300         0.15    30.431144   -251580.75    280.09057   -251300.66   -251269.69    352.73888    577.41271    85939.533    10.685488    44.136137    44.151916    44.104355    90.523589    89.911426    89.545686 
     400          0.2    40.396035    -251671.5    331.92131   -251339.58   -251553.22    418.01318    -3972.446    86165.151    10.657508    44.204662    44.229721    44.075904    90.692058    89.940226    89.451883 
     500         0.25    50.500032   -251625.13    303.80671   -251321.32   -251326.68    382.60638   -100.16461     85679.38    10.717932    44.176884    44.122329    43.962795    90.810811    89.987609    89.464337 
     600          0.3    60.471975   -251680.41     305.6443   -251374.77   -251371.43     384.9206    62.366674    85592.738    10.728782    44.146663    44.018522    44.050933    90.757753    90.043298     89.54896 
     700         0.35    70.601622    -251695.4     318.9768   -251376.42   -251297.31    401.71121     1482.807    85479.476    10.742998    44.092644    44.000189    44.064688    90.778967    90.127865    89.643866 
     800          0.4    80.577136   -251726.63    292.77818   -251433.85   -251324.23    368.71733    2051.9063    85596.807    10.728272    44.104736    44.072441    44.041728    90.879925    90.224179    89.733529 
     900         0.45    90.683058   -251658.44    317.04192    -251341.4   -251443.23    399.27446    -1900.723    85834.957    10.698506    44.151242    44.128413    44.062526    90.945548    90.276751    89.811958 
    1000          0.5     100.6761   -251714.12    306.74721   -251407.37   -251592.69    386.30957   -3454.2197    85958.138    10.683175    44.163795    44.161229    44.080492     90.94757     90.31916    89.881871
    ... 
Loop time of 20005 on 6 procs for 200000 steps with 6144 atoms
</code></pre><h2 id="output-text" tabindex="-1">Output text <a class="header-anchor" href="#output-text" aria-label="Permalink to &quot;Output text&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">comment</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example.output&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;steps&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">module</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cmlx:templateRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;steps&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cmlx:templateRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;steps&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;steps&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:integer&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l:step&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;11&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;0 100 200 300 400 500 600 700 800 900 1000&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l:time&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;11&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;0 0.05 0.1 0.15 0.2 0.25 0.3 0.35 0.4 0.45 0.5&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l:cpu&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;11&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;0 10.095992 20.191317 30.431144 40.396035 50.500032 60.471975 70.601622 80.577136 90.683058 100.6761&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l:poteng&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;11&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;-251712.73 -251781.03 -251712.1 -251580.75 -251671.5 -251625.13 -251680.41 -251695.4 -251726.63 -251658.44 -251714.12&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l:kineng&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;11&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;0 252.98733 292.144 280.09057 331.92131 303.80671 305.6443 318.9768 292.77818 317.04192 306.74721&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l:toteng&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;11&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;-251712.73 -251528.04 -251419.96 -251300.66 -251339.58 -251321.32 -251374.77 -251376.42 -251433.85 -251341.4 -251407.37&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l:enthalpy&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;11&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;-249625.61 -250233.15 -251705.83 -251269.69 -251553.22 -251326.68 -251371.43 -251297.31 -251324.23 -251443.23 -251592.69&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l:temp&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;11&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;0 318.60575 367.91867 352.73888 418.01318 382.60638 384.9206 401.71121 368.71733 399.27446 386.30957&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l:press&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;11&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;41011.594 24605.457 -5323.8838 577.41271 -3972.446 -100.16461 62.366674 1482.807 2051.9063 -1900.723 -3454.2197&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l:volume&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;11&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;81536.298 84316.37 86029.812 85939.533 86165.151 85679.38 85592.738 85479.476 85596.807 85834.957 85958.138&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l:density&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;11&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;11.26254 10.891192 10.674274 10.685488 10.657508 10.717932 10.728782 10.742998 10.728272 10.698506 10.683175&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l:cella&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;11&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;43.362768 43.865149 44.159056 44.136137 44.204662 44.176884 44.146663 44.092644 44.104736 44.151242 44.163795&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l:cellb&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;11&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;43.362768 43.843403 44.12428 44.151916 44.229721 44.122329 44.018522 44.000189 44.072441 44.128413 44.161229&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l:cellc&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;11&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;43.362768 43.841909 44.153099 44.104355 44.075904 43.962795 44.050933 44.064688 44.041728 44.062526 44.080492&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l:cellAlpha&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;11&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;90 90.083248 90.295318 90.523589 90.692058 90.810811 90.757753 90.778967 90.879925 90.945548 90.94757&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l:cellBeta&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;11&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;90 89.926643 89.924338 89.911426 89.940226 89.987609 90.043298 90.127865 90.224179 90.276751 90.31916&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l:cellGamma&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;11&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;90 89.904346 89.771092 89.545686 89.451883 89.464337 89.54896 89.643866 89.733529 89.811958 89.881871&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;   </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">comment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="template-definition" tabindex="-1">Template definition <a class="header-anchor" href="#template-definition" aria-label="Permalink to &quot;Template definition&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">record</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;steps&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;*&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> makeArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;true&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#123;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">I,l:step</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#125;&amp;#123;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">F,l:time</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#125;&amp;#123;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">F,l:cpu</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#125;&amp;#123;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">F,l:poteng</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#125;&amp;#123;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">F,l:kineng</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#125;&amp;#123;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">F,l:toteng</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#125;&amp;#123;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">F,l:enthalpy</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#125;&amp;#123;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">F,l:temp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#125;&amp;#123;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">F,l:press</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#125;&amp;#123;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">F,l:volume</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#125;&amp;#123;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">F,l:density</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#125;&amp;#123;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">F,l:cella</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#125;&amp;#123;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">F,l:cellb</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#125;&amp;#123;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">F,l:cellc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#125;&amp;#123;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">F,l:cellAlpha</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#125;&amp;#123;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">F,l:cellBeta</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#125;&amp;#123;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">F,l:cellGamma</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#125;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">transform</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> process</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;delete&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.//cml:list[count(*)=0]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">transform</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> process</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;delete&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.//cml:list[count(*)=0]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">transform</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> process</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;addAttribute&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.//cml:list&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dictRef&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;steps&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div>`,11)]))}const o=a(l,[["render",n]]);export{F as __pageData,o as default};
