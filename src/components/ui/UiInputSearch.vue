<template>
  <ElInput v-model="value" :suffix-icon="Search" />
</template>

<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue'
import { debounce } from 'lodash'
import Search from '../icons/Search.vue'

const props = withDefaults(defineProps<{
  modelValue?: string
  delay?: number
}>(), { delay: 300 })

const emit = defineEmits<{
  'update:modelValue': [newValue: string]
}>()

const value = ref<string>()

const debounceFn = debounce((newValue) => {
  emit('update:modelValue', newValue)
}, props.delay)

onUnmounted(() => {
  debounceFn.cancel()
})

watch(value, debounceFn)

</script>