<template>
  <UiCard>
    <span class="post-title">{{post.title}}</span>
  </UiCard>
</template>

<script setup lang="ts">
import UiCard from './ui/UiCard.vue'
import type { Post } from '@/types'

defineProps<{
  post: Post
}>()
</script>

<style scoped>
.post-title {
  font-weight: bold;
  text-transform: capitalize;
}
</style>