<template>
  <div v-loading="loading">
    <ul v-if="items.length">
      <li v-for="item in items" class="list-item" key="item[keyPropName]">
        <slot :item="item" />
      </li>
    </ul>
    <UiEmpty v-else-if="defaultMessage">{{ defaultMessage }}</UiEmpty>
  </div>
</template>

<script setup lang="ts" generic="T">

defineProps<{
  items: T[]
  keyPropName: keyof T
  loading?: boolean
  defaultMessage?: string
}>()

</script>

<style scoped>
.list-item:not(:last-child) {
  margin-bottom: 0.5rem;
}
</style>