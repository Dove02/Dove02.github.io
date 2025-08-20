---
next:
  text: 'CSS'
  link: '/notes/css'
---

# Web API

## AbortController

::: details 定义
AbortController 接口代表一个控制器对象，允许你在需要时中止一个或多个 DOM 请求
:::

开发 AI 对话功能时，需要实现中止对话的功能。由于调用 LLM 接口使用的是 fetch 请求，结合 AbortController 即可实现中止功能。

```js
// 创建实例
const controller = new AbortController();

// 中止方法
controller.abort();

// fetch 传递 signal
try {
  fetch(url, controller.signal) {
    ...
  }
} catch(err) {
  if (err.name === 'AbortError') {
    ...
  }
}

```
::: tip
当 abort() 被调用时，触发 AbortError
:::