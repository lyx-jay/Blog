import{_ as s,c as a,o as n,a as l}from"./app.644e59e4.js";const A=JSON.parse('{"title":"\u6A2A\u5411\u7011\u5E03\u6D41\u5E03\u5C40","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6A2A\u5411\u7011\u5E03\u6D41\u5E03\u5C40","slug":"\u6A2A\u5411\u7011\u5E03\u6D41\u5E03\u5C40"},{"level":3,"title":"\u5206\u6790","slug":"\u5206\u6790"},{"level":3,"title":"\u65B9\u6848","slug":"\u65B9\u6848"}],"relativePath":"handbook/css/horizontal_waterfall.md"}'),p={name:"handbook/css/horizontal_waterfall.md"},o=l(`<h2 id="\u6A2A\u5411\u7011\u5E03\u6D41\u5E03\u5C40" tabindex="-1">\u6A2A\u5411\u7011\u5E03\u6D41\u5E03\u5C40 <a class="header-anchor" href="#\u6A2A\u5411\u7011\u5E03\u6D41\u5E03\u5C40" aria-hidden="true">#</a></h2><p>\u5728\u6392\u5217\u56FE\u7247\u65F6\uFF0C\u53EF\u80FD\u4F1A\u9047\u5230\u8FD9\u6837\u7684\u573A\u666F\uFF1A</p><p>\u56FE\u7247\u9AD8\u5EA6\u4E00\u81F4\uFF0C\u4F46\u5BBD\u5EA6\u4E0D\u4E00\u81F4\uFF0C\u8981\u4F7F\u56FE\u7247\u9519\u843D\u7684\u6392\u5E03\u5728\u4E00\u8D77\uFF0C\u4E14\u6BCF\u4E00\u884C\u4E0D\u4F1A\u4EA7\u751F\u591A\u4F59\u7684\u7A7A\u767D\u7A7A\u95F4\uFF08\u7C7B\u4F3C\u767E\u5EA6\u56FE\u7247\u7684\u5E03\u5C40\uFF09</p><p>\u90A3\u4E48\uFF0C\u6211\u4EEC\u8BE5\u600E\u6837\u53BB\u5904\u7406\u8FD9\u4E2A\u5E03\u5C40\u5462\uFF1F</p><h3 id="\u5206\u6790" tabindex="-1">\u5206\u6790 <a class="header-anchor" href="#\u5206\u6790" aria-hidden="true">#</a></h3><p>\u5E38\u7528\u7684\u5E03\u5C40\u65B9\u6848\u6709\u4E24\u79CD\uFF1Aflex \u5E03\u5C40 \u548C grid \u5E03\u5C40</p><p>grid \u5E03\u5C40\u9002\u7528\u4E8E <strong>\u53EF\u4EE5\u77E5\u9053\u5177\u4F53\u5212\u5206\u4E3A\u51E0\u5217\u6216\u51E0\u884C\u7684\u573A\u666F</strong></p><p>flex \u5E03\u5C40\u9002\u7528\u4E8E\u4E0D\u786E\u5B9A\u5217\u6570\u6216\u884C\u6570\u7684\u573A\u666F</p><p>\u56E0\u6B64\uFF0C\u91C7\u7528 flex \u5E03\u5C40\u53EF\u4EE5\u5904\u7406\u8FD9\u79CD\u56FE\u7247\u6392\u5217</p><h3 id="\u65B9\u6848" tabindex="-1">\u65B9\u6848 <a class="header-anchor" href="#\u65B9\u6848" aria-hidden="true">#</a></h3><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">img-wrapper-list</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  flex-wrapper</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">wrap</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* \u5F53\u5143\u7D20\u5360\u6EE1\u4E00\u884C\u65F6\uFF0C\u53EF\u4EE5\u81EA\u52A8\u6362\u884C */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* padding \u53EF\u4EE5\u6839\u636E\u5177\u4F53\u9879\u76EE\u8BBE\u5B9A */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">img-wrapper-list</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">after</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* \u7528\u4E8E\u6700\u540E\u4E00\u884C\u7684\u4F4D\u7F6E\u663E\u793A\u7A7A\u767D */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">flex-grow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9999</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* img-wrapper \u4E3A\u5305\u88F9\u56FE\u7247\u7684\u76D2\u5B50 */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">img-wrapper-list</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">img-wrapper</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">flex-grow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* \u6839\u636E\u6BD4\u4F8B\u8BA1\u7B97\u6BCF\u4E2A\u56FE\u7247\u7B49\u5206\u5269\u4F59\u7A7A\u95F4 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">hidden</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* \u628A\u6BCF\u4E2A\u76D2\u5B50\u591A\u4F59\u7684\u90E8\u5206\u7ED9\u5305\u88F9\u8D77\u6765 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  .img {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">170px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">min-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* \u8BA9\u56FE\u7247\u5145\u6EE1\u7236\u7EA7\u6807\u7B7E\u7684\u5BBD\u5EA6 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">object-fit</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">cover</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u6837\u5C31\u53EF\u4EE5\u5B9E\u73B0\u6A2A\u5411\u7011\u5E03\u6D41\u5E03\u5C40</p><p>\u4F46\u662F\uFF0C\u6BCF\u4E2A\u76D2\u5B50\u8BBE\u7F6E\u4E3Aflex-grow\u4E3A1\uFF0C\u76D2\u5B50\u4F1A\u5747\u5206\u5269\u4F59\u7684\u7A7A\u95F4\uFF0C\u4E5F\u5C31\u662F\u8BF4\u6BCF\u4E2A\u56FE\u7247\u5BBD\u5EA6\u90FD\u4F1A\u589E\u52A0\u76F8\u540C\u7684\u50CF\u7D20</p><p>\u8FD9\u6837\u4F1A\u6539\u53D8\u56FE\u7247\u7684\u5BBD\u9AD8\u6BD4</p><p>\u56E0\u6B64\uFF0C\u4E3A\u4E86\u8BA9\u56FE\u7247\u7684\u5BBD\u9AD8\u6BD4\u4E0D\u53D1\u751F\u53D8\u5316\uFF0C\u53EF\u4EE5\u6309\u7167<strong>\u56FE\u7247\u7684\u5BBD\u9AD8\u6BD4\u74DC\u5206\u5269\u4F59\u7A7A\u95F4</strong></p>`,15),e=[o];function t(r,c,D,C,y,i){return n(),a("div",null,e)}var d=s(p,[["render",t]]);export{A as __pageData,d as default};
