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
    "footerHtml": true,
    "footer": "<p>© 2019-2021 by <a href=\"http://www.loyunet.cn/\">LoYuNetwork</a> . All rights reserved.<br><a href=\"https://icp.gov.moe/?keyword=20210412\" target=\"_blank\">萌ICP备20210412号</a></p>"
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
