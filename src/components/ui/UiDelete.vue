<template>
  <div class="delete">
    <UiDraggable class="delete__area" />
    <Delete class="delete__icon" />
  </div>
</template>

<script setup lang="ts">
import Delete from '../icons/Delete.vue'

</script>

<style scoped>
.delete {
  position: relative;
  font-size: 1.25rem;
}

.delete__area {
  padding: 1.5rem;
}

.delete__icon {
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 1rem;
}
</style>