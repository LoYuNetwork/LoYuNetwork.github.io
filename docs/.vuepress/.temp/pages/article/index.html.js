export const data = {
  "key": "v-e52c881c",
  "path": "/article/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "navbar": "boolean",
    "heroImage": "/assets/images/logo.jpg",
    "heroText": "洛 圄 文 档",
    "tagline": "404NotFound懒得写这个页面，坐等更新罢",
    "footerHtml": true,
    "footer": "<p>© 2019-2021 by <a href=\"http://www.loyunet.cn/\">LoYuNetwork</a> . All rights reserved.<br><a href=\"https://icp.gov.moe/?keyword=20210412\" target=\"_blank\">萌ICP备20210412号</a></p>"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "article/readme.md",
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
