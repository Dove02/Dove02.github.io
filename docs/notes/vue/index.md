---
prev:
  text: '前端渲染模式'
  link: '/notes/render'

next:
  text: 'Git'
  link: '/notes/git'

title: 'Vue 3'

outline: 2
---

# {{ $frontmatter.title }}


## 自定义指令

::: tip 使用时机
只有当所需功能只能通过直接的 DOM 操作来实现时，才应该使用自定义指令。
:::

指令的任务是，在表达式的值变化时响应式地更新 DOM。自定义指令允许我们扩展 Vue 的功能，直接操作 DOM。


### 注册

自定义指令的注册分为局部注册和全局注册两种方式：


#### 局部注册

在 `<script setup>` 中，任何以 `v` 开头的驼峰式命名的变量都可以当作自定义指令使用。

如下：

`vHighlight` 可以在模板中以 `v-highlight` 的形式使用

```vue
<script setup>
// 在模板中启用 v-highlight
const vHighlight = {
  mounted: (el) => {
    el.classList.add('is-highlight')
  }
}
</script>

<template>
  <p v-highlight>This sentence is important!</p>
</template>
```


#### 全局注册

```js
const app = createApp({})

// 使 v-highlight 在所有组件中都可用
app.directive('highlight', {
  /* ... */
})
```


### 指令钩子

自定义指令对应的函数中，存在以下几种钩子函数（即生命周期函数）：

```js
const myDirective = {
  // 在绑定元素的 attribute 前
  // 或事件监听器应用前调用
  created(el, binding, vnode) {},
  // 在元素被插入到 DOM 前调用
  beforeMount(el, binding, vnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el, binding, vnode) {},
  // 绑定元素的父组件更新前调用
  beforeUpdate(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载前调用
  beforeUnmount(el, binding, vnode) {},
  // 绑定元素的父组件卸载后调用
  unmounted(el, binding, vnode) {}
}
```

#### 参数说明

- `el`：指令绑定的 DOM 元素
- `binding`：一个对象，包含以下属性：
  - `value`：传入指令的值
  - `oldValue`：之前的值（仅在 `beforeUpdate` 和 `updated` 时存在）
  - `arg`：传递给指令的参数（如 `v-my-directive:foo` 中的 `foo`）
  - `modifiers`：修饰符对象（如 `v-my-directive.foo.bar` → `{ foo: true, bar: true }`）
  - `instance`：使用该指令的组件实例
  - `dir`：指令的定义对象
- `vnode`：绑定元素的底层 VNode
- `prevVnode`：之前的渲染中指令所绑定元素的 VNode（仅在 `beforeUpdate` 和 `updated` 时存在）


### 示例

::: details Ruoyi 中复制文本指令
```js
/**
* v-copyText 复制文本内容
* Copyright (c) 2022 ruoyi
*/

export default {
  beforeMount(el, { value, arg }) {
    if (arg === "callback") {
      el.$copyCallback = value;
    } else {
      el.$copyValue = value;
      const handler = () => {
        copyTextToClipboard(el.$copyValue);
        if (el.$copyCallback) {
          el.$copyCallback(el.$copyValue);
        }
      };
      el.addEventListener("click", handler);
      el.$destroyCopy = () => el.removeEventListener("click", handler);
    }
  }
}

function copyTextToClipboard(input, { target = document.body } = {}) {
  const element = document.createElement('textarea');
  const previouslyFocusedElement = document.activeElement;

  element.value = input;

  // Prevent keyboard from showing on mobile
  element.setAttribute('readonly', '');

  element.style.contain = 'strict';
  element.style.position = 'absolute';
  element.style.left = '-9999px';
  element.style.fontSize = '12pt'; // Prevent zooming on iOS

  const selection = document.getSelection();
  const originalRange = selection.rangeCount > 0 && selection.getRangeAt(0);

  target.append(element);
  element.select();

  // Explicit selection workaround for iOS
  element.selectionStart = 0;
  element.selectionEnd = input.length;

  let isSuccess = false;
  try {
    isSuccess = document.execCommand('copy');
  } catch { }

  element.remove();

  if (originalRange) {
    selection.removeAllRanges();
    selection.addRange(originalRange);
  }

  // Get the focus back on the previously focused element, if any
  if (previouslyFocusedElement) {
    previouslyFocusedElement.focus();
  }

  return isSuccess;
}

```
:::



## API


### app.config.globalProperties

::: details 定义
一个用于注册能够被应用内所有组件实例访问到的全局属性的对象。

这是对 Vue 2 中 Vue.prototype 使用方式的一种替代，此写法在 Vue 3 已经不存在了。与任何全局的东西一样，应该谨慎使用。
:::


#### 用法

注册全局属性：
```js
app.config.globalProperties.$globalVar = 'globalVar'
```

使用：
```js
import { getCurrentInstance } from "vue";

const { proxy } = getCurrentInstance();

console.log(proxy.$globalVar);
```