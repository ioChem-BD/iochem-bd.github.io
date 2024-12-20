import{_ as e}from"./chunks/Total.C-Mp7DDF.js";import{_ as a}from"./chunks/Partial.CcMLgI3m.js";import{_ as s,c as i,a2 as r,o as n}from"./chunks/framework.BQmytedh.js";const u=JSON.parse('{"title":"amber.parm","description":"","frontmatter":{},"headers":[],"relativePath":"data/codes/amber/amber.parm-d3e51149.md","filePath":"data/codes/amber/amber.parm-d3e51149.md"}'),l={name:"data/codes/amber/amber.parm-d3e51149.md"};function m(o,t,h,p,d,c){return n(),i("div",null,t[0]||(t[0]=[r('<h1 id="amber-parm" tabindex="-1">amber.parm <a class="header-anchor" href="#amber-parm" aria-label="Permalink to &quot;amber.parm&quot;">​</a></h1><h2 id="implementation-level" tabindex="-1">Implementation level <a class="header-anchor" href="#implementation-level" aria-label="Permalink to &quot;Implementation level&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Type</th><th>Status</th></tr></thead><tbody><tr><td>CML extraction template</td><td><img src="'+e+'" alt=""></td></tr><tr><td>HTML5 representation</td><td><img src="'+a+`" alt=""></td></tr></tbody></table><h2 id="template-attributes" tabindex="-1">Template attributes <a class="header-anchor" href="#template-attributes" aria-label="Permalink to &quot;Template attributes&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Attribute</th><th>Value</th></tr></thead><tbody><tr><td><em>source</em></td><td>Amber topology</td></tr><tr><td>id</td><td>amber.parm</td></tr><tr><td>name</td><td>Amber topology</td></tr><tr><td>xml:base</td><td>topTemplate.xml</td></tr></tbody></table><h2 id="comment" tabindex="-1">Comment <a class="header-anchor" href="#comment" aria-label="Permalink to &quot;Comment&quot;">​</a></h2><pre><code>%VERSION  VERSION_STAMP = V0001.000  DATE = 02/11/21  10:35:18                  
%FLAG TITLE                                                                     
%FORMAT(20a4)                                                                   
default_name                                                                    
%FLAG POINTERS                                                                  
%FORMAT(10I8)                                                                   
    7628      13    7581      55      75      93     108     187       0       0
   10549    2517      55      93     187      38      84      27      21       1
       0       0       0       0       0       0       0       2      82       0
       0
%FLAG ATOM_NAME                                                                 
%FORMAT(20a4)                                                                   
ZN  O   O1  O2  O3  O4  O5  N   N1  N2  N3  C   C1  C2  C3  C4  C5  C6  C7  C8  
C9  C10 C11 C12 C13 C14 C15 C16 C17 C18 C19 C20 C21 C22 C23 C24 C25 C26 C27 C28 
C29 C30 C31 C32 C33 C34 C35 H   H1  H2  H3  H4  H5  H6  H7  H8  H9  H10 H11 H12 
...
...
...
  8.50000000E-01  8.50000000E-01  8.50000000E-01  8.50000000E-01  8.50000000E-01
  8.50000000E-01  8.50000000E-01  8.50000000E-01  8.50000000E-01  8.50000000E-01
  8.50000000E-01  8.50000000E-01  8.50000000E-01
%FLAG IPOL                                                                      
%FORMAT(1I8)                                                                    
       0
</code></pre><h2 id="template-definition" tabindex="-1">Template definition <a class="header-anchor" href="#template-definition" aria-label="Permalink to &quot;Template definition&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;JUMBO_HOME/jumbo-converters-compchem/jumbo-converters-compchem-amber/src/main/resources/org/xmlcml/cml/converters/compchem/amber/topology/templates/sections/atomic.number.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;JUMBO_HOME/jumbo-converters-compchem/jumbo-converters-compchem-amber/src/main/resources/org/xmlcml/cml/converters/compchem/amber/topology/templates/sections/atom.type.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;JUMBO_HOME/jumbo-converters-compchem/jumbo-converters-compchem-amber/src/main/resources/org/xmlcml/cml/converters/compchem/amber/topology/templates/sections/residue.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;JUMBO_HOME/jumbo-converters-compchem/jumbo-converters-compchem-amber/src/main/resources/org/xmlcml/cml/converters/compchem/amber/topology/templates/sections/residue.pointer.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;        </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,9)]))}const g=s(l,[["render",m]]);export{u as __pageData,g as default};