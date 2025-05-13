import { ref, onMounted } from 'vue'
import axios from 'axios'

export const useSelectOptions = (endpoint, labelKey = 'nombre') => {
  const options = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchOptions = async () => {
    loading.value = true
    try {
      const API_URL = import.meta.env.VITE_API_URL
      const res = await axios.get(`${API_URL}/incidencias/${endpoint}`)
      options.value = res.data.data.map((item) => ({
        id: item.id,
        nombre: item[labelKey],
      }))
    } catch (err) {
      error.value = err
      console.error(`❌ Error cargando ${endpoint}:`, err)
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchOptions)

  return {
    options,
    loading,
    error,
  }
}
