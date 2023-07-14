<template>
  <div class="post-organizer">
    
    <div class="post-column">
      <div class="post-list">
        <PostDraggable 
          :posts="posts" 
          :loading="loading" 
          :filter="filter" 
          mode="clone" 
          default-message="Нет данных"
          class="post-draggable post-draggable--src" 
        />
      </div>
    </div>

    <div class="post-column">
      <div class="post-list">
        <PostDraggable 
          v-model="localPosts"
          default-message="Здесь пока ничего нет. Перетащите сюда элементы из основного списка для удобной работы с ними"
          class="post-draggable post-draggable--target" 
        />
      </div>

      <div class="post-delete">
        <UiDelete class="post-draggable post-draggable--delete" />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStorage } from '@/composables/useStorage'
import type { Post } from '@/types'

defineProps<{
  posts: Post[]
  loading?: boolean
}>()

const localPosts = useStorage<Post[]>('posts', [])

const localIndexes = computed(() => {
  return localPosts.value?.map((post) => post.id)
})

const filter = (item: Post) => {
  return localIndexes.value?.includes(item.id)
}

</script>

<style scoped>
.post-organizer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.post-column {
  min-height: 14rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.post-list {
  flex-grow: 1;
}

.post-draggable {
  height: 100%;
  border-radius: var(--border-radius);
}

.post-draggable--src {
  background-color: var(--color-primary-light);
}

.post-draggable--target {
  background-color: var(--color-success-light);
}

.post-draggable--delete {
  height: 3rem;
  overflow: hidden;
  background-color: var(--color-danger-light);
}

.post-delete:deep(.active) {
  background-color: var(--color-danger-medium);
}

@media (min-width: 768px) {
  .post-organizer {
    flex-direction: row;
  }

  .post-column {
    width: calc(50% - 0.5rem);
  }
  
  /* высота блока подстраивается под содержимое: */
  
  /* 
  .post-draggable--delete {
    height: auto;
    max-height: 4.5rem;
  }
   */
}
</style>