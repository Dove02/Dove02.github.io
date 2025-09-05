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
    },
    {
      text: '数据库安装',
      items: [
        { text: 'PostgreSQL（Windows）', link: '/course/database/pgsql' },
        { text: 'PostGIS 扩展', link: '/course/database/postgis' }
      ]
    }
  ],
  '/notes': [
    { text: 'Web API', link: '/notes/dom' },
    { text: 'CSS', link: '/notes/css' },
    {
      text: 'JavaScript',
      items: [
        { text: 'ES6', link: '/notes/js/es6' }
      ]
    },
    { text: '前端渲染模式', link: '/notes/render' },
    { text: 'Vue', link: '/notes/vue' },
    { text: 'Git', link: '/notes/git' },
    { text: 'GIS', link: '/notes/gis' },
    { 
      text: 'AI 相关需求',
      link: '/notes/ai',
      items: [
        { text: '回答流式输出', link: '/notes/ai/stream' },
        { text: '中止回答', link: '/notes/ai/abort' },
        { text: '智能绘图', link: '/notes/ai/chart' },
      ]
    }
  ],
  '/workflow': [
    { text: '常用工具库', link: '/workflow/utils' },
    {
      text: '常用库使用和配置',
      link: '/workflow/utilsUse',
      items: [
        { text: 'pdf.js', link: '/workflow/utilsUse/pdfjs' },
        { text: 'jsdiff', link: '/workflow/utilsUse/jsdiff' },
        { text: 'Tailwind CSS', link: '/workflow/tailwindcss' },
      ]
    },
    { text: '命令行工具', link: '/workflow/cli' }
  ]
};
