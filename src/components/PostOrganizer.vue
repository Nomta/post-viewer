<template>
  <div class="post-organizer">
    <PostList 
      :posts="posts" 
      :loading="loading" 
      class="post-organizer__area post-organizer__src" 
    />
    <PostList 
      :posts="[]" 
      class="post-organizer__area post-organizer__target" 
    />
  </div>
</template>

<script setup lang="ts">
import PostList from './PostList.vue'
import type { Post } from '@/types'

defineProps<{
  posts: Post[]
  loading?: boolean
}>()

</script>

<style scoped>
.post-organizer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (min-width: 768px) {
  .post-organizer {
    flex-direction: row;
  }
}

.post-organizer__area {
  padding: 1rem;
  border-radius: var(--el-border-radius-base);
}

.post-organizer__src {
  padding: 1rem;
  background-color: var(--el-color-primary-light-7);
}

.post-organizer__target {
  padding: 1rem;
  background-color: var(--el-color-success-light-7);
}

@media (min-width: 768px) {

  .post-organizer__area {
    width: calc(50% - 0.5rem);
  }
}
</style>