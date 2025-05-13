<template>
  <!-- <span class="title-list">Lista:</span> -->
  <div class="list-register">
    <p class="list" v-for="(item, index) in list" :key="index">
      {{ mostrarValor(item) }}
      <button class="btn-delete" @click="eliminar(item)">❌</button>
    </p>
    <p class="not-list" v-if="list.length === 0">No hay registros</p>
  </div>
</template>

<script setup>
defineProps({
  list: {
    type: Array,
    default: () => [],
  },
  eliminar: {
    type: Function,
    required: true,
  },
})

function mostrarValor(item) {
  if (typeof item === 'object' && item !== null) {
    if ('bd' in item && typeof item.bd === 'object') return item.bd.nombre
    return JSON.stringify(item)
  }
  return String(item)
}
</script>
<style scoped>
.list-register {
  border: 1px solid #ccc;
  padding-inline: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  max-block-size: 70px;
  border-radius: 0.5rem;
  padding: 0.5rem;
}

.list-register .list {
  background-color: #101010;
  color: #fff;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.7rem;
  margin: 0;
  padding: 0.5rem;
  padding-inline-end: 1.2rem;
  position: relative;
  block-size: 14px;
}

.not-list {
  color: #000000;
  padding-inline: 0.5rem;
  font-size: 0.9rem;
}
.btn-delete {
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  border: none;
  margin: 0;
  padding: 0;
  color: red;
  font-size: 0.7rem;
  cursor: pointer;
  background-color: #fff;
  border-radius: 50%;
}

.btn-delete:hover {
  background-color: #ffcccc;
}
.btn-delete:active {
  transform: scale(1.1);
}
.title-list {
  font-size: 1rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 0.5rem;
}
.not-list {
  color: #000000;
  padding: 0.5rem;
  margin: 0;
  font-size: 0.9rem;
}
</style>
