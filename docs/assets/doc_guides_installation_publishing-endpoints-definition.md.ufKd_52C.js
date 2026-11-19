import{_ as n,c as s,a2 as e,o as i}from"./chunks/framework.CoXjB5sU.js";const t="/assets/Admin_sidebar_new_community.DgFaFDjV.png",p="/assets/Admin_new_community_dialog.uRL5GjbX.png",o="/assets/Admin_community_create.B-cJ8u1Z.png",y=JSON.parse('{"title":"Creating publication communities","description":"","frontmatter":{},"headers":[],"relativePath":"doc/guides/installation/publishing-endpoints-definition.md","filePath":"doc/guides/installation/publishing-endpoints-definition.md"}'),r={name:"doc/guides/installation/publishing-endpoints-definition.md"};function l(c,a,u,m,h,d){return i(),s("div",null,a[0]||(a[0]=[e(`<h1 id="creating-publication-communities" tabindex="-1">Creating publication communities <a class="header-anchor" href="#creating-publication-communities" aria-label="Permalink to &quot;Creating publication communities&quot;">​</a></h1><p>Researchers work privately in the <em>Create</em> module: they upload their calculations, organise them in projects, read their HTML5 summaries, search them and generate reports. When their results are ready, they publish the projects into the <em>Browse</em> module, which shares them with the rest of the world.</p><p>Browse organises the published content in <strong>communities</strong>, and every user group publishes into one of them. So, before creating the users and groups, decide how Browse will be structured and create its communities.</p><p>The structure is up to the administrator. These are some common ones:</p><p><strong>A top community with your institution&#39;s name</strong></p><p>Then inside it, their research groups community and inside them, its researchers community.</p><p>Here every researcher publishes into their own community:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Institute of Chemical Research of Catalonia</span></span>
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
<span class="line"><span>├── Capdevila, Marçal</span></span>
<span class="line"><span>├── Garcia, Miquel Alexandre</span></span>
<span class="line"><span>├── Li, Qiang</span></span>
<span class="line"><span>└── Rellán, Marcos</span></span></code></pre></div><p><strong>One top community per researcher</strong></p><p>No grouping by research group.</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├── Bandeira, Nuno</span></span>
<span class="line"><span>├── Bellarosa, Luca</span></span>
<span class="line"><span>├── Besora, Maria</span></span>
<span class="line"><span>├── Capdevila, Marçal</span></span>
<span class="line"><span>├── Fernandez, Victor</span></span>
<span class="line"><span>├── Garcia, Miquel Alexandre</span></span>
<span class="line"><span>├── Gonzalez-Fabra, Joan</span></span>
<span class="line"><span>├── Kuniyil, Rositha</span></span>
<span class="line"><span>├── Lakuntza, Oier</span></span>
<span class="line"><span>├── Li, Qiang</span></span>
<span class="line"><span>├── Melgar, Dolores</span></span>
<span class="line"><span>├── Rellán, Marcos</span></span>
<span class="line"><span>└── Serapian, Stefano</span></span></code></pre></div><p><strong>Only top communities per research group, with no subcommunities</strong></p><p>Then all group researchers publish directly into their group community.</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Carles Bo group</span></span>
<span class="line"><span>Feliu Maseras group</span></span>
<span class="line"><span>Nuria Lopez group</span></span></code></pre></div><p>You can also organise communities by calculation type or by molecule type. Choose the structure that fits your needs best.</p><h2 id="community-generation" tabindex="-1">Community generation <a class="header-anchor" href="#community-generation" aria-label="Permalink to &quot;Community generation&quot;">​</a></h2><p>Log in as administrator (see <a href="./user-and-group-generation.html#administrator-login">Administrator login</a>), hover over the management sidebar on the left and click <em>New</em> &gt; <em>Community</em>:</p><p><img src="`+t+'" alt="New community option of the management sidebar"></p><p>A dialog asks where to create it. Click <em>Create a new top-level community</em>, or search and click an existing community to create a subcommunity inside it:</p><p><img src="'+p+'" alt="New community dialog"></p><p>In the <em>Create a Community</em> form, fill in the mandatory <strong>Name</strong>. Optionally, upload a logo and add an introductory text (HTML) and a short description, shown on the community page and on the Browse home page. Then click <em>Save</em>.</p><p><img src="'+o+'" alt="Create a Community form"></p><p>Repeat it for every community of your structure. To change a community later, use <em>Edit</em> &gt; <em>Community</em> in the management sidebar, or the menu button at the top right of the community page.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can also create a community while creating a user group, with the <em>New community</em> button of the <a href="./user-and-group-generation.html#creating-groups">group form</a>.</p></div><h2 id="assign-community-publishers" tabindex="-1">Assign community publishers <a class="header-anchor" href="#assign-community-publishers" aria-label="Permalink to &quot;Assign community publishers&quot;">​</a></h2><p>Users publish into the <strong>publishing community of their user groups</strong>. Once the communities exist, <a href="./user-and-group-generation.html#creating-groups">create the user groups</a> and select the publishing community of each one. All the members of the group can then publish into it, and new members get the right as soon as they join the group.</p><p>Internally, the group becomes a member of the community administrators group (<em>COMMUNITY_&lt;id&gt;_ADMIN</em>, under the community&#39;s <em>Edit</em> &gt; <em>Assign Roles</em> tab).</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The ioChem-BD administrator has more rights than the community administrators: only the platform administrator can delete published collections and items.</p></div><h3 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h3><p>To let a new researcher publish:</p><ol><li><a href="#community-generation">Create the community</a> where they will publish, unless their research group already has one.</li><li><a href="./user-and-group-generation.html#creating-groups">Create the user group</a> linked to that community, or reuse the existing one.</li><li><a href="./user-and-group-generation.html#creating-users">Create the user</a> in that group.</li></ol>',34)]))}const b=n(r,[["render",l]]);export{y as __pageData,b as default};
