<template>
  <ElInput v-model="value" :suffix-icon="Search" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDebounceWatch } from '@/composables/useDebounceWatch'
import Search from '../icons/Search.vue'

const value = ref<string>()

const props = withDefaults(defineProps<{
  modelValue?: string
  delay?: number
}>(), { delay: 300 })

const emit = defineEmits<{
  'update:modelValue': [newValue: string]
}>()

useDebounceWatch(value, (newValue) => {
  emit('update:modelValue', newValue as string)
}, props.delay)
</script>