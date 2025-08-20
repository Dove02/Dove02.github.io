import type { DefaultTheme } from 'vitepress';

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/course/': [
    {
      text: '博客搭建',
      items: [
        { text: '基于 Hexo（Old）', link: '/course/blog/hexo' },
        { text: '基于 VitePress（New）', link: '/course/blog/vitepress' },
        { text: '部署', link: '/course/blog/deploy' }
      ]
    }
  ],
  '/notes': [
    {
      text: 'Web API',
      link: '/notes/dom'
    },
    {
      text: 'CSS',
      link: '/notes/css'
    },
    {
      text: '前端渲染模式',
      link: '/notes/render'
    },
    {
      text: 'Vue',
      link: '/notes/vue'
    }
  ],
  '/workflow': [
    {
      text: '常用工具库', link: '/workflow/utils'
    },
    {
      text: '常用库使用和配置',
      items: [
        { text: 'pdf.js 使用', link: '/workflow/utilsUse/pdfjs' }
      ]
    },
  ]
};
