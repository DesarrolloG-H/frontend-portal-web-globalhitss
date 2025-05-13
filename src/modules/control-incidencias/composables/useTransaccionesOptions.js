// composables/useTransaccionesOptions.js
import { ref, watch } from 'vue'
import axios from 'axios'

export function useTransaccionesOptions(aplicacionIdRef) {
  const options = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchOptions = async (aplicacionId) => {
    if (!aplicacionId) {
      options.value = []
      return
    }

    loading.value = true
    try {
      const API_URL = import.meta.env.VITE_API_URL
      const res = await axios.get(`${API_URL}/incidencias/transacciones`, {
        params: { aplicacion_id: aplicacionId },
      })
      options.value = res.data.data.map((item) => ({
        id: item.id,
        nombre: item.nombre,
      }))
    } catch (err) {
      error.value = err
      console.error(`❌ Error cargando transacciones:`, err)
    } finally {
      loading.value = false
    }
  }

  watch(
    aplicacionIdRef,
    (newVal) => {
      fetchOptions(newVal)
    },
    { immediate: true },
  )

  return {
    options,
    loading,
    error,
  }
}
