<template>
  <div class="base-input">
    <label v-if="label" :for="id" class="name-input">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      v-model="modelValueLocal"
      :disabled="disabled"
      :readonly="readonly"
      required
      class="input"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Props
const props = defineProps({
  modelValue: [String, Number],
  label: String,
  id: String,
  type: {
    type: String,
    default: 'text',
  },
  placeholder: String,
  disabled: Boolean,
  readonly: Boolean,
})

// Emits
const emit = defineEmits(['update:modelValue'])

// Vinculación con v-model
const modelValueLocal = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})
</script>

<style scoped>
.base-input {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}

.name-input {
  font-size: 0.8rem;
  font-weight: 700;
}

.input {
  font-family: 'Roboto', sans-serif;
  padding: 0.3rem 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
}
</style>
