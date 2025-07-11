import{_ as i}from"./chunks/Total.C-Mp7DDF.js";import{_ as a}from"./chunks/None.CACNxHY-.js";import{_ as t,c as n,a2 as E,o as h}from"./chunks/framework.BQmytedh.js";const y=JSON.parse('{"title":"spectrum","description":"","frontmatter":{},"headers":[],"relativePath":"data/codes/turbomole/spectrum-d3e57487.md","filePath":"data/codes/turbomole/spectrum-d3e57487.md"}'),l={name:"data/codes/turbomole/spectrum-d3e57487.md"};function k(e,s,p,r,S,Y){return h(),n("div",null,s[0]||(s[0]=[E('<h1 id="spectrum" tabindex="-1">spectrum <a class="header-anchor" href="#spectrum" aria-label="Permalink to &quot;spectrum&quot;">​</a></h1><h2 id="implementation-level" tabindex="-1">Implementation level <a class="header-anchor" href="#implementation-level" aria-label="Permalink to &quot;Implementation level&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Type</th><th>Status</th></tr></thead><tbody><tr><td>CML extraction template</td><td><img src="'+i+'" alt=""></td></tr><tr><td>HTML5 representation</td><td><img src="'+a+`" alt=""></td></tr></tbody></table><h2 id="template-attributes" tabindex="-1">Template attributes <a class="header-anchor" href="#template-attributes" aria-label="Permalink to &quot;Template attributes&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Attribute</th><th>Value</th></tr></thead><tbody><tr><td><em>source</em></td><td>Turbomole control file</td></tr><tr><td>id</td><td>spectrum</td></tr><tr><td>name</td><td>Vibrational spectrum</td></tr><tr><td>pattern</td><td>\\s*\\u0024vibrational\\sspectrum.*</td></tr><tr><td>endPattern</td><td>\\s*\\u0024.*</td></tr><tr><td>endPattern2</td><td>~</td></tr><tr><td>xml:base</td><td>vibrations/spectrum.xml</td></tr></tbody></table><h2 id="input" tabindex="-1">Input <a class="header-anchor" href="#input" aria-label="Permalink to &quot;Input&quot;">​</a></h2><pre><code>$vibrational spectrum
#  mode     symmetry     wave number   IR intensity    selection rules
#                         cm**(-1)        km/mol         IR     RAMAN
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
    13        a              85.33         0.08129       YES     YES
    14        a              89.16         0.86704       YES     YES
    15        a              96.72         0.73974       YES     YES
    16        a             120.05         5.13465       YES     YES
    17        a             121.35         1.09057       YES     YES
    18        a             133.89         0.24374       YES     YES
    19        a             157.66         6.51374       YES     YES
    20        a             173.90         1.37470       YES     YES
    21        a             189.50         1.55454       YES     YES
    22        a             193.76         5.83083       YES     YES
    23        a             207.50         0.38978       YES     YES
    24        a             211.56         2.80634       YES     YES
    25        a             231.14         0.49278       YES     YES
    26        a             231.71         0.96929       YES     YES
    27        a             251.61         0.07472       YES     YES
    28        a             269.06         7.55333       YES     YES
    29        a             272.67         3.52789       YES     YES
    30        a             289.02         0.92380       YES     YES
    31        a             350.20         1.67603       YES     YES
    32        a             368.38         0.10502       YES     YES
    33        a             370.32         0.69205       YES     YES
    34        a             378.01         0.25235       YES     YES
    35        a             389.35        14.29104       YES     YES
    36        a             396.46        43.39834       YES     YES
    37        a             428.05         1.71720       YES     YES
    38        a             437.37        15.54808       YES     YES
    39        a             441.86         4.48703       YES     YES
    40        a             447.58         3.70774       YES     YES
    41        a             454.55        24.35391       YES     YES
    42        a             470.84         1.64084       YES     YES
    43        a             476.33         9.66744       YES     YES
    44        a             480.21         1.95730       YES     YES
    45        a             483.98       113.27457       YES     YES
    46        a             487.49         2.60486       YES     YES
    47        a             499.32         7.66357       YES     YES
    48        a             499.76         2.07700       YES     YES
    49        a             545.87         8.54488       YES     YES
    50        a             567.00         0.06595       YES     YES
    51        a             570.17         0.32067       YES     YES
    52        a             644.03         3.16863       YES     YES
    53        a             659.30         8.86870       YES     YES
    54        a             663.14         0.04802       YES     YES
    55        a             663.60         0.34199       YES     YES
    56        a             665.63         1.55084       YES     YES
    57        a             667.34         7.24006       YES     YES
    58        a             674.63         0.46597       YES     YES
    59        a             678.43         5.96902       YES     YES
    60        a             683.62        46.07586       YES     YES
    61        a             707.67        11.11572       YES     YES
    62        a             762.06        18.94156       YES     YES
    63        a             762.35         4.78970       YES     YES
    64        a             765.78        65.91267       YES     YES
    65        a             770.99        53.64301       YES     YES
    66        a             774.51        48.51363       YES     YES
    67        a             775.34         5.30979       YES     YES
    68        a             783.41        82.28102       YES     YES
    69        a             787.25         0.81957       YES     YES
    70        a             788.42         1.76938       YES     YES
    71        a             790.23        67.49253       YES     YES
    72        a             790.73         1.36736       YES     YES
    73        a             793.33       110.01385       YES     YES
    74        a             840.88         0.30885       YES     YES
    75        a             842.01         0.16147       YES     YES
    76        a             874.59         0.35831       YES     YES
    77        a             887.15       165.77529       YES     YES
    78        a             921.03         0.18631       YES     YES
    79        a             922.91         0.52549       YES     YES
    80        a             924.70         2.62152       YES     YES
    81        a             925.64         1.25774       YES     YES
    82        a             974.86         0.01019       YES     YES
    83        a             975.08         1.39581       YES     YES
    84        a            1002.34         0.17983       YES     YES
    85        a            1003.05         0.03377       YES     YES
    86        a            1006.63         0.15445       YES     YES
    87        a            1007.22         0.35904       YES     YES
    88        a            1009.10         0.68753       YES     YES
    89        a            1014.32         0.18807       YES     YES
    90        a            1029.71        47.20371       YES     YES
    91        a            1045.78         0.02031       YES     YES
    92        a            1046.05         0.18437       YES     YES
    93        a            1048.83         0.11820       YES     YES
    94        a            1049.30         0.10023       YES     YES
    95        a            1053.82        55.89307       YES     YES
    96        a            1054.13        17.14658       YES     YES
    97        a            1056.44         6.68461       YES     YES
    98        a            1060.49        11.43227       YES     YES
    99        a            1062.73         0.15656       YES     YES
   100        a            1065.70         5.85511       YES     YES
   101        a            1067.07        14.10847       YES     YES
   102        a            1069.28         4.89277       YES     YES
   103        a            1071.75         1.90627       YES     YES
   104        a            1080.98        68.53581       YES     YES
   105        a            1098.55         3.51996       YES     YES
   106        a            1099.27        13.73476       YES     YES
   107        a            1104.86        11.75431       YES     YES
   108        a            1106.76         0.55624       YES     YES
   109        a            1140.42        14.68352       YES     YES
   110        a            1140.85        18.01342       YES     YES
   111        a            1149.83       182.75683       YES     YES
   112        a            1155.00         1.65086       YES     YES
   113        a            1155.15        12.49293       YES     YES
   114        a            1166.76         1.44401       YES     YES
   115        a            1172.59        43.08788       YES     YES
   116        a            1179.40         4.96498       YES     YES
   117        a            1179.75        10.14214       YES     YES
   118        a            1188.70         1.55687       YES     YES
   119        a            1189.73         1.41295       YES     YES
   120        a            1194.67        56.28829       YES     YES
   121        a            1268.12       195.68296       YES     YES
   122        a            1299.28         2.67109       YES     YES
   123        a            1305.83        12.61172       YES     YES
   124        a            1315.24         4.83227       YES     YES
   125        a            1325.02         4.68102       YES     YES
   126        a            1325.32        10.27509       YES     YES
   127        a            1353.05         0.58298       YES     YES
   128        a            1354.58        11.65330       YES     YES
   129        a            1371.85         3.42663       YES     YES
   130        a            1373.54        34.09342       YES     YES
   131        a            1376.06        29.80549       YES     YES
   132        a            1376.99       124.11764       YES     YES
   133        a            1388.14         3.93706       YES     YES
   134        a            1388.89         4.22487       YES     YES
   135        a            1410.95        30.09804       YES     YES
   136        a            1474.02        66.67929       YES     YES
   137        a            1474.90        25.47718       YES     YES
   138        a            1480.50        12.48980       YES     YES
   139        a            1483.42        16.35389       YES     YES
   140        a            1496.98        76.60798       YES     YES
   141        a            1497.78        32.79911       YES     YES
   142        a            1510.26        53.02153       YES     YES
   143        a            1517.56        28.34557       YES     YES
   144        a            1517.98        10.35080       YES     YES
   145        a            1547.59         8.52136       YES     YES
   146        a            1548.26        17.60833       YES     YES
   147        a            1587.94        18.86752       YES     YES
   148        a            1590.62       316.46147       YES     YES
   149        a            1640.96       258.78896       YES     YES
   150        a            1645.88         4.55152       YES     YES
   151        a            1648.12        33.15028       YES     YES
   152        a            1661.32         6.34182       YES     YES
   153        a            1662.24         0.05988       YES     YES
   154        a            1668.39        14.44724       YES     YES
   155        a            1681.53        68.96780       YES     YES
   156        a            1683.27        67.26224       YES     YES
   157        a            1690.23       214.39761       YES     YES
   158        a            1692.51        33.61017       YES     YES
   159        a            1697.55       327.97234       YES     YES
   160        a            3223.16         2.95376       YES     YES
   161        a            3224.73         3.33212       YES     YES
   162        a            3225.22         0.50373       YES     YES
   163        a            3225.85         1.72424       YES     YES
   164        a            3227.83         3.44863       YES     YES
   165        a            3227.95         1.85920       YES     YES
   166        a            3229.90        20.08225       YES     YES
   167        a            3231.15         0.89031       YES     YES
   168        a            3237.21         4.44297       YES     YES
   169        a            3237.88         2.55868       YES     YES
   170        a            3238.10         4.70313       YES     YES
   171        a            3240.20         4.96990       YES     YES
   172        a            3241.00         0.72098       YES     YES
   173        a            3242.50         5.41098       YES     YES
   174        a            3243.83         0.45160       YES     YES
   175        a            3244.11        10.41806       YES     YES
   176        a            3248.13         5.78452       YES     YES
   177        a            3248.38         4.15018       YES     YES
   178        a            3248.70         1.96708       YES     YES
   179        a            3249.37         0.08464       YES     YES
   180        a            3251.10        11.41194       YES     YES
   181        a            3253.64         3.60516       YES     YES
   182        a            3259.38         2.00534       YES     YES
   183        a            3260.55         1.04592       YES     YES
</code></pre><h2 id="input-1" tabindex="-1">Input <a class="header-anchor" href="#input-1" aria-label="Permalink to &quot;Input&quot;">​</a></h2><pre><code>$vibrational spectrum
#  mode     symmetry     wave number   IR intensity    selection rules
#                         cm**(-1)        km/mol         IR     RAMAN
     1                       -0.00         0.00000        -       -
     2                        0.00         0.00000        -       -
     3                        0.00         0.00000        -       -
     4                        0.00         0.00000        -       -
     5                        0.00         0.00000        -       -
     6                        0.00         0.00000        -       -
     7        a1&quot;             1.32         0.00000       NO      NO
     8        e1&#39;            23.48         3.52749       YES     NO
     9        e1&#39;            23.48         3.52749       YES     NO
    10        e1&quot;           130.45         0.00000       NO      YES
    11        e1&quot;           130.45         0.00000       NO      YES
    12        e1&#39;           203.11         0.36540       YES     NO
    13        e1&#39;           203.11         0.36540       YES     NO
    14        a1&#39;           224.51         0.00000       NO      YES
    15        a2&quot;           355.19        91.94174       YES     NO
    16        e2&quot;           630.26         0.00000       NO      NO
    17        e2&quot;           630.26         0.00000       NO      NO
    18        e2&#39;           637.67         0.00000       NO      YES
    19        e2&#39;           637.67         0.00000       NO      YES
    20        e1&quot;           763.08         0.00000       NO      YES
    21        e1&quot;           763.08         0.00000       NO      YES
    22        e1&#39;           780.70         0.00143       YES     NO
    23        e1&#39;           780.70         0.00143       YES     NO
    24        a2&quot;           783.92       427.43367       YES     NO
    25        a1&#39;           795.26         0.00000       NO      YES
    26        e2&quot;           856.47         0.00000       NO      NO
    27        e2&quot;           856.47         0.00000       NO      NO
    28        e2&#39;           857.60         0.00000       NO      YES
    29        e2&#39;           857.60         0.00000       NO      YES
    30        e2&quot;           887.67         0.00000       NO      NO
    31        e2&quot;           887.67         0.00000       NO      NO
    32        e2&#39;           896.55         0.00000       NO      YES
    33        e2&#39;           896.55         0.00000       NO      YES
    34        e1&quot;          1030.52         0.00000       NO      YES
    35        e1&quot;          1030.52         0.00000       NO      YES
    36        e1&#39;          1032.77        40.98600       YES     NO
    37        e1&#39;          1032.77        40.98600       YES     NO
    38        e2&quot;          1074.66         0.00000       NO      NO
    39        e2&quot;          1074.66         0.00000       NO      NO
    40        e2&#39;          1077.32         0.00000       NO      YES
    41        e2&#39;          1077.32         0.00000       NO      YES
    42        a2&quot;          1153.32         2.23427       YES     NO
    43        a1&#39;          1155.11         0.00000       NO      YES
    44        a1&quot;          1280.88         0.00000       NO      NO
    45        a2&#39;          1281.05         0.00000       NO      NO
    46        e2&quot;          1394.66         0.00000       NO      NO
    47        e2&quot;          1394.66         0.00000       NO      NO
    48        e2&#39;          1396.95         0.00000       NO      YES
    49        e2&#39;          1396.95         0.00000       NO      YES
    50        e1&quot;          1467.60         0.00000       NO      YES
    51        e1&quot;          1467.60         0.00000       NO      YES
    52        e1&#39;          1471.56         0.21692       YES     NO
    53        e1&#39;          1471.56         0.21692       YES     NO
    54        e2&quot;          3230.84         0.00000       NO      NO
    55        e2&quot;          3230.84         0.00000       NO      NO
    56        e2&#39;          3231.19         0.00000       NO      YES
    57        e2&#39;          3231.19         0.00000       NO      YES
    58        e1&quot;          3247.32         0.00000       NO      YES
    59        e1&quot;          3247.32         0.00000       NO      YES
    60        e1&#39;          3247.47         4.71260       YES     NO
    61        e1&#39;          3247.47         4.71260       YES     NO
    62        a2&quot;          3260.43         1.26653       YES     NO
    63        a1&#39;          3260.58         0.00000       NO      YES
$end    
</code></pre><h2 id="output-text" tabindex="-1">Output text <a class="header-anchor" href="#output-text" aria-label="Permalink to &quot;Output text&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">comment</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example.output&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;spectrum&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">module</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cmlx:templateRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;spectrum&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;183&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cc:frequency&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;0.0 0.0 0.0 0.0 0.0 0.0 36.62 40.17 41.4 43.34 48.07 64.06 85.33 89.16 96.72 120.05 121.35 133.89 157.66 173.9 189.5 193.76 207.5 211.56 231.14 231.71 251.61 269.06 272.67 289.02 350.2 368.38 370.32 378.01 389.35 396.46 428.05 437.37 441.86 447.58 454.55 470.84 476.33 480.21 483.98 487.49 499.32 499.76 545.87 567.0 570.17 644.03 659.3 663.14 663.6 665.63 667.34 674.63 678.43 683.62 707.67 762.06 762.35 765.78 770.99 774.51 775.34 783.41 787.25 788.42 790.23 790.73 793.33 840.88 842.01 874.59 887.15 921.03 922.91 924.7 925.64 974.86 975.08 1002.34 1003.05 1006.63 1007.22 1009.1 1014.32 1029.71 1045.78 1046.05 1048.83 1049.3 1053.82 1054.13 1056.44 1060.49 1062.73 1065.7 1067.07 1069.28 1071.75 1080.98 1098.55 1099.27 1104.86 1106.76 1140.42 1140.85 1149.83 1155.0 1155.15 1166.76 1172.59 1179.4 1179.75 1188.7 1189.73 1194.67 1268.12 1299.28 1305.83 1315.24 1325.02 1325.32 1353.05 1354.58 1371.85 1373.54 1376.06 1376.99 1388.14 1388.89 1410.95 1474.02 1474.9 1480.5 1483.42 1496.98 1497.78 1510.26 1517.56 1517.98 1547.59 1548.26 1587.94 1590.62 1640.96 1645.88 1648.12 1661.32 1662.24 1668.39 1681.53 1683.27 1690.23 1692.51 1697.55 3223.16 3224.73 3225.22 3225.85 3227.83 3227.95 3229.9 3231.15 3237.21 3237.88 3238.1 3240.2 3241.0 3242.5 3243.83 3244.11 3248.13 3248.38 3248.7 3249.37 3251.1 3253.64 3259.38 3260.55&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;183&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cc:irintensity&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;0.0 0.0 0.0 0.0 0.0 0.0 0.50306 0.08176 0.13467 2.45364 0.70156 0.75864 0.08129 0.86704 0.73974 5.13465 1.09057 0.24374 6.51374 1.3747 1.55454 5.83083 0.38978 2.80634 0.49278 0.96929 0.07472 7.55333 3.52789 0.9238 1.67603 0.10502 0.69205 0.25235 14.29104 43.39834 1.7172 15.54808 4.48703 3.70774 24.35391 1.64084 9.66744 1.9573 113.27457 2.60486 7.66357 2.077 8.54488 0.06595 0.32067 3.16863 8.8687 0.04802 0.34199 1.55084 7.24006 0.46597 5.96902 46.07586 11.11572 18.94156 4.7897 65.91267 53.64301 48.51363 5.30979 82.28102 0.81957 1.76938 67.49253 1.36736 110.01385 0.30885 0.16147 0.35831 165.77529 0.18631 0.52549 2.62152 1.25774 0.01019 1.39581 0.17983 0.03377 0.15445 0.35904 0.68753 0.18807 47.20371 0.02031 0.18437 0.1182 0.10023 55.89307 17.14658 6.68461 11.43227 0.15656 5.85511 14.10847 4.89277 1.90627 68.53581 3.51996 13.73476 11.75431 0.55624 14.68352 18.01342 182.75683 1.65086 12.49293 1.44401 43.08788 4.96498 10.14214 1.55687 1.41295 56.28829 195.68296 2.67109 12.61172 4.83227 4.68102 10.27509 0.58298 11.6533 3.42663 34.09342 29.80549 124.11764 3.93706 4.22487 30.09804 66.67929 25.47718 12.4898 16.35389 76.60798 32.79911 53.02153 28.34557 10.3508 8.52136 17.60833 18.86752 316.46147 258.78896 4.55152 33.15028 6.34182 0.05988 14.44724 68.9678 67.26224 214.39761 33.61017 327.97234 2.95376 3.33212 0.50373 1.72424 3.44863 1.8592 20.08225 0.89031 4.44297 2.55868 4.70313 4.9699 0.72098 5.41098 0.4516 10.41806 5.78452 4.15018 1.96708 0.08464 11.41194 3.60516 2.00534 1.04592&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">comment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="output-text-1" tabindex="-1">Output text <a class="header-anchor" href="#output-text-1" aria-label="Permalink to &quot;Output text&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">comment</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example.output&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;spectrum2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;   </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">module</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cmlx:templateRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;spectrum&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;           </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cc:frequency&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;63&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;-0.00 0.0000 0.0000 0.0000 0.0000 0.0000 1.32 23.48 23.48 130.45 130.45 203.11 203.11 224.51 355.19 630.26 630.26 637.67 637.67 763.08 763.08 780.70 780.70 783.92 795.26 856.47 856.47 857.60 857.60 887.67 887.67 896.55 896.55 1030.52 1030.52 1032.77 1032.77 1074.66 1074.66 1077.32 1077.32 1153.32 1155.11 1280.88 1281.05 1394.66 1394.66 1396.95 1396.95 1467.60 1467.60 1471.56 1471.56 3230.84 3230.84 3231.19 3231.19 3247.32 3247.32 3247.47 3247.47 3260.43 3260.58&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dataType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xsd:double&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dictRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cc:irintensity&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;63&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;0.00000 0 0 0 0 0 0.00000 3.52749 3.52749 0.00000 0.00000 0.36540 0.36540 0.00000 91.94174 0.00000 0.00000 0.00000 0.00000 0.00000 0.00000 0.00143 0.00143 427.43367 0.00000 0.00000 0.00000 0.00000 0.00000 0.00000 0.00000 0.00000 0.00000 0.00000 0.00000 40.98600 40.98600 0.00000 0.00000 0.00000 0.00000 2.23427 0.00000 0.00000 0.00000 0.00000 0.00000 0.00000 0.00000 0.00000 0.00000 0.21692 0.21692 0.00000 0.00000 0.00000 0.00000 0.00000 0.00000 4.71260 4.71260 1.26653 0.00000&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">comment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="template-definition" tabindex="-1">Template definition <a class="header-anchor" href="#template-definition" aria-label="Permalink to &quot;Template definition&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> pattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;\\s*1.*&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> endPattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;~&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">record</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;\\s*\\S+\\s+(?:\\w+\\S*\\s+)?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#123;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">F,cc:frequency</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#125;&amp;#123;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">F,cc:irintensity</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;#125;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.*&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">templateList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">transform</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> process</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;createArray&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.//cml:scalar[@dictRef=&#39;cc:frequency&#39;]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">transform</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> process</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;createArray&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.//cml:scalar[@dictRef=&#39;cc:irintensity&#39;]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">transform</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> process</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pullup&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.//cml:array&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">transform</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> process</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;delete&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.//cml:list[count(*)=0]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">transform</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> process</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;delete&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.//cml:list[count(*)=0]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">transform</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> process</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;delete&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.//cml:module[count(*)=0]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">transform</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> process</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;delete&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.//cml:module[count(*)=0]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div>`,15)]))}const u=t(l,[["render",k]]);export{y as __pageData,u as default};
