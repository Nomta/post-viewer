<template>
  <UiPagination  
    v-model="currentPage" 
    :item-count="countPerPage" 
    :total-count="totalCount" 
    class="post-pagination" 
  />
</template>

<script setup lang="ts">
const currentPage = defineModel()

defineProps<{
  totalCount: number
}>()

const countPerPage = 10

</script>

<style scoped>
.post-pagination {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>