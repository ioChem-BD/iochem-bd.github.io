import{_ as i}from"./chunks/Total.C-Mp7DDF.js";import{_ as a}from"./chunks/Partial.CcMLgI3m.js";import{_ as t,c as n,a2 as l,o as h}from"./chunks/framework.BQmytedh.js";const F=JSON.parse('{"title":"l914","description":"","frontmatter":{},"headers":[],"relativePath":"data/codes/gaussian/l914-d3e23296.md","filePath":"data/codes/gaussian/l914-d3e23296.md"}'),k={name:"data/codes/gaussian/l914-d3e23296.md"};function e(p,s,E,d,r,g){return h(),n("div",null,s[0]||(s[0]=[l('<h1 id="l914" tabindex="-1">l914 <a class="header-anchor" href="#l914" aria-label="Permalink to &quot;l914&quot;">​</a></h1><h2 id="implementation-level" tabindex="-1">Implementation level <a class="header-anchor" href="#implementation-level" aria-label="Permalink to &quot;Implementation level&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Type</th><th>Status</th></tr></thead><tbody><tr><td>CML extraction template</td><td><img src="'+i+'" alt=""></td></tr><tr><td>HTML5 representation</td><td><img src="'+a+`" alt=""></td></tr></tbody></table><h2 id="template-attributes" tabindex="-1">Template attributes <a class="header-anchor" href="#template-attributes" aria-label="Permalink to &quot;Template attributes&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Attribute</th><th>Value</th></tr></thead><tbody><tr><td><em>source</em></td><td>Gaussian log</td></tr><tr><td>id</td><td>l914</td></tr><tr><td>name</td><td>Time-dependent DFT</td></tr><tr><td>repeat</td><td>*</td></tr><tr><td>pattern</td><td>\\s*RHF ground state\\s*</td></tr><tr><td>pattern2</td><td>\\s*\\*{10,}$\\s*Excited\\sstates\\sfrom.*</td></tr><tr><td>endPattern</td><td>\\s*SavETr:.*write IOETrn=.*</td></tr><tr><td>offset</td><td>0</td></tr><tr><td>endOffset</td><td>1</td></tr><tr><td>xml:base</td><td>l914.xml</td></tr></tbody></table><h2 id="input" tabindex="-1">Input <a class="header-anchor" href="#input" aria-label="Permalink to &quot;Input&quot;">​</a></h2><pre><code> (Enter /usr/local/gaussian/g09/l914.exe)
 RHF ground state
 MDV=   536870912 DFT=T DoStab=F Mixed=T DoRPA=T DoScal=F NonHer=T
 Would need an additional 18585800000 words for in-memory AO integral storage.
 Making orbital integer symmetry assigments:
 Orbital symmetries:
       Occupied  (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A)
                 (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A)
                 (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A)
                 (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A)
                 (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A)
                 (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A)
                 (A) (A) (A)
       Virtual   (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A)
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
                 (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A)
                 (A) (A) (A) (A) (A) (A) (A) (A) (A) (A) (A)
    12 initial guesses have been made.
 Convergence on wavefunction:    0.001000000000000
 Davidson Disk Diagonalization:  ConvIn= 1.00D-03 SkipCon=T Conv= 1.00D-03.
 Max sub-space:   200 roots to seek:    12 dimension of matrix:  42660
 Iteration     1 Dimension    12 NMult    12
 Cannot handle 2e integral symmetry, ISym2E=1.
 CISAX:  IP=  1 NPass=   1 NMax=    12.
 CISAX will form    12 AO SS matrices at one time.
 NMat=    12 NSing=    12.
 Symmetry not used in FoFDir.
 MinBra= 0 MaxBra= 2 Meth= 1.
 IRaf=       0 NMat=  12 IRICut=      30 DoRegI=T DoRafI=T ISym2E= 0 JSym2E=0.
 Cannot handle 2e integral symmetry, ISym2E=1.
 CISAX:  IP=  1 NPass=   1 NMax=    12.
 CISAX will form    12 AO SS matrices at one time.
 NMat=    12 NSing=    12.
 Excitation Energies [eV] at current iteration:
 Root      1 :     3.967707646897748
 Root      2 :     4.238515012560257
 Root      3 :     4.378216245803176
 Iteration     2 Dimension    18 NMult    18
 Cannot handle 2e integral symmetry, ISym2E=1.
 CISAX:  IP=  1 NPass=   1 NMax=     6.
 CISAX will form     6 AO SS matrices at one time.
 NMat=     6 NSing=     6.
 Cannot handle 2e integral symmetry, ISym2E=1.
 CISAX:  IP=  1 NPass=   1 NMax=     6.
 CISAX will form     6 AO SS matrices at one time.
 NMat=     6 NSing=     6.
 Root      1 not converged, maximum delta is    0.167222864295480
 Root      2 not converged, maximum delta is    0.164208266403828
 Root      3 not converged, maximum delta is    0.044998999005832
 Excitation Energies [eV] at current iteration:
 Root      1 :     3.413637705892117   Change is   -0.554069941005632
 Root      2 :     3.919208713614791   Change is   -0.319306298945466
 Root      3 :     4.293482790068234   Change is   -0.084733455734942
 Iteration     3 Dimension    24 NMult    24
 Cannot handle 2e integral symmetry, ISym2E=1.
 CISAX:  IP=  1 NPass=   1 NMax=     6.
 CISAX will form     6 AO SS matrices at one time.
 NMat=     6 NSing=     6.
 Cannot handle 2e integral symmetry, ISym2E=1.
 CISAX:  IP=  1 NPass=   1 NMax=     6.
 CISAX will form     6 AO SS matrices at one time.
 NMat=     6 NSing=     6.
 Root      1 not converged, maximum delta is    0.019347573457946
 Root      2 not converged, maximum delta is    0.036617041797457
 Root      3 not converged, maximum delta is    0.026242798639169
 Excitation Energies [eV] at current iteration:
 Root      1 :     3.355788285778300   Change is   -0.057849420113817
 Root      2 :     3.895472092712217   Change is   -0.023736620902573
 Root      3 :     4.282703397660652   Change is   -0.010779392407583
 Iteration     4 Dimension    30 NMult    30
 Cannot handle 2e integral symmetry, ISym2E=1.
 CISAX:  IP=  1 NPass=   1 NMax=     6.
 CISAX will form     6 AO SS matrices at one time.
 NMat=     6 NSing=     6.
 Cannot handle 2e integral symmetry, ISym2E=1.
 CISAX:  IP=  1 NPass=   1 NMax=     6.
 CISAX will form     6 AO SS matrices at one time.
 NMat=     6 NSing=     6.
 Root      1 not converged, maximum delta is    0.009618219317635
 Root      2 not converged, maximum delta is    0.019860084579139
 Root      3 not converged, maximum delta is    0.011133681274320
 Excitation Energies [eV] at current iteration:
 Root      1 :     3.347706742456209   Change is   -0.008081543322092
 Root      2 :     3.891222852131049   Change is   -0.004249240581168
 Root      3 :     4.280697578288718   Change is   -0.002005819371933
 Iteration     5 Dimension    36 NMult    36
 Cannot handle 2e integral symmetry, ISym2E=1.
 CISAX:  IP=  1 NPass=   1 NMax=     6.
 CISAX will form     6 AO SS matrices at one time.
 NMat=     6 NSing=     6.
 Cannot handle 2e integral symmetry, ISym2E=1.
 CISAX:  IP=  1 NPass=   1 NMax=     6.
 CISAX will form     6 AO SS matrices at one time.
 NMat=     6 NSing=     6.
 Root      1 not converged, maximum delta is    0.001516373275732
 Root      2 not converged, maximum delta is    0.002257556704199
 Root      3 not converged, maximum delta is    0.006964315269212
 Excitation Energies [eV] at current iteration:
 Root      1 :     3.346815255757697   Change is   -0.000891486698511
 Root      2 :     3.890791146585966   Change is   -0.000431705545083
 Root      3 :     4.280393495815495   Change is   -0.000304082473223
 Iteration     6 Dimension    42 NMult    42
 Cannot handle 2e integral symmetry, ISym2E=1.
 CISAX:  IP=  1 NPass=   1 NMax=     6.
 CISAX will form     6 AO SS matrices at one time.
 NMat=     6 NSing=     6.
 Cannot handle 2e integral symmetry, ISym2E=1.
 CISAX:  IP=  1 NPass=   1 NMax=     6.
 CISAX will form     6 AO SS matrices at one time.
 NMat=     6 NSing=     6.
 Root      1 has converged.
 Root      2 has converged.
 Root      3 not converged, maximum delta is    0.005536396876360
 Excitation Energies [eV] at current iteration:
 Root      1 :     3.346738920773071   Change is   -0.000076334984626
 Root      2 :     3.890709781814344   Change is   -0.000081364771622
 Root      3 :     4.280339275361060   Change is   -0.000054220454435
 Iteration     7 Dimension    44 NMult    44
 Cannot handle 2e integral symmetry, ISym2E=1.
 CISAX:  IP=  1 NPass=   1 NMax=     2.
 CISAX will form     2 AO SS matrices at one time.
 NMat=     2 NSing=     2.
 Cannot handle 2e integral symmetry, ISym2E=1.
 CISAX:  IP=  1 NPass=   1 NMax=     2.
 CISAX will form     2 AO SS matrices at one time.
 NMat=     2 NSing=     2.
 Root      1 has converged.
 Root      2 has converged.
 Root      3 not converged, maximum delta is    0.004291175620302
 Excitation Energies [eV] at current iteration:
 Root      1 :     3.346738909066853   Change is   -0.000000011706218
 Root      2 :     3.890709477530946   Change is   -0.000000304283398
 Root      3 :     4.280325064377926   Change is   -0.000014210983135
 Iteration     8 Dimension    46 NMult    46
 Cannot handle 2e integral symmetry, ISym2E=1.
 CISAX:  IP=  1 NPass=   1 NMax=     2.
 CISAX will form     2 AO SS matrices at one time.
 NMat=     2 NSing=     2.
 Cannot handle 2e integral symmetry, ISym2E=1.
 CISAX:  IP=  1 NPass=   1 NMax=     2.
 CISAX will form     2 AO SS matrices at one time.
 NMat=     2 NSing=     2.
 Root      1 has converged.
 Root      2 has converged.
 Root      3 not converged, maximum delta is    0.002348422239935
 Excitation Energies [eV] at current iteration:
 Root      1 :     3.346738864695234   Change is   -0.000000044371619
 Root      2 :     3.890709339425054   Change is   -0.000000138105892
 Root      3 :     4.280320909403391   Change is   -0.000004154974534
 Convergence on energies, max DE= 4.15D-06.
 Convergence on expansion vectors.
 ***********************************************************************
 Excited states from &lt;AA,BB:AA,BB&gt; singles matrix:
 ***********************************************************************
 
 1PDM for each excited state written to RWF  633
 Ground to excited state transition electric dipole moments (Au):
       state          X           Y           Z        Dip. S.      Osc.
         1        -2.5440     -0.1110     -0.0045      6.4842      0.5317
         2        -0.2619      0.0057      0.0078      0.0687      0.0065
         3         0.0702      0.1133      0.0174      0.0181      0.0019
 Ground to excited state transition velocity dipole moments (Au):
       state          X           Y           Z        Dip. S.      Osc.
         1         0.3024      0.0141      0.0011      0.0916      0.4967
         2         0.0403     -0.0034     -0.0010      0.0016      0.0076
         3        -0.0074     -0.0157      0.0000      0.0003      0.0013
 Ground to excited state transition magnetic dipole moments (Au):
       state          X           Y           Z
         1         0.0071     -0.0753      1.0611
         2         0.0021     -0.0568      0.6312
         3        -0.2717     -0.3094     -0.2263
 &lt;0|del|b&gt; * &lt;b|rxdel|0&gt; + &lt;0|del|b&gt; * &lt;b|delr+rdel|0&gt;
 Rotatory Strengths (R) in cgs (10**-40 erg-esu-cm/Gauss)
       state          XX          YY          ZZ    R(velocity)
         1        -1.7035     22.8012     -8.3680      4.2432
 Total R(velocity) tensor for State=          1
                 1             2             3 
      1  -0.170347D+01  0.108435D+03 -0.946500D+03
      2  -0.131594D+01  0.228012D+02  0.701353D+02
      3   0.348190D+00 -0.680828D+01 -0.836804D+01
 R(velocity) tensor in inp. orien. for State=          1
                 1             2             3 
      1  -0.111009D+03 -0.252408D+02 -0.605846D+03
      2  -0.157745D+03  0.203395D+01 -0.702197D+03
      3   0.147234D+02  0.132220D+02  0.121705D+03
         2        -0.9991     -1.7423      1.0125     -0.5763
 Total R(velocity) tensor for State=          2
                 1             2             3 
      1  -0.999078D+00  0.786760D+01 -0.673433D+02
      2  -0.110031D+00 -0.174227D+01  0.154399D+01
      3  -0.887040D-01 -0.133696D+01  0.101251D+01
 R(velocity) tensor in inp. orien. for State=          2
                 1             2             3 
      1  -0.104454D+02 -0.461560D+00 -0.442189D+02
      2  -0.930365D+01 -0.221473D+01 -0.482401D+02
      3   0.169599D+01  0.839114D+00  0.109313D+02
         3         9.7239      4.4278     16.6090     10.2536
 Total R(velocity) tensor for State=          3
                 1             2             3 
      1   0.972387D+01 -0.456769D+01  0.388279D+01
      2  -0.945136D+01  0.442782D+01 -0.941070D+01
      3   0.710904D-01  0.150839D-02  0.166090D+02
 R(velocity) tensor in inp. orien. for State=          3
                 1             2             3 
      1   0.441376D+00  0.389490D+00  0.935907D+00
      2   0.742169D+01  0.135028D+02  0.743821D+01
      3   0.519912D+01 -0.265170D+00  0.168165D+02
 1/2[&lt;0|r|b&gt;*&lt;b|rxdel|0&gt; + (&lt;0|rxdel|b&gt;*&lt;b|r|0&gt;)*]
 Rotatory Strengths (R) in cgs (10**-40 erg-esu-cm/Gauss)
       state          XX          YY          ZZ     R(length)     R(au)
         1        12.7139     -5.9100      3.4107      3.4048      0.0072
         2         0.3953      0.2292     -3.4869     -0.9541     -0.0020
         3        13.4844     24.7906      2.7777     13.6843      0.0290
  1/2[&lt;0|del|b&gt;*&lt;b|r|0&gt; + (&lt;0|r|b&gt;*&lt;b|del|0&gt;)*] (Au)
       state          X           Y           Z        Dip. S.   Osc.(frdel)
         1        -0.7693     -0.0016      0.0000      0.7708      0.5139
         2        -0.0106      0.0000      0.0000      0.0106      0.0071
         3        -0.0005     -0.0018      0.0000      0.0023      0.0015
 Ground to excited state transition densities written to RWF  633

 Excitation energies and oscillator strengths:
 
 Excited State   1:      Singlet-A      3.3467 eV  370.46 nm  f=0.5317  &lt;S**2&gt;=0.000
      75 -&gt; 76         0.69790
 This state for optimization and/or second-order correction.
 Total Energy, E(TD-HF/TD-KS) =  -974.346712524    
 Copying the excited state density for this state as the 1-particle RhoCI density.
 
 Excited State   2:      Singlet-A      3.8907 eV  318.67 nm  f=0.0065  &lt;S**2&gt;=0.000
      74 -&gt; 76         0.66892
      75 -&gt; 77         0.20436
 
 Excited State   3:      Singlet-A      4.2803 eV  289.66 nm  f=0.0019  &lt;S**2&gt;=0.000
      72 -&gt; 76        -0.25494
      73 -&gt; 76         0.63171
      75 -&gt; 77        -0.13245
 SavETr:  write IOETrn=   770 NScale= 10 NData=  16 NLR=1 LETran=      64.
 Leave Link  914 at Mon Jan 16 08:08:48 2012, MaxMem=  536870912 cpu:   18235.8
</code></pre><h2 id="output-text" tabindex="-1">Output text <a class="header-anchor" href="#output-text" aria-label="Permalink to &quot;Output text&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">comment</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example.output&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l914&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">module</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cmlx:templateRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l914&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">module</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cmlx:lineCount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;18&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cmlx:templateRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l914_excitations&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">module</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cmlx:lineCount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;6&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cmlx:templateRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l914_excitations1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cmlx:templateRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l914_excit1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:integer&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_enumber&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;1&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:string&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_ttype&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Singlet-A&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_eenergy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;3.3467&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_wavelength&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;370.46&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_oscillator_strength&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;0.5317&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_s2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;0.0&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cmlx:templateRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l914_excit2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:integer&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_orbitalstart&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;75&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:integer&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_orbitalend&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;76&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_unknown&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;0.6979&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cmlx:templateRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l914_tote&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_totale&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;-974.346712524&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">module</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cmlx:lineCount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;4&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cmlx:templateRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l914_excitations1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cmlx:templateRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l914_excit1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:integer&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_enumber&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;2&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:string&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_ttype&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Singlet-A&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_eenergy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;3.8907&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_wavelength&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;318.67&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_oscillator_strength&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;0.0065&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_s2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;0.0&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cmlx:templateRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l914_excit2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:integer&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_orbitalstart&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;74&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:integer&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_orbitalend&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;76&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_unknown&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;0.66892&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:integer&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_orbitalstart&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;75&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:integer&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_orbitalend&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;77&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_unknown&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;0.20436&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">module</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cmlx:lineCount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;5&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cmlx:templateRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l914_excitations1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cmlx:templateRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l914_excit1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:integer&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_enumber&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;3&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:string&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_ttype&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Singlet-A&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_eenergy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;4.2803&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_wavelength&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;289.66&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_oscillator_strength&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;0.0019&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_s2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;0.0&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cmlx:templateRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l914_excit2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:integer&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_orbitalstart&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;72&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:integer&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_orbitalend&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;76&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_unknown&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;-0.25494&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:integer&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_orbitalstart&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;73&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:integer&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_orbitalend&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;76&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_unknown&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;0.63171&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:integer&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_orbitalstart&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;75&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:integer&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_orbitalend&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;77&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;g:tddft_unknown&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;-0.13245&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">comment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="template-definition" tabindex="-1">Template definition <a class="header-anchor" href="#template-definition" aria-label="Permalink to &quot;Template definition&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;l914/l914_excitations.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,11)]))}const c=t(k,[["render",e]]);export{F as __pageData,c as default};
