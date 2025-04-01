<template>
  <div>
    <h2>SOAP SEARCH</h2>
    <div class="capsule">
      <div class="search-content">
        <span class="subtitle-options">¿Qué desea buscar?</span>
        <div class="search">
          <i class="bx bx-search"></i>
          <input v-model="searchTerm" type="text" placeholder="Buscar..." class="input-search" />
        </div>
      </div>

      <div class="select-content">
        <span class="subtitle-options">Grupo</span>
        <select v-model="selectedGroup" class="filter-select">
          <option value="">Todos los equipos</option>
          <option v-for="team in uniqueGroups" :key="team" :value="team">{{ team }}</option>
        </select>
      </div>

      <div class="select-content">
        <span class="subtitle-options">Equipo</span>
        <select v-model="selectedSubteam" class="filter-select" :disabled="!selectedGroup">
          <option value="">Todos los subequipos</option>
          <option v-for="subteam in filteredSubteams" :key="subteam" :value="subteam">
            {{ subteam }}
          </option>
        </select>
      </div>

      <div class="select-content">
        <span class="subtitle-options">Documento</span>
        <select v-model="selectedTypeDocument" class="filter-select" :disabled="!selectedSubteam">
          <option value="">Todos los documentos</option>
          <option v-for="doc in filteredTypeDocuments" :key="doc" :value="doc">
            {{ doc }}
          </option>
        </select>
      </div>
      <div class="content-btn-search">
        <button class="btn-search" @click="applyFilters">Buscar</button>
      </div>
    </div>

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
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted, computed, watch } from 'vue'
import { VueGoodTable } from 'vue-good-table-next'
import 'vue-good-table-next/dist/vue-good-table-next.css'

const refTable = ref(null)
const rows = ref([])
const filteredRows = ref([])
const searchTerm = ref('')
const selectedGroup = ref('')
const selectedSubteam = ref('')
const selectedTypeDocument = ref('')

// 📌 Obtener datos del backend
const fetchData = async () => {
  try {
    const API_URL = import.meta.env.VITE_API_URL
    const response = await axios.get(`${API_URL}/api/files`)

    rows.value = response.data.map((item) => ({
      nombreDocumento: item.Nombre_Documento,
      grupo: item.Grupo,
      equipo: item.Equipo,
      tipoDocumento: item.Tipo_Documento,
      equipoMesaAgil: item.Equipo_Mesa_Agil,
      Ruta_archivo: item.Ruta_archivo,
    }))
    filteredRows.value = [...rows.value]
  } catch (error) {
    console.error('Error al obtener datos:', error)
  }
}

// // 📌 Aplicar filtros y resetear paginación
const applyFilters = () => {
  filteredRows.value = rows.value.filter((row) => {
    const matchesSearch = searchTerm.value
      ? row.nombreDocumento.toLowerCase().includes(searchTerm.value.toLowerCase())
      : true
    const matchesGroup = selectedGroup.value ? row.grupo === selectedGroup.value : true
    const matchesSubteam = selectedSubteam.value ? row.equipo === selectedSubteam.value : true
    const matchesTypeDocument = selectedTypeDocument.value
      ? row.tipoDocumento.toLowerCase().trim() === selectedTypeDocument.value.toLowerCase().trim()
      : true

    return matchesSearch && matchesGroup && matchesSubteam && matchesTypeDocument
  })

  if (refTable.value) {
    refTable.value.reset()
  }
}

// 📌 Obtener valores únicos para los filtros
const uniqueGroups = computed(() => [...new Set(rows.value.map((row) => row.grupo))])

// 📌 Filtrar subequipos según el grupo seleccionado
const filteredSubteams = computed(() => {
  if (!selectedGroup.value) return []
  return [
    ...new Set(
      rows.value.filter((row) => row.grupo === selectedGroup.value).map((row) => row.equipo),
    ),
  ]
})
// 📌 Filtrar Tipo de Documentos según el grupo y equipo seleccionado
const filteredTypeDocuments = computed(() => {
  if (!selectedGroup.value || !selectedSubteam.value) return []

  const tipos = [
    ...new Set(
      rows.value
        .filter(
          (row) =>
            row.grupo.trim() === selectedGroup.value.trim() && // Asegurar que el grupo coincida
            row.equipo.trim() === selectedSubteam.value.trim(), // Asegurar que el equipo coincida
        )
        .map((row) => row.tipoDocumento),
    ),
  ]
  return tipos
})

// 📌 Resetear filtros dependientes
watch(selectedGroup, () => {
  selectedSubteam.value = ''
  selectedTypeDocument.value = ''
})

watch(selectedSubteam, () => {
  selectedTypeDocument.value = ''
})

// 📌 Aplicar búsqueda en tiempo real
watch(searchTerm, () => {
  applyFilters()
})

// 📌 Definir columnas de la tabla
const columns = ref([
  { label: 'Grupo', field: 'grupo' },
  { label: 'Equipo', field: 'equipo' },
  { label: 'Tipo Documento', field: 'tipoDocumento' },
  // { label: 'Equipo Mesa Agil', field: 'equipoMesaAgil' },
  { label: 'Nombre Documento', field: 'nombreDocumento' },
  { label: 'Ruta de acceso', field: 'Ruta_archivo' },
])

onMounted(fetchData)
</script>

<style scoped>
h2 {
  font-size: 3rem;
  margin: 0;
  margin-block-start: 1rem;
  margin-block-end: 2rem;
}
.capsule {
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  align-items: center;
  border-radius: 1rem;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(18, 18, 18, 0.2);
  margin-block-end: 2.5rem;
}
.search-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.search {
  position: relative;
  display: flex;
}

.search i {
  position: absolute;
  top: 10px;
  left: 10px;
}

.search .input-search {
  block-size: 2rem;
  padding-inline-start: 2rem;
  border-radius: 1rem;
  border: 1px solid #ccc;
  flex: 1;
}

.subtitle-options {
  font-size: 1.2rem;
  font-weight: 600;
  margin-block-end: 0.5rem;
}

.select-content {
  display: flex;
  flex-direction: column;
}

.filter-select {
  block-size: 2.2rem;
  padding-block: 0.5rem;
  padding-inline: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  color: #000;
}

.btn-search {
  block-size: 2.5rem;
  padding-inline: 1.5rem;
  border-radius: 1rem;
  background-color: #171215;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.1s;
}

.btn-search:active {
  transform: scale(0.95);
  block-size: 2.3rem;
}

.vgt-wrap {
  flex: 1;
}

/* Estilos tabla registros */
::v-deep(.vgt-table td) {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;
  font-size: 1rem;
}

/* Estilos tabla Encabezados */
::v-deep(.vgt-table thead th) {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 40px;
}

@media (max-width: 1240px) {
  .capsule:first-of-type {
    /* border: 1px solid red; */
    flex-direction: column;
    align-items: normal;
  }
  .content-btn-search {
    display: flex;
    justify-content: center;
  }
  .btn-search {
    /* border: 1px solid red; */
    inline-size: 200px;
  }
}
</style>
