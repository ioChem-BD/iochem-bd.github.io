import{_ as a}from"./chunks/Total.C-Mp7DDF.js";import{_ as e}from"./chunks/None.CACNxHY-.js";import{_ as i,c as s,a2 as l,o as r}from"./chunks/framework.BQmytedh.js";const E=JSON.parse('{"title":"orbitals.control","description":"","frontmatter":{},"headers":[],"relativePath":"data/codes/turbomole/orbitals.control-d3e55174.md","filePath":"data/codes/turbomole/orbitals.control-d3e55174.md"}'),n={name:"data/codes/turbomole/orbitals.control-d3e55174.md"};function o(d,t,h,p,m,c){return r(),s("div",null,t[0]||(t[0]=[l('<h1 id="orbitals-control" tabindex="-1">orbitals.control <a class="header-anchor" href="#orbitals-control" aria-label="Permalink to &quot;orbitals.control&quot;">​</a></h1><h2 id="implementation-level" tabindex="-1">Implementation level <a class="header-anchor" href="#implementation-level" aria-label="Permalink to &quot;Implementation level&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Type</th><th>Status</th></tr></thead><tbody><tr><td>CML extraction template</td><td><img src="'+a+'" alt=""></td></tr><tr><td>HTML5 representation</td><td><img src="'+e+`" alt=""></td></tr></tbody></table><h2 id="template-attributes" tabindex="-1">Template attributes <a class="header-anchor" href="#template-attributes" aria-label="Permalink to &quot;Template attributes&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Attribute</th><th>Value</th></tr></thead><tbody><tr><td><em>source</em></td><td>Turbomole control file</td></tr><tr><td>id</td><td>orbitals.control</td></tr><tr><td>name</td><td>Orbital section</td></tr><tr><td>pattern</td><td>\\s*\\u0024(?i:(closed|alpha|beta))\\sshell.*</td></tr><tr><td>endPattern</td><td>\\s*\\u0024.*</td></tr><tr><td>endPattern2</td><td>~</td></tr><tr><td>repeat</td><td>*</td></tr><tr><td>xml:base</td><td>orbitals.xml</td></tr></tbody></table><h2 id="comment" tabindex="-1">Comment <a class="header-anchor" href="#comment" aria-label="Permalink to &quot;Comment&quot;">​</a></h2><pre><code>$closed shells
 a       1-39                                   ( 2 )
</code></pre><h2 id="comment-1" tabindex="-1">Comment <a class="header-anchor" href="#comment-1" aria-label="Permalink to &quot;Comment&quot;">​</a></h2><pre><code>$alpha shells
 ag      1-16                                   ( 1 )
 b1g     1-3                                    ( 1 )
 b2g     1-11                                   ( 1 )
 b3g     1-4                                    ( 1 )
 au      1-3                                    ( 1 )
 b1u     1-15                                   ( 1 )
 b2u     1-4                                    ( 1 )
 b3u     1-11                                   ( 1 )
$beta shells
 ag      1-16                                   ( 1 )
 b1g     1-2                                    ( 1 )
 b2g     1-11                                   ( 1 )
 b3g     1-4                                    ( 1 )
 au      1-2                                    ( 1 )
 b1u     1-15                                   ( 1 )
 b2u     1-4                                    ( 1 )
 b3u     1-11                                   ( 1 )   
</code></pre><h2 id="template-definition" tabindex="-1">Template definition <a class="header-anchor" href="#template-definition" aria-label="Permalink to &quot;Template definition&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;orbitals/restricted.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;orbitals/unrestricted.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,11)]))}const g=i(n,[["render",o]]);export{E as __pageData,g as default};