import{_ as s,c as n,o as a,d as l}from"./app.3d57fb3d.js";const i=JSON.parse('{"title":"\u865A\u62DF\u5217\u8868","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u865A\u62DF\u5217\u8868\u539F\u7406","slug":"\u865A\u62DF\u5217\u8868\u539F\u7406"},{"level":2,"title":"\u4EE3\u7801\u5B9E\u73B0","slug":"\u4EE3\u7801\u5B9E\u73B0"},{"level":2,"title":"\u5F85\u89E3\u51B3\u7684\u95EE\u9898","slug":"\u5F85\u89E3\u51B3\u7684\u95EE\u9898"}],"relativePath":"handbook/JAVASCRIPT/virtual_list.md"}'),p={name:"handbook/JAVASCRIPT/virtual_list.md"},o=l(`<h1 id="\u865A\u62DF\u5217\u8868" tabindex="-1">\u865A\u62DF\u5217\u8868 <a class="header-anchor" href="#\u865A\u62DF\u5217\u8868" aria-hidden="true">#</a></h1><h2 id="\u865A\u62DF\u5217\u8868\u539F\u7406" tabindex="-1">\u865A\u62DF\u5217\u8868\u539F\u7406 <a class="header-anchor" href="#\u865A\u62DF\u5217\u8868\u539F\u7406" aria-hidden="true">#</a></h2><h2 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1">\u4EE3\u7801\u5B9E\u73B0 <a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a></h2><p>ts + react</p><div class="language-tsx"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> React</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useEffect</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useRef</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useState</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./style.css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">VirtualList</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">listData</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">itemSize</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">screenHeight</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">bufferScale</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">listData</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">itemSize</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">screenHeight</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">listHeight</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">listData</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">itemSize</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">visibleCount</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ceil</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">screenHeight</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">itemSize</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">listRef</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useRef</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">HTMLDivElement</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">null</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">startIndex</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setStartIndex</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useState</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">endIndex</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setEndIndex</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useState</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">visibleCount</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">offset</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setOffset</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useState</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">showData</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setShowData</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useState</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">any</span><span style="color:#F07178;">[]</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;">([])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">handleScroll</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">scrollTop</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">listRef</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">current</span><span style="color:#89DDFF;">!.</span><span style="color:#A6ACCD;">scrollTop</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">// \u5F53\u524D\u6EDA\u52A8\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newStartIndex</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">floor</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">scrollTop</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">itemSize</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newEndIndex</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newStartIndex</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">visibleCount</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newOffset</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">scrollTop</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">scrollTop</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">%</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">itemSize</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">setStartIndex</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">newStartIndex</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">setEndIndex</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">newEndIndex</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">setOffset</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">newOffset</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">useEffect</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">aboveCount</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">min</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">startIndex</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">bufferScale</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">visibleCount</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">belowCount</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">min</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">listData</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">endIndex</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">bufferScale</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">visibleCount</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">realStartIndex</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">startIndex</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">aboveCount</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">realEndIndex</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">endIndex</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">belowCount</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newShowData</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">listData</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">realStartIndex</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">realEndIndex</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">setShowData</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">newShowData</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">startIndex</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">endIndex</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">listData</span><span style="color:#F07178;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">listRef</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">className</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">infinite-list-container</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">={{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> screenHeight </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">onScroll</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">handleScroll</span><span style="color:#89DDFF;">}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">className</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">infinite-list-phantom</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">={{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> listHeight </span><span style="color:#89DDFF;">}}&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">className</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">infinite-list</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">={{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">translate3d(0,</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">offset</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">px,0)</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">          showData</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> index</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">className</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">infinite-list-row</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">={{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> itemSize </span><span style="color:#89DDFF;">}} </span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">            )</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;"> &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> &gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  )</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6837\u5F0F\u6587\u4EF6</p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#FFCB6B;">ul</span><span style="color:#89DDFF;">,</span><span style="color:#FFCB6B;">li</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">list-style-type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">infinite-list-container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">infinite-list-phantom</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">z-index</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">infinite-list</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">infinite-list-row</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">text-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin-bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">28px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgb</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">224</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">222</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">222</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border-bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> solid gray</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5F85\u89E3\u51B3\u7684\u95EE\u9898" tabindex="-1">\u5F85\u89E3\u51B3\u7684\u95EE\u9898 <a class="header-anchor" href="#\u5F85\u89E3\u51B3\u7684\u95EE\u9898" aria-hidden="true">#</a></h2><ol><li>\u5217\u8868\u4E2D\u7684\u6BCF\u4E00\u9879\u9AD8\u5EA6\u4E0D\u786E\u5B9A\uFF0C\u5982\u4F55\u89E3\u51B3\uFF1F</li><li>\u5217\u8868\u4E2D\u7684\u6BCF\u4E00\u9879\u53EF\u4EE5\u52A0\u70B9\u6269\u5927\uFF0C\u5982\u4F55\u89E3\u51B3\uFF1F</li><li>\u5F53\u6BCF\u4E00\u884C\u6709\u591A\u4E2A\u5143\u7D20\u5982\u4F55\u89E3\u51B3\uFF1F</li></ol>`,9),e=[o];function t(c,r,F,y,D,C){return a(),n("div",null,e)}var d=s(p,[["render",t]]);export{i as __pageData,d as default};