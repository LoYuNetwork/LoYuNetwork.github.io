module.exports = {
  locales: {
    "/": {
      lang: "zh-CN",
      title: "洛圄网络",
      description: "洛圄网络的综合性网站",
    },
  },
  head: [
    ["link", { 
      rel: "icon", 
      href: "/assets/images/logo.jpg" 
    }
  ],
],
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/plugin-prismjs',{
      preloadLanguages: ['markdown', 'jsdoc', 'yaml','html','javascript', 'css','php'],
    },
    '@vuepress/plugin-git',{
      createdTime: true,
      updatedTime: true,
      contributors: true,
    },
    '@vuepress/plugin-medium-zoom',{
      selector: ':not(a) > img',
      delay: 2000,
    },
  ],
  themeConfig: {
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
          '链接被黑蛇吃掉了呢',
          '哎？小刻，那个链接不能吃！',
        ],
        backToHome: '返回首页',
        docsRepo: 'https://github.com/LoYuNetwork/LoYuNetwork.github.io',
        docsBranch: 'master',
        toggleDarkMode: '切换到夜间模式',
        toggleSidebar: '切换侧边栏',
        editLink: false,
        contributors: false,
        logo: './assets/images/logo.jpg',
        base: "./",
        lastUpdated: true,
        lastUpdatedText: '最后更新于',
        sidebarDepth: 1,
        navbar: [
          { text: '首页', link: '/' },
          { text: '教程', link: '/helper/' },
          { text: '小文章', link: '/article/' },
          { text: '技术', link: '/skill/' },
          { text: '关于', link: '/about/' },
          { text: '鸣谢', link: '/thanks/' },
          { text: '友情链接', children: [{ text: "洛圄网络", link:"https://www.loyunet.cn"}, { text: "云游科社", link:"https://www.cwtc.xyz"}]},
        ],
    sidebar: {
      '/helper/xineyc/': [
        {
          text: '星语帮助文档',
          children: [
             { text: '首页', link: '/helper/xineyc/readme.md' },
             { text: '运行状态', link: '/helper/xineyc/运行状态.md'},
             { text: '明日方舟', link: '/helper/xineyc/明日方舟.md'},
             { text: '狗屁不通', link: '/helper/xineyc/狗屁不通.md'},
             { text: '随机图片', link: '/helper/xineyc/随机图片.md'},
             { text: '一言x报时', link: '/helper/xineyc/一言x报时.md'},
             { text: 'MineCraft服务器状态获取', link: '/helper/xineyc/mc服务器状态获取.md'},
             { text: '点歌', link: '/helper/xineyc/点歌.md'},
             { text: '尾页', link: '/helper/xineyc/尾页.md' },
            ],
        },
      ],
    },
  },
}