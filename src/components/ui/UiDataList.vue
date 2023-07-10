<template>
  <div v-loading="loading">
    <ul v-if="items.length">
      <li v-for="item in items" class="list-item" key="item[itemKey]">
        <slot name="default" :item="item" />
      </li>
    </ul>
    <UiEmpty v-else>
      <slot name="empty">Нет данных</slot>
    </UiEmpty>
  </div>
</template>

<script setup lang="ts" generic="T">

defineProps<{
  items: T[]
  itemKey: keyof T
  loading?: boolean
}>()

</script>

<style scoped>
.list-item:not(:last-child) {
  margin-bottom: 0.5rem;
}
</style>