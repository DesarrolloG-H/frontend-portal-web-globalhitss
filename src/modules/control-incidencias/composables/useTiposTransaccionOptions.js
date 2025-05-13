// composables/useTiposTransaccionOptions.js
import { ref, watch } from 'vue'
import axios from 'axios'

export function useTiposTransaccionOptions(aplicacionIdRef, transaccionIdRef) {
  const options = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchOptions = async (aplicacionId, transaccionId) => {
    if (!aplicacionId || !transaccionId) {
      options.value = []
      return
    }

    loading.value = true
    try {
      const API_URL = import.meta.env.VITE_API_URL
      const res = await axios.get(`${API_URL}/incidencias/tipos-transaccion`, {
        params: {
          aplicacion_id: aplicacionId,
          transaccion_id: transaccionId,
        },
      })
      options.value = res.data.data.map((item) => ({
        id: item.id,
        nombre: item.nombre,
      }))
    } catch (err) {
      error.value = err
      console.error('❌ Error cargando tipos de transacción:', err)
    } finally {
      loading.value = false
    }
  }

  watch(
    [aplicacionIdRef, transaccionIdRef],
    ([newAppId, newTransId]) => {
      fetchOptions(newAppId, newTransId)
    },
    { immediate: true },
  )

  return {
    options,
    loading,
    error,
  }
}
