<template>
  <draggable 
    :list="items" 
    :group="group" 
    :sort="isMove" 
    :item-key="itemKey" 
    :ghost-class="ghostClass"
    filter=".disabled" 
    class="draggable-area"
    :class="{'active': active}" 
    @dragenter="active = true" 
    @dragleave="active = false"
    @add="active = false"
  >
    <template #item="{ element }">
      <div 
        class="draggable-item" 
        :class="{'disabled': filter?.(element) }"
      >
        <slot :item="element" />
      </div>
    </template>
  </draggable>
</template>

<script setup lang="ts" generic="T">
import { ref, computed } from 'vue'
import draggable from 'vuedraggable'

const { mode, group: groupName } = defineProps<{
  items: T[]
  itemKey: string
  group: string
  mode?: Mode
  filter?: (item: T) => boolean
}>()

/* highlidght */

const active = ref(false)

/* mode setup */

type Mode = 'clone' | 'move' | 'off'

const isMove = mode === 'move' || !mode

const group = computed(() => ({
  name: groupName,
  pull: mode === 'clone' ? 'clone' : isMove,
  put: isMove,
}))

const ghostClass = isMove ? 'ghost' : undefined

</script>

<style scoped>
.draggable-area {
  min-height: 3rem;
  transition: 0.3s all;
}
.draggable-item {
  cursor: move;
}

.disabled {
  opacity: 0.8;
  cursor: default;
}

.ghost {
  visibility: hidden;
}
</style>