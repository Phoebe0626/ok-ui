module.exports = {
  title: 'Ok-ui',
  description: '一套基于 Vue2 开发的 UI 组件库',
  base: '/ok-ui/',
  themeConfig: {
    displayAllHeaders: true,
    smoothScroll: true,
    nav: [
      { text: '主页', link: '/' },
      { text: 'Github', link: 'https://github.com/Phoebe0626/ok-ui' }
    ],
    sidebar: [
      {
        title: '使用',
        collapsable: false,
        children: [
          {
            title: '安装',
            path: '/components/install/'
          },
          {
            title: '快速上手',
            path: '/components/get-started/'
          }
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          {
            title: '基础',
            collapsable: false,
            path: '/components/basic/'
          },
          {
            title: '表单',
            collapsable: false,
            path: '/components/form/'
          },
          {
            title: '导航',
            collapsable: false,
            path: '/components/navigation/'
          },
          {
            title: '视图',
            collapsable: false,
            path: '/components/others/'
          }
        ]
      }
    ]
  }
}