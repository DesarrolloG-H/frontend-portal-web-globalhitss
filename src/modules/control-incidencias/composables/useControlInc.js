// composables/useControlInc.js
import { ref } from 'vue'

export function useDatabaseList() {
  const list = ref([])

  const agregar = (item) => {
    if (!item || Object.keys(item).length === 0) return

    const exists = list.value.some((x) =>
      Object.entries(item).every(([key, value]) => x[key] === value),
    )

    if (!exists) {
      list.value.push({ ...item })
    }
  }

  const eliminar = (item) => {
    list.value = list.value.filter((x) =>
      Object.entries(item).some(([key, value]) => x[key] !== value),
    )
  }

  return {
    list,
    agregar,
    eliminar,
  }
}
