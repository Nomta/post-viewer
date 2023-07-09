<template>
  <div class="post-select">
    Выводить по&nbsp;
    <UiSelect v-model="value" :options="[5, 10]" class="post-select__input" />
  </div>
</template>

<script setup lang="ts">
import UiSelect from './ui/UiSelect.vue'

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
