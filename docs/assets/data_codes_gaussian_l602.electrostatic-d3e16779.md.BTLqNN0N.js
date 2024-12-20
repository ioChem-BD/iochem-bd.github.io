import{_ as i}from"./chunks/Total.C-Mp7DDF.js";import{_ as t}from"./chunks/Partial.CcMLgI3m.js";import{_ as a,c as n,a2 as e,o as h}from"./chunks/framework.BQmytedh.js";const m=JSON.parse('{"title":"l602.electrostatic","description":"","frontmatter":{},"headers":[],"relativePath":"data/codes/gaussian/l602.electrostatic-d3e16779.md","filePath":"data/codes/gaussian/l602.electrostatic-d3e16779.md"}'),l={name:"data/codes/gaussian/l602.electrostatic-d3e16779.md"};function k(p,s,r,E,d,o){return h(),n("div",null,s[0]||(s[0]=[e('<h1 id="l602-electrostatic" tabindex="-1">l602.electrostatic <a class="header-anchor" href="#l602-electrostatic" aria-label="Permalink to &quot;l602.electrostatic&quot;">​</a></h1><h2 id="implementation-level" tabindex="-1">Implementation level <a class="header-anchor" href="#implementation-level" aria-label="Permalink to &quot;Implementation level&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Type</th><th>Status</th></tr></thead><tbody><tr><td>CML extraction template</td><td><img src="'+i+'" alt=""></td></tr><tr><td>HTML5 representation</td><td><img src="'+t+`" alt=""></td></tr></tbody></table><h2 id="template-attributes" tabindex="-1">Template attributes <a class="header-anchor" href="#template-attributes" aria-label="Permalink to &quot;Template attributes&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Attribute</th><th>Value</th></tr></thead><tbody><tr><td><em>source</em></td><td>Gaussian log</td></tr><tr><td>id</td><td>l602.electrostatic</td></tr><tr><td>name</td><td>Electrostatic Properties</td></tr><tr><td>repeat</td><td>1</td></tr><tr><td>endOffset</td><td>1</td></tr><tr><td>pattern</td><td>\\s*\\(Enter.*l602\\..*</td></tr><tr><td>endPattern</td><td>\\s*Leave\\sLink\\s+602\\s.*</td></tr><tr><td>xml:base</td><td>l602/l602.electrostatic.xml</td></tr></tbody></table><h2 id="input" tabindex="-1">Input <a class="header-anchor" href="#input" aria-label="Permalink to &quot;Input&quot;">​</a></h2><pre><code> (Enter /mnt/data/applications/G16/g16/l602.exe)
 FitSet:  NAtFit=    25 NAtPot=    25 NAtFrz=     0 MDM=    29 TotChg=  -2.00000
 Breneman (CHELPG) radii used.
 Read replacement radii for each type of atom:
 Rad(74) =   7.400000000000D-01
 Rad(8) =   1.520000000000D+00
 Atom Element Radius
    1    74    0.74
    2    74    0.74
    3    74    0.74
    4     8    1.52
    5     8    1.52
    6     8    1.52
    7     8    1.52
    8     8    1.52
    9     8    1.52
   10     8    1.52
   11     8    1.52
   12     8    1.52
   13     8    1.52
   14    74    0.74
   15    74    0.74
   16    74    0.74
   17     8    1.52
   18     8    1.52
   19     8    1.52
   20     8    1.52
   21     8    1.52
   22     8    1.52
   23     8    1.52
   24     8    1.52
   25     8    1.52
 Generate Potential Derived Charges using the Breneman model, NDens= 1.
 Grid spacing= 0.300 Box extension= 2.800
 NStep X,Y,Z=   47     47     47   Total possible points=      103823
 Number of Points to Fit=   17976

 **********************************************************************

            Electrostatic Properties Using The SCF Density

 **********************************************************************

       Atomic Center    1 is at   3.189219  7.456923  5.993332
       Atomic Center    2 is at   0.435154  9.375214  6.202588
       Atomic Center    3 is at   2.665633  9.356718  8.721263
       Atomic Center    4 is at   3.500742  5.762053  5.710694
       Atomic Center    5 is at   4.962172  8.245776  6.213138
       Atomic Center    6 is at   3.015346  7.606557  7.928571
       Atomic Center    7 is at   1.248413  7.621258  5.925731
       Atomic Center    8 is at   3.194906  8.261455  4.213786
       Atomic Center    9 is at   1.004370  9.782648  4.379891
       Atomic Center   10 is at   0.830120  9.124553  8.093715
       Atomic Center   11 is at   2.587876  9.053490 10.439637
       Atomic Center   12 is at  -1.281498  9.086332  6.066044
       Atomic Center   13 is at   2.773421  9.766537  6.380567
       Atomic Center   14 is at   2.357721 12.076609  6.765025
       Atomic Center   15 is at   5.111791 10.158337  6.555808
       Atomic Center   16 is at   2.881370 10.177167  4.035300
       Atomic Center   17 is at   2.046223 13.771647  7.046698
       Atomic Center   18 is at   0.584747 11.287770  6.545144
       Atomic Center   19 is at   2.531751 11.926094  4.829894
       Atomic Center   20 is at   4.298547 11.912308  6.832581
       Atomic Center   21 is at   2.351840 11.272914  8.544974
       Atomic Center   22 is at   4.543427  9.751016  8.378808
       Atomic Center   23 is at   4.715893 10.408804  4.664902
       Atomic Center   24 is at   2.959169 10.480399  2.316991
       Atomic Center   25 is at   6.828493 10.447391  6.691419
   17976 points will be used for fitting atomic charges
 Fitting point charges to electrostatic potential
 The dipole moment will be constrained to the correct value
 Charges from ESP fit, RMS=   0.01207 RRMS=   0.05745:
 ESP charges:
               1
     1  W    3.413727
     2  W    3.351846
     3  W    3.258115
     4  O   -0.854513
     5  O   -1.368364
     6  O   -1.337268
     7  O   -1.364919
     8  O   -1.343355
     9  O   -1.325576
    10  O   -1.324507
    11  O   -0.810378
    12  O   -0.836284
    13  O   -0.919849
    14  W    3.413292
    15  W    3.357430
    16  W    3.258954
    17  O   -0.854404
    18  O   -1.367751
    19  O   -1.336391
    20  O   -1.366632
    21  O   -1.342752
    22  O   -1.325972
    23  O   -1.325832
    24  O   -0.810949
    25  O   -0.837666
 Sum of ESP charges =  -2.00000
 ESP charges with hydrogens summed into heavy atoms:
               1
     1  W    3.413727
     2  W    3.351846
     3  W    3.258115
     4  O   -0.854513
     5  O   -1.368364
     6  O   -1.337268
     7  O   -1.364919
     8  O   -1.343355
     9  O   -1.325576
    10  O   -1.324507
    11  O   -0.810378
    12  O   -0.836284
    13  O   -0.919849
    14  W    3.413292
    15  W    3.357430
    16  W    3.258954
    17  O   -0.854404
    18  O   -1.367751
    19  O   -1.336391
    20  O   -1.366632
    21  O   -1.342752
    22  O   -1.325972
    23  O   -1.325832
    24  O   -0.810949
    25  O   -0.837666
 Charge=  -2.00000 Dipole=   -26.6426   -93.8202   -61.2991 Tot=   115.1939
 -----------------------------------------------------------------

              Electrostatic Properties (Atomic Units)

 -----------------------------------------------------------------
    Center     Electric         -------- Electric Field --------
               Potential          X             Y             Z
 -----------------------------------------------------------------
    1 Atom    -10.444999
    2 Atom    -10.445273
    3 Atom    -10.444493
    4 Atom    -22.517096
    5 Atom    -22.519301
    6 Atom    -22.518991
    7 Atom    -22.519236
    8 Atom    -22.518841
    9 Atom    -22.518949
   10 Atom    -22.519027
   11 Atom    -22.516756
   12 Atom    -22.517329
   13 Atom    -22.530759
   14 Atom    -10.444992
   15 Atom    -10.445276
   16 Atom    -10.444277
   17 Atom    -22.517090
   18 Atom    -22.519293
   19 Atom    -22.518843
   20 Atom    -22.519235
   21 Atom    -22.518978
   22 Atom    -22.519095
   23 Atom    -22.518888
   24 Atom    -22.516449
   25 Atom    -22.517333
 -----------------------------------------------------------------
 Leave Link  602 at Fri Jun 28 20:49:58 2019, MaxMem=  2684354560 cpu:              18.5 elap:               2.3
</code></pre><h2 id="output-text" tabindex="-1">Output text <a class="header-anchor" href="#output-text" aria-label="Permalink to &quot;Output text&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">comment</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example.output&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l602.electrostatic&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">module</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cmlx:templateRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l602.electrostatic&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">module</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cmlx:templateRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;espcharges&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:integer&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cc:serial&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;25&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:string&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cc:elementType&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;25&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;W W W O O O O O O O O O O W W W O O O O O O O O O&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:espcharge&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;25&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;3.413727 3.351846 3.258115 -0.854513 -1.368364 -1.337268 -1.364919 -1.343355 -1.325576 -1.324507 -0.810378 -0.836284 -0.919849 3.413292 3.357430 3.258954 -0.854404 -1.367751 -1.336391 -1.366632 -1.342752 -1.325972 -1.325832 -0.810949 -0.837666&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">comment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="template-definition" tabindex="-1">Template definition <a class="header-anchor" href="#template-definition" aria-label="Permalink to &quot;Template definition&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;espcharges&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> pattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;\\s*ESP\\scharges:.*&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> endPattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;\\s*Sum\\sof\\sESP\\scharges.*&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> endOffset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">record</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">record</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;*&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> makeArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;true&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#123;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">I,cc:serial</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#125;&amp;#123;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">A,cc:elementType</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#125;&amp;#123;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">F,g:espcharge</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#125;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;     </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">transform</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> process</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pullup&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.//cml:array&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">transform</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> process</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;delete&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.//cml:list[count(*)=0]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">transform</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> process</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;delete&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.//cml:list[count(*)=0]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div>`,11)]))}const F=a(l,[["render",k]]);export{m as __pageData,F as default};
