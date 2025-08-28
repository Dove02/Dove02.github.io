# ES6

`ECMAScript 6` （简称 `ES6`）是 `JavaScript` 语言的下一代标准。

::: info ES6 与 ES2015 的关系
`ES2015` 是正式名称，特指该年发布的正式版本的语言标准，全称《`ECMAScript 2015` 标准》。

`ES6` 既是一个历史名词，也是一个泛指，含义是 `5.1` 版以后的 `JavaScript` 的下一代标准，涵盖了 `ES2015`、`ES2016`、`ES2017` 等等。
:::

ECMAScript 所有提案：[ecma262](https://github.com/tc39/ecma262)


## Module

`ES6` 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。

- `ES6` 在编译时加载，使得静态分析成为可能
- `ES6` 的模块自动采用严格模式
- 模块中的顶层 `this` 指向 `undefined`


### export 命令

`export` 命令用于模块的导出，规定模块的对外接口。

- 一个模块就是一个独立的文件，内部的变量外部无法访问，如果需要访问必须使用 `export` 输出变量
- 输出的变量可以使用 `as` 重命名
- 目前支持对外输出的三种接口：函数（Functions）、类（Classses）、var、let、const声明的变量（Variables）
- `export` 命令需要处于模块顶层（为了静态优化考虑，ES6设计初衷）

::: code-group
```js [util.js]
/* 单个输出 */
export const name = 'Dove';
export function logName() {
  console.log(name)
};

/* 统一输出 */
const name = 'Dove';
function logName() {
  console.log(name)
}

export { name, logName };

/* 使用 as 重命名 */
const name = 'Dove';
export { name as username };
```
:::


### import 命令

使用 `export` 定义模块的对外接口后，其他文件中就可以使用 `import` 命令加载导出的模块。

- `import` 输入的变量都是只读的，不可重新赋值，引用类型可以修改属性
- 输入的变量也可以用 `as` 重命名
- `import` 命令具有提升效果，会提升到模块的头部，首先执行
  - 编译阶段执行，在代码执行前
  - 不能使用表达式和变量
- 重复执行同一句 `import` 命令只会执行一次

```js
import { name, logName } from './util';

/* 使用 as 重命名 */
import { name as username, logName as logUsername } from './util';

/* 整体加载 */
import * as util from './util';
util.name;
util.logName();
```


### export default 命令

`export default` 命令可以指定模块的默认输出，导入模块时不用关心原来模块的命名。

- 一个模块只能有一个默认输出
- `export default` 命令后边是一个表达式，不能是变量声明语句
- `export default` 命令本质上是输出一个叫做 `default` 的变量

```js
/* 匿名函数 */
// export-default.js
export default function() {
  console.log('Dove')
}

import log from './export-default';
log();

/* 非匿名函数 */
export default fn function () {
  console.log('Dove')
}

import log from './export-default';
log(); 
```


### export 与 import 的复合写法

在一个模块中，先输入后输出同一个模块，`export` 和 `import` 写在一起，注意**输入的接口不能在当前模块使用**，相当于对外转发了接口。

```js
export { foo, bar } from 'my_module'
// 等同于
import { foo, bar } from 'my_module'
export { foo, bar }

/* 接口改名 */
export { foo as myFoo } from 'my_module'

/* 整体输出 */
export * from 'my_module'

/* 具名接口改为默认接口 */
export { es6 as default } from 'my_module';
// 等同于
import { es6 } from 'my_module';
export default es6;

/* 默认接口改为具名接口 */
export { default as es6 } from 'my_module';

/* 整体加载 */
export * as util from "util";
// 等同于
import * as util from "util";
export { util };
```


### import()

[ES2020](https://github.com/tc39/proposal-dynamic-import) 引入 `import()` 函数支持动态加载模块。

::: details 使用场景
- 按需加载
- 条件加载
- 动态的模块路径
:::

- `import()` 函数可以用在任何地方，不仅仅是模块，非模块的脚本也可以使用
- `import()` 类似 `Node.js` 中的 `require()` 方法，区别主要是前者是异步加载，后者是同步加载
- `import()` 返回的值是 `Promise` 对象


