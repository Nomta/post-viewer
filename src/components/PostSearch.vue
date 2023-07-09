<template>
  <UiInputSearch 
    v-model="value" 
    class="post-search__input" 
    placeholder="Поиск по названию" 
  />
</template>

<script setup lang="ts">

const value = defineModel<string>()

</script>

<style scoped>

.post-search__input {
  max-width: 32rem;
}
</style>
