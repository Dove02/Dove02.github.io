---
prev:
  text: 'Web API'
  link: '/notes/dom'

next:
  text: 'ES6'
  link: '/notes/js/es6'
---

# CSS


## 文本溢出时省略


### 单行文本

单行文本溢出时添加省略号很常见，先使用 `white-space: nowrap;` 强制文字不换行；然后使用 `overflow: hidden;` 隐藏溢出部分；最后使用 `text-overflow: ellipsis;` 给溢出文字添加省略号。

```css
.xxx {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```


### 多行文本

由于单行文本强制不换行，在多行文本时并不适用。

所以需要另外一种方式：使用 `-webkit-line-clamp` 属性指定行数。（必须是 `Webkit` 内核的浏览器）

::: warning 注意
-webkit-line-clamp 生效条件：
- `display` 设置为 `-webkit-box` 或 `-webkit-inline-box`
- `webkit-box-orient` 属性必须为 `vertical`
:::

示例：

```css
.xxx {
  display: -webkit-box;
  -webkit-line-clamp: 2(3);  // 限定两行或三行
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```