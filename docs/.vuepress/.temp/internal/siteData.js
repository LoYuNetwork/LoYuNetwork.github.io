export const siteData = {
  "base": "/",
  "lang": "zh-CN",
  "title": "洛圄文档",
  "description": "洛圄网络的文案存档库",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/assets/images/logo.png"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
