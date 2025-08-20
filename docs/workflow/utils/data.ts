import type { NavLink } from '../../nav/components/type'

type NavData = {
  title: string
  items: NavLink[]
}

export const DATA: NavData[] = [
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
  }
]