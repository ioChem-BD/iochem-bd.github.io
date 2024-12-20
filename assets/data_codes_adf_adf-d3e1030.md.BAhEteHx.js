import{_ as i}from"./chunks/Total.C-Mp7DDF.js";import{_ as s}from"./chunks/None.CACNxHY-.js";import{_ as a,c as e,a2 as n,o as l}from"./chunks/framework.BQmytedh.js";const g=JSON.parse('{"title":"adf","description":"","frontmatter":{},"headers":[],"relativePath":"data/codes/adf/adf-d3e1030.md","filePath":"data/codes/adf/adf-d3e1030.md"}'),h={name:"data/codes/adf/adf-d3e1030.md"};function d(r,t,p,k,o,E){return l(),e("div",null,t[0]||(t[0]=[n('<h1 id="adf" tabindex="-1">adf <a class="header-anchor" href="#adf" aria-label="Permalink to &quot;adf&quot;">​</a></h1><h2 id="implementation-level" tabindex="-1">Implementation level <a class="header-anchor" href="#implementation-level" aria-label="Permalink to &quot;Implementation level&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Type</th><th>Status</th></tr></thead><tbody><tr><td>CML extraction template</td><td><img src="'+i+'" alt=""></td></tr><tr><td>HTML5 representation</td><td><img src="'+s+`" alt=""></td></tr></tbody></table><h2 id="template-attributes" tabindex="-1">Template attributes <a class="header-anchor" href="#template-attributes" aria-label="Permalink to &quot;Template attributes&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Attribute</th><th>Value</th></tr></thead><tbody><tr><td><em>source</em></td><td>ADF log</td></tr><tr><td>id</td><td>adf</td></tr><tr><td>name</td><td>ADF module</td></tr><tr><td>pattern</td><td>\\s+\\*\\s+\\|\\s+A\\sD\\sF\\s+\\|\\s+\\*.*</td></tr><tr><td>endPattern</td><td>\\s*A\\s+D\\s+F\\s+E\\s+X\\s+I\\s+T\\s*</td></tr><tr><td>offset</td><td>-10</td></tr><tr><td>endOffset</td><td>1</td></tr><tr><td>repeat</td><td>*</td></tr><tr><td>xml:base</td><td>adf/adf.xml</td></tr></tbody></table><h2 id="comment" tabindex="-1">Comment <a class="header-anchor" href="#comment" aria-label="Permalink to &quot;Comment&quot;">​</a></h2><pre><code> *******************************************************************************
 *                                                                             *
 *  -------------------------------------                                      *
 *   Amsterdam Density Functional  (ADF)         2007.01   August 20, 2007     *
 *  -------------------------------------                                      *
 *                                               Build 200708201257            *
 *                                                                             *
 *                                                                             *
 *                              =================                              *
 *                              |               |                              *
 *                              |     A D F     |                              *
 *                              |               |                              *
 *                              =================                              *
 *                                                                             *
 *                                                                             *
 *   Online information and documentation:  http://www.scm.com                 *
 *   E-mail:  support@scm.com   info@scm.com                                   *
 *                                                                             *
 *   Scientific publications using ADF results must be properly referenced     *
 *   See the User Manuals (or the web site) for recommended citations          *
 *   The terms and conditions of the End User License Agreement apply to       *
 *   the use of ADF, http://www.scm.com/Sales/LicAgreement.html                *
 *                                                                             *
 ****************************  pentium_linux_ifc  ******************************
 
 ADF 2007.01  RunTime: Oct17-2008 16:16:48
 Oxygen (TZP, 1s frozen)
...

(INIT)
...
 
                                      ************************************
                                      *  R U N   T Y P E : SINGLE POINT  *
                                      ************************************
...
                                      *********************************************
                                      *  R U N   T Y P E : GEOMETRY OPTIMIZATION  *
                                      *********************************************
...
                                      ****************************************
                                      *  B U I L D : (Fragments, Functions)  *
                                      ****************************************
...
                                      ***********************
                                      *  T E C H N I C A L  *
                                      ***********************
...
                                      ***************************
                                      *  C O M P U T A T I O N  *
                                      ***************************
...
                                      *******************
                                      *  R E S U L T S  *
                                      *******************
...                                      
                                      ******************************************
                                      *  F R E Q U E N C Y    A N A L Y S I S  *
                                      ******************************************

 *******************************************************************************

                             A D F   E X I T        
</code></pre><h2 id="template-definition" tabindex="-1">Template definition <a class="header-anchor" href="#template-definition" aria-label="Permalink to &quot;Template definition&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;adf/../program.header.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;adf/init/modelparameters/model.parameters.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;adf/runtype/runtype.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;adf/build/build_fragments.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;adf/technical/technical.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;adf/computation/computation.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;adf/results/results.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;adf/frequencyanalysis/frequencyanalysis.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;       </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,9)]))}const f=a(h,[["render",d]]);export{g as __pageData,f as default};
