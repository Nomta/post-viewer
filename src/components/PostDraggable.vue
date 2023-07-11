<template>
  <div class="post-draggable">
    <UiDraggable 
      v-model="localPosts" 
      v-loading="loading" 
      group="posts" 
      item-key="id" 
      :items="posts" 
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

const props = defineProps<{
  posts: Post[]
  loading?: boolean
  mode?: string
  defaultMessage?: string
  filter?: (item: Post) => boolean
}>()

const empty = computed(() => 
  props.defaultMessage 
  && !(props.posts || localPosts.value)?.length
)

</script>

<style scoped>
.post-draggable {
  position: relative;
  height: 100%;
}
.post-draggable__area {
  height: 100%;
  padding: 1rem;
}
.post-draggable__empty {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 1rem;
}
</style>