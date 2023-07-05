<template>
  <ElPagination v-model:current-page="currentPage" :page-size="itemCount" :pager-count="linkCount" layout="prev, pager, next" :total="totalCount" background />
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: number
  itemCount?: number
  linkCount?: number
  totalCount: number
}>()

const emit = defineEmits<{
  'update:modelValue': [newValue: number]
}>()

const currentPage = computed({
  get: () => props.modelValue,
  set: (newValue) => emit('update:modelValue', newValue),
})
</script>