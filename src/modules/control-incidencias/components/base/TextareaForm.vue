<template>
  <div class="base-textarea">
    <label v-if="label" :for="id" class="name-input">{{ label }}</label>
    <textarea
      :id="id"
      v-model="modelValueLocal"
      :placeholder="placeholder"
      :rows="rows"
      :disabled="disabled"
      :readonly="readonly"
      class="textarea"
    ></textarea>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Props
const props = defineProps({
  modelValue: String,
  label: String,
  id: String,
  placeholder: String,
  rows: {
    type: Number,
    default: 3,
  },
  disabled: Boolean,
  readonly: Boolean,
})

// Emits
const emit = defineEmits(['update:modelValue'])

// Computed v-model binding
const modelValueLocal = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})
</script>

<style scoped>
.base-textarea {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}

.name-input {
  font-size: 0.8rem;
  font-weight: 700;
}

.textarea {
  padding: 0.4rem 0.6rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-family: 'Roboto', sans-serif;
  resize: vertical;
}
</style>
