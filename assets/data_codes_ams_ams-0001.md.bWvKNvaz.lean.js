import{_ as t,c as a,a2 as r,o as s}from"./chunks/framework.BQmytedh.js";const m=JSON.parse('{"title":"RKF binary files","description":"","frontmatter":{},"headers":[],"relativePath":"data/codes/ams/ams-0001.md","filePath":"data/codes/ams/ams-0001.md"}'),i={name:"data/codes/ams/ams-0001.md"};function o(l,e,n,c,d,h){return s(),a("div",null,e[0]||(e[0]=[r('<h1 id="rkf-binary-files" tabindex="-1">RKF binary files <a class="header-anchor" href="#rkf-binary-files" aria-label="Permalink to &quot;RKF binary files&quot;">​</a></h1><p>From AMS2020 onwards, the data from the molecular DFT code ADF is captured directly from the binary result files, more specifically from the <em>ams.rkf</em> and <em>adf.rkf</em> files.</p><p>This change aims to improve the data capture process by accessing the raw data within the binary files rather than the parsed textual data in the output files, which change from version to version.</p><p>For this purpose, a helper tool called <strong>rkf2cml</strong> has been developed that helps to easily extract the information that can be retrieved. It has been released under the LGPLv3 licence and its source code is available in this <a href="https://gitlab.com/ioChem-BD/rkf2cml" target="_blank" rel="noreferrer">GitLab repository</a>.</p><div class="important"><p>Some fields are still captured from the textual output file, which is why the AMS format still contains data-capture templates, depicted in the following pages.</p><p>It is expected that the use of capture templates will be reduced to zero in the future.</p></div>',5)]))}const f=t(i,[["render",o]]);export{m as __pageData,f as default};
