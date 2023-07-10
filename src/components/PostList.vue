<template>
  <UiDataList 
    :items="posts" 
    :loading="loading" 
    :default-message="defaultMessage"
    item-key="id"
  >
    <template #default="{ item }">
      <PostListItem :post="item" />
    </template>
    <template v-if="defaultMessage" #empty>
      {{ defaultMessage }}
    </template>
  </UiDataList>
</template>

<script setup lang="ts">
import type { Post } from '@/types'

defineProps<{
  posts: Post[]
  loading?: boolean
  defaultMessage?: string
}>()

</script>