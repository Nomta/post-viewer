<template>
  <UiDataList :items="posts" :loading="loading" key-prop-name="id" v-slot="{ item }">
    <PostListItem :post="item" />
  </UiDataList>
</template>

<script setup lang="ts">
import type { Post } from '@/types'

defineProps<{
  posts: Post[]
  loading?: boolean
}>()

</script>