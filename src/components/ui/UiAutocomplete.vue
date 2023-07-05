<template>
  <ElAutocomplete v-model="value" :fetch-suggestions="load" :value-key="itemTitle" :placeholder="placeholder" @select="handleSelect">
    <template #suffix>
      <ElIcon class="el-input__icon">
        <Search />
      </ElIcon>
    </template>
  </ElAutocomplete>
</template>

<script setup lang="ts" generic="T">
import { computed } from 'vue'
import Search from '../icons/Search.vue'

const props = defineProps<{
  modelValue: string
  itemTitle: keyof T
  loader: (queryString: string) => T[]
  placeholder?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [newValue: string]
  'select': [item: T]
}>()

const value = computed({
  get: () => props.modelValue,
  set: (newValue) => emit('update:modelValue', newValue),
})

type CBFunction = (data: T[]) => void

const load = (queryString: string, cb: CBFunction) => {
  const items = props.loader(queryString)
  cb(items)
}

const handleSelect = (selectedItem: T) => {
  emit('select', selectedItem)
}

</script>
