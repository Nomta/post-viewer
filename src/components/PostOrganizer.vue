<template>
  <div class="post-organizer">
    
    <div class="post-column post-column__src">
      <PostDraggable 
        :posts="posts" 
        :loading="loading" 
        :filter="filter" 
        mode="clone" 
        default-message="Нет данных"
        class="post-draggable" 
      />
    </div>

    <div class="post-column post-column__target">
      <PostDraggable 
        v-model="localPosts"
        default-message="Здесь пока ничего нет. Перетащите сюда элементы из основного списка для удобной работы с ними"
        class="post-draggable" 
      />

      <UiDelete class="post-delete" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useStorage } from '@/services/storage'
import type { Post } from '@/types'

defineProps<{
  posts: Post[]
  loading?: boolean
}>()

const createStorage = useStorage()
const { getItem, setItem } = createStorage('posts')

const localPosts = ref<Post[]>(getItem('localPosts') as Post[])
const localIndexes = computed(() => localPosts.value.map((post) => post.id))

const filter = (item: Post) => {
  return localIndexes.value.includes(item.id)
}

watch(localPosts, (newValue) => {
  setItem('localPosts', newValue)
})

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
  border-radius: var(--border-radius);
}

.post-column__src {
  background-color: var(--color-primary-light);
}

.post-column__target {
  background-color: var(--color-success-light);
}

.post-column__delete {
  background-color: var(--color-danger-light);
}

.post-draggable {
  flex-grow: 1;
}

.post-delete {
  flex-grow: 0;
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