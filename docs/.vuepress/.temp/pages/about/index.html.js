export const data = {
  "key": "v-74bc627b",
  "path": "/about/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "navbar": "boolean",
    "heroImage": "/assets/images/logo.jpg",
    "heroText": "洛 圄 文 档",
    "tagline": "404NotFound懒得写这个页面，坐等更新罢",
    "footer": "2019-2021 by LoYuNetwork . All rights reserved."
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "about/readme.md",
  "git": {}
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
