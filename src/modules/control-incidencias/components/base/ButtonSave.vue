<template>
  <button @click="handleClick" :disabled="disabled">Agregar</button>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  form: Object,
  agregar: Function,
  camposAUsar: {
    type: Array,
    default: () => [], // ejemplo: ['nombreServicio', 'descripcionServicio']
  },
})
// Desactivar si algún campo necesario está vacío
const disabled = computed(() => {
  if (!props.form) return true
  return props.camposAUsar.some((campo) => !props.form?.[campo])
})

const handleClick = () => {
  const datosFiltrados = props.camposAUsar.reduce((obj, campo) => {
    obj[campo] = props.form[campo]
    return obj
  }, {})
  props.agregar(datosFiltrados)
}
</script>

<style scoped>
button {
  background-color: #0f0f0f;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  inline-size: 6rem;
  block-size: 2rem;
}
button:disabled {
  background-color: #3f3f3f;
  cursor: not-allowed;
}
button:hover:not(:disabled) {
  background-color: #282828;
}
button:active:not(:disabled) {
  transform: scale(0.95);
}
</style>
