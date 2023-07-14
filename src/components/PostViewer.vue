<template>
  <main class="post-viewer">

    <PostHeader>
      <PostSearch v-model="search" />
      <PostCountSelect v-model="countPerPage" />
    </PostHeader>

    <PostOrganizer 
      :posts="posts" 
      :loading="isFetching" 
      class="post-organizer" 
    />

    <UiPagination 
      v-model="page" 
      :item-count="countPerPage" 
      :total-count="totalCount" 
      class="post-pagination" 
    />

  </main>
</template>

<script setup lang="ts">
import { computed, ref, toRefs } from 'vue'
import { usePostQuery } from '@/composables/usePostQuery'
import { POST_COUNT_PER_PAGE } from '@/config'

// default params

const search = ref('')
const page = ref(1)
const countPerPage = ref(POST_COUNT_PER_PAGE)

// load data

const params = computed(() => ({
  limit: countPerPage.value,
  page: page.value,
  search: search.value
}))

const response = usePostQuery(params)
const { isFetching, data } = toRefs(response)

// response 

const posts = computed(() => data.value?.data ?? [])
const totalCount = computed<number>(() => data.value?.totalCount ?? 0)

</script>

<style scoped>
.post-viewer {
  display: flex;
  flex-direction: column;
  width: 98%;
  max-width: 75rem;
  min-height: 100vh;
  margin: 0 auto;
  padding: 1rem;
}

.post-organizer {
  min-height: calc(100vh - 9.5rem);
}

.post-pagination {
  margin-top: auto;
}
</style>