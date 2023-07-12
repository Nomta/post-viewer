<template>
  <draggable 
    :list="items" 
    :group="group" 
    :sort="isMove" 
    :item-key="itemKey" 
    :ghost-class="ghostClass"
    class="draggable-area"
    filter=".disabled"
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
import { computed } from 'vue'
import draggable from 'vuedraggable'

const props = defineProps<{
  items: T[]
  itemKey: string
  group: string
  mode?: Mode
  filter?: (item: T) => boolean
}>()

/* mode setup */

type Mode = 'clone' | 'move' | 'off'

const isMove = props.mode === 'move' || !props.mode

const group = computed(() => ({
  name: props.group,
  pull: props.mode === 'clone' ? 'clone' : isMove,
  put: isMove,
}))

const ghostClass = isMove ? 'ghost' : undefined

</script>

<style scoped>
.draggable-area {
  min-height: 3rem;
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