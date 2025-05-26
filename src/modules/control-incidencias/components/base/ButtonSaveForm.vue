<template>
  <div>
    <button type="submit" class="btn btn-primary">Enviar Formulario</button>
  </div>
</template>

<script setup></script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  background-color: #0f0f0f;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  inline-size: 10rem;
  block-size: 2.5rem;
  font-size: 1rem;
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
