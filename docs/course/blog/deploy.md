---
title: '部署'

next: false
---

# {{ $frontmatter.title }}


## VitePress 部署

::: tip
参考官方文档部署：[VitePress | 部署](https://vitepress.dev/zh/guide/deploy)
:::

前提：
- VitePress 站点位于项目的 `docs` 目录中
- 使用的是默认的生成输出目录 （`.vitepress/dist`）
- VitePress 作为本地依赖项安装在项目中，并且你已在 package.json 中设置以下脚本：
::: code-group

```json [package.json]
{
  "scripts": {
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  }
}
```
:::


### 本地构建与测试

1. 执行构建命令：
```sh
$ npm run docs:build
```

2. 构建完成后，可以执行预览命令进行本地预览：
```sh
$ npm run docs:preview
```


### 部署到 GitHub Pages

1. 首先，在 GitHub 新建一个仓库，仓库名为 `你的用户名.github.io`，仓库设置为公开
::: info
 要使用 `GitHub Pages` 进行静态网页的托管，对仓库名称有特殊要求，例如用户名为 `abc`，则应该创建 `abc.github.io` 的仓库，将来访问的网址也就是 `https://abc.github.io`
:::

2. 仓库中设置，找到菜单项中的 `Pages`，选择 "Build and deployment > Source > GitHub Actions"，为了后边自动化部署做准备。

3. 在项目 `.github/workflows` 目录中创建一个名为 `deploy.yml` 的文件，其中包含这样的内容：
注意分支设置
:::code-group
```yaml [.github/workflows/deploy.yml]
# 构建 VitePress 站点并将其部署到 GitHub Pages 的示例工作流程
#
name: Deploy VitePress site to Pages

on:
  # 在针对 `main` 分支的推送上运行。如果你
  # 使用 `master` 分支作为默认分支，请将其更改为 `master`
  push:
    branches: [master]

  # 允许你从 Actions 选项卡手动运行此工作流程
  workflow_dispatch:

# 设置 GITHUB_TOKEN 的权限，以允许部署到 GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列
# 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  # 构建工作
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0 # 如果未启用 lastUpdated，则不需要
      # - uses: pnpm/action-setup@v3 # 如果使用 pnpm，请取消此区域注释
      #   with:
      #     version: 9
      # - uses: oven-sh/setup-bun@v1 # 如果使用 Bun，请取消注释
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm # 或 pnpm / yarn
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Install dependencies
        run: npm ci # 或 pnpm install / yarn install / bun install
      - name: Build with VitePress
        run: npm run docs:build # 或 pnpm docs:build / yarn docs:build / bun run docs:build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  # 部署工作
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```
:::

4. 向远程仓库提交推送代码即可，VitePress 会根据配置自动部署

5. 最后就可以访问博客了：`https://你的用户名.github.io`