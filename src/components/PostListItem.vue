<template>
  <UiCard :closable="closable" @close="close">
    <span class="post-title">{{post.title}}</span>
  </UiCard>
</template>

<script setup lang="ts">
import type { Post } from '@/types'

const props = defineProps<{
  post: Post
  closable?: boolean
}>()

const emit = defineEmits<{ 
  close: [ id: string ] 
}>()

const close = () => emit('close', props.post.id)
</script>

<style scoped>
.post-title {
  font-weight: bold;
  text-transform: capitalize;
}
</style>