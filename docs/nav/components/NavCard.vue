<template>
  <a v-if="link" class="nav-link !no-underline rounded-lg" :href="link" target="_blank" rel="noopener noreferrer">
    <article class="m-4">
      <div class="flex items-center h-full">
        <div v-if="icon && !iconLoadError" class="icon w-9 h-9 p-1.5 rounded">
          <img :src="resolveIcon(icon)" alt="" @error="handleImageError" class="w-full h-full" />
        </div>
        <h5 class="title ml-2">{{ title }}</h5>
      </div>
      <p class="desc !my-3">{{ desc }}</p>
    </article>
  </a>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { ref } from 'vue';
import { NavLink } from './type'

const { isDark } = useData()

defineProps<{
  icon?: NavLink['icon']
  title?: NavLink['title']
  desc?: NavLink['desc']
  link: NavLink['link']
}>()

const iconLoadError = ref(false)

function handleImageError() {
  iconLoadError.value = true
}

const resolveIcon = (icon: string | { light: string; dark: string }) => {
  if (typeof icon === 'string') return icon
  return isDark.value ? icon.dark : icon.light
}
</script>

<style lang="scss" scoped>
.nav-link {
  display: block;
  background-color: var(--nav-bg);
  border: 1px solid transparent;
  height: 100%;
  transition: all 0.2s;

  &:hover {
    color: var(--nav-title);
    border-color: var(--nav-hover);
  }

  .icon {
    background-color: var(--nav-icon-bg);
  }

  .title {
    color: var(--nav-title);
  }

  .desc {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    line-height: 20px;
    color: var(--nav-desc);
    font-size: 12px;
  }
}
</style>