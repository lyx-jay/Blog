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
        text: "WEBPACK",
        items: [
          {text: "webpack1", link: '/handbook/webpack/webpack1.md'}
        ]
      },
      {
        text: "REACT",
        items: [
        ]
      },
      {
        text: "VUE",
        items: [
          {text: "MVVM & MVC", link: '/handbook/vue/MVVM & MVC.md'},
          {text: "Life Circle", link: '/handbook/vue/Vue 生命周期.md'},
          {text: "Responsive Principle", link: '/handbook/vue/Vue响应式原理（双向数据绑定）.md'},
          {text: "Components Communication", link: '/handbook/vue/Vue 组件通信方法.md'},
          {text: "Computed Property", link: '/handbook/vue/Computed(计算属性) & watcher.md'},
          {text: "v-model", link: '/handbook/vue/V-Model.md'},
        ]
      },
      {
        text: "VITEST",
        items: [
        ]
      },
      {
        text: "PROJECTS",
        items: [
          {text: "Artist", link: '/handbook/Projects/Artist.md'},
          {text: "reactuse", link: '/handbook/Projects/reactuse.md'}
        ]
      },
    ]
  }
}