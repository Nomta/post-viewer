<template>
  <ElCard shadow="hover">

    <template v-if="title" #header>
      <ElText size="large" tag="h2">{{ title }}</ElText>
    </template>
    
    <template #default>
      <ElText>
        <slot />
      </ElText>
    </template>
    
  </ElCard>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>