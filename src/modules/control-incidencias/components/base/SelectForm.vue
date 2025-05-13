<template>
  <div class="base-select">
    <label v-if="label" :for="id" class="name-input">{{ label }}</label>
    <select :id="id" v-model="modelValueLocal" :disabled="disabled" class="select">
      <option value="null" disabled selected hidden>{{ placeholder }}</option>
      <option v-for="(option, index) in options" :key="index" :value="option">
        {{ option.nombre }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Props
const props = defineProps({
  modelValue: Object,
  label: String,
  id: String,
  options: {
    type: Array,
    required: true,
  },
  placeholder: {
    type: String,
    default: 'Seleccione una opción',
  },
  disabled: Boolean,
})
// Emits
const emit = defineEmits(['update:modelValue'])

// Model
const modelValueLocal = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})
</script>

<style scoped>
.base-select {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}

.name-input {
  font-size: 0.8rem;
  font-weight: 700;
}

.select {
  font-family: 'Roboto', sans-serif;
  padding: 0.3rem 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
}
</style>
