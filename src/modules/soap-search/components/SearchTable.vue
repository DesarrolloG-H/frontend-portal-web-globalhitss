<template>
  <div class="capsule">
    <vue-good-table
      ref="refTable"
      :columns="columns"
      :rows="filteredRows"
      :pagination-options="{
        enabled: true,
        perPage: 10,
        perPageDropdown: [10, 20, 30, 40, 50],
      }"
    >
      <template v-slot:table-row="props">
        <span v-if="props.column.field === 'Ruta_archivo'">
          <a
            v-if="props.row.Ruta_archivo"
            :href="props.row.Ruta_archivo"
            target="_blank"
            class="link"
          >
            🔗 Abrir
          </a>
          <span v-else>No disponible</span>
        </span>
      </template>
    </vue-good-table>
  </div>
</template>

<script setup>
import { VueGoodTable } from 'vue-good-table-next'
import 'vue-good-table-next/dist/vue-good-table-next.css'
import { inject } from 'vue'

const { refTable, filteredRows, columns } = inject('soapSearch')
</script>

<style scoped>
.vgt-wrap {
  flex: 1;
}

/* Estilos tabla registros */
::v-deep(.vgt-table td) {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
}

/* Estilos tabla Encabezados */
::v-deep(.vgt-table thead th) {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 40px;
}
</style>
