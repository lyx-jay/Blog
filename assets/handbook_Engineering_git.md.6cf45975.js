import{_ as e,c as t,o as a,a as i}from"./app.367176a3.js";const b=JSON.parse('{"title":"\u5E38\u7528 git \u547D\u4EE4\u96C6\u5408","description":"","frontmatter":{},"headers":[{"level":2,"title":"git stash","slug":"git-stash"},{"level":3,"title":"git stash","slug":"git-stash-1"},{"level":3,"title":"git stash pop","slug":"git-stash-pop"},{"level":2,"title":"\u4ECE\u8FDC\u7A0B\u4ED3\u5E93\u62C9\u53D6\u67D0\u4E00\u4E2A\u6307\u5B9A\u7684\u5206\u652F","slug":"\u4ECE\u8FDC\u7A0B\u4ED3\u5E93\u62C9\u53D6\u67D0\u4E00\u4E2A\u6307\u5B9A\u7684\u5206\u652F"},{"level":3,"title":"git clone -b \u5206\u652F\u540D","slug":"git-clone-b-\u5206\u652F\u540D"},{"level":3,"title":"git fetch","slug":"git-fetch"},{"level":2,"title":"\u5220\u9664\u5206\u652F","slug":"\u5220\u9664\u5206\u652F"},{"level":3,"title":"\u5220\u9664\u672C\u5730\u5206\u652F","slug":"\u5220\u9664\u672C\u5730\u5206\u652F"},{"level":3,"title":"\u5220\u9664\u8FDC\u7A0B\u5206\u652F","slug":"\u5220\u9664\u8FDC\u7A0B\u5206\u652F"},{"level":2,"title":"git merge","slug":"git-merge"},{"level":2,"title":"git branch","slug":"git-branch"},{"level":3,"title":"git branch -a","slug":"git-branch-a"}],"relativePath":"handbook/Engineering/git.md"}'),h={name:"handbook/Engineering/git.md"},d=i('<h1 id="\u5E38\u7528-git-\u547D\u4EE4\u96C6\u5408" tabindex="-1">\u5E38\u7528 git \u547D\u4EE4\u96C6\u5408 <a class="header-anchor" href="#\u5E38\u7528-git-\u547D\u4EE4\u96C6\u5408" aria-hidden="true">#</a></h1><h2 id="git-stash" tabindex="-1">git stash <a class="header-anchor" href="#git-stash" aria-hidden="true">#</a></h2><p><code>git stash</code> \u4F1A\u5C06\u5F53\u524D\u672A\u63D0\u4EA4\u7684\u4FEE\u6539\uFF08\u5305\u62EC\u6682\u5B58\u548C\u975E\u6682\u5B58\uFF09\u90FD\u4FDD\u5B58\u8D77\u6765\uFF0C \u7528\u4E8E\u540E\u7EED\u6062\u590D\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u3002</p><p>\u8BE5\u547D\u4EE4\u53EF\u4EE5\u5728\u5F88\u591A\u573A\u666F\u4E0B\u7528\u5230\uFF1A</p><ol><li>\u6BD4\u5982\uFF0C\u5F00\u53D1\u65F6\u5FD8\u8BB0\u521B\u5EFA\u65B0\u7684\u5206\u652F\uFF0C\u76F4\u63A5\u5728 <code>master</code> \u5206\u652F\u4E0A\u5F00\u53D1\u4E86\u4E00\u5927\u5806\u5185\u5BB9\u3002\u7A81\u7136\u60F3\u8D77\u6765\u8981\u68C0\u51FA\u4E00\u4E2A\u65B0\u7684\u5206\u652F\u3002\u3002\u3002\u600E\u4E48\u529E\uFF1F\u628A\u5F53\u524D\u4FEE\u6539\u7684\u6587\u4EF6\u590D\u5236\u4E00\u4EFD\uFF0C\u518D\u628A <code>master</code> \u5206\u652F\u6062\u590D\u539F\u6837\uFF1F\u8FD9\u6837\u505A\u597D\u6162\u5440\u3002\u8FD9\u65F6\uFF0C\u5C31\u53EF\u4EE5\u7528\u5230 <code>git stash</code> \u547D\u4EE4\u4E86</li></ol><h3 id="git-stash-1" tabindex="-1">git stash <a class="header-anchor" href="#git-stash-1" aria-hidden="true">#</a></h3><p><code>git stash</code> \u4F1A\u5C06\u5F53\u524D\u672A\u63D0\u4EA4\u7684\u4FEE\u6539\uFF08\u5305\u62EC\u6682\u5B58\u548C\u975E\u6682\u5B58\uFF09\u90FD\u4FDD\u5B58\u8D77\u6765\uFF0C \u7528\u4E8E\u540E\u7EED\u6062\u590D\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u3002\u8FD9\u6837\uFF0C\u5F53\u524D\u7684\u5DE5\u4F5C\u76EE\u5F55\u5C31\u5E72\u51C0\u4E86</p><p>PS\uFF1A<code>stash</code> \u662F\u672C\u5730\u7684\uFF0C\u4E0D\u4F1A\u901A\u8FC7 <code>git push</code> \u4E0A\u4F20\u5230\u8FDC\u7AEF</p><p>\u5B9E\u9645\u5E94\u7528\u4E2D\u53EF\u4EE5\u7ED9\u6BCF\u4E00\u4E2A <code>stash</code> \u6DFB\u52A0\u4E00\u4E2A <code>message</code>\uFF0C \u7528\u4E8E\u8BB0\u5F55\u7248\u672C\uFF0C\u4F7F\u7528 <code>git stash save</code> \u53D6\u4EE3 <code>git stash</code> \u547D\u4EE4</p><h3 id="git-stash-pop" tabindex="-1">git stash pop <a class="header-anchor" href="#git-stash-pop" aria-hidden="true">#</a></h3><p>\u53EF\u4EE5\u901A\u8FC7\u8BE5\u547D\u4EE4\u6062\u590D\u4E4B\u524D\u7F13\u5B58\u7684\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u4E5F\u5C31\u662F\u4E4B\u524D\u4FEE\u6539\u7684\u6587\u4EF6\u3002\u8BE5\u547D\u4EE4\u4F1A\u5C06\u7F13\u5B58\u5806\u6808\u4E2D\u7684\u7B2C\u4E00\u4E2A <code>stash</code> \u5220\u9664\uFF0C\u5E76\u5C06\u5BF9\u5E94\u4FEE\u6539\u5E94\u7528\u5230\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55</p><p>\u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>git stash apply</code> \u547D\u4EE4\uFF0C\u5C06\u7F13\u5B58\u5806\u6808\u4E2D\u7684 <code>stash</code> \u591A\u6B21\u5E94\u7528\u5230\u5DE5\u4F5C\u76EE\u5F55\u4E2D\uFF0C\u4F46\u5E76\u4E0D\u5220\u9664 <code>stash</code> \u62F7\u8D1D</p><h2 id="\u4ECE\u8FDC\u7A0B\u4ED3\u5E93\u62C9\u53D6\u67D0\u4E00\u4E2A\u6307\u5B9A\u7684\u5206\u652F" tabindex="-1">\u4ECE\u8FDC\u7A0B\u4ED3\u5E93\u62C9\u53D6\u67D0\u4E00\u4E2A\u6307\u5B9A\u7684\u5206\u652F <a class="header-anchor" href="#\u4ECE\u8FDC\u7A0B\u4ED3\u5E93\u62C9\u53D6\u67D0\u4E00\u4E2A\u6307\u5B9A\u7684\u5206\u652F" aria-hidden="true">#</a></h2><p>\u5E73\u65F6\u5728\u505A\u9879\u76EE\u65F6\uFF0C\u7ECF\u5E38\u9700\u8981\u62C9\u53D6\u8FDC\u7A0B\u4ED3\u5E93\u4E2D\u7684\u67D0\u4E2A\u6307\u5B9A\u5206\u652F\u3002\u6709\u4E09\u79CD\u65B9\u5F0F\u53EF\u4EE5\u5B9E\u73B0\u8FD9\u4E00\u76EE\u6807</p><h3 id="git-clone-b-\u5206\u652F\u540D" tabindex="-1">git clone -b \u5206\u652F\u540D <a class="header-anchor" href="#git-clone-b-\u5206\u652F\u540D" aria-hidden="true">#</a></h3><p>\u8BE5\u547D\u4EE4\u53EF\u4EE5\u5C06\u8FDC\u7A0B\u4ED3\u5E93\u4E2D\u7684\u67D0\u4E00\u5206\u652F\u62C9\u53D6\u5230\u672C\u5730\uFF0C\u4E14\u672C\u5730\u5206\u652F\u548C\u8FDC\u7A0B\u5206\u652F\u540C\u540D</p><p>\u8BE5\u547D\u4EE4\u5E76\u6CA1\u6709\u5C06\u8FDC\u7A0B\u4ED3\u5E93 clone \u4E0B\u6765\uFF0C\u800C\u662F\u76F4\u63A5\u8FDB\u5165\u5230\u4E86\u5206\u652F\u6240\u5728\u7684\u76EE\u5F55\u62C9\u53D6\u4EE3\u7801</p><h3 id="git-fetch" tabindex="-1">git fetch <a class="header-anchor" href="#git-fetch" aria-hidden="true">#</a></h3><p>\u4F7F\u7528 <code>git fetch</code> \u547D\u4EE4\u65F6\uFF0C\u9700\u8981\u5148\u5C06\u8FDC\u7A0B\u7684\u4ED3\u5E93\u514B\u9686\u5230\u672C\u5730\uFF0C\u7136\u540E\u5728\u6267\u884C<code>git fetch</code> \u547D\u4EE4\u3002\u8BE5\u547D\u4EE4\u6267\u884C\u5B8C\u4EE5\u540E\u8FD8\u662F\u5904\u5728 <code>master</code> \u4E3B\u5206\u652F\u7684\uFF0C\u5982\u679C\u8FDB\u53BB\u76EE\u5F55\u6CA1\u6709\u53D1\u73B0\u60F3\u8981\u62C9\u53D6\u7684\u4ED3\u5E93\u6587\u4EF6\u3002\u6B64\u65F6\u5E76\u4E0D\u662F <code>git fetch</code> \u547D\u4EE4\u6CA1\u6709\u6267\u884C\uFF0C\u800C\u662F\u6211\u4EEC\u8FD8\u6CA1\u6709\u5207\u6362\u5230\u6211\u4EEC\u60F3\u8981\u62C9\u53D6\u7684\u5206\u652F\u4E0A\uFF0C\u9700\u8981\u6211\u4EEC\u6267\u884C <code>git checkout</code> \u547D\u4EE4\u5207\u6362\u5230\u6211\u4EEC\u60F3\u8981\u62C9\u53D6\u7684\u5206\u652F\u4E0A\u3002</p><ol><li><p>\u62C9\u53D6\u6574\u4E2A\u8FDC\u7A0B\u4EE3\u7801\u5E93 <code>git clone url</code></p></li><li><p><code>cd \u76EE\u5F55</code></p></li><li><p>\u6267\u884Cgit fetch\u547D\u4EE4\uFF0C\u5C06\u8FDC\u7A0B\u4ED3\u5E93\u7684\u6240\u6709\u5206\u652F\u62F7\u8D1D\u5230\u672C\u5730\u4ED3\u5E93 <code>git fetch</code></p></li><li><p>\u6267\u884C <code>git checkout &lt;\u5206\u652F\u540D\u79F0&gt;</code> \u547D\u4EE4\uFF0C\u5207\u6362\u5230\u6211\u4EEC\u60F3\u8981\u62C9\u53D6\u7684\u6307\u5B9A\u67D0\u4E00\u4E2A\u5206\u652F\u7684\u672C\u5730\u5206\u652F</p></li></ol><h2 id="\u5220\u9664\u5206\u652F" tabindex="-1">\u5220\u9664\u5206\u652F <a class="header-anchor" href="#\u5220\u9664\u5206\u652F" aria-hidden="true">#</a></h2><h3 id="\u5220\u9664\u672C\u5730\u5206\u652F" tabindex="-1">\u5220\u9664\u672C\u5730\u5206\u652F <a class="header-anchor" href="#\u5220\u9664\u672C\u5730\u5206\u652F" aria-hidden="true">#</a></h3><p><code>git branch -d local_branch-name</code></p><h3 id="\u5220\u9664\u8FDC\u7A0B\u5206\u652F" tabindex="-1">\u5220\u9664\u8FDC\u7A0B\u5206\u652F <a class="header-anchor" href="#\u5220\u9664\u8FDC\u7A0B\u5206\u652F" aria-hidden="true">#</a></h3><p><code>git </code></p><h2 id="git-merge" tabindex="-1">git merge <a class="header-anchor" href="#git-merge" aria-hidden="true">#</a></h2><p>\u5206\u652F\u5408\u5E76\u9700\u8981\u4E24\u6B65\uFF0C\u4F8B\u5982\uFF0C\u60F3\u8981\u5C06 A \u5206\u652F\u5408\u5E76\u5230 B \u5206\u652F</p><ol><li><p>\u8FDB\u5165\u76EE\u6807\u5206\u652F B</p></li><li><p>git merge A</p></li></ol><h2 id="git-branch" tabindex="-1">git branch <a class="header-anchor" href="#git-branch" aria-hidden="true">#</a></h2><h3 id="git-branch-a" tabindex="-1">git branch -a <a class="header-anchor" href="#git-branch-a" aria-hidden="true">#</a></h3><p><code>git branch -a</code> \u53EF\u4EE5\u67E5\u770B\u8FDC\u7A0B\u5206\u652F</p><p>\u8FDC\u7A0B\u5206\u652F\u7528\u7EA2\u8272\u5B57\u4F53\u5C55\u793A</p><p>\u672C\u5730\u5206\u652F\u7528\u767D\u8272\u5B57\u4F53\u5C55\u793A</p>',33),c=[d];function s(o,r,l,g,n,p){return a(),t("div",null,c)}var f=e(h,[["render",s]]);export{b as __pageData,f as default};
