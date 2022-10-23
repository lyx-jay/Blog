import{_ as s,c as n,o as a,d as l}from"./app.7ee27a86.js";var p="/Blog/assets/reactive-1.2fc349a8.png",o="/Blog/assets/reactive-2.36c180f4.png";const d=JSON.parse('{"title":"vue3 \u54CD\u5E94\u5F0F\u7CFB\u7EDF\u539F\u7406-\u6E05\u9664\u526F\u4F5C\u7528\u51FD\u6570","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u54CD\u5E94\u5F0F\u6570\u636E\u7ED3\u6784","slug":"\u54CD\u5E94\u5F0F\u6570\u636E\u7ED3\u6784"},{"level":2,"title":"\u89E3\u51B3\u65B9\u6CD5","slug":"\u89E3\u51B3\u65B9\u6CD5"},{"level":3,"title":"\u4F8B\u5B50\u89E3\u6790","slug":"\u4F8B\u5B50\u89E3\u6790"}],"relativePath":"handbook/vue/vue3_reactive.md"}'),e={name:"handbook/vue/vue3_reactive.md"},c=l('<h1 id="vue3-\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u539F\u7406-\u6E05\u9664\u526F\u4F5C\u7528\u51FD\u6570" tabindex="-1">vue3 \u54CD\u5E94\u5F0F\u7CFB\u7EDF\u539F\u7406-\u6E05\u9664\u526F\u4F5C\u7528\u51FD\u6570 <a class="header-anchor" href="#vue3-\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u539F\u7406-\u6E05\u9664\u526F\u4F5C\u7528\u51FD\u6570" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u672C\u7BC7\u6587\u7AE0\u4E3A\u9605\u8BFB\u300AVue.js \u8BBE\u8BA1\u4E0E\u5B9E\u73B0\u300B\u4E00\u4E66\u7B2C\u56DB\u7AE0\u300A\u54CD\u5E94\u7CFB\u7EDF\u7684\u4F5C\u7528\u5B9E\u73B0\u300B\u540E\u6240\u505A\u7684\u7B14\u8BB0</p></div><h2 id="\u54CD\u5E94\u5F0F\u6570\u636E\u7ED3\u6784" tabindex="-1">\u54CD\u5E94\u5F0F\u6570\u636E\u7ED3\u6784 <a class="header-anchor" href="#\u54CD\u5E94\u5F0F\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a></h2><p>\u5728 vue3 \u4E2D\uFF0C\u6574\u4E2A\u54CD\u5E94\u5F0F\u6570\u636E\u7ED3\u6784\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="'+p+'" alt="reactive-1"><img src="'+o+`" alt="reactive-2"></p><p>\u4E0B\u9762\uFF0C\u8BE6\u7EC6\u4ECB\u7ECD\u5982\u4F55\u6E05\u9664\u9057\u7559\u7684\u526F\u4F5C\u7528\u51FD\u6570\u8FD9\u4E00\u90E8\u5206\uFF1A</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> data </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">ok</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello, vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u5177\u4F53\u7684 get \u62E6\u622A\u548C set \u62E6\u622A\u53EF\u67E5\u770B\u4E66\u4E2D\u7684\u4EE3\u7801</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Proxy</span><span style="color:#A6ACCD;">(data</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#676E95;font-style:italic;">/*... */</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">effect</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">effectFn</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerText</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ok</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">text</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">not</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ok </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u8FD9\u4E00\u6BB5\u4EE3\u7801\u7684\u610F\u601D\u662F\uFF1A</p><p>ok \u4E3A true \u65F6\uFF0C\u9875\u9762\u4E0A\u5185\u5BB9\u4E3A hello, vue</p><p>\u5F53\u6211\u4EEC\u5C06 ok \u7684\u503C\u4FEE\u6539\u4E3A false \u540E\uFF0C\u9875\u9762\u4E0A\u7684\u503C\u4E3A &#39;not&#39;\u3002</p><p>\u7406\u60F3\u60C5\u51B5\u4E0B\uFF0C\u65E0\u8BBA\u5982\u4F55\u4FEE\u6539text\u7684\u503C\uFF0C\u5176\u5BF9\u5E94\u7684\u526F\u4F5C\u7528\u51FD\u6570\uFF08text\u5BF9\u5E94\u7684\u662F\u4E00\u4E2A\u526F\u4F5C\u7528\u51FD\u6570\u4F9D\u8D56\u96C6\u5408\uFF0C\u8FD9\u91CC\u7B80\u5355\u63CF\u8FF0\u4E3A\u526F\u4F5C\u7528\u51FD\u6570 effectFn\uFF09\u90FD\u4E0D\u4F1A\u518D\u6267\u884C\u3002</p><p>\u53EF\u4E8B\u5B9E\u4E0A\uFF0C\u5176\u526F\u4F5C\u7528\u51FD\u6570\u4ECD\u7136\u4F1A\u6267\u884C\u3002\u8FD9\u5C31\u662F\u526F\u4F5C\u7528\u51FD\u6570\u9057\u7559\u6240\u4EA7\u751F\u7684\u95EE\u9898</p><h2 id="\u89E3\u51B3\u65B9\u6CD5" tabindex="-1">\u89E3\u51B3\u65B9\u6CD5 <a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6CD5" aria-hidden="true">#</a></h2><p>\u8FD9\u4E2A\u95EE\u9898\u7684\u89E3\u51B3\u65B9\u6CD5\u5C31\u662F\uFF1A<strong>\u6BCF\u6B21\u5728\u526F\u4F5C\u7528\u51FD\u6570\u6267\u884C\u4E4B\u524D\uFF0C\u5148\u5C06\u8BE5\u526F\u4F5C\u7528\u51FD\u6570\u4ECE\u6240\u6709\u4E0E\u4E4B\u5173\u8054\u7684\u4F9D\u8D56\u96C6\u5408\u4E2D\u5220\u9664</strong></p><p>\u4E66\u4E2D\u6709\u8BE6\u7EC6\u63CF\u8FF0\uFF0C\u53EF\u67E5\u770B\u5BF9\u5E94\u7AE0\u8282</p><p>\u6211\u60F3\u8BF4\u7684\u662F\uFF0C\u8FD9\u91CC\u7684\u4ECE\u4F9D\u8D56\u96C6\u5408\u4E2D\u6E05\u9664\u526F\u4F5C\u7528\u51FD\u6570\uFF0C<strong>\u5E76\u4E0D\u662F\u5C06\u8BE5\u4F9D\u8D56\u96C6\u5408\u4E2D\u7684\u6240\u6709\u526F\u4F5C\u7528\u51FD\u6570\u5168\u90E8\u5220\u9664\uFF0C\u800C\u662F\u53EA\u5220\u9664\u5F53\u524D\u7684\u526F\u4F5C\u7528\u51FD\u6570</strong>\uFF0C\u8FD9\u662F\u6211\u5728\u770B\u4E66\u65F6\u6700\u7591\u60D1\u7684\u90E8\u5206</p><p>\u4ECE\u4E0A\u56FE\u4E2D\u53EF\u4EE5\u770B\u51FA\uFF0C\u952E\u503C\uFF08\u4F8B\u5982\uFF0Cobj.text\uFF09\u5BF9\u5E94\u7684\u662F\u4E00\u4E2Aset\u7ED3\u6784\uFF0C\u5176\u4E2D\u5305\u542B\u6709\u5F88\u591A\u4E2A\u526F\u4F5C\u7528\u51FD\u6570\uFF0C\u771F\u6B63\u8981\u6E05\u9664\u7684\u662F\u76F8\u5173\u4F9D\u8D56\u96C6\u5408\u4E2D\u7684\u5F53\u524D\u526F\u4F5C\u7528\u51FD\u6570</p><div class="language-js line-numbers-mode"><span class="copy"></span><div class="highlight-lines"><br><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br></div><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> effect </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">fn</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{})</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">effectFn</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">cleanup</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">effectFn</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u4E3A\u526F\u4F5C\u7528\u51FD\u6570\u6DFB\u52A0deps\u5C5E\u6027\uFF0C\u7528\u6765\u5B58\u50A8\u4E0E\u5176\u76F8\u5173\u7684\u526F\u4F5C\u7528\u51FD\u6570\u4F9D\u8D56\u96C6\u5408\uFF0C\u5176\u5B9E\u5C31\u662F\u56FE\u4E2D\u7684set\u7ED3\u6784</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">effectFn</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">deps</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">effectFn</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>s</p><div class="language-js line-numbers-mode"><span class="copy"></span><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><br><br></div><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u4F9D\u8D56\u6536\u96C6</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">track</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> key</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">activeEffect</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u4ECEbucket\u4E2D\u53D6\u51FA\u8BE5\u5BF9\u8C61\u5BF9\u5E94\u7684\u5B57\u6BB5\u51FD\u6570\u4F9D\u8D56</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">depsMap</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">bucket</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">depsMap</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">bucket</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">depsMap</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Map</span><span style="color:#F07178;">())</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u6839\u636E\u5BF9\u5E94\u7684\u5B57\u6BB5\uFF0C\u53D6\u51FA\u5BF9\u5E94\u7684\u526F\u4F5C\u7528\u51FD\u6570\u96C6\u5408</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">deps</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">depsMap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">deps</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">depsMap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">deps</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Set</span><span style="color:#F07178;">())</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u5F53\u8BFB\u53D6obj\u7684\u5C5E\u6027\u65F6\uFF0C\u4F1A\u5148\u5C06\u526F\u4F5C\u7528\u51FD\u6570\u6DFB\u52A0\u5230bucket\u4E2D</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">deps</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">activeEffect</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// activeEffect.deps \u662F\u5F53\u524D\u526F\u4F5C\u7528\u51FD\u6570\u7684\u4F9D\u8D56\u96C6\u5408\u6570\u7EC4</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u6570\u7EC4\u4E2D\u7684\u6BCF\u4E00\u9879\u662F\u4E00\u4E2A\u96C6\u5408\uFF0C\u8BE5\u96C6\u5408\u5C31\u662F\u4E0Ekey\u76F8\u5173\u7684\u526F\u4F5C\u7528\u51FD\u6570</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">activeEffect</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">deps</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">deps</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u518D\u901A\u8FC7 cleanup \u51FD\u6570\u6E05\u9664\u4F9D\u8D56\u96C6\u5408\u4E2D\u7684\u5F53\u524D\u7684\u526F\u4F5C\u7528\u51FD\u6570\uFF0C\u5C31\u53EF\u4EE5\u89E3\u51B3\u9057\u7559\u526F\u4F5C\u7528\u51FD\u6570\u7684\u95EE\u9898\u4E86</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u6E05\u9664\u4F9D\u8D56\u96C6\u5408\u4E2D\u7684\u526F\u4F5C\u7528\u51FD\u6570</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cleanup</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">effectFn</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">effectFn</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">deps</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">deps</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">effectFn</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">deps</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">deps</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">delete</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">effectFn</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">effectFn</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">deps</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u4F8B\u5B50\u89E3\u6790" tabindex="-1">\u4F8B\u5B50\u89E3\u6790 <a class="header-anchor" href="#\u4F8B\u5B50\u89E3\u6790" aria-hidden="true">#</a></h3><p>\u518D\u56DE\u5230\u6211\u4EEC\u6240\u4E3E\u7684\u4F8B\u5B50\u4E2D,\u8BE6\u7EC6\u63CF\u8FF0\u4E00\u4E0B\u6574\u4E2A\u8FC7\u7A0B</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> data </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">ok</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello, vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u5177\u4F53\u7684 get \u62E6\u622A\u548C set \u62E6\u622A\u53EF\u67E5\u770B\u4E66\u4E2D\u7684\u4EE3\u7801</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Proxy</span><span style="color:#A6ACCD;">(data</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#676E95;font-style:italic;">/*... */</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">effect</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">effectFn</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerText</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ok</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">text</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">not</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ok </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol><li>\u526F\u4F5C\u7528\u51FD\u6570\u6267\u884C\uFF0C\u8BFB\u53D6 <code>obj.ok</code> \u7684\u503C\uFF0C\u89E6\u53D1\u5BF9\u5E94\u7684 <code>get</code> \u62E6\u622A\u51FD\u6570\uFF0C<code>effectFn</code> \u88AB\u6536\u96C6\u5230 ok \u5BF9\u5E94\u7684 <code>set</code> \u4F9D\u8D56\u96C6\u5408\u4E2D\uFF0C\u540C\u65F6\uFF0C<code>effectFn.deps</code> \u4E5F\u5C06 ok \u5BF9\u5E94\u7684set\u4F9D\u8D56\u96C6\u5408(okSet)\u6DFB\u52A0\u8FDB\u53BB</li><li>\u8BFB\u53D6 <code>obj.text</code> \u7684\u503C\uFF0C\u89E6\u53D1\u5BF9\u5E94\u7684 get \u51FD\u6570\uFF0C<code>effectFn</code> \u88AB\u6536\u96C6\u5230 <code>text</code> \u5BF9\u5E94\u7684 <code>set</code> \u4F9D\u8D56\u96C6\u5408\u4E2D\uFF0C\u540C\u65F6\uFF0C<code>effectFn.deps</code> \u4E5F\u5C06 text \u5BF9\u5E94\u7684set\u4F9D\u8D56\u96C6\u5408(textSet)\u6DFB\u52A0\u8FDB\u53BB\u3002\u6B64\u65F6\uFF0C<code>effectFn.deps = [okSet, textSet]</code></li><li>\u5C06 ok \u8BBE\u7F6E\u4E3A <code>false</code>\uFF0C\u89E6\u53D1\u5BF9\u5E94\u7684 set \u62E6\u622A\u51FD\u6570\uFF0C\u6267\u884C effectFn \u526F\u4F5C\u7528\u51FD\u6570</li><li>\u9996\u5148\uFF0C\u5148\u6E05\u9664\u4F9D\u8D56\u3002\u904D\u5386 <code>effectFn.deps</code>, \u5C06 <code>effectFn</code> \u4ECE <code>okSet</code> \u548C <code>textSet</code> \u4E2D\u5220\u9664\uFF08\u8FD9\u662F\u89E3\u51B3\u526F\u4F5C\u7528\u51FD\u6570\u9057\u7559\u5173\u952E\u7684\u4E00\u6B65\uFF09</li><li>\u5176\u6B21\uFF0C\u8BFB\u53D6 <code>ok</code> \u7684\u503C\uFF0C\u5C06 <code>effectFn</code> \u6DFB\u52A0\u5230 <code>okSet</code> \u4E2D\u3002\u7531\u4E8E ok \u7684\u503C \u4E3A false\uFF0C\u6240\u4EE5\uFF0C\u4E0D\u4F1A\u8BFB\u53D6 <code>obj.text</code>\uFF0C\u5C31\u4E0D\u4F1A\u5C06 <code>effectFn</code> \u6DFB\u52A0\u5230 <code>textSet</code> \u4E2D</li><li>\u56E0\u6B64\uFF0C\u65E0\u8BBA\u5982\u4F55\u4FEE\u6539 text \u7684\u503C\uFF0C<code>effectFn</code> \u90FD\u4E0D\u4F1A\u88AB\u89E6\u53D1</li></ol>`,26),t=[c];function r(F,y,D,i,A,C){return a(),n("div",null,t)}var u=s(e,[["render",r]]);export{d as __pageData,u as default};