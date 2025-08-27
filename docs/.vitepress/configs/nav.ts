import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '前端导航', link: '/nav', activeMatch: '/nav/' },
  { text: '教程',
    items: [
      { text: '博客搭建', link: '/course/blog' }
    ]
  },
  {
    text: 'Workflow',
    items: [
      { text: '常用工具库', link: '/workflow/utils' },
      { items: [
          { text: '常用库使用', link: '/workflow/utilsUse' },
          { text: 'Tailwind CSS', link: '/workflow/tailwindcss' }
        ]
      }
    ]
  },
  { text: '笔记',
    items: [
      { text: 'Web API', link: '/notes/dom' },
      { text: 'CSS', link: '/notes/css' },
      { text: 'JavaScript', link: '/notes/js' },
      { text: '前端渲染模式', link: 'notes/render' },
      { text: 'Vue', link: '/notes/vue' },
    ]
  },
  { text: '实用工具', link: '/tools' },
  { text: '关于我', link: '/about' }
]