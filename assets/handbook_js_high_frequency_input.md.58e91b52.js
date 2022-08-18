import{_ as s,c as n,o as a,a as l}from"./app.0a255629.js";const i=JSON.parse('{"title":"\u7528\u6237\u9AD8\u9891\u8F93\u5165\u573A\u666F\u4E0B\u7684\u4F18\u5316","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9632\u6296\u5904\u7406","slug":"\u9632\u6296\u5904\u7406"},{"level":2,"title":"\u5982\u4F55\u53D6\u6D88\u4E0A\u6B21\u8BF7\u6C42\uFF1F","slug":"\u5982\u4F55\u53D6\u6D88\u4E0A\u6B21\u8BF7\u6C42\uFF1F"}],"relativePath":"handbook/js/high_frequency_input.md"}'),p={name:"handbook/js/high_frequency_input.md"},o=l(`<h1 id="\u7528\u6237\u9AD8\u9891\u8F93\u5165\u573A\u666F\u4E0B\u7684\u4F18\u5316" tabindex="-1">\u7528\u6237\u9AD8\u9891\u8F93\u5165\u573A\u666F\u4E0B\u7684\u4F18\u5316 <a class="header-anchor" href="#\u7528\u6237\u9AD8\u9891\u8F93\u5165\u573A\u666F\u4E0B\u7684\u4F18\u5316" aria-hidden="true">#</a></h1><p>\u5728\u65E5\u5E38\u5F00\u53D1\u4E2D\uFF0Cinput \u6846\u9AD8\u9891\u8F93\u5165\u662F\u6211\u4EEC\u7ECF\u5E38\u9047\u5230\u7684\u4E00\u4E2A\u573A\u666F\uFF0C\u90A3\u4E48\u8BE5\u573A\u666F\u4E0B\u7684\u4F18\u5316\u601D\u8DEF\u662F\u4EC0\u4E48\u5462\uFF1F</p><p>\u7528\u6237\u9AD8\u9891\u8F93\u5165\uFF0C\u90A3\u4E48\u9020\u6210\u7684\u540E\u679C\u53EF\u80FD\u6709\u4E24\u4E2A\uFF1A</p><ol><li><p>\u6BCF\u8F93\u5165\u4E00\u4E2A\u5B57\u7B26\uFF0C\u5C31\u4F1A\u53D1\u9001\u4E00\u4E2A\u7F51\u7EDC\u8BF7\u6C42\u3002\u4F46\u4E8B\u5B9E\u4E0A\uFF0C\u7528\u6237\u7684\u6BCF\u4E00\u6B21\u8F93\u5165\u5E76\u4E0D\u4EE3\u8868\u4ED6\u771F\u6B63\u60F3\u8981\u641C\u7D22\u7684\u5185\u5BB9\uFF0C\u6709\u53EF\u80FD\u6700\u540E\u4E00\u6B21\u624D\u662F\u771F\u6B63\u60F3\u8981\u8BF7\u6C42\u7684\u5185\u5BB9\uFF0C\u8FD9\u4E2A\u95EE\u9898\u7684\u672C\u8D28\u5B9E\u9645\u4E0A\u662F<strong>\u5982\u4F55\u51B3\u5B9A\u8BF7\u6C42\u89E6\u53D1\u7684\u65F6\u673A</strong>\u3002</p></li><li><p>\u7528\u6237\u6210\u529F\u53D1\u9001\u8BF7\u6C42A\uFF0C\u4F46\u5728A\u8BF7\u6C42\u8FD8\u672A\u8FD4\u56DE\u65F6\uFF0C\u53C8\u53D1\u51FA\u4E86\u8BF7\u6C42B\u3002\u7528\u6237\u60F3\u8981\u7684\u662F\u8BF7\u6C42B\u7684\u7ED3\u679C\uFF0C\u4F46\u662F\u5374\u8FD4\u56DE\u4E86\u8BF7\u6C42A\u7684\u7ED3\u679C\u3002\u8FD9\u79CD\u60C5\u51B5\u5C31\u53EF\u80FD\u9020\u6210\u7528\u6237\u62FF\u4E0D\u5230\u6700\u540E\u8BF7\u6C42\u7684\u7ED3\u679C\uFF0C\u6211\u4EEC\u8981\u89E3\u51B3\u7684\u7B2C\u4E8C\u4E2A\u95EE\u9898\u5C31\u662F<strong>\u5982\u4F55\u786E\u4FDD\u7528\u6237\u62FF\u5230\u6B63\u786E\u7684\u8BF7\u6C42\u7ED3\u679C</strong>\u3002</p></li></ol><p>\u5BF9\u4E8E\u4EE5\u4E0A\u4E24\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4ECE\u4E24\u4E2A\u65B9\u9762\u89E3\u51B3\uFF1A</p><ol><li><p>\u89E6\u53D1\u65F6\u673A\u95EE\u9898\u3002\u4F7F\u7528 debounce \u5BF9\u8F93\u5165\u4E8B\u4EF6\u8FDB\u884C\u9632\u6296\u5904\u7406\uFF0C\u907F\u514D\u591A\u6B21\u53D1\u51FA\u8BF7\u6C42\u3002</p></li><li><p>\u5728\u53D1\u51FA\u4E00\u4E2A\u7F51\u7EDC\u8BF7\u6C42\u540E\uFF0C\u82E5\u672A\u6536\u5230\u54CD\u5E94\u4E4B\u524D\uFF0C\u53C8\u53D1\u51FA\u4E86\u65B0\u7684\u8BF7\u6C42\uFF0C\u90A3\u4E48\u5C31\u53D6\u6D88\uFF08abort\uFF09\u4E0A\u4E00\u4E2A\u8BF7\u6C42\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u4FDD\u8BC1\u7528\u6237\u62FF\u5230\u7684\u7ED3\u679C\u662F\u6700\u540E\u53D1\u51FA\u7684\u8BF7\u6C42\u3002</p></li></ol><h2 id="\u9632\u6296\u5904\u7406" tabindex="-1">\u9632\u6296\u5904\u7406 <a class="header-anchor" href="#\u9632\u6296\u5904\u7406" aria-hidden="true">#</a></h2><p>\u7F51\u7EDC\u4E0A\u5173\u4E8E\u9632\u6296\u7684\u6587\u7AE0\u6709\u5F88\u5BF9\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u4ED4\u7EC6\u89E3\u91CA\u4E86\u3002</p><p>\u53EF\u4EE5\u53C2\u8003 \u51B4\u7FBD\u5927\u4F6C\u7684\u6587\u7AE0<a href="https://juejin.cn/post/6844903480239325191" target="_blank" rel="noopener noreferrer">JavaScript\u4E13\u9898\u4E4B\u8DDF\u7740underscore\u5B66\u9632\u6296 </a></p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">debounce</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">fn</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> delay</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">context</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">args</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arguments</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">clearTimeout</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">fn</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">delay</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5982\u4F55\u53D6\u6D88\u4E0A\u6B21\u8BF7\u6C42\uFF1F" tabindex="-1">\u5982\u4F55\u53D6\u6D88\u4E0A\u6B21\u8BF7\u6C42\uFF1F <a class="header-anchor" href="#\u5982\u4F55\u53D6\u6D88\u4E0A\u6B21\u8BF7\u6C42\uFF1F" aria-hidden="true">#</a></h2><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> redundantRequests </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> successfulRequests </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> fakeApi </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://api/xxxx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> auto </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">autocomplete</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> controller</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> handleKeydown </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">controller</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">controller</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">controller</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">controller</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">abort</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">AbortController</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">controller</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">AbortController</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">signal</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">controller</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">signal</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">fetch</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">fakeApi</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">signal</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">response</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">response</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">response</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">response</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">json</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">successfulRequests</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">successful</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">textContent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">successfulRequests</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> \u8BF7\u6C42\u6210\u529F</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">li</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">li</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">li</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHTML</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">&lt;li&gt;&lt;span&gt;</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">successfulRequests</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> \u8BF7\u6C42\u5185\u5BB9\u4E3A\uFF1A&lt;/span&gt;</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">&lt;/li&gt;</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">autocompleteMenu</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">li</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">controller</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">catch</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">AbortError</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">redundantRequests</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">redundant</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">textContent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">redundantRequests</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> uneccessary requests cancelled</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">li</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">li</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">li</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHTML</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">&lt;li&gt;&lt;span&gt;</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">redundantRequests</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> \u53D6\u6D88\u5185\u5BB9\u4E3A\uFF1A&lt;/span&gt;</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">&lt;/li&gt;</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">li</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">auto</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">keydown</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">debounce</span><span style="color:#A6ACCD;">(handleKeydown</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,12),e=[o];function t(c,r,F,y,D,A){return a(),n("div",null,e)}var u=s(p,[["render",t]]);export{i as __pageData,u as default};
