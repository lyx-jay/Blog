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
          {text: "MVVM & MVC", link: '/handbook/vue/MVVM_MVC.md'},
          {text: "Life Circle", link: '/handbook/vue/Vue_life_circle.md'},
          {text: "Responsive Principle", link: '/handbook/vue/Vue_Responsive_Principle.md'},
          {text: "Components Communication", link: '/handbook/vue/Vue_Components_Communication.md'},
          {text: "Computed Property", link: '/handbook/vue/Computed_watcher.md'},
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