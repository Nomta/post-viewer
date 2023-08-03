<template>
  <ElInput v-model="value" :suffix-icon="Search" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDebounceWatch } from '@/composables/useDebounceWatch'
import Search from '../icons/Search.vue'

const value = ref<string>()

const { delay = 300 } = defineProps<{
  modelValue?: string
  delay?: number
}>()

const emit = defineEmits<{
  'update:modelValue': [newValue: string]
}>()

useDebounceWatch(value, (newValue) => {
  emit('update:modelValue', newValue as string)
}, delay)
</script>