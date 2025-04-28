<template>
  <section class="capsule-section">
    <h2 v-if="title" class="capsule-title">{{ title }}</h2>
    <div class="capsule-content">
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
})
</script>

<style scoped>
.capsule-section {
  border-radius: 1rem;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(18, 18, 18, 0.2);
  margin-bottom: 2rem;
  /* flex: 1; */
}

.capsule-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.capsule-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
