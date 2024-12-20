import{_ as a,c as t,a2 as i,o as r}from"./chunks/framework.BQmytedh.js";const o="/assets/CreateMain.BcnS6Bro.png",l="/assets/CreateMainPageFrames.BlRoPIz2.png",s="/assets/CreateNavigationTabs.DrEl1uV1.png",n="/assets/CreateNavigationTreeElements.Dv1zTSCW.png",c="/assets/CreateNavigationTreeContextMenu.fj_uvFoS.png",m="/assets/CreateSearchForm.KDKldKpK.png",h="/assets/CreateSearchFormResults.643XpW2U.png",p="/assets/CreateItemAction3DStructure.DUvyhqR1.png",u="/assets/CreateItemActionViewResults.DKEqo0gD.png",d="/assets/CreateItemActionDownload.C52J7ykn.png",g="/assets/CreateItemActionRaw.zDsulm1_.png",f="/assets/CreateItemDetailsForm.z0zFMmzt.png",w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOUAAABeCAMAAADrGiOSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABR1BMVEXf39/////Z2dnAuovAuYq/uYq/uYm/uIm/uIi/uIe/uIa/uIW/t4W/t4S/t4O/t4G/t4DAtn/AtX36+vrl5eXd3d2/tHzz8/PX19dYquQYmPEAk/kamvNnsOPNzs91d3psb3K9vsAyNjm/snpbruhosuWztLZFSEwhJSkjJytiZWdrbnF/gYO/sHkOl/cbm/R6fX+Ag4XX19hXWl3y8/MnKy/Q0NG+rneoqatCRUi+q3WTlZe+qXPj4+QiJiq+pnG+o269oGvP0NDy8vK9nWl9f4K8mWgxNTi8vr+7lWXb29sPmfken/i5urszNjr7+/u4kWN1v/Joa21/goS0jGGthV35+fnk5OTc3NyogFuhelmZc1fv7+/S0tKSbFTJycnFxcWIZFK/v7+8vLyvr6+mpqa9vb1/XVCNjY2Pj4+VlZWkpKRyVE5gdrRzAAAAAWJLR0QB/wIt3gAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+QCAxEaHwm1MdMAAAAQY2FOdgAAAOcAAABgAAAAAQAAAAGW2EY/AAABq0lEQVR42u3cR1fCUBCGYbz2XhIEjb0rdkRBxIY1YokF7B37/18bjwGTDa7u1fPNvCtmNec5SRazweejURF6opiVKLESJ1bixEqcWIkTK3FiJU5ElCWsRImVOLESJyLKUlaixEqcWIkTK3FiJU5ElGWsRImVOLESJ1bixEqcWIkTK3FiJU6sxImIspyVKBFRVrASJVbiJCpZiZKoIqGsJqGsIaGsJaGsI6GsJ6FsIKFsJKFsUqHUdL+QmF/XflE2K1AGgi2thsTa2oOB3K6Ozi7nV3ePlptFrwKl6JNp/KpffG8aGBwaHnG2hkbzsxhToRyXrZxwlJNT02FHOROZzc9iToVSNtIwRH5ZThmN/cxiHlUZjruUC6DKxGLCpVwCVcbDrlksgypjUbdyBVO5Gkm6lWuYyvWQexYbkEptc8uj3FagNHdkI1N+r3J3b9+jPFCg1C3ZSkv3bjw88r5MxwqUmmmlpD5Jyyx8lIgTFZdXOmPKvLxOM+nC+8UZiSv6nITywlYmwbu8uraVMr+Z/9DN7Z2tvIfu4TH79GwrX6B7fXvPfvz1n2Qq6hOPuulGG2WpEgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wMi0wM1QxNjoyNjozMSswMTowMKk8SO4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDItMDNUMTY6MjY6MzErMDE6MDDYYfBSAAAAAElFTkSuQmCC",T=JSON.parse('{"title":"Create module walkthrough","description":"","frontmatter":{},"headers":[],"relativePath":"doc/guides/usage/create-module-walktrough.md","filePath":"doc/guides/usage/create-module-walktrough.md"}'),A={name:"doc/guides/usage/create-module-walktrough.md"};function b(k,e,y,v,C,S){return r(),t("div",null,e[0]||(e[0]=[i('<h1 id="create-module-walkthrough" tabindex="-1">Create module walkthrough <a class="header-anchor" href="#create-module-walkthrough" aria-label="Permalink to &quot;Create module walkthrough&quot;">​</a></h1><p>The Create module is a single-page web application aimed at managing input and output files from computational chemistry research work, and to generate derived content from it. Create allows uploading, organizing, visualizing and curing your data, and share it with your project mates.</p><p><img src="'+o+'" alt="Create module main page"></p><p>The window is composed of three frames, some with several tabs:</p><ul><li><a href="#navigation-frame">Navigation</a> / <a href="#search-mode">Search</a> / <a href="#report-mode">Reports</a> frame</li><li><a href="#item-actions-frame">Item Actions</a> frame</li><li><a href="#item-details-frame">Item Details</a> frame</li></ul><p><img src="'+l+'" alt="Frame composition"></p><p>The default operation flow within the Create module starts by navigating/browsing user-uploaded content in the <em>Navigation</em> frame and selecting one of them to display its content.<br> When any Item is selected, both the <em>Item Actions</em> frame and the <em>Item Details</em> frame get actualized and display additional data.</p><p>Multiple element selection is allowed, this is normally associated to global operations, such for instance when publishing a project, or when generating reports. Multiple element selection also disables <em>Item Actions</em> and <em>Item Details</em> frames.</p><h2 id="navigation-frame" tabindex="-1">Navigation frame <a class="header-anchor" href="#navigation-frame" aria-label="Permalink to &quot;Navigation frame&quot;">​</a></h2><p>This frame is the entry point of all managing functionalities of the Create module.<br> Three tabs allow us to select the current operative mode:</p><ul><li><a href="#navigation-frame">Navigation</a></li><li><a href="#search-mode">Search</a></li><li><a href="#report-mode">Reports</a></li></ul><p>To switch between modes, the user only has to click on each tab:</p><p><img src="'+s+'" alt="Mode switch tabs"></p><h3 id="navigation-edition-mode" tabindex="-1">Navigation/Edition mode <a class="header-anchor" href="#navigation-edition-mode" aria-label="Permalink to &quot;Navigation/Edition mode&quot;">​</a></h3><p>The Navigation tab will display a navigation tree composed of nodes and leaves. From now on we will call it our <em>workspace</em>.</p><p><img src="'+n+'" alt="Project and calculation navigation tree"></p><p>Each node represents what we call a <strong>project</strong>. This is just a container element, like a folder, and can contain other subprojects or simply a set of single calculations, which are the basic element of your data.</p><p>A <strong>calculation</strong> usually contains input files, CML converted output files, additional files, etc ...<br> The <em>Navigation</em> frame is the place to gather projects and calculations and organize your data sets in the way you want to eventually publish them.<br> We can easily recognize <strong>projects</strong> inside the workspace by looking at the <em>Type</em> column as they are labeled as <em>PRO</em>. Another way to recognize them (when they contain child elements) is by a small arrow next to their name. When clicking on it, the project&#39;s content will expand or collapse.</p><p><strong>Calculations</strong> are the leafs in the hierarchy tree, ending points where nothing can hang from them. A calculation item represents all data associated to a single calculation, which comes straight from the output of computational chemistry packages. By selecting a calculation, both the <em>Item Actions</em> frame and the <em>Item Details</em> frame get actualized to display additional data.</p><p>On calculations, the <em>Type</em> column contains the abbreviation of the original software package used:</p><ul><li>ADF/AMS: Calculation generated with <a href="https://www.scm.com/" target="_blank" rel="noreferrer">Amsterdam Density functional</a> software package</li><li>AMB: Calculation generated with <a href="http://ambermd.org/" target="_blank" rel="noreferrer">Amber</a> software package</li><li>CAS: Calculation generated with <a href="http://www.castep.org/" target="_blank" rel="noreferrer">CASTEP</a> software package</li><li>GAU: Calculation generated with <a href="http://www.gaussian.com/" target="_blank" rel="noreferrer">Gaussian</a> software package</li><li>GMC: Calculation generated with <a href="http://www.gromacs.org/" target="_blank" rel="noreferrer">GROMACS</a> software package</li><li>GRO: Calculation generated with <a href="http://gronor.org/" target="_blank" rel="noreferrer">GronOR</a> software package</li><li>GRRM: Calculation generated with <a href="https://iqce.jp/GRRM/index_e.shtml" target="_blank" rel="noreferrer">GRRM</a> software package</li><li>LAM: Calculation generated with <a href="https://www.lammps.org" target="_blank" rel="noreferrer">LAMMPS</a> software package</li><li>MOL: Calculation generated with <a href="https://www.molcas.org/" target="_blank" rel="noreferrer">Molcas</a> software package</li><li>MOP: Calculation generated with <a href="http://openmopac.net/" target="_blank" rel="noreferrer">Mopac</a> software package</li><li>ORC: Calculation generated with <a href="https://orcaforum.kofo.mpg.de/app.php/portal" target="_blank" rel="noreferrer">Orca</a> software package</li><li>QEX: Calculation generated with <a href="https://www.quantum-espresso.org" target="_blank" rel="noreferrer">QuantumESPRESSO</a> software package</li><li>SIE: Calculation generated with <a href="https://siesta-project.org/siesta/" target="_blank" rel="noreferrer">SIESTA</a> software package</li><li>TML: Calculation generated with <a href="http://www.turbomole.com/" target="_blank" rel="noreferrer">Turbomole</a> software package</li><li>VSP: Calculation generated with <a href="https://www.vasp.at/" target="_blank" rel="noreferrer">Vienna Ab initio Simulation Package</a> software package</li></ul><p>This list will increase as more calculations types are implemented.<br> Other interesting columns that are worth explaning are:</p><ul><li><em>Description</em>: Text about the project/calculation (special symbols are allowed).</li><li><em>Status</em>: Current element status. Possible values: created/published.</li><li><em>Handle</em>: Unique identifier of each published element, which can be accessed from the Browse module (please read section <a href="./publishing-calculations/publish-process.html">Publishing Calculations into Browse</a>)</li><li><em>Published flag</em>: Check mark indicating if the element is published</li></ul><p>There is a context menu to help you with the repetitive actions. You have to first select any element in the workspace with the left click and then right click on it to see its available options in the context menu.</p><p><img src="'+c+'" alt="Element context menu"></p><p>Read the <a href="./publishing-calculations/publish-process.html">Publishing Calculations</a> section or the <a href="./generating-reports.html">Generate reports</a> section to learn how to proceed further.</p><h3 id="search-mode" tabindex="-1">Search mode <a class="header-anchor" href="#search-mode" aria-label="Permalink to &quot;Search mode&quot;">​</a></h3><p>The Search tab will display a form where the user can query all uploaded projects/calculations. Multiple filters are available to refine queries. Currently, it filters by administrative metadata and molecular structure:</p><ul><li><em>Name</em> and <em>description</em> of the element, partial text matching search.</li><li><em>Type</em> of the element (calculation software type).</li><li><em>Path</em>, starting path to search for, see more at <a href="./uploading-content-to-create/using-web-interface.html#paths">path definition</a> section.</li><li><em>User</em> who created the element and <em>group of users</em> that element belongs to.</li><li><em>Access permissions</em> assigned to element.</li><li><em>Creation</em> and <em>modification</em> dates.</li><li>Current element <em>state</em>.</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Note that by enriching the <em>Description</em> field with meaningful information will allow you to look for those concepts when performing a search.</p></div><p><img src="'+m+'" alt="Multiple field search form"></p><p>After setting the search parameters you whish, click the <em>Search</em> button to perform a query. A list of results will appear.</p><p><img src="'+h+'" alt="Search results list"></p><p>We can click on any listed element to display its particular <em>Item actions</em> and <em>details</em>. To perform a new query, the <em>Reset search</em> button will clean the form and will bring you back to Search form.</p><h3 id="report-mode" tabindex="-1">Report mode <a class="header-anchor" href="#report-mode" aria-label="Permalink to &quot;Report mode&quot;">​</a></h3><p>This tab activates advanced operatives to process sets of calculations. This mode is fully reported in the <a href="./generating-reports.html">Generating reports</a> page. Please check it.</p><h2 id="item-actions-frame" tabindex="-1">Item Actions frame <a class="header-anchor" href="#item-actions-frame" aria-label="Permalink to &quot;Item Actions frame&quot;">​</a></h2><p>This part of Create is in charge of displaying all actions related to a selected element in the Navigation/Search frames. Projects do not have any specific action associated. By selecting a project, it will display the initial news page.<br> Calculations have the following actions, which are accessible in the tabs of this frame:</p><ul><li><a href="#_3d-structure">3D structure</a></li><li><a href="#view-results">View results</a></li><li><a href="#download">Download</a></li><li><a href="#raw-view">RAW CML</a></li></ul><h3 id="_3d-structure" tabindex="-1">3D structure <a class="header-anchor" href="#_3d-structure" aria-label="Permalink to &quot;3D structure&quot;">​</a></h3><p>This action displays the molecular structure or simulation cell. In the case of geometry optimization runs, it will show the final geometry.<br> In the case of NEB calculations run with VASP, a special tab will allow visualizing all the points.<br> We use JSmol (Javascript version of Jmol) to display such structures (and their cells in the case of periodic systems). Common JSmol operations:</p><ul><li>Hold left click + drag = Rotate molecule</li><li>Central button scroll = Zoom in / out</li><li>Hold Shift + double click + drag = Translate molecule</li><li>Right click = Display JSmol options menu</li></ul><p><img src="'+p+'" alt="JSmol molecule visualization"></p><h3 id="view-results" tabindex="-1">View Results <a class="header-anchor" href="#view-results" aria-label="Permalink to &quot;View Results&quot;">​</a></h3><p>Some results of the output file uploaded to ioChem-BD are translated into CML (Chemical Markup Language), an XML language oriented to chemistry. Such markup language allows easy further conversion into any existing format, such as an HTML5 report, a PDF file, or a JSON file.</p><p>Selected data is visualized, normally organized by content:</p><ul><li><em>General info</em>: Contains calculation administrative and descriptive metadata such is: user name, calculation type, methods used, ...</li><li><em>Settings</em>: (VASP only), most relevant INCAR settings.</li><li><em>Atom info</em>: Atom type, coordinates and basis used. Eventually cell parameters, lattice vectors and atom valence.</li><li><em>Molecular info</em>: Implicit Solvation parameters, charge and multiplicity</li><li><em>Job</em>: Its content varies depending on the quantum chemistry package used to generate the calculation (ADF software generates different output fields than VASP, for example). For calculations with multiple jobs this section will appear more than once.</li></ul><p>There is an exhaustive description on which fields are captured and how they are visualized. Please refer to <a href="/data/html/adf.html">Conversion template reference</a></p><p><img src="'+u+'" alt="HTML report"></p><h3 id="download" tabindex="-1">Download <a class="header-anchor" href="#download" aria-label="Permalink to &quot;Download&quot;">​</a></h3><p>This action allows downloading calculation files to your local filesystem.</p><p><img src="'+d+'" alt="Download files form"></p><h3 id="raw-view" tabindex="-1">RAW view <a class="header-anchor" href="#raw-view" aria-label="Permalink to &quot;RAW view&quot;">​</a></h3><p>This action displays calculation files content inside a text area. On large files, it will start to download the file instead of displaying it.</p><p><img src="'+g+'" alt="View original files form"></p><h2 id="item-details-frame" tabindex="-1">Item Details frame <a class="header-anchor" href="#item-details-frame" aria-label="Permalink to &quot;Item Details frame&quot;">​</a></h2><p>Any project or calculation selected in our workspace will immediately refresh this form, displaying its administrative metadata. Some fields are modifiable f. ex. name, description, owner group, assigned permissions. Other fields are fixed like owner user or creation date.</p><p>In the lower area of this frame three buttons provide important actions:</p><ul><li><em>Create project</em> : Generates a project in the current path using the values in the form</li><li><em>Modify</em> : Replaces stored values for the selected element with values in the form</li><li><em>Delete</em> : Deletes selected element.</li></ul><p><img src="'+f+'" alt="Item details frame with operation buttons"></p><h3 id="upload-bar" tabindex="-1">Upload bar <a class="header-anchor" href="#upload-bar" aria-label="Permalink to &quot;Upload bar&quot;">​</a></h3><p>On the bottom area of this frame there is an empty space. It is left blank intentionally to fit the upload bar. This bar will only appear while uploading calculations via the web interface, showing the progress of the uploading step..</p><p><img src="'+w+'" alt="Upload bar after a single upload"></p>',63)]))}const M=a(A,[["render",b]]);export{T as __pageData,M as default};