import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/readme.md"]],
  ["v-74bc627b","/about/","",["/about/index.html","/about/readme.md"]],
  ["v-e52c881c","/article/","",["/article/index.html","/article/readme.md"]],
  ["v-cbe54db0","/helper/","",["/helper/index.html","/helper/readme.md"]],
  ["v-d820d792","/skill/","",["/skill/index.html","/skill/readme.md"]],
  ["v-195ad56d","/thanks/","",["/thanks/index.html","/thanks/readme.md"]],
  ["v-73105ae3","/helper/xineyc/mc%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%8A%B6%E6%80%81%E8%8E%B7%E5%8F%96.html","mc服务器状态获取",["/helper/xineyc/mc服务器状态获取.html","/helper/xineyc/mc%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%8A%B6%E6%80%81%E8%8E%B7%E5%8F%96","/helper/xineyc/mc服务器状态获取.md","/helper/xineyc/mc%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%8A%B6%E6%80%81%E8%8E%B7%E5%8F%96.md"]],
  ["v-7671fed5","/helper/xineyc/","首页",["/helper/xineyc/index.html","/helper/xineyc/readme.md"]],
  ["v-c3d0f5e4","/helper/xineyc/%E4%B8%80%E8%A8%80x%E6%8A%A5%E6%97%B6.html","一言x报时",["/helper/xineyc/一言x报时.html","/helper/xineyc/%E4%B8%80%E8%A8%80x%E6%8A%A5%E6%97%B6","/helper/xineyc/一言x报时.md","/helper/xineyc/%E4%B8%80%E8%A8%80x%E6%8A%A5%E6%97%B6.md"]],
  ["v-b7c166dc","/helper/xineyc/%E5%B0%BE%E9%A1%B5.html","",["/helper/xineyc/尾页.html","/helper/xineyc/%E5%B0%BE%E9%A1%B5","/helper/xineyc/尾页.md","/helper/xineyc/%E5%B0%BE%E9%A1%B5.md"]],
  ["v-601c23e7","/helper/xineyc/%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F.html","明日方舟",["/helper/xineyc/明日方舟.html","/helper/xineyc/%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F","/helper/xineyc/明日方舟.md","/helper/xineyc/%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F.md"]],
  ["v-0f2df74c","/helper/xineyc/%E7%82%B9%E6%AD%8C.html","多平台点歌",["/helper/xineyc/点歌.html","/helper/xineyc/%E7%82%B9%E6%AD%8C","/helper/xineyc/点歌.md","/helper/xineyc/%E7%82%B9%E6%AD%8C.md"]],
  ["v-ce034b1e","/helper/xineyc/%E7%8B%97%E5%B1%81%E4%B8%8D%E9%80%9A.html","狗屁不通生成器",["/helper/xineyc/狗屁不通.html","/helper/xineyc/%E7%8B%97%E5%B1%81%E4%B8%8D%E9%80%9A","/helper/xineyc/狗屁不通.md","/helper/xineyc/%E7%8B%97%E5%B1%81%E4%B8%8D%E9%80%9A.md"]],
  ["v-75c39d8a","/helper/xineyc/%E7%BB%99%E7%88%B7%E7%88%AC.html","给爷爬",["/helper/xineyc/给爷爬.html","/helper/xineyc/%E7%BB%99%E7%88%B7%E7%88%AC","/helper/xineyc/给爷爬.md","/helper/xineyc/%E7%BB%99%E7%88%B7%E7%88%AC.md"]],
  ["v-56f30093","/helper/xineyc/%E8%BF%90%E8%A1%8C%E7%8A%B6%E6%80%81%20copy.html","mc服务器状态获取",["/helper/xineyc/运行状态 copy.html","/helper/xineyc/%E8%BF%90%E8%A1%8C%E7%8A%B6%E6%80%81%20copy","/helper/xineyc/运行状态 copy.md","/helper/xineyc/%E8%BF%90%E8%A1%8C%E7%8A%B6%E6%80%81%20copy.md"]],
  ["v-56b8fd72","/helper/xineyc/%E8%BF%90%E8%A1%8C%E7%8A%B6%E6%80%81.html","运行状态",["/helper/xineyc/运行状态.html","/helper/xineyc/%E8%BF%90%E8%A1%8C%E7%8A%B6%E6%80%81","/helper/xineyc/运行状态.md","/helper/xineyc/%E8%BF%90%E8%A1%8C%E7%8A%B6%E6%80%81.md"]],
  ["v-1c4bf4dc","/helper/xineyc/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87.html","随机图片",["/helper/xineyc/随机图片.html","/helper/xineyc/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87","/helper/xineyc/随机图片.md","/helper/xineyc/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
