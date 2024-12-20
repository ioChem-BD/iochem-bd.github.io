import{_ as e}from"./chunks/Total.C-Mp7DDF.js";import{_ as a,c as i,a2 as s,o as n}from"./chunks/framework.BQmytedh.js";const E=JSON.parse('{"title":"nmr","description":"","frontmatter":{},"headers":[],"relativePath":"data/codes/adf/nmr-d3e21.md","filePath":"data/codes/adf/nmr-d3e21.md"}'),r={name:"data/codes/adf/nmr-d3e21.md"};function d(l,t,h,o,p,m){return n(),i("div",null,t[0]||(t[0]=[s('<h1 id="nmr" tabindex="-1">nmr <a class="header-anchor" href="#nmr" aria-label="Permalink to &quot;nmr&quot;">​</a></h1><h2 id="implementation-level" tabindex="-1">Implementation level <a class="header-anchor" href="#implementation-level" aria-label="Permalink to &quot;Implementation level&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Type</th><th>Status</th></tr></thead><tbody><tr><td>CML extraction template</td><td><img src="'+e+'" alt=""></td></tr><tr><td>HTML5 representation</td><td><img src="'+e+`" alt=""></td></tr></tbody></table><h2 id="template-attributes" tabindex="-1">Template attributes <a class="header-anchor" href="#template-attributes" aria-label="Permalink to &quot;Template attributes&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Attribute</th><th>Value</th></tr></thead><tbody><tr><td><em>source</em></td><td>ADF log</td></tr><tr><td>id</td><td>nmr</td></tr><tr><td>name</td><td>NMR module</td></tr><tr><td>pattern</td><td>\\s+\\*\\s+\\|\\s+N\\sM\\sR\\s+\\|\\s+\\*.*</td></tr><tr><td>endPattern</td><td>\\s*N\\s+M\\s+R\\s+E\\s+X\\s+I\\s+T\\s*</td></tr><tr><td>endPattern2</td><td>~</td></tr><tr><td>offset</td><td>-10</td></tr><tr><td>endOffset</td><td>1</td></tr><tr><td>repeat</td><td>*</td></tr><tr><td>xml:base</td><td>nmr/nmr.xml</td></tr></tbody></table><h2 id="comment" tabindex="-1">Comment <a class="header-anchor" href="#comment" aria-label="Permalink to &quot;Comment&quot;">​</a></h2><pre><code> *******************************************************************************
 *                                                                             *
 *  -------------------------------------                                      *
 *   Amsterdam Density Functional  (ADF)         2009.01   September 29th, 2009*
 *  -------------------------------------                                      *
 *                                               Build 200912192153            *
 *                                                                             *
 *                                                                             *
 *                              =================                              *
 *                              |               |                              *
 *                              |     N M R     |                              *
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
 *************************  pentium64_linux / hpmpi  ***************************
 
 NMR 2009.01  RunTime: Sep20-2011 16:34:49
 
...
               NUCLEAR COORDINATES (ANGSTROMS):
                 --------------------------------

                 C  (  1):       4.7284      2.1304      0.0000
                 O  (  2):       3.3981      2.6699      0.0000
                 O  (  3):       1.6678     -2.3615      2.9062
...


 *******************************************************************************

                             N M R   E X I T
</code></pre><h2 id="template-definition" tabindex="-1">Template definition <a class="header-anchor" href="#template-definition" aria-label="Permalink to &quot;Template definition&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nmr/../program.header.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nmr/nuclear.coordinates.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nmr/nucleus.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;   </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,9)]))}const u=a(r,[["render",d]]);export{E as __pageData,u as default};
