<template>
  <ElCard shadow="never" class="empty">
      <slot />
  </ElCard>
</template>

<style scoped>
.empty {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  text-align: center;
  color: var(--el-color-info-dark-2);
  background-color: rgba(255, 255, 255, 0.8);
}
</style>