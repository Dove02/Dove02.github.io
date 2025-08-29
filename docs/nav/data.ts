import type { NavLink } from './components/type'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: 'Vue 生态',
    items: [
      {
        icon: '/icons/vue.svg',
        title: 'Vue 3',
        desc: '渐进式 JavaScript 框架',
        link: 'https://cn.vuejs.org'
      },
      {
        icon: '/icons/vue.svg',
        title: 'Vue 2',
        desc: '渐进式 JavaScript 框架',
        link: 'https://v2.cn.vuejs.org'
      },
      {
        icon: '/icons/vue.svg',
        title: 'Vue Router',
        desc: 'Vue.js 的官方路由，为 Vue.js 提供富有表现力、可配置的、方便的路由',
        link: 'https://router.vuejs.org/zh'
      },
      {
        icon: '/icons/pinia.svg',
        title: 'Pinia',
        desc: '符合直觉的 Vue.js 状态管理库',
        link: 'https://pinia.vuejs.org/zh'
      },
      {
        icon: '/icons/vueuse.svg',
        title: 'VueUse',
        desc: 'Vue Composition API 的常用工具集',
        link: 'https://vueuse.org.cn/'
      }
    ]
  },
  {
    title: '组件库',
    items: [
      {
        icon: '/icons/element-plus.svg',
        title: 'Element Plus',
        desc: '基于 Vue 3，面向设计师和开发者的组件库',
        link: 'https://element-plus.org'
      },
      {
        icon: '/icons/antdv.svg',
        title: 'Ant Design Vue',
        desc: 'Ant Design 的 Vue 实现，开发和服务于企业级后台产品',
        link: 'https://antdv.com/docs/vue/introduce-cn'
      },
      {
        icon: '/icons/vant.svg',
        title: 'Vant',
        desc: '轻量、可定制的移动端 Vue 组件库',
        link: 'https://vant-ui.github.io/vant'
      },
      {
        icon: '/icons/g2plot.svg',
        title: 'G2Plot',
        desc: '开箱即用、易于配置、具有良好视觉和交互体验的通用统计图表库',
        link: 'https://g2plot.antv.antgroup.com/'
      },
      {
        icon: '/icons/echarts.png',
        title: 'ECharts',
        desc: '一个基于 JavaScript 的开源可视化图表库',
        link: 'https://echarts.apache.org/zh/index.html'
      }
    ]
  },
  {
    title: 'CSS 相关',
    items: [
      {
        icon: '/icons/postcss.svg',
        title: 'PostCSS',
        desc: '一个用 JavaScript 转换 CSS 的工具',
        link: 'https://postcss.org'
      },
      {
        icon: '/icons/sass.svg',
        title: 'Sass',
        desc: '一个成熟，稳定，功能强大的专业级 CSS 扩展语言',
        link: 'https://sass-lang.com'
      },
      {
        icon: '/icons/tailwindcss.svg',
        title: 'TailwindCSS 中文网',
        desc: '一个功能类优先的 CSS 框架',
        link: 'https://www.tailwindcss.cn'
      }
    ]
  },
  {
    title: '跨平台',
    items: [
      {
        icon: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/icon.png?v=1556263038788',
        title: 'uni-app',
        desc: '一个使用 Vue.js 开发所有前端应用的框架',
        link: 'https://uniapp.dcloud.net.cn/'
      }
    ]
  },
  {
    title: '编译&&构建',
    items: [
      {
        icon: '/icons/babel.png',
        title: 'Babel 中文文档',
        desc: 'Babel 是一个 JavaScript 编译器',
        link: 'https://www.babeljs.cn/'
      },
      {
        icon: '/icons/vite.svg',
        title: 'Vite 中文文档',
        desc: '下一代前端工具链',
        link: 'https://cn.vitejs.dev'
      },
      // {
      //   icon: 'https://www.webpackjs.com/icon_180x180.png',
      //   title: 'Webpack 中文网',
      //   desc: '一个用于现代 JavaScript 应用程序的静态模块打包工具',
      //   link: 'https://www.webpackjs.com'
      // }
    ]
  },
  {
    title: 'SSG',
    items: [
      {
        icon: '/icons/vitepress.svg',
        title: 'VitePress',
        desc: '由 Vite 和 Vue 驱动的静态站点生成器',
        link: 'https://vitepress.dev/zh/'
      }
    ]
  },
  {
    title: '代码格式化',
    items: [
      {
        icon: '/icons/prettier.png',
        title: 'Prettier',
        desc: '一款支持多语言的代码格式化工具',
        link: 'https://prettier.io/docs/' 
      },
      {
        icon: 'https://eslint.org/favicon.ico',
        title: 'ESLint',
        desc: '一个用于识别和修复 ECMAScript / JavaScript 代码中问题的工具',
        link: 'https://eslint.org/docs/latest/'
      }
    ]
  },
  {
    title: '优质教程',
    items: [
      {
        icon: 'https://zh.javascript.info/img/favicon/favicon.png',
        title: '现代 JavaScript 教程',
        desc: '以最新的 JavaScript 标准为基准。通过简单但足够详细的内容，为你讲解从基础到高阶的 JavaScript 相关知识',
        link: 'https://zh.javascript.info/' 
      },
      {
        icon: '/icons/es6.webp',
        title: 'ES6 入门教程',
        desc: '开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性',
        link: 'https://es6.ruanyifeng.com/'
      },
      {
        icon: '',
        title: 'Babel 教程 - 姜瑞涛的官方网站',
        desc: '对新人友好的 Babel 教程',
        link: 'https://www.jiangruitao.com/babel/' 
      }
    ]
  },
  {
    title: '语言文档和规范',
    items: [
      {
        icon: '/icons/mdn.svg',
        title: 'MDN | Web 开发者指南',
        desc: 'Mozilla 的开发者平台，提供了 HTML、CSS 和 JavaScript 的详细文档以及广泛的 Web API',
        link: 'https://developer.mozilla.org/zh-CN'
      }
    ]
  },
  {
    title: '社区',
    items: [
      {
        icon: {
          light: '/icons/github-dark.svg',
          dark: '/icons/github-light.svg'
        },
        title: 'Github',
        desc: '一个面向开源及私有软件项目的托管平台',
        link: 'https://github.com'
      },
      {
        icon: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a',
        title: 'Stack Overflow',
        desc: '全球最大的技术问答网站',
        link: 'https://stackoverflow.com'
      },
      {
        icon: 'https://www.v2ex.com/static/icon-192.png',
        title: 'V2EX',
        desc: '一个关于分享和探索的地方',
        link: 'https://www.v2ex.com'
      },
      {
        icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png',
        title: '稀土掘金',
        desc: '面向全球中文开发者的技术内容分享与交流平台',
        link: 'https://juejin.cn'
      },
      {
        icon: 'https://static.segmentfault.com/main_site_next/0dc4bace/touch-icon.png',
        title: 'SegmentFault 思否',
        desc: '技术问答开发者社区',
        link: 'https://segmentfault.com'
      }
    ]
  },
]