import{_ as n,c as a,a2 as s,o as i}from"./chunks/framework.BQmytedh.js";const t="/assets/Admin_communities_and_collections.D2jGGJNE.png",o="/assets/Admin_addtopcommunity._26ZDniz.png",p="/assets/Admin_addtopcommunity2.DFTbPr_P.png",l="/assets/Admin_addsubcommunity.C6fY9IqY.png",r="/assets/Admin_createuser4.6QpVfusT.png",m="/assets/Admin_addcommunityadmin.BDbSBjGf.png",c="/assets/Admin_addcommunityadmin2.BCkiVbLi.png",u="/assets/Admin_addcommunityadmin3.C5UQ8z9P.png",x=JSON.parse('{"title":"Creating publication communities","description":"","frontmatter":{},"headers":[],"relativePath":"doc/guides/installation/publishing-endpoints-definition.md","filePath":"doc/guides/installation/publishing-endpoints-definition.md"}'),d={name:"doc/guides/installation/publishing-endpoints-definition.md"};function h(g,e,b,y,w,f){return i(),a("div",null,e[0]||(e[0]=[s(`<h1 id="creating-publication-communities" tabindex="-1">Creating publication communities <a class="header-anchor" href="#creating-publication-communities" aria-label="Permalink to &quot;Creating publication communities&quot;">​</a></h1><p>Prior creating our users and groups, we must consider building the entity hierarchy on the Browse module to store all published elements coming from the <em>Create</em> module.</p><p>As we explained on <a href="/index.html">Basic introduction to ioChem-BD software</a> page, the <em>Create</em> module will be used to work with calculations coming from HPC clusters. On this module we will be able to read a HTML5 summary of the most important calculations fields, their geometry and perform searches, generate reports and so on.</p><p>All this work is done privately inside the <em>Create</em> module but it can be published into the <em>Browse</em> module to share your calculations with the rest of the world.</p><p>This process is done by publishing <em>Create</em> projects and calculations into <em>Browse</em>, but that raises a question: <em>where to publish on Browse module?</em> So that is the reason why it is necessary to generate a publishing hierarchy on the <em>Browse</em> module to hold all these new calculations and projects.</p><p>The hierarchy inside Browse is really up to administrator&#39;s choice and needs. Here are some example of this organization:</p><h2 id="examples-of-community-organization" tabindex="-1">Examples of community organization <a class="header-anchor" href="#examples-of-community-organization" aria-label="Permalink to &quot;Examples of community organization&quot;">​</a></h2><p><strong>A top community with your institution&#39;s name</strong></p><p>Then inside it, their research groups community and inside them, its researchers community.</p><p>Here we expect every researcher to publish inside his/her named community:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Institute of Chemical Research of Catalonia</span></span>
<span class="line"><span>├── Carles Bo group</span></span>
<span class="line"><span>│   ├── Bandeira, Nuno</span></span>
<span class="line"><span>│   ├── Gonzalez-Fabra, Joan</span></span>
<span class="line"><span>│   ├── Melgar, Dolores</span></span>
<span class="line"><span>│   └── Serapian, Stefano</span></span>
<span class="line"><span>├── Feliu Maseras group</span></span>
<span class="line"><span>│   ├── Besora, Maria</span></span>
<span class="line"><span>│   ├── Fernandez, Victor</span></span>
<span class="line"><span>│   ├── Kuniyil, Rositha</span></span>
<span class="line"><span>│   └── Lakuntza, Oier</span></span>
<span class="line"><span>└── Nuria Lopez group</span></span>
<span class="line"><span>    ├── Bellarosa, Luca</span></span>
<span class="line"><span>    ├── Capdevila, Marçal</span></span>
<span class="line"><span>    ├── Garcia, Miquel Alexandre</span></span>
<span class="line"><span>    ├── Li, Qiang</span></span>
<span class="line"><span>    └── Rellán, Marcos</span></span></code></pre></div><p><strong>Multiple top communities per research group</strong></p><p>And inside them, each researcher&#39;s community.</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Carles Bo group</span></span>
<span class="line"><span>├── Bandeira, Nuno</span></span>
<span class="line"><span>├── Gonzalez-Fabra, Joan</span></span>
<span class="line"><span>├── Melgar, Dolores</span></span>
<span class="line"><span>└── Serapian, Stefano</span></span>
<span class="line"><span>Feliu Maseras group</span></span>
<span class="line"><span>├── Besora, Maria</span></span>
<span class="line"><span>├── Fernandez, Victor</span></span>
<span class="line"><span>├── Kuniyil, Rositha</span></span>
<span class="line"><span>└── Lakuntza, Oier</span></span>
<span class="line"><span>Nuria Lopez group</span></span>
<span class="line"><span>├── Bellarosa, Luca</span></span>
<span class="line"><span>├── Capdevial, Marçal</span></span>
<span class="line"><span>├── Garcia, Miquel Alexandre</span></span>
<span class="line"><span>├── Li, Qiang</span></span>
<span class="line"><span>└── Rellán, Marcos</span></span></code></pre></div><p><strong>One top community per researcher</strong></p><p>No grouping per research group</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├── Bandeira, Nuno</span></span>
<span class="line"><span>├── Bellarosa, Luca</span></span>
<span class="line"><span>├── Besora, Maria</span></span>
<span class="line"><span>├── Capdevial, Maçal</span></span>
<span class="line"><span>├── Fernandez, Victor</span></span>
<span class="line"><span>├── Garcia, Miquel Alexandre</span></span>
<span class="line"><span>├── Gonzalez-Fabra, Joan</span></span>
<span class="line"><span>├── Kuniyil, Rositha</span></span>
<span class="line"><span>├── Lakuntza, Oier</span></span>
<span class="line"><span>├── Li, Qiang</span></span>
<span class="line"><span>├── Melgar, Dolores</span></span>
<span class="line"><span>├── Rellán, Marcos</span></span>
<span class="line"><span>└── Serapian, Stefano</span></span></code></pre></div><p><strong>Only create top communities per research group and no subcommunities at all,</strong></p><p>Then all group reseachers will publish directly into his/her group community, grouping all calculations inside it.</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Carles Bo group</span></span>
<span class="line"><span>Feliu Maseras group</span></span>
<span class="line"><span>Nuria Lopez group</span></span></code></pre></div><p>Another option instead of creating communities by group/person could be to create them by calculation type, molecule type. Please choose the structure you feel that will fit your needs better.</p><h2 id="community-generation" tabindex="-1">Community generation <a class="header-anchor" href="#community-generation" aria-label="Permalink to &quot;Community generation&quot;">​</a></h2><p>Once we know how <em>Browse</em> will be structured we will start by creating the top community/ies. As administrator we will click <em>Browse</em> &gt; <em>Communities and collections</em> on the upper menubar option.</p><p><img src="`+t+'" alt="Communities and collections menu option"></p><p>On the next page we will click on the <em>Create top level community</em> button.</p><p><img src="'+o+'" alt="Admin add new top community page"></p><p>From the next form we must fill in the mandatory <em>Community name</em> textbox. We can also attach an image describing the community or append more info on the Description text field.</p><p><img src="'+p+'" alt="Admin community add form"></p><p>Once this is done we will click on the <em>Create</em> button, and our community will be created</p><h2 id="subcommunity-generation" tabindex="-1">Subcommunity generation <a class="header-anchor" href="#subcommunity-generation" aria-label="Permalink to &quot;Subcommunity generation&quot;">​</a></h2><p>Depending on the needed hierarchy, you will have to generate new subcommunities inside your top communities.</p><p>As administrators, we will navigate to the base community via <em>Browse &gt; Communities and collections</em>, then click on the desired community.</p><p>From the right sidebar we will choose <em>Create Sub-community</em> option and follow the same steps as when we create a top community.</p><p><img src="'+l+'" alt="Community options panel"></p><h2 id="assign-community-publishers" tabindex="-1">Assign community publishers <a class="header-anchor" href="#assign-community-publishers" aria-label="Permalink to &quot;Assign community publishers&quot;">​</a></h2><p>Once our publication structure has been defined, our last step as administrator is to define who will publish and where he/she will publish</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The ioChem-BD administrator account has higher levels of administrator than simple users managing their publishing community.<br> So the system admin will be able to remove published collections and items, whereas other users will not.</p></div><p>To assign publication rights to a community we must define its administrators, it can be done in two ways.</p><h3 id="_1-adding-the-community-on-user-s-edition-form" tabindex="-1">1. Adding the community on user&#39;s edition form <a class="header-anchor" href="#_1-adding-the-community-on-user-s-edition-form" aria-label="Permalink to &quot;1. Adding the community on user&#39;s edition form&quot;">​</a></h3><p>On the top bar we will navigate to the <em>Administer</em> option, then <em>Access control</em> and finally <em>E-People</em>, it will open <em>Administer EPeople</em> page.</p><p>From here, we will search and edit the specific user by clicking the <em>Edit</em> button. On the edition form, you can choose the communities where the user will be allowed to publish by selecting it on the listbox named <em>Communities user can publish into</em>.</p><p><img src="'+r+'" alt="Set user publishing communities"></p><h3 id="_2-adding-users-as-community-administrators" tabindex="-1">2. Adding users as community administrators <a class="header-anchor" href="#_2-adding-users-as-community-administrators" aria-label="Permalink to &quot;2. Adding users as community administrators&quot;">​</a></h3><p>We will first navigate to the desired community, in this example this will be a specific user community. From the sidebar we will click on the <em>Edit</em> button.</p><p><img src="'+m+'" alt="Edit community sidebar"></p><p>From next form we will click on <em>Create</em> administrator button on the right sidebar.</p><p><img src="'+c+'" alt="Community permissions toolbar"></p><p>In the new form we will choose which users or groups of users are allowed to publish inside this specific community.</p><p>In this demo case we are working with a user community so we will add this only user as administrator. If we are working with a group community with no users, as described in the fourth example, we can add a users&#39; group (right panel) instead of a list of single users (left panel).</p><p><img src="'+u+'" alt="Set community administrators"></p><p>We will do so for every user / group of users that we want to be able to publish, otherwise users will not be able to publish in the Browse module.</p><h3 id="resume" tabindex="-1">Resume <a class="header-anchor" href="#resume" aria-label="Permalink to &quot;Resume&quot;">​</a></h3><p>Adding new users to ioChem-BD will require:</p><ol><li><a href="./user-and-group-generation.html#creating-users">Create the user</a>, associate it to (at least) a user group and</li><li><a href="#publishing-endpoints-definition">Create a community</a> where the user will publish or associate that user into a user group that already have publishing communities associated.</li></ol>',54)]))}const _=n(d,[["render",h]]);export{x as __pageData,_ as default};