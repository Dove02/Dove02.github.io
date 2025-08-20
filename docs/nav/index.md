---
layout: doc
layoutClass: nav-layout
outline: [2, 3, 4]
---

<style src="./index.scss"></style>

<script setup>
import NavCardGroup from './components/NavCardGroup.vue'

import { NAV_DATA } from './data'
</script>

# 前端导航

::: info 参考
页面设计参考：[前端导航 | 茂茂物语](https://maomao1996.github.io/vitepress-nav-template/nav/)
:::

<NavCardGroup v-for="{title, items} in NAV_DATA" :title="title" :items="items" />
