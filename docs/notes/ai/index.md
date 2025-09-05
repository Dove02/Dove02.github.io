---
prev: false
next: false
---


# AI 相关需求

::: tip INFO
记录 AI 相关需求的前端开发过程
:::


## 回答流式输出（打字机效果）

使用 `fetch` + `ReadableStream` 实现流式请求和响应，而不是 `XMLHttpRequest` 或 `EventSource` 方式，原因：

- fetch 是浏览器原生 API，基于 Promise
- fetch 支持 ReadableStream
- 可以结合 AbortController 快速实现中止请求功能

[查看案例](./stream.md)


## 中止回答

由于使用 `fetch` 请求调用的接口，结合 AbortController 即可实现中止对话功能。

[查看案例](./abort.md)


## 智能绘图

根据用户问题绘制图表。通过构造 `prompt`，返回符合需求的图表 `JSON`，成功返回后渲染对应的图表。

技术选型：使用任意大模型 + echarts 图表库渲染 + Vue3

[查看案例](./chart.md)