import { ref, computed, watch, onMounted } from 'vue'
import axios from 'axios'

export function useSoapSearch() {
  const refTable = ref(null)
  const rows = ref([])
  const filteredRows = ref([])
  const searchTerm = ref('')
  const selectedGroup = ref('')
  const selectedSubteam = ref('')
  const selectedTypeDocument = ref('')

  const columns = ref([
    { label: 'Nombre Documento', field: 'nombreDocumento' },
    { label: 'Ruta de acceso', field: 'Ruta_archivo' },
  ])

  const fetchData = async () => {
    try {
      const API_URL = import.meta.env.VITE_API_URL
      const response = await axios.get(`${API_URL}/soapsearch/files`)
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
  }

  const uniqueGroups = computed(() => {
    const groups = [...new Set(rows.value.map((row) => row.grupo))]
    return groups
  })

  const filteredSubteams = computed(() => {
    if (!selectedGroup.value) return []
    const subteams = [
      ...new Set(
        rows.value.filter((row) => row.grupo === selectedGroup.value).map((row) => row.equipo),
      ),
    ]
    return subteams
  })

  const filteredTypeDocuments = computed(() => {
    if (!selectedGroup.value || !selectedSubteam.value) return []
    const docs = [
      ...new Set(
        rows.value
          .filter(
            (row) =>
              row.grupo.trim() === selectedGroup.value.trim() &&
              row.equipo.trim() === selectedSubteam.value.trim(),
          )
          .map((row) => row.tipoDocumento),
      ),
    ]
    return docs
  })

  watch(selectedGroup, () => {
    selectedSubteam.value = ''
    selectedTypeDocument.value = ''
  })

  watch(selectedSubteam, () => {
    selectedTypeDocument.value = ''
  })

  watch(searchTerm, () => {
    applyFilters()
  })

  onMounted(fetchData)

  return {
    refTable,
    rows,
    filteredRows,
    searchTerm,
    selectedGroup,
    selectedSubteam,
    selectedTypeDocument,
    uniqueGroups,
    filteredSubteams,
    filteredTypeDocuments,
    columns,
    applyFilters,
    fetchData,
  }
}
