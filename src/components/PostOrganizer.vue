<template>
  <div class="post-organizer">
    <div class="post-column post-column__src">
      <PostDraggable 
        :posts="posts"
        :loading="loading"
        :filter="filter"
        mode="clone"
        default-message="Нет данных" 
      />
    </div>
    <div class="post-column post-column__target">
      <PostDraggable 
        v-model="localPosts" 
        default-message="Здесь пока ничего нет. Перетащите сюда элементы из основного списка для удобной работы с ними" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Post } from '@/types'

defineProps<{
  posts: Post[]
  loading?: boolean
}>()

const localPosts = ref<Post[]>([])
const localIndexes = computed(() => localPosts.value.map((post) => post.id))

const filter = (item: Post) => {
  return localIndexes.value.includes(item.id)
}

</script>

<style scoped>
.post-organizer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.post-column {
  border-radius: var(--el-border-radius-base);
}

.post-column__src {
  background-color: var(--el-color-primary-light-7);
}

.post-column__target {
  background-color: var(--el-color-success-light-7);
}

@media (min-width: 768px) {
  .post-organizer {
    flex-direction: row;
  }

  .post-column {
    width: calc(50% - 0.5rem);
  }
}
</style>