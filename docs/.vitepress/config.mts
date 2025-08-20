import { defineConfig } from 'vitepress'
import { nav, sidebar } from './configs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "Dove's Blog",
  description: "A personal blog by Dove",
  base: '',
  
  lastUpdated: true,
  cleanUrls: true,

  /* 主题配置 */
  themeConfig: {
    logo: '/avatar.png',
    nav,
    sidebar,

    outline: {
      level: 'deep',
      label: '目录',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Dove02' }
    ],

    footer: {
      message: '如有转载请标注本站地址',
      copyright: 'Copyright © 2025-present Dove'
    },

    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
})
