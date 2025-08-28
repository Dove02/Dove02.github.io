import type { NavLink } from '../../nav/components/type'

type NavData = {
  title: string
  items: NavLink[]
}

export const DATA: NavData[] = [
  {
    title: '编辑器',
    items: [
      {
        icon: '',
        title: 'monaco-editor',
        desc: '微软开源的基于 VSCode 的代码编辑器',
        link: 'https://github.com/microsoft/monaco-editor?tab=readme-ov-file'
      }
    ]
  },
  {
    title: '地图库',
    items: [
      {
        icon: '',
        title: 'leaflet',
        desc: '一个开源并且对移动端友好的交互式地图 JavaScript 库',
        link: 'https://github.com/Leaflet/Leaflet?tab=readme-ov-file'
      }
    ]
  },
  {
    title: '工具库',
    items: [
      {
        icon: '',
        title: 'lodash',
          desc: '一个一致性、模块化、高性能的 JavaScript 实用工具库',
        link: 'https://github.com/lodash/lodash?tab=readme-ov-file'
      },
      {
        icon: '',
        title: 'vueuse',
        desc: 'Vue Composition API 的常用工具集',
        link: 'https://vueuse.org.cn/'
      }
    ]
  },
  {
    title: 'Markdown',
    items: [
      {
        icon: '',
        title: 'marked',
        desc: '轻量、快速的 Markdown 解析器',
        link: 'https://github.com/markedjs/marked'
      },
      {
        icon: '',
        title: 'markdown-it',
        desc: '扩展性强、功能强大的 Markdown 解析器',
        link: 'https://github.com/markdown-it/markdown-it?tab=readme-ov-file'
      }
    ]
  },
  {
    title: '时间处理',
    items: [
      {
        icon: '',
        title: 'moment',
        desc: '用于解析、验证、操作和格式化日期的 JavaScript 日期库',
        link: 'https://github.com/moment/moment'
      }
    ]
  },
  {
    title: '拖放',
    items: [
      {
        icon: '',
        title: 'vue-draggable-plus',
        desc: '支持 Vue2 和 Vue3 的拖拽组件',
        link: 'https://github.com/Alfred-Skyblue/vue-draggable-plus?tab=readme-ov-file'
      }
    ]
  },
  {
    title: '文件预览',
    items: [
      {
        icon: '',
        title: 'vue-office',
        desc: '支持word(.docx)、excel(.xlsx,.xls)、pdf、pptx等各类型office文件预览的vue组件集合，提供一站式office文件预览方案，支持vue2和3，也支持React等非Vue框架',
        link: 'https://github.com/501351981/vue-office?tab=readme-ov-file'
      },
      {
        icon: '',
        title: 'pdf.js',
        desc: '使用 HTML5 构建的可移植文档格式 (PDF) 查看器,由社区驱动，并由 Mozilla 提供支持。',
        link: 'https://github.com/mozilla/pdf.js?tab=readme-ov-file'
      }
    ]
  },
  {
    title: '用户体验',
    items: [
      {
        icon: '',
        title: 'clipboard.js',
        desc: '复制到剪切板',
        link: 'https://github.com/zenorocha/clipboard.js'
      },
      {
        icon: '',
        title: 'nprogress',
        desc: '轻量级加载进度条',
        link: 'https://github.com/rstacruz/nprogress'
      },
      {
        icon: '',
        title: 'screenfull',
        desc: '将页面或任何元素全屏显示',
        link: 'https://github.com/sindresorhus/screenfull'
      },
    ]
  },
  {
    title: '字符串文本处理',
    items: [
      {
        icon: '',
        title: 'jsdiff',
        desc: 'JavaScript 文本差异比较',
        link: 'https://github.com/kpdecker/jsdiff'
      }
    ]
  },
]