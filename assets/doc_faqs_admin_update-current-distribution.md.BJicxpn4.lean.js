import{_ as a,c as i,a2 as e,o as t}from"./chunks/framework.BQmytedh.js";const c=JSON.parse('{"title":"Update platform","description":"","frontmatter":{"prev":{"text":"Add a new administrator user","link":"/doc/faqs/admin/add-administrator"},"next":{"text":"Configure email service","link":"/doc/faqs/admin/configure-email"}},"headers":[],"relativePath":"doc/faqs/admin/update-current-distribution.md","filePath":"doc/faqs/admin/update-current-distribution.md"}'),n={name:"doc/faqs/admin/update-current-distribution.md"};function p(h,s,l,r,d,o){return t(),i("div",null,s[0]||(s[0]=[e(`<h1 id="update-platform" tabindex="-1">Update platform <a class="header-anchor" href="#update-platform" aria-label="Permalink to &quot;Update platform&quot;">​</a></h1><p>The update process of ioChem-BD is quite straightforward by using an update script bundled with the platform.</p><p>Please update as soon as you get the <a href="http://eepurl.com/dJDgWI" target="_blank" rel="noreferrer">notification</a> of new releases to fix bugs and get the latest functionalities.</p><p>Steps to do:</p><ol><li>Shutdown the service</li><li>Backup application files and data (run the <a href="./../../guides/installation/backup-policy.html">backup script</a> if you already have it defined)</li><li>Run update script and check process logs</li><li>Start the service</li></ol><p>Previous considerations prior updating:</p><ul><li>In the code examples, BASE_PATH is considered the base path where the software is installed</li><li>All operations should be executed by the same linux user that installed and runs the software, unless otherwise advised</li></ul><h2 id="_1-shutdown-the-server" tabindex="-1">1. Shutdown the server <a class="header-anchor" href="#_1-shutdown-the-server" aria-label="Permalink to &quot;1. Shutdown the server&quot;">​</a></h2><p>Update process must be performed with the service stopped.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iochembd$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> BASE_PATH/apache-tomcat/bin</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iochembd$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  ./shutdown.sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -force</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wait</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> one</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> minute</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iochembd$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  ps</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -eaf</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tomcat</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> if</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> there</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> running</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> process</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> has</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stopped</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> properly</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> otherwise</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kill</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> process</span></span></code></pre></div><h2 id="_2-perform-a-backup-of-the-application-files-and-data" tabindex="-1">2. Perform a backup of the application files and data <a class="header-anchor" href="#_2-perform-a-backup-of-the-application-files-and-data" aria-label="Permalink to &quot;2. Perform a backup of the application files and data&quot;">​</a></h2><p>Please review <a href="./../../guides/installation/backup-policy.html">backup script</a> page on the documentation for more information about the backup process automation.</p><h2 id="_3-run-update-script" tabindex="-1">3. Run update script <a class="header-anchor" href="#_3-run-update-script" aria-label="Permalink to &quot;3. Run update script&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>On versions prior v2.0.0, <strong>the update script has been updated</strong>, please download the new one <a href="https://www.iochem-bd.org/update/updater.sh" target="_blank" rel="noreferrer">here</a> and replace the one inside <em>BASE_PATH/updates</em> folder</p></div><p>Now run the utility:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iochembd$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> BASE_PATH/updates</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iochembd$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ./updater.sh</span></span></code></pre></div><p>The update process will start downloading pending patches and applying them one after the other until it reaches latest.</p><p>In case you get an error updating the platform, please copy the output text from the update tool and send it to <a href="mailto:contact@iochem-bd.org" target="_blank" rel="noreferrer">contact@iochem-bd.org</a>, we will contact you as soon as possible to aid you in solving the possible errors in this process. Meanwhile, you can recover the software from the backup copy described in point 2.</p><h2 id="_4-start-the-server" tabindex="-1">4. Start the server <a class="header-anchor" href="#_4-start-the-server" aria-label="Permalink to &quot;4. Start the server&quot;">​</a></h2><p>If the update process ended successfully, the patch program will start the server automatically to apply latest updates.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">17:01:09.543</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [main] INFO  update.UpdatePatch -  Task: Running Ant target </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> update</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">17:03:42.600</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [main] INFO  utils.SqlRunner -     Running update vxxx.SetCalculationOrdering</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">17:03:43.073</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [main] INFO  update.UpdatePatch -  Task: Updating Browse dspace.cfg file</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">17:03:43.120</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [main] INFO  update.TomcatManager - Starting Apache Tomcat...  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">== Server started</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">17:03:43.128</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [main] INFO  utils.Utils - Running command:[/home/iochembd/iochem-bd/apache-tomcat/bin/startup.sh]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">17:03:43.128</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [main] INFO  update.UpdateProcess - ioChem-BD updated to latest version.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Update</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> process</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> finished.</span></span></code></pre></div><p>Otherwise, start it manually with the following commands:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iochembd$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> BASE_PATH/apache-tomcat/bin</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iochembd$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ./startup.sh</span></span></code></pre></div><p>This will finish the update process of the ioChem-BD platform.</p>`,24)]))}const u=a(n,[["render",p]]);export{c as __pageData,u as default};