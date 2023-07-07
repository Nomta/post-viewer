<template>
  <ElCard shadow="never" class="empty">
    <ElText size="large" class="text-center">
      <slot />
    </ElText>
  </ElCard>
</template>

<style scoped>
.empty {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);
}
</style>