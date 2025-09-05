# 中止回答案例

## 案例

开发 AI 对话功能时，需要实现中止对话的功能。由于调用 LLM 接口使用的是 fetch 请求，结合 AbortController 即可实现中止功能。

::: tip
当 abort() 被调用时，触发 AbortError
:::

```js
// 创建实例
const controller = new AbortController();

// fetch 传递 signal
fetch(url, { signal: controller.signal })
  .then(...)
  .catch(err => {
    if (err.name === "AbortError") {
      console.warn("请求已被中止");
    } else {
      console.error("请求出错:", err);
    }
  });

// 中止方法，需要时调用
controller.abort();
```