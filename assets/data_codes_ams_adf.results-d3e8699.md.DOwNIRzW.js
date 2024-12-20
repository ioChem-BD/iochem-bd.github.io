import{_ as s}from"./chunks/Total.C-Mp7DDF.js";import{_ as i}from"./chunks/None.CACNxHY-.js";import{_ as a,c as e,a2 as n,o as l}from"./chunks/framework.BQmytedh.js";const g=JSON.parse('{"title":"adf.results","description":"","frontmatter":{},"headers":[],"relativePath":"data/codes/ams/adf.results-d3e8699.md","filePath":"data/codes/ams/adf.results-d3e8699.md"}'),r={name:"data/codes/ams/adf.results-d3e8699.md"};function d(h,t,p,o,k,E){return l(),e("div",null,t[0]||(t[0]=[n('<h1 id="adf-results" tabindex="-1">adf.results <a class="header-anchor" href="#adf-results" aria-label="Permalink to &quot;adf.results&quot;">​</a></h1><h2 id="implementation-level" tabindex="-1">Implementation level <a class="header-anchor" href="#implementation-level" aria-label="Permalink to &quot;Implementation level&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Type</th><th>Status</th></tr></thead><tbody><tr><td>CML extraction template</td><td><img src="'+s+'" alt=""></td></tr><tr><td>HTML5 representation</td><td><img src="'+i+`" alt=""></td></tr></tbody></table><h2 id="template-attributes" tabindex="-1">Template attributes <a class="header-anchor" href="#template-attributes" aria-label="Permalink to &quot;Template attributes&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Attribute</th><th>Value</th></tr></thead><tbody><tr><td><em>source</em></td><td>AMS ADF log</td></tr><tr><td>id</td><td>adf.results</td></tr><tr><td>pattern</td><td>\\s*\\*\\s*R\\sE\\sS\\sU\\sL\\sT\\sS\\s*\\*.*</td></tr><tr><td>endPattern</td><td>.*$\\s*\\*{20,}.*$(\\s*\\(LOGFILE\\).*)</td></tr><tr><td>endPattern2</td><td>\\s*$\\s*$\\s{35,}\\*{15,}$\\s{35,}\\*\\s+.*</td></tr><tr><td>endPattern3</td><td>\\s*\\*{70,}.*$\\s*$\\s*A\\s+D\\s+F\\s+E\\s+X\\s+I\\s+T\\s*</td></tr><tr><td>endPattern4</td><td>\\s*AMS\\sapplication\\sfinished.\\sExiting.*</td></tr><tr><td>offset</td><td>-1</td></tr><tr><td>endOffset</td><td>1</td></tr><tr><td>repeat</td><td>*</td></tr><tr><td>xml:base</td><td>adf/results/results.xml</td></tr></tbody></table><h2 id="comment" tabindex="-1">Comment <a class="header-anchor" href="#comment" aria-label="Permalink to &quot;Comment&quot;">​</a></h2><pre><code>                                                *******************
                                                *  R E S U L T S  *
                                                *******************
 
 
 Orbital Energies, all Irreps
 ========================================

 Irrep        no.  (spin)   Occup              E (au)                E (eV)
 ---------------------------------------------------------------------------
 F             1            14.00       -0.36757674632897E+00       -10.0023
 D             2             0.00        0.59810837659445E-01         1.6275
...
                                                
 Orbital Energies, all Irreps, both Spins
 ========================================

 Irrep        no.  (spin)   Occup              E (au)                E (eV)
 ---------------------------------------------------------------------------
 A1            1     A       1.00       -0.22582773237906E+01       -61.4509
 A1            1      B      1.00       -0.22573719983754E+01       -61.4262
 A1            2     A       1.00       -0.22570204339745E+01       -61.4167
...

 =======================================================
 S F O   P O P U L A T I O N S ,   M O   A N A L Y S I S
 =======================================================
 ...

                                                
 Fit test: (difference of exact and fit density, squared integrated, result summed over spins)
         Sum-of-Fragments:                             0.00000604855883
         Orthogonalized Fragments:                     0.01126932738939
         SCF:                                          0.00379056264226
...
 
 =======================================
 M U L L I K E N   P O P U L A T I O N S
 =======================================
...

 =========================================
 Quadrupole Moment (Buckingham convention)  ***  (a.u.)  ***
 =========================================
...

 ==========
 S**2 value  ***  see also R. Bulo et al., J.Am.Chem.Soc., 124 (2002) 13903-13910, note (29)  ***
 ==========
...

 ===========================
 B O N D I N G   E N E R G Y  ***  (decomposition)  ***
 ===========================
...

 ***************************************************************************************************    
</code></pre><h2 id="template-definition" tabindex="-1">Template definition <a class="header-anchor" href="#template-definition" aria-label="Permalink to &quot;Template definition&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;results/orbital.energies.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;results/orbital.energies.spin.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;results/fit.test.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;results/mulliken.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;results/sfo.population.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,9)]))}const f=a(r,[["render",d]]);export{g as __pageData,f as default};
