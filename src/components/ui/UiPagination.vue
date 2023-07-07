<template>
  <div class="pagination">
    <ElPagination 
      v-model:current-page="currentPage" 
      :page-size="itemCount" 
      :pager-count="linkCount" 
      :total="totalCount" 
      layout="prev, pager, next" 
      hide-on-single-page  
      background 
    />
    <p style="margin-left: 1.5rem;">{{ currentPage }} / {{ totalCount }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: number
  itemCount?: number
  linkCount?: number
  totalCount: number
}>()

const currentPage = defineModel()

</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
}
</style>