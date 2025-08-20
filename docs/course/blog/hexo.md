---
prev:
  text: '简介'
  link: '/course/blog'
---

# 基于 Hexo 搭建

::: tip
该文章只做了部分总结，具体参考：[Hexo 官方文档](https://hexo.io/zh-cn/docs/)
:::

## 安装脚手架 && 初始化

1. 新建文件夹，命令行或终端打开，执行以下命令：

```shell
npm install hexo-cli -g
```

2. 查看版本信息

```shell
hexo -v
```

3. 初始化

```shell
hexo init
```

4. 生成静态页面

```shell
hexo g
```

5. 本地启动服务

```shell
hexo s
```


## 项目结构

```text
Root
  |--- node_moudules // 依赖包
  |--- public // 生成的资源
  |--- scaffolds // 模板
  |--- source // 源码
        |--- _posts // 文章
        |--- _drafts // 草稿
  |--- themes // 主题
  |--- _config.yml // Hexo 默认配置文件
  |--- package.json // 项目所需模板配置信息
```


## 配置

`_config.yml` 是 Hexo 的默认配置文件，我们可以在该文件中修改大部分配置


### Site(网站)

```YAML
# Site
title: '' # 网站主标题
subtitle: '' # 网站副标题
description: '' # 描述
keywords: '' # 关键词
author: # 作者
language: zh-CN # 语言
timezone: 'Asia/Shanghai' # 时区
```

### URL(网址)

```YAML
# URL
url: https://你的域名
permalink: :year/:month/:day/:title/ # 文章的永久链接格式
permalink_defaults:
pretty_urls:
  trailing_index: false # 是否在永久链接中保留尾部的 index.html，设置为 false 时去除
  trailing_html: false # 是否在永久链接中保留尾部的 .html, 设置为 false 时去除 (对尾部的 index.html无效)
```

### Directory(目录)

```YAML
# Directory
source_dir: source # 资源文件夹，这个文件夹用来存放内容
public_dir: public # 公共文件夹，这个文件夹用于存放生成的站点文件
tag_dir: tags # 标签文件夹
archive_dir: archives # 归档文件夹
category_dir: categories # 分类文件夹
code_dir: downloads/code # Include code 文件夹，source_dir 下的子目录
i18n_dir: :lang # 国际化（i18n）文件夹
skip_render: # 跳过指定文件的渲染。匹配到的文件将会被不做改动地复制到 public 目录中。您可使用 glob 表达式来匹配路径
```

### Writing(文章)

```YAML
# Writing
new_post_name: :title.md # 新文章的文件名称
default_layout: post # 预设布局
titlecase: false # 把标题转换为 title case
external_link:
  enable: true # 在新标签中打开链接
  field: site # 对整个网站（site）生效或仅对文章（post）生效
  exclude: '' # 需要排除的域名
filename_case: 0 # 把文件名称转换为 (1) 小写或 (2) 大写
render_drafts: false # 显示草稿
post_asset_folder: false # 启用 资源文件夹
relative_link: false # 把链接改为与根目录的相对位址
future: true # 显示未来的文章
syntax_highlighter: highlight.js # 以下都是对代码块的设置
highlight:
  line_number: true
  auto_detect: false
  tab_replace: ''
  wrap: true
  hljs: false
prismjs:
  preprocess: true
  line_number: true
  tab_replace: ''
```

### Category & Tag(分类 & 标签)

```YAML
# Category & Tag
default_category: uncategorized # 默认分类
category_map: # 分类别名
tag_map: # 标签别名
```

### Date / Time format(日期 / 时间格式)

```YAML
# Date / Time format
date_format: YYYY-MM-DD # 日期格式
time_format: HH:mm:ss # 时间格式
updated_option: 'mtime' # 当 Front Matter 中没有指定 updated 时 updated 的取值
```

### Pagination(分页)

```YAML
# Pagination
per_page: 10 # 每页显示的文章量 (0 = 关闭分页功能)
pagination_dir: page # 分页目录
```

### Extensions(扩展)

```YAML
# Extensions
theme: butterfly # 当前主题名称。值为 false 时禁用主题(这里我用的 butterfly)
```

### Deployment(部署)

```YAML
# Deployment
deploy:
  type: # 类型
  repo: # 仓库
  branch: # 分支
```