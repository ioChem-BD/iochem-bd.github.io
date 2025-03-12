import{_ as i}from"./chunks/Total.C-Mp7DDF.js";import{_ as a}from"./chunks/None.CACNxHY-.js";import{_ as t,c as n,a2 as e,o as l}from"./chunks/framework.BQmytedh.js";const y=JSON.parse('{"title":"header","description":"","frontmatter":{},"headers":[],"relativePath":"data/codes/orca/header-d3e38222.md","filePath":"data/codes/orca/header-d3e38222.md"}'),h={name:"data/codes/orca/header-d3e38222.md"};function r(p,s,k,d,o,E){return l(),n("div",null,s[0]||(s[0]=[e('<h1 id="header" tabindex="-1">header <a class="header-anchor" href="#header" aria-label="Permalink to &quot;header&quot;">​</a></h1><h2 id="implementation-level" tabindex="-1">Implementation level <a class="header-anchor" href="#implementation-level" aria-label="Permalink to &quot;Implementation level&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Type</th><th>Status</th></tr></thead><tbody><tr><td>CML extraction template</td><td><img src="'+i+'" alt=""></td></tr><tr><td>HTML5 representation</td><td><img src="'+a+`" alt=""></td></tr></tbody></table><h2 id="template-attributes" tabindex="-1">Template attributes <a class="header-anchor" href="#template-attributes" aria-label="Permalink to &quot;Template attributes&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Attribute</th><th>Value</th></tr></thead><tbody><tr><td><em>source</em></td><td>Orca log</td></tr><tr><td>id</td><td>header</td></tr><tr><td>name</td><td>Orca header</td></tr><tr><td>pattern</td><td>\\s+\\*\\s+O\\s+R\\s+C\\s+A\\s+\\*\\s*</td></tr><tr><td>endPattern</td><td>\\s*INPUT\\sFILE\\s*</td></tr><tr><td>endOffset</td><td>-1</td></tr><tr><td>xml:base</td><td>header.xml</td></tr></tbody></table><h2 id="input" tabindex="-1">Input <a class="header-anchor" href="#input" aria-label="Permalink to &quot;Input&quot;">​</a></h2><pre><code>                                 *****************
                                 * O   R   C   A *
                                 *****************

           --- An Ab Initio, DFT and Semiempirical electronic structure package ---

                  ######################################################
                  #                        -***-                       #
                  #  Department of molecular theory and spectroscopy   #
                  #              Directorship: Frank Neese             #
                  #   Max Planck Institute for Bioinorganic Chemistry  #
                  #                  D-45470 Muelheim/Ruhr             #
                  #                       Germany                      #
                  #                                                    #
                  #                  All rights reserved               #
                  #                        -***-                       #
                  ######################################################


                         Program Version 2.9.0 -  RELEASE  -


 With contributions from (in alphabetic order):
   Ute Becker             : Parallelization
   Dmitry Ganyushin       : Spin-Orbit,Spin-Spin,Magnetic field MRCI
   Andreas Hansen         : Spin unrestricted coupled pair/coupled cluster methods
   Dimitrios Liakos       : Parallel MDCI
   Robert Izsak           : Overlap fitted RIJCOSX
   Christian Kollmar      : KDIIS, orbital optimized coupled pair methods, Brueckner methods
   Simone Kossmann        : Meta GGA functionals, improved MP2 methods
   Taras Petrenko         : TD-DFT gradient, Resonance Raman, ABS, fluorescence, XAS, NRVS
   Christoph Reimann      : Effective Core Potentials
   Michael Roemelt        : Restricted open shell CI
   Christoph Riplinger    : Improved optimizer, TS searches, QM/MM
   Barbara Sandhoefer     : DKH, picture change effects
   Igor Schapiro          : Molecular dynamics
   Kantharuban Sivalingam : CASSCF and multireference perturbation theory
   Boris Wezisla          : Elementary symmetry handling
   Frank Wennmohs         : Technical directorship


 We gratefully acknowledge several collegues who have allowed us to
 interface, adapt or use parts of their codes:
   Stefan Grimme                                : VdW corrections, initial TS optimization
                                                  and many helpful discussions
   Ed Valeev                                    : LibInt (2-el integral package), F12 methods
   Andreas Klamt, Michael Diedenhofen           : otool_cosmo (COSMO solvation model)
   Frank Weinhold                               : gennbo (NPA and NBO analysis)


 Your calculation uses the libint2 library for the computation of 2-el integrals
 For citations please refer to: http://libint.valeyev.net

Your calculation utilizes the basis: Ahlrichs-VDZ
Cite in your paper:
H - Kr: A. Schaefer, H. Horn and R. Ahlrichs, J. Chem. Phys. 97, 2571 (1992).



*****************************************
The coordinations will be read from file: ete.xyz
*****************************************


================================================================================
                                        WARNINGS
                       Please study these warnings very carefully!
================================================================================
Now building the actual basis set


INFO   : the flag for use of LIBINT has been found!

================================================================================
                                       INPUT FILE
</code></pre><h2 id="input-1" tabindex="-1">Input <a class="header-anchor" href="#input-1" aria-label="Permalink to &quot;Input&quot;">​</a></h2><pre><code>                                 *****************
                                 * O   R   C   A *
                                 *****************

                                            #,                                       
                                            ###                                      
                                            ####                                     
                                            #####                                    
                                            ######                                   
                                           ########,                                 
                                     ,,################,,,,,                         
                               ,,#################################,,                 
                          ,,##########################################,,             
                       ,#########################################, &#39;&#39;#####,          
                    ,#############################################,,   &#39;####,        
                  ,##################################################,,,,####,       
                ,###########&#39;&#39;&#39;&#39;           &#39;&#39;&#39;&#39;###############################       
              ,#####&#39;&#39;   ,,,,##########,,,,          &#39;&#39;&#39;####&#39;&#39;&#39;          &#39;####       
            ,##&#39; ,,,,###########################,,,                        &#39;##       
           &#39; ,,###&#39;&#39;&#39;&#39;                  &#39;&#39;&#39;############,,,                           
         ,,##&#39;&#39;                                &#39;&#39;&#39;############,,,,        ,,,,,,###&#39;&#39;
      ,#&#39;&#39;                                            &#39;&#39;&#39;#######################&#39;&#39;&#39;  
     &#39;                                                          &#39;&#39;&#39;&#39;####&#39;&#39;&#39;&#39;         
             ,#######,   #######,   ,#######,      ##                                
            ,#&#39;     &#39;#,  ##    ##  ,#&#39;     &#39;#,    #&#39;&#39;#        ,####,   ,####,        
            ##       ##  ##   ,#&#39;  ##            #&#39;  &#39;#       #&#39;       #&#39;  &#39;#        
            ##       ##  #######   ##           ,######,      #####,   #    #        
            &#39;#,     ,#&#39;  ##    ##  &#39;#,     ,#&#39; ,#      #,     #,   #   #,  ,#        
             &#39;#######&#39;   ##     ##  &#39;#######&#39;  #&#39;      &#39;#     &#39;####&#39; # &#39;####&#39;        



                #########################################################
                #                        -***-                          #
                #          Department of theory and spectroscopy        #
                #                                                       #
                #                      Frank Neese                      #
                #                                                       #
                #     Directorship, Architecture, Infrastructure        #
                #                    SHARK, DRIVERS                     #
                #        Core code/Algorithms in most modules           #
                #                                                       #
                #        Max Planck Institute fuer Kohlenforschung      #
                #                Kaiser Wilhelm Platz 1                 #
                #                 D-45470 Muelheim/Ruhr                 #
                #                      Germany                          #
                #                                                       #
                #                  All rights reserved                  #
                #                        -***-                          #
                #########################################################
...

================================================================================
                                        WARNINGS
                       Please study these warnings very carefully!
================================================================================


WARNING: your system is open-shell and RHF/RKS was chosen
  ===&gt; : WILL SWITCH to UHF/UKS

INFO   : Checking CIS options ...

WARNING: CIS/ROCIS methods need fully converged wavefunctions
  ===&gt; : Setting SCFConvForced true
         You can overwrite this default with %scf ConvForced false 


================================================================================
                                       INPUT FILE
</code></pre><h2 id="output-text" tabindex="-1">Output text <a class="header-anchor" href="#output-text" aria-label="Permalink to &quot;Output text&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">comment</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example.output&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;header&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">module</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cmlx:templateRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;header&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">module</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cmlx:templateRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;program&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">             &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:string&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cc:programVersion&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;2.9.0&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">             &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:string&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cc:programSubversion&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;RELEASE&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">scalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">comment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="template-definition" tabindex="-1">Template definition <a class="header-anchor" href="#template-definition" aria-label="Permalink to &quot;Template definition&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;program&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> pattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;\\s+Program\\sVersion.*&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> endPattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;\\s*Program\\sVersion</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#123;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">A,cc:programVersion</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#125;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#123;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X,cc:programSubversion</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#125;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">transform</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> process</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pullup&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.//cml:scalar&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">transform</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> process</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;delete&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.//cml:list&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div>`,13)]))}const m=t(h,[["render",r]]);export{y as __pageData,m as default};
