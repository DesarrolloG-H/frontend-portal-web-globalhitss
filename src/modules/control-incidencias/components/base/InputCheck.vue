<template>
  <div class="content-inputCheck">
    <label class="name-input" :for="id">{{ label }}</label>
    <input
      type="checkbox"
      :id="id"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
  </div>
</template>

<script setup>
defineProps({
  label: String,
  modelValue: Boolean,
  id: {
    type: String,
    default: () => `pcheck-${Math.random().toString(36).substring(2, 9)}`,
  },
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.content-inputCheck {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  font-family: sans-serif;
}
.name-input {
  font-size: 0.8rem;
  font-weight: 700;
}
</style>
