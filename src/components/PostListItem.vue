<template>
  <UiCard :title="post.title">
    {{post.body}}
  </UiCard>
</template>

<script setup lang="ts">
import UiCard from './ui/UiCard.vue'
import type { Post } from '@/types'

defineProps<{
  post: Post
}>()
</script>