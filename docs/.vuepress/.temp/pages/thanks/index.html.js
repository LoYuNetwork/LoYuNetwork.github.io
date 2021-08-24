export const data = {
  "key": "v-195ad56d",
  "path": "/thanks/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "navbar": "boolean",
    "heroText": "鸣谢",
    "footer": "2019-2021 by LoYuNetwork . All rights reserved."
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "thanks/readme.md",
  "git": {
    "createdTime": 1629783434000,
    "updatedTime": 1629783434000,
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
