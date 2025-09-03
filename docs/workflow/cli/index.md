---
prev: false

next: false
---


# 命令行工具


## nvm - Node 版本管理工具

`node` 版本管理工具，可以快捷切换 `node` 版本

::: info 参考
[nvm | GitHub](https://github.com/nvm-sh/nvm)

[nvm - windows | GitHub](https://github.com/coreybutler/nvm-windows)
:::

安装前，需要卸载已有 `node`

[Windows 版下载](https://github.com/coreybutler/nvm-windows/releases)


### 常用命令

```sh
# 安装指定版本的 node
nvm install <version>

# 卸载指定版本的 node
nvm uninstall <version>

# 查看已安装的 node 版本
nvm ls

# 切换 node 版本
nvm use <version>

# 设置默认版本（可选）
nvm alias default <version>
```