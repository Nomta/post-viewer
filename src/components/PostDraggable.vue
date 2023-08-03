<template>
  <div class="post-draggable">
    <UiDraggable 
      v-model="localPosts" 
      v-loading="loading" 
      :items="posts" 
      item-key="id" 
      group="posts" 
      :mode="mode" 
      :filter="filter"
      class="post-draggable__area" 
      v-slot="{ item }"
    >
      <PostListItem :post="item" />
    </UiDraggable>
    <UiEmpty v-if="empty" class="post-draggable__empty">
      {{ defaultMessage }}
    </UiEmpty>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Post } from '@/types'

const localPosts = defineModel<Post[]>() 

const { posts, defaultMessage } = defineProps<{
  posts: Post[]
  loading?: boolean
  mode?: string
  defaultMessage?: string
  filter?: (item: Post) => boolean
}>()

const empty = computed(() => 
  defaultMessage 
  && !(posts || localPosts.value)?.length
)

</script>

<style scoped>
.post-draggable {
  position: relative;
}
.post-draggable__area {
  height: 100%;
  min-height: 10.5rem;
  padding: 1rem;
}
.post-draggable__empty {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 1rem;
}

@media (min-width: 478px) {
  .post-draggable__area {
    min-height: 9.5rem;
  }
}
</style>