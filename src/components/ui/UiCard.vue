<template>
  <ElCard shadow="hover" :class="{ closable: 'closable' }">

    <template v-if="title" #header>
      <ElText size="large" tag="h2">{{ title }}</ElText>
    </template>
    
    <template #default>
      <ElText>
        <slot />
      </ElText>
      <UiCloseButton v-if="closable" class="close" @click="close" />
    </template>
    
  </ElCard>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  closable?: boolean
}>()

const emit = defineEmits<{ close: [] }>()
const close = () => emit('close')
</script>

<style scoped>
.closable {
  position: relative;
  padding-right: 0.25em;
}

.close {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.75em;
}
</style>