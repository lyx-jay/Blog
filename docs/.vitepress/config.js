export default {
  title: "VitePress",
  description: "Write My Mind",
  base: "/Blog",
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lyx-jay' },
      { text: '掘金', link: '/' },
      { text: '思否', link: '/' },
    ],
    sidebar: [
      {
        text: "JavaScript基础",
        collapsible:true,
        collapsed:true,
        items: [
          {text: '图片懒加载', link:'/handbook/js/img_lazy_load.md'},
          {text: '高频输入事件优化', link: /handbook/js/high_frequency_input.md}
        ]
      },
      {
        text: "WEBPACK",
        collapsible: true,
        collapsed: true,
        items: [
          {text: "webpack1", link: '/handbook/webpack/webpack1.md'}
        ]
      },
      {
        text: "REACT",
        collapsible: true,
        collapsed: true,
        items: [
          {text: "JSX", link: "/handbook/react/JSX.md"},
          {text: "Context", link: "/handbook/react/Context.md"},
          {text: "Higher-Order Components", link: "/handbook/react/HOC.md"},
          {text: "ErrorBoundary", link: "/handbook/react/ErrorBoundary.md"},
          {text: "Uncontrolled Components", link: "/handbook/react/Uncontrolled_Components.md"},
          {text: "组件内容补充", link: "/handbook/react/Components_supplement.md"},
          {text: "React 架构设计", link: "/handbook/react/React_Architecture.md"},
          {text: "Redux", link: "/handbook/react/Redux.md"},
        ]
      },
      {
        text: "VUE",
        collapsible: true,
        collapsed: true,
        items: [
          {text: "MVVM & MVC", link: '/handbook/vue/MVVM_MVC.md'},
          {text: "Life Circle", link: '/handbook/vue/Vue_life_circle.md'},
          {text: "Responsive Principle", link: '/handbook/vue/Vue_Responsive_Principle.md'},
          {text: "Components Communication", link: '/handbook/vue/Vue_Components_Communication.md'},
          {text: "Computed Property", link: '/handbook/vue/Computed_watcher.md'},
          {text: "v-model", link: '/handbook/vue/V-Model.md'},
        ]
      },
      {
        text: "TYPESCRIPT",
        collapsible: true,
        collapsed: true,
        items: [
          {text: "原始类型与对象类型", link: '/handbook/typescript/original_object_type.md'}
        ]
      },
      {
        text: "PROJECTS",
        collapsible: true,
        collapsed: true,
        items: [
          {text: "Artist", link: '/handbook/Projects/Artist.md'},
          {text: "reactuse", link: '/handbook/Projects/reactuse.md'}
        ]
      },
      {
        text: "网络基础知识",
        collapsible: true,
        collapsed: true,
        items: [
          {text: "使用Promise封装Ajax", link: '/handbook/basic/promise_ajax.md'},
        ]
      },
      {
        text: "常见CSS实例",
        collapsible: true,
        collapsed: true,
        items: [
          {text: "CSS-横向瀑布流布局", link: '/handbook/css/horizontal_waterfall.md'},
          {text: 'stylelint-规范CSS', link: '/handbook/css/stylelint.md'}
        ]
      },
    ]
  }
}