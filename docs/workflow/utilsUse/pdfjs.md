---
prev:
  text: '常用库使用和配置'
  link: '/workflow/utilsUse'
---

# Vue 3 实现 PDF 文件预览

::: tip 参考
[官方地址](https://github.com/mozilla/pdf.js?tab=readme-ov-file)

[在Vue3项目中实现PDF文件解析与预览的完整实践](https://juejin.cn/post/7516369929657335843?searchId=202508121658321381DFDB977628E03F1D)
:::


## 常见的 PDF 预览方式

目前主流的预览方式如下：
|方式|简介|优点|缺点|
|---|---|---|---|
|标签嵌入|使用 iframe / embed 标签直接嵌入|实现简单|兼容性较差，无法自定义|
|pdf.js|由 Mozilla 出品的开源 PDF 渲染器，支持 canvas / svg 渲染|功能强大，可定制化|实现较复杂|
|后端处理|后端将 PDF 转成图片给前端|前端压力小，兼容性强|没有文字层，不能选中、搜索、复制文字，服务端压力大|


## 引入 pdf.js

::: tip
这里采用 npm 方式，其他方式请参考官方文档或其他文章
:::

首先在项目中安装依赖：

```shell
npm install pdfjs-dist
```

然后新建工具函数，引入并配置 worker 路径：

```js
import * as pdfjsLib from 'pdfjs-dist/build/pdf.mjs'

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@4.8.69/build/pdf.worker.mjs`
```

**注意：版本号要与依赖的版本号一致！！！**

如果你用的是 Vite，pdfjs 的 worker 不好自动打包，用 CDN 路径是目前最稳妥的方式。当然你也可以自行下载后配置本地路径


## 核心功能封装

按照参考文章封装了工具函数，接收 PDF 文件地址和容器 DOM，然后渲染出页面：

```js
import * as pdfjsLib from 'pdfjs-dist/build/pdf.mjs'

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@4.8.69/build/pdf.worker.mjs`

export async function renderPdfToContainer(container, url, options) {
  container.innerHTML = ''

  const scale = options?.scale ?? 1
  const targetPage = options?.page

  try {
    const loadingTask = pdfjsLib.getDocument(url)
    const pdf = await loadingTask.promise

    const pages = targetPage ? [targetPage] : Array.from({ length: pdf.numPages }, (_, i) => i + 1)

    for (const pageNum of pages) {
      const page = await pdf.getPage(pageNum)
      const viewport = page.getViewport({ scale })

      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')
      if (!context) continue

      const dpr = window.devicePixelRatio || 1
      canvas.width = viewport.width * dpr
      canvas.height = viewport.height * dpr
      canvas.style.width = `${viewport.width}px`
      canvas.style.height = `${viewport.height}px`
      canvas.style.margin = '16px'
      context.setTransform(dpr, 0, 0, dpr, 0, 0)

      container.appendChild(canvas)

      const renderContext = {
        canvasContext: context,
        viewport
      }

      await page.render(renderContext).promise

      container.style.width = `${viewport.width + 32}px`
    }
  } catch (error) {
    console.error('PDF 加载失败:', error)
    container.innerHTML = '<p style="color:red">加载失败，请检查文件格式或地址是否正确。</p>'
  }
}
```


## 组件中使用

调用封装的函数，加载 PDF 文件将其渲染到页面即可：

```vue
<template>
  <div ref="pdfWrapper" class="pdf-container"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { renderPdfToContainer } from '@/utils/pdfRenderer'

const pdfWrapper = ref<HTMLElement>()
const pdfUrl = '/files/sample.pdf' // 替换成你的文件地址

onMounted(() => {
  if (pdfWrapper.value) {
    renderPdfToContainer(pdfWrapper.value, pdfUrl, { scale: 1 })
  }
})
</script>

<style scoped>
.pdf-container {
  width: 100%;
  overflow: auto;
  background: #f6f6f6;
  padding: 16px;
}
</style>
```


## 方法解析

调用工具函数时，`options` 参数可以传递 `scale` 和 `page`，分别对应 缩放倍数 和 页数。

根据需求进行传参即可。

```js
function renderPdfToContainer(container, url, options) { ... }
```