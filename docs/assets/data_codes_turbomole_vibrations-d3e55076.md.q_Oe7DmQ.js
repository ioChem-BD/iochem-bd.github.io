import{_ as a}from"./chunks/Total.C-Mp7DDF.js";import{_ as i}from"./chunks/None.CACNxHY-.js";import{_ as e,c as s,a2 as n,o as r}from"./chunks/framework.BQmytedh.js";const u=JSON.parse('{"title":"vibrations","description":"","frontmatter":{},"headers":[],"relativePath":"data/codes/turbomole/vibrations-d3e55076.md","filePath":"data/codes/turbomole/vibrations-d3e55076.md"}'),l={name:"data/codes/turbomole/vibrations-d3e55076.md"};function d(o,t,h,p,m,k){return r(),s("div",null,t[0]||(t[0]=[n('<h1 id="vibrations" tabindex="-1">vibrations <a class="header-anchor" href="#vibrations" aria-label="Permalink to &quot;vibrations&quot;">​</a></h1><h2 id="implementation-level" tabindex="-1">Implementation level <a class="header-anchor" href="#implementation-level" aria-label="Permalink to &quot;Implementation level&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Type</th><th>Status</th></tr></thead><tbody><tr><td>CML extraction template</td><td><img src="'+a+'" alt=""></td></tr><tr><td>HTML5 representation</td><td><img src="'+i+`" alt=""></td></tr></tbody></table><h2 id="template-attributes" tabindex="-1">Template attributes <a class="header-anchor" href="#template-attributes" aria-label="Permalink to &quot;Template attributes&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Attribute</th><th>Value</th></tr></thead><tbody><tr><td><em>source</em></td><td>Turbomole control file</td></tr><tr><td>id</td><td>vibrations</td></tr><tr><td>pattern</td><td>\\s*\\u0024.*vibr.*</td></tr><tr><td>endPattern</td><td>\\s*\\u0024((?!vibr).)*</td></tr><tr><td>endPattern3</td><td>~</td></tr><tr><td>repeat</td><td>*</td></tr><tr><td>xml:base</td><td>vibrations/vibrations.xml</td></tr></tbody></table><h2 id="comment" tabindex="-1">Comment <a class="header-anchor" href="#comment" aria-label="Permalink to &quot;Comment&quot;">​</a></h2><pre><code>    $vibrational normal modes
  1 1   0.0620255999   0.0275995122  -0.0021577554  -0.0045023090  -0.0987973762
  1 2  -0.0041450350  -0.0423379158  -0.0176741626   0.0223413579  -0.0088204790
  1 3   0.0026579412  -0.0028291549   0.0268291327   0.0026526017   0.0014327176
  1 4   0.0027270842  -0.0072686360  -0.0002323333   0.0015336638   0.0566300676
  1 5   0.0334628967   0.0023545302   0.0032185684  -0.0274030238   0.0012100178
  ...
  
  $vibrational spectrum
#  mode     symmetry     wave number   IR intensity    selection rules
#                        cm**(-1)        km/mol         IR     RAMAN
     1                        0.00         0.00000        -       -
     2                        0.00         0.00000        -       -
     3                        0.00         0.00000        -       -
     4                        0.00         0.00000        -       -
     5                        0.00         0.00000        -       -
     6                        0.00         0.00000        -       -
     7        a              36.62         0.50306       YES     YES
     8        a              40.17         0.08176       YES     YES
     9        a              41.40         0.13467       YES     YES
    10        a              43.34         2.45364       YES     YES
    11        a              48.07         0.70156       YES     YES
    12        a              64.06         0.75864       YES     YES
  ...   
</code></pre><h2 id="template-definition" tabindex="-1">Template definition <a class="header-anchor" href="#template-definition" aria-label="Permalink to &quot;Template definition&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vibrations/normal.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xi:include</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vibrations/spectrum.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,9)]))}const v=e(l,[["render",d]]);export{u as __pageData,v as default};
