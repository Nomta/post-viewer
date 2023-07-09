<template>
  <ElSelect v-model="value" :placeholder="placeholder" default-first-option>
    <ElOption 
      v-for="option in optionItems"
        :key="option.value"
        :label="option.label"
        :value="option.value"
    />
  </ElSelect>
</template>

<script setup lang="ts" generic="T">
import { computed } from 'vue'

const value = defineModel()

const props = withDefaults(defineProps<{
  options: Option[]
  placeholder?: string
}>(), {
  placeholder: ''
})

const optionItems = computed(() => {
  return props.options.map((option) => {
    return typeof option === 'object' ? option : {
      value: option,
      label: option,
    }
  })
})

/* types */

type Option = {
  value: T
  label: string
} | string | number
</script>