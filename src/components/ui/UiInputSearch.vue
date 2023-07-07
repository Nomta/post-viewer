<template>
  <ElInput v-model="value" :suffix-icon="Search" />
</template>

<script setup lang="ts">
import Search from '../icons/Search.vue'

const value = defineModel()
</script>

<style scoped></style>