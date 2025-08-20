---
prev:
  text: '前端渲染模式'
  link: '/notes/render'
next: false

title: 'Vue'

outline: 2
---

# {{ $frontmatter.title }}


## 自定义指令

指令的任务是，在表达式的值变化时响应式地更新 DOM。自定义指令允许我们扩展 Vue 的功能，直接操作 DOM。

::: tip 使用时机
只有当所需功能只能通过直接的 DOM 操作来实现时，才应该使用自定义指令。
:::


### 注册

自定义指令的注册分为局部注册和全局注册两种方式：

