<template>
  <div>
    <h2 v-if="title" :id="title">
      {{ title }}
    </h2>
    <div class="container">
      <NavCard
        v-for="{ title, icon, desc, link } in items"
        :key="link"
        :title="title"
        :desc="desc"
        :link="link"
        :icon="icon"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import NavCard from './NavCard.vue'
import { NavLink } from './type';

defineProps<{
  title: string,
  items: NavLink[]
}>()
</script>

<style scoped>
.container {
  --gap: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: var(--gap);
  grid-auto-flow: row dense;
  justify-content: center;
  margin-top: var(--gap);
}
</style>