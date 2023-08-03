<template>
  <div class="post-select">
    Выводить по&nbsp;
    <UiSelect 
      v-model="value" 
      :options="POST_COUNT_PER_PAGE_OPTIONS" 
      class="post-select__input" 
    />
  </div>
</template>

<script setup lang="ts">
import { POST_COUNT_PER_PAGE_OPTIONS } from '@/config'

const value = defineModel<number>()

</script>

<style scoped>
.post-select {
  white-space: nowrap;
}

.post-select__input {
  width: 6rem;
}
</style>
