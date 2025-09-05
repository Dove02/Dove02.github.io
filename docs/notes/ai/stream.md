---
prev:
  text: 'AI 相关需求'
  link: '/notes/ai'
---


# 流式输出案例（fetch + ReadableStream）


## 关键代码

```js
// 请求流式接口，返回 ReadableStream
const response = await fetch('/api/stream', { method: 'POST' });

// 获取 Reader 和解码器，用来读取和解码每一块数据
const reader = response.body.getReader();
const decoder = new TextDecoder("utf-8");

while (true) {
  // 读取数据块
  const { done, value } = await reader.read();
  if (done) break;

  // 解码每一块数据
  const chunkText = decoder.decode(value, { stream: true });
  console.log(chunkText);
}
```