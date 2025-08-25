---
next: false
---


# Tailwind CSS 使用和配置

::: info 参考
[Tailwind CSS 中文文档](https://www.tailwindcss.cn/)
:::


## 初始化&&配置

::: tip
考虑到兼容性问题，目前使用 3.x版本
:::


### 初始化

安装:

```shell
npm install -D tailwindcss@3 postcss autoprefixer
```

初始化 Tailwind 配置：
```shell
npx tailwindcss init -p
```


### 配置

配置 `tailwind.config.js`，在 `content` 中添加扫描的文件：

::: code-group
```js [tailwind.config.js]
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
:::


### 引入样式文件

在全局样式文件中引入：

::: code-group
``` css [tailwind.css]
@tailwind base;
@tailwind components;
@tailwind utilities;
```
:::


## 可能存在的问题

::: tip
下边整理个人遇到的一些问题
:::

- `@tailwind base;` 覆盖 UI 框架的样式<br>解决办法：注释掉 或 调换引入顺序（UI 框架样式引入放在后边）