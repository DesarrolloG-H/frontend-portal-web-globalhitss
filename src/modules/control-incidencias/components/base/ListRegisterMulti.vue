<template>
  <!-- <span class="title-list">Lista:</span> -->
  <div class="list-register">
    <div class="list" v-for="(item, index) in list" :key="index">
      <div class="fields">
        <span class="list-item" v-for="(valor, i) in obtenerValores(item)" :key="i">
          {{ valor }}
        </span>
      </div>
      <button class="btn-delete" @click="eliminar(item)">Eliminar</button>
    </div>
    <p class="not-list" v-if="list.length === 0">No hay registros</p>
  </div>
</template>

<script setup>
defineProps({
  list: Array,
  eliminar: Function,
})

function obtenerValores(item) {
  if (typeof item === 'object' && item !== null) {
    if ('nodo' in item && 'ipNodo' in item) {
      return [item.nodo, item.ipNodo]
    }
    if ('servicio' in item && 'nombreServicio' in item) {
      return [item.servicio, item.nombreServicio]
    }
    if ('balanceador' in item && 'nombreBalanceador' in item) {
      return [item.balanceador, item.nombreBalanceador]
    }
    if ('servidor' in item && 'nombreServidor' in item) {
      return [item.servidor, item.nombreServidor]
    }
    // Si no entra en ningún caso, mostrar todos los valores:
    return Object.values(item)
  }
  return [String(item)]
}
</script>

<style scoped>
.list-register {
  border: 1px solid #ccc;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  padding-inline: 0.5rem;
  max-block-size: 70px;
  overflow: auto;
  border-radius: 0.5rem;
  padding: 0.5rem;
}
.list {
  display: flex;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.fields {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  gap: 1rem;
}
.list-item {
  margin: 0;
  flex: 1;
  font-size: 0.9rem;
  font-weight: 600;
}
.btn-delete {
  cursor: pointer;
  background-color: rgb(216, 32, 32);
  border: none;
  color: white;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.7rem;
}

.title-list {
  font-size: 1rem;
  font-weight: 600;
  color: #000;
}
.not-list {
  color: #000000;
  margin: 0;
  padding-inline: 0.5rem;
  font-size: 0.9rem;
}
</style>
