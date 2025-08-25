---
prev:
  text: '常用库使用和配置'
  link: '/workflow/utilsUse'
---

# jsdiff 实现统计修改的字数

::: tip 参考
[官方文档](https://github.com/kpdecker/jsdiff)
:::


## 引入 jsdiff

```shell
npm install diff --save
```


## 工具函数封装

::: code-group
``` ts [diff.ts]
import { diffChars } from 'diff';

/**
 * 计算两段文本之间变更的字符数
 * @param {string} oldText 原始文本
 * @param {string} newText 新文本
 * @returns {number} 修改了多少字（字符） = 删除 + 新增
 */
export function countChangedChars(oldText: string, newText: string) {
  const diffs = diffChars(oldText, newText);
  let changed = 0;

  diffs.forEach(part => {
    if (part.added || part.removed) {
      changed += part.value.length;
    }
  });

  return changed;
}
```
:::