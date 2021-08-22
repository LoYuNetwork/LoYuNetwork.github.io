export const data = {
  "key": "v-cbe54db0",
  "path": "/helper/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "navbar": "boolean",
    "heroImage": "/assets/images/logo.jpg",
    "heroText": "帮助文档",
    "tagline": "你或许需要我们的帮助？",
    "footer": "© 2019-2021 by LoYuNetwork . All rights reserved."
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "helper/readme.md",
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
