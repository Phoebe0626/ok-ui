module.exports = {
  title: 'Ok-ui',
  description: '一套基于 Vue2 开发的 UI 组件库',
  base: '/ok-ui/',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: 'Github', link: 'https://github.com/Phoebe0626/ok-ui' }
    ],
    sidebar: [
      {
        title: '使用',
        collapsable: false,
        children: ['/install/', '/get-started/']
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          {
            title: '基础',
            collapsable: true,
            children: [
              '/components/icon.md',
              '/components/button.md',
              '/components/link.md'
            ]
          },
          {
            title: '表单',
            collapsable: true,
            children: [
              '/components/input.md',
              '/components/radio.md',
              '/components/checkbox.md',
              '/components/select.md',
              '/components/switch.md',
              '/components/form.md',
            ]
          },
          {
            title: '导航',
            collapsable: true,
            children: ['/components/tabs.md']
          },
          {
            title: '视图',
            collapsable: true,
            children: ['/components/dialog.md']
          }
        ]
      }
    ]
  }
}