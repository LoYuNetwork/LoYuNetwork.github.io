export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "navbar": "boolean",
    "heroImage": "/assets/images/logo.jpg",
    "heroText": "洛 圄 文 档",
    "tagline": "我不曾怀揣希望，我不会全部遗忘。我不知是否值得，我所思不知于此。我无惧前路何往，我与最后的赌注。",
    "actionText": "开始阅读 →",
    "actionLink": "/docs/",
    "features": [
      {
        "title": "有感",
        "details": "颅内高潮，随笔即感"
      },
      {
        "title": "技术",
        "details": "会记录一些我在搭建网站、写程序时的所见所闻"
      },
      {
        "title": "教程",
        "details": "记录一些小玩意的使用教程"
      }
    ],
    "footer": "© 2019-2021 by LoYuNetwork . All rights reserved."
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "readme.md",
  "git": {
    "createdTime": 1629631240000,
    "updatedTime": 1629631240000,
    "contributors": [
      {
        "name": "TNXG",
        "email": "mcminecraftmc@126.com",
        "commits": 1
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
