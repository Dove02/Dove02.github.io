---
layout: doc
layoutClass: utils-layout
next: false
lastUpdated: false
---

<style src="./index.scss"></style>

<script setup>
import NavCardGroup from '../../nav/components/NavCardGroup.vue'

import { DATA } from './data'
</script>

# 常用工具库

<NavCardGroup v-for="{title, items} in DATA" :title="title" :items="items" />