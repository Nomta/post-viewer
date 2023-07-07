<template>
  <main class="post-viewer">
    <PostSearch v-model="search" />
    <PostList :posts="posts" :loading="loading" class="post-list" />
    <UiPagination  
      v-model="page" 
      :item-count="countPerPage" 
      :total-count="totalCount" 
      class="post-pagination" 
    />
  </main>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { fetchPosts } from '@/api'
import { useFetch } from '@/composables/useFetch'
import PostList from './PostList.vue'
import PostSearch from './PostSearch.vue'
import UiPagination from './UiPagination.vue'
import type { Post, PostSearchParams } from '@/types'

//posts

const posts = computed(() => data.value ?? [])

//pagination
const page = ref(1)
const countPerPage = 2
const totalCount = ref<number>(0)

//search
const search = ref('')

//load data

const { data, loading, fetchData, headers } = useFetch<Post[], PostSearchParams>(fetchPosts)

watch([page, search], async () => {
  await fetchData({ 
    limit: countPerPage, 
    page: page.value, 
    search: search.value 
  })

  if (headers.value.totalCount) {
    totalCount.value = headers.value.totalCount
  }
}, { immediate: true })

</script>

<style scoped>
.post-viewer {
  display: flex;
  flex-direction: column;
  width: 98%;
  max-width: 75rem;
  margin: 0 auto;
  padding: 1rem;
}
.post-list {
  min-height: 22.5rem;
}
.post-pagination {
  margin-top: auto;
}
</style>