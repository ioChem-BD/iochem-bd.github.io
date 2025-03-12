import{_ as a}from"./chunks/Total.C-Mp7DDF.js";import{_ as s}from"./chunks/None.CACNxHY-.js";import{_ as e,c as i,a2 as n,o as d}from"./chunks/framework.BQmytedh.js";const f=JSON.parse('{"title":"casscf","description":"","frontmatter":{},"headers":[],"relativePath":"data/codes/orca/casscf-d3e40540.md","filePath":"data/codes/orca/casscf-d3e40540.md"}'),r={name:"data/codes/orca/casscf-d3e40540.md"};function l(h,t,o,c,p,k){return d(),i("div",null,t[0]||(t[0]=[n('<h1 id="casscf" tabindex="-1">casscf <a class="header-anchor" href="#casscf" aria-label="Permalink to &quot;casscf&quot;">​</a></h1><h2 id="implementation-level" tabindex="-1">Implementation level <a class="header-anchor" href="#implementation-level" aria-label="Permalink to &quot;Implementation level&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Type</th><th>Status</th></tr></thead><tbody><tr><td>CML extraction template</td><td><img src="'+a+'" alt=""></td></tr><tr><td>HTML5 representation</td><td><img src="'+s+`" alt=""></td></tr></tbody></table><h2 id="template-attributes" tabindex="-1">Template attributes <a class="header-anchor" href="#template-attributes" aria-label="Permalink to &quot;Template attributes&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Attribute</th><th>Value</th></tr></thead><tbody><tr><td><em>source</em></td><td>Orca log</td></tr><tr><td>id</td><td>casscf</td></tr><tr><td>name</td><td>CASSCF section</td></tr><tr><td>pattern</td><td>\\s*-{70,}$\\s*ORCA-CASSCF\\s*$\\s*-{70,}</td></tr><tr><td>endPattern</td><td>\\s*-{70,}\\s*$\\s*\\S+.*$\\s*\\S+.*</td></tr><tr><td>endPattern2</td><td>\\s*\\*{20,}\\s*</td></tr><tr><td>endPattern3</td><td>~</td></tr><tr><td>endOffset</td><td>0</td></tr><tr><td>repeat</td><td>*</td></tr><tr><td>xml:base</td><td>job/casscf/casscf.xml</td></tr></tbody></table><h2 id="comment" tabindex="-1">Comment <a class="header-anchor" href="#comment" aria-label="Permalink to &quot;Comment&quot;">​</a></h2><pre><code>------------------------------------------------------------------------------
                              ORCA-CASSCF
------------------------------------------------------------------------------

Setting up the integral package       ... done
Building the CAS space                ... done (1037 configurations for Mult=3)
Building the CAS space                ... done (1107 configurations for Mult=1)
----------------
GENERAL CI SETUP
----------------
...
------------------
CAS-SCF ITERATIONS
------------------
...
--------------
CASSCF RESULTS
--------------
...
----------------
ORBITAL ENERGIES
----------------
...
---------------------------------------------
CAS-SCF STATES FOR BLOCK  1 MULT= 3 NROOTS= 4
---------------------------------------------
...
-----------------------------
SA-CASSCF TRANSITION ENERGIES
------------------------------
...
--------------
DENSITY MATRIX
--------------
...
-------------------
SPIN-DENSITY MATRIX
-------------------
...
-----------------
ENERGY COMPONENTS
-----------------
...
----------------------------
LOEWDIN ORBITAL-COMPOSITIONS
----------------------------
...
----------------------------
LOEWDIN REDUCED ACTIVE MOs  
----------------------------
...
</code></pre><h2 id="template-definition" tabindex="-1">Template definition <a class="header-anchor" href="#template-definition" aria-label="Permalink to &quot;Template definition&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;casscf/cisetup/cisetup.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;casscf/../orbitals/orbitalenergies.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;casscf/casscfstates.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div>`,9)]))}const g=e(r,[["render",l]]);export{f as __pageData,g as default};
