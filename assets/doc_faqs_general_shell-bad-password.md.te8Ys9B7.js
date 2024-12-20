import{_ as i,c as a,a2 as e,o as t}from"./chunks/framework.BQmytedh.js";const F=JSON.parse(`{"title":"Can't log in with the shell client","description":"","frontmatter":{"prev":{"text":"Cant remember my password, how can I reset it?","link":"/doc/faqs/general/reset-password"},"next":{"text":"Publication fails to retrieve publishing community","link":"/doc/faqs/general/create-publish-error"}},"headers":[],"relativePath":"doc/faqs/general/shell-bad-password.md","filePath":"doc/faqs/general/shell-bad-password.md"}`),n={name:"doc/faqs/general/shell-bad-password.md"};function h(l,s,p,k,r,d){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="can-t-log-in-with-the-shell-client" tabindex="-1">Can&#39;t log in with the shell client <a class="header-anchor" href="#can-t-log-in-with-the-shell-client" aria-label="Permalink to &quot;Can&#39;t log in with the shell client&quot;">​</a></h1><p>Under certain circumstances, you can have trouble connecting to the Create module with the shell client.</p><h2 id="check-connectivity" tabindex="-1">Check connectivity <a class="header-anchor" href="#check-connectivity" aria-label="Permalink to &quot;Check connectivity&quot;">​</a></h2><p>Please first verify you can reach the Create web server from the host where you run the shell client by using a tool like <em>wget</em> and pointing your ioChem-BD homepage:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">user$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://iochem-bd.bsc.es</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                             # Replace the hostname for your specific ioChem-BD URL</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        wget:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> resolve</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> host</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> address</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;iochem-bd.bsc.es&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # This message will indicate you can&#39;t reach the server</span></span></code></pre></div><h2 id="change-your-credentials" tabindex="-1">Change your credentials <a class="header-anchor" href="#change-your-credentials" aria-label="Permalink to &quot;Change your credentials&quot;">​</a></h2><p>If you try to connect multiple times and receive the following messages:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">user$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   .</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./start-rep-shell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        Could</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> not</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> retrieve</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> latest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> session</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cookie,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> please</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> login</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> again.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        Username:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user54958@iochem-bd.org</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        Password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (empty </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> quit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">): </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        Could</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> not</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> retrieve</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> latest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> session</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cookie,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> please</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> login</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> again.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        Username:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user54958@iochem-bd.org</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        Password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (empty </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> quit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span></code></pre></div><p>It could be due to an incorrect/forgotten password, please change it using the <a href="./reset-password.html">reset password</a> link.</p><h2 id="check-your-system-date" tabindex="-1">Check your system date <a class="header-anchor" href="#check-your-system-date" aria-label="Permalink to &quot;Check your system date&quot;">​</a></h2><p>The ioChem-BD login mechanism checks your current system date against the server&#39;s date to avoid login reply attacks.</p><p>If your system has an invalid date (future or outdated) the shell client will be unable to validate displaying the following error:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">user$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   .</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./start-rep-shell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">user$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Could</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> not</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> retrieve</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> latest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> session</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cookie,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> please</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> login</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> again.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        Username:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user54958@iochem-bd.org</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        Password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (empty </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> quit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">): </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        Credentials</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> are</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> valid.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        Starting</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> client...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        Client</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> started.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">12:00:10.953</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [main] ERROR cat.iciq.tcg.labbook.shell.main.ShellClient - Unable to validate ticket [ST-2xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxiochem-bd-bsc]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">12:00:10.954</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [main] ERROR cat.iciq.tcg.labbook.shell.main.ShellClient - Error login on CREATE web system. Check credentials</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">12:00:10.954</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [main] ERROR cat.iciq.tcg.labbook.shell.Main - Error login on CREATE web system. Check credentials</span></span></code></pre></div><p>To fix it, please set your system date (and timezone) to the current, valid value.</p>`,14)]))}const c=i(n,[["render",h]]);export{F as __pageData,c as default};