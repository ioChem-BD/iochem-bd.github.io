import{_ as s}from"./chunks/Total.C-Mp7DDF.js";import{_ as t}from"./chunks/Partial.CcMLgI3m.js";import{_ as n,c as a,a2 as e,o as l}from"./chunks/framework.BQmytedh.js";const m=JSON.parse('{"title":"ci","description":"","frontmatter":{},"headers":[],"relativePath":"data/codes/orca/ci-d3e43041.md","filePath":"data/codes/orca/ci-d3e43041.md"}'),r={name:"data/codes/orca/ci-d3e43041.md"};function h(p,i,k,o,d,E){return l(),a("div",null,i[0]||(i[0]=[e('<h1 id="ci" tabindex="-1">ci <a class="header-anchor" href="#ci" aria-label="Permalink to &quot;ci&quot;">​</a></h1><h2 id="implementation-level" tabindex="-1">Implementation level <a class="header-anchor" href="#implementation-level" aria-label="Permalink to &quot;Implementation level&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Type</th><th>Status</th></tr></thead><tbody><tr><td>CML extraction template</td><td><img src="'+s+'" alt=""></td></tr><tr><td>HTML5 representation</td><td><img src="'+t+`" alt=""></td></tr></tbody></table><h2 id="template-attributes" tabindex="-1">Template attributes <a class="header-anchor" href="#template-attributes" aria-label="Permalink to &quot;Template attributes&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Attribute</th><th>Value</th></tr></thead><tbody><tr><td><em>source</em></td><td>Orca log</td></tr><tr><td>id</td><td>ci</td></tr><tr><td>name</td><td>Orca-matrix driven Configuration Interaction</td></tr><tr><td>pattern</td><td>\\s*-{70,}\\s*$\\s*ORCA-MATRIX\\sDRIVEN\\sCI\\s*$\\s*-{70,}\\s*</td></tr><tr><td>endPattern</td><td>\\s*-{70,}\\s*$\\s*((?!ORCA-MATRIX\\sDRIVEN\\sCI|.*ORBITAL.*|.*COUPLED\\sCLUSTER\\sITERATIONS).)*$\\s*-{70,}\\s*</td></tr><tr><td>endPattern2</td><td>~</td></tr><tr><td>endOffset</td><td>0</td></tr><tr><td>repeat</td><td>*</td></tr><tr><td>xml:base</td><td>job/ci/ci.xml</td></tr></tbody></table><h2 id="comment" tabindex="-1">Comment <a class="header-anchor" href="#comment" aria-label="Permalink to &quot;Comment&quot;">​</a></h2><pre><code>-------------------------------------------------------------------------------
                              ORCA-MATRIX DRIVEN CI
-------------------------------------------------------------------------------

--------------------------------
AUTOMATIC CHOICE OF INCORE LEVEL
--------------------------------

Memory available                           ...     -1.00 MB
Memory needed for S+T                      ...      6.43 MB
Memory needed for J+K                      ...     12.93 MB
Memory needed for DIIS                     ...     89.98 MB
Memory needed for 3-ext                    ...     19.78 MB
Memory needed for 4-ext                    ...     50.26 MB
Memory needed for triples                  ...      8.24 MB
 -&gt; Final InCoreLevel    ... 0
 -&gt; check shows that triples correction can be computed


Wavefunction type
-----------------
Correlation treatment                      ...      CCSD     
Single excitations                         ... ON
Orbital optimization                       ... OFF
Calculation of Z vector                    ... OFF
Calculation of Brueckner orbitals          ... OFF
Perturbative triple excitations            ... ON
Calculation of F12 correction              ... OFF
Frozen core treatment                      ... chemical core (8 el)
Reference Wavefunction                     ... RHF
  Internal Orbitals:     4 ...   15 ( 12 MO&#39;s/ 24 electrons)
  Virtual  Orbitals:    16 ...   75 ( 60 MO&#39;s              )
Number of AO&#39;s                             ...     76
Number of electrons                        ...     32
Number of correlated electrons             ...     24

Algorithmic settings
--------------------
Integral transformation                    ... AO direct full transformation
K(C) Formation                             ... FULL-MO TRAFO
Maximum number of iterations               ...        50
Convergence tolerance (max. residuum)      ... 1.000e-05
Level shift for amplitude update           ... 2.000e-01
Maximum number of DIIS vectors             ...         7
DIIS turned on at iteration                ...         0
Damping before turning on DIIS             ...     0.500
Damping after turning on DIIS              ...     0.000
Pair specific amplitude update             ... OFF
Natural orbital iterations                 ... OFF
Perturbative natural orbital generation    ... OFF
Printlevel                                 ... 2

Memory handling:
----------------
Maximum memory for working arrays          ...    512 MB
Data storage in matrix containers          ... UNCOMPRESSED
Data type for integral storage             ... DOUBLE
In-Core Storage of quantities:
   Amplitudes+Sigma Vector      ... NO
   J+K operators                ... NO
   DIIS vectors                 ... NO
   3-external integrals         ... NO
   4-external integrals         ... NO


Initializing the integral package          ... done
Warning: Triples are to be computed - forcing virtual orbital re-canonicalization
Time needed for Fock operator              ...            0.072 sec
Reference energy                           ...   -227.635883412

------------------------------
PARTIAL COULOMB TRANSFORMATION
------------------------------

Transformation type                        ... one-operator
Dimension of the basis                     ...   76
Number of internal MOs                     ...   72 (4-75)
Pair cutoff                                ... 2.500e-11 Eh
Number of AO pairs included in the trafo   ... 2917
Total Number of distinct AO pairs          ... 2926
Memory devoted for trafo                   ...  512.0 MB 
Max. Number of MO pairs treated together   ... 22935      
Max. Number of MOs treated per batch       ...  301      
Number Format for Storage                  ... Double (8 Byte)
AO-integral source                         ... DIRECT
Integral package used                      ... LIBINT

Starting integral evaluation:
&lt;ss|**&gt;:       134796 b     2238 skpd     0.027 s (  0.000 ms/b)
&lt;sp|**&gt;: &lt;sd|**&gt;:       154147 b     4071 skpd     0.060 s (  0.000 ms/b)
&lt;pp|**&gt;:        52020 b      940 skpd     0.026 s (  0.001 ms/b)
       50750 b      886 skpd     0.039 s (  0.001 ms/b)
&lt;pd|**&gt;: &lt;dd|**&gt;:        31285 b      491 skpd     0.035 s (  0.001 ms/b)
        6567 b       53 skpd     0.015 s (  0.002 ms/b)
Closing buffer AOJ ( 0.01 GB; CompressionRatio= 2.54)
Collecting buffer AOJ 
    ... done with AO integral generation
Number of MO pairs included in the trafo   ... 2628
    ... Now sorting integrals
IBATCH = 1 of  1
Closing buffer JAO ( 0.01 GB; CompressionRatio= 1.97)
Collecting buffer JAO 
TOTAL TIME for half transformation         ...     0.346 sec
AO-integral generation                     ...     0.122 sec
Half transformation                        ...     0.082 sec
J-integral sorting                         ...     0.131 sec

--------------------------
SECOND HALF TRANSFORMATION
--------------------------

Formation of (pq|rs)                       ... ok (     0.064 sec)
Integral sorting                           ... ok (     0.254 sec)

------------------
CLOSED SHELL GUESS
------------------

Initial guess performed in     0.004 sec
E(0)                                       ...   -227.635883412
E(MP2)                                     ...     -0.640493717
Initial E(tot)                             ...   -228.276377129
&lt;T|T&gt;                                      ...      0.187800752
Number of pairs included                   ... 78
Total number of pairs                      ... 78

------------------------------------------------
                  RHF COUPLED CLUSTER ITERATIONS
------------------------------------------------

Number of amplitudes to be optimized       ... 281520

Iter       E(tot)           E(Corr)          Delta-E          Residual     Time
  0   -228.276377129     -0.640493717     -0.000000000      0.027851113    0.23
                           *** Turning on DIIS ***
  1   -228.280250820     -0.644367408     -0.003873691      0.011213666    0.31
  2   -228.296606559     -0.660723147     -0.016355739      0.005426633    0.35
  3   -228.300417250     -0.664533838     -0.003810691      0.002303989    0.36
  4   -228.301482664     -0.665599252     -0.001065414      0.000852411    0.37
  5   -228.301665905     -0.665782493     -0.000183241      0.000277944    0.38
  6   -228.301700474     -0.665817061     -0.000034568      0.000101165    0.39
  7   -228.301709116     -0.665825704     -0.000008643      0.000034641    0.40
  8   -228.301709426     -0.665826014     -0.000000310      0.000012062    0.40
  9   -228.301709575     -0.665826163     -0.000000149      0.000005069    0.40
               --- The Coupled-Cluster iterations have converged ---

----------------------
COUPLED CLUSTER ENERGY
----------------------

E(0)                                       ...   -227.635883412
E(CORR)                                    ...     -0.665826163
E(TOT)                                     ...   -228.301709575
Singles Norm &lt;S|S&gt;**1/2                    ...      0.074835151
T1 diagnostic                              ...      0.015275661

------------------
LARGEST AMPLITUDES
------------------
  14-&gt; 16  14-&gt; 16       0.070561
  10-&gt; 16  -1-&gt; -1       0.043667
  10-&gt; 16  10-&gt; 16       0.034567
  12-&gt; 19  12-&gt; 19       0.030620
  14-&gt; 20  14-&gt; 16       0.028039
  14-&gt; 16  14-&gt; 20       0.028039
  14-&gt; 16  10-&gt; 16       0.024942
  13-&gt; 32  13-&gt; 32       0.022860
  13-&gt; 20  13-&gt; 20       0.021896
  12-&gt; 33  12-&gt; 33       0.021354
  13-&gt; 16  -1-&gt; -1       0.021302
  14-&gt; 39  14-&gt; 16       0.021258
  14-&gt; 16  14-&gt; 39       0.021258
  12-&gt; 33  12-&gt; 19       0.020397
  12-&gt; 19  12-&gt; 33       0.020397
  15-&gt; 23  14-&gt; 16       0.020039


        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
        !  Warning: Densities are linearized densities !                         !
        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 

Trace of internal density part =     -0.432114652
Trace of external density part =      0.432114652
----------------------
RHF TRIPLES CORRECTION (Algorithm 1)
----------------------

Multiplier for the singles contribution    ...      1.000000000

10% done
20% done
30% done
40% done
50% done
60% done
70% done
80% done
90% done

Triples Correction (T)                     ...     -0.019986933
Final correlation energy                   ...     -0.685813096
E(CCSD)                                    ...   -228.301709575
E(CCSD(T))                                 ...   -228.321696508

NORM  =      1.221657626 sqrt=     1.105286219
W(HF) =      0.818559946    
</code></pre><h2 id="output-text" tabindex="-1">Output text <a class="header-anchor" href="#output-text" aria-label="Permalink to &quot;Output text&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">comment</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example.output&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ci&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">module</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cmlx:templateRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ci&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cc:userDefinedModule&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">           &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">module</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cmlx:templateRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;coupledClusterEnergy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;o:t1diag&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;0.015275661&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">           &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">           &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">module</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cmlx:templateRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;rhfTriplesCorr&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;o:tripCorr&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;-0.019986933&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;o:finCorrEner&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;-0.685813096&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;o:ccsdEner&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;-228.301709575&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;o:ccsdtEner&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;-228.321696508&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">           &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">comment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="template-definition" tabindex="-1">Template definition <a class="header-anchor" href="#template-definition" aria-label="Permalink to &quot;Template definition&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ci/coupledcluster.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ci/rhftriplescorr.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ci/triplescorr.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,11)]))}const y=n(r,[["render",h]]);export{m as __pageData,y as default};
