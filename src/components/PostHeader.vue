<template>
  <div class="post-header">
    <slot />
  </div>
</template>

<style scoped>
.post-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

@media (min-width: 768px) {
  .post-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
