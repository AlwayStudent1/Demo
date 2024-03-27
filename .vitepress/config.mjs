import { defineConfig } from 'vitepress'
import { set_sidebar } from "../utils/auto_sidebar.mjs";	// 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/Demo/",
  head: [["link", { rel: "icon", href: "/Demo/logo.png" }]],
  title: "阿杰的文档项目",
  description: "A VitePress Site",
  themeConfig: {
    outlineTitle:"目录",
    outline:[2,5],
    logo:'/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '前端', items: [
          { text: 'HTML', link: "/front-end/" },
          { text: 'CSS', link: "/" },
          { text: 'JavaScript', link: "/" },
          { text: 'vitepress', link: "/" },
        ]
      },
      {
        text: '编程语言', items: [
          { text: 'Java', link: "/" },
          { text: 'Python', link: "/" },
          { text: 'C语言', link: "/" },
          { text: 'SQL', link: "/" },
        ]
      },
      {
        text: '嵌入式',
        items: [
          {
            text: '基础知识', items: [
              { text: '模电', link: "/" },
              { text: '数电', link: "/" }
            ]
          },
          {
            text: '硬件平台', items: [
              { text: '51单片机', link: "/" },
              { text: 'stm32', link: "/" }
            ]
          },
          {
            text: '系统技术', items: [
              { text: 'Linux', link: "/嵌入式/Linux" },
              { text: '实时操作系统（RTOS）', link: "/" }
            ]
          }
        ]
      },
      {
        text:"两边栏", link:"/两边栏"
      },
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    // sidebar:{
    //   "/front-end": set_sidebar("/front-end")
    // },
    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AlwayStudent1' }
    ],
    footer: {
      copyright: "Copyright@ 2024 阿杰"
    },
  
     // 设置搜索框的样式
     search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },  
  }
})
