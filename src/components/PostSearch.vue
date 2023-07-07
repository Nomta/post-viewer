<template>
  <div class="post-search">
    <UiInputSearch 
      v-model="selectedPostTitle" 
      class="post-search__input" 
      placeholder="Поиск по названию" 
    />
  </div>
</template>

<script setup lang="ts">
import UiInputSearch from './ui/UiInputSearch.vue'

const selectedPostTitle = defineModel()

</script>

<style scoped>
.post-search {
  display: flex;
  justify-content: end;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.post-search__input {
  max-width: 32rem;
}
</style>
