<template>
  <div class="delete">
    <UiDraggable 
      class="delete__area" 
      @dragenter="active = true" 
      @dragleave="active = false"
      @add="active = false"
    />
    <Delete 
      class="delete__icon" 
      :class="{'active': active}" 
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Delete from '../icons/Delete.vue'

const active = ref(false)

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

.active {
  color: var(--el-color-danger-dark-2);
}
</style>